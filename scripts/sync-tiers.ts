/**
 * Sync static tier values in pokemon-data.ts with the canonical ML-computed tiers.
 * Uses src/lib/tiers.ts as the single source of truth — no duplicated formula here.
 *
 * Run with: npm run sync:tiers
 */
import { POKEMON_SEED } from '../src/lib/pokemon-data';
import { getTierForId } from '../src/lib/tiers';
import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, '..', 'src', 'lib', 'pokemon-data.ts');
let content = fs.readFileSync(filePath, 'utf-8');

let updated = 0;
let unchanged = 0;
const changes: string[] = [];

for (const pokemon of POKEMON_SEED) {
  const newTier = getTierForId(pokemon.id);
  if (!newTier) continue;

  const oldTier = pokemon.tier;
  if (oldTier === newTier) { unchanged++; continue; }

  const nameEscaped = pokemon.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(
    `("name":\\s*"${nameEscaped}"[\\s\\S]*?"tier":\\s*)"([A-Z])"`,
  );

  if (content.match(regex)) {
    content = content.replace(regex, `$1"${newTier}"`);
    changes.push(`${pokemon.name}: ${oldTier ?? '?'} → ${newTier}`);
    updated++;
  }
}

fs.writeFileSync(filePath, content);

console.log(`Updated : ${updated}`);
console.log(`Unchanged: ${unchanged}`);
if (changes.length > 0) {
  console.log('\nChanges:');
  for (const c of changes) console.log('  ' + c);
}
