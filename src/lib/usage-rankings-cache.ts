// ── Types ────────────────────────────────────────────────────────────────────

export interface CachedTournamentSet {
  ability: string;
  item: string;
  moves: string[];
  teraType?: string;
  nature?: string;
}

export interface CachedTeam {
  placement: number;
  player: string;
  wins: number;
  losses: number;
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

export function clearUsageCache(regulationId: string): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(key(regulationId));
}

// ── Best set from cached tournament data ──────────────────────────────────────

export interface BestSetFromCache {
  ability: string | null;
  item: string | null;
  moves: string[];
  nature: string | null;
  totalSamples: number;
}

/**
 * Computes the most-used ability, item, moves, and nature for a Pokémon across
 * all cached tournaments for the given regulation. Returns null if no data exists.
 * Nature is only available in data synced after the sync-route update that adds it.
 */
export function computeBestSetFromCache(
  pokemonId: number,
  regulationId: string
): BestSetFromCache | null {
  const cache = loadUsageCache(regulationId);
  if (!cache || cache.tournaments.length === 0) return null;

  const abilityCounts = new Map<string, number>();
  const itemCounts = new Map<string, number>();
  const moveCounts = new Map<string, number>();
  const natureCounts = new Map<string, number>();
  let total = 0;

  for (const tournament of cache.tournaments) {
    for (const team of tournament.teams) {
      const idx = team.pokemonIds.indexOf(pokemonId);
      if (idx === -1) continue;
      const set = team.sets[idx];
      if (!set) continue;
      total++;
      if (set.ability) abilityCounts.set(set.ability, (abilityCounts.get(set.ability) ?? 0) + 1);
      if (set.item) itemCounts.set(set.item, (itemCounts.get(set.item) ?? 0) + 1);
      if (set.nature) natureCounts.set(set.nature, (natureCounts.get(set.nature) ?? 0) + 1);
      for (const move of set.moves) {
        if (move) moveCounts.set(move, (moveCounts.get(move) ?? 0) + 1);
      }
    }
  }

  if (total === 0) return null;

  const topAbility = [...abilityCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
  const topItem = [...itemCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
  const topNature = [...natureCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
  // Return ALL moves sorted by frequency so callers can filter against the
  // Pokémon's actual learnset and pick the top 4 valid ones.
  const movesSorted = [...moveCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([move]) => move);

  return { ability: topAbility, item: topItem, moves: movesSorted, nature: topNature, totalSamples: total };
}

// ── Tier derivation from ranking position ─────────────────────────────────────

export function getTierFromRank(rank: number): string {
  if (rank <= 10) return "Z";
  if (rank <= 20) return "S";
  if (rank <= 30) return "A";
  if (rank <= 40) return "B";
  if (rank <= 50) return "C";
  return "D";
}

/**
 * Returns a Map<pokemonId, tier> derived from the cached usage rankings for
 * the given regulation. Returns an empty Map when no cache is available.
 * Pokémon not in the top 50 receive "D" tier.
 */
export function computeTierMap(regulationId: string): Map<number, string> {
  const cache = loadUsageCache(regulationId);
  if (!cache || cache.rankings.length === 0) return new Map();
  const map = new Map<number, string>();
  cache.rankings.forEach((entry, index) => {
    map.set(entry.pokemonId, getTierFromRank(index + 1));
  });
  return map;
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
  const recentTeams = tournaments.slice(0, 3).flatMap(t => t.teams);

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
