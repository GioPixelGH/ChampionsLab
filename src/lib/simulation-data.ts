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

export const CHAMPIONS_TOURNAMENT_TOTAL_TEAMS = 604;
export const CHAMPIONS_TOURNAMENT_DATE = "2026-06-01";

export const CHAMPIONS_TOURNAMENT_USAGE: ChampionsTournamentUsage[] = [
  { rank: 1, name: "Basculegion-M", count: 264, usagePct: 43.7, top8Count: 86 },
  { rank: 2, name: "Garchomp", count: 249, usagePct: 41.2, top8Count: 80 },
  { rank: 3, name: "Kingambit", count: 227, usagePct: 37.6, top8Count: 75 },
  { rank: 4, name: "Incineroar", count: 175, usagePct: 29, top8Count: 65 },
  { rank: 5, name: "Charizard", count: 170, usagePct: 28.1, top8Count: 55 },
  { rank: 6, name: "Sneasler", count: 165, usagePct: 27.3, top8Count: 51 },
  { rank: 7, name: "Sinistcha", count: 130, usagePct: 21.5, top8Count: 45 },
  { rank: 8, name: "Whimsicott", count: 129, usagePct: 21.4, top8Count: 38 },
  { rank: 9, name: "Floette", count: 113, usagePct: 18.7, top8Count: 45 },
  { rank: 10, name: "Aerodactyl", count: 95, usagePct: 15.7, top8Count: 31 },
  { rank: 11, name: "Archaludon", count: 94, usagePct: 15.6, top8Count: 33 },
  { rank: 12, name: "Sylveon", count: 92, usagePct: 15.2, top8Count: 28 },
  { rank: 13, name: "Glimmora", count: 90, usagePct: 14.9, top8Count: 27 },
  { rank: 14, name: "Farigiraf", count: 82, usagePct: 13.6, top8Count: 25 },
  { rank: 15, name: "Wash Rotom", count: 80, usagePct: 13.2, top8Count: 19 },
  { rank: 16, name: "Pelipper", count: 76, usagePct: 12.6, top8Count: 27 },
  { rank: 17, name: "Dragonite", count: 73, usagePct: 12.1, top8Count: 28 },
  { rank: 18, name: "Talonflame", count: 54, usagePct: 8.9, top8Count: 11 },
  { rank: 19, name: "Venusaur", count: 51, usagePct: 8.4, top8Count: 20 },
  { rank: 20, name: "Froslass", count: 49, usagePct: 8.1, top8Count: 16 },
  { rank: 21, name: "Scizor", count: 45, usagePct: 7.5, top8Count: 11 },
  { rank: 22, name: "Maushold", count: 42, usagePct: 7, top8Count: 15 },
  { rank: 23, name: "Delphox", count: 40, usagePct: 6.6, top8Count: 16 },
  { rank: 24, name: "Kangaskhan", count: 40, usagePct: 6.6, top8Count: 14 },
  { rank: 25, name: "Vivillon", count: 39, usagePct: 6.5, top8Count: 19 },
  { rank: 26, name: "Aegislash", count: 38, usagePct: 6.3, top8Count: 9 },
  { rank: 27, name: "Torkoal", count: 36, usagePct: 6, top8Count: 11 },
  { rank: 28, name: "Gengar", count: 36, usagePct: 6, top8Count: 14 },
  { rank: 29, name: "Alolan Ninetales", count: 34, usagePct: 5.6, top8Count: 8 },
  { rank: 30, name: "Sableye", count: 33, usagePct: 5.5, top8Count: 14 },
  { rank: 31, name: "Politoed", count: 32, usagePct: 5.3, top8Count: 13 },
  { rank: 32, name: "Tyranitar", count: 32, usagePct: 5.3, top8Count: 11 },
  { rank: 33, name: "Gardevoir", count: 32, usagePct: 5.3, top8Count: 6 },
  { rank: 34, name: "Blastoise", count: 31, usagePct: 5.1, top8Count: 8 },
  { rank: 35, name: "Kommo-o", count: 29, usagePct: 4.8, top8Count: 12 },
  { rank: 36, name: "Kleavor", count: 27, usagePct: 4.5, top8Count: 9 },
  { rank: 37, name: "Corviknight", count: 26, usagePct: 4.3, top8Count: 11 },
  { rank: 38, name: "Milotic", count: 26, usagePct: 4.3, top8Count: 8 },
  { rank: 39, name: "Scovillain", count: 21, usagePct: 3.5, top8Count: 2 },
  { rank: 40, name: "Primarina", count: 16, usagePct: 2.6, top8Count: 7 },
  { rank: 41, name: "Hydreigon", count: 16, usagePct: 2.6, top8Count: 3 },
  { rank: 42, name: "Heat Rotom", count: 15, usagePct: 2.5, top8Count: 4 },
  { rank: 43, name: "Skarmory", count: 15, usagePct: 2.5, top8Count: 3 },
  { rank: 44, name: "Meowscarada", count: 15, usagePct: 2.5, top8Count: 7 },
  { rank: 45, name: "Tsareena", count: 14, usagePct: 2.3, top8Count: 2 },
  { rank: 46, name: "Lopunny", count: 13, usagePct: 2.2, top8Count: 3 },
  { rank: 47, name: "Hisuian Zoroark", count: 13, usagePct: 2.2, top8Count: 4 },
  { rank: 48, name: "Tinkaton", count: 12, usagePct: 2, top8Count: 4 },
  { rank: 49, name: "Excadrill", count: 11, usagePct: 1.8, top8Count: 4 },
  { rank: 50, name: "Clefable", count: 11, usagePct: 1.8, top8Count: 5 },
  { rank: 51, name: "Gyarados", count: 11, usagePct: 1.8, top8Count: 1 },
  { rank: 52, name: "Volcarona", count: 10, usagePct: 1.7, top8Count: 3 },
  { rank: 53, name: "Meganium", count: 9, usagePct: 1.5, top8Count: 1 },
  { rank: 54, name: "Conkeldurr", count: 9, usagePct: 1.5, top8Count: 3 },
  { rank: 55, name: "Palafin", count: 9, usagePct: 1.5, top8Count: 3 },
  { rank: 56, name: "Lucario", count: 9, usagePct: 1.5, top8Count: 4 },
  { rank: 57, name: "Chandelure", count: 9, usagePct: 1.5, top8Count: 4 },
  { rank: 58, name: "Manectric", count: 8, usagePct: 1.3, top8Count: 4 },
  { rank: 59, name: "Tauros", count: 8, usagePct: 1.3, top8Count: 3 },
  { rank: 60, name: "Golurk", count: 8, usagePct: 1.3, top8Count: 0 },
  { rank: 61, name: "Oranguru", count: 8, usagePct: 1.3, top8Count: 3 },
  { rank: 62, name: "Snorlax", count: 8, usagePct: 1.3, top8Count: 0 },
  { rank: 63, name: "Arcanine", count: 8, usagePct: 1.3, top8Count: 2 },
  { rank: 64, name: "Gallade", count: 7, usagePct: 1.2, top8Count: 1 },
  { rank: 65, name: "Mimikyu", count: 7, usagePct: 1.2, top8Count: 2 },
  { rank: 66, name: "Hatterene", count: 7, usagePct: 1.2, top8Count: 4 },
  { rank: 67, name: "Hisuian Typhlosion", count: 7, usagePct: 1.2, top8Count: 4 },
  { rank: 68, name: "Basculegion-F", count: 7, usagePct: 1.2, top8Count: 4 },
  { rank: 69, name: "Dragapult", count: 7, usagePct: 1.2, top8Count: 2 },
  { rank: 70, name: "Ampharos", count: 7, usagePct: 1.2, top8Count: 5 },
  { rank: 71, name: "Araquanid", count: 6, usagePct: 1, top8Count: 3 },
  { rank: 72, name: "Drampa", count: 6, usagePct: 1, top8Count: 2 },
  { rank: 73, name: "Empoleon", count: 6, usagePct: 1, top8Count: 3 },
  { rank: 74, name: "Crabominable", count: 6, usagePct: 1, top8Count: 0 },
  { rank: 75, name: "Camerupt", count: 6, usagePct: 1, top8Count: 0 },
  { rank: 76, name: "Azumarill", count: 6, usagePct: 1, top8Count: 2 },
  { rank: 77, name: "Ceruledge", count: 6, usagePct: 1, top8Count: 5 },
  { rank: 78, name: "Weavile", count: 6, usagePct: 1, top8Count: 3 },
  { rank: 79, name: "Galarian Slowking", count: 6, usagePct: 1, top8Count: 2 },
  { rank: 80, name: "Feraligatr", count: 5, usagePct: 0.8, top8Count: 3 },
  { rank: 81, name: "Heracross", count: 5, usagePct: 0.8, top8Count: 0 },
  { rank: 82, name: "Liepard", count: 5, usagePct: 0.8, top8Count: 0 },
  { rank: 83, name: "Hisuian Decidueye", count: 5, usagePct: 0.8, top8Count: 1 },
  { rank: 84, name: "Espathra", count: 5, usagePct: 0.8, top8Count: 1 },
  { rank: 85, name: "Steelix", count: 5, usagePct: 0.8, top8Count: 1 },
  { rank: 86, name: "Klefki", count: 5, usagePct: 0.8, top8Count: 2 },
  { rank: 87, name: "Hisuian Samurott", count: 5, usagePct: 0.8, top8Count: 2 },
  { rank: 88, name: "Slowbro", count: 5, usagePct: 0.8, top8Count: 1 },
  { rank: 89, name: "Aurorus", count: 4, usagePct: 0.7, top8Count: 1 },
  { rank: 90, name: "Toxapex", count: 4, usagePct: 0.7, top8Count: 2 },
  { rank: 91, name: "Mow Rotom", count: 4, usagePct: 0.7, top8Count: 1 },
  { rank: 92, name: "Pikachu", count: 4, usagePct: 0.7, top8Count: 1 },
  { rank: 93, name: "Lycanroc", count: 4, usagePct: 0.7, top8Count: 1 },
  { rank: 94, name: "Noivern", count: 4, usagePct: 0.7, top8Count: 3 },
  { rank: 95, name: "Pidgeot", count: 4, usagePct: 0.7, top8Count: 3 },
  { rank: 96, name: "Starmie", count: 4, usagePct: 0.7, top8Count: 1 },
  { rank: 97, name: "Chesnaught", count: 4, usagePct: 0.7, top8Count: 3 },
  { rank: 98, name: "Hawlucha", count: 4, usagePct: 0.7, top8Count: 1 },
  { rank: 99, name: "Abomasnow", count: 4, usagePct: 0.7, top8Count: 2 },
  { rank: 100, name: "Meowstic-M", count: 4, usagePct: 0.7, top8Count: 1 },
  { rank: 101, name: "Luxray", count: 3, usagePct: 0.5, top8Count: 2 },
  { rank: 102, name: "Alakazam", count: 3, usagePct: 0.5, top8Count: 1 },
  { rank: 103, name: "Hisuian Goodra", count: 3, usagePct: 0.5, top8Count: 1 },
  { rank: 104, name: "Cofagrigus", count: 3, usagePct: 0.5, top8Count: 2 },
  { rank: 105, name: "Glaceon", count: 3, usagePct: 0.5, top8Count: 1 },
  { rank: 106, name: "Tyrantrum", count: 2, usagePct: 0.3, top8Count: 1 },
  { rank: 107, name: "Goodra", count: 2, usagePct: 0.3, top8Count: 1 },
  { rank: 108, name: "Mr. Rime", count: 2, usagePct: 0.3, top8Count: 0 },
  { rank: 109, name: "Rhyperior", count: 2, usagePct: 0.3, top8Count: 1 },
  { rank: 110, name: "Houndoom", count: 2, usagePct: 0.3, top8Count: 1 },
  { rank: 111, name: "Heliolisk", count: 2, usagePct: 0.3, top8Count: 0 },
  { rank: 112, name: "Toxicroak", count: 2, usagePct: 0.3, top8Count: 1 },
  { rank: 113, name: "Greninja", count: 2, usagePct: 0.3, top8Count: 1 },
  { rank: 114, name: "Hisuian Arcanine", count: 2, usagePct: 0.3, top8Count: 1 },
  { rank: 115, name: "Chimecho", count: 2, usagePct: 0.3, top8Count: 1 },
  { rank: 116, name: "Vanilluxe", count: 2, usagePct: 0.3, top8Count: 0 },
  { rank: 117, name: "Salazzle", count: 2, usagePct: 0.3, top8Count: 0 },
  { rank: 118, name: "Leafeon", count: 2, usagePct: 0.3, top8Count: 2 },
  { rank: 119, name: "Umbreon", count: 2, usagePct: 0.3, top8Count: 1 },
  { rank: 120, name: "Armarouge", count: 2, usagePct: 0.3, top8Count: 0 },
  { rank: 121, name: "Raichu", count: 2, usagePct: 0.3, top8Count: 0 },
  { rank: 122, name: "Roserade", count: 1, usagePct: 0.2, top8Count: 0 },
  { rank: 123, name: "Slowking", count: 1, usagePct: 0.2, top8Count: 0 },
  { rank: 124, name: "Bellibolt", count: 1, usagePct: 0.2, top8Count: 0 },
  { rank: 125, name: "Medicham", count: 1, usagePct: 0.2, top8Count: 0 },
  { rank: 126, name: "Emboar", count: 1, usagePct: 0.2, top8Count: 0 },
  { rank: 127, name: "Altaria", count: 1, usagePct: 0.2, top8Count: 1 },
  { rank: 128, name: "Ninetales", count: 1, usagePct: 0.2, top8Count: 0 },
  { rank: 129, name: "Serperior", count: 1, usagePct: 0.2, top8Count: 1 },
  { rank: 130, name: "Machamp", count: 1, usagePct: 0.2, top8Count: 0 },
  { rank: 131, name: "Aggron", count: 1, usagePct: 0.2, top8Count: 0 },
  { rank: 132, name: "Spiritomb", count: 1, usagePct: 0.2, top8Count: 0 },
  { rank: 133, name: "Gliscor", count: 1, usagePct: 0.2, top8Count: 0 },
  { rank: 134, name: "Rampardos", count: 1, usagePct: 0.2, top8Count: 0 },
  { rank: 135, name: "Pinsir", count: 1, usagePct: 0.2, top8Count: 1 },
  { rank: 136, name: "Samurott", count: 1, usagePct: 0.2, top8Count: 0 },
  { rank: 137, name: "Krookodile", count: 1, usagePct: 0.2, top8Count: 1 },
  { rank: 138, name: "Reuniclus", count: 1, usagePct: 0.2, top8Count: 0 },
  { rank: 139, name: "Audino", count: 1, usagePct: 0.2, top8Count: 0 },
  { rank: 140, name: "Orthworm", count: 1, usagePct: 0.2, top8Count: 0 },
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
  { id: "ct-1", tournament: "Mt. Moon Champions VGC Weekly #4 2026", players: 14, placement: 1, player: "Magnetman", wins: 6, losses: 0, pokemonIds: [279, 1018, 902, 302, 149, 3], pokemonNames: ["Pelipper", "Archaludon", "Basculegion-M", "Sableye", "Dragonite", "Venusaur"], sets: [
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Tailwind", "Weather Ball", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Dragon Pulse", "Electro Shot", "Flash Cannon", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Rain Dance", "Encore", "Light Screen", "Will-O-Wisp"] },
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Draco Meteor", "Tailwind", "Hurricane", "Protect"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Giga Drain", "Sludge Bomb", "Protect", "Earth Power"] }
  ] },
  { id: "ct-2", tournament: "Mt. Moon Champions VGC Weekly #4 2026", players: 14, placement: 2, player: "Jonnycat", wins: 4, losses: 2, pokemonIds: [149, 670, 727, 903, 983, 1013], pokemonNames: ["Dragonite", "Floette", "Incineroar", "Sneasler", "Kingambit", "Sinistcha"], sets: [
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Dragon Pulse", "Heat Wave", "Extreme Speed", "Tailwind"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Poison Touch", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] }
  ] },
  { id: "ct-3", tournament: "Mt. Moon Champions VGC Weekly #4 2026", players: 14, placement: 3, player: "Gaty", wins: 3, losses: 2, pokemonIds: [9, 666, 903, 981, 1013, 727], pokemonNames: ["Blastoise", "Vivillon", "Sneasler", "Farigiraf", "Sinistcha", "Incineroar"], sets: [
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Water Spout", "Dark Pulse", "Aura Sphere", "Fake Out"] },
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Sleep Powder", "Rage Powder", "Hurricane", "Pollen Puff"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Fake Out", "Close Combat", "Rock Tomb", "Dire Claw"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Twin Beam", "Hyper Voice", "Trick Room", "Helping Hand"] },
    { ability: "Hospitality", item: "Leftovers", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Blaze", item: "Sitrus Berry", moves: ["Fake Out", "Throat Chop", "Parting Shot", "Flare Blitz"] }
  ] },
  { id: "ct-4", tournament: "Mt. Moon Champions VGC Weekly #4 2026", players: 14, placement: 4, player: "ReshyramVGC", wins: 3, losses: 2, pokemonIds: [697, 302, 655, 752, 823, 310], pokemonNames: ["Tyrantrum", "Sableye", "Delphox", "Araquanid", "Corviknight", "Manectric"], sets: [
    { ability: "Rock Head", item: "Choice Scarf", moves: ["Head Smash", "Psychic Fangs", "Dragon Claw", "Close Combat"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Fake Out", "Will-O-Wisp", "Light Screen", "Quash"] },
    { ability: "Levitate", item: "Delphoxite", moves: ["Protect", "Heat Wave", "Psychic", "Encore"] },
    { ability: "Water Bubble", item: "Mystic Water", moves: ["Wide Guard", "Lunge", "Icy Wind", "Liquidation"] },
    { ability: "Mirror Armor", item: "Sitrus Berry", moves: ["Protect", "Tailwind", "Iron Head", "Brave Bird"] },
    { ability: "Intimidate", item: "Manectite", moves: ["Protect", "Volt Switch", "Overheat", "Snarl"] }
  ] },
  { id: "ct-5", tournament: "Mt. Moon Champions VGC Weekly #4 2026", players: 14, placement: 5, player: "Originofshadow", wins: 2, losses: 2, pokemonIds: [663, 730, 903, 959, 780, 706], pokemonNames: ["Talonflame", "Primarina", "Sneasler", "Tinkaton", "Drampa", "Goodra"], sets: [
    { ability: "Gale Wings", item: "Leftovers", moves: ["Hurricane", "Brave Bird", "Fire Blast", "Tailwind"] },
    { ability: "Torrent", item: "Sitrus Berry", moves: ["Sparkling Aria", "Ice Beam", "Shadow Ball", "Moonblast"] },
    { ability: "Poison Touch", item: "White Herb", moves: ["Toxic Spikes", "Close Combat", "Night Slash", "Dire Claw"] },
    { ability: "Mold Breaker", item: "Quick Claw", moves: ["Gigaton Hammer", "Fake Out", "Brick Break", "Stone Edge"] },
    { ability: "Sap Sipper", item: "Drampanite", moves: ["Thunder", "Ice Beam", "Shadow Ball", "Draco Meteor"] },
    { ability: "Hydration", item: "Focus Sash", moves: ["Life Dew", "Focus Blast", "Hydro Pump", "Sludge Bomb"] }
  ] },
  { id: "ct-6", tournament: "Mt. Moon Champions VGC Weekly #4 2026", players: 14, placement: 6, player: "Kamavolt", wins: 2, losses: 2, pokemonIds: [6, 902, 142, 903, 983, 445], pokemonNames: ["Charizard", "Basculegion-M", "Aerodactyl", "Sneasler", "Kingambit", "Garchomp"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Solar Beam", "Ancient Power"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Aqua Jet", "Flip Turn", "Last Respects", "Wave Crash"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Dual Wingbeat", "Protect", "Rock Slide", "Tailwind"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Iron Head", "Kowtow Cleave", "Protect", "Sucker Punch"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Protect", "Stomping Tantrum", "Rock Tomb"] }
  ] },
  { id: "ct-7", tournament: "Mt. Moon Champions VGC Weekly #4 2026", players: 14, placement: 7, player: "KST VGC ", wins: 2, losses: 2, pokemonIds: [670, 445, 903, 681, 727, 1013], pokemonNames: ["Floette", "Garchomp", "Sneasler", "Aegislash", "Incineroar", "Sinistcha"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Stomping Tantrum", "Rock Tomb", "Dragon Claw"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Coaching"] },
    { ability: "Stance Change", item: "Spell Tag", moves: ["King's Shield", "Wide Guard", "Shadow Sneak", "Poltergeist"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Parting Shot", "Throat Chop", "Fake Out"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Trick Room"] }
  ] },
  { id: "ct-8", tournament: "Mt. Moon Champions VGC Weekly #4 2026", players: 14, placement: 8, player: "That_boi_Yami", wins: 2, losses: 2, pokemonIds: [149, 154, 186, 903, 902, 1013], pokemonNames: ["Dragonite", "Meganium", "Politoed", "Sneasler", "Basculegion-M", "Sinistcha"], sets: [
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Draco Meteor", "Hurricane", "Tailwind", "Protect"] },
    { ability: "Overgrow", item: "Meganiumite", moves: ["Solar Beam", "Dazzling Gleam", "Weather Ball", "Protect"] },
    { ability: "Drizzle", item: "Mystic Water", moves: ["Muddy Water", "Weather Ball", "Icy Wind", "Helping Hand"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Flip Turn", "Aqua Jet", "Last Respects"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Imprison"] }
  ] },
  { id: "ct-9", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 1, player: "Altkyle", wins: 8, losses: 0, pokemonIds: [149, 902, 212, 1018, 279, 727], pokemonNames: ["Dragonite", "Basculegion-M", "Scizor", "Archaludon", "Pelipper", "Incineroar"], sets: [
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Dragon Pulse", "Flamethrower", "Tailwind", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Close Combat", "Swords Dance", "Protect"] },
    { ability: "Stamina", item: "Chople Berry", moves: ["Electro Shot", "Dragon Pulse", "Aura Sphere", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Weather Ball", "Tailwind", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] }
  ] },
  { id: "ct-10", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 2, player: "AlexIannoneVGC", wins: 6, losses: 2, pokemonIds: [160, 983, 903, 700, 10008, 1013], pokemonNames: ["Feraligatr", "Kingambit", "Sneasler", "Sylveon", "Heat Rotom", "Sinistcha"], sets: [
    { ability: "Sheer Force", item: "Feraligite", moves: ["Liquidation", "Dragon Dance", "Facade", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Protect", "Swords Dance"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Quick Attack", "Detect", "Hyper Beam", "Hyper Voice"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Will-O-Wisp", "Electroweb", "Thunderbolt", "Overheat"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Trick Room", "Protect", "Matcha Gotcha", "Rage Powder"] }
  ] },
  { id: "ct-11", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 3, player: "R1Pnightmare", wins: 5, losses: 2, pokemonIds: [6, 547, 445, 970, 983, 902], pokemonNames: ["Charizard", "Whimsicott", "Garchomp", "Glimmora", "Kingambit", "Basculegion-M"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Rock Tomb", "Earthquake", "Dragon Claw", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Earth Power", "Sludge Bomb", "Power Gem", "Spiky Shield"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Aqua Jet", "Wave Crash", "Last Respects", "Protect"] }
  ] },
  { id: "ct-12", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 4, player: "SuperDialga", wins: 4, losses: 3, pokemonIds: [670, 547, 445, 902, 983, 1018], pokemonNames: ["Floette", "Whimsicott", "Garchomp", "Basculegion-M", "Kingambit", "Archaludon"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Dragon Claw", "Stomping Tantrum", "Rock Slide", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Flip Turn"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Protect"] },
    { ability: "Sturdy", item: "White Herb", moves: ["Draco Meteor", "Flash Cannon", "Aura Sphere", "Protect"] }
  ] },
  { id: "ct-13", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 5, player: "PapaRott", wins: 4, losses: 2, pokemonIds: [142, 478, 395, 445, 1013, 700], pokemonNames: ["Aerodactyl", "Froslass", "Empoleon", "Garchomp", "Sinistcha", "Sylveon"], sets: [
    { ability: "Unnerve", item: "Focus Sash", moves: ["Dual Wingbeat", "Rock Slide", "Protect", "Tailwind"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Substitute", "Shadow Ball", "Protect"] },
    { ability: "Competitive", item: "Chople Berry", moves: ["Protect", "Icy Wind", "Surf", "Helping Hand"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Rock Slide", "Dragon Claw", "Stomping Tantrum"] },
    { ability: "Hospitality", item: "Leftovers", moves: ["Rage Powder", "Shadow Ball", "Matcha Gotcha", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Detect", "Hyper Beam", "Hyper Voice", "Quick Attack"] }
  ] },
  { id: "ct-14", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 6, player: "Neogrunge", wins: 4, losses: 2, pokemonIds: [981, 3, 700, 445, 6, 142], pokemonNames: ["Farigiraf", "Venusaur", "Sylveon", "Garchomp", "Charizard", "Aerodactyl"], sets: [
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Psychic", "Hyper Voice", "Reflect", "Trick Room"] },
    { ability: "Chlorophyll", item: "Occa Berry", moves: ["Leaf Storm", "Sleep Powder", "Protect", "Sludge Bomb"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Protect", "Quick Attack", "Hyper Beam", "Hyper Voice"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Poison Jab", "Rock Slide", "Stomping Tantrum", "Dragon Claw"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Solar Beam", "Heat Wave", "Weather Ball"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Protect", "Wide Guard", "Tailwind", "Rock Slide"] }
  ] },
  { id: "ct-15", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 7, player: "TheRogueElf", wins: 4, losses: 2, pokemonIds: [3, 248, 637, 142, 128, 302], pokemonNames: ["Venusaur", "Tyranitar", "Volcarona", "Aerodactyl", "Tauros", "Sableye"], sets: [
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Earth Power", "Protect", "Sludge Bomb", "Giga Drain"] },
    { ability: "Sand Stream", item: "Chople Berry", moves: ["Rock Slide", "Knock Off", "Protect", "Low Kick"] },
    { ability: "Flame Body", item: "Leftovers", moves: ["Fiery Dance", "Protect", "Quiver Dance", "Struggle Bug"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Dual Wingbeat", "Rock Slide", "Tailwind", "Protect"] },
    { ability: "Intimidate", item: "Mystic Water", moves: ["Wave Crash", "Close Combat", "Protect", "Aqua Jet"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Fake Out", "Will-O-Wisp", "Quash", "Foul Play"] }
  ] },
  { id: "ct-16", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 8, player: "Robbie ", wins: 3, losses: 3, pokemonIds: [248, 530, 823, 635, 10009, 903], pokemonNames: ["Tyranitar", "Excadrill", "Corviknight", "Hydreigon", "Wash Rotom", "Sneasler"], sets: [
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Dragon Dance", "Protect"] },
    { ability: "Sand Rush", item: "Focus Sash", moves: ["Earthquake", "High Horsepower", "Iron Head", "Protect"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Brave Bird", "Body Press", "Tailwind", "Roost"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Draco Meteor", "Dark Pulse", "Snarl", "Flamethrower"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Hydro Pump", "Thunderbolt", "Will-O-Wisp", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Coaching", "Fake Out"] }
  ] },
  { id: "ct-17", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 9, player: "RivalAngel", wins: 3, losses: 2, pokemonIds: [149, 6, 547, 445, 983, 902], pokemonNames: ["Dragonite", "Charizard", "Whimsicott", "Garchomp", "Kingambit", "Basculegion-M"], sets: [
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Heat Wave", "Thunderbolt", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Poison Jab"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-18", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 10, player: "chapulin14", wins: 3, losses: 2, pokemonIds: [3, 727, 142, 902, 700, 784], pokemonNames: ["Venusaur", "Incineroar", "Aerodactyl", "Basculegion-M", "Sylveon", "Kommo-o"], sets: [
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Giga Drain", "Sludge Bomb", "Protect", "Earth Power"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Fake Out", "Taunt", "Parting Shot"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Dual Wingbeat", "Tailwind", "Wide Guard", "Rock Slide"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Liquidation", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Detect", "Quick Attack"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Clangorous Soul", "Aura Sphere", "Protect"] }
  ] },
  { id: "ct-19", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 11, player: "Baelor", wins: 3, losses: 2, pokemonIds: [6, 900, 902, 670, 445, 547], pokemonNames: ["Charizard", "Kleavor", "Basculegion-M", "Floette", "Garchomp", "Whimsicott"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Protect", "Weather Ball", "Solar Beam"] },
    { ability: "Sharpness", item: "Choice Scarf", moves: ["Stone Axe", "Rock Slide", "Close Combat", "X-Scissor"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Aqua Jet", "Flip Turn", "Wave Crash", "Last Respects"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Draining Kiss", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Protect", "Encore", "Moonblast", "Tailwind"] }
  ] },
  { id: "ct-20", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 12, player: "shaikhvgc786", wins: 3, losses: 2, pokemonIds: [666, 655, 445, 324, 981, 9], pokemonNames: ["Vivillon", "Delphox", "Garchomp", "Torkoal", "Farigiraf", "Blastoise"], sets: [
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Pollen Puff", "Rage Powder", "Sleep Powder", "Protect"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Encore", "Psyshock", "Heat Wave", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Rock Slide", "Stomping Tantrum", "Dragon Claw"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Weather Ball", "Protect"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Psychic", "Thunderbolt", "Trick Room", "Helping Hand"] },
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Fake Out", "Water Spout", "Shell Smash", "Dark Pulse"] }
  ] },
  { id: "ct-21", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 13, player: "JareMase", wins: 2, losses: 3, pokemonIds: [981, 740, 983, 700, 727, 475], pokemonNames: ["Farigiraf", "Crabominable", "Kingambit", "Sylveon", "Incineroar", "Gallade"], sets: [
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Protect", "Psychic", "Helping Hand", "Trick Room"] },
    { ability: "Hyper Cutter", item: "Crabominite", moves: ["Protect", "Ice Hammer", "Rock Slide", "Drain Punch"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Protect", "Iron Head", "Sucker Punch", "Kowtow Cleave"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Protect", "Calm Mind", "Hyper Voice", "Psychic"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Protect", "Sacred Sword", "Leaf Blade", "Trick Room"] }
  ] },
  { id: "ct-22", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 14, player: "TheFakeHK", wins: 2, losses: 3, pokemonIds: [670, 681, 10009, 142, 445, 115], pokemonNames: ["Floette", "Aegislash", "Wash Rotom", "Aerodactyl", "Garchomp", "Kangaskhan"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Protect", "Calm Mind"] },
    { ability: "Stance Change", item: "Spell Tag", moves: ["Sacred Sword", "King's Shield", "Poltergeist", "Shadow Sneak"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Thunderbolt", "Hydro Pump", "Will-O-Wisp", "Trick"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Protect", "Rock Slide", "Wide Guard", "Tailwind"] },
    { ability: "Rough Skin", item: "White Herb", moves: ["Rock Slide", "Earthquake", "Dragon Claw", "Protect"] },
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Fake Out", "Double-Edge", "Sucker Punch", "Drain Punch"] }
  ] },
  { id: "ct-23", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 15, player: "McChops", wins: 2, losses: 0, pokemonIds: [248, 445, 1013, 925, 823, 10009], pokemonNames: ["Tyranitar", "Garchomp", "Sinistcha", "Maushold", "Corviknight", "Wash Rotom"], sets: [
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Protect", "Rock Slide", "Knock Off", "Dragon Dance"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Protect", "Dragon Claw", "Earthquake", "Swords Dance"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Protect", "Trick Room", "Matcha Gotcha", "Rage Powder"] },
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Encore", "Super Fang", "Follow Me", "Protect"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Iron Head", "Tailwind", "Brave Bird", "Bulk Up"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Hydro Pump", "Will-O-Wisp", "Thunderbolt", "Protect"] }
  ] },
  { id: "ct-24", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 16, player: "Smogolem", wins: 2, losses: 3, pokemonIds: [623, 981, 324, 534, 983, 765], pokemonNames: ["Golurk", "Farigiraf", "Torkoal", "Conkeldurr", "Kingambit", "Oranguru"], sets: [
    { ability: "No Guard", item: "Golurkite", moves: ["Poltergeist", "Headlong Rush", "Rock Slide", "Protect"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Twin Beam", "Hyper Voice", "Helping Hand"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Heat Wave", "Protect", "Body Press"] },
    { ability: "Iron Fist", item: "Black Belt", moves: ["Drain Punch", "Knock Off", "Rock Slide", "Ice Punch"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Inner Focus", item: "Colbur Berry", moves: ["Trick Room", "Skill Swap", "Instruct", "Protect"] }
  ] },
  { id: "ct-25", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 17, player: "Animacon", wins: 2, losses: 3, pokemonIds: [778, 143, 407, 475, 428, 405], pokemonNames: ["Mimikyu", "Snorlax", "Roserade", "Gallade", "Lopunny", "Luxray"], sets: [
    { ability: "Disguise", item: "Leftovers", moves: ["Trick Room", "Psych Up", "Drain Punch", "Play Rough"] },
    { ability: "Thick Fat", item: "Sitrus Berry", moves: ["Belly Drum", "Crunch", "Protect", "High Horsepower"] },
    { ability: "Poison Point", item: "Focus Sash", moves: ["Sludge Bomb", "Energy Ball", "Shadow Ball", "Giga Drain"] },
    { ability: "Justified", item: "Galladite", moves: ["Drain Punch", "Triple Axel", "Throat Chop", "Rock Slide"] },
    { ability: "Cute Charm", item: "Chople Berry", moves: ["Fake Out", "Baton Pass", "Cosmic Power", "Helping Hand"] },
    { ability: "Intimidate", item: "Shuca Berry", moves: ["Supercell Slam", "Play Rough", "Throat Chop", "Rain Dance"] }
  ] },
  { id: "ct-26", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 18, player: "Landon", wins: 2, losses: 2, pokemonIds: [214, 199, 115, 983, 981, 36], pokemonNames: ["Heracross", "Slowking", "Kangaskhan", "Kingambit", "Farigiraf", "Clefable"], sets: [
    { ability: "Guts", item: "Heracronite", moves: ["Protect", "Pin Missile", "Rock Blast", "Close Combat"] },
    { ability: "Regenerator", item: "Leftovers", moves: ["Scald", "Helping Hand", "Trick Room", "Chilly Reception"] },
    { ability: "Scrappy", item: "Silk Scarf", moves: ["Fake Out", "Last Resort"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Kowtow Cleave", "Sucker Punch", "Iron Head"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Protect", "Trick Room", "Psychic", "Light Screen"] },
    { ability: "Magic Guard", item: "Kebia Berry", moves: ["Protect", "Thunder Wave", "Icy Wind", "Follow Me"] }
  ] },
  { id: "ct-27", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 19, player: "KokeVGC", wins: 2, losses: 3, pokemonIds: [248, 530, 635, 10009, 778, 823], pokemonNames: ["Tyranitar", "Excadrill", "Hydreigon", "Wash Rotom", "Mimikyu", "Corviknight"], sets: [
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Low Kick", "Protect"] },
    { ability: "Sand Rush", item: "Focus Sash", moves: ["Earthquake", "Iron Head", "Rock Slide", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Dark Pulse", "Draco Meteor", "Snarl", "Heat Wave"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Thunderbolt", "Hydro Pump", "Will-O-Wisp", "Protect"] },
    { ability: "Disguise", item: "White Herb", moves: ["Play Rough", "Shadow Claw", "Shadow Sneak", "Protect"] },
    { ability: "Pressure", item: "Leftovers", moves: ["Brave Bird", "Bulk Up", "Tailwind", "Roost"] }
  ] },
  { id: "ct-28", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 20, player: "CodeLyokoAelita09", wins: 1, losses: 2, pokemonIds: [279, 1018, 681, 925, 445, 282], pokemonNames: ["Pelipper", "Archaludon", "Aegislash", "Maushold", "Garchomp", "Gardevoir"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Hurricane", "Helping Hand", "Tailwind"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Flash Cannon", "Draco Meteor", "Protect", "Electro Shot"] },
    { ability: "Stance Change", item: "Focus Sash", moves: ["Poltergeist", "Shadow Sneak", "Wide Guard", "King's Shield"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Follow Me", "Super Fang", "Taunt", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Breaking Swipe", "Earthquake", "Dragon Claw", "Rock Slide"] },
    { ability: "Trace", item: "Gardevoirite", moves: ["Psychic", "Calm Mind", "Protect", "Hyper Voice"] }
  ] },
  { id: "ct-29", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 21, player: "YoBoyHoudini", wins: 1, losses: 1, pokemonIds: [981, 663, 445, 10009, 983, 670], pokemonNames: ["Farigiraf", "Talonflame", "Garchomp", "Wash Rotom", "Kingambit", "Floette"], sets: [
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Helping Hand", "Twin Beam", "Hyper Voice", "Trick Room"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Brave Bird", "Protect", "Tailwind", "Flare Blitz"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Dragon Claw", "Rock Tomb", "Stomping Tantrum", "Protect"] },
    { ability: "Levitate", item: "Leftovers", moves: ["Hydro Pump", "Thunderbolt", "Will-O-Wisp", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Protect", "Dazzling Gleam", "Light of Ruin"] }
  ] },
  { id: "ct-30", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 22, player: "NikoNeeto", wins: 1, losses: 2, pokemonIds: [142, 6, 983, 700, 350, 10340], pokemonNames: ["Aerodactyl", "Charizard", "Kingambit", "Sylveon", "Milotic", "Hisuian Zoroark"], sets: [
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Dual Wingbeat", "Rock Slide", "Protect", "Tailwind"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Air Slash", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Quick Attack", "Hyper Beam", "Protect"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Scald", "Recover", "Coil", "Hypnosis"] },
    { ability: "Illusion", item: "Focus Sash", moves: ["Roar", "Bitter Malice", "Icy Wind", "Protect"] }
  ] },
  { id: "ct-31", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 23, player: "7illo", wins: 1, losses: 1, pokemonIds: [981, 1013, 9, 925, 279, 323], pokemonNames: ["Farigiraf", "Sinistcha", "Blastoise", "Maushold", "Pelipper", "Camerupt"], sets: [
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Psyshock", "Thunderbolt", "Calm Mind", "Trick Room"], teraType: "Normal" },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Matcha Gotcha", "Rage Powder", "Imprison", "Protect"], teraType: "Grass" },
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Water Spout", "Dark Pulse", "Shell Smash", "Protect"], teraType: "Water" },
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Super Fang", "Follow Me", "Taunt", "Protect"], teraType: "Normal" },
    { ability: "Drizzle", item: "Leftovers", moves: ["Hurricane", "Weather Ball", "Tailwind", "Protect"], teraType: "Water" },
    { ability: "Solid Rock", item: "Cameruptite", moves: ["Earth Power", "Heat Wave", "Rock Slide", "Protect"], teraType: "Fire" }
  ] },
  { id: "ct-32", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 24, player: "champninjastar", wins: 1, losses: 2, pokemonIds: [670, 6, 902, 445, 983, 547], pokemonNames: ["Floette", "Charizard", "Basculegion-M", "Garchomp", "Kingambit", "Whimsicott"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Ancient Power", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Stomping Tantrum", "Dragon Claw", "Rock Slide", "Poison Jab"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] }
  ] },
  { id: "ct-33", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 25, player: "KST VGC ", wins: 1, losses: 4, pokemonIds: [670, 445, 903, 681, 727, 1013], pokemonNames: ["Floette", "Garchomp", "Sneasler", "Aegislash", "Incineroar", "Sinistcha"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Stomping Tantrum", "Rock Tomb", "Dragon Claw"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Coaching"] },
    { ability: "Stance Change", item: "Spell Tag", moves: ["King's Shield", "Wide Guard", "Shadow Sneak", "Poltergeist"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Parting Shot", "Throat Chop", "Fake Out"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Trick Room"] }
  ] },
  { id: "ct-34", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 26, player: "Trey9523", wins: 1, losses: 4, pokemonIds: [478, 903, 10340, 700, 866, 36], pokemonNames: ["Froslass", "Sneasler", "Hisuian Zoroark", "Sylveon", "Mr. Rime", "Clefable"], sets: [
    { ability: "Snow Cloak", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Protect", "Draining Kiss"] },
    { ability: "Poison Touch", item: "Spell Tag", moves: ["Dire Claw", "Shadow Claw", "Fake Out", "Brick Break"] },
    { ability: "Illusion", item: "Sitrus Berry", moves: ["Bitter Malice", "Sludge Bomb", "Flamethrower", "Psychic"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Beam", "Hyper Voice", "Shadow Ball", "Mystical Fire"] },
    { ability: "Screen Cleaner", item: "Quick Claw", moves: ["Calm Mind", "Iron Defense", "Baton Pass", "Slack Off"] },
    { ability: "Magic Guard", item: "Focus Sash", moves: ["Draining Kiss", "Cosmic Power", "Baton Pass", "Moonlight"] }
  ] },
  { id: "ct-35", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 27, player: "Sj1992", wins: 1, losses: 2, pokemonIds: [510, 142, 212, 699, 10340, 10341], pokemonNames: ["Liepard", "Aerodactyl", "Scizor", "Aurorus", "Hisuian Zoroark", "Hisuian Decidueye"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Knock Off", "Yawn", "Encore", "Fake Out"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Swords Dance", "Bug Bite", "Protect"] },
    { ability: "Snow Warning", item: "Sitrus Berry", moves: ["Protect", "Blizzard", "Ancient Power", "Freeze-Dry"] },
    { ability: "Illusion", item: "Choice Scarf", moves: ["Shadow Ball", "Icy Wind", "Psychic", "Flamethrower"] },
    { ability: "Scrappy", item: "Scope Lens", moves: ["Leaf Blade", "Triple Arrows", "Sucker Punch", "Protect"] }
  ] },
  { id: "ct-36", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 28, player: "Dr_Bejan", wins: 0, losses: 1, pokemonIds: [670, 547, 970, 445, 902, 6], pokemonNames: ["Floette", "Whimsicott", "Glimmora", "Garchomp", "Basculegion-M", "Charizard"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Earthquake", "Stomping Tantrum", "Dragon Claw", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] }
  ] },
  { id: "ct-37", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 29, player: "Soilchemy", wins: 0, losses: 1, pokemonIds: [925, 981, 282, 903, 324, 115], pokemonNames: ["Maushold", "Farigiraf", "Gardevoir", "Sneasler", "Torkoal", "Kangaskhan"], sets: [
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Follow Me", "Super Fang", "Taunt", "After You"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Foul Play", "Trick Room", "Twin Beam", "Helping Hand"] },
    { ability: "Trace", item: "Gardevoirite", moves: ["Hyper Voice", "Psychic", "Protect", "Trick Room"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Protect", "Fake Out", "Close Combat"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Protect", "Earth Power", "Weather Ball"] },
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Double-Edge", "Crunch", "Fake Out", "Hammer Arm"] }
  ] },
  { id: "ct-38", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 30, player: "KMMULLER2020", wins: 0, losses: 2, pokemonIds: [94, 186, 727, 1013, 635, 9], pokemonNames: ["Gengar", "Politoed", "Incineroar", "Sinistcha", "Hydreigon", "Blastoise"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Protect", "Perish Song", "Disable", "Shadow Ball"] },
    { ability: "Drizzle", item: "Leftovers", moves: ["Protect", "Perish Song", "Encore", "Weather Ball"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Protect", "Fake Out", "Parting Shot", "Darkest Lariat"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Protect", "Rage Powder", "Trick Room", "Matcha Gotcha"] },
    { ability: "Levitate", item: "Chople Berry", moves: ["Protect", "Draco Meteor", "Dark Pulse", "Earth Power"] },
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Protect", "Water Spout", "Weather Ball", "Ice Beam"] }
  ] },
  { id: "ct-39", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 31, player: "Meriwis", wins: 0, losses: 1, pokemonIds: [227, 547, 903, 902, 670, 983], pokemonNames: ["Skarmory", "Whimsicott", "Sneasler", "Basculegion-M", "Floette", "Kingambit"], sets: [
    { ability: "Weak Armor", item: "Skarmorite", moves: ["Iron Head", "Brave Bird", "Protect", "Rock Tomb"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Coaching"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Wave Crash", "Flip Turn", "Aqua Jet"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Iron Head", "Kowtow Cleave", "Sucker Punch", "Low Kick"] }
  ] },
  { id: "ct-40", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 32, player: "thingolo", wins: 0, losses: 2, pokemonIds: [939, 279, 445, 1018, 902, 212], pokemonNames: ["Bellibolt", "Pelipper", "Garchomp", "Archaludon", "Basculegion-M", "Scizor"], sets: [
    { ability: "Electromorphosis", item: "Magnet", moves: ["Thunder", "Parabolic Charge", "Soak", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Tailwind", "Muddy Water", "Protect", "Hurricane"] },
    { ability: "Sand Veil", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Iron Tail", "Rock Slide"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Flash Cannon", "Dragon Pulse", "Electro Shot", "Protect"] },
    { ability: "Swift Swim", item: "Mystic Water", moves: ["Aqua Jet", "Flip Turn", "Last Respects", "Wave Crash"] },
    { ability: "Technician", item: "Scizorite", moves: ["Dual Wingbeat", "Bug Bite", "Bullet Punch", "Swords Dance"] }
  ] },
  { id: "ct-41", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 33, player: "Carni", wins: 0, losses: 2, pokemonIds: [478, 10008, 547, 983, 445, 964], pokemonNames: ["Froslass", "Heat Rotom", "Whimsicott", "Kingambit", "Garchomp", "Palafin"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Protect", "Taunt"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Overheat", "Volt Switch", "Electroweb", "Trick"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Encore", "Moonblast", "Fake Tears"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Zero to Hero", item: "Mystic Water", moves: ["Jet Punch", "Wave Crash", "Taunt", "Protect"] }
  ] },
  { id: "ct-42", tournament: "Sketch Academy Champions Regulation M-A Tournament", players: 34, placement: 34, player: "mig_04", wins: 0, losses: 2, pokemonIds: [279, 6, 903, 727, 115, 1018], pokemonNames: ["Pelipper", "Charizard", "Sneasler", "Incineroar", "Kangaskhan", "Archaludon"], sets: [
    { ability: "Drizzle", item: "Focus Sash", moves: ["Weather Ball", "Hurricane", "Ice Beam", "Wide Guard"] },
    { ability: "Drought", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Air Slash", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Acrobatics"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Snarl", "Fake Out", "Flare Blitz", "Parting Shot"] },
    { ability: "Parental Bond", item: "Kangaskhanite", moves: ["Fake Out", "Ice Punch", "Sucker Punch", "Earthquake"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Protect", "Electro Shot", "Protect", "Draco Meteor"] }
  ] },
  { id: "ct-43", tournament: "Champions Collective Invitational I", players: 19, placement: 1, player: "megathorn", wins: 7, losses: 2, pokemonIds: [212, 784, 727, 1013, 248, 10009], pokemonNames: ["Scizor", "Kommo-o", "Incineroar", "Sinistcha", "Tyranitar", "Wash Rotom"], sets: [
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "Swords Dance", "Protect"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Aura Sphere", "Clanging Scales", "Protect", "Clangorous Soul"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Helping Hand", "Flare Blitz", "Parting Shot"] },
    { ability: "Hospitality", item: "Coba Berry", moves: ["Matcha Gotcha", "Trick Room", "Rage Powder", "Life Dew"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Low Kick", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Hydro Pump", "Volt Switch", "Thunderbolt", "Electroweb"] }
  ] },
  { id: "ct-44", tournament: "Champions Collective Invitational I", players: 19, placement: 2, player: "ICPX", wins: 8, losses: 1, pokemonIds: [3, 6, 670, 983, 547, 445], pokemonNames: ["Venusaur", "Charizard", "Floette", "Kingambit", "Whimsicott", "Garchomp"], sets: [
    { ability: "Chlorophyll", item: "Occa Berry", moves: ["Leaf Storm", "Sludge Bomb", "Sleep Powder", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Weather Ball", "Heat Crash", "Solar Beam", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Light of Ruin", "Dazzling Gleam", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Stomping Tantrum", "Dragon Claw", "Rock Slide"] }
  ] },
  { id: "ct-45", tournament: "Champions Collective Invitational I", players: 19, placement: 3, player: "Cfoowl", wins: 6, losses: 2, pokemonIds: [952, 730, 1018, 956, 727, 186], pokemonNames: ["Scovillain", "Primarina", "Archaludon", "Espathra", "Incineroar", "Politoed"], sets: [
    { ability: "Insomnia", item: "Scovillainite", moves: ["Overheat", "Leech Seed", "Rage Powder", "Protect"] },
    { ability: "Liquid Voice", item: "Mystic Water", moves: ["Hyper Voice", "Moonblast", "Calm Mind", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Dragon Pulse", "Flash Cannon", "Electro Shot", "Protect"] },
    { ability: "Speed Boost", item: "Mental Herb", moves: ["Lumina Crash", "Calm Mind", "Baton Pass", "Protect"] },
    { ability: "Intimidate", item: "Charcoal", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Muddy Water", "Psych Up", "Rain Dance"] }
  ] },
  { id: "ct-46", tournament: "Champions Collective Invitational I", players: 19, placement: 4, player: "HeraDitCation", wins: 5, losses: 3, pokemonIds: [981, 858, 324, 727, 983, 6], pokemonNames: ["Farigiraf", "Hatterene", "Torkoal", "Incineroar", "Kingambit", "Charizard"], sets: [
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Thunderbolt", "Psychic", "Trick Room", "Protect"] },
    { ability: "Magic Bounce", item: "Fairy Feather", moves: ["Psychic", "Dazzling Gleam", "Trick Room", "Protect"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Weather Ball", "Earth Power", "Protect"] },
    { ability: "Intimidate", item: "White Herb", moves: ["Fake Out", "Flare Blitz", "Darkest Lariat", "Close Combat"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Swords Dance"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Overheat", "Solar Beam", "Protect"] }
  ] },
  { id: "ct-47", tournament: "Champions Collective Invitational I", players: 19, placement: 5, player: "Rururinillo", wins: 5, losses: 2, pokemonIds: [6, 547, 983, 902, 445, 670], pokemonNames: ["Charizard", "Whimsicott", "Kingambit", "Basculegion-M", "Garchomp", "Floette"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Weather Ball", "Protect", "Heat Wave", "Solar Beam"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Defiant", item: "Occa Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Protect", "Iron Head"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Protect", "Aqua Jet"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Protect", "Dragon Claw", "Rock Slide"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Protect", "Light of Ruin"] }
  ] },
  { id: "ct-48", tournament: "Champions Collective Invitational I", players: 19, placement: 6, player: "Nutchup", wins: 4, losses: 3, pokemonIds: [142, 3, 784, 700, 727, 902], pokemonNames: ["Aerodactyl", "Venusaur", "Kommo-o", "Sylveon", "Incineroar", "Basculegion-M"], sets: [
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Tailwind", "Rock Slide", "Dual Wingbeat", "Protect"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Sludge Bomb", "Giga Drain", "Protect", "Earth Power"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Clangorous Soul", "Aura Sphere", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Moonblast", "Protect", "Quick Attack"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Fake Out", "Throat Chop", "Flare Blitz", "Parting Shot"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Aqua Jet", "Liquidation", "Last Respects", "Protect"] }
  ] },
  { id: "ct-49", tournament: "Champions Collective Invitational I", players: 19, placement: 7, player: "Otark", wins: 4, losses: 3, pokemonIds: [208, 10009, 1013, 903, 248, 663], pokemonNames: ["Steelix", "Wash Rotom", "Sinistcha", "Sneasler", "Tyranitar", "Talonflame"], sets: [
    { ability: "Sturdy", item: "Steelixite", moves: ["Protect", "Heavy Slam", "High Horsepower", "Wide Guard"] },
    { ability: "Levitate", item: "Leftovers", moves: ["Will-O-Wisp", "Thunderbolt", "Light Screen", "Hydro Pump"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Trick Room", "Rage Powder", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Protect", "Knock Off", "Rock Slide", "Dragon Dance"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Swords Dance", "Brave Bird", "Flare Blitz", "Protect"] }
  ] },
  { id: "ct-50", tournament: "Champions Collective Invitational I", players: 19, placement: 8, player: "TomBac", wins: 4, losses: 3, pokemonIds: [212, 784, 902, 1013, 727, 248], pokemonNames: ["Scizor", "Kommo-o", "Basculegion-M", "Sinistcha", "Incineroar", "Tyranitar"], sets: [
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Swords Dance", "Protect", "Bug Bite"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Aura Sphere", "Clangorous Soul", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Trick Room", "Rage Powder", "Life Dew"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Helping Hand", "Fake Out", "Parting Shot"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Low Kick", "Knock Off", "Protect"] }
  ] },
  { id: "ct-51", tournament: "Champions Collective Invitational I", players: 19, placement: 9, player: "Quecle", wins: 3, losses: 3, pokemonIds: [9, 981, 324, 700, 666, 740], pokemonNames: ["Blastoise", "Farigiraf", "Torkoal", "Sylveon", "Vivillon", "Crabominable"], sets: [
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Fake Out", "Water Spout", "Aura Sphere", "Dark Pulse"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Hyper Voice", "Psychic", "Nasty Plot", "Trick"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Flamethrower", "Earth Power", "Solar Beam"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Detect"] },
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Pollen Puff", "Rage Powder", "U-turn", "Protect"] },
    { ability: "Hyper Cutter", item: "Crabominite", moves: ["Drain Punch", "Ice Hammer", "Mach Punch", "Protect"] }
  ] },
  { id: "ct-52", tournament: "Champions Collective Invitational I", players: 19, placement: 10, player: "Ksomon", wins: 3, losses: 3, pokemonIds: [248, 530, 823, 1013, 130, 784], pokemonNames: ["Tyranitar", "Excadrill", "Corviknight", "Sinistcha", "Gyarados", "Kommo-o"], sets: [
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Knock Off", "Low Kick", "Rock Slide", "Protect"] },
    { ability: "Sand Rush", item: "Focus Sash", moves: ["Iron Head", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Brave Bird", "Bulk Up", "Roost", "Tailwind"], teraType: "Flying" },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Waterfall", "Taunt", "Thunder Wave", "Helping Hand"] },
    { ability: "Soundproof", item: "Dragon Fang", moves: ["Aura Sphere", "Clanging Scales", "Clangorous Soul", "Protect"] }
  ] },
  { id: "ct-53", tournament: "Champions Collective Invitational I", players: 19, placement: 11, player: "NonoVGC", wins: 3, losses: 3, pokemonIds: [952, 823, 635, 903, 530, 248], pokemonNames: ["Scovillain", "Corviknight", "Hydreigon", "Sneasler", "Excadrill", "Tyranitar"], sets: [
    { ability: "Moody", item: "Scovillainite", moves: ["Overheat", "Giga Drain", "Rage Powder", "Protect"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Brave Bird", "Iron Head", "Bulk Up", "Tailwind"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Draco Meteor", "Dark Pulse", "Snarl", "Earth Power"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Dire Claw", "Close Combat", "Fake Out"] },
    { ability: "Sand Rush", item: "Focus Sash", moves: ["High Horsepower", "Iron Head", "Rock Slide", "Protect"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Low Kick", "Protect"] }
  ] },
  { id: "ct-54", tournament: "Champions Collective Invitational I", players: 19, placement: 12, player: "carlos_012", wins: 2, losses: 3, pokemonIds: [6, 902, 445, 981, 900, 547], pokemonNames: ["Charizard", "Basculegion-M", "Garchomp", "Farigiraf", "Kleavor", "Whimsicott"], sets: [
    { ability: "Drought", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Solar Beam", "Weather Ball"] },
    { ability: "Adaptability", item: "Colbur Berry", moves: ["Protect", "Wave Crash", "Last Respects", "Aqua Jet"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Protect", "Dragon Claw", "Earthquake", "Stomping Tantrum"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Protect", "Helping Hand", "Trick Room", "Psychic"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Protect", "Stone Axe", "Night Slash", "Close Combat"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Protect", "Tailwind", "Encore", "Moonblast"] }
  ] },
  { id: "ct-55", tournament: "Champions Collective Invitational I", players: 19, placement: 13, player: "AngelDes5", wins: 2, losses: 3, pokemonIds: [902, 115, 637, 10103, 727, 952], pokemonNames: ["Basculegion-M", "Kangaskhan", "Volcarona", "Alolan Ninetales", "Incineroar", "Scovillain"], sets: [
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Flip Turn", "Last Respects"] },
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Fake Out", "Double-Edge", "Drain Punch", "Sucker Punch"] },
    { ability: "Flame Body", item: "Leftovers", moves: ["Heat Wave", "Giga Drain", "Quiver Dance", "Protect"] },
    { ability: "Snow Warning", item: "Focus Sash", moves: ["Blizzard", "Encore", "Disable", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake out", "Throat Shop", "Parting Shot", "Helping hand"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Flamethrower", "Leech Seed", "Protect", "Rage Powder"] }
  ] },
  { id: "ct-56", tournament: "Champions Collective Invitational I", players: 19, placement: 14, player: "Cl2m", wins: 1, losses: 4, pokemonIds: [478, 902, 903, 983, 547, 149], pokemonNames: ["Froslass", "Basculegion-M", "Sneasler", "Kingambit", "Whimsicott", "Dragonite"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Thunderbolt", "Flamethrower", "Protect"] }
  ] },
  { id: "ct-57", tournament: "Champions Collective Invitational I", players: 19, placement: 15, player: "LeCehlou", wins: 1, losses: 4, pokemonIds: [902, 981, 970, 547, 670, 5157], pokemonNames: ["Basculegion-M", "Farigiraf", "Glimmora", "Whimsicott", "Floette", "Hisuian Typhlosion"], sets: [
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Armor Tail", item: "Twisted Spoon", moves: ["Psychic", "Helping Hand", "Trick Room", "Hyper Voice"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Spiky Shield"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Protect", "Encore"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Blaze", item: "Choice Scarf", moves: ["Eruption", "Heat Wave", "Shadow Ball", "Flamethrower"] }
  ] },
  { id: "ct-58", tournament: "Champions Collective Invitational I", players: 19, placement: 16, player: "Kerzz", wins: 1, losses: 3, pokemonIds: [282, 925, 663, 445, 983, 902], pokemonNames: ["Gardevoir", "Maushold", "Talonflame", "Garchomp", "Kingambit", "Basculegion-M"], sets: [
    { ability: "Telepathy", item: "Gardevoirite", moves: ["Hyper Voice", "Psyshock", "Trick Room", "Protect"] },
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Super Fang", "Helping Hand", "Follow Me", "Protect"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Dual Wingbeat", "Flare Blitz", "Tailwind", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Stomping Tantrum", "Earthquake", "Rock Tomb", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Low Kick"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-59", tournament: "Champions Collective Invitational I", players: 19, placement: 17, player: "Shiif", wins: 1, losses: 2, pokemonIds: [903, 700, 956, 655, 983, 925], pokemonNames: ["Sneasler", "Sylveon", "Espathra", "Delphox", "Kingambit", "Maushold"], sets: [
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Coaching"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Moonblast", "Quick Attack", "Detect"] },
    { ability: "Speed Boost", item: "Sitrus Berry", moves: ["Lumina Crash", "Calm Mind", "Baton Pass", "Protect"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Stored Power", "Sunny Day", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Follow Me", "Encore", "Taunt", "Protect"] }
  ] },
  { id: "ct-60", tournament: "Champions Collective Invitational I", players: 19, placement: 18, player: "Nostek", wins: 1, losses: 2, pokemonIds: [784, 212, 727, 1013, 248, 10009], pokemonNames: ["Kommo-o", "Scizor", "Incineroar", "Sinistcha", "Tyranitar", "Wash Rotom"], sets: [
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Clangorous Soul", "Protect", "Aura Sphere"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "Swords Dance", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Fake Out", "Helping Hand", "Parting Shot"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Trick Room", "Matcha Gotcha", "Rage Powder", "Life Dew"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Low Kick", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Electroweb", "Hydro Pump", "Thunderbolt", "Volt Switch"] }
  ] },
  { id: "ct-61", tournament: "Champions Collective Invitational I", players: 19, placement: 19, player: "DigioVGC", wins: 0, losses: 3, pokemonIds: [248, 208, 1013, 663, 10009, 903], pokemonNames: ["Tyranitar", "Steelix", "Sinistcha", "Talonflame", "Wash Rotom", "Sneasler"], sets: [
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Dragon Dance", "Protect"] },
    { ability: "Sturdy", item: "Steelixite", moves: ["Heavy Slam", "High Horsepower", "Wide Guard", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Brave Bird", "Flare Blitz", "Swords Dance", "Protect"] },
    { ability: "Levitate", item: "Leftovers", moves: ["Hydro Pump", "Thunderbolt", "Light Screen", "Will-O-Wisp"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] }
  ] },
  { id: "ct-62", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 1, player: "Abe", wins: 7, losses: 2, pokemonIds: [700, 142, 445, 902, 6, 981], pokemonNames: ["Sylveon", "Aerodactyl", "Garchomp", "Basculegion-M", "Charizard", "Farigiraf"], sets: [
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Dual Wingbeat", "Ice Fang", "Tailwind", "Rock Slide"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Earthquake", "Protect", "Rock Slide", "Dragon Claw"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Aqua Jet", "Liquidation", "Protect", "Last Respects"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Protect", "Weather Ball", "Solar Beam"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Hyper Voice", "Helping Hand", "Psychic"] }
  ] },
  { id: "ct-63", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 2, player: "GielBakker", wins: 6, losses: 3, pokemonIds: [445, 981, 727, 142, 670, 902], pokemonNames: ["Garchomp", "Farigiraf", "Incineroar", "Aerodactyl", "Floette", "Basculegion-M"], sets: [
    { ability: "Rough Skin", item: "Garchompite", moves: ["Earthquake", "Stomping Tantrum", "Dragon Claw", "Protect"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Psychic", "Helping Hand", "Trick Room", "Protect"] },
    { ability: "Intimidate", item: "Charcoal", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Wide Guard", "Rock Slide", "Tailwind", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-64", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 3, player: "MirorBvgc", wins: 6, losses: 2, pokemonIds: [65, 727, 324, 3, 765, 464], pokemonNames: ["Alakazam", "Incineroar", "Torkoal", "Venusaur", "Oranguru", "Rhyperior"], sets: [
    { ability: "Inner Focus", item: "Focus Sash", moves: ["Speed Swap", "Psychic", "Focus Blast", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Darkest Lariat", "Parting Shot"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Heat Wave", "Yawn", "Protect"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Giga Drain", "Sludge Bomb", "Earth Power", "Protect"] },
    { ability: "Inner Focus", item: "Colbur Berry", moves: ["Foul Play", "Instruct", "Encore", "Trick Room"] },
    { ability: "Solid Rock", item: "White Herb", moves: ["Rock Slide", "High Horsepower", "Protect", "Ice Punch"], teraType: "Ground" }
  ] },
  { id: "ct-65", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 4, player: "Great Papayaman", wins: 6, losses: 2, pokemonIds: [94, 727, 925, 186, 1013, 784], pokemonNames: ["Gengar", "Incineroar", "Maushold", "Politoed", "Sinistcha", "Kommo-o"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Shadow Ball", "Disable", "Perish Song", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Throat Chop", "Fake Out", "Parting Shot", "Protect"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Helping Hand", "Encore", "Follow Me", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Encore", "Perish Song", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Protect", "Rage Powder", "Trick Room"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Aura Sphere", "Clanging Scales", "Protect", "Clangorous Soul"] }
  ] },
  { id: "ct-66", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 5, player: "Raichu123", wins: 6, losses: 1, pokemonIds: [279, 983, 903, 902, 149, 1018], pokemonNames: ["Pelipper", "Kingambit", "Sneasler", "Basculegion-M", "Dragonite", "Archaludon"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Tailwind", "Rain Dance", "Weather Ball", "Hurricane"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Dragon Pulse", "Heat Wave", "Tailwind", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] }
  ] },
  { id: "ct-67", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 6, player: "Raydevy", wins: 5, losses: 2, pokemonIds: [663, 670, 445, 10902, 983, 970], pokemonNames: ["Talonflame", "Floette", "Garchomp", "Basculegion-F", "Kingambit", "Glimmora"], sets: [
    { ability: "Gale Wings", item: "None", moves: ["Tailwind", "Acrobatics", "Will-O-Wisp", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Light of Ruin", "Protect", "Dazzling Gleam"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Rock Tomb", "Dragon Claw", "Earthquake", "Protect"] },
    { ability: "Swift Swim", item: "Colbur Berry", moves: ["Surf", "Ice Beam", "Protect", "Last Respects"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Ancient Power", "Sludge Bomb", "Spiky Shield", "Earth Power"] }
  ] },
  { id: "ct-68", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 7, player: "CrystalGem02", wins: 4, losses: 3, pokemonIds: [10009, 983, 445, 478, 142, 903], pokemonNames: ["Wash Rotom", "Kingambit", "Garchomp", "Froslass", "Aerodactyl", "Sneasler"], sets: [
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Thunderbolt", "Hydro Pump", "Will-O-Wisp", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Rough Skin", item: "Focus Sash", moves: ["Earthquake", "Dragon Claw", "Poison Jab", "Rock Tomb"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] }
  ] },
  { id: "ct-69", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 8, player: "Svenny", wins: 4, losses: 3, pokemonIds: [6, 445, 983, 10009, 748, 1013], pokemonNames: ["Charizard", "Garchomp", "Kingambit", "Wash Rotom", "Toxapex", "Sinistcha"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Weather Ball", "Solar Beam", "Heat Wave", "Protect"] },
    { ability: "Rough Skin", item: "White Herb", moves: ["Scale Shot", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Hydro Pump", "Thunderbolt", "Electroweb", "Will-O-Wisp"] },
    { ability: "Regenerator", item: "Leftovers", moves: ["Infestation", "Toxic", "Wide Guard", "Baneful Bunker"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Matcha Gotcha", "Trick Room", "Rage Powder", "Protect"] }
  ] },
  { id: "ct-70", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 9, player: "Kyooby", wins: 3, losses: 3, pokemonIds: [94, 727, 902, 149, 983, 670], pokemonNames: ["Gengar", "Incineroar", "Basculegion-M", "Dragonite", "Kingambit", "Floette"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Sludge Bomb", "Shadow Ball", "Disable", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Multiscale", item: "Dragon Fang", moves: ["Dragon Claw", "Low Kick", "Extreme Speed", "Tailwind"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] }
  ] },
  { id: "ct-71", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 10, player: "Carlettoft10", wins: 3, losses: 3, pokemonIds: [478, 142, 983, 903, 10009, 445], pokemonNames: ["Froslass", "Aerodactyl", "Kingambit", "Sneasler", "Wash Rotom", "Garchomp"], sets: [
    { ability: "Snow Warning", item: "Froslassite", moves: ["Shadow Ball", "Blizzard", "Protect", "Aurora Veil"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Protect", "Dual Wingbeat", "Tailwind"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Low Kick", "Sucker Punch", "Kowtow Cleave", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Hydro Pump", "Thunderbolt", "Will-O-Wisp", "Protect"] },
    { ability: "Rough Skin", item: "Focus Sash", moves: ["Dragon Claw", "Earthquake", "Poison Jab", "Rock Tomb"] }
  ] },
  { id: "ct-72", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 11, player: "hugovgc87", wins: 3, losses: 3, pokemonIds: [282, 925, 279, 1018, 902, 115], pokemonNames: ["Gardevoir", "Maushold", "Pelipper", "Archaludon", "Basculegion-M", "Kangaskhan"], sets: [
    { ability: "Trace", item: "Gardevoirite", moves: ["Hyper Voice", "Psyshock", "Vacuum Wave", "Protect"] },
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Follow Me", "Super Fang", "Rain Dance", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Hurricane", "Tailwind", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Fake Out", "Double-Edge", "Crunch", "Drain Punch"] }
  ] },
  { id: "ct-73", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 12, player: "Krispy86", wins: 2, losses: 3, pokemonIds: [970, 1013, 925, 655, 670, 727], pokemonNames: ["Glimmora", "Sinistcha", "Maushold", "Delphox", "Floette", "Incineroar"], sets: [
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Earth Power", "Power Gem", "Spiky Shield", "Sludge Bomb"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Thunder Wave", "Feint", "Follow Me", "Protect"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Nasty Plot", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] }
  ] },
  { id: "ct-74", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 13, player: "Fireboule", wins: 2, losses: 0, pokemonIds: [902, 142, 983, 445, 700, 6], pokemonNames: ["Basculegion-M", "Aerodactyl", "Kingambit", "Garchomp", "Sylveon", "Charizard"], sets: [
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Tomb", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Detect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] }
  ] },
  { id: "ct-75", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 14, player: "PerryElOrnitorrinco", wins: 2, losses: 2, pokemonIds: [208, 248, 663, 10009, 1013, 903], pokemonNames: ["Steelix", "Tyranitar", "Talonflame", "Wash Rotom", "Sinistcha", "Sneasler"], sets: [
    { ability: "Sturdy", item: "Steelixite", moves: ["Wide Guard", "High Horsepower", "Heavy Slam", "Protect"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Protect", "Dragon Dance", "Knock Off", "Rock Slide"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Protect", "Swords Dance", "Flare Blitz", "Brave Bird"] },
    { ability: "Levitate", item: "Leftovers", moves: ["Will-O-Wisp", "Light Screen", "Thunderbolt", "Hydro Pump"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Rage Powder", "Trick Room", "Protect", "Matcha Gotcha"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] }
  ] },
  { id: "ct-76", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 15, player: "Morga00", wins: 2, losses: 1, pokemonIds: [6, 142, 700, 902, 445, 903], pokemonNames: ["Charizard", "Aerodactyl", "Sylveon", "Basculegion-M", "Garchomp", "Sneasler"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Dual Wingbeat", "Rock Blast", "Tailwind", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Beam", "Hyper Voice", "Quick Attack", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Rock Tomb", "Poison Jab", "Earthquake", "Dragon Claw"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Gunk Shot", "Close Combat", "Fake Out", "Protect"] }
  ] },
  { id: "ct-77", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 16, player: "guccishinigami", wins: 2, losses: 3, pokemonIds: [94, 784, 727, 1013, 10103, 900], pokemonNames: ["Gengar", "Kommo-o", "Incineroar", "Sinistcha", "Alolan Ninetales", "Kleavor"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Protect", "Shadow Ball", "Sludge Bomb", "Perish Song"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Protect", "Clangorous Soul", "Clanging Scales", "Aura Sphere"] },
    { ability: "Intimidate", item: "Shuca Berry", moves: ["Fake Out", "Protect", "Parting Shot", "Flare Blitz"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Protect", "Matcha Gotcha", "Rage Powder", "Life Dew"] },
    { ability: "Snow Warning", item: "Focus Sash", moves: ["Protect", "Encore", "Freeze-Dry", "Blizzard"] },
    { ability: "Sharpness", item: "Choice Scarf", moves: ["U-turn", "Stone Axe", "Close Combat", "Rock Slide"] }
  ] },
  { id: "ct-78", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 17, player: "MrKiranVGC", wins: 2, losses: 3, pokemonIds: [547, 970, 6, 445, 902, 983], pokemonNames: ["Whimsicott", "Glimmora", "Charizard", "Garchomp", "Basculegion-M", "Kingambit"], sets: [
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Earth Power", "Sludge Bomb", "Spiky Shield"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] }
  ] },
  { id: "ct-79", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 18, player: "Zio_Gelato", wins: 2, losses: 2, pokemonIds: [130, 903, 983, 727, 670, 1013], pokemonNames: ["Gyarados", "Sneasler", "Kingambit", "Incineroar", "Floette", "Sinistcha"], sets: [
    { ability: "Intimidate", item: "Gyaradosite", moves: ["Waterfall", "Ice Fang", "Dragon Dance", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Fake Out", "Coaching", "Taunt"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Protect", "Sucker Punch", "Iron Head", "Kowtow Cleave"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Parting Shot", "Fake Out", "Flare Blitz", "Taunt"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Dazzling Gleam", "Draining Kiss", "Calm Mind"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Protect"] }
  ] },
  { id: "ct-80", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 19, player: "JOAO", wins: 2, losses: 0, pokemonIds: [655, 445, 666, 983, 10103, 154], pokemonNames: ["Delphox", "Garchomp", "Vivillon", "Kingambit", "Alolan Ninetales", "Meganium"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Protect", "Substitute", "Heat Wave", "Psychic"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Protect", "Dragon Claw", "Earthquake", "Rock Slide"] },
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Protect", "Rage Powder", "Sleep Powder", "Hurricane"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Protect", "Kowtow Cleave", "Iron Head", "Sucker Punch"] },
    { ability: "Snow Warning", item: "Choice Scarf", moves: ["Blizzard", "Icy Wind", "Freeze-Dry", "Moonblast"] },
    { ability: "Overgrow", item: "Meganiumite", moves: ["Protect", "Solar Beam", "Weather Ball", "Dazzling Gleam"] }
  ] },
  { id: "ct-81", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 20, player: "Cherrysquid", wins: 2, losses: 3, pokemonIds: [6, 445, 983, 902, 700, 142], pokemonNames: ["Charizard", "Garchomp", "Kingambit", "Basculegion-M", "Sylveon", "Aerodactyl"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Tomb", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Last Respects", "Liquidation", "Aqua Jet", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Detect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] }
  ] },
  { id: "ct-82", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 21, player: "KST VGC ", wins: 1, losses: 3, pokemonIds: [670, 1013, 727, 983, 903, 445], pokemonNames: ["Floette", "Sinistcha", "Incineroar", "Kingambit", "Sneasler", "Garchomp"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Draining Kiss", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Intimidate", item: "Shuca Berry", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Coaching", "Fake Out", "Dire Claw", "Close Combat"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Dragon Claw", "Earthquake", "Stomping Tantrum", "Protect"] }
  ] },
  { id: "ct-83", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 22, player: "[DNR] Isaac Moreira", wins: 1, losses: 1, pokemonIds: [655, 445, 666, 983, 10103, 154], pokemonNames: ["Delphox", "Garchomp", "Vivillon", "Kingambit", "Alolan Ninetales", "Meganium"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Protect", "Substitute", "Heat Wave", "Psychic"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Protect", "Dragon Claw", "Earthquake", "Rock Slide"] },
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Protect", "Rage Powder", "Sleep Powder", "Hurricane"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Protect", "Kowtow Cleave", "Iron Head", "Sucker Punch"] },
    { ability: "Snow Warning", item: "Choice Scarf", moves: ["Blizzard", "Icy Wind", "Freeze-Dry", "Moonblast"] },
    { ability: "Overgrow", item: "Meganiumite", moves: ["Protect", "Solar Beam", "Weather Ball", "Dazzling Gleam"] }
  ] },
  { id: "ct-84", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 23, player: "Goalie3001", wins: 1, losses: 2, pokemonIds: [670, 445, 142, 10009, 681, 727], pokemonNames: ["Floette", "Garchomp", "Aerodactyl", "Wash Rotom", "Aegislash", "Incineroar"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Moonblast", "Dazzling Gleam", "Light of Ruin"] },
    { ability: "Rough Skin", item: "Haban Berry", moves: ["Protect", "Earthquake", "Rock Slide", "Dragon Claw"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Protect", "Rock Slide", "Dual Wingbeat", "Tailwind"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Will-O-Wisp", "Hydro Pump", "Thunderbolt", "Electroweb"] },
    { ability: "Stance Change", item: "Spell Tag", moves: ["King's Shield", "Poltergeist", "Sacred Sword", "Shadow Sneak"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Parting Shot", "Fake Out", "Flare Blitz", "Helping Hand"] }
  ] },
  { id: "ct-85", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 24, player: "XaoVGC", wins: 1, losses: 3, pokemonIds: [670, 655, 903, 902, 727, 1013], pokemonNames: ["Floette", "Delphox", "Sneasler", "Basculegion-M", "Incineroar", "Sinistcha"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Nasty Plot", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Last Respects", "Aqua Jet", "Liquidation", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Helping Hand", "Parting Shot"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] }
  ] },
  { id: "ct-86", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 25, player: "OrangePurple", wins: 1, losses: 3, pokemonIds: [981, 115, 323, 740, 184, 212], pokemonNames: ["Farigiraf", "Kangaskhan", "Camerupt", "Crabominable", "Azumarill", "Scizor"], sets: [
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Helping Hand", "Protect", "Hyper Voice", "Trick Room"] },
    { ability: "Scrappy", item: "Silk Scarf", moves: ["Fake Out", "Last Resort"] },
    { ability: "Solid Rock", item: "Cameruptite", moves: ["Eruption", "Protect", "Earth Power", "Ancient Power"] },
    { ability: "Hyper Cutter", item: "Crabominite", moves: ["Mach Punch", "Drain Punch", "Ice Punch", "Thunder Punch"] },
    { ability: "Huge Power", item: "Mystic Water", moves: ["Aqua Jet", "Liquidation", "Ice Spinner", "Protect"] },
    { ability: "Technician", item: "Focus Sash", moves: ["Bullet Punch", "Bug Bite", "Protect", "Swords Dance"] }
  ] },
  { id: "ct-87", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 26, player: "Mattytaxes", wins: 1, losses: 3, pokemonIds: [6, 902, 142, 727, 981, 700], pokemonNames: ["Charizard", "Basculegion-M", "Aerodactyl", "Incineroar", "Farigiraf", "Sylveon"], sets: [
    { ability: "Drought", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Darkest Lariat", "Fake Out", "Flare Blitz", "Parting Shot"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Hyper Voice", "Psychic", "Trick Room", "Helping Hand"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Detect"] }
  ] },
  { id: "ct-88", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 27, player: "UsagiFoo", wins: 1, losses: 2, pokemonIds: [149, 547, 6, 445, 983, 902], pokemonNames: ["Dragonite", "Whimsicott", "Charizard", "Garchomp", "Kingambit", "Basculegion-M"], sets: [
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Thunderbolt", "Heat Wave", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Protect", "Encore", "Moonblast", "Tailwind"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Poison Jab", "Earthquake", "Rock Slide", "Dragon Claw"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Iron Head", "Kowtow Cleave", "Sucker Punch", "Low Kick"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Protect", "Wave Crash", "Aqua Jet", "Last Respects"] }
  ] },
  { id: "ct-89", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 28, player: "Krugzzz", wins: 0, losses: 1, pokemonIds: [94, 10009, 445, 10103, 727, 681], pokemonNames: ["Gengar", "Wash Rotom", "Garchomp", "Alolan Ninetales", "Incineroar", "Aegislash"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Shadow Ball", "Sludge Bomb", "Disable", "Protect"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Hydro Pump", "Volt Switch", "Will-O-Wisp", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Stomping Tantrum", "Rock Slide", "Rock Tomb"] },
    { ability: "Snow Warning", item: "Focus Sash", moves: ["Blizzard", "Freeze-Dry", "Encore", "Protect"] },
    { ability: "Intimidate", item: "Shuca Berry", moves: ["Fake Out", "Parting Shot", "Throat Chop", "Flare Blitz"] },
    { ability: "Stance Change", item: "Colbur Berry", moves: ["Poltergeist", "Shadow Sneak", "Sacred Sword", "King's Shield"] }
  ] },
  { id: "ct-90", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 29, player: "Katiclus", wins: 0, losses: 2, pokemonIds: [130, 903, 445, 663, 10012, 681], pokemonNames: ["Gyarados", "Sneasler", "Garchomp", "Talonflame", "Mow Rotom", "Aegislash"], sets: [
    { ability: "Intimidate", item: "Gyaradosite", moves: ["Waterfall", "Crunch", "Dragon Dance", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Dragon Claw", "Stomping Tantrum", "Earthquake", "Rock Slide"] },
    { ability: "Gale Wings", item: "No Item", moves: ["Flare Blitz", "Acrobatics", "Tailwind", "Protect"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Thunderbolt", "Leaf Storm", "Volt Switch", "Protect"] },
    { ability: "Stance Change", item: "Spell Tag", moves: ["Shadow Ball", "Flash Cannon", "Wide Guard", "King's Shield"] }
  ] },
  { id: "ct-91", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 30, player: "Kira_2301", wins: 0, losses: 2, pokemonIds: [282, 727, 128, 635, 3, 981], pokemonNames: ["Gardevoir", "Incineroar", "Tauros", "Hydreigon", "Venusaur", "Farigiraf"], sets: [
    { ability: "Trace", item: "Gardevoirite", moves: ["Psyshock", "Protect", "Hyper Voice", "Calm Mind"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Intimidate", item: "Mystic Water", moves: ["Protect", "Aqua Jet", "Close Combat", "Wave Crash"] },
    { ability: "Levitate", item: "Chople Berry", moves: ["Dark Pulse", "Protect", "Draco Meteor", "Earth Power"] },
    { ability: "Overgrow", item: "Focus Sash", moves: ["Giga Drain", "Sludge Bomb", "Protect", "Sleep Powder"] },
    { ability: "Armor Tail", item: "Leftovers", moves: ["Psychic", "Protect", "Trick Room", "Helping Hand"] }
  ] },
  { id: "ct-92", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 31, player: "blackkobra", wins: 0, losses: 1, pokemonIds: [6, 547, 983, 902, 445, 970], pokemonNames: ["Charizard", "Whimsicott", "Kingambit", "Basculegion-M", "Garchomp", "Glimmora"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] }
  ] },
  { id: "ct-93", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 32, player: "jade_da_croc", wins: 0, losses: 3, pokemonIds: [1018, 149, 903, 279, 902, 952], pokemonNames: ["Archaludon", "Dragonite", "Sneasler", "Pelipper", "Basculegion-M", "Scovillain"], sets: [
    { ability: "Stamina", item: "Leftovers", moves: ["Protect", "Electro Shot", "Dragon Pulse", "Flash Cannon"] },
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Weather Ball", "Protect", "Hurricane", "Dragon Pulse"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Dire Claw", "Close Combat", "Fake Out"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Weather Ball", "Wide Guard", "Hurricane", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Wave Crash", "Flip Turn", "Aqua Jet"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Leech Seed", "Rage Powder", "Protect", "Giga Drain"] }
  ] },
  { id: "ct-94", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 33, player: "ItsJust_nob", wins: 0, losses: 5, pokemonIds: [6, 3, 10009, 983, 149, 547], pokemonNames: ["Charizard", "Venusaur", "Wash Rotom", "Kingambit", "Dragonite", "Whimsicott"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Solar Beam", "Heat Wave", "Protect", "Overheat"] },
    { ability: "Chlorophyll", item: "Focus Sash", moves: ["Sleep Powder", "Weather Ball", "Solar Beam", "Sludge Bomb"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Trick", "Volt Switch", "Hydro Pump", "Thunderbolt"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Multiscale", item: "Lum Berry", moves: ["Tailwind", "Extreme Speed", "Draco Meteor", "Dragon Claw"] },
    { ability: "Prankster", item: "Quick Claw", moves: ["Tailwind", "Sunny Day", "Encore", "Moonblast"] }
  ] },
  { id: "ct-95", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 34, player: "Mat_Trick", wins: 0, losses: 2, pokemonIds: [149, 279, 727, 1013, 212, 964], pokemonNames: ["Dragonite", "Pelipper", "Incineroar", "Sinistcha", "Scizor", "Palafin"], sets: [
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Dragon Pulse", "Hurricane", "Tailwind", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Weather Ball", "Hurricane", "Wide Guard", "Tailwind"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Fake Out", "Parting Shot", "Throat Chop"] },
    { ability: "Hospitality", item: "Coba Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Life Dew"] },
    { ability: "Swarm", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "Swords Dance", "Protect"] },
    { ability: "Zero to Hero", item: "Mystic Water", moves: ["Wave Crash", "Jet Punch", "Close Combat", "Protect"] }
  ] },
  { id: "ct-96", tournament: "VGC Trainer School; champions M/A #6", players: 35, placement: 35, player: "JBClodsire", wins: 0, losses: 2, pokemonIds: [700, 142, 887, 959, 6, 902], pokemonNames: ["Sylveon", "Aerodactyl", "Dragapult", "Tinkaton", "Charizard", "Basculegion-M"], sets: [
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Beam", "Hyper Voice", "Protect", "Round"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Protect", "Tailwind", "Round"] },
    { ability: "Infiltrator", item: "Focus Sash", moves: ["Round", "Draco Meteor", "Shadow Ball", "Protect"] },
    { ability: "Mold Breaker", item: "Sitrus Berry", moves: ["Fake Out", "Play Rough", "Protect", "Gigaton Hammer"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Weather Ball", "Heat Wave", "Air Slash", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Last Respects", "Protect", "Wave Crash", "Aqua Jet"] }
  ] },
  { id: "ct-97", tournament: "VGCA Battle Hall: Academy Ace Edition #2", players: 18, placement: 1, player: "katabo", wins: 8, losses: 0, pokemonIds: [670, 663, 445, 925, 983, 902], pokemonNames: ["Floette", "Talonflame", "Garchomp", "Maushold", "Kingambit", "Basculegion-M"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Air Slash", "Overheat", "Tailwind", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Super Fang", "Follow Me", "Encore", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-98", tournament: "VGCA Battle Hall: Academy Ace Edition #2", players: 18, placement: 2, player: "maxdeesevgc", wins: 5, losses: 3, pokemonIds: [902, 279, 1018, 663, 9, 25], pokemonNames: ["Basculegion-M", "Pelipper", "Archaludon", "Talonflame", "Blastoise", "Pikachu"], sets: [
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Weather Ball", "Tailwind", "Wide Guard"] },
    { ability: "Stamina", item: "Sitrus Berry", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Dual Wingbeat", "Tailwind", "Rain Dance", "Quick Guard"] },
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Water Spout", "Aura Sphere", "Dark Pulse", "Protect"] },
    { ability: "Lightning Rod", item: "Light Ball", moves: ["Fake Out", "Thunder", "Alluring Voice", "Feint"] }
  ] },
  { id: "ct-99", tournament: "VGCA Battle Hall: Academy Ace Edition #2", players: 18, placement: 3, player: "TimidTailwind", wins: 5, losses: 2, pokemonIds: [666, 1013, 350, 727, 937, 670], pokemonNames: ["Vivillon", "Sinistcha", "Milotic", "Incineroar", "Ceruledge", "Floette"], sets: [
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Hurricane", "Sleep Powder", "Rage Powder", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Muddy Water", "Coil", "Hypnosis", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Flash Fire", item: "Colbur Berry", moves: ["Bitter Blade", "Shadow Sneak", "Bulk Up", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Draining Kiss", "Calm Mind", "Protect"] }
  ] },
  { id: "ct-100", tournament: "VGCA Battle Hall: Academy Ace Edition #2", players: 18, placement: 4, player: "ethnol1816", wins: 4, losses: 3, pokemonIds: [142, 655, 727, 903, 983, 10103], pokemonNames: ["Aerodactyl", "Delphox", "Incineroar", "Sneasler", "Kingambit", "Alolan Ninetales"], sets: [
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Levitate", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Calm Mind", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Parting Shot", "Taunt", "Fake Out"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "U-turn", "Fake Out"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Low Kick", "Protect"] },
    { ability: "Snow Warning", item: "Never-Melt Ice", moves: ["Blizzard", "Aurora Veil", "Encore", "Protect"] }
  ] },
  { id: "ct-101", tournament: "VGCA Battle Hall: Academy Ace Edition #2", players: 18, placement: 5, player: "Cinndragon", wins: 4, losses: 2, pokemonIds: [547, 745, 445, 461, 448, 700], pokemonNames: ["Whimsicott", "Lycanroc", "Garchomp", "Weavile", "Lucario", "Sylveon"], sets: [
    { ability: "Prankster", item: "Sitrus Berry", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Tough Claws", item: "Choice Scarf", moves: ["Rock Slide", "Rock Tomb", "Drill Run", "Throat Chop"] },
    { ability: "Rough Skin", item: "Focus Sash", moves: ["Rock Slide", "Dragon Claw", "Stomping Tantrum", "Protect"] },
    { ability: "Pickpocket", item: "Never-Melt Ice", moves: ["Triple Axel", "Knock Off", "Fake Out", "Protect"] },
    { ability: "Inner Focus", item: "Lucarionite", moves: ["Aura Sphere", "Flash Cannon", "Meteor Mash", "Detect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Protect"] }
  ] },
  { id: "ct-102", tournament: "VGCA Battle Hall: Academy Ace Edition #2", players: 18, placement: 6, player: "zL", wins: 3, losses: 3, pokemonIds: [6, 149, 902, 445, 983, 547], pokemonNames: ["Charizard", "Dragonite", "Basculegion-M", "Garchomp", "Kingambit", "Whimsicott"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Thunderbolt", "Heat Wave", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Encore", "Tailwind", "Protect"] }
  ] },
  { id: "ct-103", tournament: "VGCA Battle Hall: Academy Ace Edition #2", players: 18, placement: 7, player: "Homeboy420", wins: 3, losses: 3, pokemonIds: [903, 823, 248, 350, 900, 229], pokemonNames: ["Sneasler", "Corviknight", "Tyranitar", "Milotic", "Kleavor", "Houndoom"], sets: [
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Protect", "Fake Out"] },
    { ability: "Mirror Armor", item: "Sitrus Berry", moves: ["Brave Bird", "Body Press", "Roost", "Tailwind"], teraType: "Flying" },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Assurance", "Rock Slide", "Low Kick", "Protect"] },
    { ability: "Competitive", item: "Wacan Berry", moves: ["Icy Wind", "Scald", "Protect", "Draining Kiss"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Protect", "Stone Axe", "Close Combat", "Night Slash"] },
    { ability: "Solar Power", item: "Houndoominite", moves: ["Protect", "Scorching Sands", "Dark Pulse", "Flamethrower"] }
  ] },
  { id: "ct-104", tournament: "VGCA Battle Hall: Academy Ace Edition #2", players: 18, placement: 8, player: "BHelixB", wins: 3, losses: 3, pokemonIds: [6, 547, 461, 445, 970, 902], pokemonNames: ["Charizard", "Whimsicott", "Weavile", "Garchomp", "Glimmora", "Basculegion-M"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Solar Beam", "Weather Ball"] },
    { ability: "Prankster", item: "Coba Berry", moves: ["Protect", "Encore", "Tailwind", "Moonblast"] },
    { ability: "Pickpocket", item: "Focus Sash", moves: ["Fake Out", "Knock Off", "Icicle Crash", "Low Kick"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Poison Jab", "Dragon Claw", "Earthquake", "Rock Slide"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Spiky Shield", "Power Gem", "Sludge Bomb", "Earth Power"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Wave Crash", "Flip Turn", "Protect", "Last Respects"] }
  ] },
  { id: "ct-105", tournament: "VGCA Battle Hall: Academy Ace Edition #2", players: 18, placement: 9, player: "Steady96", wins: 2, losses: 3, pokemonIds: [445, 700, 635, 227, 6, 903], pokemonNames: ["Garchomp", "Sylveon", "Hydreigon", "Skarmory", "Charizard", "Sneasler"], sets: [
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Quick Attack", "Moonblast", "Detect"] },
    { ability: "Levitate", item: "Focus Sash", moves: ["Dark Pulse", "Tailwind", "Draco Meteor", "Earth Power"] },
    { ability: "Sturdy", item: "Skarmorite", moves: ["Brave Bird", "Iron Head", "Rock Slide", "Protect"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Gunk Shot", "Coaching", "Fake Out"] }
  ] },
  { id: "ct-106", tournament: "VGCA Battle Hall: Academy Ace Edition #2", players: 18, placement: 10, player: "Erik B", wins: 2, losses: 3, pokemonIds: [94, 10103, 10009, 149, 681, 727], pokemonNames: ["Gengar", "Alolan Ninetales", "Wash Rotom", "Dragonite", "Aegislash", "Incineroar"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Sludge Bomb", "Shadow Ball", "Disable", "Protect"] },
    { ability: "Snow Warning", item: "Focus Sash", moves: ["Blizzard", "Freeze-Dry", "Encore", "Protect"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Hydro Pump", "Volt Switch", "Will-O-Wisp", "Protect"] },
    { ability: "Inner Focus", item: "Dragon Fang", moves: ["Dragon Claw", "Low Kick", "Extreme Speed", "Protect"] },
    { ability: "Stance Change", item: "Colbur Berry", moves: ["Poltergeist", "Sacred Sword", "Shadow Sneak", "King's Shield"] },
    { ability: "Intimidate", item: "Shuca Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] }
  ] },
  { id: "ct-107", tournament: "VGCA Battle Hall: Academy Ace Edition #2", players: 18, placement: 11, player: "Royal_Rebel_Prince21", wins: 1, losses: 4, pokemonIds: [715, 635, 903, 395, 18, 94], pokemonNames: ["Noivern", "Hydreigon", "Sneasler", "Empoleon", "Pidgeot", "Gengar"], sets: [
    { ability: "Telepathy", item: "Focus Sash", moves: ["Draco Meteor", "Hurricane", "Taunt", "Tailwind"] },
    { ability: "Levitate", item: "Scope Lens", moves: ["Dark Pulse", "Draco Meteor", "Protect", "Focus Energy"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Surf", "Flash Cannon", "Ice Beam", "Protect"] },
    { ability: "Keen Eye", item: "Pidgeotite", moves: ["Hurricane", "Heat Wave", "Sunny Day", "Protect"] },
    { ability: "Cursed Body", item: "Gengarite", moves: ["Sludge Bomb", "Shadow Ball", "Psychic", "Protect"] }
  ] },
  { id: "ct-108", tournament: "VGCA Battle Hall: Academy Ace Edition #2", players: 18, placement: 12, player: "hamixi0", wins: 1, losses: 4, pokemonIds: [6, 983, 142, 700, 445, 10009], pokemonNames: ["Charizard", "Kingambit", "Aerodactyl", "Sylveon", "Garchomp", "Wash Rotom"], sets: [
    { ability: "Drought", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Solar Beam", "Weather Ball"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Protect", "Iron Head"] },
    { ability: "Tough Claws", item: "Aerodactylite", moves: ["Rock Slide", "Wide Guard", "Tailwind", "Dual Wingbeat"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Psychic", "Hyper Beam", "Detect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Protect", "Rock Slide"] },
    { ability: "Levitate", item: "Leftovers", moves: ["Hydro Pump", "Thunderbolt", "Will-O-Wisp", "Protect"] }
  ] },
  { id: "ct-109", tournament: "VGCA Battle Hall: Academy Ace Edition #2", players: 18, placement: 13, player: "oppePoiZ", wins: 1, losses: 4, pokemonIds: [970, 10103, 663, 445, 695, 981], pokemonNames: ["Glimmora", "Alolan Ninetales", "Talonflame", "Garchomp", "Heliolisk", "Farigiraf"], sets: [
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Power Gem", "Sludge Bomb", "Spiky Shield", "Earth Power"] },
    { ability: "Snow Warning", item: "Never-Melt Ice", moves: ["Blizzard", "Freeze-Dry", "Encore", "Protect"] },
    { ability: "Gale Wings", item: "Nothing", moves: ["Flare Blitz", "Tailwind", "Acrobatics", "Protect"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Dragon Claw", "Earthquake", "Swords Dance", "Protect"] },
    { ability: "Dry Skin", item: "Choice Scarf", moves: ["Thunderbolt", "Electroweb", "Hyper Voice", "Shed Tail"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Hyper Voice", "Psychic", "Trick Room", "Imprison"] }
  ] },
  { id: "ct-110", tournament: "King's Gambit #4 | Reg M-A", players: 21, placement: 1, player: "LigmaSigma67", wins: 6, losses: 2, pokemonIds: [279, 1018, 925, 282, 902, 3], pokemonNames: ["Pelipper", "Archaludon", "Maushold", "Gardevoir", "Basculegion-M", "Venusaur"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Hurricane", "Wide Guard", "Tailwind"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Super Fang", "Follow Me", "Rain Dance", "Protect"] },
    { ability: "Trace", item: "Gardevoirite", moves: ["Hyper Voice", "Trick Room", "Protect", "Psyshock"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Flip Turn", "Wave Crash", "Last Respects", "Aqua Jet"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Giga Drain", "Sludge Bomb", "Earth Power", "Protect"] }
  ] },
  { id: "ct-111", tournament: "King's Gambit #4 | Reg M-A", players: 21, placement: 2, player: "Dell", wins: 5, losses: 3, pokemonIds: [395, 149, 279, 1018, 454, 981], pokemonNames: ["Empoleon", "Dragonite", "Pelipper", "Archaludon", "Toxicroak", "Farigiraf"], sets: [
    { ability: "Competitive", item: "Chople Berry", moves: ["Surf", "Flash Cannon", "Vacuum Wave", "Protect"] },
    { ability: "Multiscale", item: "Dragonitite", moves: ["Hurricane", "Dragon Pulse", "Flamethrower", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Muddy Water", "Hurricane", "Wide Guard", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Flash Cannon", "Dragon Pulse", "Protect"] },
    { ability: "Dry Skin", item: "Focus Sash", moves: ["Fake Out", "Drain Punch", "Poison Jab", "Protect"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Trick Room", "Helping Hand", "Psychic", "Protect"] }
  ] },
  { id: "ct-112", tournament: "King's Gambit #4 | Reg M-A", players: 21, placement: 3, player: "Harry Koekenpan", wins: 4, losses: 3, pokemonIds: [727, 1013, 903, 445, 130, 700], pokemonNames: ["Incineroar", "Sinistcha", "Sneasler", "Garchomp", "Gyarados", "Sylveon"], sets: [
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Protect"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Fake Out", "Close Combat", "Dire Claw", "Coaching"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Earthquake", "Rock Slide", "Poison Jab", "Dragon Claw"] },
    { ability: "Intimidate", item: "Gyaradosite", moves: ["Waterfall", "Lash Out", "Dragon Dance", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Detect", "Hyper Beam", "Hyper Voice", "Calm Mind"] }
  ] },
  { id: "ct-113", tournament: "King's Gambit #4 | Reg M-A", players: 21, placement: 4, player: "Pandapazzo", wins: 4, losses: 3, pokemonIds: [279, 1018, 902, 1013, 212, 727], pokemonNames: ["Pelipper", "Archaludon", "Basculegion-M", "Sinistcha", "Scizor", "Incineroar"], sets: [
    { ability: "Drizzle", item: "Focus Sash", moves: ["Tailwind", "Wide Guard", "Hurricane", "Weather Ball"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Dragon Pulse", "Electro Shot", "Flash Cannon", "Protect"] },
    { ability: "Swift Swim", item: "Mystic Water", moves: ["Aqua Jet", "Wave Crash", "Last Respects", "Protect"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Imprison"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "Protect", "Swords Dance"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Throat Chop", "Flare Blitz", "Fake Out", "Parting Shot"] }
  ] },
  { id: "ct-114", tournament: "King's Gambit #4 | Reg M-A", players: 21, placement: 5, player: "Goldeboy77", wins: 4, losses: 2, pokemonIds: [983, 6, 547, 445, 970, 902], pokemonNames: ["Kingambit", "Charizard", "Whimsicott", "Garchomp", "Glimmora", "Basculegion-M"], sets: [
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Stomping Tantrum", "Rock Slide", "Poison Jab"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] }
  ] },
  { id: "ct-115", tournament: "King's Gambit #4 | Reg M-A", players: 21, placement: 6, player: "gaggamer06", wins: 4, losses: 2, pokemonIds: [727, 227, 279, 1018, 902, 149], pokemonNames: ["Incineroar", "Skarmory", "Pelipper", "Archaludon", "Basculegion-M", "Dragonite"], sets: [
    { ability: "Intimidate", item: "Chople Berry", moves: ["Flare Blitz", "Fake Out", "Parting Shot", "Will-O-Wisp"] },
    { ability: "Weak Armor", item: "Skarmorite", moves: ["Brave Bird", "Iron Head", "Rock Tomb", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Wide Guard", "Tailwind", "Weather Ball", "Hurricane"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Flash Cannon", "Aura Sphere", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Hurricane", "Dragon Pulse", "Tailwind", "Protect"] }
  ] },
  { id: "ct-116", tournament: "King's Gambit #4 | Reg M-A", players: 21, placement: 7, player: "KingNoahC17", wins: 4, losses: 2, pokemonIds: [609, 10103, 10009, 983, 445, 903], pokemonNames: ["Chandelure", "Alolan Ninetales", "Wash Rotom", "Kingambit", "Garchomp", "Sneasler"], sets: [
    { ability: "Flash Fire", item: "Chandelurite", moves: ["Heat Wave", "Shadow Ball", "Substitute", "Protect"] },
    { ability: "Snow Warning", item: "Focus Sash", moves: ["Blizzard", "Freeze-Dry", "Aurora Veil", "Protect"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Hydro Pump", "Volt Switch", "Electroweb", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Rough Skin", item: "Dragon Fang", moves: ["Scale Shot", "Earthquake", "Stomping Tantrum", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] }
  ] },
  { id: "ct-117", tournament: "King's Gambit #4 | Reg M-A", players: 21, placement: 8, player: "Kyooby", wins: 3, losses: 2, pokemonIds: [94, 727, 902, 149, 983, 670], pokemonNames: ["Gengar", "Incineroar", "Basculegion-M", "Dragonite", "Kingambit", "Floette"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Sludge Bomb", "Shadow Ball", "Disable", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Multiscale", item: "Dragon Fang", moves: ["Dragon Claw", "Low Kick", "Extreme Speed", "Tailwind"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] }
  ] },
  { id: "ct-118", tournament: "King's Gambit #4 | Reg M-A", players: 21, placement: 9, player: "nanamixd", wins: 2, losses: 1, pokemonIds: [94, 10009, 10103, 727, 681, 149], pokemonNames: ["Gengar", "Wash Rotom", "Alolan Ninetales", "Incineroar", "Aegislash", "Dragonite"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Sludge Bomb", "Shadow Ball", "Disable", "Protect"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Hydro Pump", "Volt Switch", "Will-O-Wisp", "Protect"] },
    { ability: "Snow Warning", item: "Focus Sash", moves: ["Blizzard", "Freeze-Dry", "Encore", "Protect"] },
    { ability: "Intimidate", item: "Shuca Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Stance Change", item: "Colbur Berry", moves: ["Poltergeist", "Shadow Sneak", "Sacred Sword", "King's Shield"] },
    { ability: "Multiscale", item: "Dragon Fang", moves: ["Dragon Claw", "Low Kick", "Extreme Speed", "Protect"] }
  ] },
  { id: "ct-119", tournament: "King's Gambit #4 | Reg M-A", players: 21, placement: 10, player: "Titouzerr", wins: 2, losses: 3, pokemonIds: [547, 983, 308, 981, 902, 149], pokemonNames: ["Whimsicott", "Kingambit", "Medicham", "Farigiraf", "Basculegion-M", "Dragonite"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Encore", "Taunt", "Tailwind"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Protect", "Low Kick"] },
    { ability: "Pure Power", item: "Medichamite", moves: ["Close Combat", "Fake Out", "Rock Slide", "Poison Jab"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Imprison", "Hyper Voice", "Psychic", "Trick Room"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Multiscale", item: "Lum Berry", moves: ["Tailwind", "Dragon Claw", "Extreme Speed", "Low Kick"] }
  ] },
  { id: "ct-120", tournament: "King's Gambit #4 | Reg M-A", players: 21, placement: 11, player: "blackkobra", wins: 2, losses: 1, pokemonIds: [6, 547, 983, 902, 445, 970], pokemonNames: ["Charizard", "Whimsicott", "Kingambit", "Basculegion-M", "Garchomp", "Glimmora"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] }
  ] },
  { id: "ct-121", tournament: "King's Gambit #4 | Reg M-A", players: 21, placement: 12, player: "stormy3247", wins: 2, losses: 3, pokemonIds: [6, 700, 887, 445, 983, 727], pokemonNames: ["Charizard", "Sylveon", "Dragapult", "Garchomp", "Kingambit", "Incineroar"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Air Slash", "Solar Beam", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Moonblast", "Dazzling Gleam", "Detect"] },
    { ability: "Infiltrator", item: "Focus Sash", moves: ["Thunder Wave", "Phantom Force", "Will-O-Wisp", "Reflect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Rock Slide", "Stomping Tantrum", "Dragon Claw"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Iron Head", "Protect", "Sucker Punch"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Taunt", "Flare Blitz", "Fake Out", "Parting Shot"] }
  ] },
  { id: "ct-122", tournament: "King's Gambit #4 | Reg M-A", players: 21, placement: 13, player: "Nema95", wins: 2, losses: 3, pokemonIds: [5157, 903, 547, 10009, 727, 445], pokemonNames: ["Hisuian Typhlosion", "Sneasler", "Whimsicott", "Wash Rotom", "Incineroar", "Garchomp"], sets: [
    { ability: "Frisk", item: "Charcoal", moves: ["Infernal Parade", "Eruption", "Protect", "Burn Up"] },
    { ability: "Unburden", item: "Mental Herb", moves: ["Close Combat", "Fake Out", "Coaching", "Dire Claw"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Sunny Day", "Protect", "Tailwind"] },
    { ability: "Levitate", item: "Leftovers", moves: ["Hydro Pump", "Will-O-Wisp", "Protect", "Electroweb"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Parting Shot", "Darkest Lariat"] },
    { ability: "Rough Skin", item: "Garchompite", moves: ["Earthquake", "Breaking Swipe", "Protect", "Rock Slide"] }
  ] },
  { id: "ct-123", tournament: "King's Gambit #4 | Reg M-A", players: 21, placement: 14, player: "JoMcCloud23", wins: 1, losses: 1, pokemonIds: [282, 3, 902, 727, 445, 547], pokemonNames: ["Gardevoir", "Venusaur", "Basculegion-M", "Incineroar", "Garchomp", "Whimsicott"], sets: [
    { ability: "Trace", item: "Gardevoirite", moves: ["Psyshock", "Hyper Voice", "Trick Room", "Protect"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Giga Drain", "Sludge Bomb", "Earth Power", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Aqua Jet", "Wave Crash", "Last Respects", "Flip Turn"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Stomping Tantrum", "Rock Slide", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Encore", "Tailwind", "Protect"] }
  ] },
  { id: "ct-124", tournament: "King's Gambit #4 | Reg M-A", players: 21, placement: 15, player: "Lcsam07", wins: 1, losses: 2, pokemonIds: [670, 727, 1013, 902, 142, 903], pokemonNames: ["Floette", "Incineroar", "Sinistcha", "Basculegion-M", "Aerodactyl", "Sneasler"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Calm Mind", "Dazzling Gleam", "Draining Kiss"] },
    { ability: "Intimidate", item: "Lum Berry", moves: ["Fake Out", "Parting Shot", "Flare Blitz", "Darkest Lariat"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Protect", "Matcha Gotcha", "Rage Powder", "Trick Room"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Icy Wind"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Protect", "Rock Slide", "Dual Wingbeat", "Tailwind"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Dire Claw", "Close Combat", "Fake Out"] }
  ] },
  { id: "ct-125", tournament: "King's Gambit #4 | Reg M-A", players: 21, placement: 16, player: "Flipper", wins: 1, losses: 3, pokemonIds: [445, 700, 952, 983, 142, 902], pokemonNames: ["Garchomp", "Sylveon", "Scovillain", "Kingambit", "Aerodactyl", "Basculegion-M"], sets: [
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Swords Dance", "Earthquake", "Dragon Claw", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Calm Mind", "Protect", "Detect"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Rage Powder", "Leech Seed", "Overheat", "Protect"] },
    { ability: "Supreme Overlord", item: "Chople Berry", moves: ["Low Kick", "Iron Head", "Sucker Punch", "Kowtow Cleave"] },
    { ability: "Pressure", item: "Aerodactylite", moves: ["Dual Wingbeat", "Wide Guard", "Rock Slide", "Tailwind"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Aqua Jet", "Protect", "Last Respects"] }
  ] },
  { id: "ct-126", tournament: "King's Gambit #4 | Reg M-A", players: 21, placement: 17, player: "emanuele12340", wins: 1, losses: 4, pokemonIds: [902, 445, 983, 700, 142, 6], pokemonNames: ["Basculegion-M", "Garchomp", "Kingambit", "Sylveon", "Aerodactyl", "Charizard"], sets: [
    { ability: "Adaptability", item: "Focus Sash", moves: ["Protect", "Last Respects", "Aqua Jet", "Liquidation"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Rock Tomb", "Earthquake", "Dragon Claw", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Low Kick", "Iron Head"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Detect", "Hyper Beam", "Hyper Voice", "Quick Attack"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Tailwind", "Dual Wingbeat", "Rock Slide", "Wide Guard"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Weather Ball", "Heat Wave", "Solar Beam"] }
  ] },
  { id: "ct-127", tournament: "King's Gambit #4 | Reg M-A", players: 21, placement: 18, player: "KST VGC ", wins: 0, losses: 2, pokemonIds: [6, 903, 727, 1013, 670, 445], pokemonNames: ["Charizard", "Sneasler", "Incineroar", "Sinistcha", "Floette", "Garchomp"], sets: [
    { ability: "Blaze", item: "Charizardite X", moves: ["Flare Blitz", "Dragon Claw", "Protect", "Dragon Dance"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Coaching"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Protect", "Calm Mind"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] }
  ] },
  { id: "ct-128", tournament: "King's Gambit #4 | Reg M-A", players: 21, placement: 19, player: "KurokamiHiro", wins: 0, losses: 1, pokemonIds: [428, 900, 395, 149, 663, 700], pokemonNames: ["Lopunny", "Kleavor", "Empoleon", "Dragonite", "Talonflame", "Sylveon"], sets: [
    { ability: "Cute Charm", item: "Lopunnite", moves: ["Close Combat", "Giga Impact", "Fake Out", "Encore"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Stone Axe", "X-Scissor", "Rock Slide", "Feint"] },
    { ability: "Competitive", item: "Sitrus Berry", moves: ["Protect", "Flash Cannon", "Surf", "Helping Hand"] },
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Protect", "Dragon Pulse", "Air Slash", "Extreme Speed"] },
    { ability: "Gale Wings", item: "No Item", moves: ["Protect", "Acrobatics", "Flare Blitz", "Tailwind"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Protect", "Hyper Voice", "Hyper Beam", "Quick Attack"] }
  ] },
  { id: "ct-129", tournament: "King's Gambit #4 | Reg M-A", players: 21, placement: 20, player: "Pattatar", wins: 0, losses: 2, pokemonIds: [752, 981, 500, 763, 1013, 142], pokemonNames: ["Araquanid", "Farigiraf", "Emboar", "Tsareena", "Sinistcha", "Aerodactyl"], sets: [
    { ability: "Water Bubble", item: "Mystic Water", moves: ["Liquidation", "Wide Guard", "Reflect", "Protect"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Hyper Voice", "Psychic", "Trick Room", "Protect"] },
    { ability: "Blaze", item: "Emboarite", moves: ["Storm Throw", "Flare Blitz", "Sucker Punch", "Protect"] },
    { ability: "Queenly Majesty", item: "Leftovers", moves: ["Trop Kick", "Triple Axel", "Low Kick", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Trick Room", "Life Dew", "Rage Powder"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Dual Wingbeat", "Rock Slide", "Taunt", "Protect"] }
  ] },
  { id: "ct-130", tournament: "King's Gambit #4 | Reg M-A", players: 21, placement: 21, player: "PerryElOrnitorrinco", wins: 0, losses: 1, pokemonIds: [208, 248, 663, 10009, 1013, 903], pokemonNames: ["Steelix", "Tyranitar", "Talonflame", "Wash Rotom", "Sinistcha", "Sneasler"], sets: [
    { ability: "Sturdy", item: "Steelixite", moves: ["Wide Guard", "High Horsepower", "Heavy Slam", "Protect"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Protect", "Dragon Dance", "Knock Off", "Rock Slide"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Protect", "Swords Dance", "Flare Blitz", "Brave Bird"] },
    { ability: "Levitate", item: "Leftovers", moves: ["Will-O-Wisp", "Light Screen", "Thunderbolt", "Hydro Pump"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Rage Powder", "Trick Room", "Protect", "Matcha Gotcha"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat"] }
  ] },
  { id: "ct-131", tournament: "VGC Gemeinde Turin Prep", players: 15, placement: 1, player: "FrostyDog69", wins: 6, losses: 1, pokemonIds: [6, 547, 983, 902, 445, 970], pokemonNames: ["Charizard", "Whimsicott", "Kingambit", "Basculegion-M", "Garchomp", "Glimmora"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Prankster", item: "Coba Berry", moves: ["Moonblast", "Encore", "Tailwind", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Spiky Shield"] }
  ] },
  { id: "ct-132", tournament: "VGC Gemeinde Turin Prep", players: 15, placement: 2, player: "Itachi", wins: 6, losses: 1, pokemonIds: [279, 902, 1018, 302, 149, 3], pokemonNames: ["Pelipper", "Basculegion-M", "Archaludon", "Sableye", "Dragonite", "Venusaur"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Hurricane", "Tailwind", "Wide Guard"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Flip Turn", "Aqua Jet", "Last Respects"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Flash Cannon", "Dragon Pulse", "Electro Shot", "Protect"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Will-O-Wisp", "Encore", "Rain Dance", "Light Screen"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Draco Meteor", "Heat Wave", "Tailwind", "Protect"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Sludge Bomb", "Giga Drain", "Earth Power", "Protect"] }
  ] },
  { id: "ct-133", tournament: "VGC Gemeinde Turin Prep", players: 15, placement: 3, player: "LycanduskVGC", wins: 4, losses: 2, pokemonIds: [763, 121, 983, 670, 663, 445], pokemonNames: ["Tsareena", "Starmie", "Kingambit", "Floette", "Talonflame", "Garchomp"], sets: [
    { ability: "Queenly Majesty", item: "Focus Sash", moves: ["Trop Kick", "Low Kick", "Helping Hand", "Protect"] },
    { ability: "Natural Cure", item: "Starminite", moves: ["Liquidation", "Ice Spinner", "Aqua Jet", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Brave Bird", "Flare Blitz", "Tailwind", "Protect"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Stomping Tantrum", "Earthquake", "Rock Tomb", "Protect"] }
  ] },
  { id: "ct-134", tournament: "VGC Gemeinde Turin Prep", players: 15, placement: 4, player: "Silo", wins: 3, losses: 3, pokemonIds: [6, 142, 445, 700, 983, 902], pokemonNames: ["Charizard", "Aerodactyl", "Garchomp", "Sylveon", "Kingambit", "Basculegion-M"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Wide Guard"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Tomb", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Detect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Waterfall", "Aqua Jet", "Last Respects", "Protect"] }
  ] },
  { id: "ct-135", tournament: "VGC Gemeinde Turin Prep", players: 15, placement: 5, player: "booooords", wins: 3, losses: 2, pokemonIds: [902, 445, 903, 547, 900, 6], pokemonNames: ["Basculegion-M", "Garchomp", "Sneasler", "Whimsicott", "Kleavor", "Charizard"], sets: [
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Protect", "Rock Slide", "Dragon Claw"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Endeavor"] },
    { ability: "Sharpness", item: "Choice Scarf", moves: ["Stone Axe", "X-Scissor", "U-turn", "Rock Slide"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Protect", "Solar Beam"] }
  ] },
  { id: "ct-136", tournament: "VGC Gemeinde Turin Prep", players: 15, placement: 6, player: "Goldeboy77", wins: 3, losses: 2, pokemonIds: [983, 6, 547, 445, 970, 902], pokemonNames: ["Kingambit", "Charizard", "Whimsicott", "Garchomp", "Glimmora", "Basculegion-M"], sets: [
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] }
  ] },
  { id: "ct-137", tournament: "VGC Gemeinde Turin Prep", players: 15, placement: 7, player: "AzraelXI", wins: 3, losses: 2, pokemonIds: [670, 937, 925, 903, 983, 149], pokemonNames: ["Floette", "Ceruledge", "Maushold", "Sneasler", "Kingambit", "Dragonite"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Light of Ruin", "Moonblast", "Dazzling Gleam", "Protect"] },
    { ability: "Flash Fire", item: "Sitrus Berry", moves: ["Bitter Blade", "Shadow Sneak", "Bulk Up", "Protect"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Follow Me", "Super Fang", "Feint", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Flamethrower", "Dragon Pulse", "Tailwind", "Protect"] }
  ] },
  { id: "ct-138", tournament: "VGC Gemeinde Turin Prep", players: 15, placement: 8, player: "Cesare", wins: 2, losses: 3, pokemonIds: [428, 666, 902, 149, 981, 700], pokemonNames: ["Lopunny", "Vivillon", "Basculegion-M", "Dragonite", "Farigiraf", "Sylveon"], sets: [
    { ability: "Klutz", item: "Lopunnite", moves: ["Giga Impact", "Fake Out", "Close Combat", "Triple Axel"] },
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Rage Powder", "Hurricane", "Tailwind", "Sleep Powder"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Multiscale", item: "Dragon Fang", moves: ["Dragon Claw", "Low Kick", "Iron Head", "Extreme Speed"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Psychic", "Ally Switch", "Trick Room", "Thunderbolt"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Quick Attack", "Calm Mind", "Detect"] }
  ] },
  { id: "ct-139", tournament: "VGC Gemeinde Turin Prep", players: 15, placement: 9, player: "Mega_Flygon", wins: 2, losses: 3, pokemonIds: [6, 902, 5706, 727, 547, 981], pokemonNames: ["Charizard", "Basculegion-M", "Hisuian Goodra", "Incineroar", "Whimsicott", "Farigiraf"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Dragon Pulse", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Last Respects", "Wave Crash", "Protect", "Aqua Jet"] },
    { ability: "Gooey", item: "Leftovers", moves: ["Protect", "Flash Cannon", "Body Press", "Shelter"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Throat Chop", "Flare Blitz", "Fake Out", "Parting Shot"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Encore", "Cotton Spore", "Tailwind"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Psychic", "Thunderbolt", "Trick Room", "Helping Hand"] }
  ] },
  { id: "ct-140", tournament: "VGC Gemeinde Turin Prep", players: 15, placement: 10, player: "jade_da_croc", wins: 2, losses: 3, pokemonIds: [1018, 149, 903, 279, 902, 952], pokemonNames: ["Archaludon", "Dragonite", "Sneasler", "Pelipper", "Basculegion-M", "Scovillain"], sets: [
    { ability: "Stamina", item: "Leftovers", moves: ["Protect", "Electro Shot", "Dragon Pulse", "Flash Cannon"] },
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Weather Ball", "Protect", "Hurricane", "Dragon Pulse"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Dire Claw", "Close Combat", "Fake Out"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Weather Ball", "Wide Guard", "Hurricane", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Wave Crash", "Flip Turn", "Aqua Jet"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Leech Seed", "Rage Powder", "Protect", "Giga Drain"] }
  ] },
  { id: "ct-141", tournament: "VGC Gemeinde Turin Prep", players: 15, placement: 11, player: "LiluDragonBOSS", wins: 1, losses: 4, pokemonIds: [6, 1013, 925, 903, 142, 350], pokemonNames: ["Charizard", "Sinistcha", "Maushold", "Sneasler", "Aerodactyl", "Milotic"], sets: [
    { ability: "Blaze", item: "Charizardite X", moves: ["Breaking Swipe", "Flare Blitz", "Protect", "Belly Drum"] },
    { ability: "Hospitality", item: "Leftovers", moves: ["Matcha Gotcha", "Life Dew", "Trick Room", "Rage Powder"] },
    { ability: "Friend Guard", item: "Sitrus Berry", moves: ["Follow Me", "Taunt", "Protect", "Super Fang"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Competitive", item: "Mystic Water", moves: ["Scald", "Ice Beam", "Protect", "Life Dew"] }
  ] },
  { id: "ct-142", tournament: "PWC - Battle in the Colosseum #13 - Reg M-A", players: 15, placement: 1, player: "Hyokami", wins: 6, losses: 0, pokemonIds: [248, 530, 700, 350, 1013, 227], pokemonNames: ["Tyranitar", "Excadrill", "Sylveon", "Milotic", "Sinistcha", "Skarmory"], sets: [
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Low Kick", "Protect"] },
    { ability: "Sand Rush", item: "Focus Sash", moves: ["Earthquake", "Rock Slide", "Iron Head", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Yawn", "Detect"] },
    { ability: "Competitive", item: "Sitrus Berry", moves: ["Scald", "Icy Wind", "Life Dew", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Strength Sap", "Rage Powder", "Trick Room"] },
    { ability: "Sturdy", item: "Skarmorite", moves: ["Brave Bird", "Iron Head", "Tailwind", "Protect"] }
  ] },
  { id: "ct-143", tournament: "PWC - Battle in the Colosseum #13 - Reg M-A", players: 15, placement: 2, player: "Mattytaxes", wins: 4, losses: 2, pokemonIds: [6, 902, 142, 727, 981, 700], pokemonNames: ["Charizard", "Basculegion-M", "Aerodactyl", "Incineroar", "Farigiraf", "Sylveon"], sets: [
    { ability: "Drought", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Darkest Lariat", "Fake Out", "Flare Blitz", "Parting Shot"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Hyper Voice", "Psychic", "Trick Room", "Helping Hand"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Detect"] }
  ] },
  { id: "ct-144", tournament: "PWC - Battle in the Colosseum #13 - Reg M-A", players: 15, placement: 3, player: "PsyCrowVGC", wins: 3, losses: 2, pokemonIds: [655, 115, 635, 681, 547, 10009], pokemonNames: ["Delphox", "Kangaskhan", "Hydreigon", "Aegislash", "Whimsicott", "Wash Rotom"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Protect", "Encore", "Heat Wave", "Psychic"] },
    { ability: "Scrappy", item: "Silk Scarf", moves: ["Fake Out", "Last Resort"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Heat Wave", "Dark Pulse", "Draco Meteor", "Snarl"] },
    { ability: "Stance Change", item: "Spell Tag", moves: ["King's Shield", "Poltergeist", "Close Combat", "Shadow Sneak"] },
    { ability: "Prankster", item: "Sitrus Berry", moves: ["Moonblast", "Tailwind", "Protect", "Sunny Day"] },
    { ability: "Levitate", item: "Magnet", moves: ["Thunderbolt", "Hydro Pump", "Will-O-Wisp", "Protect"] }
  ] },
  { id: "ct-145", tournament: "PWC - Battle in the Colosseum #13 - Reg M-A", players: 15, placement: 4, player: "Andrew Hier", wins: 2, losses: 2, pokemonIds: [94, 1018, 186, 902, 727, 547], pokemonNames: ["Gengar", "Archaludon", "Politoed", "Basculegion-M", "Incineroar", "Whimsicott"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Perish Song", "Protect", "Disable", "Shadow Ball"] },
    { ability: "Stamina", item: "Dragon Fang", moves: ["Protect", "Electro Shot", "Flash Cannon", "Dragon Pulse"] },
    { ability: "Drizzle", item: "Leftovers", moves: ["Protect", "Perish Song", "Weather Ball", "Muddy Water"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Flip Turn", "Wave Crash", "Aqua Jet", "Last Respects"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Parting Shot", "Darkest Lariat", "Flare Blitz"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Protect", "Tailwind", "Encore", "Moonblast"] }
  ] },
  { id: "ct-146", tournament: "PWC - Battle in the Colosseum #13 - Reg M-A", players: 15, placement: 5, player: "Kotori", wins: 2, losses: 1, pokemonIds: [334, 964, 727, 903, 94, 1013], pokemonNames: ["Altaria", "Palafin", "Incineroar", "Sneasler", "Gengar", "Sinistcha"], sets: [
    { ability: "Cloud Nine", item: "Altarianite", moves: ["Moonblast", "Perish Song", "Protect", "Dragon Pulse"] },
    { ability: "Zero to Hero", item: "Mystic Water", moves: ["Wave Crash", "Jet Punch", "Encore", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Darkest Lariat", "Fake Out", "Protect", "Parting Shot"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Cursed Body", item: "Gengarite", moves: ["Shadow Ball", "Disable", "Perish Song", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] }
  ] },
  { id: "ct-147", tournament: "PWC - Battle in the Colosseum #13 - Reg M-A", players: 15, placement: 6, player: "Kobraspike", wins: 0, losses: 4, pokemonIds: [9, 981, 983, 700, 115, 324], pokemonNames: ["Blastoise", "Farigiraf", "Kingambit", "Sylveon", "Kangaskhan", "Torkoal"], sets: [
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Dark Pulse", "Aura Sphere", "Fake Out", "Water Spout"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Protect", "Helping Hand", "Psychic"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Iron Head", "Kowtow Cleave", "Protect", "Sucker Punch"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Calm Mind", "Detect", "Hyper Voice", "Mystical Fire"] },
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Body Slam", "Fake Out", "Drain Punch", "Sucker Punch"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Protect", "Weather Ball", "Earth Power"] }
  ] },
  { id: "ct-148", tournament: "Vapor’s Saturday Showdown #7", players: 15, placement: 1, player: "DreepyG", wins: 7, losses: 1, pokemonIds: [903, 547, 478, 983, 900, 902], pokemonNames: ["Sneasler", "Whimsicott", "Froslass", "Kingambit", "Kleavor", "Basculegion-M"], sets: [
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Protect", "Fake Out"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Protect", "Moonblast", "Tailwind", "Encore"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Protect", "Swords Dance", "Sucker Punch", "Kowtow Cleave"] },
    { ability: "Sharpness", item: "Choice Scarf", moves: ["Stone Axe", "U-turn", "Close Combat", "Rock Slide"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Protect", "Aqua Jet", "Last Respects", "Liquidation"] }
  ] },
  { id: "ct-149", tournament: "Vapor’s Saturday Showdown #7", players: 15, placement: 2, player: "KST VGC ", wins: 6, losses: 2, pokemonIds: [6, 903, 727, 1013, 670, 445], pokemonNames: ["Charizard", "Sneasler", "Incineroar", "Sinistcha", "Floette", "Garchomp"], sets: [
    { ability: "Blaze", item: "Charizardite X", moves: ["Flare Blitz", "Dragon Claw", "Protect", "Dragon Dance"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Coaching"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Life Dew"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Protect", "Calm Mind"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Dragon Claw", "Rock Slide", "Earthquake", "Protect"] }
  ] },
  { id: "ct-150", tournament: "Vapor’s Saturday Showdown #7", players: 15, placement: 3, player: "cliz", wins: 4, losses: 3, pokemonIds: [6, 1013, 727, 670, 445, 681], pokemonNames: ["Charizard", "Sinistcha", "Incineroar", "Floette", "Garchomp", "Aegislash"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Protect", "Solar Beam"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Trick Room", "Matcha Gotcha", "Protect", "Rage Powder"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Parting Shot", "Throat Chop"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Protect", "Moonblast", "Calm Mind"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Rock Tomb", "Earthquake", "Stomping Tantrum", "Dragon Claw"] },
    { ability: "Stance Change", item: "Focus Sash", moves: ["Iron Head", "Poltergeist", "Shadow Sneak", "King's Shield"] }
  ] },
  { id: "ct-151", tournament: "Vapor’s Saturday Showdown #7", players: 15, placement: 4, player: "JaccVGC", wins: 4, losses: 3, pokemonIds: [445, 6, 902, 983, 547, 670], pokemonNames: ["Garchomp", "Charizard", "Basculegion-M", "Kingambit", "Whimsicott", "Floette"], sets: [
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Protect", "Dragon Claw", "Earthquake", "Stomping Tantrum"], teraType: "Dragon" },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Weather Ball", "Solar Beam"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Kowtow Cleave", "Low Kick", "Sucker Punch"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Endeavor"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Dazzling Gleam", "Moonblast", "Light of Ruin"], teraType: "Fairy" }
  ] },
  { id: "ct-152", tournament: "Vapor’s Saturday Showdown #7", players: 15, placement: 5, player: "LoneSome_MP3", wins: 4, losses: 2, pokemonIds: [478, 903, 350, 983, 902, 149], pokemonNames: ["Froslass", "Sneasler", "Milotic", "Kingambit", "Basculegion-M", "Dragonite"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Protect", "Blizzard", "Shadow Ball", "Aurora Veil"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Close Combat", "Dire Claw", "Fake Out"] },
    { ability: "Competitive", item: "Sitrus Berry", moves: ["Protect", "Scald", "Icy Wind", "Life Dew"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Kowtow Cleave", "Sucker Punch", "Low Kick"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Flip Turn", "Wave Crash", "Last Respects", "Aqua Jet"] },
    { ability: "Multiscale", item: "Dragon Fang", moves: ["Dragon Claw", "Extreme Speed", "Low Kick", "Tailwind"] }
  ] },
  { id: "ct-153", tournament: "Vapor’s Saturday Showdown #7", players: 15, placement: 6, player: "Goalie3001", wins: 3, losses: 3, pokemonIds: [670, 445, 142, 10009, 681, 727], pokemonNames: ["Floette", "Garchomp", "Aerodactyl", "Wash Rotom", "Aegislash", "Incineroar"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Moonblast", "Dazzling Gleam", "Light of Ruin"] },
    { ability: "Rough Skin", item: "Haban Berry", moves: ["Protect", "Earthquake", "Rock Slide", "Dragon Claw"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Protect", "Rock Slide", "Dual Wingbeat", "Tailwind"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Will-O-Wisp", "Hydro Pump", "Thunderbolt", "Electroweb"] },
    { ability: "Stance Change", item: "Spell Tag", moves: ["King's Shield", "Poltergeist", "Sacred Sword", "Shadow Sneak"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Parting Shot", "Fake Out", "Flare Blitz", "Helping Hand"] }
  ] },
  { id: "ct-154", tournament: "Vapor’s Saturday Showdown #7", players: 15, placement: 7, player: "I___Lightning___I", wins: 3, losses: 3, pokemonIds: [6, 902, 445, 3, 983, 700], pokemonNames: ["Charizard", "Basculegion-M", "Garchomp", "Venusaur", "Kingambit", "Sylveon"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Weather Ball", "Heat Wave", "Protect", "Solar Beam"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Aqua Jet", "Wave Crash", "Flip Turn"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Tomb", "Protect"] },
    { ability: "Chlorophyll", item: "Focus Sash", moves: ["Leaf Storm", "Sludge Bomb", "Sleep Powder", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Protect"] },
    { ability: "Cute Charm", item: "Fairy Feather", moves: ["Moonblast", "Hyper Voice", "Psychic", "Protect"] }
  ] },
  { id: "ct-155", tournament: "Vapor’s Saturday Showdown #7", players: 15, placement: 8, player: "DisPlotfr", wins: 3, losses: 3, pokemonIds: [655, 547, 925, 445, 903, 983], pokemonNames: ["Delphox", "Whimsicott", "Maushold", "Garchomp", "Sneasler", "Kingambit"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Substitute", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Follow Me", "Super Fang", "Taunt", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] }
  ] },
  { id: "ct-156", tournament: "Vapor’s Saturday Showdown #7", players: 15, placement: 9, player: "Falcoz52", wins: 1, losses: 4, pokemonIds: [983, 547, 903, 478, 900, 902], pokemonNames: ["Kingambit", "Whimsicott", "Sneasler", "Froslass", "Kleavor", "Basculegion-M"], sets: [
    { ability: "Defiant", item: "Black Glasses", moves: ["Swords Dance", "Protect", "Kowtow Cleave", "Sucker Punch"] },
    { ability: "Prankster", item: "Coba Berry", moves: ["Encore", "Tailwind", "Moonblast", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Stone Axe", "Close Combat", "Feint", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Aqua Jet", "Wave Crash", "Flip Turn"] }
  ] },
  { id: "ct-157", tournament: "Vapor’s Saturday Showdown #7", players: 15, placement: 10, player: "Jgungy", wins: 1, losses: 2, pokemonIds: [302, 212, 727, 983, 902, 142], pokemonNames: ["Sableye", "Scizor", "Incineroar", "Kingambit", "Basculegion-M", "Aerodactyl"], sets: [
    { ability: "Prankster", item: "Roseli Berry", moves: ["Fake Out", "Encore", "Disable", "Will-O-Wisp"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "Swords Dance", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Taunt"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Low Kick", "Kowtow Cleave", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Aqua Jet", "Liquidation", "Last Respects", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] }
  ] },
  { id: "ct-158", tournament: "Vapor’s Saturday Showdown #7", players: 15, placement: 11, player: "Juan R", wins: 1, losses: 4, pokemonIds: [282, 902, 1018, 279, 925, 635], pokemonNames: ["Gardevoir", "Basculegion-M", "Archaludon", "Pelipper", "Maushold", "Hydreigon"], sets: [
    { ability: "Trace", item: "Gardevoirite", moves: ["Hyper Voice", "Psyshock", "Trick Room", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Flash Cannon", "Dragon Pulse", "Electro Shot", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Hurricane", "Tailwind", "Protect"] },
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Super Fang", "Follow Me", "Helping Hand", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Dark Pulse", "Draco Meteor", "Snarl", "Heat Wave"] }
  ] },
  { id: "ct-159", tournament: "Vapor’s Saturday Showdown #7", players: 15, placement: 12, player: "Prettypinkyy", wins: 1, losses: 4, pokemonIds: [547, 1018, 154, 666, 38, 186], pokemonNames: ["Whimsicott", "Archaludon", "Meganium", "Vivillon", "Ninetales", "Politoed"], sets: [
    { ability: "Chlorophyll", item: "Focus Sash", moves: ["Solar Beam", "Protect", "Moonblast", "Growth"] },
    { ability: "Stamina", item: "Magnet", moves: ["Electro Shot", "Protect", "Flash Cannon", "Dragon Pulse"] },
    { ability: "Leaf Guard", item: "Meganiumite", moves: ["Solar Blade", "Protect", "Leech Seed", "Zen Headbutt"] },
    { ability: "Friend Guard", item: "Quick Claw", moves: ["Protect", "Sunny Day", "Pollen Puff", "Sleep Powder"] },
    { ability: "Drought", item: "Sitrus Berry", moves: ["Solar Beam", "Fire Blast", "Protect", "Shadow Ball"] },
    { ability: "Drizzle", item: "Leftovers", moves: ["Icy Wind", "Encore", "Protect", "Muddy Water"] }
  ] },
  { id: "ct-160", tournament: "Vapor’s Saturday Showdown #7", players: 15, placement: 13, player: "maxdeesevgc", wins: 0, losses: 1, pokemonIds: [670, 663, 902, 279, 1018, 25], pokemonNames: ["Floette", "Talonflame", "Basculegion-M", "Pelipper", "Archaludon", "Pikachu"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Moonblast", "Light of Ruin", "Protect"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Dual Wingbeat", "Tailwind", "Quick Guard", "Rain Dance"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Weather Ball", "Tailwind", "Wide Guard"] },
    { ability: "Stamina", item: "Sitrus Berry", moves: ["Electro Shot", "Aura Sphere", "Flash Cannon", "Protect"] },
    { ability: "Lightning Rod", item: "Light Ball", moves: ["Fake Out", "Thunder", "Alluring Voice", "Protect"] }
  ] },
  { id: "ct-161", tournament: "Vapor’s Saturday Showdown #7", players: 15, placement: 14, player: "lalowoofl3", wins: 0, losses: 1, pokemonIds: [10341, 10340, 510, 212, 699, 142], pokemonNames: ["Hisuian Decidueye", "Hisuian Zoroark", "Liepard", "Scizor", "Aurorus", "Aerodactyl"], sets: [
    { ability: "Scrappy", item: "Scope Lens", moves: ["Leaf Blade", "Triple Arrows", "Sucker Punch", "Protect"] },
    { ability: "Illusion", item: "Choice Scarf", moves: ["Shadow Ball", "Icy Wind", "Psychic", "Flamethrower"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Knock Off", "Yawn", "Encore", "Fake Out"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Swords Dance", "Bug Bite", "Protect"] },
    { ability: "Snow Warning", item: "Sitrus Berry", moves: ["Protect", "Blizzard", "Ancient Power", "Freeze-Dry"] },
    { ability: "Rock Head", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] }
  ] },
  { id: "ct-162", tournament: "Vapor’s Saturday Showdown #7", players: 15, placement: 15, player: "Dubz_VGC", wins: 0, losses: 1, pokemonIds: [6, 547, 970, 983, 445, 902], pokemonNames: ["Charizard", "Whimsicott", "Glimmora", "Kingambit", "Garchomp", "Basculegion-M"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Earth Power", "Sludge Bomb", "Spiky Shield"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Protect", "Low Kick"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Poison Jab"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Protect"] }
  ] },
  { id: "ct-163", tournament: "Game Corner Showdown 2025 - Split 3 | Torneio #6", players: 10, placement: 1, player: "Eduardo Cunha", wins: 6, losses: 0, pokemonIds: [94, 700, 727, 186, 1018, 666], pokemonNames: ["Gengar", "Sylveon", "Incineroar", "Politoed", "Archaludon", "Vivillon"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Shadow Ball", "Perish Song", "Disable", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Yawn", "Detect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Darkest Lariat", "Parting Shot", "Fake Out", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Perish Song", "Encore", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Dragon Pulse", "Flash Cannon", "Electro Shot", "Protect"] },
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Hurricane", "Sleep Powder", "Rage Powder", "Protect"] }
  ] },
  { id: "ct-164", tournament: "Game Corner Showdown 2025 - Split 3 | Torneio #6", players: 10, placement: 2, player: "Rosha Volari", wins: 4, losses: 2, pokemonIds: [6, 350, 903, 681, 547, 445], pokemonNames: ["Charizard", "Milotic", "Sneasler", "Aegislash", "Whimsicott", "Garchomp"], sets: [
    { ability: "Blaze", item: "Charizardite X", moves: ["Dragon Dance", "Breaking Swipe", "Temper Flare", "Protect"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Hydro Pump", "Hypnosis", "Coil", "Recover"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Protect", "Close Combat", "Fake Out"] },
    { ability: "Stance Change", item: "Spell Tag", moves: ["Iron Head", "Poltergeist", "Shadow Sneak", "King's Shield"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Sand Veil", item: "Sitrus Berry", moves: ["Stomping Tantrum", "Dragon Claw", "Rock Tomb", "Poison Jab"] }
  ] },
  { id: "ct-165", tournament: "Game Corner Showdown 2025 - Split 3 | Torneio #6", players: 10, placement: 3, player: "Micael Ramos", wins: 2, losses: 3, pokemonIds: [983, 36, 903, 655, 902, 981], pokemonNames: ["Kingambit", "Clefable", "Sneasler", "Delphox", "Basculegion-M", "Farigiraf"], sets: [
    { ability: "Defiant", item: "Black Glasses", moves: ["Protect", "Kowtow Cleave", "Sucker Punch", "Swords Dance"] },
    { ability: "Unaware", item: "Sitrus Berry", moves: ["Protect", "Follow Me", "Draining Kiss", "Icy Wind"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Protect", "Close Combat", "Dire Claw"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Protect", "Heat Wave", "Psychic", "Nasty Plot"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Psychic Fangs", "Last Respects", "Aqua Jet", "Wave Crash"] },
    { ability: "Armor Tail", item: "Leftovers", moves: ["Protect", "Foul Play", "Low Kick", "Helping Hand"] }
  ] },
  { id: "ct-166", tournament: "Game Corner Showdown 2025 - Split 3 | Torneio #6", players: 10, placement: 4, player: "Pedro Campina", wins: 2, losses: 3, pokemonIds: [9, 983, 248, 1013, 981, 902], pokemonNames: ["Blastoise", "Kingambit", "Tyranitar", "Sinistcha", "Farigiraf", "Basculegion-M"], sets: [
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Fake Out", "Water Spout", "Dark Pulse", "Aura Sphere"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Iron Head", "Kowtow Cleave", "Low Kick", "Sucker Punch"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Protect", "Rock Slide", "Knock Off", "Superpower"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Rage Powder", "Matcha Gotcha", "Life Dew", "Trick Room"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Psychic", "Rain Dance", "Low Kick", "Trick Room"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Flip Turn", "Wave Crash", "Last Respects", "Aqua Jet"] }
  ] },
  { id: "ct-167", tournament: "Game Corner Showdown 2025 - Split 3 | Torneio #6", players: 10, placement: 5, player: "Diogo Henriques", wins: 2, losses: 2, pokemonIds: [655, 36, 983, 903, 445, 902], pokemonNames: ["Delphox", "Clefable", "Kingambit", "Sneasler", "Garchomp", "Basculegion-M"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Encore", "Protect"] },
    { ability: "Unaware", item: "Sitrus Berry", moves: ["Moonblast", "Icy Wind", "Follow Me", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Swords Dance", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Aqua Jet", "Flip Turn", "Wave Crash", "Last Respects"] }
  ] },
  { id: "ct-168", tournament: "Game Corner Showdown 2025 - Split 3 | Torneio #6", players: 10, placement: 6, player: "Miguel Rebelo", wins: 2, losses: 2, pokemonIds: [6, 670, 681, 445, 727, 1013], pokemonNames: ["Charizard", "Floette", "Aegislash", "Garchomp", "Incineroar", "Sinistcha"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Stance Change", item: "Focus Sash", moves: ["Poltergeist", "Close Combat", "Shadow Sneak", "King's Shield"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Dragon Claw", "Earthquake", "Stomping Tantrum", "Rock Slide"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] }
  ] },
  { id: "ct-169", tournament: "Game Corner Showdown 2025 - Split 3 | Torneio #6", players: 10, placement: 7, player: "Bruno Alfacinha", wins: 2, losses: 2, pokemonIds: [6, 445, 547, 970, 902, 983], pokemonNames: ["Charizard", "Garchomp", "Whimsicott", "Glimmora", "Basculegion-M", "Kingambit"], sets: [
    { ability: "Drought", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Ancient Power", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Poison Jab"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Tailwind", "Moonblast", "Encore", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Earth Power", "Sludge Bomb", "Power Gem", "Spiky Shield"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] }
  ] },
  { id: "ct-170", tournament: "Game Corner Showdown 2025 - Split 3 | Torneio #6", players: 10, placement: 8, player: "Tomás Vieira", wins: 1, losses: 3, pokemonIds: [142, 700, 727, 902, 784, 3], pokemonNames: ["Aerodactyl", "Sylveon", "Incineroar", "Basculegion-M", "Kommo-o", "Venusaur"], sets: [
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Protect", "Dual Wingbeat", "Tailwind"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Protect"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Throat Chop", "Flare Blitz", "Parting Shot", "Fake Out"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Last Respects", "Liquidation", "Aqua Jet", "Protect"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Protect", "Clangorous Soul", "Clanging Scales", "Aura Sphere"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Protect", "Earth Power", "Sludge Bomb", "Giga Drain"] }
  ] },
  { id: "ct-171", tournament: "Game Corner Showdown 2025 - Split 3 | Torneio #6", players: 10, placement: 9, player: "Ruben Pereira", wins: 0, losses: 2, pokemonIds: [212, 1013, 727, 445, 10009, 282], pokemonNames: ["Scizor", "Sinistcha", "Incineroar", "Garchomp", "Wash Rotom", "Gardevoir"], sets: [
    { ability: "Technician", item: "Metal Coat", moves: ["Bullet Punch", "Bug Bite", "Swords Dance", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Protect", "Rage Powder", "Trick Room"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Darkest Lariat", "Parting Shot", "Fake Out"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Dragon Claw", "Earthquake", "Rock Tomb", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Thunderbolt", "Electroweb", "Will-O-Wisp", "Hydro Pump"] },
    { ability: "Telepathy", item: "Gardevoirite", moves: ["Hyper Voice", "Psychic", "Calm Mind", "Protect"] }
  ] },
  { id: "ct-172", tournament: "Game Corner Showdown 2025 - Split 3 | Torneio #6", players: 10, placement: 10, player: "Ruben Abreu", wins: 0, losses: 2, pokemonIds: [6, 983, 902, 547, 445, 970], pokemonNames: ["Charizard", "Kingambit", "Basculegion-M", "Whimsicott", "Garchomp", "Glimmora"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Encore", "Tailwind", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Spiky Shield"] }
  ] },
  { id: "ct-173", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 1, player: "WiseDraco2", wins: 7, losses: 2, pokemonIds: [983, 903, 902, 149, 478, 445], pokemonNames: ["Kingambit", "Sneasler", "Basculegion-M", "Dragonite", "Froslass", "Garchomp"], sets: [
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Protect", "Iron Head"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Thunderbolt", "Flamethrower", "Protect"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] }
  ] },
  { id: "ct-174", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 2, player: "Staticsoul", wins: 6, losses: 3, pokemonIds: [10340, 6, 983, 547, 445, 227], pokemonNames: ["Hisuian Zoroark", "Charizard", "Kingambit", "Whimsicott", "Garchomp", "Skarmory"], sets: [
    { ability: "Illusion", item: "Focus Sash", moves: ["Shadow Ball", "Icy Wind", "Will-O-Wisp", "Psychic"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Tailwind", "Protect", "Encore", "Moonblast"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Rock Slide", "Poison Jab", "Earthquake"] },
    { ability: "Sturdy", item: "Skarmorite", moves: ["Brave Bird", "Taunt", "Iron Head", "Rock Tomb"] }
  ] },
  { id: "ct-175", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 3, player: "Svenny", wins: 6, losses: 2, pokemonIds: [6, 445, 983, 10009, 748, 1013], pokemonNames: ["Charizard", "Garchomp", "Kingambit", "Wash Rotom", "Toxapex", "Sinistcha"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Weather Ball", "Solar Beam", "Heat Wave", "Protect"] },
    { ability: "Rough Skin", item: "White Herb", moves: ["Scale Shot", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Hydro Pump", "Thunderbolt", "Electroweb", "Volt Switch"] },
    { ability: "Regenerator", item: "Leftovers", moves: ["Infestation", "Toxic", "Wide Guard", "Baneful Bunker"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Shadow Ball", "Life Dew", "Rage Powder", "Protect"] }
  ] },
  { id: "ct-176", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 4, player: "Oscarbolt", wins: 5, losses: 3, pokemonIds: [3, 727, 902, 670, 142, 10103], pokemonNames: ["Venusaur", "Incineroar", "Basculegion-M", "Floette", "Aerodactyl", "Alolan Ninetales"], sets: [
    { ability: "Overgrow", item: "Venusaurite", moves: ["Protect", "Giga Drain", "Earth Power", "Sludge Bomb"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Snarl", "Overheat", "Fake Out", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Wave Crash", "Flip Turn", "Aqua Jet"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Moonblast", "Protect", "Light of Ruin"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Rock Slide", "Tailwind", "Dual Wingbeat", "Protect"] },
    { ability: "Snow Warning", item: "Leftovers", moves: ["Blizzard", "Moonblast", "Protect", "Hypnosis"] }
  ] },
  { id: "ct-177", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 5, player: "Oscar P", wins: 6, losses: 1, pokemonIds: [666, 655, 925, 1013, 670, 727], pokemonNames: ["Vivillon", "Delphox", "Maushold", "Sinistcha", "Floette", "Incineroar"], sets: [
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Sleep Powder", "Hurricane", "Rage Powder", "Pollen Puff"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Nasty Plot", "Protect"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Feint", "Follow Me", "Helping Hand", "Protect"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Parting Shot", "Flare Blitz", "Throat Chop", "Fake Out"] }
  ] },
  { id: "ct-178", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 6, player: "DokkaToast", wins: 5, losses: 2, pokemonIds: [983, 902, 302, 1018, 3, 149], pokemonNames: ["Kingambit", "Basculegion-M", "Sableye", "Archaludon", "Venusaur", "Dragonite"], sets: [
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Last Respects", "Liquidation", "Aqua Jet", "Protect"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Encore", "Light Screen", "Reflect", "Rain Dance"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Flash Cannon", "Dragon Pulse", "Electro Shot", "Protect"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Earth Power", "Sludge Bomb", "Giga Drain", "Protect"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Low Kick", "Ice Spinner", "Dragon Claw", "Protect"] }
  ] },
  { id: "ct-179", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 7, player: "Losandy", wins: 5, losses: 2, pokemonIds: [903, 445, 983, 655, 666, 497], pokemonNames: ["Sneasler", "Garchomp", "Kingambit", "Delphox", "Vivillon", "Serperior"], sets: [
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Dragon Pulse", "Rock Slide", "Stomping Tantrum"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Swords Dance", "Sucker Punch", "Protect"] },
    { ability: "Magician", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Substitute", "Protect"] },
    { ability: "Shield Dust", item: "Focus Sash", moves: ["Sleep Powder", "Hurricane", "Pollen Puff", "Protect"] },
    { ability: "Contrary", item: "Leftovers", moves: ["Leaf Storm", "Dragon Pulse", "Protect", "Leech Seed"] }
  ] },
  { id: "ct-180", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 8, player: "EonVGC", wins: 5, losses: 2, pokemonIds: [445, 670, 655, 727, 902, 925], pokemonNames: ["Garchomp", "Floette", "Delphox", "Incineroar", "Basculegion-M", "Maushold"], sets: [
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Stomping Tantrum", "Dragon Claw", "Rock Slide"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Moonblast", "Calm Mind", "Protect"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Nasty Plot", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Follow Me", "Super Fang", "Feint", "Protect"] }
  ] },
  { id: "ct-181", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 9, player: "jeanlopez25", wins: 3, losses: 3, pokemonIds: [115, 823, 149, 981, 970, 700], pokemonNames: ["Kangaskhan", "Corviknight", "Dragonite", "Farigiraf", "Glimmora", "Sylveon"], sets: [
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Earthquake", "Ice Punch", "Fake Out", "Double-Edge"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Brave Bird", "Iron Head", "Roost", "Bulk Up"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Heat Wave", "Thunderbolt", "Hurricane", "Protect"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Foul Play", "Twin Beam", "Helping Hand", "Trick Room"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Spiky Shield"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Beam", "Hyper Voice", "Quick Attack", "Protect"] }
  ] },
  { id: "ct-182", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 10, player: "Gotou", wins: 3, losses: 3, pokemonIds: [3, 279, 902, 1018, 700, 143], pokemonNames: ["Venusaur", "Pelipper", "Basculegion-M", "Archaludon", "Sylveon", "Snorlax"], sets: [
    { ability: "Overgrow", item: "Venusaurite", moves: ["Giga Drain", "Sludge Bomb", "Earth Power", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Tailwind", "Hurricane", "Weather Ball", "Wide Guard"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Flip Turn", "Last Respects"] },
    { ability: "Stamina", item: "Chople Berry", moves: ["Flash Cannon", "Electro Shot", "Aura Sphere", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Moonblast", "Quick Attack", "Protect"] },
    { ability: "Thick Fat", item: "Sitrus Berry", moves: ["Facade", "Yawn", "Self-Destruct", "High Horsepower"] }
  ] },
  { id: "ct-183", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 11, player: "Mattytaxes", wins: 3, losses: 3, pokemonIds: [6, 902, 142, 727, 981, 700], pokemonNames: ["Charizard", "Basculegion-M", "Aerodactyl", "Incineroar", "Farigiraf", "Sylveon"], sets: [
    { ability: "Drought", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Darkest Lariat", "Fake Out", "Flare Blitz", "Parting Shot"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Hyper Voice", "Psychic", "Trick Room", "Helping Hand"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Detect"] }
  ] },
  { id: "ct-184", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 12, player: "Metaknight1320", wins: 3, losses: 3, pokemonIds: [655, 248, 902, 903, 36, 547], pokemonNames: ["Delphox", "Tyranitar", "Basculegion-M", "Sneasler", "Clefable", "Whimsicott"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Encore", "Protect"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Low Kick", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Flip Turn", "Aqua Jet", "Last Respects"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Fake Tears", "Dire Claw", "Protect"] },
    { ability: "Unaware", item: "Sitrus Berry", moves: ["Follow Me", "Helping Hand", "Moonblast", "Protect"] },
    { ability: "Prankster", item: "Mental Herb", moves: ["Tailwind", "Moonblast", "Encore", "Protect"] }
  ] },
  { id: "ct-185", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 13, player: "Raven3d", wins: 2, losses: 3, pokemonIds: [9, 6199, 279, 1018, 983, 700], pokemonNames: ["Blastoise", "Galarian Slowking", "Pelipper", "Archaludon", "Kingambit", "Sylveon"], sets: [
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Water Spout", "Dark Pulse", "Aura Sphere", "Protect"] },
    { ability: "Regenerator", item: "Mental Herb", moves: ["Acid Spray", "Heal Pulse", "Trick Room", "Rain Dance"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Hurricane", "Tailwind", "Wide Guard"] },
    { ability: "Stamina", item: "Dragon Fang", moves: ["Electro Shot", "Steel Beam", "Draco Meteor", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Swords Dance", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Psyshock", "Quick Attack", "Protect"] }
  ] },
  { id: "ct-186", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 14, player: "Kywbluemoon", wins: 2, losses: 3, pokemonIds: [670, 1013, 727, 6, 681, 445], pokemonNames: ["Floette", "Sinistcha", "Incineroar", "Charizard", "Aegislash", "Garchomp"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Stance Change", item: "Focus Sash", moves: ["Poltergeist", "Shadow Sneak", "Iron Head", "King's Shield"] },
    { ability: "Rough Skin", item: "Haban Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] }
  ] },
  { id: "ct-187", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 15, player: "kapi", wins: 2, losses: 2, pokemonIds: [765, 730, 983, 248, 534, 208], pokemonNames: ["Oranguru", "Primarina", "Kingambit", "Tyranitar", "Conkeldurr", "Steelix"], sets: [
    { ability: "Inner Focus", item: "Mental Herb", moves: ["Psychic", "Trick Room", "Instruct", "Protect"] },
    { ability: "Liquid Voice", item: "Mystic Water", moves: ["Hyper Voice", "Ice Beam", "Moonblast", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Throat Chop", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Knock Off", "Rock Slide", "Stomping Tantrum", "Protect"] },
    { ability: "Iron Fist", item: "Black Belt", moves: ["Mach Punch", "Drain Punch", "Thunder Punch", "Protect"] },
    { ability: "Sturdy", item: "Steelixite", moves: ["Heavy Slam", "Stone Edge", "Stomping Tantrum", "Protect"] }
  ] },
  { id: "ct-188", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 16, player: "Mariosr", wins: 2, losses: 3, pokemonIds: [666, 1013, 925, 655, 670, 727], pokemonNames: ["Vivillon", "Sinistcha", "Maushold", "Delphox", "Floette", "Incineroar"], sets: [
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Sleep Powder", "Hurricane", "Rage Powder", "Tailwind"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Protect", "Rage Powder", "Matcha Gotcha", "Life Dew"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Protect", "Follow Me", "Feint", "Super Fang"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Protect", "Nasty Plot", "Psychic", "Nasty Plot"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Calm Mind", "Draining Kiss", "Moonblast"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Fake Out", "Parting Shot", "Throat Chop", "Flare Blitz"] }
  ] },
  { id: "ct-189", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 17, player: "Dreuxbi", wins: 2, losses: 3, pokemonIds: [324, 900, 902, 952, 3, 983], pokemonNames: ["Torkoal", "Kleavor", "Basculegion-M", "Scovillain", "Venusaur", "Kingambit"], sets: [
    { ability: "Drought", item: "Leftovers", moves: ["Heat Wave", "Earth Power", "Yawn", "Protect"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Stone Axe", "X-Scissor", "Tailwind", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Flip Turn", "Aqua Jet", "Wave Crash"] },
    { ability: "Chlorophyll", item: "Scovillainite", moves: ["Overheat", "Leech Seed", "Rage Powder", "Protect"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Sludge Bomb", "Earth Power", "Giga Drain", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] }
  ] },
  { id: "ct-190", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 18, player: "rickinch", wins: 1, losses: 3, pokemonIds: [212, 981, 902, 279, 149, 727], pokemonNames: ["Scizor", "Farigiraf", "Basculegion-M", "Pelipper", "Dragonite", "Incineroar"], sets: [
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Close Combat", "Swords Dance", "Protect"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Twin Beam", "Imprison", "Helping Hand", "Trick Room"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Flip Turn"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Weather Ball", "Hurricane", "Tailwind", "Protect"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Hurricane", "Thunder", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] }
  ] },
  { id: "ct-191", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 19, player: "Zenjekkk", wins: 1, losses: 3, pokemonIds: [983, 547, 903, 900, 902, 6], pokemonNames: ["Kingambit", "Whimsicott", "Sneasler", "Kleavor", "Basculegion-M", "Charizard"], sets: [
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Protect"] },
    { ability: "Prankster", item: "Coba Berry", moves: ["Moonblast", "Encore", "Tailwind", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Stone Axe", "Close Combat", "Feint", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Aqua Jet", "Flip Turn", "Wave Crash", "Last Respects"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Weather Ball", "Heat Wave", "Solar Beam", "Protect"] }
  ] },
  { id: "ct-192", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 20, player: "BismarckB", wins: 1, losses: 4, pokemonIds: [323, 740, 184, 475, 981, 983], pokemonNames: ["Camerupt", "Crabominable", "Azumarill", "Gallade", "Farigiraf", "Kingambit"], sets: [
    { ability: "Solid Rock", item: "Cameruptite", moves: ["Heat Wave", "Ancient Power", "Earth Power", "Protect"] },
    { ability: "Hyper Cutter", item: "Crabominite", moves: ["Ice Hammer", "Drain Punch", "Mach Punch", "Protect"] },
    { ability: "Huge Power", item: "Mystic Water", moves: ["Liquidation", "Play Rough", "Aqua Jet", "Protect"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Sacred Sword", "Psycho Cut", "Leaf Blade", "Protect"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Psychic", "Helping Hand", "Trick Room", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Iron Head", "Kowtow Cleave", "Sucker Punch", "Protect"] }
  ] },
  { id: "ct-193", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 21, player: "doggifloof", wins: 1, losses: 2, pokemonIds: [59, 478, 823, 445, 149, 68], pokemonNames: ["Arcanine", "Froslass", "Corviknight", "Garchomp", "Dragonite", "Machamp"], sets: [
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Protect", "Extreme Speed", "Flare Blitz", "Will-O-Wisp"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Protect", "Blizzard", "Shadow Ball", "Aurora Veil"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Body Press", "Iron Defense", "Roost", "Iron Head"] },
    { ability: "Rough Skin", item: "Mental Herb", moves: ["Protect", "Earthquake", "Dragon Claw", "Rock Slide"] },
    { ability: "Multiscale", item: "Dragon Fang", moves: ["Dragon Claw", "Protect", "Low Kick", "Extreme Speed"] },
    { ability: "No Guard", item: "Focus Sash", moves: ["Close Combat", "Brick Break", "Protect", "Rock Tomb"] }
  ] },
  { id: "ct-194", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 22, player: "starling", wins: 1, losses: 1, pokemonIds: [149, 547, 445, 902, 983, 6], pokemonNames: ["Dragonite", "Whimsicott", "Garchomp", "Basculegion-M", "Kingambit", "Charizard"], sets: [
    { ability: "Multiscale", item: "Dragoninite", moves: ["Protect", "Thunderbolt", "Heat Wave", "Dragon Pulse"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Protect", "Tailwind", "Encore", "Moonblast"] },
    { ability: "Sand Veil", item: "Roseli Berry", moves: ["Poison Jab", "Earthquake", "Rock Slide", "Dragon Claw"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Protect", "Aqua Jet", "Wave Crash", "Last Respects"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Iron Head", "Sucker Punch", "Kowtow Cleave"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Solar Blade", "Weather Ball"] }
  ] },
  { id: "ct-195", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 23, player: "Q5U", wins: 1, losses: 4, pokemonIds: [1018, 279, 115, 282, 981, 130], pokemonNames: ["Archaludon", "Pelipper", "Kangaskhan", "Gardevoir", "Farigiraf", "Gyarados"], sets: [
    { ability: "Stamina", item: "Chople Berry", moves: ["Aura Sphere", "Electro Shot", "Dragon Pulse", "Flash Cannon"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Blizzard", "Muddy Water", "Tailwind"] },
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Fake Out", "Double-Edge", "Sucker Punch", "Drain Punch"] },
    { ability: "Trace", item: "Gardevoirite", moves: ["Dazzling Gleam", "Psychic", "Aura Sphere", "Mystical Fire"] },
    { ability: "Armor Tail", item: "Leftovers", moves: ["Foul Play", "Dazzling Gleam", "Psyshock", "Hyper Voice"] },
    { ability: "Intimidate", item: "Wacan Berry", moves: ["Power Whip", "Temper Flare", "Lash Out", "Aqua Tail"] }
  ] },
  { id: "ct-196", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 24, player: "Spodermees", wins: 0, losses: 1, pokemonIds: [279, 1018, 282, 212, 902, 1013], pokemonNames: ["Pelipper", "Archaludon", "Gardevoir", "Scizor", "Basculegion-M", "Sinistcha"], sets: [
    { ability: "Drizzle", item: "Focus Sash", moves: ["Tailwind", "Weather Ball", "Wide Guard", "Hurricane"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Protect", "Dragon Pulse", "Flash Cannon"] },
    { ability: "Trace", item: "Gardevoirite", moves: ["Hyper Voice", "Psychic", "Protect", "Calm Mind"] },
    { ability: "Technician", item: "Scizorite", moves: ["U-turn", "Bullet Punch", "Close Combat", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Aqua Jet", "Flip Turn", "Last Respects", "Wave Crash"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Trick Room", "Rage Powder", "Life Dew"] }
  ] },
  { id: "ct-197", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 25, player: "Yegorushhka", wins: 0, losses: 1, pokemonIds: [970, 282, 663, 902, 666, 445], pokemonNames: ["Glimmora", "Gardevoir", "Talonflame", "Basculegion-M", "Vivillon", "Garchomp"], sets: [
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Spiky Shield"] },
    { ability: "Trace", item: "Gardevoirite", moves: ["Hyper Voice", "Psyshock", "Trick Room", "Protect"] },
    { ability: "Gale Wings", item: "no item", moves: ["Acrobatics", "Flare Blitz", "Tailwind", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Protect"] },
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Hurricane", "Sleep Powder", "Rage Powder", "Tailwind"] },
    { ability: "Rough Skin", item: "Haban Berry", moves: ["Earthquake", "Scale Shot", "Rock Tomb", "Protect"] }
  ] },
  { id: "ct-198", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 26, player: "Murasakibara", wins: 0, losses: 1, pokemonIds: [445, 670, 1013, 6, 727, 681], pokemonNames: ["Garchomp", "Floette", "Sinistcha", "Charizard", "Incineroar", "Aegislash"], sets: [
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Dragon Claw", "Earthquake", "Stomping Tantrum", "Rock Slide"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Solar Beam", "Weather Ball"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Will-O-Wisp", "Parting Shot", "Fake Out"] },
    { ability: "Stance Change", item: "Focus Sash", moves: ["Poltergeist", "Shadow Sneak", "Close Combat", "Wide Guard"] }
  ] },
  { id: "ct-199", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 27, player: "CaioWisGamer", wins: 0, losses: 2, pokemonIds: [6, 445, 983, 902, 700, 727], pokemonNames: ["Charizard", "Garchomp", "Kingambit", "Basculegion-M", "Sylveon", "Incineroar"], sets: [
    { ability: "Drought", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Air Slash", "Protect"] },
    { ability: "Rough Skin", item: "Garchompite", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Flip Turn"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Shadow Ball", "Psyshock", "Mystical Fire"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Parting Shot", "Flare Blitz", "Taunt"] }
  ] },
  { id: "ct-200", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 28, player: "Humi", wins: 0, losses: 1, pokemonIds: [279, 1018, 149, 212, 727, 902], pokemonNames: ["Pelipper", "Archaludon", "Dragonite", "Scizor", "Incineroar", "Basculegion-M"], sets: [
    { ability: "Drizzle", item: "Focus Sash", moves: ["Wide Guard", "Weather Ball", "Hurricane", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Protect", "Draco Meteor", "Flash Cannon"], teraType: "Steel" },
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Hurricane", "Dragon Pulse", "Ice Beam", "Protect"], teraType: "Dragon" },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "Swords Dance", "Protect"] },
    { ability: "Intimidate", item: "Black Glasses", moves: ["Close Combat", "Parting Shot", "Throat Chop", "Fake Out"], teraType: "Fire" },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Flip Turn", "Last Respects", "Aqua Jet"], teraType: "Water" }
  ] },
  { id: "ct-201", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 29, player: "Katiclus", wins: 0, losses: 2, pokemonIds: [130, 903, 445, 663, 10012, 681], pokemonNames: ["Gyarados", "Sneasler", "Garchomp", "Talonflame", "Mow Rotom", "Aegislash"], sets: [
    { ability: "Intimidate", item: "Gyaradosite", moves: ["Waterfall", "Crunch", "Dragon Dance", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Dragon Claw", "Stomping Tantrum", "Earthquake", "Rock Slide"] },
    { ability: "Gale Wings", item: "no item", moves: ["Acrobatics", "Flare Blitz", "Tailwind", "Protect"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Thunderbolt", "Leaf Storm", "Volt Switch", "Protect"] },
    { ability: "Stance Change", item: "Spell Tag", moves: ["Shadow Ball", "Flash Cannon", "Wide Guard", "King's Shield"] }
  ] },
  { id: "ct-202", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 30, player: "Ban3x", wins: 0, losses: 1, pokemonIds: [302, 670, 727, 10009, 983, 445], pokemonNames: ["Sableye", "Floette", "Incineroar", "Wash Rotom", "Kingambit", "Garchomp"], sets: [
    { ability: "Prankster", item: "Roseli Berry", moves: ["Reflect", "Encore", "Will-O-Wisp", "Disable"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Parting Shot", "Flare Blitz", "Throat Chop"] },
    { ability: "Levitate", item: "Leftovers", moves: ["Hydro Pump", "Thunderbolt", "Electroweb", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Iron Head", "Kowtow Cleave", "Protect"] },
    { ability: "Rough Skin", item: "Focus Sash", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"] }
  ] },
  { id: "ct-203", tournament: "Pokemon Dominicana - OPEN Champions League #1", players: 31, placement: 31, player: "SteStu", wins: 0, losses: 2, pokemonIds: [6, 925, 9, 1013, 903, 727], pokemonNames: ["Charizard", "Maushold", "Blastoise", "Sinistcha", "Sneasler", "Incineroar"], sets: [
    { ability: "Blaze", item: "Charizardite X", moves: ["Dragon Claw", "Dragon Dance", "Flare Blitz", "Protect"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Feint", "Helping Hand", "Follow Me", "Protect"] },
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Water Spout", "Dark Pulse", "Shell Smash", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Life Dew"] },
    { ability: "Poison Touch", item: "Focus Sash", moves: ["Fake Out", "Close Combat", "Dire Claw", "Coaching"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Fake Out", "Roar", "Parting Shot"] }
  ] },
  { id: "ct-204", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 1, player: "LenVGC", wins: 9, losses: 2, pokemonIds: [94, 727, 1013, 186, 302, 1018], pokemonNames: ["Gengar", "Incineroar", "Sinistcha", "Politoed", "Sableye", "Archaludon"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Shadow Ball", "Disable", "Perish Song", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Fake Out", "Throat Chop", "Parting Shot", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Encore", "Perish Song", "Protect"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Will-O-Wisp", "Reflect", "Light Screen", "Rain Dance"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Dragon Pulse", "Flash Cannon", "Electro Shot", "Protect"] }
  ] },
  { id: "ct-205", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 2, player: "Pendraggon26", wins: 10, losses: 1, pokemonIds: [983, 903, 655, 36, 784, 902], pokemonNames: ["Kingambit", "Sneasler", "Delphox", "Clefable", "Kommo-o", "Basculegion-M"], sets: [
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Substitute", "Protect"] },
    { ability: "Unaware", item: "Sitrus Berry", moves: ["Follow Me", "Helping Hand", "Moonblast", "Protect"] },
    { ability: "Soundproof", item: "Dragon Fang", moves: ["Clanging Scales", "Clangorous Soul", "Aura Sphere", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Flip Turn", "Aqua Jet", "Last Respects"] }
  ] },
  { id: "ct-206", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 3, player: "Gabuu", wins: 8, losses: 2, pokemonIds: [94, 1018, 186, 727, 1013, 478], pokemonNames: ["Gengar", "Archaludon", "Politoed", "Incineroar", "Sinistcha", "Froslass"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Protect", "Shadow Ball", "Sludge Bomb", "Perish Song"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Flash Cannon", "Dragon Pulse", "Electro Shot", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Protect", "Weather Ball", "Perish Song", "Hypnosis"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Flare Blitz", "Parting Shot", "Fake Out", "Protect"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Protect", "Matcha Gotcha", "Rage Powder", "Trick Room"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Protect", "Blizzard", "Aurora Veil", "Rain Dance"] }
  ] },
  { id: "ct-207", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 4, player: "Shishio_Ax", wins: 8, losses: 2, pokemonIds: [6, 670, 142, 445, 903, 983], pokemonNames: ["Charizard", "Floette", "Aerodactyl", "Garchomp", "Sneasler", "Kingambit"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Dragon Claw", "Earthquake", "Stomping Tantrum", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] }
  ] },
  { id: "ct-208", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 5, player: "CloudDino", wins: 7, losses: 2, pokemonIds: [18, 3, 727, 902, 149, 700], pokemonNames: ["Pidgeot", "Venusaur", "Incineroar", "Basculegion-M", "Dragonite", "Sylveon"], sets: [
    { ability: "Keen Eye", item: "Pidgeotite", moves: ["Hurricane", "Heat Wave", "Tailwind", "Protect"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Giga Drain", "Sludge Bomb", "Earth Power", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Multiscale", item: "Dragon Fang", moves: ["Dragon Claw", "Low Kick", "Extreme Speed", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Quick Attack", "Yawn", "Protect"] }
  ] },
  { id: "ct-209", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 6, player: "Lelebrg", wins: 6, losses: 3, pokemonIds: [149, 670, 727, 903, 983, 1013], pokemonNames: ["Dragonite", "Floette", "Incineroar", "Sneasler", "Kingambit", "Sinistcha"], sets: [
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Dragon Pulse", "Heat Wave", "Extreme Speed", "Tailwind"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Poison Touch", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] }
  ] },
  { id: "ct-210", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 7, player: "iGNe", wins: 6, losses: 3, pokemonIds: [6, 547, 983, 902, 445, 970], pokemonNames: ["Charizard", "Whimsicott", "Kingambit", "Basculegion-M", "Garchomp", "Glimmora"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Spiky Shield"] }
  ] },
  { id: "ct-211", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 8, player: "Brayz", wins: 6, losses: 3, pokemonIds: [6, 670, 547, 970, 445, 983], pokemonNames: ["Charizard", "Floette", "Whimsicott", "Glimmora", "Garchomp", "Kingambit"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Weather Ball", "Heat Wave", "Solar Beam", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Moonblast", "Light of Ruin", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Rock Tomb", "Dragon Claw", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Iron Head", "Sucker Punch", "Kowtow Cleave", "Protect"] }
  ] },
  { id: "ct-212", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 9, player: "JohnMalone", wins: 6, losses: 2, pokemonIds: [115, 547, 983, 970, 6, 475], pokemonNames: ["Kangaskhan", "Whimsicott", "Kingambit", "Glimmora", "Charizard", "Gallade"], sets: [
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Fake Out", "Double-Edge", "Ice Punch", "Low Kick"] },
    { ability: "Prankster", item: "Sitrus Berry", moves: ["Protect", "Tailwind", "Moonblast", "Encore"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Protect", "Kowtow Cleave", "Iron Head", "Sucker Punch"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Spiky Shield", "Power Gem", "Sludge Bomb", "Earth Power"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Weather Ball", "Solar Beam"] },
    { ability: "Sharpness", item: "Choice Scarf", moves: ["Sacred Sword", "Psycho Cut", "Leaf Blade", "Rock Tomb"] }
  ] },
  { id: "ct-213", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 10, player: "Gouillou", wins: 6, losses: 2, pokemonIds: [142, 700, 727, 902, 784, 3], pokemonNames: ["Aerodactyl", "Sylveon", "Incineroar", "Basculegion-M", "Kommo-o", "Venusaur"], sets: [
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Dual Wingbeat", "Rock Slide", "Tailwind", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Detect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Aura Sphere", "Protect", "Clangorous Soul"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Sludge Bomb", "Giga Drain", "Earth Power", "Protect"] }
  ] },
  { id: "ct-214", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 11, player: "Silo", wins: 6, losses: 2, pokemonIds: [6, 445, 983, 700, 142, 902], pokemonNames: ["Charizard", "Garchomp", "Kingambit", "Sylveon", "Aerodactyl", "Basculegion-M"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Tomb", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Detect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Wide Guard"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Waterfall", "Aqua Jet", "Last Respects", "Protect"] }
  ] },
  { id: "ct-215", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 12, player: "aberen", wins: 5, losses: 3, pokemonIds: [666, 670, 925, 1013, 655, 727], pokemonNames: ["Vivillon", "Floette", "Maushold", "Sinistcha", "Delphox", "Incineroar"], sets: [
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Rage Powder", "Hurricane", "Sleep Powder", "Pollen Puff"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Follow Me", "Super Fang", "Feint", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Rage Powder", "Matcha Gotcha", "Life Dew", "Protect"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Nasty Plot", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Parting Shot", "Throat Chop", "Flare Blitz", "Fake Out"] }
  ] },
  { id: "ct-216", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 13, player: "TheChoiceoffreedom", wins: 5, losses: 3, pokemonIds: [727, 903, 279, 212, 1018, 902], pokemonNames: ["Incineroar", "Sneasler", "Pelipper", "Scizor", "Archaludon", "Basculegion-M"], sets: [
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Weather Ball", "Hurricane", "Tailwind", "Protect"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "Swords Dance", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Flash Cannon", "Dragon Pulse", "Electro Shot", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] }
  ] },
  { id: "ct-217", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 14, player: "Diego G", wins: 5, losses: 3, pokemonIds: [970, 10103, 445, 727, 10009, 681], pokemonNames: ["Glimmora", "Alolan Ninetales", "Garchomp", "Incineroar", "Wash Rotom", "Aegislash"], sets: [
    { ability: "Adaptability", item: "Glimmoranite", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Spiky Shield"] },
    { ability: "Snow Warning", item: "Choice Scarf", moves: ["Blizzard", "Freeze-Dry", "Moonblast", "Icy Wind"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Dragon Claw", "Stomping Tantrum", "Rock Slide", "Protect"] },
    { ability: "Intimidate", item: "Shuca Berry", moves: ["Fake Out", "Flare Blitz", "Parting Shot", "Throat Chop"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Hydro Pump", "Thunderbolt", "Will-O-Wisp", "Protect"] },
    { ability: "Stance Change", item: "Colbur Berry", moves: ["Poltergeist", "Sacred Sword", "Shadow Sneak", "King's Shield"] }
  ] },
  { id: "ct-218", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 15, player: "Fr33z", wins: 5, losses: 3, pokemonIds: [670, 142, 902, 445, 983, 6], pokemonNames: ["Floette", "Aerodactyl", "Basculegion-M", "Garchomp", "Kingambit", "Charizard"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Moonblast", "Light of Ruin", "Protect"], teraType: "Fairy" },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Wide Guard", "Tailwind", "Rock Slide", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Aqua Jet", "Last Respects", "Wave Crash", "Flip Turn"] },
    { ability: "Rough Skin", item: "Dragon Fang", moves: ["Scale Shot", "Stomping Tantrum", "Earthquake", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Iron Head"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] }
  ] },
  { id: "ct-219", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 16, player: "RaitoGG", wins: 5, losses: 3, pokemonIds: [6, 970, 547, 445, 902, 983], pokemonNames: ["Charizard", "Glimmora", "Whimsicott", "Garchomp", "Basculegion-M", "Kingambit"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Tailwind", "Encore", "Moonblast", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Aqua Jet", "Wave Crash", "Last Respects", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Low Kick", "Protect"] }
  ] },
  { id: "ct-220", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 17, player: "MarvVGC", wins: 5, losses: 2, pokemonIds: [115, 970, 547, 478, 902, 149], pokemonNames: ["Kangaskhan", "Glimmora", "Whimsicott", "Froslass", "Basculegion-M", "Dragonite"], sets: [
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Double-Edge", "Sucker Punch", "Low Kick", "Fake Out"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Spiky Shield"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Disable", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Multiscale", item: "Dragon Fang", moves: ["Dragon Claw", "Extreme Speed", "Low Kick", "Protect"] }
  ] },
  { id: "ct-221", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 18, player: "Steady96", wins: 5, losses: 2, pokemonIds: [302, 445, 212, 1018, 902, 279], pokemonNames: ["Sableye", "Garchomp", "Scizor", "Archaludon", "Basculegion-M", "Pelipper"], sets: [
    { ability: "Prankster", item: "Roseli Berry", moves: ["Light Screen", "Reflect", "Foul Play", "Rain Dance"] },
    { ability: "Rough Skin", item: "Garchompite", moves: ["Rock Slide", "Dragon Claw", "Earthquake", "Protect"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bug Bite", "Bullet Punch", "Swords Dance", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Protect", "Draco Meteor", "Electro Shot", "Aura Sphere"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Flip Turn", "Aqua Jet", "Last Respects"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Tailwind", "Weather Ball", "Hurricane", "Wide Guard"] }
  ] },
  { id: "ct-222", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 19, player: "KrishKabob1", wins: 5, losses: 2, pokemonIds: [154, 248, 445, 10009, 663, 681], pokemonNames: ["Meganium", "Tyranitar", "Garchomp", "Wash Rotom", "Talonflame", "Aegislash"], sets: [
    { ability: "Overgrow", item: "Meganiumite", moves: ["Solar Beam", "Dazzling Gleam", "Weather Ball", "Protect"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Protect", "Low Kick", "Rock Slide", "Crunch"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Protect", "Dragon Claw", "Earthquake", "Rock Slide"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Thunderbolt", "Hydro Pump", "Electroweb", "Volt Switch"] },
    { ability: "Gale Wings", item: "No Item", moves: ["Protect", "Will-O-Wisp", "Acrobatics", "Tailwind"] },
    { ability: "Stance Change", item: "Spell Tag", moves: ["Poltergeist", "Shadow Sneak", "King's Shield", "Iron Head"] }
  ] },
  { id: "ct-223", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 20, player: "AthenaStriveVGC", wins: 4, losses: 3, pokemonIds: [670, 652, 902, 1013, 279, 970], pokemonNames: ["Floette", "Chesnaught", "Basculegion-M", "Sinistcha", "Pelipper", "Glimmora"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Moonblast", "Dazzling Gleam", "Light of Ruin"] },
    { ability: "Bulletproof", item: "Chesnaughtite", moves: ["Spiky Shield", "Wood Hammer", "Body Press", "Iron Defense"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Hospitality", item: "Coba Berry", moves: ["Rage Powder", "Matcha Gotcha", "Life Dew", "Trick Room"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Hurricane", "Tailwind", "Wide Guard"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Spiky Shield", "Power Gem", "Sludge Bomb", "Earth Power"] }
  ] },
  { id: "ct-224", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 21, player: "Dieser10", wins: 4, losses: 3, pokemonIds: [670, 302, 142, 1018, 902, 445], pokemonNames: ["Floette", "Sableye", "Aerodactyl", "Archaludon", "Basculegion-M", "Garchomp"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Calm Mind", "Light of Ruin", "Dazzling Gleam", "Protect"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Rain Dance", "Encore", "Reflect", "Light Screen"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Aura Sphere", "Electro Shot", "Flash Cannon", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Wave Crash", "Protect", "Aqua Jet", "Last Respects"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Scale Shot", "Rock Slide", "Protect"] }
  ] },
  { id: "ct-225", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 22, player: "LigmaSigma67", wins: 4, losses: 3, pokemonIds: [279, 282, 902, 1018, 925, 970], pokemonNames: ["Pelipper", "Gardevoir", "Basculegion-M", "Archaludon", "Maushold", "Glimmora"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Hurricane", "Wide Guard", "Tailwind"] },
    { ability: "Trace", item: "Gardevoirite", moves: ["Hyper Voice", "Trick Room", "Protect", "Psyshock"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Flip Turn", "Wave Crash", "Last Respects", "Aqua Jet"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Follow Me", "Protect", "Rain Dance", "Super Fang"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Spiky Shield", "Power Gem", "Sludge Bomb", "Earth Power"] }
  ] },
  { id: "ct-226", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 23, player: "Jenbibenji", wins: 4, losses: 3, pokemonIds: [6, 149, 547, 700, 445, 983], pokemonNames: ["Charizard", "Dragonite", "Whimsicott", "Sylveon", "Garchomp", "Kingambit"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Protect", "Dragon Pulse", "Flamethrower", "Thunderbolt"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Moonblast", "Quick Attack", "Detect"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Dragon Claw", "Earthquake", "Poison Jab", "Rock Slide"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Low Kick"] }
  ] },
  { id: "ct-227", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 24, player: "Cecil9", wins: 4, losses: 3, pokemonIds: [784, 10103, 727, 1013, 663, 970], pokemonNames: ["Kommo-o", "Alolan Ninetales", "Incineroar", "Sinistcha", "Talonflame", "Glimmora"], sets: [
    { ability: "Soundproof", item: "Leftovers", moves: ["Protect", "Clangorous Soul", "Clanging Scales", "Aura Sphere"] },
    { ability: "Snow Warning", item: "Focus Sash", moves: ["Protect", "Aurora Veil", "Freeze-Dry", "Blizzard"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Fake Out", "Parting Shot", "Throat Chop", "Flare Blitz"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Trick Room", "Rage Powder", "Life Dew", "Matcha Gotcha"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Will-O-Wisp", "Tailwind", "Brave Bird", "Protect"], teraType: "None" },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] }
  ] },
  { id: "ct-228", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 25, player: "gaggamer06", wins: 4, losses: 3, pokemonIds: [727, 227, 279, 1018, 902, 149], pokemonNames: ["Incineroar", "Skarmory", "Pelipper", "Archaludon", "Basculegion-M", "Dragonite"], sets: [
    { ability: "Intimidate", item: "Chople Berry", moves: ["Flare Blitz", "Fake Out", "Parting Shot", "Will-O-Wisp"] },
    { ability: "Weak Armor", item: "Skarmorite", moves: ["Brave Bird", "Iron Head", "Rock Tomb", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Wide Guard", "Tailwind", "Weather Ball", "Hurricane"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Flash Cannon", "Aura Sphere", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Hurricane", "Dragon Pulse", "Tailwind", "Protect"] }
  ] },
  { id: "ct-229", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 26, player: "Everett98", wins: 4, losses: 1, pokemonIds: [903, 478, 142, 10009, 983, 445], pokemonNames: ["Sneasler", "Froslass", "Aerodactyl", "Wash Rotom", "Kingambit", "Garchomp"], sets: [
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Hydro Pump", "Thunderbolt", "Will-O-Wisp", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] },
    { ability: "Rough Skin", item: "Focus Sash", moves: ["Earthquake", "Dragon Claw", "Rock Tomb", "Poison Jab"] }
  ] },
  { id: "ct-230", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 27, player: "UtenteVGC", wins: 4, losses: 3, pokemonIds: [983, 547, 903, 478, 900, 902], pokemonNames: ["Kingambit", "Whimsicott", "Sneasler", "Froslass", "Kleavor", "Basculegion-M"], sets: [
    { ability: "Defiant", item: "Black Glasses", moves: ["Swords Dance", "Protect", "Kowtow Cleave", "Sucker Punch"] },
    { ability: "Prankster", item: "Coba Berry", moves: ["Encore", "Tailwind", "Moonblast", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Stone Axe", "Close Combat", "Feint", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Aqua Jet", "Wave Crash", "Flip Turn"] }
  ] },
  { id: "ct-231", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 28, player: "Mentalsyndrome", wins: 4, losses: 3, pokemonIds: [115, 10341, 306, 9, 442, 983], pokemonNames: ["Kangaskhan", "Hisuian Decidueye", "Aggron", "Blastoise", "Spiritomb", "Kingambit"], sets: [
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Fake Out", "Thunder Punch", "Double-Edge", "Sucker Punch"] },
    { ability: "Scrappy", item: "Scope Lens", moves: ["Leaf Blade", "Triple Arrows", "Tailwind", "Protect"] },
    { ability: "Heavy Metal", item: "Chople Berry", moves: ["Heavy Slam", "Protect", "Body Press", "Rock Slide"] },
    { ability: "Torrent", item: "Blastoisinite", moves: ["Protect", "Water Pulse", "Aura Sphere", "Water Spout"] },
    { ability: "Pressure", item: "Roseli Berry", moves: ["Rain Dance", "Psychic", "Will-O-Wisp", "Trick Room"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Low Kick", "Protect"] }
  ] },
  { id: "ct-232", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 29, player: "TocapelotasM", wins: 4, losses: 3, pokemonIds: [130, 700, 903, 212, 1013, 609], pokemonNames: ["Gyarados", "Sylveon", "Sneasler", "Scizor", "Sinistcha", "Chandelure"], sets: [
    { ability: "Intimidate", item: "Gyaradosite", moves: ["Waterfall", "Crunch", "Dragon Dance", "Protect"] },
    { ability: "Pixilate", item: "Leftovers", moves: ["Hyper Voice", "Moonblast", "Calm Mind", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Coaching"] },
    { ability: "Technician", item: "Metal Coat", moves: ["Bullet Punch", "Bug Bite", "Swords Dance", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Flash Fire", item: "Focus Sash", moves: ["Heat Wave", "Shadow Ball", "Taunt", "Protect"] }
  ] },
  { id: "ct-233", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 30, player: "Cryas", wins: 4, losses: 3, pokemonIds: [212, 902, 1018, 903, 279, 149], pokemonNames: ["Scizor", "Basculegion-M", "Archaludon", "Sneasler", "Pelipper", "Dragonite"], sets: [
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "Swords Dance", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Aqua Jet", "Flip Turn", "Wave Crash", "Last Respects"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Dragon Pulse", "Electro Shot", "Flash Cannon", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Tailwind", "Wide Guard", "Weather Ball"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Draco Meteor", "Flamethrower", "Tailwind", "Protect"] }
  ] },
  { id: "ct-234", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 31, player: "strifesada", wins: 4, losses: 3, pokemonIds: [478, 903, 983, 10008, 902, 445], pokemonNames: ["Froslass", "Sneasler", "Kingambit", "Heat Rotom", "Basculegion-M", "Garchomp"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Protect", "Shadow Ball", "Aurora Veil", "Blizzard"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Kowtow Cleave", "Sucker Punch", "Low Kick"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Will-O-Wisp", "Overheat", "Volt Switch", "Electroweb"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Protect", "Aqua Jet", "Liquidation", "Last Respects"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Protect", "Swords Dance", "Dragon Claw"] }
  ] },
  { id: "ct-235", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 32, player: "Tcha", wins: 4, losses: 3, pokemonIds: [983, 478, 900, 547, 903, 902], pokemonNames: ["Kingambit", "Froslass", "Kleavor", "Whimsicott", "Sneasler", "Basculegion-M"], sets: [
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Aurora Veil", "Shadow Ball", "Protect"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Stone Axe", "Close Combat", "Protect", "X-Scissor"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Encore", "Protect", "Moonblast", "Tailwind"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Fake Out", "Dire Claw", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Wave Crash", "Flip Turn", "Aqua Jet"] }
  ] },
  { id: "ct-236", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 33, player: "Abe", wins: 4, losses: 3, pokemonIds: [700, 142, 445, 902, 6, 981], pokemonNames: ["Sylveon", "Aerodactyl", "Garchomp", "Basculegion-M", "Charizard", "Farigiraf"], sets: [
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Dual Wingbeat", "Ice Fang", "Tailwind", "Rock Slide"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Earthquake", "Protect", "Rock Slide", "Dragon Claw"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Aqua Jet", "Liquidation", "Protect", "Last Respects"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Protect", "Weather Ball", "Solar Beam"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Hyper Voice", "Helping Hand", "Psychic"] }
  ] },
  { id: "ct-237", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 34, player: "DigioVGC", wins: 3, losses: 2, pokemonIds: [670, 547, 970, 902, 445, 6], pokemonNames: ["Floette", "Whimsicott", "Glimmora", "Basculegion-M", "Garchomp", "Charizard"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Light of Ruin", "Moonblast", "Dazzling Gleam", "Protect"] },
    { ability: "Prankster", item: "Kebia Berry", moves: ["Moonblast", "Encore", "Tailwind", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Poison Jab", "Protect"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] }
  ] },
  { id: "ct-238", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 35, player: "DaviDXrt", wins: 3, losses: 4, pokemonIds: [279, 1018, 902, 212, 142, 3], pokemonNames: ["Pelipper", "Archaludon", "Basculegion-M", "Scizor", "Aerodactyl", "Venusaur"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Wide Guard", "Tailwind", "Hurricane", "Weather Ball"] },
    { ability: "Stamina", item: "Quick Claw", moves: ["Protect", "Electro Shot", "Draco Meteor", "Flash Cannon"] },
    { ability: "Swift Swim", item: "Mystic Water", moves: ["Protect", "Last Respects", "Psychic Fangs", "Wave Crash"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Aerial Ace", "Close Combat", "Swords Dance"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Protect", "Tailwind", "Rock Slide", "Rain Dance"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Protect", "Energy Ball", "Sludge Bomb", "Earth Power"] }
  ] },
  { id: "ct-239", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 36, player: "Luca", wins: 3, losses: 4, pokemonIds: [547, 970, 6, 445, 902, 983], pokemonNames: ["Whimsicott", "Glimmora", "Charizard", "Garchomp", "Basculegion-M", "Kingambit"], sets: [
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Earth Power", "Sludge Bomb", "Spiky Shield"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] }
  ] },
  { id: "ct-240", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 37, player: "OTK", wins: 3, losses: 3, pokemonIds: [279, 902, 727, 3, 1018, 149], pokemonNames: ["Pelipper", "Basculegion-M", "Incineroar", "Venusaur", "Archaludon", "Dragonite"], sets: [
    { ability: "Drizzle", item: "Focus Sash", moves: ["Tailwind", "Hurricane", "Weather Ball", "Wide Guard"] },
    { ability: "Swift Swim", item: "Mystic Water", moves: ["Aqua Jet", "Protect", "Wave Crash", "Last Respects"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Parting Shot", "Flare Blitz", "Darkest Lariat"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Giga Drain", "Sludge Bomb", "Earth Power", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Aura Sphere", "Dragon Pulse", "Flash Cannon"] },
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Dragon Pulse", "Hurricane", "Extreme Speed", "Protect"] }
  ] },
  { id: "ct-241", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 38, player: "Gabb", wins: 3, losses: 3, pokemonIds: [547, 970, 6, 445, 902, 983], pokemonNames: ["Whimsicott", "Glimmora", "Charizard", "Garchomp", "Basculegion-M", "Kingambit"], sets: [
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Earth Power", "Sludge Bomb", "Spiky Shield"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] }
  ] },
  { id: "ct-242", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 39, player: "Yukihiro_SnM", wins: 3, losses: 3, pokemonIds: [282, 925, 663, 445, 983, 902], pokemonNames: ["Gardevoir", "Maushold", "Talonflame", "Garchomp", "Kingambit", "Basculegion-M"], sets: [
    { ability: "Trace", item: "Gardevoirite", moves: ["Hyper Voice", "Psyshock", "Trick Room", "Protect"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Super Fang", "Follow Me", "Protect", "Encore"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Brave Bird", "Tailwind", "Flare Blitz", "Protect"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Earthquake", "Stomping Tantrum", "Rock Slide", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Low Kick"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-243", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 40, player: "Dorked", wins: 3, losses: 4, pokemonIds: [6, 903, 983, 1013, 700, 727], pokemonNames: ["Charizard", "Sneasler", "Kingambit", "Sinistcha", "Sylveon", "Incineroar"], sets: [
    { ability: "Blaze", item: "Charizardite X", moves: ["Flare Blitz", "Breaking Swipe", "Dragon Dance", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Fake Out", "Close Combat", "Coaching"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Sucker Punch", "Iron Head", "Kowtow Cleave"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Trick Room"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Detect", "Hyper Voice", "Hyper Beam", "Moonblast"] },
    { ability: "Intimidate", item: "Shuca Berry", moves: ["Fake Out", "Throat Chop", "Taunt", "Parting Shot"] }
  ] },
  { id: "ct-244", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 41, player: "bradya12", wins: 3, losses: 4, pokemonIds: [763, 609, 623, 547, 475, 10009], pokemonNames: ["Tsareena", "Chandelure", "Golurk", "Whimsicott", "Gallade", "Wash Rotom"], sets: [
    { ability: "Queenly Majesty", item: "Miracle Seed", moves: ["Protect", "Trop Kick", "Triple Axel", "Taunt"] },
    { ability: "Flash Fire", item: "Chandelurite", moves: ["Protect", "Heat Wave", "Shadow Ball", "Flamethrower"] },
    { ability: "Iron Fist", item: "Golurkite", moves: ["Protect", "Poltergeist", "Headlong Rush", "Ice Punch"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Protect", "Tailwind", "Moonblast", "Trick Room"] },
    { ability: "Sharpness", item: "White Herb", moves: ["Protect", "Sacred Sword", "Psycho Cut", "Leaf Blade"] },
    { ability: "Levitate", item: "Magnet", moves: ["Volt Switch", "Protect", "Thunderbolt", "Hydro Pump"] }
  ] },
  { id: "ct-245", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 42, player: "LunalitVGC", wins: 3, losses: 2, pokemonIds: [510, 563, 609, 547, 635, 534], pokemonNames: ["Liepard", "Cofagrigus", "Chandelure", "Whimsicott", "Hydreigon", "Conkeldurr"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["U-turn", "Fake Out", "Encore", "Thunder Wave"] },
    { ability: "Mummy", item: "Mental Herb", moves: ["Shadow Ball", "Trick Room", "Will-O-Wisp", "Protect"] },
    { ability: "Flash Fire", item: "Chandelurite", moves: ["Heat Wave", "Shadow Ball", "Trick Room", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Light Screen", "Protect"] },
    { ability: "Levitate", item: "Chople Berry", moves: ["Tailwind", "Dark Pulse", "Earth Power", "Protect"] },
    { ability: "Sheer Force", item: "Roseli Berry", moves: ["Thunder Punch", "Mach Punch", "Poison Jab", "Wide Guard"] }
  ] },
  { id: "ct-246", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 43, player: "Tsubaki_980", wins: 3, losses: 4, pokemonIds: [248, 530, 727, 1013, 10009, 142], pokemonNames: ["Tyranitar", "Excadrill", "Incineroar", "Sinistcha", "Wash Rotom", "Aerodactyl"], sets: [
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Dragon Dance", "Protect"] },
    { ability: "Sand Rush", item: "Focus Sash", moves: ["Earthquake", "High Horsepower", "Iron Head", "Protect"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Fake Out", "Throat Chop", "Parting Shot", "Flare Blitz"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Shadow Ball", "Rage Powder", "Life Dew"] },
    { ability: "Levitate", item: "Magnet", moves: ["Hydro Pump", "Volt Switch", "Electroweb", "Protect"] },
    { ability: "Unnerve", item: "Leftovers", moves: ["Rock Slide", "Protect", "Tailwind", "Dual Wingbeat"] }
  ] },
  { id: "ct-247", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 44, player: "KST VGC ", wins: 3, losses: 4, pokemonIds: [6, 903, 727, 1013, 670, 445], pokemonNames: ["Charizard", "Sneasler", "Incineroar", "Sinistcha", "Floette", "Garchomp"], sets: [
    { ability: "Blaze", item: "Charizardite X", moves: ["Flare Blitz", "Dragon Claw", "Dragon Dance", "Protect"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Coaching"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Life Dew"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Dragon Claw", "Rock Slide", "Earthquake", "Protect"] }
  ] },
  { id: "ct-248", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 45, player: "glitterckvamp", wins: 3, losses: 3, pokemonIds: [700, 903, 952, 902, 227, 445], pokemonNames: ["Sylveon", "Sneasler", "Scovillain", "Basculegion-M", "Skarmory", "Garchomp"], sets: [
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Detect", "Quick Attack", "Hyper Beam"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Protect", "Leech Seed", "Flamethrower", "Rage Powder"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Flip Turn", "Protect", "Last Respects", "Aqua Jet"] },
    { ability: "Sturdy", item: "Skarmorite", moves: ["Protect", "Rock Slide", "Brave Bird", "Iron Head"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Scale Shot", "Earthquake", "Stomping Tantrum", "Protect"] }
  ] },
  { id: "ct-249", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 46, player: "PonchoPRed", wins: 3, losses: 3, pokemonIds: [663, 10009, 658, 970, 983, 445], pokemonNames: ["Talonflame", "Wash Rotom", "Greninja", "Glimmora", "Kingambit", "Garchomp"], sets: [
    { ability: "Gale Wings", item: "nothing", moves: ["Acrobatics", "Flare Blitz", "Tailwind", "Protect"] },
    { ability: "Levitate", item: "Magnet", moves: ["Thunderbolt", "Hydro Pump", "Will-O-Wisp", "Protect"] },
    { ability: "Protean", item: "Never-Melt Ice", moves: ["Icy Wind", "Ice Beam", "Water Shuriken", "Protect"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Dragon Claw", "Earthquake", "Swords Dance", "Protect"] }
  ] },
  { id: "ct-250", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 47, player: "Duxlemon", wins: 3, losses: 2, pokemonIds: [547, 970, 6, 445, 902, 983], pokemonNames: ["Whimsicott", "Glimmora", "Charizard", "Garchomp", "Basculegion-M", "Kingambit"], sets: [
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Earth Power", "Sludge Bomb", "Spiky Shield"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] }
  ] },
  { id: "ct-251", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 48, player: "maxdeesevgc", wins: 2, losses: 2, pokemonIds: [25, 9, 279, 902, 663, 1018], pokemonNames: ["Pikachu", "Blastoise", "Pelipper", "Basculegion-M", "Talonflame", "Archaludon"], sets: [
    { ability: "Lightning Rod", item: "Light Ball", moves: ["Fake Out", "Thunder", "Alluring Voice", "Protect"] },
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Water Spout", "Aura Sphere", "Dark Pulse", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Weather Ball", "Wide Guard", "Tailwind"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Dual Wingbeat", "Tailwind", "Rain Dance", "Quick Guard"] },
    { ability: "Stamina", item: "Sitrus Berry", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] }
  ] },
  { id: "ct-252", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 49, player: "FarigiBoy", wins: 2, losses: 2, pokemonIds: [655, 445, 10009, 1013, 903, 983], pokemonNames: ["Delphox", "Garchomp", "Wash Rotom", "Sinistcha", "Sneasler", "Kingambit"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Encore", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Electroweb", "Volt Switch", "Hydro Pump", "Will-O-Wisp"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] }
  ] },
  { id: "ct-253", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 50, player: "qwertzu7002", wins: 2, losses: 3, pokemonIds: [10009, 983, 445, 478, 142, 903], pokemonNames: ["Wash Rotom", "Kingambit", "Garchomp", "Froslass", "Aerodactyl", "Sneasler"], sets: [
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Thunderbolt", "Hydro Pump", "Will-O-Wisp", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Rough Skin", item: "Focus Sash", moves: ["Earthquake", "Dragon Claw", "Poison Jab", "Rock Tomb"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] }
  ] },
  { id: "ct-254", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 51, player: "SilverMac", wins: 2, losses: 2, pokemonIds: [670, 59, 1013, 983, 115, 10009], pokemonNames: ["Floette", "Arcanine", "Sinistcha", "Kingambit", "Kangaskhan", "Wash Rotom"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Calm Mind", "Dazzling Gleam", "Moonblast"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Snarl", "Howl", "Flare Blitz", "Extreme Speed"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Rage Powder", "Matcha Gotcha", "Trick Room", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Protect", "Swords Dance", "Sucker Punch", "Kowtow Cleave"] },
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Fake Out", "Sucker Punch", "Double-Edge", "Drain Punch"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Volt Switch", "Electroweb", "Will-O-Wisp", "Hydro Pump"] }
  ] },
  { id: "ct-255", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 52, player: "Ruu 死", wins: 2, losses: 2, pokemonIds: [478, 1018, 186, 956, 763, 952], pokemonNames: ["Froslass", "Archaludon", "Politoed", "Espathra", "Tsareena", "Scovillain"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Flash Cannon", "Electro Shot", "Aura Sphere", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Ice Beam", "Rain Dance", "Psych Up"] },
    { ability: "Speed Boost", item: "Colbur Berry", moves: ["Lumina Crash", "Calm Mind", "Baton Pass", "Protect"] },
    { ability: "Queenly Majesty", item: "Focus Sash", moves: ["Trop Kick", "Low Kick", "Triple Axel", "Protect"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Overheat", "Giga Drain", "Rage Powder", "Protect"] }
  ] },
  { id: "ct-256", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 53, player: "MarettaSK", wins: 2, losses: 3, pokemonIds: [752, 981, 727, 448, 445, 10103], pokemonNames: ["Araquanid", "Farigiraf", "Incineroar", "Lucario", "Garchomp", "Alolan Ninetales"], sets: [
    { ability: "Water Bubble", item: "Mystic Water", moves: ["Liquidation", "Wide Guard", "Leech Life", "Protect"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Psychic", "Rain Dance", "Helping Hand"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Inner Focus", item: "Lucarionite", moves: ["Vacuum Wave", "Flash Cannon", "Aura Sphere", "Protect"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Rock Slide", "Stomping Tantrum", "Earthquake", "Protect"] },
    { ability: "Snow Warning", item: "Focus Sash", moves: ["Blizzard", "Moonblast", "Protect", "Aurora Veil"] }
  ] },
  { id: "ct-257", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 54, player: "Zio_Gelato", wins: 2, losses: 3, pokemonIds: [6, 727, 903, 670, 1013, 983], pokemonNames: ["Charizard", "Incineroar", "Sneasler", "Floette", "Sinistcha", "Kingambit"], sets: [
    { ability: "Blaze", item: "Charizardite X", moves: ["Protect", "Dragon Claw", "Dragon Dance", "Flare Blitz"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Parting Shot", "Roar", "Flare Blitz", "Fake Out"] },
    { ability: "Unburden", item: "White Herb", moves: ["Coaching", "Fake Out", "Close Combat", "Taunt"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Calm Mind", "Dazzling Gleam", "Draining Kiss"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Trick Room", "Rage Powder", "Protect"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] }
  ] },
  { id: "ct-258", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 55, player: "xBillbo", wins: 2, losses: 2, pokemonIds: [983, 10009, 282, 472, 248, 952], pokemonNames: ["Kingambit", "Wash Rotom", "Gardevoir", "Gliscor", "Tyranitar", "Scovillain"], sets: [
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Protect", "Sucker Punch", "Iron Head"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Thunderbolt", "Volt Switch", "Trick", "Hydro Pump"] },
    { ability: "Telepathy", item: "Gardevoirite", moves: ["Hyper Voice", "Protect", "Psychic", "Trick Room"] },
    { ability: "Sand Veil", item: "Bright Powder", moves: ["Dual Wingbeat", "Earthquake", "Protect", "Tailwind"] },
    { ability: "Sand Stream", item: "Focus Sash", moves: ["Knock Off", "Rock Slide", "Protect", "Low Kick"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Giga Drain", "Flamethrower", "Protect", "Rage Powder"] }
  ] },
  { id: "ct-259", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 56, player: "Nudisto", wins: 2, losses: 4, pokemonIds: [700, 59, 1013, 983, 903, 10009], pokemonNames: ["Sylveon", "Arcanine", "Sinistcha", "Kingambit", "Sneasler", "Wash Rotom"], sets: [
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Dazzling Gleam", "Hyper Beam", "Calm Mind", "Protect"] },
    { ability: "Flash Fire", item: "Sitrus Berry", moves: ["Protect", "Howl", "Flare Blitz", "Extreme Speed"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Rage Powder", "Matcha Gotcha", "Trick Room", "Life Dew"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Protect", "Swords Dance", "Sucker Punch", "Kowtow Cleave"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Fake Out", "Close Combat", "Dire Claw", "Taunt"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Volt Switch", "Electroweb", "Will-O-Wisp", "Hydro Pump"] }
  ] },
  { id: "ct-260", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 57, player: "Exonarf", wins: 2, losses: 5, pokemonIds: [478, 900, 983, 902, 903, 547], pokemonNames: ["Froslass", "Kleavor", "Kingambit", "Basculegion-M", "Sneasler", "Whimsicott"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Close Combat", "Protect", "Stone Axe", "X-Scissor"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Swords Dance", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Aqua Jet", "Wave Crash", "Flip Turn", "Last Respects"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Fake Out", "Dire Claw", "Protect"] },
    { ability: "Prankster", item: "Coba Berry", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] }
  ] },
  { id: "ct-261", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 58, player: "PronoiaVGC", wins: 2, losses: 3, pokemonIds: [142, 700, 727, 902, 784, 3], pokemonNames: ["Aerodactyl", "Sylveon", "Incineroar", "Basculegion-M", "Kommo-o", "Venusaur"], sets: [
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Protect", "Dual Wingbeat", "Tailwind"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Throat Chop", "Flare Blitz", "Parting Shot", "Fake Out"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Last Respects", "Liquidation", "Protect", "Aqua Jet"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Protect", "Clangorous Soul", "Clanging Scales", "Aura Sphere"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Protect", "Earth Power", "Sludge Bomb", "Giga Drain"] }
  ] },
  { id: "ct-262", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 59, player: "ItsSushiii", wins: 2, losses: 2, pokemonIds: [530, 10009, 248, 727, 3, 981], pokemonNames: ["Excadrill", "Wash Rotom", "Tyranitar", "Incineroar", "Venusaur", "Farigiraf"], sets: [
    { ability: "Sand Rush", item: "Focus Sash", moves: ["Iron Head", "High Horsepower", "Rock Slide", "Protect"] },
    { ability: "Levitate", item: "Magnet", moves: ["Thunderbolt", "Hydro Pump", "Will-O-Wisp", "Volt Switch"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Ice Punch", "Protect"] },
    { ability: "Intimidate", item: "Shuca Berry", moves: ["Parting Shot", "Darkest Lariat", "Flare Blitz", "Fake Out"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Giga Drain", "Sludge Bomb", "Earth Power", "Protect"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Hyper Voice", "Psychic", "Trick Room", "Helping Hand"] }
  ] },
  { id: "ct-263", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 60, player: "Reaza", wins: 2, losses: 2, pokemonIds: [655, 445, 983, 903, 350, 142], pokemonNames: ["Delphox", "Garchomp", "Kingambit", "Sneasler", "Milotic", "Aerodactyl"], sets: [
    { ability: "Magician", item: "Delphoxite", moves: ["Heat Wave", "Protect", "Encore", "Psyshock"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Earthquake", "Rock Slide", "Dragon Claw", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Icy Wind", "Ice Beam", "Recover", "Scald"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Tailwind", "Dual Wingbeat", "Protect", "Rock Slide"] }
  ] },
  { id: "ct-264", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 61, player: "grezVGC", wins: 2, losses: 3, pokemonIds: [670, 547, 681, 6, 445, 10009], pokemonNames: ["Floette", "Whimsicott", "Aegislash", "Charizard", "Garchomp", "Wash Rotom"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Light of Ruin", "Dazzling Gleam", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Stance Change", item: "Focus Sash", moves: ["Poltergeist", "Shadow Sneak", "Close Combat", "King's Shield"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Hydro Pump", "Thunderbolt", "Electroweb", "Volt Switch"] }
  ] },
  { id: "ct-265", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 62, player: "KoraiFanClub", wins: 2, losses: 3, pokemonIds: [248, 445, 903, 823, 1013, 655], pokemonNames: ["Tyranitar", "Garchomp", "Sneasler", "Corviknight", "Sinistcha", "Delphox"], sets: [
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Dragon Dance", "Protect"] },
    { ability: "Sand Veil", item: "Choice Scarf", moves: ["Earthquake", "Dragon Claw", "Stomping Tantrum", "Rock Slide"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Protect", "Close Combat", "Fake Out"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Brave Bird", "Bulk Up", "Roost", "Tailwind"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Rage Powder", "Trick Room", "Matcha Gotcha", "Strength Sap"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Protect", "Psychic", "Encore"] }
  ] },
  { id: "ct-266", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 63, player: "Vossi90", wins: 2, losses: 2, pokemonIds: [902, 279, 302, 1018, 227, 3], pokemonNames: ["Basculegion-M", "Pelipper", "Sableye", "Archaludon", "Skarmory", "Venusaur"], sets: [
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Aqua Jet", "Flip Turn", "Wave Crash"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Hurricane", "Tailwind", "Wide Guard"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Foul Play", "Will-O-Wisp", "Light Screen", "Rain Dance"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Draco Meteor", "Flash Cannon", "Protect"] },
    { ability: "Sturdy", item: "Skarmorite", moves: ["Iron Head", "Brave Bird", "Rock Tomb", "Protect"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Giga Drain", "Sludge Bomb", "Earth Power", "Protect"] }
  ] },
  { id: "ct-267", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 64, player: "Pokepaolo", wins: 2, losses: 2, pokemonIds: [670, 279, 445, 902, 1013, 727], pokemonNames: ["Floette", "Pelipper", "Garchomp", "Basculegion-M", "Sinistcha", "Incineroar"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Draining Kiss", "Moonblast", "Protect", "Calm Mind"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Tailwind", "Weather Ball", "Hurricane", "Wide Guard"] },
    { ability: "Rough Skin", item: "White Herb", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Flip Turn"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Trick Room", "Strength Sap", "Matcha Gotcha", "Rage Powder"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Fake Out", "Will-O-Wisp", "Parting Shot", "Throat Chop"] }
  ] },
  { id: "ct-268", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 65, player: "Professor_J", wins: 2, losses: 3, pokemonIds: [681, 10103, 970, 784, 908, 10008], pokemonNames: ["Aegislash", "Alolan Ninetales", "Glimmora", "Kommo-o", "Meowscarada", "Heat Rotom"], sets: [
    { ability: "Stance Change", item: "Spell Tag", moves: ["Poltergeist", "Wide Guard", "Shadow Sneak", "King's Shield"] },
    { ability: "Snow Warning", item: "Choice Scarf", moves: ["Blizzard", "Ice Beam", "Moonblast", "Icy Wind"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Aura Sphere", "Clangorous Soul", "Protect"] },
    { ability: "Overgrow", item: "Focus Sash", moves: ["Flower Trick", "Knock Off", "Sucker Punch", "Protect"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Overheat", "Thunderbolt", "Electroweb", "Protect"] }
  ] },
  { id: "ct-269", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 66, player: "Flaneurx", wins: 2, losses: 5, pokemonIds: [6, 902, 981, 445, 727, 823], pokemonNames: ["Charizard", "Basculegion-M", "Farigiraf", "Garchomp", "Incineroar", "Corviknight"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Armor Tail", item: "Silk Scarf", moves: ["Imprison", "Hyper Voice", "Psychic Noise", "Trick Room"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Earthquake", "Stomping Tantrum", "Protect", "Rock Slide"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Fake Out", "Throat Chop", "Flare Blitz", "Parting Shot"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Protect", "Body Press", "Brave Bird", "Iron Head"] }
  ] },
  { id: "ct-270", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 67, player: "KingNoahC17", wins: 2, losses: 1, pokemonIds: [609, 10103, 10009, 983, 445, 903], pokemonNames: ["Chandelure", "Alolan Ninetales", "Wash Rotom", "Kingambit", "Garchomp", "Sneasler"], sets: [
    { ability: "Flash Fire", item: "Chandelurite", moves: ["Heat Wave", "Shadow Ball", "Substitute", "Protect"] },
    { ability: "Snow Warning", item: "Focus Sash", moves: ["Blizzard", "Freeze-Dry", "Aurora Veil", "Protect"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Hydro Pump", "Volt Switch", "Electroweb", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Rough Skin", item: "Dragon Fang", moves: ["Scale Shot", "Earthquake", "Stomping Tantrum", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] }
  ] },
  { id: "ct-271", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 68, player: "truktens", wins: 1, losses: 3, pokemonIds: [471, 6199, 130, 784, 780, 937], pokemonNames: ["Glaceon", "Galarian Slowking", "Gyarados", "Kommo-o", "Drampa", "Ceruledge"], sets: [
    { ability: "Snow Cloak", item: "Never-Melt Ice", moves: ["Blizzard", "Freeze-Dry", "Protect", "Alluring Voice"] },
    { ability: "Regenerator", item: "Mental Herb", moves: ["Sludge Wave", "Psychic", "Trick Room", "Chilly Reception"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Dragon Dance", "Thunder Wave", "Waterfall", "Temper Flare"] },
    { ability: "Soundproof", item: "Choice Scarf", moves: ["Flash Cannon", "Aura Sphere", "Flamethrower", "Clanging Scales"] },
    { ability: "Sap Sipper", item: "Drampanite", moves: ["Hyper Voice", "Heat Wave", "Draco Meteor", "Protect"] },
    { ability: "Flash Fire", item: "Focus Sash", moves: ["Protect", "Close Combat", "Poltergeist", "Bitter Blade"] }
  ] },
  { id: "ct-272", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 69, player: "imstone", wins: 1, losses: 2, pokemonIds: [6, 445, 983, 902, 547, 670], pokemonNames: ["Charizard", "Garchomp", "Kingambit", "Basculegion-M", "Whimsicott", "Floette"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Ancient Power", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Last Respects", "Liquidation", "Aqua Jet", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Encore", "Tailwind", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] }
  ] },
  { id: "ct-273", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 70, player: "Davidvillamusic", wins: 1, losses: 3, pokemonIds: [670, 1013, 727, 445, 681, 6], pokemonNames: ["Floette", "Sinistcha", "Incineroar", "Garchomp", "Aegislash", "Charizard"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Calm Mind", "Dazzling Gleam", "Draining Kiss"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Rage Powder", "Matcha Gotcha", "Trick Room", "Protect"] },
    { ability: "Intimidate", item: "Leftovers", moves: ["Parting Shot", "Fake Out", "Flare Blitz", "Helping Hand"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Dragon Claw", "Earthquake", "Stomping Tantrum", "Rock Slide"] },
    { ability: "Stance Change", item: "Focus Sash", moves: ["Wide Guard", "Iron Head", "Shadow Sneak", "Poltergeist"] },
    { ability: "Drought", item: "Charizardite Y", moves: ["Protect", "Weather Ball", "Heat Wave", "Solar Beam"] }
  ] },
  { id: "ct-274", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 71, player: "Shuza1234", wins: 1, losses: 2, pokemonIds: [445, 666, 663, 94, 700, 212], pokemonNames: ["Garchomp", "Vivillon", "Talonflame", "Gengar", "Sylveon", "Scizor"], sets: [
    { ability: "Rough Skin", item: "Haban Berry", moves: ["Earthquake", "Rock Slide", "Dragon Claw", "Protect"] },
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Sleep Powder", "Rage Powder", "Hurricane", "Protect"] },
    { ability: "Gale Wings", item: "Charcoal", moves: ["Brave Bird", "Overheat", "Tailwind", "Protect"] },
    { ability: "Cursed Body", item: "Gengarite", moves: ["Sludge Bomb", "Icy Wind", "Shadow Ball", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Protect"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "Protect", "Knock Off"] }
  ] },
  { id: "ct-275", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 72, player: "FinnzVGC", wins: 1, losses: 1, pokemonIds: [6, 700, 142, 902, 445, 983], pokemonNames: ["Charizard", "Sylveon", "Aerodactyl", "Basculegion-M", "Garchomp", "Kingambit"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Beam", "Hyper Voice", "Quick Attack", "Detect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Wide Guard"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Rock Tomb", "Dragon Claw", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] }
  ] },
  { id: "ct-276", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 73, player: "Watrr", wins: 1, losses: 2, pokemonIds: [666, 1013, 925, 655, 670, 727], pokemonNames: ["Vivillon", "Sinistcha", "Maushold", "Delphox", "Floette", "Incineroar"], sets: [
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Sleep Powder", "Hurricane", "Rage Powder", "Tailwind"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Follow Me", "Super Fang", "Feint", "Protect"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Nasty Plot", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Parting Shot", "Fake Out", "Throat Chop", "Flare Blitz"] }
  ] },
  { id: "ct-277", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 74, player: "Caiekeru", wins: 1, losses: 2, pokemonIds: [1018, 902, 212, 149, 279, 903], pokemonNames: ["Archaludon", "Basculegion-M", "Scizor", "Dragonite", "Pelipper", "Sneasler"], sets: [
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Flip Turn", "Last Respects", "Aqua Jet"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bug Bite", "Bullet Punch", "Swords Dance", "Protect"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Draco Meteor", "Flamethrower", "Tailwind", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Hurricane", "Weather Ball", "Tailwind", "Wide Guard"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Protect", "Close Combat", "Fake Out"] }
  ] },
  { id: "ct-278", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 75, player: "carlos_012", wins: 1, losses: 2, pokemonIds: [547, 6, 902, 900, 445, 981], pokemonNames: ["Whimsicott", "Charizard", "Basculegion-M", "Kleavor", "Garchomp", "Farigiraf"], sets: [
    { ability: "Prankster", item: "Fairy Feather", moves: ["Protect", "Tailwind", "Moonblast", "Encore"] },
    { ability: "Drought", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Solar Beam", "Weather Ball"] },
    { ability: "Adaptability", item: "Colbur Berry", moves: ["Protect", "Wave Crash", "Last Respects", "Aqua Jet"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Protect", "Night Slash", "Stone Axe", "X-Scissor"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Protect", "Dragon Claw", "Earthquake", "Stomping Tantrum"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Protect", "Helping Hand", "Trick Room", "Psychic"] }
  ] },
  { id: "ct-279", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 76, player: "MEGA_Meganium", wins: 1, losses: 3, pokemonIds: [94, 727, 1013, 186, 701, 143], pokemonNames: ["Gengar", "Incineroar", "Sinistcha", "Politoed", "Hawlucha", "Snorlax"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Protect", "Shadow Ball", "Perish Song", "Disable"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Protect", "Fake Out", "Flare Blitz", "Parting Shot"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Protect", "Matcha Gotcha", "Rage Powder", "Trick Room"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Protect", "Weather Ball", "Perish Song", "Encore"] },
    { ability: "Limber", item: "Hawluchanite", moves: ["Detect", "Dual Wingbeat", "Encore", "Entrainment"] },
    { ability: "Thick Fat", item: "Leftovers", moves: ["Protect", "Smack Down", "Fissure", "Stockpile"] }
  ] },
  { id: "ct-280", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 77, player: "SolraK", wins: 1, losses: 2, pokemonIds: [478, 983, 903, 902, 925, 149], pokemonNames: ["Froslass", "Kingambit", "Sneasler", "Basculegion-M", "Maushold", "Dragonite"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Protect", "Blizzard", "Shadow Ball", "Aurora Veil"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Kowtow Cleave", "Sucker Punch", "Low Kick"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Close Combat", "Dire Claw", "Fake Out"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Protect", "Liquidation", "Last Respects", "Aqua Jet"] },
    { ability: "Friend Guard", item: "Sitrus Berry", moves: ["Protect", "Follow Me", "Super Fang", "Taunt"] },
    { ability: "Multiscale", item: "Lum Berry", moves: ["Dragon Claw", "Extreme Speed", "Rock Slide", "Tailwind"] }
  ] },
  { id: "ct-281", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 78, player: "DietDrBobb", wins: 1, losses: 2, pokemonIds: [670, 94, 663, 445, 925, 10009], pokemonNames: ["Floette", "Gengar", "Talonflame", "Garchomp", "Maushold", "Wash Rotom"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Cursed Body", item: "Gengarite", moves: ["Sludge Bomb", "Shadow Ball", "Disable", "Protect"] },
    { ability: "Gale Wings", item: "No Item", moves: ["Acrobatics", "Tailwind", "Protect", "Flare Blitz"] },
    { ability: "Rough Skin", item: "Focus Sash", moves: ["Rock Slide", "Earthquake", "Protect", "Dragon Claw"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Follow Me", "Encore", "Protect", "Follow Me"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Will-O-Wisp", "Thunderbolt", "Hydro Pump", "Volt Switch"] }
  ] },
  { id: "ct-282", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 79, player: "Pedro F", wins: 1, losses: 2, pokemonIds: [478, 903, 902, 983, 445, 143], pokemonNames: ["Froslass", "Sneasler", "Basculegion-M", "Kingambit", "Garchomp", "Snorlax"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Protect", "Blizzard", "Shadow Ball", "Aurora Veil"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Close Combat", "Dire Claw", "Fake Out"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Protect", "Liquidation", "Last Respects", "Aqua Jet"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Low Kick", "Sucker Punch"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Breaking Swipe", "Stomping Tantrum", "Stealth Rock", "Sand Tomb"] },
    { ability: "Thick Fat", item: "Leftovers", moves: ["Protect", "Fissure", "Yawn", "Double-Edge"] }
  ] },
  { id: "ct-283", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 80, player: "Tamuha", wins: 1, losses: 3, pokemonIds: [302, 902, 1018, 670, 663, 666], pokemonNames: ["Sableye", "Basculegion-M", "Archaludon", "Floette", "Talonflame", "Vivillon"], sets: [
    { ability: "Prankster", item: "Roseli Berry", moves: ["Encore", "Rain Dance", "Reflect", "Light Screen"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Light of Ruin", "Moonblast", "Dazzling Gleam", "Protect"] },
    { ability: "Gale Wings", item: "nothing", moves: ["Acrobatics", "Flare Blitz", "Tailwind", "Protect"] },
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Hurricane", "Sleep Powder", "Rage Powder", "Protect"] }
  ] },
  { id: "ct-284", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 81, player: "TomatoSaiyan", wins: 1, losses: 6, pokemonIds: [324, 623, 981, 115, 700, 59], pokemonNames: ["Torkoal", "Golurk", "Farigiraf", "Kangaskhan", "Sylveon", "Arcanine"], sets: [
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Protect", "Weather Ball", "Earth Power"] },
    { ability: "No Guard", item: "Golurkite", moves: ["Protect", "Headlong Rush", "Rock Slide", "Poltergeist"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Imprison", "Trick Room", "Protect", "Psychic"] },
    { ability: "Scrappy", item: "Silk Scarf", moves: ["Last Resort", "Fake Out"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Yawn", "Detect", "Calm Mind"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Snarl", "Charm", "Will-O-Wisp", "Burn Up"] }
  ] },
  { id: "ct-285", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 82, player: "Pat_Jes1", wins: 1, losses: 3, pokemonIds: [428, 409, 981, 324, 778, 983], pokemonNames: ["Lopunny", "Rampardos", "Farigiraf", "Torkoal", "Mimikyu", "Kingambit"], sets: [
    { ability: "Cute Charm", item: "Lopunnite", moves: ["Close Combat", "U-turn", "After You", "Fake Out"] },
    { ability: "Sheer Force", item: "Focus Sash", moves: ["Rock Slide", "Thunder Punch", "Iron Tail", "Swords Dance"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Psychic", "Skill Swap", "Hyper Voice", "Trick Room"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Heat Wave", "Earth Power", "Stealth Rock"] },
    { ability: "Disguise", item: "White Herb", moves: ["Trick Room", "Play Rough", "Shadow Claw", "Shadow Sneak"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Protect", "Iron Head"] }
  ] },
  { id: "ct-286", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 83, player: "MugiWara56", wins: 1, losses: 3, pokemonIds: [727, 350, 1013, 903, 670, 6], pokemonNames: ["Incineroar", "Milotic", "Sinistcha", "Sneasler", "Floette", "Charizard"], sets: [
    { ability: "Intimidate", item: "Chople Berry", moves: ["Fake Out", "Flare Blitz", "Taunt", "Parting Shot"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Muddy Water", "Hypnosis", "Coil", "Recover"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Trick Room"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Fake Out", "Close Combat", "Dire Claw", "Coaching"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Blaze", item: "Charizardite X", moves: ["Flare Blitz", "Dragon Claw", "Dragon Dance", "Protect"] }
  ] },
  { id: "ct-287", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 84, player: "Dekky", wins: 1, losses: 6, pokemonIds: [282, 9, 727, 279, 128, 1018], pokemonNames: ["Gardevoir", "Blastoise", "Incineroar", "Pelipper", "Tauros", "Archaludon"], sets: [
    { ability: "Trace", item: "Gardevoirite", moves: ["Hyper Voice", "Protect", "Trick Room", "Calm Mind"] },
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Fake Out", "Water Spout", "Water Pulse", "Dark Pulse"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Will-O-Wisp", "Flare Blitz", "Parting Shot"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Tailwind", "Weather Ball", "Protect", "Hurricane"] },
    { ability: "Intimidate", item: "Mystic Water", moves: ["Raging Bull", "High Horsepower", "Protect", "Aqua Jet"] },
    { ability: "Stamina", item: "White Herb", moves: ["Electro Shot", "Protect", "Draco Meteor", "Flash Cannon"] }
  ] },
  { id: "ct-288", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 85, player: "ZicheVGC", wins: 1, losses: 3, pokemonIds: [248, 727, 1013, 681, 637, 763], pokemonNames: ["Tyranitar", "Incineroar", "Sinistcha", "Aegislash", "Volcarona", "Tsareena"], sets: [
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Dragon Dance", "Knock Off", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Parting Shot", "Helping Hand"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Protect"] },
    { ability: "Stance Change", item: "Focus Sash", moves: ["Poltergeist", "Sacred Sword", "Shadow Sneak", "Wide Guard"] },
    { ability: "Flame Body", item: "Passho Berry", moves: ["Heat Wave", "Rage Powder", "Will-O-Wisp", "Tailwind"] },
    { ability: "Queenly Majesty", item: "Choice Scarf", moves: ["Trop Kick", "Low Kick", "Triple Axel", "U-turn"] }
  ] },
  { id: "ct-289", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 86, player: "SecretTom24", wins: 1, losses: 6, pokemonIds: [3, 115, 700, 681, 10103, 663], pokemonNames: ["Venusaur", "Kangaskhan", "Sylveon", "Aegislash", "Alolan Ninetales", "Talonflame"], sets: [
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Giga Drain", "Earth Power", "Protect", "Sludge Bomb"] },
    { ability: "Scrappy", item: "Silk Scarf", moves: ["Fake Out", "Last Resort"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Beam", "Hyper Voice", "Quick Attack", "Protect"] },
    { ability: "Stance Change", item: "Spell Tag", moves: ["Poltergeist", "Shadow Sneak", "Iron Head", "King's Shield"] },
    { ability: "Snow Warning", item: "Focus Sash", moves: ["Blizzard", "Freeze-Dry", "Encore", "Protect"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Dual Wingbeat", "Flare Blitz", "Protect", "Tailwind"] }
  ] },
  { id: "ct-290", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 87, player: "Togie", wins: 1, losses: 1, pokemonIds: [212, 6, 727, 350, 445, 903], pokemonNames: ["Scizor", "Charizard", "Incineroar", "Milotic", "Garchomp", "Sneasler"], sets: [
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Protect", "Bug Bite", "Swords Dance"] },
    { ability: "Blaze", item: "Charizardite X", moves: ["Flare Blitz", "Dragon Claw", "Dragon Dance", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Darkest Lariat", "Snarl"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Scald", "Icy Wind", "Protect", "Recover"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Scale Shot", "Protect", "Stomping Tantrum", "Rock Slide"] },
    { ability: "Poison Touch", item: "Focus Sash", moves: ["Fake Out", "Close Combat", "Dire Claw", "Throat Chop"] }
  ] },
  { id: "ct-291", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 88, player: "SaiNoob", wins: 1, losses: 2, pokemonIds: [3, 983, 981, 727, 445, 130], pokemonNames: ["Venusaur", "Kingambit", "Farigiraf", "Incineroar", "Garchomp", "Gyarados"], sets: [
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Earth Power", "Giga Drain", "Sludge Bomb", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Psychic", "Trick Room", "Helping Hand", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Throat Chop", "Flare Blitz", "Parting Shot", "Fake Out"] },
    { ability: "Rough Skin", item: "Haban Berry", moves: ["Stomping Tantrum", "Dragon Claw", "Rock Slide", "Protect"] },
    { ability: "Intimidate", item: "Gyaradosite", moves: ["Waterfall", "Crunch", "Protect", "Dragon Dance"] }
  ] },
  { id: "ct-292", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 89, player: "77777", wins: 0, losses: 2, pokemonIds: [981, 983, 727, 666, 323, 740], pokemonNames: ["Farigiraf", "Kingambit", "Incineroar", "Vivillon", "Camerupt", "Crabominable"], sets: [
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Protect", "Psyshock", "Helping Hand", "Trick Room"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Swords Dance", "Kowtow Cleave", "Sucker Punch", "Iron Head"] },
    { ability: "Intimidate", item: "Charcoal", moves: ["Flare Blitz", "Darkest Lariat", "Parting Shot", "Fake Out"] },
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Hurricane", "Rage Powder", "Sleep Powder", "Protect"] },
    { ability: "Solid Rock", item: "Cameruptite", moves: ["Heat Wave", "Earth Power", "Ancient Power", "Protect"] },
    { ability: "Hyper Cutter", item: "Crabominite", moves: ["Protect", "Close Combat", "Ice Hammer", "Mach Punch"] }
  ] },
  { id: "ct-293", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 90, player: "Zero23", wins: 0, losses: 1, pokemonIds: [149, 956, 1018, 186, 302, 3], pokemonNames: ["Dragonite", "Espathra", "Archaludon", "Politoed", "Sableye", "Venusaur"], sets: [
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Hurricane", "Heat Wave", "Protect"] },
    { ability: "Speed Boost", item: "Focus Sash", moves: ["Lumina Crash", "Calm Mind", "Baton Pass", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Flash Cannon", "Dragon Pulse", "Electro Shot", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Ice Beam", "Encore", "Protect"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Quash", "Reflect", "Light Screen", "Rain Dance"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Giga Drain", "Sludge Bomb", "Earth Power", "Protect"] }
  ] },
  { id: "ct-294", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 91, player: "roby369", wins: 0, losses: 1, pokemonIds: [6, 903, 445, 727, 3, 10902], pokemonNames: ["Charizard", "Sneasler", "Garchomp", "Incineroar", "Venusaur", "Basculegion-F"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Air Slash", "Weather Ball", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Protect", "Fake Out"] },
    { ability: "Rough Skin", item: "Haban Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Throat Chop", "Flare Blitz", "Parting Shot", "Fake Out"] },
    { ability: "Chlorophyll", item: "Focus Sash", moves: ["Energy Ball", "Sludge Bomb", "Sleep Powder", "Earth Power"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Shadow Ball", "Ice Beam", "Aqua Jet", "Muddy Water"] }
  ] },
  { id: "ct-295", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 92, player: "JuanPabla", wins: 0, losses: 1, pokemonIds: [547, 902, 970, 6, 983, 445], pokemonNames: ["Whimsicott", "Basculegion-M", "Glimmora", "Charizard", "Kingambit", "Garchomp"], sets: [
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"], teraType: "None" },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"], teraType: "None" },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"], teraType: "None" },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"], teraType: "None" },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] }
  ] },
  { id: "ct-296", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 93, player: "Jontra", wins: 0, losses: 1, pokemonIds: [478, 903, 902, 983, 900, 547], pokemonNames: ["Froslass", "Sneasler", "Basculegion-M", "Kingambit", "Kleavor", "Whimsicott"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Flip Turn"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Stone Axe", "Close Combat", "Feint", "Protect"] },
    { ability: "Prankster", item: "Sitrus Berry", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] }
  ] },
  { id: "ct-297", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 94, player: "Yegorushhka", wins: 0, losses: 2, pokemonIds: [970, 282, 663, 902, 666, 445], pokemonNames: ["Glimmora", "Gardevoir", "Talonflame", "Basculegion-M", "Vivillon", "Garchomp"], sets: [
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Spiky Shield"] },
    { ability: "Trace", item: "Gardevoirite", moves: ["Hyper Voice", "Psyshock", "Trick Room", "Protect"] },
    { ability: "Gale Wings", item: "no item", moves: ["Acrobatics", "Flare Blitz", "Tailwind", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Protect"] },
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Hurricane", "Sleep Powder", "Rage Powder", "Tailwind"] },
    { ability: "Rough Skin", item: "Haban Berry", moves: ["Earthquake", "Scale Shot", "Rock Tomb", "Protect"] }
  ] },
  { id: "ct-298", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 95, player: "Chuybreton", wins: 0, losses: 2, pokemonIds: [970, 663, 670, 445, 212, 10009], pokemonNames: ["Glimmora", "Talonflame", "Floette", "Garchomp", "Scizor", "Wash Rotom"], sets: [
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Gale Wings", item: "Charcoal", moves: ["Brave Bird", "Overheat", "Tailwind", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Close Combat", "Bug Bite", "Protect"] },
    { ability: "Levitate", item: "Leftovers", moves: ["Thunderbolt", "Protect", "Will-O-Wisp", "Hydro Pump"] }
  ] },
  { id: "ct-299", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 96, player: "VOVOMAXBEN10", wins: 0, losses: 1, pokemonIds: [663, 925, 983, 763, 282, 142], pokemonNames: ["Talonflame", "Maushold", "Kingambit", "Tsareena", "Gardevoir", "Aerodactyl"], sets: [
    { ability: "Gale Wings", item: "nothing", moves: ["Acrobatics", "Flare Blitz", "Tailwind", "Protect"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Super Fang", "Follow Me", "Feint", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Queenly Majesty", item: "Focus Sash", moves: ["Trop Kick", "Triple Axel", "Low Kick", "Protect"] },
    { ability: "Trace", item: "Gardevoirite", moves: ["Hyper Voice", "Psychic", "Thunderbolt", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Ice Fang", "Dual Wingbeat", "Protect"] }
  ] },
  { id: "ct-300", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 97, player: "lazytiger", wins: 0, losses: 3, pokemonIds: [160, 903, 1018, 279, 902, 823], pokemonNames: ["Feraligatr", "Sneasler", "Archaludon", "Pelipper", "Basculegion-M", "Corviknight"], sets: [
    { ability: "Sheer Force", item: "Feraligite", moves: ["Liquidation", "Body Slam", "Dragon Dance", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Coaching"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Flash Cannon", "Aura Sphere", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Weather Ball", "Hurricane", "Tailwind", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Unnerve", item: "Sitrus Berry", moves: ["Body Press", "Iron Head", "Bulk Up", "Roost"] }
  ] },
  { id: "ct-301", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 98, player: "Wesleihas", wins: 0, losses: 3, pokemonIds: [9, 700, 663, 445, 983, 902], pokemonNames: ["Blastoise", "Sylveon", "Talonflame", "Garchomp", "Kingambit", "Basculegion-M"], sets: [
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Water Spout", "Dark Pulse", "Aura Sphere", "Fake Out"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Quick Attack", "Hyper Beam", "Detect"] },
    { ability: "Gale Wings", item: "No Item", moves: ["Acrobatics", "Tailwind", "Rain Dance", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Last Respects", "Waterfall", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-302", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 99, player: "PonchoRed", wins: 0, losses: 1, pokemonIds: [229, 547, 970, 983, 302, 3], pokemonNames: ["Houndoom", "Whimsicott", "Glimmora", "Kingambit", "Sableye", "Venusaur"], sets: [
    { ability: "Flash Fire", item: "Houndoominite", moves: ["Heat Wave", "Dark Pulse", "Nasty Plot", "Protect"] },
    { ability: "Prankster", item: "Sitrus Berry", moves: ["Moonblast", "Sunny Day", "Tailwind", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Spiky Shield"] },
    { ability: "Supreme Overlord", item: "Chople Berry", moves: ["Iron Head", "Kowtow Cleave", "Sucker Punch", "Protect"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Light Screen", "Sunny Day", "Encore", "Reflect"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Giga Drain", "Sludge Bomb", "Earth Power", "Growth"] }
  ] },
  { id: "ct-303", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 100, player: "Zddz", wins: 0, losses: 2, pokemonIds: [547, 445, 10008, 478, 752, 823], pokemonNames: ["Whimsicott", "Garchomp", "Heat Rotom", "Froslass", "Araquanid", "Corviknight"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Encore", "Dazzling Gleam", "Taunt"] },
    { ability: "Rough Skin", item: "White Herb", moves: ["Rock Slide", "Earthquake", "Protect", "Dragon Claw"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Overheat", "Protect", "Will-O-Wisp", "Thunderbolt"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Water Bubble", item: "Mystic Water", moves: ["Liquidation", "Protect", "Leech Life", "Poison Jab"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Iron Head", "Body Press", "Iron Defense", "Roost"] }
  ] },
  { id: "ct-304", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 101, player: "walaye", wins: 0, losses: 3, pokemonIds: [121, 279, 1018, 981, 983, 149], pokemonNames: ["Starmie", "Pelipper", "Archaludon", "Farigiraf", "Kingambit", "Dragonite"], sets: [
    { ability: "Natural Cure", item: "Starminite", moves: ["Liquidation", "Aqua Jet", "Zen Headbutt", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Tailwind", "Hurricane", "Weather Ball", "Helping Hand"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Dragon Pulse", "Flash Cannon", "Electro Shot", "Protect"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Rain Dance", "Helping Hand", "Protect", "Hyper Voice"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Low Kick"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Hurricane", "Protect", "Thunderbolt"] }
  ] },
  { id: "ct-305", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 102, player: "chickfilasandy", wins: 0, losses: 3, pokemonIds: [3, 981, 1018, 1013, 302, 727], pokemonNames: ["Venusaur", "Farigiraf", "Archaludon", "Sinistcha", "Sableye", "Incineroar"], sets: [
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Giga Drain", "Sludge Bomb", "Earth Power", "Protect"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Psychic", "Trick Room", "Rain Dance", "Ally Switch"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Draco Meteor", "Electro Shot", "Aura Sphere", "Protect"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Life Dew"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Light Screen", "Reflect", "Encore", "Rain Dance"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Throat Chop", "Fake Out", "Parting Shot", "Taunt"] }
  ] },
  { id: "ct-306", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 103, player: "Nois_Ulli", wins: 0, losses: 3, pokemonIds: [302, 324, 10009, 3, 5059, 763], pokemonNames: ["Sableye", "Torkoal", "Wash Rotom", "Venusaur", "Hisuian Arcanine", "Tsareena"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Knock Off", "Thunder Wave", "Gravity", "Fake Out"] },
    { ability: "Drought", item: "Charcoal", moves: ["Protect", "Heat Wave", "Overheat", "Earth Power"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Volt Switch", "Electroweb", "Hydro Pump", "Will-O-Wisp"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Sleep Powder", "Giga Drain", "Sludge Bomb", "Earth Power"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Protect", "Rock Slide", "Flare Blitz", "Psychic Fangs"] },
    { ability: "Queenly Majesty", item: "Choice Scarf", moves: ["Power Whip", "Triple Axel", "Zen Headbutt", "Low Kick"] }
  ] },
  { id: "ct-307", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 104, player: "andres941cs", wins: 0, losses: 3, pokemonIds: [700, 445, 6, 547, 149, 983], pokemonNames: ["Sylveon", "Garchomp", "Charizard", "Whimsicott", "Dragonite", "Kingambit"], sets: [
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Moonblast", "Detect", "Quick Attack"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Poison Jab"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Air Slash", "Flamethrower", "Dragon Pulse", "Solar Beam"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Grass Knot"] },
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Draco Meteor", "Flamethrower", "Ice Beam", "Extreme Speed"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] }
  ] },
  { id: "ct-308", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 105, player: "Jrepput", wins: 0, losses: 2, pokemonIds: [282, 925, 279, 1018, 902, 727], pokemonNames: ["Gardevoir", "Maushold", "Pelipper", "Archaludon", "Basculegion-M", "Incineroar"], sets: [
    { ability: "Trace", item: "Gardevoirite", moves: ["Psyshock", "Hyper Voice", "Protect", "Trick Room"] },
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Feint", "Super Fang", "Protect", "Follow Me"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Hurricane", "Tailwind", "Weather Ball", "Rain Dance"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Flip Turn"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Parting Shot", "Flare Blitz", "Fake Out", "Throat Chop"] }
  ] },
  { id: "ct-309", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 106, player: "Evan_santos", wins: 0, losses: 3, pokemonIds: [970, 902, 784, 212, 700, 908], pokemonNames: ["Glimmora", "Basculegion-M", "Kommo-o", "Scizor", "Sylveon", "Meowscarada"], sets: [
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Aura Sphere", "Clangorous Soul", "Protect"] },
    { ability: "Technician", item: "Metal Coat", moves: ["Bullet Punch", "Bug Bite", "Swords Dance", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Protect"] },
    { ability: "Protean", item: "Focus Sash", moves: ["Triple Axel", "Knock Off", "Flower Trick", "Protect"] }
  ] },
  { id: "ct-310", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 107, player: "Olymak", wins: 0, losses: 2, pokemonIds: [670, 727, 981, 902, 445, 547], pokemonNames: ["Floette", "Incineroar", "Farigiraf", "Basculegion-M", "Garchomp", "Whimsicott"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Intimidate", item: "Charcoal", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] },
    { ability: "Armor Tail", item: "Silk Scarf", moves: ["Hyper Voice", "Twin Beam", "Trick Room", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Rough Skin", item: "Hard Stone", moves: ["Stomping Tantrum", "Rock Slide", "Dragon Claw", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Encore", "Protect", "Tailwind"] }
  ] },
  { id: "ct-311", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 108, player: "Carismio", wins: 0, losses: 2, pokemonIds: [900, 478, 670, 10009, 959, 149], pokemonNames: ["Kleavor", "Froslass", "Floette", "Wash Rotom", "Tinkaton", "Dragonite"], sets: [
    { ability: "Sharpness", item: "Focus Sash", moves: ["Stone Edge", "X-Scissor", "Close Combat", "Protect"] },
    { ability: "Snow Cloak", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Moonblast", "Light of Ruin", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Volt Switch", "Electroweb", "Thunderbolt", "Hydro Pump"] },
    { ability: "Mold Breaker", item: "Leftovers", moves: ["Fake Out", "Gigaton Hammer", "Encore", "Protect"] },
    { ability: "Inner Focus", item: "Sitrus Berry", moves: ["Dragon Claw", "Fire Punch", "Extreme Speed", "Tailwind"] }
  ] },
  { id: "ct-312", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 109, player: "Alessio Ferrara", wins: 0, losses: 2, pokemonIds: [670, 1013, 727, 681, 445, 6], pokemonNames: ["Floette", "Sinistcha", "Incineroar", "Aegislash", "Garchomp", "Charizard"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Stance Change", item: "Focus Sash", moves: ["Poltergeist", "Close Combat", "Shadow Sneak", "Wide Guard"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Stomping Tantrum"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Weather Ball", "Heat Wave", "Solar Beam", "Protect"] }
  ] },
  { id: "ct-313", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 110, player: "SkyManu", wins: 0, losses: 1, pokemonIds: [94, 727, 1013, 186, 959, 784], pokemonNames: ["Gengar", "Incineroar", "Sinistcha", "Politoed", "Tinkaton", "Kommo-o"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Shadow Ball", "Disable", "Perish Song", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Fake Out", "Throat Chop", "Parting Shot", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Encore", "Perish Song", "Protect"] },
    { ability: "Mold Breaker", item: "Shuca Berry", moves: ["Fake Out", "Gigaton Hammer", "Encore", "Protect"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Aura Sphere", "Clangorous Soul", "Protect"] }
  ] },
  { id: "ct-314", tournament: "AUTOFULL CHAMPIONS SERIES QUALIFIER [120 USD]", players: 111, placement: 111, player: "IngageWithZenith", wins: 0, losses: 3, pokemonIds: [448, 707, 730, 981, 1018, 10008], pokemonNames: ["Lucario", "Klefki", "Primarina", "Farigiraf", "Archaludon", "Heat Rotom"], sets: [
    { ability: "Inner Focus", item: "Lucarionite", moves: ["Close Combat", "Protect", "Swords Dance", "Bullet Punch"] },
    { ability: "Prankster", item: "Mental Herb", moves: ["Dazzling Gleam", "Rain Dance", "Trick Room", "Light Screen"] },
    { ability: "Liquid Voice", item: "Quick Claw", moves: ["Hyper Voice", "Moonblast", "Calm Mind", "Protect"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Psychic", "Rain Dance", "Helping Hand", "Trick Room"] },
    { ability: "Stamina", item: "Chople Berry", moves: ["Electro Shot", "Protect", "Draco Meteor", "Flash Cannon"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Nasty Plot", "Thunderbolt", "Overheat", "Will-O-Wisp"] }
  ] },
  { id: "ct-315", tournament: "VGC UU Champions (Regulation M-A) \"Paris Regional\"", players: 17, placement: 1, player: "AndruApple", wins: 7, losses: 1, pokemonIds: [6, 395, 908, 970, 700, 149], pokemonNames: ["Charizard", "Empoleon", "Meowscarada", "Glimmora", "Sylveon", "Dragonite"], sets: [
    { ability: "Blaze", item: "Charizardite X", moves: ["Flare Blitz", "Breaking Swipe", "Roost", "Protect"] },
    { ability: "Competitive", item: "Sitrus Berry", moves: ["Hydro Pump", "Flash Cannon", "Icy Wind", "Protect"] },
    { ability: "Protean", item: "Choice Scarf", moves: ["Flower Trick", "Knock Off", "Triple Axel", "Low Kick"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Detect"] },
    { ability: "Multiscale", item: "Dragon Fang", moves: ["Scale Shot", "Stomping Tantrum", "Tailwind", "Protect"] }
  ] },
  { id: "ct-316", tournament: "VGC UU Champions (Regulation M-A) \"Paris Regional\"", players: 17, placement: 2, player: "businesspiggy", wins: 5, losses: 3, pokemonIds: [181, 563, 460, 752, 666, 475], pokemonNames: ["Ampharos", "Cofagrigus", "Abomasnow", "Araquanid", "Vivillon", "Gallade"], sets: [
    { ability: "Static", item: "Ampharosite", moves: ["Thunderbolt", "Dragon Pulse", "Power Gem", "Protect"] },
    { ability: "Mummy", item: "Sitrus Berry", moves: ["Shadow Ball", "Will-O-Wisp", "Rain Dance", "Trick Room"] },
    { ability: "Snow Warning", item: "Abomasite", moves: ["Blizzard", "Energy Ball", "Earth Power", "Protect"] },
    { ability: "Water Bubble", item: "Mystic Water", moves: ["Liquidation", "Leech Life", "Soak", "Protect"] },
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Pollen Puff", "Sleep Powder", "Rage Powder", "Protect"] },
    { ability: "Sharpness", item: "White Herb", moves: ["Sacred Sword", "Psycho Cut", "Trick Room", "Protect"] }
  ] },
  { id: "ct-317", tournament: "VGC UU Champions (Regulation M-A) \"Paris Regional\"", players: 17, placement: 3, player: "Gabeeel", wins: 5, losses: 2, pokemonIds: [9, 666, 36, 908, 405, 937], pokemonNames: ["Blastoise", "Vivillon", "Clefable", "Meowscarada", "Luxray", "Ceruledge"], sets: [
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Water Spout", "Ice Beam", "Shell Smash", "Protect"] },
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Pollen Puff", "Rage Powder", "Tailwind", "Protect"] },
    { ability: "Unaware", item: "Leftovers", moves: ["Moonblast", "Follow Me", "Life Dew", "Protect"] },
    { ability: "Protean", item: "Choice Scarf", moves: ["Flower Trick", "Knock Off", "Sucker Punch", "U-turn"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Wild Charge", "Volt Switch", "Snarl", "Baby-Doll Eyes"] },
    { ability: "Flash Fire", item: "Passho Berry", moves: ["Bitter Blade", "Shadow Sneak", "Swords Dance", "Protect"] }
  ] },
  { id: "ct-318", tournament: "VGC UU Champions (Regulation M-A) \"Paris Regional\"", players: 17, placement: 4, player: "Ev_Evan", wins: 4, losses: 3, pokemonIds: [127, 128, 715, 10340, 115, 970], pokemonNames: ["Pinsir", "Tauros", "Noivern", "Hisuian Zoroark", "Kangaskhan", "Glimmora"], sets: [
    { ability: "Hyper Cutter", item: "Pinsirite", moves: ["Storm Throw", "Body Slam", "Quick Attack", "Protect"] },
    { ability: "Anger Point", item: "Sitrus Berry", moves: ["Earthquake", "Aqua Jet", "Close Combat", "Protect"] },
    { ability: "Infiltrator", item: "Focus Sash", moves: ["Tailwind", "Air Slash", "Taunt", "Draco Meteor"] },
    { ability: "Illusion", item: "Choice Scarf", moves: ["Icy Wind", "Hyper Beam", "Hyper Voice", "Bitter Malice"] },
    { ability: "Scrappy", item: "Silk Scarf", moves: ["Fake Out", "Last Resort"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Power Gem", "Sludge Bomb", "Spiky Shield", "Earth Power"] }
  ] },
  { id: "ct-319", tournament: "VGC UU Champions (Regulation M-A) \"Paris Regional\"", players: 17, placement: 5, player: "Elisa A", wins: 5, losses: 1, pokemonIds: [715, 970, 959, 609, 908, 10902], pokemonNames: ["Noivern", "Glimmora", "Tinkaton", "Chandelure", "Meowscarada", "Basculegion-F"], sets: [
    { ability: "Telepathy", item: "Sitrus Berry", moves: ["Draco Meteor", "Super Fang", "Tailwind", "Protect"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Power Gem", "Sludge Wave", "Earth Power", "Protect"] },
    { ability: "Mold Breaker", item: "Metal Coat", moves: ["Gigaton Hammer", "Play Rough", "Encore", "Fake Out"] },
    { ability: "Flash Fire", item: "Chandelurite", moves: ["Heat Wave", "Shadow Ball", "Trick Room", "Protect"] },
    { ability: "Overgrow", item: "Focus Sash", moves: ["Flower Trick", "Knock Off", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Spell Tag", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-320", tournament: "VGC UU Champions (Regulation M-A) \"Paris Regional\"", players: 17, placement: 6, player: "PuffyWhy89", wins: 3, losses: 3, pokemonIds: [563, 324, 5157, 115, 534, 181], pokemonNames: ["Cofagrigus", "Torkoal", "Hisuian Typhlosion", "Kangaskhan", "Conkeldurr", "Ampharos"], sets: [
    { ability: "Mummy", item: "Mental Herb", moves: ["Shadow Ball", "Ally Switch", "Will-O-Wisp", "Trick Room"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Weather Ball", "Helping Hand", "Protect"] },
    { ability: "Blaze", item: "Choice Scarf", moves: ["Eruption", "Overheat", "Shadow Ball", "Heat Wave"] },
    { ability: "Inner Focus", item: "Kangaskhanite", moves: ["Double-Edge", "Fake Out", "Sucker Punch", "Hammer Arm"] },
    { ability: "Guts", item: "White Herb", moves: ["Drain Punch", "Mach Punch", "Knock Off", "Protect"] },
    { ability: "Mold Breaker", item: "Ampharosite", moves: ["Thunderbolt", "Dragon Pulse", "Substitute", "Protect"] }
  ] },
  { id: "ct-321", tournament: "VGC UU Champions (Regulation M-A) \"Paris Regional\"", players: 17, placement: 7, player: "Atharva Yadav", wins: 3, losses: 3, pokemonIds: [900, 448, 970, 302, 715, 10336], pokemonNames: ["Kleavor", "Lucario", "Glimmora", "Sableye", "Noivern", "Hisuian Samurott"], sets: [
    { ability: "Sharpness", item: "Focus Sash", moves: ["Protect", "Stone Axe", "Close Combat", "U-turn"] },
    { ability: "Inner Focus", item: "Choice Scarf", moves: ["Final Gambit", "Flash Cannon", "Aura Sphere", "Dark Pulse"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Spiky Shield", "Sludge Bomb", "Ancient Power", "Earth Power"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Fake Out", "Encore", "Rain Dance", "Reflect"] },
    { ability: "Frisk", item: "Mental Herb", moves: ["Protect", "Tailwind", "Draco Meteor", "Air Slash"] },
    { ability: "Sharpness", item: "Sitrus Berry", moves: ["Detect", "Aqua Cutter", "Sucker Punch", "Sacred Sword"] }
  ] },
  { id: "ct-322", tournament: "VGC UU Champions (Regulation M-A) \"Paris Regional\"", players: 17, placement: 8, player: "AVEornot", wins: 3, losses: 3, pokemonIds: [10008, 80, 666, 707, 970, 908], pokemonNames: ["Heat Rotom", "Slowbro", "Vivillon", "Klefki", "Glimmora", "Meowscarada"], sets: [
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Volt Switch", "Overheat", "Will-O-Wisp", "Protect"] },
    { ability: "Regenerator", item: "Slowbronite", moves: ["Scald", "Psyshock", "Calm Mind", "Protect"] },
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Rage Powder", "Pollen Puff", "Protect", "Tailwind"] },
    { ability: "Prankster", item: "Mental Herb", moves: ["Steel Beam", "Thunder Wave", "Trick Room", "Rain Dance"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Power Gem", "Sludge Wave", "Substitute", "Spiky Shield"] },
    { ability: "Protean", item: "Choice Scarf", moves: ["Flower Trick", "U-turn", "Knock Off", "Triple Axel"] }
  ] },
  { id: "ct-323", tournament: "VGC UU Champions (Regulation M-A) \"Paris Regional\"", players: 17, placement: 9, player: "Sinnoy", wins: 2, losses: 3, pokemonIds: [358, 186, 454, 700, 464, 128], pokemonNames: ["Chimecho", "Politoed", "Toxicroak", "Sylveon", "Rhyperior", "Tauros"], sets: [
    { ability: "Levitate", item: "Chimechite", moves: ["Psychic", "Flash Cannon", "Recover", "Trick Room"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Muddy Water", "Weather Ball", "Perish Song", "Protect"] },
    { ability: "Dry Skin", item: "White Herb", moves: ["Gunk Shot", "Close Combat", "Encore", "Fake Out"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Weather Ball", "Baby-Doll Eyes", "Protect"] },
    { ability: "Solid Rock", item: "Passho Berry", moves: ["High Horsepower", "Rock Slide", "Earthquake", "Protect"] },
    { ability: "Intimidate", item: "Shuca Berry", moves: ["Flare Blitz", "Close Combat", "Will-O-Wisp", "Protect"] }
  ] },
  { id: "ct-324", tournament: "VGC UU Champions (Regulation M-A) \"Paris Regional\"", players: 17, placement: 10, player: "Shoerun", wins: 2, losses: 3, pokemonIds: [678, 730, 637, 121, 970, 908], pokemonNames: ["Meowstic-M", "Primarina", "Volcarona", "Starmie", "Glimmora", "Meowscarada"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Psychic Terrain", "Helping Hand", "Fake Out", "Expanding Force"] },
    { ability: "Liquid Voice", item: "Leftovers", moves: ["Substitute", "Hyper Voice", "Moonblast", "Protect"] },
    { ability: "Flame Body", item: "Charcoal", moves: ["Fiery Dance", "Giga Drain", "Quiver Dance", "Protect"] },
    { ability: "Illuminate", item: "Starminite", moves: ["Ice Beam", "Expanding Force", "Scald", "Protect"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Power Gem", "Earth Power", "Sludge Bomb", "Spiky Shield"] },
    { ability: "Protean", item: "Choice Scarf", moves: ["Knock Off", "Triple Axel", "Flower Trick", "U-turn"] }
  ] },
  { id: "ct-325", tournament: "VGC UU Champions (Regulation M-A) \"Paris Regional\"", players: 17, placement: 11, player: "forkuser1", wins: 2, losses: 3, pokemonIds: [80, 637, 908, 730, 959, 59], pokemonNames: ["Slowbro", "Volcarona", "Meowscarada", "Primarina", "Tinkaton", "Arcanine"], sets: [
    { ability: "Oblivious", item: "Slowbronite", moves: ["Calm Mind", "Psychic", "Scald", "Protect"] },
    { ability: "Flame Body", item: "Passho Berry", moves: ["Fiery Dance", "Giga Drain", "Protect", "Quiver Dance"] },
    { ability: "Overgrow", item: "Focus Sash", moves: ["Flower Trick", "Knock Off", "Sucker Punch", "Protect"] },
    { ability: "Liquid Voice", item: "Mystic Water", moves: ["Hyper Voice", "Moonblast", "Aqua Jet", "Protect"] },
    { ability: "Own Tempo", item: "Metal Coat", moves: ["Gigaton Hammer", "Play Rough", "Protect", "Fake Out"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Extreme Speed", "Will-O-Wisp", "Protect"] }
  ] },
  { id: "ct-326", tournament: "VGC UU Champions (Regulation M-A) \"Paris Regional\"", players: 17, placement: 12, player: "swaggervgc", wins: 2, losses: 2, pokemonIds: [6, 970, 959, 908, 10902, 149], pokemonNames: ["Charizard", "Glimmora", "Tinkaton", "Meowscarada", "Basculegion-F", "Dragonite"], sets: [
    { ability: "Blaze", item: "Charizardite X", moves: ["Breaking Swipe", "Flare Blitz", "Roost", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Own Tempo", item: "Metal Coat", moves: ["Fake Out", "Gigaton Hammer", "Thunder Wave", "Protect"] },
    { ability: "Protean", item: "Choice Scarf", moves: ["Flower Trick", "Knock Off", "Low Kick", "Triple Axel"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Multiscale", item: "Dragon Fang", moves: ["Scale Shot", "Stomping Tantrum", "Tailwind", "Protect"] }
  ] },
  { id: "ct-327", tournament: "VGC UU Champions (Regulation M-A) \"Paris Regional\"", players: 17, placement: 13, player: "Skwovetboi", wins: 2, losses: 3, pokemonIds: [160, 36, 143, 584, 758, 763], pokemonNames: ["Feraligatr", "Clefable", "Snorlax", "Vanilluxe", "Salazzle", "Tsareena"], sets: [
    { ability: "Sheer Force", item: "Feraligite", moves: ["Double-Edge", "Liquidation", "Dragon Dance", "Protect"] },
    { ability: "Unaware", item: "Sitrus Berry", moves: ["Moonblast", "Heal Pulse", "Follow Me", "Protect"] },
    { ability: "Thick Fat", item: "Leftovers", moves: ["Double-Edge", "Yawn", "High Horsepower", "Protect"] },
    { ability: "Snow Warning", item: "Choice Scarf", moves: ["Icy Wind", "Freeze-Dry", "Blizzard", "Aurora Veil"] },
    { ability: "Oblivious", item: "Focus Sash", moves: ["Overheat", "Sludge Bomb", "Fake Out", "Taunt"] },
    { ability: "Queenly Majesty", item: "Miracle Seed", moves: ["Power Whip", "Helping Hand", "Protect", "Triple Axel"] }
  ] },
  { id: "ct-328", tournament: "VGC UU Champions (Regulation M-A) \"Paris Regional\"", players: 17, placement: 14, player: "AppleJuice127", wins: 1, losses: 2, pokemonIds: [471, 460, 448, 10008, 128, 10340], pokemonNames: ["Glaceon", "Abomasnow", "Lucario", "Heat Rotom", "Tauros", "Hisuian Zoroark"], sets: [
    { ability: "Ice Body", item: "Never-Melt Ice", moves: ["Calm Mind", "Blizzard", "Freeze-Dry", "Detect"] },
    { ability: "Snow Warning", item: "Abomasite", moves: ["Aurora Veil", "Protect", "Blizzard", "Wood Hammer"] },
    { ability: "Inner Focus", item: "Lucarionite", moves: ["Rock Slide", "Close Combat", "Meteor Mash", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Volt Switch", "Electroweb", "Thunderbolt", "Overheat"] },
    { ability: "Intimidate", item: "Mystic Water", moves: ["Aqua Jet", "Close Combat", "Wave Crash", "Protect"] },
    { ability: "Illusion", item: "Focus Sash", moves: ["Hyper Voice", "Shadow Ball", "Taunt", "Protect"] }
  ] },
  { id: "ct-329", tournament: "VGC UU Champions (Regulation M-A) \"Paris Regional\"", players: 17, placement: 15, player: "LancentVGC", wins: 1, losses: 3, pokemonIds: [10008, 80, 666, 707, 970, 908], pokemonNames: ["Heat Rotom", "Slowbro", "Vivillon", "Klefki", "Glimmora", "Meowscarada"], sets: [
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Volt Switch", "Overheat", "Will-O-Wisp", "Protect"] },
    { ability: "Regenerator", item: "Slowbronite", moves: ["Scald", "Psychic", "Calm Mind", "Protect"] },
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Rage Powder", "Pollen Puff", "Protect", "Tailwind"] },
    { ability: "Prankster", item: "Mental Herb", moves: ["Steel Beam", "Thunder Wave", "Trick Room", "Rain Dance"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Power Gem", "Sludge Wave", "Earth Power", "Spiky Shield"] },
    { ability: "Protean", item: "Choice Scarf", moves: ["Flower Trick", "U-turn", "Knock Off", "Triple Axel"] }
  ] },
  { id: "ct-330", tournament: "VGC UU Champions (Regulation M-A) \"Paris Regional\"", players: 17, placement: 16, player: "interfluxer", wins: 1, losses: 3, pokemonIds: [428, 10340, 10008, 970, 964, 584], pokemonNames: ["Lopunny", "Hisuian Zoroark", "Heat Rotom", "Glimmora", "Palafin", "Vanilluxe"], sets: [
    { ability: "Limber", item: "Lopunnite", moves: ["Fake Out", "Close Combat", "Encore", "Protect"] },
    { ability: "Illusion", item: "Choice Scarf", moves: ["Bitter Malice", "Hyper Voice", "Icy Wind", "Psychic"] },
    { ability: "Levitate", item: "Passho Berry", moves: ["Overheat", "Thunderbolt", "Volt Switch", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Spiky Shield"] },
    { ability: "Zero to Hero", item: "Mystic Water", moves: ["Wave Crash", "Jet Punch", "Close Combat", "Protect"] },
    { ability: "Snow Warning", item: "Chople Berry", moves: ["Blizzard", "Freeze-Dry", "Aurora Veil", "Protect"] }
  ] },
  { id: "ct-331", tournament: "VGC UU Champions (Regulation M-A) \"Paris Regional\"", players: 17, placement: 17, player: "Nicolas_EVG", wins: 0, losses: 4, pokemonIds: [964, 186, 6199, 5706, 970, 310], pokemonNames: ["Palafin", "Politoed", "Galarian Slowking", "Hisuian Goodra", "Glimmora", "Manectric"], sets: [
    { ability: "Zero to Hero", item: "Choice Scarf", moves: ["Taunt", "Jet Punch", "Flip Turn", "Facade"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Waterfall", "Perish Song", "Protect", "Facade"] },
    { ability: "Curious Medicine", item: "Poison Barb", moves: ["Expanding Force", "Trick Room", "Psychic Terrain", "Taunt"] },
    { ability: "Shell Armor", item: "Leftovers", moves: ["Draco Meteor", "Flash Cannon", "Protect", "Weather Ball"] },
    { ability: "Corrosion", item: "Glimmoranite", moves: ["Toxic", "Reflect", "Power Gem", "Light Screen"] },
    { ability: "Lightning Rod", item: "Manectite", moves: ["Thunder", "Volt Switch", "Snarl", "Protect"] }
  ] },
  { id: "ct-332", tournament: "ALDTOUR CART #10 (Reg M-A)", players: 21, placement: 1, player: "Kotori", wins: 8, losses: 1, pokemonIds: [6, 902, 142, 727, 981, 700], pokemonNames: ["Charizard", "Basculegion-M", "Aerodactyl", "Incineroar", "Farigiraf", "Sylveon"], sets: [
    { ability: "Drought", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Darkest Lariat", "Fake Out", "Flare Blitz", "Parting Shot"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Hyper Voice", "Psychic", "Trick Room", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Detect"] }
  ] },
  { id: "ct-333", tournament: "ALDTOUR CART #10 (Reg M-A)", players: 21, placement: 2, player: "Bef", wins: 7, losses: 2, pokemonIds: [952, 248, 445, 10009, 823, 778], pokemonNames: ["Scovillain", "Tyranitar", "Garchomp", "Wash Rotom", "Corviknight", "Mimikyu"], sets: [
    { ability: "Moody", item: "Scovillainite", moves: ["Flamethrower", "Leech Seed", "Rage Powder", "Protect"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Low Kick", "Protect"] },
    { ability: "Rough Skin", item: "Haban Berry", moves: ["Dragon Claw", "Earthquake", "Swords Dance", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Thunderbolt", "Hydro Pump", "Volt Switch", "Trick"] },
    { ability: "Mirror Armor", item: "Sitrus Berry", moves: ["Iron Head", "Brave Bird", "Tailwind", "Roost"] },
    { ability: "Disguise", item: "Spell Tag", moves: ["Shadow Sneak", "Play Rough", "Shadow Claw", "Trick Room"] }
  ] },
  { id: "ct-334", tournament: "ALDTOUR CART #10 (Reg M-A)", players: 21, placement: 3, player: "KingNoahC17", wins: 5, losses: 3, pokemonIds: [609, 10103, 10009, 983, 445, 903], pokemonNames: ["Chandelure", "Alolan Ninetales", "Wash Rotom", "Kingambit", "Garchomp", "Sneasler"], sets: [
    { ability: "Flash Fire", item: "Chandelurite", moves: ["Heat Wave", "Shadow Ball", "Substitute", "Protect"] },
    { ability: "Snow Warning", item: "Focus Sash", moves: ["Blizzard", "Freeze-Dry", "Aurora Veil", "Protect"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Hydro Pump", "Volt Switch", "Electroweb", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Rough Skin", item: "Dragon Fang", moves: ["Scale Shot", "Earthquake", "Stomping Tantrum", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] }
  ] },
  { id: "ct-335", tournament: "ALDTOUR CART #10 (Reg M-A)", players: 21, placement: 4, player: "Candytrouble", wins: 5, losses: 3, pokemonIds: [6, 445, 547, 902, 903, 970], pokemonNames: ["Charizard", "Garchomp", "Whimsicott", "Basculegion-M", "Sneasler", "Glimmora"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Rock Slide", "Dragon Claw", "Earthquake", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Encore", "Moonblast", "Protect", "Tailwind"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Flip Turn", "Wave Crash", "Last Respects", "Aqua Jet"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Earth Power", "Power Gem", "Sludge Bomb", "Spiky Shield"] }
  ] },
  { id: "ct-336", tournament: "ALDTOUR CART #10 (Reg M-A)", players: 21, placement: 5, player: "Tobi_Hope", wins: 6, losses: 1, pokemonIds: [6, 670, 445, 983, 142, 902], pokemonNames: ["Charizard", "Floette", "Garchomp", "Kingambit", "Aerodactyl", "Basculegion-M"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Moonblast", "Light of Ruin", "Protect"] },
    { ability: "Rough Skin", item: "Dragon Fang", moves: ["Scale Shot", "Earthquake", "Stomping Tantrum", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Rock Slide", "Tailwind", "Wide Guard", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Flip Turn", "Aqua Jet", "Last Respects"] }
  ] },
  { id: "ct-337", tournament: "ALDTOUR CART #10 (Reg M-A)", players: 21, placement: 6, player: "hiroshi", wins: 5, losses: 2, pokemonIds: [324, 981, 142, 534, 115, 6], pokemonNames: ["Torkoal", "Farigiraf", "Aerodactyl", "Conkeldurr", "Kangaskhan", "Charizard"], sets: [
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Weather Ball", "Heat Wave", "Protect"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Psychic", "Thunderbolt", "Trick Room", "Protect"] },
    { ability: "Unnerve", item: "Lum Berry", moves: ["Protect", "Dual Wingbeat", "Sunny Day", "Rock Slide"] },
    { ability: "Iron Fist", item: "Black Belt", moves: ["Protect", "Drain Punch", "Mach Punch", "Rock Slide"] },
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Fake Out", "Double-Edge", "Hammer Arm", "Ice Punch"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] }
  ] },
  { id: "ct-338", tournament: "ALDTOUR CART #10 (Reg M-A)", players: 21, placement: 7, player: "The Main Flutter", wins: 4, losses: 3, pokemonIds: [727, 94, 925, 902, 186, 983], pokemonNames: ["Incineroar", "Gengar", "Maushold", "Basculegion-M", "Politoed", "Kingambit"], sets: [
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Darkest Lariat", "Parting Shot", "Protect"] },
    { ability: "Cursed Body", item: "Gengarite", moves: ["Shadow Ball", "Perish Song", "Disable", "Protect"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Follow Me", "Super Fang", "Encore", "Protect"] },
    { ability: "Swift Swim", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Drizzle", item: "Leftovers", moves: ["Weather Ball", "Helping Hand", "Perish Song", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] }
  ] },
  { id: "ct-339", tournament: "ALDTOUR CART #10 (Reg M-A)", players: 21, placement: 8, player: "camronghorashi", wins: 4, losses: 3, pokemonIds: [670, 727, 1013, 925, 666, 655], pokemonNames: ["Floette", "Incineroar", "Sinistcha", "Maushold", "Vivillon", "Delphox"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Draining Kiss", "Calm Mind", "Moonblast"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Super Fang", "Feint", "Follow Me", "Protect"] },
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Sleep Powder", "Hurricane", "Rage Powder", "Tailwind"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Nasty Plot", "Protect"] }
  ] },
  { id: "ct-340", tournament: "ALDTOUR CART #10 (Reg M-A)", players: 21, placement: 9, player: "LynxVGC", wins: 3, losses: 3, pokemonIds: [903, 142, 6, 10009, 445, 670], pokemonNames: ["Sneasler", "Aerodactyl", "Charizard", "Wash Rotom", "Garchomp", "Floette"], sets: [
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Dire Claw", "Close Combat", "Fake Out"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Protect", "Rock Slide", "Dual Wingbeat", "Tailwind"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Levitate", item: "Leftovers", moves: ["Hydro Pump", "Thunderbolt", "Will-O-Wisp", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] }
  ] },
  { id: "ct-341", tournament: "ALDTOUR CART #10 (Reg M-A)", players: 21, placement: 10, player: "Zephyr0811", wins: 3, losses: 3, pokemonIds: [94, 727, 1018, 279, 903, 902], pokemonNames: ["Gengar", "Incineroar", "Archaludon", "Pelipper", "Sneasler", "Basculegion-M"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Sludge Bomb", "Shadow Ball", "Perish Song", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Throat Chop", "Fake Out", "Parting Shot", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Flash Cannon", "Draco Meteor", "Electro Shot", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Weather Ball", "Hurricane", "Tailwind", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Swift Swim", item: "Mystic Water", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Protect"] }
  ] },
  { id: "ct-342", tournament: "ALDTOUR CART #10 (Reg M-A)", players: 21, placement: 11, player: "KMMULLER2020", wins: 2, losses: 3, pokemonIds: [94, 186, 727, 1013, 635, 9], pokemonNames: ["Gengar", "Politoed", "Incineroar", "Sinistcha", "Hydreigon", "Blastoise"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Protect", "Perish Song", "Disable", "Shadow Ball"] },
    { ability: "Drizzle", item: "Leftovers", moves: ["Protect", "Perish Song", "Encore", "Weather Ball"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Protect", "Fake Out", "Parting Shot", "Darkest Lariat"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Protect", "Rage Powder", "Trick Room", "Matcha Gotcha"] },
    { ability: "Levitate", item: "Chople Berry", moves: ["Protect", "Draco Meteor", "Dark Pulse", "Earth Power"] },
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Protect", "Water Spout", "Weather Ball", "Ice Beam"] }
  ] },
  { id: "ct-343", tournament: "ALDTOUR CART #10 (Reg M-A)", players: 21, placement: 12, player: "Leexer", wins: 2, losses: 1, pokemonIds: [279, 1018, 121, 3, 903, 983], pokemonNames: ["Pelipper", "Archaludon", "Starmie", "Venusaur", "Sneasler", "Kingambit"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Hurricane", "Weather Ball", "Wide Guard", "Tailwind"] },
    { ability: "Stamina", item: "Chople Berry", moves: ["Electro Shot", "Flash Cannon", "Draco Meteor", "Protect"] },
    { ability: "Natural Cure", item: "Starminite", moves: ["Ice Spinner", "Liquidation", "Aqua Jet", "Protect"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Protect", "Sludge Bomb", "Earth Power", "Giga Drain"] },
    { ability: "Poison Touch", item: "Poison Barb", moves: ["Dire Claw", "Fake Out", "Close Combat", "Protect"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Protect", "Kowtow Cleave", "Swords Dance", "Sucker Punch"] }
  ] },
  { id: "ct-344", tournament: "ALDTOUR CART #10 (Reg M-A)", players: 21, placement: 13, player: "Junyao Zhang", wins: 2, losses: 3, pokemonIds: [6, 547, 983, 902, 445, 970], pokemonNames: ["Charizard", "Whimsicott", "Kingambit", "Basculegion-M", "Garchomp", "Glimmora"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] }
  ] },
  { id: "ct-345", tournament: "ALDTOUR CART #10 (Reg M-A)", players: 21, placement: 14, player: "AquamarineVGC", wins: 2, losses: 3, pokemonIds: [952, 302, 745, 248, 823, 902], pokemonNames: ["Scovillain", "Sableye", "Lycanroc", "Tyranitar", "Corviknight", "Basculegion-M"], sets: [
    { ability: "Chlorophyll", item: "Scovillainite", moves: ["Flamethrower", "Giga Drain", "Rage Powder", "Protect"] },
    { ability: "Prankster", item: "Sitrus Berry", moves: ["Fake Out", "Reflect", "Light Screen", "Thunder Wave"] },
    { ability: "Sand Rush", item: "Focus Sash", moves: ["Rock Slide", "Accelerock", "Howl", "Protect"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Helping Hand", "Protect"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Iron Head", "Body Press", "Bulk Up", "Protect"] },
    { ability: "Swift Swim", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-346", tournament: "ALDTOUR CART #10 (Reg M-A)", players: 21, placement: 15, player: "Steady96", wins: 1, losses: 3, pokemonIds: [6, 445, 700, 981, 10336, 3], pokemonNames: ["Charizard", "Garchomp", "Sylveon", "Farigiraf", "Hisuian Samurott", "Venusaur"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Rough Skin", item: "Garchompite", moves: ["Dragon Claw", "Rock Slide", "Earthquake", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Quick Attack", "Moonblast", "Detect"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Twin Beam", "Helping Hand", "Protect"] },
    { ability: "Sharpness", item: "Choice Scarf", moves: ["Sacred Sword", "Ceaseless Edge", "Aqua Cutter", "Flip Turn"] },
    { ability: "Chlorophyll", item: "Focus Sash", moves: ["Sleep Powder", "Sludge Bomb", "Giga Drain", "Protect"] }
  ] },
  { id: "ct-347", tournament: "ALDTOUR CART #10 (Reg M-A)", players: 21, placement: 16, player: "Orttega15", wins: 1, losses: 3, pokemonIds: [115, 324, 981, 858, 983, 727], pokemonNames: ["Kangaskhan", "Torkoal", "Farigiraf", "Hatterene", "Kingambit", "Incineroar"], sets: [
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Double-Edge", "Low Kick", "Sucker Punch", "Fake Out"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Weather Ball", "Earth Power", "Protect"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Psychic", "Hyper Voice", "Helping Hand", "Trick Room"] },
    { ability: "Magic Bounce", item: "Focus Sash", moves: ["Dazzling Gleam", "Psychic", "Trick Room", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Intimidate", item: "White Herb", moves: ["Close Combat", "Darkest Lariat", "Fake Out", "Flare Blitz"] }
  ] },
  { id: "ct-348", tournament: "ALDTOUR CART #10 (Reg M-A)", players: 21, placement: 17, player: "llydmc07", wins: 0, losses: 1, pokemonIds: [6, 445, 3, 903, 902, 547], pokemonNames: ["Charizard", "Garchomp", "Venusaur", "Sneasler", "Basculegion-M", "Whimsicott"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Protect", "Weather Ball", "Air Slash"] },
    { ability: "Rough Skin", item: "Haban Berry", moves: ["Earthquake", "Rock Slide", "Dragon Claw", "Protect"] },
    { ability: "Chlorophyll", item: "Focus Sash", moves: ["Sleep Powder", "Sludge Bomb", "Energy Ball", "Earth Power"] },
    { ability: "Unburden", item: "White Herb", moves: ["Rock Slide", "Fake Out", "Close Combat", "Dire Claw"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Flip Turn", "Wave Crash", "Last Respects", "Aqua Jet"] },
    { ability: "Prankster", item: "Sitrus Berry", moves: ["Moonblast", "Encore", "Protect", "Tailwind"] }
  ] },
  { id: "ct-349", tournament: "ALDTOUR CART #10 (Reg M-A)", players: 21, placement: 18, player: "JordiUnderscore", wins: 0, losses: 2, pokemonIds: [94, 727, 1013, 186, 428, 10009], pokemonNames: ["Gengar", "Incineroar", "Sinistcha", "Politoed", "Lopunny", "Wash Rotom"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Protect", "Perish Song", "Disable", "Shadow Ball"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Fake Out", "Parting Shot", "Throat Chop", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Protect", "Trick Room", "Rage Powder", "Matcha Gotcha"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Protect", "Perish Song", "Weather Ball", "Encore"] },
    { ability: "Limber", item: "Lopunnite", moves: ["Protect", "Close Combat", "Giga Impact", "Fake Out"] },
    { ability: "Levitate", item: "Leftovers", moves: ["Hydro Pump", "Volt Switch", "Will-O-Wisp", "Protect"] }
  ] },
  { id: "ct-350", tournament: "ALDTOUR CART #10 (Reg M-A)", players: 21, placement: 19, player: "Elprocino", wins: 0, losses: 2, pokemonIds: [6, 902, 983, 350, 142, 445], pokemonNames: ["Charizard", "Basculegion-M", "Kingambit", "Milotic", "Aerodactyl", "Garchomp"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Aqua Jet", "Liquidation", "Last Respects", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Icy Wind", "Scald", "Recover", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"] }
  ] },
  { id: "ct-351", tournament: "ALDTOUR CART #10 (Reg M-A)", players: 21, placement: 20, player: "Sj1992", wins: 0, losses: 5, pokemonIds: [510, 142, 212, 699, 10340, 10341], pokemonNames: ["Liepard", "Aerodactyl", "Scizor", "Aurorus", "Hisuian Zoroark", "Hisuian Decidueye"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Knock Off", "Yawn", "Encore", "Fake Out"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Swords Dance", "Bug Bite", "Protect"] },
    { ability: "Snow Warning", item: "Sitrus Berry", moves: ["Protect", "Blizzard", "Ancient Power", "Freeze-Dry"] },
    { ability: "Illusion", item: "Choice Scarf", moves: ["Shadow Ball", "Icy Wind", "Psychic", "Flamethrower"] },
    { ability: "Scrappy", item: "Scope Lens", moves: ["Leaf Blade", "Triple Arrows", "Sucker Punch", "Protect"] }
  ] },
  { id: "ct-352", tournament: "ALDTOUR CART #10 (Reg M-A)", players: 21, placement: 21, player: "Stuart R", wins: 0, losses: 2, pokemonIds: [981, 547, 700, 902, 6, 983], pokemonNames: ["Farigiraf", "Whimsicott", "Sylveon", "Basculegion-M", "Charizard", "Kingambit"], sets: [
    { ability: "Armor Tail", item: "Twisted Spoon", moves: ["Twin Beam", "Hyper Beam", "Helping Hand", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Fake Tears"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Beam", "Moonblast", "Quick Attack", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Aqua Jet", "Wave Crash", "Flip Turn"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] }
  ] },
  { id: "ct-353", tournament: "Thalera Champions Cheese #04 - Gerações", players: 13, placement: 1, player: "aerxdri", wins: 7, losses: 0, pokemonIds: [609, 903, 902, 547, 10340, 858], pokemonNames: ["Chandelure", "Sneasler", "Basculegion-M", "Whimsicott", "Hisuian Zoroark", "Hatterene"], sets: [
    { ability: "Flash Fire", item: "Chandelurite", moves: ["Heat Wave", "Shadow Ball", "Minimize", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Swords Dance", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Wave Crash", "Flip Turn", "Aqua Jet"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Illusion", item: "Spell Tag", moves: ["Bitter Malice", "Icy Wind", "Taunt", "Protect"] },
    { ability: "Magic Bounce", item: "Fairy Feather", moves: ["Psychic", "Dazzling Gleam", "Trick Room", "Protect"] }
  ] },
  { id: "ct-354", tournament: "Thalera Champions Cheese #04 - Gerações", players: 13, placement: 2, player: "Whayron", wins: 5, losses: 2, pokemonIds: [212, 181, 279, 282, 302, 350], pokemonNames: ["Scizor", "Ampharos", "Pelipper", "Gardevoir", "Sableye", "Milotic"], sets: [
    { ability: "Technician", item: "Scizorite", moves: ["Protect", "Swords Dance", "Bullet Punch", "Close Combat"] },
    { ability: "Static", item: "Ampharosite", moves: ["Protect", "Thunderbolt", "Dragon Pulse", "Power Gem"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Protect", "Wide Guard", "Weather Ball", "Hurricane"] },
    { ability: "Trace", item: "Focus Sash", moves: ["Protect", "Trick Room", "Psychic", "Moonblast"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Reflect", "Light Screen", "Pain Split", "Encore"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Protect", "Scald", "Ice Beam", "Life Dew"] }
  ] },
  { id: "ct-355", tournament: "Thalera Champions Cheese #04 - Gerações", players: 13, placement: 3, player: "gabenook", wins: 3, losses: 3, pokemonIds: [10009, 903, 445, 478, 823, 5157], pokemonNames: ["Wash Rotom", "Sneasler", "Garchomp", "Froslass", "Corviknight", "Hisuian Typhlosion"], sets: [
    { ability: "Levitate", item: "Quick Claw", moves: ["Will-O-Wisp", "Thunderbolt", "Hydro Pump", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Rock Slide", "Earthquake", "Dragon Claw", "Stomping Tantrum"] },
    { ability: "Snow Cloak", item: "Froslassite", moves: ["Blizzard", "Aurora Veil", "Shadow Ball", "Protect"] },
    { ability: "Mirror Armor", item: "Focus Sash", moves: ["Iron Defense", "Body Press", "Tailwind", "Iron Head"] },
    { ability: "Blaze", item: "Charcoal", moves: ["Shadow Ball", "Heat Wave", "Eruption", "Protect"] }
  ] },
  { id: "ct-356", tournament: "Thalera Champions Cheese #04 - Gerações", players: 13, placement: 4, player: "comox", wins: 3, losses: 3, pokemonIds: [10341, 302, 730, 310, 727, 279], pokemonNames: ["Hisuian Decidueye", "Sableye", "Primarina", "Manectric", "Incineroar", "Pelipper"], sets: [
    { ability: "Scrappy", item: "Scope Lens", moves: ["Protect", "Leaf Blade", "Triple Arrows", "Sucker Punch"], teraType: "Grass" },
    { ability: "Prankster", item: "Mental Herb", moves: ["Encore", "Disable", "Taunt", "Rain Dance"], teraType: "Dark" },
    { ability: "Liquid Voice", item: "Mystic Water", moves: ["Protect", "Hyper Voice", "Moonblast", "Calm Mind"], teraType: "Water" },
    { ability: "Lightning Rod", item: "Manectite", moves: ["Volt Switch", "Thunder", "Snarl", "Flamethrower"], teraType: "Electric" },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"], teraType: "Fire" },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Tailwind", "Weather Ball", "Hurricane", "Wide Guard"], teraType: "Water" }
  ] },
  { id: "ct-357", tournament: "Thalera Champions Cheese #04 - Gerações", players: 13, placement: 5, player: "DUhZER4", wins: 3, losses: 2, pokemonIds: [903, 186, 900, 902, 212, 823], pokemonNames: ["Sneasler", "Politoed", "Kleavor", "Basculegion-M", "Scizor", "Corviknight"], sets: [
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Coaching"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Helping Hand", "Icy Wind", "Protect"] },
    { ability: "Sharpness", item: "Choice Scarf", moves: ["X-Scissor", "Stone Axe", "Close Combat", "U-turn"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Last Respects", "Liquidation", "Aqua Jet", "Protect"] },
    { ability: "Technician", item: "Scizorite", moves: ["Close Combat", "Bullet Punch", "Bug Bite", "Protect"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Tailwind", "Bulk Up", "Brave Bird", "Roost"] }
  ] },
  { id: "ct-358", tournament: "Thalera Champions Cheese #04 - Gerações", players: 13, placement: 6, player: "Odui", wins: 3, losses: 2, pokemonIds: [445, 460, 903, 478, 823, 10009], pokemonNames: ["Garchomp", "Abomasnow", "Sneasler", "Froslass", "Corviknight", "Wash Rotom"], sets: [
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Earthquake", "Rock Slide", "Dragon Claw", "Fire Fang"] },
    { ability: "Snow Warning", item: "Focus Sash", moves: ["Blizzard", "Aurora Veil", "Giga Drain", "Protect"] },
    { ability: "Poison Touch", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Cursed Body", item: "Never-Melt Ice", moves: ["Protect", "Shadow Ball", "Blizzard", "Frost Breath"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Brave Bird", "Body Press", "Tailwind", "U-Turn"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Hydro Pump", "Thunderbolt", "Will-O-Wisp", "Volt Switch"] }
  ] },
  { id: "ct-359", tournament: "Thalera Champions Cheese #04 - Gerações", players: 13, placement: 7, player: "erichmr", wins: 3, losses: 2, pokemonIds: [658, 663, 670, 727, 763, 784], pokemonNames: ["Greninja", "Talonflame", "Floette", "Incineroar", "Tsareena", "Kommo-o"], sets: [
    { ability: "Protean", item: "Greninjite", moves: ["Ice Beam", "Dark Pulse", "Sludge Wave", "Protect"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Flare Blitz", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] },
    { ability: "Queenly Majesty", item: "Sitrus Berry", moves: ["Trop Kick", "Low Kick", "Triple Axel", "Sunny Day"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Clangorous Soul", "Aura Sphere", "Protect"] }
  ] },
  { id: "ct-360", tournament: "Thalera Champions Cheese #04 - Gerações", players: 13, placement: 8, player: "Denynath", wins: 3, losses: 2, pokemonIds: [310, 279, 902, 903, 887, 900], pokemonNames: ["Manectric", "Pelipper", "Basculegion-M", "Sneasler", "Dragapult", "Kleavor"], sets: [
    { ability: "Lightning Rod", item: "Manectite", moves: ["Thunder", "Volt Switch", "Snarl", "Protect"], teraType: "Electric" },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Hurricane", "Muddy Water", "Tailwind", "Soak"], teraType: "Water" },
    { ability: "Swift Swim", item: "Mystic Water", moves: ["Wave Crash", "Phantom Force", "Aqua Jet", "Protect"], teraType: "Water" },
    { ability: "Poison Touch", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"], teraType: "Fighting" },
    { ability: "Clear Body", item: "Spell Tag", moves: ["Dragon Darts", "Phantom Force", "Breaking Swipe", "Protect"], teraType: "Dragon" },
    { ability: "Sharpness", item: "Sharp Beak", moves: ["Stone Axe", "X-Scissor", "Close Combat", "Protect"], teraType: "Rock" }
  ] },
  { id: "ct-361", tournament: "Thalera Champions Cheese #04 - Gerações", players: 13, placement: 9, player: "Smicer2566", wins: 2, losses: 3, pokemonIds: [655, 678, 302, 350, 324, 282], pokemonNames: ["Delphox", "Meowstic-M", "Sableye", "Milotic", "Torkoal", "Gardevoir"], sets: [
    { ability: "Magician", item: "Delphoxite", moves: ["Expanding Force", "Heat Wave", "Skill Swap", "Protect"] },
    { ability: "Prankster", item: "Mental Herb", moves: ["Psychic Terrain", "Expanding Force", "Trick Room", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Reflect", "Light Screen", "Encore", "Taunt"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Scald", "Life Dew", "Helping Hand", "Protect"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Heat Wave", "Earth Power", "Protect"] },
    { ability: "Telepathy", item: "Gardevoirite", moves: ["Protect", "Trick Room", "Hyper Voice", "Psyshock"] }
  ] },
  { id: "ct-362", tournament: "Thalera Champions Cheese #04 - Gerações", players: 13, placement: 10, player: "mari_ratagao", wins: 2, losses: 3, pokemonIds: [428, 461, 730, 10009, 758, 445], pokemonNames: ["Lopunny", "Weavile", "Primarina", "Wash Rotom", "Salazzle", "Garchomp"], sets: [
    { ability: "Scrappy", item: "Lopunnite", moves: ["Drain Punch", "Fake Out", "Ice Punch", "Protect"], teraType: "Normal" },
    { ability: "Pressure", item: "King's Rock", moves: ["Fake Out", "Knock Off", "Triple Axel", "Protect"], teraType: "Dark" },
    { ability: "Liquid Voice", item: "Leftovers", moves: ["Hyper Voice", "Protect", "Moonblast", "Life Dew"], teraType: "Water" },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Thunderbolt", "Hydro Pump", "Will-O-Wisp", "Protect"] },
    { ability: "Corrosion", item: "Focus Sash", moves: ["Toxic", "Sludge Bomb", "Heat Wave", "Protect"], teraType: "Poison" },
    { ability: "Rough Skin", item: "Quick Claw", moves: ["Rock Slide", "Dragon Claw", "Poison Jab", "Earthquake"] }
  ] },
  { id: "ct-363", tournament: "Thalera Champions Cheese #04 - Gerações", players: 13, placement: 11, player: "Rafanort", wins: 1, losses: 4, pokemonIds: [547, 530, 635, 637, 503, 663], pokemonNames: ["Whimsicott", "Excadrill", "Hydreigon", "Volcarona", "Samurott", "Talonflame"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Protect", "Tailwind", "Encore"] },
    { ability: "Sand Rush", item: "Excadrite", moves: ["Earthquake", "Rock Slide", "Iron Head", "Protect"] },
    { ability: "Levitate", item: "Haban Berry", moves: ["Dark Pulse", "Dragon Pulse", "Dragon Dance", "Protect"] },
    { ability: "Flame Body", item: "Charcoal", moves: ["Fiery Dance", "Heat Wave", "Protect", "Leech Life"] },
    { ability: "Torrent", item: "Mystic Water", moves: ["Hydro Pump", "Ice Beam", "Aqua Jet", "Protect"] },
    { ability: "Gale Wings", item: "Sitrus Berry", moves: ["Dual Wingbeat", "Overheat", "Tailwind", "Protect"] }
  ] },
  { id: "ct-364", tournament: "Thalera Champions Cheese #04 - Gerações", players: 13, placement: 12, player: "boddahmp3", wins: 0, losses: 5, pokemonIds: [670, 10340, 547, 655, 623, 681], pokemonNames: ["Floette", "Hisuian Zoroark", "Whimsicott", "Delphox", "Golurk", "Aegislash"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Light of Ruin", "Draining Kiss", "Protect", "Energy Ball"] },
    { ability: "Illusion", item: "Leftovers", moves: ["Bitter Malice", "Protect", "U-turn", "Will-O-Wisp"] },
    { ability: "Prankster", item: "Mental Herb", moves: ["Protect", "Tailwind", "Taunt", "Sleep Talk"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Flamethrower", "Heat Wave", "Dazzling Gleam", "Zen Headbutt"] },
    { ability: "Iron Fist", item: "Golurkite", moves: ["Earthquake", "Stone Edge", "Close Combat", "Flash Cannon"] },
    { ability: "Stance Change", item: "Focus Sash", moves: ["King's Shield", "Protect", "Shadow Sneak", "Rock Slide"] }
  ] },
  { id: "ct-365", tournament: "VGC UU Regulation M-A Weekly #4", players: 9, placement: 1, player: "Gabeeel", wins: 7, losses: 1, pokemonIds: [9, 666, 36, 908, 405, 937], pokemonNames: ["Blastoise", "Vivillon", "Clefable", "Meowscarada", "Luxray", "Ceruledge"], sets: [
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Water Spout", "Ice Beam", "Shell Smash", "Protect"] },
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Pollen Puff", "Rage Powder", "Tailwind", "Protect"] },
    { ability: "Unaware", item: "Leftovers", moves: ["Moonblast", "Follow Me", "Life Dew", "Protect"] },
    { ability: "Protean", item: "Choice Scarf", moves: ["Flower Trick", "Knock Off", "Sucker Punch", "U-turn"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Wild Charge", "Volt Switch", "Snarl", "Baby-Doll Eyes"] },
    { ability: "Flash Fire", item: "Passho Berry", moves: ["Bitter Blade", "Shadow Sneak", "Swords Dance", "Protect"] }
  ] },
  { id: "ct-366", tournament: "VGC UU Regulation M-A Weekly #4", players: 9, placement: 2, player: "Sinnoy", wins: 4, losses: 2, pokemonIds: [18, 553, 730, 908, 128, 5706], pokemonNames: ["Pidgeot", "Krookodile", "Primarina", "Meowscarada", "Tauros", "Hisuian Goodra"], sets: [
    { ability: "Big Pecks", item: "Pidgeotite", moves: ["Hurricane", "Heat Wave", "Tailwind", "Protect"] },
    { ability: "Intimidate", item: "Choice Scarf", moves: ["High Horsepower", "Knock Off", "Breaking Swipe", "Earthquake"] },
    { ability: "Liquid Voice", item: "Mystic Water", moves: ["Hyper Voice", "Moonblast", "Hydro Cannon", "Protect"] },
    { ability: "Overgrow", item: "Focus Sash", moves: ["Flower Trick", "Knock Off", "Triple Axel", "Protect"] },
    { ability: "Intimidate", item: "White Herb", moves: ["Flare Blitz", "Close Combat", "Rock Slide", "Protect"] },
    { ability: "Shell Armor", item: "Chople Berry", moves: ["Flash Cannon", "Draco Meteor", "Muddy Water", "Protect"] }
  ] },
  { id: "ct-367", tournament: "VGC UU Regulation M-A Weekly #4", players: 9, placement: 3, player: "ItzS1lver", wins: 3, losses: 2, pokemonIds: [149, 186, 10902, 448, 10012, 461], pokemonNames: ["Dragonite", "Politoed", "Basculegion-F", "Lucario", "Mow Rotom", "Weavile"], sets: [
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Thunderbolt", "Hurricane", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Icy Wind", "Helping Hand", "Protect"] },
    { ability: "Swift Swim", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Protect"] },
    { ability: "Inner Focus", item: "Lucarionite", moves: ["Bullet Punch", "Close Combat", "Meteor Mash", "Detect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Leaf Storm", "Thunder", "Trick", "Volt Switch"] },
    { ability: "Pickpocket", item: "Focus Sash", moves: ["Knock Off", "Triple Axel", "Fake Out", "Protect"] }
  ] },
  { id: "ct-368", tournament: "VGC UU Regulation M-A Weekly #4", players: 9, placement: 4, player: "merrypasta", wins: 4, losses: 2, pokemonIds: [428, 637, 730, 908, 149, 10340], pokemonNames: ["Lopunny", "Volcarona", "Primarina", "Meowscarada", "Dragonite", "Hisuian Zoroark"], sets: [
    { ability: "Limber", item: "Lopunnite", moves: ["Close Combat", "Triple Axel", "Fake Out", "Encore"] },
    { ability: "Flame Body", item: "Leftovers", moves: ["Heat Wave", "Giga Drain", "Protect", "Quiver Dance"] },
    { ability: "Liquid Voice", item: "Mystic Water", moves: ["Hyper Voice", "Moonblast", "Protect", "Hydro Pump"] },
    { ability: "Protean", item: "Choice Scarf", moves: ["Flower Trick", "Knock Off", "Triple Axel", "U-turn"] },
    { ability: "Multiscale", item: "Dragon Fang", moves: ["Scale Shot", "Stomping Tantrum", "Protect", "Tailwind"] },
    { ability: "Illusion", item: "Focus Sash", moves: ["Bitter Malice", "Icy Wind", "Protect", "Taunt"] }
  ] },
  { id: "ct-369", tournament: "VGC UU Regulation M-A Weekly #4", players: 9, placement: 5, player: "Mixon", wins: 3, losses: 2, pokemonIds: [699, 6199, 358, 471, 752, 115], pokemonNames: ["Aurorus", "Galarian Slowking", "Chimecho", "Glaceon", "Araquanid", "Kangaskhan"], sets: [
    { ability: "Snow Warning", item: "Chople Berry", moves: ["Blizzard", "Ancient Power", "Aurora Veil", "Protect"] },
    { ability: "Regenerator", item: "Colbur Berry", moves: ["Flamethrower", "Chilly Reception", "Trick Room", "Protect"] },
    { ability: "Levitate", item: "Chimechite", moves: ["Flash Cannon", "Psychic", "Recover", "Trick Room"] },
    { ability: "Ice Body", item: "Never-Melt Ice", moves: ["Blizzard", "Freeze-Dry", "Weather Ball", "Protect"] },
    { ability: "Water Bubble", item: "Leftovers", moves: ["Substitute", "Wide Guard", "Liquidation", "Protect"] },
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Sucker Punch", "Drain Punch", "Fake Out", "Double-Edge"] }
  ] },
  { id: "ct-370", tournament: "VGC UU Regulation M-A Weekly #4", players: 9, placement: 5, player: "swaggervgc", wins: 2, losses: 2, pokemonIds: [115, 324, 858, 666, 10902, 534], pokemonNames: ["Kangaskhan", "Torkoal", "Hatterene", "Vivillon", "Basculegion-F", "Conkeldurr"], sets: [
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Fake Out", "Double-Edge", "Low Kick", "Protect"] },
    { ability: "Drought", item: "Charcoal", moves: ["Heat Wave", "Earth Power", "Eruption", "Protect"] },
    { ability: "Magic Bounce", item: "Babiri Berry", moves: ["Psychic", "Dazzling Gleam", "Trick Room", "Protect"] },
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Rage Powder", "Sleep Powder", "Hurricane", "Protect"] },
    { ability: "Adaptability", item: "Sitrus Berry", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Iron Fist", item: "Black Belt", moves: ["Mach Punch", "Drain Punch", "Rock Slide", "Detect"] }
  ] },
  { id: "ct-371", tournament: "VGC UU Regulation M-A Weekly #4", players: 9, placement: 7, player: "businesspiggy", wins: 2, losses: 2, pokemonIds: [5157, 470, 324, 765, 181, 666], pokemonNames: ["Hisuian Typhlosion", "Leafeon", "Torkoal", "Oranguru", "Ampharos", "Vivillon"], sets: [
    { ability: "Blaze", item: "Choice Scarf", moves: ["Eruption", "Overheat", "Shadow Ball", "Heat Wave"] },
    { ability: "Chlorophyll", item: "Miracle Seed", moves: ["Solar Blade", "X-Scissor", "Fake Tears", "Protect"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Earth Power", "Helping Hand", "Protect"] },
    { ability: "Inner Focus", item: "Sitrus Berry", moves: ["Psychic", "Instruct", "Trick Room", "Yawn"] },
    { ability: "Static", item: "Ampharosite", moves: ["Thunderbolt", "Dragon Pulse", "Volt Switch", "Protect"] },
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Pollen Puff", "Sleep Powder", "Rage Powder", "Protect"] }
  ] },
  { id: "ct-372", tournament: "VGC UU Regulation M-A Weekly #4", players: 9, placement: 7, player: "PuffyWhy89", wins: 2, losses: 2, pokemonIds: [5157, 470, 324, 765, 181, 666], pokemonNames: ["Hisuian Typhlosion", "Leafeon", "Torkoal", "Oranguru", "Ampharos", "Vivillon"], sets: [
    { ability: "Blaze", item: "Choice Scarf", moves: ["Eruption", "Overheat", "Shadow Ball", "Heat Wave"] },
    { ability: "Chlorophyll", item: "Miracle Seed", moves: ["Solar Blade", "X-Scissor", "Fake Tears", "Protect"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Earth Power", "Helping Hand", "Protect"] },
    { ability: "Inner Focus", item: "Sitrus Berry", moves: ["Psychic", "Instruct", "Trick Room", "Yawn"] },
    { ability: "Mold Breaker", item: "Ampharosite", moves: ["Thunderbolt", "Dragon Pulse", "Volt Switch", "Protect"] },
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Pollen Puff", "Sleep Powder", "Rage Powder", "Protect"] }
  ] },
  { id: "ct-373", tournament: "VGC UU Regulation M-A Weekly #4", players: 9, placement: 9, player: "donovan_09", wins: 1, losses: 2, pokemonIds: [623, 730, 858, 36, 10012, 324], pokemonNames: ["Golurk", "Primarina", "Hatterene", "Clefable", "Mow Rotom", "Torkoal"], sets: [
    { ability: "Iron Fist", item: "Golurkite", moves: ["Headlong Rush", "Poltergeist", "Protect", "Ice Punch"] },
    { ability: "Liquid Voice", item: "Leftovers", moves: ["Hyper Voice", "Moonblast", "Calm Mind", "Protect"] },
    { ability: "Magic Bounce", item: "Twisted Spoon", moves: ["Psychic", "Dazzling Gleam", "Protect", "Trick Room"] },
    { ability: "Magic Guard", item: "Sitrus Berry", moves: ["Follow Me", "Moonblast", "After You", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Thunderbolt", "Trick", "Leaf Storm", "Volt Switch"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Heat Wave", "Earth Power", "Protect"] }
  ] },
  { id: "ct-374", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 1, player: "ILS | L ", wins: 7, losses: 1, pokemonIds: [6, 478, 983, 902, 547, 900], pokemonNames: ["Charizard", "Froslass", "Kingambit", "Basculegion-M", "Whimsicott", "Kleavor"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Protect", "Weather Ball"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Thunderbolt", "Protect", "Shadow Ball"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Prankster", item: "Coba Berry", moves: ["Tailwind", "Moonblast", "Protect", "Encore"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Stone Axe", "Close Combat", "Night Slash", "Protect"] }
  ] },
  { id: "ct-375", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 2, player: "Devndapplin", wins: 6, losses: 2, pokemonIds: [3, 160, 678, 1018, 937, 279], pokemonNames: ["Venusaur", "Feraligatr", "Meowstic-M", "Archaludon", "Ceruledge", "Pelipper"], sets: [
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Protect", "Giga Drain", "Earth Power", "Sludge Bomb"] },
    { ability: "Sheer Force", item: "Feraligite", moves: ["Protect", "Ice Punch", "Liquidation", "Double-Edge"], teraType: "Grass" },
    { ability: "Prankster", item: "Sitrus Berry", moves: ["Yawn", "Reflect", "Rain Dance", "Light Screen"], teraType: "Grass" },
    { ability: "Stamina", item: "Leftovers", moves: ["Protect", "Electro Shot", "Flash Cannon", "Dragon Pulse"], teraType: "Grass" },
    { ability: "Flash Fire", item: "Colbur Berry", moves: ["Protect", "Poltergeist", "Bitter Blade", "Shadow Sneak"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Protect", "Tailwind", "Hurricane", "Muddy Water"], teraType: "Grass" }
  ] },
  { id: "ct-376", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 3, player: "DoctorDragapult", wins: 5, losses: 2, pokemonIds: [478, 10336, 445, 903, 142, 925], pokemonNames: ["Froslass", "Hisuian Samurott", "Garchomp", "Sneasler", "Aerodactyl", "Maushold"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Protect", "Aurora Veil"] },
    { ability: "Sharpness", item: "Black Glasses", moves: ["Ceaseless Edge", "Sacred Sword", "Protect", "Sucker Punch"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Earthquake", "Scale Shot", "Protect", "Swords Dance"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Dual Wingbeat", "Rock Slide", "Protect", "Tailwind"] },
    { ability: "Friend Guard", item: "Sitrus Berry", moves: ["Feint", "Follow Me", "Protect", "Helping Hand"] }
  ] },
  { id: "ct-377", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 4, player: "Dess ㅤ", wins: 4, losses: 3, pokemonIds: [428, 1018, 94, 902, 279, 727], pokemonNames: ["Lopunny", "Archaludon", "Gengar", "Basculegion-M", "Pelipper", "Incineroar"], sets: [
    { ability: "Cute Charm", item: "Lopunnite", moves: ["Close Combat", "Fake Out", "Protect", "Triple Axel"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Dragon Pulse", "Flash Cannon", "Electro Shot", "Protect"] },
    { ability: "Cursed Body", item: "Gengarite", moves: ["Sludge Bomb", "Rain Dance", "Shadow Ball", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Flip Turn", "Last Respects"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Weather Ball", "Hurricane", "Protect", "Wide Guard"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Darkest Lariat", "Fake Out", "Roar", "Parting Shot"] }
  ] },
  { id: "ct-378", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 5, player: "Stallcelth", wins: 5, losses: 1, pokemonIds: [970, 663, 10103, 445, 10009, 983], pokemonNames: ["Glimmora", "Talonflame", "Alolan Ninetales", "Garchomp", "Wash Rotom", "Kingambit"], sets: [
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Gale Wings", item: "No Item", moves: ["Acrobatics", "Tailwind", "Flare Blitz", "Protect"] },
    { ability: "Snow Warning", item: "Never-Melt Ice", moves: ["Blizzard", "Aurora Veil", "Encore", "Protect"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Earthquake", "Dragon Claw", "Swords Dance", "Protect"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Volt Switch", "Hydro Pump", "Will-O-Wisp", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] }
  ] },
  { id: "ct-379", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 6, player: "Eduardo_Leite", wins: 4, losses: 2, pokemonIds: [310, 279, 1018, 212, 964, 1013], pokemonNames: ["Manectric", "Pelipper", "Archaludon", "Scizor", "Palafin", "Sinistcha"], sets: [
    { ability: "Lightning Rod", item: "Manectite", moves: ["Snarl", "Protect", "Thunderbolt", "Volt Switch"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Weather Ball", "Protect", "Tailwind"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Snarl", "Flash Cannon", "Dragon Pulse"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Protect", "Dual Wingbeat", "Bug Bite"] },
    { ability: "Zero to Hero", item: "Mystic Water", moves: ["Protect", "Wave Crash", "Flip Turn", "Jet Punch"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Rage Powder", "Trick Room", "Matcha Gotcha", "Life Dew"] }
  ] },
  { id: "ct-380", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 7, player: "Z2R caiovibora", wins: 3, losses: 3, pokemonIds: [1018, 902, 727, 302, 279, 3], pokemonNames: ["Archaludon", "Basculegion-M", "Incineroar", "Sableye", "Pelipper", "Venusaur"], sets: [
    { ability: "Stamina", item: "Leftovers", moves: ["Flash Cannon", "Dragon Pulse", "Electro Shot", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Parting Shot", "Fake Out", "Helping Hand", "Throat Chop"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Will-O-Wisp", "Light Screen", "Encore", "Rain Dance"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Tailwind", "Weather Ball", "Hurricane", "Wide Guard"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Giga Drain", "Sludge Bomb", "Earth Power", "Protect"] }
  ] },
  { id: "ct-381", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 8, player: "NMR| leoscerni", wins: 3, losses: 3, pokemonIds: [248, 530, 823, 778, 635, 10009], pokemonNames: ["Tyranitar", "Excadrill", "Corviknight", "Mimikyu", "Hydreigon", "Wash Rotom"], sets: [
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Protect", "Low Kick"] },
    { ability: "Sand Rush", item: "Focus Sash", moves: ["Iron Head", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Brave Bird", "Bulk Up", "Roost", "Tailwind"] },
    { ability: "Disguise", item: "White Herb", moves: ["Shadow Claw", "Play Rough", "Shadow Sneak", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Draco Meteor", "Dark Pulse", "Heat Wave", "Snarl"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Hydro Pump", "Thunderbolt", "Will-O-Wisp", "Protect"] }
  ] },
  { id: "ct-382", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 9, player: "reTakeshi", wins: 3, losses: 2, pokemonIds: [149, 681, 6, 547, 530, 350], pokemonNames: ["Dragonite", "Aegislash", "Charizard", "Whimsicott", "Excadrill", "Milotic"], sets: [
    { ability: "Multiscale", item: "Dragon Fang", moves: ["Dragon Claw", "Low Kick", "Rock Slide", "Protect"] },
    { ability: "Stance Change", item: "Focus Sash", moves: ["Iron Head", "Poltergeist", "Shadow Sneak", "Wide Guard"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Prankster", item: "Kebia Berry", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Mold Breaker", item: "Choice Scarf", moves: ["Earthquake", "High Horsepower", "Iron Head", "Rock Slide"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Scald", "Icy Wind", "Recover", "Protect"] }
  ] },
  { id: "ct-383", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 10, player: "Rafael Trevisan", wins: 3, losses: 2, pokemonIds: [94, 727, 186, 1018, 1013, 428], pokemonNames: ["Gengar", "Incineroar", "Politoed", "Archaludon", "Sinistcha", "Lopunny"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Protect", "Perish Song", "Shadow Ball", "Sludge Bomb"] },
    { ability: "Intimidate", item: "Shuca Berry", moves: ["Protect", "Fake Out", "Parting Shot", "Throat Chop"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Protect", "Weather Ball", "Encore", "Perish Song"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Protect", "Electro Shot", "Dragon Pulse", "Flash Cannon"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Protect", "Rage Powder", "Matcha Gotcha", "Life Dew"] },
    { ability: "Limber", item: "Lopunnite", moves: ["Protect", "Fake Out", "Close Combat", "U-turn"] }
  ] },
  { id: "ct-384", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 11, player: "Tang azul do Stut Liro", wins: 3, losses: 2, pokemonIds: [445, 547, 635, 227, 6, 903], pokemonNames: ["Garchomp", "Whimsicott", "Hydreigon", "Skarmory", "Charizard", "Sneasler"], sets: [
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Protect", "Moonblast", "Tailwind", "Encore"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Dark Pulse", "Snarl", "Draco Meteor", "Earth Power"] },
    { ability: "Sturdy", item: "Skarmorite", moves: ["Brave Bird", "Iron Head", "Rock Tomb", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Protect", "Fake Out"] }
  ] },
  { id: "ct-385", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 12, player: "Matheus Carretta", wins: 3, losses: 2, pokemonIds: [902, 445, 983, 700, 142, 6], pokemonNames: ["Basculegion-M", "Garchomp", "Kingambit", "Sylveon", "Aerodactyl", "Charizard"], sets: [
    { ability: "Adaptability", item: "Focus Sash", moves: ["Protect", "Last Respects", "Aqua Jet", "Liquidation"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Rock Tomb", "Earthquake", "Dragon Claw", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Low Kick", "Iron Head"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Detect", "Hyper Voice", "Moonblast", "Quick Attack"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Tailwind", "Dual Wingbeat", "Rock Slide", "Wide Guard"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] }
  ] },
  { id: "ct-386", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 13, player: "Puxcci", wins: 3, losses: 2, pokemonIds: [212, 279, 1018, 902, 149, 903], pokemonNames: ["Scizor", "Pelipper", "Archaludon", "Basculegion-M", "Dragonite", "Sneasler"], sets: [
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "dual wingbeat", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Weather Ball", "Hurricane", "Tailwind", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Flash Cannon", "Dragon Pulse", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Flip Turn"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Draco Meteor", "Hurricane", "Ice Beam", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] }
  ] },
  { id: "ct-387", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 14, player: "HyogaVGC", wins: 2, losses: 3, pokemonIds: [547, 983, 902, 445, 6, 149], pokemonNames: ["Whimsicott", "Kingambit", "Basculegion-M", "Garchomp", "Charizard", "Dragonite"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Protect", "Moonblast", "Encore", "Tailwind"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Iron Head", "Kowtow Cleave", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Aqua Jet", "Wave Crash", "Last Respects", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Thunderbolt", "Heat Wave", "Protect"] }
  ] },
  { id: "ct-388", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 15, player: "NMR | Kuroryu", wins: 2, losses: 3, pokemonIds: [655, 983, 903, 445, 681, 10103], pokemonNames: ["Delphox", "Kingambit", "Sneasler", "Garchomp", "Aegislash", "Alolan Ninetales"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Psychic", "Heat Wave", "Substitute", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Stomping Tantrum", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Stance Change", item: "Focus Sash", moves: ["Poltergeist", "Sacred Sword", "Shadow Sneak", "King's Shield"] },
    { ability: "Snow Warning", item: "Choice Scarf", moves: ["Blizzard", "Icy Wind", "Freeze-Dry", "Fake Tears"] }
  ] },
  { id: "ct-389", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 16, player: "Alexsander Camargo", wins: 2, losses: 3, pokemonIds: [981, 727, 780, 700, 324, 350], pokemonNames: ["Farigiraf", "Incineroar", "Drampa", "Sylveon", "Torkoal", "Milotic"], sets: [
    { ability: "Armor Tail", item: "Mental Herb", moves: ["Hyper Voice", "Imprison", "Trick Room", "Protect"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Flare Blitz", "Darkest Lariat", "Parting Shot", "Fake Out"] },
    { ability: "Cloud Nine", item: "Drampanite", moves: ["Dragon Pulse", "Hyper Voice", "Earth Power", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Quick Attack", "Hyper Voice", "Moonblast", "Detect"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Weather Ball", "Earth Power", "Protect"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Scald", "Ice Beam", "Life Dew", "Protect"] }
  ] },
  { id: "ct-390", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 17, player: "Pedro Soares", wins: 2, losses: 3, pokemonIds: [115, 727, 902, 10009, 1013, 970], pokemonNames: ["Kangaskhan", "Incineroar", "Basculegion-M", "Wash Rotom", "Sinistcha", "Glimmora"], sets: [
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Body Slam", "Fake Out", "Sucker Punch", "Drain Punch"] },
    { ability: "Intimidate", item: "Leftovers", moves: ["Fake Out", "Throat Chop", "Flare Blitz", "Parting Shot"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Flip Turn", "Aqua Jet", "Wave Crash", "Last Respects"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Hydro Pump", "Will-O-Wisp", "Volt Switch", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Earth Power", "Power Gem", "Sludge Bomb", "Spiky Shield"] }
  ] },
  { id: "ct-391", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 18, player: "EzAmericoJr", wins: 2, losses: 3, pokemonIds: [478, 900, 903, 902, 983, 547], pokemonNames: ["Froslass", "Kleavor", "Sneasler", "Basculegion-M", "Kingambit", "Whimsicott"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Shadow Ball", "Aurora Veil", "Blizzard", "Protect"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Close Combat", "Stone Axe", "Protect", "Feint"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Flip Turn"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] }
  ] },
  { id: "ct-392", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 19, player: "docs", wins: 2, losses: 3, pokemonIds: [5157, 547, 10336, 700, 181, 981], pokemonNames: ["Hisuian Typhlosion", "Whimsicott", "Hisuian Samurott", "Sylveon", "Ampharos", "Farigiraf"], sets: [
    { ability: "Blaze", item: "Charcoal", moves: ["Eruption", "Burn Up", "Shadow Ball", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Sunny Day", "Protect"] },
    { ability: "Sharpness", item: "Black Glasses", moves: ["Ceaseless Edge", "Sucker Punch", "Sacred Sword", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Moonblast", "Quick Attack", "Hyper Voice", "Detect"] },
    { ability: "Plus", item: "Ampharosite", moves: ["Thunderbolt", "Focus Blast", "Dragon Pulse", "Protect"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Psychic", "Trick Room", "Foul Play", "Protect"] }
  ] },
  { id: "ct-393", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 20, player: "LufeMatiusso", wins: 1, losses: 4, pokemonIds: [6, 547, 983, 902, 445, 970], pokemonNames: ["Charizard", "Whimsicott", "Kingambit", "Basculegion-M", "Garchomp", "Glimmora"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Iron Head"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Protect", "Poison Jab"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] }
  ] },
  { id: "ct-394", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 21, player: "Sapo Que Fuma", wins: 1, losses: 2, pokemonIds: [279, 1018, 154, 902, 925, 887], pokemonNames: ["Pelipper", "Archaludon", "Meganium", "Basculegion-M", "Maushold", "Dragapult"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Hurricane", "Weather Ball", "Wide Guard", "Tailwind"] },
    { ability: "Stamina", item: "Scope Lens", moves: ["Draco Meteor", "Flash Cannon", "Electro Shot", "Protect"] },
    { ability: "Overgrow", item: "Meganiumite", moves: ["Weather Ball", "Solar Beam", "Dazzling Gleam", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Flip Turn"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Super Fang", "Follow Me", "Taunt", "Protect"] },
    { ability: "Clear Body", item: "Focus Sash", moves: ["Dragon Darts", "Dragon Cheer", "Reflect", "Light Screen"] }
  ] },
  { id: "ct-395", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 22, player: "beelzebruno", wins: 1, losses: 4, pokemonIds: [142, 6, 428, 445, 3, 10009], pokemonNames: ["Aerodactyl", "Charizard", "Lopunny", "Garchomp", "Venusaur", "Wash Rotom"], sets: [
    { ability: "Unnerve", item: "Charti Berry", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Taunt"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Air Slash", "Heat Wave", "Solar Beam", "Protect"] },
    { ability: "Limber", item: "Lopunnite", moves: ["Triple Axel", "U-turn", "Close Combat", "Fake Out"] },
    { ability: "Rough Skin", item: "White Herb", moves: ["Earthquake", "Dragon Claw", "Protect", "Rock Slide"] },
    { ability: "Chlorophyll", item: "Focus Sash", moves: ["Earth Power", "Sludge Bomb", "Giga Drain", "Sleep Powder"] },
    { ability: "Levitate", item: "Leftovers", moves: ["Hydro Pump", "Volt Switch", "Will-O-Wisp", "Helping Hand"] }
  ] },
  { id: "ct-396", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 23, player: "murden", wins: 1, losses: 4, pokemonIds: [324, 214, 248, 579, 395, 279], pokemonNames: ["Torkoal", "Heracross", "Tyranitar", "Reuniclus", "Empoleon", "Pelipper"], sets: [
    { ability: "Drought", item: "Charcoal", moves: ["Protect", "Eruption", "Earth Power", "Helping Hand"] },
    { ability: "Moxie", item: "Heracronite", moves: ["Protect", "Bullet Seed", "Pin Missile", "Brick Break"] },
    { ability: "Sand Stream", item: "Focus Sash", moves: ["Protect", "Rock Slide", "Knock Off", "Ice Punch"] },
    { ability: "Overcoat", item: "Leftovers", moves: ["Helping Hand", "Trick Room", "Expanding Force", "Psychic Terrain"] },
    { ability: "Competitive", item: "Chople Berry", moves: ["Protect", "Hydro Pump", "Flash Cannon", "Weather Ball"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Wide Guard", "Tailwind", "Weather Ball", "U-turn"] }
  ] },
  { id: "ct-397", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 24, player: "SwordFishMan", wins: 0, losses: 1, pokemonIds: [670, 902, 903, 1013, 727, 655], pokemonNames: ["Floette", "Basculegion-M", "Sneasler", "Sinistcha", "Incineroar", "Delphox"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Calm Mind", "Draining Kiss", "Dazzling Gleam"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Protect", "Liquidation", "Last Respects", "Aqua Jet"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Fake Out", "Dire Claw", "Close Combat"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Parting Shot", "Throat Chop", "Flare Blitz"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Protect", "Nasty Plot", "Heat Wave", "Psyshock"] }
  ] },
  { id: "ct-398", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 25, player: "Dibraldinho13", wins: 0, losses: 3, pokemonIds: [9, 324, 666, 902, 981, 115], pokemonNames: ["Blastoise", "Torkoal", "Vivillon", "Basculegion-M", "Farigiraf", "Kangaskhan"], sets: [
    { ability: "Torrent", item: "Blastoisinite", moves: ["Water Spout", "Dark Pulse", "Aura Sphere", "Protect"] },
    { ability: "Drought", item: "Charcoal", moves: ["Weather Ball", "Eruption", "Solar Beam", "Protect"], teraType: "Fire" },
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Sleep Powder", "Hurricane", "Tailwind", "Rage Powder"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Psychic", "Helping Hand", "Trick Room", "Protect"] },
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Double-Edge", "Fake Out", "Hammer Arm", "Ice Punch"] }
  ] },
  { id: "ct-399", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 26, player: "TomBlues", wins: 0, losses: 2, pokemonIds: [279, 902, 1018, 727, 1013, 282], pokemonNames: ["Pelipper", "Basculegion-M", "Archaludon", "Incineroar", "Sinistcha", "Gardevoir"], sets: [
    { ability: "Drizzle", item: "Focus Sash", moves: ["Weather Ball", "Hurricane", "Tailwind", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Flip Turn", "Last Respects"] },
    { ability: "Sturdy", item: "Metal Coat", moves: ["Electro Shot", "Flash Cannon", "Draco Meteor", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Hospitality", item: "Leftovers", moves: ["Rage Powder", "Matcha Gotcha", "Life Dew", "Protect"] },
    { ability: "Synchronize", item: "Gardevoirite", moves: ["Calm Mind", "Psychic", "Hyper Voice", "Protect"] }
  ] },
  { id: "ct-400", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 27, player: "AG V", wins: 0, losses: 2, pokemonIds: [981, 983, 324, 700, 115, 1013], pokemonNames: ["Farigiraf", "Kingambit", "Torkoal", "Sylveon", "Kangaskhan", "Sinistcha"], sets: [
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Helping Hand", "Psychic", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Low Kick", "Iron Head", "Sucker Punch"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Overheat", "Heat Wave", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Protect", "Moonblast"] },
    { ability: "Scrappy", item: "Silk Scarf", moves: ["Fake Out", "Last Resort"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Rage Powder", "Matcha Gotcha", "Protect", "Trick Room"] }
  ] },
  { id: "ct-401", tournament: "1º Torneio Remoto Pokémon Champions - Liga CWB", players: 28, placement: 28, player: "PSukiyama", wins: 0, losses: 1, pokemonIds: [952, 902, 142, 1013, 214, 10008], pokemonNames: ["Scovillain", "Basculegion-M", "Aerodactyl", "Sinistcha", "Heracross", "Heat Rotom"], sets: [
    { ability: "Moody", item: "Scovillainite", moves: ["Rage Powder", "Protect", "Leech Seed", "Giga Drain"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Wave Crash", "Flip Turn", "Aqua Jet"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Rock Slide", "Tailwind", "Dual Wingbeat", "Protect"] },
    { ability: "Hospitality", item: "Leftovers", moves: ["Matcha Gotcha", "Life Dew", "Protect", "Rage Powder"] },
    { ability: "Guts", item: "Heracronite", moves: ["Close Combat", "Protect", "Pin Missile", "Rock Blast"] },
    { ability: "Levitate", item: "White Herb", moves: ["Overheat", "Will-O-Wisp", "Electroweb", "Thunderbolt"] }
  ] },
  { id: "ct-402", tournament: "Friday Fight Night #57 Reg M-A Bo3", players: 11, placement: 1, player: "redpandavgc", wins: 5, losses: 1, pokemonIds: [655, 727, 670, 1013, 666, 925], pokemonNames: ["Delphox", "Incineroar", "Floette", "Sinistcha", "Vivillon", "Maushold"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Nasty Plot", "Heat Wave", "Psychic", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Darkest Lariat", "Flare Blitz", "Parting Shot"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Calm Mind", "Draining Kiss", "Protect"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Rage Powder", "Matcha Gotcha", "Life Dew", "Trick Room"] },
    { ability: "Shield Dust", item: "Focus Sash", moves: ["Rage Powder", "Protect", "Pollen Puff", "Sleep Powder"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Follow Me", "Encore", "Super Fang", "Protect"] }
  ] },
  { id: "ct-403", tournament: "Friday Fight Night #57 Reg M-A Bo3", players: 11, placement: 2, player: "Mariosr", wins: 3, losses: 3, pokemonIds: [959, 94, 784, 1013, 186, 727], pokemonNames: ["Tinkaton", "Gengar", "Kommo-o", "Sinistcha", "Politoed", "Incineroar"], sets: [
    { ability: "Mold Breaker", item: "Shuca Berry", moves: ["Protect", "Fake Out", "Encore", "Gigaton Hammer"] },
    { ability: "Cursed Body", item: "Gengarite", moves: ["Protect", "Disable", "Perish Song", "Shadow Ball"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Protect", "Clanging Scales", "Aura Sphere", "Clangorous Soul"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Protect", "Trick Room", "Rage Powder", "Matcha Gotcha"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Protect", "Encore", "Perish Song", "Encore"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Protect", "Fake Out", "Throat Chop", "Parting Shot"] }
  ] },
  { id: "ct-404", tournament: "Friday Fight Night #57 Reg M-A Bo3", players: 11, placement: 3, player: "dartsvgc", wins: 4, losses: 1, pokemonIds: [655, 903, 445, 983, 670, 666], pokemonNames: ["Delphox", "Sneasler", "Garchomp", "Kingambit", "Floette", "Vivillon"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Encore", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Stomping Tantrum", "Rock Tomb", "Dragon Claw"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Swords Dance", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Pollen Puff", "Sleep Powder", "Rage Powder", "Protect"] }
  ] },
  { id: "ct-405", tournament: "Friday Fight Night #57 Reg M-A Bo3", players: 11, placement: 4, player: "IngageWithZenith", wins: 2, losses: 3, pokemonIds: [448, 707, 730, 981, 1018, 142], pokemonNames: ["Lucario", "Klefki", "Primarina", "Farigiraf", "Archaludon", "Aerodactyl"], sets: [
    { ability: "Inner Focus", item: "Lucarionite", moves: ["Close Combat", "Ice Punch", "Swords Dance", "Bullet Punch"] },
    { ability: "Prankster", item: "Mental Herb", moves: ["Dazzling Gleam", "Rain Dance", "Trick Room", "Light Screen"] },
    { ability: "Liquid Voice", item: "Quick Claw", moves: ["Hyper Voice", "Moonblast", "Calm Mind", "Protect"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Psychic", "Rain Dance", "Helping Hand", "Trick Room"] },
    { ability: "Stamina", item: "Chople Berry", moves: ["Electro Shot", "Protect", "Draco Meteor", "Flash Cannon"] },
    { ability: "Unnerve", item: "Sharp Beak", moves: ["Tailwind", "Wide Guard", "Rock Slide", "Dual Wingbeat"] }
  ] },
  { id: "ct-406", tournament: "Friday Fight Night #57 Reg M-A Bo3", players: 11, placement: 5, player: "WillBurgers", wins: 2, losses: 2, pokemonIds: [727, 900, 1018, 547, 981, 3], pokemonNames: ["Incineroar", "Kleavor", "Archaludon", "Whimsicott", "Farigiraf", "Venusaur"], sets: [
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Protect", "Fake Out", "Darkest Lariat", "Flare Blitz"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Protect", "Stone Axe", "Aerial Ace", "X-Scissor"] },
    { ability: "Stamina", item: "Chople Berry", moves: ["Protect", "Dragon Pulse", "Flash Cannon", "Aura Sphere"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Protect", "Tailwind", "Encore", "Moonblast"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Protect", "Imprison", "Trick Room", "Hyper Voice"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Protect", "Earth Power", "Sludge Bomb", "Giga Drain"] }
  ] },
  { id: "ct-407", tournament: "Friday Fight Night #57 Reg M-A Bo3", players: 11, placement: 6, player: "Nontelo", wins: 2, losses: 1, pokemonIds: [6, 142, 197, 212, 445, 700], pokemonNames: ["Charizard", "Aerodactyl", "Umbreon", "Scizor", "Garchomp", "Sylveon"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Rock Slide", "Wide Guard", "Tailwind", "Protect"] },
    { ability: "Inner Focus", item: "Sitrus Berry", moves: ["Foul Play", "Snarl", "Yawn", "Helping Hand"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "Swords Dance", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Stomping Tantrum", "Dragon Claw", "Rock Tomb", "Earthquake"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Detect", "Hyper Voice", "Hyper Beam", "Quick Attack"] }
  ] },
  { id: "ct-408", tournament: "Friday Fight Night #57 Reg M-A Bo3", players: 11, placement: 7, player: "TmanVGC", wins: 1, losses: 3, pokemonIds: [547, 6, 983, 902, 445, 149], pokemonNames: ["Whimsicott", "Charizard", "Kingambit", "Basculegion-M", "Garchomp", "Dragonite"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Encore", "Tailwind", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Solar Beam", "Weather Ball"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Brick Break", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Aqua Jet", "Protect", "Last Respects", "Wave Crash"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Protect", "Rock Slide", "Earthquake", "Dragon Claw"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Icy Wind", "Heat Wave", "Draco Meteor", "Thunderbolt"] }
  ] },
  { id: "ct-409", tournament: "Friday Fight Night #57 Reg M-A Bo3", players: 11, placement: 8, player: "insert1exe", wins: 1, losses: 3, pokemonIds: [970, 6, 547, 445, 902, 983], pokemonNames: ["Glimmora", "Charizard", "Whimsicott", "Garchomp", "Basculegion-M", "Kingambit"], sets: [
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Sludge Bomb", "Earth Power", "Power Gem", "Spiky Shield"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Swords Dance"] }
  ] },
  { id: "ct-410", tournament: "Friday Fight Night #57 Reg M-A Bo3", players: 11, placement: 9, player: "bowl_4", wins: 1, losses: 1, pokemonIds: [902, 445, 983, 700, 142, 6], pokemonNames: ["Basculegion-M", "Garchomp", "Kingambit", "Sylveon", "Aerodactyl", "Charizard"], sets: [
    { ability: "Adaptability", item: "Focus Sash", moves: ["Protect", "Last Respects", "Aqua Jet", "Liquidation"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Rock Tomb", "Earthquake", "Dragon Claw", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Low Kick", "Iron Head"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Detect", "Hyper Voice", "Moonblast", "Quick Attack"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Tailwind", "Dual Wingbeat", "Rock Slide", "Wide Guard"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] }
  ] },
  { id: "ct-411", tournament: "Friday Fight Night #57 Reg M-A Bo3", players: 11, placement: 10, player: "glitterckvamp", wins: 0, losses: 1, pokemonIds: [700, 903, 952, 902, 227, 445], pokemonNames: ["Sylveon", "Sneasler", "Scovillain", "Basculegion-M", "Skarmory", "Garchomp"], sets: [
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Detect", "Quick Attack", "Hyper Beam"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Protect", "Leech Seed", "Flamethrower", "Rage Powder"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Flip Turn", "Protect", "Last Respects", "Aqua Jet"] },
    { ability: "Sturdy", item: "Skarmorite", moves: ["Protect", "Rock Slide", "Brave Bird", "Iron Head"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Scale Shot", "Earthquake", "Stomping Tantrum", "Protect"] }
  ] },
  { id: "ct-412", tournament: "Friday Fight Night #57 Reg M-A Bo3", players: 11, placement: 11, player: "3cake", wins: 0, losses: 2, pokemonIds: [10009, 983, 445, 478, 142, 903], pokemonNames: ["Wash Rotom", "Kingambit", "Garchomp", "Froslass", "Aerodactyl", "Sneasler"], sets: [
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Thunderbolt", "Hydro Pump", "Will-O-Wisp", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Rough Skin", item: "Focus Sash", moves: ["Earthquake", "Dragon Claw", "Poison Jab", "Rock Tomb"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] }
  ] },
  { id: "ct-413", tournament: "Devils Den Tournaments #78", players: 33, placement: 1, player: "SoulVGC", wins: 9, losses: 1, pokemonIds: [6, 142, 700, 445, 981, 983], pokemonNames: ["Charizard", "Aerodactyl", "Sylveon", "Garchomp", "Farigiraf", "Kingambit"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Protect"] },
    { ability: "Rough Skin", item: "Focus Sash", moves: ["Earthquake", "Dragon Claw", "Stomping Tantrum", "Protect"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Twin Beam", "Helping Hand", "Trick Room", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] }
  ] },
  { id: "ct-414", tournament: "Devils Den Tournaments #78", players: 33, placement: 2, player: "Altkyle", wins: 8, losses: 2, pokemonIds: [149, 902, 212, 1018, 279, 727], pokemonNames: ["Dragonite", "Basculegion-M", "Scizor", "Archaludon", "Pelipper", "Incineroar"], sets: [
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Dragon Pulse", "Flamethrower", "Tailwind", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Close Combat", "Swords Dance", "Protect"] },
    { ability: "Stamina", item: "Chople Berry", moves: ["Electro Shot", "Dragon Pulse", "Aura Sphere", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Weather Ball", "Tailwind", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] }
  ] },
  { id: "ct-415", tournament: "Devils Den Tournaments #78", players: 33, placement: 3, player: "Kotori", wins: 7, losses: 2, pokemonIds: [9, 279, 981, 983, 727, 1013], pokemonNames: ["Blastoise", "Pelipper", "Farigiraf", "Kingambit", "Incineroar", "Sinistcha"], sets: [
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Water Spout", "Dark Pulse", "Aura Sphere", "Protect"], teraType: "Water" },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Weather Ball", "Tailwind", "Protect"], teraType: "Water" },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Hyper Voice", "Psychic", "Trick Room", "Nasty Plot"], teraType: "Normal" },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Protect"], teraType: "Dark" },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Fake Out", "Darkest Lariat", "Flare Blitz", "Parting Shot"], teraType: "Fire" },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Life Dew"], teraType: "Grass" }
  ] },
  { id: "ct-416", tournament: "Devils Den Tournaments #78", players: 33, placement: 4, player: "Jeremiah Colustrio", wins: 6, losses: 3, pokemonIds: [670, 902, 1013, 445, 727, 983], pokemonNames: ["Floette", "Basculegion-M", "Sinistcha", "Garchomp", "Incineroar", "Kingambit"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Draining Kiss", "Calm Mind", "Protect", "Dazzling Gleam"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Flip Turn", "Aqua Jet", "Last Respects"] },
    { ability: "Hospitality", item: "Leftovers", moves: ["Rage Powder", "Life Dew", "Trick Room", "Matcha Gotcha"] },
    { ability: "Rough Skin", item: "Garchompite", moves: ["Stomping Tantrum", "Poison Jab", "Protect", "Rock Slide"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Parting Shot", "Fake Out", "Darkest Lariat", "Flare Blitz"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Swords Dance", "Sucker Punch", "Protect"] }
  ] },
  { id: "ct-417", tournament: "Devils Den Tournaments #78", players: 33, placement: 5, player: "DrBananaMan", wins: 6, losses: 2, pokemonIds: [445, 727, 681, 547, 6, 902], pokemonNames: ["Garchomp", "Incineroar", "Aegislash", "Whimsicott", "Charizard", "Basculegion-M"], sets: [
    { ability: "Rough Skin", item: "Garchompite", moves: ["Scale Shot", "Stomping Tantrum", "Rock Slide", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Parting Shot", "Taunt"] },
    { ability: "Stance Change", item: "White Herb", moves: ["Poltergeist", "Close Combat", "Shadow Sneak", "King's Shield"] },
    { ability: "Prankster", item: "Kebia Berry", moves: ["Moonblast", "Tailwind", "Sunny Day", "Encore"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Aqua Jet"] }
  ] },
  { id: "ct-418", tournament: "Devils Den Tournaments #78", players: 33, placement: 6, player: "Orttega15", wins: 5, losses: 3, pokemonIds: [115, 324, 981, 858, 983, 727], pokemonNames: ["Kangaskhan", "Torkoal", "Farigiraf", "Hatterene", "Kingambit", "Incineroar"], sets: [
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Double-Edge", "Low Kick", "Sucker Punch", "Fake Out"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Weather Ball", "Earth Power", "Protect"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Psychic", "Hyper Voice", "Helping Hand", "Trick Room"] },
    { ability: "Magic Bounce", item: "Focus Sash", moves: ["Dazzling Gleam", "Psychic", "Trick Room", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Intimidate", item: "White Herb", moves: ["Close Combat", "Darkest Lariat", "Fake Out", "Flare Blitz"] }
  ] },
  { id: "ct-419", tournament: "Devils Den Tournaments #78", players: 33, placement: 7, player: "NillyTheKid", wins: 5, losses: 3, pokemonIds: [655, 445, 701, 10009, 142, 324], pokemonNames: ["Delphox", "Garchomp", "Hawlucha", "Wash Rotom", "Aerodactyl", "Torkoal"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Nasty Plot", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Swords Dance", "Protect"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Close Combat", "Taunt", "Coaching", "Detect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Electroweb", "Thunderbolt", "Hydro Pump", "Volt Switch"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Tailwind", "Wide Guard", "Protect"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Heat Wave", "Helping Hand", "Protect"] }
  ] },
  { id: "ct-420", tournament: "Devils Den Tournaments #78", players: 33, placement: 8, player: "Sebas13aguinaga", wins: 5, losses: 3, pokemonIds: [6, 547, 983, 902, 445, 970], pokemonNames: ["Charizard", "Whimsicott", "Kingambit", "Basculegion-M", "Garchomp", "Glimmora"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] }
  ] },
  { id: "ct-421", tournament: "Devils Den Tournaments #78", players: 33, placement: 9, player: "Hammycarter", wins: 4, losses: 3, pokemonIds: [547, 6, 670, 902, 983, 903], pokemonNames: ["Whimsicott", "Charizard", "Floette", "Basculegion-M", "Kingambit", "Sneasler"], sets: [
    { ability: "Prankster", item: "Fairy Feather", moves: ["Tailwind", "Protect", "Moonblast", "Encore"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Protect", "Weather Ball"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Moonblast", "Light of Ruin", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Wave Crash", "Flip Turn", "Aqua Jet"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Protect", "Low Kick"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] }
  ] },
  { id: "ct-422", tournament: "Devils Den Tournaments #78", players: 33, placement: 10, player: "Oceananagins", wins: 4, losses: 3, pokemonIds: [952, 445, 983, 903, 730, 149], pokemonNames: ["Scovillain", "Garchomp", "Kingambit", "Sneasler", "Primarina", "Dragonite"], sets: [
    { ability: "Moody", item: "Scovillainite", moves: ["Giga Drain", "Flamethrower", "Rage Powder", "Protect"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Rock Slide", "Stomping Tantrum", "Dragon Claw", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Protect", "Swords Dance"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Liquid Voice", item: "Leftovers", moves: ["Hyper Voice", "Moonblast", "Calm Mind", "Protect"] },
    { ability: "Multiscale", item: "White Herb", moves: ["Scale Shot", "Extreme Speed", "Stomping Tantrum", "Protect"] }
  ] },
  { id: "ct-423", tournament: "Devils Den Tournaments #78", players: 33, placement: 11, player: "GreatZ", wins: 3, losses: 3, pokemonIds: [970, 10103, 983, 445, 663, 10009], pokemonNames: ["Glimmora", "Alolan Ninetales", "Kingambit", "Garchomp", "Talonflame", "Wash Rotom"], sets: [
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Snow Warning", item: "Never-Melt Ice", moves: ["Blizzard", "Freeze-Dry", "Encore", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Dragon Claw", "Earthquake", "Swords Dance", "Protect"] },
    { ability: "Gale Wings", item: "No Item", moves: ["Acrobatics", "Tailwind", "Flare Blitz", "Protect"] },
    { ability: "Levitate", item: "Magnet", moves: ["Thunderbolt", "Hydro Pump", "Will-O-Wisp", "Protect"] }
  ] },
  { id: "ct-424", tournament: "Devils Den Tournaments #78", players: 33, placement: 12, player: "prthjet", wins: 3, losses: 3, pokemonIds: [212, 279, 902, 1018, 149, 302], pokemonNames: ["Scizor", "Pelipper", "Basculegion-M", "Archaludon", "Dragonite", "Sableye"], sets: [
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "Swords Dance", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Tailwind", "Hurricane", "Wide Guard"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Flip Turn", "Last Respects"] },
    { ability: "Stamina", item: "Chople Berry", moves: ["Electro Shot", "Aura Sphere", "Protect", "Dragon Pulse"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Hurricane", "Protect", "Weather Ball"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Disable", "Encore", "Rain Dance", "Will-O-Wisp"] }
  ] },
  { id: "ct-425", tournament: "Devils Den Tournaments #78", players: 33, placement: 13, player: "StrongIndependentBlackCat", wins: 3, losses: 3, pokemonIds: [670, 727, 1013, 903, 902, 279], pokemonNames: ["Floette", "Incineroar", "Sinistcha", "Sneasler", "Basculegion-M", "Pelipper"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Draining Kiss", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Throat Chop", "Flare Blitz", "Parting Shot", "Fake Out"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Rage Powder", "Matcha Gotcha", "Life Dew", "Trick Room"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Aqua Jet", "Wave Crash", "Flip Turn"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Tailwind", "Weather Ball", "Hurricane", "Wide Guard"] }
  ] },
  { id: "ct-426", tournament: "Devils Den Tournaments #78", players: 33, placement: 14, player: "Beta20X", wins: 2, losses: 2, pokemonIds: [952, 970, 445, 547, 428, 902], pokemonNames: ["Scovillain", "Glimmora", "Garchomp", "Whimsicott", "Lopunny", "Basculegion-M"], sets: [
    { ability: "Moody", item: "Scovillainite", moves: ["Flamethrower", "Leech Seed", "Protect", "Rage Powder"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Spiky Shield", "Earth Power"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Stomping Tantrum", "Dragon Claw", "Swords Dance", "Protect"] },
    { ability: "Prankster", item: "Coba Berry", moves: ["Tailwind", "Protect", "Encore", "Moonblast"] },
    { ability: "Limber", item: "Lopunnite", moves: ["Fake Out", "Protect", "Encore", "Close Combat"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Wave Crash", "Flip Turn", "Aqua Jet"] }
  ] },
  { id: "ct-427", tournament: "Devils Den Tournaments #78", players: 33, placement: 15, player: "grahmmar", wins: 2, losses: 3, pokemonIds: [547, 902, 983, 670, 445, 10008], pokemonNames: ["Whimsicott", "Basculegion-M", "Kingambit", "Floette", "Garchomp", "Heat Rotom"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Taunt", "Protect"] },
    { ability: "Adaptability", item: "Kasib Berry", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Moonblast", "Calm Mind", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Overheat", "Thunderbolt", "Electroweb", "Volt Switch"] }
  ] },
  { id: "ct-428", tournament: "Devils Den Tournaments #78", players: 33, placement: 16, player: "Smogolem", wins: 2, losses: 3, pokemonIds: [623, 981, 324, 534, 983, 765], pokemonNames: ["Golurk", "Farigiraf", "Torkoal", "Conkeldurr", "Kingambit", "Oranguru"], sets: [
    { ability: "No Guard", item: "Golurkite", moves: ["Poltergeist", "Headlong Rush", "Rock Slide", "Protect"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Twin Beam", "Hyper Voice", "Helping Hand"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Heat Wave", "Protect", "Body Press"] },
    { ability: "Iron Fist", item: "Black Belt", moves: ["Drain Punch", "Knock Off", "Rock Slide", "Ice Punch"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Inner Focus", item: "Colbur Berry", moves: ["Trick Room", "Skill Swap", "Instruct", "Protect"] }
  ] },
  { id: "ct-429", tournament: "Devils Den Tournaments #78", players: 33, placement: 17, player: "JohnnyWulff", wins: 2, losses: 3, pokemonIds: [6, 666, 302, 1018, 184, 531], pokemonNames: ["Charizard", "Vivillon", "Sableye", "Archaludon", "Azumarill", "Audino"], sets: [
    { ability: "Blaze", item: "Charizardite X", moves: ["Breaking Swipe", "Flare Blitz", "Protect", "Belly Drum"] },
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Pollen Puff", "Rage Powder", "Sleep Powder", "Tailwind"] },
    { ability: "Prankster", item: "Leftovers", moves: ["Rain Dance", "Will-O-Wisp", "Thunder Wave", "Sunny Day"] },
    { ability: "Sturdy", item: "Miracle Seed", moves: ["Electro Shot", "Solar Beam", "Aura Sphere", "Flash Cannon"] },
    { ability: "Huge Power", item: "Sitrus Berry", moves: ["Liquidation", "Belly Drum", "Play Rough", "Aqua Jet"] },
    { ability: "Regenerator", item: "Mental Herb", moves: ["Ally Switch", "Rain Dance", "Trick Room", "Heal Pulse"] }
  ] },
  { id: "ct-430", tournament: "Devils Den Tournaments #78", players: 33, placement: 18, player: "DarkDevil26", wins: 2, losses: 3, pokemonIds: [478, 350, 903, 142, 1013, 983], pokemonNames: ["Froslass", "Milotic", "Sneasler", "Aerodactyl", "Sinistcha", "Kingambit"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Protect", "Nasty Plot"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Scald", "Icy Wind", "Protect", "Recover"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"], teraType: "Fighting" },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Rock Slide", "Dual Wingbeat", "Protect", "Tailwind"], teraType: "Rock" },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Protect", "Life Dew", "Rage Powder"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Low Kick", "Protect"] }
  ] },
  { id: "ct-431", tournament: "Devils Den Tournaments #78", players: 33, placement: 19, player: "Milliander", wins: 2, losses: 4, pokemonIds: [3, 350, 142, 10336, 903, 212], pokemonNames: ["Venusaur", "Milotic", "Aerodactyl", "Hisuian Samurott", "Sneasler", "Scizor"], sets: [
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Earth Power", "Sludge Bomb", "Protect", "Giga Drain"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Icy Wind", "Muddy Water", "Life Dew", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Protect", "Tailwind", "Dual Wingbeat"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Ceaseless Edge", "Sacred Sword", "Protect", "Sucker Punch"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Coaching"] },
    { ability: "Technician", item: "Metal Coat", moves: ["Bullet Punch", "Protect", "Bug Bite", "Swords Dance"] }
  ] },
  { id: "ct-432", tournament: "Devils Den Tournaments #78", players: 33, placement: 20, player: "ChosenPig32", wins: 1, losses: 2, pokemonIds: [214, 663, 983, 970, 902, 763], pokemonNames: ["Heracross", "Talonflame", "Kingambit", "Glimmora", "Basculegion-M", "Tsareena"], sets: [
    { ability: "Guts", item: "Heracronite", moves: ["Close Combat", "Rock Blast", "Pin Missile", "Detect"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Dual Wingbeat", "Tailwind", "Feint", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Spiky Shield"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Queenly Majesty", item: "Choice Scarf", moves: ["Power Whip", "Triple Axel", "High Jump Kick", "Zen Headbutt"] }
  ] },
  { id: "ct-433", tournament: "Devils Den Tournaments #78", players: 33, placement: 21, player: "DTAH", wins: 1, losses: 3, pokemonIds: [727, 6199, 10902, 143, 3, 740], pokemonNames: ["Incineroar", "Galarian Slowking", "Basculegion-F", "Snorlax", "Venusaur", "Crabominable"], sets: [
    { ability: "Intimidate", item: "Black Belt", moves: ["Darkest Lariat", "Drain Punch", "Flare Blitz", "Parting Shot"] },
    { ability: "Regenerator", item: "Twisted Spoon", moves: ["Eerie Spell", "Trick Room", "Toxic", "Chilly Reception"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Shadow Ball", "Ice Beam", "Muddy Water", "Flip Turn"] },
    { ability: "Thick Fat", item: "Sitrus Berry", moves: ["Hammer Arm", "Rock Slide", "Body Slam", "Curse"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Growth", "Giga Drain", "Earth Power", "Sludge Bomb"] },
    { ability: "Iron Fist", item: "Crabominite", moves: ["Ice Hammer", "Drain Punch", "Mach Punch", "Protect"] }
  ] },
  { id: "ct-434", tournament: "Devils Den Tournaments #78", players: 33, placement: 22, player: "OliveTheEverything", wins: 1, losses: 3, pokemonIds: [655, 903, 983, 36, 706, 445], pokemonNames: ["Delphox", "Sneasler", "Kingambit", "Clefable", "Goodra", "Garchomp"], sets: [
    { ability: "Levitate", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Shadow Ball", "Protect"] },
    { ability: "Pressure", item: "Focus Sash", moves: ["Dire Claw", "Protect", "Fake Out", "Close Combat"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Iron Head", "Protect", "Sucker Punch"] },
    { ability: "Unaware", item: "Sitrus Berry", moves: ["Helping Hand", "Follow Me", "Protect", "Moonblast"] },
    { ability: "Gooey", item: "Leftovers", moves: ["Knock Off", "Protect", "Draco Meteor", "Chilling Water"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Stomping Tantrum"] }
  ] },
  { id: "ct-435", tournament: "Devils Den Tournaments #78", players: 33, placement: 23, player: "mathiss", wins: 1, losses: 2, pokemonIds: [6, 547, 983, 902, 445, 970], pokemonNames: ["Charizard", "Whimsicott", "Kingambit", "Basculegion-M", "Garchomp", "Glimmora"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] }
  ] },
  { id: "ct-436", tournament: "Devils Den Tournaments #78", players: 33, placement: 24, player: "Kingston2", wins: 1, losses: 3, pokemonIds: [94, 902, 983, 727, 142, 695], pokemonNames: ["Gengar", "Basculegion-M", "Kingambit", "Incineroar", "Aerodactyl", "Heliolisk"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Protect", "Disable", "Shadow Ball", "Sludge Bomb"], teraType: "Ghost" },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Protect", "Iron Head", "Sucker Punch"], teraType: "Dark" },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Taunt", "Darkest Lariat", "Flare Blitz"], teraType: "Fire" },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Protect", "Tailwind", "Dual Wingbeat", "Rock Slide"], teraType: "Rock" },
    { ability: "Dry Skin", item: "Magnet", moves: ["Protect", "Dark Pulse", "Thunderbolt", "Electroweb"], teraType: "Electric" }
  ] },
  { id: "ct-437", tournament: "Devils Den Tournaments #78", players: 33, placement: 25, player: "AvatarDuck", wins: 1, losses: 2, pokemonIds: [903, 1013, 727, 6, 670, 983], pokemonNames: ["Sneasler", "Sinistcha", "Incineroar", "Charizard", "Floette", "Kingambit"], sets: [
    { ability: "Poison Touch", item: "Focus Sash", moves: ["Fake Out", "Gunk Shot", "Close Combat", "Coaching"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Flare Blitz", "Helping Hand", "Parting Shot", "Fake Out"] },
    { ability: "Blaze", item: "Charizardite X", moves: ["Flare Blitz", "Dragon Claw", "Dragon Dance", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Calm Mind", "Dazzling Gleam", "Protect"], teraType: "Fairy" },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] }
  ] },
  { id: "ct-438", tournament: "Devils Den Tournaments #78", players: 33, placement: 26, player: "Aldrich", wins: 0, losses: 2, pokemonIds: [6, 547, 445, 970, 902, 115], pokemonNames: ["Charizard", "Whimsicott", "Garchomp", "Glimmora", "Basculegion-M", "Kangaskhan"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Tomb", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Flip Turn", "Last Respects"] },
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Double-Edge", "Sucker Punch", "Drain Punch", "Fake Out"] }
  ] },
  { id: "ct-439", tournament: "Devils Den Tournaments #78", players: 33, placement: 27, player: "Yoshi1267", wins: 0, losses: 1, pokemonIds: [428, 700, 663, 902, 149, 1018], pokemonNames: ["Lopunny", "Sylveon", "Talonflame", "Basculegion-M", "Dragonite", "Archaludon"], sets: [
    { ability: "Cute Charm", item: "Lopunnite", moves: ["Close Combat", "Giga Impact", "Fake Out", "Encore"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Detect"] },
    { ability: "Gale Wings", item: "No-Item", moves: ["Acrobatics", "Flare Blitz", "Tailwind", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Dragon Pulse", "Air Slash", "Extreme Speed", "Protect"] },
    { ability: "Sturdy", item: "Choice Scarf", moves: ["Flash Cannon", "Draco Meteor", "Thunderbolt", "Aura Sphere"] }
  ] },
  { id: "ct-440", tournament: "Devils Den Tournaments #78", players: 33, placement: 28, player: "TheEmilyRose", wins: 0, losses: 1, pokemonIds: [655, 445, 701, 10009, 324, 142], pokemonNames: ["Delphox", "Garchomp", "Hawlucha", "Wash Rotom", "Torkoal", "Aerodactyl"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psyshock", "Nasty Plot", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Swords Dance", "Protect"] },
    { ability: "Mold Breaker", item: "Focus Sash", moves: ["Close Combat", "Taunt", "Coaching", "Detect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Electroweb", "Thunderbolt", "Hydro Pump", "Volt Switch"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Heat Wave", "Helping Hand", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Tailwind", "Wide Guard", "Protect"] }
  ] },
  { id: "ct-441", tournament: "Devils Den Tournaments #78", players: 33, placement: 29, player: "LightBrawler", wins: 0, losses: 2, pokemonIds: [186, 1018, 902, 823, 970, 952], pokemonNames: ["Politoed", "Archaludon", "Basculegion-M", "Corviknight", "Glimmora", "Scovillain"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Icy Wind", "Muddy Water", "Helping Hand", "Weather Ball"] },
    { ability: "Stamina", item: "Chople Berry", moves: ["Protect", "Flash Cannon", "Electro Shot", "Draco Meteor"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Last Respects", "Protect", "Aqua Jet", "Liquidation"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Roost", "Tailwind", "Iron Head", "Brave Bird"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Flamethrower", "Protect", "Rage Powder", "Leech Seed"] }
  ] },
  { id: "ct-442", tournament: "Devils Den Tournaments #78", players: 33, placement: 30, player: "funch", wins: 0, losses: 2, pokemonIds: [9, 6, 903, 727, 925, 1013], pokemonNames: ["Blastoise", "Charizard", "Sneasler", "Incineroar", "Maushold", "Sinistcha"], sets: [
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Water Spout", "Dark Pulse", "Shell Smash", "Protect"] },
    { ability: "Blaze", item: "Charizardite X", moves: ["Flare Blitz", "Dragon Dance", "Dragon Claw", "Protect"] },
    { ability: "Poison Touch", item: "Focus Sash", moves: ["Dire Claw", "Fake Out", "Close Combat", "Coaching"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Roar", "Fake Out", "Flare Blitz", "Parting Shot"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Feint", "Follow Me", "Protect", "Helping Hand"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Life Dew"] }
  ] },
  { id: "ct-443", tournament: "Devils Den Tournaments #78", players: 33, placement: 31, player: "averagememer57", wins: 0, losses: 2, pokemonIds: [970, 10103, 663, 681, 445, 10009], pokemonNames: ["Glimmora", "Alolan Ninetales", "Talonflame", "Aegislash", "Garchomp", "Wash Rotom"], sets: [
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Spiky Shield"] },
    { ability: "Snow Warning", item: "Choice Scarf", moves: ["Blizzard", "Icy Wind", "Freeze-Dry", "Moonblast"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Flare Blitz", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Stance Change", item: "Focus Sash", moves: ["Poltergeist", "Shadow Sneak", "Close Combat", "King's Shield"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Swords Dance", "Protect"] },
    { ability: "Levitate", item: "Magnet", moves: ["Hydro Pump", "Thunderbolt", "Will-O-Wisp", "Protect"] }
  ] },
  { id: "ct-444", tournament: "Devils Den Tournaments #78", players: 33, placement: 32, player: "Mattytaxes", wins: 0, losses: 1, pokemonIds: [547, 903, 983, 478, 902, 900], pokemonNames: ["Whimsicott", "Sneasler", "Kingambit", "Froslass", "Basculegion-M", "Kleavor"], sets: [
    { ability: "Prankster", item: "Coba Berry", moves: ["Encore", "Tailwind", "Moonblast", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Aurora Veil", "Shadow Ball", "Protect"], teraType: "Ice" },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Flip Turn"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Stone Axe", "Close Combat", "X-Scissor", "Protect"] }
  ] },
  { id: "ct-445", tournament: "Devils Den Tournaments #78", players: 33, placement: 33, player: "NYCSquirtle", wins: 0, losses: 1, pokemonIds: [9, 981, 323, 780, 866, 534], pokemonNames: ["Blastoise", "Farigiraf", "Camerupt", "Drampa", "Mr. Rime", "Conkeldurr"], sets: [
    { ability: "Torrent", item: "Blastoisinite", moves: ["Aura Sphere", "Flash Cannon", "Shell Smash", "Water Spout"] },
    { ability: "Armor Tail", item: "Mental Herb", moves: ["Energy Ball", "Dazzling Gleam", "Protect", "Trick Room"] },
    { ability: "Solid Rock", item: "Cameruptite", moves: ["Earth Power", "Ancient Power", "Protect", "Eruption"] },
    { ability: "Berserk", item: "Drampanite", moves: ["Roost", "Extrasensory", "Snarl", "Protect"] },
    { ability: "Screen Cleaner", item: "Focus Sash", moves: ["Frost Breath", "Fake Out", "Helping Hand", "Thunderbolt"] },
    { ability: "Iron Fist", item: "King's Rock", moves: ["Drain Punch", "Ice Punch", "Poison Jab", "Protect"] }
  ] },
  { id: "ct-446", tournament: "Unova Champions League #7 / POKÉMON CHAMPIONS", players: 10, placement: 1, player: "lauletnb", wins: 5, losses: 1, pokemonIds: [6, 902, 547, 970, 445, 983], pokemonNames: ["Charizard", "Basculegion-M", "Whimsicott", "Glimmora", "Garchomp", "Kingambit"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Last Respects", "Aqua Jet", "Wave Crash", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Tailwind", "Protect", "Encore", "Moonblast"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Earth Power", "Spiky Shield", "Sludge Bomb", "Power Gem"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Stomping Tantrum", "Poison Jab", "Dragon Claw", "Rock Slide"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Iron Head", "Kowtow Cleave", "Protect"] }
  ] },
  { id: "ct-447", tournament: "Unova Champions League #7 / POKÉMON CHAMPIONS", players: 10, placement: 2, player: "insert1exe", wins: 4, losses: 2, pokemonIds: [970, 6, 547, 445, 902, 983], pokemonNames: ["Glimmora", "Charizard", "Whimsicott", "Garchomp", "Basculegion-M", "Kingambit"], sets: [
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Sludge Bomb", "Earth Power", "Power Gem", "Spiky Shield"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Swords Dance"] }
  ] },
  { id: "ct-448", tournament: "Unova Champions League #7 / POKÉMON CHAMPIONS", players: 10, placement: 3, player: "BatCoach", wins: 3, losses: 2, pokemonIds: [478, 445, 663, 903, 10009, 983], pokemonNames: ["Froslass", "Garchomp", "Talonflame", "Sneasler", "Wash Rotom", "Kingambit"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Stomping Tantrum", "Rock Slide", "Protect"] },
    { ability: "Gale Wings", item: "No Item", moves: ["Acrobatics", "Tailwind", "Flare Blitz", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Levitate", item: "Leftovers", moves: ["Hydro Pump", "Thunderbolt", "Will-O-Wisp", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] }
  ] },
  { id: "ct-449", tournament: "Unova Champions League #7 / POKÉMON CHAMPIONS", players: 10, placement: 4, player: "Abe", wins: 3, losses: 2, pokemonIds: [700, 142, 445, 902, 6, 981], pokemonNames: ["Sylveon", "Aerodactyl", "Garchomp", "Basculegion-M", "Charizard", "Farigiraf"], sets: [
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Dual Wingbeat", "Ice Fang", "Tailwind", "Rock Slide"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Earthquake", "Protect", "Rock Slide", "Dragon Claw"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Aqua Jet", "Liquidation", "Protect", "Last Respects"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Protect", "Weather Ball", "Solar Beam"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Hyper Voice", "Helping Hand", "Psychic"] }
  ] },
  { id: "ct-450", tournament: "Unova Champions League #7 / POKÉMON CHAMPIONS", players: 10, placement: 5, player: "funch", wins: 2, losses: 2, pokemonIds: [900, 547, 6, 902, 983, 903], pokemonNames: ["Kleavor", "Whimsicott", "Charizard", "Basculegion-M", "Kingambit", "Sneasler"], sets: [
    { ability: "Sharpness", item: "Focus Sash", moves: ["Stone Axe", "X-Scissor", "Quick Attack", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Tailwind", "Moonblast", "Encore", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Flip Turn"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] }
  ] },
  { id: "ct-451", tournament: "Unova Champions League #7 / POKÉMON CHAMPIONS", players: 10, placement: 6, player: "1nick2nick", wins: 1, losses: 2, pokemonIds: [478, 903, 983, 445, 730, 302], pokemonNames: ["Froslass", "Sneasler", "Kingambit", "Garchomp", "Primarina", "Sableye"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Protect", "Blizzard", "Hex", "Disable"] },
    { ability: "Poison Touch", item: "Focus Sash", moves: ["Fake Out", "Dire Claw", "Close Combat", "Coaching"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Protect", "Sucker Punch", "Kowtow Cleave", "Swords Dance"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Protect", "Stomping Tantrum", "Breaking Swipe", "Rock Tomb"] },
    { ability: "Liquid Voice", item: "Leftovers", moves: ["Hyper Voice", "Moonblast", "Calm Mind", "Protect"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Reflect", "Light Screen", "Encore", "Thunder Wave"] }
  ] },
  { id: "ct-452", tournament: "Unova Champions League #7 / POKÉMON CHAMPIONS", players: 10, placement: 7, player: "RedVelvetAsh", wins: 1, losses: 2, pokemonIds: [115, 902, 6, 142, 700, 1018], pokemonNames: ["Kangaskhan", "Basculegion-M", "Charizard", "Aerodactyl", "Sylveon", "Archaludon"], sets: [
    { ability: "Scrappy", item: "Silk Scarf", moves: ["Double-Edge", "Fake Out", "Drain Punch", "Sucker Punch"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Rock Slide", "Dual Wingbeat", "Taunt", "Tailwind"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Moonblast", "Hyper Voice", "Quick Attack", "Detect"] },
    { ability: "Stamina", item: "Choice Scarf", moves: ["Flash Cannon", "Draco Meteor", "Electro Shot", "Thunder Wave"] }
  ] },
  { id: "ct-453", tournament: "Unova Champions League #7 / POKÉMON CHAMPIONS", players: 10, placement: 8, player: "Masuda77", wins: 1, losses: 2, pokemonIds: [6, 445, 1013, 184, 115, 282], pokemonNames: ["Charizard", "Garchomp", "Sinistcha", "Azumarill", "Kangaskhan", "Gardevoir"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Protect", "Solar Beam"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Rock Slide", "Dragon Claw", "Poison Jab"], teraType: "Dragon" },
    { ability: "Hospitality", item: "Leftovers", moves: ["Trick Room", "Rage Powder", "Matcha Gotcha", "Shadow Ball"], teraType: "Grass" },
    { ability: "Huge Power", item: "Sitrus Berry", moves: ["Aqua Jet", "Belly Drum", "Protect", "Play Rough"], teraType: "Water" },
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Fake Out", "Double-Edge", "Sucker Punch", "Low Kick"] },
    { ability: "Telepathy", item: "Fairy Feather", moves: ["Dazzling Gleam", "Protect", "Psychic", "Trick Room"] }
  ] },
  { id: "ct-454", tournament: "Unova Champions League #7 / POKÉMON CHAMPIONS", players: 10, placement: 9, player: "Rayo23vgc", wins: 1, losses: 2, pokemonIds: [6, 445, 547, 902, 903, 983], pokemonNames: ["Charizard", "Garchomp", "Whimsicott", "Basculegion-M", "Sneasler", "Kingambit"], sets: [
    { ability: "Drought", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "King's Rock", moves: ["Rock Slide", "Dragon Claw", "Earthquake", "Protect"] },
    { ability: "Prankster", item: "Sitrus Berry", moves: ["Tailwind", "Helping Hand", "Moonblast", "Sunny Day"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Flip Turn"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Defiant", item: "Quick Claw", moves: ["Iron Head", "Sucker Punch", "Kowtow Cleave", "Protect"] }
  ] },
  { id: "ct-455", tournament: "Unova Champions League #7 / POKÉMON CHAMPIONS", players: 10, placement: 10, player: "Jaylun", wins: 0, losses: 1, pokemonIds: [547, 902, 983, 445, 970, 6], pokemonNames: ["Whimsicott", "Basculegion-M", "Kingambit", "Garchomp", "Glimmora", "Charizard"], sets: [
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Flip Turn"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Earth Power", "Sludge Bomb", "Spiky Shield"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] }
  ] },
  { id: "ct-456", tournament: "CHAMPIONS REG. M-A |CROWN FIGHT Bo3 TOUR #70", players: 49, placement: 1, player: "Snorlaxpikachu1", wins: 9, losses: 0, pokemonIds: [282, 925, 279, 1018, 902, 115], pokemonNames: ["Gardevoir", "Maushold", "Pelipper", "Archaludon", "Basculegion-M", "Kangaskhan"], sets: [
    { ability: "Trace", item: "Gardevoirite", moves: ["Hyper Voice", "Psyshock", "Vacuum Wave", "Protect"] },
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Follow Me", "Super Fang", "Rain Dance", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Hurricane", "Tailwind", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Fake Out", "Double-Edge", "Crunch", "Drain Punch"] }
  ] },
  { id: "ct-457", tournament: "CHAMPIONS REG. M-A |CROWN FIGHT Bo3 TOUR #70", players: 49, placement: 2, player: "AlmostGoodGamer", wins: 7, losses: 2, pokemonIds: [115, 727, 666, 184, 981, 3], pokemonNames: ["Kangaskhan", "Incineroar", "Vivillon", "Azumarill", "Farigiraf", "Venusaur"], sets: [
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Double-Edge", "Sucker Punch", "Drain Punch", "Fake Out"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"], teraType: "Water" },
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Sleep Powder", "Pollen Puff", "Rage Powder", "Protect"] },
    { ability: "Huge Power", item: "Sitrus Berry", moves: ["Aqua Jet", "Play Rough", "Belly Drum", "Protect"] },
    { ability: "Armor Tail", item: "Leftovers", moves: ["Twin Beam", "Thunderbolt", "Trick Room", "Helping Hand"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Sludge Bomb", "Giga Drain", "Earth Power", "Protect"] }
  ] },
  { id: "ct-458", tournament: "CHAMPIONS REG. M-A |CROWN FIGHT Bo3 TOUR #70", players: 49, placement: 3, player: "ironingots", wins: 5, losses: 3, pokemonIds: [670, 727, 681, 1013, 445, 350], pokemonNames: ["Floette", "Incineroar", "Aegislash", "Sinistcha", "Garchomp", "Milotic"], sets: [
    { ability: "Fairy Aura", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Fake Out", "Parting Shot", "Helping Hand"] },
    { ability: "Stance Change", item: "Focus Sash", moves: ["Poltergeist", "Shadow Sneak", "Close Combat", "Wide Guard"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Dragon Claw", "Stomping Tantrum", "Rock Slide"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Muddy Water", "Hypnosis", "Coil", "Protect"] }
  ] },
  { id: "ct-459", tournament: "CHAMPIONS REG. M-A |CROWN FIGHT Bo3 TOUR #70", players: 49, placement: 4, player: "Gouillou", wins: 5, losses: 3, pokemonIds: [142, 700, 727, 902, 784, 3], pokemonNames: ["Aerodactyl", "Sylveon", "Incineroar", "Basculegion-M", "Kommo-o", "Venusaur"], sets: [
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Dual Wingbeat", "Rock Slide", "Tailwind", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Detect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Aura Sphere", "Protect", "Clangorous Soul"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Sludge Bomb", "Giga Drain", "Earth Power", "Protect"] }
  ] },
  { id: "ct-460", tournament: "CHAMPIONS REG. M-A |CROWN FIGHT Bo3 TOUR #70", players: 49, placement: 5, player: "GielBakker", wins: 5, losses: 2, pokemonIds: [445, 981, 727, 142, 670, 902], pokemonNames: ["Garchomp", "Farigiraf", "Incineroar", "Aerodactyl", "Floette", "Basculegion-M"], sets: [
    { ability: "Rough Skin", item: "Garchompite", moves: ["Earthquake", "Stomping Tantrum", "Dragon Claw", "Protect"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Psychic", "Helping Hand", "Trick Room", "Protect"] },
    { ability: "Intimidate", item: "Charcoal", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Wide Guard", "Rock Slide", "Tailwind", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-461", tournament: "CHAMPIONS REG. M-A |CROWN FIGHT Bo3 TOUR #70", players: 49, placement: 6, player: "Alessio Ferrara", wins: 4, losses: 3, pokemonIds: [670, 1013, 727, 681, 445, 6], pokemonNames: ["Floette", "Sinistcha", "Incineroar", "Aegislash", "Garchomp", "Charizard"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Stance Change", item: "Focus Sash", moves: ["Poltergeist", "Close Combat", "Shadow Sneak", "Wide Guard"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Stomping Tantrum"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Weather Ball", "Heat Wave", "Solar Beam", "Protect"] }
  ] },
  { id: "ct-462", tournament: "CHAMPIONS REG. M-A |CROWN FIGHT Bo3 TOUR #70", players: 49, placement: 7, player: "Christian_g6", wins: 4, losses: 3, pokemonIds: [981, 6, 445, 547, 983, 970], pokemonNames: ["Farigiraf", "Charizard", "Garchomp", "Whimsicott", "Kingambit", "Glimmora"], sets: [
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Hyper Voice", "Trick Room", "Twin Beam", "Roar"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Solar Beam", "Heat Wave", "Weather Ball", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Stomping Tantrum"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Encore", "Sunny Day", "Tailwind", "Moonblast"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Protect", "Sucker Punch"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Sludge Bomb", "Power Gem", "Dazzling Gleam", "Spiky Shield"] }
  ] },
  { id: "ct-463", tournament: "CHAMPIONS REG. M-A |CROWN FIGHT Bo3 TOUR #70", players: 49, placement: 8, player: "Skylani", wins: 4, losses: 3, pokemonIds: [212, 903, 902, 149, 1018, 279], pokemonNames: ["Scizor", "Sneasler", "Basculegion-M", "Dragonite", "Archaludon", "Pelipper"], sets: [
    { ability: "Technician", item: "Scizorite", moves: ["Bug Bite", "Bullet Punch", "Swords Dance", "Protect"] },
    { ability: "Poison Touch", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Heat Wave", "Tailwind", "Protect"] },
    { ability: "Stamina", item: "Chople Berry", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Protect", "Tailwind", "Weather Ball", "Hurricane"] }
  ] },
  { id: "ct-464", tournament: "CHAMPIONS REG. M-A |CROWN FIGHT Bo3 TOUR #70", players: 49, placement: 9, player: "Goldsman", wins: 4, losses: 2, pokemonIds: [981, 9, 324, 700, 1013, 903], pokemonNames: ["Farigiraf", "Blastoise", "Torkoal", "Sylveon", "Sinistcha", "Sneasler"], sets: [
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Protect", "Helping Hand", "Psychic"] },
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Dark Pulse", "Aura Sphere", "Fake Out", "Water Spout"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Protect", "Weather Ball", "Solar Beam"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Calm Mind", "Mystical Fire", "Protect"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Shadow Ball", "Matcha Gotcha", "Life Dew", "Trick Room"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] }
  ] },
  { id: "ct-465", tournament: "CHAMPIONS REG. M-A |CROWN FIGHT Bo3 TOUR #70", players: 49, placement: 10, player: "BowlingVGC", wins: 4, losses: 2, pokemonIds: [279, 902, 1018, 670, 983, 970], pokemonNames: ["Pelipper", "Basculegion-M", "Archaludon", "Floette", "Kingambit", "Glimmora"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Hurricane", "Weather Ball", "Tailwind", "Wide Guard"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Aqua Jet", "Wave Crash", "Last Respects", "Flip Turn"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Flash Cannon", "Dragon Pulse", "Electro Shot", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Moonblast", "Light of Ruin", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Low Kick", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Spiky Shield"] }
  ] },
  { id: "ct-466", tournament: "CHAMPIONS REG. M-A |CROWN FIGHT Bo3 TOUR #70", players: 49, placement: 11, player: "FKS_Jojo", wins: 4, losses: 2, pokemonIds: [6, 547, 461, 970, 902, 445], pokemonNames: ["Charizard", "Whimsicott", "Weavile", "Glimmora", "Basculegion-M", "Garchomp"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Weather Ball", "Heat Wave", "Solar Beam", "Protect"] },
    { ability: "Prankster", item: "Coba Berry", moves: ["Protect", "Encore", "Moonblast", "Tailwind"] },
    { ability: "Pickpocket", item: "Focus Sash", moves: ["Fake Out", "Knock Off", "Icicle Crash", "Low Kick"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Spiky Shield"] },
    { ability: "Adaptability", item: "Colbur Berry", moves: ["Aqua Jet", "Wave Crash", "Last Respects", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Rock Slide", "Dragon Claw", "Protect"] }
  ] },
  { id: "ct-467", tournament: "CHAMPIONS REG. M-A |CROWN FIGHT Bo3 TOUR #70", players: 49, placement: 12, player: "Mogu50", wins: 3, losses: 3, pokemonIds: [310, 903, 1018, 279, 902, 1013], pokemonNames: ["Manectric", "Sneasler", "Archaludon", "Pelipper", "Basculegion-M", "Sinistcha"], sets: [
    { ability: "Lightning Rod", item: "Manectite", moves: ["Protect", "Volt Switch", "Snarl", "Thunder"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Fake Out", "Dire Claw", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Protect", "Dragon Pulse", "Flash Cannon"] },
    { ability: "Keen Eye", item: "Focus Sash", moves: ["Wide Guard", "Weather Ball", "Hurricane", "Tailwind"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Flip Turn"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Protect", "Trick Room", "Rage Powder"] }
  ] },
  { id: "ct-468", tournament: "CHAMPIONS REG. M-A |CROWN FIGHT Bo3 TOUR #70", players: 49, placement: 13, player: "TheChoiceoffreedom", wins: 3, losses: 3, pokemonIds: [727, 903, 279, 212, 1018, 902], pokemonNames: ["Incineroar", "Sneasler", "Pelipper", "Scizor", "Archaludon", "Basculegion-M"], sets: [
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Weather Ball", "Hurricane", "Tailwind", "Protect"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "Swords Dance", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Flash Cannon", "Dragon Pulse", "Electro Shot", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] }
  ] },
  { id: "ct-469", tournament: "CHAMPIONS REG. M-A |CROWN FIGHT Bo3 TOUR #70", players: 49, placement: 14, player: "Lunchio", wins: 3, losses: 3, pokemonIds: [227, 700, 903, 1018, 547, 727], pokemonNames: ["Skarmory", "Sylveon", "Sneasler", "Archaludon", "Whimsicott", "Incineroar"], sets: [
    { ability: "Sturdy", item: "Skarmorite", moves: ["Iron Head", "Brave Bird", "Rock Tomb", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Detect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Throat Chop", "Fake Out", "Close Combat"] },
    { ability: "Sturdy", item: "Leftovers", moves: ["Flash Cannon", "Aura Sphere", "Thunderbolt", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Protect", "Encore"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Parting Shot", "Helping Hand", "Flare Blitz"] }
  ] },
  { id: "ct-470", tournament: "CHAMPIONS REG. M-A |CROWN FIGHT Bo3 TOUR #70", players: 49, placement: 15, player: "SaintRez", wins: 2, losses: 4, pokemonIds: [6, 670, 445, 681, 1013, 727], pokemonNames: ["Charizard", "Floette", "Garchomp", "Aegislash", "Sinistcha", "Incineroar"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Solar Beam", "Weather Ball"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Moonblast", "Light of Ruin", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Stomping Tantrum", "Dragon Claw", "Earthquake", "Rock Slide"] },
    { ability: "Stance Change", item: "Spell Tag", moves: ["Shadow Ball", "King's Shield", "Wide Guard", "Flash Cannon"] },
    { ability: "Hospitality", item: "Leftovers", moves: ["Matcha Gotcha", "Strength Sap", "Shadow Ball", "Rage Powder"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Parting Shot", "Darkest Lariat", "Fake Out"] }
  ] },
  { id: "ct-471", tournament: "CHAMPIONS REG. M-A |CROWN FIGHT Bo3 TOUR #70", players: 49, placement: 16, player: "BigData", wins: 2, losses: 4, pokemonIds: [282, 655, 925, 547, 908, 10009], pokemonNames: ["Gardevoir", "Delphox", "Maushold", "Whimsicott", "Meowscarada", "Wash Rotom"], sets: [
    { ability: "Synchronize", item: "Gardevoirite", moves: ["Hyper Voice", "Expanding Force", "Protect", "Calm Mind"] },
    { ability: "Magician", item: "Colbur Berry", moves: ["Psychic Terrain", "Expanding Force", "Flamethrower", "Protect"] },
    { ability: "Friend Guard", item: "Sitrus Berry", moves: ["Population Bomb", "Follow Me", "Protect", "Helping Hand"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Encore", "Taunt", "Tailwind"] },
    { ability: "Protean", item: "White Herb", moves: ["Flower Trick", "Brick Break", "Sucker Punch", "Protect"] },
    { ability: "Levitate", item: "Shell Bell", moves: ["Hydro Pump", "Volt Switch", "Sunny Day", "Protect"] }
  ] },
  { id: "ct-472", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 1, player: "Altkyle", wins: 9, losses: 1, pokemonIds: [149, 902, 212, 1018, 279, 727], pokemonNames: ["Dragonite", "Basculegion-M", "Scizor", "Archaludon", "Pelipper", "Incineroar"], sets: [
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Dragon Pulse", "Flamethrower", "Tailwind", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Close Combat", "Swords Dance", "Protect"] },
    { ability: "Stamina", item: "Chople Berry", moves: ["Electro Shot", "Dragon Pulse", "Aura Sphere", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Weather Ball", "Tailwind", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] }
  ] },
  { id: "ct-473", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 2, player: "AthenaStriveVGC", wins: 8, losses: 2, pokemonIds: [670, 652, 902, 1013, 279, 970], pokemonNames: ["Floette", "Chesnaught", "Basculegion-M", "Sinistcha", "Pelipper", "Glimmora"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Moonblast", "Dazzling Gleam", "Light of Ruin"] },
    { ability: "Bulletproof", item: "Chesnaughtite", moves: ["Spiky Shield", "Wood Hammer", "Body Press", "Iron Defense"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Hospitality", item: "Coba Berry", moves: ["Rage Powder", "Matcha Gotcha", "Life Dew", "Trick Room"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Hurricane", "Tailwind", "Wide Guard"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Spiky Shield", "Power Gem", "Sludge Bomb", "Earth Power"] }
  ] },
  { id: "ct-474", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 3, player: "QueerCrocodile", wins: 7, losses: 2, pokemonIds: [670, 547, 5059, 902, 983, 1018], pokemonNames: ["Floette", "Whimsicott", "Hisuian Arcanine", "Basculegion-M", "Kingambit", "Archaludon"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Rock Slide", "Flare Blitz", "Extreme Speed", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Sturdy", item: "White Herb", moves: ["Draco Meteor", "Flash Cannon", "Aura Sphere", "Protect"] }
  ] },
  { id: "ct-475", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 4, player: "fishyguy8514", wins: 6, losses: 3, pokemonIds: [6, 670, 547, 902, 445, 970], pokemonNames: ["Charizard", "Floette", "Whimsicott", "Basculegion-M", "Garchomp", "Glimmora"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Weather Ball", "Heat Wave", "Protect", "Solar Beam"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Encore", "Tailwind", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Tomb", "Poison Jab"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Spiky Shield"] }
  ] },
  { id: "ct-476", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 5, player: "Bebot", wins: 6, losses: 2, pokemonIds: [925, 823, 902, 445, 655, 670], pokemonNames: ["Maushold", "Corviknight", "Basculegion-M", "Garchomp", "Delphox", "Floette"], sets: [
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Protect", "Follow Me", "Feint", "Super Fang"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Roost", "Tailwind", "Brave Bird", "Bulk Up"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Aqua Jet", "Flip Turn", "Wave Crash", "Last Respects"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Protect", "Dragon Claw", "Earthquake", "Rock Slide"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Protect", "Nasty Plot", "Psychic", "Heat Wave"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Moonblast", "Dazzling Gleam", "Calm Mind"] }
  ] },
  { id: "ct-477", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 6, player: "Wyuku", wins: 5, losses: 3, pokemonIds: [727, 1013, 670, 666, 655, 925], pokemonNames: ["Incineroar", "Sinistcha", "Floette", "Vivillon", "Delphox", "Maushold"], sets: [
    { ability: "Intimidate", item: "Passho Berry", moves: ["Parting Shot", "Throat Chop", "Flare Blitz", "Fake Out"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Protect", "Rage Powder", "Life Dew", "Matcha Gotcha"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Calm Mind", "Draining Kiss", "Moonblast"] },
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Sleep Powder", "Hurricane", "Rage Powder", "Pollen Puff"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Protect", "Nasty Plot", "Heat Wave", "Psychic"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Protect", "Feint", "Follow Me", "Super Fang"] }
  ] },
  { id: "ct-478", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 7, player: "RazzRazzBerry", wins: 5, losses: 3, pokemonIds: [94, 727, 186, 1018, 652, 6199], pokemonNames: ["Gengar", "Incineroar", "Politoed", "Archaludon", "Chesnaught", "Galarian Slowking"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Shadow Ball", "Disable", "Perish Song", "Protect"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Fake Out", "Throat Chop", "Protect", "Parting Shot"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Perish Song", "Encore", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Protect", "Flash Cannon"] },
    { ability: "Bulletproof", item: "Chesnaughtite", moves: ["Body Press", "Leech Seed", "Spiky Shield", "Wood Hammer"] },
    { ability: "Regenerator", item: "Colbur Berry", moves: ["Sludge Bomb", "Psychic", "Trick Room", "Protect"] }
  ] },
  { id: "ct-479", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 8, player: "Risten Labba", wins: 5, losses: 3, pokemonIds: [663, 10103, 970, 445, 10009, 983], pokemonNames: ["Talonflame", "Alolan Ninetales", "Glimmora", "Garchomp", "Wash Rotom", "Kingambit"], sets: [
    { ability: "Gale Wings", item: "No item NADA ZERO ZILCH", moves: ["Protect", "Tailwind", "Acrobatics", "Flare Blitz"] },
    { ability: "Snow Warning", item: "Never-Melt Ice", moves: ["Blizzard", "Freeze-Dry", "Encore", "Protect"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Spiky Shield", "Sludge Bomb", "Power Gem", "Earth Power"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Protect", "Swords Dance", "Earthquake", "Dragon Claw"] },
    { ability: "Levitate", item: "Magnet", moves: ["Protect", "Will-O-Wisp", "Thunderbolt", "Hydro Pump"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Kowtow Cleave", "Sucker Punch", "Low Kick"] }
  ] },
  { id: "ct-480", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 9, player: "Smogolem", wins: 5, losses: 2, pokemonIds: [623, 981, 324, 534, 983, 765], pokemonNames: ["Golurk", "Farigiraf", "Torkoal", "Conkeldurr", "Kingambit", "Oranguru"], sets: [
    { ability: "No Guard", item: "Golurkite", moves: ["Poltergeist", "Headlong Rush", "Rock Slide", "Protect"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Twin Beam", "Hyper Voice", "Helping Hand"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Heat Wave", "Protect", "Body Press"] },
    { ability: "Iron Fist", item: "Black Belt", moves: ["Drain Punch", "Knock Off", "Rock Slide", "Ice Punch"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Inner Focus", item: "Colbur Berry", moves: ["Trick Room", "Skill Swap", "Instruct", "Protect"] }
  ] },
  { id: "ct-481", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 10, player: "TingusThePingus", wins: 4, losses: 3, pokemonIds: [6, 142, 445, 10009, 959, 666], pokemonNames: ["Charizard", "Aerodactyl", "Garchomp", "Wash Rotom", "Tinkaton", "Vivillon"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Dragon Claw", "Iron Head", "Rock Slide"] },
    { ability: "Levitate", item: "Magnet", moves: ["Thunderbolt", "Hydro Pump", "Will-O-Wisp", "Protect"] },
    { ability: "Mold Breaker", item: "Shuca Berry", moves: ["Fake Out", "Gigaton Hammer", "Encore", "Protect"] },
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Sleep Powder", "Hurricane", "Tailwind", "Protect"] }
  ] },
  { id: "ct-482", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 11, player: "Nate_5776", wins: 4, losses: 3, pokemonIds: [902, 478, 983, 903, 936, 908], pokemonNames: ["Basculegion-M", "Froslass", "Kingambit", "Sneasler", "Armarouge", "Meowscarada"], sets: [
    { ability: "Adaptability", item: "Mystic Water", moves: ["Aqua Jet", "Liquidation", "Last Respects", "Protect"] },
    { ability: "Snow Cloak", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Protect", "Aurora Veil"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Low Kick", "Sucker Punch", "Kowtow Cleave", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Rock Slide", "Fake Out"] },
    { ability: "Flash Fire", item: "Kasib Berry", moves: ["Flamethrower", "Psychic", "Wide Guard", "Will-O-Wisp"] },
    { ability: "Protean", item: "Choice Scarf", moves: ["Flower Trick", "Throat Chop", "Triple Axel", "U-turn"] }
  ] },
  { id: "ct-483", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 12, player: "Karzon", wins: 4, losses: 3, pokemonIds: [142, 784, 902, 10103, 727, 3], pokemonNames: ["Aerodactyl", "Kommo-o", "Basculegion-M", "Alolan Ninetales", "Incineroar", "Venusaur"], sets: [
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Protect", "Rock Slide", "Dual Wingbeat", "Tailwind"] },
    { ability: "Soundproof", item: "Dragon Fang", moves: ["Protect", "Clanging Scales", "Aura Sphere", "Flamethrower"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Protect", "Liquidation", "Last Respects", "Aqua Jet"] },
    { ability: "Snow Warning", item: "Choice Scarf", moves: ["Blizzard", "Freeze-Dry", "Moonblast", "Icy Wind"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Parting Shot", "Fake Out"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Protect", "Giga Drain", "Sludge Bomb", "Earth Power"] }
  ] },
  { id: "ct-484", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 13, player: "KingNoahC17", wins: 4, losses: 3, pokemonIds: [609, 10103, 10009, 983, 445, 903], pokemonNames: ["Chandelure", "Alolan Ninetales", "Wash Rotom", "Kingambit", "Garchomp", "Sneasler"], sets: [
    { ability: "Flash Fire", item: "Chandelurite", moves: ["Heat Wave", "Shadow Ball", "Substitute", "Protect"] },
    { ability: "Snow Warning", item: "Focus Sash", moves: ["Blizzard", "Freeze-Dry", "Aurora Veil", "Protect"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Hydro Pump", "Volt Switch", "Electroweb", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Rough Skin", item: "Dragon Fang", moves: ["Scale Shot", "Earthquake", "Stomping Tantrum", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] }
  ] },
  { id: "ct-485", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 14, player: "joniaco", wins: 4, losses: 2, pokemonIds: [727, 981, 902, 10103, 3, 445], pokemonNames: ["Incineroar", "Farigiraf", "Basculegion-M", "Alolan Ninetales", "Venusaur", "Garchomp"], sets: [
    { ability: "Intimidate", item: "Charcoal", moves: ["Flare Blitz", "Darkest Lariat", "Fake Out", "Parting Shot"] },
    { ability: "Armor Tail", item: "Twisted Spoon", moves: ["Twin Beam", "Thunderbolt", "Helping Hand", "Trick Room"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Protect", "Aqua Jet", "Last Respects"] },
    { ability: "Snow Warning", item: "Focus Sash", moves: ["Protect", "Aurora Veil", "Blizzard", "Freeze-Dry"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Giga Drain", "Sludge Bomb", "Earth Power", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Protect", "Swords Dance", "Dragon Claw", "Stomping Tantrum"] }
  ] },
  { id: "ct-486", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 15, player: "StoneStormVGC", wins: 4, losses: 3, pokemonIds: [547, 478, 900, 903, 902, 983], pokemonNames: ["Whimsicott", "Froslass", "Kleavor", "Sneasler", "Basculegion-M", "Kingambit"], sets: [
    { ability: "Prankster", item: "Sitrus Berry", moves: ["Moonblast", "Encore", "Tailwind", "Protect"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Stone Axe", "Feint", "X-Scissor", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Fake Out", "Close Combat", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Swords Dance", "Sucker Punch", "Protect"] }
  ] },
  { id: "ct-487", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 16, player: "CJ__black98", wins: 3, losses: 3, pokemonIds: [3, 350, 727, 903, 445, 6], pokemonNames: ["Venusaur", "Milotic", "Incineroar", "Sneasler", "Garchomp", "Charizard"], sets: [
    { ability: "Chlorophyll", item: "Focus Sash", moves: ["Sleep Powder", "Sludge Bomb", "Energy Ball", "Protect"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Muddy Water", "Hypnosis", "Coil", "Recover"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Darkest Lariat", "Flare Blitz", "Parting Shot", "Fake Out"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Protect", "Fake Out"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Rock Slide", "Dragon Claw", "Protect", "Earthquake"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] }
  ] },
  { id: "ct-488", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 17, player: "glitterckvamp", wins: 3, losses: 3, pokemonIds: [700, 903, 952, 902, 227, 445], pokemonNames: ["Sylveon", "Sneasler", "Scovillain", "Basculegion-M", "Skarmory", "Garchomp"], sets: [
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Detect", "Quick Attack", "Hyper Beam"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Protect", "Leech Seed", "Flamethrower", "Rage Powder"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Flip Turn", "Protect", "Last Respects", "Aqua Jet"] },
    { ability: "Sturdy", item: "Skarmorite", moves: ["Protect", "Rock Slide", "Brave Bird", "Iron Head"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Scale Shot", "Earthquake", "Stomping Tantrum", "Protect"] }
  ] },
  { id: "ct-489", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 18, player: "Lorian S", wins: 3, losses: 3, pokemonIds: [445, 547, 635, 227, 6, 903], pokemonNames: ["Garchomp", "Whimsicott", "Hydreigon", "Skarmory", "Charizard", "Sneasler"], sets: [
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Protect", "Moonblast", "Tailwind", "Encore"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Dark Pulse", "Snarl", "Draco Meteor", "Heat Wave"] },
    { ability: "Sturdy", item: "Skarmorite", moves: ["Brave Bird", "Iron Head", "Rock Tomb", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Gunk Shot", "Throat Chop", "Fake Out"] }
  ] },
  { id: "ct-490", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 19, player: "MrAwesome", wins: 3, losses: 3, pokemonIds: [478, 547, 900, 902, 903, 983], pokemonNames: ["Froslass", "Whimsicott", "Kleavor", "Basculegion-M", "Sneasler", "Kingambit"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Prankster", item: "Coba Berry", moves: ["Moonblast", "Protect", "Encore", "Tailwind"] },
    { ability: "Sharpness", item: "Focus Sash", moves: ["Stone Axe", "Close Combat", "Feint", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Flip Turn", "Aqua Jet"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Protect", "Swords Dance"] }
  ] },
  { id: "ct-491", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 20, player: "dukeenzo", wins: 3, losses: 3, pokemonIds: [323, 981, 983, 730, 745, 181], pokemonNames: ["Camerupt", "Farigiraf", "Kingambit", "Primarina", "Lycanroc", "Ampharos"], sets: [
    { ability: "Solid Rock", item: "Cameruptite", moves: ["Heat Wave", "Earth Power", "Ancient Power", "Protect"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Protect", "Trick Room", "Imprison", "Hyper Voice"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Sucker Punch", "Iron Head", "Kowtow Cleave", "Low Kick"] },
    { ability: "Liquid Voice", item: "Sitrus Berry", moves: ["Hyper Voice", "Moonblast", "Protect", "Psychic"] },
    { ability: "Tough Claws", item: "White Herb", moves: ["Accelerock", "Close Combat", "Psychic Fangs", "Iron Head"] },
    { ability: "Static", item: "Ampharosite", moves: ["Dragon Pulse", "Protect", "Thunderbolt", "Parabolic Charge"] }
  ] },
  { id: "ct-492", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 21, player: "Gmaddox", wins: 3, losses: 3, pokemonIds: [149, 903, 478, 637, 279, 902], pokemonNames: ["Dragonite", "Sneasler", "Froslass", "Volcarona", "Pelipper", "Basculegion-M"], sets: [
    { ability: "Multiscale", item: "Dragoninite", moves: ["Tailwind", "Draco Meteor", "Protect", "Hurricane"] },
    { ability: "Flame Body", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Protect", "Fake Out"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Aurora Veil", "Blizzard", "Protect", "Shadow Ball"] },
    { ability: "Flame Body", item: "Leftovers", moves: ["Protect", "Fiery Dance", "Rage Powder", "Struggle Bug"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Hurricane", "Weather Ball", "Tailwind", "Wide Guard"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Flip Turn"] }
  ] },
  { id: "ct-493", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 22, player: "LightBrawler", wins: 3, losses: 3, pokemonIds: [186, 1018, 902, 823, 970, 952], pokemonNames: ["Politoed", "Archaludon", "Basculegion-M", "Corviknight", "Glimmora", "Scovillain"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Icy Wind", "Muddy Water", "Helping Hand", "Weather Ball"] },
    { ability: "Stamina", item: "Chople Berry", moves: ["Protect", "Flash Cannon", "Electro Shot", "Draco Meteor"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Last Respects", "Protect", "Aqua Jet", "Liquidation"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Roost", "Tailwind", "Iron Head", "Brave Bird"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Moody", item: "Scovillainite", moves: ["Flamethrower", "Protect", "Rage Powder", "Leech Seed"] }
  ] },
  { id: "ct-494", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 23, player: "ljhartman", wins: 3, losses: 2, pokemonIds: [670, 445, 142, 983, 903, 902], pokemonNames: ["Floette", "Garchomp", "Aerodactyl", "Kingambit", "Sneasler", "Basculegion-M"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Draco Meteor", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Rock Head", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] },
    { ability: "Poison Touch", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Adaptability", item: "Kasib Berry", moves: ["Last Respects", "Wave Crash", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-495", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 24, player: "Storm2184", wins: 3, losses: 3, pokemonIds: [94, 903, 983, 763, 350, 142], pokemonNames: ["Gengar", "Sneasler", "Kingambit", "Tsareena", "Milotic", "Aerodactyl"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Protect", "Perish Song", "Shadow Ball", "Sludge Bomb"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Sucker Punch", "Kowtow Cleave", "Iron Head"] },
    { ability: "Queenly Majesty", item: "Choice Scarf", moves: ["Power Whip", "Triple Axel", "Low Kick", "U-turn"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Protect", "Muddy Water", "Hypnosis", "Coil"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Protect", "Tailwind", "Dual Wingbeat", "Rock Slide"] }
  ] },
  { id: "ct-496", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 25, player: "That_boi_Yami", wins: 2, losses: 4, pokemonIds: [149, 154, 186, 903, 902, 1013], pokemonNames: ["Dragonite", "Meganium", "Politoed", "Sneasler", "Basculegion-M", "Sinistcha"], sets: [
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Draco Meteor", "Hurricane", "Tailwind", "Protect"] },
    { ability: "Overgrow", item: "Meganiumite", moves: ["Solar Beam", "Dazzling Gleam", "Weather Ball", "Protect"] },
    { ability: "Drizzle", item: "Mystic Water", moves: ["Muddy Water", "Weather Ball", "Icy Wind", "Helping Hand"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Flip Turn", "Aqua Jet", "Last Respects"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Imprison"] }
  ] },
  { id: "ct-497", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 26, player: "IngageWithZenith", wins: 2, losses: 4, pokemonIds: [448, 707, 730, 981, 1018, 142], pokemonNames: ["Lucario", "Klefki", "Primarina", "Farigiraf", "Archaludon", "Aerodactyl"], sets: [
    { ability: "Inner Focus", item: "Lucarionite", moves: ["Close Combat", "Ice Punch", "Swords Dance", "Bullet Punch"] },
    { ability: "Prankster", item: "Mental Herb", moves: ["Dazzling Gleam", "Rain Dance", "Trick Room", "Light Screen"] },
    { ability: "Liquid Voice", item: "Quick Claw", moves: ["Hyper Voice", "Moonblast", "Calm Mind", "Protect"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Psychic", "Rain Dance", "Helping Hand", "Trick Room"] },
    { ability: "Stamina", item: "Chople Berry", moves: ["Electro Shot", "Protect", "Draco Meteor", "Flash Cannon"] },
    { ability: "Unnerve", item: "Sharp Beak", moves: ["Tailwind", "Wide Guard", "Rock Slide", "Dual Wingbeat"] }
  ] },
  { id: "ct-498", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 27, player: "DrBoom", wins: 2, losses: 2, pokemonIds: [547, 970, 983, 763, 445, 6], pokemonNames: ["Whimsicott", "Glimmora", "Kingambit", "Tsareena", "Garchomp", "Charizard"], sets: [
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Low Kick", "Sucker Punch"] },
    { ability: "Queenly Majesty", item: "Leftovers", moves: ["Taunt", "Protect", "Power Whip", "Triple Axel"] },
    { ability: "Sand Veil", item: "Sitrus Berry", moves: ["Dragon Claw", "Stomping Tantrum", "Rock Slide", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] }
  ] },
  { id: "ct-499", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 28, player: "Peengoo", wins: 2, losses: 2, pokemonIds: [6, 142, 902, 700, 981, 445], pokemonNames: ["Charizard", "Aerodactyl", "Basculegion-M", "Sylveon", "Farigiraf", "Garchomp"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Dual Wingbeat", "Rock Slide", "Tailwind", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Detect"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Protect", "Helping Hand", "Psychic", "Trick Room"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Dragon Claw", "Rock Tomb", "Earthquake", "Protect"] }
  ] },
  { id: "ct-500", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 29, player: "CVD", wins: 2, losses: 3, pokemonIds: [670, 655, 925, 1013, 666, 727], pokemonNames: ["Floette", "Delphox", "Maushold", "Sinistcha", "Vivillon", "Incineroar"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Draining Kiss", "Calm Mind", "Protect"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Psychic", "Heat Wave", "Nasty Plot", "Protect"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Follow Me", "Feint", "Super Fang", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Sleep Powder", "Hurricane", "Rage Powder", "Tailwind"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Parting Shot", "Fake Out", "Throat Chop", "Flare Blitz"] }
  ] },
  { id: "ct-501", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 30, player: "ibsan08", wins: 2, losses: 1, pokemonIds: [475, 26, 302, 748, 763, 248], pokemonNames: ["Gallade", "Raichu", "Sableye", "Toxapex", "Tsareena", "Tyranitar"], sets: [
    { ability: "Sharpness", item: "Galladite", moves: ["Psycho Cut", "Sacred Sword", "Protect", "Rock Slide"] },
    { ability: "Lightning Rod", item: "King's Rock", moves: ["Nuzzle", "Thunderbolt", "Protect", "Alluring Voice"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Thunder Wave", "Encore", "Disable", "Fake Out"] },
    { ability: "Regenerator", item: "Leftovers", moves: ["Wide Guard", "Toxic", "Baneful Bunker", "Infestation"] },
    { ability: "Queenly Majesty", item: "Choice Scarf", moves: ["Trop Kick", "Triple Axel", "U-turn", "High Jump Kick"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Protect", "Knock Off", "Low Kick"] }
  ] },
  { id: "ct-502", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 31, player: "SamSmorkle", wins: 2, losses: 4, pokemonIds: [282, 936, 10340, 184, 115, 903], pokemonNames: ["Gardevoir", "Armarouge", "Hisuian Zoroark", "Azumarill", "Kangaskhan", "Sneasler"], sets: [
    { ability: "Trace", item: "Gardevoirite", moves: ["Psychic Noise", "Moonblast", "Mystical Fire", "Vacuum Wave"] },
    { ability: "Weak Armor", item: "King's Rock", moves: ["Armor Cannon", "Dragon Pulse", "Expanding Force", "Flash Cannon"] },
    { ability: "Illusion", item: "Quick Claw", moves: ["Sludge Bomb", "Psychic", "Will-O-Wisp", "Shadow Ball"] },
    { ability: "Huge Power", item: "White Herb", moves: ["Play Rough", "Aqua Jet", "Superpower", "Belly Drum"] },
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Fake Out", "Shadow Claw", "Drain Punch", "Body Slam"] },
    { ability: "Unburden", item: "Sitrus Berry", moves: ["Dire Claw", "Acrobatics", "U-turn", "Fake Out"] }
  ] },
  { id: "ct-503", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 32, player: "PonchoRed", wins: 2, losses: 4, pokemonIds: [214, 981, 115, 547, 227, 697], pokemonNames: ["Heracross", "Farigiraf", "Kangaskhan", "Whimsicott", "Skarmory", "Tyrantrum"], sets: [
    { ability: "Moxie", item: "Heracronite", moves: ["Close Combat", "Pin Missile", "Bullet Seed", "Detect"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Psychic", "Trick Room", "Helping Hand", "Protect"] },
    { ability: "Scrappy", item: "Silk Scarf", moves: ["Fake Out", "Last Resort"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Sturdy", item: "Skarmorite", moves: ["Iron Head", "Brave Bird", "Rock Tomb", "Protect"] },
    { ability: "Rock Head", item: "Hard Stone", moves: ["Dragon Claw", "Head Smash", "Dragon Dance", "Protect"] }
  ] },
  { id: "ct-504", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 33, player: "miniman", wins: 1, losses: 2, pokemonIds: [670, 663, 445, 983, 903, 10009], pokemonNames: ["Floette", "Talonflame", "Garchomp", "Kingambit", "Sneasler", "Wash Rotom"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Brave Bird", "Flare Blitz", "Tailwind", "Protect"] },
    { ability: "Rough Skin", item: "White Herb", moves: ["Earthquake", "Stomping Tantrum", "Scale Shot", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Unburden", item: "Sitrus Berry", moves: ["Fake Out", "Gunk Shot", "Close Combat", "Coaching"] },
    { ability: "Levitate", item: "Magnet", moves: ["Hydro Pump", "Thunderbolt", "Electroweb", "Protect"] }
  ] },
  { id: "ct-505", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 34, player: "Itivgc", wins: 1, losses: 1, pokemonIds: [6, 445, 983, 902, 282, 142], pokemonNames: ["Charizard", "Garchomp", "Kingambit", "Basculegion-M", "Gardevoir", "Aerodactyl"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Solar Beam", "Heat Wave", "Weather Ball", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Rock Slide", "Dragon Claw", "Earthquake", "Stomping Tantrum"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Protect", "Last Respects", "Aqua Jet"] },
    { ability: "Telepathy", item: "Gardevoirite", moves: ["Dazzling Gleam", "Psychic", "Protect", "Trick Room"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] }
  ] },
  { id: "ct-506", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 35, player: "almondspy", wins: 1, losses: 3, pokemonIds: [6, 727, 1013, 212, 635, 670], pokemonNames: ["Charizard", "Incineroar", "Sinistcha", "Scizor", "Hydreigon", "Floette"], sets: [
    { ability: "Blaze", item: "Charizardite X", moves: ["Flare Blitz", "Dragon Claw", "Dragon Dance", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Flare Blitz", "Helping Hand", "Fake Out", "Parting Shot"] },
    { ability: "Hospitality", item: "Coba Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] },
    { ability: "Technician", item: "Metal Coat", moves: ["Bullet Punch", "Close Combat", "Swords Dance", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Dark Pulse", "Draco Meteor", "Snarl", "Head Smash"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Draining Kiss", "Calm Mind", "Protect"] }
  ] },
  { id: "ct-507", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 36, player: "BHelixB", wins: 1, losses: 2, pokemonIds: [6, 547, 461, 445, 970, 902], pokemonNames: ["Charizard", "Whimsicott", "Weavile", "Garchomp", "Glimmora", "Basculegion-M"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Solar Beam", "Weather Ball"] },
    { ability: "Prankster", item: "Coba Berry", moves: ["Protect", "Encore", "Tailwind", "Moonblast"] },
    { ability: "Pickpocket", item: "Focus Sash", moves: ["Fake Out", "Knock Off", "Icicle Crash", "Low Kick"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Protect", "Dragon Claw", "Earthquake", "Rock Slide"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Spiky Shield", "Power Gem", "Sludge Bomb", "Earth Power"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Flip Turn", "Last Respects"] }
  ] },
  { id: "ct-508", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 37, player: "LOLgan25", wins: 1, losses: 2, pokemonIds: [279, 902, 1018, 310, 903, 154], pokemonNames: ["Pelipper", "Basculegion-M", "Archaludon", "Manectric", "Sneasler", "Meganium"], sets: [
    { ability: "Drizzle", item: "Focus Sash", moves: ["Protect", "Tailwind", "Weather Ball", "Hurricane"] },
    { ability: "Swift Swim", item: "Mystic Water", moves: ["Protect", "Flip Turn", "Wave Crash", "Last Respects"] },
    { ability: "Stamina", item: "Sitrus Berry", moves: ["Protect", "Electro Shot", "Flash Cannon", "Draco Meteor"] },
    { ability: "Lightning Rod", item: "Magnet", moves: ["Protect", "Eerie Impulse", "Volt Switch", "Thunder"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Fake Out", "Close Combat", "Dire Claw"] },
    { ability: "Overgrow", item: "Meganiumite", moves: ["Protect", "Weather Ball", "Solar Beam", "Dazzling Gleam"] }
  ] },
  { id: "ct-509", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 38, player: "Beedrillvgc", wins: 1, losses: 4, pokemonIds: [10009, 983, 445, 478, 142, 903], pokemonNames: ["Wash Rotom", "Kingambit", "Garchomp", "Froslass", "Aerodactyl", "Sneasler"], sets: [
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Thunderbolt", "Hydro Pump", "Will-O-Wisp", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Rough Skin", item: "Focus Sash", moves: ["Earthquake", "Dragon Claw", "Poison Jab", "Rock Tomb"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] }
  ] },
  { id: "ct-510", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 39, player: "TomatoSaiyan", wins: 1, losses: 4, pokemonIds: [324, 115, 623, 700, 981, 59], pokemonNames: ["Torkoal", "Kangaskhan", "Golurk", "Sylveon", "Farigiraf", "Arcanine"], sets: [
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Weather Ball", "Earth Power", "Protect"] },
    { ability: "Scrappy", item: "Silk Scarf", moves: ["Fake Out", "Last Resort"] },
    { ability: "No Guard", item: "Golurkite", moves: ["Poltergeist", "Headlong Rush", "Protect", "Rock Slide"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Yawn", "Calm Mind", "Detect"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Protect", "Imprison", "Psychic", "Trick Room"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Snarl", "Will-O-Wisp", "Burn Up", "Charm"] }
  ] },
  { id: "ct-511", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 40, player: "Orttega15", wins: 1, losses: 4, pokemonIds: [115, 324, 981, 858, 983, 727], pokemonNames: ["Kangaskhan", "Torkoal", "Farigiraf", "Hatterene", "Kingambit", "Incineroar"], sets: [
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Double-Edge", "Low Kick", "Sucker Punch", "Fake Out"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Weather Ball", "Earth Power", "Protect"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Psychic", "Hyper Voice", "Helping Hand", "Trick Room"] },
    { ability: "Magic Bounce", item: "Focus Sash", moves: ["Dazzling Gleam", "Psychic", "Trick Room", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Intimidate", item: "White Herb", moves: ["Close Combat", "Darkest Lariat", "Fake Out", "Flare Blitz"] }
  ] },
  { id: "ct-512", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 41, player: "Jeremiah Colustrio", wins: 1, losses: 3, pokemonIds: [670, 902, 1013, 903, 727, 983], pokemonNames: ["Floette", "Basculegion-M", "Sinistcha", "Sneasler", "Incineroar", "Kingambit"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Calm Mind", "Dazzling Gleam", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Flip Turn", "Aqua Jet", "Last Respects"] },
    { ability: "Hospitality", item: "Leftovers", moves: ["Rage Powder", "Life Dew", "Trick Room", "Matcha Gotcha"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Rock Tomb", "Protect", "Close Combat"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Parting Shot", "Fake Out", "Darkest Lariat", "Flare Blitz"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Swords Dance", "Sucker Punch", "Protect"] }
  ] },
  { id: "ct-513", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 42, player: "VitaoSjp", wins: 1, losses: 4, pokemonIds: [80, 143, 6, 9, 26, 197], pokemonNames: ["Slowbro", "Snorlax", "Charizard", "Blastoise", "Raichu", "Umbreon"], sets: [
    { ability: "Own Tempo", item: "Mental Herb", moves: ["Trick Room", "Shell Side Arm", "Rain Dance", "Heal Pulse"] },
    { ability: "Thick Fat", item: "Leftovers", moves: ["Ice Punch", "Body Slam", "Thunder Punch", "High Horsepower"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Air Slash", "Protect"] },
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Fake Out", "Protect", "Dark Pulse", "Water Spout"] },
    { ability: "Lightning Rod", item: "Focus Sash", moves: ["Fake Out", "Nuzzle", "Volt Switch", "Fake Tears"] },
    { ability: "Inner Focus", item: "Chople Berry", moves: ["Wish", "Fake Tears", "Tickle", "Snarl"] }
  ] },
  { id: "ct-514", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 43, player: "Mahzlo", wins: 1, losses: 0, pokemonIds: [970, 663, 983, 10103, 445, 10009], pokemonNames: ["Glimmora", "Talonflame", "Kingambit", "Alolan Ninetales", "Garchomp", "Wash Rotom"], sets: [
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Spiky Shield", "Power Gem", "Sludge Bomb", "Earth Power"] },
    { ability: "Gale Wings", item: "No Item", moves: ["Protect", "Acrobatics", "Overheat", "Tailwind"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Kowtow Cleave", "Low Kick", "Sucker Punch"] },
    { ability: "Snow Warning", item: "Never-Melt Ice", moves: ["Protect", "Encore", "Blizzard", "Freeze-Dry"] },
    { ability: "Rough Skin", item: "Garchompite", moves: ["Protect", "Dragon Claw", "Earthquake", "Rock Slide"] },
    { ability: "Levitate", item: "Magnet", moves: ["Protect", "Thunderbolt", "Hydro Pump", "Will-O-Wisp"] }
  ] },
  { id: "ct-515", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 44, player: "Sirox", wins: 0, losses: 1, pokemonIds: [6, 149, 902, 445, 10009, 778], pokemonNames: ["Charizard", "Dragonite", "Basculegion-M", "Garchomp", "Wash Rotom", "Mimikyu"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Weather Ball", "Heat Wave", "Solar Beam", "Protect"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Flamethrower", "Thunderbolt", "Tailwind"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Last Respects", "Liquidation", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Poison Jab"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Hydro Pump", "Thunderbolt", "Volt Switch", "Electroweb"] },
    { ability: "Disguise", item: "Fairy Feather", moves: ["Play Rough", "Shadow Claw", "Shadow Sneak", "Protect"] }
  ] },
  { id: "ct-516", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 45, player: "JOAO", wins: 0, losses: 2, pokemonIds: [186, 94, 727, 1018, 778, 460], pokemonNames: ["Politoed", "Gengar", "Incineroar", "Archaludon", "Mimikyu", "Abomasnow"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Encore", "Perish Song", "Protect"] },
    { ability: "Cursed Body", item: "Gengarite", moves: ["Shadow Ball", "Perish Song", "Disable", "Protect"] },
    { ability: "Intimidate", item: "Shuca Berry", moves: ["Throat Chop", "Parting Shot", "Fake Out", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Flash Cannon", "Dragon Pulse", "Protect"] },
    { ability: "Disguise", item: "Mental Herb", moves: ["Will-O-Wisp", "Shadow Sneak", "Taunt", "Trick Room"] },
    { ability: "Snow Warning", item: "Abomasite", moves: ["Blizzard", "Weather Ball", "Giga Drain", "Protect"], teraType: "Grass" }
  ] },
  { id: "ct-517", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 46, player: "AquamarineVGC", wins: 0, losses: 1, pokemonIds: [952, 302, 745, 248, 823, 902], pokemonNames: ["Scovillain", "Sableye", "Lycanroc", "Tyranitar", "Corviknight", "Basculegion-M"], sets: [
    { ability: "Moody", item: "Scovillainite", moves: ["Flamethrower", "Giga Drain", "Rage Powder", "Protect"] },
    { ability: "Prankster", item: "Sitrus Berry", moves: ["Fake Out", "Reflect", "Light Screen", "Thunder Wave"] },
    { ability: "Sand Rush", item: "Focus Sash", moves: ["Rock Slide", "Accelerock", "Howl", "Protect"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Helping Hand", "Protect"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Iron Head", "Body Press", "Bulk Up", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-518", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 47, player: "squib", wins: 0, losses: 2, pokemonIds: [670, 6, 727, 681, 1013, 445], pokemonNames: ["Floette", "Charizard", "Incineroar", "Aegislash", "Sinistcha", "Garchomp"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Stance Change", item: "Focus Sash", moves: ["Poltergeist", "Shadow Sneak", "Iron Head", "King's Shield"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Rage Powder", "Matcha Gotcha", "Life Dew", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Dragon Claw", "Earthquake", "Rock Tomb", "Stomping Tantrum"] }
  ] },
  { id: "ct-519", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 48, player: "maxdeesevgc", wins: 0, losses: 2, pokemonIds: [663, 902, 279, 9, 1018, 25], pokemonNames: ["Talonflame", "Basculegion-M", "Pelipper", "Blastoise", "Archaludon", "Pikachu"], sets: [
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Dual Wingbeat", "Tailwind", "Quick Guard", "Rain Dance"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Weather Ball", "Tailwind", "Wide Guard"] },
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Water Spout", "Aura Sphere", "Dark Pulse", "Protect"] },
    { ability: "Stamina", item: "Sitrus Berry", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] },
    { ability: "Lightning Rod", item: "Light Ball", moves: ["Fake Out", "Thunder", "Alluring Voice", "Protect"] }
  ] },
  { id: "ct-520", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 49, player: "noah100800", wins: 0, losses: 2, pokemonIds: [128, 670, 655, 983, 681, 763], pokemonNames: ["Tauros", "Floette", "Delphox", "Kingambit", "Aegislash", "Tsareena"], sets: [
    { ability: "Intimidate", item: "Choice Scarf", moves: ["Aqua Jet", "Wave Crash", "Close Combat", "Rock Slide"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Light of Ruin", "Moonblast", "Dazzling Gleam"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Protect", "Heat Wave", "Encore", "Psychic"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Low Kick", "Kowtow Cleave", "Sucker Punch"] },
    { ability: "Stance Change", item: "Spell Tag", moves: ["King's Shield", "Poltergeist", "Iron Head", "Shadow Sneak"] },
    { ability: "Queenly Majesty", item: "Miracle Seed", moves: ["Protect", "Trop Kick", "Knock Off", "Triple Axel"] }
  ] },
  { id: "ct-521", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 50, player: "MammothVGC", wins: 0, losses: 3, pokemonIds: [94, 727, 1013, 186, 959, 784], pokemonNames: ["Gengar", "Incineroar", "Sinistcha", "Politoed", "Tinkaton", "Kommo-o"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Shadow Ball", "Disable", "Perish Song", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Fake Out", "Throat Chop", "Parting Shot", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Encore", "Perish Song", "Protect"] },
    { ability: "Mold Breaker", item: "Shuca Berry", moves: ["Fake Out", "Gigaton Hammer", "Encore", "Protect"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Aura Sphere", "Clangorous Soul", "Protect"] }
  ] },
  { id: "ct-522", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 51, player: "rRedl", wins: 0, losses: 5, pokemonIds: [130, 903, 727, 700, 1013, 1018], pokemonNames: ["Gyarados", "Sneasler", "Incineroar", "Sylveon", "Sinistcha", "Archaludon"], sets: [
    { ability: "Mold Breaker", item: "Gyaradosite", moves: ["Waterfall", "Crunch", "Dragon Dance", "Protect"] },
    { ability: "Pressure", item: "Focus Sash", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Intimidate", item: "Lum Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"], teraType: "Fire" },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Moonblast", "Quick Attack", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Sturdy", item: "Scope Lens", moves: ["Draco Meteor", "Flash Cannon", "Thunderbolt", "Protect"] }
  ] },
  { id: "ct-523", tournament: "Talon's FIGHT CLUB #86 POKEMON CHAMPIONS", players: 52, placement: 52, player: "SwordFishMan", wins: 0, losses: 2, pokemonIds: [10009, 983, 445, 478, 142, 903], pokemonNames: ["Wash Rotom", "Kingambit", "Garchomp", "Froslass", "Aerodactyl", "Sneasler"], sets: [
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Thunderbolt", "Hydro Pump", "Will-O-Wisp", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Rough Skin", item: "Focus Sash", moves: ["Earthquake", "Dragon Claw", "Poison Jab", "Rock Tomb"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] }
  ] },
  { id: "ct-524", tournament: "Intimidators Champions Challenge #13 REG M-A", players: 30, placement: 1, player: "Zantut", wins: 7, losses: 1, pokemonIds: [663, 666, 670, 903, 983, 902], pokemonNames: ["Talonflame", "Vivillon", "Floette", "Sneasler", "Kingambit", "Basculegion-M"], sets: [
    { ability: "Gale Wings", item: "none", moves: ["Acrobatics", "Tailwind", "Flare Blitz", "Protect"] },
    { ability: "Compound Eyes", item: "Focus Sash", moves: ["Protect", "Hurricane", "Rage Powder", "Sleep Powder"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Light of Ruin", "Dazzling Gleam", "Moonblast"] },
    { ability: "Unburden", item: "White Herb", moves: ["Protect", "Rock Tomb", "Dire Claw", "Close Combat"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Protect", "Sucker Punch", "Iron Head", "Kowtow Cleave"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Protect", "Aqua Jet", "Wave Crash", "Last Respects"] }
  ] },
  { id: "ct-525", tournament: "Intimidators Champions Challenge #13 REG M-A", players: 30, placement: 2, player: "NMR | Bulba_Sauro .", wins: 6, losses: 2, pokemonIds: [94, 10103, 727, 784, 670, 1013], pokemonNames: ["Gengar", "Alolan Ninetales", "Incineroar", "Kommo-o", "Floette", "Sinistcha"], sets: [
    { ability: "Shadow Tag", item: "Gengarite", moves: ["Sludge Bomb", "Shadow Ball", "Protect", "Disable"] },
    { ability: "Snow Warning", item: "Focus Sash", moves: ["Blizzard", "Freeze-Dry", "Protect", "Encore"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Aura Sphere", "Protect", "Clangorous Soul"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Life Dew"] }
  ] },
  { id: "ct-526", tournament: "Intimidators Champions Challenge #13 REG M-A", players: 30, placement: 3, player: "NMR | FelipeT", wins: 4, losses: 3, pokemonIds: [445, 6, 970, 902, 547, 983], pokemonNames: ["Garchomp", "Charizard", "Glimmora", "Basculegion-M", "Whimsicott", "Kingambit"], sets: [
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Rock Slide", "Dragon Claw", "Poison Jab", "Earthquake"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Weather Ball", "Heat Wave", "Solar Beam", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Spiky Shield"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Protect", "Low Kick"] }
  ] },
  { id: "ct-527", tournament: "Intimidators Champions Challenge #13 REG M-A", players: 30, placement: 4, player: "NMR | Gostzin Igor Salino", wins: 4, losses: 3, pokemonIds: [902, 547, 670, 780, 637, 981], pokemonNames: ["Basculegion-M", "Whimsicott", "Floette", "Drampa", "Volcarona", "Farigiraf"], sets: [
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Aqua Jet", "Flip Turn", "Last Respects", "Wave Crash"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Protect", "Encore"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Light of Ruin", "Moonblast", "Dazzling Gleam", "Protect"] },
    { ability: "Cloud Nine", item: "Chople Berry", moves: ["Thunderbolt", "Flamethrower", "Protect", "Draco Meteor"] },
    { ability: "Flame Body", item: "Sitrus Berry", moves: ["Heat Wave", "Struggle Bug", "Protect", "Rage Powder"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Twin Beam", "Protect", "Trick Room", "Hyper Voice"] }
  ] },
  { id: "ct-528", tournament: "Intimidators Champions Challenge #13 REG M-A", players: 30, placement: 5, player: "CorreiazinhoW", wins: 5, losses: 1, pokemonIds: [964, 279, 1018, 3, 302, 59], pokemonNames: ["Palafin", "Pelipper", "Archaludon", "Venusaur", "Sableye", "Arcanine"], sets: [
    { ability: "Zero to Hero", item: "Choice Scarf", moves: ["Wave Crash", "Close Combat", "Ice Punch", "Flip Turn"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Weather Ball", "Hurricane", "Tailwind", "Protect"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Dragon Pulse", "Flash Cannon", "Electro Shot", "Protect"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Leaf Storm", "Sludge Bomb", "Earth Power", "Protect"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Rain Dance", "Disable", "Reflect", "Light Screen"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Extreme Speed", "Snarl", "Will-O-Wisp"] }
  ] },
  { id: "ct-529", tournament: "Intimidators Champions Challenge #13 REG M-A", players: 30, placement: 6, player: "lucardrgs", wins: 4, losses: 2, pokemonIds: [670, 727, 1013, 6, 983, 903], pokemonNames: ["Floette", "Incineroar", "Sinistcha", "Charizard", "Kingambit", "Sneasler"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Parting Shot", "Helping Hand", "Fake Out"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Blaze", item: "Charizardite X", moves: ["Flare Blitz", "Dragon Claw", "Dragon Dance", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Coaching", "Fake Out"] }
  ] },
  { id: "ct-530", tournament: "Intimidators Champions Challenge #13 REG M-A", players: 30, placement: 7, player: "ryoshino", wins: 4, losses: 2, pokemonIds: [94, 727, 959, 1013, 186, 784], pokemonNames: ["Gengar", "Incineroar", "Tinkaton", "Sinistcha", "Politoed", "Kommo-o"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Shadow Ball", "Disable", "Perish Song", "Protect"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Darkest Lariat", "Parting Shot", "Fake Out", "Protect"] },
    { ability: "Mold Breaker", item: "Shuca Berry", moves: ["Gigaton Hammer", "Encore", "Fake Out", "Protect"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Matcha Gotcha", "Shadow Ball", "Life Dew", "Rage Powder"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Perish Song", "Encore", "Protect"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clangorous Soul", "Aura Sphere", "Clanging Scales", "Protect"] }
  ] },
  { id: "ct-531", tournament: "Intimidators Champions Challenge #13 REG M-A", players: 30, placement: 8, player: "ITS TV TIME!!!! ", wins: 3, losses: 3, pokemonIds: [6, 478, 983, 902, 700, 445], pokemonNames: ["Charizard", "Froslass", "Kingambit", "Basculegion-M", "Sylveon", "Garchomp"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Protect", "Weather Ball"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Thunderbolt", "Protect", "Shadow Ball"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Beam", "Hyper Voice", "Quick Attack", "Protect"] },
    { ability: "Rough Skin", item: "Dragon Fang", moves: ["Earthquake", "Protect", "Rock Slide", "Scale Shot"] }
  ] },
  { id: "ct-532", tournament: "Intimidators Champions Challenge #13 REG M-A", players: 30, placement: 9, player: "NMR | Ueda", wins: 3, losses: 2, pokemonIds: [149, 547, 983, 445, 902, 6], pokemonNames: ["Dragonite", "Whimsicott", "Kingambit", "Garchomp", "Basculegion-M", "Charizard"], sets: [
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Thunderbolt", "Heat Wave", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Rock Slide", "Dragon Claw", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Aqua Jet", "Flip Turn", "Last Respects"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"], teraType: "Fire" }
  ] },
  { id: "ct-533", tournament: "Intimidators Champions Challenge #13 REG M-A", players: 30, placement: 10, player: "Johnny_Knoxville", wins: 3, losses: 2, pokemonIds: [784, 727, 1013, 823, 902, 670], pokemonNames: ["Kommo-o", "Incineroar", "Sinistcha", "Corviknight", "Basculegion-M", "Floette"], sets: [
    { ability: "Soundproof", item: "Leftovers", moves: ["Aura Sphere", "Clangorous Soul", "Dragon Pulse", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Fake Out", "Darkest Lariat", "Parting Shot", "Flare Blitz"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Life Dew"] },
    { ability: "Unnerve", item: "Sitrus Berry", moves: ["Brave Bird", "Tailwind", "Roost", "Iron Head"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Aqua Jet", "Flip Turn", "Wave Crash", "Last Respects"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Dazzling Gleam", "Moonblast", "Light of Ruin", "Protect"] }
  ] },
  { id: "ct-534", tournament: "Intimidators Champions Challenge #13 REG M-A", players: 30, placement: 11, player: "NMR | Wilson Gorski", wins: 3, losses: 2, pokemonIds: [952, 1018, 350, 970, 212, 663], pokemonNames: ["Scovillain", "Archaludon", "Milotic", "Glimmora", "Scizor", "Talonflame"], sets: [
    { ability: "Chlorophyll", item: "Scovillainite", moves: ["Overheat", "Giga Drain", "Leech Seed", "Rage Powder"] },
    { ability: "Sturdy", item: "White Herb", moves: ["Draco Meteor", "Aura Sphere", "Flash Cannon", "Protect"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Scald", "Life Dew", "Ice Beam", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Sludge Bomb", "Earth Power", "Power Gem", "Spiky Shield"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bug Bite", "Bullet Punch", "Protect", "Swords Dance"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Tailwind", "Protect", "Brave Bird", "Feather Dance"] }
  ] },
  { id: "ct-535", tournament: "Intimidators Champions Challenge #13 REG M-A", players: 30, placement: 12, player: "SrRoxasKun", wins: 3, losses: 2, pokemonIds: [655, 727, 700, 983, 925, 981], pokemonNames: ["Delphox", "Incineroar", "Sylveon", "Kingambit", "Maushold", "Farigiraf"], sets: [
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Protect", "Psychic Noise", "Calm Mind"] },
    { ability: "Intimidate", item: "Charcoal", moves: ["Fake Out", "Close Combat", "Throat Chop", "Flare Blitz"] },
    { ability: "Pixilate", item: "Leftovers", moves: ["Detect", "Calm Mind", "Hyper Voice", "Hyper Beam"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Iron Head", "Kowtow Cleave", "Protect"] },
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Follow Me", "Protect", "Sunny Day", "Super Fang"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Protect", "Psychic Noise", "Thunderbolt"] }
  ] },
  { id: "ct-536", tournament: "Intimidators Champions Challenge #13 REG M-A", players: 30, placement: 13, player: "Goalie3001", wins: 3, losses: 2, pokemonIds: [670, 445, 142, 10009, 681, 727], pokemonNames: ["Floette", "Garchomp", "Aerodactyl", "Wash Rotom", "Aegislash", "Incineroar"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Moonblast", "Dazzling Gleam", "Light of Ruin"] },
    { ability: "Rough Skin", item: "Haban Berry", moves: ["Protect", "Earthquake", "Rock Slide", "Dragon Claw"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Protect", "Rock Slide", "Dual Wingbeat", "Tailwind"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Will-O-Wisp", "Hydro Pump", "Thunderbolt", "Electroweb"] },
    { ability: "Stance Change", item: "Spell Tag", moves: ["King's Shield", "Poltergeist", "Sacred Sword", "Shadow Sneak"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Parting Shot", "Fake Out", "Flare Blitz", "Helping Hand"] }
  ] },
  { id: "ct-537", tournament: "Intimidators Champions Challenge #13 REG M-A", players: 30, placement: 14, player: "rRedl", wins: 2, losses: 3, pokemonIds: [130, 903, 727, 700, 1013, 1018], pokemonNames: ["Gyarados", "Sneasler", "Incineroar", "Sylveon", "Sinistcha", "Archaludon"], sets: [
    { ability: "Mold Breaker", item: "Gyaradosite", moves: ["Waterfall", "Crunch", "Dragon Dance", "Protect"] },
    { ability: "Pressure", item: "Focus Sash", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Intimidate", item: "Lum Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"], teraType: "Fire" },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Moonblast", "Quick Attack", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Sturdy", item: "Scope Lens", moves: ["Draco Meteor", "Flash Cannon", "Thunderbolt", "Protect"] }
  ] },
  { id: "ct-538", tournament: "Intimidators Champions Challenge #13 REG M-A", players: 30, placement: 15, player: "Otosaka16", wins: 2, losses: 3, pokemonIds: [6, 700, 681, 80, 445, 142], pokemonNames: ["Charizard", "Sylveon", "Aegislash", "Slowbro", "Garchomp", "Aerodactyl"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Detect", "Quick Attack", "Hyper Beam"] },
    { ability: "Stance Change", item: "Spell Tag", moves: ["Close Combat", "Iron Head", "King's Shield", "Shadow Sneak"] },
    { ability: "Regenerator", item: "Sitrus Berry", moves: ["Yawn", "Psychic", "Protect", "Helping Hand"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Rock Slide", "Outrage", "Stomping Tantrum"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Wide Guard", "Rock Slide", "Tailwind", "Protect"] }
  ] },
  { id: "ct-539", tournament: "Intimidators Champions Challenge #13 REG M-A", players: 30, placement: 16, player: "NMR | Turista", wins: 2, losses: 3, pokemonIds: [547, 670, 902, 727, 903, 227], pokemonNames: ["Whimsicott", "Floette", "Basculegion-M", "Incineroar", "Sneasler", "Skarmory"], sets: [
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Light of Ruin", "Moonblast", "Dazzling Gleam", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Aqua Jet", "Liquidation", "Last Respects", "Protect"] },
    { ability: "Intimidate", item: "Charcoal", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Fake Out", "Dire Claw", "Protect"] },
    { ability: "Sturdy", item: "Skarmorite", moves: ["Iron Head", "Brave Bird", "Rock Tomb", "Protect"] }
  ] },
  { id: "ct-540", tournament: "Intimidators Champions Challenge #13 REG M-A", players: 30, placement: 17, player: "JBE SouzaH", wins: 2, losses: 3, pokemonIds: [765, 700, 324, 9, 983, 903], pokemonNames: ["Oranguru", "Sylveon", "Torkoal", "Blastoise", "Kingambit", "Sneasler"], sets: [
    { ability: "Inner Focus", item: "Colbur Berry", moves: ["Instruct", "Psychic Noise", "Protect", "Trick Room"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Calm Mind", "Mystical Fire", "Protect"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Protect", "Weather Ball", "Solar Beam"] },
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Dark Pulse", "Aura Sphere", "Fake Out", "Water Spout"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Protect", "Dire Claw", "Close Combat", "Fake Out"] }
  ] },
  { id: "ct-541", tournament: "Intimidators Champions Challenge #13 REG M-A", players: 30, placement: 18, player: "Eduardo_Leite", wins: 2, losses: 3, pokemonIds: [310, 279, 1018, 212, 964, 1013], pokemonNames: ["Manectric", "Pelipper", "Archaludon", "Scizor", "Palafin", "Sinistcha"], sets: [
    { ability: "Lightning Rod", item: "Manectite", moves: ["Snarl", "Protect", "Thunderbolt", "Volt Switch"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Hurricane", "Weather Ball", "Protect", "Tailwind"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Snarl", "Flash Cannon", "Dragon Pulse"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Protect", "Dual Wingbeat", "Bug Bite"] },
    { ability: "Zero to Hero", item: "Mystic Water", moves: ["Protect", "Wave Crash", "Flip Turn", "Jet Punch"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Rage Powder", "Trick Room", "Matcha Gotcha", "Life Dew"] }
  ] },
  { id: "ct-542", tournament: "Intimidators Champions Challenge #13 REG M-A", players: 30, placement: 19, player: "AntZim", wins: 2, losses: 3, pokemonIds: [3, 970, 748, 445, 925, 655], pokemonNames: ["Venusaur", "Glimmora", "Toxapex", "Garchomp", "Maushold", "Delphox"], sets: [
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Protect", "Sludge Bomb", "Giga Drain", "Leech Seed"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Mortal Spin", "Spiky Shield", "Earth Power", "Power Gem"] },
    { ability: "Regenerator", item: "Sitrus Berry", moves: ["Recover", "Infestation", "Toxic", "Wide Guard"] },
    { ability: "Rough Skin", item: "White Herb", moves: ["Rock Slide", "Scale Shot", "Protect", "Earthquake"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Follow Me", "Protect", "Super Fang", "Baby-Doll Eyes"] },
    { ability: "Blaze", item: "Delphoxite", moves: ["Heat Wave", "Psychic", "Calm Mind", "Protect"] }
  ] },
  { id: "ct-543", tournament: "Intimidators Champions Challenge #13 REG M-A", players: 30, placement: 20, player: "Excraze", wins: 1, losses: 4, pokemonIds: [9, 666, 981, 324, 115, 902], pokemonNames: ["Blastoise", "Vivillon", "Farigiraf", "Torkoal", "Kangaskhan", "Basculegion-M"], sets: [
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Fake Out", "Water Spout", "Dark Pulse", "Shell Smash"] },
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Sleep Powder", "Hurricane", "Rain Dance", "Pollen Puff"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Thunderbolt", "Psychic", "Trick Room", "Helping Hand"] },
    { ability: "Drought", item: "Charcoal", moves: ["Protect", "Eruption", "Weather Ball", "Heat Wave"] },
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Fake Out", "Double-Edge", "Ice Punch", "Low Kick"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Protect", "Last Respects", "Liquidation", "Aqua Jet"] }
  ] },
  { id: "ct-544", tournament: "[REG M-A] LearningtoSam's Weekly", players: 37, placement: 1, player: "CptAuroOG", wins: 7, losses: 0, pokemonIds: [478, 142, 445, 983, 903, 902], pokemonNames: ["Froslass", "Aerodactyl", "Garchomp", "Kingambit", "Sneasler", "Basculegion-M"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Rock Slide", "Earthquake", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Swift Swim", item: "Focus Sash", moves: ["Waterfall", "Last Respects", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-545", tournament: "[REG M-A] LearningtoSam's Weekly", players: 37, placement: 2, player: "Cotcha", wins: 5, losses: 2, pokemonIds: [10009, 983, 445, 478, 142, 903], pokemonNames: ["Wash Rotom", "Kingambit", "Garchomp", "Froslass", "Aerodactyl", "Sneasler"], sets: [
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Thunderbolt", "Hydro Pump", "Will-O-Wisp", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Rough Skin", item: "Focus Sash", moves: ["Earthquake", "Dragon Claw", "Poison Jab", "Rock Tomb"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] }
  ] },
  { id: "ct-546", tournament: "[REG M-A] LearningtoSam's Weekly", players: 37, placement: 3, player: "AthenaStriveVGC", wins: 4, losses: 2, pokemonIds: [670, 652, 902, 1013, 279, 970], pokemonNames: ["Floette", "Chesnaught", "Basculegion-M", "Sinistcha", "Pelipper", "Glimmora"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Moonblast", "Dazzling Gleam", "Light of Ruin"] },
    { ability: "Bulletproof", item: "Chesnaughtite", moves: ["Spiky Shield", "Wood Hammer", "Body Press", "Iron Defense"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Hospitality", item: "Coba Berry", moves: ["Rage Powder", "Matcha Gotcha", "Life Dew", "Trick Room"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Hurricane", "Tailwind", "Wide Guard"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Spiky Shield", "Power Gem", "Sludge Bomb", "Earth Power"] }
  ] },
  { id: "ct-547", tournament: "[REG M-A] LearningtoSam's Weekly", players: 37, placement: 4, player: "CloudDino", wins: 4, losses: 2, pokemonIds: [18, 700, 727, 902, 3, 149], pokemonNames: ["Pidgeot", "Sylveon", "Incineroar", "Basculegion-M", "Venusaur", "Dragonite"], sets: [
    { ability: "Big Pecks", item: "Pidgeotite", moves: ["Heat Wave", "Hurricane", "Tailwind", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Quick Attack", "Yawn", "Detect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Throat Chop", "Fake Out", "Parting Shot"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Giga Drain", "Sludge Bomb", "Earth Power", "Protect"] },
    { ability: "Multiscale", item: "Dragon Fang", moves: ["Dragon Claw", "Low Kick", "Extreme Speed", "Protect"] }
  ] },
  { id: "ct-548", tournament: "[REG M-A] LearningtoSam's Weekly", players: 37, placement: 5, player: "AlexIannoneVGC", wins: 3, losses: 2, pokemonIds: [160, 983, 142, 903, 700, 10008], pokemonNames: ["Feraligatr", "Kingambit", "Aerodactyl", "Sneasler", "Sylveon", "Heat Rotom"], sets: [
    { ability: "Sheer Force", item: "Feraligite", moves: ["Liquidation", "Double-Edge", "Facade", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Protect", "Iron Head"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Rock Slide", "Tailwind", "Dual Wingbeat", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Quick Attack", "Detect", "Hyper Beam", "Hyper Voice"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Will-O-Wisp", "Electroweb", "Thunderbolt", "Overheat"] }
  ] },
  { id: "ct-549", tournament: "[REG M-A] LearningtoSam's Weekly", players: 37, placement: 6, player: "Stealth_Rare", wins: 3, losses: 2, pokemonIds: [279, 445, 1018, 149, 302, 9], pokemonNames: ["Pelipper", "Garchomp", "Archaludon", "Dragonite", "Sableye", "Blastoise"], sets: [
    { ability: "Drizzle", item: "Wacan Berry", moves: ["Tailwind", "Hydro Pump", "Hurricane", "Protect"] },
    { ability: "Rough Skin", item: "Focus Sash", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Stalwart", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Protect", "Flash Cannon"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Protect", "Dragon Pulse", "Thunder", "Hurricane"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Disable", "Rain Dance", "Light Screen", "Encore"] },
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Fake Out", "Aura Sphere", "Water Pulse", "Dark Pulse"] }
  ] },
  { id: "ct-550", tournament: "[REG M-A] LearningtoSam's Weekly", players: 37, placement: 7, player: "BigBear", wins: 3, losses: 2, pokemonIds: [279, 282, 902, 1018, 925, 970], pokemonNames: ["Pelipper", "Gardevoir", "Basculegion-M", "Archaludon", "Maushold", "Glimmora"], sets: [
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Hurricane", "Wide Guard", "Tailwind"] },
    { ability: "Trace", item: "Gardevoirite", moves: ["Hyper Voice", "Trick Room", "Protect", "Psyshock"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Flip Turn", "Wave Crash", "Last Respects", "Aqua Jet"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] },
    { ability: "Friend Guard", item: "Chople Berry", moves: ["Protect", "Follow Me", "Super Fang", "Rain Dance"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Spiky Shield", "Power Gem", "Sludge Bomb", "Earth Power"] }
  ] },
  { id: "ct-551", tournament: "[REG M-A] LearningtoSam's Weekly", players: 37, placement: 8, player: "Lusooo", wins: 3, losses: 2, pokemonIds: [115, 902, 981, 324, 700, 983], pokemonNames: ["Kangaskhan", "Basculegion-M", "Farigiraf", "Torkoal", "Sylveon", "Kingambit"], sets: [
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Fake Out", "Double-Edge", "Bite", "Low Kick"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Aqua Jet", "Flip Turn", "Wave Crash"] },
    { ability: "Armor Tail", item: "Focus Sash", moves: ["Psychic", "Trick Room", "Helping Hand", "Protect"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Quick Attack", "Hyper Beam", "Detect"] },
    { ability: "Supreme Overlord", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Iron Head", "Protect"] }
  ] },
  { id: "ct-552", tournament: "[REG M-A] LearningtoSam's Weekly", players: 37, placement: 9, player: "Juggler94", wins: 2, losses: 2, pokemonIds: [445, 149, 6, 983, 547, 700], pokemonNames: ["Garchomp", "Dragonite", "Charizard", "Kingambit", "Whimsicott", "Sylveon"], sets: [
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Poison Jab"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Heat Wave", "Thunderbolt", "Protect"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Sunny Day", "Encore", "Tailwind"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Quick Attack", "Moonblast", "Detect"] }
  ] },
  { id: "ct-553", tournament: "[REG M-A] LearningtoSam's Weekly", players: 37, placement: 10, player: "AMFI", wins: 2, losses: 2, pokemonIds: [700, 445, 6, 547, 149, 902], pokemonNames: ["Sylveon", "Garchomp", "Charizard", "Whimsicott", "Dragonite", "Basculegion-M"], sets: [
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Yawn", "Detect", "Quick Attack"], teraType: "Fairy" },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Earthquake", "Protect", "Rock Slide", "Poison Jab"], teraType: "Dragon" },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"], teraType: "Fire" },
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"], teraType: "Grass" },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Heat Wave", "Thunderbolt", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-554", tournament: "[REG M-A] LearningtoSam's Weekly", players: 37, placement: 11, player: "Stallcelth", wins: 2, losses: 2, pokemonIds: [663, 10009, 970, 10103, 983, 445], pokemonNames: ["Talonflame", "Wash Rotom", "Glimmora", "Alolan Ninetales", "Kingambit", "Garchomp"], sets: [
    { ability: "Gale Wings", item: "No Item", moves: ["Acrobatics", "Tailwind", "Flare Blitz", "Protect"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Volt Switch", "Hydro Pump", "Will-O-Wisp", "Protect"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Snow Warning", item: "Never-Melt Ice", moves: ["Blizzard", "Aurora Veil", "Encore", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Earthquake", "Dragon Claw", "Swords Dance", "Protect"] }
  ] },
  { id: "ct-555", tournament: "[REG M-A] LearningtoSam's Weekly", players: 37, placement: 12, player: "KCVGC", wins: 2, losses: 2, pokemonIds: [784, 212, 248, 727, 1013, 902], pokemonNames: ["Kommo-o", "Scizor", "Tyranitar", "Incineroar", "Sinistcha", "Basculegion-M"], sets: [
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Clangorous Soul", "Aura Sphere", "Protect"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "Swords Dance", "Protect"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Knock Off", "Low Kick", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Trick Room", "Rage Powder", "Life Dew"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Flip Turn", "Aqua Jet", "Last Respects"] }
  ] },
  { id: "ct-556", tournament: "[REG M-A] LearningtoSam's Weekly", players: 37, placement: 13, player: "Chill3d", wins: 2, losses: 2, pokemonIds: [6, 670, 727, 350, 1013, 903], pokemonNames: ["Charizard", "Floette", "Incineroar", "Milotic", "Sinistcha", "Sneasler"], sets: [
    { ability: "blaze", item: "Charizardite X", moves: ["Flare Blitz", "Dragon Claw", "Dragon Dance", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Muddy Water", "Hypnosis", "Coil", "Recover"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Protect"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Fake Out", "Close Combat", "Dire Claw", "Coaching"] }
  ] },
  { id: "ct-557", tournament: "[REG M-A] LearningtoSam's Weekly", players: 37, placement: 14, player: "ZachSmash", wins: 2, losses: 2, pokemonIds: [9, 663, 902, 1018, 282, 983], pokemonNames: ["Blastoise", "Talonflame", "Basculegion-M", "Archaludon", "Gardevoir", "Kingambit"], sets: [
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Aura Sphere", "Dark Pulse", "Protect", "Water Spout"] },
    { ability: "Gale Wings", item: "Focus Sash", moves: ["Brave Bird", "U-turn", "Tailwind", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Sturdy", item: "White Herb", moves: ["Draco Meteor", "Flash Cannon", "Aura Sphere", "Protect"] },
    { ability: "Trace", item: "Gardevoirite", moves: ["Hyper Voice", "Psychic Noise", "Trick Room", "Protect"] },
    { ability: "Supreme Overlord", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] }
  ] },
  { id: "ct-558", tournament: "[REG M-A] LearningtoSam's Weekly", players: 37, placement: 15, player: "JRPGandChill", wins: 2, losses: 2, pokemonIds: [6, 902, 970, 547, 445, 983], pokemonNames: ["Charizard", "Basculegion-M", "Glimmora", "Whimsicott", "Garchomp", "Kingambit"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Taunt", "Tailwind", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Scale Shot", "Stomping Tantrum", "Rock Slide", "Poison Jab"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] }
  ] },
  { id: "ct-559", tournament: "[REG M-A] LearningtoSam's Weekly", players: 37, placement: 16, player: "BrazBR", wins: 2, losses: 2, pokemonIds: [663, 983, 10009, 10103, 970, 445], pokemonNames: ["Talonflame", "Kingambit", "Wash Rotom", "Alolan Ninetales", "Glimmora", "Garchomp"], sets: [
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Brave Bird", "Flare Blitz", "Tailwind", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] },
    { ability: "Levitate", item: "Magnet", moves: ["Hydro Pump", "Thunderbolt", "Will-O-Wisp", "Protect"] },
    { ability: "Snow Warning", item: "Never-Melt Ice", moves: ["Blizzard", "Freeze-Dry", "Encore", "Protect"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Spiky Shield"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"] }
  ] },
  { id: "ct-560", tournament: "[REG M-A] LearningtoSam's Weekly", players: 37, placement: 17, player: "StringZZZ", wins: 2, losses: 2, pokemonIds: [282, 887, 350, 663, 115, 1018], pokemonNames: ["Gardevoir", "Dragapult", "Milotic", "Talonflame", "Kangaskhan", "Archaludon"], sets: [
    { ability: "Trace", item: "Gardevoirite", moves: ["Hyper Voice", "Psychic", "Round", "Protect"] },
    { ability: "Cursed Body", item: "Leftovers", moves: ["Dragon Darts", "Round", "Light Screen", "Reflect"] },
    { ability: "Competitive", item: "Sitrus Berry", moves: ["Scald", "Icy Wind", "Life Dew", "Dragon Cheer"] },
    { ability: "Gale Wings", item: "no item", moves: ["Acrobatics", "Upper Hand", "Tailwind", "Protect"] },
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Fake Out", "Crunch", "Body Slam", "Protect"] },
    { ability: "Stamina", item: "Scope Lens", moves: ["Draco Meteor", "Electro Shot", "Flash Cannon", "Protect"] }
  ] },
  { id: "ct-561", tournament: "[REG M-A] LearningtoSam's Weekly", players: 37, placement: 18, player: "OrangePunk", wins: 2, losses: 2, pokemonIds: [6, 983, 547, 10009, 445, 902], pokemonNames: ["Charizard", "Kingambit", "Whimsicott", "Wash Rotom", "Garchomp", "Basculegion-M"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Air Slash", "Solar Beam"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Protect", "Sucker Punch", "Iron Head", "Kowtow Cleave"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Protect", "Encore", "Tailwind"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Thunderbolt", "Hydro Pump", "Will-O-Wisp", "Protect"] },
    { ability: "Rough Skin", item: "White Herb", moves: ["Scale Shot", "Protect", "Stomping Tantrum", "Rock Slide"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Flip Turn", "Aqua Jet", "Wave Crash", "Last Respects"] }
  ] },
  { id: "ct-562", tournament: "[REG M-A] LearningtoSam's Weekly", players: 37, placement: 19, player: "jositomoso", wins: 1, losses: 3, pokemonIds: [903, 663, 983, 445, 478, 10009], pokemonNames: ["Sneasler", "Talonflame", "Kingambit", "Garchomp", "Froslass", "Wash Rotom"], sets: [
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Close Combat", "Dire Claw", "Protect"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Tailwind", "Dual Wingbeat", "Flare Blitz", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Protect", "Kowtow Cleave", "Sucker Punch", "Iron Head"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Protect", "Rock Slide", "Earthquake", "Dragon Claw"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Aurora Veil", "Shadow Ball", "Protect"] },
    { ability: "Levitate", item: "Leftovers", moves: ["Protect", "Will-O-Wisp", "Hydro Pump", "Thunderbolt"] }
  ] },
  { id: "ct-563", tournament: "[REG M-A] LearningtoSam's Weekly", players: 37, placement: 20, player: "Paristrats", wins: 1, losses: 3, pokemonIds: [983, 547, 445, 970, 902, 6], pokemonNames: ["Kingambit", "Whimsicott", "Garchomp", "Glimmora", "Basculegion-M", "Charizard"], sets: [
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Prankster", item: "Kebia Berry", moves: ["Moonblast", "Tailwind", "Protect", "Encore"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Slide", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Sludge Bomb", "Power Gem", "Earth Power", "Spiky Shield"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Flip Turn"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Weather Ball", "Heat Wave", "Solar Beam", "Protect"] }
  ] },
  { id: "ct-564", tournament: "[REG M-A] LearningtoSam's Weekly", players: 37, placement: 21, player: "ironingots", wins: 1, losses: 3, pokemonIds: [663, 670, 902, 445, 983, 1013], pokemonNames: ["Talonflame", "Floette", "Basculegion-M", "Garchomp", "Kingambit", "Sinistcha"], sets: [
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Dual Wingbeat", "Flare Blitz", "Tailwind", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Light of Ruin", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Trick Room", "Protect"] }
  ] },
  { id: "ct-565", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 1, player: "Draxolotl", wins: 8, losses: 1, pokemonIds: [6, 727, 350, 1013, 670, 903], pokemonNames: ["Charizard", "Incineroar", "Milotic", "Sinistcha", "Floette", "Sneasler"], sets: [
    { ability: "Blaze", item: "Charizardite X", moves: ["Protect", "Flare Blitz", "Dragon Claw", "Dragon Dance"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Muddy Water", "Coil", "Hypnosis", "Recover"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Protect", "Matcha Gotcha", "Life Dew", "Rage Powder"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Moonblast", "Dazzling Gleam", "Calm Mind"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Fake Out", "Close Combat", "Dire Claw", "Coaching"] }
  ] },
  { id: "ct-566", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 2, player: "BrainDamageVGC", wins: 7, losses: 2, pokemonIds: [94, 784, 983, 727, 1013, 10103], pokemonNames: ["Gengar", "Kommo-o", "Kingambit", "Incineroar", "Sinistcha", "Alolan Ninetales"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Sludge Bomb", "Shadow Ball", "Perish Song", "Protect"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Aura Sphere", "Clangorous Soul", "Protect"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Iron Head", "Sucker Punch", "Protect"] },
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Flare Blitz", "Fake Out", "Parting Shot", "Protect"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Snow Warning", item: "Focus Sash", moves: ["Blizzard", "Encore", "Disable", "Protect"] }
  ] },
  { id: "ct-567", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 3, player: "hyperellipsoid", wins: 7, losses: 1, pokemonIds: [887, 903, 670, 115, 727, 1013], pokemonNames: ["Dragapult", "Sneasler", "Floette", "Kangaskhan", "Incineroar", "Sinistcha"], sets: [
    { ability: "Clear Body", item: "Focus Sash", moves: ["Protect", "Dragon Darts", "Phantom Force", "Will-O-Wisp"] },
    { ability: "Poison Touch", item: "Sitrus Berry", moves: ["Protect", "Close Combat", "Dire Claw", "Fake Out"] },
    { ability: "Fairy Aura", item: "Floettite", moves: ["Protect", "Moonblast", "Dazzling Gleam", "Calm Mind"] },
    { ability: "Scrappy", item: "Kangaskhanite", moves: ["Fake Out", "Double-Edge", "Sucker Punch", "Protect"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Rage Powder", "Matcha Gotcha", "Trick Room", "Life Dew"] }
  ] },
  { id: "ct-568", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 4, player: "Zio_Gelato", wins: 6, losses: 2, pokemonIds: [6, 727, 903, 670, 1013, 983], pokemonNames: ["Charizard", "Incineroar", "Sneasler", "Floette", "Sinistcha", "Kingambit"], sets: [
    { ability: "Blaze", item: "Charizardite X", moves: ["Flare Blitz", "Dragon Claw", "Dragon Dance", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Fake Out", "Throat Chop", "Flare Blitz", "Parting Shot"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Draining Kiss", "Calm Mind", "Dazzling Gleam", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Protect"] },
    { ability: "Defiant", item: "Focus Sash", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Defense", "Low Kick"] }
  ] },
  { id: "ct-569", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 5, player: "Notskillz", wins: 5, losses: 2, pokemonIds: [282, 983, 248, 823, 530, 10008], pokemonNames: ["Gardevoir", "Kingambit", "Tyranitar", "Corviknight", "Excadrill", "Heat Rotom"], sets: [
    { ability: "Trace", item: "Gardevoirite", moves: ["Hyper Voice", "Protect", "Trick Room", "Psyshock"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Sucker Punch", "Iron Head", "Kowtow Cleave", "Protect"] },
    { ability: "Sand Stream", item: "Tyranitarite", moves: ["Rock Slide", "Superpower", "Protect", "Knock Off"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Tailwind", "Roost", "Iron Defense", "Body Press"] },
    { ability: "Sand Rush", item: "Focus Sash", moves: ["High Horsepower", "Iron Head", "Rock Slide", "Protect"] },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Overheat", "Thunderbolt", "Electroweb", "Volt Switch"] }
  ] },
  { id: "ct-570", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 6, player: "tunisandwich", wins: 4, losses: 3, pokemonIds: [1013, 302, 1018, 279, 902, 149], pokemonNames: ["Sinistcha", "Sableye", "Archaludon", "Pelipper", "Basculegion-M", "Dragonite"], sets: [
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Light Screen", "Reflect", "Rain Dance", "Foul Play"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Flash Cannon", "Electro Shot", "Aura Sphere", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Hurricane", "Weather Ball", "Tailwind", "Wide Guard"] },
    { ability: "Swift Swim", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Ice Fang", "Protect"] },
    { ability: "Inner Focus", item: "Dragoninite", moves: ["Hurricane", "Draco Meteor", "Focus Blast", "Protect"] }
  ] },
  { id: "ct-571", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 7, player: "Abe", wins: 4, losses: 3, pokemonIds: [700, 142, 445, 902, 6, 981], pokemonNames: ["Sylveon", "Aerodactyl", "Garchomp", "Basculegion-M", "Charizard", "Farigiraf"], sets: [
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Hyper Beam", "Quick Attack", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Dual Wingbeat", "Ice Fang", "Tailwind", "Rock Slide"] },
    { ability: "Rough Skin", item: "Soft Sand", moves: ["Earthquake", "Protect", "Rock Slide", "Dragon Claw"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Aqua Jet", "Liquidation", "Protect", "Last Respects"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Protect", "Weather Ball", "Solar Beam"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Trick Room", "Hyper Voice", "Helping Hand", "Psychic"] }
  ] },
  { id: "ct-572", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 8, player: "doggifloof", wins: 4, losses: 3, pokemonIds: [59, 478, 823, 445, 149, 547], pokemonNames: ["Arcanine", "Froslass", "Corviknight", "Garchomp", "Dragonite", "Whimsicott"], sets: [
    { ability: "Intimidate", item: "Sitrus Berry", moves: ["Protect", "Extreme Speed", "Flare Blitz", "Will-O-Wisp"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Protect", "Blizzard", "Shadow Ball", "Aurora Veil"] },
    { ability: "Mirror Armor", item: "Leftovers", moves: ["Body Press", "Iron Defense", "Roost", "Iron Head"] },
    { ability: "Rough Skin", item: "Mental Herb", moves: ["Protect", "Earthquake", "Dragon Claw", "Rock Slide"] },
    { ability: "Multiscale", item: "Dragon Fang", moves: ["Dragon Claw", "Protect", "Low Kick", "Extreme Speed"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Protect", "Tailwind", "Encore"] }
  ] },
  { id: "ct-573", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 9, player: "Duxlemon", wins: 3, losses: 1, pokemonIds: [547, 970, 6, 445, 902, 983], pokemonNames: ["Whimsicott", "Glimmora", "Charizard", "Garchomp", "Basculegion-M", "Kingambit"], sets: [
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Earth Power", "Sludge Bomb", "Spiky Shield"] },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] }
  ] },
  { id: "ct-574", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 10, player: "jonen", wins: 3, losses: 3, pokemonIds: [94, 143, 701, 727, 1013, 186], pokemonNames: ["Gengar", "Snorlax", "Hawlucha", "Incineroar", "Sinistcha", "Politoed"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Protect", "Perish Song", "Disable", "Shadow Ball"] },
    { ability: "Thick Fat", item: "Leftovers", moves: ["Protect", "Stockpile", "Smack Down", "Fissure"] },
    { ability: "Limber", item: "Hawluchanite", moves: ["Detect", "Entrainment", "Brave Bird", "Close Combat"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Fake Out", "Parting Shot", "Throat Chop", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Protect", "Trick Room", "Rage Powder", "Matcha Gotcha"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Protect", "Perish Song", "Weather Ball", "Encore"] }
  ] },
  { id: "ct-575", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 11, player: "Excraze", wins: 3, losses: 3, pokemonIds: [670, 727, 925, 1013, 9, 903], pokemonNames: ["Floette", "Incineroar", "Maushold", "Sinistcha", "Blastoise", "Sneasler"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Dazzling Gleam", "Moonblast", "Calm Mind"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Fake Out", "Parting Shot", "Flare Blitz", "Helping Hand"] },
    { ability: "Friend Guard", item: "Focus Sash", moves: ["Protect", "Follow Me", "Rain Dance", "Super Fang"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Trick Room"] },
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Protect", "Water Spout", "Dark Pulse", "Shell Smash"] },
    { ability: "Poison Touch", item: "White Herb", moves: ["Fake Out", "Protect", "Dire Claw", "Close Combat"] }
  ] },
  { id: "ct-576", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 12, player: "GiovanniRR", wins: 3, losses: 3, pokemonIds: [6, 547, 983, 902, 445, 970], pokemonNames: ["Charizard", "Whimsicott", "Kingambit", "Basculegion-M", "Garchomp", "Glimmora"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] }
  ] },
  { id: "ct-577", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 13, player: "Ivothebbrothers", wins: 3, losses: 3, pokemonIds: [212, 10009, 10103, 784, 637, 142], pokemonNames: ["Scizor", "Wash Rotom", "Alolan Ninetales", "Kommo-o", "Volcarona", "Aerodactyl"], sets: [
    { ability: "Technician", item: "Scizorite", moves: ["Bug Bite", "Bullet Punch", "Swords Dance", "Protect"], teraType: "Bug" },
    { ability: "Levitate", item: "Choice Scarf", moves: ["Hydro Pump", "Volt Switch", "Thunderbolt", "Electroweb"] },
    { ability: "Snow Warning", item: "Focus Sash", moves: ["Protect", "Moonblast", "Freeze-Dry", "Blizzard"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Aura Sphere", "Clanging Scales", "Clangorous Soul", "Protect"] },
    { ability: "Flame Body", item: "Sitrus Berry", moves: ["Heat Wave", "Quiver Dance", "Rage Powder", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Dual Wingbeat", "Rock Slide", "Tailwind", "Wide Guard"] }
  ] },
  { id: "ct-578", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 14, player: "Ken084", wins: 3, losses: 2, pokemonIds: [94, 727, 1013, 186, 9, 981], pokemonNames: ["Gengar", "Incineroar", "Sinistcha", "Politoed", "Blastoise", "Farigiraf"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Shadow Ball", "Disable", "Perish Song", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Fake Out", "Flare Blitz", "Parting Shot", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Perish Song", "Encore", "Protect"] },
    { ability: "Rain Dish", item: "Blastoisinite", moves: ["Water Spout", "Dragon Pulse", "Dark Pulse", "Protect"] },
    { ability: "Armor Tail", item: "Colbur Berry", moves: ["Trick Room", "Twin Beam", "Helping Hand", "Protect"] }
  ] },
  { id: "ct-579", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 15, player: "Simo23", wins: 3, losses: 3, pokemonIds: [6, 670, 142, 902, 983, 1013], pokemonNames: ["Charizard", "Floette", "Aerodactyl", "Basculegion-M", "Kingambit", "Sinistcha"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Solar Beam", "Protect", "Heat Wave", "Air Slash"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Calm Mind", "Protect", "Dazzling Gleam", "Moonblast"] },
    { ability: "Unnerve", item: "Focus Sash", moves: ["Wide Guard", "Rock Tomb", "Sunny Day", "Tailwind"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Last Respects", "Aqua Jet", "Flip Turn", "Wave Crash"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Low Kick", "Iron Head", "Kowtow Cleave"] },
    { ability: "Hospitality", item: "Occa Berry", moves: ["Matcha Gotcha", "Protect", "Trick Room", "Rage Powder"] }
  ] },
  { id: "ct-580", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 16, player: "Cl2m", wins: 2, losses: 3, pokemonIds: [448, 10103, 964, 983, 663, 970], pokemonNames: ["Lucario", "Alolan Ninetales", "Palafin", "Kingambit", "Talonflame", "Glimmora"], sets: [
    { ability: "Inner Focus", item: "Lucarionite", moves: ["Close Combat", "Bullet Punch", "Swords Dance", "Protect"] },
    { ability: "Snow Warning", item: "Never-Melt Ice", moves: ["Blizzard", "Moonblast", "Freeze-Dry", "Aurora Veil"] },
    { ability: "Zero to Hero", item: "Mystic Water", moves: ["Wave Crash", "Protect", "Jet Punch", "Flip Turn"] },
    { ability: "Defiant", item: "Black Glasses", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Gale Wings", item: "no item", moves: ["Acrobatics", "Tailwind", "Flare Blitz", "Protect"] },
    { ability: "Toxic Debris", item: "Focus Sash", moves: ["Sludge Bomb", "Earth Power", "Power Gem", "Spiky Shield"] }
  ] },
  { id: "ct-581", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 17, player: "Morga00", wins: 2, losses: 3, pokemonIds: [6, 142, 700, 902, 445, 903], pokemonNames: ["Charizard", "Aerodactyl", "Sylveon", "Basculegion-M", "Garchomp", "Sneasler"], sets: [
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Dual Wingbeat", "Rock Blast", "Tailwind", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Beam", "Hyper Voice", "Quick Attack", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Rock Tomb", "Poison Jab", "Earthquake", "Dragon Claw"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Gunk Shot", "Close Combat", "Fake Out", "Protect"] }
  ] },
  { id: "ct-582", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 18, player: "emb3r", wins: 2, losses: 2, pokemonIds: [478, 10008, 445, 903, 983, 142], pokemonNames: ["Froslass", "Heat Rotom", "Garchomp", "Sneasler", "Kingambit", "Aerodactyl"], sets: [
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Will-O-Wisp", "Overheat", "Protect", "Volt Switch"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Stomping Tantrum", "Rock Slide", "Dragon Claw"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] }
  ] },
  { id: "ct-583", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 19, player: "qwertzu7002", wins: 2, losses: 3, pokemonIds: [10009, 983, 445, 478, 142, 903], pokemonNames: ["Wash Rotom", "Kingambit", "Garchomp", "Froslass", "Aerodactyl", "Sneasler"], sets: [
    { ability: "Levitate", item: "Sitrus Berry", moves: ["Thunderbolt", "Hydro Pump", "Will-O-Wisp", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Rough Skin", item: "Focus Sash", moves: ["Earthquake", "Dragon Claw", "Poison Jab", "Rock Slide"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Blizzard", "Shadow Ball", "Aurora Veil", "Protect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Protect"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] }
  ] },
  { id: "ct-584", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 20, player: "Wheretfismariojudah", wins: 2, losses: 3, pokemonIds: [903, 350, 670, 6, 1013, 983], pokemonNames: ["Sneasler", "Milotic", "Floette", "Charizard", "Sinistcha", "Kingambit"], sets: [
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Gunk Shot", "Coaching", "Fake Out"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Coil", "Muddy Water", "Recover", "Hypnosis"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Calm Mind", "Protect", "Moonblast", "Dazzling Gleam"] },
    { ability: "Tough Claws", item: "Charizardite X", moves: ["Flare Blitz", "Dragon Claw", "Dragon Dance", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Life Dew", "Rage Powder", "Trick Room"] },
    { ability: "Defiant", item: "Shuca Berry", moves: ["Protect", "Kowtow Cleave", "Iron Head", "Sucker Punch"] }
  ] },
  { id: "ct-585", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 21, player: "cornwallace15", wins: 2, losses: 3, pokemonIds: [65, 983, 887, 547, 678, 324], pokemonNames: ["Alakazam", "Kingambit", "Dragapult", "Whimsicott", "Meowstic-M", "Torkoal"], sets: [
    { ability: "Magic Guard", item: "Alakazite", moves: ["Expanding Force", "Shadow Ball", "Focus Blast", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Clear Body", item: "Focus Sash", moves: ["Dragon Darts", "Phantom Force", "Sucker Punch", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Prankster", item: "Mental Herb", moves: ["Psychic", "Psychic Terrain", "Gravity", "Protect"] },
    { ability: "Drought", item: "Passho Berry", moves: ["Heat Wave", "Earth Power", "Yawn", "Protect"] }
  ] },
  { id: "ct-586", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 22, player: "Gnam", wins: 2, losses: 1, pokemonIds: [302, 1018, 902, 983, 279, 3], pokemonNames: ["Sableye", "Archaludon", "Basculegion-M", "Kingambit", "Pelipper", "Venusaur"], sets: [
    { ability: "Prankster", item: "Roseli Berry", moves: ["Encore", "Light Screen", "Reflect", "Rain Dance"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Protect", "Electro Shot", "Flash Cannon", "Draco Meteor"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Aqua Jet", "Wave Crash", "Last Respects", "Flip Turn"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Weather Ball", "Hurricane", "Protect", "Tailwind"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Giga Drain", "Sludge Bomb", "Earth Power", "Protect"] }
  ] },
  { id: "ct-587", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 23, player: "blackkobra", wins: 1, losses: 1, pokemonIds: [6, 547, 983, 902, 445, 970], pokemonNames: ["Charizard", "Whimsicott", "Kingambit", "Basculegion-M", "Garchomp", "Glimmora"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Low Kick", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Earthquake", "Rock Slide", "Protect"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] }
  ] },
  { id: "ct-588", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 24, player: "raysylveons", wins: 1, losses: 2, pokemonIds: [670, 681, 727, 6, 445, 1013], pokemonNames: ["Floette", "Aegislash", "Incineroar", "Charizard", "Garchomp", "Sinistcha"], sets: [
    { ability: "Flower Veil", item: "Floettite", moves: ["Protect", "Calm Mind", "Moonblast", "Dazzling Gleam"] },
    { ability: "Stance Change", item: "Focus Sash", moves: ["Poltergeist", "Iron Head", "Shadow Ball", "King's Shield"] },
    { ability: "Blaze", item: "Sitrus Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Heat Crash", "Weather Ball", "Solar Beam"] },
    { ability: "Rough Skin", item: "Choice Scarf", moves: ["Earthquake", "Stomping Tantrum", "Rock Tomb", "Dragon Claw"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Protect", "Matcha Gotcha", "Rage Powder", "Trick Room"] }
  ] },
  { id: "ct-589", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 25, player: "Candytrouble", wins: 1, losses: 2, pokemonIds: [6, 445, 547, 902, 903, 970], pokemonNames: ["Charizard", "Garchomp", "Whimsicott", "Basculegion-M", "Sneasler", "Glimmora"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Rock Slide", "Dragon Claw", "Earthquake", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Encore", "Moonblast", "Protect", "Tailwind"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Flip Turn", "Wave Crash", "Last Respects", "Aqua Jet"] },
    { ability: "Unburden", item: "White Herb", moves: ["Dire Claw", "Close Combat", "Fake Out", "Protect"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Earth Power", "Power Gem", "Sludge Bomb", "Spiky Shield"] }
  ] },
  { id: "ct-590", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 26, player: "srvoltmike", wins: 1, losses: 2, pokemonIds: [149, 547, 6, 445, 983, 902], pokemonNames: ["Dragonite", "Whimsicott", "Charizard", "Garchomp", "Kingambit", "Basculegion-M"], sets: [
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Thunderbolt", "Heat Wave", "Protect"] },
    { ability: "Prankster", item: "Fairy Feather", moves: ["Protect", "Moonblast", "Encore", "Tailwind"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Heat Wave", "Weather Ball", "Solar Beam"] },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Protect", "Earthquake", "Rock Slide", "Poison Jab"] },
    { ability: "Defiant", item: "Sitrus Berry", moves: ["Iron Head", "Kowtow Cleave", "Sucker Punch", "Protect"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Protect", "Liquidation", "Aqua Jet", "Last Respects"] }
  ] },
  { id: "ct-591", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 27, player: "Maggrosbeat", wins: 1, losses: 4, pokemonIds: [212, 302, 149, 968, 902, 903], pokemonNames: ["Scizor", "Sableye", "Dragonite", "Orthworm", "Basculegion-M", "Sneasler"], sets: [
    { ability: "Technician", item: "Scizorite", moves: ["Bullet Punch", "Bug Bite", "Swords Dance", "Protect"] },
    { ability: "Prankster", item: "Roseli Berry", moves: ["Foul Play", "Will-O-Wisp", "Disable", "Rain Dance"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Protect", "Hurricane", "Draco Meteor", "Thunder"] },
    { ability: "Earth Eater", item: "Sitrus Berry", moves: ["Body Press", "Heavy Slam", "Iron Defense", "Shed Tail"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Aqua Jet", "Last Respects", "Wave Crash", "Flip Turn"] },
    { ability: "Unburden", item: "Focus Sash", moves: ["Close Combat", "Dire Claw", "Fake Out", "Protect"] }
  ] },
  { id: "ct-592", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 28, player: "Sebas13aguinaga", wins: 1, losses: 4, pokemonIds: [94, 727, 1013, 186, 959, 784], pokemonNames: ["Gengar", "Incineroar", "Sinistcha", "Politoed", "Tinkaton", "Kommo-o"], sets: [
    { ability: "Cursed Body", item: "Gengarite", moves: ["Shadow Ball", "Disable", "Perish Song", "Protect"] },
    { ability: "Intimidate", item: "Passho Berry", moves: ["Fake Out", "Throat Chop", "Parting Shot", "Protect"] },
    { ability: "Hospitality", item: "Kasib Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Protect"] },
    { ability: "Drizzle", item: "Sitrus Berry", moves: ["Weather Ball", "Encore", "Perish Song", "Protect"] },
    { ability: "Mold Breaker", item: "Shuca Berry", moves: ["Fake Out", "Gigaton Hammer", "Encore", "Protect"] },
    { ability: "Soundproof", item: "Leftovers", moves: ["Clanging Scales", "Clangorous Soul", "Aura Sphere", "Protect"] }
  ] },
  { id: "ct-593", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 29, player: "SpicyCigar", wins: 1, losses: 4, pokemonIds: [663, 10009, 10103, 970, 983, 445], pokemonNames: ["Talonflame", "Wash Rotom", "Alolan Ninetales", "Glimmora", "Kingambit", "Garchomp"], sets: [
    { ability: "Flame Body", item: "nothing", moves: ["Acrobatics", "Flare Blitz", "Tailwind", "Protect"] },
    { ability: "Levitate", item: "Magnet", moves: ["Thunderbolt", "Hydro Pump", "Will-O-Wisp", "Protect"] },
    { ability: "Snow Warning", item: "Never-Melt Ice", moves: ["Blizzard", "Freeze-Dry", "Encore", "Protect"] },
    { ability: "Toxic Debris", item: "Glimmoranite", moves: ["Power Gem", "Sludge Bomb", "Earth Power", "Spiky Shield"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Low Kick", "Protect"] },
    { ability: "Sand Veil", item: "Lum Berry", moves: ["Dragon Claw", "Earthquake", "Swords Dance", "Protect"] }
  ] },
  { id: "ct-594", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 30, player: "Iferion", wins: 0, losses: 2, pokemonIds: [302, 1018, 902, 212, 149, 903], pokemonNames: ["Sableye", "Archaludon", "Basculegion-M", "Scizor", "Dragonite", "Sneasler"], sets: [
    { ability: "Prankster", item: "Roseli Berry", moves: ["Will-O-Wisp", "Taunt", "Rain Dance", "Light Screen"] },
    { ability: "Stamina", item: "Leftovers", moves: ["Electro Shot", "Dragon Pulse", "Flash Cannon", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Wave Crash", "Flip Turn", "Aqua Jet", "Last Respects"] },
    { ability: "Technician", item: "Scizorite", moves: ["Bug Bite", "Bullet Punch", "Swords Dance", "Protect"] },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Tailwind", "Thunderbolt", "Flamethrower", "Draco Meteor"] },
    { ability: "Unburden", item: "White Herb", moves: ["Close Combat", "Dire Claw", "Fake Out", "Rock Slide"] }
  ] },
  { id: "ct-595", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 31, player: "emanuele12340", wins: 0, losses: 2, pokemonIds: [902, 445, 983, 700, 142, 6], pokemonNames: ["Basculegion-M", "Garchomp", "Kingambit", "Sylveon", "Aerodactyl", "Charizard"], sets: [
    { ability: "Adaptability", item: "Focus Sash", moves: ["Protect", "Last Respects", "Aqua Jet", "Liquidation"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Rock Tomb", "Earthquake", "Dragon Claw", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Sucker Punch", "Kowtow Cleave", "Low Kick", "Iron Head"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Detect", "Hyper Beam", "Hyper Voice", "Quick Attack"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Tailwind", "Dual Wingbeat", "Rock Slide", "Wide Guard"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Protect", "Weather Ball", "Heat Wave", "Solar Beam"] }
  ] },
  { id: "ct-596", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 32, player: "AMFI", wins: 0, losses: 3, pokemonIds: [700, 445, 6, 547, 149, 902], pokemonNames: ["Sylveon", "Garchomp", "Charizard", "Whimsicott", "Dragonite", "Basculegion-M"], sets: [
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Voice", "Yawn", "Detect", "Quick Attack"], teraType: "Fairy" },
    { ability: "Rough Skin", item: "Roseli Berry", moves: ["Earthquake", "Protect", "Rock Slide", "Poison Jab"], teraType: "Dragon" },
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"], teraType: "Fire" },
    { ability: "Prankster", item: "Focus Sash", moves: ["Tailwind", "Moonblast", "Encore", "Protect"], teraType: "Grass" },
    { ability: "Multiscale", item: "Dragoninite", moves: ["Dragon Pulse", "Heat Wave", "Thunderbolt", "Protect"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Last Respects", "Aqua Jet", "Protect"] }
  ] },
  { id: "ct-597", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 33, player: "FinnzVGC", wins: 0, losses: 1, pokemonIds: [6, 700, 142, 902, 445, 983], pokemonNames: ["Charizard", "Sylveon", "Aerodactyl", "Basculegion-M", "Garchomp", "Kingambit"], sets: [
    { ability: "Solar Power", item: "Charizardite Y", moves: ["Heat Wave", "Weather Ball", "Solar Beam", "Protect"] },
    { ability: "Pixilate", item: "Fairy Feather", moves: ["Hyper Beam", "Hyper Voice", "Quick Attack", "Detect"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Rock Slide", "Dual Wingbeat", "Tailwind", "Wide Guard"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Aqua Jet", "Last Respects", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Rock Tomb", "Dragon Claw", "Protect"] },
    { ability: "Defiant", item: "Chople Berry", moves: ["Kowtow Cleave", "Sucker Punch", "Iron Head", "Low Kick"] }
  ] },
  { id: "ct-598", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 34, player: "JoMcCloud23", wins: 0, losses: 2, pokemonIds: [282, 3, 902, 727, 445, 547], pokemonNames: ["Gardevoir", "Venusaur", "Basculegion-M", "Incineroar", "Garchomp", "Whimsicott"], sets: [
    { ability: "Trace", item: "Gardevoirite", moves: ["Psyshock", "Hyper Voice", "Trick Room", "Protect"] },
    { ability: "Chlorophyll", item: "Venusaurite", moves: ["Giga Drain", "Sludge Bomb", "Earth Power", "Protect"] },
    { ability: "Adaptability", item: "Choice Scarf", moves: ["Aqua Jet", "Wave Crash", "Last Respects", "Flip Turn"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Dragon Claw", "Stomping Tantrum", "Rock Slide", "Protect"] },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Encore", "Tailwind", "Protect"] }
  ] },
  { id: "ct-599", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 35, player: "Josecovi", wins: 0, losses: 2, pokemonIds: [1013, 780, 279, 65, 212, 902], pokemonNames: ["Sinistcha", "Drampa", "Pelipper", "Alakazam", "Scizor", "Basculegion-M"], sets: [
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Trick Room", "Rage Powder", "Life Dew"] },
    { ability: "Cloud Nine", item: "Drampanite", moves: ["Protect", "Earth Power", "Hyper Voice", "Calm Mind"] },
    { ability: "Drizzle", item: "Focus Sash", moves: ["Weather Ball", "Hurricane", "Wide Guard", "Tailwind"] },
    { ability: "Inner Focus", item: "Colbur Berry", moves: ["Light Screen", "Psychic", "Speed Swap", "Taunt"] },
    { ability: "Technician", item: "Scizorite", moves: ["Swords Dance", "Bug Bite", "Bullet Punch", "Protect"] },
    { ability: "Swift Swim", item: "Mystic Water", moves: ["Protect", "Aqua Jet", "Last Respects", "Wave Crash"] }
  ] },
  { id: "ct-600", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 36, player: "Arteguarema", wins: 0, losses: 3, pokemonIds: [1013, 445, 663, 478, 956, 350], pokemonNames: ["Sinistcha", "Garchomp", "Talonflame", "Froslass", "Espathra", "Milotic"], sets: [
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Trick Room", "Rage Powder", "Life Dew"] },
    { ability: "Rough Skin", item: "Lum Berry", moves: ["Rock Slide", "Earthquake", "Protect", "Dragon Claw"] },
    { ability: "Gale Wings", item: "Sharp Beak", moves: ["Protect", "Dual Wingbeat", "Flare Blitz", "Tailwind"] },
    { ability: "Cursed Body", item: "Froslassite", moves: ["Protect", "Shadow Ball", "Blizzard", "Aurora Veil"] },
    { ability: "Speed Boost", item: "Focus Sash", moves: ["Protect", "Dazzling Gleam", "Lumina Crash", "Skill Swap"] },
    { ability: "Competitive", item: "Leftovers", moves: ["Coil", "Hypnosis", "Scald", "Icy Wind"] }
  ] },
  { id: "ct-601", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 37, player: "Rallzzz", wins: 0, losses: 1, pokemonIds: [902, 981, 154, 324, 142, 903], pokemonNames: ["Basculegion-M", "Farigiraf", "Meganium", "Torkoal", "Aerodactyl", "Sneasler"], sets: [
    { ability: "Adaptability", item: "Mystic Water", moves: ["Liquidation", "Protect", "Aqua Jet", "Last Respects"] },
    { ability: "Armor Tail", item: "Sitrus Berry", moves: ["Helping Hand", "Psychic", "Protect", "Trick Room"] },
    { ability: "Overgrow", item: "Meganiumite", moves: ["Weather Ball", "Dazzling Gleam", "Solar Beam", "Protect"] },
    { ability: "Drought", item: "Charcoal", moves: ["Eruption", "Flamethrower", "Protect", "Rock Slide"] },
    { ability: "Unnerve", item: "Aerodactylite", moves: ["Dual Wingbeat", "Rock Slide", "Wide Guard", "Tailwind"] },
    { ability: "Poison Touch", item: "Focus Sash", moves: ["Close Combat", "Fake Out", "Dire Claw", "U-turn"] }
  ] },
  { id: "ct-602", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 38, player: "GloriWasHere", wins: 0, losses: 1, pokemonIds: [510, 9, 1013, 666, 663, 445], pokemonNames: ["Liepard", "Blastoise", "Sinistcha", "Vivillon", "Talonflame", "Garchomp"], sets: [
    { ability: "Prankster", item: "Focus Sash", moves: ["Foul Play", "Fake Out", "Rain Dance", "Fake Tears"] },
    { ability: "Torrent", item: "Blastoisinite", moves: ["Water Spout", "Aura Sphere", "Shell Smash", "Protect"] },
    { ability: "Hospitality", item: "Colbur Berry", moves: ["Matcha Gotcha", "Trick Room", "Rage Powder", "Imprison"] },
    { ability: "Compound Eyes", item: "Choice Scarf", moves: ["Sleep Powder", "Hurricane", "Rage Powder", "Rain Dance"] },
    { ability: "Flame Body", item: "None", moves: ["Acrobatics", "Quick Guard", "Tailwind", "Feint"] },
    { ability: "Sand Veil", item: "Lum Berry", moves: ["Earthquake", "Dragon Claw", "Swords Dance", "Protect"] }
  ] },
  { id: "ct-603", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 39, player: "Cactusmax", wins: 0, losses: 1, pokemonIds: [6, 1013, 727, 903, 902, 670], pokemonNames: ["Charizard", "Sinistcha", "Incineroar", "Sneasler", "Basculegion-M", "Floette"], sets: [
    { ability: "Blaze", item: "Charizardite X", moves: ["Flare Blitz", "Dragon Claw", "Dragon Dance", "Protect"] },
    { ability: "Hospitality", item: "Sitrus Berry", moves: ["Matcha Gotcha", "Rage Powder", "Life Dew", "Trick Room"] },
    { ability: "Intimidate", item: "Chople Berry", moves: ["Fake Out", "Flare Blitz", "Throat Chop", "Parting Shot"] },
    { ability: "Unburden", item: "White Herb", moves: ["Fake Out", "Dire Claw", "Close Combat", "Coaching"] },
    { ability: "Adaptability", item: "Focus Sash", moves: ["Liquidation", "Last Respects", "Aqua Jet", "Protect"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Calm Mind", "Protect"] }
  ] },
  { id: "ct-604", tournament: "Tenki's Cart - Champions M-A", players: 40, placement: 40, player: "Charmoffense", wins: 0, losses: 2, pokemonIds: [900, 670, 445, 902, 547, 6], pokemonNames: ["Kleavor", "Floette", "Garchomp", "Basculegion-M", "Whimsicott", "Charizard"], sets: [
    { ability: "Sharpness", item: "Focus Sash", moves: ["Stone Axe", "Protect", "X-Scissor", "Close Combat"] },
    { ability: "Flower Veil", item: "Floettite", moves: ["Moonblast", "Dazzling Gleam", "Pollen Puff", "Protect"] },
    { ability: "Rough Skin", item: "Sitrus Berry", moves: ["Earthquake", "Dragon Claw", "Rock Tomb", "Poison Jab"] },
    { ability: "Adaptability", item: "Mystic Water", moves: ["Wave Crash", "Aqua Jet", "Last Respects", "Protect"], teraType: "Water" },
    { ability: "Prankster", item: "Focus Sash", moves: ["Moonblast", "Tailwind", "Encore", "Endeavor"] },
    { ability: "Blaze", item: "Charizardite Y", moves: ["Heat Wave", "Solar Beam", "Weather Ball", "Protect"] }
  ] }
];

/** Computed count of unique tournaments in the dataset */
export const CHAMPIONS_TOURNAMENT_COUNT = new Set(CHAMPIONS_TOURNAMENT_TEAMS.map(t => t.tournament)).size;
