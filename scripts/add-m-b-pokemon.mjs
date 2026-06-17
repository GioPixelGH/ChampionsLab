#!/usr/bin/env node
/**
 * Add 22 new Pokémon from Regulation M-B (Season M-3) to the Champions roster.
 * Also updates existing Raichu (#26) with Mega Raichu X and Y forms.
 * Run: node scripts/add-m-b-pokemon.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, '..', 'src', 'lib', 'pokemon-data.ts');
const CACHE_FILE = path.join(__dirname, 'move-data-cache.json');
const BASE = 'https://pokeapi.co/api/v2';

// The 22 new Pokémon in Regulation M-B
const NEW_IDS = [
  45,   // Vileplume
  211,  // Qwilfish
  254,  // Sceptile  (Mega)
  257,  // Blaziken  (Mega)
  260,  // Swampert  (Mega)
  303,  // Mawile    (Mega)
  376,  // Metagross (Mega)
  398,  // Staraptor (Champions Mega)
  518,  // Musharna
  545,  // Scolipede (Champions Mega)
  560,  // Scrafty   (Champions Mega)
  604,  // Eelektross (Champions Mega)
  668,  // Pyroar    (Champions Mega)
  687,  // Malamar   (Champions Mega)
  689,  // Barbaracle (Champions Mega)
  691,  // Dragalge  (Champions Mega)
  861,  // Grimmsnarl
  870,  // Falinks   (Champions Mega)
  904,  // Overqwil
  972,  // Houndstone
  979,  // Annihilape
  1000, // Gholdengo
];

const TIER_MAP = {
  45: "C", 211: "D", 254: "B", 257: "S", 260: "A",
  303: "A", 376: "A", 398: "B", 518: "C", 545: "B",
  560: "B", 604: "B", 668: "C", 687: "C", 689: "C",
  691: "C", 861: "B", 870: "B", 904: "C", 972: "C",
  979: "B", 1000: "A",
};

const HOME_SOURCES = {
  45:   ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO", "Let's Go"],
  211:  ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "BDSP", "Pokémon GO"],
  254:  ["Scarlet/Violet", "Legends Z-A", "BDSP", "Pokémon GO"],
  257:  ["Scarlet/Violet", "Legends Z-A", "BDSP", "Pokémon GO"],
  260:  ["Scarlet/Violet", "Legends Z-A", "BDSP", "Pokémon GO"],
  303:  ["Scarlet/Violet", "Legends Z-A", "BDSP", "Pokémon GO"],
  376:  ["Scarlet/Violet", "Legends Z-A", "BDSP", "Pokémon GO"],
  398:  ["Scarlet/Violet", "Legends Z-A", "BDSP", "Sword/Shield", "Pokémon GO"],
  518:  ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
  545:  ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
  560:  ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
  604:  ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
  668:  ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
  687:  ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
  689:  ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
  691:  ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
  861:  ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
  870:  ["Scarlet/Violet", "Legends Z-A", "Sword/Shield", "Pokémon GO"],
  904:  ["Scarlet/Violet", "Legends Z-A", "Legends: Arceus", "Pokémon GO"],
  972:  ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
  979:  ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
  1000: ["Scarlet/Violet", "Legends Z-A", "Pokémon GO"],
};

// Mainline Mega Evolutions (stats from official mainline games)
const MAINLINE_MEGA = {
  254: {
    name: "Mega Sceptile", slug: "mega-sceptile",
    types: ["grass", "dragon"],
    stats: { hp: 70, attack: 110, defense: 75, spAtk: 145, spDef: 85, speed: 145 },
    ability: "Lightning Rod",
    abilityDesc: "Redirects single-target Electric moves to this Pokémon. Absorbs Electric moves, raising Special Attack one stage.",
  },
  257: {
    name: "Mega Blaziken", slug: "mega-blaziken",
    types: ["fire", "fighting"],
    stats: { hp: 80, attack: 160, defense: 80, spAtk: 130, spDef: 80, speed: 100 },
    ability: "Speed Boost",
    abilityDesc: "Gains one level of Speed after each turn.",
  },
  260: {
    name: "Mega Swampert", slug: "mega-swampert",
    types: ["water", "ground"],
    stats: { hp: 100, attack: 150, defense: 110, spAtk: 95, spDef: 110, speed: 70 },
    ability: "Swift Swim",
    abilityDesc: "Doubles Speed during rain.",
  },
  303: {
    name: "Mega Mawile", slug: "mega-mawile",
    types: ["steel", "fairy"],
    stats: { hp: 50, attack: 105, defense: 125, spAtk: 55, spDef: 95, speed: 50 },
    ability: "Huge Power",
    abilityDesc: "Doubles the Pokémon's Attack stat.",
  },
  376: {
    name: "Mega Metagross", slug: "mega-metagross",
    types: ["steel", "psychic"],
    stats: { hp: 80, attack: 145, defense: 150, spAtk: 105, spDef: 110, speed: 110 },
    ability: "Tough Claws",
    abilityDesc: "Boosts the power of moves that make direct contact by 1.3×.",
  },
};

// Champions-exclusive Mega Evolutions (don't exist in mainline games)
const CHAMPIONS_MEGA = {
  398: {
    name: "Mega Staraptor", types: ["fighting", "flying"],
    stats: { hp: 85, attack: 140, defense: 100, spAtk: 60, spDef: 90, speed: 110 },
    ability: "Contrary",
    abilityDesc: "Contrary makes stat changes have the opposite effect.",
  },
  545: {
    name: "Mega Scolipede", types: ["bug", "poison"],
    stats: { hp: 60, attack: 140, defense: 149, spAtk: 75, spDef: 99, speed: 62 },
    ability: "Shell Armor",
    abilityDesc: "Prevents the Pokémon from receiving critical hits.",
  },
  560: {
    name: "Mega Scrafty", types: ["dark", "fighting"],
    stats: { hp: 65, attack: 130, defense: 135, spAtk: 55, spDef: 135, speed: 68 },
    ability: "Intimidate",
    abilityDesc: "Upon entering battle, lowers the opposing Pokémon's Attack stat.",
  },
  604: {
    name: "Mega Eelektross", types: ["electric"],
    stats: { hp: 85, attack: 145, defense: 80, spAtk: 135, spDef: 90, speed: 80 },
    ability: "Eelevate",
    abilityDesc: "When this Pokémon's HP falls below half, its Electric-type moves deal increased damage.",
  },
  668: {
    name: "Mega Pyroar", types: ["fire", "normal"],
    stats: { hp: 86, attack: 88, defense: 92, spAtk: 129, spDef: 86, speed: 126 },
    ability: "Fire Mane",
    abilityDesc: "This Pokémon's mane burns bright, raising the power of Fire-type moves.",
  },
  687: {
    name: "Mega Malamar", types: ["dark", "psychic"],
    stats: { hp: 86, attack: 102, defense: 88, spAtk: 98, spDef: 120, speed: 88 },
    ability: "Contrary",
    abilityDesc: "Contrary makes stat changes have the opposite effect.",
  },
  689: {
    name: "Mega Barbaracle", types: ["rock", "fighting"],
    stats: { hp: 72, attack: 140, defense: 130, spAtk: 64, spDef: 106, speed: 88 },
    ability: "Tough Claws",
    abilityDesc: "Boosts the power of moves that make direct contact by 1.3×.",
  },
  691: {
    name: "Mega Dragalge", types: ["poison", "dragon"],
    stats: { hp: 65, attack: 85, defense: 105, spAtk: 132, spDef: 163, speed: 44 },
    ability: "Regenerator",
    abilityDesc: "Restores 1/3 of maximum HP when switching out.",
  },
  870: {
    name: "Mega Falinks", types: ["fighting"],
    stats: { hp: 65, attack: 135, defense: 135, spAtk: 70, spDef: 65, speed: 100 },
    ability: "Defiant",
    abilityDesc: "Raises Attack by two stages when any of the Pokémon's stats are lowered.",
  },
};

// --- Utilities ---
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function prettifyName(rawName) {
  const special = {
    "kommo-o": "Kommo-o", "mr-mime": "Mr. Mime", "mr-rime": "Mr. Rime",
    "ho-oh": "Ho-Oh", "mime-jr": "Mime Jr.", "porygon-z": "Porygon-Z",
    "jangmo-o": "Jangmo-o", "hakamo-o": "Hakamo-o",
    "pyroar-male": "Pyroar",
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

// --- Move cache ---
let moveCache = {};
let moveCacheDirty = false;
try {
  moveCache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
} catch { /* empty cache */ }

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
    console.log(`    📦 Using cached moves (${moveCache[id].length} moves)`);
    return moveCache[id];
  }
  const movesToFetch = pokemonData.moves.filter(m =>
    m.version_group_details.some(d => ['level-up', 'machine', 'tutor', 'egg'].includes(d.move_learn_method.name))
  );
  console.log(`    🔍 Fetching ${movesToFetch.length} moves from PokeAPI...`);
  const moves = [];
  let count = 0;
  for (const m of movesToFetch) {
    try {
      const detail = await fetchMoveDetail(m.move.url);
      moves.push(detail);
      count++;
      if (count % 10 === 0) process.stdout.write(`    ${count}/${movesToFetch.length}\r`);
      await sleep(60);
    } catch { /* skip failed moves */ }
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

async function fetchMegaFormId(slug) {
  try {
    const data = await fetchJSON(`${BASE}/pokemon/${slug}/`);
    return data.id;
  } catch { return null; }
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
      const slug = ab.name.toLowerCase().replace(/ /g, '-');
      const abData = await fetchJSON(`${BASE}/ability/${slug}`);
      const enEntry = abData.flavor_text_entries?.find(e => e.language.name === 'en');
      if (enEntry) ab.description = enEntry.flavor_text.replace(/\n/g, ' ').replace(/\f/g, ' ').replace(/\s+/g, ' ').trim();
      await sleep(60);
    } catch { /* keep empty */ }
  }

  const moves = await fetchMovesForPokemon(data, id);

  const gen = speciesData.generation.url.split('/').filter(Boolean).pop();
  const genNum = romanToInt(gen.replace('generation-', ''));
  const name = prettifyName(data.name);

  // Build Mega forms
  const forms = [];

  const mainlineMega = MAINLINE_MEGA[id];
  if (mainlineMega) {
    const formId = await fetchMegaFormId(mainlineMega.slug);
    await sleep(100);
    forms.push({
      name: mainlineMega.name,
      sprite: formId ? `/sprites/${formId}.png` : `/sprites/oa-10${id}.png`,
      types: mainlineMega.types,
      baseStats: mainlineMega.stats,
      abilities: [{ name: mainlineMega.ability, description: mainlineMega.abilityDesc, isChampions: false }],
      isMega: true,
    });
  }

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
    name,
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
    .split('\n').map((line, i) => i === 0 ? '  ' + line : '  ' + line).join('\n');

  const dex = mon.dexNumber;
  const regex = /\n  \{\n    "id": (\d+),/g;
  let match;
  let lastId = -1;

  while ((match = regex.exec(src)) !== null) {
    const entryId = parseInt(match[1]);
    if (entryId > dex && lastId < dex && lastId !== -1) {
      return src.slice(0, match.index) + ',\n' + entryJSON + src.slice(match.index);
    }
    lastId = entryId;
  }

  // Append before closing ];
  const closingIdx = src.lastIndexOf('\n];');
  if (closingIdx !== -1) {
    return src.slice(0, closingIdx) + ',\n' + entryJSON + src.slice(closingIdx);
  }
  return src;
}

function updateRaichu(src) {
  // Find Raichu's forms array and hasMega field, inject Mega Raichu X and Y
  const megaFormsJSON = [
    {
      name: "Mega Raichu X",
      sprite: "/sprites/oa-10026x.png",
      types: ["electric"],
      baseStats: { hp: 60, attack: 135, defense: 95, spAtk: 90, spDef: 95, speed: 110 },
      abilities: [{ name: "Electric Surge", description: "Sets Electric Terrain when the Pokémon enters battle.", isChampions: true }],
      isMega: true,
    },
    {
      name: "Mega Raichu Y",
      sprite: "/sprites/oa-10026y.png",
      types: ["electric"],
      baseStats: { hp: 60, attack: 100, defense: 55, spAtk: 160, spDef: 80, speed: 130 },
      abilities: [{ name: "No Guard", description: "All moves used by or against this Pokémon always hit.", isChampions: true }],
      isMega: true,
    },
  ];

  // Find Raichu's entry block: look for "id": 26 followed by its forms
  // We look for the forms: [] inside Raichu's entry (id: 26)
  const raichuBlockRegex = /("id": 26,[\s\S]*?"forms": )\[\]([\s\S]*?"hasMega": )false/;
  const formsStr = megaFormsJSON.map(f => JSON.stringify(f, null, 6)
    .split('\n').map((l, i) => i === 0 ? '      ' + l : '      ' + l).join('\n')
  ).join(',\n');

  if (raichuBlockRegex.test(src)) {
    src = src.replace(raichuBlockRegex, `$1[\n${formsStr}\n    ]$2true`);
    console.log('✅ Updated Raichu with Mega Raichu X and Y');
  } else {
    console.log('⚠️  Could not find Raichu forms pattern — Raichu may already have forms or pattern changed');
  }
  return src;
}

async function main() {
  console.log(`\n📋 Adding ${NEW_IDS.length} new Regulation M-B Pokémon\n`);

  const results = [];
  for (let i = 0; i < NEW_IDS.length; i++) {
    const id = NEW_IDS[i];
    process.stdout.write(`[${i + 1}/${NEW_IDS.length}] #${id}... `);
    try {
      const mon = await fetchPokemon(id);
      results.push(mon);
      console.log(`✅ ${mon.name} (${mon.moves.length} moves${mon.hasMega ? ', has Mega' : ''})`);
      await sleep(100);
    } catch (err) {
      console.log(`❌ Error: ${err.message}`);
    }
  }

  if (moveCacheDirty) {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(moveCache, null, 2), 'utf8');
    console.log(`\n💾 Updated move cache`);
  }

  let src = fs.readFileSync(DATA_FILE, 'utf8');

  let inserted = 0;
  for (const mon of results.sort((a, b) => b.dexNumber - a.dexNumber)) {
    const before = src.length;
    src = insertPokemon(src, mon);
    if (src.length > before) {
      inserted++;
    } else {
      console.log(`⚠️  Could not insert #${mon.dexNumber} ${mon.name}`);
    }
  }

  // Update Raichu with new Mega forms
  src = updateRaichu(src);

  fs.writeFileSync(DATA_FILE, src, 'utf8');
  console.log(`\n✅ Inserted ${inserted}/${results.length} new Pokémon into pokemon-data.ts`);
}

main().catch(console.error);
