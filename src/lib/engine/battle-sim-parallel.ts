import type { ChampionsPokemon, CommonSet } from "@/lib/types";
import {
  runTeamTestSimulation,
  scorePokemonForBring,
  simulateBattleWithLog,
  type TeamTestDetailedResult,
  type LeadComboResult,
} from "./battle-sim";

type SimResult = {
  wins: number;
  losses: number;
  winRate: number;
  avgTurns: number;
  avgRemaining: number;
};

interface WorkerRequest {
  team1Pokemon: ChampionsPokemon[];
  team1Sets: CommonSet[];
  team2Pokemon: ChampionsPokemon[];
  team2Sets: CommonSet[];
  iterations: number;
}

let _pool: WorkerPool | null = null;

function getOrCreatePool(): WorkerPool {
  if (!_pool) {
    const size = Math.max(1, Math.min((navigator.hardwareConcurrency ?? 4) - 1, 8));
    _pool = new WorkerPool(size, () =>
      new Worker(new URL("../../workers/battle-sim.worker.ts", import.meta.url))
    );
  }
  return _pool;
}

export function prewarmBattleWorkers(): void {
  if (typeof window === "undefined" || typeof Worker === "undefined") return;
  getOrCreatePool();
}

export function terminateBattleWorkers(): void {
  _pool?.terminate();
  _pool = null;
}

class WorkerPool {
  private pool: Worker[];
  private available: Worker[];
  private waiting: Array<(w: Worker) => void> = [];

  constructor(size: number, factory: () => Worker) {
    this.pool = Array.from({ length: size }, factory);
    this.available = [...this.pool];
  }

  private acquire(): Promise<Worker> {
    if (this.available.length > 0) {
      return Promise.resolve(this.available.pop()!);
    }
    return new Promise((resolve) => this.waiting.push(resolve));
  }

  private release(worker: Worker): void {
    const next = this.waiting.shift();
    if (next) next(worker);
    else this.available.push(worker);
  }

  run(params: WorkerRequest): Promise<SimResult> {
    return this.acquire().then(
      (worker) =>
        new Promise<SimResult>((resolve, reject) => {
          worker.onmessage = (e: MessageEvent<SimResult>) => {
            this.release(worker);
            resolve(e.data);
          };
          worker.onerror = (err) => {
            this.release(worker);
            reject(err);
          };
          worker.postMessage(params);
        })
    );
  }

  terminate(): void {
    this.pool.forEach((w) => w.terminate());
  }
}

export async function runTeamTestSimulationParallel(
  team1Pokemon: ChampionsPokemon[],
  team1Sets: CommonSet[],
  team2Pokemon: ChampionsPokemon[],
  team2Sets: CommonSet[],
  iterations: number,
  onProgress?: (pct: number) => void
): Promise<TeamTestDetailedResult> {
  if (typeof window === "undefined" || typeof Worker === "undefined") {
    return runTeamTestSimulation(
      team1Pokemon, team1Sets, team2Pokemon, team2Sets, iterations, onProgress
    );
  }

  const pool = getOrCreatePool();

  try {

  onProgress?.(0);

  const leadCombos: LeadComboResult[] = [];
  let totalWins = 0;
  let totalGames = 0;
  let totalTurns = 0;

  // ── Phase 1: Lead Combo Analysis — parallel (0-65%) ─────────────────────
  if (team1Pokemon.length >= 4) {
    const bringScores = scorePokemonForBring(team1Pokemon, team1Sets, team2Pokemon);
    const pairs: [number, number][] = [];
    for (let i = 0; i < team1Pokemon.length; i++) {
      for (let j = i + 1; j < team1Pokemon.length; j++) {
        pairs.push([i, j]);
      }
    }

    const pass1Trials = Math.max(100, Math.round((iterations * 1.5) / pairs.length));

    // Pass 1: all lead combos in parallel
    let p1Done = 0;
    const phase1 = await Promise.all(
      pairs.map(([i, j]) => {
        const remaining = bringScores
          .filter((s) => s.idx !== i && s.idx !== j)
          .sort((a, b) => b.score - a.score)
          .slice(0, 2);
        const forcedTeam = [team1Pokemon[i], team1Pokemon[j], ...remaining.map((r) => team1Pokemon[r.idx])];
        const forcedSets = [team1Sets[i], team1Sets[j], ...remaining.map((r) => team1Sets[r.idx])];
        return pool
          .run({ team1Pokemon: forcedTeam, team1Sets: forcedSets, team2Pokemon, team2Sets, iterations: pass1Trials })
          .then((res) => {
            onProgress?.(Math.round((++p1Done / pairs.length) * 50));
            return { i, j, remaining, res };
          });
      })
    );

    for (const { i, j, remaining, res } of phase1) {
      totalWins += res.wins;
      totalGames += pass1Trials;
      totalTurns += res.avgTurns * pass1Trials;
      leadCombos.push({
        lead1: team1Pokemon[i].name,
        lead2: team1Pokemon[j].name,
        lead1Sprite: team1Pokemon[i].sprite,
        lead2Sprite: team1Pokemon[j].sprite,
        back1: remaining[0] ? team1Pokemon[remaining[0].idx].name : undefined,
        back2: remaining[1] ? team1Pokemon[remaining[1].idx].name : undefined,
        back1Sprite: remaining[0] ? team1Pokemon[remaining[0].idx].sprite : undefined,
        back2Sprite: remaining[1] ? team1Pokemon[remaining[1].idx].sprite : undefined,
        winRate: res.winRate,
        games: pass1Trials,
      });
    }

    // Pass 2: refine top 5 in parallel
    leadCombos.sort((a, b) => b.winRate - a.winRate);
    const refineCount = Math.min(5, leadCombos.length);
    const pass2Trials = Math.max(100, pass1Trials);

    const refineInputs = leadCombos
      .slice(0, refineCount)
      .map((combo, r) => {
        const i = team1Pokemon.findIndex((p) => p.name === combo.lead1);
        const j = team1Pokemon.findIndex((p) => p.name === combo.lead2);
        if (i < 0 || j < 0) return null;
        const remaining = bringScores
          .filter((s) => s.idx !== i && s.idx !== j)
          .sort((a, b) => b.score - a.score)
          .slice(0, 2);
        const forcedTeam = [team1Pokemon[i], team1Pokemon[j], ...remaining.map((rr) => team1Pokemon[rr.idx])];
        const forcedSets = [team1Sets[i], team1Sets[j], ...remaining.map((rr) => team1Sets[rr.idx])];
        return { r, remaining, forcedTeam, forcedSets };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);

    const phase2 = await Promise.all(
      refineInputs.map(({ r, remaining, forcedTeam, forcedSets }) =>
        pool
          .run({ team1Pokemon: forcedTeam, team1Sets: forcedSets, team2Pokemon, team2Sets, iterations: pass2Trials })
          .then((res) => ({ r, remaining, res }))
      )
    );
    onProgress?.(65);

    for (const { r, remaining, res } of phase2) {
      const combo = leadCombos[r];
      const oldWins = Math.round((combo.winRate / 100) * combo.games);
      const mergedGames = combo.games + pass2Trials;
      const mergedWins = oldWins + res.wins;
      combo.winRate = Math.round((mergedWins / mergedGames) * 1000) / 10;
      combo.games = mergedGames;
      combo.back1 = remaining[0] ? team1Pokemon[remaining[0].idx].name : undefined;
      combo.back2 = remaining[1] ? team1Pokemon[remaining[1].idx].name : undefined;
      combo.back1Sprite = remaining[0] ? team1Pokemon[remaining[0].idx].sprite : undefined;
      combo.back2Sprite = remaining[1] ? team1Pokemon[remaining[1].idx].sprite : undefined;
    }
    leadCombos.sort((a, b) => b.winRate - a.winRate);
  } else {
    const res = await pool.run({
      team1Pokemon, team1Sets, team2Pokemon, team2Sets,
      iterations: Math.max(200, iterations),
    });
    totalWins = res.wins;
    totalGames = Math.max(200, iterations);
    totalTurns = res.avgTurns * totalGames;
    onProgress?.(65);
  }

  const overallWinRate =
    leadCombos.length > 0
      ? leadCombos[0].winRate
      : totalGames > 0
      ? Math.round((totalWins / totalGames) * 1000) / 10
      : 0;
  const overallAvgTurns = totalGames > 0 ? Math.round((totalTurns / totalGames) * 10) / 10 : 0;

  // ── Phase 2: Sample battle (65-70%) — single battle, fast on main thread ─
  let replayIndices: number[] | undefined;
  if (leadCombos.length > 0 && team1Pokemon.length >= 4) {
    const best = leadCombos[0];
    const i = team1Pokemon.findIndex((p) => p.name === best.lead1);
    const j = team1Pokemon.findIndex((p) => p.name === best.lead2);
    if (i >= 0 && j >= 0) {
      const replayBringScores = scorePokemonForBring(team1Pokemon, team1Sets, team2Pokemon);
      const remaining = replayBringScores
        .filter((s) => s.idx !== i && s.idx !== j)
        .sort((a, b) => b.score - a.score)
        .slice(0, 2);
      replayIndices = [i, j, ...remaining.map((r) => r.idx)];
    }
  }
  const sampleBattle = simulateBattleWithLog(team1Pokemon, team1Sets, team2Pokemon, team2Sets, replayIndices);
  onProgress?.(70);

  // ── Phase 3: Per-Pokemon impact — parallel (70-90%) ─────────────────────
  const pokemonImpact: Array<{ name: string; sprite: string; excludeWinRate: number; impact: number }> = [];
  if (team1Pokemon.length > 4) {
    const trialsPerExclude = Math.max(150, iterations);

    const exclusionInputs = team1Pokemon.map((_, i) => {
      const excludedName = team1Pokemon[i].name;
      const withoutTeam = team1Pokemon.filter((_, idx) => idx !== i);
      const withoutSets = team1Sets.filter((_, idx) => idx !== i);
      const bestAvail = leadCombos.find((c) => c.lead1 !== excludedName && c.lead2 !== excludedName);
      const li = bestAvail ? withoutTeam.findIndex((p) => p.name === bestAvail.lead1) : -1;
      const lj = bestAvail ? withoutTeam.findIndex((p) => p.name === bestAvail.lead2) : -1;

      let forcedTeam: ChampionsPokemon[];
      let forcedSets: CommonSet[];

      if (bestAvail && li >= 0 && lj >= 0 && withoutTeam.length >= 4) {
        const backs = scorePokemonForBring(withoutTeam, withoutSets, team2Pokemon)
          .filter((s) => s.idx !== li && s.idx !== lj)
          .sort((a, b) => b.score - a.score)
          .slice(0, 2);
        forcedTeam = [withoutTeam[li], withoutTeam[lj], ...backs.map((b) => withoutTeam[b.idx])];
        forcedSets = [withoutSets[li], withoutSets[lj], ...backs.map((b) => withoutSets[b.idx])];
      } else {
        forcedTeam = withoutTeam;
        forcedSets = withoutSets;
      }

      return { i, excludedName, forcedTeam, forcedSets };
    });

    let p3Done = 0;
    const phase3 = await Promise.all(
      exclusionInputs.map(({ i, excludedName, forcedTeam, forcedSets }) =>
        pool
          .run({ team1Pokemon: forcedTeam, team1Sets: forcedSets, team2Pokemon, team2Sets, iterations: trialsPerExclude })
          .then((res) => {
            onProgress?.(70 + Math.round((++p3Done / team1Pokemon.length) * 20));
            return { i, excludedName, excludeWinRate: res.winRate };
          })
      )
    );

    phase3.sort((a, b) => a.i - b.i);
    for (const { i, excludedName, excludeWinRate } of phase3) {
      pokemonImpact.push({
        name: excludedName,
        sprite: team1Pokemon[i].sprite,
        excludeWinRate,
        impact: Math.round((overallWinRate - excludeWinRate) * 10) / 10,
      });
    }
    pokemonImpact.sort((a, b) => b.impact - a.impact);

    // Update back pokemon for lead combos using impact data
    for (const combo of leadCombos) {
      const backs = pokemonImpact
        .filter((pi) => pi.name !== combo.lead1 && pi.name !== combo.lead2)
        .slice(0, 2);
      combo.back1 = backs[0]?.name;
      combo.back1Sprite = backs[0]?.sprite;
      combo.back2 = backs[1]?.name;
      combo.back2Sprite = backs[1]?.sprite;
    }

    // Phase 3.5: retest top 3 with impact-backed brings — parallel (90-95%)
    const reTestTrials = Math.max(100, Math.round(iterations * 0.3));
    const retestInputs = leadCombos
      .slice(0, Math.min(3, leadCombos.length))
      .map((combo, r) => {
        const ci = team1Pokemon.findIndex((p) => p.name === combo.lead1);
        const cj = team1Pokemon.findIndex((p) => p.name === combo.lead2);
        const cb1 = combo.back1 ? team1Pokemon.findIndex((p) => p.name === combo.back1) : -1;
        const cb2 = combo.back2 ? team1Pokemon.findIndex((p) => p.name === combo.back2) : -1;
        if (ci < 0 || cj < 0 || cb1 < 0 || cb2 < 0) return null;
        const reTestTeam = [team1Pokemon[ci], team1Pokemon[cj], team1Pokemon[cb1], team1Pokemon[cb2]];
        const reTestSets = [team1Sets[ci], team1Sets[cj], team1Sets[cb1], team1Sets[cb2]];
        return { r, reTestTeam, reTestSets };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);

    const phase35 = await Promise.all(
      retestInputs.map(({ r, reTestTeam, reTestSets }) =>
        pool
          .run({ team1Pokemon: reTestTeam, team1Sets: reTestSets, team2Pokemon, team2Sets, iterations: reTestTrials })
          .then((res) => ({ r, res }))
      )
    );

    for (const { r, res } of phase35) {
      leadCombos[r].winRate = res.winRate;
      leadCombos[r].games = reTestTrials;
    }
    leadCombos.sort((a, b) => b.winRate - a.winRate);
  }
  onProgress?.(95);

  // ── Phase 4: Generate insights (95-100%) ─────────────────────────────────
  const insights: string[] = [];
  if (leadCombos.length > 0) {
    const best = leadCombos[0];
    insights.push(`Best leads: ${best.lead1} + ${best.lead2} (${best.winRate}% win rate over ${best.games} battles)`);
    if (leadCombos.length > 1) {
      const worst = leadCombos[leadCombos.length - 1];
      if (worst.winRate < overallWinRate - 10) {
        insights.push(`Avoid leading ${worst.lead1} + ${worst.lead2} (only ${worst.winRate}%)`);
      }
    }
    const topAvg = leadCombos.slice(0, 3).reduce((a, c) => a + c.winRate, 0) / Math.min(3, leadCombos.length);
    const bottomAvg = leadCombos.slice(-3).reduce((a, c) => a + c.winRate, 0) / Math.min(3, leadCombos.length);
    if (topAvg - bottomAvg > 15) {
      insights.push(`Lead choice matters a lot here  -  ${Math.round(topAvg - bottomAvg)}% gap between best and worst`);
    }
  }
  if (pokemonImpact.length > 0) {
    const mvp = pokemonImpact[0];
    if (mvp.impact > 0) {
      insights.push(`${mvp.name} is your MVP for this matchup (+${mvp.impact}% win rate when brought)`);
    }
    const weakest = pokemonImpact[pokemonImpact.length - 1];
    if (weakest.impact < -2) {
      insights.push(`Consider leaving ${weakest.name} in the back vs this team (${weakest.impact}% impact)`);
    }
  }
  const hasFakeOut = team1Sets.some((s) => s.moves.includes("Fake Out"));
  const hasSpeedControl = team1Sets.some(
    (s) => s.moves.includes("Tailwind") || s.moves.includes("Trick Room")
  );
  if (hasFakeOut && hasSpeedControl) {
    insights.push("Lead with Fake Out + Speed Control for maximum turn 1 pressure");
  } else if (hasFakeOut) {
    insights.push("Lead with Fake Out user to disrupt the opponent's setup");
  } else if (hasSpeedControl) {
    insights.push("Prioritize setting up speed control on turn 1");
  }
  if (overallWinRate >= 60) {
    insights.push("Strong matchup  -  focus on consistent play and don't overextend");
  } else if (overallWinRate <= 40) {
    insights.push("Tough matchup  -  look for surprise leads or alternate game plans");
  }
  onProgress?.(100);

  const displayGames = Math.max(totalGames, iterations);
  const displayWins = Math.round((overallWinRate / 100) * displayGames);
  return {
    wins: displayWins,
    losses: displayGames - displayWins,
    winRate: overallWinRate,
    avgTurns: overallAvgTurns,
    totalGames: displayGames,
    sampleBattle,
    leadCombos,
    pokemonImpact,
    insights,
  };
  } catch {
    // Worker failed (e.g. MIME type error in dev) — reset pool and fall back to sync
    _pool?.terminate();
    _pool = null;
    return runTeamTestSimulation(
      team1Pokemon, team1Sets, team2Pokemon, team2Sets, iterations, onProgress
    );
  }
}
