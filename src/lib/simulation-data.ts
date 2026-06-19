// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB — AUTO-GENERATED SIMULATION DATA
// Generated from 2,000,000 mega-aware battle simulations
// Date: 2026-04-13T15:35:08.489Z
// ═══════════════════════════════════════════════════════════════════════════════

export interface SimPokemonData {
  id: number;
  name: string;
  isMega: boolean;
  elo: number;
  winRate: number;
  appearances: number;
  wins: number;
  losses: number;
  bestPartners: { name: string; winRate: number; games: number }[];
  bestSets: { set: string; winRate: number; games: number }[];
}

export interface SimPairData {
  pokemon1: string;
  pokemon2: string;
  winRate: number;
  games: number;
}

export interface SimArchetypeData {
  name: string;
  elo: number;
  winRate: number;
  wins: number;
  losses: number;
}

export interface SimMoveData {
  name: string;
  winRate: number;
  appearances: number;
}

export interface SimMetaSnapshot {
  tier1: string[];
  tier2: string[];
  tier3: string[];
  dominantArchetypes: string[];
  underratedPokemon: string[];
  overratedPokemon: string[];
  bestCores: string[];
}

/** Pokemon simulation data keyed by "id" or "id-mega" */
export const SIM_POKEMON: Record<string, SimPokemonData> = {
  "3": {
    "id": 3,
    "name": "Venusaur",
    "isMega": false,
    "elo": 7969,
    "winRate": 50,
    "appearances": 202829,
    "wins": 101374,
    "losses": 101455,
    "bestPartners": [
      {
        "name": "Mega Greninja",
        "winRate": 66.8,
        "games": 3792
      },
      {
        "name": "Sneasler",
        "winRate": 66.8,
        "games": 3792
      },
      {
        "name": "Arbok",
        "winRate": 66.8,
        "games": 3792
      },
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 54.9,
        "games": 14373
      },
      {
        "name": "Aegislash",
        "winRate": 52.5,
        "games": 24494
      }
    ],
    "bestSets": []
  },
  "6": {
    "id": 6,
    "name": "Charizard",
    "isMega": false,
    "elo": 8002,
    "winRate": 49.7,
    "appearances": 160339,
    "wins": 79694,
    "losses": 80645,
    "bestPartners": [
      {
        "name": "Vanilluxe",
        "winRate": 55,
        "games": 4790
      },
      {
        "name": "Wash Rotom",
        "winRate": 52.9,
        "games": 4868
      },
      {
        "name": "Sneasler",
        "winRate": 51.6,
        "games": 40754
      },
      {
        "name": "Pelipper",
        "winRate": 51.6,
        "games": 10153
      },
      {
        "name": "Tyranitar",
        "winRate": 51.5,
        "games": 10386
      }
    ],
    "bestSets": []
  },
  "9": {
    "id": 9,
    "name": "Blastoise",
    "isMega": false,
    "elo": 7979,
    "winRate": 50,
    "appearances": 10427,
    "wins": 5216,
    "losses": 5211,
    "bestPartners": [
      {
        "name": "Whimsicott",
        "winRate": 50,
        "games": 10427
      },
      {
        "name": "Dragapult",
        "winRate": 50,
        "games": 10427
      },
      {
        "name": "Mow Rotom",
        "winRate": 50,
        "games": 10427
      },
      {
        "name": "Archaludon",
        "winRate": 50,
        "games": 10427
      },
      {
        "name": "Luxray",
        "winRate": 50,
        "games": 10427
      }
    ],
    "bestSets": []
  },
  "15": {
    "id": 15,
    "name": "Beedrill",
    "isMega": false,
    "elo": 7912,
    "winRate": 47,
    "appearances": 9941,
    "wins": 4672,
    "losses": 5269,
    "bestPartners": [
      {
        "name": "Krookodile",
        "winRate": 47,
        "games": 9941
      },
      {
        "name": "Incineroar",
        "winRate": 47,
        "games": 9941
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 47,
        "games": 9941
      },
      {
        "name": "Garchomp",
        "winRate": 47,
        "games": 9941
      },
      {
        "name": "Greninja",
        "winRate": 47,
        "games": 9941
      }
    ],
    "bestSets": []
  },
  "18": {
    "id": 18,
    "name": "Pidgeot",
    "isMega": false,
    "elo": 8006,
    "winRate": 49.8,
    "appearances": 21059,
    "wins": 10488,
    "losses": 10571,
    "bestPartners": [
      {
        "name": "Mega Ampharos",
        "winRate": 50.3,
        "games": 5031
      },
      {
        "name": "Arbok",
        "winRate": 50.3,
        "games": 5031
      },
      {
        "name": "Charizard",
        "winRate": 50.3,
        "games": 5031
      },
      {
        "name": "Arcanine",
        "winRate": 49.9,
        "games": 15664
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 49.9,
        "games": 10426
      }
    ],
    "bestSets": []
  },
  "24": {
    "id": 24,
    "name": "Arbok",
    "isMega": false,
    "elo": 8011,
    "winRate": 49.5,
    "appearances": 252406,
    "wins": 124945,
    "losses": 127461,
    "bestPartners": [
      {
        "name": "Aegislash",
        "winRate": 66.8,
        "games": 3792
      },
      {
        "name": "Venusaur",
        "winRate": 66.8,
        "games": 3792
      },
      {
        "name": "Primarina",
        "winRate": 60,
        "games": 4314
      },
      {
        "name": "Garchomp",
        "winRate": 60,
        "games": 4314
      },
      {
        "name": "Mega Greninja",
        "winRate": 53.7,
        "games": 14572
      }
    ],
    "bestSets": []
  },
  "25": {
    "id": 25,
    "name": "Pikachu",
    "isMega": false,
    "elo": 7963,
    "winRate": 51,
    "appearances": 16026,
    "wins": 8166,
    "losses": 7860,
    "bestPartners": [
      {
        "name": "Pelipper",
        "winRate": 51,
        "games": 5167
      },
      {
        "name": "Incineroar",
        "winRate": 51,
        "games": 10581
      },
      {
        "name": "Gyarados",
        "winRate": 51,
        "games": 10581
      },
      {
        "name": "Skarmory",
        "winRate": 51,
        "games": 5167
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 51,
        "games": 5414
      }
    ],
    "bestSets": []
  },
  "26": {
    "id": 26,
    "name": "Raichu",
    "isMega": false,
    "elo": 7928,
    "winRate": 49.7,
    "appearances": 16103,
    "wins": 8004,
    "losses": 8099,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.7,
        "games": 5376
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 50.7,
        "games": 5376
      },
      {
        "name": "Paldean Tauros",
        "winRate": 50.7,
        "games": 5376
      },
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 50.7,
        "games": 5376
      },
      {
        "name": "Incineroar",
        "winRate": 49.7,
        "games": 16103
      }
    ],
    "bestSets": []
  },
  "36": {
    "id": 36,
    "name": "Clefable",
    "isMega": false,
    "elo": 7896,
    "winRate": 50.6,
    "appearances": 52360,
    "wins": 26485,
    "losses": 25875,
    "bestPartners": [
      {
        "name": "Rhyperior",
        "winRate": 52.7,
        "games": 5077
      },
      {
        "name": "Archaludon",
        "winRate": 51.9,
        "games": 10276
      },
      {
        "name": "Tauros",
        "winRate": 51.9,
        "games": 10276
      },
      {
        "name": "Wyrdeer",
        "winRate": 51.9,
        "games": 10276
      },
      {
        "name": "Dragapult",
        "winRate": 51.2,
        "games": 5221
      }
    ],
    "bestSets": []
  },
  "38": {
    "id": 38,
    "name": "Ninetales",
    "isMega": false,
    "elo": 7950,
    "winRate": 49.1,
    "appearances": 20749,
    "wins": 10196,
    "losses": 10553,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 51.1,
        "games": 5172
      },
      {
        "name": "Whimsicott",
        "winRate": 51.1,
        "games": 5172
      },
      {
        "name": "Hisuian Decidueye",
        "winRate": 51.1,
        "games": 5172
      },
      {
        "name": "Dragonite",
        "winRate": 51.1,
        "games": 5172
      },
      {
        "name": "Torkoal",
        "winRate": 50.2,
        "games": 5418
      }
    ],
    "bestSets": []
  },
  "59": {
    "id": 59,
    "name": "Arcanine",
    "isMega": false,
    "elo": 7983,
    "winRate": 49.3,
    "appearances": 364554,
    "wins": 179869,
    "losses": 184685,
    "bestPartners": [
      {
        "name": "Mega Altaria",
        "winRate": 60.3,
        "games": 4329
      },
      {
        "name": "Scizor",
        "winRate": 56.7,
        "games": 4615
      },
      {
        "name": "Vanilluxe",
        "winRate": 55,
        "games": 4790
      },
      {
        "name": "Milotic",
        "winRate": 52.8,
        "games": 9970
      },
      {
        "name": "Azumarill",
        "winRate": 52.2,
        "games": 15047
      }
    ],
    "bestSets": []
  },
  "65": {
    "id": 65,
    "name": "Alakazam",
    "isMega": false,
    "elo": 7950,
    "winRate": 49.5,
    "appearances": 10504,
    "wins": 5199,
    "losses": 5305,
    "bestPartners": [
      {
        "name": "Incineroar",
        "winRate": 49.5,
        "games": 10504
      },
      {
        "name": "Krookodile",
        "winRate": 49.5,
        "games": 10504
      },
      {
        "name": "Conkeldurr",
        "winRate": 49.5,
        "games": 10504
      },
      {
        "name": "Crabominable",
        "winRate": 49.5,
        "games": 10504
      },
      {
        "name": "Aromatisse",
        "winRate": 49.5,
        "games": 10504
      }
    ],
    "bestSets": []
  },
  "68": {
    "id": 68,
    "name": "Machamp",
    "isMega": false,
    "elo": 7947,
    "winRate": 47.7,
    "appearances": 14976,
    "wins": 7144,
    "losses": 7832,
    "bestPartners": [
      {
        "name": "Mega Alakazam",
        "winRate": 49.9,
        "games": 5146
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 49.9,
        "games": 5146
      },
      {
        "name": "Azumarill",
        "winRate": 49.9,
        "games": 5146
      },
      {
        "name": "Liepard",
        "winRate": 49.9,
        "games": 5146
      },
      {
        "name": "Aromatisse",
        "winRate": 49.8,
        "games": 10412
      }
    ],
    "bestSets": []
  },
  "71": {
    "id": 71,
    "name": "Victreebel",
    "isMega": false,
    "elo": 8013,
    "winRate": 50.7,
    "appearances": 21283,
    "wins": 10780,
    "losses": 10503,
    "bestPartners": [
      {
        "name": "Simipour",
        "winRate": 50.7,
        "games": 10702
      },
      {
        "name": "Salazzle",
        "winRate": 50.7,
        "games": 10702
      },
      {
        "name": "Alolan Raichu",
        "winRate": 50.7,
        "games": 10702
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 50.7,
        "games": 10702
      },
      {
        "name": "Slowbro",
        "winRate": 50.7,
        "games": 10702
      }
    ],
    "bestSets": []
  },
  "80": {
    "id": 80,
    "name": "Slowbro",
    "isMega": false,
    "elo": 7990,
    "winRate": 51.7,
    "appearances": 125775,
    "wins": 65041,
    "losses": 60734,
    "bestPartners": [
      {
        "name": "Snorlax",
        "winRate": 65,
        "games": 11744
      },
      {
        "name": "Hatterene",
        "winRate": 63.8,
        "games": 8100
      },
      {
        "name": "Torkoal",
        "winRate": 61.5,
        "games": 16635
      },
      {
        "name": "Drampa",
        "winRate": 59.7,
        "games": 17060
      },
      {
        "name": "Rhyperior",
        "winRate": 55.9,
        "games": 13776
      }
    ],
    "bestSets": []
  },
  "94": {
    "id": 94,
    "name": "Gengar",
    "isMega": false,
    "elo": 7825,
    "winRate": 37.2,
    "appearances": 8258,
    "wins": 3070,
    "losses": 5188,
    "bestPartners": [
      {
        "name": "Wyrdeer",
        "winRate": 37.2,
        "games": 8258
      },
      {
        "name": "Krookodile",
        "winRate": 37.2,
        "games": 8258
      },
      {
        "name": "Incineroar",
        "winRate": 37.2,
        "games": 8258
      },
      {
        "name": "Liepard",
        "winRate": 37.2,
        "games": 8258
      },
      {
        "name": "Umbreon",
        "winRate": 37.2,
        "games": 8258
      }
    ],
    "bestSets": []
  },
  "115": {
    "id": 115,
    "name": "Kangaskhan",
    "isMega": false,
    "elo": 7975,
    "winRate": 49.4,
    "appearances": 10688,
    "wins": 5283,
    "losses": 5405,
    "bestPartners": [
      {
        "name": "Arbok",
        "winRate": 49.4,
        "games": 10688
      },
      {
        "name": "Gyarados",
        "winRate": 49.4,
        "games": 10688
      },
      {
        "name": "Incineroar",
        "winRate": 49.4,
        "games": 10688
      },
      {
        "name": "Luxray",
        "winRate": 49.4,
        "games": 10688
      },
      {
        "name": "Wyrdeer",
        "winRate": 49.4,
        "games": 10688
      }
    ],
    "bestSets": []
  },
  "121": {
    "id": 121,
    "name": "Starmie",
    "isMega": false,
    "elo": 7955,
    "winRate": 49,
    "appearances": 72129,
    "wins": 35364,
    "losses": 36765,
    "bestPartners": [
      {
        "name": "Wyrdeer",
        "winRate": 51,
        "games": 15359
      },
      {
        "name": "Mega Emboar",
        "winRate": 51,
        "games": 5039
      },
      {
        "name": "Emboar",
        "winRate": 50.9,
        "games": 10320
      },
      {
        "name": "Gyarados",
        "winRate": 50.6,
        "games": 20622
      },
      {
        "name": "Whimsicott",
        "winRate": 50.6,
        "games": 20622
      }
    ],
    "bestSets": []
  },
  "127": {
    "id": 127,
    "name": "Pinsir",
    "isMega": false,
    "elo": 8047,
    "winRate": 60.3,
    "appearances": 12685,
    "wins": 7644,
    "losses": 5041,
    "bestPartners": [
      {
        "name": "Wash Rotom",
        "winRate": 66.8,
        "games": 7753
      },
      {
        "name": "Archaludon",
        "winRate": 66.8,
        "games": 7753
      },
      {
        "name": "Kingambit",
        "winRate": 66.8,
        "games": 7753
      },
      {
        "name": "Tyranitar",
        "winRate": 66.8,
        "games": 7753
      },
      {
        "name": "Luxray",
        "winRate": 60.3,
        "games": 12685
      }
    ],
    "bestSets": []
  },
  "128": {
    "id": 128,
    "name": "Tauros",
    "isMega": false,
    "elo": 8009,
    "winRate": 49.6,
    "appearances": 383872,
    "wins": 190326,
    "losses": 193546,
    "bestPartners": [
      {
        "name": "Mega Meowstic",
        "winRate": 67.9,
        "games": 3797
      },
      {
        "name": "Drampa",
        "winRate": 63.4,
        "games": 4016
      },
      {
        "name": "Mega Clefable",
        "winRate": 60.1,
        "games": 8790
      },
      {
        "name": "Basculegion-M",
        "winRate": 60,
        "games": 4430
      },
      {
        "name": "Mega Froslass",
        "winRate": 59.1,
        "games": 4370
      }
    ],
    "bestSets": []
  },
  "130": {
    "id": 130,
    "name": "Gyarados",
    "isMega": false,
    "elo": 7989,
    "winRate": 50.4,
    "appearances": 758514,
    "wins": 382426,
    "losses": 376088,
    "bestPartners": [
      {
        "name": "Kleavor",
        "winRate": 63.6,
        "games": 3962
      },
      {
        "name": "Slurpuff",
        "winRate": 57.5,
        "games": 4595
      },
      {
        "name": "Corviknight",
        "winRate": 57.5,
        "games": 4595
      },
      {
        "name": "Archaludon",
        "winRate": 54.7,
        "games": 18723
      },
      {
        "name": "Mega Delphox",
        "winRate": 54.4,
        "games": 9849
      }
    ],
    "bestSets": []
  },
  "132": {
    "id": 132,
    "name": "Ditto",
    "isMega": false,
    "elo": 7984,
    "winRate": 49.8,
    "appearances": 15590,
    "wins": 7760,
    "losses": 7830,
    "bestPartners": [
      {
        "name": "Pelipper",
        "winRate": 50.8,
        "games": 5333
      },
      {
        "name": "Meowstic-F",
        "winRate": 50.8,
        "games": 5333
      },
      {
        "name": "Froslass",
        "winRate": 50.8,
        "games": 5333
      },
      {
        "name": "Hisuian Zoroark",
        "winRate": 50.8,
        "games": 5333
      },
      {
        "name": "Wyrdeer",
        "winRate": 50.5,
        "games": 10374
      }
    ],
    "bestSets": []
  },
  "134": {
    "id": 134,
    "name": "Vaporeon",
    "isMega": false,
    "elo": 7986,
    "winRate": 52.5,
    "appearances": 40138,
    "wins": 21058,
    "losses": 19080,
    "bestPartners": [
      {
        "name": "Mega Venusaur",
        "winRate": 69,
        "games": 3680
      },
      {
        "name": "Aggron",
        "winRate": 69,
        "games": 3680
      },
      {
        "name": "Wash Rotom",
        "winRate": 69,
        "games": 3680
      },
      {
        "name": "Feraligatr",
        "winRate": 69,
        "games": 3680
      },
      {
        "name": "Incineroar",
        "winRate": 69,
        "games": 3680
      }
    ],
    "bestSets": []
  },
  "135": {
    "id": 135,
    "name": "Jolteon",
    "isMega": false,
    "elo": 7941,
    "winRate": 49.8,
    "appearances": 15809,
    "wins": 7872,
    "losses": 7937,
    "bestPartners": [
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 50.6,
        "games": 5343
      },
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 50.6,
        "games": 5343
      },
      {
        "name": "Gyarados",
        "winRate": 50.1,
        "games": 10619
      },
      {
        "name": "Paldean Tauros",
        "winRate": 49.8,
        "games": 10533
      },
      {
        "name": "Incineroar",
        "winRate": 49.8,
        "games": 10533
      }
    ],
    "bestSets": []
  },
  "136": {
    "id": 136,
    "name": "Flareon",
    "isMega": false,
    "elo": 8010,
    "winRate": 50.4,
    "appearances": 15625,
    "wins": 7869,
    "losses": 7756,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.7,
        "games": 5125
      },
      {
        "name": "Whimsicott",
        "winRate": 50.7,
        "games": 5125
      },
      {
        "name": "Noivern",
        "winRate": 50.7,
        "games": 5125
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 50.7,
        "games": 5125
      },
      {
        "name": "Hisuian Decidueye",
        "winRate": 50.7,
        "games": 5125
      }
    ],
    "bestSets": []
  },
  "142": {
    "id": 142,
    "name": "Aerodactyl",
    "isMega": false,
    "elo": 8038,
    "winRate": 50.1,
    "appearances": 117531,
    "wins": 58834,
    "losses": 58697,
    "bestPartners": [
      {
        "name": "Stunfisk",
        "winRate": 57.6,
        "games": 4562
      },
      {
        "name": "Mega Scovillain",
        "winRate": 53.3,
        "games": 9806
      },
      {
        "name": "Luxray",
        "winRate": 52.4,
        "games": 14941
      },
      {
        "name": "Empoleon",
        "winRate": 51.5,
        "games": 20123
      },
      {
        "name": "Mega Ampharos",
        "winRate": 51.2,
        "games": 5311
      }
    ],
    "bestSets": []
  },
  "143": {
    "id": 143,
    "name": "Snorlax",
    "isMega": false,
    "elo": 7954,
    "winRate": 54.4,
    "appearances": 36077,
    "wins": 19612,
    "losses": 16465,
    "bestPartners": [
      {
        "name": "Torkoal",
        "winRate": 65,
        "games": 11744
      },
      {
        "name": "Slowbro",
        "winRate": 65,
        "games": 11744
      },
      {
        "name": "Drampa",
        "winRate": 64.8,
        "games": 11661
      },
      {
        "name": "Kingambit",
        "winRate": 62.2,
        "games": 16477
      },
      {
        "name": "Hatterene",
        "winRate": 60.6,
        "games": 12833
      }
    ],
    "bestSets": []
  },
  "149": {
    "id": 149,
    "name": "Dragonite",
    "isMega": false,
    "elo": 7979,
    "winRate": 50.2,
    "appearances": 149711,
    "wins": 75181,
    "losses": 74530,
    "bestPartners": [
      {
        "name": "Mega Steelix",
        "winRate": 53.4,
        "games": 5004
      },
      {
        "name": "Feraligatr",
        "winRate": 53.4,
        "games": 5004
      },
      {
        "name": "Fan Rotom",
        "winRate": 53.4,
        "games": 5004
      },
      {
        "name": "Quaquaval",
        "winRate": 53,
        "games": 4945
      },
      {
        "name": "Azumarill",
        "winRate": 52.2,
        "games": 15116
      }
    ],
    "bestSets": []
  },
  "154": {
    "id": 154,
    "name": "Meganium",
    "isMega": false,
    "elo": 7892,
    "winRate": 48,
    "appearances": 24676,
    "wins": 11837,
    "losses": 12839,
    "bestPartners": [
      {
        "name": "Clawitzer",
        "winRate": 50.5,
        "games": 5067
      },
      {
        "name": "Tsareena",
        "winRate": 50.5,
        "games": 5067
      },
      {
        "name": "Arcanine",
        "winRate": 50.5,
        "games": 5067
      },
      {
        "name": "Mow Rotom",
        "winRate": 50.5,
        "games": 5067
      },
      {
        "name": "Gyarados",
        "winRate": 50.3,
        "games": 10051
      }
    ],
    "bestSets": []
  },
  "157": {
    "id": 157,
    "name": "Typhlosion",
    "isMega": false,
    "elo": 8001,
    "winRate": 47.9,
    "appearances": 15156,
    "wins": 7264,
    "losses": 7892,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.7,
        "games": 5180
      },
      {
        "name": "Whimsicott",
        "winRate": 50.7,
        "games": 5180
      },
      {
        "name": "Hisuian Decidueye",
        "winRate": 50.7,
        "games": 5180
      },
      {
        "name": "Dragonite",
        "winRate": 50.7,
        "games": 5180
      },
      {
        "name": "Pelipper",
        "winRate": 50.7,
        "games": 5180
      }
    ],
    "bestSets": []
  },
  "160": {
    "id": 160,
    "name": "Feraligatr",
    "isMega": false,
    "elo": 7987,
    "winRate": 53.6,
    "appearances": 29477,
    "wins": 15791,
    "losses": 13686,
    "bestPartners": [
      {
        "name": "Wash Rotom",
        "winRate": 69,
        "games": 3680
      },
      {
        "name": "Vaporeon",
        "winRate": 69,
        "games": 3680
      },
      {
        "name": "Mega Venusaur",
        "winRate": 59.4,
        "games": 8773
      },
      {
        "name": "Aggron",
        "winRate": 59.4,
        "games": 8773
      },
      {
        "name": "Incineroar",
        "winRate": 53.9,
        "games": 19380
      }
    ],
    "bestSets": []
  },
  "168": {
    "id": 168,
    "name": "Ariados",
    "isMega": false,
    "elo": 7884,
    "winRate": 44.4,
    "appearances": 13983,
    "wins": 6207,
    "losses": 7776,
    "bestPartners": [
      {
        "name": "Mega Slowbro",
        "winRate": 51,
        "games": 5301
      },
      {
        "name": "Galarian Stunfisk",
        "winRate": 51,
        "games": 5301
      },
      {
        "name": "Crabominable",
        "winRate": 51,
        "games": 5301
      },
      {
        "name": "Arbok",
        "winRate": 51,
        "games": 5301
      },
      {
        "name": "Whimsicott",
        "winRate": 51,
        "games": 5301
      }
    ],
    "bestSets": []
  },
  "181": {
    "id": 181,
    "name": "Ampharos",
    "isMega": false,
    "elo": 7993,
    "winRate": 49.9,
    "appearances": 9844,
    "wins": 4913,
    "losses": 4931,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 49.9,
        "games": 9844
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 49.9,
        "games": 9844
      },
      {
        "name": "Paldean Tauros",
        "winRate": 49.9,
        "games": 9844
      },
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 49.9,
        "games": 9844
      },
      {
        "name": "Tauros",
        "winRate": 49.9,
        "games": 9844
      }
    ],
    "bestSets": []
  },
  "184": {
    "id": 184,
    "name": "Azumarill",
    "isMega": false,
    "elo": 7979,
    "winRate": 52.7,
    "appearances": 159191,
    "wins": 83912,
    "losses": 75279,
    "bestPartners": [
      {
        "name": "Mega Meowstic",
        "winRate": 67.9,
        "games": 3797
      },
      {
        "name": "Paldean Tauros",
        "winRate": 67.9,
        "games": 3797
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 67.9,
        "games": 3797
      },
      {
        "name": "Cofagrigus",
        "winRate": 65.3,
        "games": 3911
      },
      {
        "name": "Sneasler",
        "winRate": 56.8,
        "games": 8953
      }
    ],
    "bestSets": []
  },
  "186": {
    "id": 186,
    "name": "Politoed",
    "isMega": false,
    "elo": 8006,
    "winRate": 50.6,
    "appearances": 153275,
    "wins": 77628,
    "losses": 75647,
    "bestPartners": [
      {
        "name": "Mega Venusaur",
        "winRate": 52.5,
        "games": 5093
      },
      {
        "name": "Tyranitar",
        "winRate": 52.5,
        "games": 5093
      },
      {
        "name": "Feraligatr",
        "winRate": 52.5,
        "games": 5093
      },
      {
        "name": "Aggron",
        "winRate": 52.5,
        "games": 5093
      },
      {
        "name": "Mega Steelix",
        "winRate": 51.2,
        "games": 5235
      }
    ],
    "bestSets": []
  },
  "196": {
    "id": 196,
    "name": "Espeon",
    "isMega": false,
    "elo": 8004,
    "winRate": 45.1,
    "appearances": 23129,
    "wins": 10434,
    "losses": 12695,
    "bestPartners": [
      {
        "name": "Kingambit",
        "winRate": 53.4,
        "games": 4892
      },
      {
        "name": "Ditto",
        "winRate": 50.3,
        "games": 5041
      },
      {
        "name": "Tauros",
        "winRate": 50.3,
        "games": 5041
      },
      {
        "name": "Gyarados",
        "winRate": 50.3,
        "games": 5041
      },
      {
        "name": "Luxray",
        "winRate": 50.3,
        "games": 5041
      }
    ],
    "bestSets": []
  },
  "197": {
    "id": 197,
    "name": "Umbreon",
    "isMega": false,
    "elo": 7952,
    "winRate": 46.7,
    "appearances": 47897,
    "wins": 22376,
    "losses": 25521,
    "bestPartners": [
      {
        "name": "Mega Chandelure",
        "winRate": 54,
        "games": 9712
      },
      {
        "name": "Azumarill",
        "winRate": 54,
        "games": 4899
      },
      {
        "name": "Abomasnow",
        "winRate": 54,
        "games": 4813
      },
      {
        "name": "Primarina",
        "winRate": 54,
        "games": 4813
      },
      {
        "name": "Hydreigon",
        "winRate": 52.5,
        "games": 10308
      }
    ],
    "bestSets": []
  },
  "199": {
    "id": 199,
    "name": "Slowking",
    "isMega": false,
    "elo": 8051,
    "winRate": 50.7,
    "appearances": 20852,
    "wins": 10568,
    "losses": 10284,
    "bestPartners": [
      {
        "name": "Wash Rotom",
        "winRate": 51.4,
        "games": 5131
      },
      {
        "name": "Froslass",
        "winRate": 51.4,
        "games": 5131
      },
      {
        "name": "Mega Steelix",
        "winRate": 51.2,
        "games": 5235
      },
      {
        "name": "Milotic",
        "winRate": 51.2,
        "games": 5235
      },
      {
        "name": "Politoed",
        "winRate": 51.2,
        "games": 5235
      }
    ],
    "bestSets": []
  },
  "205": {
    "id": 205,
    "name": "Forretress",
    "isMega": false,
    "elo": 7888,
    "winRate": 47.1,
    "appearances": 193243,
    "wins": 90965,
    "losses": 102278,
    "bestPartners": [
      {
        "name": "Mega Floette",
        "winRate": 55.6,
        "games": 14046
      },
      {
        "name": "Archaludon",
        "winRate": 52.8,
        "games": 23807
      },
      {
        "name": "Primarina",
        "winRate": 52.2,
        "games": 5245
      },
      {
        "name": "Tsareena",
        "winRate": 52.2,
        "games": 5245
      },
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 52.2,
        "games": 5245
      }
    ],
    "bestSets": []
  },
  "208": {
    "id": 208,
    "name": "Steelix",
    "isMega": false,
    "elo": 8019,
    "winRate": 48.7,
    "appearances": 75024,
    "wins": 36534,
    "losses": 38490,
    "bestPartners": [
      {
        "name": "Garchomp",
        "winRate": 51.1,
        "games": 5067
      },
      {
        "name": "Krookodile",
        "winRate": 51.1,
        "games": 5067
      },
      {
        "name": "Simipour",
        "winRate": 50.8,
        "games": 10524
      },
      {
        "name": "Slowbro",
        "winRate": 50.8,
        "games": 10524
      },
      {
        "name": "Vaporeon",
        "winRate": 50.8,
        "games": 10524
      }
    ],
    "bestSets": []
  },
  "212": {
    "id": 212,
    "name": "Scizor",
    "isMega": false,
    "elo": 7967,
    "winRate": 50.1,
    "appearances": 87300,
    "wins": 43762,
    "losses": 43538,
    "bestPartners": [
      {
        "name": "Mudsdale",
        "winRate": 56.7,
        "games": 4615
      },
      {
        "name": "Whimsicott",
        "winRate": 56.7,
        "games": 4615
      },
      {
        "name": "Milotic",
        "winRate": 56.7,
        "games": 4615
      },
      {
        "name": "Arcanine",
        "winRate": 56.7,
        "games": 4615
      },
      {
        "name": "Azumarill",
        "winRate": 54.9,
        "games": 9572
      }
    ],
    "bestSets": []
  },
  "214": {
    "id": 214,
    "name": "Heracross",
    "isMega": false,
    "elo": 8053,
    "winRate": 60.2,
    "appearances": 8540,
    "wins": 5143,
    "losses": 3397,
    "bestPartners": [
      {
        "name": "Tyranitar",
        "winRate": 60.2,
        "games": 8540
      },
      {
        "name": "Wash Rotom",
        "winRate": 60.2,
        "games": 8540
      },
      {
        "name": "Kingambit",
        "winRate": 60.2,
        "games": 8540
      },
      {
        "name": "Archaludon",
        "winRate": 60.2,
        "games": 8540
      },
      {
        "name": "Wyrdeer",
        "winRate": 60.2,
        "games": 8540
      }
    ],
    "bestSets": []
  },
  "227": {
    "id": 227,
    "name": "Skarmory",
    "isMega": false,
    "elo": 7929,
    "winRate": 47.8,
    "appearances": 54949,
    "wins": 26239,
    "losses": 28710,
    "bestPartners": [
      {
        "name": "Pikachu",
        "winRate": 51,
        "games": 5167
      },
      {
        "name": "Pelipper",
        "winRate": 51,
        "games": 5167
      },
      {
        "name": "Araquanid",
        "winRate": 51,
        "games": 5167
      },
      {
        "name": "Mega Garchomp",
        "winRate": 50.7,
        "games": 5542
      },
      {
        "name": "Gyarados",
        "winRate": 50.6,
        "games": 10135
      }
    ],
    "bestSets": []
  },
  "229": {
    "id": 229,
    "name": "Houndoom",
    "isMega": false,
    "elo": 7984,
    "winRate": 50.7,
    "appearances": 15601,
    "wins": 7916,
    "losses": 7685,
    "bestPartners": [
      {
        "name": "Basculegion-F",
        "winRate": 50.9,
        "games": 5146
      },
      {
        "name": "Tauros",
        "winRate": 50.9,
        "games": 5146
      },
      {
        "name": "Mow Rotom",
        "winRate": 50.9,
        "games": 5146
      },
      {
        "name": "Dedenne",
        "winRate": 50.9,
        "games": 5146
      },
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 50.9,
        "games": 5146
      }
    ],
    "bestSets": []
  },
  "248": {
    "id": 248,
    "name": "Tyranitar",
    "isMega": false,
    "elo": 7996,
    "winRate": 53.6,
    "appearances": 136119,
    "wins": 72984,
    "losses": 63135,
    "bestPartners": [
      {
        "name": "Pinsir",
        "winRate": 66.8,
        "games": 7753
      },
      {
        "name": "Luxray",
        "winRate": 66.6,
        "games": 11640
      },
      {
        "name": "Mega Pinsir",
        "winRate": 66.1,
        "games": 3887
      },
      {
        "name": "Heracross",
        "winRate": 60.2,
        "games": 8540
      },
      {
        "name": "Archaludon",
        "winRate": 58.1,
        "games": 40104
      }
    ],
    "bestSets": []
  },
  "279": {
    "id": 279,
    "name": "Pelipper",
    "isMega": false,
    "elo": 7978,
    "winRate": 51,
    "appearances": 237981,
    "wins": 121480,
    "losses": 116501,
    "bestPartners": [
      {
        "name": "Aegislash",
        "winRate": 63.8,
        "games": 4021
      },
      {
        "name": "Mega Floette",
        "winRate": 63.8,
        "games": 4021
      },
      {
        "name": "Hisuian Zoroark",
        "winRate": 56.4,
        "games": 9354
      },
      {
        "name": "Krookodile",
        "winRate": 54.1,
        "games": 14586
      },
      {
        "name": "Mega Glalie",
        "winRate": 52.9,
        "games": 4868
      }
    ],
    "bestSets": []
  },
  "282": {
    "id": 282,
    "name": "Gardevoir",
    "isMega": false,
    "elo": 7905,
    "winRate": 49.2,
    "appearances": 45769,
    "wins": 22497,
    "losses": 23272,
    "bestPartners": [
      {
        "name": "Mega Garchomp",
        "winRate": 51.6,
        "games": 5073
      },
      {
        "name": "Kingambit",
        "winRate": 50.4,
        "games": 20726
      },
      {
        "name": "Ursaluna",
        "winRate": 50.3,
        "games": 5297
      },
      {
        "name": "Garganacl",
        "winRate": 50.3,
        "games": 5297
      },
      {
        "name": "Dragapult",
        "winRate": 50.2,
        "games": 20477
      }
    ],
    "bestSets": []
  },
  "302": {
    "id": 302,
    "name": "Sableye",
    "isMega": false,
    "elo": 7968,
    "winRate": 47.6,
    "appearances": 18826,
    "wins": 8958,
    "losses": 9868,
    "bestPartners": [
      {
        "name": "Archaludon",
        "winRate": 55.3,
        "games": 4702
      },
      {
        "name": "Whimsicott",
        "winRate": 55.3,
        "games": 4702
      },
      {
        "name": "Garchomp",
        "winRate": 52.5,
        "games": 9831
      },
      {
        "name": "Dragapult",
        "winRate": 52.5,
        "games": 9831
      },
      {
        "name": "Kingambit",
        "winRate": 50,
        "games": 5129
      }
    ],
    "bestSets": []
  },
  "306": {
    "id": 306,
    "name": "Aggron",
    "isMega": false,
    "elo": 7988,
    "winRate": 49.4,
    "appearances": 119524,
    "wins": 59053,
    "losses": 60471,
    "bestPartners": [
      {
        "name": "Vaporeon",
        "winRate": 69,
        "games": 3680
      },
      {
        "name": "Mega Venusaur",
        "winRate": 59.4,
        "games": 8773
      },
      {
        "name": "Feraligatr",
        "winRate": 59.4,
        "games": 8773
      },
      {
        "name": "Wash Rotom",
        "winRate": 55.5,
        "games": 13787
      },
      {
        "name": "Incineroar",
        "winRate": 52.5,
        "games": 29385
      }
    ],
    "bestSets": []
  },
  "308": {
    "id": 308,
    "name": "Medicham",
    "isMega": false,
    "elo": 7874,
    "winRate": 44.4,
    "appearances": 9530,
    "wins": 4229,
    "losses": 5301,
    "bestPartners": [
      {
        "name": "Kingambit",
        "winRate": 44.4,
        "games": 9530
      },
      {
        "name": "Aggron",
        "winRate": 44.4,
        "games": 9530
      },
      {
        "name": "Galarian Stunfisk",
        "winRate": 44.4,
        "games": 9530
      },
      {
        "name": "Tauros",
        "winRate": 44.4,
        "games": 9530
      },
      {
        "name": "Heliolisk",
        "winRate": 44.4,
        "games": 9530
      }
    ],
    "bestSets": []
  },
  "310": {
    "id": 310,
    "name": "Manectric",
    "isMega": false,
    "elo": 7924,
    "winRate": 50.8,
    "appearances": 10557,
    "wins": 5364,
    "losses": 5193,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.8,
        "games": 10557
      },
      {
        "name": "Incineroar",
        "winRate": 50.8,
        "games": 10557
      },
      {
        "name": "Pelipper",
        "winRate": 50.8,
        "games": 10557
      },
      {
        "name": "Luxray",
        "winRate": 50.8,
        "games": 10557
      },
      {
        "name": "Wyrdeer",
        "winRate": 50.8,
        "games": 10557
      }
    ],
    "bestSets": []
  },
  "319": {
    "id": 319,
    "name": "Sharpedo",
    "isMega": false,
    "elo": 7962,
    "winRate": 49.6,
    "appearances": 41200,
    "wins": 20435,
    "losses": 20765,
    "bestPartners": [
      {
        "name": "Mega Froslass",
        "winRate": 52.1,
        "games": 5019
      },
      {
        "name": "Archaludon",
        "winRate": 52.1,
        "games": 5019
      },
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 52.1,
        "games": 5019
      },
      {
        "name": "Krookodile",
        "winRate": 52.1,
        "games": 5019
      },
      {
        "name": "Hydreigon",
        "winRate": 52.1,
        "games": 5019
      }
    ],
    "bestSets": []
  },
  "323": {
    "id": 323,
    "name": "Camerupt",
    "isMega": false,
    "elo": 8012,
    "winRate": 49.1,
    "appearances": 30966,
    "wins": 15208,
    "losses": 15758,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.9,
        "games": 10534
      },
      {
        "name": "Whimsicott",
        "winRate": 50.9,
        "games": 10534
      },
      {
        "name": "Pelipper",
        "winRate": 50.9,
        "games": 10534
      },
      {
        "name": "Noivern",
        "winRate": 50.9,
        "games": 10534
      },
      {
        "name": "Abomasnow",
        "winRate": 50.9,
        "games": 10534
      }
    ],
    "bestSets": []
  },
  "324": {
    "id": 324,
    "name": "Torkoal",
    "isMega": false,
    "elo": 7964,
    "winRate": 50.9,
    "appearances": 184286,
    "wins": 93860,
    "losses": 90426,
    "bestPartners": [
      {
        "name": "Snorlax",
        "winRate": 65,
        "games": 11744
      },
      {
        "name": "Drampa",
        "winRate": 63.8,
        "games": 11819
      },
      {
        "name": "Slowbro",
        "winRate": 61.5,
        "games": 16635
      },
      {
        "name": "Kingambit",
        "winRate": 54.5,
        "games": 37663
      },
      {
        "name": "Stunfisk",
        "winRate": 54.4,
        "games": 4848
      }
    ],
    "bestSets": []
  },
  "334": {
    "id": 334,
    "name": "Altaria",
    "isMega": false,
    "elo": 7976,
    "winRate": 49.9,
    "appearances": 62178,
    "wins": 31004,
    "losses": 31174,
    "bestPartners": [
      {
        "name": "Mega Steelix",
        "winRate": 51.2,
        "games": 5235
      },
      {
        "name": "Milotic",
        "winRate": 51.2,
        "games": 5235
      },
      {
        "name": "Politoed",
        "winRate": 51.2,
        "games": 5235
      },
      {
        "name": "Slowking",
        "winRate": 50.9,
        "games": 10458
      },
      {
        "name": "Lucario",
        "winRate": 50.9,
        "games": 10412
      }
    ],
    "bestSets": []
  },
  "350": {
    "id": 350,
    "name": "Milotic",
    "isMega": false,
    "elo": 8052,
    "winRate": 50.6,
    "appearances": 77828,
    "wins": 39417,
    "losses": 38411,
    "bestPartners": [
      {
        "name": "Mudsdale",
        "winRate": 56.7,
        "games": 4615
      },
      {
        "name": "Scizor",
        "winRate": 56.7,
        "games": 4615
      },
      {
        "name": "Azumarill",
        "winRate": 55,
        "games": 9619
      },
      {
        "name": "Fan Rotom",
        "winRate": 53.4,
        "games": 5004
      },
      {
        "name": "Arcanine",
        "winRate": 52.8,
        "games": 9970
      }
    ],
    "bestSets": []
  },
  "351": {
    "id": 351,
    "name": "Castform",
    "isMega": false,
    "elo": 7881,
    "winRate": 36.4,
    "appearances": 12343,
    "wins": 4493,
    "losses": 7850,
    "bestPartners": [
      {
        "name": "Tauros",
        "winRate": 44.9,
        "games": 4787
      },
      {
        "name": "Incineroar",
        "winRate": 44.9,
        "games": 4787
      },
      {
        "name": "Luxray",
        "winRate": 42.4,
        "games": 9116
      },
      {
        "name": "Gyarados",
        "winRate": 42.4,
        "games": 9116
      },
      {
        "name": "Alolan Raichu",
        "winRate": 39.6,
        "games": 4329
      }
    ],
    "bestSets": []
  },
  "354": {
    "id": 354,
    "name": "Banette",
    "isMega": false,
    "elo": 7940,
    "winRate": 42.7,
    "appearances": 32545,
    "wins": 13904,
    "losses": 18641,
    "bestPartners": [
      {
        "name": "Delphox",
        "winRate": 49.9,
        "games": 5427
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 49.9,
        "games": 5427
      },
      {
        "name": "Mega Lopunny",
        "winRate": 49.7,
        "games": 5151
      },
      {
        "name": "Cofagrigus",
        "winRate": 49.7,
        "games": 5151
      },
      {
        "name": "Luxray",
        "winRate": 49.7,
        "games": 5151
      }
    ],
    "bestSets": []
  },
  "358": {
    "id": 358,
    "name": "Chimecho",
    "isMega": false,
    "elo": 7921,
    "winRate": 49.8,
    "appearances": 10319,
    "wins": 5139,
    "losses": 5180,
    "bestPartners": [
      {
        "name": "Paldean Tauros",
        "winRate": 49.8,
        "games": 10319
      },
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 49.8,
        "games": 10319
      },
      {
        "name": "Incineroar",
        "winRate": 49.8,
        "games": 10319
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 49.8,
        "games": 10319
      },
      {
        "name": "Kingambit",
        "winRate": 49.8,
        "games": 10319
      }
    ],
    "bestSets": []
  },
  "359": {
    "id": 359,
    "name": "Absol",
    "isMega": false,
    "elo": 8000,
    "winRate": 50.4,
    "appearances": 15598,
    "wins": 7862,
    "losses": 7736,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.6,
        "games": 10588
      },
      {
        "name": "Arcanine",
        "winRate": 50.6,
        "games": 10588
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 50.6,
        "games": 10588
      },
      {
        "name": "Hisuian Zoroark",
        "winRate": 50.6,
        "games": 10588
      },
      {
        "name": "Sneasler",
        "winRate": 50.6,
        "games": 10588
      }
    ],
    "bestSets": []
  },
  "362": {
    "id": 362,
    "name": "Glalie",
    "isMega": false,
    "elo": 7964,
    "winRate": 50.8,
    "appearances": 10855,
    "wins": 5516,
    "losses": 5339,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.8,
        "games": 10855
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 50.8,
        "games": 10855
      },
      {
        "name": "Arcanine",
        "winRate": 50.8,
        "games": 10855
      },
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 50.8,
        "games": 10855
      },
      {
        "name": "Incineroar",
        "winRate": 50.8,
        "games": 10855
      }
    ],
    "bestSets": []
  },
  "389": {
    "id": 389,
    "name": "Torterra",
    "isMega": false,
    "elo": 7916,
    "winRate": 50.1,
    "appearances": 15482,
    "wins": 7761,
    "losses": 7721,
    "bestPartners": [
      {
        "name": "Krookodile",
        "winRate": 51.1,
        "games": 5067
      },
      {
        "name": "Mega Gyarados",
        "winRate": 50.5,
        "games": 10078
      },
      {
        "name": "Hisuian Goodra",
        "winRate": 50.5,
        "games": 10078
      },
      {
        "name": "Steelix",
        "winRate": 50.5,
        "games": 10078
      },
      {
        "name": "Garchomp",
        "winRate": 50.2,
        "games": 10471
      }
    ],
    "bestSets": []
  },
  "392": {
    "id": 392,
    "name": "Infernape",
    "isMega": false,
    "elo": 7907,
    "winRate": 48.5,
    "appearances": 15180,
    "wins": 7357,
    "losses": 7823,
    "bestPartners": [
      {
        "name": "Basculegion-F",
        "winRate": 50.6,
        "games": 5409
      },
      {
        "name": "Krookodile",
        "winRate": 50.6,
        "games": 5409
      },
      {
        "name": "Incineroar",
        "winRate": 50.6,
        "games": 5409
      },
      {
        "name": "Zoroark",
        "winRate": 50.6,
        "games": 5409
      },
      {
        "name": "Tauros",
        "winRate": 50.6,
        "games": 5409
      }
    ],
    "bestSets": []
  },
  "395": {
    "id": 395,
    "name": "Empoleon",
    "isMega": false,
    "elo": 8024,
    "winRate": 50.8,
    "appearances": 148327,
    "wins": 75355,
    "losses": 72972,
    "bestPartners": [
      {
        "name": "Gliscor",
        "winRate": 54.9,
        "games": 4868
      },
      {
        "name": "Primarina",
        "winRate": 54.9,
        "games": 4868
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 54.3,
        "games": 4830
      },
      {
        "name": "Stunfisk",
        "winRate": 54,
        "games": 14349
      },
      {
        "name": "Gourgeist",
        "winRate": 54,
        "games": 4967
      }
    ],
    "bestSets": []
  },
  "405": {
    "id": 405,
    "name": "Luxray",
    "isMega": false,
    "elo": 8020,
    "winRate": 49.5,
    "appearances": 341390,
    "wins": 169140,
    "losses": 172250,
    "bestPartners": [
      {
        "name": "Mega Blastoise",
        "winRate": 73,
        "games": 3557
      },
      {
        "name": "Tyranitar",
        "winRate": 66.6,
        "games": 11640
      },
      {
        "name": "Pinsir",
        "winRate": 60.3,
        "games": 12685
      },
      {
        "name": "Mega Clefable",
        "winRate": 60,
        "games": 4430
      },
      {
        "name": "Basculegion-M",
        "winRate": 60,
        "games": 4430
      }
    ],
    "bestSets": []
  },
  "407": {
    "id": 407,
    "name": "Roserade",
    "isMega": false,
    "elo": 7975,
    "winRate": 50.8,
    "appearances": 15486,
    "wins": 7873,
    "losses": 7613,
    "bestPartners": [
      {
        "name": "Mega Feraligatr",
        "winRate": 51.1,
        "games": 5229
      },
      {
        "name": "Tsareena",
        "winRate": 51.1,
        "games": 5229
      },
      {
        "name": "Serperior",
        "winRate": 51.1,
        "games": 5229
      },
      {
        "name": "Arcanine",
        "winRate": 51.1,
        "games": 5229
      },
      {
        "name": "Meowscarada",
        "winRate": 51.1,
        "games": 5229
      }
    ],
    "bestSets": []
  },
  "409": {
    "id": 409,
    "name": "Rampardos",
    "isMega": false,
    "elo": 7883,
    "winRate": 46.2,
    "appearances": 14556,
    "wins": 6728,
    "losses": 7828,
    "bestPartners": [
      {
        "name": "Fan Rotom",
        "winRate": 50.6,
        "games": 5048
      },
      {
        "name": "Mow Rotom",
        "winRate": 50.6,
        "games": 5048
      },
      {
        "name": "Decidueye",
        "winRate": 50.6,
        "games": 5048
      },
      {
        "name": "Whimsicott",
        "winRate": 48.9,
        "games": 10208
      },
      {
        "name": "Toxicroak",
        "winRate": 47.2,
        "games": 5160
      }
    ],
    "bestSets": []
  },
  "411": {
    "id": 411,
    "name": "Bastiodon",
    "isMega": false,
    "elo": 7947,
    "winRate": 49.1,
    "appearances": 60338,
    "wins": 29614,
    "losses": 30724,
    "bestPartners": [
      {
        "name": "Mega Altaria",
        "winRate": 60.3,
        "games": 4329
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 50.7,
        "games": 35262
      },
      {
        "name": "Arcanine",
        "winRate": 50.4,
        "games": 35279
      },
      {
        "name": "Dragonite",
        "winRate": 50.1,
        "games": 10238
      },
      {
        "name": "Fan Rotom",
        "winRate": 49.8,
        "games": 5199
      }
    ],
    "bestSets": []
  },
  "442": {
    "id": 442,
    "name": "Spiritomb",
    "isMega": false,
    "elo": 7977,
    "winRate": 47.9,
    "appearances": 15035,
    "wins": 7197,
    "losses": 7838,
    "bestPartners": [
      {
        "name": "Garbodor",
        "winRate": 49.9,
        "games": 5126
      },
      {
        "name": "Greninja",
        "winRate": 49.9,
        "games": 5126
      },
      {
        "name": "Hisuian Samurott",
        "winRate": 49.9,
        "games": 5126
      },
      {
        "name": "Umbreon",
        "winRate": 49.9,
        "games": 5126
      },
      {
        "name": "Mega Audino",
        "winRate": 49.7,
        "games": 5328
      }
    ],
    "bestSets": []
  },
  "445": {
    "id": 445,
    "name": "Garchomp",
    "isMega": false,
    "elo": 7983,
    "winRate": 50,
    "appearances": 1627282,
    "wins": 814431,
    "losses": 812851,
    "bestPartners": [
      {
        "name": "Mega Floette",
        "winRate": 63.2,
        "games": 4040
      },
      {
        "name": "Simipour",
        "winRate": 63.2,
        "games": 4040
      },
      {
        "name": "Tsareena",
        "winRate": 60.8,
        "games": 8438
      },
      {
        "name": "Primarina",
        "winRate": 60,
        "games": 4314
      },
      {
        "name": "Arbok",
        "winRate": 60,
        "games": 4314
      }
    ],
    "bestSets": []
  },
  "448": {
    "id": 448,
    "name": "Lucario",
    "isMega": false,
    "elo": 7969,
    "winRate": 49.5,
    "appearances": 25429,
    "wins": 12592,
    "losses": 12837,
    "bestPartners": [
      {
        "name": "Pelipper",
        "winRate": 50.9,
        "games": 10412
      },
      {
        "name": "Dragonite",
        "winRate": 50.9,
        "games": 10412
      },
      {
        "name": "Altaria",
        "winRate": 50.9,
        "games": 10412
      },
      {
        "name": "Noivern",
        "winRate": 50.9,
        "games": 10412
      },
      {
        "name": "Gyarados",
        "winRate": 50.6,
        "games": 15606
      }
    ],
    "bestSets": []
  },
  "450": {
    "id": 450,
    "name": "Hippowdon",
    "isMega": false,
    "elo": 7976,
    "winRate": 50.4,
    "appearances": 15723,
    "wins": 7920,
    "losses": 7803,
    "bestPartners": [
      {
        "name": "Simipour",
        "winRate": 51.1,
        "games": 5298
      },
      {
        "name": "Gyarados",
        "winRate": 51.1,
        "games": 5298
      },
      {
        "name": "Volcarona",
        "winRate": 51.1,
        "games": 5298
      },
      {
        "name": "Palafin",
        "winRate": 50.9,
        "games": 10397
      },
      {
        "name": "Whimsicott",
        "winRate": 50.9,
        "games": 10397
      }
    ],
    "bestSets": []
  },
  "454": {
    "id": 454,
    "name": "Toxicroak",
    "isMega": false,
    "elo": 7885,
    "winRate": 44.5,
    "appearances": 19166,
    "wins": 8525,
    "losses": 10641,
    "bestPartners": [
      {
        "name": "Incineroar",
        "winRate": 50.2,
        "games": 5120
      },
      {
        "name": "Kingambit",
        "winRate": 50.2,
        "games": 5120
      },
      {
        "name": "Archaludon",
        "winRate": 50.2,
        "games": 5120
      },
      {
        "name": "Wyrdeer",
        "winRate": 48.8,
        "games": 10240
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 48.8,
        "games": 10240
      }
    ],
    "bestSets": []
  },
  "460": {
    "id": 460,
    "name": "Abomasnow",
    "isMega": false,
    "elo": 8005,
    "winRate": 51,
    "appearances": 56105,
    "wins": 28592,
    "losses": 27513,
    "bestPartners": [
      {
        "name": "Mega Chandelure",
        "winRate": 54,
        "games": 4813
      },
      {
        "name": "Krookodile",
        "winRate": 54,
        "games": 4813
      },
      {
        "name": "Umbreon",
        "winRate": 54,
        "games": 4813
      },
      {
        "name": "Primarina",
        "winRate": 54,
        "games": 4813
      },
      {
        "name": "Scizor",
        "winRate": 53.8,
        "games": 4945
      }
    ],
    "bestSets": []
  },
  "461": {
    "id": 461,
    "name": "Weavile",
    "isMega": false,
    "elo": 7982,
    "winRate": 50.3,
    "appearances": 26507,
    "wins": 13321,
    "losses": 13186,
    "bestPartners": [
      {
        "name": "Paldean Tauros",
        "winRate": 51.2,
        "games": 5374
      },
      {
        "name": "Liepard",
        "winRate": 51.2,
        "games": 5374
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 50.9,
        "games": 10597
      },
      {
        "name": "Arbok",
        "winRate": 50.5,
        "games": 5223
      },
      {
        "name": "Gyarados",
        "winRate": 50.5,
        "games": 5223
      }
    ],
    "bestSets": []
  },
  "464": {
    "id": 464,
    "name": "Rhyperior",
    "isMega": false,
    "elo": 7936,
    "winRate": 50.5,
    "appearances": 180067,
    "wins": 90871,
    "losses": 89196,
    "bestPartners": [
      {
        "name": "Snorlax",
        "winRate": 60.6,
        "games": 8377
      },
      {
        "name": "Slowbro",
        "winRate": 55.9,
        "games": 13776
      },
      {
        "name": "Tauros",
        "winRate": 54.3,
        "games": 4830
      },
      {
        "name": "Stunfisk",
        "winRate": 54.3,
        "games": 4830
      },
      {
        "name": "Drampa",
        "winRate": 54.1,
        "games": 28669
      }
    ],
    "bestSets": []
  },
  "470": {
    "id": 470,
    "name": "Leafeon",
    "isMega": false,
    "elo": 7961,
    "winRate": 50,
    "appearances": 15979,
    "wins": 7996,
    "losses": 7983,
    "bestPartners": [
      {
        "name": "Torkoal",
        "winRate": 50.2,
        "games": 5418
      },
      {
        "name": "Ninetales",
        "winRate": 50.1,
        "games": 10785
      },
      {
        "name": "Charizard",
        "winRate": 50.1,
        "games": 10785
      },
      {
        "name": "Scovillain",
        "winRate": 50.1,
        "games": 10785
      },
      {
        "name": "Venusaur",
        "winRate": 50.1,
        "games": 10785
      }
    ],
    "bestSets": []
  },
  "471": {
    "id": 471,
    "name": "Glaceon",
    "isMega": false,
    "elo": 7916,
    "winRate": 50.3,
    "appearances": 15698,
    "wins": 7891,
    "losses": 7807,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 51,
        "games": 5419
      },
      {
        "name": "Arcanine",
        "winRate": 51,
        "games": 5419
      },
      {
        "name": "Garchomp",
        "winRate": 50.5,
        "games": 10492
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 50.4,
        "games": 10625
      },
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 50.4,
        "games": 10625
      }
    ],
    "bestSets": []
  },
  "472": {
    "id": 472,
    "name": "Gliscor",
    "isMega": false,
    "elo": 7987,
    "winRate": 48.1,
    "appearances": 14357,
    "wins": 6904,
    "losses": 7453,
    "bestPartners": [
      {
        "name": "Empoleon",
        "winRate": 54.9,
        "games": 4868
      },
      {
        "name": "Incineroar",
        "winRate": 54.9,
        "games": 4868
      },
      {
        "name": "Wash Rotom",
        "winRate": 54.9,
        "games": 4868
      },
      {
        "name": "Azumarill",
        "winRate": 54.9,
        "games": 4868
      },
      {
        "name": "Primarina",
        "winRate": 54.9,
        "games": 4868
      }
    ],
    "bestSets": []
  },
  "473": {
    "id": 473,
    "name": "Mamoswine",
    "isMega": false,
    "elo": 7935,
    "winRate": 50.3,
    "appearances": 21071,
    "wins": 10589,
    "losses": 10482,
    "bestPartners": [
      {
        "name": "Mega Floette",
        "winRate": 50.8,
        "games": 5148
      },
      {
        "name": "Whimsicott",
        "winRate": 50.7,
        "games": 10273
      },
      {
        "name": "Incineroar",
        "winRate": 50.6,
        "games": 5125
      },
      {
        "name": "Goodra",
        "winRate": 50.5,
        "games": 15689
      },
      {
        "name": "Skeledirge",
        "winRate": 50.5,
        "games": 10564
      }
    ],
    "bestSets": []
  },
  "475": {
    "id": 475,
    "name": "Gallade",
    "isMega": false,
    "elo": 7919,
    "winRate": 44.3,
    "appearances": 9487,
    "wins": 4201,
    "losses": 5286,
    "bestPartners": [
      {
        "name": "Hisuian Arcanine",
        "winRate": 44.3,
        "games": 9487
      },
      {
        "name": "Kingambit",
        "winRate": 44.3,
        "games": 9487
      },
      {
        "name": "Bastiodon",
        "winRate": 44.3,
        "games": 9487
      },
      {
        "name": "Aggron",
        "winRate": 44.3,
        "games": 9487
      },
      {
        "name": "Steelix",
        "winRate": 44.3,
        "games": 9487
      }
    ],
    "bestSets": []
  },
  "478": {
    "id": 478,
    "name": "Froslass",
    "isMega": false,
    "elo": 7993,
    "winRate": 50.2,
    "appearances": 47400,
    "wins": 23814,
    "losses": 23586,
    "bestPartners": [
      {
        "name": "Diggersby",
        "winRate": 51.4,
        "games": 5131
      },
      {
        "name": "Samurott",
        "winRate": 51.4,
        "games": 5131
      },
      {
        "name": "Wash Rotom",
        "winRate": 51.4,
        "games": 5131
      },
      {
        "name": "Slowking",
        "winRate": 51.4,
        "games": 5131
      },
      {
        "name": "Flapple",
        "winRate": 51.4,
        "games": 5253
      }
    ],
    "bestSets": []
  },
  "479": {
    "id": 479,
    "name": "Rotom",
    "isMega": false,
    "elo": 7926,
    "winRate": 48,
    "appearances": 24383,
    "wins": 11711,
    "losses": 12672,
    "bestPartners": [
      {
        "name": "Mega Floette",
        "winRate": 51.2,
        "games": 5116
      },
      {
        "name": "Forretress",
        "winRate": 51.2,
        "games": 5116
      },
      {
        "name": "Tauros",
        "winRate": 51.2,
        "games": 5116
      },
      {
        "name": "Wyrdeer",
        "winRate": 50.6,
        "games": 10159
      },
      {
        "name": "Gyarados",
        "winRate": 50.5,
        "games": 15197
      }
    ],
    "bestSets": []
  },
  "497": {
    "id": 497,
    "name": "Serperior",
    "isMega": false,
    "elo": 7949,
    "winRate": 49.6,
    "appearances": 56958,
    "wins": 28249,
    "losses": 28709,
    "bestPartners": [
      {
        "name": "Mega Aerodactyl",
        "winRate": 51.2,
        "games": 5122
      },
      {
        "name": "Luxray",
        "winRate": 51.2,
        "games": 5122
      },
      {
        "name": "Wash Rotom",
        "winRate": 51.2,
        "games": 5122
      },
      {
        "name": "Tsareena",
        "winRate": 51.1,
        "games": 5229
      },
      {
        "name": "Roserade",
        "winRate": 51.1,
        "games": 5229
      }
    ],
    "bestSets": []
  },
  "500": {
    "id": 500,
    "name": "Emboar",
    "isMega": false,
    "elo": 7905,
    "winRate": 50.6,
    "appearances": 15428,
    "wins": 7810,
    "losses": 7618,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.9,
        "games": 10320
      },
      {
        "name": "Whimsicott",
        "winRate": 50.9,
        "games": 10320
      },
      {
        "name": "Aerodactyl",
        "winRate": 50.9,
        "games": 10320
      },
      {
        "name": "Starmie",
        "winRate": 50.9,
        "games": 10320
      },
      {
        "name": "Wyrdeer",
        "winRate": 50.9,
        "games": 10320
      }
    ],
    "bestSets": []
  },
  "503": {
    "id": 503,
    "name": "Samurott",
    "isMega": false,
    "elo": 8018,
    "winRate": 51.1,
    "appearances": 36352,
    "wins": 18558,
    "losses": 17794,
    "bestPartners": [
      {
        "name": "Gourgeist",
        "winRate": 54,
        "games": 4967
      },
      {
        "name": "Simipour",
        "winRate": 54,
        "games": 4967
      },
      {
        "name": "Tyranitar",
        "winRate": 54,
        "games": 4967
      },
      {
        "name": "Empoleon",
        "winRate": 54,
        "games": 4967
      },
      {
        "name": "Wash Rotom",
        "winRate": 52.7,
        "games": 15079
      }
    ],
    "bestSets": []
  },
  "505": {
    "id": 505,
    "name": "Watchog",
    "isMega": false,
    "elo": 7878,
    "winRate": 35.8,
    "appearances": 12429,
    "wins": 4452,
    "losses": 7977,
    "bestPartners": [
      {
        "name": "Luxray",
        "winRate": 44.8,
        "games": 4868
      },
      {
        "name": "Wyrdeer",
        "winRate": 44.8,
        "games": 4868
      },
      {
        "name": "Incineroar",
        "winRate": 42.5,
        "games": 9280
      },
      {
        "name": "Gyarados",
        "winRate": 42.5,
        "games": 9280
      },
      {
        "name": "Tauros",
        "winRate": 42.5,
        "games": 9280
      }
    ],
    "bestSets": []
  },
  "510": {
    "id": 510,
    "name": "Liepard",
    "isMega": false,
    "elo": 7899,
    "winRate": 43.6,
    "appearances": 87296,
    "wins": 38050,
    "losses": 49246,
    "bestPartners": [
      {
        "name": "Paldean Tauros",
        "winRate": 51.2,
        "games": 5374
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 51.2,
        "games": 5374
      },
      {
        "name": "Weavile",
        "winRate": 51.2,
        "games": 5374
      },
      {
        "name": "Garbodor",
        "winRate": 50.9,
        "games": 5273
      },
      {
        "name": "Greninja",
        "winRate": 50.9,
        "games": 5273
      }
    ],
    "bestSets": []
  },
  "512": {
    "id": 512,
    "name": "Simisage",
    "isMega": false,
    "elo": 8025,
    "winRate": 50,
    "appearances": 73022,
    "wins": 36518,
    "losses": 36504,
    "bestPartners": [
      {
        "name": "Mega Aerodactyl",
        "winRate": 51.2,
        "games": 5122
      },
      {
        "name": "Mow Rotom",
        "winRate": 51.2,
        "games": 5122
      },
      {
        "name": "Wash Rotom",
        "winRate": 51.2,
        "games": 5122
      },
      {
        "name": "Clawitzer",
        "winRate": 51.1,
        "games": 5363
      },
      {
        "name": "Mega Tyranitar",
        "winRate": 51.1,
        "games": 5175
      }
    ],
    "bestSets": []
  },
  "514": {
    "id": 514,
    "name": "Simisear",
    "isMega": false,
    "elo": 7998,
    "winRate": 48.3,
    "appearances": 15263,
    "wins": 7379,
    "losses": 7884,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 51,
        "games": 10630
      },
      {
        "name": "Whimsicott",
        "winRate": 51,
        "games": 5277
      },
      {
        "name": "Hisuian Decidueye",
        "winRate": 51,
        "games": 5277
      },
      {
        "name": "Dragonite",
        "winRate": 51,
        "games": 5277
      },
      {
        "name": "Pelipper",
        "winRate": 51,
        "games": 5277
      }
    ],
    "bestSets": []
  },
  "516": {
    "id": 516,
    "name": "Simipour",
    "isMega": false,
    "elo": 7926,
    "winRate": 47.3,
    "appearances": 110256,
    "wins": 52149,
    "losses": 58107,
    "bestPartners": [
      {
        "name": "Tsareena",
        "winRate": 63.2,
        "games": 4040
      },
      {
        "name": "Mega Gyarados",
        "winRate": 63.2,
        "games": 4040
      },
      {
        "name": "Archaludon",
        "winRate": 63.2,
        "games": 4040
      },
      {
        "name": "Garchomp",
        "winRate": 63.2,
        "games": 4040
      },
      {
        "name": "Mega Floette",
        "winRate": 63.2,
        "games": 4040
      }
    ],
    "bestSets": []
  },
  "530": {
    "id": 530,
    "name": "Excadrill",
    "isMega": false,
    "elo": 7928,
    "winRate": 50,
    "appearances": 334393,
    "wins": 167091,
    "losses": 167302,
    "bestPartners": [
      {
        "name": "Mega Scizor",
        "winRate": 52.7,
        "games": 20086
      },
      {
        "name": "Mega Gengar",
        "winRate": 51.3,
        "games": 40969
      },
      {
        "name": "Mega Dragonite",
        "winRate": 51,
        "games": 36167
      },
      {
        "name": "Pelipper",
        "winRate": 50.7,
        "games": 10314
      },
      {
        "name": "Dragonite",
        "winRate": 50.7,
        "games": 10314
      }
    ],
    "bestSets": []
  },
  "531": {
    "id": 531,
    "name": "Audino",
    "isMega": false,
    "elo": 7960,
    "winRate": 49.7,
    "appearances": 25589,
    "wins": 12720,
    "losses": 12869,
    "bestPartners": [
      {
        "name": "Cofagrigus",
        "winRate": 50.8,
        "games": 10346
      },
      {
        "name": "Arbok",
        "winRate": 50.8,
        "games": 10346
      },
      {
        "name": "Reuniclus",
        "winRate": 50.8,
        "games": 10346
      },
      {
        "name": "Galarian Slowbro",
        "winRate": 50.8,
        "games": 10346
      },
      {
        "name": "Luxray",
        "winRate": 50.8,
        "games": 5306
      }
    ],
    "bestSets": []
  },
  "534": {
    "id": 534,
    "name": "Conkeldurr",
    "isMega": false,
    "elo": 7956,
    "winRate": 47.7,
    "appearances": 34561,
    "wins": 16479,
    "losses": 18082,
    "bestPartners": [
      {
        "name": "Mr. Rime",
        "winRate": 54.4,
        "games": 4848
      },
      {
        "name": "Stunfisk",
        "winRate": 54.4,
        "games": 4848
      },
      {
        "name": "Torkoal",
        "winRate": 54.4,
        "games": 4848
      },
      {
        "name": "Garchomp",
        "winRate": 54.4,
        "games": 4848
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 51.8,
        "games": 10003
      }
    ],
    "bestSets": []
  },
  "547": {
    "id": 547,
    "name": "Whimsicott",
    "isMega": false,
    "elo": 8001,
    "winRate": 50.2,
    "appearances": 1025871,
    "wins": 515424,
    "losses": 510447,
    "bestPartners": [
      {
        "name": "Scizor",
        "winRate": 56.7,
        "games": 4615
      },
      {
        "name": "Luxray",
        "winRate": 55.9,
        "games": 13984
      },
      {
        "name": "Sableye",
        "winRate": 55.3,
        "games": 4702
      },
      {
        "name": "Armarouge",
        "winRate": 55.1,
        "games": 4800
      },
      {
        "name": "Mudsdale",
        "winRate": 54.3,
        "games": 9752
      }
    ],
    "bestSets": []
  },
  "553": {
    "id": 553,
    "name": "Krookodile",
    "isMega": false,
    "elo": 7963,
    "winRate": 49,
    "appearances": 372391,
    "wins": 182295,
    "losses": 190096,
    "bestPartners": [
      {
        "name": "Mega Floette",
        "winRate": 63.8,
        "games": 4021
      },
      {
        "name": "Hisuian Zoroark",
        "winRate": 56.2,
        "games": 9125
      },
      {
        "name": "Sneasler",
        "winRate": 55.8,
        "games": 14017
      },
      {
        "name": "Dragapult",
        "winRate": 55.5,
        "games": 14333
      },
      {
        "name": "Primarina",
        "winRate": 55.1,
        "games": 14372
      }
    ],
    "bestSets": []
  },
  "563": {
    "id": 563,
    "name": "Cofagrigus",
    "isMega": false,
    "elo": 7965,
    "winRate": 51.7,
    "appearances": 40137,
    "wins": 20749,
    "losses": 19388,
    "bestPartners": [
      {
        "name": "Sneasler",
        "winRate": 65.3,
        "games": 3911
      },
      {
        "name": "Wyrdeer",
        "winRate": 65.3,
        "games": 3911
      },
      {
        "name": "Azumarill",
        "winRate": 65.3,
        "games": 3911
      },
      {
        "name": "Kingambit",
        "winRate": 56.3,
        "games": 9079
      },
      {
        "name": "Aromatisse",
        "winRate": 56.3,
        "games": 9079
      }
    ],
    "bestSets": []
  },
  "569": {
    "id": 569,
    "name": "Garbodor",
    "isMega": false,
    "elo": 7952,
    "winRate": 50.4,
    "appearances": 15558,
    "wins": 7844,
    "losses": 7714,
    "bestPartners": [
      {
        "name": "Liepard",
        "winRate": 50.9,
        "games": 5273
      },
      {
        "name": "Tauros",
        "winRate": 50.9,
        "games": 5273
      },
      {
        "name": "Gyarados",
        "winRate": 50.9,
        "games": 5273
      },
      {
        "name": "Wyrdeer",
        "winRate": 50.7,
        "games": 10432
      },
      {
        "name": "Greninja",
        "winRate": 50.4,
        "games": 15558
      }
    ],
    "bestSets": []
  },
  "571": {
    "id": 571,
    "name": "Zoroark",
    "isMega": false,
    "elo": 7960,
    "winRate": 50,
    "appearances": 25644,
    "wins": 12821,
    "losses": 12823,
    "bestPartners": [
      {
        "name": "Pangoro",
        "winRate": 54,
        "games": 4801
      },
      {
        "name": "Tyranitar",
        "winRate": 54,
        "games": 4801
      },
      {
        "name": "Hisuian Samurott",
        "winRate": 54,
        "games": 4801
      },
      {
        "name": "Farigiraf",
        "winRate": 54,
        "games": 4801
      },
      {
        "name": "Mega Gengar",
        "winRate": 52.4,
        "games": 10045
      }
    ],
    "bestSets": []
  },
  "579": {
    "id": 579,
    "name": "Reuniclus",
    "isMega": false,
    "elo": 7939,
    "winRate": 50.9,
    "appearances": 15412,
    "wins": 7840,
    "losses": 7572,
    "bestPartners": [
      {
        "name": "Mega Audino",
        "winRate": 51,
        "games": 5066
      },
      {
        "name": "Cofagrigus",
        "winRate": 50.9,
        "games": 15412
      },
      {
        "name": "Arbok",
        "winRate": 50.9,
        "games": 15412
      },
      {
        "name": "Gyarados",
        "winRate": 50.9,
        "games": 15412
      },
      {
        "name": "Galarian Slowbro",
        "winRate": 50.9,
        "games": 15412
      }
    ],
    "bestSets": []
  },
  "584": {
    "id": 584,
    "name": "Vanilluxe",
    "isMega": false,
    "elo": 7950,
    "winRate": 50.4,
    "appearances": 14920,
    "wins": 7516,
    "losses": 7404,
    "bestPartners": [
      {
        "name": "Arcanine",
        "winRate": 55,
        "games": 4790
      },
      {
        "name": "Garchomp",
        "winRate": 55,
        "games": 4790
      },
      {
        "name": "Charizard",
        "winRate": 55,
        "games": 4790
      },
      {
        "name": "Gyarados",
        "winRate": 53,
        "games": 10128
      },
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 51.1,
        "games": 5338
      }
    ],
    "bestSets": []
  },
  "587": {
    "id": 587,
    "name": "Emolga",
    "isMega": false,
    "elo": 7988,
    "winRate": 48.1,
    "appearances": 70230,
    "wins": 33766,
    "losses": 36464,
    "bestPartners": [
      {
        "name": "Orthworm",
        "winRate": 50.8,
        "games": 5191
      },
      {
        "name": "Mega Aggron",
        "winRate": 50.8,
        "games": 5249
      },
      {
        "name": "Mega Emboar",
        "winRate": 50.7,
        "games": 5319
      },
      {
        "name": "Wyrdeer",
        "winRate": 50.7,
        "games": 5319
      },
      {
        "name": "Corviknight",
        "winRate": 50.7,
        "games": 5319
      }
    ],
    "bestSets": []
  },
  "609": {
    "id": 609,
    "name": "Chandelure",
    "isMega": false,
    "elo": 7950,
    "winRate": 50.6,
    "appearances": 10044,
    "wins": 5085,
    "losses": 4959,
    "bestPartners": [
      {
        "name": "Liepard",
        "winRate": 50.6,
        "games": 10044
      },
      {
        "name": "Wyrdeer",
        "winRate": 50.6,
        "games": 10044
      },
      {
        "name": "Tauros",
        "winRate": 50.6,
        "games": 10044
      },
      {
        "name": "Gyarados",
        "winRate": 50.6,
        "games": 10044
      },
      {
        "name": "Azumarill",
        "winRate": 50.6,
        "games": 10044
      }
    ],
    "bestSets": []
  },
  "614": {
    "id": 614,
    "name": "Beartic",
    "isMega": false,
    "elo": 7995,
    "winRate": 49.8,
    "appearances": 15448,
    "wins": 7693,
    "losses": 7755,
    "bestPartners": [
      {
        "name": "Simisear",
        "winRate": 50.9,
        "games": 5353
      },
      {
        "name": "Sneasler",
        "winRate": 50.9,
        "games": 10522
      },
      {
        "name": "Arcanine",
        "winRate": 50.9,
        "games": 5169
      },
      {
        "name": "Garchomp",
        "winRate": 50.9,
        "games": 5169
      },
      {
        "name": "Charizard",
        "winRate": 50.9,
        "games": 5169
      }
    ],
    "bestSets": []
  },
  "618": {
    "id": 618,
    "name": "Stunfisk",
    "isMega": false,
    "elo": 8016,
    "winRate": 52.6,
    "appearances": 39273,
    "wins": 20660,
    "losses": 18613,
    "bestPartners": [
      {
        "name": "Mega Scovillain",
        "winRate": 57.6,
        "games": 4562
      },
      {
        "name": "Aerodactyl",
        "winRate": 57.6,
        "games": 4562
      },
      {
        "name": "Archaludon",
        "winRate": 57.6,
        "games": 4562
      },
      {
        "name": "Mr. Rime",
        "winRate": 54.4,
        "games": 4848
      },
      {
        "name": "Torkoal",
        "winRate": 54.4,
        "games": 4848
      }
    ],
    "bestSets": []
  },
  "623": {
    "id": 623,
    "name": "Golurk",
    "isMega": false,
    "elo": 7895,
    "winRate": 41.1,
    "appearances": 17763,
    "wins": 7307,
    "losses": 10456,
    "bestPartners": [
      {
        "name": "Wyrdeer",
        "winRate": 48.7,
        "games": 5239
      },
      {
        "name": "Heat Rotom",
        "winRate": 48.7,
        "games": 5239
      },
      {
        "name": "Arcanine",
        "winRate": 48.7,
        "games": 5239
      },
      {
        "name": "Mega Pidgeot",
        "winRate": 47.2,
        "games": 10030
      },
      {
        "name": "Tinkaton",
        "winRate": 47.2,
        "games": 10030
      }
    ],
    "bestSets": []
  },
  "635": {
    "id": 635,
    "name": "Hydreigon",
    "isMega": false,
    "elo": 7998,
    "winRate": 51.9,
    "appearances": 65702,
    "wins": 34074,
    "losses": 31628,
    "bestPartners": [
      {
        "name": "Mega Lucario",
        "winRate": 55.8,
        "games": 4652
      },
      {
        "name": "Mega Skarmory",
        "winRate": 55.1,
        "games": 4774
      },
      {
        "name": "Sneasler",
        "winRate": 55.1,
        "games": 4774
      },
      {
        "name": "Drampa",
        "winRate": 55.1,
        "games": 4774
      },
      {
        "name": "Tyranitar",
        "winRate": 54.7,
        "games": 4810
      }
    ],
    "bestSets": []
  },
  "637": {
    "id": 637,
    "name": "Volcarona",
    "isMega": false,
    "elo": 7942,
    "winRate": 50.6,
    "appearances": 20955,
    "wins": 10597,
    "losses": 10358,
    "bestPartners": [
      {
        "name": "Wash Rotom",
        "winRate": 51.7,
        "games": 5021
      },
      {
        "name": "Empoleon",
        "winRate": 51.7,
        "games": 5021
      },
      {
        "name": "Rhyperior",
        "winRate": 51.7,
        "games": 5021
      },
      {
        "name": "Luxray",
        "winRate": 51.7,
        "games": 5021
      },
      {
        "name": "Hippowdon",
        "winRate": 51.1,
        "games": 5298
      }
    ],
    "bestSets": []
  },
  "652": {
    "id": 652,
    "name": "Chesnaught",
    "isMega": false,
    "elo": 7961,
    "winRate": 49.7,
    "appearances": 16115,
    "wins": 8014,
    "losses": 8101,
    "bestPartners": [
      {
        "name": "Volcarona",
        "winRate": 50.4,
        "games": 5350
      },
      {
        "name": "Hisuian Decidueye",
        "winRate": 50.4,
        "games": 5350
      },
      {
        "name": "Gyarados",
        "winRate": 50.4,
        "games": 5350
      },
      {
        "name": "Kommo-o",
        "winRate": 50.4,
        "games": 5350
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 50.4,
        "games": 5350
      }
    ],
    "bestSets": []
  },
  "655": {
    "id": 655,
    "name": "Delphox",
    "isMega": false,
    "elo": 7996,
    "winRate": 47.6,
    "appearances": 29165,
    "wins": 13882,
    "losses": 15283,
    "bestPartners": [
      {
        "name": "Kingambit",
        "winRate": 53.1,
        "games": 9903
      },
      {
        "name": "Drampa",
        "winRate": 53.1,
        "games": 9903
      },
      {
        "name": "Azumarill",
        "winRate": 53.1,
        "games": 9903
      },
      {
        "name": "Whimsicott",
        "winRate": 53.1,
        "games": 9903
      },
      {
        "name": "Gyarados",
        "winRate": 51.9,
        "games": 15330
      }
    ],
    "bestSets": []
  },
  "658": {
    "id": 658,
    "name": "Greninja",
    "isMega": false,
    "elo": 8003,
    "winRate": 50.2,
    "appearances": 212105,
    "wins": 106530,
    "losses": 105575,
    "bestPartners": [
      {
        "name": "Mega Froslass",
        "winRate": 59.1,
        "games": 4370
      },
      {
        "name": "Mega Lucario",
        "winRate": 54.9,
        "games": 9523
      },
      {
        "name": "Tauros",
        "winRate": 52.6,
        "games": 25402
      },
      {
        "name": "Mudsdale",
        "winRate": 52.2,
        "games": 5137
      },
      {
        "name": "Wash Rotom",
        "winRate": 52.2,
        "games": 5137
      }
    ],
    "bestSets": []
  },
  "660": {
    "id": 660,
    "name": "Diggersby",
    "isMega": false,
    "elo": 8022,
    "winRate": 50.9,
    "appearances": 15535,
    "wins": 7914,
    "losses": 7621,
    "bestPartners": [
      {
        "name": "Wash Rotom",
        "winRate": 51.4,
        "games": 5131
      },
      {
        "name": "Froslass",
        "winRate": 51.4,
        "games": 5131
      },
      {
        "name": "Slowking",
        "winRate": 51,
        "games": 10354
      },
      {
        "name": "Samurott",
        "winRate": 51,
        "games": 10354
      },
      {
        "name": "Pelipper",
        "winRate": 51,
        "games": 10354
      }
    ],
    "bestSets": []
  },
  "663": {
    "id": 663,
    "name": "Talonflame",
    "isMega": false,
    "elo": 7879,
    "winRate": 47.7,
    "appearances": 24788,
    "wins": 11830,
    "losses": 12958,
    "bestPartners": [
      {
        "name": "Garchomp",
        "winRate": 50.3,
        "games": 5064
      },
      {
        "name": "Kingambit",
        "winRate": 50.3,
        "games": 5064
      },
      {
        "name": "Incineroar",
        "winRate": 50.3,
        "games": 5064
      },
      {
        "name": "Mega Gardevoir",
        "winRate": 50.3,
        "games": 5064
      },
      {
        "name": "Gyarados",
        "winRate": 50.3,
        "games": 5064
      }
    ],
    "bestSets": []
  },
  "666": {
    "id": 666,
    "name": "Vivillon",
    "isMega": false,
    "elo": 7950,
    "winRate": 47.6,
    "appearances": 14851,
    "wins": 7063,
    "losses": 7788,
    "bestPartners": [
      {
        "name": "Lycanroc",
        "winRate": 50.7,
        "games": 5177
      },
      {
        "name": "Basculegion-M",
        "winRate": 50.7,
        "games": 5177
      },
      {
        "name": "Fan Rotom",
        "winRate": 50.7,
        "games": 5177
      },
      {
        "name": "Decidueye",
        "winRate": 50.7,
        "games": 5177
      },
      {
        "name": "Pelipper",
        "winRate": 50.7,
        "games": 5177
      }
    ],
    "bestSets": []
  },
  "670": {
    "id": 670,
    "name": "Floette",
    "isMega": false,
    "elo": 7949,
    "winRate": 49.8,
    "appearances": 5266,
    "wins": 2622,
    "losses": 2644,
    "bestPartners": [
      {
        "name": "Espeon",
        "winRate": 49.8,
        "games": 5266
      },
      {
        "name": "Aromatisse",
        "winRate": 49.8,
        "games": 5266
      },
      {
        "name": "Incineroar",
        "winRate": 49.8,
        "games": 5266
      },
      {
        "name": "Machamp",
        "winRate": 49.8,
        "games": 5266
      },
      {
        "name": "Pangoro",
        "winRate": 49.8,
        "games": 5266
      }
    ],
    "bestSets": []
  },
  "671": {
    "id": 671,
    "name": "Florges",
    "isMega": false,
    "elo": 7907,
    "winRate": 50.6,
    "appearances": 15079,
    "wins": 7629,
    "losses": 7450,
    "bestPartners": [
      {
        "name": "Basculegion-F",
        "winRate": 51.7,
        "games": 5133
      },
      {
        "name": "Corviknight",
        "winRate": 51.7,
        "games": 5133
      },
      {
        "name": "Hisuian Zoroark",
        "winRate": 51.7,
        "games": 5133
      },
      {
        "name": "Kingambit",
        "winRate": 50.9,
        "games": 10036
      },
      {
        "name": "Stunfisk",
        "winRate": 50.8,
        "games": 10176
      }
    ],
    "bestSets": []
  },
  "675": {
    "id": 675,
    "name": "Pangoro",
    "isMega": false,
    "elo": 7994,
    "winRate": 51.5,
    "appearances": 15313,
    "wins": 7893,
    "losses": 7420,
    "bestPartners": [
      {
        "name": "Mega Gengar",
        "winRate": 54,
        "games": 4801
      },
      {
        "name": "Zoroark",
        "winRate": 54,
        "games": 4801
      },
      {
        "name": "Hisuian Samurott",
        "winRate": 54,
        "games": 4801
      },
      {
        "name": "Farigiraf",
        "winRate": 54,
        "games": 4801
      },
      {
        "name": "Tyranitar",
        "winRate": 52.5,
        "games": 10047
      }
    ],
    "bestSets": []
  },
  "676": {
    "id": 676,
    "name": "Furfrou",
    "isMega": false,
    "elo": 7968,
    "winRate": 50.4,
    "appearances": 16051,
    "wins": 8083,
    "losses": 7968,
    "bestPartners": [
      {
        "name": "Paldean Tauros",
        "winRate": 51.2,
        "games": 5292
      },
      {
        "name": "Tauros",
        "winRate": 51.2,
        "games": 5292
      },
      {
        "name": "Arcanine",
        "winRate": 51.2,
        "games": 5292
      },
      {
        "name": "Krookodile",
        "winRate": 50.8,
        "games": 10740
      },
      {
        "name": "Gyarados",
        "winRate": 50.4,
        "games": 16051
      }
    ],
    "bestSets": []
  },
  "678": {
    "id": 678,
    "name": "Meowstic-M",
    "isMega": false,
    "elo": 7951,
    "winRate": 39.4,
    "appearances": 20773,
    "wins": 8193,
    "losses": 12580,
    "bestPartners": [
      {
        "name": "Incineroar",
        "winRate": 53,
        "games": 10068
      },
      {
        "name": "Paldean Tauros",
        "winRate": 53,
        "games": 10068
      },
      {
        "name": "Kingambit",
        "winRate": 53,
        "games": 10068
      },
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 53,
        "games": 10068
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 53,
        "games": 10068
      }
    ],
    "bestSets": []
  },
  "681": {
    "id": 681,
    "name": "Aegislash",
    "isMega": false,
    "elo": 7975,
    "winRate": 50.2,
    "appearances": 274567,
    "wins": 137890,
    "losses": 136677,
    "bestPartners": [
      {
        "name": "Mega Greninja",
        "winRate": 66.8,
        "games": 3792
      },
      {
        "name": "Arbok",
        "winRate": 66.8,
        "games": 3792
      },
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 66.8,
        "games": 3792
      },
      {
        "name": "Sneasler",
        "winRate": 65.3,
        "games": 7813
      },
      {
        "name": "Pelipper",
        "winRate": 63.8,
        "games": 4021
      }
    ],
    "bestSets": []
  },
  "683": {
    "id": 683,
    "name": "Aromatisse",
    "isMega": false,
    "elo": 7975,
    "winRate": 49.2,
    "appearances": 44418,
    "wins": 21869,
    "losses": 22549,
    "bestPartners": [
      {
        "name": "Wyrdeer",
        "winRate": 65.3,
        "games": 3911
      },
      {
        "name": "Azumarill",
        "winRate": 56.5,
        "games": 9057
      },
      {
        "name": "Kingambit",
        "winRate": 56.3,
        "games": 9079
      },
      {
        "name": "Cofagrigus",
        "winRate": 56.3,
        "games": 9079
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 49.9,
        "games": 5146
      }
    ],
    "bestSets": []
  },
  "685": {
    "id": 685,
    "name": "Slurpuff",
    "isMega": false,
    "elo": 7997,
    "winRate": 52.4,
    "appearances": 14963,
    "wins": 7844,
    "losses": 7119,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 57.5,
        "games": 4595
      },
      {
        "name": "Salazzle",
        "winRate": 57.5,
        "games": 4595
      },
      {
        "name": "Corviknight",
        "winRate": 57.5,
        "games": 4595
      },
      {
        "name": "Archaludon",
        "winRate": 53.5,
        "games": 9599
      },
      {
        "name": "Kingambit",
        "winRate": 53.5,
        "games": 9599
      }
    ],
    "bestSets": []
  },
  "693": {
    "id": 693,
    "name": "Clawitzer",
    "isMega": false,
    "elo": 7973,
    "winRate": 50.7,
    "appearances": 25935,
    "wins": 13162,
    "losses": 12773,
    "bestPartners": [
      {
        "name": "Incineroar",
        "winRate": 51.1,
        "games": 5363
      },
      {
        "name": "Simisage",
        "winRate": 51.1,
        "games": 5363
      },
      {
        "name": "Whimsicott",
        "winRate": 50.9,
        "games": 10462
      },
      {
        "name": "Gourgeist",
        "winRate": 50.8,
        "games": 5150
      },
      {
        "name": "Luxray",
        "winRate": 50.8,
        "games": 5150
      }
    ],
    "bestSets": []
  },
  "695": {
    "id": 695,
    "name": "Heliolisk",
    "isMega": false,
    "elo": 7927,
    "winRate": 47,
    "appearances": 29437,
    "wins": 13850,
    "losses": 15587,
    "bestPartners": [
      {
        "name": "Basculegion-F",
        "winRate": 50.4,
        "games": 10402
      },
      {
        "name": "Slurpuff",
        "winRate": 50.4,
        "games": 5364
      },
      {
        "name": "Toxapex",
        "winRate": 50.4,
        "games": 5364
      },
      {
        "name": "Wyrdeer",
        "winRate": 50.4,
        "games": 5364
      },
      {
        "name": "Scizor",
        "winRate": 50.4,
        "games": 5364
      }
    ],
    "bestSets": []
  },
  "697": {
    "id": 697,
    "name": "Tyrantrum",
    "isMega": false,
    "elo": 7901,
    "winRate": 46.6,
    "appearances": 14358,
    "wins": 6698,
    "losses": 7660,
    "bestPartners": [
      {
        "name": "Azumarill",
        "winRate": 52.7,
        "games": 5080
      },
      {
        "name": "Vaporeon",
        "winRate": 52.7,
        "games": 5080
      },
      {
        "name": "Palafin",
        "winRate": 52.7,
        "games": 5080
      },
      {
        "name": "Pelipper",
        "winRate": 52,
        "games": 10461
      },
      {
        "name": "Alolan Raichu",
        "winRate": 51.3,
        "games": 5381
      }
    ],
    "bestSets": []
  },
  "699": {
    "id": 699,
    "name": "Aurorus",
    "isMega": false,
    "elo": 7865,
    "winRate": 46.4,
    "appearances": 14856,
    "wins": 6886,
    "losses": 7970,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.3,
        "games": 5298
      },
      {
        "name": "Sneasler",
        "winRate": 50.3,
        "games": 5298
      },
      {
        "name": "Emolga",
        "winRate": 47.8,
        "games": 10075
      },
      {
        "name": "Simisage",
        "winRate": 46.9,
        "games": 10079
      },
      {
        "name": "Whimsicott",
        "winRate": 46.4,
        "games": 14856
      }
    ],
    "bestSets": []
  },
  "700": {
    "id": 700,
    "name": "Sylveon",
    "isMega": false,
    "elo": 7994,
    "winRate": 49.5,
    "appearances": 26378,
    "wins": 13069,
    "losses": 13309,
    "bestPartners": [
      {
        "name": "Mega Gyarados",
        "winRate": 49.8,
        "games": 10524
      },
      {
        "name": "Kingambit",
        "winRate": 49.7,
        "games": 5192
      },
      {
        "name": "Hydreigon",
        "winRate": 49.6,
        "games": 5183
      },
      {
        "name": "Whimsicott",
        "winRate": 49.6,
        "games": 15649
      },
      {
        "name": "Mega Kangaskhan",
        "winRate": 49.5,
        "games": 10729
      }
    ],
    "bestSets": []
  },
  "701": {
    "id": 701,
    "name": "Hawlucha",
    "isMega": false,
    "elo": 7909,
    "winRate": 47.4,
    "appearances": 24946,
    "wins": 11818,
    "losses": 13128,
    "bestPartners": [
      {
        "name": "Mega Manectric",
        "winRate": 49.9,
        "games": 5105
      },
      {
        "name": "Tauros",
        "winRate": 49.9,
        "games": 5105
      },
      {
        "name": "Gyarados",
        "winRate": 49.9,
        "games": 5105
      },
      {
        "name": "Tsareena",
        "winRate": 49.9,
        "games": 5105
      },
      {
        "name": "Krookodile",
        "winRate": 49.9,
        "games": 5105
      }
    ],
    "bestSets": []
  },
  "702": {
    "id": 702,
    "name": "Dedenne",
    "isMega": false,
    "elo": 7819,
    "winRate": 39.1,
    "appearances": 46853,
    "wins": 18328,
    "losses": 28525,
    "bestPartners": [
      {
        "name": "Alolan Raichu",
        "winRate": 51.3,
        "games": 5381
      },
      {
        "name": "Pelipper",
        "winRate": 51.3,
        "games": 5381
      },
      {
        "name": "Tinkaton",
        "winRate": 51.3,
        "games": 5381
      },
      {
        "name": "Scizor",
        "winRate": 51.3,
        "games": 5381
      },
      {
        "name": "Basculegion-F",
        "winRate": 50.9,
        "games": 5146
      }
    ],
    "bestSets": []
  },
  "706": {
    "id": 706,
    "name": "Goodra",
    "isMega": false,
    "elo": 7927,
    "winRate": 50.5,
    "appearances": 15689,
    "wins": 7928,
    "losses": 7761,
    "bestPartners": [
      {
        "name": "Mega Floette",
        "winRate": 50.8,
        "games": 5148
      },
      {
        "name": "Whimsicott",
        "winRate": 50.7,
        "games": 10273
      },
      {
        "name": "Trevenant",
        "winRate": 50.6,
        "games": 5125
      },
      {
        "name": "Appletun",
        "winRate": 50.6,
        "games": 5125
      },
      {
        "name": "Incineroar",
        "winRate": 50.6,
        "games": 5125
      }
    ],
    "bestSets": []
  },
  "707": {
    "id": 707,
    "name": "Klefki",
    "isMega": false,
    "elo": 7901,
    "winRate": 47.6,
    "appearances": 25421,
    "wins": 12093,
    "losses": 13328,
    "bestPartners": [
      {
        "name": "Mega Garchomp",
        "winRate": 50.7,
        "games": 5542
      },
      {
        "name": "Forretress",
        "winRate": 49.6,
        "games": 16128
      },
      {
        "name": "Scizor",
        "winRate": 49.6,
        "games": 16128
      },
      {
        "name": "Garchomp",
        "winRate": 49,
        "games": 10586
      },
      {
        "name": "Skarmory",
        "winRate": 48.1,
        "games": 20692
      }
    ],
    "bestSets": []
  },
  "709": {
    "id": 709,
    "name": "Trevenant",
    "isMega": false,
    "elo": 7842,
    "winRate": 43.7,
    "appearances": 13978,
    "wins": 6107,
    "losses": 7871,
    "bestPartners": [
      {
        "name": "Goodra",
        "winRate": 50.6,
        "games": 5125
      },
      {
        "name": "Incineroar",
        "winRate": 50.6,
        "games": 5125
      },
      {
        "name": "Whimsicott",
        "winRate": 50.6,
        "games": 5125
      },
      {
        "name": "Appletun",
        "winRate": 50,
        "games": 10507
      },
      {
        "name": "Mamoswine",
        "winRate": 50,
        "games": 10507
      }
    ],
    "bestSets": []
  },
  "711": {
    "id": 711,
    "name": "Gourgeist",
    "isMega": false,
    "elo": 7963,
    "winRate": 50.1,
    "appearances": 14935,
    "wins": 7479,
    "losses": 7456,
    "bestPartners": [
      {
        "name": "Wash Rotom",
        "winRate": 54,
        "games": 4967
      },
      {
        "name": "Samurott",
        "winRate": 54,
        "games": 4967
      },
      {
        "name": "Tyranitar",
        "winRate": 54,
        "games": 4967
      },
      {
        "name": "Empoleon",
        "winRate": 54,
        "games": 4967
      },
      {
        "name": "Clawitzer",
        "winRate": 50.8,
        "games": 5150
      }
    ],
    "bestSets": []
  },
  "713": {
    "id": 713,
    "name": "Avalugg",
    "isMega": false,
    "elo": 8027,
    "winRate": 47.8,
    "appearances": 15164,
    "wins": 7251,
    "losses": 7913,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.4,
        "games": 5188
      },
      {
        "name": "Sneasler",
        "winRate": 50.4,
        "games": 5188
      },
      {
        "name": "Arcanine",
        "winRate": 50.3,
        "games": 10531
      },
      {
        "name": "Garchomp",
        "winRate": 50.3,
        "games": 10531
      },
      {
        "name": "Palafin",
        "winRate": 50.1,
        "games": 5343
      }
    ],
    "bestSets": []
  },
  "715": {
    "id": 715,
    "name": "Noivern",
    "isMega": false,
    "elo": 7953,
    "winRate": 50.6,
    "appearances": 72980,
    "wins": 36953,
    "losses": 36027,
    "bestPartners": [
      {
        "name": "Camerupt",
        "winRate": 50.9,
        "games": 10534
      },
      {
        "name": "Lucario",
        "winRate": 50.9,
        "games": 10412
      },
      {
        "name": "Wyrdeer",
        "winRate": 50.9,
        "games": 5616
      },
      {
        "name": "Araquanid",
        "winRate": 50.9,
        "games": 5616
      },
      {
        "name": "Whimsicott",
        "winRate": 50.8,
        "games": 25949
      }
    ],
    "bestSets": []
  },
  "724": {
    "id": 724,
    "name": "Decidueye",
    "isMega": false,
    "elo": 8012,
    "winRate": 48.8,
    "appearances": 47978,
    "wins": 23407,
    "losses": 24571,
    "bestPartners": [
      {
        "name": "Mega Blastoise",
        "winRate": 63.4,
        "games": 4016
      },
      {
        "name": "Wyrdeer",
        "winRate": 63.4,
        "games": 4016
      },
      {
        "name": "Drampa",
        "winRate": 63.4,
        "games": 4016
      },
      {
        "name": "Tauros",
        "winRate": 56.2,
        "games": 9064
      },
      {
        "name": "Mow Rotom",
        "winRate": 56.2,
        "games": 9064
      }
    ],
    "bestSets": []
  },
  "727": {
    "id": 727,
    "name": "Incineroar",
    "isMega": false,
    "elo": 8007,
    "winRate": 49.7,
    "appearances": 2065156,
    "wins": 1026943,
    "losses": 1038213,
    "bestPartners": [
      {
        "name": "Vaporeon",
        "winRate": 69,
        "games": 3680
      },
      {
        "name": "Mega Clefable",
        "winRate": 60.2,
        "games": 4360
      },
      {
        "name": "Mega Venusaur",
        "winRate": 57.9,
        "games": 8702
      },
      {
        "name": "Primarina",
        "winRate": 57.3,
        "games": 9182
      },
      {
        "name": "Gliscor",
        "winRate": 54.9,
        "games": 4868
      }
    ],
    "bestSets": []
  },
  "730": {
    "id": 730,
    "name": "Primarina",
    "isMega": false,
    "elo": 8000,
    "winRate": 54.2,
    "appearances": 24339,
    "wins": 13188,
    "losses": 11151,
    "bestPartners": [
      {
        "name": "Arbok",
        "winRate": 60,
        "games": 4314
      },
      {
        "name": "Garchomp",
        "winRate": 60,
        "games": 4314
      },
      {
        "name": "Incineroar",
        "winRate": 57.3,
        "games": 9182
      },
      {
        "name": "Dragapult",
        "winRate": 55.7,
        "games": 9559
      },
      {
        "name": "Krookodile",
        "winRate": 55.1,
        "games": 14372
      }
    ],
    "bestSets": []
  },
  "733": {
    "id": 733,
    "name": "Toucannon",
    "isMega": false,
    "elo": 7976,
    "winRate": 49,
    "appearances": 16012,
    "wins": 7840,
    "losses": 8172,
    "bestPartners": [
      {
        "name": "Arcanine",
        "winRate": 50.3,
        "games": 5453
      },
      {
        "name": "Kingambit",
        "winRate": 50.3,
        "games": 5453
      },
      {
        "name": "Runerigus",
        "winRate": 49.6,
        "games": 5472
      },
      {
        "name": "Empoleon",
        "winRate": 49.6,
        "games": 5472
      },
      {
        "name": "Weavile",
        "winRate": 49.6,
        "games": 5472
      }
    ],
    "bestSets": []
  },
  "740": {
    "id": 740,
    "name": "Crabominable",
    "isMega": false,
    "elo": 7962,
    "winRate": 49.4,
    "appearances": 83238,
    "wins": 41128,
    "losses": 42110,
    "bestPartners": [
      {
        "name": "Espathra",
        "winRate": 54.7,
        "games": 4939
      },
      {
        "name": "Tauros",
        "winRate": 54.7,
        "games": 4939
      },
      {
        "name": "Azumarill",
        "winRate": 52.4,
        "games": 10043
      },
      {
        "name": "Kingambit",
        "winRate": 51.9,
        "games": 10362
      },
      {
        "name": "Mega Slowbro",
        "winRate": 51,
        "games": 5301
      }
    ],
    "bestSets": []
  },
  "745": {
    "id": 745,
    "name": "Lycanroc",
    "isMega": false,
    "elo": 7953,
    "winRate": 45.7,
    "appearances": 14081,
    "wins": 6439,
    "losses": 7642,
    "bestPartners": [
      {
        "name": "Basculegion-M",
        "winRate": 50.7,
        "games": 5177
      },
      {
        "name": "Fan Rotom",
        "winRate": 50.7,
        "games": 5177
      },
      {
        "name": "Vivillon",
        "winRate": 50.7,
        "games": 5177
      },
      {
        "name": "Decidueye",
        "winRate": 50.6,
        "games": 10360
      },
      {
        "name": "Pelipper",
        "winRate": 50.6,
        "games": 10360
      }
    ],
    "bestSets": []
  },
  "748": {
    "id": 748,
    "name": "Toxapex",
    "isMega": false,
    "elo": 7948,
    "winRate": 48.4,
    "appearances": 50498,
    "wins": 24453,
    "losses": 26045,
    "bestPartners": [
      {
        "name": "Wash Rotom",
        "winRate": 51.1,
        "games": 5100
      },
      {
        "name": "Garchomp",
        "winRate": 50.6,
        "games": 10483
      },
      {
        "name": "Slurpuff",
        "winRate": 50.4,
        "games": 5364
      },
      {
        "name": "Heliolisk",
        "winRate": 50.4,
        "games": 5364
      },
      {
        "name": "Wyrdeer",
        "winRate": 50.4,
        "games": 5364
      }
    ],
    "bestSets": []
  },
  "750": {
    "id": 750,
    "name": "Mudsdale",
    "isMega": false,
    "elo": 7988,
    "winRate": 49.7,
    "appearances": 14076,
    "wins": 6998,
    "losses": 7078,
    "bestPartners": [
      {
        "name": "Milotic",
        "winRate": 56.7,
        "games": 4615
      },
      {
        "name": "Scizor",
        "winRate": 56.7,
        "games": 4615
      },
      {
        "name": "Azumarill",
        "winRate": 56.7,
        "games": 4615
      },
      {
        "name": "Whimsicott",
        "winRate": 54.3,
        "games": 9752
      },
      {
        "name": "Greninja",
        "winRate": 52.2,
        "games": 5137
      }
    ],
    "bestSets": []
  },
  "752": {
    "id": 752,
    "name": "Araquanid",
    "isMega": false,
    "elo": 7904,
    "winRate": 49.4,
    "appearances": 51903,
    "wins": 25641,
    "losses": 26262,
    "bestPartners": [
      {
        "name": "Mega Excadrill",
        "winRate": 53,
        "games": 4945
      },
      {
        "name": "Dragonite",
        "winRate": 51.9,
        "games": 10561
      },
      {
        "name": "Quaquaval",
        "winRate": 51.6,
        "games": 10232
      },
      {
        "name": "Pelipper",
        "winRate": 51.3,
        "games": 20911
      },
      {
        "name": "Incineroar",
        "winRate": 51,
        "games": 5167
      }
    ],
    "bestSets": []
  },
  "758": {
    "id": 758,
    "name": "Salazzle",
    "isMega": false,
    "elo": 8026,
    "winRate": 46.2,
    "appearances": 139720,
    "wins": 64494,
    "losses": 75226,
    "bestPartners": [
      {
        "name": "Slurpuff",
        "winRate": 57.5,
        "games": 4595
      },
      {
        "name": "Kingambit",
        "winRate": 57.5,
        "games": 4595
      },
      {
        "name": "Corviknight",
        "winRate": 57.5,
        "games": 4595
      },
      {
        "name": "Archaludon",
        "winRate": 53.3,
        "games": 9772
      },
      {
        "name": "Vaporeon",
        "winRate": 52.7,
        "games": 5080
      }
    ],
    "bestSets": []
  },
  "763": {
    "id": 763,
    "name": "Tsareena",
    "isMega": false,
    "elo": 7956,
    "winRate": 51.8,
    "appearances": 59904,
    "wins": 31040,
    "losses": 28864,
    "bestPartners": [
      {
        "name": "Mega Gyarados",
        "winRate": 63.2,
        "games": 4040
      },
      {
        "name": "Mega Floette",
        "winRate": 63.2,
        "games": 4040
      },
      {
        "name": "Simipour",
        "winRate": 63.2,
        "games": 4040
      },
      {
        "name": "Archaludon",
        "winRate": 60.8,
        "games": 8438
      },
      {
        "name": "Garchomp",
        "winRate": 60.8,
        "games": 8438
      }
    ],
    "bestSets": []
  },
  "765": {
    "id": 765,
    "name": "Oranguru",
    "isMega": false,
    "elo": 7954,
    "winRate": 49.5,
    "appearances": 26469,
    "wins": 13107,
    "losses": 13362,
    "bestPartners": [
      {
        "name": "Kingambit",
        "winRate": 49.6,
        "games": 5165
      },
      {
        "name": "Hatterene",
        "winRate": 49.5,
        "games": 26469
      },
      {
        "name": "Torkoal",
        "winRate": 49.5,
        "games": 26469
      },
      {
        "name": "Venusaur",
        "winRate": 49.5,
        "games": 26469
      },
      {
        "name": "Incineroar",
        "winRate": 49.5,
        "games": 26469
      }
    ],
    "bestSets": []
  },
  "766": {
    "id": 766,
    "name": "Passimian",
    "isMega": false,
    "elo": 7974,
    "winRate": 48.3,
    "appearances": 14853,
    "wins": 7169,
    "losses": 7684,
    "bestPartners": [
      {
        "name": "Excadrill",
        "winRate": 50.7,
        "games": 10297
      },
      {
        "name": "Morpeko",
        "winRate": 50.7,
        "games": 5117
      },
      {
        "name": "Empoleon",
        "winRate": 50.7,
        "games": 5117
      },
      {
        "name": "Gyarados",
        "winRate": 50.7,
        "games": 5117
      },
      {
        "name": "Heat Rotom",
        "winRate": 50.6,
        "games": 5180
      }
    ],
    "bestSets": []
  },
  "778": {
    "id": 778,
    "name": "Mimikyu",
    "isMega": false,
    "elo": 7914,
    "winRate": 47.6,
    "appearances": 15089,
    "wins": 7183,
    "losses": 7906,
    "bestPartners": [
      {
        "name": "Rhyperior",
        "winRate": 49.5,
        "games": 5357
      },
      {
        "name": "Ursaluna",
        "winRate": 49.5,
        "games": 5357
      },
      {
        "name": "Kingambit",
        "winRate": 49.5,
        "games": 5357
      },
      {
        "name": "Garchomp",
        "winRate": 49.5,
        "games": 5357
      },
      {
        "name": "Mega Kangaskhan",
        "winRate": 47.8,
        "games": 5078
      }
    ],
    "bestSets": []
  },
  "780": {
    "id": 780,
    "name": "Drampa",
    "isMega": false,
    "elo": 7961,
    "winRate": 53.5,
    "appearances": 101225,
    "wins": 54148,
    "losses": 47077,
    "bestPartners": [
      {
        "name": "Snorlax",
        "winRate": 64.8,
        "games": 11661
      },
      {
        "name": "Torkoal",
        "winRate": 63.8,
        "games": 11819
      },
      {
        "name": "Mega Blastoise",
        "winRate": 63.4,
        "games": 4016
      },
      {
        "name": "Decidueye",
        "winRate": 63.4,
        "games": 4016
      },
      {
        "name": "Wyrdeer",
        "winRate": 63.4,
        "games": 4016
      }
    ],
    "bestSets": []
  },
  "784": {
    "id": 784,
    "name": "Kommo-o",
    "isMega": false,
    "elo": 7978,
    "winRate": 49.9,
    "appearances": 37055,
    "wins": 18500,
    "losses": 18555,
    "bestPartners": [
      {
        "name": "Arcanine",
        "winRate": 50.4,
        "games": 5222
      },
      {
        "name": "Rhyperior",
        "winRate": 50.4,
        "games": 5222
      },
      {
        "name": "Sneasler",
        "winRate": 50.4,
        "games": 5222
      },
      {
        "name": "Hisuian Decidueye",
        "winRate": 50.4,
        "games": 5350
      },
      {
        "name": "Gyarados",
        "winRate": 50.4,
        "games": 5350
      }
    ],
    "bestSets": []
  },
  "823": {
    "id": 823,
    "name": "Corviknight",
    "isMega": false,
    "elo": 7972,
    "winRate": 50.4,
    "appearances": 61852,
    "wins": 31157,
    "losses": 30695,
    "bestPartners": [
      {
        "name": "Slurpuff",
        "winRate": 57.5,
        "games": 4595
      },
      {
        "name": "Gyarados",
        "winRate": 57.5,
        "games": 4595
      },
      {
        "name": "Salazzle",
        "winRate": 57.5,
        "games": 4595
      },
      {
        "name": "Archaludon",
        "winRate": 53.9,
        "games": 9577
      },
      {
        "name": "Kingambit",
        "winRate": 52.9,
        "games": 14978
      }
    ],
    "bestSets": []
  },
  "841": {
    "id": 841,
    "name": "Flapple",
    "isMega": false,
    "elo": 7938,
    "winRate": 43.1,
    "appearances": 13741,
    "wins": 5929,
    "losses": 7812,
    "bestPartners": [
      {
        "name": "Empoleon",
        "winRate": 51.4,
        "games": 5253
      },
      {
        "name": "Froslass",
        "winRate": 51.4,
        "games": 5253
      },
      {
        "name": "Azumarill",
        "winRate": 51.4,
        "games": 5253
      },
      {
        "name": "Heat Rotom",
        "winRate": 50.1,
        "games": 10484
      },
      {
        "name": "Tauros",
        "winRate": 48.7,
        "games": 5231
      }
    ],
    "bestSets": []
  },
  "842": {
    "id": 842,
    "name": "Appletun",
    "isMega": false,
    "elo": 7962,
    "winRate": 48.9,
    "appearances": 20801,
    "wins": 10173,
    "losses": 10628,
    "bestPartners": [
      {
        "name": "Goodra",
        "winRate": 50.6,
        "games": 5125
      },
      {
        "name": "Whimsicott",
        "winRate": 50.6,
        "games": 5125
      },
      {
        "name": "Trevenant",
        "winRate": 50,
        "games": 10507
      },
      {
        "name": "Mamoswine",
        "winRate": 50,
        "games": 10507
      },
      {
        "name": "Incineroar",
        "winRate": 49.8,
        "games": 10420
      }
    ],
    "bestSets": []
  },
  "844": {
    "id": 844,
    "name": "Sandaconda",
    "isMega": false,
    "elo": 7921,
    "winRate": 46.1,
    "appearances": 14782,
    "wins": 6815,
    "losses": 7967,
    "bestPartners": [
      {
        "name": "Vaporeon",
        "winRate": 49.6,
        "games": 10637
      },
      {
        "name": "Whimsicott",
        "winRate": 49.6,
        "games": 5282
      },
      {
        "name": "Samurott",
        "winRate": 49.6,
        "games": 10637
      },
      {
        "name": "Azumarill",
        "winRate": 49.6,
        "games": 5282
      },
      {
        "name": "Politoed",
        "winRate": 49.5,
        "games": 5355
      }
    ],
    "bestSets": []
  },
  "855": {
    "id": 855,
    "name": "Polteageist",
    "isMega": false,
    "elo": 7975,
    "winRate": 50.4,
    "appearances": 20280,
    "wins": 10221,
    "losses": 10059,
    "bestPartners": [
      {
        "name": "Kingambit",
        "winRate": 54.7,
        "games": 4810
      },
      {
        "name": "Tyranitar",
        "winRate": 54.7,
        "games": 4810
      },
      {
        "name": "Hisuian Samurott",
        "winRate": 54.7,
        "games": 4810
      },
      {
        "name": "Azumarill",
        "winRate": 54.7,
        "games": 4810
      },
      {
        "name": "Hydreigon",
        "winRate": 52.8,
        "games": 10186
      }
    ],
    "bestSets": []
  },
  "858": {
    "id": 858,
    "name": "Hatterene",
    "isMega": false,
    "elo": 7979,
    "winRate": 50.2,
    "appearances": 471266,
    "wins": 236617,
    "losses": 234649,
    "bestPartners": [
      {
        "name": "Slowbro",
        "winRate": 63.8,
        "games": 8100
      },
      {
        "name": "Snorlax",
        "winRate": 60.6,
        "games": 12833
      },
      {
        "name": "Drampa",
        "winRate": 59.3,
        "games": 13094
      },
      {
        "name": "Tyranitar",
        "winRate": 55.4,
        "games": 9549
      },
      {
        "name": "Azumarill",
        "winRate": 51.5,
        "games": 5244
      }
    ],
    "bestSets": []
  },
  "861": {
    "id": 861,
    "name": "Grimmsnarl",
    "isMega": false,
    "elo": 7947,
    "winRate": 50.1,
    "appearances": 21250,
    "wins": 10646,
    "losses": 10604,
    "bestPartners": [
      {
        "name": "Mega Floette",
        "winRate": 50.8,
        "games": 5148
      },
      {
        "name": "Whimsicott",
        "winRate": 50.8,
        "games": 5148
      },
      {
        "name": "Goodra",
        "winRate": 50.5,
        "games": 10564
      },
      {
        "name": "Mega Abomasnow",
        "winRate": 50.3,
        "games": 5416
      },
      {
        "name": "Froslass",
        "winRate": 50.3,
        "games": 5416
      }
    ],
    "bestSets": []
  },
  "866": {
    "id": 866,
    "name": "Mr. Rime",
    "isMega": false,
    "elo": 8076,
    "winRate": 51.1,
    "appearances": 15269,
    "wins": 7807,
    "losses": 7462,
    "bestPartners": [
      {
        "name": "Stunfisk",
        "winRate": 54.4,
        "games": 4848
      },
      {
        "name": "Conkeldurr",
        "winRate": 54.4,
        "games": 4848
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 51.9,
        "games": 9943
      },
      {
        "name": "Torkoal",
        "winRate": 51.9,
        "games": 10174
      },
      {
        "name": "Garchomp",
        "winRate": 51.9,
        "games": 10174
      }
    ],
    "bestSets": []
  },
  "867": {
    "id": 867,
    "name": "Runerigus",
    "isMega": false,
    "elo": 7909,
    "winRate": 43.4,
    "appearances": 14095,
    "wins": 6124,
    "losses": 7971,
    "bestPartners": [
      {
        "name": "Hisuian Samurott",
        "winRate": 51,
        "games": 5421
      },
      {
        "name": "Gyarados",
        "winRate": 51,
        "games": 5421
      },
      {
        "name": "Incineroar",
        "winRate": 51,
        "games": 5421
      },
      {
        "name": "Tauros",
        "winRate": 50.3,
        "games": 10893
      },
      {
        "name": "Empoleon",
        "winRate": 49.6,
        "games": 5472
      }
    ],
    "bestSets": []
  },
  "869": {
    "id": 869,
    "name": "Alcremie",
    "isMega": false,
    "elo": 7962,
    "winRate": 49.9,
    "appearances": 15197,
    "wins": 7586,
    "losses": 7611,
    "bestPartners": [
      {
        "name": "Heliolisk",
        "winRate": 50.3,
        "games": 5038
      },
      {
        "name": "Basculegion-F",
        "winRate": 50.3,
        "games": 5038
      },
      {
        "name": "Rotom",
        "winRate": 50.3,
        "games": 5038
      },
      {
        "name": "Gyarados",
        "winRate": 50.3,
        "games": 5038
      },
      {
        "name": "Kingambit",
        "winRate": 50,
        "games": 4982
      }
    ],
    "bestSets": []
  },
  "877": {
    "id": 877,
    "name": "Morpeko",
    "isMega": false,
    "elo": 7996,
    "winRate": 50.1,
    "appearances": 36475,
    "wins": 18264,
    "losses": 18211,
    "bestPartners": [
      {
        "name": "Hisuian Typhlosion",
        "winRate": 51.2,
        "games": 5409
      },
      {
        "name": "Hisuian Decidueye",
        "winRate": 51.2,
        "games": 5409
      },
      {
        "name": "Umbreon",
        "winRate": 51.2,
        "games": 5409
      },
      {
        "name": "Pelipper",
        "winRate": 51.2,
        "games": 5409
      },
      {
        "name": "Hydreigon",
        "winRate": 51.1,
        "games": 10785
      }
    ],
    "bestSets": []
  },
  "887": {
    "id": 887,
    "name": "Dragapult",
    "isMega": false,
    "elo": 8014,
    "winRate": 50.1,
    "appearances": 765806,
    "wins": 383980,
    "losses": 381826,
    "bestPartners": [
      {
        "name": "Archaludon",
        "winRate": 55.7,
        "games": 18686
      },
      {
        "name": "Primarina",
        "winRate": 55.7,
        "games": 9559
      },
      {
        "name": "Krookodile",
        "winRate": 55.5,
        "games": 14333
      },
      {
        "name": "Drampa",
        "winRate": 55.1,
        "games": 4774
      },
      {
        "name": "Mow Rotom",
        "winRate": 54.4,
        "games": 19051
      }
    ],
    "bestSets": []
  },
  "899": {
    "id": 899,
    "name": "Wyrdeer",
    "isMega": false,
    "elo": 7995,
    "winRate": 49.7,
    "appearances": 333062,
    "wins": 165547,
    "losses": 167515,
    "bestPartners": [
      {
        "name": "Sneasler",
        "winRate": 65.3,
        "games": 3911
      },
      {
        "name": "Cofagrigus",
        "winRate": 65.3,
        "games": 3911
      },
      {
        "name": "Aromatisse",
        "winRate": 65.3,
        "games": 3911
      },
      {
        "name": "Mega Blastoise",
        "winRate": 63.4,
        "games": 4016
      },
      {
        "name": "Decidueye",
        "winRate": 63.4,
        "games": 4016
      }
    ],
    "bestSets": []
  },
  "900": {
    "id": 900,
    "name": "Kleavor",
    "isMega": false,
    "elo": 8068,
    "winRate": 61.1,
    "appearances": 12521,
    "wins": 7646,
    "losses": 4875,
    "bestPartners": [
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 70,
        "games": 3578
      },
      {
        "name": "Mow Rotom",
        "winRate": 70,
        "games": 3578
      },
      {
        "name": "Kingambit",
        "winRate": 66.6,
        "games": 7540
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 63.6,
        "games": 3962
      },
      {
        "name": "Gyarados",
        "winRate": 63.6,
        "games": 3962
      }
    ],
    "bestSets": []
  },
  "901": {
    "id": 901,
    "name": "Ursaluna",
    "isMega": false,
    "elo": 8000,
    "winRate": 49.9,
    "appearances": 10654,
    "wins": 5319,
    "losses": 5335,
    "bestPartners": [
      {
        "name": "Hatterene",
        "winRate": 50.3,
        "games": 5297
      },
      {
        "name": "Garganacl",
        "winRate": 50.3,
        "games": 5297
      },
      {
        "name": "Gardevoir",
        "winRate": 50.3,
        "games": 5297
      },
      {
        "name": "Incineroar",
        "winRate": 49.9,
        "games": 10654
      },
      {
        "name": "Kingambit",
        "winRate": 49.9,
        "games": 10654
      }
    ],
    "bestSets": []
  },
  "902": {
    "id": 902,
    "name": "Basculegion-M",
    "isMega": false,
    "elo": 8039,
    "winRate": 50.7,
    "appearances": 81572,
    "wins": 41358,
    "losses": 40214,
    "bestPartners": [
      {
        "name": "Mega Clefable",
        "winRate": 60,
        "games": 4430
      },
      {
        "name": "Luxray",
        "winRate": 60,
        "games": 4430
      },
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 60,
        "games": 4430
      },
      {
        "name": "Tauros",
        "winRate": 60,
        "games": 4430
      },
      {
        "name": "Archaludon",
        "winRate": 60,
        "games": 4430
      }
    ],
    "bestSets": []
  },
  "903": {
    "id": 903,
    "name": "Sneasler",
    "isMega": false,
    "elo": 7968,
    "winRate": 51.1,
    "appearances": 137873,
    "wins": 70519,
    "losses": 67354,
    "bestPartners": [
      {
        "name": "Mega Greninja",
        "winRate": 66.8,
        "games": 3792
      },
      {
        "name": "Venusaur",
        "winRate": 66.8,
        "games": 3792
      },
      {
        "name": "Aegislash",
        "winRate": 65.3,
        "games": 7813
      },
      {
        "name": "Wyrdeer",
        "winRate": 65.3,
        "games": 3911
      },
      {
        "name": "Kingambit",
        "winRate": 65.3,
        "games": 3911
      }
    ],
    "bestSets": []
  },
  "908": {
    "id": 908,
    "name": "Meowscarada",
    "isMega": false,
    "elo": 7986,
    "winRate": 50.4,
    "appearances": 26089,
    "wins": 13143,
    "losses": 12946,
    "bestPartners": [
      {
        "name": "Mega Feraligatr",
        "winRate": 51.1,
        "games": 5229
      },
      {
        "name": "Tsareena",
        "winRate": 51.1,
        "games": 5229
      },
      {
        "name": "Serperior",
        "winRate": 51.1,
        "games": 5229
      },
      {
        "name": "Roserade",
        "winRate": 51.1,
        "games": 5229
      },
      {
        "name": "Arcanine",
        "winRate": 51.1,
        "games": 5229
      }
    ],
    "bestSets": []
  },
  "911": {
    "id": 911,
    "name": "Skeledirge",
    "isMega": false,
    "elo": 7937,
    "winRate": 50.3,
    "appearances": 15868,
    "wins": 7985,
    "losses": 7883,
    "bestPartners": [
      {
        "name": "Mega Floette",
        "winRate": 50.8,
        "games": 5148
      },
      {
        "name": "Whimsicott",
        "winRate": 50.8,
        "games": 5148
      },
      {
        "name": "Mamoswine",
        "winRate": 50.5,
        "games": 10564
      },
      {
        "name": "Goodra",
        "winRate": 50.5,
        "games": 10564
      },
      {
        "name": "Mega Abomasnow",
        "winRate": 50.3,
        "games": 5416
      }
    ],
    "bestSets": []
  },
  "914": {
    "id": 914,
    "name": "Quaquaval",
    "isMega": false,
    "elo": 7904,
    "winRate": 50.9,
    "appearances": 15618,
    "wins": 7955,
    "losses": 7663,
    "bestPartners": [
      {
        "name": "Dragonite",
        "winRate": 53,
        "games": 4945
      },
      {
        "name": "Araquanid",
        "winRate": 51.6,
        "games": 10232
      },
      {
        "name": "Azumarill",
        "winRate": 51.6,
        "games": 10232
      },
      {
        "name": "Mega Excadrill",
        "winRate": 51.2,
        "games": 10331
      },
      {
        "name": "Pelipper",
        "winRate": 51.2,
        "games": 10331
      }
    ],
    "bestSets": []
  },
  "925": {
    "id": 925,
    "name": "Maushold",
    "isMega": false,
    "elo": 7937,
    "winRate": 50,
    "appearances": 15885,
    "wins": 7942,
    "losses": 7943,
    "bestPartners": [
      {
        "name": "Basculegion-M",
        "winRate": 50.7,
        "games": 5365
      },
      {
        "name": "Krookodile",
        "winRate": 50.7,
        "games": 5365
      },
      {
        "name": "Polteageist",
        "winRate": 50.7,
        "games": 5365
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 50.7,
        "games": 5365
      },
      {
        "name": "Gyarados",
        "winRate": 50.3,
        "games": 10634
      }
    ],
    "bestSets": []
  },
  "934": {
    "id": 934,
    "name": "Garganacl",
    "isMega": false,
    "elo": 7989,
    "winRate": 50.3,
    "appearances": 26472,
    "wins": 13319,
    "losses": 13153,
    "bestPartners": [
      {
        "name": "Azumarill",
        "winRate": 51.5,
        "games": 5244
      },
      {
        "name": "Hatterene",
        "winRate": 50.9,
        "games": 10541
      },
      {
        "name": "Garchomp",
        "winRate": 50.4,
        "games": 15925
      },
      {
        "name": "Incineroar",
        "winRate": 50.3,
        "games": 26472
      },
      {
        "name": "Dragapult",
        "winRate": 50.3,
        "games": 21175
      }
    ],
    "bestSets": []
  },
  "936": {
    "id": 936,
    "name": "Armarouge",
    "isMega": false,
    "elo": 7958,
    "winRate": 51.3,
    "appearances": 20662,
    "wins": 10602,
    "losses": 10060,
    "bestPartners": [
      {
        "name": "Drampa",
        "winRate": 55.1,
        "games": 4800
      },
      {
        "name": "Whimsicott",
        "winRate": 55.1,
        "games": 4800
      },
      {
        "name": "Azumarill",
        "winRate": 52.6,
        "games": 10087
      },
      {
        "name": "Kingambit",
        "winRate": 52.1,
        "games": 10195
      },
      {
        "name": "Gyarados",
        "winRate": 52.1,
        "games": 10195
      }
    ],
    "bestSets": []
  },
  "937": {
    "id": 937,
    "name": "Ceruledge",
    "isMega": false,
    "elo": 7997,
    "winRate": 49.9,
    "appearances": 15632,
    "wins": 7795,
    "losses": 7837,
    "bestPartners": [
      {
        "name": "Hydreigon",
        "winRate": 50,
        "games": 5010
      },
      {
        "name": "Absol",
        "winRate": 50,
        "games": 5010
      },
      {
        "name": "Archaludon",
        "winRate": 50,
        "games": 5010
      },
      {
        "name": "Kingambit",
        "winRate": 49.9,
        "games": 15632
      },
      {
        "name": "Greninja",
        "winRate": 49.9,
        "games": 10298
      }
    ],
    "bestSets": []
  },
  "939": {
    "id": 939,
    "name": "Bellibolt",
    "isMega": false,
    "elo": 7910,
    "winRate": 50.3,
    "appearances": 15932,
    "wins": 8017,
    "losses": 7915,
    "bestPartners": [
      {
        "name": "Pelipper",
        "winRate": 51.1,
        "games": 5289
      },
      {
        "name": "Simipour",
        "winRate": 51.1,
        "games": 5289
      },
      {
        "name": "Krookodile",
        "winRate": 51.1,
        "games": 5289
      },
      {
        "name": "Gyarados",
        "winRate": 51,
        "games": 5349
      },
      {
        "name": "Tauros",
        "winRate": 51,
        "games": 5349
      }
    ],
    "bestSets": []
  },
  "952": {
    "id": 952,
    "name": "Scovillain",
    "isMega": false,
    "elo": 8000,
    "winRate": 50,
    "appearances": 21102,
    "wins": 10547,
    "losses": 10555,
    "bestPartners": [
      {
        "name": "Torkoal",
        "winRate": 50.2,
        "games": 5418
      },
      {
        "name": "Ninetales",
        "winRate": 50.1,
        "games": 10785
      },
      {
        "name": "Leafeon",
        "winRate": 50.1,
        "games": 10785
      },
      {
        "name": "Charizard",
        "winRate": 50.1,
        "games": 10785
      },
      {
        "name": "Venusaur",
        "winRate": 50.1,
        "games": 10785
      }
    ],
    "bestSets": []
  },
  "956": {
    "id": 956,
    "name": "Espathra",
    "isMega": false,
    "elo": 7978,
    "winRate": 50.7,
    "appearances": 15195,
    "wins": 7709,
    "losses": 7486,
    "bestPartners": [
      {
        "name": "Kingambit",
        "winRate": 54.7,
        "games": 4939
      },
      {
        "name": "Crabominable",
        "winRate": 54.7,
        "games": 4939
      },
      {
        "name": "Azumarill",
        "winRate": 54.7,
        "games": 4939
      },
      {
        "name": "Tauros",
        "winRate": 54.7,
        "games": 4939
      },
      {
        "name": "Mega Crabominable",
        "winRate": 50.9,
        "games": 5212
      }
    ],
    "bestSets": []
  },
  "959": {
    "id": 959,
    "name": "Tinkaton",
    "isMega": false,
    "elo": 7999,
    "winRate": 48.8,
    "appearances": 55770,
    "wins": 27222,
    "losses": 28548,
    "bestPartners": [
      {
        "name": "Azumarill",
        "winRate": 53.3,
        "games": 4957
      },
      {
        "name": "Scizor",
        "winRate": 52.2,
        "games": 10338
      },
      {
        "name": "Mega Garchomp",
        "winRate": 51.9,
        "games": 10278
      },
      {
        "name": "Alolan Ninetales",
        "winRate": 51.9,
        "games": 10278
      },
      {
        "name": "Tyrantrum",
        "winRate": 51.3,
        "games": 5381
      }
    ],
    "bestSets": []
  },
  "964": {
    "id": 964,
    "name": "Palafin",
    "isMega": false,
    "elo": 8024,
    "winRate": 50.3,
    "appearances": 162677,
    "wins": 81809,
    "losses": 80868,
    "bestPartners": [
      {
        "name": "Tyrantrum",
        "winRate": 52.7,
        "games": 5080
      },
      {
        "name": "Azumarill",
        "winRate": 52.7,
        "games": 5080
      },
      {
        "name": "Vaporeon",
        "winRate": 52.7,
        "games": 5080
      },
      {
        "name": "Pelipper",
        "winRate": 52,
        "games": 10280
      },
      {
        "name": "Salazzle",
        "winRate": 51.2,
        "games": 15522
      }
    ],
    "bestSets": []
  },
  "968": {
    "id": 968,
    "name": "Orthworm",
    "isMega": false,
    "elo": 8050,
    "winRate": 49.8,
    "appearances": 15532,
    "wins": 7736,
    "losses": 7796,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.8,
        "games": 5191
      },
      {
        "name": "Noivern",
        "winRate": 50.8,
        "games": 5191
      },
      {
        "name": "Whimsicott",
        "winRate": 50.8,
        "games": 5191
      },
      {
        "name": "Aerodactyl",
        "winRate": 50.8,
        "games": 5191
      },
      {
        "name": "Emolga",
        "winRate": 50.8,
        "games": 5191
      }
    ],
    "bestSets": []
  },
  "970": {
    "id": 970,
    "name": "Glimmora",
    "isMega": false,
    "elo": 7994,
    "winRate": 50.8,
    "appearances": 10564,
    "wins": 5369,
    "losses": 5195,
    "bestPartners": [
      {
        "name": "Forretress",
        "winRate": 50.8,
        "games": 10564
      },
      {
        "name": "Wyrdeer",
        "winRate": 50.8,
        "games": 10564
      },
      {
        "name": "Gyarados",
        "winRate": 50.8,
        "games": 10564
      },
      {
        "name": "Scizor",
        "winRate": 50.8,
        "games": 10564
      },
      {
        "name": "Pelipper",
        "winRate": 50.8,
        "games": 10564
      }
    ],
    "bestSets": []
  },
  "977": {
    "id": 977,
    "name": "Dondozo",
    "isMega": false,
    "elo": 7896,
    "winRate": 49.6,
    "appearances": 5256,
    "wins": 2607,
    "losses": 2649,
    "bestPartners": [
      {
        "name": "Tatsugiri",
        "winRate": 49.6,
        "games": 5256
      },
      {
        "name": "Hatterene",
        "winRate": 49.6,
        "games": 5256
      },
      {
        "name": "Incineroar",
        "winRate": 49.6,
        "games": 5256
      },
      {
        "name": "Garchomp",
        "winRate": 49.6,
        "games": 5256
      },
      {
        "name": "Scizor",
        "winRate": 49.6,
        "games": 5256
      }
    ],
    "bestSets": []
  },
  "978": {
    "id": 978,
    "name": "Tatsugiri",
    "isMega": false,
    "elo": 7896,
    "winRate": 49.6,
    "appearances": 5256,
    "wins": 2607,
    "losses": 2649,
    "bestPartners": [
      {
        "name": "Dondozo",
        "winRate": 49.6,
        "games": 5256
      },
      {
        "name": "Hatterene",
        "winRate": 49.6,
        "games": 5256
      },
      {
        "name": "Incineroar",
        "winRate": 49.6,
        "games": 5256
      },
      {
        "name": "Garchomp",
        "winRate": 49.6,
        "games": 5256
      },
      {
        "name": "Scizor",
        "winRate": 49.6,
        "games": 5256
      }
    ],
    "bestSets": []
  },
  "981": {
    "id": 981,
    "name": "Farigiraf",
    "isMega": false,
    "elo": 7941,
    "winRate": 50.9,
    "appearances": 15124,
    "wins": 7693,
    "losses": 7431,
    "bestPartners": [
      {
        "name": "Mega Gengar",
        "winRate": 54,
        "games": 4801
      },
      {
        "name": "Pangoro",
        "winRate": 54,
        "games": 4801
      },
      {
        "name": "Zoroark",
        "winRate": 54,
        "games": 4801
      },
      {
        "name": "Tyranitar",
        "winRate": 54,
        "games": 4801
      },
      {
        "name": "Hisuian Samurott",
        "winRate": 54,
        "games": 4801
      }
    ],
    "bestSets": []
  },
  "983": {
    "id": 983,
    "name": "Kingambit",
    "isMega": false,
    "elo": 8039,
    "winRate": 51.4,
    "appearances": 804654,
    "wins": 413677,
    "losses": 390977,
    "bestPartners": [
      {
        "name": "Mow Rotom",
        "winRate": 70,
        "games": 3578
      },
      {
        "name": "Mega Floette",
        "winRate": 67,
        "games": 3877
      },
      {
        "name": "Pinsir",
        "winRate": 66.8,
        "games": 7753
      },
      {
        "name": "Kleavor",
        "winRate": 66.6,
        "games": 7540
      },
      {
        "name": "Hisuian Goodra",
        "winRate": 66.6,
        "games": 7540
      }
    ],
    "bestSets": []
  },
  "1013": {
    "id": 1013,
    "name": "Sinistcha",
    "isMega": false,
    "elo": 8007,
    "winRate": 50.4,
    "appearances": 20952,
    "wins": 10552,
    "losses": 10400,
    "bestPartners": [
      {
        "name": "Mega Floette",
        "winRate": 54.7,
        "games": 4788
      },
      {
        "name": "Archaludon",
        "winRate": 54.7,
        "games": 4788
      },
      {
        "name": "Mega Gyarados",
        "winRate": 54.7,
        "games": 4788
      },
      {
        "name": "Sneasler",
        "winRate": 54.7,
        "games": 4788
      },
      {
        "name": "Mega Camerupt",
        "winRate": 54.7,
        "games": 4788
      }
    ],
    "bestSets": []
  },
  "1018": {
    "id": 1018,
    "name": "Archaludon",
    "isMega": false,
    "elo": 8060,
    "winRate": 53.4,
    "appearances": 234569,
    "wins": 125356,
    "losses": 109213,
    "bestPartners": [
      {
        "name": "Pinsir",
        "winRate": 66.8,
        "games": 7753
      },
      {
        "name": "Mega Pinsir",
        "winRate": 66.1,
        "games": 3887
      },
      {
        "name": "Kleavor",
        "winRate": 63.6,
        "games": 3962
      },
      {
        "name": "Simipour",
        "winRate": 63.2,
        "games": 4040
      },
      {
        "name": "Wash Rotom",
        "winRate": 62.6,
        "games": 28941
      }
    ],
    "bestSets": []
  },
  "1019": {
    "id": 1019,
    "name": "Hydrapple",
    "isMega": false,
    "elo": 7878,
    "winRate": 40.1,
    "appearances": 12955,
    "wins": 5198,
    "losses": 7757,
    "bestPartners": [
      {
        "name": "Azumarill",
        "winRate": 50.2,
        "games": 5152
      },
      {
        "name": "Rotom",
        "winRate": 43.9,
        "games": 9186
      },
      {
        "name": "Alolan Ninetales",
        "winRate": 42,
        "games": 8921
      },
      {
        "name": "Luxray",
        "winRate": 40.1,
        "games": 12955
      },
      {
        "name": "Dedenne",
        "winRate": 40.1,
        "games": 12955
      }
    ],
    "bestSets": []
  },
  "5059": {
    "id": 5059,
    "name": "Hisuian Arcanine",
    "isMega": false,
    "elo": 7966,
    "winRate": 48.2,
    "appearances": 318428,
    "wins": 153452,
    "losses": 164976,
    "bestPartners": [
      {
        "name": "Mega Altaria",
        "winRate": 60.3,
        "games": 4329
      },
      {
        "name": "Espathra",
        "winRate": 50.9,
        "games": 5212
      },
      {
        "name": "Clawitzer",
        "winRate": 50.8,
        "games": 5150
      },
      {
        "name": "Vaporeon",
        "winRate": 50.8,
        "games": 5049
      },
      {
        "name": "Slowbro",
        "winRate": 50.7,
        "games": 21175
      }
    ],
    "bestSets": []
  },
  "5157": {
    "id": 5157,
    "name": "Hisuian Typhlosion",
    "isMega": false,
    "elo": 7989,
    "winRate": 49.8,
    "appearances": 15814,
    "wins": 7880,
    "losses": 7934,
    "bestPartners": [
      {
        "name": "Hydreigon",
        "winRate": 51.2,
        "games": 5409
      },
      {
        "name": "Hisuian Decidueye",
        "winRate": 51.2,
        "games": 5409
      },
      {
        "name": "Umbreon",
        "winRate": 51.2,
        "games": 5409
      },
      {
        "name": "Morpeko",
        "winRate": 51.2,
        "games": 5409
      },
      {
        "name": "Pelipper",
        "winRate": 51.2,
        "games": 5409
      }
    ],
    "bestSets": []
  },
  "5706": {
    "id": 5706,
    "name": "Hisuian Goodra",
    "isMega": false,
    "elo": 8019,
    "winRate": 53.4,
    "appearances": 42827,
    "wins": 22867,
    "losses": 19960,
    "bestPartners": [
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 70,
        "games": 3578
      },
      {
        "name": "Mow Rotom",
        "winRate": 70,
        "games": 3578
      },
      {
        "name": "Kingambit",
        "winRate": 66.6,
        "games": 7540
      },
      {
        "name": "Kleavor",
        "winRate": 61.1,
        "games": 12521
      },
      {
        "name": "Wash Rotom",
        "winRate": 59.9,
        "games": 8559
      }
    ],
    "bestSets": []
  },
  "6080": {
    "id": 6080,
    "name": "Galarian Slowbro",
    "isMega": false,
    "elo": 7952,
    "winRate": 50.7,
    "appearances": 20579,
    "wins": 10429,
    "losses": 10150,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.9,
        "games": 15412
      },
      {
        "name": "Reuniclus",
        "winRate": 50.9,
        "games": 15412
      },
      {
        "name": "Audino",
        "winRate": 50.8,
        "games": 10346
      },
      {
        "name": "Cofagrigus",
        "winRate": 50.7,
        "games": 20579
      },
      {
        "name": "Arbok",
        "winRate": 50.7,
        "games": 20579
      }
    ],
    "bestSets": []
  },
  "6199": {
    "id": 6199,
    "name": "Galarian Slowking",
    "isMega": false,
    "elo": 7967,
    "winRate": 49.6,
    "appearances": 15799,
    "wins": 7844,
    "losses": 7955,
    "bestPartners": [
      {
        "name": "Paldean Tauros",
        "winRate": 51.2,
        "games": 5374
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 51.2,
        "games": 5374
      },
      {
        "name": "Weavile",
        "winRate": 50.4,
        "games": 10653
      },
      {
        "name": "Liepard",
        "winRate": 49.7,
        "games": 10520
      },
      {
        "name": "Incineroar",
        "winRate": 49.6,
        "games": 15799
      }
    ],
    "bestSets": []
  },
  "6618": {
    "id": 6618,
    "name": "Galarian Stunfisk",
    "isMega": false,
    "elo": 7989,
    "winRate": 49,
    "appearances": 75231,
    "wins": 36844,
    "losses": 38387,
    "bestPartners": [
      {
        "name": "Paldean Tauros",
        "winRate": 55.4,
        "games": 4855
      },
      {
        "name": "Drampa",
        "winRate": 55.4,
        "games": 4855
      },
      {
        "name": "Mega Slowbro",
        "winRate": 53.1,
        "games": 10156
      },
      {
        "name": "Crabominable",
        "winRate": 51,
        "games": 5301
      },
      {
        "name": "Ariados",
        "winRate": 51,
        "games": 5301
      }
    ],
    "bestSets": []
  },
  "10008": {
    "id": 10008,
    "name": "Heat Rotom",
    "isMega": false,
    "elo": 8011,
    "winRate": 49.9,
    "appearances": 46440,
    "wins": 23188,
    "losses": 23252,
    "bestPartners": [
      {
        "name": "Froslass",
        "winRate": 51.4,
        "games": 5253
      },
      {
        "name": "Azumarill",
        "winRate": 51.4,
        "games": 5253
      },
      {
        "name": "Empoleon",
        "winRate": 51.1,
        "games": 10559
      },
      {
        "name": "Mega Medicham",
        "winRate": 50.8,
        "games": 5306
      },
      {
        "name": "Audino",
        "winRate": 50.8,
        "games": 5306
      }
    ],
    "bestSets": []
  },
  "10009": {
    "id": 10009,
    "name": "Wash Rotom",
    "isMega": false,
    "elo": 8072,
    "winRate": 54.3,
    "appearances": 157392,
    "wins": 85428,
    "losses": 71964,
    "bestPartners": [
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 70,
        "games": 3578
      },
      {
        "name": "Feraligatr",
        "winRate": 69,
        "games": 3680
      },
      {
        "name": "Vaporeon",
        "winRate": 69,
        "games": 3680
      },
      {
        "name": "Pinsir",
        "winRate": 66.8,
        "games": 7753
      },
      {
        "name": "Kingambit",
        "winRate": 64.2,
        "games": 28121
      }
    ],
    "bestSets": []
  },
  "10010": {
    "id": 10010,
    "name": "Frost Rotom",
    "isMega": false,
    "elo": 7924,
    "winRate": 46.1,
    "appearances": 14862,
    "wins": 6858,
    "losses": 8004,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.4,
        "games": 5285
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 50.4,
        "games": 5285
      },
      {
        "name": "Pelipper",
        "winRate": 50.4,
        "games": 5285
      },
      {
        "name": "Charizard",
        "winRate": 50.4,
        "games": 5285
      },
      {
        "name": "Garchomp",
        "winRate": 49.9,
        "games": 10689
      }
    ],
    "bestSets": []
  },
  "10011": {
    "id": 10011,
    "name": "Fan Rotom",
    "isMega": false,
    "elo": 8006,
    "winRate": 50.9,
    "appearances": 25549,
    "wins": 12994,
    "losses": 12555,
    "bestPartners": [
      {
        "name": "Mega Steelix",
        "winRate": 53.4,
        "games": 5004
      },
      {
        "name": "Feraligatr",
        "winRate": 53.4,
        "games": 5004
      },
      {
        "name": "Milotic",
        "winRate": 53.4,
        "games": 5004
      },
      {
        "name": "Dragonite",
        "winRate": 53.4,
        "games": 5004
      },
      {
        "name": "Azumarill",
        "winRate": 53.4,
        "games": 5004
      }
    ],
    "bestSets": []
  },
  "10012": {
    "id": 10012,
    "name": "Mow Rotom",
    "isMega": false,
    "elo": 7959,
    "winRate": 52.6,
    "appearances": 61231,
    "wins": 32209,
    "losses": 29022,
    "bestPartners": [
      {
        "name": "Kleavor",
        "winRate": 70,
        "games": 3578
      },
      {
        "name": "Hisuian Goodra",
        "winRate": 70,
        "games": 3578
      },
      {
        "name": "Kingambit",
        "winRate": 70,
        "games": 3578
      },
      {
        "name": "Mega Blastoise",
        "winRate": 67.9,
        "games": 7573
      },
      {
        "name": "Wyrdeer",
        "winRate": 63.4,
        "games": 4016
      }
    ],
    "bestSets": []
  },
  "10100": {
    "id": 10100,
    "name": "Alolan Raichu",
    "isMega": false,
    "elo": 7992,
    "winRate": 47.7,
    "appearances": 73964,
    "wins": 35269,
    "losses": 38695,
    "bestPartners": [
      {
        "name": "Mega Heracross",
        "winRate": 54.8,
        "games": 4798
      },
      {
        "name": "Incineroar",
        "winRate": 52.5,
        "games": 9876
      },
      {
        "name": "Tyranitar",
        "winRate": 52.3,
        "games": 9962
      },
      {
        "name": "Wash Rotom",
        "winRate": 51.6,
        "games": 15040
      },
      {
        "name": "Tyrantrum",
        "winRate": 51.3,
        "games": 5381
      }
    ],
    "bestSets": []
  },
  "10103": {
    "id": 10103,
    "name": "Alolan Ninetales",
    "isMega": false,
    "elo": 7897,
    "winRate": 43.9,
    "appearances": 36806,
    "wins": 16167,
    "losses": 20639,
    "bestPartners": [
      {
        "name": "Mega Garchomp",
        "winRate": 51.9,
        "games": 10278
      },
      {
        "name": "Tinkaton",
        "winRate": 51.9,
        "games": 10278
      },
      {
        "name": "Azumarill",
        "winRate": 51.7,
        "games": 10109
      },
      {
        "name": "Kingambit",
        "winRate": 51.4,
        "games": 10179
      },
      {
        "name": "Scizor",
        "winRate": 51.4,
        "games": 10179
      }
    ],
    "bestSets": []
  },
  "10250": {
    "id": 10250,
    "name": "Paldean Tauros",
    "isMega": false,
    "elo": 8010,
    "winRate": 50.4,
    "appearances": 210529,
    "wins": 106080,
    "losses": 104449,
    "bestPartners": [
      {
        "name": "Azumarill",
        "winRate": 67.9,
        "games": 3797
      },
      {
        "name": "Mega Meowstic",
        "winRate": 56.9,
        "games": 4654
      },
      {
        "name": "Mega Meowstic",
        "winRate": 56.3,
        "games": 13421
      },
      {
        "name": "Drampa",
        "winRate": 55.4,
        "games": 4855
      },
      {
        "name": "Galarian Stunfisk",
        "winRate": 55.4,
        "games": 4855
      }
    ],
    "bestSets": []
  },
  "10251": {
    "id": 10251,
    "name": "Paldean Tauros (Blaze)",
    "isMega": false,
    "elo": 7972,
    "winRate": 50.7,
    "appearances": 366085,
    "wins": 185658,
    "losses": 180427,
    "bestPartners": [
      {
        "name": "Kleavor",
        "winRate": 70,
        "games": 3578
      },
      {
        "name": "Wash Rotom",
        "winRate": 70,
        "games": 3578
      },
      {
        "name": "Hisuian Goodra",
        "winRate": 70,
        "games": 3578
      },
      {
        "name": "Aegislash",
        "winRate": 66.8,
        "games": 3792
      },
      {
        "name": "Mega Clefable",
        "winRate": 60,
        "games": 4430
      }
    ],
    "bestSets": []
  },
  "10252": {
    "id": 10252,
    "name": "Paldean Tauros (Aqua)",
    "isMega": false,
    "elo": 8004,
    "winRate": 50.7,
    "appearances": 392698,
    "wins": 198905,
    "losses": 193793,
    "bestPartners": [
      {
        "name": "Azumarill",
        "winRate": 67.9,
        "games": 3797
      },
      {
        "name": "Kleavor",
        "winRate": 63.6,
        "games": 3962
      },
      {
        "name": "Mega Meowstic",
        "winRate": 61.4,
        "games": 8371
      },
      {
        "name": "Mega Altaria",
        "winRate": 60.3,
        "games": 4329
      },
      {
        "name": "Mega Meowstic",
        "winRate": 56.9,
        "games": 4654
      }
    ],
    "bestSets": []
  },
  "10336": {
    "id": 10336,
    "name": "Hisuian Samurott",
    "isMega": false,
    "elo": 7996,
    "winRate": 51.4,
    "appearances": 60930,
    "wins": 31341,
    "losses": 29589,
    "bestPartners": [
      {
        "name": "Polteageist",
        "winRate": 54.7,
        "games": 4810
      },
      {
        "name": "Hydreigon",
        "winRate": 54.4,
        "games": 9709
      },
      {
        "name": "Mega Gengar",
        "winRate": 54,
        "games": 4801
      },
      {
        "name": "Pangoro",
        "winRate": 54,
        "games": 4801
      },
      {
        "name": "Zoroark",
        "winRate": 54,
        "games": 4801
      }
    ],
    "bestSets": []
  },
  "10340": {
    "id": 10340,
    "name": "Hisuian Zoroark",
    "isMega": false,
    "elo": 8015,
    "winRate": 50,
    "appearances": 54820,
    "wins": 27436,
    "losses": 27384,
    "bestPartners": [
      {
        "name": "Aegislash",
        "winRate": 63.8,
        "games": 4021
      },
      {
        "name": "Mega Floette",
        "winRate": 63.8,
        "games": 4021
      },
      {
        "name": "Pelipper",
        "winRate": 56.4,
        "games": 9354
      },
      {
        "name": "Krookodile",
        "winRate": 56.2,
        "games": 9125
      },
      {
        "name": "Sneasler",
        "winRate": 53.2,
        "games": 19957
      }
    ],
    "bestSets": []
  },
  "10341": {
    "id": 10341,
    "name": "Hisuian Decidueye",
    "isMega": false,
    "elo": 7994,
    "winRate": 48.9,
    "appearances": 55290,
    "wins": 27028,
    "losses": 28262,
    "bestPartners": [
      {
        "name": "Mega Charizard Y",
        "winRate": 52.1,
        "games": 4871
      },
      {
        "name": "Stunfisk",
        "winRate": 52.1,
        "games": 4871
      },
      {
        "name": "Tauros",
        "winRate": 52.1,
        "games": 4871
      },
      {
        "name": "Hisuian Typhlosion",
        "winRate": 51.2,
        "games": 5409
      },
      {
        "name": "Hydreigon",
        "winRate": 51.2,
        "games": 5409
      }
    ],
    "bestSets": []
  },
  "10678": {
    "id": 10678,
    "name": "Meowstic-F",
    "isMega": false,
    "elo": 7957,
    "winRate": 48,
    "appearances": 23297,
    "wins": 11185,
    "losses": 12112,
    "bestPartners": [
      {
        "name": "Incineroar",
        "winRate": 54.8,
        "games": 9578
      },
      {
        "name": "Paldean Tauros",
        "winRate": 54.8,
        "games": 9578
      },
      {
        "name": "Kingambit",
        "winRate": 54.8,
        "games": 9578
      },
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 54.8,
        "games": 9578
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 54.8,
        "games": 9578
      }
    ],
    "bestSets": []
  },
  "10902": {
    "id": 10902,
    "name": "Basculegion-F",
    "isMega": false,
    "elo": 7940,
    "winRate": 50.7,
    "appearances": 31515,
    "wins": 15993,
    "losses": 15522,
    "bestPartners": [
      {
        "name": "Florges",
        "winRate": 51.7,
        "games": 5133
      },
      {
        "name": "Kingambit",
        "winRate": 51.7,
        "games": 5133
      },
      {
        "name": "Corviknight",
        "winRate": 51.7,
        "games": 5133
      },
      {
        "name": "Stunfisk",
        "winRate": 51.7,
        "games": 5133
      },
      {
        "name": "Hisuian Zoroark",
        "winRate": 51,
        "games": 10171
      }
    ],
    "bestSets": []
  },
  "658-mega": {
    "id": 658,
    "name": "Mega Greninja",
    "isMega": true,
    "elo": 8051,
    "winRate": 53.7,
    "appearances": 14572,
    "wins": 7832,
    "losses": 6740,
    "bestPartners": [
      {
        "name": "Aegislash",
        "winRate": 66.8,
        "games": 3792
      },
      {
        "name": "Sneasler",
        "winRate": 66.8,
        "games": 3792
      },
      {
        "name": "Venusaur",
        "winRate": 66.8,
        "games": 3792
      },
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 56.9,
        "games": 9207
      },
      {
        "name": "Arbok",
        "winRate": 53.7,
        "games": 14572
      }
    ],
    "bestSets": []
  },
  "181-mega": {
    "id": 181,
    "name": "Mega Ampharos",
    "isMega": true,
    "elo": 8034,
    "winRate": 50.4,
    "appearances": 15206,
    "wins": 7658,
    "losses": 7548,
    "bestPartners": [
      {
        "name": "Aerodactyl",
        "winRate": 51.2,
        "games": 5311
      },
      {
        "name": "Pelipper",
        "winRate": 51.2,
        "games": 5311
      },
      {
        "name": "Incineroar",
        "winRate": 51.2,
        "games": 5311
      },
      {
        "name": "Arbok",
        "winRate": 50.7,
        "games": 10342
      },
      {
        "name": "Arcanine",
        "winRate": 50.7,
        "games": 10342
      }
    ],
    "bestSets": []
  },
  "229-mega": {
    "id": 229,
    "name": "Mega Houndoom",
    "isMega": true,
    "elo": 8033,
    "winRate": 50.4,
    "appearances": 15682,
    "wins": 7909,
    "losses": 7773,
    "bestPartners": [
      {
        "name": "Basculegion-M",
        "winRate": 50.9,
        "games": 10419
      },
      {
        "name": "Pelipper",
        "winRate": 50.9,
        "games": 5103
      },
      {
        "name": "Dragonite",
        "winRate": 50.9,
        "games": 5316
      },
      {
        "name": "Gliscor",
        "winRate": 50.9,
        "games": 5316
      },
      {
        "name": "Gyarados",
        "winRate": 50.4,
        "games": 15682
      }
    ],
    "bestSets": []
  },
  "127-mega": {
    "id": 127,
    "name": "Mega Pinsir",
    "isMega": true,
    "elo": 8032,
    "winRate": 55,
    "appearances": 13873,
    "wins": 7634,
    "losses": 6239,
    "bestPartners": [
      {
        "name": "Archaludon",
        "winRate": 66.1,
        "games": 3887
      },
      {
        "name": "Tyranitar",
        "winRate": 66.1,
        "games": 3887
      },
      {
        "name": "Wash Rotom",
        "winRate": 57.5,
        "games": 8916
      },
      {
        "name": "Luxray",
        "winRate": 57.5,
        "games": 8916
      },
      {
        "name": "Kingambit",
        "winRate": 57.4,
        "games": 8844
      }
    ],
    "bestSets": []
  },
  "334-mega": {
    "id": 334,
    "name": "Mega Altaria",
    "isMega": true,
    "elo": 8030,
    "winRate": 52.6,
    "appearances": 14670,
    "wins": 7710,
    "losses": 6960,
    "bestPartners": [
      {
        "name": "Hisuian Arcanine",
        "winRate": 60.3,
        "games": 4329
      },
      {
        "name": "Arcanine",
        "winRate": 60.3,
        "games": 4329
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 60.3,
        "games": 4329
      },
      {
        "name": "Bastiodon",
        "winRate": 60.3,
        "games": 4329
      },
      {
        "name": "Kingambit",
        "winRate": 54.7,
        "games": 9482
      }
    ],
    "bestSets": []
  },
  "478-mega": {
    "id": 478,
    "name": "Mega Froslass",
    "isMega": true,
    "elo": 8028,
    "winRate": 53.4,
    "appearances": 14613,
    "wins": 7809,
    "losses": 6804,
    "bestPartners": [
      {
        "name": "Kingambit",
        "winRate": 59.1,
        "games": 4370
      },
      {
        "name": "Tauros",
        "winRate": 59.1,
        "games": 4370
      },
      {
        "name": "Greninja",
        "winRate": 59.1,
        "games": 4370
      },
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 53.4,
        "games": 14613
      },
      {
        "name": "Krookodile",
        "winRate": 53.4,
        "games": 14613
      }
    ],
    "bestSets": []
  },
  "214-mega": {
    "id": 214,
    "name": "Mega Heracross",
    "isMega": true,
    "elo": 8026,
    "winRate": 53.6,
    "appearances": 14062,
    "wins": 7537,
    "losses": 6525,
    "bestPartners": [
      {
        "name": "Archaludon",
        "winRate": 61,
        "games": 4363
      },
      {
        "name": "Wash Rotom",
        "winRate": 57.7,
        "games": 9161
      },
      {
        "name": "Tyranitar",
        "winRate": 57.7,
        "games": 9161
      },
      {
        "name": "Wyrdeer",
        "winRate": 57.7,
        "games": 9161
      },
      {
        "name": "Alolan Raichu",
        "winRate": 54.8,
        "games": 4798
      }
    ],
    "bestSets": []
  },
  "460-mega": {
    "id": 460,
    "name": "Mega Abomasnow",
    "isMega": true,
    "elo": 8022,
    "winRate": 50,
    "appearances": 21181,
    "wins": 10583,
    "losses": 10598,
    "bestPartners": [
      {
        "name": "Mamoswine",
        "winRate": 50.3,
        "games": 5416
      },
      {
        "name": "Froslass",
        "winRate": 50.3,
        "games": 5416
      },
      {
        "name": "Goodra",
        "winRate": 50.3,
        "games": 5416
      },
      {
        "name": "Grimmsnarl",
        "winRate": 50.3,
        "games": 5416
      },
      {
        "name": "Skeledirge",
        "winRate": 50.3,
        "games": 5416
      }
    ],
    "bestSets": []
  },
  "701-mega": {
    "id": 701,
    "name": "Mega Hawlucha",
    "isMega": true,
    "elo": 8019,
    "winRate": 49.9,
    "appearances": 15267,
    "wins": 7622,
    "losses": 7645,
    "bestPartners": [
      {
        "name": "Incineroar",
        "winRate": 50.4,
        "games": 5078
      },
      {
        "name": "Alolan Raichu",
        "winRate": 50.1,
        "games": 10242
      },
      {
        "name": "Wash Rotom",
        "winRate": 50.1,
        "games": 10242
      },
      {
        "name": "Tyranitar",
        "winRate": 49.9,
        "games": 5164
      },
      {
        "name": "Heat Rotom",
        "winRate": 49.9,
        "games": 5164
      }
    ],
    "bestSets": []
  },
  "6-mega-x": {
    "id": 6,
    "name": "Mega Charizard X",
    "isMega": true,
    "elo": 8014,
    "winRate": 49.5,
    "appearances": 15374,
    "wins": 7604,
    "losses": 7770,
    "bestPartners": [
      {
        "name": "Krookodile",
        "winRate": 50.6,
        "games": 5245
      },
      {
        "name": "Hydreigon",
        "winRate": 50.6,
        "games": 5245
      },
      {
        "name": "Whimsicott",
        "winRate": 50.3,
        "games": 10328
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 50.3,
        "games": 10328
      },
      {
        "name": "Mow Rotom",
        "winRate": 50,
        "games": 5083
      }
    ],
    "bestSets": []
  },
  "208-mega": {
    "id": 208,
    "name": "Mega Steelix",
    "isMega": true,
    "elo": 8014,
    "winRate": 52,
    "appearances": 15407,
    "wins": 8009,
    "losses": 7398,
    "bestPartners": [
      {
        "name": "Feraligatr",
        "winRate": 53.4,
        "games": 5004
      },
      {
        "name": "Dragonite",
        "winRate": 53.4,
        "games": 5004
      },
      {
        "name": "Azumarill",
        "winRate": 53.4,
        "games": 5004
      },
      {
        "name": "Fan Rotom",
        "winRate": 53.4,
        "games": 5004
      },
      {
        "name": "Milotic",
        "winRate": 52.3,
        "games": 10239
      }
    ],
    "bestSets": []
  },
  "282-mega": {
    "id": 282,
    "name": "Mega Gardevoir",
    "isMega": true,
    "elo": 8013,
    "winRate": 49.8,
    "appearances": 755186,
    "wins": 376125,
    "losses": 379061,
    "bestPartners": [
      {
        "name": "Clefable",
        "winRate": 50.8,
        "games": 5260
      },
      {
        "name": "Politoed",
        "winRate": 50.7,
        "games": 42439
      },
      {
        "name": "Kingambit",
        "winRate": 50.3,
        "games": 83071
      },
      {
        "name": "Talonflame",
        "winRate": 50.3,
        "games": 5064
      },
      {
        "name": "Dragapult",
        "winRate": 50.2,
        "games": 242938
      }
    ],
    "bestSets": []
  },
  "306-mega": {
    "id": 306,
    "name": "Mega Aggron",
    "isMega": true,
    "elo": 8013,
    "winRate": 49.1,
    "appearances": 15369,
    "wins": 7540,
    "losses": 7829,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.8,
        "games": 5249
      },
      {
        "name": "Emolga",
        "winRate": 50.8,
        "games": 5249
      },
      {
        "name": "Whimsicott",
        "winRate": 50.3,
        "games": 10370
      },
      {
        "name": "Simisage",
        "winRate": 50.3,
        "games": 10370
      },
      {
        "name": "Dragapult",
        "winRate": 49.9,
        "games": 5121
      }
    ],
    "bestSets": []
  },
  "80-mega": {
    "id": 80,
    "name": "Mega Slowbro",
    "isMega": true,
    "elo": 8011,
    "winRate": 53.4,
    "appearances": 14948,
    "wins": 7979,
    "losses": 6969,
    "bestPartners": [
      {
        "name": "Drampa",
        "winRate": 55.4,
        "games": 4855
      },
      {
        "name": "Paldean Tauros",
        "winRate": 54.7,
        "games": 9647
      },
      {
        "name": "Kingambit",
        "winRate": 54.7,
        "games": 9647
      },
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 53.9,
        "games": 4792
      },
      {
        "name": "Incineroar",
        "winRate": 53.9,
        "games": 4792
      }
    ],
    "bestSets": []
  },
  "130-mega": {
    "id": 130,
    "name": "Mega Gyarados",
    "isMega": true,
    "elo": 8010,
    "winRate": 50.1,
    "appearances": 609528,
    "wins": 305649,
    "losses": 303879,
    "bestPartners": [
      {
        "name": "Tsareena",
        "winRate": 63.2,
        "games": 4040
      },
      {
        "name": "Simipour",
        "winRate": 63.2,
        "games": 4040
      },
      {
        "name": "Mega Floette",
        "winRate": 58.6,
        "games": 8828
      },
      {
        "name": "Sinistcha",
        "winRate": 54.7,
        "games": 4788
      },
      {
        "name": "Archaludon",
        "winRate": 53.7,
        "games": 23914
      }
    ],
    "bestSets": []
  },
  "323-mega": {
    "id": 323,
    "name": "Mega Camerupt",
    "isMega": true,
    "elo": 8005,
    "winRate": 51.5,
    "appearances": 30710,
    "wins": 15817,
    "losses": 14893,
    "bestPartners": [
      {
        "name": "Mega Floette",
        "winRate": 54.7,
        "games": 4788
      },
      {
        "name": "Sinistcha",
        "winRate": 54.7,
        "games": 4788
      },
      {
        "name": "Archaludon",
        "winRate": 53.6,
        "games": 9927
      },
      {
        "name": "Sneasler",
        "winRate": 53.6,
        "games": 9927
      },
      {
        "name": "Mega Gyarados",
        "winRate": 52.3,
        "games": 14950
      }
    ],
    "bestSets": []
  },
  "358-mega": {
    "id": 358,
    "name": "Mega Chimecho",
    "isMega": true,
    "elo": 8000,
    "winRate": 49,
    "appearances": 15296,
    "wins": 7494,
    "losses": 7802,
    "bestPartners": [
      {
        "name": "Hisuian Zoroark",
        "winRate": 50.2,
        "games": 5104
      },
      {
        "name": "Azumarill",
        "winRate": 50.2,
        "games": 5104
      },
      {
        "name": "Krookodile",
        "winRate": 50.2,
        "games": 5104
      },
      {
        "name": "Incineroar",
        "winRate": 50.1,
        "games": 10307
      },
      {
        "name": "Kingambit",
        "winRate": 49.9,
        "games": 5203
      }
    ],
    "bestSets": []
  },
  "10061-mega": {
    "id": 10061,
    "name": "Mega Floette",
    "isMega": true,
    "elo": 7998,
    "winRate": 56.7,
    "appearances": 32043,
    "wins": 18158,
    "losses": 13885,
    "bestPartners": [
      {
        "name": "Kingambit",
        "winRate": 67,
        "games": 3877
      },
      {
        "name": "Pelipper",
        "winRate": 63.8,
        "games": 4021
      },
      {
        "name": "Krookodile",
        "winRate": 63.8,
        "games": 4021
      },
      {
        "name": "Aegislash",
        "winRate": 63.8,
        "games": 4021
      },
      {
        "name": "Hisuian Zoroark",
        "winRate": 63.8,
        "games": 4021
      }
    ],
    "bestSets": []
  },
  "500-mega": {
    "id": 500,
    "name": "Mega Emboar",
    "isMega": true,
    "elo": 7998,
    "winRate": 50.6,
    "appearances": 15609,
    "wins": 7893,
    "losses": 7716,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 51,
        "games": 5039
      },
      {
        "name": "Starmie",
        "winRate": 51,
        "games": 5039
      },
      {
        "name": "Wyrdeer",
        "winRate": 50.9,
        "games": 10358
      },
      {
        "name": "Emolga",
        "winRate": 50.7,
        "games": 5319
      },
      {
        "name": "Corviknight",
        "winRate": 50.7,
        "games": 5319
      }
    ],
    "bestSets": []
  },
  "9-mega": {
    "id": 9,
    "name": "Mega Blastoise",
    "isMega": true,
    "elo": 7993,
    "winRate": 54,
    "appearances": 39658,
    "wins": 21406,
    "losses": 18252,
    "bestPartners": [
      {
        "name": "Luxray",
        "winRate": 73,
        "games": 3557
      },
      {
        "name": "Mow Rotom",
        "winRate": 67.9,
        "games": 7573
      },
      {
        "name": "Decidueye",
        "winRate": 63.4,
        "games": 4016
      },
      {
        "name": "Wyrdeer",
        "winRate": 63.4,
        "games": 4016
      },
      {
        "name": "Drampa",
        "winRate": 63.4,
        "games": 4016
      }
    ],
    "bestSets": []
  },
  "678-mega": {
    "id": 678,
    "name": "Mega Meowstic",
    "isMega": true,
    "elo": 7993,
    "winRate": 56.3,
    "appearances": 13421,
    "wins": 7558,
    "losses": 5863,
    "bestPartners": [
      {
        "name": "Azumarill",
        "winRate": 67.9,
        "games": 3797
      },
      {
        "name": "Tauros",
        "winRate": 67.9,
        "games": 3797
      },
      {
        "name": "Kingambit",
        "winRate": 61.4,
        "games": 8371
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 61.4,
        "games": 8371
      },
      {
        "name": "Paldean Tauros",
        "winRate": 56.3,
        "games": 13421
      }
    ],
    "bestSets": []
  },
  "36-mega": {
    "id": 36,
    "name": "Mega Clefable",
    "isMega": true,
    "elo": 7990,
    "winRate": 56.6,
    "appearances": 13916,
    "wins": 7875,
    "losses": 6041,
    "bestPartners": [
      {
        "name": "Incineroar",
        "winRate": 60.2,
        "games": 4360
      },
      {
        "name": "Kingambit",
        "winRate": 60.2,
        "games": 4360
      },
      {
        "name": "Wyrdeer",
        "winRate": 60.2,
        "games": 4360
      },
      {
        "name": "Archaludon",
        "winRate": 60.1,
        "games": 8790
      },
      {
        "name": "Tauros",
        "winRate": 60.1,
        "games": 8790
      }
    ],
    "bestSets": []
  },
  "6-mega-y": {
    "id": 6,
    "name": "Mega Charizard Y",
    "isMega": true,
    "elo": 7988,
    "winRate": 51.6,
    "appearances": 25052,
    "wins": 12924,
    "losses": 12128,
    "bestPartners": [
      {
        "name": "Tauros",
        "winRate": 53.2,
        "games": 9701
      },
      {
        "name": "Stunfisk",
        "winRate": 53.2,
        "games": 9701
      },
      {
        "name": "Empoleon",
        "winRate": 52.5,
        "games": 9946
      },
      {
        "name": "Rhyperior",
        "winRate": 52.5,
        "games": 9946
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 52.2,
        "games": 14808
      }
    ],
    "bestSets": []
  },
  "655-mega": {
    "id": 655,
    "name": "Mega Delphox",
    "isMega": true,
    "elo": 7987,
    "winRate": 52.7,
    "appearances": 15137,
    "wins": 7977,
    "losses": 7160,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 54.4,
        "games": 9849
      },
      {
        "name": "Drampa",
        "winRate": 54.4,
        "games": 9849
      },
      {
        "name": "Azumarill",
        "winRate": 54.4,
        "games": 9849
      },
      {
        "name": "Kingambit",
        "winRate": 52.7,
        "games": 15137
      },
      {
        "name": "Whimsicott",
        "winRate": 52.7,
        "games": 15137
      }
    ],
    "bestSets": []
  },
  "310-mega": {
    "id": 310,
    "name": "Mega Manectric",
    "isMega": true,
    "elo": 7987,
    "winRate": 50.2,
    "appearances": 15082,
    "wins": 7569,
    "losses": 7513,
    "bestPartners": [
      {
        "name": "Incineroar",
        "winRate": 50.7,
        "games": 5045
      },
      {
        "name": "Pelipper",
        "winRate": 50.7,
        "games": 5045
      },
      {
        "name": "Wyrdeer",
        "winRate": 50.7,
        "games": 5045
      },
      {
        "name": "Gyarados",
        "winRate": 50.3,
        "games": 10150
      },
      {
        "name": "Luxray",
        "winRate": 50.3,
        "games": 9977
      }
    ],
    "bestSets": []
  },
  "308-mega": {
    "id": 308,
    "name": "Mega Medicham",
    "isMega": true,
    "elo": 7984,
    "winRate": 50.4,
    "appearances": 15686,
    "wins": 7903,
    "losses": 7783,
    "bestPartners": [
      {
        "name": "Luxray",
        "winRate": 50.8,
        "games": 5306
      },
      {
        "name": "Heat Rotom",
        "winRate": 50.8,
        "games": 5306
      },
      {
        "name": "Wyrdeer",
        "winRate": 50.8,
        "games": 5306
      },
      {
        "name": "Empoleon",
        "winRate": 50.7,
        "games": 10589
      },
      {
        "name": "Audino",
        "winRate": 50.7,
        "games": 10589
      }
    ],
    "bestSets": []
  },
  "531-mega": {
    "id": 531,
    "name": "Mega Audino",
    "isMega": true,
    "elo": 7984,
    "winRate": 50.3,
    "appearances": 15561,
    "wins": 7821,
    "losses": 7740,
    "bestPartners": [
      {
        "name": "Reuniclus",
        "winRate": 51,
        "games": 5066
      },
      {
        "name": "Arbok",
        "winRate": 50.6,
        "games": 10233
      },
      {
        "name": "Galarian Slowbro",
        "winRate": 50.6,
        "games": 10233
      },
      {
        "name": "Gyarados",
        "winRate": 50.3,
        "games": 10394
      },
      {
        "name": "Cofagrigus",
        "winRate": 50.3,
        "games": 15561
      }
    ],
    "bestSets": []
  },
  "970-mega": {
    "id": 970,
    "name": "Mega Glimmora",
    "isMega": true,
    "elo": 7981,
    "winRate": 51.5,
    "appearances": 15406,
    "wins": 7939,
    "losses": 7467,
    "bestPartners": [
      {
        "name": "Wash Rotom",
        "winRate": 53.8,
        "games": 4945
      },
      {
        "name": "Hisuian Samurott",
        "winRate": 53.8,
        "games": 4945
      },
      {
        "name": "Wyrdeer",
        "winRate": 52.5,
        "games": 10196
      },
      {
        "name": "Scizor",
        "winRate": 52.5,
        "games": 10196
      },
      {
        "name": "Abomasnow",
        "winRate": 51.7,
        "games": 10155
      }
    ],
    "bestSets": []
  },
  "302-mega": {
    "id": 302,
    "name": "Mega Sableye",
    "isMega": true,
    "elo": 7980,
    "winRate": 47.2,
    "appearances": 29858,
    "wins": 14092,
    "losses": 15766,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.4,
        "games": 5448
      },
      {
        "name": "Furfrou",
        "winRate": 50.4,
        "games": 5448
      },
      {
        "name": "Luxray",
        "winRate": 50.4,
        "games": 5448
      },
      {
        "name": "Charizard",
        "winRate": 50.1,
        "games": 5041
      },
      {
        "name": "Archaludon",
        "winRate": 50.1,
        "games": 5041
      }
    ],
    "bestSets": []
  },
  "15-mega": {
    "id": 15,
    "name": "Mega Beedrill",
    "isMega": true,
    "elo": 7976,
    "winRate": 48.9,
    "appearances": 15240,
    "wins": 7450,
    "losses": 7790,
    "bestPartners": [
      {
        "name": "Tauros",
        "winRate": 51,
        "games": 5246
      },
      {
        "name": "Empoleon",
        "winRate": 51,
        "games": 5246
      },
      {
        "name": "Tyranitar",
        "winRate": 51,
        "games": 5246
      },
      {
        "name": "Pangoro",
        "winRate": 51,
        "games": 5246
      },
      {
        "name": "Hisuian Samurott",
        "winRate": 50.3,
        "games": 5082
      }
    ],
    "bestSets": []
  },
  "740-mega": {
    "id": 740,
    "name": "Mega Crabominable",
    "isMega": true,
    "elo": 7975,
    "winRate": 48.2,
    "appearances": 15298,
    "wins": 7368,
    "losses": 7930,
    "bestPartners": [
      {
        "name": "Espathra",
        "winRate": 50.9,
        "games": 5212
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 50.9,
        "games": 5212
      },
      {
        "name": "Charizard",
        "winRate": 50.9,
        "games": 5212
      },
      {
        "name": "Gyarados",
        "winRate": 50.4,
        "games": 10659
      },
      {
        "name": "Incineroar",
        "winRate": 50,
        "games": 5447
      }
    ],
    "bestSets": []
  },
  "952-mega": {
    "id": 952,
    "name": "Mega Scovillain",
    "isMega": true,
    "elo": 7973,
    "winRate": 52.4,
    "appearances": 14788,
    "wins": 7742,
    "losses": 7046,
    "bestPartners": [
      {
        "name": "Stunfisk",
        "winRate": 57.6,
        "games": 4562
      },
      {
        "name": "Luxray",
        "winRate": 57.6,
        "games": 4562
      },
      {
        "name": "Aerodactyl",
        "winRate": 53.3,
        "games": 9806
      },
      {
        "name": "Archaludon",
        "winRate": 52.4,
        "games": 14788
      },
      {
        "name": "Empoleon",
        "winRate": 52.4,
        "games": 14788
      }
    ],
    "bestSets": []
  },
  "359-mega": {
    "id": 359,
    "name": "Mega Absol",
    "isMega": true,
    "elo": 7971,
    "winRate": 49.8,
    "appearances": 16099,
    "wins": 8017,
    "losses": 8082,
    "bestPartners": [
      {
        "name": "Arcanine",
        "winRate": 50.3,
        "games": 5348
      },
      {
        "name": "Hisuian Zoroark",
        "winRate": 50.3,
        "games": 5348
      },
      {
        "name": "Gyarados",
        "winRate": 50.1,
        "games": 10775
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 50.1,
        "games": 10775
      },
      {
        "name": "Delphox",
        "winRate": 49.9,
        "games": 5427
      }
    ],
    "bestSets": []
  },
  "376-mega": {
    "id": 376,
    "name": "Mega Metagross",
    "isMega": true,
    "elo": 7970,
    "winRate": 50,
    "appearances": 25261,
    "wins": 12619,
    "losses": 12642,
    "bestPartners": [
      {
        "name": "Incineroar",
        "winRate": 50,
        "games": 25261
      },
      {
        "name": "Whimsicott",
        "winRate": 50,
        "games": 25261
      },
      {
        "name": "Dragonite",
        "winRate": 50,
        "games": 15106
      },
      {
        "name": "Milotic",
        "winRate": 50,
        "games": 5145
      },
      {
        "name": "Aegislash",
        "winRate": 50,
        "games": 10133
      }
    ],
    "bestSets": []
  },
  "121-mega": {
    "id": 121,
    "name": "Mega Starmie",
    "isMega": true,
    "elo": 7967,
    "winRate": 49.7,
    "appearances": 16022,
    "wins": 7958,
    "losses": 8064,
    "bestPartners": [
      {
        "name": "Drampa",
        "winRate": 50.3,
        "games": 5308
      },
      {
        "name": "Forretress",
        "winRate": 50.3,
        "games": 5308
      },
      {
        "name": "Arcanine",
        "winRate": 49.9,
        "games": 10727
      },
      {
        "name": "Incineroar",
        "winRate": 49.7,
        "games": 10603
      },
      {
        "name": "Crabominable",
        "winRate": 49.7,
        "games": 16022
      }
    ],
    "bestSets": []
  },
  "142-mega": {
    "id": 142,
    "name": "Mega Aerodactyl",
    "isMega": true,
    "elo": 7965,
    "winRate": 52.1,
    "appearances": 19908,
    "wins": 10377,
    "losses": 9531,
    "bestPartners": [
      {
        "name": "Archaludon",
        "winRate": 58.5,
        "games": 4398
      },
      {
        "name": "Garchomp",
        "winRate": 58.5,
        "games": 4398
      },
      {
        "name": "Luxray",
        "winRate": 52.9,
        "games": 14714
      },
      {
        "name": "Wash Rotom",
        "winRate": 52.9,
        "games": 14714
      },
      {
        "name": "Tsareena",
        "winRate": 52.4,
        "games": 14786
      }
    ],
    "bestSets": []
  },
  "160-mega": {
    "id": 160,
    "name": "Mega Feraligatr",
    "isMega": true,
    "elo": 7965,
    "winRate": 50.5,
    "appearances": 21160,
    "wins": 10684,
    "losses": 10476,
    "bestPartners": [
      {
        "name": "Tsareena",
        "winRate": 51.1,
        "games": 5229
      },
      {
        "name": "Roserade",
        "winRate": 51.1,
        "games": 5229
      },
      {
        "name": "Arcanine",
        "winRate": 51.1,
        "games": 5229
      },
      {
        "name": "Meowscarada",
        "winRate": 51.1,
        "games": 5229
      },
      {
        "name": "Serperior",
        "winRate": 50.7,
        "games": 15747
      }
    ],
    "bestSets": []
  },
  "428-mega": {
    "id": 428,
    "name": "Mega Lopunny",
    "isMega": true,
    "elo": 7964,
    "winRate": 50.4,
    "appearances": 15638,
    "wins": 7888,
    "losses": 7750,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.8,
        "games": 10487
      },
      {
        "name": "Incineroar",
        "winRate": 50.8,
        "games": 10487
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 50.8,
        "games": 5325
      },
      {
        "name": "Paldean Tauros",
        "winRate": 50.8,
        "games": 5325
      },
      {
        "name": "Arbok",
        "winRate": 50.8,
        "games": 5162
      }
    ],
    "bestSets": []
  },
  "149-mega": {
    "id": 149,
    "name": "Mega Dragonite",
    "isMega": true,
    "elo": 7960,
    "winRate": 50.5,
    "appearances": 250554,
    "wins": 126505,
    "losses": 124049,
    "bestPartners": [
      {
        "name": "Mega Lucario",
        "winRate": 54.9,
        "games": 9523
      },
      {
        "name": "Hydreigon",
        "winRate": 52.7,
        "games": 9760
      },
      {
        "name": "Greninja",
        "winRate": 51.9,
        "games": 25499
      },
      {
        "name": "Dragapult",
        "winRate": 51.5,
        "games": 30413
      },
      {
        "name": "Mega Scizor",
        "winRate": 51.4,
        "games": 35564
      }
    ],
    "bestSets": []
  },
  "248-mega": {
    "id": 248,
    "name": "Mega Tyranitar",
    "isMega": true,
    "elo": 7959,
    "winRate": 49.8,
    "appearances": 762311,
    "wins": 379434,
    "losses": 382877,
    "bestPartners": [
      {
        "name": "Simisage",
        "winRate": 51.1,
        "games": 5175
      },
      {
        "name": "Gyarados",
        "winRate": 50.7,
        "games": 10353
      },
      {
        "name": "Sneasler",
        "winRate": 50.7,
        "games": 10353
      },
      {
        "name": "Mega Scizor",
        "winRate": 50.5,
        "games": 127385
      },
      {
        "name": "Mega Dragonite",
        "winRate": 50.5,
        "games": 173334
      }
    ],
    "bestSets": []
  },
  "609-mega": {
    "id": 609,
    "name": "Mega Chandelure",
    "isMega": true,
    "elo": 7959,
    "winRate": 51.5,
    "appearances": 25497,
    "wins": 13126,
    "losses": 12371,
    "bestPartners": [
      {
        "name": "Hydreigon",
        "winRate": 54,
        "games": 4899
      },
      {
        "name": "Hisuian Samurott",
        "winRate": 54,
        "games": 4899
      },
      {
        "name": "Krookodile",
        "winRate": 54,
        "games": 9712
      },
      {
        "name": "Umbreon",
        "winRate": 54,
        "games": 9712
      },
      {
        "name": "Abomasnow",
        "winRate": 54,
        "games": 4813
      }
    ],
    "bestSets": []
  },
  "154-mega": {
    "id": 154,
    "name": "Mega Meganium",
    "isMega": true,
    "elo": 7953,
    "winRate": 48.7,
    "appearances": 14797,
    "wins": 7210,
    "losses": 7587,
    "bestPartners": [
      {
        "name": "Gyarados",
        "winRate": 50.8,
        "games": 5077
      },
      {
        "name": "Wash Rotom",
        "winRate": 50.8,
        "games": 5077
      },
      {
        "name": "Basculegion-M",
        "winRate": 50.8,
        "games": 5077
      },
      {
        "name": "Aggron",
        "winRate": 49.8,
        "games": 4991
      },
      {
        "name": "Kingambit",
        "winRate": 49.8,
        "games": 4991
      }
    ],
    "bestSets": []
  },
  "94-mega": {
    "id": 94,
    "name": "Mega Gengar",
    "isMega": true,
    "elo": 7952,
    "winRate": 50.1,
    "appearances": 278203,
    "wins": 139301,
    "losses": 138902,
    "bestPartners": [
      {
        "name": "Pangoro",
        "winRate": 54,
        "games": 4801
      },
      {
        "name": "Tyranitar",
        "winRate": 54,
        "games": 4801
      },
      {
        "name": "Hisuian Samurott",
        "winRate": 54,
        "games": 4801
      },
      {
        "name": "Farigiraf",
        "winRate": 54,
        "games": 4801
      },
      {
        "name": "Zoroark",
        "winRate": 52.4,
        "games": 10045
      }
    ],
    "bestSets": []
  },
  "362-mega": {
    "id": 362,
    "name": "Mega Glalie",
    "isMega": true,
    "elo": 7952,
    "winRate": 50.9,
    "appearances": 15349,
    "wins": 7817,
    "losses": 7532,
    "bestPartners": [
      {
        "name": "Pelipper",
        "winRate": 52.9,
        "games": 4868
      },
      {
        "name": "Sneasler",
        "winRate": 52.9,
        "games": 4868
      },
      {
        "name": "Wash Rotom",
        "winRate": 52.9,
        "games": 4868
      },
      {
        "name": "Gyarados",
        "winRate": 51.4,
        "games": 10165
      },
      {
        "name": "Charizard",
        "winRate": 51.4,
        "games": 10052
      }
    ],
    "bestSets": []
  },
  "3-mega": {
    "id": 3,
    "name": "Mega Venusaur",
    "isMega": true,
    "elo": 7952,
    "winRate": 55.9,
    "appearances": 13795,
    "wins": 7711,
    "losses": 6084,
    "bestPartners": [
      {
        "name": "Vaporeon",
        "winRate": 69,
        "games": 3680
      },
      {
        "name": "Aggron",
        "winRate": 59.4,
        "games": 8773
      },
      {
        "name": "Feraligatr",
        "winRate": 59.4,
        "games": 8773
      },
      {
        "name": "Wash Rotom",
        "winRate": 57.9,
        "games": 8702
      },
      {
        "name": "Incineroar",
        "winRate": 57.9,
        "games": 8702
      }
    ],
    "bestSets": []
  },
  "445-mega": {
    "id": 445,
    "name": "Mega Garchomp",
    "isMega": true,
    "elo": 7949,
    "winRate": 51.5,
    "appearances": 20893,
    "wins": 10758,
    "losses": 10135,
    "bestPartners": [
      {
        "name": "Azumarill",
        "winRate": 53.3,
        "games": 4957
      },
      {
        "name": "Kingambit",
        "winRate": 52.4,
        "games": 10030
      },
      {
        "name": "Alolan Ninetales",
        "winRate": 51.9,
        "games": 10278
      },
      {
        "name": "Tinkaton",
        "winRate": 51.9,
        "games": 10278
      },
      {
        "name": "Scizor",
        "winRate": 51.9,
        "games": 10499
      }
    ],
    "bestSets": []
  },
  "115-mega": {
    "id": 115,
    "name": "Mega Kangaskhan",
    "isMega": true,
    "elo": 7946,
    "winRate": 49.5,
    "appearances": 163810,
    "wins": 81098,
    "losses": 82712,
    "bestPartners": [
      {
        "name": "Mega Gengar",
        "winRate": 50.6,
        "games": 5179
      },
      {
        "name": "Arbok",
        "winRate": 50.2,
        "games": 5182
      },
      {
        "name": "Snorlax",
        "winRate": 50.1,
        "games": 4934
      },
      {
        "name": "Gyarados",
        "winRate": 50,
        "games": 15409
      },
      {
        "name": "Gardevoir",
        "winRate": 50,
        "games": 5236
      }
    ],
    "bestSets": []
  },
  "227-mega": {
    "id": 227,
    "name": "Mega Skarmory",
    "isMega": true,
    "elo": 7946,
    "winRate": 51.3,
    "appearances": 20591,
    "wins": 10554,
    "losses": 10037,
    "bestPartners": [
      {
        "name": "Drampa",
        "winRate": 55.1,
        "games": 4774
      },
      {
        "name": "Hydreigon",
        "winRate": 55.1,
        "games": 4774
      },
      {
        "name": "Sneasler",
        "winRate": 52.7,
        "games": 9996
      },
      {
        "name": "Dragapult",
        "winRate": 52.4,
        "games": 10163
      },
      {
        "name": "Krookodile",
        "winRate": 51.7,
        "games": 15202
      }
    ],
    "bestSets": []
  },
  "10678-mega": {
    "id": 10678,
    "name": "Mega Meowstic",
    "isMega": true,
    "elo": 7945,
    "winRate": 52,
    "appearances": 15119,
    "wins": 7858,
    "losses": 7261,
    "bestPartners": [
      {
        "name": "Paldean Tauros",
        "winRate": 56.9,
        "games": 4654
      },
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 56.9,
        "games": 4654
      },
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 53.4,
        "games": 9696
      },
      {
        "name": "Incineroar",
        "winRate": 52.9,
        "games": 10077
      },
      {
        "name": "Kingambit",
        "winRate": 52.9,
        "games": 10077
      }
    ],
    "bestSets": []
  },
  "780-mega": {
    "id": 780,
    "name": "Mega Drampa",
    "isMega": true,
    "elo": 7944,
    "winRate": 50.1,
    "appearances": 16184,
    "wins": 8114,
    "losses": 8070,
    "bestPartners": [
      {
        "name": "Basculegion-M",
        "winRate": 50.7,
        "games": 5421
      },
      {
        "name": "Whimsicott",
        "winRate": 50.7,
        "games": 5421
      },
      {
        "name": "Forretress",
        "winRate": 50.7,
        "games": 5421
      },
      {
        "name": "Arcanine",
        "winRate": 50.3,
        "games": 10834
      },
      {
        "name": "Charizard",
        "winRate": 50.3,
        "games": 10834
      }
    ],
    "bestSets": []
  },
  "652-mega": {
    "id": 652,
    "name": "Mega Chesnaught",
    "isMega": true,
    "elo": 7942,
    "winRate": 49.8,
    "appearances": 15390,
    "wins": 7658,
    "losses": 7732,
    "bestPartners": [
      {
        "name": "Empoleon",
        "winRate": 50.1,
        "games": 5147
      },
      {
        "name": "Tinkaton",
        "winRate": 50,
        "games": 10150
      },
      {
        "name": "Heat Rotom",
        "winRate": 49.9,
        "games": 5003
      },
      {
        "name": "Basculegion-M",
        "winRate": 49.9,
        "games": 5003
      },
      {
        "name": "Wash Rotom",
        "winRate": 49.9,
        "games": 5003
      }
    ],
    "bestSets": []
  },
  "18-mega": {
    "id": 18,
    "name": "Mega Pidgeot",
    "isMega": true,
    "elo": 7940,
    "winRate": 48.5,
    "appearances": 15453,
    "wins": 7500,
    "losses": 7953,
    "bestPartners": [
      {
        "name": "Luxray",
        "winRate": 51,
        "games": 5423
      },
      {
        "name": "Garchomp",
        "winRate": 51,
        "games": 5423
      },
      {
        "name": "Arcanine",
        "winRate": 49.9,
        "games": 10662
      },
      {
        "name": "Wyrdeer",
        "winRate": 48.7,
        "games": 5239
      },
      {
        "name": "Heat Rotom",
        "winRate": 48.7,
        "games": 5239
      }
    ],
    "bestSets": []
  },
  "448-mega": {
    "id": 448,
    "name": "Mega Lucario",
    "isMega": true,
    "elo": 7939,
    "winRate": 51.8,
    "appearances": 29950,
    "wins": 15526,
    "losses": 14424,
    "bestPartners": [
      {
        "name": "Hydreigon",
        "winRate": 55.8,
        "games": 4652
      },
      {
        "name": "Kingambit",
        "winRate": 54.9,
        "games": 9523
      },
      {
        "name": "Mega Dragonite",
        "winRate": 54.9,
        "games": 9523
      },
      {
        "name": "Greninja",
        "winRate": 54.9,
        "games": 9523
      },
      {
        "name": "Garchomp",
        "winRate": 54,
        "games": 4871
      }
    ],
    "bestSets": []
  },
  "212-mega": {
    "id": 212,
    "name": "Mega Scizor",
    "isMega": true,
    "elo": 7934,
    "winRate": 50.4,
    "appearances": 158634,
    "wins": 79884,
    "losses": 78750,
    "bestPartners": [
      {
        "name": "Excadrill",
        "winRate": 52.7,
        "games": 20086
      },
      {
        "name": "Mega Dragonite",
        "winRate": 51.4,
        "games": 35564
      },
      {
        "name": "Mega Gengar",
        "winRate": 50.7,
        "games": 106503
      },
      {
        "name": "Mega Tyranitar",
        "winRate": 50.5,
        "games": 127385
      },
      {
        "name": "Garchomp",
        "winRate": 50.4,
        "games": 133125
      }
    ],
    "bestSets": []
  },
  "475-mega": {
    "id": 475,
    "name": "Mega Gallade",
    "isMega": true,
    "elo": 7930,
    "winRate": 46,
    "appearances": 14602,
    "wins": 6724,
    "losses": 7878,
    "bestPartners": [
      {
        "name": "Ditto",
        "winRate": 48.3,
        "games": 5216
      },
      {
        "name": "Arcanine",
        "winRate": 48.3,
        "games": 5216
      },
      {
        "name": "Incineroar",
        "winRate": 48.3,
        "games": 5216
      },
      {
        "name": "Bastiodon",
        "winRate": 47.9,
        "games": 10194
      },
      {
        "name": "Kingambit",
        "winRate": 47.5,
        "games": 4978
      }
    ],
    "bestSets": []
  },
  "354-mega": {
    "id": 354,
    "name": "Mega Banette",
    "isMega": true,
    "elo": 7928,
    "winRate": 46.1,
    "appearances": 14716,
    "wins": 6780,
    "losses": 7936,
    "bestPartners": [
      {
        "name": "Paldean Tauros (Aqua)",
        "winRate": 49,
        "games": 5126
      },
      {
        "name": "Greninja",
        "winRate": 49,
        "games": 5126
      },
      {
        "name": "Wyrdeer",
        "winRate": 48.4,
        "games": 10327
      },
      {
        "name": "Paldean Tauros (Blaze)",
        "winRate": 48.4,
        "games": 10327
      },
      {
        "name": "Zoroark",
        "winRate": 47.8,
        "games": 5201
      }
    ],
    "bestSets": []
  },
  "530-mega": {
    "id": 530,
    "name": "Mega Excadrill",
    "isMega": true,
    "elo": 7925,
    "winRate": 50.9,
    "appearances": 15416,
    "wins": 7848,
    "losses": 7568,
    "bestPartners": [
      {
        "name": "Araquanid",
        "winRate": 53,
        "games": 4945
      },
      {
        "name": "Azumarill",
        "winRate": 53,
        "games": 4945
      },
      {
        "name": "Dragonite",
        "winRate": 51.6,
        "games": 10030
      },
      {
        "name": "Quaquaval",
        "winRate": 51.2,
        "games": 10331
      },
      {
        "name": "Pelipper",
        "winRate": 50.9,
        "games": 15416
      }
    ],
    "bestSets": []
  },
  "71-mega": {
    "id": 71,
    "name": "Mega Victreebel",
    "isMega": true,
    "elo": 7915,
    "winRate": 50.1,
    "appearances": 15898,
    "wins": 7971,
    "losses": 7927,
    "bestPartners": [
      {
        "name": "Tauros",
        "winRate": 50.8,
        "games": 5065
      },
      {
        "name": "Gyarados",
        "winRate": 50.8,
        "games": 5065
      },
      {
        "name": "Simipour",
        "winRate": 50.7,
        "games": 10489
      },
      {
        "name": "Slowbro",
        "winRate": 50.7,
        "games": 10489
      },
      {
        "name": "Salazzle",
        "winRate": 50.6,
        "games": 5424
      }
    ],
    "bestSets": []
  },
  "65-mega": {
    "id": 65,
    "name": "Mega Alakazam",
    "isMega": true,
    "elo": 7915,
    "winRate": 44.2,
    "appearances": 14150,
    "wins": 6248,
    "losses": 7902,
    "bestPartners": [
      {
        "name": "Machamp",
        "winRate": 49.9,
        "games": 5146
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 49.9,
        "games": 5146
      },
      {
        "name": "Azumarill",
        "winRate": 49.9,
        "games": 5146
      },
      {
        "name": "Incineroar",
        "winRate": 49.4,
        "games": 5238
      },
      {
        "name": "Krookodile",
        "winRate": 49.4,
        "games": 5238
      }
    ],
    "bestSets": []
  },
  "319-mega": {
    "id": 319,
    "name": "Mega Sharpedo",
    "isMega": true,
    "elo": 7883,
    "winRate": 40.4,
    "appearances": 13156,
    "wins": 5313,
    "losses": 7843,
    "bestPartners": [
      {
        "name": "Arcanine",
        "winRate": 50.5,
        "games": 5423
      },
      {
        "name": "Gyarados",
        "winRate": 50.5,
        "games": 5423
      },
      {
        "name": "Venusaur",
        "winRate": 50.5,
        "games": 5423
      },
      {
        "name": "Charizard",
        "winRate": 50.5,
        "games": 5423
      },
      {
        "name": "Hisuian Arcanine",
        "winRate": 42.7,
        "games": 9170
      }
    ],
    "bestSets": []
  }
};

/** Best core pairs from simulation */
export const SIM_PAIRS: SimPairData[] = [
  {
    "pokemon1": "Luxray",
    "pokemon2": "Mega Blastoise",
    "winRate": 73,
    "games": 3557
  },
  {
    "pokemon1": "Paldean Tauros (Blaze)",
    "pokemon2": "Kleavor",
    "winRate": 70,
    "games": 3578
  },
  {
    "pokemon1": "Mow Rotom",
    "pokemon2": "Kleavor",
    "winRate": 70,
    "games": 3578
  },
  {
    "pokemon1": "Wash Rotom",
    "pokemon2": "Paldean Tauros (Blaze)",
    "winRate": 70,
    "games": 3578
  },
  {
    "pokemon1": "Paldean Tauros (Blaze)",
    "pokemon2": "Hisuian Goodra",
    "winRate": 70,
    "games": 3578
  },
  {
    "pokemon1": "Mow Rotom",
    "pokemon2": "Hisuian Goodra",
    "winRate": 70,
    "games": 3578
  },
  {
    "pokemon1": "Mow Rotom",
    "pokemon2": "Kingambit",
    "winRate": 70,
    "games": 3578
  },
  {
    "pokemon1": "Vaporeon",
    "pokemon2": "Mega Venusaur",
    "winRate": 69,
    "games": 3680
  },
  {
    "pokemon1": "Vaporeon",
    "pokemon2": "Aggron",
    "winRate": 69,
    "games": 3680
  },
  {
    "pokemon1": "Wash Rotom",
    "pokemon2": "Feraligatr",
    "winRate": 69,
    "games": 3680
  },
  {
    "pokemon1": "Wash Rotom",
    "pokemon2": "Vaporeon",
    "winRate": 69,
    "games": 3680
  },
  {
    "pokemon1": "Vaporeon",
    "pokemon2": "Feraligatr",
    "winRate": 69,
    "games": 3680
  },
  {
    "pokemon1": "Vaporeon",
    "pokemon2": "Incineroar",
    "winRate": 69,
    "games": 3680
  },
  {
    "pokemon1": "Mow Rotom",
    "pokemon2": "Mega Blastoise",
    "winRate": 67.9,
    "games": 7573
  },
  {
    "pokemon1": "Azumarill",
    "pokemon2": "Mega Meowstic",
    "winRate": 67.9,
    "games": 3797
  },
  {
    "pokemon1": "Tauros",
    "pokemon2": "Mega Meowstic",
    "winRate": 67.9,
    "games": 3797
  },
  {
    "pokemon1": "Paldean Tauros",
    "pokemon2": "Azumarill",
    "winRate": 67.9,
    "games": 3797
  },
  {
    "pokemon1": "Paldean Tauros (Aqua)",
    "pokemon2": "Azumarill",
    "winRate": 67.9,
    "games": 3797
  },
  {
    "pokemon1": "Mega Floette",
    "pokemon2": "Kingambit",
    "winRate": 67,
    "games": 3877
  },
  {
    "pokemon1": "Wash Rotom",
    "pokemon2": "Pinsir",
    "winRate": 66.8,
    "games": 7753
  },
  {
    "pokemon1": "Archaludon",
    "pokemon2": "Pinsir",
    "winRate": 66.8,
    "games": 7753
  },
  {
    "pokemon1": "Pinsir",
    "pokemon2": "Kingambit",
    "winRate": 66.8,
    "games": 7753
  },
  {
    "pokemon1": "Pinsir",
    "pokemon2": "Tyranitar",
    "winRate": 66.8,
    "games": 7753
  },
  {
    "pokemon1": "Mega Greninja",
    "pokemon2": "Aegislash",
    "winRate": 66.8,
    "games": 3792
  },
  {
    "pokemon1": "Mega Greninja",
    "pokemon2": "Sneasler",
    "winRate": 66.8,
    "games": 3792
  },
  {
    "pokemon1": "Venusaur",
    "pokemon2": "Mega Greninja",
    "winRate": 66.8,
    "games": 3792
  },
  {
    "pokemon1": "Arbok",
    "pokemon2": "Aegislash",
    "winRate": 66.8,
    "games": 3792
  },
  {
    "pokemon1": "Paldean Tauros (Blaze)",
    "pokemon2": "Aegislash",
    "winRate": 66.8,
    "games": 3792
  },
  {
    "pokemon1": "Venusaur",
    "pokemon2": "Sneasler",
    "winRate": 66.8,
    "games": 3792
  },
  {
    "pokemon1": "Arbok",
    "pokemon2": "Venusaur",
    "winRate": 66.8,
    "games": 3792
  },
  {
    "pokemon1": "Tyranitar",
    "pokemon2": "Luxray",
    "winRate": 66.6,
    "games": 11640
  },
  {
    "pokemon1": "Kleavor",
    "pokemon2": "Kingambit",
    "winRate": 66.6,
    "games": 7540
  },
  {
    "pokemon1": "Hisuian Goodra",
    "pokemon2": "Kingambit",
    "winRate": 66.6,
    "games": 7540
  },
  {
    "pokemon1": "Archaludon",
    "pokemon2": "Mega Pinsir",
    "winRate": 66.1,
    "games": 3887
  },
  {
    "pokemon1": "Mega Pinsir",
    "pokemon2": "Tyranitar",
    "winRate": 66.1,
    "games": 3887
  },
  {
    "pokemon1": "Aegislash",
    "pokemon2": "Sneasler",
    "winRate": 65.3,
    "games": 7813
  },
  {
    "pokemon1": "Wyrdeer",
    "pokemon2": "Sneasler",
    "winRate": 65.3,
    "games": 3911
  },
  {
    "pokemon1": "Sneasler",
    "pokemon2": "Kingambit",
    "winRate": 65.3,
    "games": 3911
  },
  {
    "pokemon1": "Cofagrigus",
    "pokemon2": "Sneasler",
    "winRate": 65.3,
    "games": 3911
  },
  {
    "pokemon1": "Cofagrigus",
    "pokemon2": "Wyrdeer",
    "winRate": 65.3,
    "games": 3911
  },
  {
    "pokemon1": "Aromatisse",
    "pokemon2": "Wyrdeer",
    "winRate": 65.3,
    "games": 3911
  },
  {
    "pokemon1": "Azumarill",
    "pokemon2": "Cofagrigus",
    "winRate": 65.3,
    "games": 3911
  },
  {
    "pokemon1": "Snorlax",
    "pokemon2": "Torkoal",
    "winRate": 65,
    "games": 11744
  },
  {
    "pokemon1": "Snorlax",
    "pokemon2": "Slowbro",
    "winRate": 65,
    "games": 11744
  },
  {
    "pokemon1": "Snorlax",
    "pokemon2": "Drampa",
    "winRate": 64.8,
    "games": 11661
  },
  {
    "pokemon1": "Wash Rotom",
    "pokemon2": "Kingambit",
    "winRate": 64.2,
    "games": 28121
  },
  {
    "pokemon1": "Slowbro",
    "pokemon2": "Hatterene",
    "winRate": 63.8,
    "games": 8100
  },
  {
    "pokemon1": "Torkoal",
    "pokemon2": "Drampa",
    "winRate": 63.8,
    "games": 11819
  },
  {
    "pokemon1": "Pelipper",
    "pokemon2": "Aegislash",
    "winRate": 63.8,
    "games": 4021
  },
  {
    "pokemon1": "Pelipper",
    "pokemon2": "Mega Floette",
    "winRate": 63.8,
    "games": 4021
  }
];

/** Archetype rankings from simulation */
export const SIM_ARCHETYPES: SimArchetypeData[] = [
  {
    "name": "custom",
    "elo": 30100,
    "winRate": 52.5,
    "wins": 37574,
    "losses": 33999
  },
  {
    "name": "Kleavor Build",
    "elo": 23668,
    "winRate": 61.1,
    "wins": 7646,
    "losses": 4875
  },
  {
    "name": "Hard Trick Room",
    "elo": 23236,
    "winRate": 60.6,
    "wins": 7775,
    "losses": 5058
  },
  {
    "name": "Mega Blastoise",
    "elo": 23172,
    "winRate": 60.7,
    "wins": 7705,
    "losses": 4996
  },
  {
    "name": "Pinsir Base",
    "elo": 22372,
    "winRate": 66.8,
    "wins": 5181,
    "losses": 2572
  },
  {
    "name": "Mega Clefable",
    "elo": 16172,
    "winRate": 56.6,
    "wins": 7875,
    "losses": 6041
  },
  {
    "name": "Rain",
    "elo": 15628,
    "winRate": 50.7,
    "wins": 64268,
    "losses": 62502
  },
  {
    "name": "Heracross Base",
    "elo": 15468,
    "winRate": 60.2,
    "wins": 5143,
    "losses": 3397
  },
  {
    "name": "Mega Meowstic-M",
    "elo": 15060,
    "winRate": 56.3,
    "wins": 7558,
    "losses": 5863
  },
  {
    "name": "Mega Venusaur",
    "elo": 14516,
    "winRate": 55.9,
    "wins": 7711,
    "losses": 6084
  },
  {
    "name": "Slowbro Trick Room",
    "elo": 14460,
    "winRate": 55.9,
    "wins": 7698,
    "losses": 6078
  },
  {
    "name": "Mega Floette",
    "elo": 14028,
    "winRate": 55.6,
    "wins": 7806,
    "losses": 6240
  },
  {
    "name": "Mega Pinsir",
    "elo": 12660,
    "winRate": 55,
    "wins": 7634,
    "losses": 6239
  },
  {
    "name": "Primarina Build",
    "elo": 10276,
    "winRate": 55.7,
    "wins": 5328,
    "losses": 4231
  },
  {
    "name": "Mega Greninja",
    "elo": 10236,
    "winRate": 53.7,
    "wins": 7832,
    "losses": 6740
  },
  {
    "name": "Hyper Offense",
    "elo": 9604,
    "winRate": 51,
    "wins": 26018,
    "losses": 25005
  },
  {
    "name": "Mega Heracross",
    "elo": 9596,
    "winRate": 53.6,
    "wins": 7537,
    "losses": 6525
  },
  {
    "name": "Mega Slowbro",
    "elo": 9580,
    "winRate": 53.4,
    "wins": 7979,
    "losses": 6969
  },
  {
    "name": "Mega Froslass",
    "elo": 9540,
    "winRate": 53.4,
    "wins": 7809,
    "losses": 6804
  },
  {
    "name": "Meowstic-F Base",
    "elo": 8828,
    "winRate": 54.8,
    "wins": 5247,
    "losses": 4331
  },
  {
    "name": "Mega Chandelure",
    "elo": 8068,
    "winRate": 52.8,
    "wins": 7816,
    "losses": 6995
  },
  {
    "name": "Mega Delphox",
    "elo": 8036,
    "winRate": 52.7,
    "wins": 7977,
    "losses": 7160
  },
  {
    "name": "Mega Altaria",
    "elo": 7500,
    "winRate": 52.6,
    "wins": 7710,
    "losses": 6960
  },
  {
    "name": "Slurpuff Build",
    "elo": 7300,
    "winRate": 52.4,
    "wins": 7844,
    "losses": 7119
  },
  {
    "name": "Mega Scovillain",
    "elo": 7068,
    "winRate": 52.4,
    "wins": 7742,
    "losses": 7046
  },
  {
    "name": "Mega Steelix",
    "elo": 6388,
    "winRate": 52,
    "wins": 8009,
    "losses": 7398
  },
  {
    "name": "Meowstic-M Base",
    "elo": 6380,
    "winRate": 53,
    "wins": 5339,
    "losses": 4729
  },
  {
    "name": "Delphox Base",
    "elo": 6356,
    "winRate": 53.1,
    "wins": 5255,
    "losses": 4648
  },
  {
    "name": "Mega Meowstic-F",
    "elo": 6276,
    "winRate": 52,
    "wins": 7858,
    "losses": 7261
  },
  {
    "name": "Mega Charizard",
    "elo": 5828,
    "winRate": 50.9,
    "wins": 15366,
    "losses": 14825
  },
  {
    "name": "Standard",
    "elo": 5780,
    "winRate": 50.1,
    "wins": 91534,
    "losses": 90999
  },
  {
    "name": "Mega Skarmory",
    "elo": 5780,
    "winRate": 51.7,
    "wins": 7960,
    "losses": 7425
  },
  {
    "name": "Body Press",
    "elo": 5484,
    "winRate": 55.3,
    "wins": 2600,
    "losses": 2102
  },
  {
    "name": "Sand Rush",
    "elo": 5452,
    "winRate": 50.8,
    "wins": 15710,
    "losses": 15216
  },
  {
    "name": "Armarouge Build",
    "elo": 5340,
    "winRate": 51.6,
    "wins": 7981,
    "losses": 7501
  },
  {
    "name": "Gliscor Build",
    "elo": 5324,
    "winRate": 54.9,
    "wins": 2673,
    "losses": 2195
  },
  {
    "name": "Mega Glimmora",
    "elo": 5276,
    "winRate": 51.5,
    "wins": 7939,
    "losses": 7467
  },
  {
    "name": "Mega Garchomp",
    "elo": 5180,
    "winRate": 51.5,
    "wins": 8140,
    "losses": 7680
  },
  {
    "name": "Clefable Base",
    "elo": 4604,
    "winRate": 51.9,
    "wins": 5332,
    "losses": 4944
  },
  {
    "name": "Mr. Rime Build",
    "elo": 4260,
    "winRate": 51.1,
    "wins": 7807,
    "losses": 7462
  },
  {
    "name": "Tyranitar Base",
    "elo": 3980,
    "winRate": 51.5,
    "wins": 5348,
    "losses": 5038
  },
  {
    "name": "Bulky Offense",
    "elo": 3972,
    "winRate": 50.6,
    "wins": 13207,
    "losses": 12898
  },
  {
    "name": "Pikachu Build",
    "elo": 3948,
    "winRate": 51,
    "wins": 8166,
    "losses": 7860
  },
  {
    "name": "Diggersby Build",
    "elo": 3844,
    "winRate": 50.9,
    "wins": 7914,
    "losses": 7621
  },
  {
    "name": "Mega Glalie",
    "elo": 3780,
    "winRate": 50.9,
    "wins": 7817,
    "losses": 7532
  },
  {
    "name": "Mega Excadrill",
    "elo": 3740,
    "winRate": 50.9,
    "wins": 7848,
    "losses": 7568
  },
  {
    "name": "Mega Camerupt",
    "elo": 3388,
    "winRate": 50.7,
    "wins": 7998,
    "losses": 7762
  },
  {
    "name": "Clawitzer Build",
    "elo": 3292,
    "winRate": 50.7,
    "wins": 7955,
    "losses": 7731
  },
  {
    "name": "Basculegion-F Build",
    "elo": 3276,
    "winRate": 50.7,
    "wins": 8101,
    "losses": 7879
  },
  {
    "name": "Mega Feraligatr",
    "elo": 3252,
    "winRate": 50.7,
    "wins": 7983,
    "losses": 7764
  }
];

/** Top moves by win rate from simulation */
export const SIM_MOVES: SimMoveData[] = [
  {
    "name": "Stone Axe",
    "winRate": 61.1,
    "appearances": 12521
  },
  {
    "name": "Megahorn",
    "winRate": 60.2,
    "appearances": 8540
  },
  {
    "name": "X-Scissor",
    "winRate": 54.9,
    "appearances": 51343
  },
  {
    "name": "Strength Sap",
    "winRate": 54.7,
    "appearances": 4788
  },
  {
    "name": "Curse",
    "winRate": 54.4,
    "appearances": 36077
  },
  {
    "name": "Calm Mind",
    "winRate": 54,
    "appearances": 52521
  },
  {
    "name": "Low Kick",
    "winRate": 53.8,
    "appearances": 111180
  },
  {
    "name": "Pin Missile",
    "winRate": 53.6,
    "appearances": 14062
  },
  {
    "name": "Electro Shot",
    "winRate": 53.4,
    "appearances": 234569
  },
  {
    "name": "Fire Blast",
    "winRate": 53,
    "appearances": 14505
  },
  {
    "name": "Belly Drum",
    "winRate": 52.7,
    "appearances": 159191
  },
  {
    "name": "Discharge",
    "winRate": 52.6,
    "appearances": 39273
  },
  {
    "name": "Water Pulse",
    "winRate": 52.4,
    "appearances": 76218
  },
  {
    "name": "Draco Meteor",
    "winRate": 52.2,
    "appearances": 625850
  },
  {
    "name": "Aura Sphere",
    "winRate": 52,
    "appearances": 105913
  },
  {
    "name": "Aqua Jet",
    "winRate": 52,
    "appearances": 246071
  },
  {
    "name": "Quick Attack",
    "winRate": 51.8,
    "appearances": 45012
  },
  {
    "name": "Muddy Water",
    "winRate": 51.7,
    "appearances": 60461
  },
  {
    "name": "Flash Cannon",
    "winRate": 51.6,
    "appearances": 825989
  },
  {
    "name": "Facade",
    "winRate": 51.6,
    "appearances": 25367
  },
  {
    "name": "Hydro Pump",
    "winRate": 51.5,
    "appearances": 488348
  },
  {
    "name": "Scald",
    "winRate": 51.5,
    "appearances": 295350
  },
  {
    "name": "Energy Ball",
    "winRate": 51.4,
    "appearances": 151811
  },
  {
    "name": "Kowtow Cleave",
    "winRate": 51.4,
    "appearances": 804654
  },
  {
    "name": "Volt Switch",
    "winRate": 51.4,
    "appearances": 437602
  },
  {
    "name": "Power Whip",
    "winRate": 51.4,
    "appearances": 85663
  },
  {
    "name": "Ceaseless Edge",
    "winRate": 51.4,
    "appearances": 60930
  },
  {
    "name": "Razor Shell",
    "winRate": 51.4,
    "appearances": 60930
  },
  {
    "name": "Explosion",
    "winRate": 51.4,
    "appearances": 10165
  },
  {
    "name": "Play Rough",
    "winRate": 51.3,
    "appearances": 276270
  },
  {
    "name": "Sacred Sword",
    "winRate": 51.3,
    "appearances": 97282
  },
  {
    "name": "Armor Cannon",
    "winRate": 51.3,
    "appearances": 20662
  },
  {
    "name": "Sludge Wave",
    "winRate": 51.2,
    "appearances": 25970
  },
  {
    "name": "Draining Kiss",
    "winRate": 51.2,
    "appearances": 5116
  },
  {
    "name": "Amnesia",
    "winRate": 51.2,
    "appearances": 5253
  },
  {
    "name": "Dire Claw",
    "winRate": 51.1,
    "appearances": 137873
  },
  {
    "name": "Dual Wingbeat",
    "winRate": 51.1,
    "appearances": 35559
  },
  {
    "name": "Vacuum Wave",
    "winRate": 51.1,
    "appearances": 29734
  },
  {
    "name": "Yawn",
    "winRate": 51.1,
    "appearances": 41222
  },
  {
    "name": "Power Gem",
    "winRate": 51.1,
    "appearances": 31001
  },
  {
    "name": "Rock Blast",
    "winRate": 51.1,
    "appearances": 30074
  },
  {
    "name": "Follow Me",
    "winRate": 51,
    "appearances": 123845
  },
  {
    "name": "Water Shuriken",
    "winRate": 51,
    "appearances": 5270
  },
  {
    "name": "Ice Punch",
    "winRate": 50.9,
    "appearances": 690366
  },
  {
    "name": "Liquidation",
    "winRate": 50.9,
    "appearances": 138892
  },
  {
    "name": "Aqua Step",
    "winRate": 50.9,
    "appearances": 15618
  },
  {
    "name": "Feint",
    "winRate": 50.9,
    "appearances": 5029
  },
  {
    "name": "Iron Tail",
    "winRate": 50.9,
    "appearances": 5237
  },
  {
    "name": "Swords Dance",
    "winRate": 50.8,
    "appearances": 1115025
  },
  {
    "name": "Trick",
    "winRate": 50.8,
    "appearances": 10149
  }
];

/** Meta tier snapshot from simulation */
export const SIM_META: SimMetaSnapshot = {
  "tier1": [
    "Mr. Rime",
    "Wash Rotom",
    "Kleavor",
    "Archaludon",
    "Heracross",
    "Milotic",
    "Slowking",
    "Mega Greninja",
    "Orthworm",
    "Pinsir",
    "Kingambit",
    "Basculegion-M",
    "Aerodactyl",
    "Mega Ampharos",
    "Mega Houndoom",
    "Mega Pinsir",
    "Mega Altaria",
    "Mega Froslass",
    "Avalugg",
    "Salazzle",
    "Mega Heracross",
    "Simisage"
  ],
  "tier2": [
    "Empoleon",
    "Palafin",
    "Mega Abomasnow",
    "Diggersby",
    "Luxray",
    "Steelix",
    "Hisuian Goodra",
    "Mega Hawlucha",
    "Samurott",
    "Stunfisk",
    "Hisuian Zoroark",
    "Dragapult",
    "Mega Charizard X",
    "Mega Steelix",
    "Mega Gardevoir",
    "Victreebel",
    "Mega Aggron",
    "Decidueye",
    "Camerupt",
    "Arbok",
    "Heat Rotom",
    "Mega Slowbro",
    "Paldean Tauros",
    "Mega Gyarados",
    "Flareon",
    "Tauros",
    "Incineroar",
    "Sinistcha",
    "Politoed",
    "Fan Rotom",
    "Pidgeot",
    "Abomasnow",
    "Mega Camerupt",
    "Espeon",
    "Paldean Tauros (Aqua)",
    "Greninja",
    "Charizard",
    "Whimsicott",
    "Typhlosion",
    "Absol",
    "Mega Chimecho",
    "Scovillain",
    "Primarina",
    "Ursaluna",
    "Tinkaton",
    "Hydreigon"
  ],
  "tier3": [
    "Mega Floette",
    "Simisear",
    "Mega Emboar",
    "Ceruledge",
    "Slurpuff",
    "Tyranitar",
    "Morpeko",
    "Hisuian Samurott",
    "Delphox",
    "Wyrdeer",
    "Beartic",
    "Sylveon",
    "Hisuian Decidueye",
    "Glimmora",
    "Pangoro",
    "Mega Blastoise",
    "Froslass",
    "Mega Meowstic",
    "Ampharos",
    "Alolan Raichu",
    "Mega Clefable",
    "Slowbro",
    "Gyarados",
    "Galarian Stunfisk",
    "Garganacl",
    "Hisuian Typhlosion",
    "Mega Charizard Y",
    "Aggron",
    "Emolga",
    "Mudsdale",
    "Mega Delphox",
    "Mega Manectric",
    "Feraligatr",
    "Gliscor",
    "Vaporeon",
    "Meowscarada",
    "Mega Medicham",
    "Houndoom",
    "Ditto",
    "Mega Audino",
    "Garchomp",
    "Arcanine",
    "Weavile",
    "Mega Glimmora",
    "Mega Sableye",
    "Azumarill",
    "Hatterene",
    "Dragonite",
    "Blastoise",
    "Pelipper",
    "Kommo-o",
    "Espathra",
    "Spiritomb",
    "Altaria",
    "Mega Beedrill",
    "Toucannon",
    "Hippowdon",
    "Aegislash",
    "Aromatisse",
    "Mega Crabominable",
    "Polteageist",
    "Kangaskhan",
    "Roserade",
    "Passimian",
    "Clawitzer",
    "Mega Scovillain",
    "Paldean Tauros (Blaze)",
    "Corviknight",
    "Mega Absol",
    "Mega Metagross",
    "Venusaur",
    "Lucario",
    "Sneasler",
    "Sableye",
    "Furfrou",
    "Galarian Slowking",
    "Mega Starmie",
    "Scizor",
    "Hisuian Arcanine",
    "Cofagrigus",
    "Mega Aerodactyl"
  ],
  "dominantArchetypes": [
    "custom",
    "Kleavor Build",
    "Hard Trick Room",
    "Mega Blastoise",
    "Pinsir Base"
  ],
  "underratedPokemon": [],
  "overratedPokemon": [
    "Meowstic-M",
    "Banette",
    "Flapple",
    "Gallade",
    "Mega Alakazam"
  ],
  "bestCores": [
    "Luxray + Mega Blastoise",
    "Paldean Tauros (Blaze) + Kleavor",
    "Mow Rotom + Kleavor",
    "Wash Rotom + Paldean Tauros (Blaze)",
    "Paldean Tauros (Blaze) + Hisuian Goodra"
  ]
};

/** Total battles simulated */
export const SIM_TOTAL_BATTLES = 2000000;

/** Simulation date */
export const SIM_DATE = "2026-04-13T15:35:08.494Z";

// ═══════════════════════════════════════════════════════════════════════════════
// ANTI-META TEAMS — Engine-generated counter teams built around anti-meta cores
// Auto-updated by run-million.ts after each simulation run
// ═══════════════════════════════════════════════════════════════════════════════
export interface AntiMetaTeam {
  id: string;
  name: string;
  strategy: string;
  pokemonIds: number[];
  coreIds: number[];
  winVsMeta: number;
  counters: string[];
  weakTo: string[];
}

export const ANTI_META_TEAMS: AntiMetaTeam[] = [
  {
    "id": "am-1",
    "name": "Mega Pinsir Core",
    "strategy": "Built around Mega Pinsir (100 anti-meta score). Counters Milotic and Slowking.",
    "pokemonIds": [
      127,
      1018,
      248,
      10009,
      983,
      405
    ],
    "coreIds": [
      127,
      1018,
      248
    ],
    "winVsMeta": 52.2,
    "counters": [
      "Milotic",
      "Slowking",
      "Mega Greninja"
    ],
    "weakTo": [
      "Mr. Rime",
      "Wash Rotom"
    ]
  },
  {
    "id": "am-2",
    "name": "Altaria Core",
    "strategy": "Built around Altaria (100 anti-meta score). Counters Milotic and Slowking.",
    "pokemonIds": [
      334,
      208,
      350,
      866,
      10009,
      900
    ],
    "coreIds": [
      334,
      208,
      350
    ],
    "winVsMeta": 53.2,
    "counters": [
      "Milotic",
      "Slowking",
      "Mega Greninja"
    ],
    "weakTo": [
      "Mr. Rime",
      "Wash Rotom"
    ]
  },
  {
    "id": "am-3",
    "name": "Froslass Core",
    "strategy": "Built around Froslass (100 anti-meta score). Counters Milotic and Slowking.",
    "pokemonIds": [
      478,
      660,
      503,
      866,
      10009,
      900
    ],
    "coreIds": [
      478,
      660,
      503
    ],
    "winVsMeta": 53.1,
    "counters": [
      "Milotic",
      "Slowking",
      "Mega Greninja"
    ],
    "weakTo": [
      "Mr. Rime",
      "Wash Rotom"
    ]
  },
  {
    "id": "am-4",
    "name": "Avalugg Core",
    "strategy": "Built around Avalugg (100 anti-meta score). Counters Milotic and Slowking.",
    "pokemonIds": [
      713,
      130,
      903,
      658,
      3,
      681
    ],
    "coreIds": [
      713,
      130,
      903
    ],
    "winVsMeta": 50.9,
    "counters": [
      "Milotic",
      "Slowking",
      "Mega Greninja"
    ],
    "weakTo": [
      "Mr. Rime",
      "Wash Rotom"
    ]
  },
  {
    "id": "am-5",
    "name": "Salazzle Core",
    "strategy": "Built around Salazzle (100 anti-meta score). Counters Milotic and Slowking.",
    "pokemonIds": [
      758,
      685,
      983,
      10012,
      670,
      127
    ],
    "coreIds": [
      758,
      685,
      983
    ],
    "winVsMeta": 51.2,
    "counters": [
      "Milotic",
      "Slowking",
      "Mega Greninja"
    ],
    "weakTo": [
      "Mr. Rime",
      "Wash Rotom"
    ]
  },
  {
    "id": "am-6",
    "name": "Mega Heracross Core",
    "strategy": "Built around Mega Heracross (100 anti-meta score). Counters Milotic and Slowking.",
    "pokemonIds": [
      214,
      1018,
      10009,
      10251,
      160,
      134
    ],
    "coreIds": [
      214,
      1018,
      10009
    ],
    "winVsMeta": 52.5,
    "counters": [
      "Milotic",
      "Slowking",
      "Mega Greninja"
    ],
    "weakTo": [
      "Mr. Rime",
      "Wash Rotom"
    ]
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
// ANTI-META RANKINGS — Pokemon that perform best against the current meta
// Auto-updated by run-million.ts after each simulation run
// ═══════════════════════════════════════════════════════════════════════════════
export interface AntiMetaEntry {
  id: number;
  name: string;
  score: number;
  winVsMeta: number;
  counterCount: number;
  bestInto: string[];
  weakTo: string[];
}

export const ANTI_META_RANKINGS: AntiMetaEntry[] = [
  {
    "id": 127,
    "name": "Mega Pinsir",
    "score": 100,
    "winVsMeta": 55,
    "counterCount": 3,
    "bestInto": [
      "Milotic",
      "Slowking",
      "Mega Greninja"
    ],
    "weakTo": [
      "Mr. Rime",
      "Wash Rotom",
      "Kleavor"
    ]
  },
  {
    "id": 334,
    "name": "Mega Altaria",
    "score": 100,
    "winVsMeta": 52.6,
    "counterCount": 3,
    "bestInto": [
      "Milotic",
      "Slowking",
      "Mega Greninja"
    ],
    "weakTo": [
      "Mr. Rime",
      "Wash Rotom",
      "Kleavor"
    ]
  },
  {
    "id": 478,
    "name": "Mega Froslass",
    "score": 100,
    "winVsMeta": 53.4,
    "counterCount": 3,
    "bestInto": [
      "Milotic",
      "Slowking",
      "Mega Greninja"
    ],
    "weakTo": [
      "Mr. Rime",
      "Wash Rotom",
      "Kleavor"
    ]
  },
  {
    "id": 713,
    "name": "Avalugg",
    "score": 100,
    "winVsMeta": 47.8,
    "counterCount": 3,
    "bestInto": [
      "Milotic",
      "Slowking",
      "Mega Greninja"
    ],
    "weakTo": [
      "Mr. Rime",
      "Wash Rotom",
      "Kleavor"
    ]
  },
  {
    "id": 758,
    "name": "Salazzle",
    "score": 100,
    "winVsMeta": 46.2,
    "counterCount": 3,
    "bestInto": [
      "Milotic",
      "Slowking",
      "Mega Greninja"
    ],
    "weakTo": [
      "Mr. Rime",
      "Wash Rotom",
      "Kleavor"
    ]
  },
  {
    "id": 214,
    "name": "Mega Heracross",
    "score": 100,
    "winVsMeta": 53.6,
    "counterCount": 3,
    "bestInto": [
      "Milotic",
      "Slowking",
      "Mega Greninja"
    ],
    "weakTo": [
      "Mr. Rime",
      "Wash Rotom",
      "Kleavor"
    ]
  },
  {
    "id": 512,
    "name": "Simisage",
    "score": 100,
    "winVsMeta": 50,
    "counterCount": 3,
    "bestInto": [
      "Milotic",
      "Slowking",
      "Mega Greninja"
    ],
    "weakTo": [
      "Mr. Rime",
      "Wash Rotom",
      "Kleavor"
    ]
  },
  {
    "id": 395,
    "name": "Empoleon",
    "score": 100,
    "winVsMeta": 50.8,
    "counterCount": 3,
    "bestInto": [
      "Milotic",
      "Slowking",
      "Mega Greninja"
    ],
    "weakTo": [
      "Mr. Rime",
      "Wash Rotom",
      "Kleavor"
    ]
  },
  {
    "id": 964,
    "name": "Palafin",
    "score": 100,
    "winVsMeta": 50.3,
    "counterCount": 3,
    "bestInto": [
      "Milotic",
      "Slowking",
      "Mega Greninja"
    ],
    "weakTo": [
      "Mr. Rime",
      "Wash Rotom",
      "Kleavor"
    ]
  },
  {
    "id": 460,
    "name": "Mega Abomasnow",
    "score": 100,
    "winVsMeta": 50,
    "counterCount": 3,
    "bestInto": [
      "Milotic",
      "Slowking",
      "Mega Greninja"
    ],
    "weakTo": [
      "Mr. Rime",
      "Wash Rotom",
      "Kleavor"
    ]
  },
  {
    "id": 660,
    "name": "Diggersby",
    "score": 100,
    "winVsMeta": 50.9,
    "counterCount": 3,
    "bestInto": [
      "Milotic",
      "Slowking",
      "Mega Greninja"
    ],
    "weakTo": [
      "Mr. Rime",
      "Wash Rotom",
      "Kleavor"
    ]
  },
  {
    "id": 405,
    "name": "Luxray",
    "score": 100,
    "winVsMeta": 49.5,
    "counterCount": 3,
    "bestInto": [
      "Milotic",
      "Slowking",
      "Mega Greninja"
    ],
    "weakTo": [
      "Mr. Rime",
      "Wash Rotom",
      "Kleavor"
    ]
  },
  {
    "id": 208,
    "name": "Steelix",
    "score": 100,
    "winVsMeta": 48.7,
    "counterCount": 3,
    "bestInto": [
      "Milotic",
      "Slowking",
      "Mega Greninja"
    ],
    "weakTo": [
      "Mr. Rime",
      "Wash Rotom",
      "Kleavor"
    ]
  },
  {
    "id": 5706,
    "name": "Hisuian Goodra",
    "score": 100,
    "winVsMeta": 53.4,
    "counterCount": 3,
    "bestInto": [
      "Milotic",
      "Slowking",
      "Mega Greninja"
    ],
    "weakTo": [
      "Mr. Rime",
      "Wash Rotom",
      "Kleavor"
    ]
  },
  {
    "id": 701,
    "name": "Mega Hawlucha",
    "score": 100,
    "winVsMeta": 49.9,
    "counterCount": 3,
    "bestInto": [
      "Milotic",
      "Slowking",
      "Mega Greninja"
    ],
    "weakTo": [
      "Mr. Rime",
      "Wash Rotom",
      "Kleavor"
    ]
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS TOURNAMENT USAGE — Real data scraped from Limitless
// 1,410 teams across 14 Pokémon Champions community tournaments (Apr 2026)
// Source: play.limitlesstcg.com API
// ═══════════════════════════════════════════════════════════════════════════════
export interface ChampionsTournamentUsage {
  rank: number;
  name: string;
  count: number;       // Number of teams using this Pokémon
  usagePct: number;    // Usage percentage across all 1,410 teams
  top8Count: number;   // How many top-8 finishes included this Pokémon
}

export const CHAMPIONS_TOURNAMENT_TOTAL_TEAMS = 900;
export const CHAMPIONS_TOURNAMENT_DATE = "2026-06-19";

export const CHAMPIONS_TOURNAMENT_USAGE: ChampionsTournamentUsage[] = [
  { rank: 1, name: "Garchomp", count: 331, usagePct: 36.8, top8Count: 66 },
  { rank: 2, name: "Incineroar", count: 316, usagePct: 35.1, top8Count: 71 },
  { rank: 3, name: "Sinistcha", count: 295, usagePct: 32.8, top8Count: 58 },
  { rank: 4, name: "Basculegion-M", count: 271, usagePct: 30.1, top8Count: 82 },
  { rank: 5, name: "Sneasler", count: 267, usagePct: 29.7, top8Count: 74 },
  { rank: 6, name: "Kingambit", count: 257, usagePct: 28.6, top8Count: 88 },
  { rank: 7, name: "Charizard", count: 211, usagePct: 23.4, top8Count: 62 },
  { rank: 8, name: "Whimsicott", count: 203, usagePct: 22.6, top8Count: 39 },
  { rank: 9, name: "Floette", count: 186, usagePct: 20.7, top8Count: 62 },
  { rank: 10, name: "Archaludon", count: 140, usagePct: 15.6, top8Count: 35 },
  { rank: 11, name: "Aerodactyl", count: 122, usagePct: 13.6, top8Count: 45 },
  { rank: 12, name: "Pelipper", count: 119, usagePct: 13.2, top8Count: 19 },
  { rank: 13, name: "Sylveon", count: 114, usagePct: 12.7, top8Count: 29 },
  { rank: 14, name: "Farigiraf", count: 113, usagePct: 12.6, top8Count: 20 },
  { rank: 15, name: "Staraptor", count: 100, usagePct: 11.1, top8Count: 6 },
  { rank: 16, name: "Grimmsnarl", count: 86, usagePct: 9.6, top8Count: 3 },
  { rank: 17, name: "Metagross", count: 80, usagePct: 8.9, top8Count: 2 },
  { rank: 18, name: "Wash Rotom", count: 80, usagePct: 8.9, top8Count: 8 },
  { rank: 19, name: "Venusaur", count: 77, usagePct: 8.6, top8Count: 11 },
  { rank: 20, name: "Tyranitar", count: 71, usagePct: 7.9, top8Count: 14 },
  { rank: 21, name: "Froslass", count: 69, usagePct: 7.7, top8Count: 25 },
  { rank: 22, name: "Raichu", count: 65, usagePct: 7.2, top8Count: 7 },
  { rank: 23, name: "Gholdengo", count: 64, usagePct: 7.1, top8Count: 3 },
  { rank: 24, name: "Maushold", count: 63, usagePct: 7, top8Count: 5 },
  { rank: 25, name: "Dragonite", count: 61, usagePct: 6.8, top8Count: 17 },
  { rank: 26, name: "Glimmora", count: 58, usagePct: 6.4, top8Count: 9 },
  { rank: 27, name: "Milotic", count: 58, usagePct: 6.4, top8Count: 14 },
  { rank: 28, name: "Delphox", count: 57, usagePct: 6.3, top8Count: 16 },
  { rank: 29, name: "Swampert", count: 50, usagePct: 5.6, top8Count: 4 },
  { rank: 30, name: "Sableye", count: 49, usagePct: 5.4, top8Count: 6 },
  { rank: 31, name: "Corviknight", count: 45, usagePct: 5, top8Count: 12 },
  { rank: 32, name: "Scovillain", count: 45, usagePct: 5, top8Count: 17 },
  { rank: 33, name: "Hydreigon", count: 44, usagePct: 4.9, top8Count: 11 },
  { rank: 34, name: "Alolan Ninetales", count: 43, usagePct: 4.8, top8Count: 7 },
  { rank: 35, name: "Gengar", count: 43, usagePct: 4.8, top8Count: 5 },
  { rank: 36, name: "Talonflame", count: 40, usagePct: 4.4, top8Count: 3 },
  { rank: 37, name: "Torkoal", count: 39, usagePct: 4.3, top8Count: 4 },
  { rank: 38, name: "Politoed", count: 38, usagePct: 4.2, top8Count: 12 },
  { rank: 39, name: "Annihilape", count: 34, usagePct: 3.8, top8Count: 2 },
  { rank: 40, name: "Lycanroc", count: 33, usagePct: 3.7, top8Count: 12 },
  { rank: 41, name: "Kangaskhan", count: 32, usagePct: 3.6, top8Count: 4 },
  { rank: 42, name: "Blastoise", count: 32, usagePct: 3.6, top8Count: 8 },
  { rank: 43, name: "Excadrill", count: 30, usagePct: 3.3, top8Count: 6 },
  { rank: 44, name: "Aegislash", count: 28, usagePct: 3.1, top8Count: 4 },
  { rank: 45, name: "Mawile", count: 28, usagePct: 3.1, top8Count: 2 },
  { rank: 46, name: "Hisuian Arcanine", count: 27, usagePct: 3, top8Count: 9 },
  { rank: 47, name: "Toxapex", count: 26, usagePct: 2.9, top8Count: 5 },
  { rank: 48, name: "Kommo-o", count: 23, usagePct: 2.6, top8Count: 5 },
  { rank: 49, name: "Vivillon", count: 22, usagePct: 2.4, top8Count: 6 },
  { rank: 50, name: "Clefable", count: 21, usagePct: 2.3, top8Count: 6 },
  { rank: 51, name: "Gyarados", count: 21, usagePct: 2.3, top8Count: 8 },
  { rank: 52, name: "Ceruledge", count: 20, usagePct: 2.2, top8Count: 8 },
  { rank: 53, name: "Gardevoir", count: 19, usagePct: 2.1, top8Count: 2 },
  { rank: 54, name: "Eelektross", count: 19, usagePct: 2.1, top8Count: 1 },
  { rank: 55, name: "Scizor", count: 19, usagePct: 2.1, top8Count: 10 },
  { rank: 56, name: "Primarina", count: 18, usagePct: 2, top8Count: 1 },
  { rank: 57, name: "Mamoswine", count: 18, usagePct: 2, top8Count: 4 },
  { rank: 58, name: "Meowscarada", count: 17, usagePct: 1.9, top8Count: 6 },
  { rank: 59, name: "Heat Rotom", count: 17, usagePct: 1.9, top8Count: 0 },
  { rank: 60, name: "Tsareena", count: 15, usagePct: 1.7, top8Count: 3 },
  { rank: 61, name: "Lucario", count: 14, usagePct: 1.6, top8Count: 2 },
  { rank: 62, name: "Palafin", count: 13, usagePct: 1.4, top8Count: 6 },
  { rank: 63, name: "Espathra", count: 13, usagePct: 1.4, top8Count: 5 },
  { rank: 64, name: "Scrafty", count: 12, usagePct: 1.3, top8Count: 1 },
  { rank: 65, name: "Volcarona", count: 12, usagePct: 1.3, top8Count: 2 },
  { rank: 66, name: "Dragapult", count: 11, usagePct: 1.2, top8Count: 2 },
  { rank: 67, name: "Greninja", count: 11, usagePct: 1.2, top8Count: 1 },
  { rank: 68, name: "Tinkaton", count: 11, usagePct: 1.2, top8Count: 3 },
  { rank: 69, name: "Blaziken", count: 11, usagePct: 1.2, top8Count: 1 },
  { rank: 70, name: "Sceptile", count: 11, usagePct: 1.2, top8Count: 1 },
  { rank: 71, name: "Mimikyu", count: 11, usagePct: 1.2, top8Count: 4 },
  { rank: 72, name: "Lopunny", count: 11, usagePct: 1.2, top8Count: 1 },
  { rank: 73, name: "Azumarill", count: 10, usagePct: 1.1, top8Count: 2 },
  { rank: 74, name: "Gallade", count: 10, usagePct: 1.1, top8Count: 2 },
  { rank: 75, name: "Weavile", count: 9, usagePct: 1, top8Count: 1 },
  { rank: 76, name: "Kleavor", count: 9, usagePct: 1, top8Count: 2 },
  { rank: 77, name: "Skarmory", count: 9, usagePct: 1, top8Count: 2 },
  { rank: 78, name: "Heliolisk", count: 9, usagePct: 1, top8Count: 1 },
  { rank: 79, name: "Camerupt", count: 9, usagePct: 1, top8Count: 0 },
  { rank: 80, name: "Hatterene", count: 8, usagePct: 0.9, top8Count: 0 },
  { rank: 81, name: "Hisuian Zoroark", count: 8, usagePct: 0.9, top8Count: 1 },
  { rank: 82, name: "Wyrdeer", count: 8, usagePct: 0.9, top8Count: 0 },
  { rank: 83, name: "Crabominable", count: 8, usagePct: 0.9, top8Count: 1 },
  { rank: 84, name: "Pyroar", count: 7, usagePct: 0.8, top8Count: 2 },
  { rank: 85, name: "Dragalge", count: 7, usagePct: 0.8, top8Count: 0 },
  { rank: 86, name: "Meowstic-M", count: 7, usagePct: 0.8, top8Count: 0 },
  { rank: 87, name: "Conkeldurr", count: 7, usagePct: 0.8, top8Count: 1 },
  { rank: 88, name: "Meganium", count: 7, usagePct: 0.8, top8Count: 1 },
  { rank: 89, name: "Feraligatr", count: 7, usagePct: 0.8, top8Count: 0 },
  { rank: 90, name: "Drampa", count: 7, usagePct: 0.8, top8Count: 1 },
  { rank: 91, name: "Empoleon", count: 7, usagePct: 0.8, top8Count: 1 },
  { rank: 92, name: "Manectric", count: 7, usagePct: 0.8, top8Count: 3 },
  { rank: 93, name: "Oranguru", count: 7, usagePct: 0.8, top8Count: 2 },
  { rank: 94, name: "Arcanine", count: 7, usagePct: 0.8, top8Count: 3 },
  { rank: 95, name: "Araquanid", count: 6, usagePct: 0.7, top8Count: 1 },
  { rank: 96, name: "Golurk", count: 6, usagePct: 0.7, top8Count: 1 },
  { rank: 97, name: "Heracross", count: 6, usagePct: 0.7, top8Count: 0 },
  { rank: 98, name: "Basculegion-F", count: 6, usagePct: 0.7, top8Count: 3 },
  { rank: 99, name: "Scolipede", count: 5, usagePct: 0.6, top8Count: 0 },
  { rank: 100, name: "Armarouge", count: 5, usagePct: 0.6, top8Count: 2 },
  { rank: 101, name: "Tauros", count: 5, usagePct: 0.6, top8Count: 0 },
  { rank: 102, name: "Mow Rotom", count: 5, usagePct: 0.6, top8Count: 2 },
  { rank: 103, name: "Hisuian Samurott", count: 5, usagePct: 0.6, top8Count: 1 },
  { rank: 104, name: "Toxicroak", count: 5, usagePct: 0.6, top8Count: 2 },
  { rank: 105, name: "Serperior", count: 5, usagePct: 0.6, top8Count: 0 },
  { rank: 106, name: "Hisuian Typhlosion", count: 4, usagePct: 0.4, top8Count: 0 },
  { rank: 107, name: "Salazzle", count: 4, usagePct: 0.4, top8Count: 1 },
  { rank: 108, name: "Overqwil", count: 4, usagePct: 0.4, top8Count: 0 },
  { rank: 109, name: "Clawitzer", count: 4, usagePct: 0.4, top8Count: 0 },
  { rank: 110, name: "Beedrill", count: 4, usagePct: 0.4, top8Count: 0 },
  { rank: 111, name: "Orthworm", count: 4, usagePct: 0.4, top8Count: 1 },
  { rank: 112, name: "Chimecho", count: 4, usagePct: 0.4, top8Count: 1 },
  { rank: 113, name: "Snorlax", count: 4, usagePct: 0.4, top8Count: 0 },
  { rank: 114, name: "Chesnaught", count: 4, usagePct: 0.4, top8Count: 0 },
  { rank: 115, name: "Galarian Slowking", count: 4, usagePct: 0.4, top8Count: 0 },
  { rank: 116, name: "Ninetales", count: 3, usagePct: 0.3, top8Count: 1 },
  { rank: 117, name: "Rhyperior", count: 3, usagePct: 0.3, top8Count: 0 },
  { rank: 118, name: "Luxray", count: 3, usagePct: 0.3, top8Count: 0 },
  { rank: 119, name: "Jolteon", count: 3, usagePct: 0.3, top8Count: 2 },
  { rank: 120, name: "Hawlucha", count: 3, usagePct: 0.3, top8Count: 0 },
  { rank: 121, name: "Ampharos", count: 3, usagePct: 0.3, top8Count: 0 },
  { rank: 122, name: "Pidgeot", count: 3, usagePct: 0.3, top8Count: 0 },
  { rank: 123, name: "Starmie", count: 3, usagePct: 0.3, top8Count: 0 },
  { rank: 124, name: "Steelix", count: 3, usagePct: 0.3, top8Count: 0 },
  { rank: 125, name: "Vileplume", count: 2, usagePct: 0.2, top8Count: 1 },
  { rank: 126, name: "Victreebel", count: 2, usagePct: 0.2, top8Count: 0 },
  { rank: 127, name: "Mudsdale", count: 2, usagePct: 0.2, top8Count: 1 },
  { rank: 128, name: "Machamp", count: 2, usagePct: 0.2, top8Count: 0 },
  { rank: 129, name: "Alakazam", count: 2, usagePct: 0.2, top8Count: 0 },
  { rank: 130, name: "Audino", count: 2, usagePct: 0.2, top8Count: 0 },
  { rank: 131, name: "Liepard", count: 2, usagePct: 0.2, top8Count: 0 },
  { rank: 132, name: "Bellibolt", count: 2, usagePct: 0.2, top8Count: 0 },
  { rank: 133, name: "Tyrantrum", count: 2, usagePct: 0.2, top8Count: 1 },
  { rank: 134, name: "Klefki", count: 2, usagePct: 0.2, top8Count: 1 },
  { rank: 135, name: "Aggron", count: 2, usagePct: 0.2, top8Count: 1 },
  { rank: 136, name: "Umbreon", count: 2, usagePct: 0.2, top8Count: 0 },
  { rank: 137, name: "Chandelure", count: 2, usagePct: 0.2, top8Count: 1 },
  { rank: 138, name: "Vaporeon", count: 2, usagePct: 0.2, top8Count: 0 },
  { rank: 139, name: "Vanilluxe", count: 2, usagePct: 0.2, top8Count: 0 },
  { rank: 140, name: "Altaria", count: 2, usagePct: 0.2, top8Count: 0 },
  { rank: 141, name: "Hydrapple", count: 2, usagePct: 0.2, top8Count: 0 },
  { rank: 142, name: "Noivern", count: 2, usagePct: 0.2, top8Count: 0 },
  { rank: 143, name: "Hisuian Goodra", count: 2, usagePct: 0.2, top8Count: 1 },
  { rank: 144, name: "Musharna", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 145, name: "Malamar", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 146, name: "Toucannon", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 147, name: "Sandaconda", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 148, name: "Runerigus", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 149, name: "Emboar", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 150, name: "Ditto", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 151, name: "Barbaracle", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 152, name: "Trevenant", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 153, name: "Galarian Slowbro", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 154, name: "Frost Rotom", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 155, name: "Houndstone", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 156, name: "Falinks", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 157, name: "Zoroark", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 158, name: "Slowbro", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 159, name: "Appletun", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 160, name: "Torterra", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 161, name: "Pikachu", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 162, name: "Espeon", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 163, name: "Passimian", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 164, name: "Polteageist", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 165, name: "Pangoro", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 166, name: "Flapple", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 167, name: "Ariados", count: 1, usagePct: 0.1, top8Count: 1 },
  { rank: 168, name: "Glalie", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 169, name: "Medicham", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 170, name: "Hisuian Decidueye", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 171, name: "Infernape", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 172, name: "Goodra", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 173, name: "Skeledirge", count: 1, usagePct: 0.1, top8Count: 0 },
];

// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS TOURNAMENT TEAMS — Top-8 team compositions from Limitless
// 122 unique teams from 18 Pokémon Champions community tournaments
// Source: play.limitlesstcg.com API
// ═══════════════════════════════════════════════════════════════════════════════
export interface ChampionsTournamentSet {
  ability: string;
  item: string;
  moves: string[];
  teraType?: string;
}

export interface ChampionsTournamentTeam {
  id: string;
  tournament: string;
  players: number;       // Tournament size (total entrants)
  placement: number;
  player: string;
  wins: number;
  losses: number;
  pokemonIds: number[];
  pokemonNames: string[];
  sets?: ChampionsTournamentSet[];
}

export const CHAMPIONS_TOURNAMENT_TEAMS: ChampionsTournamentTeam[] = [
  { id: "ct-1", tournament: "r/VGC Regulation M-B Kickoff Cup", players: 232, placement: 1, player: "Snorlaxpikachu1", wins: 9, losses: 1, pokemonIds: [668, 547, 38, 981, 902, 670], pokemonNames: ["Pyroar", "Whimsicott", "Ninetales", "Farigiraf", "Basculegion-M", "Floette"], sets: [
    { ability: "Unnerve", item: "Pyroarite", moves: ["Heat Wave", "Overheat", "Solar Beam", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Sunny Day", "Protect"] },
    { ability: "Drought", item: "Choice Scarf", moves: ["Overheat", "Heat Wave", "Solar Beam", "Fake Tears"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Thunderbolt", "Twin Beam", "Trick Room", "Helping Hand"] },
    { ability: "Adaptability", item: "Life Orb", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] }
  ] },
  { id: "ct-2", tournament: "r/VGC Regulation M-B Kickoff Cup", players: 232, placement: 2, player: "Hirseknabe", wins: 8, losses: 2, pokemonIds: [115, 981, 324, 902, 45, 784], pokemonNames: ["Kangaskhan", "Farigiraf", "Torkoal", "Basculegion-M", "Vileplume", "Kommo-o"], sets: [
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Double-Edge", "Fake Out", "Low Kick", "Sucker Punch"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Hyper Voice", "Psychic", "Protect", "Trick Room"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Weather Ball", "Earth Power", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Aqua Jet", "Wave Crash", "Last Respects", "Flip Turn"] },
    { ability: "Chlorophyll", item: "Focus Sash", moves: ["Sludge Bomb", "Energy Ball", "Sleep Powder", "After You"] },
    { ability: "Overcoat", item: "Haban Berry", moves: ["Clanging Scales", "Aura Sphere", "Protect", "Clangorous Soul"] }
  ] },
  { id: "ct-3", tournament: "r/VGC Regulation M-B Kickoff Cup", players: 232, placement: 3, player: "KoelSaul", wins: 8, losses: 1, pokemonIds: [925, 979, 700, 681, 635, 142], pokemonNames: ["Maushold", "Annihilape", "Sylveon", "Aegislash", "Hydreigon", "Aerodactyl"], sets: [
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Protect", "Beat Up", "Super Fang", "Follow Me"] },
    { ability: "Defiant", item: "Leftovers", moves: ["Protect", "Bulk Up", "Drain Punch", "Rage Fist"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Protect", "Hyper Voice", "Hyper Beam", "Quick Attack"] },
    { ability: "Stance Change", item: "Spell Tag", moves: ["King's Shield", "Poltergeist", "Shadow Sneak", "Iron Head"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Dark Pulse", "Snarl", "Draco Meteor", "Earth Power"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Wide Guard", "Rock Slide", "Dual Wingbeat", "Tailwind"] }
  ] },
  { id: "ct-4", tournament: "r/VGC Regulation M-B Kickoff Cup", players: 232, placement: 4, player: "porygon2", wins: 7, losses: 2, pokemonIds: [903, 727, 670, 983, 1013, 887], pokemonNames: ["Sneasler", "Incineroar", "Floette", "Kingambit", "Sinistcha", "Dragapult"], sets: [
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Swords Dance", "Kowtow Cleave", "Sucker Punch", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Life Dew", "Trick Room", "Rage Powder"] },
    { ability: "Clear Body", item: "Focus Sash", moves: ["Psychic Fangs", "Phantom Force", "Dragon Darts", "Light Screen"] }
  ] },
  { id: "ct-5", tournament: "r/VGC Regulation M-B Kickoff Cup", players: 232, placement: 5, player: "ヒミーは最低だ ヒ", wins: 6, losses: 2, pokemonIds: [279, 903, 902, 149, 1018, 1000], pokemonNames: ["Pelipper", "Sneasler", "Basculegion-M", "Dragonite", "Archaludon", "Gholdengo"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Hurricane", "Weather Ball", "Tailwind", "Wide Guard"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Dragon Pulse", "Heat Wave", "Tailwind", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] },
    { ability: "Good as Gold", item: "Focus Sash", moves: ["Make It Rain", "Shadow Ball", "Nasty Plot", "Protect"] }
  ] },
  { id: "ct-6", tournament: "r/VGC Regulation M-B Kickoff Cup", players: 232, placement: 6, player: "godey95", wins: 6, losses: 2, pokemonIds: [279, 1018, 302, 260, 979, 1013], pokemonNames: ["Pelipper", "Archaludon", "Sableye", "Swampert", "Annihilape", "Sinistcha"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Hurricane", "Weather Ball", "Tailwind", "Wide Guard"], teraType: "Water" },
    { ability: "Stamina", item: "Leftovers", moves: ["Protect", "Electro Shot", "Dragon Pulse", "Flash Cannon"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Rain Dance", "Will-O-Wisp", "Reflect", "Light Screen"] },
    { ability: "Torrent", item: "Swampertite", moves: ["High Horsepower", "Protect", "Rock Slide", "Wave Crash"] },
    { ability: "Defiant", item: "Leftovers", moves: ["Drain Punch", "Rage Fist", "Bulk Up", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Strength Sap"] }
  ] },
  { id: "ct-7", tournament: "r/VGC Regulation M-B Kickoff Cup", players: 232, placement: 7, player: "washy", wins: 6, losses: 2, pokemonIds: [279, 903, 902, 149, 1018, 1000], pokemonNames: ["Pelipper", "Sneasler", "Basculegion-M", "Dragonite", "Archaludon", "Gholdengo"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Hurricane", "Weather Ball", "Tailwind", "Wide Guard"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Dragon Pulse", "Heat Wave", "Tailwind", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] },
    { ability: "Good as Gold", item: "Focus Sash", moves: ["Make It Rain", "Shadow Ball", "Nasty Plot", "Protect"] }
  ] },
  { id: "ct-8", tournament: "r/VGC Regulation M-B Kickoff Cup", players: 232, placement: 8, player: "MiniMitre", wins: 6, losses: 2, pokemonIds: [6, 398, 445, 461, 902, 547], pokemonNames: ["Charizard", "Staraptor", "Garchomp", "Weavile", "Basculegion-M", "Whimsicott"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Intimidate", item: "Staraptite", moves: ["Dual Wingbeat", "Close Combat", "Facade", "Protect"] },
    { ability: "Rough Skin", item: "Life Orb", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Pressure", item: "Wide Lens", moves: ["Fake Out", "Icy Wind", "Snarl", "Triple Axel"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Charm", "Encore"] }
  ] },
  { id: "ct-9", tournament: "*Sitrus-Series*|Champions-MB|#63", players: 100, placement: 1, player: "BHelixB", wins: 9, losses: 2, pokemonIds: [5059, 547, 903, 445, 983, 478], pokemonNames: ["Hisuian Arcanine", "Whimsicott", "Sneasler", "Garchomp", "Kingambit", "Froslass"], sets: [
    { ability: "Rock Head", item: "Focus Sash", moves: ["Flare Blitz", "Rock Slide", "Extreme Speed", "Protect"] },
    { ability: "Prankster", item: "Occa Berry", moves: ["Protect", "Encore", "Tailwind", "Moonblast"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Rough Skin", item: "Life Orb", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Snow Cloak", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] }
  ] },
  { id: "ct-10", tournament: "*Sitrus-Series*|Champions-MB|#63", players: 100, placement: 2, player: "AndreVGC", wins: 9, losses: 2, pokemonIds: [376, 784, 700, 142, 727, 350], pokemonNames: ["Metagross", "Kommo-o", "Sylveon", "Aerodactyl", "Incineroar", "Milotic"], sets: [
    { ability: "Clear Body", item: "Metagrossite", moves: ["Iron Head", "Psychic Fangs", "Stomping Tantrum", "Protect"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Aura Sphere", "Clangorous Soul", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Detect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] },
    { ability: "Competitive", item: "Sitrus Berry", moves: ["Scald", "Icy Wind", "Life Dew", "Protect"] }
  ] },
  { id: "ct-11", tournament: "*Sitrus-Series*|Champions-MB|#63", players: 100, placement: 3, player: "quivern", wins: 7, losses: 3, pokemonIds: [282, 750, 981, 666, 324, 254], pokemonNames: ["Gardevoir", "Mudsdale", "Farigiraf", "Vivillon", "Torkoal", "Sceptile"], sets: [
    { ability: "Telepathy", item: "Gardevoirite", moves: ["Psychic", "Hyper Voice", "Trick Room", "Protect"] },
    { ability: "Inner Focus", item: "Life Orb", moves: ["Rock Slide", "High Horsepower", "Heavy Slam", "Earthquake"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Protect", "Trick Room", "Thunderbolt", "Helping Hand"] },
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Hurricane", "Protect", "Rage Powder", "Sleep Powder"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Flamethrower", "Earth Power", "Protect"] },
    { ability: "Overgrow", item: "Sceptilite", moves: ["Leaf Storm", "Dragon Pulse", "Protect", "Shed Tail"] }
  ] },
  { id: "ct-12", tournament: "*Sitrus-Series*|Champions-MB|#63", players: 100, placement: 4, player: "SleepySilverVGC", wins: 7, losses: 3, pokemonIds: [10103, 398, 655, 902, 925, 983], pokemonNames: ["Alolan Ninetales", "Staraptor", "Delphox", "Basculegion-M", "Maushold", "Kingambit"], sets: [
    { ability: "Snow Warning", item: "Never-Melt Ice", moves: ["Blizzard", "Freeze-Dry", "Icy Wind", "Protect"] },
    { ability: "Intimidate", item: "Staraptite", moves: ["Brave Bird", "Close Combat", "Protect", "Tailwind"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Protect", "Substitute"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Super Fang", "Protect", "Follow Me", "Encore"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] }
  ] },
  { id: "ct-13", tournament: "*Sitrus-Series*|Champions-MB|#63", players: 100, placement: 5, player: "Skraw", wins: 7, losses: 2, pokemonIds: [260, 670, 279, 861, 1013, 1018], pokemonNames: ["Swampert", "Floette", "Pelipper", "Grimmsnarl", "Sinistcha", "Archaludon"], sets: [
    { ability: "Torrent", item: "Swampertite", moves: ["Wave Crash", "Earthquake", "Ice Punch", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Hurricane", "Weather Ball", "Tailwind", "Wide Guard"] },
    { ability: "Prankster", item: "Light Clay", moves: ["Reflect", "Light Screen", "Parting Shot", "Foul Play"] },
    { ability: "Hospitality", item: "Coba Berry", moves: ["Matcha Gotcha", "Life Dew", "Trick Room", "Rage Powder"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] }
  ] },
  { id: "ct-14", tournament: "*Sitrus-Series*|Champions-MB|#63", players: 100, placement: 6, player: "AlexShyness", wins: 7, losses: 2, pokemonIds: [6, 3, 324, 303, 981, 727], pokemonNames: ["Charizard", "Venusaur", "Torkoal", "Mawile", "Farigiraf", "Incineroar"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Solar Beam", "Weather Ball"] },
    { ability: "Chlorophyll", item: "Focus Sash", moves: ["Protect", "Sleep Powder", "Sludge Bomb", "Energy Ball"] },
    { ability: "Drought", item: "Charcoal", moves: ["Protect", "Eruption", "Heat Wave", "Weather Ball"] },
    { ability: "Hyper Cutter", item: "Mawilite", moves: ["Protect", "Play Rough", "Sucker Punch", "Iron Head"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Psychic", "Helping Hand", "Trick Room", "Hyper Voice"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] }
  ] },
  { id: "ct-15", tournament: "*Sitrus-Series*|Champions-MB|#63", players: 100, placement: 7, player: "Teach_12", wins: 7, losses: 2, pokemonIds: [398, 547, 727, 1013, 902, 670], pokemonNames: ["Staraptor", "Whimsicott", "Incineroar", "Sinistcha", "Basculegion-M", "Floette"], sets: [
    { ability: "Intimidate", item: "Staraptite", moves: ["Close Combat", "Brave Bird", "Protect", "Roost"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Charm", "Tailwind", "Moonblast", "Light Screen"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Parting Shot", "Protect", "Flare Blitz", "Fake Out"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Life Dew", "Rage Powder", "Matcha Gotcha", "Protect"] },
    { ability: "Swift Swim", item: "Choice Scarf", moves: ["Last Respects", "Flip Turn", "Wave Crash", "Aqua Jet"] },
    { ability: "Flower veil", item: "Floettite", moves: ["Calm Mind", "Protect", "Moonblast", "Dazzling Gleam"] }
  ] },
  { id: "ct-16", tournament: "*Sitrus-Series*|Champions-MB|#63", players: 100, placement: 8, player: "NMR | FelipeT", wins: 7, losses: 2, pokemonIds: [260, 279, 1018, 983, 1013, 727], pokemonNames: ["Swampert", "Pelipper", "Archaludon", "Kingambit", "Sinistcha", "Incineroar"], sets: [
    { ability: "Damp", item: "Swampertite", moves: ["Wave Crash", "Ice Punch", "Earthquake", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Weather Ball", "Hurricane", "Protect", "Tailwind"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Flash Cannon", "Dragon Pulse", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Protect", "Iron Head"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Matcha Gotcha", "Protect", "Rage Powder", "Trick Room"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Throat Chop", "Parting Shot", "Flare Blitz"] }
  ] },
  { id: "ct-17", tournament: "Alpensee Tour (Reg M-B) #62 - ✨ for #1! IN-GAME!", players: 54, placement: 1, player: "Testing444", wins: 5, losses: 0, pokemonIds: [279, 903, 902, 149, 1018, 260], pokemonNames: ["Pelipper", "Sneasler", "Basculegion-M", "Dragonite", "Archaludon", "Swampert"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Wide Guard", "Tailwind", "Weather Ball", "Hurricane"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Dragon Pulse", "Heat Wave", "Tailwind", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] },
    { ability: "Torrent", item: "Swampertite", moves: ["Wave Crash", "Earthquake", "High Horsepower", "Protect"] }
  ] },
  { id: "ct-18", tournament: "Alpensee Tour (Reg M-B) #62 - ✨ for #1! IN-GAME!", players: 54, placement: 2, player: "ImTengenUzui", wins: 4, losses: 1, pokemonIds: [727, 670, 1013, 655, 983, 903], pokemonNames: ["Incineroar", "Floette", "Sinistcha", "Delphox", "Kingambit", "Sneasler"], sets: [
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Throat Chop", "Fake Out", "Flare Blitz", "Parting Shot"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Nasty Plot", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] }
  ] },
  { id: "ct-19", tournament: "Alpensee Tour (Reg M-B) #62 - ✨ for #1! IN-GAME!", players: 54, placement: 3, player: "Frytki", wins: 4, losses: 1, pokemonIds: [149, 925, 1018, 279, 902, 303], pokemonNames: ["Dragonite", "Maushold", "Archaludon", "Pelipper", "Basculegion-M", "Mawile"], sets: [
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Hurricane", "Weather Ball", "Protect"] },
    { ability: "Technician", item: "Wide Lens", moves: ["Protect", "Population Bomb", "Rain Dance", "Follow Me"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Dragon Pulse", "Flash Cannon", "Electro Shot", "Protect"] },
    { ability: "Drizzle", item: "Life Orb", moves: ["Hurricane", "Weather Ball", "Wide Guard", "Tailwind"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Intimidate", item: "Mawilite", moves: ["Play Rough", "Iron Head", "Sucker Punch", "Protect"] }
  ] },
  { id: "ct-20", tournament: "Alpensee Tour (Reg M-B) #62 - ✨ for #1! IN-GAME!", players: 54, placement: 4, player: "shabarai", wins: 4, losses: 1, pokemonIds: [547, 6, 983, 902, 1013, 398], pokemonNames: ["Whimsicott", "Charizard", "Kingambit", "Basculegion-M", "Sinistcha", "Staraptor"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Charm", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Rage Powder", "Matcha Gotcha", "Trick Room", "Life Dew"] },
    { ability: "Intimidate", item: "Staraptite", moves: ["Brave Bird", "Close Combat", "Roost", "Protect"] }
  ] },
  { id: "ct-21", tournament: "Alpensee Tour (Reg M-B) #62 - ✨ for #1! IN-GAME!", players: 54, placement: 5, player: "Yoshi1267", wins: 4, losses: 1, pokemonIds: [655, 730, 903, 983, 1013, 727], pokemonNames: ["Delphox", "Primarina", "Sneasler", "Kingambit", "Sinistcha", "Incineroar"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Nasty Plot", "Protect"] },
    { ability: "Liquid Voice", item: "Leftovers", moves: ["Hyper Voice", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Poison Touch", item: "Focus Sash", moves: ["Dire Claw", "Close Combat", "Quick Guard", "Fake Out"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Swords Dance", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Parting Shot", "Throat Chop"] }
  ] },
  { id: "ct-22", tournament: "Alpensee Tour (Reg M-B) #62 - ✨ for #1! IN-GAME!", players: 54, placement: 6, player: "Jayisdecent", wins: 4, losses: 1, pokemonIds: [257, 635, 727, 1013, 350, 670], pokemonNames: ["Blaziken", "Hydreigon", "Incineroar", "Sinistcha", "Milotic", "Floette"], sets: [
    { ability: "Speed Boost", item: "Blazikenite", moves: ["Flare Blitz", "Close Combat", "Swords Dance", "Detect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Draco Meteor", "Heat Wave", "Dark Pulse", "Snarl"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Muddy Water", "Coil", "Hypnosis", "Recover"] },
    { ability: "Fairy Aura", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] }
  ] },
  { id: "ct-23", tournament: "Alpensee Tour (Reg M-B) #62 - ✨ for #1! IN-GAME!", players: 54, placement: 7, player: "trevYah", wins: 4, losses: 1, pokemonIds: [727, 3, 6, 1013, 903, 983], pokemonNames: ["Incineroar", "Venusaur", "Charizard", "Sinistcha", "Sneasler", "Kingambit"], sets: [
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Sludge Bomb", "Leaf Storm", "Earth Power", "Protect"] },
    { ability: "Blaze", item: "Charizardite X", moves: ["Dragon Claw", "Temper Flare", "Dragon Dance", "Protect"] },
    { ability: "Hospitality", item: "Leftovers", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Defiant", item: "Life Orb", moves: ["Kowtow Cleave", "Swords Dance", "Sucker Punch", "Protect"] }
  ] },
  { id: "ct-24", tournament: "Alpensee Tour (Reg M-B) #62 - ✨ for #1! IN-GAME!", players: 54, placement: 8, player: "SDGRyo", wins: 4, losses: 1, pokemonIds: [26, 398, 1013, 727, 445, 902], pokemonNames: ["Raichu", "Staraptor", "Sinistcha", "Incineroar", "Garchomp", "Basculegion-M"], sets: [
    { ability: "Lightning Rod", item: "Raichunite X", moves: ["Fake Out", "Charm", "Volt Tackle", "Protect"] },
    { ability: "Intimidate", item: "Staraptite", moves: ["Close Combat", "Brave Bird", "Tailwind", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Strength Sap"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Rough Skin", item: "Life Orb", moves: ["Earthquake", "Rock Slide", "Dragon Claw", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-25", tournament: "Último Torneo Ranking PokéchampionsDestiny #9", players: 12, placement: 1, player: "Soosendosen", wins: 4, losses: 0, pokemonIds: [6, 727, 903, 983, 670, 1013], pokemonNames: ["Charizard", "Incineroar", "Sneasler", "Kingambit", "Floette", "Sinistcha"], sets: [
    { ability: "Blaze", item: "Charizardite X", moves: ["Protect", "Temper Flare", "Dragon Claw", "Dragon Dance"] },
    { ability: "Intimidate", item: "Leftovers", moves: ["Fake Out", "Parting Shot", "Flare Blitz", "Helping Hand"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Fake Out", "Coaching", "Close Combat", "Dire Claw"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Kowtow Cleave", "Sucker Punch", "Iron Head"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Dazzling Gleam", "Draining Kiss", "Calm Mind"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Protect", "Trick Room"] }
  ] },
  { id: "ct-26", tournament: "Último Torneo Ranking PokéchampionsDestiny #9", players: 12, placement: 2, player: "tpgamer007", wins: 3, losses: 1, pokemonIds: [983, 981, 666, 700, 248, 26], pokemonNames: ["Kingambit", "Farigiraf", "Vivillon", "Sylveon", "Tyranitar", "Raichu"], sets: [
    { ability: "Defiant", item: "Choice Scarf", moves: ["Iron Head", "Low Kick", "Kowtow Cleave", "Sucker Punch"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Roar", "Trick Room", "Twin Beam", "Thunderbolt"] },
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Hurricane", "Energy Ball", "Rage Powder", "Sleep Powder"] },
    { ability: "Pixilate", item: "Life Orb", moves: ["Hyper Beam", "Hyper Voice", "Quick Attack", "Detect"] },
    { ability: "Sand stream", item: "Chople Berry", moves: ["High horsepower", "knock off", "protect", "Rock Slide"] },
    { ability: "Lightning Rod", item: "Raichunite Y", moves: ["Zap Cannon", "Volt Switch", "Focus Blast", "Fake out"] }
  ] },
  { id: "ct-27", tournament: "Último Torneo Ranking PokéchampionsDestiny #9", players: 12, placement: 3, player: "Royal_Rebel_Prince21", wins: 3, losses: 1, pokemonIds: [547, 903, 1018, 130, 668, 604], pokemonNames: ["Whimsicott", "Sneasler", "Archaludon", "Gyarados", "Pyroar", "Eelektross"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Protect", "Encore"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Dragon Pulse", "Aura Sphere", "Flash Cannon", "Protect"] },
    { ability: "Intimidate", item: "Gyaradosite", moves: ["Crunch", "Waterfall", "Dragon Dance", "Protect"] },
    { ability: "Rivalry", item: "Pyroarite", moves: ["Flamethrower", "Heat Wave", "Hyper Voice", "Protect"] },
    { ability: "Levitate", item: "Eelektrossite", moves: ["Flamethrower", "Thunderbolt", "Giga Drain", "Protect"], teraType: "Electric" }
  ] },
  { id: "ct-28", tournament: "Último Torneo Ranking PokéchampionsDestiny #9", players: 12, placement: 4, player: "Ismavp97", wins: 2, losses: 2, pokemonIds: [727, 983, 445, 547, 902, 6], pokemonNames: ["Incineroar", "Kingambit", "Garchomp", "Whimsicott", "Basculegion-M", "Charizard"], sets: [
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Rock Slide", "Stomping Tantrum", "Dragon Claw"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Protect", "Tailwind", "Encore", "Moonblast"] },
    { ability: "Adaptability", item: "Life Orb", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Solar Beam", "Heat Wave", "Weather Ball"] }
  ] },
  { id: "ct-29", tournament: "Último Torneo Ranking PokéchampionsDestiny #9", players: 12, placement: 5, player: "Vitigoleiro", wins: 2, losses: 2, pokemonIds: [376, 861, 547, 1000, 26, 903], pokemonNames: ["Metagross", "Grimmsnarl", "Whimsicott", "Gholdengo", "Raichu", "Sneasler"], sets: [
    { ability: "Clear Body", item: "Metagrossite", moves: ["Iron Head", "Psychic Fangs", "Body Press", "Iron Defense"] },
    { ability: "Prankster", item: "Light Clay", moves: ["Reflect", "Light Screen", "Fake Out", "Foul Play"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Encore", "Taunt", "Moonblast"] },
    { ability: "Good as Gold", item: "Choice Scarf", moves: ["Make It Rain", "Shadow Ball", "Power Gem", "Nasty Plot"] },
    { ability: "Lightning Rod", item: "Raichunite Y", moves: ["Zap Cannon", "Focus Blast", "Thunderbolt", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] }
  ] },
  { id: "ct-30", tournament: "Último Torneo Ranking PokéchampionsDestiny #9", players: 12, placement: 6, player: "PistaD", wins: 2, losses: 2, pokemonIds: [142, 6, 981, 700, 983, 445], pokemonNames: ["Aerodactyl", "Charizard", "Farigiraf", "Sylveon", "Kingambit", "Garchomp"], sets: [
    { ability: "Pressure", item: "Aerodactylite", moves: ["Rock Slide", "Ice Fang", "Tailwind", "Dual Wingbeat"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Weather Ball", "Solar Beam"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Twin Beam", "Thunderbolt", "Roar", "Trick Room"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Detect", "Quick Attack", "Hyper Voice", "Hyper Beam"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Low Kick"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Protect", "Dragon Claw", "Stomping Tantrum", "Earthquake"] }
  ] },
  { id: "ct-31", tournament: "Último Torneo Ranking PokéchampionsDestiny #9", players: 12, placement: 7, player: "Dell", wins: 2, losses: 2, pokemonIds: [666, 560, 26, 445, 663, 10103], pokemonNames: ["Vivillon", "Scrafty", "Raichu", "Garchomp", "Talonflame", "Alolan Ninetales"], sets: [
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Sleep Powder", "Hurricane", "Pollen Puff", "Rage Powder"] },
    { ability: "Intimidate", item: "Scraftinite", moves: ["Fake Out", "Knock Off", "Close Combat", "Protect"] },
    { ability: "No Guard", item: "Raichunite Y", moves: ["Zap Cannon", "Focus Blast", "Fake Out", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Stomping Tantrum", "Dragon Claw", "Rock Slide", "Protect"] },
    { ability: "Gale Wings", item: "Focus Sash", moves: ["Air Slash", "Heat Wave", "Tailwind", "Protect"] },
    { ability: "Snow Warning", item: "Life Orb", moves: ["Aurora Veil", "Blizzard", "Moonblast", "Protect"] }
  ] },
  { id: "ct-32", tournament: "Último Torneo Ranking PokéchampionsDestiny #9", players: 12, placement: 8, player: "Elike", wins: 2, losses: 2, pokemonIds: [861, 398, 26, 530, 902, 248], pokemonNames: ["Grimmsnarl", "Staraptor", "Raichu", "Excadrill", "Basculegion-M", "Tyranitar"], sets: [
    { ability: "Prankster", item: "Light Clay", moves: ["Light Screen", "Reflect", "Spirit Break", "Parting Shot"] },
    { ability: "Intimidate", item: "Staraptite", moves: ["Brave Bird", "Close Combat", "Tailwind", "Protect"] },
    { ability: "Static", item: "Shuca Berry", moves: ["Volt Switch", "Fake Out", "Charm", "Encore"] },
    { ability: "Sand Rush", item: "Focus Sash", moves: ["Earthquake", "Iron Head", "Rock Slide", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Flip Turn", "Wave Crash", "Aqua Jet"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Knock Off", "Low Kick", "Rock Slide", "Protect"] }
  ] },
  { id: "ct-33", tournament: "TARTAN TAKEDOWN #28 - [CHAMPIONS]", players: 21, placement: 1, player: "TenkiPK", wins: 6, losses: 1, pokemonIds: [6, 670, 445, 547, 902, 983], pokemonNames: ["Charizard", "Floette", "Garchomp", "Whimsicott", "Basculegion-M", "Kingambit"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Defiant", item: "Occa Berry", moves: ["Kowtow Cleave", "Protect", "Sucker Punch", "Iron Head"] }
  ] },
  { id: "ct-34", tournament: "TARTAN TAKEDOWN #28 - [CHAMPIONS]", players: 21, placement: 2, player: "Emoolew", wins: 5, losses: 2, pokemonIds: [937, 727, 670, 350, 1013, 10103], pokemonNames: ["Ceruledge", "Incineroar", "Floette", "Milotic", "Sinistcha", "Alolan Ninetales"], sets: [
    { ability: "Flash Fire", item: "Colbur Berry", moves: ["Bitter Blade", "Shadow Sneak", "Swords Dance", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Draining Kiss", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Scald", "Icy Wind", "Life Dew", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Snow Warning", item: "Focus Sash", moves: ["Blizzard", "Disable", "Encore", "Protect"] }
  ] },
  { id: "ct-35", tournament: "TARTAN TAKEDOWN #28 - [CHAMPIONS]", players: 21, placement: 3, player: "SuperDialga", wins: 4, losses: 2, pokemonIds: [670, 547, 902, 983, 1018, 5059], pokemonNames: ["Floette", "Whimsicott", "Basculegion-M", "Kingambit", "Archaludon", "Hisuian Arcanine"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Flip Turn"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Protect"] },
    { ability: "Sturdy", item: "White Herb", moves: ["Draco Meteor", "Flash Cannon", "Aura Sphere", "Protect"] },
    { ability: "Rock Head", item: "Sitrus Berry", moves: ["Flare Blitz", "Rock Slide", "Extreme Speed", "Protect"] }
  ] },
  { id: "ct-36", tournament: "TARTAN TAKEDOWN #28 - [CHAMPIONS]", players: 21, placement: 4, player: "Svenny", wins: 4, losses: 2, pokemonIds: [823, 445, 5059, 248, 10336, 478], pokemonNames: ["Corviknight", "Garchomp", "Hisuian Arcanine", "Tyranitar", "Hisuian Samurott", "Froslass"], sets: [
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Brave Bird", "Iron Head", "Protect", "Tailwind"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Protect", "Rock Slide"] },
    { ability: "Rock Head", item: "Focus Sash", moves: ["Flare Blitz", "Head Smash", "Protect", "Extreme Speed"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Protect", "Low Kick"] },
    { ability: "Sharpness", item: "Choice Scarf", moves: ["Aqua Cutter", "Night Slash", "Sacred Sword", "Flip Turn"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Protect", "Aurora Veil"] }
  ] },
  { id: "ct-37", tournament: "TARTAN TAKEDOWN #28 - [CHAMPIONS]", players: 21, placement: 5, player: "Y0SHY", wins: 3, losses: 2, pokemonIds: [670, 655, 727, 903, 983, 1013], pokemonNames: ["Floette", "Delphox", "Incineroar", "Sneasler", "Kingambit", "Sinistcha"], sets: [
    { ability: "Fairy Aura", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Levitate", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Nasty Plot", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Darkest Lariat", "Parting Shot"] },
    { ability: "Poison Touch", item: "Focus Sash", moves: ["Fake Out", "Dire Claw", "Close Combat", "Quick Guard"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] }
  ] },
  { id: "ct-38", tournament: "TARTAN TAKEDOWN #28 - [CHAMPIONS]", players: 21, placement: 6, player: "TypNull07", wins: 3, losses: 2, pokemonIds: [530, 248, 823, 635, 10009, 778], pokemonNames: ["Excadrill", "Tyranitar", "Corviknight", "Hydreigon", "Wash Rotom", "Mimikyu"], sets: [
    { ability: "Sand Rush", item: "Focus Sash", moves: ["Iron Head", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Low Kick", "Protect"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Brave Bird", "Body Press", "Bulk Up", "Tailwind"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Dark Pulse", "Draco Meteor", "Heat Wave", "Snarl"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Thunderbolt", "Hydro Pump", "Will-O-Wisp", "Protect"] },
    { ability: "Disguise", item: "Fairy Feather", moves: ["Shadow Claw", "Shadow Sneak", "Play Rough", "Protect"] }
  ] },
  { id: "ct-39", tournament: "TARTAN TAKEDOWN #28 - [CHAMPIONS]", players: 21, placement: 7, player: "Uscorp", wins: 3, losses: 2, pokemonIds: [6, 142, 445, 983, 700, 902], pokemonNames: ["Charizard", "Aerodactyl", "Garchomp", "Kingambit", "Sylveon", "Basculegion-M"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Tailwind", "Wide Guard", "Dual Wingbeat"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Tomb", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Low Kick"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Yawn", "Quick Attack", "Detect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Aqua Jet", "Last Respects", "Protect"] }
  ] },
  { id: "ct-40", tournament: "TARTAN TAKEDOWN #28 - [CHAMPIONS]", players: 21, placement: 8, player: "KST | KAMPFI ", wins: 3, losses: 2, pokemonIds: [670, 903, 727, 1013, 10009, 823], pokemonNames: ["Floette", "Sneasler", "Incineroar", "Sinistcha", "Wash Rotom", "Corviknight"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Dire Claw", "Close Combat", "Coaching", "Fake Out"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Throat Chop", "Flare Blitz", "Fake Out", "Parting Shot"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Trick Room"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Electroweb", "Volt Switch", "Hydro Pump", "Will-O-Wisp"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Brave Bird", "Iron Head", "Bulk Up", "Roost"] }
  ] },
  { id: "ct-41", tournament: "Champions Tour LEPE #8", players: 17, placement: 1, player: "othunder21", wins: 6, losses: 2, pokemonIds: [655, 670, 727, 903, 983, 981], pokemonNames: ["Delphox", "Floette", "Incineroar", "Sneasler", "Kingambit", "Farigiraf"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Nasty Plot", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Darkest Lariat", "Parting Shot"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Twin Beam", "Thunderbolt", "Trick Room", "Helping Hand"] }
  ] },
  { id: "ct-42", tournament: "Champions Tour LEPE #8", players: 17, placement: 2, player: "LigmaSigma67", wins: 5, losses: 3, pokemonIds: [903, 5059, 478, 547, 983, 902], pokemonNames: ["Sneasler", "Hisuian Arcanine", "Froslass", "Whimsicott", "Kingambit", "Basculegion-M"], sets: [
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Rock Head", item: "Focus Sash", moves: ["Flare Blitz", "Head Smash", "Rock Slide", "Protect"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Protect", "Encore"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Swords Dance", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Wave Crash", "Last Respects", "Protect", "Aqua Jet"] }
  ] },
  { id: "ct-43", tournament: "Champions Tour LEPE #8", players: 17, placement: 3, player: "VanilllaIce", wins: 5, losses: 2, pokemonIds: [478, 952, 902, 983, 903, 745], pokemonNames: ["Froslass", "Scovillain", "Basculegion-M", "Kingambit", "Sneasler", "Lycanroc"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Giga Drain", "Overheat", "Rage Powder", "Protect"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Gunk Shot", "Protect", "Fake Out"] },
    { ability: "Tough Claws", item: "Focus Sash", moves: ["Close Combat", "Accelerock", "Rock Slide", "Protect"] }
  ] },
  { id: "ct-44", tournament: "Champions Tour LEPE #8", players: 17, placement: 4, player: "xhooorxhi", wins: 5, losses: 2, pokemonIds: [279, 1013, 9, 212, 26, 282], pokemonNames: ["Pelipper", "Sinistcha", "Blastoise", "Scizor", "Raichu", "Gardevoir"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Hurricane", "Weather Ball", "Tailwind", "Protect"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Life Dew"] },
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Water Spout", "Aura Sphere", "Dark Pulse", "Fake Out"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "Swords Dance", "Protect"] },
    { ability: "Lightning Rod", item: "Magnet", moves: ["Thunder", "Volt Switch", "Light Screen", "Fake Out"] },
    { ability: "Synchronize", item: "Choice Scarf", moves: ["Moonblast", "Psychic", "Dazzling Gleam", "Aura Sphere"] }
  ] },
  { id: "ct-45", tournament: "Champions Tour LEPE #8", players: 17, placement: 5, player: "godey95", wins: 3, losses: 3, pokemonIds: [279, 1018, 902, 3, 302, 473], pokemonNames: ["Pelipper", "Archaludon", "Basculegion-M", "Venusaur", "Sableye", "Mamoswine"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Hurricane", "Weather Ball", "Tailwind", "Wide Guard"], teraType: "Water" },
    { ability: "Stamina", item: "Leftovers", moves: ["Protect", "Electro Shot", "Dragon Pulse", "Flash Cannon"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Aqua Jet", "Last Respects", "Flip Turn", "Wave Crash"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Giga Drain", "Earth Power", "Sludge Bomb", "Protect"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Rain Dance", "Will-O-Wisp", "Reflect", "Light Screen"] },
    { ability: "Oblivious", item: "Focus Sash", moves: ["Protect", "Icicle Spear", "Ice Shard", "High Horsepower"] }
  ] },
  { id: "ct-46", tournament: "Champions Tour LEPE #8", players: 17, placement: 6, player: "NightX", wins: 3, losses: 3, pokemonIds: [745, 350, 887, 823, 6, 670], pokemonNames: ["Lycanroc", "Milotic", "Dragapult", "Corviknight", "Charizard", "Floette"], sets: [
    { ability: "Tough Claws", item: "Focus Sash", moves: ["Accelerock", "Close Combat", "Protect", "Rock Slide"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Protect", "Icy Wind", "Scald", "Life Dew"] },
    { ability: "Clear Body", item: "Choice Scarf", moves: ["Dragon Darts", "U-turn", "Sucker Punch", "Phantom Force"] },
    { ability: "Mirror Armor", item: "Wacan Berry", moves: ["Roost", "Iron Head", "Body Press", "Tailwind"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Protect", "Scorching Sands"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Calm Mind", "Protect", "Light of Ruin", "Draining Kiss"] }
  ] },
  { id: "ct-47", tournament: "Champions Tour LEPE #8", players: 17, placement: 7, player: "Aaroncito_4", wins: 2, losses: 4, pokemonIds: [6, 670, 547, 445, 902, 983], pokemonNames: ["Charizard", "Floette", "Whimsicott", "Garchomp", "Basculegion-M", "Kingambit"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Light of Ruin", "Moonblast", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Protect", "Encore"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Dragon Claw", "Poison Jab", "Rock Slide", "Stomping Tantrum"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Aqua Jet", "Liquidation", "Last Respects", "Protect"] },
    { ability: "Defiant", item: "Occa Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Protect", "Iron Head"] }
  ] },
  { id: "ct-48", tournament: "Champions Tour LEPE #8", players: 17, placement: 8, player: "DaniSama98", wins: 1, losses: 5, pokemonIds: [902, 279, 135, 454, 9, 302], pokemonNames: ["Basculegion-M", "Pelipper", "Jolteon", "Toxicroak", "Blastoise", "Sableye"], sets: [
    { ability: "Swift Swim", item: "Mystic Water", moves: ["Last Respects", "Liquidation", "Flip Turn", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Roost", "Hurricane", "Water Pulse", "Wide Guard"] },
    { ability: "Volt Absorb", item: "Choice Scarf", moves: ["Alluring Voice", "Electroweb", "Thunder", "Volt Switch"] },
    { ability: "Dry Skin", item: "Leftovers", moves: ["Poison Jab", "Drain Punch", "Fake Out", "Protect"] },
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Ice Beam", "Water Spout", "Submission", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Rain Dance", "Fake Out", "Pain Split", "Will-O-Wisp"] }
  ] },
  { id: "ct-49", tournament: "[❄️lanakila.vg] Mobile Dawn", players: 21, placement: 1, player: "Fardeen_003X", wins: 7, losses: 1, pokemonIds: [142, 700, 784, 727, 902, 952], pokemonNames: ["Aerodactyl", "Sylveon", "Kommo-o", "Incineroar", "Basculegion-M", "Scovillain"], sets: [
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Protect", "Tailwind", "Rock Slide", "Dual Wingbeat"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Protect", "Quick Attack", "Hyper Beam", "Hyper Voice"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Protect", "Clangorous Soul", "Clanging Scales", "Aura Sphere"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Parting Shot", "Throat Chop", "Flare Blitz"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Protect", "Aqua Jet", "Liquidation", "Last Respects"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Flare Blitz", "Giga Drain", "Rage Powder", "Protect"] }
  ] },
  { id: "ct-50", tournament: "[❄️lanakila.vg] Mobile Dawn", players: 21, placement: 2, player: "SpikeShock", wins: 6, losses: 2, pokemonIds: [956, 1018, 186, 952, 670, 727], pokemonNames: ["Espathra", "Archaludon", "Politoed", "Scovillain", "Floette", "Incineroar"], sets: [
    { ability: "Speed Boost", item: "Colbur Berry", moves: ["Lumina Crash", "Calm Mind", "Baton Pass", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Muddy Water", "Psych Up", "Rain Dance", "Weather Ball"] },
    { ability: "Chlorophyll", item: "Scovillainite", moves: ["Overheat", "Leech Seed", "Rage Powder", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Light of Ruin", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Fake Out", "Taunt", "Darkest Lariat", "Parting Shot"] }
  ] },
  { id: "ct-51", tournament: "[❄️lanakila.vg] Mobile Dawn", players: 21, placement: 3, player: "BobElephant", wins: 4, losses: 3, pokemonIds: [9, 1018, 94, 445, 663, 902], pokemonNames: ["Blastoise", "Archaludon", "Gengar", "Garchomp", "Talonflame", "Basculegion-M"], sets: [
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Water Spout", "Dark Pulse", "Aura Sphere", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Dragon Pulse", "Flash Cannon", "Electro Shot", "Protect"] },
    { ability: "Cursed Body", item: "Focus Sash", moves: ["Sludge Bomb", "Icy Wind", "Rain Dance", "Taunt"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Gale Wings", item: "Mental Herb", moves: ["Brave Bird", "Tailwind", "Rain Dance", "Quick Guard"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-52", tournament: "[❄️lanakila.vg] Mobile Dawn", players: 21, placement: 4, player: "Zekkrose", wins: 5, losses: 1, pokemonIds: [763, 142, 983, 6, 670, 445], pokemonNames: ["Tsareena", "Aerodactyl", "Kingambit", "Charizard", "Floette", "Garchomp"], sets: [
    { ability: "Queenly Majesty", item: "Sitrus Berry", moves: ["Power Whip", "Triple Axel", "Low Kick", "Protect"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Moonblast", "Light of Ruin", "Protect"] },
    { ability: "Rough Skin", item: "White Herb", moves: ["Earthquake", "Stomping Tantrum", "Scale Shot", "Protect"] }
  ] },
  { id: "ct-53", tournament: "[❄️lanakila.vg] Mobile Dawn", players: 21, placement: 5, player: "sowmen13", wins: 3, losses: 3, pokemonIds: [936, 36, 637, 763, 142, 115], pokemonNames: ["Armarouge", "Clefable", "Volcarona", "Tsareena", "Aerodactyl", "Kangaskhan"], sets: [
    { ability: "Flash Fire", item: "Colbur Berry", moves: ["Wide Guard", "Armor Cannon", "Will-O-Wisp", "Psychic"] },
    { ability: "Unaware", item: "Sitrus Berry", moves: ["Moonblast", "Follow Me", "Life Dew", "Protect"] },
    { ability: "Flame Body", item: "Focus Sash", moves: ["Quiver Dance", "Giga Drain", "Bug Buzz", "Fiery Dance"] },
    { ability: "Queenly Majesty", item: "Choice Scarf", moves: ["Triple Axel", "Trop Kick", "Low Kick", "U-turn"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Tailwind", "Protect", "Rock Slide", "Dual Wingbeat"] },
    { ability: "Scrappy", item: "Silk Scarf", moves: ["Fake Out", "Last Resort"] }
  ] },
  { id: "ct-54", tournament: "[❄️lanakila.vg] Mobile Dawn", players: 21, placement: 6, player: "LMOXl", wins: 3, losses: 3, pokemonIds: [142, 6, 445, 903, 983, 670], pokemonNames: ["Aerodactyl", "Charizard", "Garchomp", "Sneasler", "Kingambit", "Floette"], sets: [
    { ability: "Unnerve", item: "Focus Sash", moves: ["Rock Slide", "Wide Guard", "Tailwind", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Weather Ball", "Heat Wave", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Stomping Tantrum", "Dragon Claw", "Rock Slide"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Feint", "Fake Out"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] }
  ] },
  { id: "ct-55", tournament: "[❄️lanakila.vg] Mobile Dawn", players: 21, placement: 7, player: "dark_minds", wins: 3, losses: 3, pokemonIds: [1018, 186, 952, 903, 149, 902], pokemonNames: ["Archaludon", "Politoed", "Scovillain", "Sneasler", "Dragonite", "Basculegion-M"], sets: [
    { ability: "Stamina", item: "Leftovers", moves: ["Protect", "Electro Shot", "Dragon Pulse", "Steel Beam"] },
    { ability: "Drizzle", item: "Mystic Water", moves: ["Protect", "Muddy Water", "Weather Ball", "Ice Beam"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Protect", "Leech Seed", "Rage Powder", "Overheat"] },
    { ability: "Poison Touch", item: "Focus Sash", moves: ["Protect", "Fake Out", "Close Combat", "Dire Claw"] },
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Protect", "Dragon Pulse", "Hurricane", "Tailwind"] },
    { ability: "Swift Swim", item: "Choice Scarf", moves: ["Aqua Jet", "Wave Crash", "Last Respects", "Flip Turn"] }
  ] },
  { id: "ct-56", tournament: "Pokemon VGC UmbreNews 16.06.2026 #19 - Champion", players: 9, placement: 1, player: "TitanoPigro3", wins: 4, losses: 1, pokemonIds: [94, 1013, 1018, 186, 727, 478], pokemonNames: ["Gengar", "Sinistcha", "Archaludon", "Politoed", "Incineroar", "Froslass"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Shadow Ball", "Sludge Bomb", "Perish Song", "Protect"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Matcha Gotcha", "Trick Room", "Rage Powder", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Hypnosis", "Perish Song", "Protect"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Flare Blitz", "Fake Out", "Parting Shot", "Protect"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Aurora Veil", "Rain Dance", "Protect"] }
  ] },
  { id: "ct-57", tournament: "Pokemon VGC UmbreNews 16.06.2026 #19 - Champion", players: 9, placement: 2, player: "yuirs_gsbx", wins: 4, losses: 1, pokemonIds: [94, 727, 1013, 1018, 478, 186], pokemonNames: ["Gengar", "Incineroar", "Sinistcha", "Archaludon", "Froslass", "Politoed"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Perish Song", "Sludge Bomb", "Shadow Ball", "Protect"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Parting Shot", "Protect", "Flare Blitz", "Fake Out"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Matcha Gotcha", "Trick Room", "Rage Powder", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Flash Cannon", "Dragon Pulse", "Protect"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Aurora Veil", "Protect", "Rain Dance"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Perish Song", "Weather Ball", "Protect", "Encore"] }
  ] },
  { id: "ct-58", tournament: "Pokemon VGC UmbreNews 16.06.2026 #19 - Champion", players: 9, placement: 3, player: "NostriX", wins: 2, losses: 2, pokemonIds: [6, 547, 248, 727, 700, 135], pokemonNames: ["Charizard", "Whimsicott", "Tyranitar", "Incineroar", "Sylveon", "Jolteon"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Protect", "Weather Ball"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Encore", "Fake Tears", "Moonblast"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Dragon Dance", "Earthquake"] },
    { ability: "Intimidate", item: "Charcoal", moves: ["Throat Chop", "Parting Shot", "Flare Blitz", "Fake Out"] },
    { ability: "Pixilate", item: "Sitrus Berry", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Mystical Fire"] },
    { ability: "Volt Absorb", item: "Scope Lens", moves: ["Thunderbolt", "Protect", "Volt Switch", "Focus Energy"] }
  ] },
  { id: "ct-59", tournament: "Pokemon VGC UmbreNews 16.06.2026 #19 - Champion", players: 9, placement: 4, player: "Karim Ediel Bustillos Juárez", wins: 2, losses: 2, pokemonIds: [903, 983, 36, 655, 184, 130], pokemonNames: ["Sneasler", "Kingambit", "Clefable", "Delphox", "Azumarill", "Gyarados"], sets: [
    { ability: "Unburden", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Swords Dance", "Kowtow Cleave", "Sucker Punch", "Protect"] },
    { ability: "Unaware", item: "Bright Powder", moves: ["Protect", "Follow Me", "Helping Hand", "Life Dew"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Protect", "Substitute", "Heat Wave", "Psychic"] },
    { ability: "Huge Power", item: "Sitrus Berry", moves: ["Protect", "Aqua Jet", "Play Rough", "Belly Drum"] },
    { ability: "Intimidate", item: "Quick Claw", moves: ["Waterfall", "Thunder Wave", "Taunt", "Helping Hand"] }
  ] },
  { id: "ct-60", tournament: "Pokemon VGC UmbreNews 16.06.2026 #19 - Champion", players: 9, placement: 5, player: "Marcko123", wins: 2, losses: 2, pokemonIds: [937, 547, 925, 475, 227, 350], pokemonNames: ["Ceruledge", "Whimsicott", "Maushold", "Gallade", "Skarmory", "Milotic"], sets: [
    { ability: "Flash Fire", item: "Choice Scarf", moves: ["Shadow Sneak", "Poltergeist", "Night Slash", "Bitter Blade"] },
    { ability: "Prankster", item: "Kebia Berry", moves: ["Tailwind", "Protect", "Moonblast", "Encore"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Protect", "Population Bomb", "Beat Up", "Follow Me"] },
    { ability: "Justified", item: "Galladite", moves: ["Psycho Cut", "Close Combat", "Wide Guard", "Protect"] },
    { ability: "Sturdy", item: "Skarmorite", moves: ["Brave Bird", "Protect", "Rock Tomb", "Iron Head"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Scald", "Ice Beam", "Protect", "Recover"] }
  ] },
  { id: "ct-61", tournament: "Pokemon VGC UmbreNews 16.06.2026 #19 - Champion", players: 9, placement: 6, player: "ReshyramVGC", wins: 2, losses: 2, pokemonIds: [697, 302, 655, 752, 823, 310], pokemonNames: ["Tyrantrum", "Sableye", "Delphox", "Araquanid", "Corviknight", "Manectric"], sets: [
    { ability: "Strong Jaw", item: "Choice Scarf", moves: ["Rock Slide", "Psychic Fangs", "Crunch", "Close Combat"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Fake Out", "Will-O-Wisp", "Light Screen", "Sunny Day"] },
    { ability: "Levitate", item: "Delphoxite", moves: ["Protect", "Heat Wave", "Psychic", "Encore"] },
    { ability: "Water Bubble", item: "Leftovers", moves: ["Wide Guard", "Lunge", "Protect", "Liquidation"] },
    { ability: "Mirror Armor", item: "Sitrus Berry", moves: ["Roost", "Tailwind", "Bulk Up", "Brave Bird"] },
    { ability: "Lightning Rod", item: "Manectite", moves: ["Protect", "Thunderbolt", "Overheat", "Snarl"] }
  ] },
  { id: "ct-62", tournament: "MMHM x Stellar Novas Tour #1", players: 18, placement: 1, player: "EchoShadow", wins: 6, losses: 1, pokemonIds: [279, 1018, 902, 302, 3, 983], pokemonNames: ["Pelipper", "Archaludon", "Basculegion-M", "Sableye", "Venusaur", "Kingambit"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Tailwind", "Weather Ball", "Hurricane", "Wide Guard"], teraType: "Water" },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"], teraType: "Steel" },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Flip Turn", "Last Respects"], teraType: "Water" },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Will-O-Wisp", "Rain Dance", "Encore", "Disable"], teraType: "Dark" },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Sludge Bomb", "Earth Power", "Giga Drain", "Protect"], teraType: "Grass" },
    { ability: "Defiant", item: "Focus Sash", moves: ["Iron Head", "Sucker Punch", "Low Kick", "Protect"], teraType: "Dark" }
  ] },
  { id: "ct-63", tournament: "MMHM x Stellar Novas Tour #1", players: 18, placement: 2, player: "Piedrer", wins: 5, losses: 2, pokemonIds: [700, 142, 902, 983, 445, 6], pokemonNames: ["Sylveon", "Aerodactyl", "Basculegion-M", "Kingambit", "Garchomp", "Charizard"], sets: [
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Detect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Wide Guard"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Stomping Tantrum", "Dragon Claw", "Rock Tomb"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] }
  ] },
  { id: "ct-64", tournament: "MMHM x Stellar Novas Tour #1", players: 18, placement: 3, player: "NiloVGC", wins: 5, losses: 1, pokemonIds: [142, 445, 700, 6, 983, 902], pokemonNames: ["Aerodactyl", "Garchomp", "Sylveon", "Charizard", "Kingambit", "Basculegion-M"], sets: [
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Wide Guard"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Rock Tomb", "Dragon Claw", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Quick Attack", "Yawn", "Detect"] },
    { ability: "Drought", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Low Kick"] },
    { ability: "Swift Swim", item: "Focus Sash", moves: ["Liquidation", "Aqua Jet", "Last Respects", "Protect"] }
  ] },
  { id: "ct-65", tournament: "MMHM x Stellar Novas Tour #1", players: 18, placement: 4, player: "DTLink", wins: 4, losses: 2, pokemonIds: [142, 903, 3, 350, 727, 1018], pokemonNames: ["Aerodactyl", "Sneasler", "Venusaur", "Milotic", "Incineroar", "Archaludon"], sets: [
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Ice Fang"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Protect", "Close Combat"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Earth Power", "Leaf Storm", "Sludge Bomb", "Protect"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Scald", "Icy Wind", "Protect", "Life Dew"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Darkest Lariat", "Flare Blitz", "Parting Shot"] },
    { ability: "Sturdy", item: "Choice Scarf", moves: ["Thunderbolt", "Flash Cannon", "Dragon Pulse", "Aura Sphere"] }
  ] },
  { id: "ct-66", tournament: "MMHM x Stellar Novas Tour #1", players: 18, placement: 5, player: "Lycopoky", wins: 3, losses: 2, pokemonIds: [530, 248, 903, 823, 10009, 1013], pokemonNames: ["Excadrill", "Tyranitar", "Sneasler", "Corviknight", "Wash Rotom", "Sinistcha"], sets: [
    { ability: "Sand Rush", item: "Focus Sash", moves: ["Rock Slide", "High Horsepower", "Iron Head", "Protect"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Dragon Dance", "Rock Slide", "Knock Off", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Coaching", "Fake Out", "Close Combat", "Dire Claw"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Bulk Up", "Iron Head", "Brave Bird", "Roost"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Will-O-Wisp", "Hydro Pump", "Thunderbolt", "Trick"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] }
  ] },
  { id: "ct-67", tournament: "MMHM x Stellar Novas Tour #1", players: 18, placement: 6, player: "carlos_012", wins: 2, losses: 2, pokemonIds: [6, 445, 981, 142, 983, 700], pokemonNames: ["Charizard", "Garchomp", "Farigiraf", "Aerodactyl", "Kingambit", "Sylveon"], sets: [
    { ability: "Drought", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Solar Beam", "Weather Ball"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Protect", "Dragon Claw", "Earthquake", "Stomping Tantrum"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Thunderbolt", "Roar", "Trick Room", "Psychic"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Tailwind", "Rock Slide", "Dual Wingbeat", "Ice Fang"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Low Kick"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Detect", "Quick Attack", "Hyper Beam", "Hyper Voice"] }
  ] },
  { id: "ct-68", tournament: "MMHM x Stellar Novas Tour #1", players: 18, placement: 7, player: "Soren G", wins: 2, losses: 2, pokemonIds: [6, 727, 700, 981, 983, 142], pokemonNames: ["Charizard", "Incineroar", "Sylveon", "Farigiraf", "Kingambit", "Aerodactyl"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Weather Ball", "Solar Beam"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Parting Shot"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Detect", "Quick Attack", "Hyper Voice", "Hyper Beam"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Twin Beam", "Thunderbolt", "Roar", "Trick Room"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Low Kick"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Ice Fang", "Tailwind"] }
  ] },
  { id: "ct-69", tournament: "MMHM x Stellar Novas Tour #1", players: 18, placement: 8, player: "puffyzero", wins: 2, losses: 2, pokemonIds: [937, 310, 448, 10103, 547, 130], pokemonNames: ["Ceruledge", "Manectric", "Lucario", "Alolan Ninetales", "Whimsicott", "Gyarados"], sets: [
    { ability: "Flash Fire", item: "Sitrus Berry", moves: ["Bitter Blade", "Shadow Sneak", "Psycho Cut", "Protect"] },
    { ability: "Lightning Rod", item: "Manectite", moves: ["Thunderbolt", "Volt Switch", "Flamethrower", "Protect"] },
    { ability: "Inner Focus", item: "Lucarionite", moves: ["Close Combat", "Meteor Mash", "Extreme Speed", "Detect"] },
    { ability: "Snow Warning", item: "Focus Sash", moves: ["Blizzard", "Moonblast", "Aurora Veil", "Protect"] },
    { ability: "Prankster", item: "Mental Herb", moves: ["Moonblast", "Protect", "Tailwind", "Encore"] },
    { ability: "Intimidate", item: "Leftovers", moves: ["Protect", "Waterfall", "Power Whip", "Dragon Dance"] }
  ] },
  { id: "ct-70", tournament: "Pokepal Smackdown #145 (Champions) (Reg M-A)", players: 25, placement: 1, player: "samurpo", wins: 4, losses: 1, pokemonIds: [670, 964, 903, 142, 983, 727], pokemonNames: ["Floette", "Palafin", "Sneasler", "Aerodactyl", "Kingambit", "Incineroar"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Zero to Hero", item: "Leftovers", moves: ["Bulk Up", "Wave Crash", "Jet Punch", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Fake Out", "Dire Claw", "Close Combat"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Protect", "Rock Slide", "Ice Fang", "Dual Wingbeat"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Protect", "Swords Dance"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Parting Shot", "Throat Chop"] }
  ] },
  { id: "ct-71", tournament: "Pokepal Smackdown #145 (Champions) (Reg M-A)", players: 25, placement: 2, player: "OhHeyItsAJ", wins: 4, losses: 1, pokemonIds: [9, 983, 248, 1013, 981, 902], pokemonNames: ["Blastoise", "Kingambit", "Tyranitar", "Sinistcha", "Farigiraf", "Basculegion-M"], sets: [
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Water Spout", "Aura Sphere", "Dark Pulse", "Fake Out"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Superpower", "Protect"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Life Dew", "Rage Powder", "Trick Room", "Matcha Gotcha"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Psychic", "Low Kick", "Trick Room", "Rain Dance"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Flip Turn", "Aqua Jet", "Last Respects"] }
  ] },
  { id: "ct-72", tournament: "Pokepal Smackdown #145 (Champions) (Reg M-A)", players: 25, placement: 3, player: "Rahzar", wins: 4, losses: 1, pokemonIds: [149, 6, 547, 445, 983, 902], pokemonNames: ["Dragonite", "Charizard", "Whimsicott", "Garchomp", "Kingambit", "Basculegion-M"], sets: [
    { ability: "Multiscale", item: "Dragoninite", moves: ["Extreme Speed", "Dragon Pulse", "Thunderbolt", "Flamethrower"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Weather Ball", "Solar Beam", "Heat Wave", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Earthquake", "Poison Jab", "Rock Slide", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] }
  ] },
  { id: "ct-73", tournament: "Pokepal Smackdown #145 (Champions) (Reg M-A)", players: 25, placement: 4, player: "Codename_Unown", wins: 4, losses: 1, pokemonIds: [395, 3, 6, 445, 727, 670], pokemonNames: ["Empoleon", "Venusaur", "Charizard", "Garchomp", "Incineroar", "Floette"], sets: [
    { ability: "Competitive", item: "Leftovers", moves: ["Protect", "Flash Cannon", "Vacuum Wave", "Hydro Pump"] },
    { ability: "Chlorophyll", item: "Focus Sash", moves: ["Protect", "Solar Beam", "Earth Power", "Sleep Powder"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Protect", "Ancient Power", "Air Slash"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Rock Slide", "Iron Head", "Dragon Claw", "Bulldoze"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Darkest Lariat", "Parting Shot", "Flare Blitz"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Moonblast", "Draining Kiss", "Calm Mind"] }
  ] },
  { id: "ct-74", tournament: "Pokepal Smackdown #145 (Champions) (Reg M-A)", players: 25, placement: 5, player: "ZKing", wins: 4, losses: 1, pokemonIds: [473, 748, 903, 635, 6, 727], pokemonNames: ["Mamoswine", "Toxapex", "Sneasler", "Hydreigon", "Charizard", "Incineroar"], sets: [
    { ability: "Oblivious", item: "Focus Sash", moves: ["Protect", "Icicle Crash", "Earthquake", "Ice Shard"] },
    { ability: "Regenerator", item: "Leftovers", moves: ["Baneful Bunker", "Infestation", "Toxic", "Wide Guard"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Close Combat", "Fake Out", "Dire Claw"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Dark Pulse", "Earth Power", "Snarl", "Draco Meteor"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Solar Beam", "Weather Ball"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Parting Shot", "Flare Blitz", "Throat Chop"] }
  ] },
  { id: "ct-75", tournament: "Pokepal Smackdown #145 (Champions) (Reg M-A)", players: 25, placement: 6, player: "2playakyle", wins: 3, losses: 2, pokemonIds: [623, 765, 903, 727, 1013, 983], pokemonNames: ["Golurk", "Oranguru", "Sneasler", "Incineroar", "Sinistcha", "Kingambit"], sets: [
    { ability: "Unseen Fist", item: "Golurkite", moves: ["Headlong Rush", "Poltergeist", "Ice Punch", "Protect"] },
    { ability: "Inner Focus", item: "Colbur Berry", moves: ["Psychic", "Instruct", "Trick Room", "Protect"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Coaching"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Throat Chop", "Flare Blitz", "Parting Shot", "Fake Out"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Trick Room"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] }
  ] },
  { id: "ct-76", tournament: "Pokepal Smackdown #145 (Champions) (Reg M-A)", players: 25, placement: 7, player: "Nate_5776", wins: 3, losses: 2, pokemonIds: [478, 983, 903, 936, 908, 745], pokemonNames: ["Froslass", "Kingambit", "Sneasler", "Armarouge", "Meowscarada", "Lycanroc"], sets: [
    { ability: "Snow Cloak", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Protect", "Aurora Veil"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Low Kick", "Sucker Punch", "Kowtow Cleave", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Flash Fire", item: "Kasib Berry", moves: ["Flamethrower", "Psychic", "Wide Guard", "Will-O-Wisp"] },
    { ability: "Protean", item: "Choice Scarf", moves: ["Flower Trick", "Throat Chop", "Triple Axel", "U-turn"] },
    { ability: "Tough Claws", item: "Focus Sash", moves: ["Accelerock", "Close Combat", "Sucker Punch", "Protect"] }
  ] },
  { id: "ct-77", tournament: "Pokepal Smackdown #145 (Champions) (Reg M-A)", players: 25, placement: 8, player: "VGCDan", wins: 3, losses: 2, pokemonIds: [6, 142, 700, 445, 983, 902], pokemonNames: ["Charizard", "Aerodactyl", "Sylveon", "Garchomp", "Kingambit", "Basculegion-M"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Protect", "Solar Beam", "Weather Ball"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Dual Wingbeat", "Protect", "Tailwind", "Rock Slide"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Protect", "Hyper Beam", "Quick Attack"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Dragon Claw", "Protect", "Earthquake", "Stomping Tantrum"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Protect", "Iron Head", "Sucker Punch"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Wave Crash", "Protect", "Aqua Jet", "Last Respects"] }
  ] },
  { id: "ct-78", tournament: "Intimidators Champions Challenge #18 REG M-A", players: 52, placement: 1, player: "Puxcci", wins: 8, losses: 1, pokemonIds: [6, 445, 142, 700, 902, 983], pokemonNames: ["Charizard", "Garchomp", "Aerodactyl", "Sylveon", "Basculegion-M", "Kingambit"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Rock Tomb", "Dragon Claw", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Wide Guard"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Quick Attack", "Yawn", "Detect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Low Kick", "Kowtow Cleave", "Sucker Punch", "Iron Head"] }
  ] },
  { id: "ct-79", tournament: "Intimidators Champions Challenge #18 REG M-A", players: 52, placement: 2, player: "BrazBR", wins: 7, losses: 2, pokemonIds: [547, 983, 902, 6, 445, 670], pokemonNames: ["Whimsicott", "Kingambit", "Basculegion-M", "Charizard", "Garchomp", "Floette"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] }
  ] },
  { id: "ct-80", tournament: "Intimidators Champions Challenge #18 REG M-A", players: 52, placement: 3, player: "NMR | Gostzin Igor Salino", wins: 7, losses: 1, pokemonIds: [748, 6, 727, 635, 473, 681], pokemonNames: ["Toxapex", "Charizard", "Incineroar", "Hydreigon", "Mamoswine", "Aegislash"], sets: [
    { ability: "Regenerator", item: "Leftovers", moves: ["Toxic", "Infestation", "Baneful Bunker", "Wide Guard"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Solar Beam", "Weather Ball", "Heat Wave", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Parting Shot", "Flare Blitz", "Throat Chop"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Snarl", "Draco Meteor", "Dark Pulse", "Heat Wave"] },
    { ability: "Oblivious", item: "Focus Sash", moves: ["Earthquake", "Icicle Crash", "Protect", "Ice Shard"] },
    { ability: "Stance Change", item: "Spell Tag", moves: ["Close Combat", "Shadow Sneak", "King's Shield", "Poltergeist"] }
  ] },
  { id: "ct-81", tournament: "Intimidators Champions Challenge #18 REG M-A", players: 52, placement: 4, player: "NMR | Tom Baldwin", wins: 6, losses: 2, pokemonIds: [478, 952, 902, 983, 903, 745], pokemonNames: ["Froslass", "Scovillain", "Basculegion-M", "Kingambit", "Sneasler", "Lycanroc"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Overheat", "Giga Drain", "Rage Powder", "Protect"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Tough Claws", item: "Focus Sash", moves: ["Rock Slide", "Close Combat", "Accelerock", "Protect"] }
  ] },
  { id: "ct-82", tournament: "Intimidators Champions Challenge #18 REG M-A", players: 52, placement: 5, player: "JohnIgor69", wins: 5, losses: 2, pokemonIds: [248, 445, 478, 823, 635, 5059], pokemonNames: ["Tyranitar", "Garchomp", "Froslass", "Corviknight", "Hydreigon", "Hisuian Arcanine"], sets: [
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Low Kick", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Rock Slide", "Dragon Claw", "Earthquake", "Protect"] },
    { ability: "Snow Cloak", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Weather Ball", "Protect"] },
    { ability: "Mirror Armor", item: "Occa Berry", moves: ["Brave Bird", "Iron Head", "Tailwind", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Snarl", "Dark Pulse", "Earth Power", "Draco Meteor"] },
    { ability: "Intimidate", item: "Focus Sash", moves: ["Head Smash", "Flare Blitz", "Extreme Speed", "Protect"] }
  ] },
  { id: "ct-83", tournament: "Intimidators Champions Challenge #18 REG M-A", players: 52, placement: 6, player: "Eduardo_Leite", wins: 5, losses: 2, pokemonIds: [310, 279, 1018, 212, 964, 1013], pokemonNames: ["Manectric", "Pelipper", "Archaludon", "Scizor", "Palafin", "Sinistcha"], sets: [
    { ability: "Lightning Rod", item: "Manectite", moves: ["Snarl", "Protect", "Thunderbolt", "Volt Switch"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Weather Ball", "Protect", "Tailwind"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Snarl", "Flash Cannon", "Dragon Pulse"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Protect", "Dual Wingbeat", "Bug Bite"] },
    { ability: "Zero to Hero", item: "Mystic Water", moves: ["Protect", "Wave Crash", "Flip Turn", "Jet Punch"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Rage Powder", "Trick Room", "Matcha Gotcha", "Life Dew"] }
  ] },
  { id: "ct-84", tournament: "Intimidators Champions Challenge #18 REG M-A", players: 52, placement: 7, player: "Bonis", wins: 4, losses: 3, pokemonIds: [6, 902, 445, 547, 981, 3], pokemonNames: ["Charizard", "Basculegion-M", "Garchomp", "Whimsicott", "Farigiraf", "Venusaur"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Ice Fang"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Stomping Tantrum", "Rock Slide", "Poison Jab"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Sunny Day", "Moonblast", "Protect"] },
    { ability: "Armor Tail", item: "Quick Claw", moves: ["Trick Room", "Imprison", "Protect", "Psychic"] },
    { ability: "Chlorophyll", item: "Occa Berry", moves: ["Earth Power", "Giga Drain", "Sludge Bomb", "Protect"] }
  ] },
  { id: "ct-85", tournament: "Intimidators Champions Challenge #18 REG M-A", players: 52, placement: 8, player: "lucardrgs", wins: 4, losses: 3, pokemonIds: [903, 983, 6, 670, 727, 1013], pokemonNames: ["Sneasler", "Kingambit", "Charizard", "Floette", "Incineroar", "Sinistcha"], sets: [
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Coaching", "Fake Out"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Blaze", item: "Charizardite X", moves: ["Flare Blitz", "Dragon Claw", "Dragon Dance", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Fake Out", "Parting Shot", "Will-O-Wisp"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Trick Room", "Rage Powder", "Protect"] }
  ] },
  { id: "ct-86", tournament: "FlorTour Vol. 69 - $69 cash prize!!", players: 51, placement: 1, player: "Fluffy_m1n", wins: 8, losses: 1, pokemonIds: [154, 142, 981, 902, 983, 903], pokemonNames: ["Meganium", "Aerodactyl", "Farigiraf", "Basculegion-M", "Kingambit", "Sneasler"], sets: [
    { ability: "Leaf Guard", item: "Meganiumite", moves: ["Solar Beam", "Dazzling Gleam", "Weather Ball", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Wide Guard"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Twin Beam", "Helping Hand", "Trick Room", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] }
  ] },
  { id: "ct-87", tournament: "FlorTour Vol. 69 - $69 cash prize!!", players: 51, placement: 2, player: "KST | KAMPFI ", wins: 7, losses: 2, pokemonIds: [670, 142, 445, 903, 727, 1013], pokemonNames: ["Floette", "Aerodactyl", "Garchomp", "Sneasler", "Incineroar", "Sinistcha"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Wide Guard"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Dragon Claw", "Stomping Tantrum", "Protect", "Rock Slide"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Dire Claw", "Close Combat", "Coaching", "Fake Out"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Throat Chop", "Flare Blitz", "Fake Out", "Parting Shot"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Trick Room"] }
  ] },
  { id: "ct-88", tournament: "FlorTour Vol. 69 - $69 cash prize!!", players: 51, placement: 3, player: "jiholee32", wins: 7, losses: 1, pokemonIds: [6, 142, 700, 902, 983, 445], pokemonNames: ["Charizard", "Aerodactyl", "Sylveon", "Basculegion-M", "Kingambit", "Garchomp"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Wide Guard"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Quick Attack", "Detect", "Hyper Beam"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Stomping Tantrum", "Rock Slide", "Dragon Claw", "Protect"] }
  ] },
  { id: "ct-89", tournament: "FlorTour Vol. 69 - $69 cash prize!!", players: 51, placement: 4, player: "Altkyle", wins: 6, losses: 2, pokemonIds: [149, 902, 212, 1018, 279, 727], pokemonNames: ["Dragonite", "Basculegion-M", "Scizor", "Archaludon", "Pelipper", "Incineroar"], sets: [
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Dragon Pulse", "Flamethrower", "Tailwind", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Close Combat", "Swords Dance", "Protect"] },
    { ability: "Stamina", item: "Chople Berry", moves: ["Electro Shot", "Dragon Pulse", "Aura Sphere", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Weather Ball", "Tailwind", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] }
  ] },
  { id: "ct-90", tournament: "FlorTour Vol. 69 - $69 cash prize!!", players: 51, placement: 5, player: "almondspy", wins: 5, losses: 2, pokemonIds: [149, 727, 748, 1013, 670, 903], pokemonNames: ["Dragonite", "Incineroar", "Toxapex", "Sinistcha", "Floette", "Sneasler"], sets: [
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Thunderbolt", "Heat Wave", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Regenerator", item: "Leftovers", moves: ["Toxic", "Infestation", "Recover", "Baneful Bunker"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Poison Touch", item: "Focus Sash", moves: ["Close Combat", "Poison Jab", "Fake Out", "Throat Chop"] }
  ] },
  { id: "ct-91", tournament: "FlorTour Vol. 69 - $69 cash prize!!", players: 51, placement: 6, player: "TheGameDex", wins: 5, losses: 2, pokemonIds: [6, 700, 983, 902, 445, 142], pokemonNames: ["Charizard", "Sylveon", "Kingambit", "Basculegion-M", "Garchomp", "Aerodactyl"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Detect", "Hyper Voice", "Yawn", "Quick Attack"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Low Kick", "Iron Head"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Protect", "Last Respects", "Aqua Jet", "Liquidation"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Rock Tomb", "Earthquake", "Dragon Claw", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Tailwind", "Dual Wingbeat", "Rock Slide", "Wide Guard"] }
  ] },
  { id: "ct-92", tournament: "FlorTour Vol. 69 - $69 cash prize!!", players: 51, placement: 7, player: "Z2R Queiroz", wins: 5, losses: 2, pokemonIds: [142, 1018, 902, 279, 952, 903], pokemonNames: ["Aerodactyl", "Archaludon", "Basculegion-M", "Pelipper", "Scovillain", "Sneasler"], sets: [
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Protect", "Dual Wingbeat", "Wide Guard", "Rock Slide"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Protect", "Dragon Pulse", "Flash Cannon", "Electro Shot"] },
    { ability: "Swift Swim", item: "Mystic Water", moves: ["Protect", "Last Respects", "Aqua Jet", "Wave Crash"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Protect", "Tailwind", "Weather Ball", "Hurricane"] },
    { ability: "Chlorophyll", item: "Scovillainite", moves: ["Protect", "Leech Seed", "Rage Powder", "Overheat"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Close Combat", "Fake Out", "U-turn", "Dire Claw"] }
  ] },
  { id: "ct-93", tournament: "FlorTour Vol. 69 - $69 cash prize!!", players: 51, placement: 8, player: "Gabuu", wins: 5, losses: 2, pokemonIds: [9, 1013, 727, 666, 445, 670], pokemonNames: ["Blastoise", "Sinistcha", "Incineroar", "Vivillon", "Garchomp", "Floette"], sets: [
    { ability: "Torrent", item: "Blastoisinite", moves: ["Protect", "Water Spout", "Dark Pulse", "Shell Smash"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Protect", "Matcha Gotcha", "Rage Powder", "Life Dew"] },
    { ability: "Intimidate", item: "Leftovers", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] },
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Protect", "Hurricane", "Sleep Powder", "Tailwind"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Scale Shot", "Stomping Tantrum", "Rock Slide", "Poison Jab"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Moonblast", "Dazzling Gleam", "Calm Mind"] }
  ] },
  { id: "ct-94", tournament: "Palafin Pals Jet Punch Series Champions M-A", players: 12, placement: 1, player: "PokeReplay", wins: 6, losses: 0, pokemonIds: [1013, 727, 350, 903, 670, 937], pokemonNames: ["Sinistcha", "Incineroar", "Milotic", "Sneasler", "Floette", "Ceruledge"], sets: [
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Protect", "Rage Powder", "Matcha Gotcha", "Life Dew"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Throat Chop", "Flare Blitz", "Parting Shot"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Coil", "Muddy Water", "Hypnosis", "Protect"] },
    { ability: "Poison Touch", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Throat Chop"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Draining Kiss", "Calm Mind", "Dazzling Gleam"] },
    { ability: "Flash Fire", item: "Colbur Berry", moves: ["Bulk Up", "Protect", "Shadow Sneak", "Bitter Blade"] }
  ] },
  { id: "ct-95", tournament: "Palafin Pals Jet Punch Series Champions M-A", players: 12, placement: 2, player: "othunder21", wins: 4, losses: 2, pokemonIds: [655, 670, 727, 903, 983, 981], pokemonNames: ["Delphox", "Floette", "Incineroar", "Sneasler", "Kingambit", "Farigiraf"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Nasty Plot", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Darkest Lariat", "Parting Shot"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Twin Beam", "Thunderbolt", "Trick Room", "Helping Hand"] }
  ] },
  { id: "ct-96", tournament: "Palafin Pals Jet Punch Series Champions M-A", players: 12, placement: 3, player: "rJord", wins: 3, losses: 2, pokemonIds: [6, 445, 670, 1013, 3, 727], pokemonNames: ["Charizard", "Garchomp", "Floette", "Sinistcha", "Venusaur", "Incineroar"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Solar Beam", "Weather Ball"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Stomping Tantrum", "Dragon Claw", "Earthquake", "Rock Slide"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Calm Mind", "Draining Kiss", "Moonblast"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Protect", "Trick Room", "Matcha Gotcha", "Rage Powder"] },
    { ability: "Chlorophyll", item: "Focus Sash", moves: ["Protect", "Sludge Bomb", "Earth Power", "Sleep Powder"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Parting Shot", "Throat Chop", "Flare Blitz"] }
  ] },
  { id: "ct-97", tournament: "Palafin Pals Jet Punch Series Champions M-A", players: 12, placement: 4, player: "fazztr", wins: 3, losses: 2, pokemonIds: [3, 1018, 186, 902, 142, 635], pokemonNames: ["Venusaur", "Archaludon", "Politoed", "Basculegion-M", "Aerodactyl", "Hydreigon"], sets: [
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Sludge Bomb", "Giga Drain", "Earth Power", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Draco Meteor", "Flash Cannon", "Protect"] },
    { ability: "Drizzle", item: "Choice Scarf", moves: ["Weather Ball", "Surf", "Ice Beam", "Icy Wind"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Protect", "Aqua Jet", "Last Respects"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Dual Wingbeat", "Rock Slide", "Tailwind", "Protect"] },
    { ability: "Levitate", item: "Haban Berry", moves: ["Dark Pulse", "Draco Meteor", "Flamethrower", "Protect"] }
  ] },
  { id: "ct-98", tournament: "Palafin Pals Jet Punch Series Champions M-A", players: 12, placement: 5, player: "thenightsnexus", wins: 2, losses: 2, pokemonIds: [745, 902, 983, 903, 478, 655], pokemonNames: ["Lycanroc", "Basculegion-M", "Kingambit", "Sneasler", "Froslass", "Delphox"], sets: [
    { ability: "Tough Claws", item: "Focus Sash", moves: ["Close Combat", "Accelerock", "Psychic Fangs", "Protect"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Gunk Shot", "Coaching", "Fake Out"] },
    { ability: "Snow Cloak", item: "Froslassite", moves: ["Blizzard", "Aurora Veil", "Shadow Ball", "Protect"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Protect", "Psychic", "Nasty Plot"] }
  ] },
  { id: "ct-99", tournament: "Palafin Pals Jet Punch Series Champions M-A", players: 12, placement: 6, player: "Josecovi", wins: 2, losses: 2, pokemonIds: [670, 903, 727, 6, 956, 902], pokemonNames: ["Floette", "Sneasler", "Incineroar", "Charizard", "Espathra", "Basculegion-M"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Calm Mind", "Protect", "Dazzling Gleam"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Close Combat", "Dire Claw", "Fake Out"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Parting Shot", "Fake Out", "Flare Blitz", "Throat Chop"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Weather Ball", "Solar Beam"] },
    { ability: "Speed Boost", item: "Colbur Berry", moves: ["Protect", "Dazzling Gleam", "Lumina Crash", "Skill Swap"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Protect", "Aqua Jet", "Last Respects", "Liquidation"] }
  ] },
  { id: "ct-100", tournament: "Palafin Pals Jet Punch Series Champions M-A", players: 12, placement: 7, player: "Caselastic", wins: 2, losses: 2, pokemonIds: [1013, 248, 981, 740, 700, 727], pokemonNames: ["Sinistcha", "Tyranitar", "Farigiraf", "Crabominable", "Sylveon", "Incineroar"], sets: [
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Rage Powder", "Shadow Ball", "Matcha Gotcha", "Trick Room"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Protect", "Low Kick"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Trick Room", "Protect", "Helping Hand", "Twin Beam"] },
    { ability: "Hyper Cutter", item: "Crabominite", moves: ["Drain Punch", "Protect", "Mach Punch", "Ice Hammer"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Protect", "Calm Mind", "Mystical Fire"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Parting Shot", "Fake Out", "Throat Chop", "Flare Blitz"] }
  ] },
  { id: "ct-101", tournament: "Palafin Pals Jet Punch Series Champions M-A", players: 12, placement: 8, player: "J4MBLERVGC", wins: 1, losses: 3, pokemonIds: [478, 5059, 445, 142, 983, 350], pokemonNames: ["Froslass", "Hisuian Arcanine", "Garchomp", "Aerodactyl", "Kingambit", "Milotic"], sets: [
    { ability: "Snow Warning", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Rock Head", item: "Focus Sash", moves: ["Head Smash", "Flare Blitz", "Protect", "Extreme Speed"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Tough Claws", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Protect", "Tailwind"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Sucker Punch", "Kowtow Cleave", "Iron Head"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Icy Wind", "Scald", "Life Dew", "Protect"] }
  ] },
  { id: "ct-102", tournament: "Sketch Academy Pride Month x MMHM Qualifier 2", players: 46, placement: 1, player: "joniaco", wins: 7, losses: 2, pokemonIds: [478, 952, 902, 983, 903, 745], pokemonNames: ["Froslass", "Scovillain", "Basculegion-M", "Kingambit", "Sneasler", "Lycanroc"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Giga Drain", "Overheat", "Rage Powder", "Protect"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Gunk Shot", "Protect", "Fake Out"] },
    { ability: "Tough Claws", item: "Focus Sash", moves: ["Close Combat", "Accelerock", "Rock Slide", "Protect"] }
  ] },
  { id: "ct-103", tournament: "Sketch Academy Pride Month x MMHM Qualifier 2", players: 46, placement: 2, player: "PapaRott", wins: 6, losses: 3, pokemonIds: [149, 925, 279, 1018, 212, 902], pokemonNames: ["Dragonite", "Maushold", "Pelipper", "Archaludon", "Scizor", "Basculegion-M"], sets: [
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Hurricane", "Weather Ball", "Dragon Pulse", "Protect"] },
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Protect", "Super Fang", "Rain Dance", "Follow Me"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Wide Guard", "Weather Ball", "Hurricane", "Tailwind"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Dragon Pulse", "Electro Shot", "Flash Cannon", "Protect"] },
    { ability: "Technician", item: "Scizorite", moves: ["Protect", "Bullet Punch", "Close Combat", "Swords Dance"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Aqua Jet", "Wave Crash", "Flip Turn", "Last Respects"] }
  ] },
  { id: "ct-104", tournament: "Sketch Academy Pride Month x MMHM Qualifier 2", players: 46, placement: 3, player: "N8_dawgg", wins: 6, losses: 2, pokemonIds: [478, 964, 903, 983, 10009, 142], pokemonNames: ["Froslass", "Palafin", "Sneasler", "Kingambit", "Wash Rotom", "Aerodactyl"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Nasty Plot", "Protect"] },
    { ability: "Zero to Hero", item: "Mystic Water", moves: ["Wave Crash", "Jet Punch", "Bulk Up", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Gunk Shot", "Coaching"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Levitate", item: "Leftovers", moves: ["Electroweb", "Thunderbolt", "Will-O-Wisp", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] }
  ] },
  { id: "ct-105", tournament: "Sketch Academy Pride Month x MMHM Qualifier 2", players: 46, placement: 4, player: "QueerCrocodile", wins: 5, losses: 3, pokemonIds: [670, 547, 5059, 902, 983, 1018], pokemonNames: ["Floette", "Whimsicott", "Hisuian Arcanine", "Basculegion-M", "Kingambit", "Archaludon"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"] },
    { ability: "Rock Head", item: "Sitrus Berry", moves: ["Rock Slide", "Flare Blitz", "Extreme Speed", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Sturdy", item: "White Herb", moves: ["Aura Sphere", "Draco Meteor", "Flash Cannon", "Protect"] }
  ] },
  { id: "ct-106", tournament: "Sketch Academy Pride Month x MMHM Qualifier 2", players: 46, placement: 5, player: "SuperDialga", wins: 6, losses: 1, pokemonIds: [670, 547, 902, 983, 1018, 5059], pokemonNames: ["Floette", "Whimsicott", "Basculegion-M", "Kingambit", "Archaludon", "Hisuian Arcanine"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Flip Turn"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Protect"] },
    { ability: "Sturdy", item: "White Herb", moves: ["Draco Meteor", "Flash Cannon", "Aura Sphere", "Protect"] },
    { ability: "Rock Head", item: "Sitrus Berry", moves: ["Flare Blitz", "Rock Slide", "Extreme Speed", "Protect"] }
  ] },
  { id: "ct-107", tournament: "Sketch Academy Pride Month x MMHM Qualifier 2", players: 46, placement: 6, player: "BrazBR", wins: 5, losses: 2, pokemonIds: [547, 983, 902, 6, 445, 670], pokemonNames: ["Whimsicott", "Kingambit", "Basculegion-M", "Charizard", "Garchomp", "Floette"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] }
  ] },
  { id: "ct-108", tournament: "Sketch Academy Pride Month x MMHM Qualifier 2", players: 46, placement: 7, player: "jiholee32", wins: 5, losses: 2, pokemonIds: [6, 142, 700, 902, 983, 445], pokemonNames: ["Charizard", "Aerodactyl", "Sylveon", "Basculegion-M", "Kingambit", "Garchomp"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Wide Guard"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Quick Attack", "Detect", "Hyper Beam"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Stomping Tantrum", "Rock Slide", "Dragon Claw", "Protect"] }
  ] },
  { id: "ct-109", tournament: "Sketch Academy Pride Month x MMHM Qualifier 2", players: 46, placement: 8, player: "Master_800", wins: 4, losses: 3, pokemonIds: [115, 547, 6, 983, 445, 902], pokemonNames: ["Kangaskhan", "Whimsicott", "Charizard", "Kingambit", "Garchomp", "Basculegion-M"], sets: [
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Fake Out", "Double-Edge", "Ice Punch", "Low Kick"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Protect", "Encore"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Tomb", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Protect", "Last Respects", "Aqua Jet", "Wave Crash"] }
  ] },
  { id: "ct-110", tournament: "MMHM X CHAOS LEAGUE QUALIFIER #2", players: 34, placement: 1, player: "Pro4tomico", wins: 7, losses: 1, pokemonIds: [903, 902, 983, 478, 952, 745], pokemonNames: ["Sneasler", "Basculegion-M", "Kingambit", "Froslass", "Scovillain", "Lycanroc"], sets: [
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Swords Dance", "Protect"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Aurora Veil", "Shadow Ball", "Protect"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Giga Drain", "Overheat", "Protect", "Rage Powder"] },
    { ability: "Tough Claws", item: "Focus Sash", moves: ["Accelerock", "Close Combat", "Rock Slide", "Protect"] }
  ] },
  { id: "ct-111", tournament: "MMHM X CHAOS LEAGUE QUALIFIER #2", players: 34, placement: 2, player: "almondspy", wins: 7, losses: 1, pokemonIds: [149, 727, 748, 1013, 670, 903], pokemonNames: ["Dragonite", "Incineroar", "Toxapex", "Sinistcha", "Floette", "Sneasler"], sets: [
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Thunderbolt", "Heat Wave", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Regenerator", item: "Leftovers", moves: ["Toxic", "Infestation", "Recover", "Baneful Bunker"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Poison Touch", item: "Focus Sash", moves: ["Close Combat", "Poison Jab", "Fake Out", "Throat Chop"] }
  ] },
  { id: "ct-112", tournament: "MMHM X CHAOS LEAGUE QUALIFIER #2", players: 34, placement: 3, player: "jay49", wins: 5, losses: 2, pokemonIds: [248, 635, 530, 823, 10009, 778], pokemonNames: ["Tyranitar", "Hydreigon", "Excadrill", "Corviknight", "Wash Rotom", "Mimikyu"], sets: [
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Protect", "Knock Off", "Rock Slide", "Low Kick"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Draco Meteor", "Dark Pulse", "Snarl", "Flamethrower"] },
    { ability: "Sand Rush", item: "Focus Sash", moves: ["Iron Head", "High Horsepower", "Earthquake", "Protect"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Brave Bird", "Bulk Up", "Tailwind", "Roost"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Thunderbolt", "Hydro Pump", "Will-O-Wisp", "Protect"] },
    { ability: "Disguise", item: "White Herb", moves: ["Play Rough", "Shadow Claw", "Shadow Sneak", "Protect"] }
  ] },
  { id: "ct-113", tournament: "MMHM X CHAOS LEAGUE QUALIFIER #2", players: 34, placement: 4, player: "JohnStarr", wins: 5, losses: 2, pokemonIds: [1018, 186, 952, 903, 149, 956], pokemonNames: ["Archaludon", "Politoed", "Scovillain", "Sneasler", "Dragonite", "Espathra"], sets: [
    { ability: "Stamina", item: "Leftovers", moves: ["Protect", "Electro Shot", "Dragon Pulse", "Flash Cannon"] },
    { ability: "Drizzle", item: "Mystic Water", moves: ["Protect", "Muddy Water", "Weather Ball", "Ice Beam"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Protect", "Leech Seed", "Rage Powder", "Overheat"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Protect", "Close Combat", "Fake Out", "Dire Claw"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Protect", "Dragon Pulse", "Hurricane", "Extreme Speed"] },
    { ability: "Speed Boost", item: "Sitrus Berry", moves: ["Protect", "Lumina Crash", "Calm Mind", "Baton Pass"] }
  ] },
  { id: "ct-114", tournament: "MMHM X CHAOS LEAGUE QUALIFIER #2", players: 34, placement: 5, player: "MaxxUpgrade", wins: 4, losses: 2, pokemonIds: [6, 981, 983, 727, 3, 445], pokemonNames: ["Charizard", "Farigiraf", "Kingambit", "Incineroar", "Venusaur", "Garchomp"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Weather Ball", "Heat Wave", "Solar Beam", "Protect"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Twin Beam", "Thunderbolt", "Trick Room", "Helping Hand"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Low Kick"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Throat Chop", "Flare Blitz", "Fake Out", "Parting Shot"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Sludge Bomb", "Earth Power", "Sleep Powder", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Rock Tomb"] }
  ] },
  { id: "ct-115", tournament: "MMHM X CHAOS LEAGUE QUALIFIER #2", players: 34, placement: 6, player: "DaveyOnAddy", wins: 3, losses: 3, pokemonIds: [279, 1018, 212, 903, 902, 149], pokemonNames: ["Pelipper", "Archaludon", "Scizor", "Sneasler", "Basculegion-M", "Dragonite"], sets: [
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Tailwind", "Weather Ball", "Soak"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Protect", "Electro Shot", "Dragon Pulse", "Flash Cannon"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Protect", "Swords Dance", "Bug Bite"] },
    { ability: "Unburden", item: "White Herb", moves: ["Rock Slide", "Dire Claw", "Close Combat", "Fake Out"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Protect", "Dragon Pulse", "Thunderbolt", "Tailwind"] }
  ] },
  { id: "ct-116", tournament: "MMHM X CHAOS LEAGUE QUALIFIER #2", players: 34, placement: 7, player: "MuBu", wins: 3, losses: 3, pokemonIds: [778, 248, 823, 530, 10009, 635], pokemonNames: ["Mimikyu", "Tyranitar", "Corviknight", "Excadrill", "Wash Rotom", "Hydreigon"], sets: [
    { ability: "Disguise", item: "Spell Tag", moves: ["Play Rough", "Protect", "Shadow Claw", "Shadow Sneak"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Low Kick", "Dragon Dance", "Protect"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Brave Bird", "Taunt", "U-turn", "Roost"] },
    { ability: "Sand Rush", item: "Focus Sash", moves: ["Earthquake", "Rock Slide", "Iron Head", "Protect"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Volt Switch", "Will-O-Wisp", "Hydro Pump", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Draco Meteor", "Flamethrower", "Earth Power", "Dark Pulse"] }
  ] },
  { id: "ct-117", tournament: "MMHM X CHAOS LEAGUE QUALIFIER #2", players: 34, placement: 8, player: "Ryuzaki26", wins: 3, losses: 3, pokemonIds: [324, 1013, 765, 780, 475, 959], pokemonNames: ["Torkoal", "Sinistcha", "Oranguru", "Drampa", "Gallade", "Tinkaton"], sets: [
    { ability: "Drought", item: "Charcoal", moves: ["Protect", "Eruption", "Heat Wave", "Solar Beam"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Trick Room"] },
    { ability: "Inner Focus", item: "Colbur Berry", moves: ["Foul Play", "Trick Room", "Psychic", "Instruct"] },
    { ability: "Cloud Nine", item: "Drampanite", moves: ["Protect", "Hyper Voice", "Earth Power", "Calm Mind"] },
    { ability: "Sharpness", item: "Scope Lens", moves: ["Psycho Cut", "Sacred Sword", "Wide Guard", "Leaf Blade"] },
    { ability: "Mold Breaker", item: "Metal Coat", moves: ["Fake Out", "Play Rough", "Gigaton Hammer", "Protect"] }
  ] },
  { id: "ct-118", tournament: "★ Need PKPs? Champions Tournament ★", players: 11, placement: 1, player: "DarkTacoVGC", wins: 4, losses: 2, pokemonIds: [445, 130, 983, 903, 547, 227], pokemonNames: ["Garchomp", "Gyarados", "Kingambit", "Sneasler", "Whimsicott", "Skarmory"], sets: [
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Protect", "Dragon Claw", "Earthquake", "Rock Slide"] },
    { ability: "Intimidate", item: "Gyaradosite", moves: ["Protect", "Dragon Dance", "Waterfall", "Lash Out"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Protect", "Sucker Punch", "Kowtow Cleave", "Swords Dance"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Fake Out", "Coaching", "Close Combat", "Dire Claw"] },
    { ability: "Prankster", item: "Coba Berry", moves: ["Protect", "Tailwind", "Encore", "Moonblast"] },
    { ability: "Sturdy", item: "Skarmorite", moves: ["Protect", "Rock Tomb", "Iron Head", "Brave Bird"] }
  ] },
  { id: "ct-119", tournament: "★ Need PKPs? Champions Tournament ★", players: 11, placement: 2, player: "RobinKaos", wins: 5, losses: 1, pokemonIds: [745, 478, 902, 952, 903, 983], pokemonNames: ["Lycanroc", "Froslass", "Basculegion-M", "Scovillain", "Sneasler", "Kingambit"], sets: [
    { ability: "Tough Claws", item: "Focus Sash", moves: ["Protect", "Rock Slide", "Close Combat", "Accelerock"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Protect", "Blizzard", "Shadow Ball", "Aurora Veil"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Protect", "Wave Crash", "Last Respects", "Aqua Jet"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Protect", "Overheat", "Giga Drain", "Rage Powder"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Close Combat", "Gunk Shot", "Fake Out"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Protect", "Kowtow Cleave", "Sucker Punch", "Swords Dance"] }
  ] },
  { id: "ct-120", tournament: "★ Need PKPs? Champions Tournament ★", players: 11, placement: 3, player: "Spinarak167", wins: 3, losses: 2, pokemonIds: [142, 6, 445, 700, 902, 168], pokemonNames: ["Aerodactyl", "Charizard", "Garchomp", "Sylveon", "Basculegion-M", "Ariados"], sets: [
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Stomping Tantrum", "Dragon Claw", "Rock Slide"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Quick Attack", "Hyper Beam", "Detect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Insomnia", item: "Sitrus Berry", moves: ["Knock Off", "String Shot", "Rage Powder", "Protect"] }
  ] },
  { id: "ct-121", tournament: "★ Need PKPs? Champions Tournament ★", players: 11, placement: 4, player: "Charmoffense", wins: 2, losses: 3, pokemonIds: [142, 902, 1018, 279, 727, 212], pokemonNames: ["Aerodactyl", "Basculegion-M", "Archaludon", "Pelipper", "Incineroar", "Scizor"], sets: [
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Tailwind", "Aerial Ace", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Flip Turn", "Wave Crash", "Aqua Jet", "Last Respects"] },
    { ability: "Stamina", item: "Chople Berry", moves: ["Protect", "Electro Shot", "Aura Sphere", "Dragon Pulse"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Weather Ball", "Tailwind", "Protect", "Hurricane"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Parting Shot", "Throat Chop"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Close Combat", "Protect", "Swords Dance"] }
  ] },
  { id: "ct-122", tournament: "★ Need PKPs? Champions Tournament ★", players: 11, placement: 5, player: "pontusvgc", wins: 2, losses: 2, pokemonIds: [6, 670, 445, 983, 902, 547], pokemonNames: ["Charizard", "Floette", "Garchomp", "Kingambit", "Basculegion-M", "Whimsicott"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"] },
    { ability: "Defiant", item: "Occa Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] }
  ] },
  { id: "ct-123", tournament: "★ Need PKPs? Champions Tournament ★", players: 11, placement: 6, player: "PokeReplay", wins: 2, losses: 2, pokemonIds: [1013, 727, 350, 903, 670, 937], pokemonNames: ["Sinistcha", "Incineroar", "Milotic", "Sneasler", "Floette", "Ceruledge"], sets: [
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Protect", "Rage Powder", "Matcha Gotcha", "Life Dew"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Throat Chop", "Flare Blitz", "Parting Shot"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Coil", "Muddy Water", "Hypnosis", "Protect"] },
    { ability: "Poison Touch", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Throat Chop"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Draining Kiss", "Calm Mind", "Dazzling Gleam"] },
    { ability: "Flash Fire", item: "Colbur Berry", moves: ["Bulk Up", "Protect", "Shadow Sneak", "Bitter Blade"] }
  ] },
  { id: "ct-124", tournament: "★ Need PKPs? Champions Tournament ★", players: 11, placement: 7, player: "thepostmanp", wins: 1, losses: 3, pokemonIds: [727, 670, 1013, 6, 983, 903], pokemonNames: ["Incineroar", "Floette", "Sinistcha", "Charizard", "Kingambit", "Sneasler"], sets: [
    { ability: "Intimidate", item: "Leftovers", moves: ["Throat Chop", "Fake Out", "Flare Blitz", "Parting Shot"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Draining Kiss", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Blaze", item: "Charizardite X", moves: ["Breaking Swipe", "Flare Blitz", "Dragon Dance", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Protect", "Iron Head"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Coaching"] }
  ] },
  { id: "ct-125", tournament: "★ Need PKPs? Champions Tournament ★", players: 11, placement: 8, player: "emanuele12340", wins: 1, losses: 3, pokemonIds: [902, 445, 983, 700, 142, 6], pokemonNames: ["Basculegion-M", "Garchomp", "Kingambit", "Sylveon", "Aerodactyl", "Charizard"], sets: [
    { ability: "Adaptability", item: "Focus Sash", moves: ["Protect", "Last Respects", "Aqua Jet", "Liquidation"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Rock Tomb", "Earthquake", "Dragon Claw", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Low Kick", "Iron Head"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Detect", "Yawn", "Hyper Voice", "Quick Attack"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Tailwind", "Dual Wingbeat", "Rock Slide", "Wide Guard"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Weather Ball", "Heat Wave", "Solar Beam"] }
  ] },
  { id: "ct-126", tournament: "VGCA Battle Hall: Academy Ace Edition #3", players: 11, placement: 1, player: "rickinch", wins: 5, losses: 1, pokemonIds: [478, 952, 745, 983, 903, 902], pokemonNames: ["Froslass", "Scovillain", "Lycanroc", "Kingambit", "Sneasler", "Basculegion-M"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Substitute", "Protect"] },
    { ability: "Insomnia", item: "Scovillainite", moves: ["Overheat", "Leech Seed", "Rage Powder", "Protect"] },
    { ability: "Tough Claws", item: "Focus Sash", moves: ["Rock Slide", "Close Combat", "Accelerock", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Flip Turn", "Wave Crash", "Aqua Jet", "Last Respects"] }
  ] },
  { id: "ct-127", tournament: "VGCA Battle Hall: Academy Ace Edition #3", players: 11, placement: 2, player: "BHelixB", wins: 4, losses: 2, pokemonIds: [5059, 547, 903, 445, 983, 478], pokemonNames: ["Hisuian Arcanine", "Whimsicott", "Sneasler", "Garchomp", "Kingambit", "Froslass"], sets: [
    { ability: "Rock Head", item: "Focus Sash", moves: ["Flare Blitz", "Rock Slide", "Extreme Speed", "Protect"] },
    { ability: "Prankster", item: "Occa Berry", moves: ["Protect", "Encore", "Tailwind", "Moonblast"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Snow Cloak", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] }
  ] },
  { id: "ct-128", tournament: "VGCA Battle Hall: Academy Ace Edition #3", players: 11, placement: 3, player: "ethnol1816", wins: 4, losses: 1, pokemonIds: [445, 655, 903, 983, 10103, 1013], pokemonNames: ["Garchomp", "Delphox", "Sneasler", "Kingambit", "Alolan Ninetales", "Sinistcha"], sets: [
    { ability: "Rough Skin", item: "Garchompite", moves: ["Earthquake", "Rock Tomb", "Breaking Swipe", "Protect"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Calm Mind", "Protect"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Coaching", "Fake Out"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Protect"] },
    { ability: "Snow Warning", item: "Never-Melt Ice", moves: ["Blizzard", "Freeze-Dry", "Encore", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Protect", "Trick Room"] }
  ] },
  { id: "ct-129", tournament: "VGCA Battle Hall: Academy Ace Edition #3", players: 11, placement: 4, player: "Royal_Rebel_Prince21", wins: 3, losses: 2, pokemonIds: [547, 142, 903, 695, 1018, 130], pokemonNames: ["Whimsicott", "Aerodactyl", "Sneasler", "Heliolisk", "Archaludon", "Gyarados"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Protect", "Encore"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Dual Wingbeat", "Ice Fang", "Rock Slide", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Solar Power", item: "Magnet", moves: ["Thunderbolt", "Hyper Voice", "Eerie Impulse", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Dragon Pulse", "Aura Sphere", "Electro Shot", "Flash Cannon"] },
    { ability: "Intimidate", item: "Gyaradosite", moves: ["Lash Out", "Waterfall", "Dragon Dance", "Protect"] }
  ] },
  { id: "ct-130", tournament: "VGCA Battle Hall: Academy Ace Edition #3", players: 11, placement: 5, player: "Jakobtc505", wins: 2, losses: 2, pokemonIds: [6, 473, 778, 727, 903, 142], pokemonNames: ["Charizard", "Mamoswine", "Mimikyu", "Incineroar", "Sneasler", "Aerodactyl"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Oblivious", item: "Focus Sash", moves: ["Icicle Crash", "Earthquake", "Ice Shard", "Protect"] },
    { ability: "Disguise", item: "Fairy Feather", moves: ["Play Rough", "Shadow Sneak", "Swords Dance", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Darkest Lariat", "Parting Shot"] },
    { ability: "Unburden", item: "Mental Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Blast", "Dual Wingbeat", "Wide Guard", "Protect"] }
  ] },
  { id: "ct-131", tournament: "VGCA Battle Hall: Academy Ace Edition #3", players: 11, placement: 6, player: "HyperRuns", wins: 1, losses: 3, pokemonIds: [6, 547, 983, 902, 445, 970], pokemonNames: ["Charizard", "Whimsicott", "Kingambit", "Basculegion-M", "Garchomp", "Glimmora"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Swords Dance"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] }
  ] },
  { id: "ct-132", tournament: "VGCA Battle Hall: Academy Ace Edition #3", players: 11, placement: 7, player: "risered28", wins: 1, losses: 3, pokemonIds: [655, 784, 10009, 727, 248, 681], pokemonNames: ["Delphox", "Kommo-o", "Wash Rotom", "Incineroar", "Tyranitar", "Aegislash"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Protect", "Encore"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Aura Sphere", "Clangorous Soul", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Hydro Pump", "Volt Switch", "Will-O-Wisp", "Thunderbolt"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Parting Shot", "Darkest Lariat", "Fake Out", "Flare Blitz"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Protect", "Knock Off", "Low Kick"] },
    { ability: "Stance Change", item: "Spell Tag", moves: ["Iron Head", "King's Shield", "Poltergeist", "Shadow Sneak"] }
  ] },
  { id: "ct-133", tournament: "VGC Trainer school x MMHM x Pride month event!  #2", players: 46, placement: 1, player: "138mysx", wins: 9, losses: 1, pokemonIds: [6, 142, 445, 700, 983, 902], pokemonNames: ["Charizard", "Aerodactyl", "Garchomp", "Sylveon", "Kingambit", "Basculegion-M"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Solar Beam", "Weather Ball", "Heat Wave", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Tailwind", "Wide Guard", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Dragon Claw", "Earthquake", "Poison Jab", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Beam", "Hyper Voice", "Quick Attack", "Detect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Aqua Jet", "Liquidation", "Last Respects", "Protect"] }
  ] },
  { id: "ct-134", tournament: "VGC Trainer school x MMHM x Pride month event!  #2", players: 46, placement: 2, player: "mcclint_50", wins: 8, losses: 2, pokemonIds: [248, 1013, 445, 823, 903, 670], pokemonNames: ["Tyranitar", "Sinistcha", "Garchomp", "Corviknight", "Sneasler", "Floette"], sets: [
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Dragon Dance", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Stomping Tantrum", "Dragon Claw", "Earthquake", "Rock Slide"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Bulk Up", "Brave Bird", "Iron Head", "Tailwind"] },
    { ability: "Poison Touch", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] }
  ] },
  { id: "ct-135", tournament: "VGC Trainer school x MMHM x Pride month event!  #2", players: 46, placement: 3, player: "JoeGanier", wins: 7, losses: 2, pokemonIds: [970, 445, 10009, 663, 10103, 983], pokemonNames: ["Glimmora", "Garchomp", "Wash Rotom", "Talonflame", "Alolan Ninetales", "Kingambit"], sets: [
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Spiky Shield", "Power Gem", "Sludge Bomb", "Earth Power"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Protect", "Earthquake", "Dragon Claw", "Rock Tomb"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Volt Switch", "Electroweb", "Will-O-Wisp", "Hydro Pump"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Protect", "Dual Wingbeat", "Flare Blitz", "Tailwind"] },
    { ability: "Snow Warning", item: "Never-Melt Ice", moves: ["Protect", "Blizzard", "Freeze-Dry", "Encore"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Kowtow Cleave", "Iron Head", "Sucker Punch"] }
  ] },
  { id: "ct-136", tournament: "VGC Trainer school x MMHM x Pride month event!  #2", players: 46, placement: 4, player: "KST | KAMPFI ", wins: 6, losses: 3, pokemonIds: [670, 142, 445, 903, 727, 1013], pokemonNames: ["Floette", "Aerodactyl", "Garchomp", "Sneasler", "Incineroar", "Sinistcha"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Protect", "Tailwind", "Wide Guard"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Dragon Claw", "Stomping Tantrum", "Protect", "Rock Slide"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Dire Claw", "Close Combat", "Coaching", "Fake Out"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Throat Chop", "Flare Blitz", "Fake Out", "Parting Shot"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Trick Room"] }
  ] },
  { id: "ct-137", tournament: "VGC Trainer school x MMHM x Pride month event!  #2", players: 46, placement: 5, player: "NacDuBourgPalette", wins: 6, losses: 2, pokemonIds: [6, 445, 670, 902, 983, 547], pokemonNames: ["Charizard", "Garchomp", "Floette", "Basculegion-M", "Kingambit", "Whimsicott"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Solar Beam", "Heat Wave", "Dragon Pulse", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Poison Jab", "Earthquake", "Rock Slide", "Dragon Claw"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Moonblast", "Light of Ruin", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Low Kick", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Fake Tears", "Tailwind", "Encore"] }
  ] },
  { id: "ct-138", tournament: "VGC Trainer school x MMHM x Pride month event!  #2", players: 46, placement: 6, player: "othunder21", wins: 6, losses: 2, pokemonIds: [655, 670, 727, 903, 983, 981], pokemonNames: ["Delphox", "Floette", "Incineroar", "Sneasler", "Kingambit", "Farigiraf"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Nasty Plot", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Darkest Lariat", "Parting Shot"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Twin Beam", "Thunderbolt", "Trick Room", "Helping Hand"] }
  ] },
  { id: "ct-139", tournament: "VGC Trainer school x MMHM x Pride month event!  #2", players: 46, placement: 7, player: "Emoolew", wins: 5, losses: 3, pokemonIds: [937, 727, 670, 350, 1013, 10103], pokemonNames: ["Ceruledge", "Incineroar", "Floette", "Milotic", "Sinistcha", "Alolan Ninetales"], sets: [
    { ability: "Flash Fire", item: "Colbur Berry", moves: ["Bitter Blade", "Shadow Sneak", "Swords Dance", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Draining Kiss", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Marvel Scale", item: "Leftovers", moves: ["Scald", "Icy Wind", "Life Dew", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Snow Warning", item: "Focus Sash", moves: ["Blizzard", "Disable", "Encore", "Protect"] }
  ] },
  { id: "ct-140", tournament: "VGC Trainer school x MMHM x Pride month event!  #2", players: 46, placement: 8, player: "TenkiPK", wins: 5, losses: 3, pokemonIds: [6, 670, 445, 547, 902, 983], pokemonNames: ["Charizard", "Floette", "Garchomp", "Whimsicott", "Basculegion-M", "Kingambit"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Defiant", item: "Occa Berry", moves: ["Kowtow Cleave", "Protect", "Sucker Punch", "Iron Head"] }
  ] },
  { id: "ct-141", tournament: "NOVA's SUPER LEAGUE", players: 82, placement: 1, player: "vedantff12345", wins: 9, losses: 0, pokemonIds: [149, 902, 983, 727, 903, 1013], pokemonNames: ["Dragonite", "Basculegion-M", "Kingambit", "Incineroar", "Sneasler", "Sinistcha"], sets: [
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Heat Wave", "Tailwind", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Flip Turn", "Aqua Jet", "Last Respects"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Hospitality", item: "Leftovers", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] }
  ] },
  { id: "ct-142", tournament: "NOVA's SUPER LEAGUE", players: 82, placement: 2, player: "Altkyle", wins: 8, losses: 2, pokemonIds: [149, 902, 212, 1018, 279, 727], pokemonNames: ["Dragonite", "Basculegion-M", "Scizor", "Archaludon", "Pelipper", "Incineroar"], sets: [
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Dragon Pulse", "Flamethrower", "Tailwind", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Close Combat", "Swords Dance", "Protect"] },
    { ability: "Stamina", item: "Chople Berry", moves: ["Electro Shot", "Dragon Pulse", "Aura Sphere", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Weather Ball", "Tailwind", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] }
  ] },
  { id: "ct-143", tournament: "NOVA's SUPER LEAGUE", players: 82, placement: 3, player: "Jasmithchiyu", wins: 7, losses: 2, pokemonIds: [6, 547, 983, 902, 445, 970], pokemonNames: ["Charizard", "Whimsicott", "Kingambit", "Basculegion-M", "Garchomp", "Glimmora"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Stomping Tantrum"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] }
  ] },
  { id: "ct-144", tournament: "NOVA's SUPER LEAGUE", players: 82, placement: 4, player: "PR1NCIP3", wins: 6, losses: 3, pokemonIds: [130, 1013, 903, 727, 670, 445], pokemonNames: ["Gyarados", "Sinistcha", "Sneasler", "Incineroar", "Floette", "Garchomp"], sets: [
    { ability: "Intimidate", item: "Gyaradosite", moves: ["Waterfall", "Lash Out", "Dragon Dance", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Fake Out", "Dire Claw", "Close Combat", "Coaching"] },
    { ability: "Intimidate", item: "Shuca Berry", moves: ["Flare Blitz", "Fake Out", "Parting Shot", "Taunt"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Draining Kiss", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] }
  ] },
  { id: "ct-145", tournament: "NOVA's SUPER LEAGUE", players: 82, placement: 5, player: "Vardanc8", wins: 6, losses: 2, pokemonIds: [9, 142, 903, 1013, 445, 981], pokemonNames: ["Blastoise", "Aerodactyl", "Sneasler", "Sinistcha", "Garchomp", "Farigiraf"], sets: [
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Aura Sphere", "Dark Pulse", "Water Spout", "Protect"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Dual Wingbeat", "Rock Slide", "Protect", "Tailwind"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Hospitality", item: "Leftovers", moves: ["Matcha Gotcha", "Shadow Ball", "Rage Powder", "Trick Room"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Stomping Tantrum", "Dragon Claw", "Rock Slide"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Rain Dance", "Psychic Noise", "Light Screen"] }
  ] },
  { id: "ct-146", tournament: "NOVA's SUPER LEAGUE", players: 82, placement: 6, player: "SpikeShock", wins: 5, losses: 2, pokemonIds: [956, 1018, 186, 952, 670, 727], pokemonNames: ["Espathra", "Archaludon", "Politoed", "Scovillain", "Floette", "Incineroar"], sets: [
    { ability: "Speed Boost", item: "Colbur Berry", moves: ["Lumina Crash", "Calm Mind", "Baton Pass", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Muddy Water", "Psych Up", "Rain Dance", "Weather Ball"] },
    { ability: "Chlorophyll", item: "Scovillainite", moves: ["Fire Blast", "Leech Seed", "Rage Powder", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Light of Ruin", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Fake Out", "Taunt", "Darkest Lariat", "Parting Shot"] }
  ] },
  { id: "ct-147", tournament: "NOVA's SUPER LEAGUE", players: 82, placement: 7, player: "Shivashankar", wins: 5, losses: 3, pokemonIds: [970, 478, 445, 547, 727, 823], pokemonNames: ["Glimmora", "Froslass", "Garchomp", "Whimsicott", "Incineroar", "Corviknight"], sets: [
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Spiky Shield", "Power Gem", "Earth Power", "Sludge Bomb"] },
    { ability: "Snow Cloak", item: "Froslassite", moves: ["Aurora Veil", "Protect", "Blizzard", "Shadow Ball"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Rock Slide", "Protect", "Dragon Claw"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Light Screen", "Tailwind", "Encore", "Moonblast"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Flare Blitz", "Parting Shot", "Fake Out", "Taunt"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Bulk Up", "Body Press", "Brave Bird", "Roost"] }
  ] },
  { id: "ct-148", tournament: "NOVA's SUPER LEAGUE", players: 82, placement: 8, player: "Yegorushhka", wins: 5, losses: 3, pokemonIds: [670, 142, 1013, 727, 903, 350], pokemonNames: ["Floette", "Aerodactyl", "Sinistcha", "Incineroar", "Sneasler", "Milotic"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Ice Fang", "Protect"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Parting Shot", "Flare Blitz", "Throat Chop"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Close Combat", "Gunk Shot", "Fake Out", "Protect"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Muddy Water", "Coil", "Hypnosis", "Life Dew"] }
  ] },
  { id: "ct-149", tournament: "King's Gambit #5 - M-A Farewell | Reg M-A", players: 16, placement: 1, player: "Florens44", wins: 5, losses: 1, pokemonIds: [727, 937, 903, 350, 670, 1013], pokemonNames: ["Incineroar", "Ceruledge", "Sneasler", "Milotic", "Floette", "Sinistcha"], sets: [
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Throat Chop", "Flare Blitz", "Parting Shot"] },
    { ability: "Flash Fire", item: "Colbur Berry", moves: ["Protect", "Shadow Sneak", "Bitter Blade", "Bulk Up"] },
    { ability: "Poison Touch", item: "Focus Sash", moves: ["Fake Out", "Dire Claw", "Throat Chop", "Close Combat"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Hypnosis", "Coil", "Protect", "Muddy Water"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Dazzling Gleam", "Calm Mind", "Draining Kiss"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Protect", "Matcha Gotcha", "Rage Powder", "Life Dew"] }
  ] },
  { id: "ct-150", tournament: "King's Gambit #5 - M-A Farewell | Reg M-A", players: 16, placement: 2, player: "FeLBros", wins: 4, losses: 2, pokemonIds: [902, 670, 547, 727, 445, 6], pokemonNames: ["Basculegion-M", "Floette", "Whimsicott", "Incineroar", "Garchomp", "Charizard"], sets: [
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Earthquake", "Dragon Claw", "Poison Jab", "Rock Slide"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] }
  ] },
  { id: "ct-151", tournament: "King's Gambit #5 - M-A Farewell | Reg M-A", players: 16, placement: 3, player: "OriioN", wins: 4, losses: 1, pokemonIds: [670, 6, 547, 445, 902, 983], pokemonNames: ["Floette", "Charizard", "Whimsicott", "Garchomp", "Basculegion-M", "Kingambit"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Encore", "Tailwind", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Dragon Claw", "Stomping Tantrum", "Poison Jab", "Rock Slide"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Defiant", item: "Occa Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] }
  ] },
  { id: "ct-152", tournament: "King's Gambit #5 - M-A Farewell | Reg M-A", players: 16, placement: 4, player: "giac28", wins: 3, losses: 2, pokemonIds: [655, 1013, 902, 727, 670, 903], pokemonNames: ["Delphox", "Sinistcha", "Basculegion-M", "Incineroar", "Floette", "Sneasler"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Nasty Plot", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Fake Out", "Dire Claw", "Close Combat"] }
  ] },
  { id: "ct-153", tournament: "King's Gambit #5 - M-A Farewell | Reg M-A", players: 16, placement: 5, player: "20gian04", wins: 2, losses: 2, pokemonIds: [530, 707, 983, 823, 5706, 1018], pokemonNames: ["Excadrill", "Klefki", "Kingambit", "Corviknight", "Hisuian Goodra", "Archaludon"], sets: [
    { ability: "Mold breaker", item: "Excadrite", moves: ["Rock Slide", "Iron Head", "High Horsepower", "Protect"] },
    { ability: "Prankster", item: "Shuca Berry", moves: ["Dazzling Gleam", "Rain Dance", "Thunder Wave", "Foul Play"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Mirror Armor", item: "Sitrus Berry", moves: ["Tailwind", "Brave Bird", "Protect", "Iron Head"] },
    { ability: "Gooey", item: "Leftovers", moves: ["Body Press", "Shelter", "Rain Dance", "Ice Beam"] },
    { ability: "Sturdy", item: "Choice Scarf", moves: ["Electro Shot", "Draco Meteor", "Flash Cannon", "Dark Pulse"] }
  ] },
  { id: "ct-154", tournament: "King's Gambit #5 - M-A Farewell | Reg M-A", players: 16, placement: 6, player: "Pandapazzo", wins: 2, losses: 2, pokemonIds: [279, 1018, 903, 142, 1013, 212], pokemonNames: ["Pelipper", "Archaludon", "Sneasler", "Aerodactyl", "Sinistcha", "Scizor"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Tailwind", "Wide Guard", "Hurricane", "Weather Ball"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Dragon Pulse", "Electro Shot", "Flash Cannon", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Ice Fang", "Rock Slide", "Dual Wingbeat", "Protect"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Imprison"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "Protect", "Swords Dance"] }
  ] },
  { id: "ct-155", tournament: "King's Gambit #5 - M-A Farewell | Reg M-A", players: 16, placement: 7, player: "TitanoPigro3", wins: 2, losses: 2, pokemonIds: [547, 970, 6, 445, 983, 902], pokemonNames: ["Whimsicott", "Glimmora", "Charizard", "Garchomp", "Kingambit", "Basculegion-M"], sets: [
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Poison Jab", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Low Kick"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-156", tournament: "King's Gambit #5 - M-A Farewell | Reg M-A", players: 16, placement: 8, player: "Mattpode3", wins: 2, losses: 2, pokemonIds: [1013, 248, 655, 902, 903, 727], pokemonNames: ["Sinistcha", "Tyranitar", "Delphox", "Basculegion-M", "Sneasler", "Incineroar"], sets: [
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Dragon Dance", "Protect"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Nasty Plot", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Protect", "Aqua Jet", "Last Respects"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Will-O-Wisp", "Darkest Lariat", "Parting Shot", "Fake Out"] }
  ] },
  { id: "ct-157", tournament: "Cebulowy Krążek 🇵🇱 #1", players: 32, placement: 1, player: "Idczaq", wins: 7, losses: 1, pokemonIds: [745, 902, 983, 903, 478, 952], pokemonNames: ["Lycanroc", "Basculegion-M", "Kingambit", "Sneasler", "Froslass", "Scovillain"], sets: [
    { ability: "Tough Claws", item: "Focus Sash", moves: ["Rock Slide", "Close Combat", "Accelerock", "Protect"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Overheat", "Giga Drain", "Rage Powder", "Protect"] }
  ] },
  { id: "ct-158", tournament: "Cebulowy Krążek 🇵🇱 #1", players: 32, placement: 2, player: "maciek415", wins: 6, losses: 2, pokemonIds: [952, 478, 745, 983, 903, 902], pokemonNames: ["Scovillain", "Froslass", "Lycanroc", "Kingambit", "Sneasler", "Basculegion-M"], sets: [
    { ability: "Moody", item: "Scovillainite", moves: ["Protect", "Rage Powder", "Giga Drain", "Overheat"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Protect", "Aurora Veil", "Blizzard", "Shadow Ball"] },
    { ability: "Tough Claws", item: "Focus Sash", moves: ["Protect", "Accelerock", "Rock Slide", "Close Combat"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Protect", "Swords Dance", "Kowtow Cleave", "Sucker Punch"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Fake Out", "Dire Claw", "Close Combat"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Protect", "Aqua Jet", "Wave Crash", "Last Respects"] }
  ] },
  { id: "ct-159", tournament: "Cebulowy Krążek 🇵🇱 #1", players: 32, placement: 3, player: "Narret", wins: 6, losses: 1, pokemonIds: [952, 748, 964, 968, 681, 635], pokemonNames: ["Scovillain", "Toxapex", "Palafin", "Orthworm", "Aegislash", "Hydreigon"], sets: [
    { ability: "Moody", item: "Scovillainite", moves: ["Rage Powder", "Leech Seed", "Overheat", "Protect"] },
    { ability: "Regenerator", item: "Leftovers", moves: ["Infestation", "Recover", "Toxic", "Baneful Bunker"] },
    { ability: "Zero to Hero", item: "Mystic Water", moves: ["Jet Punch", "Drain Punch", "Bulk Up", "Protect"] },
    { ability: "Earth Eater", item: "Sitrus Berry", moves: ["Shed Tail", "Sand Tomb", "Heavy Slam", "Protect"] },
    { ability: "Stance Change", item: "Focus Sash", moves: ["Sacred Sword", "Iron Head", "Shadow Sneak", "King's Shield"] },
    { ability: "Levitate", item: "Haban Berry", moves: ["Draco Meteor", "Head Smash", "Snarl", "Protect"] }
  ] },
  { id: "ct-160", tournament: "Cebulowy Krążek 🇵🇱 #1", players: 32, placement: 4, player: "Ikarcc", wins: 5, losses: 2, pokemonIds: [142, 983, 6, 445, 902, 700], pokemonNames: ["Aerodactyl", "Kingambit", "Charizard", "Garchomp", "Basculegion-M", "Sylveon"], sets: [
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Wide Guard"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Low Kick"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Protect", "Rock Slide"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Moonblast", "Quick Attack", "Detect"] }
  ] },
  { id: "ct-161", tournament: "Cebulowy Krążek 🇵🇱 #1", players: 32, placement: 5, player: "Kartofelek", wins: 4, losses: 2, pokemonIds: [478, 547, 445, 727, 902, 670], pokemonNames: ["Froslass", "Whimsicott", "Garchomp", "Incineroar", "Basculegion-M", "Floette"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Aurora Veil", "Protect", "Shadow Ball"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Encore", "Tailwind", "Helping Hand"] },
    { ability: "Rough Skin", item: "Yache Berry", moves: ["Stomping Tantrum", "Breaking Swipe", "Iron Head", "Thunder Fang"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Will-O-Wisp", "Parting Shot", "Fake Out"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Protect", "Psychic"] }
  ] },
  { id: "ct-162", tournament: "Cebulowy Krążek 🇵🇱 #1", players: 32, placement: 6, player: "Jahim64", wins: 4, losses: 2, pokemonIds: [983, 1013, 655, 727, 903, 670], pokemonNames: ["Kingambit", "Sinistcha", "Delphox", "Incineroar", "Sneasler", "Floette"], sets: [
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Swords Dance", "Sucker Punch", "Protect"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Nasty Plot", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Darkest Lariat", "Parting Shot"] },
    { ability: "Poison Touch", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Quick Guard"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] }
  ] },
  { id: "ct-163", tournament: "Cebulowy Krążek 🇵🇱 #1", players: 32, placement: 7, player: "Vuultur", wins: 3, losses: 2, pokemonIds: [655, 903, 1013, 902, 727, 670], pokemonNames: ["Delphox", "Sneasler", "Sinistcha", "Basculegion-M", "Incineroar", "Floette"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Nasty Plot", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Gunk Shot", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Draining Kiss", "Dazzling Gleam", "Calm Mind", "Protect"] }
  ] },
  { id: "ct-164", tournament: "Cebulowy Krążek 🇵🇱 #1", players: 32, placement: 8, player: "QrdeMac", wins: 3, losses: 2, pokemonIds: [94, 727, 186, 1018, 1013, 902], pokemonNames: ["Gengar", "Incineroar", "Politoed", "Archaludon", "Sinistcha", "Basculegion-M"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Shadow Ball", "Perish Song", "Disable", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Throat Chop", "Parting Shot", "Fake Out", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Perish Song", "Encore", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Dragon Pulse", "Electro Shot", "Flash Cannon", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] }
  ] },
  { id: "ct-165", tournament: "Desvelados Mundialeros", players: 10, placement: 1, player: "TitanoPigro3", wins: 4, losses: 0, pokemonIds: [547, 970, 6, 445, 983, 902], pokemonNames: ["Whimsicott", "Glimmora", "Charizard", "Garchomp", "Kingambit", "Basculegion-M"], sets: [
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Poison Jab", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Low Kick"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-166", tournament: "Desvelados Mundialeros", players: 10, placement: 2, player: "DaXis", wins: 3, losses: 1, pokemonIds: [445, 727, 670, 6, 1013, 142], pokemonNames: ["Garchomp", "Incineroar", "Floette", "Charizard", "Sinistcha", "Aerodactyl"], sets: [
    { ability: "Rough Skin", item: "Bright Powder", moves: ["Dragon Claw", "Earthquake", "Stomping Tantrum", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Throat Chop", "Flare Blitz", "Parting Shot", "Fake Out"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Wide Guard"] }
  ] },
  { id: "ct-167", tournament: "Desvelados Mundialeros", players: 10, placement: 3, player: "GunbladeVIII ", wins: 3, losses: 1, pokemonIds: [6, 903, 1013, 727, 900, 212], pokemonNames: ["Charizard", "Sneasler", "Sinistcha", "Incineroar", "Kleavor", "Scizor"], sets: [
    { ability: "Blaze", item: "Charizardite X", moves: ["Flare Blitz", "Breaking Swipe", "Dragon Dance", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Coaching", "Dire Claw"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Sharpness", item: "Choice Scarf", moves: ["Stone Axe", "Close Combat", "Feint", "X-Scissor"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "Swords Dance", "Protect"] }
  ] },
  { id: "ct-168", tournament: "Desvelados Mundialeros", players: 10, placement: 4, player: "FrostyDog69", wins: 2, losses: 2, pokemonIds: [609, 902, 983, 142, 534, 36], pokemonNames: ["Chandelure", "Basculegion-M", "Kingambit", "Aerodactyl", "Conkeldurr", "Clefable"], sets: [
    { ability: "Flash Fire", item: "Focus Sash", moves: ["Shadow Ball", "Heat Wave", "Trick Room", "Protect"] },
    { ability: "Adaptability", item: "White Herb", moves: ["Last Respects", "Aqua Jet", "Wave Crash", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Swords Dance", "Sucker Punch", "Kowtow Cleave", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Iron Fist", item: "Black Belt", moves: ["Mach Punch", "Drain Punch", "Thunder Punch", "Protect"] },
    { ability: "Unaware", item: "Sitrus Berry", moves: ["Follow Me", "Helping Hand", "Moonblast", "Protect"] }
  ] },
  { id: "ct-169", tournament: "Desvelados Mundialeros", players: 10, placement: 5, player: "David H", wins: 2, losses: 2, pokemonIds: [478, 900, 547, 983, 903, 902], pokemonNames: ["Froslass", "Kleavor", "Whimsicott", "Kingambit", "Sneasler", "Basculegion-M"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Stone Axe", "Close Combat", "Feint", "Protect"] },
    { ability: "Prankster", item: "Kebia Berry", moves: ["Moonblast", "Encore", "Tailwind", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] }
  ] },
  { id: "ct-170", tournament: "Desvelados Mundialeros", players: 10, placement: 6, player: "GRIFF", wins: 2, losses: 2, pokemonIds: [670, 903, 727, 350, 1013, 6], pokemonNames: ["Floette", "Sneasler", "Incineroar", "Milotic", "Sinistcha", "Charizard"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Poison Touch", item: "Focus Sash", moves: ["Dire Claw", "Close Combat", "Coaching", "Fake Out"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Parting Shot", "Fake Out"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Muddy Water", "Icy Wind", "Coil", "Protect"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Blaze", item: "Charizardite X", moves: ["Flare Blitz", "Dragon Claw", "Dragon Dance", "Protect"] }
  ] },
  { id: "ct-171", tournament: "Desvelados Mundialeros", players: 10, placement: 7, player: "Riubyx", wins: 1, losses: 1, pokemonIds: [142, 6, 981, 983, 445, 700], pokemonNames: ["Aerodactyl", "Charizard", "Farigiraf", "Kingambit", "Garchomp", "Sylveon"], sets: [
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Ice Fang", "Tailwind", "Dual Wingbeat"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Weather Ball", "Solar Beam"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Twin Beam", "Roar", "Thunderbolt"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Kowtow Cleave", "Iron Head", "Low Kick", "Sucker Punch"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Protect", "Earthquake", "Dragon Claw", "Stomping Tantrum"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Protect", "Hyper Voice", "Quick Attack", "Hyper Beam"] }
  ] },
  { id: "ct-172", tournament: "Desvelados Mundialeros", players: 10, placement: 8, player: "TSN_Scott", wins: 1, losses: 2, pokemonIds: [6, 670, 903, 350, 727, 1013], pokemonNames: ["Charizard", "Floette", "Sneasler", "Milotic", "Incineroar", "Sinistcha"], sets: [
    { ability: "Blaze", item: "Charizardite X", moves: ["Flare Blitz", "Dragon Claw", "Dragon Dance", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Calm Mind", "Dazzling Gleam", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Scald", "Icy Wind", "Recover", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Strength Sap", "Trick Room"] }
  ] },
  { id: "ct-173", tournament: "King of Champions II", players: 53, placement: 1, player: "John Cornelio Bandilla", wins: 9, losses: 0, pokemonIds: [670, 6, 142, 903, 983, 727], pokemonNames: ["Floette", "Charizard", "Aerodactyl", "Sneasler", "Kingambit", "Incineroar"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Draining Kiss", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Intimidate", item: "Shuca Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] }
  ] },
  { id: "ct-174", tournament: "King of Champions II", players: 53, placement: 2, player: "Niel Arveen Serrato", wins: 6, losses: 3, pokemonIds: [6, 670, 445, 547, 983, 902], pokemonNames: ["Charizard", "Floette", "Garchomp", "Whimsicott", "Kingambit", "Basculegion-M"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Protect", "Weather Ball"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Moonblast", "Protect", "Light of Ruin"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Protect", "Rock Slide", "Earthquake"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Encore", "Tailwind", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Low Kick"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-175", tournament: "King of Champions II", players: 53, placement: 3, player: "Ryan Pareja", wins: 6, losses: 2, pokemonIds: [130, 1013, 903, 727, 670, 445], pokemonNames: ["Gyarados", "Sinistcha", "Sneasler", "Incineroar", "Floette", "Garchomp"], sets: [
    { ability: "Intimidate", item: "Gyaradosite", moves: ["Waterfall", "Lash Out", "Dragon Dance", "Protect"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Fake Out", "Dire Claw", "Close Combat", "Coaching"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Fake Out", "Parting Shot", "Throat Chop"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Draining Kiss", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] }
  ] },
  { id: "ct-176", tournament: "King of Champions II", players: 53, placement: 4, player: "Jani An Descalzo", wins: 6, losses: 2, pokemonIds: [758, 478, 184, 983, 142, 1013], pokemonNames: ["Salazzle", "Froslass", "Azumarill", "Kingambit", "Aerodactyl", "Sinistcha"], sets: [
    { ability: "Oblivious", item: "Focus Sash", moves: ["Overheat", "Sludge Bomb", "Encore", "Fake Out"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Huge Power", item: "Sitrus Berry", moves: ["Play Rough", "Aqua Jet", "Belly Drum", "Protect"] },
    { ability: "Defiant", item: "Occa Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] }
  ] },
  { id: "ct-177", tournament: "King of Champions II", players: 53, placement: 5, player: "John Tan", wins: 5, losses: 2, pokemonIds: [6, 142, 981, 445, 983, 700], pokemonNames: ["Charizard", "Aerodactyl", "Farigiraf", "Garchomp", "Kingambit", "Sylveon"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Ice Fang", "Tailwind"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Twin Beam", "Trick Room", "Roar", "Thunderbolt"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Dragon Claw", "Stomping Tantrum", "Earthquake", "Protect"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Low Kick"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Beam", "Hyper Voice", "Quick Attack", "Protect"] }
  ] },
  { id: "ct-178", tournament: "King of Champions II", players: 53, placement: 6, player: "ALVIN Rambano", wins: 5, losses: 2, pokemonIds: [670, 1013, 115, 666, 784, 6], pokemonNames: ["Floette", "Sinistcha", "Kangaskhan", "Vivillon", "Kommo-o", "Charizard"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Calm Mind", "Dazzling Gleam", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Scrappy", item: "Silk Scarf", moves: ["Fake Out", "Last Resort"] },
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Sleep Powder", "Hurricane", "String Shot", "Struggle Bug"] },
    { ability: "Overcoat", item: "Leftovers", moves: ["Clanging Scales", "Aura Sphere", "Clangorous Soul", "Protect"] },
    { ability: "Blaze", item: "Charizardite X", moves: ["Flare Blitz", "Dragon Claw", "Protect", "Dragon Dance"] }
  ] },
  { id: "ct-179", tournament: "King of Champions II", players: 53, placement: 7, player: "Hans Pabros", wins: 5, losses: 2, pokemonIds: [478, 94, 727, 1013, 186, 1018], pokemonNames: ["Froslass", "Gengar", "Incineroar", "Sinistcha", "Politoed", "Archaludon"], sets: [
    { ability: "Snow Cloak", item: "Froslassite", moves: ["Blizzard", "Rain Dance", "Aurora Veil", "Protect"] },
    { ability: "Cursed Body", item: "Gengarite", moves: ["Protect", "Shadow Ball", "Disable", "Perish Song"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Protect", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Protect", "Matcha Gotcha", "Rage Powder", "Shadow Ball"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Protect", "Weather Ball", "Encore", "Perish Song"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Draco Meteor", "Flash Cannon", "Protect"] }
  ] },
  { id: "ct-180", tournament: "King of Champions II", players: 53, placement: 8, player: "Rodrigo Javier", wins: 4, losses: 3, pokemonIds: [306, 670, 142, 445, 1013, 727], pokemonNames: ["Aggron", "Floette", "Aerodactyl", "Garchomp", "Sinistcha", "Incineroar"], sets: [
    { ability: "Sturdy", item: "Aggronite", moves: ["Protect", "Body Press", "Heavy Slam", "Iron Defense"], teraType: "Steel" },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Dazzling Gleam", "Moonblast", "Light of Ruin"], teraType: "Fairy" },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Protect", "Rock Slide", "Dual Wingbeat", "Tailwind"], teraType: "None" },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Protect", "Dragon Claw", "Rock Slide", "Earthquake"], teraType: "None" },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Protect", "Matcha Gotcha", "Shadow Ball", "Rage Powder"], teraType: "None" },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Darkest Lariat", "Parting Shot"], teraType: "None" }
  ] },
  { id: "ct-181", tournament: "PWC - Battle in the Colosseum #15 - Pride Month", players: 12, placement: 1, player: "KST | KAMPFI ", wins: 6, losses: 1, pokemonIds: [670, 142, 445, 903, 727, 1013], pokemonNames: ["Floette", "Aerodactyl", "Garchomp", "Sneasler", "Incineroar", "Sinistcha"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Protect", "Tailwind", "Wide Guard"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Dragon Claw", "Stomping Tantrum", "Protect", "Rock Slide"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Dire Claw", "Close Combat", "Coaching", "Fake Out"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Throat Chop", "Flare Blitz", "Fake Out", "Parting Shot"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Trick Room"] }
  ] },
  { id: "ct-182", tournament: "PWC - Battle in the Colosseum #15 - Pride Month", players: 12, placement: 2, player: "lykemafiaa", wins: 4, losses: 3, pokemonIds: [983, 547, 445, 6, 902, 149], pokemonNames: ["Kingambit", "Whimsicott", "Garchomp", "Charizard", "Basculegion-M", "Dragonite"], sets: [
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Kowtow Cleave", "Iron Head", "Sucker Punch"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Protect", "Moonblast", "Encore", "Tailwind"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Protect", "Poison Jab", "Dragon Claw", "Earthquake"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Weather Ball", "Heat Wave", "Solar Beam"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Protect", "Wave Crash", "Aqua Jet", "Last Respects"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Protect", "Heat Wave", "Thunderbolt", "Dragon Pulse"] }
  ] },
  { id: "ct-183", tournament: "PWC - Battle in the Colosseum #15 - Pride Month", players: 12, placement: 3, player: "Kobraspike", wins: 5, losses: 1, pokemonIds: [9, 956, 1018, 186, 903, 952], pokemonNames: ["Blastoise", "Espathra", "Archaludon", "Politoed", "Sneasler", "Scovillain"], sets: [
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Protect", "Water Spout", "Dark Pulse", "Aura Sphere"] },
    { ability: "Speed Boost", item: "Sitrus Berry", moves: ["Calm Mind", "Protect", "Lumina Crash", "Baton Pass"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Protect", "Electro Shot", "Dragon Pulse", "Flash Cannon"] },
    { ability: "Drizzle", item: "Mystic Water", moves: ["Protect", "Muddy Water", "Ice Beam", "Weather Ball"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Protect", "Fake Out", "Close Combat", "Dire Claw"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Protect", "Leech Seed", "Rage Powder", "Overheat"] }
  ] },
  { id: "ct-184", tournament: "PWC - Battle in the Colosseum #15 - Pride Month", players: 12, placement: 4, player: "Peekachu", wins: 4, losses: 2, pokemonIds: [745, 903, 952, 902, 478, 983], pokemonNames: ["Lycanroc", "Sneasler", "Scovillain", "Basculegion-M", "Froslass", "Kingambit"], sets: [
    { ability: "Tough Claws", item: "Focus Sash", moves: ["Rock Slide", "Close Combat", "Accelerock", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Overheat", "Giga Drain", "Rage Powder", "Protect"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] }
  ] },
  { id: "ct-185", tournament: "PWC - Battle in the Colosseum #15 - Pride Month", players: 12, placement: 5, player: "I___Lightning___I", wins: 2, losses: 3, pokemonIds: [6, 902, 445, 3, 983, 700], pokemonNames: ["Charizard", "Basculegion-M", "Garchomp", "Venusaur", "Kingambit", "Sylveon"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Weather Ball", "Heat Wave", "Protect", "Solar Beam"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Aqua Jet", "Wave Crash", "Flip Turn"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Tomb", "Protect"] },
    { ability: "Chlorophyll", item: "Focus Sash", moves: ["Leaf Storm", "Sludge Bomb", "Sleep Powder", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Protect"] },
    { ability: "Cute Charm", item: "Fairy Feather", moves: ["Quick Attak", "Hyper Voice", "Psychic", "Protect"] }
  ] },
  { id: "ct-186", tournament: "PWC - Battle in the Colosseum #15 - Pride Month", players: 12, placement: 6, player: "Riubyx", wins: 2, losses: 3, pokemonIds: [142, 6, 981, 983, 445, 700], pokemonNames: ["Aerodactyl", "Charizard", "Farigiraf", "Kingambit", "Garchomp", "Sylveon"], sets: [
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Ice Fang", "Tailwind", "Dual Wingbeat"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Weather Ball", "Solar Beam"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Twin Beam", "Roar", "Thunderbolt"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Kowtow Cleave", "Iron Head", "Low Kick", "Sucker Punch"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Protect", "Earthquake", "Dragon Claw", "Stomping Tantrum"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Protect", "Hyper Voice", "Quick Attack", "Moonblast"] }
  ] },
  { id: "ct-187", tournament: "VGC UU Champions (Regulation M-A) Weekly #6", players: 11, placement: 1, player: "AndruApple", wins: 5, losses: 1, pokemonIds: [130, 637, 970, 908, 700, 959], pokemonNames: ["Gyarados", "Volcarona", "Glimmora", "Meowscarada", "Sylveon", "Tinkaton"], sets: [
    { ability: "Intimidate", item: "Gyaradosite", moves: ["Waterfall", "Crunch", "Dragon Dance", "Protect"] },
    { ability: "Flame Body", item: "Charti Berry", moves: ["Overheat", "Struggle Bug", "Rage Powder", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Protean", item: "Choice Scarf", moves: ["Flower Trick", "Knock Off", "Triple Axel", "Low Kick"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Detect"] },
    { ability: "Own Tempo", item: "Sitrus Berry", moves: ["Gigaton Hammer", "Fake Out", "Thunder Wave", "Protect"] }
  ] },
  { id: "ct-188", tournament: "VGC UU Champions (Regulation M-A) Weekly #6", players: 11, placement: 2, player: "SeaWolfMikes", wins: 4, losses: 2, pokemonIds: [908, 964, 59, 149, 700, 970], pokemonNames: ["Meowscarada", "Palafin", "Arcanine", "Dragonite", "Sylveon", "Glimmora"], sets: [
    { ability: "Overgrow", item: "Focus Sash", moves: ["Flower Trick", "Knock Off", "Sucker Punch", "Protect"] },
    { ability: "Zero to Hero", item: "Mystic Water", moves: ["Wave Crash", "Jet Punch", "Bulk Up", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Extreme Speed", "Will-O-Wisp", "Protect"] },
    { ability: "Multiscale", item: "Dragon Fang", moves: ["Dragon Claw", "Extreme Speed", "Tailwind", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Draining Kiss", "Quick Attack", "Detect"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] }
  ] },
  { id: "ct-189", tournament: "VGC UU Champions (Regulation M-A) Weekly #6", players: 11, placement: 3, player: "Sinnoy", wins: 3, losses: 2, pokemonIds: [358, 186, 10902, 700, 454, 908], pokemonNames: ["Chimecho", "Politoed", "Basculegion-F", "Sylveon", "Toxicroak", "Meowscarada"], sets: [
    { ability: "Levitate", item: "Chimechite", moves: ["Psychic", "Flash Cannon", "Recover", "Trick Room"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Muddy Water", "Weather Ball", "Perish Song", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Weather Ball", "Hyper Beam", "Protect"] },
    { ability: "Dry Skin", item: "White Herb", moves: ["Gunk Shot", "Close Combat", "Knock Off", "Fake Out"] },
    { ability: "Overgrow", item: "Focus Sash", moves: ["Flower Trick", "Knock Off", "Triple Axel", "Protect"] }
  ] },
  { id: "ct-190", tournament: "VGC UU Champions (Regulation M-A) Weekly #6", players: 11, placement: 4, player: "Gabeeel", wins: 3, losses: 2, pokemonIds: [9, 666, 36, 937, 908, 959], pokemonNames: ["Blastoise", "Vivillon", "Clefable", "Ceruledge", "Meowscarada", "Tinkaton"], sets: [
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Water Spout", "Ice Beam", "Shell Smash", "Protect"] },
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Pollen Puff", "Rage Powder", "Tailwind", "Protect"] },
    { ability: "Unaware", item: "Leftovers", moves: ["Moonblast", "Follow Me", "Life Dew", "Protect"] },
    { ability: "Flash Fire", item: "Passho Berry", moves: ["Bitter Blade", "Shadow Sneak", "Swords Dance", "Protect"] },
    { ability: "Protean", item: "Choice Scarf", moves: ["Flower Trick", "Knock Off", "Sucker Punch", "U-turn"] },
    { ability: "Own Tempo", item: "Occa Berry", moves: ["Fake Out", "Gigaton Hammer", "Feint", "Encore"] }
  ] },
  { id: "ct-191", tournament: "VGC UU Champions (Regulation M-A) Weekly #6", players: 11, placement: 5, player: "LancentVGC", wins: 2, losses: 2, pokemonIds: [448, 59, 964, 302, 10012, 700], pokemonNames: ["Lucario", "Arcanine", "Palafin", "Sableye", "Mow Rotom", "Sylveon"], sets: [
    { ability: "Inner Focus", item: "Lucarionite", moves: ["Bullet Punch", "Meteor Mash", "Close Combat", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Extreme Speed", "Protect", "Snarl"] },
    { ability: "Zero to Hero", item: "Mystic Water", moves: ["Close Combat", "Wave Crash", "Protect", "Jet Punch"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Quash", "Fake Out", "Light Screen", "Will-O-Wisp"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Electroweb", "Volt Switch", "Leaf Storm", "Thunderbolt"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Detect"] }
  ] },
  { id: "ct-192", tournament: "VGC UU Champions (Regulation M-A) Weekly #6", players: 11, placement: 6, player: "swaggervgc", wins: 1, losses: 3, pokemonIds: [10340, 36, 10012, 10902, 635, 970], pokemonNames: ["Hisuian Zoroark", "Clefable", "Mow Rotom", "Basculegion-F", "Hydreigon", "Glimmora"], sets: [
    { ability: "Illusion", item: "Focus Sash", moves: ["Bitter Malice", "Icy Wind", "Taunt", "Protect"] },
    { ability: "Unaware", item: "Kebia Berry", moves: ["Moonblast", "Life Dew", "Follow Me", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Leaf Storm", "Electroweb", "Volt Switch", "Trick"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Levitate", item: "Chople Berry", moves: ["Snarl", "Draco Meteor", "Tailwind", "Protect"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Sludge Bomb", "Earth Power", "Power Gem", "Spiky Shield"] }
  ] },
  { id: "ct-193", tournament: "VGC UU Champions (Regulation M-A) Weekly #6", players: 11, placement: 7, player: "merrypasta", wins: 1, losses: 1, pokemonIds: [428, 149, 186, 908, 212, 36], pokemonNames: ["Lopunny", "Dragonite", "Politoed", "Meowscarada", "Scizor", "Clefable"], sets: [
    { ability: "Limber", item: "Lopunnite", moves: ["Close Combat", "Triple Axel", "Fake Out", "Encore"] },
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Draco Meteor", "Hurricane", "Protect", "Tailwind"] },
    { ability: "Drizzle", item: "Mystic Water", moves: ["Weather Ball", "Muddy Water", "Protect", "Icy Wind"] },
    { ability: "Overgrow", item: "Focus Sash", moves: ["Flower Trick", "Knock Off", "Protect", "Sucker Punch"] },
    { ability: "Technician", item: "Metal Coat", moves: ["Bullet Punch", "Bug Bite", "Protect", "Swords Dance"] },
    { ability: "Unaware", item: "Sitrus Berry", moves: ["Moonblast", "Follow Me", "Protect", "Life Dew"] }
  ] },
  { id: "ct-194", tournament: "VGC UU Champions (Regulation M-A) Weekly #6", players: 11, placement: 8, player: "PuffyWhy89", wins: 1, losses: 2, pokemonIds: [658, 763, 10902, 59, 26, 670], pokemonNames: ["Greninja", "Tsareena", "Basculegion-F", "Arcanine", "Raichu", "Floette"], sets: [
    { ability: "Protean", item: "Greninjite", moves: ["Hydro Pump", "Gunk Shot", "Icy Wind", "Protect"] },
    { ability: "Queenly Majesty", item: "White Herb", moves: ["Trop Kick", "Triple Axel", "Knock Off", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Extreme Speed", "Howl", "Protect"] },
    { ability: "Lightning Rod", item: "Focus Sash", moves: ["Thunderbolt", "Nuzzle", "Encore", "Fake Out"] },
    { ability: "Flower Veil", item: "Fairy Feather", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] }
  ] }
];

/** Computed count of unique tournaments in the dataset */
export const CHAMPIONS_TOURNAMENT_COUNT = new Set(CHAMPIONS_TOURNAMENT_TEAMS.map(t => t.tournament)).size;
