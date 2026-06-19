// Single source of truth for Pokemon tier computation.
// Consumers: meta/page.tsx, sync-tiers.ts, team-builder/page.tsx
// NOTE: pokemon-data.ts must NOT import this module (would create a circular dep via vgc-data.ts).
// Static tier values in pokemon-data.ts are kept in sync by running: npm run sync:tiers

import { SIM_POKEMON, type SimPokemonData } from './simulation-data';
import { TOURNAMENT_USAGE } from './engine/vgc-data';

export type TierLabel = "Z" | "S" | "A" | "B" | "C" | "D";

export const TIER_ORDER = { Z: 0, S: 1, A: 2, B: 3, C: 4, D: 5 } as const;

const _tournamentMap = new Map(TOURNAMENT_USAGE.map(u => [u.pokemonId, u]));

// Composite score: 60% ML simulation + 40% tournament WR + moderate top-cut bonus
export function getCompositeWR(simEntry: Pick<SimPokemonData, 'id' | 'winRate'>): number {
  const t = _tournamentMap.get(simEntry.id);
  if (!t) return simEntry.winRate;
  return simEntry.winRate * 0.6 + t.winRate * 0.4 + (t.topCutRate ?? 0) * 0.15;
}

// Percentile thresholds computed from composite WRs of all qualified Pokemon (appearances >= 500)
const _qualifiedCWRs = Object.values(SIM_POKEMON)
  .filter(p => p.appearances >= 500)
  .map(p => getCompositeWR(p))
  .sort((a, b) => b - a);
const _len = _qualifiedCWRs.length;

export const TIER_S = _qualifiedCWRs[Math.max(0, Math.floor(_len * 0.05))] ?? 55; // Top 5%
export const TIER_A = _qualifiedCWRs[Math.max(0, Math.floor(_len * 0.25))] ?? 51; // Top 25%
export const TIER_B = _qualifiedCWRs[Math.max(0, Math.floor(_len * 0.65))] ?? 46; // Top 65%
export const TIER_C = _qualifiedCWRs[Math.max(0, Math.floor(_len * 0.88))] ?? 40; // Top 88%

export function getMLTier(compositeWR: number, games: number, pokemonId?: number): TierLabel {
  let base: TierLabel = "D";
  if (games >= 500) {
    if (compositeWR >= TIER_S) base = "S";
    else if (compositeWR >= TIER_A) base = "A";
    else if (compositeWR >= TIER_B) base = "B";
    else if (compositeWR >= TIER_C) base = "C";
  }
  // Tournament floor: proven success in real tournaments can lift a Pokemon's tier.
  // Requires usageRate >= 2% to guard against tiny sample sizes.
  if (pokemonId != null) {
    const t = _tournamentMap.get(pokemonId);
    if (t && t.usageRate >= 2) {
      let floor: TierLabel = "D";
      if (t.winRate >= 54 && t.topCutRate >= 10) floor = "S";
      else if (t.winRate >= 51 && t.topCutRate >= 5) floor = "A";
      else if (t.winRate >= 49 && t.topCutRate >= 2) floor = "B";
      if (TIER_ORDER[floor] < TIER_ORDER[base]) base = floor;
    }
  }
  return base;
}

// Pre-computed tier — only for Pokemon with enough simulation data (>= 500 appearances).
// Pokemon below this threshold return undefined from getTierForId, so no tier badge is shown.
export const computedTiers: ReadonlyMap<number, TierLabel> = new Map(
  Object.values(SIM_POKEMON)
    .filter(p => p.appearances >= 500)
    .map(p => [p.id, getMLTier(getCompositeWR(p), p.appearances, p.id)])
);

export function getTierForId(id: number): TierLabel | undefined {
  return computedTiers.get(id);
}
