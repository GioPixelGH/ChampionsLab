"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import {
  Trophy, Users, ChevronRight, X, Check, Plus, Trash2,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

type Format = "single-elimination" | "swiss";

interface Match {
  id: string;
  round: number;
  matchIndex: number; // position in round
  player1: string | null; // null = bye
  player2: string | null;
  winner: string | null;
  isBye: boolean;
}

interface SwissMatch {
  id: string;
  round: number;
  player1: string;
  player2: string;
  winner: string | null; // null = not played
}

interface Standing {
  player: string;
  wins: number;
  losses: number;
}

interface BracketState {
  name: string;
  format: Format;
  players: string[];
  matches: Match[];          // single elimination
  swissMatches: SwissMatch[]; // swiss
  swissRound: number;
  createdAt: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Storage
// ─────────────────────────────────────────────────────────────────────────────

const STORAGE_KEY = "champions-lab:bracket";

function loadBracket(): BracketState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as BracketState) : null;
  } catch {
    return null;
  }
}

function saveBracket(state: BracketState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore storage errors
  }
}

function clearBracket() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Bracket generation helpers
// ─────────────────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Returns ceil(log2(n)) */
function roundsNeeded(n: number): number {
  return Math.ceil(Math.log2(n));
}

/** Build first-round matches for single elimination.
 *  Players are seeded randomly. Byes are added to make the bracket a power-of-2.
 */
function buildSingleEliminationMatches(players: string[]): Match[] {
  const seeded = shuffle(players);
  const rounds = roundsNeeded(seeded.length);
  const slots = Math.pow(2, rounds); // bracket size
  const byes = slots - seeded.length;

  // Pad with nulls for byes
  const padded: (string | null)[] = [...seeded, ...Array(byes).fill(null)];

  const matches: Match[] = [];

  // Round 1
  for (let i = 0; i < slots / 2; i++) {
    const p1 = padded[i * 2];
    const p2 = padded[i * 2 + 1];
    const isBye = p2 === null || p1 === null;
    const winner = isBye ? (p1 ?? p2) : null;
    matches.push({
      id: `r1-m${i}`,
      round: 1,
      matchIndex: i,
      player1: p1,
      player2: p2,
      winner,
      isBye,
    });
  }

  // Create placeholder matches for subsequent rounds
  for (let r = 2; r <= rounds; r++) {
    const matchesInRound = Math.pow(2, rounds - r);
    for (let i = 0; i < matchesInRound; i++) {
      matches.push({
        id: `r${r}-m${i}`,
        round: r,
        matchIndex: i,
        player1: null,
        player2: null,
        winner: null,
        isBye: false,
      });
    }
  }

  // Auto-advance byes in round 1
  const r1Matches = matches.filter((m) => m.round === 1);
  for (const m of r1Matches) {
    if (m.isBye && m.winner !== null) {
      advanceWinner(matches, m, rounds);
    }
  }

  return matches;
}

/** Advance a winner into the next round slot (mutates the array in place). */
function advanceWinner(matches: Match[], completedMatch: Match, totalRounds: number) {
  const nextRound = completedMatch.round + 1;
  if (nextRound > totalRounds) return;

  const nextMatchIndex = Math.floor(completedMatch.matchIndex / 2);
  const nextMatch = matches.find(
    (m) => m.round === nextRound && m.matchIndex === nextMatchIndex
  );
  if (!nextMatch) return;

  if (completedMatch.matchIndex % 2 === 0) {
    nextMatch.player1 = completedMatch.winner;
  } else {
    nextMatch.player2 = completedMatch.winner;
  }

  // Check if the next match is a bye too (shouldn't happen after round 1,
  // but guard anyway)
  const nextIsBye = nextMatch.player1 === null || nextMatch.player2 === null;
  if (nextIsBye && (nextMatch.player1 !== null || nextMatch.player2 !== null)) {
    nextMatch.isBye = true;
    nextMatch.winner = nextMatch.player1 ?? nextMatch.player2;
    advanceWinner(matches, nextMatch, totalRounds);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Swiss generation
// ─────────────────────────────────────────────────────────────────────────────

function buildSwissRound(players: string[], round: number, existing: SwissMatch[]): SwissMatch[] {
  // Simple random pairing for round 1, then pair by record for subsequent rounds
  const standings = computeStandings(players, existing);
  const sorted = [...standings].sort((a, b) => {
    if (b.wins !== a.wins) return b.wins - a.wins;
    return a.losses - b.losses;
  });

  const paired: SwissMatch[] = [];
  const used = new Set<string>();

  for (let i = 0; i < sorted.length - 1; i++) {
    if (used.has(sorted[i].player)) continue;
    for (let j = i + 1; j < sorted.length; j++) {
      if (used.has(sorted[j].player)) continue;
      // Avoid rematches
      const alreadyPlayed = existing.some(
        (m) =>
          (m.player1 === sorted[i].player && m.player2 === sorted[j].player) ||
          (m.player1 === sorted[j].player && m.player2 === sorted[i].player)
      );
      if (alreadyPlayed) continue;
      paired.push({
        id: `swiss-r${round}-m${paired.length}`,
        round,
        player1: sorted[i].player,
        player2: sorted[j].player,
        winner: null,
      });
      used.add(sorted[i].player);
      used.add(sorted[j].player);
      break;
    }
  }

  // Any remaining players with no pair get a bye (shouldn't happen with even counts)
  return paired;
}

function computeStandings(players: string[], matches: SwissMatch[]): Standing[] {
  const map = new Map<string, Standing>();
  for (const p of players) map.set(p, { player: p, wins: 0, losses: 0 });
  for (const m of matches) {
    if (!m.winner) continue;
    const w = map.get(m.winner);
    if (w) w.wins++;
    const loser = m.winner === m.player1 ? m.player2 : m.player1;
    const l = map.get(loser);
    if (l) l.losses++;
  }
  return [...map.values()];
}

// ─────────────────────────────────────────────────────────────────────────────
// Export helpers
// ─────────────────────────────────────────────────────────────────────────────

function exportBracketText(state: BracketState): string {
  const lines: string[] = [`=== ${state.name} ===`, `Format: ${state.format === "single-elimination" ? "Single Elimination" : "Swiss"}`, ""];

  if (state.format === "single-elimination") {
    const rounds = roundsNeeded(state.players.length);
    for (let r = 1; r <= rounds; r++) {
      const roundMatches = state.matches.filter((m) => m.round === r);
      const label = r === rounds ? "Final" : r === rounds - 1 ? "Semi-Final" : `Round ${r}`;
      lines.push(`--- ${label} ---`);
      for (const m of roundMatches) {
        if (m.isBye) continue;
        const p1 = m.player1 ?? "TBD";
        const p2 = m.player2 ?? "TBD";
        const result = m.winner ? ` → Winner: ${m.winner}` : "";
        lines.push(`  ${p1} vs ${p2}${result}`);
      }
      lines.push("");
    }
    const finalMatch = state.matches.find((m) => m.round === rounds);
    if (finalMatch?.winner) {
      lines.push(`🏆 Tournament Winner: ${finalMatch.winner}`);
    }
  } else {
    // Swiss
    const maxRound = state.swissRound;
    for (let r = 1; r <= maxRound; r++) {
      const roundMatches = state.swissMatches.filter((m) => m.round === r);
      lines.push(`--- Round ${r} ---`);
      for (const m of roundMatches) {
        const result = m.winner ? ` → ${m.winner}` : " → TBD";
        lines.push(`  ${m.player1} vs ${m.player2}${result}`);
      }
      lines.push("");
    }
    const standings = computeStandings(state.players, state.swissMatches).sort(
      (a, b) => b.wins - a.wins || a.losses - b.losses
    );
    lines.push("--- Standings ---");
    standings.forEach((s, i) => {
      lines.push(`  ${i + 1}. ${s.player} (${s.wins}W-${s.losses}L)`);
    });
  }

  return lines.join("\n");
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function MatchCard({
  match,
  onSetWinner,
  isActive,
}: {
  match: Match;
  onSetWinner: (matchId: string, winner: string) => void;
  isActive: boolean;
}) {
  if (match.isBye) {
    return (
      <div className="flex flex-col gap-1 min-w-[160px] max-w-[200px]">
        <div className="px-3 py-2 rounded-xl bg-muted/40 border border-border/50 text-xs text-muted-foreground italic">
          {match.winner ?? "BYE"}
          <span className="ml-1.5 text-[10px] uppercase tracking-wide opacity-60">bye</span>
        </div>
      </div>
    );
  }

  const p1 = match.player1;
  const p2 = match.player2;
  const bothReady = p1 !== null && p2 !== null;

  return (
    <div className="flex flex-col gap-1 min-w-[160px] max-w-[200px]">
      {[p1, p2].map((player, idx) => {
        const isWinner = match.winner === player && player !== null;
        const isLoser = match.winner !== null && match.winner !== player && player !== null;
        const canClick = bothReady && isActive && player !== null;

        return (
          <motion.button
            key={idx}
            layout
            onClick={() => canClick && onSetWinner(match.id, player!)}
            disabled={!canClick}
            className={cn(
              "relative flex items-center justify-between gap-2 px-3 py-2 rounded-xl border text-sm font-medium transition-all text-left",
              player === null
                ? "bg-muted/20 border-border/30 text-muted-foreground/40 cursor-default"
                : isWinner
                ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-700 dark:text-emerald-300 shadow-sm shadow-emerald-500/10"
                : isLoser
                ? "bg-muted/20 border-border/30 text-muted-foreground/50 line-through"
                : canClick
                ? "bg-card border-border hover:border-primary/40 hover:bg-primary/5 cursor-pointer"
                : "bg-card border-border cursor-default"
            )}
          >
            <span className="truncate max-w-[120px]">
              {player ?? "TBD"}
            </span>
            <AnimatePresence mode="wait">
              {isWinner && (
                <motion.span
                  key="check"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Check size={14} className="text-emerald-500 flex-shrink-0" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}

function SwissMatchCard({
  match,
  onSetWinner,
}: {
  match: SwissMatch;
  onSetWinner: (matchId: string, winner: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1 min-w-[160px] max-w-[220px]">
      {[match.player1, match.player2].map((player, idx) => {
        const isWinner = match.winner === player;
        const isLoser = match.winner !== null && match.winner !== player;

        return (
          <motion.button
            key={idx}
            layout
            onClick={() => onSetWinner(match.id, player)}
            className={cn(
              "relative flex items-center justify-between gap-2 px-3 py-2 rounded-xl border text-sm font-medium transition-all text-left",
              isWinner
                ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-700 dark:text-emerald-300 shadow-sm shadow-emerald-500/10"
                : isLoser
                ? "bg-muted/20 border-border/30 text-muted-foreground/50 line-through"
                : "bg-card border-border hover:border-primary/40 hover:bg-primary/5 cursor-pointer"
            )}
          >
            <span className="truncate max-w-[140px]">{player}</span>
            <AnimatePresence mode="wait">
              {isWinner && (
                <motion.span
                  key="check"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Check size={14} className="text-emerald-500 flex-shrink-0" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main page
// ─────────────────────────────────────────────────────────────────────────────

export default function BracketPage() {
  // ── Phase: "setup" | "bracket" ──────────────────────────────────────────────
  const [phase, setPhase] = useState<"setup" | "bracket">("setup");
  const [bracket, setBracket] = useState<BracketState | null>(null);

  // Setup form state
  const [tournamentName, setTournamentName] = useState("My Tournament");
  const [playerInput, setPlayerInput] = useState("");
  const [playerList, setPlayerList] = useState<string[]>([]);
  const [format, setFormat] = useState<Format>("single-elimination");

  // Notifications
  const [copied, setCopied] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = loadBracket();
    if (saved) {
      setBracket(saved);
      setPhase("bracket");
    }
  }, []);

  // ── Setup: add player ───────────────────────────────────────────────────────
  const addPlayer = useCallback(() => {
    const name = playerInput.trim();
    if (!name || playerList.includes(name) || playerList.length >= 16) return;
    setPlayerList((prev) => [...prev, name]);
    setPlayerInput("");
  }, [playerInput, playerList]);

  const removePlayer = useCallback((name: string) => {
    setPlayerList((prev) => prev.filter((p) => p !== name));
  }, []);

  // ── Generate bracket ────────────────────────────────────────────────────────
  const generateBracket = useCallback(() => {
    if (playerList.length < 4) return;

    let newBracket: BracketState;
    if (format === "single-elimination") {
      const matches = buildSingleEliminationMatches(playerList);
      newBracket = {
        name: tournamentName.trim() || "Tournament",
        format,
        players: playerList,
        matches,
        swissMatches: [],
        swissRound: 0,
        createdAt: Date.now(),
      };
    } else {
      // Swiss: start round 1
      const round1 = buildSwissRound(playerList, 1, []);
      newBracket = {
        name: tournamentName.trim() || "Tournament",
        format,
        players: playerList,
        matches: [],
        swissMatches: round1,
        swissRound: 1,
        createdAt: Date.now(),
      };
    }

    saveBracket(newBracket);
    setBracket(newBracket);
    setPhase("bracket");
  }, [playerList, format, tournamentName]);

  // ── Single elimination: set winner ─────────────────────────────────────────
  const setMatchWinner = useCallback(
    (matchId: string, winner: string) => {
      if (!bracket) return;
      const updated = { ...bracket, matches: bracket.matches.map((m) => ({ ...m })) };
      const match = updated.matches.find((m) => m.id === matchId);
      if (!match) return;

      // Toggle: clicking the current winner clears it
      if (match.winner === winner) {
        match.winner = null;
        // Retract advancement: clear the next round slot
        const totalRounds = roundsNeeded(bracket.players.length);
        const nextRound = match.round + 1;
        if (nextRound <= totalRounds) {
          const nextMatchIndex = Math.floor(match.matchIndex / 2);
          const nextMatch = updated.matches.find(
            (m) => m.round === nextRound && m.matchIndex === nextMatchIndex
          );
          if (nextMatch) {
            // Only clear if it's the slot this match feeds into
            if (match.matchIndex % 2 === 0) {
              nextMatch.player1 = null;
            } else {
              nextMatch.player2 = null;
            }
            // If next match had a winner, cascade-clear that too
            if (nextMatch.winner) {
              // Recursively clear advancement (simple iterative cascade)
              let cascadeMatch: Match | undefined = nextMatch;
              while (cascadeMatch) {
                cascadeMatch.winner = null;
                const nr: number = cascadeMatch.round + 1;
                if (nr > totalRounds) break;
                const nmi: number = Math.floor(cascadeMatch.matchIndex / 2);
                const nm: Match | undefined = updated.matches.find((m) => m.round === nr && m.matchIndex === nmi);
                if (!nm) break;
                if (cascadeMatch.matchIndex % 2 === 0) nm.player1 = null;
                else nm.player2 = null;
                nm.winner = null;
                cascadeMatch = nm;
              }
            }
          }
        }
      } else {
        // Before setting the new winner, if there was a previous winner,
        // cascade-clear the old advancement
        if (match.winner !== null) {
          const totalRounds = roundsNeeded(bracket.players.length);
          let currentMatch: Match | undefined = match;
          let oldWinner: string | null = match.winner;
          while (currentMatch) {
            const nr: number = currentMatch.round + 1;
            if (nr > totalRounds) break;
            const nmi: number = Math.floor(currentMatch.matchIndex / 2);
            const nm: Match | undefined = updated.matches.find((m) => m.round === nr && m.matchIndex === nmi);
            if (!nm) break;
            if (currentMatch.matchIndex % 2 === 0) {
              if (nm.player1 === oldWinner) { nm.player1 = null; oldWinner = nm.winner ?? ""; nm.winner = null; }
              else break;
            } else {
              if (nm.player2 === oldWinner) { nm.player2 = null; oldWinner = nm.winner ?? ""; nm.winner = null; }
              else break;
            }
            currentMatch = nm;
          }
        }

        match.winner = winner;
        const totalRounds = roundsNeeded(bracket.players.length);
        advanceWinner(updated.matches, match, totalRounds);
      }

      saveBracket(updated);
      setBracket(updated);
    },
    [bracket]
  );

  // ── Swiss: set winner ───────────────────────────────────────────────────────
  const setSwissMatchWinner = useCallback(
    (matchId: string, winner: string) => {
      if (!bracket) return;
      const updated = {
        ...bracket,
        swissMatches: bracket.swissMatches.map((m) => {
          if (m.id !== matchId) return m;
          // Toggle
          return { ...m, winner: m.winner === winner ? null : winner };
        }),
      };
      saveBracket(updated);
      setBracket(updated);
    },
    [bracket]
  );

  // ── Swiss: advance to next round ────────────────────────────────────────────
  const advanceSwissRound = useCallback(() => {
    if (!bracket) return;
    const nextRound = bracket.swissRound + 1;
    const newMatches = buildSwissRound(bracket.players, nextRound, bracket.swissMatches);
    const updated = {
      ...bracket,
      swissMatches: [...bracket.swissMatches, ...newMatches],
      swissRound: nextRound,
    };
    saveBracket(updated);
    setBracket(updated);
  }, [bracket]);

  // ── Reset ───────────────────────────────────────────────────────────────────
  const handleReset = useCallback(() => {
    clearBracket();
    setBracket(null);
    setPhase("setup");
    setPlayerList([]);
    setPlayerInput("");
    setTournamentName("My Tournament");
    setConfirmReset(false);
  }, []);

  // ── Copy results ────────────────────────────────────────────────────────────
  const handleCopy = useCallback(async () => {
    if (!bracket) return;
    const text = exportBracketText(bracket);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  }, [bracket]);

  // ── Derived state ───────────────────────────────────────────────────────────
  const totalRounds = bracket ? roundsNeeded(bracket.players.length) : 0;

  const finalWinner = useMemo(() => {
    if (!bracket || bracket.format !== "single-elimination") return null;
    const final = bracket.matches.find((m) => m.round === totalRounds);
    return final?.winner ?? null;
  }, [bracket, totalRounds]);

  const currentSwissRoundMatches = useMemo(() => {
    if (!bracket || bracket.format !== "swiss") return [];
    return bracket.swissMatches.filter((m) => m.round === bracket.swissRound);
  }, [bracket]);

  const currentRoundComplete = useMemo(() => {
    if (!bracket || bracket.format !== "swiss") return false;
    const current = bracket.swissMatches.filter((m) => m.round === bracket.swissRound);
    return current.length > 0 && current.every((m) => m.winner !== null);
  }, [bracket]);

  const swissStandings = useMemo(() => {
    if (!bracket || bracket.format !== "swiss") return [];
    return computeStandings(bracket.players, bracket.swissMatches).sort(
      (a, b) => b.wins - a.wins || a.losses - b.losses
    );
  }, [bracket]);

  // ── Determine which SE rounds are "active" (previous round complete) ────────
  const activeRound = useMemo(() => {
    if (!bracket || bracket.format !== "single-elimination") return 1;
    for (let r = totalRounds; r >= 1; r--) {
      const roundMatches = bracket.matches.filter((m) => m.round === r && !m.isBye);
      if (roundMatches.some((m) => m.winner !== null)) return r;
    }
    return 1;
  }, [bracket, totalRounds]);

  // ─────────────────────────────────────────────────────────────────────────────
  // Setup phase
  // ─────────────────────────────────────────────────────────────────────────────

  if (phase === "setup") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 text-center space-y-1"
        >
          <div className="flex justify-center mb-3">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
              <Trophy size={28} className="text-amber-400" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground">Tournament Bracket</h1>
          <p className="text-muted-foreground text-sm">Create and track a local tournament</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="space-y-6"
        >
          {/* Tournament name */}
          <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
            <label className="text-sm font-semibold text-foreground">Tournament Name</label>
            <input
              type="text"
              value={tournamentName}
              onChange={(e) => setTournamentName(e.target.value)}
              placeholder="e.g. Local VGC Tournament"
              className="w-full px-3 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-colors"
            />
          </div>

          {/* Format */}
          <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
            <label className="text-sm font-semibold text-foreground">Format</label>
            <div className="grid grid-cols-2 gap-3">
              {(["single-elimination", "swiss"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFormat(f)}
                  className={cn(
                    "px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left",
                    format === f
                      ? "bg-primary/10 border-primary/40 text-primary"
                      : "bg-background border-border text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  <div className="font-semibold">
                    {f === "single-elimination" ? "Single Elimination" : "Swiss"}
                  </div>
                  <div className="text-xs mt-0.5 opacity-70">
                    {f === "single-elimination"
                      ? "Knockout bracket"
                      : "Round-robin rounds"}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Players */}
          <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                <Users size={15} />
                Players
              </label>
              <span
                className={cn(
                  "text-xs px-2 py-0.5 rounded-full font-medium",
                  playerList.length >= 4
                    ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {playerList.length} / 16
              </span>
            </div>

            {/* Add player input */}
            <div className="flex gap-2">
              <input
                type="text"
                value={playerInput}
                onChange={(e) => setPlayerInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") { e.preventDefault(); addPlayer(); }
                }}
                placeholder="Player name..."
                maxLength={32}
                disabled={playerList.length >= 16}
                className="flex-1 px-3 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-colors disabled:opacity-50"
              />
              <button
                onClick={addPlayer}
                disabled={!playerInput.trim() || playerList.includes(playerInput.trim()) || playerList.length >= 16}
                className="px-3 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 text-sm font-medium"
              >
                <Plus size={16} />
                Add
              </button>
            </div>

            {/* Player list */}
            {playerList.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                <AnimatePresence>
                  {playerList.map((p) => (
                    <motion.div
                      key={p}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full bg-secondary border border-border text-sm font-medium text-foreground"
                    >
                      {p}
                      <button
                        onClick={() => removePlayer(p)}
                        className="w-4 h-4 rounded-full flex items-center justify-center hover:bg-destructive/20 hover:text-destructive transition-colors"
                        aria-label={`Remove ${p}`}
                      >
                        <X size={10} />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}

            {playerList.length < 4 && (
              <p className="text-xs text-muted-foreground">
                Minimum 4 players required ({4 - playerList.length} more needed)
              </p>
            )}
          </div>

          {/* Generate */}
          <button
            onClick={generateBracket}
            disabled={playerList.length < 4}
            className={cn(
              "w-full py-3.5 rounded-2xl text-sm font-semibold transition-all",
              playerList.length >= 4
                ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white shadow-lg shadow-amber-500/20"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            )}
          >
            Generate Bracket
          </button>
        </motion.div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // Bracket view
  // ─────────────────────────────────────────────────────────────────────────────

  if (!bracket) return null;

  return (
    <div className="max-w-full px-4 py-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Trophy size={20} className="text-amber-400" />
            <h1 className="text-xl font-bold text-foreground">{bracket.name}</h1>
            <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium capitalize">
              {bracket.format === "single-elimination" ? "Single Elimination" : "Swiss"}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            {bracket.players.length} players
            {bracket.format === "single-elimination" && ` · ${totalRounds} rounds`}
            {bracket.format === "swiss" && ` · Round ${bracket.swissRound}`}
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Copy results */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border bg-card hover:bg-accent text-sm font-medium text-foreground transition-colors"
          >
            {copied ? <Check size={14} className="text-emerald-500" /> : <ChevronRight size={14} />}
            {copied ? "Copied!" : "Copy Results"}
          </button>

          {/* Reset */}
          {confirmReset ? (
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-muted-foreground">Are you sure?</span>
              <button
                onClick={handleReset}
                className="px-3 py-2 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive text-sm font-medium hover:bg-destructive/20 transition-colors"
              >
                Yes, reset
              </button>
              <button
                onClick={() => setConfirmReset(false)}
                className="px-3 py-2 rounded-xl border border-border bg-card text-sm font-medium text-muted-foreground hover:bg-accent transition-colors"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirmReset(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border bg-card hover:bg-accent text-sm font-medium text-muted-foreground transition-colors"
            >
              <Trash2 size={14} />
              New Tournament
            </button>
          )}
        </div>
      </div>

      {/* ── Final winner banner ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {finalWinner && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="max-w-5xl mx-auto mb-6"
          >
            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
                <Trophy size={24} className="text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-amber-500 dark:text-amber-400 uppercase tracking-wider">Tournament Champion</p>
                <p className="text-xl font-bold text-foreground">{finalWinner}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Single Elimination bracket ──────────────────────────────────────── */}
      {bracket.format === "single-elimination" && (
        <div className="overflow-x-auto pb-4">
          <div
            className="flex gap-8 items-start"
            style={{ minWidth: `${totalRounds * 220}px` }}
          >
            {Array.from({ length: totalRounds }, (_, roundIdx) => {
              const r = roundIdx + 1;
              const roundMatches = bracket.matches.filter((m) => m.round === r);
              const isActive = r <= activeRound + 1;
              const label =
                r === totalRounds
                  ? "Final"
                  : r === totalRounds - 1
                  ? "Semi-Final"
                  : r === totalRounds - 2 && totalRounds > 3
                  ? "Quarter-Final"
                  : `Round ${r}`;

              // Calculate vertical alignment: each match in round r spans
              // 2^(r-1) slots of the first round height
              const firstRoundCount = Math.pow(2, totalRounds - 1);
              const matchesInRound = roundMatches.length;
              const slotHeight = 72; // px per first-round match

              return (
                <div key={r} className="flex flex-col" style={{ minWidth: "200px" }}>
                  {/* Round label */}
                  <div className="mb-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider px-1">
                    {label}
                  </div>

                  {/* Matches, vertically distributed */}
                  <div
                    className="flex flex-col justify-around"
                    style={{ height: `${firstRoundCount * slotHeight}px` }}
                  >
                    {roundMatches.map((match) => (
                      <div key={match.id} className="flex items-center justify-center">
                        <MatchCard
                          match={match}
                          onSetWinner={setMatchWinner}
                          isActive={isActive}
                        />
                      </div>
                    ))}
                    {matchesInRound === 0 && (
                      <div className="flex items-center justify-center">
                        <div className="text-xs text-muted-foreground/50 italic">TBD</div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Swiss view ─────────────────────────────────────────────────────── */}
      {bracket.format === "swiss" && (
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_260px] gap-6">
          {/* Rounds */}
          <div className="space-y-6">
            {Array.from(new Set(bracket.swissMatches.map((m) => m.round))).map((r) => {
              const roundMatches = bracket.swissMatches.filter((m) => m.round === r);
              const isCurrent = r === bracket.swissRound;
              return (
                <div key={r}>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-sm font-semibold text-foreground">Round {r}</h3>
                    {isCurrent && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold uppercase tracking-wider border border-primary/20">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {roundMatches.map((match) => (
                      <div key={match.id} className="rounded-2xl border border-border bg-card p-3">
                        <SwissMatchCard
                          match={match}
                          onSetWinner={setSwissMatchWinner}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Next round button */}
            {currentRoundComplete && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                <button
                  onClick={advanceSwissRound}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
                >
                  <ChevronRight size={16} />
                  Start Round {bracket.swissRound + 1}
                </button>
              </motion.div>
            )}
          </div>

          {/* Standings sidebar */}
          <div className="rounded-2xl border border-border bg-card p-4 h-fit sticky top-4">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-1.5">
              <Trophy size={14} className="text-amber-400" />
              Standings
            </h3>
            <div className="space-y-1.5">
              {swissStandings.map((s, i) => (
                <div
                  key={s.player}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-xl text-sm",
                    i === 0
                      ? "bg-amber-500/10 border border-amber-500/20 text-foreground"
                      : "bg-muted/40 text-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0",
                      i === 0
                        ? "bg-amber-400 text-white"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {i + 1}
                  </span>
                  <span className="flex-1 truncate font-medium">{s.player}</span>
                  <span
                    className={cn(
                      "text-xs font-semibold tabular-nums",
                      s.wins > s.losses
                        ? "text-emerald-600 dark:text-emerald-400"
                        : s.wins < s.losses
                        ? "text-red-500 dark:text-red-400"
                        : "text-muted-foreground"
                    )}
                  >
                    {s.wins}W-{s.losses}L
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
