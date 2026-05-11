// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - VGC STRATEGY TREE GENERATOR
// Produces a multi-turn branching decision tree for team vs team matchups
// Analyzes speed tiers, move roles, type matchups, abilities, field states
// ═══════════════════════════════════════════════════════════════════════════════

import type { ChampionsPokemon, CommonSet, PokemonType, BaseStats } from "@/lib/types";
import { getMatchup } from "./type-chart";
import { calculateStats, getEffectiveSpeed } from "./stat-calc";
import { getMove, getMoveRole, isSpreadMove, type EngineMove } from "./move-data";
import { getAbilityEffect } from "./ability-data";
import { identifyRoles, detectArchetypes } from "./synergy";
import { calculateDamage, type DamageResult } from "./damage-calc";
import type { NatureName } from "./natures";
import type { LeadComboResult } from "./battle-sim";
import { getTopMovesForPokemon, type MetaMoveEntry } from "@/lib/usage-data";

// ── TREE NODE TYPES ─────────────────────────────────────────────────────────

export type StrategyNodeType =
  | "start"           // Root: your lead pair
  | "opponent-lead"   // What opponent likely leads
  | "action"          // Move action for your Pokémon
  | "decision"        // Y/N branch (did something succeed?)
  | "field-state"     // Weather/Terrain/Trick Room state
  | "outcome"         // Result description
  | "switch"          // Switch recommendation
  | "turn-label";     // Turn separator

export interface StrategyNode {
  id: string;
  type: StrategyNodeType;
  label: string;              // Primary text
  detail?: string;            // Secondary text / tooltip
  pokemon?: string[];         // Pokémon names involved
  sprites?: string[];         // Sprite URLs for display
  moveType?: PokemonType;     // For color coding move nodes
  severity?: "good" | "neutral" | "bad";  // Color hint
  fieldState?: {
    weather?: string;
    terrain?: string;
    trickRoom?: boolean;
    tailwind?: boolean;
    turnsLeft?: number;
  };
  children: StrategyNode[];   // Branches from this node
  branchLabel?: string;       // Label on the edge TO this node (e.g. "YES", "NO", "If opponent...")
}

export interface StrategyTree {
  root: StrategyNode;
  archetype: string;
  winCondition: string;
  keyThreats: string[];       // Opponent Pokémon that threaten your lead
  backupPlan: string;         // What to do if the primary plan fails
}

// ── HELPERS ─────────────────────────────────────────────────────────────────

function isMegaStoneItem(item: string): boolean {
  return item.endsWith("ite") || item.endsWith("ite X") || item.endsWith("ite Y") || item.endsWith("ite Z");
}

/**
 * Returns true if the Pokémon is immune to Normal-type Fake Out.
 * Ghost-type Pokémon are immune to all Normal-type moves.
 */
function isFakeOutImmune(pokemon: ChampionsPokemon): boolean {
  return pokemon.types.includes("ghost");
}

function resolveBaseAbility(pokemon: ChampionsPokemon, set: CommonSet): string {
  if (!pokemon.hasMega || !pokemon.forms || !isMegaStoneItem(set.item)) {
    return set.ability;
  }
  let megaForm = pokemon.forms.find(f => f.isMega);
  if (set.item.endsWith("ite X")) {
    megaForm = pokemon.forms.find(f => f.isMega && f.name.endsWith(" X")) ?? megaForm;
  } else if (set.item.endsWith("ite Y")) {
    megaForm = pokemon.forms.find(f => f.isMega && f.name.endsWith(" Y")) ?? megaForm;
  } else if (set.item.endsWith("ite Z")) {
    megaForm = pokemon.forms.find(f => f.isMega && f.name.endsWith(" Z")) ?? megaForm;
  }
  if (!megaForm) {
    return set.ability;
  }
  const isMegaAbility = megaForm.abilities.some(a => a.name === set.ability);
  if (isMegaAbility) {
    return set.preMegaAbility ?? pokemon.abilities[0]?.name ?? set.ability;
  }
  return set.ability;
}

/** Abilities that grant +1 priority to status moves (like Prankster) */
const PRANKSTER_ABILITIES = new Set(["Prankster", "Elder Wisdom"]);

interface AnalyzedMon {
  pokemon: ChampionsPokemon;
  set: CommonSet;
  stats: ReturnType<typeof calculateStats>;
  speed: number;
  roles: ReturnType<typeof identifyRoles>;
  moves: { name: string; data: EngineMove | undefined; role: string }[];
  hasFakeOut: boolean;
  hasProtect: boolean;
  hasTailwind: boolean;
  hasTrickRoom: boolean;
  hasRedirection: boolean;
  hasSetup: boolean;
  hasPriority: boolean;          // has any offensive priority move
  hasSpeedControl: boolean;
  weatherOnEntry?: string;
  terrainOnEntry?: string;
  weatherOnMega?: string;
  terrainOnMega?: string;
  isIntimidateUser: boolean;
  blocksPriority: boolean;       // Armor Tail / Queenly Majesty / Dazzling
  hasPrankster: boolean;         // status moves gain +1 priority
  pranksterMoves: string[];      // status move names boosted by Prankster
  /** Condition under which this ability doubles speed (e.g. "rain" for Swift Swim). */
  weatherSpeedAbility?: "sun" | "rain" | "sand" | "snow";
  /** Condition under which this ability doubles speed on terrain (e.g. "electric" for Surge Surfer). */
  terrainSpeedAbility?: "electric" | "grassy" | "misty" | "psychic";
  /** True if holding Choice Scarf (base ×1.5 speed). */
  hasChoiceScarf: boolean;
  /** The single highest-effective-priority move this mon has (priority > 0 after ability). */
  highestPriorityMove: { name: string; priority: number; category: string } | null;
}

function analyzeMon(pokemon: ChampionsPokemon, set: CommonSet): AnalyzedMon {
  const stats = calculateStats(pokemon.baseStats, set.sp, set.nature as NatureName);
  const speed = stats.speed;
  const roles = identifyRoles(pokemon);
  const moves = set.moves.map(m => {
    const data = getMove(m);
    return { name: m, data, role: data ? getMoveRole(data) : "utility" };
  });

  const baseAbility = resolveBaseAbility(pokemon, set);
  const baseAbilityEffect = getAbilityEffect(baseAbility);
  const megaAbilityEffect = baseAbility !== set.ability ? getAbilityEffect(set.ability) : null;

  return {
    pokemon,
    set,
    stats,
    speed,
    roles,
    moves,
    hasFakeOut: set.moves.includes("Fake Out"),
    hasProtect: moves.some(m => m.role === "protection"),
    hasTailwind: set.moves.includes("Tailwind"),
    hasTrickRoom: set.moves.includes("Trick Room"),
    hasRedirection: moves.some(m => m.role === "redirection"),
    hasSetup: moves.some(m => m.role === "setup"),
    hasPriority: moves.some(m => m.data && m.data.priority > 0 && m.data.category !== "status"),
    hasSpeedControl: set.moves.includes("Tailwind") || set.moves.includes("Trick Room") ||
      set.moves.includes("Icy Wind") || set.moves.includes("Electroweb") || set.moves.includes("Thunder Wave"),
    weatherOnEntry: baseAbilityEffect?.setsWeather ?? undefined,
    terrainOnEntry: baseAbilityEffect?.setsTerrain ?? undefined,
    weatherOnMega: megaAbilityEffect?.setsWeather ?? undefined,
    terrainOnMega: megaAbilityEffect?.setsTerrain ?? undefined,
    isIntimidateUser: baseAbility === "Intimidate",
    blocksPriority: ["Armor Tail", "Queenly Majesty", "Dazzling"].includes(baseAbility),
    weatherSpeedAbility: baseAbilityEffect?.weatherSpeed ?? megaAbilityEffect?.weatherSpeed,
    terrainSpeedAbility: baseAbilityEffect?.terrainSpeed ?? megaAbilityEffect?.terrainSpeed,
    hasChoiceScarf: set.item === "Choice Scarf",
    // Prankster-like: status moves gain +1 effective priority
    hasPrankster: PRANKSTER_ABILITIES.has(baseAbility) || PRANKSTER_ABILITIES.has(set.ability),
    pranksterMoves: (PRANKSTER_ABILITIES.has(baseAbility) || PRANKSTER_ABILITIES.has(set.ability))
      ? moves.filter(m => m.data?.category === "status").map(m => m.name)
      : [],
    // Highest-priority move (effective priority after ability boosts)
    highestPriorityMove: (() => {
      const isPrankster = PRANKSTER_ABILITIES.has(baseAbility) || PRANKSTER_ABILITIES.has(set.ability);
      let best: { name: string; priority: number; category: string } | null = null;
      for (const m of moves) {
        if (!m.data) continue;
        // Prankster adds +1 to status moves; Protect/redirection priority is not offensive
        if (m.role === "protection" || m.role === "redirection") continue;
        const effective = m.data.category === "status" && isPrankster
          ? m.data.priority + 1
          : m.data.priority;
        if (effective > 0 && (!best || effective > best.priority)) {
          best = { name: m.name, priority: effective, category: m.data.category };
        }
      }
      return best;
    })(),
  };
}

// ── DAMAGE CALC HELPERS ──────────────────────────────────────────────────────

/** Build a DamageCalcPokemon from an AnalyzedMon for use with calculateDamage() */
function toCalcPokemon(mon: AnalyzedMon): import("./damage-calc").DamageCalcPokemon {
  return {
    baseStats: mon.pokemon.baseStats,
    sp: mon.set.sp,
    nature: mon.set.nature as NatureName,
    types: mon.pokemon.types,
    ability: mon.set.ability,
    item: mon.set.item,
    cachedStats: mon.stats,
  };
}

/** Build a DamageCalcTarget from an AnalyzedMon */
function toCalcTarget(mon: AnalyzedMon): import("./damage-calc").DamageCalcTarget {
  return {
    baseStats: mon.pokemon.baseStats,
    sp: mon.set.sp,
    nature: mon.set.nature as NatureName,
    types: mon.pokemon.types,
    ability: mon.set.ability,
    item: mon.set.item,
    cachedStats: mon.stats,
  };
}

/** Attack result with damage info, used throughout the tree */
interface AttackResult {
  name: string;
  data: EngineMove;
  effectiveness: number;
  role: string;
  /** min–max % of target's max HP */
  percentHP: [number, number];
  isOHKO: boolean;
  is2HKO: boolean;
  /** Short label like "OHKO", "2HKO", "68–82%", "NVE" */
  damageLabel: string;
}

/** Build a short damage label from percentHP / KO flags */
function makeDamageLabel(r: { percentHP: [number, number]; isOHKO: boolean; is2HKO: boolean; effectiveness: number }): string {
  if (r.effectiveness === 0) return "Immune";
  if (r.isOHKO) return "⚡ OHKO";
  if (r.is2HKO) return "2HKO";
  const lo = Math.round(r.percentHP[0]);
  const hi = Math.round(r.percentHP[1]);
  if (lo === hi) return `${lo}%`;
  return `${lo}–${hi}%`;
}

/** Find the best attacking move from a Pokémon against a target, using real damage calc */
function getBestAttack(
  attacker: AnalyzedMon,
  target: AnalyzedMon,
  weather?: string,
): AttackResult | null {
  let best: AttackResult | null = null;
  let bestScore = -Infinity;

  const atk = toCalcPokemon(attacker);
  const def = toCalcTarget(target);
  const opts: import("./damage-calc").DamageCalcOptions = {
    isDoubles: true,
    simMode: true,
    weather: (weather as import("./damage-calc").DamageCalcOptions["weather"]) ?? undefined,
  };

  for (const m of attacker.moves) {
    if (!m.data || m.data.category === "status") continue;
    if (m.role === "protection") continue;

    const result = calculateDamage(atk, def, m.name, opts);
    if (result.effectiveness === 0) continue;

    // Score: prioritise OHKO > 2HKO > damage %, weighted by BP for tiebreaks
    let score = result.percentHP[1]; // max damage %
    if (result.isOHKO) score += 200;
    else if (result.is2HKO) score += 80;
    if (isSpreadMove(m.data)) score *= 0.85; // spread penalty (already factored internally)

    if (score > bestScore) {
      bestScore = score;
      best = {
        name: m.name,
        data: m.data,
        effectiveness: result.effectiveness,
        role: m.role,
        percentHP: result.percentHP,
        isOHKO: result.isOHKO,
        is2HKO: result.is2HKO,
        damageLabel: makeDamageLabel(result),
      };
    }
  }
  return best;
}

/** Compute a threat score for an opponent against our lead */
function threatScore(opp: AnalyzedMon, lead: AnalyzedMon): number {
  let score = 0;
  // Check if any of opponent's attacking moves are super effective
  for (const m of opp.moves) {
    if (!m.data || m.data.category === "status") continue;
    const eff = getMatchup(m.data.type, lead.pokemon.types);
    const stab = opp.pokemon.types.includes(m.data.type) ? 1.5 : 1;
    score += m.data.basePower * eff * stab;
  }
  // Speed advantage is threatening
  if (opp.speed > lead.speed) score *= 1.3;
  return score;
}

/**
 * Per-mon speed matrix: for each of our leads vs each opp lead, who moves first.
 * Also produces priority-interaction notes (Prankster, Fake Out, priority moves).
 */
function buildSpeedMatrix(
  lead1: AnalyzedMon,
  lead2: AnalyzedMon,
  opp1: AnalyzedMon,
  opp2: AnalyzedMon,
): { summary: string; matchups: string[]; priorityNotes: string[] } {
  // ── Speed-only matchups ────────────────────────────────────────────────────
  const pairs: Array<[AnalyzedMon, AnalyzedMon]> = [
    [lead1, opp1], [lead1, opp2],
    [lead2, opp1], [lead2, opp2],
  ];
  const matchups: string[] = [];
  for (const [mine, opp] of pairs) {
    if (mine.speed > opp.speed)
      matchups.push(`${mine.pokemon.name} (${mine.speed}) > ${opp.pokemon.name} (${opp.speed}) ✓`);
    else if (mine.speed < opp.speed)
      matchups.push(`${mine.pokemon.name} (${mine.speed}) < ${opp.pokemon.name} (${opp.speed}) ✗`);
    else
      matchups.push(`${mine.pokemon.name} (${mine.speed}) = ${opp.pokemon.name} (${opp.speed}) tie`);
  }
  const ourWins = matchups.filter(m => m.includes("✓")).length;
  const summary = ourWins >= 3 ? "Speed advantage" : ourWins >= 2 ? "Even speed" : "Outsped";

  // ── Priority interaction notes ────────────────────────────────────────────
  const priorityNotes: string[] = [];
  const myLeads = [lead1, lead2];
  const oppLeads = [opp1, opp2];

  // --- Opponent priority moves ---
  for (const opp of oppLeads) {
    // Fake Out specifically (most impactful: +3 priority, turn 1 only)
    if (opp.hasFakeOut) {
      const blocker = myLeads.find(l => l.blocksPriority);
      const ourFO = myLeads.find(l => l.hasFakeOut);
      const foVulnerable = myLeads.filter(l => !isFakeOutImmune(l.pokemon));
      const foImmune    = myLeads.filter(l =>  isFakeOutImmune(l.pokemon));

      if (foVulnerable.length === 0) {
        // All our leads are Ghost-type — Fake Out has no valid targets
        priorityNotes.push(
          `✓ ${opp.pokemon.name} Fake Out (+3) — no valid targets: ${myLeads.map(l => l.pokemon.name).join(" & ")} immune (Ghost type)`
        );
      } else if (blocker) {
        const immuneNote = foImmune.length > 0 ? ` · ${foImmune.map(l => l.pokemon.name).join("/")} also immune (Ghost)` : "";
        priorityNotes.push(
          `✓ ${opp.pokemon.name} Fake Out (+3) blocked by ${blocker.pokemon.name} (${blocker.set.ability})${immuneNote}`
        );
      } else if (ourFO && ourFO.speed >= opp.speed) {
        const immuneNote = foImmune.length > 0 ? ` · ${foImmune.map(l => l.pokemon.name).join("/")} also immune (Ghost)` : "";
        priorityNotes.push(
          `✓ ${opp.pokemon.name} Fake Out (+3) — your ${ourFO.pokemon.name} Fake Out trades or wins speed tie${immuneNote}`
        );
      } else {
        // There are vulnerable targets
        const targets = foVulnerable.map(l => l.pokemon.name).join("/");
        const immuneNote = foImmune.length > 0
          ? ` (${foImmune.map(l => l.pokemon.name).join("/")} safe — Ghost type)`
          : "";
        // Also compute the combined threat: Fake Out flinch + the OTHER opponent attacks the same target
        const oppAttacker = opp === opp1 ? opp2 : opp1;
        const worstVulnerable = foVulnerable.reduce((worst, lead) => {
          const dmg = getBestAttack(oppAttacker, lead, undefined);
          const wDmg = getBestAttack(oppAttacker, worst, undefined);
          return (dmg?.percentHP[1] ?? 0) > (wDmg?.percentHP[1] ?? 0) ? lead : worst;
        }, foVulnerable[0]);
        const followUp = getBestAttack(oppAttacker, worstVulnerable, undefined);
        const comboNote = followUp && (followUp.isOHKO || followUp.is2HKO || followUp.percentHP[1] >= 50)
          ? ` → then ${oppAttacker.pokemon.name}: ${followUp.name} (${followUp.damageLabel}) on flinched ${worstVulnerable.pokemon.name}!`
          : "";
        priorityNotes.push(
          `⚠ ${opp.pokemon.name} Fake Out (+3) goes first regardless of speed — ${targets} vulnerable${immuneNote}${comboNote}`
        );
      }
    } else if (opp.highestPriorityMove && opp.highestPriorityMove.category !== "status") {
      // Other offensive priority (ExtremeSpeed +2, Quick Attack +1, etc.)
      const pm = opp.highestPriorityMove;
      priorityNotes.push(
        `⚠ ${opp.pokemon.name}: ${pm.name} (+${pm.priority}) — priority attack, goes before normal moves`
      );
    }

    // Prankster / Elder Wisdom: status moves jump to +1 priority
    if (opp.hasPrankster && opp.pranksterMoves.length > 0) {
      const immuneLeads = myLeads.filter(l => l.pokemon.types.includes("dark"));
      const vulnerableLeads = myLeads.filter(l => !l.pokemon.types.includes("dark"));
      const blockerAT = myLeads.find(l => l.blocksPriority);

      if (blockerAT) {
        // Armor Tail / Queenly Majesty / Dazzling blocks all priority including Prankster status
        priorityNotes.push(
          `✓ ${opp.pokemon.name} Prankster blocked by ${blockerAT.pokemon.name} (${blockerAT.set.ability})`
        );
      } else if (vulnerableLeads.length === 0) {
        priorityNotes.push(
          `✓ ${opp.pokemon.name} Prankster has no effect — all your leads are Dark type`
        );
      } else {
        const moves2Show = opp.pranksterMoves.slice(0, 3).join(", ");
        const targets = vulnerableLeads.map(l => l.pokemon.name).join(" & ");
        const immuneNote = immuneLeads.length > 0
          ? ` (fails vs ${immuneLeads.map(l => l.pokemon.name).join("/")} — Dark type)`
          : "";
        priorityNotes.push(
          `⚠ ${opp.pokemon.name} Prankster (+1): ${moves2Show} go first vs ${targets}${immuneNote}`
        );
      }
    }
  }

  // --- Our priority moves ---
  for (const lead of myLeads) {
    if (lead.hasFakeOut) {
      const oppFO = oppLeads.find(o => o.hasFakeOut);
      if (oppFO) {
        const speedNote = lead.speed > oppFO.speed
          ? `your ${lead.pokemon.name} is faster — Fake Out wins`
          : lead.speed < oppFO.speed
          ? `${oppFO.pokemon.name} is faster — their Fake Out goes first`
          : "speed tie — 50/50";
        priorityNotes.push(`⚠ Fake Out mirror: ${speedNote}`);
      } else {
        priorityNotes.push(`✓ Your ${lead.pokemon.name} Fake Out (+3) — goes first unconditionally`);
      }
    } else if (lead.highestPriorityMove && lead.highestPriorityMove.category !== "status") {
      const pm = lead.highestPriorityMove;
      const blockedByOpp = oppLeads.find(o => o.blocksPriority);
      if (blockedByOpp) {
        priorityNotes.push(
          `⚠ Your ${lead.pokemon.name} ${pm.name} (+${pm.priority}) blocked by ${blockedByOpp.pokemon.name} (${blockedByOpp.set.ability})`
        );
      } else {
        priorityNotes.push(
          `✓ Your ${lead.pokemon.name}: ${pm.name} (+${pm.priority}) priority available`
        );
      }
    }

    if (lead.hasPrankster && lead.pranksterMoves.length > 0) {
      const blockerOpp = oppLeads.find(o => o.blocksPriority);
      const immuneOpps = oppLeads.filter(o => o.pokemon.types.includes("dark"));
      const moves2Show = lead.pranksterMoves.slice(0, 3).join(", ");
      if (blockerOpp) {
        priorityNotes.push(
          `⚠ Your ${lead.pokemon.name} Prankster blocked by ${blockerOpp.pokemon.name} (${blockerOpp.set.ability})`
        );
      } else if (immuneOpps.length > 0) {
        priorityNotes.push(
          `⚠ Your ${lead.pokemon.name} Prankster fails vs ${immuneOpps.map(o => o.pokemon.name).join("/")} (Dark type)`
        );
      } else {
        priorityNotes.push(
          `✓ Your ${lead.pokemon.name} Prankster (+1): ${moves2Show} go first`
        );
      }
    }
  }

  return { summary, matchups, priorityNotes };
}

/**
 * Predict the most likely switch-in candidate if opp1 or opp2 faints,
 * choosing from the oppBench by best type coverage vs our leads.
 */
function predictSwitchIn(
  oppBench: AnalyzedMon[],
  myLead1: AnalyzedMon,
  myLead2: AnalyzedMon,
): AnalyzedMon | null {
  if (oppBench.length === 0) return null;
  let best = oppBench[0];
  let bestScore = -Infinity;
  for (const candidate of oppBench) {
    let score = 0;
    // Type advantage vs our leads
    for (const type of candidate.pokemon.types) {
      score += getMatchup(type, myLead1.pokemon.types) * 15;
      score += getMatchup(type, myLead2.pokemon.types) * 15;
    }
    // Prefer support roles that synergise well on switch
    if (candidate.hasFakeOut) score += 20;
    if (candidate.isIntimidateUser) score += 15;
    if (candidate.hasTailwind || candidate.hasTrickRoom) score += 10;
    // Higher bulk = better switch-in
    score += candidate.stats.hp * 0.05;
    if (score > bestScore) { bestScore = score; best = candidate; }
  }
  return best;
}

/** Identify most likely opponent leads based on their team roles */
function predictOpponentLeads(
  oppTeam: AnalyzedMon[],
  myLead1: AnalyzedMon,
  myLead2: AnalyzedMon,
): [AnalyzedMon, AnalyzedMon][] {
  // Score each opponent Pokémon as a lead candidate
  const leadScores = oppTeam.map((opp, i) => {
    let score = 0;
    // Support mons lead often
    if (opp.hasFakeOut) score += 30;
    if (opp.hasRedirection) score += 25;
    if (opp.hasTailwind || opp.hasTrickRoom) score += 25;
    if (opp.isIntimidateUser) score += 20;
    if (opp.weatherOnEntry || opp.weatherOnMega || opp.terrainOnEntry || opp.terrainOnMega) score += 25;
    // High threat vs our leads
    score += threatScore(opp, myLead1) * 0.05;
    score += threatScore(opp, myLead2) * 0.05;
    // Lead role
    if (opp.roles.roles.includes("lead")) score += 15;
    if (opp.roles.roles.includes("support")) score += 10;
    // Fast Pokémon tend to lead
    if (opp.speed >= 100) score += 10;
    return { idx: i, score };
  });

  leadScores.sort((a, b) => b.score - a.score);

  // Generate top 2-3 likely opponent lead pairs
  const pairs: [AnalyzedMon, AnalyzedMon][] = [];
  const topN = Math.min(4, oppTeam.length);
  for (let i = 0; i < topN; i++) {
    for (let j = i + 1; j < topN; j++) {
      pairs.push([oppTeam[leadScores[i].idx], oppTeam[leadScores[j].idx]]);
    }
  }

  // Score each pair
  const pairScores = pairs.map(([a, b]) => {
    const scoreA = leadScores.find(s => s.idx === oppTeam.indexOf(a))!.score;
    const scoreB = leadScores.find(s => s.idx === oppTeam.indexOf(b))!.score;
    // Bonus for complementary roles (support + attacker)
    const oneSupport = (a.hasFakeOut || a.hasRedirection || a.isIntimidateUser) ||
                       (b.hasFakeOut || b.hasRedirection || b.isIntimidateUser);
    const oneAttacker = a.moves.some(m => m.role === "nuke" || m.role === "spread-damage") ||
                        b.moves.some(m => m.role === "nuke" || m.role === "spread-damage");
    return {
      pair: [a, b] as [AnalyzedMon, AnalyzedMon],
      score: scoreA + scoreB + (oneSupport && oneAttacker ? 15 : 0),
    };
  });

  pairScores.sort((a, b) => b.score - a.score);
  return pairScores.slice(0, 3).map(p => p.pair);
}

/** Determine which opponent to target with Fake Out */
function pickFakeOutTarget(
  fakeOutUser: AnalyzedMon,
  partner: AnalyzedMon,
  opp1: AnalyzedMon,
  opp2: AnalyzedMon,
): { target: AnalyzedMon; reason: string } | null {
  // Fake Out is Normal-type — Ghost-type Pokémon are immune.
  const v1 = !isFakeOutImmune(opp1.pokemon) ? opp1 : null;
  const v2 = !isFakeOutImmune(opp2.pokemon) ? opp2 : null;
  if (!v1 && !v2) return null; // both opponents immune

  // Prioritize: setup users, speed control, redirectors, then biggest threat
  if (v1 && (v1.hasSetup || v1.hasTailwind || v1.hasTrickRoom)) return { target: v1, reason: "block setup" };
  if (v2 && (v2.hasSetup || v2.hasTailwind || v2.hasTrickRoom)) return { target: v2, reason: "block setup" };
  if (v1?.hasRedirection) return { target: v1, reason: "remove redirection" };
  if (v2?.hasRedirection) return { target: v2, reason: "remove redirection" };

  // Flinch the biggest threat to our partner
  const t1 = v1 ? threatScore(v1, partner) : -Infinity;
  const t2 = v2 ? threatScore(v2, partner) : -Infinity;
  if (t1 >= t2 && v1) return { target: v1, reason: "biggest threat" };
  return { target: v2!, reason: "biggest threat" };
}

/** Get the speed tier label */
function speedTierLabel(speed: number): string {
  if (speed >= 150) return "blazing";
  if (speed >= 120) return "fast";
  if (speed >= 90) return "moderate";
  if (speed >= 60) return "slow";
  return "very slow";
}

let nodeCounter = 0;
function nextId(): string {
  return `n${++nodeCounter}`;
}

/** Recursively check if any node in a tree contains a string in its label */
function treeContains(nodes: StrategyNode[], text: string): boolean {
  for (const n of nodes) {
    if (n.label.includes(text)) return true;
    if (n.children.length > 0 && treeContains(n.children, text)) return true;
  }
  return false;
}

// ── MAIN GENERATOR ──────────────────────────────────────────────────────────

export function generateStrategyTree(
  team1Pokemon: ChampionsPokemon[],
  team1Sets: CommonSet[],
  team2Pokemon: ChampionsPokemon[],
  team2Sets: CommonSet[],
  bestLead: LeadComboResult | undefined,
  winRate: number,
  customOppLead?: [string, string],
): StrategyTree | null {
  nodeCounter = 0;

  if (!bestLead || team1Pokemon.length < 2 || team2Pokemon.length < 2) return null;

  // Analyze all Pokémon
  const myTeam = team1Pokemon.map((p, i) => analyzeMon(p, team1Sets[i]));
  const oppTeam = team2Pokemon.map((p, i) => analyzeMon(p, team2Sets[i]));

  // Find our leads
  const lead1 = myTeam.find(m => m.pokemon.name === bestLead.lead1);
  const lead2 = myTeam.find(m => m.pokemon.name === bestLead.lead2);
  if (!lead1 || !lead2) return null;

  // Detect archetypes
  const myArchetypes = detectArchetypes(team1Pokemon);
  const oppArchetypes = detectArchetypes(team2Pokemon);
  const myArchetype = myArchetypes[0]?.archetype ?? "goodstuffs";
  const oppArchetype = oppArchetypes[0]?.archetype ?? "goodstuffs";

  // Determine field state on entry (mega evolution abilities override entry abilities)
  const effectiveWeather = lead1.weatherOnMega || lead2.weatherOnMega || lead1.weatherOnEntry || lead2.weatherOnEntry || null;
  const effectiveTerrain = lead1.terrainOnMega || lead2.terrainOnMega || lead1.terrainOnEntry || lead2.terrainOnEntry || null;

  // Predict opponent leads
  const oppLeadPairs = predictOpponentLeads(oppTeam, lead1, lead2);

  // Identify key threats across opponent team
  const keyThreats = oppTeam
    .map(o => ({
      name: o.pokemon.name,
      threat: threatScore(o, lead1) + threatScore(o, lead2),
    }))
    .sort((a, b) => b.threat - a.threat)
    .slice(0, 3)
    .map(t => t.name);

  // Determine win condition
  const winCondition = determineWinCondition(lead1, lead2, myArchetype, effectiveWeather, effectiveTerrain);

  // Build the tree
  const root = buildRootNode(lead1, lead2, bestLead, winRate);

  // Add opponent lead scenarios as branches
  const scenarioBranches: StrategyNode[] = [];
  const processedPairs = new Set<string>();

  for (let s = 0; s < Math.min(3, oppLeadPairs.length); s++) {
    const [opp1, opp2] = oppLeadPairs[s];
    const pairKey = [opp1.pokemon.name, opp2.pokemon.name].sort().join("+");
    if (processedPairs.has(pairKey)) continue;
    processedPairs.add(pairKey);

    const scenarioNode = buildScenarioBranch(
      lead1, lead2, opp1, opp2, s, myArchetype, effectiveWeather, effectiveTerrain, myTeam, winRate, oppTeam,
    );
    scenarioBranches.push(scenarioNode);
  }

  root.children = scenarioBranches;

  // Optional 4th scenario: custom opponent lead chosen by the user
  if (customOppLead) {
    const [c1name, c2name] = customOppLead;
    const cOpp1 = oppTeam.find(m => m.pokemon.name === c1name);
    const cOpp2 = oppTeam.find(m => m.pokemon.name === c2name);
    if (cOpp1 && cOpp2) {
      const customNode = buildScenarioBranch(
        lead1, lead2, cOpp1, cOpp2, 3, myArchetype, effectiveWeather, effectiveTerrain, myTeam, winRate, oppTeam,
      );
      customNode.detail = "Custom scenario";
      customNode.branchLabel = "Custom";
      root.children = [...scenarioBranches, customNode];
    }
  }
  const backupPlan = generateBackupPlan(lead1, lead2, myTeam, oppTeam, winRate);

  return {
    root,
    archetype: myArchetypes[0]?.description ?? `${myArchetype} team`,
    winCondition,
    keyThreats,
    backupPlan,
  };
}

function buildRootNode(
  lead1: AnalyzedMon,
  lead2: AnalyzedMon,
  bestLead: LeadComboResult,
  winRate: number,
): StrategyNode {
  const fieldNotes: string[] = [];
  if (lead1.weatherOnEntry) fieldNotes.push(`Sets ${lead1.weatherOnEntry}`);
  if (lead2.weatherOnEntry) fieldNotes.push(`Sets ${lead2.weatherOnEntry}`);
  if (lead1.weatherOnMega) fieldNotes.push(`Sets ${lead1.weatherOnMega} (Mega)`);
  if (lead2.weatherOnMega) fieldNotes.push(`Sets ${lead2.weatherOnMega} (Mega)`);
  if (lead1.terrainOnEntry) fieldNotes.push(`Sets ${lead1.terrainOnEntry} terrain`);
  if (lead2.terrainOnEntry) fieldNotes.push(`Sets ${lead2.terrainOnEntry} terrain`);
  if (lead1.terrainOnMega) fieldNotes.push(`Sets ${lead1.terrainOnMega} terrain (Mega)`);
  if (lead2.terrainOnMega) fieldNotes.push(`Sets ${lead2.terrainOnMega} terrain (Mega)`);
  if (lead1.isIntimidateUser || lead2.isIntimidateUser) fieldNotes.push("Intimidate on entry");

  return {
    id: nextId(),
    type: "start",
    label: `Lead: ${lead1.pokemon.name} + ${lead2.pokemon.name}`,
    detail: `${bestLead.winRate}% Win Rate · ${fieldNotes.join(" · ") || "No entry effects"}`,
    pokemon: [lead1.pokemon.name, lead2.pokemon.name],
    sprites: [lead1.pokemon.sprite, lead2.pokemon.sprite],
    severity: winRate >= 55 ? "good" : winRate >= 45 ? "neutral" : "bad",
    children: [],
  };
}

function buildScenarioBranch(
  lead1: AnalyzedMon,
  lead2: AnalyzedMon,
  opp1: AnalyzedMon,
  opp2: AnalyzedMon,
  scenarioIdx: number,
  myArchetype: string,
  myWeather: string | null,
  myTerrain: string | null,
  fullTeam: AnalyzedMon[],
  winRate: number,
  oppFullTeam?: AnalyzedMon[],
): StrategyNode {
  // Effective active weather for damage calc
  const activeWeatherForCalc = myWeather as import("./damage-calc").DamageCalcOptions["weather"] ?? undefined;
  const scenarioNode: StrategyNode = {
    id: nextId(),
    type: "opponent-lead",
    label: `vs ${opp1.pokemon.name} + ${opp2.pokemon.name}`,
    detail: scenarioIdx === 0 ? "Most likely lead" : scenarioIdx === 1 ? "Alternative lead" : "Possible lead",
    pokemon: [opp1.pokemon.name, opp2.pokemon.name],
    sprites: [opp1.pokemon.sprite, opp2.pokemon.sprite],
    branchLabel: scenarioIdx === 0 ? "Scenario 1" : scenarioIdx === 1 ? "Scenario 2" : "Scenario 3",
    severity: "neutral",
    children: [],
  };

  // Determine speed order
  const allLeadSpeeds = [
    { name: lead1.pokemon.name, speed: lead1.speed, mine: true },
    { name: lead2.pokemon.name, speed: lead2.speed, mine: true },
    { name: opp1.pokemon.name, speed: opp1.speed, mine: false },
    { name: opp2.pokemon.name, speed: opp2.speed, mine: false },
  ].sort((a, b) => b.speed - a.speed);

  const weFaster = allLeadSpeeds[0].mine || allLeadSpeeds[1].mine;
  const speedMatrix = buildSpeedMatrix(lead1, lead2, opp1, opp2);

  // ── TURN 1 ───────────────────────────────────────────────────────────

  // Determine Turn 1 severity: bad if opp has uncountered priority threats
  const oppHasUncounteredPriority = speedMatrix.priorityNotes.some(n => n.startsWith("⚠"));
  const turn1Severity: "good" | "neutral" | "bad" =
    weFaster && !oppHasUncounteredPriority ? "good"
    : oppHasUncounteredPriority ? "bad"
    : "neutral";

  // Build detail: speed matchups first, then priority notes
  const speedDetail = `Speed: ${allLeadSpeeds.map(s => `${s.name} (${s.speed})`).join(" > ")}`;
  const priorityDetail = speedMatrix.priorityNotes.length > 0
    ? ` · ${speedMatrix.priorityNotes.join(" · ")}`
    : "";

  const turn1Label: StrategyNode = {
    id: nextId(),
    type: "turn-label",
    label: "Turn 1",
    detail: `${speedDetail}${priorityDetail}`,
    severity: turn1Severity,
    children: [],
  };
  scenarioNode.children.push(turn1Label);

  // Determine field state on entry
  const fieldState: StrategyNode["fieldState"] = {};
  if (myWeather) fieldState.weather = myWeather;
  if (myTerrain) fieldState.terrain = myTerrain;
  const oppEffectiveWeather = opp1.weatherOnMega || opp2.weatherOnMega || opp1.weatherOnEntry || opp2.weatherOnEntry || null;
  const oppTerrain = opp1.terrainOnEntry || opp2.terrainOnEntry;

  // Weather war?
  if (myWeather && oppEffectiveWeather && myWeather !== oppEffectiveWeather) {
    const myHasMega = !!((lead1.weatherOnMega && myWeather === lead1.weatherOnMega) || (lead2.weatherOnMega && myWeather === lead2.weatherOnMega));
    const oppHasMega = !!((opp1.weatherOnMega && oppEffectiveWeather === opp1.weatherOnMega) || (opp2.weatherOnMega && oppEffectiveWeather === opp2.weatherOnMega));

    if (myHasMega && oppHasMega) {
      // Both have mega weather - compare speeds
      const myMegaSetter = lead1.weatherOnMega ? lead1 : lead2;
      const oppMegaSetter = opp1.weatherOnMega ? opp1 : opp2;
      const weWinWeather = myMegaSetter.speed < oppMegaSetter.speed;
      const weatherNode: StrategyNode = {
        id: nextId(),
        type: "field-state",
        label: weWinWeather
          ? `${myWeather.toUpperCase()} persists (${myMegaSetter.pokemon.name} slower → sets last)`
          : `${oppEffectiveWeather.toUpperCase()} overrides (${oppMegaSetter.pokemon.name} slower)`,
        detail: weWinWeather
          ? `Your ${myWeather} is active  -  5 turns`
          : `Opponent's ${oppEffectiveWeather} is active. Consider manual weather reset.`,
        severity: weWinWeather ? "good" : "bad",
        fieldState: { weather: weWinWeather ? myWeather : oppEffectiveWeather },
        children: [],
      };
      turn1Label.children.push(weatherNode);
    } else if (myHasMega && !oppHasMega) {
      // My mega overrides opponent entry
      const myMegaSetter = lead1.weatherOnMega ? lead1 : lead2;
      const weatherNode: StrategyNode = {
        id: nextId(),
        type: "field-state",
        label: `${myWeather.toUpperCase()}: Mega Evolution`,
        detail: `Your ${myMegaSetter.pokemon.name} Mega Evolves and sets ${myWeather}, overriding opponent's entry ${oppEffectiveWeather}`,
        severity: "good",
        fieldState: { weather: myWeather },
        children: [],
      };
      turn1Label.children.push(weatherNode);
    } else if (!myHasMega && oppHasMega) {
      // Opponent mega overrides my entry
      const oppMegaSetter = opp1.weatherOnMega ? opp1 : opp2;
      const weatherNode: StrategyNode = {
        id: nextId(),
        type: "field-state",
        label: `${oppEffectiveWeather.toUpperCase()}: Opponent Mega Evolution`,
        detail: `Opponent's ${oppMegaSetter.pokemon.name} Mega Evolves and sets ${oppEffectiveWeather}, overriding your entry ${myWeather}`,
        severity: "bad",
        fieldState: { weather: oppEffectiveWeather },
        children: [],
      };
      turn1Label.children.push(weatherNode);
    } else {
      // Both entry - slower wins
      const myWeatherSetter = lead1.weatherOnEntry ? lead1 : lead2;
      const oppWeatherSetter = opp1.weatherOnEntry ? opp1 : opp2;
      const weWinWeather = myWeatherSetter.speed < oppWeatherSetter.speed;
      const weatherNode: StrategyNode = {
        id: nextId(),
        type: "field-state",
        label: weWinWeather
          ? `${myWeather.toUpperCase()} persists (${myWeatherSetter.pokemon.name} slower → sets last)`
          : `${oppEffectiveWeather.toUpperCase()} overrides (${oppWeatherSetter.pokemon.name} slower)`,
        detail: weWinWeather
          ? `Your ${myWeather} is active  -  5 turns`
          : `Opponent's ${oppEffectiveWeather} is active. Consider manual weather reset.`,
        severity: weWinWeather ? "good" : "bad",
        fieldState: { weather: weWinWeather ? myWeather : oppEffectiveWeather },
        children: [],
      };
      turn1Label.children.push(weatherNode);
    }
  } else if (myWeather || oppEffectiveWeather) {
    const activeWeather = myWeather || oppEffectiveWeather;
    const isMyWeather = !!myWeather;
    const setter = isMyWeather
      ? (lead1.weatherOnMega === activeWeather ? lead1 : lead2.weatherOnMega === activeWeather ? lead2 : lead1.weatherOnEntry === activeWeather ? lead1 : lead2)
      : (opp1.weatherOnMega === activeWeather ? opp1 : opp2.weatherOnMega === activeWeather ? opp2 : opp1.weatherOnEntry === activeWeather ? opp1 : opp2);
    const isMega = (isMyWeather && (lead1.weatherOnMega === activeWeather || lead2.weatherOnMega === activeWeather)) ||
                   (!isMyWeather && (opp1.weatherOnMega === activeWeather || opp2.weatherOnMega === activeWeather));
    const fieldStateNode: StrategyNode = {
      id: nextId(),
      type: "field-state",
      label: `${activeWeather!.toUpperCase()}: 5 Turns`,
      detail: isMega ? `Set by ${setter.pokemon.name} on Turn 1 (Mega Evolution)` : `Set by ${setter.pokemon.name} on entry`,
      severity: isMyWeather ? "good" : "neutral",
      fieldState: { weather: activeWeather! },
      children: [],
    };
    turn1Label.children.push(fieldStateNode);
  }

  if (myTerrain || oppTerrain) {
    const activeTerrain = myTerrain || oppTerrain;
    const terrainNode: StrategyNode = {
      id: nextId(),
      type: "field-state",
      label: `${activeTerrain!.toUpperCase()} TERRAIN: 5 Turns`,
      detail: myTerrain ? "Boosts your moves" : "Boosts opponent's moves",
      severity: myTerrain ? "good" : "bad",
      fieldState: { terrain: activeTerrain! },
      children: [],
    };
    turn1Label.children.push(terrainNode);
  }

  // Intimidate on entry
  if (lead1.isIntimidateUser || lead2.isIntimidateUser) {
    const intimidator = lead1.isIntimidateUser ? lead1 : lead2;
    // Check if opponent has Intimidate-immune abilities
    const opp1Immune = isAbilityAntiIntimidate(opp1.set.ability);
    const opp2Immune = isAbilityAntiIntimidate(opp2.set.ability);
    if (opp1Immune || opp2Immune) {
      const immuneMon = opp1Immune ? opp1 : opp2;
      turn1Label.children.push({
        id: nextId(),
        type: "field-state",
        label: `Intimidate partially blocked`,
        detail: `${immuneMon.pokemon.name}'s ${immuneMon.set.ability} blocks Intimidate`,
        severity: "bad",
        children: [],
      });
    }
  }

  if (opp1.isIntimidateUser || opp2.isIntimidateUser) {
    turn1Label.children.push({
      id: nextId(),
      type: "field-state",
      label: `Opponent Intimidate: -1 Atk`,
      detail: `${(opp1.isIntimidateUser ? opp1 : opp2).pokemon.name} lowers your physical damage`,
      severity: "bad",
      children: [],
    });
  }

  // Build Turn 1 actions
  const turn1Actions = buildTurn1Actions(lead1, lead2, opp1, opp2, weFaster, myArchetype, activeWeatherForCalc);
  turn1Label.children.push(...turn1Actions);

  // ── TURN 2 ───────────────────────────────────────────────────────────

  const planHasTailwind = treeContains(turn1Actions, "Tailwind");
  const planHasTrickRoom = treeContains(turn1Actions, "Trick Room");

  const turn2Label: StrategyNode = {
    id: nextId(),
    type: "turn-label",
    label: "Turn 2",
    detail: planHasTailwind
      ? "Tailwind active  -  you outspeed"
      : planHasTrickRoom
      ? "Trick Room active  -  slowest moves first"
      : weFaster ? "Maintain tempo" : "Contest speed advantage",
    severity: planHasTailwind || planHasTrickRoom ? "good" : "neutral",
    children: [],
  };
  scenarioNode.children.push(turn2Label);

  // Tailwind/TR field state
  if (planHasTailwind) {
    turn2Label.children.push({
      id: nextId(),
      type: "field-state",
      label: "TAILWIND: 3 Turns left",
      detail: "Your side doubles speed for 4 turns total",
      severity: "good",
      fieldState: { tailwind: true, turnsLeft: 3 },
      children: [],
    });
  }
  if (planHasTrickRoom) {
    turn2Label.children.push({
      id: nextId(),
      type: "field-state",
      label: "TRICK ROOM: 4 Turns left",
      detail: "Slower Pokémon move first",
      severity: "good",
      fieldState: { trickRoom: true, turnsLeft: 4 },
      children: [],
    });
  }

  const turn2Actions = buildTurn2Actions(lead1, lead2, opp1, opp2, turn1Actions, myArchetype, fullTeam, activeWeatherForCalc, oppFullTeam ?? []);
  turn2Label.children.push(...turn2Actions);

  // ── TURN 3 ───────────────────────────────────────────────────────────

  const turn3Node: StrategyNode = {
    id: nextId(),
    type: "turn-label",
    label: "Turn 3",
    detail: planHasTailwind ? "Tailwind: 2 turns left" : planHasTrickRoom ? "Trick Room: 3 turns left" : "Mid-game — trade efficiently",
    severity: "neutral",
    children: [],
  };
  scenarioNode.children.push(turn3Node);

  const turn3Actions = buildTurn3Actions(lead1, lead2, opp1, opp2, turn1Actions, myArchetype, fullTeam, activeWeatherForCalc, oppFullTeam ?? []);
  turn3Node.children.push(...turn3Actions);

  // ── ENDGAME (Turn 4+) ─────────────────────────────────────────────────

  const endgameNode: StrategyNode = {
    id: nextId(),
    type: "turn-label",
    label: "Turn 4+",
    detail: planHasTailwind ? "Tailwind expired — reassess speed" : planHasTrickRoom ? "Trick Room: 2 turns left" : "Close out the game",
    severity: "neutral",
    children: [],
  };
  scenarioNode.children.push(endgameNode);

  const endgameActions = buildEndgameActions(lead1, lead2, opp1, opp2, fullTeam, winRate, myArchetype, activeWeatherForCalc, oppFullTeam ?? []);
  endgameNode.children.push(...endgameActions);

  return scenarioNode;
}

function buildTurn1Actions(
  lead1: AnalyzedMon,
  lead2: AnalyzedMon,
  opp1: AnalyzedMon,
  opp2: AnalyzedMon,
  weFaster: boolean,
  archetype: string,
  weather?: import("./damage-calc").DamageCalcOptions["weather"],
): StrategyNode[] {
  const actions: StrategyNode[] = [];

  // Determine who does what based on roles
  const fakeOutUser = lead1.hasFakeOut ? lead1 : lead2.hasFakeOut ? lead2 : null;
  const nonFakeOutLead = fakeOutUser === lead1 ? lead2 : lead1;
  const tailwindUser = lead1.hasTailwind ? lead1 : lead2.hasTailwind ? lead2 : null;
  const trUser = lead1.hasTrickRoom ? lead1 : lead2.hasTrickRoom ? lead2 : null;
  const redirector = lead1.hasRedirection ? lead1 : lead2.hasRedirection ? lead2 : null;
  const setupUser = lead1.hasSetup ? lead1 : lead2.hasSetup ? lead2 : null;

  // Check opponent threats
  const oppHasFakeOut = opp1.hasFakeOut || opp2.hasFakeOut;
  const oppFakeOutUser = opp1.hasFakeOut ? opp1 : opp2.hasFakeOut ? opp2 : null;
  const oppHasTR = opp1.hasTrickRoom || opp2.hasTrickRoom;
  const oppTRUser = opp1.hasTrickRoom ? opp1 : opp2.hasTrickRoom ? opp2 : null;
  const oppHasRedirection = opp1.hasRedirection || opp2.hasRedirection;
  const oppRedirector = opp1.hasRedirection ? opp1 : opp2.hasRedirection ? opp2 : null;

  /** Helper: make the detail string for an attack node including damage % */
  function atkDetail(atk: AttackResult, target: AnalyzedMon): string {
    const seTag = atk.effectiveness >= 2 ? "Super effective! " : atk.effectiveness <= 0.5 ? "NVE. " : "";
    const spread = isSpreadMove(atk.data) ? " (spread)" : "";
    return `${seTag}${atk.damageLabel} to ${target.pokemon.name}${spread}`;
  }

  /** Helper: get partner's ideal Turn 1 action */
  function getPartnerPlay(partner: AnalyzedMon, foeTarget: AnalyzedMon): StrategyNode {
    if (tailwindUser && tailwindUser === partner) {
      return { id: nextId(), type: "action", label: `${partner.pokemon.name}: Tailwind`, detail: "Double your side's speed for 4 turns", pokemon: [partner.pokemon.name], sprites: [partner.pokemon.sprite], moveType: "flying", severity: "good", children: [] };
    }
    if (trUser && trUser === partner) {
      return { id: nextId(), type: "action", label: `${partner.pokemon.name}: Trick Room`, detail: "Reverse speed for 5 turns  -  your slow mons move first", pokemon: [partner.pokemon.name], sprites: [partner.pokemon.sprite], moveType: "psychic", severity: "good", children: [] };
    }
    if (redirector && redirector === partner) {
      const redirectMove = partner.moves.find(m => m.role === "redirection")!;
      return { id: nextId(), type: "action", label: `${partner.pokemon.name}: ${redirectMove.name}`, detail: "Redirect attacks to protect partner", pokemon: [partner.pokemon.name], sprites: [partner.pokemon.sprite], moveType: "normal", severity: "good", children: [] };
    }
    if (setupUser && setupUser === partner) {
      const setupMove = partner.moves.find(m => m.role === "setup")!;
      return { id: nextId(), type: "action", label: `${partner.pokemon.name}: ${setupMove.name}`, detail: "Boost while partner covers", pokemon: [partner.pokemon.name], sprites: [partner.pokemon.sprite], moveType: "normal", severity: "good", children: [] };
    }
    const bestAtk = getBestAttack(partner, foeTarget, weather);
    if (bestAtk) {
      const spread = isSpreadMove(bestAtk.data);
      const label = spread ? `${partner.pokemon.name}: ${bestAtk.name} → both foes` : `${partner.pokemon.name}: ${bestAtk.name} → ${foeTarget.pokemon.name}`;
      return { id: nextId(), type: "action", label, detail: atkDetail(bestAtk, foeTarget), pokemon: [partner.pokemon.name], sprites: [partner.pokemon.sprite], moveType: bestAtk.data.type, severity: bestAtk.isOHKO ? "good" : bestAtk.effectiveness >= 2 ? "good" : "neutral", children: [] };
    }
    return { id: nextId(), type: "action", label: `${partner.pokemon.name}: attacks`, pokemon: [partner.pokemon.name], sprites: [partner.pokemon.sprite], severity: "neutral", children: [] };
  }

  /** Helper: get attack node for a mon */
  function getAttackNode(mon: AnalyzedMon): StrategyNode {
    const target = findBestTarget(mon, opp1, opp2, weather);
    const bestAtk = getBestAttack(mon, target, weather);
    if (bestAtk) {
      const spread = isSpreadMove(bestAtk.data);
      const label = spread ? `${mon.pokemon.name}: ${bestAtk.name} → both foes` : `${mon.pokemon.name}: ${bestAtk.name} → ${target.pokemon.name}`;
      return { id: nextId(), type: "action", label, detail: atkDetail(bestAtk, target), pokemon: [mon.pokemon.name], sprites: [mon.pokemon.sprite], moveType: bestAtk.data.type, severity: bestAtk.isOHKO ? "good" : bestAtk.effectiveness >= 2 ? "good" : "neutral", children: [] };
    }
    return { id: nextId(), type: "action", label: `${mon.pokemon.name}: attacks`, pokemon: [mon.pokemon.name], sprites: [mon.pokemon.sprite], severity: "neutral", children: [] };
  }

  // ── ARMOR TAIL / PRIORITY BLOCKER CHECK ──
  // Armor Tail (Farigiraf), Queenly Majesty, and Dazzling block ALL priority moves
  // targeting the opponent's entire side — Fake Out and other priority attacks cannot land.
  const priorityBlocker = opp1.blocksPriority ? opp1 : opp2.blocksPriority ? opp2 : null;
  if (priorityBlocker && fakeOutUser) {
    actions.push({
      id: nextId(),
      type: "action",
      label: `${fakeOutUser.pokemon.name}: can't use Fake Out`,
      detail: `${priorityBlocker.pokemon.name}'s ${priorityBlocker.set.ability} blocks all priority moves — use a regular attack instead`,
      pokemon: [fakeOutUser.pokemon.name],
      sprites: [fakeOutUser.pokemon.sprite],
      severity: "bad",
      moveType: "normal",
      children: [getAttackNode(fakeOutUser)],
    });
  }

  // ── PRANKSTER WARNING ──
  // Opponent's Prankster status moves go at +1 priority — they can Tailwind, Encore, T-Wave etc.
  // before any of our normal moves, regardless of speed. Only blocked by Dark type or Armor Tail.
  const oppPranksters = [opp1, opp2].filter(o => o.hasPrankster && o.pranksterMoves.length > 0);
  for (const oppPrank of oppPranksters) {
    const blockedOnUs = (lead1.blocksPriority || lead2.blocksPriority); // our Armor Tail etc blocks their priority
    if (!blockedOnUs) {
      const disruptiveMoves = oppPrank.pranksterMoves.filter(m =>
        ["Tailwind", "Trick Room", "Thunder Wave", "Encore", "Taunt", "Swagger", "Helping Hand",
         "Electroweb", "Icy Wind", "Parting Shot"].includes(m)
      );
      if (disruptiveMoves.length > 0) {
        const immuneLeads = [lead1, lead2].filter(l => l.pokemon.types.includes("dark"));
        const vulnerableLeads = [lead1, lead2].filter(l => !l.pokemon.types.includes("dark"));
        if (vulnerableLeads.length > 0) {
          const immuneNote = immuneLeads.length > 0
            ? ` (${immuneLeads.map(l => l.pokemon.name).join("/")} immune — Dark type)`
            : "";
          actions.push({
            id: nextId(),
            type: "field-state",
            label: `⚠ ${oppPrank.pokemon.name} Prankster: ${disruptiveMoves.join(", ")} go first`,
            detail: `+1 priority from ${oppPrank.set.ability} — moves before your attacks vs ${vulnerableLeads.map(l => l.pokemon.name).join("/")}${immuneNote}. Plan around this.`,
            severity: "bad",
            children: [],
          });
        }
      }
    }
  }

  // ── DOUBLE PRESSURE COMBO WARNING ────────────────────────────────────────
  // Detect: opponent has Fake Out (+3 priority, always moves first) that flinches
  // one of our leads, then their partner freely attacks the same flinched target.
  // Ghost-type Pokémon are immune to Normal-type Fake Out.
  if (oppHasFakeOut && oppFakeOutUser) {
    const oppAttackerForCombo = oppFakeOutUser === opp1 ? opp2 : opp1;
    const foVulnerableLeads = [lead1, lead2].filter(l => !isFakeOutImmune(l.pokemon));
    const foImmuneLeads    = [lead1, lead2].filter(l =>  isFakeOutImmune(l.pokemon));

    // Show Ghost immunity as a positive note
    if (foImmuneLeads.length > 0) {
      actions.push({
        id: nextId(),
        type: "field-state",
        label: `✓ ${foImmuneLeads.map(l => l.pokemon.name).join("/")} immune to ${oppFakeOutUser.pokemon.name} Fake Out`,
        detail: `Ghost-type Pokémon are unaffected by Normal-type Fake Out — free to act on Turn 1`,
        severity: "good",
        children: [],
      });
    }

    // Warn about double-pressure on each vulnerable lead
    for (const vulnerable of foVulnerableLeads) {
      const followUp = getBestAttack(oppAttackerForCombo, vulnerable, weather);
      const isSignificant = followUp && (followUp.isOHKO || followUp.is2HKO || followUp.percentHP[1] >= 40);
      if (isSignificant && followUp) {
        actions.push({
          id: nextId(),
          type: "field-state",
          label: `⚠ Double pressure on ${vulnerable.pokemon.name}: ${oppFakeOutUser.pokemon.name} Fake Out → ${oppAttackerForCombo.pokemon.name} ${followUp.name}`,
          detail: [
            `${oppFakeOutUser.pokemon.name} Fake Out (+3 priority, moves first) flinches ${vulnerable.pokemon.name} — it cannot respond.`,
            `${oppAttackerForCombo.pokemon.name} then freely uses ${followUp.name} (${followUp.damageLabel}) on the flinched target.`,
            vulnerable.hasProtect
              ? `Counter: ${vulnerable.pokemon.name} Protect blocks both; or switch it for the immune lead if available.`
              : `No Protect available — consider pivoting ${vulnerable.pokemon.name} out or targeting the Fake Out user first.`,
          ].join(" "),
          severity: "bad",
          children: [],
        });
      }
    }
  }

  // ── FAKE OUT BRANCH ──
  if (fakeOutUser && !priorityBlocker) {
    const pickResult = pickFakeOutTarget(fakeOutUser, nonFakeOutLead, opp1, opp2);

    // Both opponents are Ghost-type — Fake Out has no valid targets
    if (!pickResult) {
      actions.push({
        id: nextId(),
        type: "action",
        label: `${fakeOutUser.pokemon.name}: Fake Out has no targets`,
        detail: `Both opponents are Ghost-type — Fake Out (Normal) is immune. Use a regular attack instead.`,
        pokemon: [fakeOutUser.pokemon.name],
        sprites: [fakeOutUser.pokemon.sprite],
        severity: "bad",
        moveType: "normal",
        children: [getAttackNode(fakeOutUser)],
      });
    } else {
    const { target, reason } = pickResult;
    const nonFlinched = target === opp1 ? opp2 : opp1;
    const partnerIsSetup = tailwindUser === nonFakeOutLead || trUser === nonFakeOutLead ||
      redirector === nonFakeOutLead || setupUser === nonFakeOutLead;

    // Does opponent have Fake Out that threatens our partner's setup?
    // (Only relevant if our partner is NOT Ghost-type — Ghost types are safe)
    if (oppHasFakeOut && oppFakeOutUser && partnerIsSetup && !isFakeOutImmune(nonFakeOutLead.pokemon)) {
      const setupMoveName = tailwindUser === nonFakeOutLead ? "Tailwind"
        : trUser === nonFakeOutLead ? "Trick Room"
        : redirector === nonFakeOutLead ? nonFakeOutLead.moves.find(m => m.role === "redirection")!.name
        : nonFakeOutLead.moves.find(m => m.role === "setup")!.name;

      // Decision gate: opponent can Fake Out our setup mon
      const gateNode: StrategyNode = {
        id: nextId(),
        type: "decision",
        label: `Opponent may Fake Out ${nonFakeOutLead.pokemon.name}`,
        detail: `${oppFakeOutUser.pokemon.name} threatens to block your ${setupMoveName}`,
        severity: "neutral",
        children: [],
      };

      // Branch A: Read no Fake Out → partner sets up freely
      const idealBranch: StrategyNode = {
        id: nextId(),
        type: "action",
        label: `${fakeOutUser.pokemon.name}: Fake Out → ${target.pokemon.name}`,
        detail: `Flinch to ${reason}  -  partner sets up freely`,
        pokemon: [fakeOutUser.pokemon.name],
        sprites: [fakeOutUser.pokemon.sprite],
        moveType: "normal",
        severity: "good",
        branchLabel: "Read no Fake Out",
        children: [getPartnerPlay(nonFakeOutLead, nonFlinched)],
      };
      gateNode.children.push(idealBranch);

      // Branch B: Expect Fake Out → Protect partner, delay setup
      if (nonFakeOutLead.hasProtect) {
        const safeBranch: StrategyNode = {
          id: nextId(),
          type: "action",
          label: `${fakeOutUser.pokemon.name}: Fake Out → ${target.pokemon.name}`,
          detail: `Partner Protects to block Fake Out  -  ${setupMoveName} delayed to Turn 2`,
          pokemon: [fakeOutUser.pokemon.name],
          sprites: [fakeOutUser.pokemon.sprite],
          moveType: "normal",
          severity: "neutral",
          branchLabel: "Protect",
          children: [{
            id: nextId(),
            type: "action",
            label: `${nonFakeOutLead.pokemon.name}: Protect`,
            detail: `Block opponent's Fake Out  -  set up ${setupMoveName} next turn`,
            pokemon: [nonFakeOutLead.pokemon.name],
            sprites: [nonFakeOutLead.pokemon.sprite],
            severity: "neutral",
            children: [],
          }],
        };
        gateNode.children.push(safeBranch);
      } else {
        const riskBranch: StrategyNode = {
          id: nextId(),
          type: "action",
          label: `${nonFakeOutLead.pokemon.name} gets flinched`,
          detail: `No Protect  -  ${setupMoveName} delayed to Turn 2. ${fakeOutUser.pokemon.name} still flinches ${target.pokemon.name}.`,
          severity: "bad",
          branchLabel: "No Protect",
          children: [],
        };
        gateNode.children.push(riskBranch);
      }

      actions.push(gateNode);
    } else if (oppHasFakeOut && oppFakeOutUser) {
      // Both sides have Fake Out  -  branch on speed tie
      const weWinSpeedTie = fakeOutUser.speed >= oppFakeOutUser.speed;
      const gateNode: StrategyNode = {
        id: nextId(),
        type: "decision",
        label: `Opponent may Fake Out ${fakeOutUser.pokemon.name}`,
        detail: `${fakeOutUser.speed > oppFakeOutUser.speed ? "You outspeed" : fakeOutUser.speed < oppFakeOutUser.speed ? "They outspeed" : "Speed tie"} on Fake Out`,
        severity: "neutral",
        children: [],
      };

      // Branch: we outspeed → our Fake Out goes first
      gateNode.children.push({
        id: nextId(),
        type: "action",
        label: `${fakeOutUser.pokemon.name}: Fake Out → ${target.pokemon.name}`,
        detail: `Flinch to ${reason}  -  partner plays freely`,
        pokemon: [fakeOutUser.pokemon.name],
        sprites: [fakeOutUser.pokemon.sprite],
        moveType: "normal",
        severity: "good",
        branchLabel: weWinSpeedTie ? "We outspeed" : "If we outspeed",
        children: [getPartnerPlay(nonFakeOutLead, target === opp1 ? opp2 : opp1)],
      });

      // Branch: they outspeed → we get flinched
      gateNode.children.push({
        id: nextId(),
        type: "action",
        label: `${fakeOutUser.pokemon.name} gets flinched`,
        detail: `Their ${oppFakeOutUser.pokemon.name} is faster  -  Fake Out blocked`,
        pokemon: [fakeOutUser.pokemon.name],
        sprites: [fakeOutUser.pokemon.sprite],
        severity: "bad",
        branchLabel: weWinSpeedTie ? "If they outspeed" : "They outspeed",
        children: [getPartnerPlay(nonFakeOutLead, target === opp1 ? opp2 : opp1)],
      });

      actions.push(gateNode);
    } else {
      // No opponent Fake Out → single clear plan
      const fakeOutNode: StrategyNode = {
        id: nextId(),
        type: "action",
        label: `${fakeOutUser.pokemon.name}: Fake Out → ${target.pokemon.name}`,
        detail: `Flinch to ${reason} (priority +3, always goes first)`,
        pokemon: [fakeOutUser.pokemon.name],
        sprites: [fakeOutUser.pokemon.sprite],
        moveType: "normal",
        severity: "good",
        children: [],
      };
      actions.push(fakeOutNode);
      actions.push(getPartnerPlay(nonFakeOutLead, nonFlinched));
    }
    } // end pickResult !== null
  }
  // ── NO FAKE OUT: SPEED CONTROL + ATTACK ──
  else if (tailwindUser || trUser) {
    const speedUser = tailwindUser ?? trUser!;
    const attacker = speedUser === lead1 ? lead2 : lead1;
    const speedMoveName = tailwindUser ? "Tailwind" : "Trick Room";
    const moveType: PokemonType = tailwindUser ? "flying" : "psychic";
    const attackNode = getAttackNode(attacker);

    if (oppHasFakeOut && oppFakeOutUser && !isFakeOutImmune(speedUser.pokemon)) {
      // Decision gate: opponent Fake Out contests our speed control
      // (Ghost-type speed control users are immune to Normal-type Fake Out)
      const gateNode: StrategyNode = {
        id: nextId(),
        type: "decision",
        label: `Opponent may Fake Out ${speedUser.pokemon.name}`,
        detail: `${oppFakeOutUser.pokemon.name} threatens to block your ${speedMoveName}`,
        severity: "neutral",
        children: [],
      };

      // Branch A: Speed control goes up (opponent targets attacker or doesn't FO)
      gateNode.children.push({
        id: nextId(),
        type: "action",
        label: `${speedUser.pokemon.name}: ${speedMoveName}`,
        detail: tailwindUser ? "Double speed for 4 turns" : "Reverse speed for 5 turns",
        pokemon: [speedUser.pokemon.name],
        sprites: [speedUser.pokemon.sprite],
        moveType,
        severity: "good",
        branchLabel: "Read no Fake Out",
        children: [{ ...attackNode, id: nextId() }],
      });

      // Branch B: Protect or get flinched
      if (speedUser.hasProtect) {
        gateNode.children.push({
          id: nextId(),
          type: "action",
          label: `${speedUser.pokemon.name}: Protect`,
          detail: `Block Fake Out  -  set ${speedMoveName} Turn 2`,
          pokemon: [speedUser.pokemon.name],
          sprites: [speedUser.pokemon.sprite],
          severity: "neutral",
          branchLabel: "Protect",
          children: [{ ...attackNode, id: nextId() }],
        });
      } else {
        gateNode.children.push({
          id: nextId(),
          type: "action",
          label: `${speedUser.pokemon.name} gets flinched`,
          detail: `${speedMoveName} delayed to Turn 2`,
          severity: "bad",
          branchLabel: "No Protect",
          children: [{ ...attackNode, id: nextId() }],
        });
      }

      actions.push(gateNode);
    } else if (tailwindUser && oppHasTR && oppTRUser) {
      // Speed control + opponent counter-TR threat
      actions.push({
        id: nextId(),
        type: "action",
        label: `${speedUser.pokemon.name}: Tailwind`,
        detail: "Double speed for 4 turns",
        pokemon: [speedUser.pokemon.name],
        sprites: [speedUser.pokemon.sprite],
        moveType,
        severity: "good",
        children: [],
      });

      // Attacker action with decision about TR counter
      const gateNode: StrategyNode = {
        id: nextId(),
        type: "decision",
        label: `${oppTRUser.pokemon.name} may set Trick Room`,
        detail: "Counters Tailwind by reversing speed",
        severity: "neutral",
        children: [
          {
            id: nextId(),
            type: "action",
            label: `${attacker.pokemon.name}: Focus ${oppTRUser.pokemon.name}`,
            detail: "KO the TR setter before it moves (-7 priority)",
            severity: "good",
            branchLabel: "Prevent TR",
            children: [],
          },
          {
            ...attackNode,
            id: nextId(),
            branchLabel: "Press damage",
            detail: `Ignore TR threat  -  deal maximum damage. Counter-TR later if needed.`,
          },
        ],
      };
      actions.push(gateNode);
    } else {
      // No threats → single clear plan
      actions.push({
        id: nextId(),
        type: "action",
        label: `${speedUser.pokemon.name}: ${speedMoveName}`,
        detail: tailwindUser ? "Double speed for 4 turns" : "Reverse speed for 5 turns",
        pokemon: [speedUser.pokemon.name],
        sprites: [speedUser.pokemon.sprite],
        moveType,
        severity: "good",
        children: [],
      });
      actions.push(attackNode);
    }
  }
  // ── REDIRECTION + ATTACK ──
  else if (redirector) {
    const attacker = redirector === lead1 ? lead2 : lead1;
    const redirectMove = redirector.moves.find(m => m.role === "redirection")!;

    actions.push({
      id: nextId(),
      type: "action",
      label: `${redirector.pokemon.name}: ${redirectMove.name}`,
      detail: "Draw all single-target attacks  -  protect partner",
      pokemon: [redirector.pokemon.name],
      sprites: [redirector.pokemon.sprite],
      moveType: "normal",
      severity: "good",
      children: [],
    });

    // Partner: setup or attack
    if (setupUser && setupUser === attacker) {
      const setupMove = attacker.moves.find(m => m.role === "setup")!;
      actions.push({
        id: nextId(),
        type: "action",
        label: `${attacker.pokemon.name}: ${setupMove.name}`,
        detail: "Safely boost while partner redirects",
        pokemon: [attacker.pokemon.name],
        sprites: [attacker.pokemon.sprite],
        moveType: "normal",
        severity: "good",
        children: [],
      });
    } else {
      const primaryTarget = findBestTarget(attacker, opp1, opp2, weather);
      const bestAtk = getBestAttack(attacker, primaryTarget, weather);
      if (bestAtk) {
        const spread = isSpreadMove(bestAtk.data);
        actions.push({
          id: nextId(),
          type: "action",
          label: `${attacker.pokemon.name}: ${bestAtk.name} → ${spread ? "both foes" : primaryTarget.pokemon.name}`,
          detail: `${atkDetail(bestAtk, primaryTarget)}  —  free to attack while partner absorbs hits`,
          pokemon: [attacker.pokemon.name],
          sprites: [attacker.pokemon.sprite],
          moveType: bestAtk.data.type,
          severity: bestAtk.isOHKO ? "good" : bestAtk.effectiveness >= 2 ? "good" : "neutral",
          children: [],
        });
      }
    }
  }
  // ── BOTH ATTACK (no setup/disruption) ──
  else {
    const target1 = findBestTarget(lead1, opp1, opp2, weather);
    const target2 = findBestTarget(lead2, opp1, opp2, weather);
    const bestAtk1 = getBestAttack(lead1, target1, weather);
    const bestAtk2 = getBestAttack(lead2, target2, weather);
    const shouldFocus = target1 === target2;

    if (bestAtk1) {
      const spread1 = isSpreadMove(bestAtk1.data);
      const focusTag = shouldFocus && !spread1 ? "Focus fire! " : "";
      actions.push({
        id: nextId(),
        type: "action",
        label: `${lead1.pokemon.name}: ${bestAtk1.name} → ${spread1 ? "both foes" : target1.pokemon.name}`,
        detail: `${focusTag}${atkDetail(bestAtk1, target1)}`,
        pokemon: [lead1.pokemon.name],
        sprites: [lead1.pokemon.sprite],
        moveType: bestAtk1.data.type,
        severity: bestAtk1.isOHKO ? "good" : bestAtk1.effectiveness >= 2 ? "good" : "neutral",
        children: [],
      });
    }

    if (bestAtk2) {
      const spread2 = isSpreadMove(bestAtk2.data);
      actions.push({
        id: nextId(),
        type: "action",
        label: `${lead2.pokemon.name}: ${bestAtk2.name} → ${spread2 ? "both foes" : target2.pokemon.name}`,
        detail: atkDetail(bestAtk2, target2),
        pokemon: [lead2.pokemon.name],
        sprites: [lead2.pokemon.sprite],
        moveType: bestAtk2.data.type,
        severity: bestAtk2.isOHKO ? "good" : bestAtk2.effectiveness >= 2 ? "good" : "neutral",
        children: [],
      });
    }

    if (!weFaster) {
      const gateNode: StrategyNode = {
        id: nextId(),
        type: "decision",
        label: "Opponent moves first — how to respond?",
        detail: "Choose survival vs immediate pressure",
        severity: "bad",
        children: [],
      };

      // Branch: Protect with the frailer mon, attack with the other
      const frailer = lead1.stats.hp * lead1.stats.defense <= lead2.stats.hp * lead2.stats.defense ? lead1 : lead2;
      const bulkier = frailer === lead1 ? lead2 : lead1;
      if (frailer.hasProtect) {
        const bulkierTarget = findBestTarget(bulkier, opp1, opp2, weather);
        const bulkierAtk = getBestAttack(bulkier, bulkierTarget, weather);
        gateNode.children.push({
          id: nextId(),
          type: "action",
          label: `${frailer.pokemon.name}: Protect`,
          detail: `${bulkier.pokemon.name}: ${bulkierAtk ? `${bulkierAtk.name} (${bulkierAtk.damageLabel})` : "attacks"}  —  stall and deal damage`,
          pokemon: [frailer.pokemon.name, bulkier.pokemon.name],
          sprites: [frailer.pokemon.sprite, bulkier.pokemon.sprite],
          severity: "neutral",
          branchLabel: "Protect",
          children: [],
        });
      }

      // Branch: Trade aggressively
      gateNode.children.push({
        id: nextId(),
        type: "action",
        label: `Both attack  -  trade KOs`,
        detail: "Maximum damage before they move",
        severity: "neutral",
        branchLabel: "Aggro",
        children: [],
      });

      actions.push(gateNode);
    }
  }

  // Handle opponent redirection warning (applies across all branches)
  if (oppHasRedirection && oppRedirector) {
    const redirectedMoves = actions.filter(a =>
      a.type === "action" && a.label.includes("→") && !a.label.includes("both foes")
    );
    if (redirectedMoves.length > 0) {
      actions.push({
        id: nextId(),
        type: "field-state",
        label: `⚠ ${oppRedirector.pokemon.name} redirects single-target attacks`,
        detail: `Use spread moves or KO ${oppRedirector.pokemon.name} first`,
        severity: "bad",
        children: [],
      });
    }
  }

  return actions;
}

function buildTurn2Actions(
  lead1: AnalyzedMon,
  lead2: AnalyzedMon,
  opp1: AnalyzedMon,
  opp2: AnalyzedMon,
  turn1Actions: StrategyNode[],
  archetype: string,
  fullTeam: AnalyzedMon[],
  weather?: import("./damage-calc").DamageCalcOptions["weather"],
  oppFullTeam: AnalyzedMon[] = [],
): StrategyNode[] {
  const actions: StrategyNode[] = [];

  const usedFakeOut = treeContains(turn1Actions, "Fake Out");
  const planHasTailwind = treeContains(turn1Actions, "Tailwind");
  const planHasTrickRoom = treeContains(turn1Actions, "Trick Room");
  const setupMaybeDelayed = treeContains(turn1Actions, "Protect") ||
    treeContains(turn1Actions, "No Protect");
  const hasSpeedControl = planHasTailwind || planHasTrickRoom;

  /** Shared helper: format attack label with damage info */
  function fmtAtk(mon: AnalyzedMon, atk: AttackResult, target: AnalyzedMon): StrategyNode {
    const spread = isSpreadMove(atk.data);
    const seTag = atk.effectiveness >= 2 ? "Super effective! " : atk.effectiveness <= 0.5 ? "NVE. " : "";
    return {
      id: nextId(),
      type: "action",
      label: `${mon.pokemon.name}: ${atk.name} → ${spread ? "both foes" : target.pokemon.name}`,
      detail: `${seTag}${atk.damageLabel} to ${target.pokemon.name}${spread ? " (spread)" : ""}`,
      pokemon: [mon.pokemon.name],
      sprites: [mon.pokemon.sprite],
      moveType: atk.data.type,
      severity: atk.isOHKO ? "good" : atk.effectiveness >= 2 ? "good" : "neutral",
      children: [],
    };
  }

  // ── OPPONENT SWITCH-IN PREDICTION ──────────────────────────────────────────
  // Add a decision node for likely switch-ins from the opponent bench
  const oppBench = oppFullTeam.filter(m => m !== opp1 && m !== opp2);
  const likelySwitchIn = predictSwitchIn(oppBench, lead1, lead2);
  if (likelySwitchIn) {
    actions.push({
      id: nextId(),
      type: "decision",
      label: `If opponent switches → ${likelySwitchIn.pokemon.name}`,
      detail: `Most likely bench answer. Check your coverage options below.`,
      pokemon: [likelySwitchIn.pokemon.name],
      sprites: [likelySwitchIn.pokemon.sprite],
      severity: "neutral",
      children: [
        (() => {
          const atk1 = getBestAttack(lead1, likelySwitchIn, weather);
          const atk2 = getBestAttack(lead2, likelySwitchIn, weather);
          // Prefer the one that secures bigger damage
          const better = (atk1?.percentHP[1] ?? 0) >= (atk2?.percentHP[1] ?? 0) ? { mon: lead1, atk: atk1 } : { mon: lead2, atk: atk2 };
          if (better.atk) return fmtAtk(better.mon, better.atk, likelySwitchIn);
          return { id: nextId(), type: "action" as const, label: "Pivot / reassess", severity: "neutral" as const, children: [] };
        })(),
      ],
    });
  }

  // ── POST-FAKE OUT: NOW ATTACK/SETUP ──
  if (usedFakeOut) {
    const fakeOutUser = lead1.hasFakeOut ? lead1 : lead2;
    const partner = fakeOutUser === lead1 ? lead2 : lead1;

    if (setupMaybeDelayed && (partner.hasTailwind || partner.hasTrickRoom)) {
      const setupMove = partner.hasTailwind ? "Tailwind" : "Trick Room";
      const sMoveType: PokemonType = partner.hasTailwind ? "flying" : "psychic";

      const foTarget = findBestTarget(fakeOutUser, opp1, opp2, weather);
      const foBestAtk = getBestAttack(fakeOutUser, foTarget, weather);
      const partnerTarget = findBestTarget(partner, opp1, opp2, weather);
      const partnerBestAtk = getBestAttack(partner, partnerTarget, weather);

      const gateNode: StrategyNode = {
        id: nextId(),
        type: "decision",
        label: `Did ${partner.pokemon.name} set ${setupMove} Turn 1?`,
        detail: "Depends on which Turn 1 branch was taken",
        severity: "neutral",
        children: [],
      };

      const detailParts: string[] = [];
      if (foBestAtk) detailParts.push(`${fakeOutUser.pokemon.name}: ${foBestAtk.name} (${foBestAtk.damageLabel})`);
      if (partnerBestAtk) detailParts.push(`${partner.pokemon.name}: ${partnerBestAtk.name} (${partnerBestAtk.damageLabel})`);

      gateNode.children.push({
        id: nextId(),
        type: "action",
        label: `Both attack under ${setupMove}`,
        detail: detailParts.join(" + ") || "Full offense",
        severity: "good",
        branchLabel: "Setup went up",
        children: [],
      });

      const coverChildren: StrategyNode[] = [];
      if (foBestAtk) coverChildren.push(fmtAtk(fakeOutUser, foBestAtk, foTarget));
      gateNode.children.push({
        id: nextId(),
        type: "action",
        label: `${partner.pokemon.name}: ${setupMove}`,
        detail: `Delayed from Turn 1  —  set up now`,
        severity: "good",
        branchLabel: "Setup delayed",
        moveType: sMoveType,
        children: coverChildren,
      });

      actions.push(gateNode);
    } else {
      if (fakeOutUser.hasTailwind && !planHasTailwind) {
        actions.push({ id: nextId(), type: "action", label: `${fakeOutUser.pokemon.name}: Tailwind`, detail: "Set speed after turn 1 disruption", severity: "good", moveType: "flying", children: [] });
      } else if (fakeOutUser.hasTrickRoom && !planHasTrickRoom) {
        actions.push({ id: nextId(), type: "action", label: `${fakeOutUser.pokemon.name}: Trick Room`, detail: "Set speed after turn 1 disruption", severity: "good", moveType: "psychic", children: [] });
      } else {
        const target = findBestTarget(fakeOutUser, opp1, opp2, weather);
        const bestAtk = getBestAttack(fakeOutUser, target, weather);
        if (bestAtk) actions.push(fmtAtk(fakeOutUser, bestAtk, target));
      }

      const target2 = findBestTarget(partner, opp1, opp2, weather);
      const bestAtk2 = getBestAttack(partner, target2, weather);
      if (bestAtk2) actions.push(fmtAtk(partner, bestAtk2, target2));
    }
  }
  // ── POST-SETUP: SWEEP ──
  else if (hasSpeedControl) {
    const speedUser = (lead1.hasTailwind || lead1.hasTrickRoom) ? lead1 : lead2;
    const attacker = speedUser === lead1 ? lead2 : lead1;

    if (setupMaybeDelayed) {
      const setupMove = planHasTailwind ? "Tailwind" : "Trick Room";
      const sMoveType: PokemonType = planHasTailwind ? "flying" : "psychic";
      const attackerTarget = findBestTarget(attacker, opp1, opp2, weather);
      const attackerBestAtk = getBestAttack(attacker, attackerTarget, weather);
      const speedTarget = findBestTarget(speedUser, opp1, opp2, weather);
      const speedBestAtk = getBestAttack(speedUser, speedTarget, weather);

      const gateNode: StrategyNode = {
        id: nextId(),
        type: "decision",
        label: `Did ${setupMove} go up Turn 1?`,
        detail: "Depends on whether opponent Faked Out",
        severity: "neutral",
        children: [],
      };

      const offParts: string[] = [];
      if (speedBestAtk) offParts.push(`${speedUser.pokemon.name}: ${speedBestAtk.name} (${speedBestAtk.damageLabel})`);
      if (attackerBestAtk) offParts.push(`${attacker.pokemon.name}: ${attackerBestAtk.name} (${attackerBestAtk.damageLabel})`);
      gateNode.children.push({
        id: nextId(), type: "action", label: `Both attack  —  you outspeed`,
        detail: offParts.join(" + ") || "Full offense", severity: "good", branchLabel: "Setup went up", children: [],
      });

      const coverChildren: StrategyNode[] = [];
      if (attackerBestAtk) coverChildren.push(fmtAtk(attacker, attackerBestAtk, attackerTarget));
      gateNode.children.push({
        id: nextId(), type: "action", label: `${speedUser.pokemon.name}: ${setupMove}`,
        detail: `Delayed from Turn 1  —  set up now`, severity: "good",
        branchLabel: "Setup delayed", moveType: sMoveType, children: coverChildren,
      });

      actions.push(gateNode);
    } else {
      const target1 = findBestTarget(lead1, opp1, opp2, weather);
      const target2 = findBestTarget(lead2, opp1, opp2, weather);
      const bestAtk1 = getBestAttack(lead1, target1, weather);
      const bestAtk2 = getBestAttack(lead2, target2, weather);
      if (bestAtk1) actions.push(fmtAtk(lead1, bestAtk1, target1));
      if (bestAtk2) actions.push(fmtAtk(lead2, bestAtk2, target2));
    }
  }
  // ── GENERAL TURN 2 ──
  else {
    const pressNode: StrategyNode = {
      id: nextId(), type: "decision",
      label: "Continue offense or pivot?", severity: "neutral", children: [],
    };

    const target1 = findBestTarget(lead1, opp1, opp2, weather);
    const bestAtk1 = getBestAttack(lead1, target1, weather);
    const target2 = findBestTarget(lead2, opp1, opp2, weather);
    const bestAtk2 = getBestAttack(lead2, target2, weather);

    if (bestAtk1 && bestAtk2) {
      const focusSame = target1 === target2;
      pressNode.children.push({
        id: nextId(), type: "action",
        label: `Double into ${focusSame ? target1.pokemon.name : "threats"}`,
        detail: `${lead1.pokemon.name}: ${bestAtk1.name} (${bestAtk1.damageLabel}) + ${lead2.pokemon.name}: ${bestAtk2.name} (${bestAtk2.damageLabel})`,
        severity: (bestAtk1.isOHKO || bestAtk2.isOHKO) ? "good" : "neutral",
        branchLabel: "Offense", children: [],
      });
    }

    // Protect + Switch pivot
    const canProtect1 = lead1.hasProtect;
    const canProtect2 = lead2.hasProtect;
    if (canProtect1 || canProtect2) {
      const protector = canProtect1 ? lead1 : lead2;
      const switcher = protector === lead1 ? lead2 : lead1;
      // Find best back mon based on coverage vs opponents
      const backMons = fullTeam.filter(m => m !== lead1 && m !== lead2);
      const bestSwitcher = backMons.sort((a, b) => {
        const sA = (getBestAttack(a, opp1, weather)?.percentHP[1] ?? 0) + (getBestAttack(a, opp2, weather)?.percentHP[1] ?? 0);
        const sB = (getBestAttack(b, opp1, weather)?.percentHP[1] ?? 0) + (getBestAttack(b, opp2, weather)?.percentHP[1] ?? 0);
        return sB - sA;
      })[0];
      pressNode.children.push({
        id: nextId(), type: "action",
        label: `${protector.pokemon.name}: Protect · Switch ${switcher.pokemon.name}${bestSwitcher ? ` → ${bestSwitcher.pokemon.name}` : ""}`,
        detail: bestSwitcher ? `Bring in ${bestSwitcher.pokemon.name} for a better matchup` : "Stall a turn and bring in a better matchup",
        severity: "neutral", branchLabel: "Pivot", children: [],
      });
    }

    // Protect for weather stall
    const hasWeatherStall = !!weather && weather !== "none" && (lead1.hasProtect || lead2.hasProtect);
    if (hasWeatherStall) {
      const protector = lead1.hasProtect ? lead1 : lead2;
      const attacker = protector === lead1 ? lead2 : lead1;
      const atkTarget = findBestTarget(attacker, opp1, opp2, weather);
      const atkResult = getBestAttack(attacker, atkTarget, weather);
      pressNode.children.push({
        id: nextId(), type: "action",
        label: `${protector.pokemon.name}: Protect · ${attacker.pokemon.name}: ${atkResult?.name ?? "attacks"}`,
        detail: `Stall ${weather} damage + ${atkResult ? `${atkResult.damageLabel} to ${atkTarget.pokemon.name}` : "keep pressure"}`,
        severity: "neutral", branchLabel: "Stall weather", children: [],
      });
    }

    // Setup path
    const setupLeads = [lead1, lead2].filter(l =>
      l.hasSetup && !l.moves.some(m => m.role === "setup" && treeContains(turn1Actions, m.name))
    );
    if (setupLeads.length > 0) {
      const s = setupLeads[0];
      const setupMove = s.moves.find(m => m.role === "setup")!;
      const cover = s === lead1 ? lead2 : lead1;
      const coverTarget = findBestTarget(cover, opp1, opp2, weather);
      const coverAtk = getBestAttack(cover, coverTarget, weather);
      pressNode.children.push({
        id: nextId(), type: "action",
        label: `${s.pokemon.name}: ${setupMove.name}`,
        detail: coverAtk ? `${cover.pokemon.name}: ${coverAtk.name} (${coverAtk.damageLabel}) covers` : "Boost while partner covers",
        pokemon: [s.pokemon.name], sprites: [s.pokemon.sprite],
        severity: "good", branchLabel: "Setup", children: [],
      });
    }

    actions.push(pressNode);
  }

  return actions;
}

function buildEndgameActions(
  lead1: AnalyzedMon,
  lead2: AnalyzedMon,
  opp1: AnalyzedMon,
  opp2: AnalyzedMon,
  fullTeam: AnalyzedMon[],
  winRate: number,
  archetype: string,
  weather?: import("./damage-calc").DamageCalcOptions["weather"],
  oppFullTeam: AnalyzedMon[] = [],
): StrategyNode[] {
  const actions: StrategyNode[] = [];
  const backMons = fullTeam.filter(m => m !== lead1 && m !== lead2);

  // ── BEST BACK TO BRING IN ──────────────────────────────────────────────────
  if (backMons.length > 0) {
    const scoredBack = backMons.map(b => ({
      mon: b,
      score: (getBestAttack(b, opp1, weather)?.percentHP[1] ?? 0) + (getBestAttack(b, opp2, weather)?.percentHP[1] ?? 0),
    })).sort((a, b) => b.score - a.score);

    const bestBack = scoredBack.slice(0, 2);
    const topMon = bestBack[0].mon;
    const topAtk1 = getBestAttack(topMon, opp1, weather);
    const topAtk2 = getBestAttack(topMon, opp2, weather);
    const topDetail = [
      topAtk1 ? `vs ${opp1.pokemon.name}: ${topAtk1.name} ${topAtk1.damageLabel}` : null,
      topAtk2 ? `vs ${opp2.pokemon.name}: ${topAtk2.name} ${topAtk2.damageLabel}` : null,
    ].filter(Boolean).join(" | ");

    actions.push({
      id: nextId(),
      type: "switch",
      label: `Bring in: ${bestBack.map(b => b.mon.pokemon.name).join(" or ")}`,
      detail: topDetail || `${topMon.pokemon.name} has best coverage vs remaining opponents`,
      pokemon: bestBack.map(b => b.mon.pokemon.name),
      sprites: bestBack.map(b => b.mon.pokemon.sprite),
      severity: "neutral",
      children: [],
    });
  }

  // ── PRIORITY CLOSING ──────────────────────────────────────────────────────
  const oppBlocksPriority = opp1.blocksPriority || opp2.blocksPriority;
  if (!oppBlocksPriority) {
    const priorityUsers = [lead1, lead2, ...backMons].filter(m => m.hasPriority);
    if (priorityUsers.length > 0) {
      const pu = priorityUsers[0];
      const priMove = pu.moves.find(m => m.data && m.data.priority > 0 && m.data.category !== "status");
      if (priMove) {
        // Compute damage to figure out which target to priority-attack
        const atk1 = priMove.data ? getBestAttack(pu, opp1, weather) : null;
        const atk2 = priMove.data ? getBestAttack(pu, opp2, weather) : null;
        const bestPriTarget = (atk1?.percentHP[1] ?? 0) >= (atk2?.percentHP[1] ?? 0) ? opp1 : opp2;
        const priResult = priMove.data ? calculateDamage(toCalcPokemon(pu), toCalcTarget(bestPriTarget), priMove.name, { isDoubles: true, simMode: true, weather }) : null;
        const dmgLabel = priResult ? makeDamageLabel({ percentHP: priResult.percentHP, isOHKO: priResult.isOHKO, is2HKO: priResult.is2HKO, effectiveness: priResult.effectiveness }) : "";

        actions.push({
          id: nextId(),
          type: "action",
          label: `${pu.pokemon.name}: ${priMove.name} → ${bestPriTarget.pokemon.name}${dmgLabel ? ` (${dmgLabel})` : ""}`,
          detail: `Priority +${priMove.data!.priority}  —  pick off weakened targets before they can move`,
          severity: "good",
          moveType: priMove.data!.type,
          children: [],
        });
      }
    }
  }

  // ── PROTECT STALL IF WEATHER IS ACTIVE ───────────────────────────────────
  if (weather && weather !== "none") {
    const protectors = [lead1, lead2, ...backMons].filter(m => m.hasProtect);
    if (protectors.length > 0) {
      const p = protectors[0];
      actions.push({
        id: nextId(),
        type: "action",
        label: `${p.pokemon.name}: Protect`,
        detail: `Stall ${weather} chip — let weather erode HP while Protecting`,
        severity: "neutral",
        children: [],
      });
    }
  }

  // ── OUTCOME ───────────────────────────────────────────────────────────────
  actions.push({
    id: nextId(),
    type: "outcome",
    label: winRate >= 60
      ? "Favorable  —  maintain board control & trade efficiently"
      : winRate >= 50
      ? "Close matchup  —  avoid misplays, protect key pieces"
      : winRate >= 40
      ? "Uphill battle  —  need early KOs to swing momentum"
      : "Tough matchup  —  consider alternate lead or surprise play",
    severity: winRate >= 55 ? "good" : winRate >= 45 ? "neutral" : "bad",
    children: [],
  });

  return actions;
}

/** Turn 3: mid-game pressure, setup expansion, speed control expiry awareness */
function buildTurn3Actions(
  lead1: AnalyzedMon,
  lead2: AnalyzedMon,
  opp1: AnalyzedMon,
  opp2: AnalyzedMon,
  turn1Actions: StrategyNode[],
  archetype: string,
  fullTeam: AnalyzedMon[],
  weather?: import("./damage-calc").DamageCalcOptions["weather"],
  oppFullTeam: AnalyzedMon[] = [],
): StrategyNode[] {
  const actions: StrategyNode[] = [];
  const planHasTailwind = treeContains(turn1Actions, "Tailwind");
  const planHasTrickRoom = treeContains(turn1Actions, "Trick Room");
  const backMons = fullTeam.filter(m => m !== lead1 && m !== lead2);

  // ── SPEED CONTROL STATUS ─────────────────────────────────────────────────
  if (planHasTailwind) {
    actions.push({
      id: nextId(),
      type: "field-state",
      label: "TAILWIND: 2 turns left",
      detail: "Will expire after Turn 4 — plan your sweeping window now",
      severity: "neutral",
      fieldState: { tailwind: true, turnsLeft: 2 },
      children: [],
    });
  }
  if (planHasTrickRoom) {
    actions.push({
      id: nextId(),
      type: "field-state",
      label: "TRICK ROOM: 3 turns left",
      detail: "Expires after Turn 5 — continue sweeping",
      severity: "good",
      fieldState: { trickRoom: true, turnsLeft: 3 },
      children: [],
    });
  }

  // ── DOUBLE TARGET THE MOST DANGEROUS REMAINING OPPONENT ─────────────────
  const t1 = findBestTarget(lead1, opp1, opp2, weather);
  const t2 = findBestTarget(lead2, opp1, opp2, weather);
  const atk1 = getBestAttack(lead1, t1, weather);
  const atk2 = getBestAttack(lead2, t2, weather);

  const pressNode: StrategyNode = {
    id: nextId(),
    type: "decision",
    label: "Push for KO or conserve?",
    severity: "neutral",
    children: [],
  };

  if (atk1 && atk2) {
    const canKO1 = atk1.isOHKO || atk1.is2HKO;
    const canKO2 = atk2.isOHKO || atk2.is2HKO;
    const combinedKO = t1 === t2 && (atk1.percentHP[1] + atk2.percentHP[1]) >= 100;
    pressNode.children.push({
      id: nextId(),
      type: "action",
      label: combinedKO
        ? `Focus ${t1.pokemon.name}  —  combined KO!`
        : canKO1
        ? `${lead1.pokemon.name}: ${atk1.name} secures KO on ${t1.pokemon.name}`
        : `${lead1.pokemon.name}: ${atk1.name} → ${t1.pokemon.name} (${atk1.damageLabel})`,
      detail: atk2 ? `${lead2.pokemon.name}: ${atk2.name} → ${t2.pokemon.name} (${atk2.damageLabel})` : undefined,
      severity: (canKO1 || canKO2 || combinedKO) ? "good" : "neutral",
      branchLabel: "Offense",
      children: [],
    });
  }

  // Protect if threatened
  const threatened = [lead1, lead2].filter(m => m.hasProtect && threatScore(opp1, m) + threatScore(opp2, m) > 180);
  if (threatened.length > 0) {
    const prot = threatened[0];
    const partner = prot === lead1 ? lead2 : lead1;
    const partnerTarget = findBestTarget(partner, opp1, opp2, weather);
    const partnerAtk = getBestAttack(partner, partnerTarget, weather);
    pressNode.children.push({
      id: nextId(),
      type: "action",
      label: `${prot.pokemon.name}: Protect`,
      detail: `Sponge incoming damage · ${partnerAtk ? `${partner.pokemon.name}: ${partnerAtk.name} (${partnerAtk.damageLabel})` : `${partner.pokemon.name} attacks`}`,
      severity: "neutral",
      branchLabel: "Protect",
      children: [],
    });
  }

  // Pivot to back mon if leads are losing the matchup
  const oppSwitchIn = predictSwitchIn(oppFullTeam.filter(m => m !== opp1 && m !== opp2), lead1, lead2);
  const bestSwitcher = backMons.sort((a, b) => {
    const sA = (getBestAttack(a, opp1, weather)?.percentHP[1] ?? 0) + (getBestAttack(a, opp2, weather)?.percentHP[1] ?? 0);
    const sB = (getBestAttack(b, opp1, weather)?.percentHP[1] ?? 0) + (getBestAttack(b, opp2, weather)?.percentHP[1] ?? 0);
    return sB - sA;
  })[0];
  if (bestSwitcher) {
    pressNode.children.push({
      id: nextId(),
      type: "switch",
      label: `Rotate ${bestSwitcher.pokemon.name} in`,
      detail: oppSwitchIn
        ? `Counter opponent's likely switch to ${oppSwitchIn.pokemon.name}`
        : "Fresh mon for a new angle of attack",
      pokemon: [bestSwitcher.pokemon.name],
      sprites: [bestSwitcher.pokemon.sprite],
      severity: "neutral",
      branchLabel: "Switch",
      children: [],
    });
  }

  actions.push(pressNode);
  return actions;
}

function findBestTarget(attacker: AnalyzedMon, opp1: AnalyzedMon, opp2: AnalyzedMon, weather?: string): AnalyzedMon {
  const bestVs1 = getBestAttack(attacker, opp1, weather);
  const bestVs2 = getBestAttack(attacker, opp2, weather);

  // Score: OHKO > 2HKO > max damage %
  const score = (r: AttackResult | null) => {
    if (!r) return 0;
    if (r.isOHKO) return 300;
    if (r.is2HKO) return 100 + r.percentHP[1];
    return r.percentHP[1];
  };

  const s1 = score(bestVs1);
  const s2 = score(bestVs2);
  if (s1 > s2) return opp1;
  if (s2 > s1) return opp2;
  // Tie-break: frailer target (lower bulk)
  const bulk1 = opp1.stats.hp * opp1.stats.defense;
  const bulk2 = opp2.stats.hp * opp2.stats.defense;
  return bulk1 <= bulk2 ? opp1 : opp2;
}

function isAbilityAntiIntimidate(ability: string): boolean {
  return [
    "Clear Body", "White Smoke", "Full Metal Body", "Hyper Cutter",
    "Inner Focus", "Own Tempo", "Oblivious", "Scrappy",
    "Defiant", "Competitive", "Mirror Armor", "Guard Dog",
  ].includes(ability);
}

function determineWinCondition(
  lead1: AnalyzedMon,
  lead2: AnalyzedMon,
  archetype: string,
  weather: string | null,
  terrain: string | null,
): string {
  if (archetype === "rain") return "Dominate with rain-boosted Water moves + Swift Swim speed";
  if (archetype === "sun") return "Overwhelm with sun-boosted Fire moves + Chlorophyll speed";
  if (archetype === "sand") return "Chip with sandstorm + Sand Rush physical sweeping";
  if (archetype === "trick-room" || archetype === "hard-trick-room") return "Set Trick Room and let slow powerhouses sweep";
  if (archetype === "tailwind") return "Set Tailwind early and outpace with strong attacks";
  if (archetype === "hyper-offense") return "Maximum turn 1 pressure  -  KO before they set up";

  // Generic based on leads
  if (lead1.hasSetup || lead2.hasSetup) return "Set up safely then sweep  -  protect your booster";
  if (lead1.hasFakeOut || lead2.hasFakeOut) return "Disrupt turn 1, establish board control, then overwhelm";
  if (weather) return `Control the game under ${weather}  -  leverage weather-boosted attacks`;
  if (terrain) return `Capitalize on ${terrain} terrain  -  position to maximize its boost`;

  return "Trade favorably and maintain board advantage";
}

function generateBackupPlan(
  lead1: AnalyzedMon,
  lead2: AnalyzedMon,
  fullTeam: AnalyzedMon[],
  oppTeam: AnalyzedMon[],
  winRate: number,
): string {
  const backMons = fullTeam.filter(m => m !== lead1 && m !== lead2);

  // If we have a Trick Room option in the back
  const backTR = backMons.find(m => m.hasTrickRoom);
  if (backTR && !lead1.hasTrickRoom && !lead2.hasTrickRoom) {
    return `If losing speed war, pivot to ${backTR.pokemon.name} for Trick Room mode`;
  }

  // Weather counter
  const backWeather = backMons.find(m => m.weatherOnEntry || m.weatherOnMega);
  if (backWeather) {
    return `Switch to ${backWeather.pokemon.name} to reset weather in your favor`;
  }

  // Intimidate cycle
  const backIntimidate = backMons.find(m => m.isIntimidateUser);
  if (backIntimidate) {
    return `Cycle ${backIntimidate.pokemon.name} for repeated Intimidate to weaken physical attackers`;
  }

  if (backMons.length > 0) {
    const bestBack = backMons[0];
    return `Pivot to ${bestBack.pokemon.name}  -  fresh matchup and momentum reset`;
  }

  return "Adjust your game plan based on what the opponent reveals";
}

// ── BATTLE BOARD ─────────────────────────────────────────────────────────────
// Flat per-turn snapshot used by the visual BattleBoard component.

const STATUS_MOVE_LABEL: Record<string, string> = {
  "Fake Out": "Flinch! (turn 1)",
  "Tailwind": "+2× SPE · 4 turns",
  "Trick Room": "Slow→Fast · 5 turns",
  "Thunder Wave": "Paralysis",
  "Will-O-Wisp": "Burn",
  "Helping Hand": "+50% dmg to ally",
  "Follow Me": "Redirects attacks",
  "Rage Powder": "Redirects attacks",
  "Parting Shot": "−Atk/SpA + switch",
  "Taunt": "Blocks status moves",
  "Encore": "Locks last move",
  "Spore": "Sleep",
  "Sleep Powder": "Sleep",
  "Icy Wind": "−Speed · both foes",
  "Electroweb": "−Speed · both foes",
  "Protect": "Blocks all attacks",
  "Wide Guard": "Blocks spread moves",
  "Quick Guard": "Blocks priority moves",
  "King's Shield": "Blocks + −2 Atk on contact",
  "Baneful Bunker": "Blocks + Poisons contact",
  "Silk Trap": "Blocks + −1 Spe contact",
  "Obstruct": "Blocks + −2 Def on contact",
  "Detect": "Blocks all attacks",
  "Mat Block": "Blocks attacks (turn 1 only)",
  "Trick": "Swaps held items",
  "Light Screen": "Halves SpA dmg · 5 turns",
  "Reflect": "Halves Atk dmg · 5 turns",
  "Aurora Veil": "Halves dmg · 5 turns",
  "Sunny Day": "Sets Sun · 5 turns",
  "Rain Dance": "Sets Rain · 5 turns",
  "Sandstorm": "Sets Sand · 5 turns",
  "Snowscape": "Sets Snow · 5 turns",
  "Hail": "Sets Hail · 5 turns",
  "Electric Terrain": "Electric terrain · 5 turns",
  "Grassy Terrain": "Grassy terrain · 5 turns",
  "Misty Terrain": "Misty terrain · 5 turns",
  "Psychic Terrain": "Psychic terrain · 5 turns",
  "Swords Dance": "+2 Atk",
  "Nasty Plot": "+2 SpA",
  "Calm Mind": "+1 SpA/SpD",
  "Quiver Dance": "+1 SpA/SpD/Spe",
  "Dragon Dance": "+1 Atk/Spe",
  "Bulk Up": "+1 Atk/Def",
  "Agility": "+2 Spe",
  "Yawn": "Causes Sleep next turn",
  "Glare": "Paralysis",
  "Confuse Ray": "Confusion",
  "Roar": "Force switch",
  "Whirlwind": "Force switch",
  "Perish Song": "KO after 3 turns",
  "Toxic": "Badly poisons",
  "Disable": "Disables last move",
  "Mean Look": "Prevents escape",
  "Gravity": "Grounds all Pokémon · 5 turns",
};

export interface BattleMoveEntry {
  moveName: string;
  moveType: PokemonType;
  category: "physical" | "special" | "status";
  targetName: string;    // Pokémon name, "both", or "–"
  effectLabel: string;   // damage range or status description
  percentHPMax: number;  // max damage %, for bar width (0 for status)
  isOHKO: boolean;
  is2HKO: boolean;
  effectiveness: number;
  priority: number;      // effective priority (after Prankster etc.)
  isSpread: boolean;
  koText: string;        // "OHKO", "2HKO", "56% OHKO", "—", etc.
  koColor: string;       // tailwind class for the KO label
  isRecommended: boolean; // highest-scoring move for this mon this turn
}

/** Describes one available mega form for a Pokémon on the board. */
export interface MegaOption {
  formIndex: number;    // index into pokemon.forms[]
  name: string;         // e.g. "Mega Charizard X"
  sprite: string;
  types: PokemonType[];
  ability: string;
  baseStats: BaseStats;
}

export interface BattleSlotInfo {
  pokemon: ChampionsPokemon;
  set: CommonSet;
  speed: number;
  ability: string;
  item: string;
  types: PokemonType[];
  topMoves: BattleMoveEntry[];
  priorityTag?: string;  // e.g. "Fake Out +3", "Prankster +1"
  hasPrankster: boolean;
  /** Available mega forms (empty if Pokémon cannot mega-evolve). */
  megaOptions: MegaOption[];
  /** Index of the currently active mega form (-1 = base), or -1 if not mega. */
  activeMegaIndex: number;
  /** True if this Pokémon is Ghost-type and immune to Normal-type Fake Out. */
  fakeOutImmune: boolean;
  /** True if this Pokémon can use Fake Out this turn. */
  hasFakeOut: boolean;
  /**
   * Human-readable note about active speed modifiers, e.g. "Swift Swim ×2" or "Scarf ×1.5 · Swift Swim ×2".
   * Undefined if no modifier is active.
   */
  speedNote: string | undefined;
  /**
   * Actual computed stats at Lv.50 (after EVs, IVs, nature, mega form if active).
   * Useful for displaying a stat spread to the user.
   */
  actualStats: { hp: number; attack: number; defense: number; spAtk: number; spDef: number; speed: number };
  /**
   * Meta move frequency derived from USAGE_DATA for this Pokémon.
   * Sorted by frequency descending. Empty if no usage data exists.
   * Covers ALL moves seen in at least one set, up to 10 entries.
   */
  metaMoves: MetaMoveEntry[];
}

/** Per-Pokémon calcdex overrides (stages, HP, conditions). */
export interface MonOverrides {
  hpPct?: number;          // 1–100 (current HP %)
  atkStage?: number;       // −6 to +6
  defStage?: number;
  spAtkStage?: number;
  spDefStage?: number;
  spdStage?: number;       // −6 to +6 speed stage
  /** Status condition: burn x0.5 Atk, paralysis x0.5 Spe, sleep/freeze cannot move, poison/badly-poison chip */
  status?: "burn" | "paralysis" | "sleep" | "freeze" | "poison" | "badly-poison" | null;
  isBurned?: boolean;      // legacy alias
  helpingHand?: boolean;   // this mon has Helping Hand active
  /** Index into pokemon.forms[] of the active mega form (-1 = base form, undefined = auto from item) */
  megaFormIndex?: number;
  /**
   * Custom move overrides for this Pokémon. When set, replaces the set’s moves
   * with these 4 move names (must be valid entries in the Pokémon’s learnset).
   */
  moveOverrides?: [string, string, string, string];
}

/** Defensive screens active on one side. */
export interface SideScreens {
  lightScreen?: boolean;
  reflect?: boolean;
  auroraVeil?: boolean;
}

export interface FieldOverrides {
  /** null = force clear weather; string = force this weather; undefined = auto-detect */
  weather?: string | null;
  /** null = force no terrain; string = force this terrain; undefined = auto-detect */
  terrain?: string | null;
  trickRoom?: boolean;
  myTailwind?: boolean;
  oppTailwind?: boolean;
  /** Per-slot calcdex overrides */
  myMon1?: MonOverrides;
  myMon2?: MonOverrides;
  oppMon1?: MonOverrides;
  oppMon2?: MonOverrides;
  /** Defensive screens per side */
  mySide?: SideScreens;
  oppSide?: SideScreens;
}

export interface BattleBoardData {
  mySlot1: BattleSlotInfo;
  mySlot2: BattleSlotInfo;
  oppSlot1: BattleSlotInfo;
  oppSlot2: BattleSlotInfo;
  /** Speed-ordered list; effectiveSpeed already doubles when tailwind is active */
  speedOrder: Array<{ name: string; sprite: string; speed: number; effectiveSpeed: number; isOurs: boolean; hasTailwind: boolean }>;
  winRate: number;
  weather?: string;
  terrain?: string;
  hasTrickRoom: boolean;
  myTailwind: boolean;
  oppTailwind: boolean;
  mySide: SideScreens;
  oppSide: SideScreens;
}

export function computeBattleBoard(
  myMon1: ChampionsPokemon, mySet1: CommonSet,
  myMon2: ChampionsPokemon, mySet2: CommonSet,
  oppMon1: ChampionsPokemon, oppSet1: CommonSet,
  oppMon2: ChampionsPokemon, oppSet2: CommonSet,
  winRate: number,
  overrides?: FieldOverrides,
): BattleBoardData {
  const my1 = analyzeMon(myMon1, mySet1);
  const my2 = analyzeMon(myMon2, mySet2);
  const opp1 = analyzeMon(oppMon1, oppSet1);
  const opp2 = analyzeMon(oppMon2, oppSet2);

  // Weather: override takes priority (null = clear, string = forced, undefined = auto)
  const autoWeather = my1.weatherOnEntry ?? my2.weatherOnEntry ?? opp1.weatherOnEntry ?? opp2.weatherOnEntry;
  const weather = overrides !== undefined && "weather" in overrides
    ? (overrides.weather ?? undefined)
    : autoWeather;

  // Terrain: override takes priority (null = clear, string = forced, undefined = auto)
  const autoTerrain = my1.terrainOnEntry ?? my2.terrainOnEntry ?? opp1.terrainOnEntry ?? opp2.terrainOnEntry;
  const terrain = overrides !== undefined && "terrain" in overrides
    ? (overrides.terrain ?? undefined)
    : autoTerrain;

  const hasTrickRoom = overrides?.trickRoom ?? (my1.hasTrickRoom || my2.hasTrickRoom || opp1.hasTrickRoom || opp2.hasTrickRoom);
  const myTailwind  = overrides?.myTailwind  ?? false;
  const oppTailwind = overrides?.oppTailwind ?? false;
  const mySide:  SideScreens = overrides?.mySide  ?? {};
  const oppSide: SideScreens = overrides?.oppSide ?? {};

  const weatherOpt = weather as import("./damage-calc").DamageCalcOptions["weather"] | undefined;
  const terrainOpt = terrain as import("./damage-calc").DamageCalcOptions["terrain"] | undefined;

  /**
   * Compute the effective speed for a mon given the current field conditions.
   * Returns the multiplied speed and a human-readable note for display.
   *
   * Applies (in order, multiplicatively):
   *   1. Choice Scarf: ×1.5
   *   2. Weather speed ability (Swift Swim, Chlorophyll, Sand Rush, Slush Rush): ×2
   *   3. Terrain speed ability (Surge Surfer): ×2
   *   4. Tailwind is NOT included here — it's handled separately per side in allFour
   */
  function resolveEffectiveSpeed(mon: AnalyzedMon, ov?: MonOverrides): { speed: number; speedNote: string | undefined } {
    let speed = mon.stats.speed;
    const notes: string[] = [];

    // Speed stage modifier from Calcdex (-6 to +6)
    const spdStage = ov?.spdStage ?? 0;
    if (spdStage !== 0) {
      const s = Math.max(-6, Math.min(6, spdStage));
      if (s >= 0) speed = Math.floor(speed * (2 + s) / 2);
      else speed = Math.floor(speed * 2 / (2 - s));
      notes.push(`Spe ${s >= 0 ? "+" : ""}${s}`);
    }

    if (mon.hasChoiceScarf) {
      speed = Math.floor(speed * 1.5);
      notes.push("Scarf ×1.5");
    }

    const weatherMatch = mon.weatherSpeedAbility && weather && mon.weatherSpeedAbility === weather;
    if (weatherMatch) {
      speed = Math.floor(speed * 2);
      const abilityName = mon.set.ability;
      notes.push(`${abilityName} ×2`);
    }

    const terrainMatch = mon.terrainSpeedAbility && terrain && mon.terrainSpeedAbility === terrain;
    if (terrainMatch) {
      speed = Math.floor(speed * 2);
      const abilityName = mon.set.ability;
      notes.push(`${abilityName} ×2`);
    }

    // Paralysis halves speed (applied last, after all other multipliers)
    if (ov?.status === "paralysis") {
      speed = Math.floor(speed * 0.5);
      notes.push("PAR ×0.5");
    }

    return {
      speed,
      speedNote: notes.length > 0 ? notes.join(" · ") : undefined,
    };
  }

  // ── KO label helper ──────────────────────────────────────────────────────
  function koLabel(r: import("./damage-calc").DamageResult): { koText: string; koColor: string } {
    const { koChance, percentHP } = r;
    if (percentHP[1] === 0) return { koText: "—", koColor: "text-muted-foreground/40" };
    if (koChance.n === 1 && koChance.chance >= 1) return { koText: "OHKO",  koColor: "text-green-500 font-bold" };
    if (koChance.n === 1) return { koText: `${Math.round(koChance.chance * 100)}% OHKO`, koColor: "text-green-400" };
    if (koChance.n === 2 && koChance.chance >= 1) return { koText: "2HKO",  koColor: "text-amber-500 font-semibold" };
    if (koChance.n === 2) return { koText: `${Math.round(koChance.chance * 100)}% 2HKO`, koColor: "text-amber-400" };
    if (koChance.n === 3) return { koText: "3HKO",  koColor: "text-orange-400" };
    if (koChance.n <= 6)  return { koText: `${koChance.n}HKO`, koColor: "text-red-400" };
    return { koText: "—", koColor: "text-muted-foreground/40" };
  }

  // ── Apply per-mon overrides to engine inputs ──────────────────────────────
  function withAtkOverrides(
    base: import("./damage-calc").DamageCalcPokemon,
    ov?: MonOverrides,
  ): import("./damage-calc").DamageCalcPokemon {
    if (!ov) return base;
    return {
      ...base,
      atkStages:    ov.atkStage   ?? base.atkStages,
      spAtkStages:  ov.spAtkStage ?? base.spAtkStages,
      // Burn can come from the new unified `status` field or the legacy `isBurned` boolean
      isBurned:     (ov.status === "burn" || ov.isBurned) ?? base.isBurned,
      currentHPPercent: ov.hpPct ?? base.currentHPPercent,
    };
  }

  function withDefOverrides(
    base: import("./damage-calc").DamageCalcTarget,
    ov?: MonOverrides,
  ): import("./damage-calc").DamageCalcTarget {
    if (!ov) return base;
    return {
      ...base,
      defStages:   ov.defStage   ?? base.defStages,
      spDefStages: ov.spDefStage ?? base.spDefStages,
      currentHPPercent: ov.hpPct ?? base.currentHPPercent,
    };
  }

  const IMPACTFUL_STATUS = new Set([
    "Tailwind", "Trick Room", "Thunder Wave", "Parting Shot", "Taunt",
    "Encore", "Helping Hand", "Follow Me", "Rage Powder", "Fake Out",
    "Will-O-Wisp", "Spore", "Sleep Powder", "Icy Wind", "Electroweb",
  ]);

  function computeTopMoves(
    attacker: AnalyzedMon,
    atkOv: MonOverrides | undefined,
    atkSide: SideScreens,
    defA: AnalyzedMon,
    defAOv: MonOverrides | undefined,
    defSide: SideScreens,
    defB: AnalyzedMon,
    defBOv: MonOverrides | undefined,
  ): BattleMoveEntry[] {
    const scored: { entry: BattleMoveEntry; score: number }[] = [];

    // If the user has overridden this mon's moves, use those instead of the set's moves
    const movesToUse: typeof attacker.moves = atkOv?.moveOverrides
      ? atkOv.moveOverrides.map(name => ({ name, data: getMove(name), role: getMove(name) ? getMoveRole(getMove(name)!) : "utility" }))
      : attacker.moves;

    for (const m of movesToUse) {
      // Unknown move — show placeholder
      if (!m.data) {
        scored.push({
          entry: {
            moveName: m.name,
            moveType: "normal",
            category: "status",
            targetName: "–",
            effectLabel: "–",
            percentHPMax: 0,
            isOHKO: false,
            is2HKO: false,
            effectiveness: 1,
            priority: 0,
            isSpread: false,
            koText: "—",
            koColor: "text-muted-foreground/40",
            isRecommended: false,
          },
          score: -1,
        });
        continue;
      }

      const effectivePriority = m.data.category === "status" && attacker.hasPrankster
        ? m.data.priority + 1
        : m.data.priority;

      if (m.data.category === "status") {
        const isProtection = m.role === "protection";
        const label = STATUS_MOVE_LABEL[m.name] ?? (m.data as { effect?: string }).effect ?? "";
        const score = m.name === "Fake Out" ? 200
          : isProtection ? 30
          : IMPACTFUL_STATUS.has(m.name) ? 50
          : 10;
        scored.push({
          entry: {
            moveName: m.name,
            moveType: m.data.type,
            category: "status",
            targetName: "–",
            effectLabel: label,
            percentHPMax: 0,
            isOHKO: false,
            is2HKO: false,
            effectiveness: 1,
            priority: effectivePriority,
            isSpread: false,
            koText: "—",
            koColor: "text-muted-foreground/40",
            isRecommended: false,
          },
          score,
        });
        continue;
      }

      // Damaging move
      const atkPokemon = withAtkOverrides(toCalcPokemon(attacker), atkOv);
      const hasHH = atkOv?.helpingHand ?? false;
      const sharedOpts = {
        isDoubles: true,
        computeKOChance: true as true,
        weather: weatherOpt,
        terrain: terrainOpt,
        helpingHand: hasHH,
      };
      const calcOpts = { ...sharedOpts, lightScreen: defSide.lightScreen, reflect: defSide.reflect, auroraVeil: defSide.auroraVeil };

      const spread = isSpreadMove(m.data);
      if (spread) {
        const rA = calculateDamage(
          atkPokemon,
          withDefOverrides(toCalcTarget(defA), defAOv),
          m.name,
          calcOpts,
        );
        const rB = calculateDamage(
          atkPokemon,
          withDefOverrides(toCalcTarget(defB), defBOv),
          m.name,
          calcOpts,
        );
        const bothImmune = rA.effectiveness === 0 && rB.effectiveness === 0;
        const loA = Math.round(rA.percentHP[0]), hiA = Math.round(rA.percentHP[1]);
        const loB = Math.round(rB.percentHP[0]), hiB = Math.round(rB.percentHP[1]);
        const bestR = rA.percentHP[1] >= rB.percentHP[1] ? rA : rB;
        const { koText, koColor } = koLabel(bestR);
        const score = bothImmune ? -999
          : bestR.isOHKO ? 300
          : bestR.is2HKO ? 100 + bestR.percentHP[1]
          : bestR.percentHP[1];
        scored.push({
          entry: {
            moveName: m.name,
            moveType: m.data.type,
            category: m.data.category as "physical" | "special",
            targetName: bothImmune ? "–" : "both",
            effectLabel: bothImmune ? "—" : `${loA}–${hiA}% / ${loB}–${hiB}%`,
            percentHPMax: bothImmune ? 0 : Math.round(Math.max(rA.percentHP[1], rB.percentHP[1])),
            isOHKO: rA.isOHKO || rB.isOHKO,
            is2HKO: rA.is2HKO || rB.is2HKO,
            effectiveness: Math.max(rA.effectiveness, rB.effectiveness),
            priority: m.data.priority,
            isSpread: true,
            koText: bothImmune ? "—" : koText,
            koColor: bothImmune ? "text-muted-foreground/40" : koColor,
            isRecommended: false,
          },
          score,
        });
      } else {
        const rA = calculateDamage(atkPokemon, withDefOverrides(toCalcTarget(defA), defAOv), m.name, calcOpts);
        const rB = calculateDamage(atkPokemon, withDefOverrides(toCalcTarget(defB), defBOv), m.name, calcOpts);
        const scoreA = rA.effectiveness === 0 ? -999 : rA.isOHKO ? 300 : rA.is2HKO ? 100 + rA.percentHP[1] : rA.percentHP[1];
        const scoreB = rB.effectiveness === 0 ? -999 : rB.isOHKO ? 300 : rB.is2HKO ? 100 + rB.percentHP[1] : rB.percentHP[1];
        const best = scoreA >= scoreB ? { r: rA, target: defA } : { r: rB, target: defB };
        const bothImmune = scoreA === -999 && scoreB === -999;
        const { koText, koColor } = koLabel(best.r);
        scored.push({
          entry: {
            moveName: m.name,
            moveType: m.data.type,
            category: m.data.category as "physical" | "special",
            targetName: bothImmune ? "–" : best.target.pokemon.name,
            effectLabel: bothImmune ? "—" : makeDamageLabel(best.r),
            percentHPMax: bothImmune ? 0 : Math.round(best.r.percentHP[1]),
            isOHKO: best.r.isOHKO,
            is2HKO: best.r.is2HKO,
            effectiveness: best.r.effectiveness,
            priority: m.data.priority,
            isSpread: false,
            koText: bothImmune ? "—" : koText,
            koColor: bothImmune ? "text-muted-foreground/40" : koColor,
            isRecommended: false,
          },
          score: Math.max(scoreA, scoreB),
        });
      }
    }

    // Mark the highest-scored non-terrible move as recommended
    let bestScore = -Infinity;
    let bestIdx = -1;
    scored.forEach(({ score }, i) => {
      if (score > bestScore && score > -999) { bestScore = score; bestIdx = i; }
    });
    if (bestIdx >= 0) scored[bestIdx].entry.isRecommended = true;

    return scored.map(s => s.entry);
  }

  // ── Mega form helpers ─────────────────────────────────────────────────────
  /** Build MegaOption list for a Pokémon: all forms[] where isMega === true. */
  function getMegaOptions(pokemon: ChampionsPokemon): MegaOption[] {
    if (!pokemon.hasMega || !pokemon.forms) return [];
    return pokemon.forms
      .map((f, idx) => ({ f, idx }))
      .filter(({ f }) => f.isMega)
      .map(({ f, idx }) => ({
        formIndex: idx,
        name: f.name,
        sprite: f.sprite,
        types: f.types as PokemonType[],
        ability: f.abilities[0]?.name ?? "",
        baseStats: f.baseStats,
      }));
  }

  /**
   * If monOv.megaFormIndex is set (≥0), return a patched AnalyzedMon reflecting
   * the mega form's stats/types/ability/sprite/speed.
   */
  function applyMegaToMon(mon: AnalyzedMon, monOv?: MonOverrides): AnalyzedMon {
    if (monOv?.megaFormIndex == null || monOv.megaFormIndex < 0) return mon;
    const form = mon.pokemon.forms?.[monOv.megaFormIndex];
    if (!form?.isMega) return mon;
    const megaAbility = form.abilities[0]?.name ?? mon.set.ability;
    const megaStats = calculateStats(form.baseStats, mon.set.sp, mon.set.nature as NatureName);
    const megaAbilityEffect = getAbilityEffect(megaAbility);
    // Build a patched pokemon object so toCalcPokemon picks up new baseStats/types
    const patchedPokemon: ChampionsPokemon = {
      ...mon.pokemon,
      baseStats: form.baseStats,
      types: form.types as PokemonType[],
      sprite: form.sprite,
    };
    return {
      ...mon,
      pokemon: patchedPokemon,
      stats: megaStats,
      speed: megaStats.speed,
      set: { ...mon.set, ability: megaAbility },
      hasPrankster: PRANKSTER_ABILITIES.has(megaAbility),
      weatherOnEntry: megaAbilityEffect?.setsWeather ?? mon.weatherOnEntry,
      terrainOnEntry: megaAbilityEffect?.setsTerrain ?? mon.terrainOnEntry,
      weatherSpeedAbility: megaAbilityEffect?.weatherSpeed ?? mon.weatherSpeedAbility,
      terrainSpeedAbility: megaAbilityEffect?.terrainSpeed ?? mon.terrainSpeedAbility,
      hasChoiceScarf: mon.hasChoiceScarf,
    };
  }

  function makeSlot(
    mon: AnalyzedMon,
    monOv: MonOverrides | undefined,
    monSide: SideScreens,
    isOurs: boolean,
  ): BattleSlotInfo {
    const megaOptions = getMegaOptions(mon.pokemon);
    const activeMegaIndex = monOv?.megaFormIndex ?? -1;
    // Apply mega transformation to the mon before computing moves
    const effectiveMon = applyMegaToMon(mon, monOv);
    const { speed: effectiveSpeed, speedNote } = resolveEffectiveSpeed(effectiveMon, monOv);

    const defA     = isOurs ? opp1 : my1;
    const defAOv   = isOurs ? overrides?.oppMon1 : overrides?.myMon1;
    const defSide  = isOurs ? oppSide : mySide;
    const defB     = isOurs ? opp2 : my2;
    const defBOv   = isOurs ? overrides?.oppMon2 : overrides?.myMon2;

    // Also apply mega to defensive opponents so their damage-taken reflects mega types
    const effectiveDefA = isOurs ? applyMegaToMon(defA, defAOv) : defA;
    const effectiveDefB = isOurs ? applyMegaToMon(defB, defBOv) : defB;
    const effectiveDefAUs = !isOurs ? applyMegaToMon(defA, defAOv) : defA;
    const effectiveDefBUs = !isOurs ? applyMegaToMon(defB, defBOv) : defB;

    return {
      pokemon: effectiveMon.pokemon,
      set: effectiveMon.set,
      speed: effectiveSpeed,
      ability: effectiveMon.set.ability,
      item: effectiveMon.set.item,
      types: effectiveMon.pokemon.types,
      topMoves: computeTopMoves(
        effectiveMon, monOv, monSide,
        isOurs ? effectiveDefA : effectiveDefAUs, defAOv, defSide,
        isOurs ? effectiveDefB : effectiveDefBUs, defBOv,
      ),
      priorityTag: effectiveMon.hasFakeOut ? "Fake Out +3"
        : effectiveMon.highestPriorityMove ? `${effectiveMon.highestPriorityMove.name} +${effectiveMon.highestPriorityMove.priority}`
        : effectiveMon.hasPrankster ? "Prankster +1"
        : undefined,
      hasPrankster: effectiveMon.hasPrankster,
      megaOptions,
      activeMegaIndex,
      fakeOutImmune: effectiveMon.pokemon.types.includes("ghost"),
      hasFakeOut: effectiveMon.hasFakeOut,
      speedNote,
      actualStats: effectiveMon.stats,
      metaMoves: getTopMovesForPokemon(mon.pokemon.id, 10),
    };
  }

  // Resolve effective mons (with mega if active) for speed order
  const effMy1  = applyMegaToMon(my1,  overrides?.myMon1);
  const effMy2  = applyMegaToMon(my2,  overrides?.myMon2);
  const effOpp1 = applyMegaToMon(opp1, overrides?.oppMon1);
  const effOpp2 = applyMegaToMon(opp2, overrides?.oppMon2);

  const effMy1Speed  = resolveEffectiveSpeed(effMy1,  overrides?.myMon1).speed;
  const effMy2Speed  = resolveEffectiveSpeed(effMy2,  overrides?.myMon2).speed;
  const effOpp1Speed = resolveEffectiveSpeed(effOpp1, overrides?.oppMon1).speed;
  const effOpp2Speed = resolveEffectiveSpeed(effOpp2, overrides?.oppMon2).speed;

  const allFour = [
    { name: effMy1.pokemon.name,  sprite: effMy1.pokemon.sprite,  speed: effMy1Speed,  effectiveSpeed: myTailwind  ? effMy1Speed  * 2 : effMy1Speed,  isOurs: true,  hasTailwind: myTailwind },
    { name: effMy2.pokemon.name,  sprite: effMy2.pokemon.sprite,  speed: effMy2Speed,  effectiveSpeed: myTailwind  ? effMy2Speed  * 2 : effMy2Speed,  isOurs: true,  hasTailwind: myTailwind },
    { name: effOpp1.pokemon.name, sprite: effOpp1.pokemon.sprite, speed: effOpp1Speed, effectiveSpeed: oppTailwind ? effOpp1Speed * 2 : effOpp1Speed, isOurs: false, hasTailwind: oppTailwind },
    { name: effOpp2.pokemon.name, sprite: effOpp2.pokemon.sprite, speed: effOpp2Speed, effectiveSpeed: oppTailwind ? effOpp2Speed * 2 : effOpp2Speed, isOurs: false, hasTailwind: oppTailwind },
  ];
  const speedOrder = hasTrickRoom
    ? [...allFour].sort((a, b) => a.effectiveSpeed - b.effectiveSpeed)
    : [...allFour].sort((a, b) => b.effectiveSpeed - a.effectiveSpeed);

  return {
    mySlot1:  makeSlot(my1,  overrides?.myMon1,  mySide,  true),
    mySlot2:  makeSlot(my2,  overrides?.myMon2,  mySide,  true),
    oppSlot1: makeSlot(opp1, overrides?.oppMon1, oppSide, false),
    oppSlot2: makeSlot(opp2, overrides?.oppMon2, oppSide, false),
    speedOrder,
    winRate,
    weather:  weather  ?? undefined,
    terrain:  terrain  ?? undefined,
    hasTrickRoom,
    myTailwind,
    oppTailwind,
    mySide,
    oppSide,
  };
}
