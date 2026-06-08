// ── Types ────────────────────────────────────────────────────────────────────

export interface CachedTournamentSet {
  ability: string;
  item: string;
  moves: string[];
  teraType?: string;
}

export interface CachedTeam {
  placement: number;
  player: string;
  pokemonIds: number[];
  pokemonNames: string[];
  sets: CachedTournamentSet[];
}

export interface CachedTournament {
  id: string;
  name: string;
  date: string;
  players: number;
  teams: CachedTeam[];
}

export interface UsageRankingEntry {
  pokemonId: number;
  name: string;
  count: number;           // total appearances across all teams
  usagePct: number;        // count / totalTeams × 100
  top8Count: number;       // appearances in top-8 finishes
  recentCount: number;     // appearances in most recent tournament
  recentUsagePct: number;  // usage % in most recent tournament only
}

export interface UsageRankingsCache {
  regulationId: string;
  syncedAt: string;               // ISO timestamp
  mostRecentTournamentId: string; // id of tournaments[0]
  tournamentCount: number;
  totalTeams: number;
  tournaments: CachedTournament[]; // max 25, newest first
  rankings: UsageRankingEntry[];
  emptyIds: string[];              // tournament IDs with 0 team decklists — skip on future syncs
}

// ── Storage ───────────────────────────────────────────────────────────────────

const MAX_TOURNAMENTS = 25;

function key(regulationId: string) {
  return `champions-lab:usage-cache:${regulationId}`;
}

export function loadUsageCache(regulationId: string): UsageRankingsCache | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(key(regulationId));
    return raw ? (JSON.parse(raw) as UsageRankingsCache) : null;
  } catch {
    return null;
  }
}

export function saveUsageCache(data: UsageRankingsCache): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(key(data.regulationId), JSON.stringify(data));
}

// ── Rolling window merge ──────────────────────────────────────────────────────

/**
 * Prepend new tournaments (newest first) to the existing cache, keeping max 25.
 * Existing tournaments with the same id are not duplicated.
 */
export function mergeIncomingTournaments(
  current: CachedTournament[],
  incoming: CachedTournament[],  // newest first
): CachedTournament[] {
  const existingIds = new Set(current.map(t => t.id));
  const fresh = incoming.filter(t => !existingIds.has(t.id));
  if (fresh.length === 0) return current;
  return [...fresh, ...current].slice(0, MAX_TOURNAMENTS);
}

// ── Usage computation ─────────────────────────────────────────────────────────

/**
 * Compute per-Pokémon usage rankings from a list of cached tournaments.
 * Tournaments must be ordered newest-first so tournaments[0] is the reference
 * for recentUsagePct.
 */
export function computeUsageRankings(tournaments: CachedTournament[]): UsageRankingEntry[] {
  if (tournaments.length === 0) return [];

  interface Acc {
    count: number;
    top8Count: number;
    recentCount: number;
    pokemonId: number;
  }

  const allTeams = tournaments.flatMap(t => t.teams);
  const totalTeams = allTeams.length;
  const recentTeams = tournaments[0]?.teams ?? [];

  const map = new Map<string, Acc>();

  for (const team of allTeams) {
    for (let i = 0; i < team.pokemonIds.length; i++) {
      const name = team.pokemonNames[i];
      const id   = team.pokemonIds[i];
      if (!name || !id) continue;
      const existing = map.get(name) ?? { count: 0, top8Count: 0, recentCount: 0, pokemonId: id };
      existing.count++;
      if (team.placement <= 8) existing.top8Count++;
      map.set(name, existing);
    }
  }

  // Second pass for recent tournament
  for (const team of recentTeams) {
    for (let i = 0; i < team.pokemonNames.length; i++) {
      const name = team.pokemonNames[i];
      if (!name) continue;
      const entry = map.get(name);
      if (entry) entry.recentCount++;
    }
  }

  const recentTotal = recentTeams.length || 1;

  return [...map.entries()]
    .map(([name, acc]) => ({
      pokemonId: acc.pokemonId,
      name,
      count: acc.count,
      usagePct: Math.round((acc.count / Math.max(totalTeams, 1)) * 1000) / 10,
      top8Count: acc.top8Count,
      recentCount: acc.recentCount,
      recentUsagePct: Math.round((acc.recentCount / recentTotal) * 1000) / 10,
    }))
    .sort((a, b) => b.usagePct - a.usagePct);
}
