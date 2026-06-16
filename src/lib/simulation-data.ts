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

export const CHAMPIONS_TOURNAMENT_TOTAL_TEAMS = 690;
export const CHAMPIONS_TOURNAMENT_DATE = "2026-06-12";

export const CHAMPIONS_TOURNAMENT_USAGE: ChampionsTournamentUsage[] = [
  { rank: 1, name: "Garchomp", count: 288, usagePct: 41.7, top8Count: 79 },
  { rank: 2, name: "Incineroar", count: 268, usagePct: 38.8, top8Count: 72 },
  { rank: 3, name: "Basculegion-M", count: 260, usagePct: 37.7, top8Count: 84 },
  { rank: 4, name: "Kingambit", count: 257, usagePct: 37.2, top8Count: 89 },
  { rank: 5, name: "Sneasler", count: 241, usagePct: 34.9, top8Count: 70 },
  { rank: 6, name: "Sinistcha", count: 207, usagePct: 30, top8Count: 52 },
  { rank: 7, name: "Charizard", count: 206, usagePct: 29.9, top8Count: 63 },
  { rank: 8, name: "Floette", count: 186, usagePct: 27, top8Count: 53 },
  { rank: 9, name: "Whimsicott", count: 142, usagePct: 20.6, top8Count: 47 },
  { rank: 10, name: "Farigiraf", count: 105, usagePct: 15.2, top8Count: 30 },
  { rank: 11, name: "Froslass", count: 83, usagePct: 12, top8Count: 19 },
  { rank: 12, name: "Aerodactyl", count: 82, usagePct: 11.9, top8Count: 22 },
  { rank: 13, name: "Archaludon", count: 81, usagePct: 11.7, top8Count: 24 },
  { rank: 14, name: "Sylveon", count: 75, usagePct: 10.9, top8Count: 19 },
  { rank: 15, name: "Venusaur", count: 73, usagePct: 10.6, top8Count: 15 },
  { rank: 16, name: "Delphox", count: 64, usagePct: 9.3, top8Count: 18 },
  { rank: 17, name: "Glimmora", count: 62, usagePct: 9, top8Count: 14 },
  { rank: 18, name: "Dragonite", count: 61, usagePct: 8.8, top8Count: 20 },
  { rank: 19, name: "Tyranitar", count: 61, usagePct: 8.8, top8Count: 13 },
  { rank: 20, name: "Wash Rotom", count: 58, usagePct: 8.4, top8Count: 10 },
  { rank: 21, name: "Pelipper", count: 58, usagePct: 8.4, top8Count: 14 },
  { rank: 22, name: "Kommo-o", count: 54, usagePct: 7.8, top8Count: 15 },
  { rank: 23, name: "Gengar", count: 53, usagePct: 7.7, top8Count: 14 },
  { rank: 24, name: "Politoed", count: 50, usagePct: 7.2, top8Count: 12 },
  { rank: 25, name: "Talonflame", count: 42, usagePct: 6.1, top8Count: 5 },
  { rank: 26, name: "Maushold", count: 42, usagePct: 6.1, top8Count: 9 },
  { rank: 27, name: "Vivillon", count: 41, usagePct: 5.9, top8Count: 12 },
  { rank: 28, name: "Milotic", count: 41, usagePct: 5.9, top8Count: 9 },
  { rank: 29, name: "Scovillain", count: 39, usagePct: 5.7, top8Count: 11 },
  { rank: 30, name: "Scizor", count: 38, usagePct: 5.5, top8Count: 11 },
  { rank: 31, name: "Hisuian Arcanine", count: 38, usagePct: 5.5, top8Count: 14 },
  { rank: 32, name: "Torkoal", count: 36, usagePct: 5.2, top8Count: 9 },
  { rank: 33, name: "Corviknight", count: 35, usagePct: 5.1, top8Count: 10 },
  { rank: 34, name: "Kangaskhan", count: 33, usagePct: 4.8, top8Count: 10 },
  { rank: 35, name: "Blastoise", count: 30, usagePct: 4.3, top8Count: 4 },
  { rank: 36, name: "Hydreigon", count: 29, usagePct: 4.2, top8Count: 5 },
  { rank: 37, name: "Sableye", count: 25, usagePct: 3.6, top8Count: 4 },
  { rank: 38, name: "Alolan Ninetales", count: 24, usagePct: 3.5, top8Count: 4 },
  { rank: 39, name: "Aegislash", count: 20, usagePct: 2.9, top8Count: 4 },
  { rank: 40, name: "Gardevoir", count: 20, usagePct: 2.9, top8Count: 5 },
  { rank: 41, name: "Lycanroc", count: 19, usagePct: 2.8, top8Count: 4 },
  { rank: 42, name: "Gallade", count: 18, usagePct: 2.6, top8Count: 4 },
  { rank: 43, name: "Heat Rotom", count: 16, usagePct: 2.3, top8Count: 6 },
  { rank: 44, name: "Camerupt", count: 16, usagePct: 2.3, top8Count: 5 },
  { rank: 45, name: "Kleavor", count: 16, usagePct: 2.3, top8Count: 3 },
  { rank: 46, name: "Excadrill", count: 15, usagePct: 2.2, top8Count: 2 },
  { rank: 47, name: "Primarina", count: 14, usagePct: 2, top8Count: 5 },
  { rank: 48, name: "Tsareena", count: 14, usagePct: 2, top8Count: 4 },
  { rank: 49, name: "Crabominable", count: 14, usagePct: 2, top8Count: 2 },
  { rank: 50, name: "Tinkaton", count: 13, usagePct: 1.9, top8Count: 3 },
  { rank: 51, name: "Espathra", count: 13, usagePct: 1.9, top8Count: 3 },
  { rank: 52, name: "Skarmory", count: 11, usagePct: 1.6, top8Count: 2 },
  { rank: 53, name: "Gyarados", count: 11, usagePct: 1.6, top8Count: 8 },
  { rank: 54, name: "Araquanid", count: 9, usagePct: 1.3, top8Count: 3 },
  { rank: 55, name: "Weavile", count: 9, usagePct: 1.3, top8Count: 2 },
  { rank: 56, name: "Hatterene", count: 9, usagePct: 1.3, top8Count: 4 },
  { rank: 57, name: "Azumarill", count: 9, usagePct: 1.3, top8Count: 1 },
  { rank: 58, name: "Drampa", count: 8, usagePct: 1.2, top8Count: 3 },
  { rank: 59, name: "Chandelure", count: 8, usagePct: 1.2, top8Count: 2 },
  { rank: 60, name: "Mimikyu", count: 8, usagePct: 1.2, top8Count: 2 },
  { rank: 61, name: "Meganium", count: 8, usagePct: 1.2, top8Count: 0 },
  { rank: 62, name: "Clefable", count: 8, usagePct: 1.2, top8Count: 3 },
  { rank: 63, name: "Steelix", count: 8, usagePct: 1.2, top8Count: 3 },
  { rank: 64, name: "Lopunny", count: 7, usagePct: 1, top8Count: 0 },
  { rank: 65, name: "Ceruledge", count: 7, usagePct: 1, top8Count: 3 },
  { rank: 66, name: "Hawlucha", count: 7, usagePct: 1, top8Count: 1 },
  { rank: 67, name: "Toxapex", count: 7, usagePct: 1, top8Count: 3 },
  { rank: 68, name: "Meowscarada", count: 7, usagePct: 1, top8Count: 1 },
  { rank: 69, name: "Golurk", count: 7, usagePct: 1, top8Count: 1 },
  { rank: 70, name: "Oranguru", count: 7, usagePct: 1, top8Count: 2 },
  { rank: 71, name: "Dragapult", count: 7, usagePct: 1, top8Count: 1 },
  { rank: 72, name: "Aggron", count: 6, usagePct: 0.9, top8Count: 2 },
  { rank: 73, name: "Chesnaught", count: 6, usagePct: 0.9, top8Count: 2 },
  { rank: 74, name: "Meowstic-M", count: 6, usagePct: 0.9, top8Count: 1 },
  { rank: 75, name: "Serperior", count: 6, usagePct: 0.9, top8Count: 3 },
  { rank: 76, name: "Palafin", count: 6, usagePct: 0.9, top8Count: 0 },
  { rank: 77, name: "Feraligatr", count: 5, usagePct: 0.7, top8Count: 2 },
  { rank: 78, name: "Hisuian Typhlosion", count: 5, usagePct: 0.7, top8Count: 1 },
  { rank: 79, name: "Snorlax", count: 5, usagePct: 0.7, top8Count: 1 },
  { rank: 80, name: "Lucario", count: 5, usagePct: 0.7, top8Count: 0 },
  { rank: 81, name: "Manectric", count: 5, usagePct: 0.7, top8Count: 1 },
  { rank: 82, name: "Pikachu", count: 5, usagePct: 0.7, top8Count: 0 },
  { rank: 83, name: "Arcanine", count: 5, usagePct: 0.7, top8Count: 1 },
  { rank: 84, name: "Wyrdeer", count: 5, usagePct: 0.7, top8Count: 1 },
  { rank: 85, name: "Alakazam", count: 5, usagePct: 0.7, top8Count: 1 },
  { rank: 86, name: "Hisuian Samurott", count: 5, usagePct: 0.7, top8Count: 1 },
  { rank: 87, name: "Mr. Rime", count: 5, usagePct: 0.7, top8Count: 0 },
  { rank: 88, name: "Greninja", count: 4, usagePct: 0.6, top8Count: 0 },
  { rank: 89, name: "Bellibolt", count: 4, usagePct: 0.6, top8Count: 1 },
  { rank: 90, name: "Volcarona", count: 4, usagePct: 0.6, top8Count: 2 },
  { rank: 91, name: "Empoleon", count: 4, usagePct: 0.6, top8Count: 0 },
  { rank: 92, name: "Ampharos", count: 4, usagePct: 0.6, top8Count: 1 },
  { rank: 93, name: "Klefki", count: 4, usagePct: 0.6, top8Count: 2 },
  { rank: 94, name: "Vanilluxe", count: 4, usagePct: 0.6, top8Count: 1 },
  { rank: 95, name: "Hisuian Zoroark", count: 3, usagePct: 0.4, top8Count: 0 },
  { rank: 96, name: "Chimecho", count: 3, usagePct: 0.4, top8Count: 1 },
  { rank: 97, name: "Heliolisk", count: 3, usagePct: 0.4, top8Count: 1 },
  { rank: 98, name: "Beedrill", count: 3, usagePct: 0.4, top8Count: 1 },
  { rank: 99, name: "Pidgeot", count: 3, usagePct: 0.4, top8Count: 1 },
  { rank: 100, name: "Mamoswine", count: 3, usagePct: 0.4, top8Count: 0 },
  { rank: 101, name: "Tauros", count: 3, usagePct: 0.4, top8Count: 0 },
  { rank: 102, name: "Umbreon", count: 3, usagePct: 0.4, top8Count: 1 },
  { rank: 103, name: "Galarian Slowking", count: 3, usagePct: 0.4, top8Count: 0 },
  { rank: 104, name: "Trevenant", count: 2, usagePct: 0.3, top8Count: 1 },
  { rank: 105, name: "Toxicroak", count: 2, usagePct: 0.3, top8Count: 0 },
  { rank: 106, name: "Hydrapple", count: 2, usagePct: 0.3, top8Count: 0 },
  { rank: 107, name: "Hisuian Goodra", count: 2, usagePct: 0.3, top8Count: 0 },
  { rank: 108, name: "Armarouge", count: 2, usagePct: 0.3, top8Count: 0 },
  { rank: 109, name: "Spiritomb", count: 2, usagePct: 0.3, top8Count: 0 },
  { rank: 110, name: "Cofagrigus", count: 2, usagePct: 0.3, top8Count: 0 },
  { rank: 111, name: "Mow Rotom", count: 2, usagePct: 0.3, top8Count: 0 },
  { rank: 112, name: "Raichu", count: 2, usagePct: 0.3, top8Count: 0 },
  { rank: 113, name: "Ninetales", count: 2, usagePct: 0.3, top8Count: 0 },
  { rank: 114, name: "Ariados", count: 2, usagePct: 0.3, top8Count: 1 },
  { rank: 115, name: "Sharpedo", count: 2, usagePct: 0.3, top8Count: 1 },
  { rank: 116, name: "Rhyperior", count: 2, usagePct: 0.3, top8Count: 0 },
  { rank: 117, name: "Hisuian Decidueye", count: 2, usagePct: 0.3, top8Count: 0 },
  { rank: 118, name: "Starmie", count: 2, usagePct: 0.3, top8Count: 0 },
  { rank: 119, name: "Conkeldurr", count: 2, usagePct: 0.3, top8Count: 1 },
  { rank: 120, name: "Slowbro", count: 1, usagePct: 0.1, top8Count: 1 },
  { rank: 121, name: "Appletun", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 122, name: "Heracross", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 123, name: "Galarian Slowbro", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 124, name: "Medicham", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 125, name: "Basculegion-F", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 126, name: "Emolga", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 127, name: "Alcremie", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 128, name: "Clawitzer", count: 1, usagePct: 0.1, top8Count: 1 },
  { rank: 129, name: "Simisage", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 130, name: "Runerigus", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 131, name: "Slowking", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 132, name: "Altaria", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 133, name: "Torterra", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 134, name: "Ditto", count: 1, usagePct: 0.1, top8Count: 1 },
  { rank: 135, name: "Bastiodon", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 136, name: "Machamp", count: 1, usagePct: 0.1, top8Count: 1 },
  { rank: 137, name: "Typhlosion", count: 1, usagePct: 0.1, top8Count: 1 },
  { rank: 138, name: "Emboar", count: 1, usagePct: 0.1, top8Count: 1 },
  { rank: 139, name: "Infernape", count: 1, usagePct: 0.1, top8Count: 1 },
  { rank: 140, name: "Jolteon", count: 1, usagePct: 0.1, top8Count: 1 },
  { rank: 141, name: "Beartic", count: 1, usagePct: 0.1, top8Count: 1 },
  { rank: 142, name: "Gliscor", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 143, name: "Audino", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 144, name: "Roserade", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 145, name: "Simipour", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 146, name: "Victreebel", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 147, name: "Leafeon", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 148, name: "Orthworm", count: 1, usagePct: 0.1, top8Count: 0 },
  { rank: 149, name: "Frost Rotom", count: 1, usagePct: 0.1, top8Count: 0 },
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
  { id: "ct-1", tournament: "Intimidators Champions Challenge #17 REG M-A", players: 17, placement: 1, player: "lucardrgs", wins: 7, losses: 1, pokemonIds: [903, 727, 670, 1013, 6, 983], pokemonNames: ["Sneasler", "Incineroar", "Floette", "Sinistcha", "Charizard", "Kingambit"], sets: [
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Coaching"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Parting Shot", "Will-O-Wisp", "Fake Out"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Protect", "Trick Room"] },
    { ability: "Blaze", item: "Charizardite X", moves: ["Flare Blitz", "Dragon Claw", "Dragon Dance", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] }
  ] },
  { id: "ct-2", tournament: "Intimidators Champions Challenge #17 REG M-A", players: 17, placement: 2, player: "TaoDoSavio", wins: 6, losses: 2, pokemonIds: [727, 1013, 903, 670, 6, 983], pokemonNames: ["Incineroar", "Sinistcha", "Sneasler", "Floette", "Charizard", "Kingambit"], sets: [
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Protect"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Fake Out", "Close Combat", "Dire Claw", "Coaching"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Blaze", item: "Charizardite X", moves: ["Flare Blitz", "Dragon Claw", "Dragon Dance", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] }
  ] },
  { id: "ct-3", tournament: "Intimidators Champions Challenge #17 REG M-A", players: 17, placement: 3, player: "NMR | Gostzin I", wins: 4, losses: 3, pokemonIds: [902, 780, 547, 670, 903, 10008], pokemonNames: ["Basculegion-M", "Drampa", "Whimsicott", "Floette", "Sneasler", "Heat Rotom"], sets: [
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Aqua Jet", "Flip Turn", "Last Respects", "Wave Crash"] },
    { ability: "Cloud Nine", item: "Chople Berry", moves: ["Earth Power", "Flamethrower", "Draco Meteor", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Protect", "Encore"] },
    { ability: "Fairy Aura", item: "Floettite", moves: ["Light of Ruin", "Moonblast", "Protect", "Dazzling Gleam"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Protect", "Dire Claw", "Close Combat"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Will-O-Wisp", "Thunderbolt", "Protect", "Overheat"] }
  ] },
  { id: "ct-4", tournament: "Intimidators Champions Challenge #17 REG M-A", players: 17, placement: 4, player: "Dibraldinho13", wins: 4, losses: 3, pokemonIds: [6, 670, 983, 445, 547, 902], pokemonNames: ["Charizard", "Floette", "Kingambit", "Garchomp", "Whimsicott", "Basculegion-M"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Poison Jab", "Earthquake", "Rock Slide", "Dragon Claw"] },
    { ability: "Prankster", item: "Coba Berry", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-5", tournament: "Intimidators Champions Challenge #17 REG M-A", players: 17, placement: 5, player: "LucasVBC", wins: 4, losses: 2, pokemonIds: [306, 142, 115, 727, 212, 1013], pokemonNames: ["Aggron", "Aerodactyl", "Kangaskhan", "Incineroar", "Scizor", "Sinistcha"], sets: [
    { ability: "Heavy Metal", item: "Aggronite", moves: ["Iron Defense", "Body Press", "Heavy Slam", "Protect"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Rock Slide", "Dual Wingbeat", "Wide Guard", "Tailwind"] },
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Fake Out", "Double-Edge", "Drain Punch", "Sucker Punch"] },
    { ability: "Intimidate", item: "Leftovers", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Taunt"] },
    { ability: "Technician", item: "Metal Coat", moves: ["Bullet Punch", "Bug Bite", "Dual Wingbeat", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Trick Room", "Rage Powder", "Pain Split"] }
  ] },
  { id: "ct-6", tournament: "Intimidators Champions Challenge #17 REG M-A", players: 17, placement: 6, player: "Victor Matheus", wins: 4, losses: 2, pokemonIds: [983, 903, 478, 952, 902, 745], pokemonNames: ["Kingambit", "Sneasler", "Froslass", "Scovillain", "Basculegion-M", "Lycanroc"], sets: [
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Aurora Veil", "Shadow Ball", "Protect"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Overheat", "Rage Powder", "Giga Drain", "Protect"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Aqua Jet", "Wave Crash", "Last Respects", "Protect"] },
    { ability: "Tough Claws", item: "Focus Sash", moves: ["Rock Slide", "Accelerock", "Close Combat", "Protect"] }
  ] },
  { id: "ct-7", tournament: "Intimidators Champions Challenge #17 REG M-A", players: 17, placement: 7, player: "AlexIannoneVGC", wins: 3, losses: 3, pokemonIds: [160, 983, 903, 700, 10008, 1013], pokemonNames: ["Feraligatr", "Kingambit", "Sneasler", "Sylveon", "Heat Rotom", "Sinistcha"], sets: [
    { ability: "Sheer Force", item: "Feraligite", moves: ["Liquidation", "Dragon Dance", "Body Slam", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Protect", "Swords Dance"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Quick Attack", "Detect", "Hyper Beam", "Hyper Voice"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Volt Switch", "Electroweb", "Thunderbolt", "Overheat"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Trick Room", "Protect", "Matcha Gotcha", "Rage Powder"] }
  ] },
  { id: "ct-8", tournament: "Intimidators Champions Challenge #17 REG M-A", players: 17, placement: 8, player: "Zantut", wins: 3, losses: 3, pokemonIds: [9, 670, 902, 115, 547, 981], pokemonNames: ["Blastoise", "Floette", "Basculegion-M", "Kangaskhan", "Whimsicott", "Farigiraf"], sets: [
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Protect", "Water Spout", "Aura Sphere", "Dark Pulse"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Dazzling Gleam", "Moonblast", "Light of Ruin"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Protect", "Aqua Jet", "Liquidation", "Last Respects"] },
    { ability: "Scrappy", item: "Silk Scarf", moves: ["Fake Out", "Last Resort"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Protect", "Moonblast", "Encore", "Tailwind"] },
    { ability: "Armor Tail", item: "Mental Herb", moves: ["Twin Beam", "Rain Dance", "Trick Room", "Protect"] }
  ] },
  { id: "ct-9", tournament: "Talon's FIGHT CLUB #88 POKEMON CHAMPIONS", players: 50, placement: 1, player: "SuperDialga", wins: 8, losses: 2, pokemonIds: [670, 547, 902, 983, 1018, 5059], pokemonNames: ["Floette", "Whimsicott", "Basculegion-M", "Kingambit", "Archaludon", "Hisuian Arcanine"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Flip Turn"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Protect"] },
    { ability: "Sturdy", item: "White Herb", moves: ["Draco Meteor", "Flash Cannon", "Aura Sphere", "Protect"] },
    { ability: "Rock Head", item: "Sitrus Berry", moves: ["Flare Blitz", "Rock Slide", "Extreme Speed", "Protect"] }
  ] },
  { id: "ct-10", tournament: "Talon's FIGHT CLUB #88 POKEMON CHAMPIONS", players: 50, placement: 2, player: "QueerCrocodile", wins: 9, losses: 1, pokemonIds: [670, 547, 5059, 902, 983, 1018], pokemonNames: ["Floette", "Whimsicott", "Hisuian Arcanine", "Basculegion-M", "Kingambit", "Archaludon"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"] },
    { ability: "Rock Head", item: "Sitrus Berry", moves: ["Rock Slide", "Flare Blitz", "Extreme Speed", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Sturdy", item: "White Herb", moves: ["Aura Sphere", "Draco Meteor", "Flash Cannon", "Protect"] }
  ] },
  { id: "ct-11", tournament: "Talon's FIGHT CLUB #88 POKEMON CHAMPIONS", players: 50, placement: 3, player: "TimidTailwind", wins: 7, losses: 2, pokemonIds: [666, 1013, 350, 727, 937, 670], pokemonNames: ["Vivillon", "Sinistcha", "Milotic", "Incineroar", "Ceruledge", "Floette"], sets: [
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Hurricane", "Sleep Powder", "Rage Powder", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Muddy Water", "Coil", "Hypnosis", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Flash Fire", item: "Colbur Berry", moves: ["Bitter Blade", "Shadow Sneak", "Bulk Up", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Draining Kiss", "Calm Mind", "Protect"] }
  ] },
  { id: "ct-12", tournament: "Talon's FIGHT CLUB #88 POKEMON CHAMPIONS", players: 50, placement: 4, player: "Altkyle", wins: 6, losses: 3, pokemonIds: [149, 902, 212, 1018, 279, 727], pokemonNames: ["Dragonite", "Basculegion-M", "Scizor", "Archaludon", "Pelipper", "Incineroar"], sets: [
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Dragon Pulse", "Flamethrower", "Tailwind", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Close Combat", "Swords Dance", "Protect"] },
    { ability: "Stamina", item: "Chople Berry", moves: ["Electro Shot", "Dragon Pulse", "Aura Sphere", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Weather Ball", "Tailwind", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] }
  ] },
  { id: "ct-13", tournament: "Talon's FIGHT CLUB #88 POKEMON CHAMPIONS", players: 50, placement: 5, player: "Quewin2406", wins: 6, losses: 2, pokemonIds: [143, 186, 727, 1013, 94, 701], pokemonNames: ["Snorlax", "Politoed", "Incineroar", "Sinistcha", "Gengar", "Hawlucha"], sets: [
    { ability: "Thick Fat", item: "Leftovers", moves: ["Protect", "Body Press", "Fissure", "Stockpile"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Perish Song", "Encore", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Parting Shot", "Protect", "Throat Chop", "Fake Out"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Protect", "Trick Room", "Matcha Gotcha", "Rage Powder"] },
    { ability: "Cursed Body", item: "Gengarite", moves: ["Protect", "Shadow Ball", "Disable", "Perish Song"] },
    { ability: "Limber", item: "Hawluchanite", moves: ["Detect", "Close Combat", "Brave Bird", "Entrainment"] }
  ] },
  { id: "ct-14", tournament: "Talon's FIGHT CLUB #88 POKEMON CHAMPIONS", players: 50, placement: 6, player: "Storm2184", wins: 6, losses: 2, pokemonIds: [655, 903, 983, 763, 902, 142], pokemonNames: ["Delphox", "Sneasler", "Kingambit", "Tsareena", "Basculegion-M", "Aerodactyl"], sets: [
    { ability: "Magician", item: "Delphoxite", moves: ["Protect", "Calm Mind", "Psychic", "Heat Wave"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Sucker Punch", "Kowtow Cleave", "Iron Head"] },
    { ability: "Queenly Majesty", item: "Choice Scarf", moves: ["Power Whip", "Triple Axel", "Low Kick", "Knock Off"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Protect", "Aqua Jet", "Wave Crash", "Last Respects"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Protect", "Tailwind", "Dual Wingbeat", "Rock Slide"] }
  ] },
  { id: "ct-15", tournament: "Talon's FIGHT CLUB #88 POKEMON CHAMPIONS", players: 50, placement: 7, player: "GloriWasHere", wins: 5, losses: 3, pokemonIds: [670, 445, 823, 10008, 959, 248], pokemonNames: ["Floette", "Garchomp", "Corviknight", "Heat Rotom", "Tinkaton", "Tyranitar"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Light of Ruin", "Moonblast", "Dazzling Gleam", "Protect"] },
    { ability: "Rough Skin", item: "Garchompite", moves: ["Scale Shot", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Unnerve", item: "Leftovers", moves: ["Tailwind", "Brave Bird", "Iron Head", "Protect"] },
    { ability: "Levitate", item: "Charcoal", moves: ["Overheat", "Thunderbolt", "Will-O-Wisp", "Light Screen"] },
    { ability: "Mold Breaker", item: "Occa Berry", moves: ["Fake Out", "Gigaton Hammer", "Encore", "Protect"] },
    { ability: "Sand Stream", item: "Focus Sash", moves: ["Rock Slide", "Knock Off", "Low Kick", "Protect"] }
  ] },
  { id: "ct-16", tournament: "Talon's FIGHT CLUB #88 POKEMON CHAMPIONS", players: 50, placement: 8, player: "almondspy", wins: 5, losses: 3, pokemonIds: [149, 727, 748, 1013, 1018, 80], pokemonNames: ["Dragonite", "Incineroar", "Toxapex", "Sinistcha", "Archaludon", "Slowbro"], sets: [
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Air Slash", "Roost", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Parting Shot"] },
    { ability: "Regenerator", item: "Leftovers", moves: ["Toxic", "Infestation", "Recover", "Baneful Bunker"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Stamina", item: "Sitrus Berry", moves: ["Dragon Pulse", "Aura Sphere", "Electro Shot", "Protect"] },
    { ability: "Regenerator", item: "Slowbronite", moves: ["Body Press", "Iron Defense", "Slack Off", "Scald"] }
  ] },
  { id: "ct-17", tournament: "[REG M-A] LearningtoSam's Weekly", players: 29, placement: 1, player: "SuperDialga", wins: 6, losses: 1, pokemonIds: [670, 547, 902, 983, 1018, 5059], pokemonNames: ["Floette", "Whimsicott", "Basculegion-M", "Kingambit", "Archaludon", "Hisuian Arcanine"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Flip Turn"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Protect"] },
    { ability: "Sturdy", item: "White Herb", moves: ["Draco Meteor", "Flash Cannon", "Aura Sphere", "Protect"] },
    { ability: "Rock Head", item: "Sitrus Berry", moves: ["Flare Blitz", "Rock Slide", "Extreme Speed", "Protect"] }
  ] },
  { id: "ct-18", tournament: "[REG M-A] LearningtoSam's Weekly", players: 29, placement: 2, player: "IcyMomentum", wins: 5, losses: 2, pokemonIds: [547, 925, 655, 784, 763, 310], pokemonNames: ["Whimsicott", "Maushold", "Delphox", "Kommo-o", "Tsareena", "Manectric"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Sunny Day", "Protect"] },
    { ability: "Friend Guard", item: "Sitrus Berry", moves: ["Follow Me", "Protect", "Baby-Doll Eyes", "Taunt"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Nasty Plot", "Protect"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clangorous Soul", "Protect", "Aura Sphere", "Clanging Scales"] },
    { ability: "Queenly Majesty", item: "Choice Scarf", moves: ["Power Whip", "Triple Axel", "Low Kick", "U-turn"] },
    { ability: "Lightning Rod", item: "Manectite", moves: ["Volt Switch", "Snarl", "Protect", "Thunderbolt"] }
  ] },
  { id: "ct-19", tournament: "[REG M-A] LearningtoSam's Weekly", players: 29, placement: 3, player: "BERNAMONAS", wins: 4, losses: 2, pokemonIds: [6, 727, 981, 700, 142, 445], pokemonNames: ["Charizard", "Incineroar", "Farigiraf", "Sylveon", "Aerodactyl", "Garchomp"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Protect", "Solar Beam"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Parting Shot"] },
    { ability: "Armor Tail", item: "Twisted Spoon", moves: ["Psychic", "Helping Hand", "Trick Room", "Imprison"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Moonblast", "Quick Attack", "Detect"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Sunny Day"] },
    { ability: "Rough Skin", item: "Garchompite", moves: ["Stomping Tantrum", "Dragon Claw", "Earthquake", "Protect"] }
  ] },
  { id: "ct-20", tournament: "[REG M-A] LearningtoSam's Weekly", players: 29, placement: 4, player: "Gorgonzill", wins: 4, losses: 2, pokemonIds: [6, 981, 142, 445, 727, 700], pokemonNames: ["Charizard", "Farigiraf", "Aerodactyl", "Garchomp", "Incineroar", "Sylveon"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Weather Ball", "Solar Beam"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Protect", "Psychic", "Helping Hand", "Trick Room"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Tailwind", "Wide Guard", "Rock Slide", "Sunny Day"] },
    { ability: "Rough Skin", item: "Garchompite", moves: ["Rock Tomb", "Protect", "Earthquake", "Dragon Claw"] },
    { ability: "Intimidate", item: "Charcoal", moves: ["Fake Out", "Flare Blitz", "Darkest Lariat", "Parting Shot"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Detect", "Quick Attack", "Hyper Voice", "Hyper Beam"] }
  ] },
  { id: "ct-21", tournament: "[REG M-A] LearningtoSam's Weekly", players: 29, placement: 5, player: "Steady96", wins: 4, losses: 1, pokemonIds: [823, 635, 478, 445, 5059, 248], pokemonNames: ["Corviknight", "Hydreigon", "Froslass", "Garchomp", "Hisuian Arcanine", "Tyranitar"], sets: [
    { ability: "Mirror Armor", item: "Occa Berry", moves: ["Brave Bird", "Iron Head", "Tailwind", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Dark Pulse", "Draco Meteor", "Earth Power", "Snarl"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Protect", "Shadow Ball", "Aurora Veil"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Rock Slide", "Dragon Claw", "Protect"] },
    { ability: "Rock Head", item: "Focus Sash", moves: ["Protect", "Head Smash", "Extreme Speed", "Flare Blitz"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Low Kick", "Protect"] }
  ] },
  { id: "ct-22", tournament: "[REG M-A] LearningtoSam's Weekly", players: 29, placement: 6, player: "thepostmanp", wins: 4, losses: 1, pokemonIds: [727, 670, 1013, 6, 983, 903], pokemonNames: ["Incineroar", "Floette", "Sinistcha", "Charizard", "Kingambit", "Sneasler"], sets: [
    { ability: "Intimidate", item: "Leftovers", moves: ["Throat Chop", "Fake Out", "Flare Blitz", "Parting Shot"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Draining Kiss", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Blaze", item: "Charizardite X", moves: ["Breaking Swipe", "Flare Blitz", "Dragon Dance", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Protect", "Iron Head"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Coaching"] }
  ] },
  { id: "ct-23", tournament: "[REG M-A] LearningtoSam's Weekly", players: 29, placement: 7, player: "Charley O", wins: 3, losses: 2, pokemonIds: [6, 547, 445, 983, 902, 970], pokemonNames: ["Charizard", "Whimsicott", "Garchomp", "Kingambit", "Basculegion-M", "Glimmora"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] }
  ] },
  { id: "ct-24", tournament: "[REG M-A] LearningtoSam's Weekly", players: 29, placement: 8, player: "BountyOG", wins: 3, losses: 2, pokemonIds: [3, 6, 445, 727, 670, 1013], pokemonNames: ["Venusaur", "Charizard", "Garchomp", "Incineroar", "Floette", "Sinistcha"], sets: [
    { ability: "Chlorophyll", item: "Focus Sash", moves: ["Sleep Powder", "Sludge Bomb", "Earth Power", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Solar Beam", "Heat Wave", "Protect", "Weather Ball"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Dragon Claw", "Stomping Tantrum", "Rock Slide", "Earthquake"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Crunch", "Parting Shot"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Moonblast", "Light of Ruin", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] }
  ] },
  { id: "ct-25", tournament: "Hunter's Howl Pokémon Champions M-A Tournament #2", players: 19, placement: 1, player: "MrPokEnjoy", wins: 9, losses: 0, pokemonIds: [6, 635, 94, 983, 445, 547], pokemonNames: ["Charizard", "Hydreigon", "Gengar", "Kingambit", "Garchomp", "Whimsicott"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Draco Meteor", "Earth Power", "Snarl", "Dark Pulse"] },
    { ability: "Cursed Body", item: "Focus Sash", moves: ["Shadow Ball", "Sludge Bomb", "Icy Wind", "Destiny Bond"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Earthquake", "Rock Slide", "Poison Jab", "Dragon Claw"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Protect", "Tailwind", "Encore"] }
  ] },
  { id: "ct-26", tournament: "Hunter's Howl Pokémon Champions M-A Tournament #2", players: 19, placement: 2, player: "TitanoPigro3", wins: 6, losses: 3, pokemonIds: [547, 970, 6, 445, 983, 902], pokemonNames: ["Whimsicott", "Glimmora", "Charizard", "Garchomp", "Kingambit", "Basculegion-M"], sets: [
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Poison Jab", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Low Kick"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-27", tournament: "Hunter's Howl Pokémon Champions M-A Tournament #2", players: 19, placement: 3, player: "NachoVGCs", wins: 5, losses: 3, pokemonIds: [94, 10103, 983, 727, 903, 142], pokemonNames: ["Gengar", "Alolan Ninetales", "Kingambit", "Incineroar", "Sneasler", "Aerodactyl"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Shadow Ball", "Perish Song", "Disable", "Protect"] },
    { ability: "Snow Warning", item: "Never-Melt Ice", moves: ["Blizzard", "Encore", "Aurora Veil", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Swords Dance", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Protect", "Fake Out", "Parting Shot"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Protect", "Wide Guard"] }
  ] },
  { id: "ct-28", tournament: "Hunter's Howl Pokémon Champions M-A Tournament #2", players: 19, placement: 4, player: "Endy_2006", wins: 5, losses: 3, pokemonIds: [983, 670, 547, 902, 6, 981], pokemonNames: ["Kingambit", "Floette", "Whimsicott", "Basculegion-M", "Charizard", "Farigiraf"], sets: [
    { ability: "Defiant", item: "Chople Berry", moves: ["Iron Head", "Low Kick", "Protect", "Sucker Punch"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Calm Mind", "Dazzling Gleam", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Sunny Day"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Aqua Jet", "Wave Crash", "Flip Turn"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Weather Ball", "Protect", "Heat Wave", "Solar Beam"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Imprison", "Trick Room", "Hyper Voice", "Twin Beam"] }
  ] },
  { id: "ct-29", tournament: "Hunter's Howl Pokémon Champions M-A Tournament #2", players: 19, placement: 5, player: "bootlegflanderz", wins: 5, losses: 2, pokemonIds: [939, 730, 709, 981, 208, 727], pokemonNames: ["Bellibolt", "Primarina", "Trevenant", "Farigiraf", "Steelix", "Incineroar"], sets: [
    { ability: "Electromorphosis", item: "Leftovers", moves: ["Thunderbolt", "Protect", "Acid Spray", "Parabolic Charge"] },
    { ability: "Liquid Voice", item: "Mystic Water", moves: ["Hyper Voice", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Harvest", item: "Sitrus Berry", moves: ["Horn Leech", "Poltergeist", "Protect", "Trick Room"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Psychic Noise", "Helping Hand", "Foul Play", "Trick Room"] },
    { ability: "Sturdy", item: "Steelixite", moves: ["Earthquake", "Rock Slide", "Heavy Slam", "Wide Guard"] },
    { ability: "Intimidate", item: "Shuca Berry", moves: ["Darkest Lariat", "Flare Blitz", "Fake Out", "Parting Shot"] }
  ] },
  { id: "ct-30", tournament: "Hunter's Howl Pokémon Champions M-A Tournament #2", players: 19, placement: 6, player: "catskill", wins: 4, losses: 3, pokemonIds: [142, 445, 350, 983, 727, 903], pokemonNames: ["Aerodactyl", "Garchomp", "Milotic", "Kingambit", "Incineroar", "Sneasler"], sets: [
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Protect", "Rock Slide", "Dual Wingbeat", "Iron Head"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Rock Slide", "Dragon Claw", "Stomping Tantrum"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Protect", "Scald", "Helping Hand", "Recover"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Swords Dance", "Sucker Punch", "Kowtow Cleave", "Iron Head"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Close Combat", "Flare Blitz", "Parting Shot"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Fake Out", "Swords Dance", "Close Combat", "Dire Claw"] }
  ] },
  { id: "ct-31", tournament: "Hunter's Howl Pokémon Champions M-A Tournament #2", players: 19, placement: 7, player: "OGalbina", wins: 4, losses: 3, pokemonIds: [6, 727, 981, 700, 142, 445], pokemonNames: ["Charizard", "Incineroar", "Farigiraf", "Sylveon", "Aerodactyl", "Garchomp"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Protect", "Solar Beam"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Parting Shot"] },
    { ability: "Armor Tail", item: "Twisted Spoon", moves: ["Hyper Voice", "Twin Beam", "Trick Room", "Helping Hand"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Moonblast", "Quick Attack", "Detect"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Rock Slide", "Tailwind", "Wide Guard", "Sunny Day"] },
    { ability: "Rough Skin", item: "Garchompite", moves: ["Stomping Tantrum", "Dragon Claw", "Earthquake", "Protect"] }
  ] },
  { id: "ct-32", tournament: "Hunter's Howl Pokémon Champions M-A Tournament #2", players: 19, placement: 8, player: "CArlosP", wins: 4, losses: 3, pokemonIds: [655, 10009, 445, 903, 547, 983], pokemonNames: ["Delphox", "Wash Rotom", "Garchomp", "Sneasler", "Whimsicott", "Kingambit"], sets: [
    { ability: "Magician", item: "Delphoxite", moves: ["Psyshock", "Heat Wave", "Nasty Plot", "Protect"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Hydro Pump", "Thunderbolt", "Will-O-Wisp", "Helping Hand"] },
    { ability: "Rough Skin", item: "Haban Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Iron Head"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Encore", "Energy Ball", "Moonblast"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Swords Dance", "Protect"] }
  ] },
  { id: "ct-33", tournament: "Hatterene Series W24/2026 - Champions M-A", players: 10, placement: 1, player: "AceEmerald", wins: 4, losses: 2, pokemonIds: [445, 130, 1013, 6, 903, 3], pokemonNames: ["Garchomp", "Gyarados", "Sinistcha", "Charizard", "Sneasler", "Venusaur"], sets: [
    { ability: "Rough Skin", item: "Dragon Fang", moves: ["Earthquake", "Rock Slide", "Scale Shot", "Protect"] },
    { ability: "Intimidate", item: "Gyaradosite", moves: ["Waterfall", "Lash Out", "Dragon Dance", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Coaching", "Fake Out"] },
    { ability: "Chlorophyll", item: "Focus Sash", moves: ["Sleep Powder", "Sludge Bomb", "Earth Power", "Protect"] }
  ] },
  { id: "ct-34", tournament: "Hatterene Series W24/2026 - Champions M-A", players: 10, placement: 2, player: "picofarad", wins: 3, losses: 3, pokemonIds: [952, 186, 956, 1018, 903, 149], pokemonNames: ["Scovillain", "Politoed", "Espathra", "Archaludon", "Sneasler", "Dragonite"], sets: [
    { ability: "Moody", item: "Scovillainite", moves: ["Overheat", "Leech Seed", "Rage Powder", "Protect"] },
    { ability: "Drizzle", item: "Mystic Water", moves: ["Protect", "Muddy Water", "Weather Ball", "Ice Beam"] },
    { ability: "Speed Boost", item: "Sitrus Berry", moves: ["Calm Mind", "Protect", "Lumina Crash", "Baton Pass"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Protect", "Dragon Pulse", "Hurricane", "Extreme Speed"] }
  ] },
  { id: "ct-35", tournament: "Hatterene Series W24/2026 - Champions M-A", players: 10, placement: 3, player: "merrypasta", wins: 4, losses: 1, pokemonIds: [282, 903, 925, 902, 1018, 279], pokemonNames: ["Gardevoir", "Sneasler", "Maushold", "Basculegion-M", "Archaludon", "Pelipper"], sets: [
    { ability: "Trace", item: "Gardevoirite", moves: ["Hyper Voice", "Psyshock", "Protect", "Vacuum Wave"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Protect", "Fake Out"] },
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Super Fang", "Follow Me", "Protect", "Rain Dance"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Protect", "Flash Cannon"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Hurricane", "Wide Guard", "Tailwind"] }
  ] },
  { id: "ct-36", tournament: "Hatterene Series W24/2026 - Champions M-A", players: 10, placement: 4, player: "Ophelia C", wins: 3, losses: 2, pokemonIds: [358, 983, 1018, 279, 637, 695], pokemonNames: ["Chimecho", "Kingambit", "Archaludon", "Pelipper", "Volcarona", "Heliolisk"], sets: [
    { ability: "Levitate", item: "Chimechite", moves: ["Psychic", "Trick Room", "Protect", "Heal Pulse"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Iron Head", "Kowtow Cleave", "Sucker Punch", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Aura Sphere", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Weather Ball", "Protect", "Tailwind"] },
    { ability: "Flame Body", item: "Sitrus Berry", moves: ["Rage Powder", "Struggle Bug", "Heat Wave", "Protect"] },
    { ability: "Solar Power", item: "Magnet", moves: ["Thunderbolt", "Volt Switch", "Hyper Voice", "Protect"] }
  ] },
  { id: "ct-37", tournament: "Hatterene Series W24/2026 - Champions M-A", players: 10, placement: 5, player: "Gaëlle Coe", wins: 2, losses: 2, pokemonIds: [3, 730, 823, 445, 248, 10008], pokemonNames: ["Venusaur", "Primarina", "Corviknight", "Garchomp", "Tyranitar", "Heat Rotom"], sets: [
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Sludge Bomb", "Giga Drain", "Protect", "Earth Power"] },
    { ability: "Liquid Voice", item: "Sitrus Berry", moves: ["Hyper Voice", "Moonblast", "Protect", "Psychic"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Iron Head", "Body Press", "Roost", "Bulk Up"] },
    { ability: "Sand Veil", item: "Bright Powder", moves: ["Earthquake", "Rock Slide", "Protect", "Dragon Claw"] },
    { ability: "Sand Stream", item: "Focus Sash", moves: ["Rock Slide", "Knock Off", "Protect", "Dragon Dance"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Overheat", "Thunderbolt", "Volt Switch", "Electroweb"] }
  ] },
  { id: "ct-38", tournament: "Hatterene Series W24/2026 - Champions M-A", players: 10, placement: 6, player: "MeganVGC", wins: 2, losses: 2, pokemonIds: [970, 637, 635, 350, 1013, 547], pokemonNames: ["Glimmora", "Volcarona", "Hydreigon", "Milotic", "Sinistcha", "Whimsicott"], sets: [
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Spiky Shield"] },
    { ability: "Flame Body", item: "Charcoal", moves: ["Fiery Dance", "Giga Drain", "Quiver Dance", "Protect"] },
    { ability: "Levitate", item: "Scope Lens", moves: ["Draco Meteor", "Dark Pulse", "Focus Energy", "Protect"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Scald", "Ice Beam", "Recover", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Strength Sap", "Rage Powder", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] }
  ] },
  { id: "ct-39", tournament: "*Sitrus-Series*|Champions|$50 to First Place|#62", players: 108, placement: 1, player: "KoonKy2", wins: 10, losses: 2, pokemonIds: [445, 547, 903, 6, 983, 902], pokemonNames: ["Garchomp", "Whimsicott", "Sneasler", "Charizard", "Kingambit", "Basculegion-M"], sets: [
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Earthquake", "Rock Slide", "Poison Jab", "Dragon Claw"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Drought", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-40", tournament: "*Sitrus-Series*|Champions|$50 to First Place|#62", players: 108, placement: 2, player: "Altkyle", wins: 9, losses: 3, pokemonIds: [149, 902, 212, 1018, 279, 727], pokemonNames: ["Dragonite", "Basculegion-M", "Scizor", "Archaludon", "Pelipper", "Incineroar"], sets: [
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Dragon Pulse", "Flamethrower", "Tailwind", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Close Combat", "Swords Dance", "Protect"] },
    { ability: "Stamina", item: "Chople Berry", moves: ["Electro Shot", "Dragon Pulse", "Aura Sphere", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Weather Ball", "Tailwind", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] }
  ] },
  { id: "ct-41", tournament: "*Sitrus-Series*|Champions|$50 to First Place|#62", players: 108, placement: 3, player: "Risten Labba", wins: 9, losses: 2, pokemonIds: [823, 248, 635, 478, 445, 5059], pokemonNames: ["Corviknight", "Tyranitar", "Hydreigon", "Froslass", "Garchomp", "Hisuian Arcanine"], sets: [
    { ability: "Mirror Armor", item: "Occa Berry", moves: ["Protect", "Tailwind", "Brave Bird", "Iron Head"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Protect", "Rock Slide", "Knock Off", "Low Kick"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Dark Pulse", "Snarl", "Draco Meteor", "Earth Power"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Protect", "Weather Ball", "Blizzard", "Shadow Ball"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"] },
    { ability: "Rock Head", item: "Focus Sash", moves: ["Protect", "Extreme Speed", "Head Smash", "Flare Blitz"] }
  ] },
  { id: "ct-42", tournament: "*Sitrus-Series*|Champions|$50 to First Place|#62", players: 108, placement: 4, player: "averagememer57", wins: 8, losses: 3, pokemonIds: [6, 3, 981, 727, 784, 324], pokemonNames: ["Charizard", "Venusaur", "Farigiraf", "Incineroar", "Kommo-o", "Torkoal"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Chlorophyll", item: "Focus Sash", moves: ["Leaf Storm", "Sludge Bomb", "Sleep Powder", "Protect"] },
    { ability: "Armor Tail", item: "Twisted Spoon", moves: ["Psychic", "Trick Room", "Helping Hand", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Darkest Lariat", "Parting Shot"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Aura Sphere", "Clangorous Soul", "Protect"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Heat Wave", "Earth Power", "Protect"] }
  ] },
  { id: "ct-43", tournament: "*Sitrus-Series*|Champions|$50 to First Place|#62", players: 108, placement: 5, player: "AthenaStriveVGC", wins: 9, losses: 1, pokemonIds: [670, 652, 902, 1013, 279, 445], pokemonNames: ["Floette", "Chesnaught", "Basculegion-M", "Sinistcha", "Pelipper", "Garchomp"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Moonblast", "Dazzling Gleam", "Light of Ruin"] },
    { ability: "Bulletproof", item: "Chesnaughtite", moves: ["Spiky Shield", "Wood Hammer", "Body Press", "Iron Defense"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Hospitality", item: "Coba Berry", moves: ["Rage Powder", "Matcha Gotcha", "Life Dew", "Trick Room"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Hurricane", "Tailwind", "Wide Guard"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Protect", "Earthquake", "Poison Jab", "Rock Slide"] }
  ] },
  { id: "ct-44", tournament: "*Sitrus-Series*|Champions|$50 to First Place|#62", players: 108, placement: 6, player: "UmarVGC", wins: 7, losses: 3, pokemonIds: [6, 670, 1013, 445, 727, 3], pokemonNames: ["Charizard", "Floette", "Sinistcha", "Garchomp", "Incineroar", "Venusaur"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Protect", "Weather Ball"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Draining Kiss", "Protect", "Calm Mind"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Dragon Claw", "Earthquake", "Rock Tomb", "Stomping Tantrum"] },
    { ability: "Intimidate", item: "Leftovers", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] },
    { ability: "Chlorophyll", item: "Focus Sash", moves: ["Earth Power", "Sludge Bomb", "Protect", "Sleep Powder"] }
  ] },
  { id: "ct-45", tournament: "*Sitrus-Series*|Champions|$50 to First Place|#62", players: 108, placement: 7, player: "Jorge_prods", wins: 7, losses: 3, pokemonIds: [6, 149, 902, 983, 445, 970], pokemonNames: ["Charizard", "Dragonite", "Basculegion-M", "Kingambit", "Garchomp", "Glimmora"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Overheat", "Solar Beam"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Flamethrower", "Draco Meteor", "Tailwind", "Extreme Speed"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Flip Turn", "Last Respects", "Aqua Jet"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Protect", "Dragon Claw", "Stomping Tantrum", "Rock Tomb"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] }
  ] },
  { id: "ct-46", tournament: "*Sitrus-Series*|Champions|$50 to First Place|#62", players: 108, placement: 8, player: "Jin-Hao Jiang", wins: 7, losses: 3, pokemonIds: [727, 981, 670, 983, 666, 323], pokemonNames: ["Incineroar", "Farigiraf", "Floette", "Kingambit", "Vivillon", "Camerupt"], sets: [
    { ability: "Intimidate", item: "Charcoal", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Darkest Lariat"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Psychic", "Helping Hand", "Trick Room", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Swords Dance"] },
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Sleep Powder", "Rage Powder", "Hurricane", "Protect"] },
    { ability: "Solid Rock", item: "Cameruptite", moves: ["Heat Wave", "Earth Power", "Ancient Power", "Protect"] }
  ] },
  { id: "ct-47", tournament: "Alpensee Tour (Reg M-A) #61 - ✨ for #1!", players: 73, placement: 1, player: "Rees", wins: 9, losses: 2, pokemonIds: [248, 1013, 903, 727, 670, 823], pokemonNames: ["Tyranitar", "Sinistcha", "Sneasler", "Incineroar", "Floette", "Corviknight"], sets: [
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Dragon Dance", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Trick Room", "Rage Powder", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Coaching"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Parting Shot", "Darkest Lariat"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Calm Mind", "Dazzling Gleam", "Draining Kiss", "Protect"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Tailwind", "Iron Head", "Brave Bird", "Roost"] }
  ] },
  { id: "ct-48", tournament: "Alpensee Tour (Reg M-A) #61 - ✨ for #1!", players: 73, placement: 2, player: "Teto2106VGC", wins: 9, losses: 2, pokemonIds: [478, 952, 902, 983, 903, 745], pokemonNames: ["Froslass", "Scovillain", "Basculegion-M", "Kingambit", "Sneasler", "Lycanroc"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Giga Drain", "Overheat", "Rage Powder", "Protect"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Gunk Shot", "Protect", "Fake Out"] },
    { ability: "Tough Claws", item: "Focus Sash", moves: ["Close Combat", "Accelerock", "Rock Slide", "Protect"] }
  ] },
  { id: "ct-49", tournament: "Alpensee Tour (Reg M-A) #61 - ✨ for #1!", players: 73, placement: 3, player: "Jeronimo321", wins: 7, losses: 3, pokemonIds: [655, 670, 727, 1013, 784, 902], pokemonNames: ["Delphox", "Floette", "Incineroar", "Sinistcha", "Kommo-o", "Basculegion-M"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Nasty Plot", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Parting Shot", "Throat Chop", "Flare Blitz"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Soundproof", item: "Dragon Fang", moves: ["Clanging Scales", "Aura Sphere", "Clangorous Soul", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] }
  ] },
  { id: "ct-50", tournament: "Alpensee Tour (Reg M-A) #61 - ✨ for #1!", players: 73, placement: 4, player: "PequenoRei1", wins: 7, losses: 3, pokemonIds: [983, 902, 547, 445, 227, 6], pokemonNames: ["Kingambit", "Basculegion-M", "Whimsicott", "Garchomp", "Skarmory", "Charizard"], sets: [
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Low Kick"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Protect", "Tailwind", "Encore"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Tomb", "Poison Jab"] },
    { ability: "Sturdy", item: "Skarmorite", moves: ["Brave Bird", "Iron Head", "Rock Slide", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Solar Beam", "Heat Wave", "Weather Ball", "Protect"] }
  ] },
  { id: "ct-51", tournament: "Alpensee Tour (Reg M-A) #61 - ✨ for #1!", players: 73, placement: 5, player: "2005SteveNash", wins: 8, losses: 1, pokemonIds: [670, 350, 899, 937, 784, 497], pokemonNames: ["Floette", "Milotic", "Wyrdeer", "Ceruledge", "Kommo-o", "Serperior"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Muddy Water", "Hypnosis", "Coil", "Life Dew"] },
    { ability: "Intimidate", item: "Colbur Berry", moves: ["Psyshield Bash", "Gravity", "Hypnosis", "Trick Room"] },
    { ability: "Flash Fire", item: "Charcoal", moves: ["Bitter Blade", "Shadow Sneak", "Bulk Up", "Protect"] },
    { ability: "Soundproof", item: "Dragon Fang", moves: ["Clanging Scales", "Clangorous Soul", "Drain Punch", "Protect"] },
    { ability: "Contrary", item: "Sitrus Berry", moves: ["Leaf Storm", "Glare", "Reflect", "Light Screen"] }
  ] },
  { id: "ct-52", tournament: "Alpensee Tour (Reg M-A) #61 - ✨ for #1!", players: 73, placement: 6, player: "Frytki", wins: 7, losses: 2, pokemonIds: [983, 149, 903, 902, 727, 670], pokemonNames: ["Kingambit", "Dragonite", "Sneasler", "Basculegion-M", "Incineroar", "Floette"], sets: [
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Flamethrower", "Thunderbolt", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Last Respects", "Liquidation", "Aqua Jet", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Parting Shot", "Flare Blitz", "Throat Chop", "Fake Out"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Moonblast", "Light of Ruin", "Protect"] }
  ] },
  { id: "ct-53", tournament: "Alpensee Tour (Reg M-A) #61 - ✨ for #1!", players: 73, placement: 7, player: "AndreVGC", wins: 6, losses: 3, pokemonIds: [306, 666, 900, 115, 981, 784], pokemonNames: ["Aggron", "Vivillon", "Kleavor", "Kangaskhan", "Farigiraf", "Kommo-o"], sets: [
    { ability: "Sturdy", item: "Aggronite", moves: ["Heavy Slam", "Body Press", "Iron Defense", "Protect"] },
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Pollen Puff", "Rage Powder", "Sleep Powder", "Protect"] },
    { ability: "Sharpness", item: "Choice Scarf", moves: ["Stone Axe", "X-Scissor", "Rock Slide", "Close Combat"] },
    { ability: "Scrappy", item: "Silk Scarf", moves: ["Fake Out", "Last Resort"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Foul Play", "Thunderbolt", "Helping Hand", "Trick Room"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Aura Sphere", "Clangorous Soul", "Protect"] }
  ] },
  { id: "ct-54", tournament: "Alpensee Tour (Reg M-A) #61 - ✨ for #1!", players: 73, placement: 8, player: "Nisanth", wins: 6, losses: 3, pokemonIds: [9, 666, 981, 475, 983, 323], pokemonNames: ["Blastoise", "Vivillon", "Farigiraf", "Gallade", "Kingambit", "Camerupt"], sets: [
    { ability: "Torrent", item: "Blastoisinite", moves: ["Fake Out", "Dark Pulse", "Shell Smash", "Water Spout"] },
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Sleep Powder", "Hurricane", "Tailwind", "Rage Powder"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Psychic", "Helping Hand", "Trick Room", "Protect"] },
    { ability: "Sharpness", item: "White Herb", moves: ["Sacred Sword", "Psycho Cut", "Wide Guard", "Trick Room"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Iron Head", "Kowtow Cleave", "Sucker Punch", "Low Kick"] },
    { ability: "Solid Rock", item: "Cameruptite", moves: ["Heat Wave", "Ancient Power", "Earth Power", "Protect"] }
  ] },
  { id: "ct-55", tournament: "Tenki's Cart - Road to NAIC", players: 18, placement: 1, player: "AMFI", wins: 6, losses: 1, pokemonIds: [142, 983, 700, 981, 6, 445], pokemonNames: ["Aerodactyl", "Kingambit", "Sylveon", "Farigiraf", "Charizard", "Garchomp"], sets: [
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Ice Fang", "Tailwind"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Iron Head"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Detect"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Psychic", "Thunderbolt", "Helping Hand", "Trick Room"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Rough Skin", item: "Haban Berry", moves: ["Dragon Claw", "Rock Slide", "Earthquake", "Protect"] }
  ] },
  { id: "ct-56", tournament: "Tenki's Cart - Road to NAIC", players: 18, placement: 2, player: "PJoker", wins: 6, losses: 1, pokemonIds: [6, 730, 445, 983, 302, 903], pokemonNames: ["Charizard", "Primarina", "Garchomp", "Kingambit", "Sableye", "Sneasler"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Flamethrower", "Ancient Power", "Solar Beam", "Protect"] },
    { ability: "Liquid Voice", item: "Leftovers", moves: ["Hyper Voice", "Moonblast", "Psychic", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Dragon Claw", "Poison Jab", "Earthquake", "Rock Slide"] },
    { ability: "Defiant", item: "Shuca Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Fake Out", "Reflect", "Light Screen", "Will-O-Wisp"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] }
  ] },
  { id: "ct-57", tournament: "Tenki's Cart - Road to NAIC", players: 18, placement: 3, player: "Spinarak167", wins: 4, losses: 2, pokemonIds: [142, 6, 445, 700, 902, 168], pokemonNames: ["Aerodactyl", "Charizard", "Garchomp", "Sylveon", "Basculegion-M", "Ariados"], sets: [
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Stomping Tantrum", "Dragon Claw", "Rock Slide"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Quick Attack", "Hyper Beam", "Detect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Insomnia", item: "Sitrus Berry", moves: ["Knock Off", "String Shot", "Rage Powder", "Protect"] }
  ] },
  { id: "ct-58", tournament: "Tenki's Cart - Road to NAIC", players: 18, placement: 4, player: "Ivothebbrothers", wins: 4, losses: 2, pokemonIds: [903, 663, 983, 445, 478, 10009], pokemonNames: ["Sneasler", "Talonflame", "Kingambit", "Garchomp", "Froslass", "Wash Rotom"], sets: [
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Fake Out", "Close Combat", "Protect"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Tailwind", "Dual Wingbeat", "Flare Blitz", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Protect", "Kowtow Cleave", "Sucker Punch", "Iron Head"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Protect", "Rock Slide", "Earthquake", "Dragon Claw"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Aurora Veil", "Shadow Ball", "Protect"] },
    { ability: "Levitate", item: "Leftovers", moves: ["Protect", "Will-O-Wisp", "Hydro Pump", "Thunderbolt"] }
  ] },
  { id: "ct-59", tournament: "Tenki's Cart - Road to NAIC", players: 18, placement: 5, player: "Candytrouble", wins: 3, losses: 2, pokemonIds: [6, 445, 983, 547, 902, 727], pokemonNames: ["Charizard", "Garchomp", "Kingambit", "Whimsicott", "Basculegion-M", "Incineroar"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Weather Ball", "Heat Wave", "Ancient Power", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Dragon Claw", "Poison Jab", "Earthquake", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Flip Turn", "Last Respects"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Parting Shot"] }
  ] },
  { id: "ct-60", tournament: "Tenki's Cart - Road to NAIC", players: 18, placement: 6, player: "Abe", wins: 3, losses: 2, pokemonIds: [700, 142, 445, 902, 6, 981], pokemonNames: ["Sylveon", "Aerodactyl", "Garchomp", "Basculegion-M", "Charizard", "Farigiraf"], sets: [
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Dual Wingbeat", "Ice Fang", "Tailwind", "Rock Slide"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Earthquake", "Protect", "Rock Slide", "Dragon Claw"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Aqua Jet", "Liquidation", "Protect", "Last Respects"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Protect", "Weather Ball", "Solar Beam"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Hyper Voice", "Helping Hand", "Psychic"] }
  ] },
  { id: "ct-61", tournament: "Tenki's Cart - Road to NAIC", players: 18, placement: 7, player: "Sebas13aguinaga", wins: 2, losses: 2, pokemonIds: [983, 149, 902, 478, 903, 445], pokemonNames: ["Kingambit", "Dragonite", "Basculegion-M", "Froslass", "Sneasler", "Garchomp"], sets: [
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Flamethrower", "Protect", "Thunderbolt", "Dragon Pulse"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Last Respects", "Protect", "Wave Crash", "Aqua Jet"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Shadow Ball", "Aurora Veil", "Blizzard", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Dire Claw", "Fake Out", "Close Combat"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Rock Slide", "Dragon Claw", "Protect", "Earthquake"] }
  ] },
  { id: "ct-62", tournament: "Tenki's Cart - Road to NAIC", players: 18, placement: 8, player: "Romeastwood", wins: 2, losses: 2, pokemonIds: [727, 350, 1013, 903, 670, 6], pokemonNames: ["Incineroar", "Milotic", "Sinistcha", "Sneasler", "Floette", "Charizard"], sets: [
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Muddy Water", "Hypnosis", "Coil", "Recover"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Protect", "Trick Room", "Rage Powder", "Matcha Gotcha"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Protect", "Close Combat", "Fake Out", "Dire Claw"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Blaze", item: "Charizardite X", moves: ["Flare Blitz", "Dragon Claw", "Dragon Dance", "Protect"] }
  ] },
  { id: "ct-63", tournament: "Torneo #8 Ranking PokéChampionsDestiny", players: 20, placement: 1, player: "Goldeboy77", wins: 5, losses: 0, pokemonIds: [983, 6, 445, 902, 727, 547], pokemonNames: ["Kingambit", "Charizard", "Garchomp", "Basculegion-M", "Incineroar", "Whimsicott"], sets: [
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Stomping Tantrum", "Rock Slide", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Intimidate", item: "Leftovers", moves: ["Throat Chop", "Flare Blitz", "Parting Shot", "Fake Out"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] }
  ] },
  { id: "ct-64", tournament: "Torneo #8 Ranking PokéChampionsDestiny", players: 20, placement: 2, player: "Matteo De Ruvo", wins: 4, losses: 1, pokemonIds: [6, 445, 903, 3, 350, 727], pokemonNames: ["Charizard", "Garchomp", "Sneasler", "Venusaur", "Milotic", "Incineroar"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Protect", "Weather Ball"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Rock Slide", "Earthquake", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Chlorophyll", item: "Focus Sash", moves: ["Energy Ball", "Protect", "Sludge Bomb", "Sleep Powder"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Muddy Water", "Protect", "Coil", "Hypnosis"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Fake Out", "Flare Blitz", "Parting Shot", "Throat Chop"] }
  ] },
  { id: "ct-65", tournament: "Torneo #8 Ranking PokéChampionsDestiny", players: 20, placement: 3, player: "xFlecha", wins: 4, losses: 1, pokemonIds: [547, 6, 902, 445, 970, 983], pokemonNames: ["Whimsicott", "Charizard", "Basculegion-M", "Garchomp", "Glimmora", "Kingambit"], sets: [
    { ability: "Prankster", item: "Fairy Feather", moves: ["Protect", "Tailwind", "Moonblast", "Encore"] },
    { ability: "Drought", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Solar Beam", "Weather Ball"] },
    { ability: "Adaptability", item: "Colbur Berry", moves: ["Protect", "Wave Crash", "Last Respects", "Aqua Jet"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Protect", "Earthquake", "Dragon Claw", "Stomping Tantrum"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Spiky Shield", "Power Gem", "Sludge Bomb", "Earth Power"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Kowtow Cleave", "Iron Head", "Sucker Punch"] }
  ] },
  { id: "ct-66", tournament: "Torneo #8 Ranking PokéChampionsDestiny", players: 20, placement: 4, player: "Ismavp97", wins: 3, losses: 2, pokemonIds: [981, 983, 445, 547, 902, 6], pokemonNames: ["Farigiraf", "Kingambit", "Garchomp", "Whimsicott", "Basculegion-M", "Charizard"], sets: [
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Twin Beam", "Helping Hand", "Trick Room", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Protect", "Rock Slide", "Stomping Tantrum", "Dragon Claw"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Protect", "Tailwind", "Encore", "Moonblast"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Flip Turn"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Solar Beam", "Heat Wave", "Weather Ball"] }
  ] },
  { id: "ct-67", tournament: "Torneo #8 Ranking PokéChampionsDestiny", players: 20, placement: 5, player: "Soosendosen", wins: 3, losses: 2, pokemonIds: [6, 727, 903, 983, 670, 1013], pokemonNames: ["Charizard", "Incineroar", "Sneasler", "Kingambit", "Floette", "Sinistcha"], sets: [
    { ability: "Blaze", item: "Charizardite X", moves: ["Protect", "Temper Flare", "Dragon Claw", "Dragon Dance"] },
    { ability: "Intimidate", item: "Leftovers", moves: ["Fake Out", "Parting Shot", "Flare Blitz", "Helping Hand"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Fake Out", "Coaching", "Close Combat", "Dire Claw"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Kowtow Cleave", "Sucker Punch", "Iron Head"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Dazzling Gleam", "Draining Kiss", "Calm Mind"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Protect", "Trick Room"] }
  ] },
  { id: "ct-68", tournament: "Torneo #8 Ranking PokéChampionsDestiny", players: 20, placement: 6, player: "Saulas", wins: 3, losses: 2, pokemonIds: [547, 670, 6, 902, 903, 445], pokemonNames: ["Whimsicott", "Floette", "Charizard", "Basculegion-M", "Sneasler", "Garchomp"], sets: [
    { ability: "Prankster", item: "Fairy Feather", moves: ["Protect", "Encore", "Tailwind", "Moonblast"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Solar Beam", "Weather Ball"] },
    { ability: "Adaptability", item: "Colbur Berry", moves: ["Protect", "Wave Crash", "Last Respects", "Aqua Jet"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Stomping Tantrum", "Dragon Claw", "Earthquake", "Protect"] }
  ] },
  { id: "ct-69", tournament: "Torneo #8 Ranking PokéChampionsDestiny", players: 20, placement: 7, player: "Mewoxys", wins: 3, losses: 2, pokemonIds: [6, 142, 983, 700, 445, 981], pokemonNames: ["Charizard", "Aerodactyl", "Kingambit", "Sylveon", "Garchomp", "Farigiraf"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Detect"] },
    { ability: "Rough Skin", item: "Focus Sash", moves: ["Earthquake", "Dragon Claw", "Stomping Tantrum", "Protect"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Psyshock", "Helping Hand", "Trick Room", "Protect"] }
  ] },
  { id: "ct-70", tournament: "Torneo #8 Ranking PokéChampionsDestiny", players: 20, placement: 8, player: "ProgramVoid", wins: 3, losses: 2, pokemonIds: [142, 670, 1013, 727, 903, 6], pokemonNames: ["Aerodactyl", "Floette", "Sinistcha", "Incineroar", "Sneasler", "Charizard"], sets: [
    { ability: "Unnerve", item: "Focus Sash", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Life Dew"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Protect", "Fake Out"] },
    { ability: "Blaze", item: "Charizardite X", moves: ["Dragon Claw", "Flare Blitz", "Dragon Dance", "Protect"] }
  ] },
  { id: "ct-71", tournament: "WARTORTLE WEEK NAIC PREP REG M-A BO3 SWISS", players: 16, placement: 1, player: "tsumi88", wins: 7, losses: 1, pokemonIds: [149, 983, 902, 727, 670, 903], pokemonNames: ["Dragonite", "Kingambit", "Basculegion-M", "Incineroar", "Floette", "Sneasler"], sets: [
    { ability: "Multiscale", item: "Dragon Fang", moves: ["Dragon Claw", "Extreme Speed", "Low Kick", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Parting Shot"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] }
  ] },
  { id: "ct-72", tournament: "WARTORTLE WEEK NAIC PREP REG M-A BO3 SWISS", players: 16, placement: 2, player: "Nervo2103", wins: 6, losses: 2, pokemonIds: [900, 547, 6, 902, 903, 983], pokemonNames: ["Kleavor", "Whimsicott", "Charizard", "Basculegion-M", "Sneasler", "Kingambit"], sets: [
    { ability: "Sharpness", item: "Choice Scarf", moves: ["Stone Axe", "U-turn", "Rock Slide", "Close Combat"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Protect", "Encore", "Moonblast"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Weather Ball", "Heat Wave", "Solar Beam"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Protect", "Wave Crash", "Aqua Jet", "Last Respects"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Protect", "Fake Out"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Iron Head", "Low Kick", "Kowtow Cleave", "Sucker Punch"] }
  ] },
  { id: "ct-73", tournament: "WARTORTLE WEEK NAIC PREP REG M-A BO3 SWISS", players: 16, placement: 3, player: "BrazBR", wins: 5, losses: 2, pokemonIds: [547, 983, 902, 6, 445, 670], pokemonNames: ["Whimsicott", "Kingambit", "Basculegion-M", "Charizard", "Garchomp", "Floette"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] }
  ] },
  { id: "ct-74", tournament: "WARTORTLE WEEK NAIC PREP REG M-A BO3 SWISS", players: 16, placement: 4, player: "FLOWER POWER ", wins: 4, losses: 3, pokemonIds: [6, 670, 903, 727, 1013, 445], pokemonNames: ["Charizard", "Floette", "Sneasler", "Incineroar", "Sinistcha", "Garchomp"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Coaching"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Parting Shot", "Throat Chop", "Fake Out"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Matcha Gotcha", "Protect", "Rage Powder", "Trick Room"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Iron Head", "Dragon Claw", "Stomping Tantrum", "Rock Slide"] }
  ] },
  { id: "ct-75", tournament: "WARTORTLE WEEK NAIC PREP REG M-A BO3 SWISS", players: 16, placement: 5, player: "TayOpkMn", wins: 3, losses: 3, pokemonIds: [130, 6, 445, 547, 903, 681], pokemonNames: ["Gyarados", "Charizard", "Garchomp", "Whimsicott", "Sneasler", "Aegislash"], sets: [
    { ability: "Intimidate", item: "Gyaradosite", moves: ["Waterfall", "Dragon Dance", "Protect", "Crunch"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Earthquake", "Scale Shot", "Rock Slide", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Sunny Day", "Moonblast", "Encore"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Stance Change", item: "Spell Tag", moves: ["Shadow Sneak", "Sacred Sword", "Poltergeist", "Wide Guard"] }
  ] },
  { id: "ct-76", tournament: "WARTORTLE WEEK NAIC PREP REG M-A BO3 SWISS", players: 16, placement: 6, player: "FireBrick", wins: 3, losses: 3, pokemonIds: [15, 981, 461, 445, 5157, 693], pokemonNames: ["Beedrill", "Farigiraf", "Weavile", "Garchomp", "Hisuian Typhlosion", "Clawitzer"], sets: [
    { ability: "Sniper", item: "Beedrillite", moves: ["Poison Jab", "X-Scissor", "Protect", "Knock Off"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Psychic", "Trick Room", "Protect", "Helping Hand"] },
    { ability: "Pressure", item: "Focus Sash", moves: ["Fake Out", "Icy Wind", "Triple Axel", "Knock Off"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Stomping Tantrum", "Earthquake", "Protect", "Dragon Claw"] },
    { ability: "Frisk", item: "Choice Scarf", moves: ["Eruption", "Heat Wave", "Shadow Ball", "Will-O-Wisp"] },
    { ability: "Mega Launcher", item: "Sitrus Berry", moves: ["Protect", "Aura Sphere", "Water Pulse", "Heal Pulse"] }
  ] },
  { id: "ct-77", tournament: "WARTORTLE WEEK NAIC PREP REG M-A BO3 SWISS", players: 16, placement: 7, player: "damiameru", wins: 2, losses: 4, pokemonIds: [282, 130, 1013, 727, 903, 445], pokemonNames: ["Gardevoir", "Gyarados", "Sinistcha", "Incineroar", "Sneasler", "Garchomp"], sets: [
    { ability: "Trace", item: "Gardevoirite", moves: ["Protect", "Trick Room", "Hyper Voice", "Psyshock"] },
    { ability: "Intimidate", item: "Gyaradosite", moves: ["Protect", "Dragon Dance", "Waterfall", "Lash Out"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Protect", "Trick Room", "Matcha Gotcha", "Rage Powder"] },
    { ability: "Intimidate", item: "Shuca Berry", moves: ["Fake Out", "Flare Blitz", "Taunt", "Parting Shot"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Fake Out", "Close Combat", "Dire Claw"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Protect", "Earthquake", "Dragon Claw", "Rock Slide"] }
  ] },
  { id: "ct-78", tournament: "WARTORTLE WEEK NAIC PREP REG M-A BO3 SWISS", players: 16, placement: 8, player: "RedbamaXxXx", wins: 2, losses: 4, pokemonIds: [655, 925, 445, 902, 903, 983], pokemonNames: ["Delphox", "Maushold", "Garchomp", "Basculegion-M", "Sneasler", "Kingambit"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Calm Mind", "Protect"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Follow Me", "Protect", "Super Fang", "Helping Hand"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Dragon Claw", "Earthquake", "Protect", "Rock Slide"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Flip Turn", "Last Respects"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Protect", "Fake Out"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] }
  ] },
  { id: "ct-79", tournament: "HeroicTitan’s VGC Battle Arena (Bo3)", players: 37, placement: 1, player: "Altkyle", wins: 8, losses: 2, pokemonIds: [149, 902, 212, 1018, 279, 727], pokemonNames: ["Dragonite", "Basculegion-M", "Scizor", "Archaludon", "Pelipper", "Incineroar"], sets: [
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Dragon Pulse", "Flamethrower", "Tailwind", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Close Combat", "Swords Dance", "Protect"] },
    { ability: "Stamina", item: "Chople Berry", moves: ["Electro Shot", "Dragon Pulse", "Aura Sphere", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Weather Ball", "Tailwind", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] }
  ] },
  { id: "ct-80", tournament: "HeroicTitan’s VGC Battle Arena (Bo3)", players: 37, placement: 2, player: "BrazBR", wins: 7, losses: 3, pokemonIds: [547, 983, 902, 6, 445, 670], pokemonNames: ["Whimsicott", "Kingambit", "Basculegion-M", "Charizard", "Garchomp", "Floette"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] }
  ] },
  { id: "ct-81", tournament: "HeroicTitan’s VGC Battle Arena (Bo3)", players: 37, placement: 3, player: "Master_800", wins: 6, losses: 3, pokemonIds: [115, 902, 983, 6, 445, 547], pokemonNames: ["Kangaskhan", "Basculegion-M", "Kingambit", "Charizard", "Garchomp", "Whimsicott"], sets: [
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Fake Out", "Double-Edge", "Ice Punch", "Low Kick"] },
    { ability: "Adaptability", item: "Colbur Berry", moves: ["Protect", "Last Respects", "Aqua Jet", "Wave Crash"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Tomb", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Protect", "Encore"] }
  ] },
  { id: "ct-82", tournament: "HeroicTitan’s VGC Battle Arena (Bo3)", players: 37, placement: 4, player: "MammothVGC", wins: 6, losses: 3, pokemonIds: [478, 903, 983, 902, 5059, 149], pokemonNames: ["Froslass", "Sneasler", "Kingambit", "Basculegion-M", "Hisuian Arcanine", "Dragonite"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Gunk Shot", "Fake Out", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Rock Head", item: "Focus Sash", moves: ["Rock Slide", "Flare Blitz", "Head Smash", "Protect"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Flamethrower", "Tailwind", "Protect"] }
  ] },
  { id: "ct-83", tournament: "HeroicTitan’s VGC Battle Arena (Bo3)", players: 37, placement: 5, player: "JaccVGC", wins: 6, losses: 2, pokemonIds: [445, 6, 902, 983, 547, 670], pokemonNames: ["Garchomp", "Charizard", "Basculegion-M", "Kingambit", "Whimsicott", "Floette"], sets: [
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Protect", "Outrage", "Earthquake", "Rock Slide"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Weather Ball", "Solar Beam"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Kowtow Cleave", "Low Kick", "Sucker Punch"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Protect", "Moonblast", "Tailwind", "Encore"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Dazzling Gleam", "Moonblast", "Light of Ruin"] }
  ] },
  { id: "ct-84", tournament: "HeroicTitan’s VGC Battle Arena (Bo3)", players: 37, placement: 6, player: "TingusThePingus", wins: 6, losses: 1, pokemonIds: [983, 903, 478, 142, 700, 902], pokemonNames: ["Kingambit", "Sneasler", "Froslass", "Aerodactyl", "Sylveon", "Basculegion-M"], sets: [
    { ability: "Defiant", item: "Focus Sash", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Quick Attack", "Hyper Beam", "Detect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Flip Turn", "Last Respects"] }
  ] },
  { id: "ct-85", tournament: "HeroicTitan’s VGC Battle Arena (Bo3)", players: 37, placement: 7, player: "NachoVGCs", wins: 5, losses: 1, pokemonIds: [94, 149, 10103, 983, 727, 903], pokemonNames: ["Gengar", "Dragonite", "Alolan Ninetales", "Kingambit", "Incineroar", "Sneasler"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Shadow Ball", "Perish Song", "Disable", "Protect"] },
    { ability: "Multiscale", item: "Dragon Fang", moves: ["Dragon Claw", "Extreme Speed", "Low Kick", "Protect"] },
    { ability: "Snow Warning", item: "Never-Melt Ice", moves: ["Blizzard", "Encore", "Aurora Veil", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Swords Dance", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Protect", "Fake Out", "Parting Shot"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] }
  ] },
  { id: "ct-86", tournament: "HeroicTitan’s VGC Battle Arena (Bo3)", players: 37, placement: 8, player: "pokepaste", wins: 5, losses: 3, pokemonIds: [983, 445, 902, 547, 970, 670], pokemonNames: ["Kingambit", "Garchomp", "Basculegion-M", "Whimsicott", "Glimmora", "Floette"], sets: [
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Stomping Tantrum", "Rock Slide", "Dragon Claw", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Encore", "Tailwind", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Sludge Bomb", "Earth Power", "Spiky Shield", "Power Gem"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] }
  ] },
  { id: "ct-87", tournament: "Pokemon VGC UmbreNews 09.06.2026 #18 - Champion", players: 33, placement: 1, player: "Candytrouble", wins: 6, losses: 2, pokemonIds: [6, 445, 983, 547, 902, 727], pokemonNames: ["Charizard", "Garchomp", "Kingambit", "Whimsicott", "Basculegion-M", "Incineroar"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Weather Ball", "Heat Wave", "Ancient Power", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Dragon Claw", "Poison Jab", "Earthquake", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Flip Turn", "Last Respects"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Parting Shot"] }
  ] },
  { id: "ct-88", tournament: "Pokemon VGC UmbreNews 09.06.2026 #18 - Champion", players: 33, placement: 2, player: "blackkobra", wins: 6, losses: 2, pokemonIds: [212, 1013, 727, 248, 784, 902], pokemonNames: ["Scizor", "Sinistcha", "Incineroar", "Tyranitar", "Kommo-o", "Basculegion-M"], sets: [
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "Swords Dance", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Parting Shot", "Fake Out", "Will-O-Wisp"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Knock Off", "Rock Slide", "Low Kick", "Protect"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Aura Sphere", "Clanging Scales", "Clangorous Soul", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Flip Turn", "Aqua Jet", "Wave Crash", "Last Respects"] }
  ] },
  { id: "ct-89", tournament: "Pokemon VGC UmbreNews 09.06.2026 #18 - Champion", players: 33, placement: 3, player: "NS_Reiziger", wins: 5, losses: 2, pokemonIds: [478, 902, 547, 5059, 903, 983], pokemonNames: ["Froslass", "Basculegion-M", "Whimsicott", "Hisuian Arcanine", "Sneasler", "Kingambit"], sets: [
    { ability: "Snow Cloak", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Prankster", item: "Coba Berry", moves: ["Tailwind", "Moonblast", "Encore", "Protect"] },
    { ability: "Rock Head", item: "Focus Sash", moves: ["Flare Blitz", "Rock Slide", "Head Smash", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] }
  ] },
  { id: "ct-90", tournament: "Pokemon VGC UmbreNews 09.06.2026 #18 - Champion", players: 33, placement: 4, player: "QrdeMac", wins: 4, losses: 3, pokemonIds: [94, 727, 186, 1018, 1013, 902], pokemonNames: ["Gengar", "Incineroar", "Politoed", "Archaludon", "Sinistcha", "Basculegion-M"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Shadow Ball", "Perish Song", "Disable", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Throat Chop", "Parting Shot", "Fake Out", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Perish Song", "Encore", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Dragon Pulse", "Electro Shot", "Flash Cannon", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] }
  ] },
  { id: "ct-91", tournament: "Pokemon VGC UmbreNews 09.06.2026 #18 - Champion", players: 33, placement: 5, player: "ParmesanLugubre206", wins: 5, losses: 1, pokemonIds: [18, 186, 3, 727, 902, 983], pokemonNames: ["Pidgeot", "Politoed", "Venusaur", "Incineroar", "Basculegion-M", "Kingambit"], sets: [
    { ability: "Keen Eye", item: "Pidgeotite", moves: ["Hurricane", "Rain Dance", "Tailwind", "Protect"] },
    { ability: "Drizzle", item: "Choice Scarf", moves: ["Muddy Water", "Weather Ball", "Ice Beam", "Psychic"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Giga Drain", "Sludge Bomb", "Earth Power", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] }
  ] },
  { id: "ct-92", tournament: "Pokemon VGC UmbreNews 09.06.2026 #18 - Champion", players: 33, placement: 6, player: "miniman", wins: 4, losses: 2, pokemonIds: [547, 670, 445, 6, 902, 727], pokemonNames: ["Whimsicott", "Floette", "Garchomp", "Charizard", "Basculegion-M", "Incineroar"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Rough Skin", item: "White Herb", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] }
  ] },
  { id: "ct-93", tournament: "Pokemon VGC UmbreNews 09.06.2026 #18 - Champion", players: 33, placement: 7, player: "Soren G", wins: 4, losses: 2, pokemonIds: [445, 142, 981, 700, 727, 6], pokemonNames: ["Garchomp", "Aerodactyl", "Farigiraf", "Sylveon", "Incineroar", "Charizard"], sets: [
    { ability: "Rough Skin", item: "Garchompite", moves: ["Stomping Tantrum", "Dragon Claw", "Earthquake", "Protect"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Rock Slide", "Tailwind", "Sunny Day", "Wide Guard"] },
    { ability: "Armor Tail", item: "Twisted Spoon", moves: ["Hyper Voice", "Twin Beam", "Trick Room", "Helping Hand"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Detect", "Quick Attack", "Moonblast"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Parting Shot"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Weather Ball", "Heat Wave", "Solar Beam", "Protect"] }
  ] },
  { id: "ct-94", tournament: "Pokemon VGC UmbreNews 09.06.2026 #18 - Champion", players: 33, placement: 8, player: "GielBakker", wins: 4, losses: 2, pokemonIds: [94, 670, 727, 983, 903, 784], pokemonNames: ["Gengar", "Floette", "Incineroar", "Kingambit", "Sneasler", "Kommo-o"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Protect", "Shadow Ball", "Perish Song", "Disable"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Moonblast", "Light of Ruin", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Protect", "Flare Blitz", "Fake Out", "Parting Shot"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Swords Dance", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Aura Sphere", "Clangorous Soul", "Protect"] }
  ] },
  { id: "ct-95", tournament: "WARTORTLE WEEK NAIC PREP REG M-A BO3 SWISS", players: 20, placement: 1, player: "Davibay", wins: 6, losses: 2, pokemonIds: [670, 3, 727, 6, 445, 1013], pokemonNames: ["Floette", "Venusaur", "Incineroar", "Charizard", "Garchomp", "Sinistcha"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Calm Mind", "Moonblast", "Dazzling Gleam"] },
    { ability: "Chlorophyll", item: "Focus Sash", moves: ["Earth Power", "Protect", "Sludge Bomb", "Sleep Powder"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Throat Chop", "Flare Blitz", "Parting Shot"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Weather Ball", "Heat Wave", "Solar Beam"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Rock Tomb", "Dragon Claw", "Earthquake", "Stomping Tantrum"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Protect", "Trick Room", "Matcha Gotcha", "Rage Powder"] }
  ] },
  { id: "ct-96", tournament: "WARTORTLE WEEK NAIC PREP REG M-A BO3 SWISS", players: 20, placement: 2, player: "FireBrick", wins: 5, losses: 3, pokemonIds: [635, 903, 981, 5059, 730, 547], pokemonNames: ["Hydreigon", "Sneasler", "Farigiraf", "Hisuian Arcanine", "Primarina", "Whimsicott"], sets: [
    { ability: "Levitate", item: "Scope Lens", moves: ["Draco Meteor", "Focus Energy", "Protect", "Dark Pulse"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Coaching"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Psychic", "Trick Room", "Helping Hand", "Protect"] },
    { ability: "Intimidate", item: "Choice Scarf", moves: ["Extreme Speed", "Flare Blitz", "Rock Slide", "Close Combat"] },
    { ability: "Liquid Voice", item: "Mystic Water", moves: ["Protect", "Ice Beam", "Hyper Voice", "Moonblast"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"] }
  ] },
  { id: "ct-97", tournament: "WARTORTLE WEEK NAIC PREP REG M-A BO3 SWISS", players: 20, placement: 3, player: "TayOpkMn", wins: 5, losses: 2, pokemonIds: [130, 6, 445, 547, 903, 681], pokemonNames: ["Gyarados", "Charizard", "Garchomp", "Whimsicott", "Sneasler", "Aegislash"], sets: [
    { ability: "Intimidate", item: "Gyaradosite", moves: ["Waterfall", "Dragon Dance", "Protect", "Crunch"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Sunny Day", "Moonblast", "Encore"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Stance Change", item: "Spell Tag", moves: ["Shadow Sneak", "Sacred Sword", "Poltergeist", "Wide Guard"] }
  ] },
  { id: "ct-98", tournament: "WARTORTLE WEEK NAIC PREP REG M-A BO3 SWISS", players: 20, placement: 4, player: "balancebarney", wins: 5, losses: 2, pokemonIds: [670, 248, 727, 1013, 903, 823], pokemonNames: ["Floette", "Tyranitar", "Incineroar", "Sinistcha", "Sneasler", "Corviknight"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Moonblast", "Draining Kiss", "Calm Mind"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Protect", "Rock Slide", "Knock Off", "Dragon Dance"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Protect", "Matcha Gotcha", "Rage Powder", "Trick Room"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Close Combat", "Dire Claw", "Fake Out"] },
    { ability: "Mirror Armor", item: "Occa Berry", moves: ["Protect", "Brave Bird", "Iron Head", "Tailwind"] }
  ] },
  { id: "ct-99", tournament: "WARTORTLE WEEK NAIC PREP REG M-A BO3 SWISS", players: 20, placement: 5, player: "kaguneau", wins: 3, losses: 3, pokemonIds: [6, 142, 3, 10009, 902, 700], pokemonNames: ["Charizard", "Aerodactyl", "Venusaur", "Wash Rotom", "Basculegion-M", "Sylveon"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Protect", "Solar Beam"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Tailwind", "Dual Wingbeat", "Rock Slide", "Protect"] },
    { ability: "Chlorophyll", item: "Sitrus Berry", moves: ["Sleep Powder", "Sludge Bomb", "Protect", "Solar Beam"] },
    { ability: "Levitate", item: "Leftovers", moves: ["Hydro Pump", "Volt Switch", "Thunder", "Nasty Plot"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Aqua Jet", "Wave Crash", "Last Respects", "Flip Turn"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Protect", "Quick Attack"] }
  ] },
  { id: "ct-100", tournament: "WARTORTLE WEEK NAIC PREP REG M-A BO3 SWISS", players: 20, placement: 6, player: "RedbamaXxXx", wins: 3, losses: 3, pokemonIds: [655, 925, 445, 902, 903, 983], pokemonNames: ["Delphox", "Maushold", "Garchomp", "Basculegion-M", "Sneasler", "Kingambit"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Calm Mind", "Protect"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Follow Me", "Protect", "Super Fang", "Feint"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Dragon Claw", "Earthquake", "Protect", "Rock Slide"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Flip Turn", "Last Respects"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Protect", "Fake Out"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] }
  ] },
  { id: "ct-101", tournament: "WARTORTLE WEEK NAIC PREP REG M-A BO3 SWISS", players: 20, placement: 7, player: "FLOWER POWER ", wins: 3, losses: 3, pokemonIds: [670, 903, 727, 1013, 902, 445], pokemonNames: ["Floette", "Sneasler", "Incineroar", "Sinistcha", "Basculegion-M", "Garchomp"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Coaching"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Parting Shot", "Throat Chop", "Fake Out"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Trick Room"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Stomping Tantrum", "Rock Slide", "Dragon Claw"] }
  ] },
  { id: "ct-102", tournament: "WARTORTLE WEEK NAIC PREP REG M-A BO3 SWISS", players: 20, placement: 8, player: "pokeplayer", wins: 2, losses: 4, pokemonIds: [149, 902, 1018, 212, 727, 279], pokemonNames: ["Dragonite", "Basculegion-M", "Archaludon", "Scizor", "Incineroar", "Pelipper"], sets: [
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Draco Meteor", "Tailwind", "Hurricane", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Aqua Jet", "Flip Turn", "Wave Crash"] },
    { ability: "Stamina", item: "Chople Berry", moves: ["Aura Sphere", "Dragon Tail", "Electro Shot", "Protect"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Close Combat", "Swords Dance", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Tailwind", "Hurricane", "Weather Ball", "Protect"] }
  ] },
  { id: "ct-103", tournament: "Pokepal Smackdown #144 (Champions) (Reg M-A)", players: 51, placement: 1, player: "Dr_Bejan", wins: 5, losses: 0, pokemonIds: [970, 547, 6, 445, 902, 983], pokemonNames: ["Glimmora", "Whimsicott", "Charizard", "Garchomp", "Basculegion-M", "Kingambit"], sets: [
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Tailwind", "Moonblast", "Encore", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Earthquake", "Stomping Tantrum", "Dragon Claw", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] }
  ] },
  { id: "ct-104", tournament: "Pokepal Smackdown #144 (Champions) (Reg M-A)", players: 51, placement: 2, player: "GOUKI_PR", wins: 4, losses: 1, pokemonIds: [6, 903, 981, 445, 983, 142], pokemonNames: ["Charizard", "Sneasler", "Farigiraf", "Garchomp", "Kingambit", "Aerodactyl"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Protect", "Weather Ball"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Psychic", "Hyper Voice", "Imprison"] },
    { ability: "Rough Skin", item: "Dragon Fang", moves: ["Scale Shot", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Protect", "Sucker Punch", "Iron Head"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Rock Slide", "Protect", "Wide Guard", "Tailwind"] }
  ] },
  { id: "ct-105", tournament: "Pokepal Smackdown #144 (Champions) (Reg M-A)", players: 51, placement: 3, player: "VGCDan", wins: 4, losses: 1, pokemonIds: [609, 730, 903, 983, 584, 981], pokemonNames: ["Chandelure", "Primarina", "Sneasler", "Kingambit", "Vanilluxe", "Farigiraf"], sets: [
    { ability: "Flash Fire", item: "Chandelurite", moves: ["Heat Wave", "Protect", "Calm Mind", "Shadow Ball"] },
    { ability: "Liquid Voice", item: "Mystic Water", moves: ["Hyper Voice", "Protect", "Moonblast", "Dazzling Gleam"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Protect", "Fake Out", "Close Combat"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Protect", "Iron Head", "Sucker Punch"] },
    { ability: "Snow Warning", item: "Choice Scarf", moves: ["Freeze-Dry", "Blizzard", "Weather Ball", "Chilling Water"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Psychic", "Protect", "Trick Room", "Helping Hand"] }
  ] },
  { id: "ct-106", tournament: "Pokepal Smackdown #144 (Champions) (Reg M-A)", players: 51, placement: 4, player: "Archeon", wins: 4, losses: 1, pokemonIds: [6, 3, 445, 903, 10009, 700], pokemonNames: ["Charizard", "Venusaur", "Garchomp", "Sneasler", "Wash Rotom", "Sylveon"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Scorching Sands", "Protect"] },
    { ability: "Chlorophyll", item: "Focus Sash", moves: ["Sleep Powder", "Leaf Storm", "Sludge Bomb", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Rock Slide", "Dragon Claw", "Earthquake", "Bulldoze"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Rock Tomb", "Fake Out"] },
    { ability: "Levitate", item: "Leftovers", moves: ["Hydro Pump", "Thunderbolt", "Will-O-Wisp", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Shadow Ball", "Reflect", "Quick Attack"] }
  ] },
  { id: "ct-107", tournament: "Pokepal Smackdown #144 (Champions) (Reg M-A)", players: 51, placement: 5, player: "FLOWER POWER ", wins: 4, losses: 1, pokemonIds: [670, 903, 727, 1013, 902, 445], pokemonNames: ["Floette", "Sneasler", "Incineroar", "Sinistcha", "Basculegion-M", "Garchomp"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Coaching"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Parting Shot", "Throat Chop", "Fake Out"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Trick Room"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Stomping Tantrum", "Rock Slide", "Dragon Claw"] }
  ] },
  { id: "ct-108", tournament: "Pokepal Smackdown #144 (Champions) (Reg M-A)", players: 51, placement: 6, player: "Piggy", wins: 4, losses: 1, pokemonIds: [149, 186, 903, 952, 956, 1018], pokemonNames: ["Dragonite", "Politoed", "Sneasler", "Scovillain", "Espathra", "Archaludon"], sets: [
    { ability: "Multiscale", item: "Dragoninite", moves: ["Protect", "Dragon Pulse", "Hurricane", "Extreme Speed"] },
    { ability: "Drizzle", item: "Mystic Water", moves: ["Protect", "Weather Ball", "Encore", "Muddy Water"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Protect", "Leech Seed", "Rage Powder", "Overheat"] },
    { ability: "Speed Boost", item: "Sitrus Berry", moves: ["Protect", "Lumina Crash", "Calm Mind", "Baton Pass"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Protect", "Electro Shot", "Dragon Pulse", "Flash Cannon"] }
  ] },
  { id: "ct-109", tournament: "Pokepal Smackdown #144 (Champions) (Reg M-A)", players: 51, placement: 7, player: "Greyaz", wins: 4, losses: 1, pokemonIds: [925, 670, 727, 1013, 1018, 279], pokemonNames: ["Maushold", "Floette", "Incineroar", "Sinistcha", "Archaludon", "Pelipper"], sets: [
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Super Fang", "Follow Me", "Rain Dance", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Intimidate", item: "Charcoal", moves: ["Flare Blitz", "Fake Out", "Parting Shot", "Taunt"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Protect", "Dragon Pulse", "Flash Cannon"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Tailwind", "Hurricane", "Rain Dance"] }
  ] },
  { id: "ct-110", tournament: "Pokepal Smackdown #144 (Champions) (Reg M-A)", players: 51, placement: 8, player: "Yayyboy", wins: 4, losses: 1, pokemonIds: [6, 1013, 727, 983, 10009, 282], pokemonNames: ["Charizard", "Sinistcha", "Incineroar", "Kingambit", "Wash Rotom", "Gardevoir"], sets: [
    { ability: "blaze", item: "Charizardite X", moves: ["Flare Blitz", "Protect", "Dragon Claw", "Dragon Dance"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Rage Powder", "Matcha Gotcha", "Trick Room", "Protect"] },
    { ability: "Intimidate", item: "Lum Berry", moves: ["Fake Out", "Throat Chop", "Parting Shot", "Taunt"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Protect", "Low Kick"] },
    { ability: "Levitate", item: "Leftovers", moves: ["Protect", "Will-O-Wisp", "Hydro Pump", "Thunderbolt"] },
    { ability: "trace", item: "Gardevoirite", moves: ["Protect", "Hyper Voice", "Psychic", "Trick Room"] }
  ] },
  { id: "ct-111", tournament: "Intimidators Champions Challenge #16 REG M-A", players: 49, placement: 1, player: "JOAO", wins: 9, losses: 0, pokemonIds: [745, 903, 952, 902, 478, 983], pokemonNames: ["Lycanroc", "Sneasler", "Scovillain", "Basculegion-M", "Froslass", "Kingambit"], sets: [
    { ability: "Tough Claws", item: "Focus Sash", moves: ["Rock Slide", "Close Combat", "Accelerock", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Overheat", "Giga Drain", "Rage Powder", "Protect"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] }
  ] },
  { id: "ct-112", tournament: "Intimidators Champions Challenge #16 REG M-A", players: 49, placement: 2, player: "Brendu", wins: 7, losses: 2, pokemonIds: [6, 547, 983, 902, 445, 970], pokemonNames: ["Charizard", "Whimsicott", "Kingambit", "Basculegion-M", "Garchomp", "Glimmora"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Prankster", item: "Coba Berry", moves: ["Moonblast", "Encore", "Tailwind", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] }
  ] },
  { id: "ct-113", tournament: "Intimidators Champions Challenge #16 REG M-A", players: 49, placement: 3, player: "NMR | Kuroryu", wins: 6, losses: 2, pokemonIds: [784, 1013, 530, 130, 227, 248], pokemonNames: ["Kommo-o", "Sinistcha", "Excadrill", "Gyarados", "Skarmory", "Tyranitar"], sets: [
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Aura Sphere", "Clangorous Soul", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Sand Rush", item: "Focus Sash", moves: ["Earthquake", "Iron Head", "Rock Slide", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Waterfall", "Taunt", "Thunder Wave", "Helping Hand"] },
    { ability: "Sturdy", item: "Skarmorite", moves: ["Iron Head", "Brave Bird", "Tailwind", "Protect"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Ice Punch", "Protect"] }
  ] },
  { id: "ct-114", tournament: "Intimidators Champions Challenge #16 REG M-A", players: 49, placement: 4, player: "Terryjd", wins: 5, losses: 3, pokemonIds: [547, 1013, 115, 970, 727, 784], pokemonNames: ["Whimsicott", "Sinistcha", "Kangaskhan", "Glimmora", "Incineroar", "Kommo-o"], sets: [
    { ability: "Prankster", item: "Mental Herb", moves: ["Tailwind", "Encore", "Moonblast", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Trick Room", "Protect", "Rage Powder", "Matcha Gotcha"] },
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Body Slam", "Fake Out", "Sucker Punch", "Drain Punch"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Spiky Shield", "Sludge Bomb", "Power Gem", "Earth Power"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Fake Out", "Flare Blitz", "Parting Shot", "Darkest Lariat"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Draco Meteor", "Iron Defense", "Body Press", "Protect"] }
  ] },
  { id: "ct-115", tournament: "Intimidators Champions Challenge #16 REG M-A", players: 49, placement: 5, player: "Altkyle", wins: 5, losses: 2, pokemonIds: [149, 902, 212, 903, 1018, 279], pokemonNames: ["Dragonite", "Basculegion-M", "Scizor", "Sneasler", "Archaludon", "Pelipper"], sets: [
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Dragon Pulse", "Flamethrower", "Tailwind", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Close Combat", "Swords Dance", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Stamina", item: "Chople Berry", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Weather Ball", "Tailwind", "Protect"] }
  ] },
  { id: "ct-116", tournament: "Intimidators Champions Challenge #16 REG M-A", players: 49, placement: 6, player: "Kevin B", wins: 5, losses: 2, pokemonIds: [1018, 302, 902, 279, 983, 3], pokemonNames: ["Archaludon", "Sableye", "Basculegion-M", "Pelipper", "Kingambit", "Venusaur"], sets: [
    { ability: "Stamina", item: "Leftovers", moves: ["Dragon Pulse", "Flash Cannon", "Protect", "Electro Shot"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Reflect", "Rain Dance", "Light Screen", "Encore"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Flip Turn", "Aqua Jet", "Last Respects", "Wave Crash"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Tailwind", "Soak", "Weather Ball", "Hurricane"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Sucker Punch", "Low Kick", "Iron Head", "Protect"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Protect", "Giga Drain", "Earth Power", "Sludge Bomb"] }
  ] },
  { id: "ct-117", tournament: "Intimidators Champions Challenge #16 REG M-A", players: 49, placement: 7, player: "Orttega15", wins: 4, losses: 3, pokemonIds: [115, 324, 981, 858, 983, 727], pokemonNames: ["Kangaskhan", "Torkoal", "Farigiraf", "Hatterene", "Kingambit", "Incineroar"], sets: [
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Double-Edge", "Low Kick", "Sucker Punch", "Fake Out"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Weather Ball", "Earth Power", "Protect"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Psychic", "Hyper Voice", "Helping Hand", "Trick Room"] },
    { ability: "Magic Bounce", item: "Focus Sash", moves: ["Dazzling Gleam", "Psychic", "Trick Room", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Intimidate", item: "White Herb", moves: ["Close Combat", "Darkest Lariat", "Fake Out", "Flare Blitz"] }
  ] },
  { id: "ct-118", tournament: "Intimidators Champions Challenge #16 REG M-A", players: 49, placement: 8, player: "Nick Engraçado ", wins: 4, losses: 3, pokemonIds: [6, 478, 983, 902, 547, 900], pokemonNames: ["Charizard", "Froslass", "Kingambit", "Basculegion-M", "Whimsicott", "Kleavor"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Protect", "Weather Ball"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Thunderbolt", "Protect", "Shadow Ball"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Prankster", item: "Coba Berry", moves: ["Tailwind", "Moonblast", "Protect", "Encore"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Stone Axe", "Close Combat", "Night Slash", "Protect"] }
  ] },
  { id: "ct-119", tournament: "UK-Only! Champions Pop-Up TOUR!!! (£25 Prizepool)", players: 20, placement: 1, player: "KrystalKiwii", wins: 6, losses: 1, pokemonIds: [9, 115, 666, 981, 324, 902], pokemonNames: ["Blastoise", "Kangaskhan", "Vivillon", "Farigiraf", "Torkoal", "Basculegion-M"], sets: [
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Fake Out", "Water Spout", "Dark Pulse", "Shell Smash"] },
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Fake Out", "Double-Edge", "Low Kick", "Sucker Punch"] },
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Hurricane", "Sleep Powder", "Rage Powder", "Rain Dance"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Psychic", "Thunderbolt", "Trick Room", "Helping Hand"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Heat Wave", "Weather Ball", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-120", tournament: "UK-Only! Champions Pop-Up TOUR!!! (£25 Prizepool)", players: 20, placement: 2, player: "bwenty", wins: 6, losses: 1, pokemonIds: [94, 727, 149, 670, 983, 902], pokemonNames: ["Gengar", "Incineroar", "Dragonite", "Floette", "Kingambit", "Basculegion-M"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Sludge Bomb", "Shadow Ball", "Will-O-Wisp", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] },
    { ability: "Multiscale", item: "Dragon Fang", moves: ["Dragon Claw", "Low Kick", "Extreme Speed", "Tailwind"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-121", tournament: "UK-Only! Champions Pop-Up TOUR!!! (£25 Prizepool)", players: 20, placement: 3, player: "PokeReplay", wins: 4, losses: 2, pokemonIds: [445, 727, 3, 1013, 6, 670], pokemonNames: ["Garchomp", "Incineroar", "Venusaur", "Sinistcha", "Charizard", "Floette"], sets: [
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Stomping Tantrum", "Rock Slide", "Dragon Claw"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Chlorophyll", item: "Focus Sash", moves: ["Sludge Bomb", "Earth Power", "Sleep Powder", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Weather Ball", "Heat Wave", "Solar Beam", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Draining Kiss", "Dazzling Gleam", "Calm Mind", "Protect"] }
  ] },
  { id: "ct-122", tournament: "UK-Only! Champions Pop-Up TOUR!!! (£25 Prizepool)", players: 20, placement: 4, player: "frogo", wins: 4, losses: 2, pokemonIds: [1013, 670, 903, 902, 655, 727], pokemonNames: ["Sinistcha", "Floette", "Sneasler", "Basculegion-M", "Delphox", "Incineroar"], sets: [
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Calm Mind", "Draining Kiss", "Dazzling Gleam"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Fake Out", "Close Combat", "Dire Claw"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Protect", "Liquidation", "Last Respects", "Aqua Jet"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Nasty Plot", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Parting Shot", "Throat Chop", "Flare Blitz"] }
  ] },
  { id: "ct-123", tournament: "UK-Only! Champions Pop-Up TOUR!!! (£25 Prizepool)", players: 20, placement: 5, player: "Cecil9", wins: 3, losses: 2, pokemonIds: [609, 324, 727, 10008, 6, 952], pokemonNames: ["Chandelure", "Torkoal", "Incineroar", "Heat Rotom", "Charizard", "Scovillain"], sets: [
    { ability: "Flash Fire", item: "Focus Sash", moves: ["Trick Room", "Shadow Ball", "Heat Wave", "Solar Beam"] },
    { ability: "Drought", item: "Charcoal", moves: ["Protect", "Helping Hand", "Eruption", "Earth Power"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Close Combat", "Fake Out", "Parting Shot", "Darkest Lariat"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Volt Switch", "Overheat", "Electroweb", "Thunderbolt"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Air Slash", "Weather Ball"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Giga Drain", "Leech Seed", "Rage Powder", "Protect"] }
  ] },
  { id: "ct-124", tournament: "UK-Only! Champions Pop-Up TOUR!!! (£25 Prizepool)", players: 20, placement: 6, player: "Draxolotl", wins: 3, losses: 2, pokemonIds: [478, 445, 748, 5059, 903, 983], pokemonNames: ["Froslass", "Garchomp", "Toxapex", "Hisuian Arcanine", "Sneasler", "Kingambit"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Protect", "Shadow Ball", "Blizzard", "Aurora Veil"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Stomping Tantrum", "Dragon Claw", "Rock Tomb"] },
    { ability: "Regenerator", item: "Leftovers", moves: ["Baneful Bunker", "Infestation", "Toxic", "Wide Guard"] },
    { ability: "Rock Head", item: "Focus Sash", moves: ["Protect", "Flare Blitz", "Extreme Speed", "Head Smash"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Close Combat", "Gunk Shot", "Fake Out"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Kowtow Cleave", "Sucker Punch", "Iron Head"] }
  ] },
  { id: "ct-125", tournament: "UK-Only! Champions Pop-Up TOUR!!! (£25 Prizepool)", players: 20, placement: 7, player: "2cake", wins: 3, losses: 2, pokemonIds: [903, 547, 6, 902, 445, 983], pokemonNames: ["Sneasler", "Whimsicott", "Charizard", "Basculegion-M", "Garchomp", "Kingambit"], sets: [
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Gunk Shot", "Close Combat", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Tomb", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] }
  ] },
  { id: "ct-126", tournament: "UK-Only! Champions Pop-Up TOUR!!! (£25 Prizepool)", players: 20, placement: 8, player: "Zio_Gelato", wins: 3, losses: 2, pokemonIds: [655, 903, 983, 727, 670, 1013], pokemonNames: ["Delphox", "Sneasler", "Kingambit", "Incineroar", "Floette", "Sinistcha"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Nasty Plot", "Protect"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Dire Claw", "Fake Out", "Coaching", "Close Combat"] },
    { ability: "Defiant", item: "Occa Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Intimidate", item: "Leftovers", moves: ["Parting Shot", "Fake Out", "Flare Blitz", "Taunt"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Calm Mind", "Dazzling Gleam", "Draining Kiss"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Protect"] }
  ] },
  { id: "ct-127", tournament: "Champions Tour LEPE #7", players: 17, placement: 1, player: "TheChoiceoffreedom", wins: 6, losses: 2, pokemonIds: [727, 903, 279, 212, 1018, 902], pokemonNames: ["Incineroar", "Sneasler", "Pelipper", "Scizor", "Archaludon", "Basculegion-M"], sets: [
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Weather Ball", "Hurricane", "Tailwind", "Protect"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "Swords Dance", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Flash Cannon", "Dragon Pulse", "Electro Shot", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] }
  ] },
  { id: "ct-128", tournament: "Champions Tour LEPE #7", players: 17, placement: 2, player: "Sanaito", wins: 4, losses: 4, pokemonIds: [666, 282, 983, 445, 655, 10009], pokemonNames: ["Vivillon", "Gardevoir", "Kingambit", "Garchomp", "Delphox", "Wash Rotom"], sets: [
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Rage Powder", "Sleep Powder", "Hurricane", "Protect"] },
    { ability: "Telepathy", item: "Choice Scarf", moves: ["Dazzling Gleam", "Moonblast", "Psychic", "Icy Wind"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Dragon Claw", "Rock Slide", "Earthquake", "Protect"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Helping Hand", "Protect"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Hydro Pump", "Thunderbolt", "Will-O-Wisp", "Protect"] }
  ] },
  { id: "ct-129", tournament: "Champions Tour LEPE #7", players: 17, placement: 3, player: "JuliiiHD", wins: 6, losses: 1, pokemonIds: [952, 478, 903, 983, 902, 745], pokemonNames: ["Scovillain", "Froslass", "Sneasler", "Kingambit", "Basculegion-M", "Lycanroc"], sets: [
    { ability: "Moody", item: "Scovillainite", moves: ["Protect", "Giga Drain", "Flamethrower", "Rage Powder"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Protect", "Shadow Ball", "Blizzard", "Aurora Veil"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Dire Claw", "Close Combat", "Fake Out"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Protect", "Kowtow Cleave", "Sucker Punch", "Swords Dance"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Protect", "Wave Crash", "Last Respects", "Aqua Jet"] },
    { ability: "Tough Claws", item: "Focus Sash", moves: ["Protect", "Accelerock", "Close Combat", "Rock Slide"] }
  ] },
  { id: "ct-130", tournament: "Champions Tour LEPE #7", players: 17, placement: 4, player: "Mcampbell10", wins: 4, losses: 3, pokemonIds: [823, 248, 784, 478, 445, 208], pokemonNames: ["Corviknight", "Tyranitar", "Kommo-o", "Froslass", "Garchomp", "Steelix"], sets: [
    { ability: "Mirror Armor", item: "Occa Berry", moves: ["Brave Bird", "Protect", "Tailwind", "Iron Head"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Low Kick", "Protect"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Aura Sphere", "Clanging Scales", "Clangorous Soul", "Protect"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Weather Ball", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Sturdy", item: "Steelixite", moves: ["Heavy Slam", "High Horsepower", "Wide Guard", "Protect"] }
  ] },
  { id: "ct-131", tournament: "Champions Tour LEPE #7", players: 17, placement: 5, player: "yukimoth", wins: 3, losses: 3, pokemonIds: [94, 186, 784, 727, 959, 1013], pokemonNames: ["Gengar", "Politoed", "Kommo-o", "Incineroar", "Tinkaton", "Sinistcha"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Perish Song", "Protect", "Shadow Ball", "Disable"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Perish Song", "Protect", "Encore", "Weather Ball"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Protect", "Clangorous Soul", "Aura Sphere"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Fake Out", "Darkest Lariat", "Protect", "Parting Shot"] },
    { ability: "Mold Breaker", item: "Shuca Berry", moves: ["Gigaton Hammer", "Fake Out", "Protect", "Encore"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Rage Powder", "Matcha Gotcha", "Protect", "Life Dew"] }
  ] },
  { id: "ct-132", tournament: "Champions Tour LEPE #7", players: 17, placement: 6, player: "Darkip_8", wins: 3, losses: 3, pokemonIds: [94, 727, 1013, 132, 186, 784], pokemonNames: ["Gengar", "Incineroar", "Sinistcha", "Ditto", "Politoed", "Kommo-o"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Shadow Ball", "Disable", "Perish Song", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Fake Out", "Throat Chop", "Parting Shot", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Imposter", item: "Choice Scarf", moves: ["Transform"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Perish Song", "Protect", "Encore"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Aura Sphere", "Clangorous Soul", "Protect"] }
  ] },
  { id: "ct-133", tournament: "Champions Tour LEPE #7", players: 17, placement: 7, player: "DariusPopek", wins: 2, losses: 4, pokemonIds: [115, 700, 323, 981, 983, 752], pokemonNames: ["Kangaskhan", "Sylveon", "Camerupt", "Farigiraf", "Kingambit", "Araquanid"], sets: [
    { ability: "Scrappy", item: "Silk Scarf", moves: ["Fake Out", "Last Resort"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Quick Attack", "Mystical Fire", "Calm Mind"] },
    { ability: "Solid Rock", item: "Cameruptite", moves: ["Heat Wave", "Earth Power", "Eruption", "Protect"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Trick Room", "Sunny Day", "Psychic", "Protect"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Protect"] },
    { ability: "Water Bubble", item: "Mystic Water", moves: ["Liquidation", "Leech Life", "Wide Guard", "Skitter Smack"] }
  ] },
  { id: "ct-134", tournament: "Champions Tour LEPE #7", players: 17, placement: 8, player: "godey95", wins: 2, losses: 4, pokemonIds: [670, 655, 666, 1013, 925, 903], pokemonNames: ["Floette", "Delphox", "Vivillon", "Sinistcha", "Maushold", "Sneasler"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Draining Kiss", "Calm Mind", "Dazzling Gleam", "Protect"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Nasty Plot", "Protect"] },
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Rage Powder", "Pollen Puff", "Sleep Powder", "Hurricane"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Strength Sap"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Follow Me", "Protect", "Super Fang", "Encore"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Rock Tomb"] }
  ] },
  { id: "ct-135", tournament: "Sketch Academy Pride Month x MMHM Qualifier 1", players: 58, placement: 1, player: "SuperDialga", wins: 8, losses: 1, pokemonIds: [670, 547, 983, 902, 1018, 5059], pokemonNames: ["Floette", "Whimsicott", "Kingambit", "Basculegion-M", "Archaludon", "Hisuian Arcanine"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Wave Crash", "Flip Turn", "Aqua Jet"] },
    { ability: "Sturdy", item: "White Herb", moves: ["Draco Meteor", "Flash Cannon", "Aura Sphere", "Protect"] },
    { ability: "Rock Head", item: "Sitrus Berry", moves: ["Flare Blitz", "Rock Slide", "Extreme Speed", "Protect"] }
  ] },
  { id: "ct-136", tournament: "Sketch Academy Pride Month x MMHM Qualifier 1", players: 58, placement: 2, player: "Ayabe", wins: 7, losses: 2, pokemonIds: [478, 903, 983, 445, 149, 902], pokemonNames: ["Froslass", "Sneasler", "Kingambit", "Garchomp", "Dragonite", "Basculegion-M"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Earthquake", "Rock Slide", "Dragon Claw", "Protect"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Thunderbolt", "Flamethrower", "Protect"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Wave Crash", "Protect", "Last Respects", "Aqua Jet"] }
  ] },
  { id: "ct-137", tournament: "Sketch Academy Pride Month x MMHM Qualifier 1", players: 58, placement: 3, player: "KennethIsBack", wins: 7, losses: 1, pokemonIds: [778, 981, 324, 700, 740, 323], pokemonNames: ["Mimikyu", "Farigiraf", "Torkoal", "Sylveon", "Crabominable", "Camerupt"], sets: [
    { ability: "Disguise", item: "Babiri Berry", moves: ["Play Rough", "Shadow Claw", "Curse", "Trick Room"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Hyper Voice", "Protect", "Trick Room", "Psychic"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Heat Wave", "Weather Ball", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Moonblast", "Protect", "Quick Attack"] },
    { ability: "Hyper Cutter", item: "Crabominite", moves: ["Ice Hammer", "Drain Punch", "Protect", "Mach Punch"] },
    { ability: "Solid Rock", item: "Cameruptite", moves: ["Eruption", "Earth Power", "Heat Wave", "Protect"] }
  ] },
  { id: "ct-138", tournament: "Sketch Academy Pride Month x MMHM Qualifier 1", players: 58, placement: 4, player: "KaitoKunnnnn", wins: 6, losses: 2, pokemonIds: [10103, 903, 94, 983, 727, 149], pokemonNames: ["Alolan Ninetales", "Sneasler", "Gengar", "Kingambit", "Incineroar", "Dragonite"], sets: [
    { ability: "Snow Warning", item: "Never-Melt Ice", moves: ["Protect", "Encore", "Disable", "Blizzard"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Protect", "Fake Out", "Close Combat", "Dire Claw"] },
    { ability: "Cursed Body", item: "Gengarite", moves: ["Protect", "Perish Song", "Sludge Bomb", "Shadow Ball"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Kowtow Cleave", "Sucker Punch", "Low Kick"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Protect", "Fake Out", "Flare Blitz", "Parting Shot"] },
    { ability: "Multiscale", item: "Dragon Fang", moves: ["Protect", "Extreme Speed", "Dragon Claw", "Low Kick"] }
  ] },
  { id: "ct-139", tournament: "Sketch Academy Pride Month x MMHM Qualifier 1", players: 58, placement: 5, player: "Evelyn K", wins: 5, losses: 2, pokemonIds: [670, 666, 727, 445, 1013, 655], pokemonNames: ["Floette", "Vivillon", "Incineroar", "Garchomp", "Sinistcha", "Delphox"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Dazzling Gleam", "Draining Kiss", "Calm Mind"] },
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Protect", "Pollen Puff", "Sleep Powder", "Rage Powder"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Parting Shot", "Flare Blitz", "Throat Chop", "Fake Out"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Stomping Tantrum", "Earthquake", "Dragon Claw", "Rock Slide"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Protect", "Matcha Gotcha", "Rage Powder", "Trick Room"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Protect", "Heat Wave", "Psyshock", "Nasty Plot"] }
  ] },
  { id: "ct-140", tournament: "Sketch Academy Pride Month x MMHM Qualifier 1", players: 58, placement: 6, player: "Flaneurx", wins: 5, losses: 2, pokemonIds: [6, 902, 445, 666, 700, 663], pokemonNames: ["Charizard", "Basculegion-M", "Garchomp", "Vivillon", "Sylveon", "Talonflame"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Earthquake", "Dragon Claw", "Protect", "Rock Slide"] },
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Sleep Powder", "Hurricane", "Tailwind", "Stun Spore"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Protect", "Calm Mind"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Tailwind", "Brave Bird", "Protect", "Flare Blitz"] }
  ] },
  { id: "ct-141", tournament: "Sketch Academy Pride Month x MMHM Qualifier 1", players: 58, placement: 7, player: "Mlgreen", wins: 4, losses: 3, pokemonIds: [902, 279, 1018, 212, 727, 149], pokemonNames: ["Basculegion-M", "Pelipper", "Archaludon", "Scizor", "Incineroar", "Dragonite"], sets: [
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Protect", "Last Respects", "Aqua Jet", "Wave Crash"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Tailwind", "Weather Ball", "Wide Guard"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Protect", "Flash Cannon", "Dragon Pulse"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Protect", "Swords Dance", "Close Combat"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Fake Out", "Parting Shot", "Darkest Lariat", "Flare Blitz"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Protect", "Hurricane", "Weather Ball"] }
  ] },
  { id: "ct-142", tournament: "Sketch Academy Pride Month x MMHM Qualifier 1", players: 58, placement: 8, player: "CorreiazinhoW", wins: 4, losses: 3, pokemonIds: [902, 279, 1018, 302, 3, 59], pokemonNames: ["Basculegion-M", "Pelipper", "Archaludon", "Sableye", "Venusaur", "Arcanine"], sets: [
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Flip Turn"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Weather Ball", "Hurricane", "Tailwind", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Dragon Pulse", "Flash Cannon", "Electro Shot", "Protect"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Rain Dance", "Encore", "Light Screen", "Reflect"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Leaf Storm", "Sludge Bomb", "Earth Power", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Extreme Speed", "Snarl", "Will-O-Wisp"] }
  ] },
  { id: "ct-143", tournament: "MMHM X CHAOS LEAGUE QUALIFIER #1", players: 27, placement: 1, player: "UsagiFoo", wins: 8, losses: 0, pokemonIds: [94, 1013, 1018, 186, 727, 478], pokemonNames: ["Gengar", "Sinistcha", "Archaludon", "Politoed", "Incineroar", "Froslass"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Shadow Ball", "Sludge Bomb", "Perish Song", "Protect"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Matcha Gotcha", "Trick Room", "Rage Powder", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Hypnosis", "Perish Song", "Protect"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Flare Blitz", "Fake Out", "Parting Shot", "Protect"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Aurora Veil", "Rain Dance", "Protect"] }
  ] },
  { id: "ct-144", tournament: "MMHM X CHAOS LEAGUE QUALIFIER #1", players: 27, placement: 2, player: "KST|KAMPFI ", wins: 6, losses: 2, pokemonIds: [655, 670, 903, 727, 1013, 445], pokemonNames: ["Delphox", "Floette", "Sneasler", "Incineroar", "Sinistcha", "Garchomp"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Protect", "Heat Wave", "Psyshock", "Nasty Plot"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Coaching"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Parting Shot", "Throat Chop", "Fake Out"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Trick Room"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Stomping Tantrum", "Rock Slide", "Dragon Claw"] }
  ] },
  { id: "ct-145", tournament: "MMHM X CHAOS LEAGUE QUALIFIER #1", players: 27, placement: 3, player: "aberen", wins: 5, losses: 2, pokemonIds: [666, 670, 925, 1013, 655, 727], pokemonNames: ["Vivillon", "Floette", "Maushold", "Sinistcha", "Delphox", "Incineroar"], sets: [
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Rage Powder", "Hurricane", "Sleep Powder", "Pollen Puff"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Draining Kiss", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Follow Me", "Super Fang", "Feint", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Rage Powder", "Matcha Gotcha", "Life Dew", "Protect"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Nasty Plot", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Parting Shot", "Throat Chop", "Flare Blitz", "Fake Out"] }
  ] },
  { id: "ct-146", tournament: "MMHM X CHAOS LEAGUE QUALIFIER #1", players: 27, placement: 4, player: "Orttega15", wins: 4, losses: 3, pokemonIds: [115, 324, 981, 858, 983, 727], pokemonNames: ["Kangaskhan", "Torkoal", "Farigiraf", "Hatterene", "Kingambit", "Incineroar"], sets: [
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Double-Edge", "Low Kick", "Sucker Punch", "Fake Out"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Weather Ball", "Earth Power", "Protect"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Psychic", "Hyper Voice", "Helping Hand", "Trick Room"] },
    { ability: "Magic Bounce", item: "Focus Sash", moves: ["Dazzling Gleam", "Psychic", "Trick Room", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Intimidate", item: "White Herb", moves: ["Close Combat", "Darkest Lariat", "Fake Out", "Flare Blitz"] }
  ] },
  { id: "ct-147", tournament: "MMHM X CHAOS LEAGUE QUALIFIER #1", players: 27, placement: 5, player: "Shnipe", wins: 4, losses: 2, pokemonIds: [547, 5059, 983, 282, 902, 903], pokemonNames: ["Whimsicott", "Hisuian Arcanine", "Kingambit", "Gardevoir", "Basculegion-M", "Sneasler"], sets: [
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Rock Head", item: "Focus Sash", moves: ["Flare Blitz", "Rock Slide", "Extreme Speed", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] },
    { ability: "Trace", item: "Gardevoirite", moves: ["Hyper Voice", "Psychic", "Taunt", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Flip Turn"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] }
  ] },
  { id: "ct-148", tournament: "MMHM X CHAOS LEAGUE QUALIFIER #1", players: 27, placement: 6, player: "Skyfire", wins: 4, losses: 2, pokemonIds: [670, 1013, 666, 727, 655, 925], pokemonNames: ["Floette", "Sinistcha", "Vivillon", "Incineroar", "Delphox", "Maushold"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Sleep Powder", "Hurricane", "Rage Powder", "Tailwind"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Nasty Plot", "Protect"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Follow Me", "Super Fang", "Feint", "Protect"] }
  ] },
  { id: "ct-149", tournament: "MMHM X CHAOS LEAGUE QUALIFIER #1", players: 27, placement: 7, player: "MarvVGC", wins: 3, losses: 3, pokemonIds: [478, 5059, 983, 903, 142, 902], pokemonNames: ["Froslass", "Hisuian Arcanine", "Kingambit", "Sneasler", "Aerodactyl", "Basculegion-M"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Rock Head", item: "Focus Sash", moves: ["Protect", "Head Smash", "Extreme Speed", "Flare Blitz"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Low Kick", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Protect", "Fake Out"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] }
  ] },
  { id: "ct-150", tournament: "MMHM X CHAOS LEAGUE QUALIFIER #1", players: 27, placement: 8, player: "DoctorDragapult", wins: 3, losses: 3, pokemonIds: [478, 10336, 5059, 1013, 115, 823], pokemonNames: ["Froslass", "Hisuian Samurott", "Hisuian Arcanine", "Sinistcha", "Kangaskhan", "Corviknight"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Protect", "Nasty Plot"] },
    { ability: "Sharpness", item: "Choice Scarf", moves: ["Ceaseless Edge", "Razor Shell", "Flip Turn", "Sacred Sword"] },
    { ability: "Rock Head", item: "Focus Sash", moves: ["Head Smash", "Flare Blitz", "Protect", "Flame Charge"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Trick Room", "Imprison", "Rage Powder"] },
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Fake Out", "Double-Edge", "Sucker Punch", "Drain Punch"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Brave Bird", "Iron Head", "Taunt", "Tailwind"] }
  ] },
  { id: "ct-151", tournament: "Pokemon Champions Torneo De Baneos", players: 8, placement: 1, player: "Losandy", wins: 5, losses: 1, pokemonIds: [707, 666, 68, 157, 497, 130], pokemonNames: ["Klefki", "Vivillon", "Machamp", "Typhlosion", "Serperior", "Gyarados"], sets: [
    { ability: "Prankster", item: "Sitrus Berry", moves: ["Reflect", "Light Screen", "Dazzling Gleam", "Thunder Wave"] },
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Sleep Powder", "Hurricane", "Pollen Puff", "Protect"] },
    { ability: "No Guard", item: "Quick Claw", moves: ["Dynamic Punch", "Stone Edge", "Protect", "Bulldoze"] },
    { ability: "Blaze", item: "Choice Scarf", moves: ["Eruption", "Heat Wave", "Fire Spin", "Overheat"] },
    { ability: "Contrary", item: "Leftovers", moves: ["Leech Seed", "Leaf Storm", "Protect", "Breaking Swipe"] },
    { ability: "Intimidate", item: "Gyaradosite", moves: ["Waterfall", "Crunch", "Dragon Dance", "Protect"] }
  ] },
  { id: "ct-152", tournament: "Pokemon Champions Torneo De Baneos", players: 8, placement: 2, player: "RonaldxT7", wins: 4, losses: 2, pokemonIds: [678, 65, 197, 763, 500, 752], pokemonNames: ["Meowstic-M", "Alakazam", "Umbreon", "Tsareena", "Emboar", "Araquanid"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Expanding Force", "Trick Room", "Psychic Terrain", "Fake Out"] },
    { ability: "Magic Guard", item: "Alakazite", moves: ["Expanding Force", "Shadow Ball", "Dazzling Gleam", "Protect"] },
    { ability: "Synchronize", item: "Leftovers", moves: ["Toxic", "Moonlight", "Snarl", "Protect"] },
    { ability: "Queenly Majesty", item: "Miracle Seed", moves: ["Trop Kick", "Protect", "Low Kick", "Helping Hand"] },
    { ability: "Blaze", item: "Emboarite", moves: ["Bulk Up", "Drain Punch", "Heat Crash", "Protect"] },
    { ability: "Water Bubble", item: "Mystic Water", moves: ["Liquidation", "Leech Life", "Wide Guard", "Protect"] }
  ] },
  { id: "ct-153", tournament: "Pokemon Champions Torneo De Baneos", players: 8, placement: 3, player: "SlytherisGaming", wins: 3, losses: 2, pokemonIds: [392, 135, 475, 748, 497, 319], pokemonNames: ["Infernape", "Jolteon", "Gallade", "Toxapex", "Serperior", "Sharpedo"], sets: [
    { ability: "Iron Fist", item: "Black Belt", moves: ["Fake Out", "Drain Punch", "Taunt", "Fire Punch"] },
    { ability: "Volt Absorb", item: "Focus Sash", moves: ["Protect", "Alluring Voice", "Thunderbolt", "Helping Hand"] },
    { ability: "Sharpness", item: "Galladite", moves: ["Protect", "Psycho Cut", "Sacred Sword", "Swords Dance"] },
    { ability: "Regenerator", item: "Leftovers", moves: ["Baneful Bunker", "Infestation", "Toxic", "Liquidation"] },
    { ability: "Contrary", item: "Sitrus Berry", moves: ["Protect", "Leaf Storm", "Glare", "Giga Drain"] },
    { ability: "Speed Boost", item: "Sharpedonite", moves: ["Protect", "Liquidation", "Ice Fang", "Crunch"] }
  ] },
  { id: "ct-154", tournament: "Pokemon Champions Torneo De Baneos", players: 8, placement: 4, player: "jeanlopez25", wins: 2, losses: 3, pokemonIds: [707, 184, 740, 778, 323, 858], pokemonNames: ["Klefki", "Azumarill", "Crabominable", "Mimikyu", "Camerupt", "Hatterene"], sets: [
    { ability: "Prankster", item: "Sitrus Berry", moves: ["Reflect", "Misty Terrain", "Light Screen", "Dazzling Gleam"] },
    { ability: "Huge Power", item: "Mystic Water", moves: ["Liquidation", "Play Rough", "Aqua Jet", "Protect"] },
    { ability: "Iron Fist", item: "Crabominite", moves: ["Drain Punch", "Ice Hammer", "Thunder Punch", "Protect"] },
    { ability: "Disguise", item: "Mental Herb", moves: ["Play Rough", "Trick Room", "Shadow Claw", "Protect"] },
    { ability: "Solid Rock", item: "Cameruptite", moves: ["Heat Wave", "Earth Power", "Ancient Power", "Protect"] },
    { ability: "Magic Bounce", item: "Fairy Feather", moves: ["Dazzling Gleam", "Psychic", "Life Dew", "Protect"] }
  ] },
  { id: "ct-155", tournament: "Pokemon Champions Torneo De Baneos", players: 8, placement: 5, player: "Humi", wins: 1, losses: 3, pokemonIds: [186, 181, 130, 858, 461, 614], pokemonNames: ["Politoed", "Ampharos", "Gyarados", "Hatterene", "Weavile", "Beartic"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Protect", "Weather Ball", "Perish Song", "Encore"] },
    { ability: "Static", item: "Ampharosite", moves: ["Dragon Pulse", "Protect", "Thunder", "Volt Switch"] },
    { ability: "Intimidate", item: "Gyaradosite", moves: ["Waterfall", "Protect", "Crunch", "Dragon Dance"] },
    { ability: "Magic Bounce", item: "Fairy Feather", moves: ["Dazzling Gleam", "Protect", "Psychic", "Trick Room"] },
    { ability: "Pressure", item: "Focus Sash", moves: ["Fake Out", "Knock Off", "Triple Axel", "Protect"] },
    { ability: "Swift Swim", item: "Never-Melt Ice", moves: ["Icicle Crash", "Protect", "Close Combat", "Liquidation"] }
  ] },
  { id: "ct-156", tournament: "VGC Trainer school x MMHM x Pride month event! #1", players: 52, placement: 1, player: "GielBakker", wins: 10, losses: 0, pokemonIds: [94, 670, 727, 983, 903, 784], pokemonNames: ["Gengar", "Floette", "Incineroar", "Kingambit", "Sneasler", "Kommo-o"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Protect", "Shadow Ball", "Perish Song", "Disable"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Moonblast", "Light of Ruin", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Protect", "Flare Blitz", "Fake Out", "Parting Shot"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Swords Dance", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Aura Sphere", "Clangorous Soul", "Protect"] }
  ] },
  { id: "ct-157", tournament: "VGC Trainer school x MMHM x Pride month event! #1", players: 52, placement: 2, player: "darxzy", wins: 8, losses: 2, pokemonIds: [655, 903, 1013, 902, 727, 670], pokemonNames: ["Delphox", "Sneasler", "Sinistcha", "Basculegion-M", "Incineroar", "Floette"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Nasty Plot", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Draining Kiss", "Calm Mind", "Protect"] }
  ] },
  { id: "ct-158", tournament: "VGC Trainer school x MMHM x Pride month event! #1", players: 52, placement: 3, player: "GOUKI_PR", wins: 7, losses: 2, pokemonIds: [6, 903, 981, 445, 983, 142], pokemonNames: ["Charizard", "Sneasler", "Farigiraf", "Garchomp", "Kingambit", "Aerodactyl"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Protect", "Weather Ball"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Psychic", "Hyper Voice", "Imprison"] },
    { ability: "Rough Skin", item: "Dragon Fang", moves: ["Scale Shot", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Protect", "Sucker Punch", "Iron Head"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Rock Slide", "Protect", "Wide Guard", "Tailwind"] }
  ] },
  { id: "ct-159", tournament: "VGC Trainer school x MMHM x Pride month event! #1", players: 52, placement: 4, player: "charpie", wins: 6, losses: 3, pokemonIds: [445, 6, 983, 902, 547, 727], pokemonNames: ["Garchomp", "Charizard", "Kingambit", "Basculegion-M", "Whimsicott", "Incineroar"], sets: [
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Rock Slide", "Earthquake", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Encore", "Tailwind", "Protect"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] }
  ] },
  { id: "ct-160", tournament: "VGC Trainer school x MMHM x Pride month event! #1", players: 52, placement: 5, player: "Katiclus", wins: 6, losses: 2, pokemonIds: [94, 959, 186, 784, 547, 5059], pokemonNames: ["Gengar", "Tinkaton", "Politoed", "Kommo-o", "Whimsicott", "Hisuian Arcanine"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Shadow Ball", "Sludge Bomb", "Perish Song", "Protect"] },
    { ability: "Mold Breaker", item: "Shuca Berry", moves: ["Fake Out", "Gigaton Hammer", "Encore", "Protect"] },
    { ability: "Drizzle", item: "Mystic Water", moves: ["Weather Ball", "Ice Beam", "Perish Song", "Protect"] },
    { ability: "Soundproof", item: "Dragon Fang", moves: ["Clanging Scales", "Aura Sphere", "Clangorous Soul", "Protect"] },
    { ability: "Prankster", item: "Kebia Berry", moves: ["Moonblast", "Tailwind", "Light Screen", "Protect"] },
    { ability: "Rock Head", item: "Focus Sash", moves: ["Flare Blitz", "Head Smash", "Rock Slide", "Protect"] }
  ] },
  { id: "ct-161", tournament: "VGC Trainer school x MMHM x Pride month event! #1", players: 52, placement: 6, player: "Smogolem", wins: 5, losses: 3, pokemonIds: [623, 981, 324, 983, 765, 3], pokemonNames: ["Golurk", "Farigiraf", "Torkoal", "Kingambit", "Oranguru", "Venusaur"], sets: [
    { ability: "No Guard", item: "Golurkite", moves: ["Poltergeist", "Headlong Rush", "Rock Slide", "Protect"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Twin Beam", "Hyper Voice", "Helping Hand"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Heat Wave", "Protect", "Body Press"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Inner Focus", item: "Colbur Berry", moves: ["Trick Room", "Skill Swap", "Instruct", "Protect"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Giga Drain", "Sleep Powder", "Sludge Bomb", "Earth Power"] }
  ] },
  { id: "ct-162", tournament: "VGC Trainer school x MMHM x Pride month event! #1", players: 52, placement: 7, player: "Jurrasic_z", wins: 5, losses: 3, pokemonIds: [6, 547, 983, 902, 445, 970], pokemonNames: ["Charizard", "Whimsicott", "Kingambit", "Basculegion-M", "Garchomp", "Glimmora"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Protect", "Encore", "Tailwind", "Moonblast"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Protect", "Last Respects", "Aqua Jet"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Protect", "Rock Slide", "Earthquake", "Dragon Claw"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Spiky Shield", "Power Gem", "Sludge Bomb", "Earth Power"] }
  ] },
  { id: "ct-163", tournament: "VGC Trainer school x MMHM x Pride month event! #1", players: 52, placement: 8, player: "AthenaStriveVGC", wins: 5, losses: 3, pokemonIds: [670, 652, 902, 1013, 279, 445], pokemonNames: ["Floette", "Chesnaught", "Basculegion-M", "Sinistcha", "Pelipper", "Garchomp"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Moonblast", "Dazzling Gleam", "Light of Ruin"] },
    { ability: "Bulletproof", item: "Chesnaughtite", moves: ["Spiky Shield", "Wood Hammer", "Body Press", "Iron Defense"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Rage Powder", "Matcha Gotcha", "Life Dew", "Trick Room"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Hurricane", "Tailwind", "Wide Guard"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Protect", "Earthquake", "Poison Jab", "Rock Slide"] }
  ] },
  { id: "ct-164", tournament: "VGC FACTORY #2", players: 15, placement: 1, player: "Tabook", wins: 6, losses: 0, pokemonIds: [903, 186, 10009, 952, 956, 1018], pokemonNames: ["Sneasler", "Politoed", "Wash Rotom", "Scovillain", "Espathra", "Archaludon"], sets: [
    { ability: "Unburden", item: "Focus Sash", moves: ["Protect", "Close Combat", "Fake Out", "Dire Claw"] },
    { ability: "Drizzle", item: "Mystic Water", moves: ["Protect", "Muddy Water", "Weather Ball", "Ice Beam"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Hydro Pump", "Thunderbolt", "Will-O-Wisp", "Protect"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Protect", "Leech Seed", "Rage Powder", "Overheat"] },
    { ability: "Speed Boost", item: "Colbur Berry", moves: ["Protect", "Lumina Crash", "Calm Mind", "Baton Pass"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Protect", "Electro Shot", "Flash Cannon", "Dragon Pulse"] }
  ] },
  { id: "ct-165", tournament: "VGC FACTORY #2", players: 15, placement: 2, player: "Bebot", wins: 4, losses: 2, pokemonIds: [925, 823, 902, 445, 655, 670], pokemonNames: ["Maushold", "Corviknight", "Basculegion-M", "Garchomp", "Delphox", "Floette"], sets: [
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Protect", "Follow Me", "Feint", "Super Fang"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Roost", "Tailwind", "Brave Bird", "Bulk Up"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Aqua Jet", "Flip Turn", "Wave Crash", "Last Respects"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Protect", "Dragon Claw", "Earthquake", "Rock Slide"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Protect", "Nasty Plot", "Psychic", "Heat Wave"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Moonblast", "Dazzling Gleam", "Calm Mind"] }
  ] },
  { id: "ct-166", tournament: "VGC FACTORY #2", players: 15, placement: 3, player: "MapacheWT", wins: 3, losses: 2, pokemonIds: [780, 681, 475, 324, 1013, 765], pokemonNames: ["Drampa", "Aegislash", "Gallade", "Torkoal", "Sinistcha", "Oranguru"], sets: [
    { ability: "Berserk", item: "Drampanite", moves: ["Protect", "Dragon Pulse", "Hyper Voice", "Earth Power"] },
    { ability: "Stance Change", item: "Spell Tag", moves: ["King's Shield", "Poltergeist", "Shadow Sneak", "Iron Head"] },
    { ability: "Sharpness", item: "White Herb", moves: ["Wide Guard", "Sacred Sword", "Psycho Cut", "Trick Room"] },
    { ability: "Drought", item: "Charcoal", moves: ["Protect", "Eruption", "Heat Wave", "Weather Ball"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Trick Room", "Rage Powder", "Life Dew", "Matcha Gotcha"] },
    { ability: "Inner Focus", item: "Mental Herb", moves: ["Protect", "Trick Room", "Psychic", "Instruct"] }
  ] },
  { id: "ct-167", tournament: "VGC FACTORY #2", players: 15, placement: 4, player: "Deyfran24", wins: 3, losses: 2, pokemonIds: [9, 981, 324, 780, 983, 534], pokemonNames: ["Blastoise", "Farigiraf", "Torkoal", "Drampa", "Kingambit", "Conkeldurr"], sets: [
    { ability: "Torrent", item: "Blastoisinite", moves: ["Water Spout", "Dark Pulse", "Aura Sphere", "Fake Out"] },
    { ability: "Armor Tail", item: "Focus Sash", moves: ["Hyper Voice", "Psychic", "Helping Hand", "Trick Room"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Solar Beam", "Heat Wave", "Protect"] },
    { ability: "Cloud Nine", item: "White Herb", moves: ["Hyper Voice", "Draco Meteor", "Earth Power", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Iron Fist", item: "Black Belt", moves: ["Drain Punch", "Mach Punch", "Thunder Punch", "Protect"] }
  ] },
  { id: "ct-168", tournament: "VGC FACTORY #2", players: 15, placement: 5, player: "Zddz", wins: 3, losses: 1, pokemonIds: [547, 445, 10008, 478, 752, 823], pokemonNames: ["Whimsicott", "Garchomp", "Heat Rotom", "Froslass", "Araquanid", "Corviknight"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Encore", "Dazzling Gleam", "Taunt"] },
    { ability: "Rough Skin", item: "White Herb", moves: ["Rock Slide", "Earthquake", "Protect", "Dragon Claw"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Overheat", "Protect", "Will-O-Wisp", "Thunderbolt"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Water Bubble", item: "Mystic Water", moves: ["Liquidation", "Protect", "Leech Life", "Poison Jab"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Iron Head", "Body Press", "Iron Defense", "Roost"] }
  ] },
  { id: "ct-169", tournament: "VGC FACTORY #2", players: 15, placement: 6, player: "dSbarbara", wins: 2, losses: 2, pokemonIds: [663, 970, 445, 10103, 681, 10009], pokemonNames: ["Talonflame", "Glimmora", "Garchomp", "Alolan Ninetales", "Aegislash", "Wash Rotom"], sets: [
    { ability: "Flame Body", item: "Sharp Beak", moves: ["Protect", "Flare Blitz", "Dual Wingbeat", "Tailwind"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Spiky Shield", "Power Gem", "Sludge Bomb", "Earth Power"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Protect", "Earthquake", "Dragon Claw", "Swords Dance"] },
    { ability: "Snow Warning", item: "Choice Scarf", moves: ["Blizzard", "Icy Wind", "Freeze-Dry", "Moonblast"] },
    { ability: "Stance Change", item: "Focus Sash", moves: ["King's Shield", "Poltergeist", "Shadow Sneak", "Close Combat"] },
    { ability: "Levitate", item: "Magnet", moves: ["Protect", "Hydro Pump", "Thunderbolt", "Will-O-Wisp"] }
  ] },
  { id: "ct-170", tournament: "VGC FACTORY #2", players: 15, placement: 7, player: "Maves", wins: 2, losses: 2, pokemonIds: [6, 547, 983, 902, 445, 970], pokemonNames: ["Charizard", "Whimsicott", "Kingambit", "Basculegion-M", "Garchomp", "Glimmora"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Tailwind", "Moonblast", "Encore", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Low Kick", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Poison Jab"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Earth Power", "Power Gem", "Sludge Bomb", "Spiky Shield"] }
  ] },
  { id: "ct-171", tournament: "VGC FACTORY #2", players: 15, placement: 8, player: "PatrickSuzuki777", wins: 2, losses: 2, pokemonIds: [475, 186, 1018, 663, 983, 763], pokemonNames: ["Gallade", "Politoed", "Archaludon", "Talonflame", "Kingambit", "Tsareena"], sets: [
    { ability: "Steadfast", item: "Galladite", moves: ["Protect", "Psycho Cut", "Sacred Sword", "Rock Slide"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Protect", "Weather Ball", "Ice Beam", "Rain Dance"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Protect", "Dragon Pulse", "Flash Cannon", "Electro Shot"] },
    { ability: "Gale Wings", item: "Focus Sash", moves: ["Protect", "Tailwind", "Brave Bird", "Taunt"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Iron Head", "Sucker Punch", "Kowtow Cleave"] },
    { ability: "Queenly Majesty", item: "Choice Scarf", moves: ["U-turn", "Knock Off", "Triple Axel", "Trop Kick"] }
  ] },
  { id: "ct-172", tournament: "Game Corner Showdown 2025 - Split 3 | Torneio #7", players: 9, placement: 1, player: "Rosha Volari", wins: 5, losses: 1, pokemonIds: [6, 727, 981, 700, 142, 445], pokemonNames: ["Charizard", "Incineroar", "Farigiraf", "Sylveon", "Aerodactyl", "Garchomp"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Protect", "Solar Beam"] },
    { ability: "Intimidate", item: "White Herb", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Close Combat"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Hyper Voice", "Twin Beam", "Trick Room", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Moonblast", "Quick Attack", "Detect"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Rock Slide", "Tailwind", "Protect", "Sunny Day"] },
    { ability: "Rough Skin", item: "Garchompite", moves: ["Stomping Tantrum", "Dragon Claw", "Earthquake", "Rock Slide"] }
  ] },
  { id: "ct-173", tournament: "Game Corner Showdown 2025 - Split 3 | Torneio #7", players: 9, placement: 2, player: "Miguel Rebelo", wins: 4, losses: 2, pokemonIds: [6, 670, 445, 547, 902, 983], pokemonNames: ["Charizard", "Floette", "Garchomp", "Whimsicott", "Basculegion-M", "Kingambit"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] }
  ] },
  { id: "ct-174", tournament: "Game Corner Showdown 2025 - Split 3 | Torneio #7", players: 9, placement: 3, player: "Bruno Silveira", wins: 3, losses: 2, pokemonIds: [6, 149, 970, 983, 902, 547], pokemonNames: ["Charizard", "Dragonite", "Glimmora", "Kingambit", "Basculegion-M", "Whimsicott"], sets: [
    { ability: "Blaze", item: "Charizardite X", moves: ["Protect", "Thunder Punch", "Dragon Claw", "Flare Blitz"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Protect", "Air Slash", "Dragon Pulse", "Flamethrower"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Spiky Shield", "Power Gem", "Earth Power", "Sludge Bomb"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Low Kick", "Sucker Punch", "Iron Head", "Kowtow Cleave"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Protect", "Aqua Jet", "Last Respects", "Wave Crash"] },
    { ability: "Prankster", item: "Kebia Berry", moves: ["Protect", "Tailwind", "Encore", "Moonblast"] }
  ] },
  { id: "ct-175", tournament: "Game Corner Showdown 2025 - Split 3 | Torneio #7", players: 9, placement: 4, player: "Fernando Albuquerque", wins: 2, losses: 3, pokemonIds: [248, 530, 887, 36, 350, 1013], pokemonNames: ["Tyranitar", "Excadrill", "Dragapult", "Clefable", "Milotic", "Sinistcha"], sets: [
    { ability: "Sand Stream", item: "Passho Berry", moves: ["Rock Slide", "Knock Off", "Superpower", "Protect"] },
    { ability: "Sand Rush", item: "Focus Sash", moves: ["High Horsepower", "Rock Slide", "Swords Dance", "Protect"] },
    { ability: "Cursed Body", item: "Dragon Fang", moves: ["Draco Meteor", "Will-O-Wisp", "Light Screen", "U-turn"] },
    { ability: "Magic Guard", item: "Clefablite", moves: ["Air Slash", "Ice Beam", "Follow Me", "Protect"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Muddy Water", "Coil", "Hypnosis", "Recover"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Imprison", "Trick Room"] }
  ] },
  { id: "ct-176", tournament: "Game Corner Showdown 2025 - Split 3 | Torneio #7", players: 9, placement: 5, player: "Diogo Henriques", wins: 2, losses: 2, pokemonIds: [655, 36, 983, 903, 445, 902], pokemonNames: ["Delphox", "Clefable", "Kingambit", "Sneasler", "Garchomp", "Basculegion-M"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Encore", "Protect"] },
    { ability: "Unaware", item: "Sitrus Berry", moves: ["Moonblast", "Helping Hand", "Follow Me", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Low Kick", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Earthquake", "Dragon Claw", "Rock Tomb", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Aqua Jet", "Flip Turn", "Wave Crash", "Last Respects"] }
  ] },
  { id: "ct-177", tournament: "Game Corner Showdown 2025 - Split 3 | Torneio #7", players: 9, placement: 6, player: "Pedro Miguel", wins: 2, losses: 2, pokemonIds: [952, 142, 445, 902, 983, 700], pokemonNames: ["Scovillain", "Aerodactyl", "Garchomp", "Basculegion-M", "Kingambit", "Sylveon"], sets: [
    { ability: "Moody", item: "Scovillainite", moves: ["Overheat", "Rage Powder", "Leech Seed", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Poison Jab", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Kowtow Cleave", "Iron Head", "Low Kick", "Sucker Punch"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Quick Attack", "Calm Mind", "Detect"] }
  ] },
  { id: "ct-178", tournament: "Game Corner Showdown 2025 - Split 3 | Torneio #7", players: 9, placement: 7, player: "Bruno Alfacinha", wins: 2, losses: 2, pokemonIds: [130, 445, 670, 727, 903, 1013], pokemonNames: ["Gyarados", "Garchomp", "Floette", "Incineroar", "Sneasler", "Sinistcha"], sets: [
    { ability: "Intimidate", item: "Gyaradosite", moves: ["Waterfall", "Lash Out", "Dragon Dance", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Draining Kiss", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Taunt", "Parting Shot", "Fake Out"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Fake Out", "Close Combat", "Dire Claw", "Coaching"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] }
  ] },
  { id: "ct-179", tournament: "Game Corner Showdown 2025 - Split 3 | Torneio #7", players: 9, placement: 8, player: "Micael Ramos", wins: 0, losses: 4, pokemonIds: [983, 903, 655, 981, 350, 3], pokemonNames: ["Kingambit", "Sneasler", "Delphox", "Farigiraf", "Milotic", "Venusaur"], sets: [
    { ability: "Defiant", item: "Black Glasses", moves: ["Protect", "Kowtow Cleave", "Sucker Punch", "Swords Dance"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Protect", "Close Combat", "Dire Claw"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Protect", "Heat Wave", "Psyshock", "Nasty Plot"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Foul Play", "Psychic", "Helping Hand"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Life Dew", "Coil", "Hypnosis", "Hydro Pump"] },
    { ability: "Chlorophyll", item: "Quick Claw", moves: ["Protect", "Leech Seed", "Acid Spray", "Helping Hand"] }
  ] },
  { id: "ct-180", tournament: "Mudkip's Marsh Pit #0", players: 27, placement: 1, player: "Hrishi", wins: 8, losses: 0, pokemonIds: [952, 142, 445, 902, 983, 700], pokemonNames: ["Scovillain", "Aerodactyl", "Garchomp", "Basculegion-M", "Kingambit", "Sylveon"], sets: [
    { ability: "Moody", item: "Scovillainite", moves: ["Overheat", "Protect", "Leech Seed", "Rage Powder"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Protect", "Dual Wingbeat", "Tailwind"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Protect", "Poison Jab"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Flip Turn"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Kowtow Cleave", "Iron Head", "Low Kick", "Sucker Punch"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Quick Attack", "Calm Mind", "Detect"] }
  ] },
  { id: "ct-181", tournament: "Mudkip's Marsh Pit #0", players: 27, placement: 2, player: "LegKickSpammer", wins: 6, losses: 2, pokemonIds: [784, 212, 727, 1013, 902, 248], pokemonNames: ["Kommo-o", "Scizor", "Incineroar", "Sinistcha", "Basculegion-M", "Tyranitar"], sets: [
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Aura Sphere", "Clangorous Soul", "Protect"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "Swords Dance", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Fake Out", "Helping Hand", "Parting Shot"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Trick Room", "Matcha Gotcha", "Rage Powder", "Life Dew"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Flip Turn", "Last Respects", "Aqua Jet"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Low Kick", "Protect"] }
  ] },
  { id: "ct-182", tournament: "Mudkip's Marsh Pit #0", players: 27, placement: 3, player: "Tenex", wins: 5, losses: 2, pokemonIds: [903, 983, 902, 981, 952, 142], pokemonNames: ["Sneasler", "Kingambit", "Basculegion-M", "Farigiraf", "Scovillain", "Aerodactyl"], sets: [
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Last Respects", "Liquidation", "Aqua Jet", "Protect"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Psychic", "Protect", "Hyper Voice"] },
    { ability: "Chlorophyll", item: "Scovillainite", moves: ["Flamethrower", "Leech Seed", "Protect", "Rage Powder"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Tailwind", "Rock Slide", "Protect", "Dual Wingbeat"] }
  ] },
  { id: "ct-183", tournament: "Mudkip's Marsh Pit #0", players: 27, placement: 4, player: "Duckoooo", wins: 4, losses: 3, pokemonIds: [663, 903, 208, 248, 10009, 1013], pokemonNames: ["Talonflame", "Sneasler", "Steelix", "Tyranitar", "Wash Rotom", "Sinistcha"], sets: [
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Protect", "Swords Dance", "Flare Blitz", "Brave Bird"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Sturdy", item: "Steelixite", moves: ["Wide Guard", "High Horsepower", "Heavy Slam", "Protect"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Dragon Dance", "Protect", "Rock Slide", "Knock Off"] },
    { ability: "Levitate", item: "Leftovers", moves: ["Will-O-Wisp", "Hydro Pump", "Thunderbolt", "Light Screen"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Trick Room", "Matcha Gotcha", "Rage Powder", "Protect"] }
  ] },
  { id: "ct-184", tournament: "Mudkip's Marsh Pit #0", players: 27, placement: 5, player: "Shrey", wins: 4, losses: 2, pokemonIds: [248, 212, 1013, 10009, 700, 727], pokemonNames: ["Tyranitar", "Scizor", "Sinistcha", "Wash Rotom", "Sylveon", "Incineroar"], sets: [
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Dragon Dance", "Rock Slide", "Knock Off", "Protect"] },
    { ability: "Technician", item: "Scizorite", moves: ["Swords Dance", "Bullet Punch", "Bug Bite", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Trick Room"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Hydro Pump", "Volt Switch", "Trick", "Will-O-Wisp"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Protect", "Quick Attack"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Fake Out", "Parting Shot", "Flare Blitz", "Throat Chop"] }
  ] },
  { id: "ct-185", tournament: "Mudkip's Marsh Pit #0", players: 27, placement: 6, player: "Unknown_X", wins: 4, losses: 2, pokemonIds: [547, 6, 445, 908, 350, 970], pokemonNames: ["Whimsicott", "Charizard", "Garchomp", "Meowscarada", "Milotic", "Glimmora"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Dragon Claw", "Rock Slide", "Stomping Tantrum", "Protect"] },
    { ability: "Protean", item: "Choice Scarf", moves: ["Flower Trick", "U-turn", "Low Kick", "Triple Axel"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Scald", "Ice Beam", "Life Dew", "Protect"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Sludge Bomb", "Earth Power", "Power Gem", "Spiky Shield"] }
  ] },
  { id: "ct-186", tournament: "Mudkip's Marsh Pit #0", players: 27, placement: 7, player: "vedantff12345", wins: 3, losses: 3, pokemonIds: [937, 149, 983, 903, 1013, 36], pokemonNames: ["Ceruledge", "Dragonite", "Kingambit", "Sneasler", "Sinistcha", "Clefable"], sets: [
    { ability: "Flash Fire", item: "Leftovers", moves: ["Bulk Up", "Bitter Blade", "Shadow Sneak", "Protect"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Thunderbolt", "Flamethrower", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Swords Dance", "Kowtow Cleave", "Sucker Punch", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Trick Room", "Rage Powder", "Protect"] },
    { ability: "Magic Guard", item: "Clefablite", moves: ["Moonblast", "Follow Me", "Helping Hand", "Protect"] }
  ] },
  { id: "ct-187", tournament: "Mudkip's Marsh Pit #0", players: 27, placement: 8, player: "Light_Kaganou", wins: 3, losses: 3, pokemonIds: [160, 302, 902, 94, 1018, 1013], pokemonNames: ["Feraligatr", "Sableye", "Basculegion-M", "Gengar", "Archaludon", "Sinistcha"], sets: [
    { ability: "Torrent", item: "Feraligite", moves: ["Double-Edge", "Liquidation", "Protect", "Dragon Dance"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Taunt", "Encore", "Disable", "Rain Dance"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Flip Turn"] },
    { ability: "Cursed Body", item: "Gengarite", moves: ["Sludge Bomb", "Shadow Ball", "Protect", "Destiny Bond"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Flash Cannon", "Protect", "Dragon Pulse"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Rage Powder", "Matcha Gotcha", "Shadow Ball", "Trick Room"] }
  ] }
];

/** Computed count of unique tournaments in the dataset */
export const CHAMPIONS_TOURNAMENT_COUNT = new Set(CHAMPIONS_TOURNAMENT_TEAMS.map(t => t.tournament)).size;
