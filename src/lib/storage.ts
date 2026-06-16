// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - LOCAL STORAGE PERSISTENCE
// Save/load teams, simulation results, and settings - no accounts needed
// ═══════════════════════════════════════════════════════════════════════════════

import type { TeamSlot, StatPoints, PokemonType } from "@/lib/types";
import { POKEMON_SEED } from "@/lib/pokemon-data";

// ── Storage Keys ────────────────────────────────────────────────────────

const KEYS = {
  SAVED_TEAMS: "champions-lab:teams",
  SIM_RESULTS: "champions-lab:sim-results",
  SETTINGS: "champions-lab:settings",
  LAST_TEAM: "champions-lab:last-team",
  MATCH_JOURNAL: "champions-lab:match-journal",
  MY_ROSTER_LEGACY: "champions-lab:my-roster",
} as const;

function getRosterKey(seasonId: number): string {
  return `champions-lab:roster:${seasonId}`;
}

// ── Types ───────────────────────────────────────────────────────────────

export interface SavedTeamSlot {
  pokemonId: number;
  ability?: string;
  nature?: string;
  moves: string[];
  statPoints: StatPoints;
  teraType?: PokemonType;
  item?: string;
  isMega?: boolean;
  megaFormIndex?: number;
  preMegaAbility?: string;
}

export interface SavedTeam {
  id: string;
  name: string;
  slots: SavedTeamSlot[];
  regulation?: string;  // e.g. "M-A", "M-B"
  createdAt: number;
  updatedAt: number;
}

export interface SavedSimResult {
  id: string;
  teamId: string;
  teamName: string;
  winRate: number;
  totalGames: number;
  wins: number;
  losses: number;
  timestamp: number;
  matchups: { opponent: string; winRate: number }[];
}

export interface UserSettings {
  defaultIterations: number;
  defaultOpponentPool: string;
  theme: "light" | "dark" | "system";
  defaultRegulationId: string;
}

// ── Match Journal ────────────────────────────────────────────────────────

export interface MatchRecord {
  id: string;
  date: number;           // timestamp
  myTeam: number[];       // 6 pokemon IDs (full team shown)
  myPicks: number[];      // 2–4 pokemon IDs I actually brought
  opponentTeam: number[]; // 6 pokemon IDs opponent showed
  opponentPicks: number[];// 2–4 pokemon IDs opponent brought
  result: "win" | "loss" | "tie";
  notes?: string;
  format?: string;        // e.g. "BO3 G1", "Ladder"
  teamTesterReport?: unknown; // optional saved Team Tester PDF payload
  picksUnknown?: boolean;    // true when only team-level data is available (e.g. tournament results)
}

// ── Helpers ─────────────────────────────────────────────────────────────

function readJSON<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJSON(key: string, value: unknown): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage full - silently fail
  }
}

// ── Team Persistence ────────────────────────────────────────────────────

/** Convert live TeamSlot[] to serializable SavedTeamSlot[] */
export function serializeTeam(slots: TeamSlot[]): SavedTeamSlot[] {
  return slots
    .filter((s) => s.pokemon !== null)
    .map((s) => ({
      pokemonId: s.pokemon!.id,
      ability: s.ability,
      nature: s.nature,
      moves: s.moves,
      statPoints: { ...s.statPoints },
      teraType: s.teraType,
      item: s.item,
      isMega: s.isMega,
      megaFormIndex: s.megaFormIndex,
      preMegaAbility: s.preMegaAbility,
    }));
}

/** Convert saved data back to live TeamSlot[] (rehydrate Pokémon objects) */
export function deserializeTeam(saved: SavedTeamSlot[]): TeamSlot[] {
  const slots: TeamSlot[] = saved.map((s) => {
    const pokemon = POKEMON_SEED.find((p) => p.id === s.pokemonId) ?? null;
    // Auto-detect megaFormIndex from item/ability if not stored
    let megaFormIndex = s.megaFormIndex;
    if (s.isMega && megaFormIndex === undefined && pokemon) {
      const megaForms = pokemon.forms?.filter(f => f.isMega && !f.hidden) ?? [];
      if (s.ability) {
        const idx = megaForms.findIndex(f => f.abilities.some(a => a.name === s.ability));
        megaFormIndex = idx >= 0 ? idx : 0;
      } else {
        megaFormIndex = 0;
      }
    }
    return {
      pokemon,
      ability: s.ability,
      nature: s.nature,
      moves: s.moves,
      statPoints: { ...s.statPoints },
      teraType: s.teraType,
      item: s.item,
      isMega: s.isMega,
      megaFormIndex,
      preMegaAbility: s.preMegaAbility,
    };
  });
  // Pad to 6 slots
  while (slots.length < 6) {
    slots.push({
      pokemon: null,
      moves: [],
      statPoints: { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 },
    });
  }
  return slots;
}

/** Get all saved teams */
export function getSavedTeams(): SavedTeam[] {
  return readJSON<SavedTeam[]>(KEYS.SAVED_TEAMS, []);
}

/** Save a team (create or update) */
export function saveTeam(name: string, slots: TeamSlot[], existingId?: string, regulation?: string): SavedTeam {
  const teams = getSavedTeams();
  const now = Date.now();
  const serialized = serializeTeam(slots);

  if (existingId) {
    const idx = teams.findIndex((t) => t.id === existingId);
    if (idx >= 0) {
      teams[idx] = { ...teams[idx], name, slots: serialized, regulation, updatedAt: now };
      writeJSON(KEYS.SAVED_TEAMS, teams);
      return teams[idx];
    }
  }

  const team: SavedTeam = {
    id: `team-${now}-${Math.random().toString(36).slice(2, 8)}`,
    name,
    slots: serialized,
    regulation,
    createdAt: now,
    updatedAt: now,
  };
  teams.push(team);
  writeJSON(KEYS.SAVED_TEAMS, teams);
  return team;
}

/** Delete a saved team */
export function deleteTeam(id: string): void {
  const teams = getSavedTeams().filter((t) => t.id !== id);
  writeJSON(KEYS.SAVED_TEAMS, teams);
}

/** Save "last worked on" team for auto-restore */
export function saveLastTeam(name: string, slots: TeamSlot[], teamId?: string): void {
  writeJSON(KEYS.LAST_TEAM, { name, slots: serializeTeam(slots), teamId });
}

/** Get last worked on team */
export function getLastTeam(): { name: string; slots: SavedTeamSlot[]; teamId?: string } | null {
  return readJSON<{ name: string; slots: SavedTeamSlot[]; teamId?: string } | null>(KEYS.LAST_TEAM, null);
}

// ── Simulation Results ──────────────────────────────────────────────────

export function getSavedSimResults(): SavedSimResult[] {
  return readJSON<SavedSimResult[]>(KEYS.SIM_RESULTS, []);
}

export function saveSimResult(result: Omit<SavedSimResult, "id" | "timestamp">): SavedSimResult {
  const results = getSavedSimResults();
  const saved: SavedSimResult = {
    ...result,
    id: `sim-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    timestamp: Date.now(),
  };
  results.push(saved);
  // Keep last 50 results
  if (results.length > 50) results.splice(0, results.length - 50);
  writeJSON(KEYS.SIM_RESULTS, results);
  return saved;
}

export function clearSimResults(): void {
  writeJSON(KEYS.SIM_RESULTS, []);
}

// ── Match Journal ────────────────────────────────────────────────────────

export function getMatchRecords(): MatchRecord[] {
  return readJSON<MatchRecord[]>(KEYS.MATCH_JOURNAL, []);
}

export function saveMatchRecord(record: Omit<MatchRecord, "id" | "date">): MatchRecord {
  const records = getMatchRecords();
  const saved: MatchRecord = {
    ...record,
    id: `match-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    date: Date.now(),
  };
  records.unshift(saved); // newest first
  writeJSON(KEYS.MATCH_JOURNAL, records);
  return saved;
}

export function deleteMatchRecord(id: string): void {
  const records = getMatchRecords().filter((r) => r.id !== id);
  writeJSON(KEYS.MATCH_JOURNAL, records);
}

export function clearMatchRecords(): void {
  writeJSON(KEYS.MATCH_JOURNAL, []);
}

// ── Settings ────────────────────────────────────────────────────────────

const DEFAULT_SETTINGS: UserSettings = {
  defaultIterations: 1000,
  defaultOpponentPool: "meta",
  theme: "system",
  defaultRegulationId: "",
};

export function getSettings(): UserSettings {
  return readJSON(KEYS.SETTINGS, DEFAULT_SETTINGS);
}

export function updateSettings(partial: Partial<UserSettings>): UserSettings {
  const current = getSettings();
  const updated = { ...current, ...partial };
  writeJSON(KEYS.SETTINGS, updated);
  return updated;
}

// ── My Roster ────────────────────────────────────────────────────────────

/** Get the set of Pokémon IDs the user owns for a specific season */
export function getMyRoster(seasonId: number): Set<number> {
  const key = getRosterKey(seasonId);
  const ids = readJSON<number[] | null>(key, null);
  if (ids !== null) return new Set(ids);
  // Migrate legacy single-roster (season 1 only)
  if (seasonId === 1) {
    const legacy = readJSON<number[]>(KEYS.MY_ROSTER_LEGACY, []);
    if (legacy.length > 0) {
      writeJSON(key, legacy);
      if (typeof window !== "undefined") localStorage.removeItem(KEYS.MY_ROSTER_LEGACY);
    }
    return new Set(legacy);
  }
  return new Set();
}

/** Save the full set of owned Pokémon IDs for a specific season */
export function saveMyRoster(ids: Set<number>, seasonId: number): void {
  writeJSON(getRosterKey(seasonId), Array.from(ids));
}

/** Toggle a single Pokémon in/out of the roster for a specific season and persist */
export function toggleRosterPokemon(id: number, seasonId: number): Set<number> {
  const roster = getMyRoster(seasonId);
  if (roster.has(id)) { roster.delete(id); } else { roster.add(id); }
  saveMyRoster(roster, seasonId);
  return roster;
}

/** Get all per-season rosters as a plain object { seasonId: number[] } */
function getAllRosters(): Record<number, number[]> {
  const result: Record<number, number[]> = {};
  if (typeof window === "undefined") return result;
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!k?.startsWith("champions-lab:roster:")) continue;
    const seasonId = Number(k.replace("champions-lab:roster:", ""));
    if (!isNaN(seasonId)) result[seasonId] = readJSON<number[]>(k, []);
  }
  return result;
}

// ── Export / Import ──────────────────────────────────────────────────────

export interface ExportData {
  version: 1;
  exportedAt: number;
  teams: SavedTeam[];
  matchJournal: MatchRecord[];
  myRoster: Record<number, number[]>;
  simResults: SavedSimResult[];
  settings: UserSettings;
  lastTeam: { name: string; slots: SavedTeamSlot[]; teamId?: string } | null;
}

export function exportAllData(): ExportData {
  return {
    version: 1,
    exportedAt: Date.now(),
    teams: getSavedTeams(),
    matchJournal: getMatchRecords(),
    myRoster: getAllRosters(),
    simResults: getSavedSimResults(),
    settings: getSettings(),
    lastTeam: getLastTeam(),
  };
}

export function importAllData(data: ExportData): void {
  if (data.version !== 1) throw new Error("Versione non supportata");
  writeJSON(KEYS.SAVED_TEAMS, data.teams ?? []);
  writeJSON(KEYS.MATCH_JOURNAL, data.matchJournal ?? []);
  // Support both old flat array (→ season 1) and new per-season object
  const rawRoster = data.myRoster as unknown;
  if (Array.isArray(rawRoster)) {
    writeJSON(getRosterKey(1), rawRoster);
  } else if (rawRoster && typeof rawRoster === "object") {
    for (const [id, ids] of Object.entries(rawRoster as Record<string, number[]>)) {
      writeJSON(getRosterKey(Number(id)), ids);
    }
  }
  writeJSON(KEYS.SIM_RESULTS, data.simResults ?? []);
  if (data.settings) writeJSON(KEYS.SETTINGS, data.settings);
  if (data.lastTeam) writeJSON(KEYS.LAST_TEAM, data.lastTeam);
}

/** Total Pokémon count across all seasons in an export payload */
export function countExportRoster(myRoster: ExportData["myRoster"] | number[]): number {
  if (Array.isArray(myRoster)) return myRoster.length;
  return Object.values(myRoster).reduce((s, a) => s + a.length, 0);
}
