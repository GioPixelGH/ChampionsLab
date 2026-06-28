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
  BOX_SCANNER_LAYOUT: "champions-lab:box-scanner-layout",
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

export interface TeamRuleComposition {
  lead1: string;  // Pokemon name from team
  lead2: string;
  back1: string;
  back2: string;
}

export type TypeConditionKind = "resist" | "weak" | "immune";

export interface TypeCondition {
  id: string;
  kind: TypeConditionKind;
  pokeType: PokemonType;
  count: number;   // ≥ this many opponent Pokémon must satisfy the condition
}

export interface TeamRule {
  id: string;
  label?: string;                // e.g. "vs Ceruledge", "vs Rain"
  // Specific Pokémon triggers
  triggerPokemonIds: number[];   // Opponent Pokémon IDs that activate this rule
  triggerCount: number;          // Fire if opponent has ≥ this many trigger Pokémon (min 1)
  // Type-based conditions
  typeConditions: TypeCondition[];
  // How conditions combine when both Pokémon triggers and type conditions are present
  conditionMode: "any" | "all"; // "any" = either block fires; "all" = both must fire
  composition: TeamRuleComposition;
  notes?: string;                // Strategy notes
  isDefault?: boolean;           // Fires when no other rule matches (fallback)
}

export interface TeamRules {
  rules: TeamRule[];
}

export interface SavedTeam {
  id: string;
  name: string;
  slots: SavedTeamSlot[];
  regulation?: string;  // e.g. "M-A", "M-B"
  rules?: TeamRules;
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

/** Update the team rules for a saved team */
export function updateTeamRules(teamId: string, rules: TeamRules): void {
  const teams = getSavedTeams();
  const idx = teams.findIndex((t) => t.id === teamId);
  if (idx < 0) return;
  teams[idx] = { ...teams[idx], rules, updatedAt: Date.now() };
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

/** Read the raw stored IDs for a season (no inheritance, with season-1 legacy migration) */
function getStoredRosterIds(seasonId: number): number[] {
  const key = getRosterKey(seasonId);
  const ids = readJSON<number[] | null>(key, null);
  if (ids !== null) return ids;
  if (seasonId === 1) {
    const legacy = readJSON<number[]>(KEYS.MY_ROSTER_LEGACY, []);
    if (legacy.length > 0) {
      writeJSON(key, legacy);
      if (typeof window !== "undefined") localStorage.removeItem(KEYS.MY_ROSTER_LEGACY);
    }
    return legacy;
  }
  return [];
}

/**
 * Get the set of Pokémon IDs the user owns for a specific season.
 * Each season automatically inherits all picks from the previous season
 * (M-3 always includes M-1 & M-2 selections), but not vice versa.
 */
export function getMyRoster(seasonId: number): Set<number> {
  const own = new Set(getStoredRosterIds(seasonId));
  if (seasonId > 1) {
    getMyRoster(seasonId - 1).forEach(id => own.add(id));
  }
  return own;
}

/**
 * Save the owned Pokémon IDs for a specific season.
 * For seasons > 1, only the delta relative to the parent season is persisted
 * so that the parent's picks are never duplicated in storage.
 */
export function saveMyRoster(ids: Set<number>, seasonId: number): void {
  if (seasonId > 1) {
    const parentRoster = getMyRoster(seasonId - 1);
    const delta = Array.from(ids).filter(id => !parentRoster.has(id));
    writeJSON(getRosterKey(seasonId), delta);
  } else {
    writeJSON(getRosterKey(seasonId), Array.from(ids));
  }
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

// ── Selective Export & Smart Merge ──────────────────────────────────────────

export interface ExportOptions {
  teams: boolean;
  matchJournal: boolean;
  myRoster: boolean;
  simResults: boolean;
  settings: boolean;
}

export interface ImportAnalysis {
  teams: { new: number; duplicate: number; total: number };
  matches: { new: number; duplicate: number; total: number };
  roster: { total: number };
  simResults: { new: number; duplicate: number; total: number };
  hasSettings: boolean;
}

export interface ImportStats {
  teams: { added: number; skipped: number };
  matches: { added: number; skipped: number };
  roster: number;
  simResults: { added: number; skipped: number };
}

export function getDataCounts(): { teams: number; matches: number; roster: number; simResults: number } {
  // Trigger legacy migration for season 1 before reading all rosters
  getStoredRosterIds(1);
  return {
    teams: getSavedTeams().length,
    matches: getMatchRecords().length,
    roster: countExportRoster(getAllRosters()),
    simResults: getSavedSimResults().length,
  };
}

export function exportSelectedData(options: ExportOptions): ExportData {
  return {
    version: 1,
    exportedAt: Date.now(),
    teams: options.teams ? getSavedTeams() : [],
    matchJournal: options.matchJournal ? getMatchRecords() : [],
    myRoster: options.myRoster ? getAllRosters() : {},
    simResults: options.simResults ? getSavedSimResults() : [],
    settings: options.settings ? getSettings() : DEFAULT_SETTINGS,
    lastTeam: options.teams ? getLastTeam() : null,
  };
}

export function analyzeImport(data: ExportData): ImportAnalysis {
  const existingTeamIds = new Set(getSavedTeams().map((t) => t.id));
  const existingMatchIds = new Set(getMatchRecords().map((m) => m.id));
  const existingSimIds = new Set(getSavedSimResults().map((s) => s.id));
  const teams = data.teams ?? [];
  const matches = data.matchJournal ?? [];
  const sims = data.simResults ?? [];
  return {
    teams: {
      new: teams.filter((t) => !existingTeamIds.has(t.id)).length,
      duplicate: teams.filter((t) => existingTeamIds.has(t.id)).length,
      total: teams.length,
    },
    matches: {
      new: matches.filter((m) => !existingMatchIds.has(m.id)).length,
      duplicate: matches.filter((m) => existingMatchIds.has(m.id)).length,
      total: matches.length,
    },
    roster: { total: countExportRoster(data.myRoster) },
    simResults: {
      new: sims.filter((s) => !existingSimIds.has(s.id)).length,
      duplicate: sims.filter((s) => existingSimIds.has(s.id)).length,
      total: sims.length,
    },
    hasSettings: Object.keys(data.settings ?? {}).length > 0,
  };
}

export function mergeImportData(data: ExportData): ImportStats {
  // Teams: add only those whose id isn't already present
  const existingTeams = getSavedTeams();
  const existingTeamIds = new Set(existingTeams.map((t) => t.id));
  const newTeams = (data.teams ?? []).filter((t) => !existingTeamIds.has(t.id));
  writeJSON(KEYS.SAVED_TEAMS, [...existingTeams, ...newTeams]);

  // Match journal: add only new records (newest first)
  const existingMatches = getMatchRecords();
  const existingMatchIds = new Set(existingMatches.map((m) => m.id));
  const newMatches = (data.matchJournal ?? []).filter((m) => !existingMatchIds.has(m.id));
  writeJSON(KEYS.MATCH_JOURNAL, [...newMatches, ...existingMatches]);

  // Roster: union per season
  const rawRoster = data.myRoster as unknown;
  if (Array.isArray(rawRoster)) {
    const existing = new Set(getStoredRosterIds(1));
    (rawRoster as number[]).forEach((id) => existing.add(id));
    writeJSON(getRosterKey(1), Array.from(existing));
  } else if (rawRoster && typeof rawRoster === "object") {
    for (const [sid, ids] of Object.entries(rawRoster as Record<string, number[]>)) {
      const seasonId = Number(sid);
      const existing = new Set(getStoredRosterIds(seasonId));
      (ids as number[]).forEach((id) => existing.add(id));
      writeJSON(getRosterKey(seasonId), Array.from(existing));
    }
  }

  // Sim results: add non-duplicate ids
  const existingSims = getSavedSimResults();
  const existingSimIds = new Set(existingSims.map((s) => s.id));
  const newSims = (data.simResults ?? []).filter((s) => !existingSimIds.has(s.id));
  writeJSON(KEYS.SIM_RESULTS, [...existingSims, ...newSims]);

  // Settings are NOT merged — user's current settings take priority in merge mode

  return {
    teams: { added: newTeams.length, skipped: (data.teams ?? []).length - newTeams.length },
    matches: { added: newMatches.length, skipped: (data.matchJournal ?? []).length - newMatches.length },
    roster: countExportRoster(data.myRoster),
    simResults: { added: newSims.length, skipped: (data.simResults ?? []).length - newSims.length },
  };
}

// ── Box Scanner Layout ───────────────────────────────────────────────────

export interface StoredBoxLayout {
  x: number;
  y: number;
  w: number;
  h: number;
  cols: number;
  rows: number;
}

export function getScannerLayout(): StoredBoxLayout | null {
  return readJSON<StoredBoxLayout | null>(KEYS.BOX_SCANNER_LAYOUT, null);
}

export function saveScannerLayout(layout: StoredBoxLayout): void {
  writeJSON(KEYS.BOX_SCANNER_LAYOUT, layout);
}
