/**
 * meta-service.ts
 *
 * Utilities for fetching live meta usage data from the /api/meta endpoint
 * and mapping Limitless Showdown-style IDs to ChampionsPokemon entries.
 */

import type { ChampionsPokemon } from "./types";
import type { MetaEntry, MetaResponse } from "@/app/api/meta/route";

// ---------------------------------------------------------------------------
// Showdown ID → project name normalisation
// ---------------------------------------------------------------------------

/** Region suffixes used by Showdown → prefix used by this project */
const REGION_SUFFIX_MAP: Record<string, string> = {
  alola: "Alolan",
  galar: "Galarian",
  hisui: "Hisuian",
  paldea: "Paldean",
};

/**
 * Attempt to convert a Showdown-style ID to the project's display-name slug.
 *
 * Examples:
 *   "ninetales-alola"          → "alolan ninetales"
 *   "slowbro-galar"            → "galarian slowbro"
 *   "typhlosion-hisui"         → "hisuian typhlosion"
 *   "tauros-paldea-combat"     → "paldean tauros (blaze)" uses explicit table
 *   "rotom-wash"               → kept as-is (matched via showdownName field)
 *   "lycanroc-midday"          → "lycanroc"  (all forms collapse)
 *   "basculegion-f"            → "basculegion"
 */
function showdownToProjectSlug(id: string): string {
  const lower = id.toLowerCase();

  // ── explicit overrides (ambiguous / non-standard mappings) ────────────────
  const EXPLICIT: Record<string, string> = {
    // Lycanroc forms → single entry
    "lycanroc-midday":  "lycanroc",
    "lycanroc-midnight":"lycanroc",
    "lycanroc-dusk":    "lycanroc",
    // Basculegion gender → single entry
    "basculegion-f":    "basculegion",
    "basculegion-m":    "basculegion",
    // Paldean Tauros with combat/blaze/aqua suffix
    "tauros-paldea-combat": "paldean tauros",
    "tauros-paldea-blaze":  "paldean tauros (blaze)",
    "tauros-paldea-aqua":   "paldean tauros (aqua)",
    // Indeedee
    "indeedee-f":  "indeedee",
    "indeedee-m":  "indeedee",
    // Urshifu
    "urshifu-rapid-strike":  "urshifu",
    "urshifu-single-strike": "urshifu",
    // Morpeko
    "morpeko-full-belly": "morpeko",
    "morpeko-hangry":     "morpeko",
    // Ogerpon
    "ogerpon-teal":     "ogerpon",
    "ogerpon-wellspring":"ogerpon",
    "ogerpon-hearthflame":"ogerpon",
    "ogerpon-cornerstone":"ogerpon",
    // Oinkologne
    "oinkologne-f": "oinkologne",
    "oinkologne-m": "oinkologne",
  };

  if (EXPLICIT[lower]) return EXPLICIT[lower];

  // ── Regional form suffix detection ────────────────────────────────────────
  for (const [suffix, prefix] of Object.entries(REGION_SUFFIX_MAP)) {
    if (lower.endsWith(`-${suffix}`)) {
      const base = lower.slice(0, -(suffix.length + 1));
      return `${prefix.toLowerCase()} ${base}`;
    }
  }

  // ── Default: return as-is ─────────────────────────────────────────────────
  return lower;
}

/** Normalise a display name or slug for comparison (lowercase, strip dots) */
function norm(s: string): string {
  return s.toLowerCase().replace(/[.'']/g, "").trim();
}

// ---------------------------------------------------------------------------
// Build lookup map from POKEMON_SEED
// ---------------------------------------------------------------------------

/**
 * Builds a map:  showdownId (lowercase) → ChampionsPokemon
 *
 * Strategy (first match wins):
 *  1. showdownName field (Rotom forms, Floette-Eternal)
 *  2. Exact name match (normalised)
 *  3. Project slug derived from showdownToProjectSlug()
 */
export function buildShowdownMap(
  seed: ChampionsPokemon[]
): Map<string, ChampionsPokemon> {
  const map = new Map<string, ChampionsPokemon>();

  // Helper to add without overwriting
  const add = (key: string, mon: ChampionsPokemon) => {
    if (!map.has(key)) map.set(key, mon);
  };

  for (const mon of seed) {
    if (mon.hidden) continue;

    // 1. Explicit showdownName (e.g. "rotom-wash")
    if (mon.showdownName) {
      add(mon.showdownName.toLowerCase(), mon);
    }

    // 2. Exact name slug: "Alolan Ninetales" → "alolan ninetales"
    const nameSlug = norm(mon.name);
    add(nameSlug, mon);

    // 3. Simple lowercase-hyphenated version: "Wash Rotom" → "wash-rotom"
    const hyphen = nameSlug.replace(/\s+/g, "-");
    add(hyphen, mon);
  }

  return map;
}

// ---------------------------------------------------------------------------
// Match a MetaEntry array to ChampionsPokemon IDs
// ---------------------------------------------------------------------------

/**
 * Returns a Map<pokemonId, MetaEntry> so the UI can look up live usage
 * for any Pokémon by its numeric project ID.
 */
export function matchMetaToSeed(
  meta: MetaEntry[],
  seed: ChampionsPokemon[]
): Map<number, MetaEntry> {
  const showdownMap = buildShowdownMap(seed);
  const result = new Map<number, MetaEntry>();

  for (const entry of meta) {
    const sid = entry.showdownId.toLowerCase();

    // Direct lookup first
    let mon = showdownMap.get(sid);

    // If not found, try converting regional suffix
    if (!mon) {
      const converted = showdownToProjectSlug(sid);
      mon = showdownMap.get(converted);
    }

    // If still not found, try hyphen → space
    if (!mon) {
      mon = showdownMap.get(sid.replace(/-/g, " "));
    }

    if (mon) {
      result.set(mon.id, entry);
    }
  }

  return result;
}

// ---------------------------------------------------------------------------
// Fetch helper (client-safe)
// ---------------------------------------------------------------------------

export async function fetchMeta(regulation: string): Promise<MetaResponse | null> {
  try {
    const res = await fetch(
      `/api/meta?regulation=${encodeURIComponent(regulation)}&limit=25`,
      // Revalidate client-side every 6 hours via cache
      { next: { revalidate: 21600 } } as RequestInit
    );
    if (!res.ok) return null;
    return (await res.json()) as MetaResponse;
  } catch {
    return null;
  }
}
