#!/usr/bin/env node
/**
 * Add Falinks (#870) and Houndstone (#972) — the two Pokémon missed in the M-B batch
 * due to wrong dex numbers (#863 Perrserker and #935 Charcadet were mistakenly added instead).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, '..', 'src', 'lib', 'pokemon-data.ts');
const CACHE_FILE = path.join(__dirname, 'move-data-cache.json');
const BASE = 'https://pokeapi.co/api/v2';

const NEW_IDS = [870, 972];

const TIER_MAP = { 870: "B", 972: "C" };
const HOME_SOURCES = {
  870: ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
  972: ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
};

// Falinks has a Champions-exclusive Mega Evolution
const CHAMPIONS_MEGA = {
  870: {
    name: "Mega Falinks", types: ["fighting"],
    stats: { hp: 65, attack: 135, defense: 135, spAtk: 70, spDef: 65, speed: 100 },
    ability: "Defiant",
    abilityDesc: "Raises Attack by two stages when any of the Pokémon's stats are lowered.",
  },
};

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function prettifyName(rawName) {
  const special = {
    "kommo-o": "Kommo-o", "mr-mime": "Mr. Mime", "mr-rime": "Mr. Rime",
    "ho-oh": "Ho-Oh", "mime-jr": "Mime Jr.", "porygon-z": "Porygon-Z",
  };
  if (special[rawName]) return special[rawName];
  return rawName.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function prettifyMoveName(raw) {
  return raw.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function mapCategory(dc) {
  if (dc === "physical") return "physical";
  if (dc === "special") return "special";
  return "status";
}

function romanToInt(s) {
  const map = { i: 1, v: 5, x: 10 };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = map[s[i]] || 0;
    const next = map[s[i + 1]] || 0;
    result += curr < next ? -curr : curr;
  }
  return result;
}

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return res.json();
}

let moveCache = {};
let moveCacheDirty = false;
try { moveCache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8')); } catch {}

const moveDetailCache = {};

async function fetchMoveDetail(moveUrl) {
  const name = moveUrl.split('/').filter(Boolean).pop();
  if (moveDetailCache[name]) return moveDetailCache[name];
  const data = await fetchJSON(moveUrl);
  const enEntry = data.flavor_text_entries?.find(e => e.language.name === 'en');
  const detail = {
    name: prettifyMoveName(data.name),
    type: data.type.name,
    category: mapCategory(data.damage_class.name),
    power: data.power,
    accuracy: data.accuracy,
    pp: data.pp,
    description: enEntry ? enEntry.flavor_text.replace(/\n/g, ' ').replace(/\f/g, ' ').replace(/\s+/g, ' ').trim() : '',
  };
  moveDetailCache[name] = detail;
  return detail;
}

async function fetchMovesForPokemon(pokemonData, id) {
  if (moveCache[id]) {
    console.log(`    📦 Cached (${moveCache[id].length} moves)`);
    return moveCache[id];
  }
  const movesToFetch = pokemonData.moves.filter(m =>
    m.version_group_details.some(d => ['level-up', 'machine', 'tutor', 'egg'].includes(d.move_learn_method.name))
  );
  console.log(`    🔍 Fetching ${movesToFetch.length} moves...`);
  const moves = [];
  let count = 0;
  for (const m of movesToFetch) {
    try {
      moves.push(await fetchMoveDetail(m.move.url));
      count++;
      if (count % 10 === 0) process.stdout.write(`    ${count}/${movesToFetch.length}\r`);
      await sleep(60);
    } catch {}
  }
  moves.sort((a, b) => {
    const aS = a.category === 'status' ? 1 : 0;
    const bS = b.category === 'status' ? 1 : 0;
    if (aS !== bS) return aS - bS;
    if (a.category !== 'status' && b.category !== 'status') return (b.power || 0) - (a.power || 0);
    return 0;
  });
  const seen = new Set();
  const unique = moves.filter(m => { if (seen.has(m.name)) return false; seen.add(m.name); return true; });
  moveCache[id] = unique;
  moveCacheDirty = true;
  return unique;
}

async function fetchPokemon(id) {
  const data = await fetchJSON(`${BASE}/pokemon/${id}`);
  const speciesData = await fetchJSON(data.species.url);

  const types = data.types.sort((a, b) => a.slot - b.slot).map(t => t.type.name);
  const stats = {};
  for (const s of data.stats) {
    switch (s.stat.name) {
      case 'hp': stats.hp = s.base_stat; break;
      case 'attack': stats.attack = s.base_stat; break;
      case 'defense': stats.defense = s.base_stat; break;
      case 'special-attack': stats.spAtk = s.base_stat; break;
      case 'special-defense': stats.spDef = s.base_stat; break;
      case 'speed': stats.speed = s.base_stat; break;
    }
  }

  const abilities = data.abilities.sort((a, b) => a.slot - b.slot).map(a => ({
    name: prettifyName(a.ability.name),
    description: '',
    isHidden: a.is_hidden,
  }));

  for (const ab of abilities) {
    try {
      const abData = await fetchJSON(`${BASE}/ability/${ab.name.toLowerCase().replace(/ /g, '-')}`);
      const enEntry = abData.flavor_text_entries?.find(e => e.language.name === 'en');
      if (enEntry) ab.description = enEntry.flavor_text.replace(/\n/g, ' ').replace(/\f/g, ' ').replace(/\s+/g, ' ').trim();
      await sleep(60);
    } catch {}
  }

  const moves = await fetchMovesForPokemon(data, id);
  const gen = speciesData.generation.url.split('/').filter(Boolean).pop();
  const genNum = romanToInt(gen.replace('generation-', ''));

  const forms = [];
  const champMega = CHAMPIONS_MEGA[id];
  if (champMega) {
    forms.push({
      name: champMega.name,
      sprite: `/sprites/oa-10${id}.png`,
      types: champMega.types,
      baseStats: champMega.stats,
      abilities: [{ name: champMega.ability, description: champMega.abilityDesc, isChampions: true }],
      isMega: true,
    });
  }

  return {
    id,
    name: prettifyName(data.name),
    dexNumber: id,
    types,
    baseStats: stats,
    abilities,
    moves,
    sprite: `/sprites/${id}.png`,
    officialArt: `/sprites/${id}.png`,
    generation: genNum,
    forms,
    hasMega: forms.length > 0,
    recruitmentCost: null,
    homeCompatible: true,
    homeSource: HOME_SOURCES[id] || ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
    season: 2,
    regulation: "M-B",
    tier: TIER_MAP[id] || "C",
    usageRate: null,
  };
}

function insertPokemon(src, mon) {
  const entryJSON = JSON.stringify(mon, null, 2)
    .split('\n').map(line => '  ' + line).join('\n');
  const dex = mon.dexNumber;
  const regex = /\n  \{\n    "id": (\d+),/g;
  let match, lastId = -1;
  while ((match = regex.exec(src)) !== null) {
    const entryId = parseInt(match[1]);
    if (entryId > dex && lastId < dex && lastId !== -1) {
      return src.slice(0, match.index) + ',\n' + entryJSON + src.slice(match.index);
    }
    lastId = entryId;
  }
  const closingIdx = src.lastIndexOf('\n];');
  if (closingIdx !== -1) return src.slice(0, closingIdx) + ',\n' + entryJSON + src.slice(closingIdx);
  return src;
}

async function main() {
  console.log('\n📋 Adding Falinks (#870) and Houndstone (#972)\n');
  const results = [];
  for (const id of NEW_IDS) {
    process.stdout.write(`#${id}... `);
    try {
      const mon = await fetchPokemon(id);
      results.push(mon);
      console.log(`✅ ${mon.name} (${mon.moves.length} moves${mon.hasMega ? ', has Mega' : ''})`);
      await sleep(100);
    } catch (err) {
      console.log(`❌ ${err.message}`);
    }
  }

  if (moveCacheDirty) {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(moveCache, null, 2), 'utf8');
    console.log('\n💾 Updated move cache');
  }

  let src = fs.readFileSync(DATA_FILE, 'utf8');
  let inserted = 0;
  for (const mon of results.sort((a, b) => b.dexNumber - a.dexNumber)) {
    const before = src.length;
    src = insertPokemon(src, mon);
    if (src.length > before) inserted++;
    else console.log(`⚠️  Could not insert #${mon.dexNumber} ${mon.name}`);
  }
  fs.writeFileSync(DATA_FILE, src, 'utf8');
  console.log(`\n✅ Inserted ${inserted}/2 Pokémon into pokemon-data.ts`);
}

main().catch(console.error);
