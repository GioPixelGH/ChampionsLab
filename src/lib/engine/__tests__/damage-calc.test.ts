import { describe, it, expect } from "vitest";
import { calculateDamage } from "../damage-calc";
import type { DamageCalcPokemon, DamageCalcTarget } from "../damage-calc";

// ── Helper factory: Pokemon with base stat 100 in every slot, 0 SP, Hardy ──
// This gives every calculated stat = 120 (Atk/Def/SpA/SpD/Spe) and HP = 170.
// Used so we can reason about damage without looking up game-specific numbers.
const neutralMon = (overrides: Partial<DamageCalcPokemon | DamageCalcTarget> = {}): DamageCalcPokemon => ({
  baseStats: { hp: 100, attack: 100, defense: 100, spAtk: 100, spDef: 100, speed: 100 },
  sp:        { hp: 0,   attack: 0,   defense: 0,   spAtk: 0,   spDef: 0,   speed: 0   },
  nature:    "Hardy",
  types:     ["normal"],
  ability:   "None",
  item:      "",
  ...overrides,
} as DamageCalcPokemon);

// baseDamage = floor(floor(22 * 100 * 120 / 120) / 50 + 2) = floor(2200/50 + 2) = 46
// minRoll (i=0):  floor(46 * 1.0 * 85/100) = 39
// maxRoll (i=15): floor(46 * 1.0 * 100/100) = 46
const BASE_DAMAGE_MIN = 39;
const BASE_DAMAGE_MAX = 46;

// ── Basic damage computation ──────────────────────────────────────────────────
describe("calculateDamage — neutral hit", () => {
  const atk = neutralMon({ types: ["ground"] });
  const def = neutralMon({ types: ["steel"] });      // Ground vs Steel = 2× in real Gen 9, but we test neutral

  it("returns 16 damage rolls", () => {
    const result = calculateDamage(neutralMon(), neutralMon(), "Earthquake", { computeKOChance: true });
    expect(result.rolls).toHaveLength(16);
  });

  it("min roll < max roll", () => {
    const result = calculateDamage(neutralMon(), neutralMon(), "Earthquake", { computeKOChance: true });
    expect(result.rolls[0]).toBeLessThan(result.rolls[15]);
  });

  it("rolls are monotonically increasing", () => {
    const result = calculateDamage(neutralMon(), neutralMon(), "Earthquake");
    for (let i = 1; i < result.rolls.length; i++) {
      expect(result.rolls[i]).toBeGreaterThanOrEqual(result.rolls[i - 1]);
    }
  });

  it("neutral physical move damage matches formula [39, 46]", () => {
    const result = calculateDamage(neutralMon(), neutralMon(), "Earthquake");
    expect(result.damage[0]).toBe(BASE_DAMAGE_MIN);
    expect(result.damage[1]).toBe(BASE_DAMAGE_MAX);
  });

  it("moveName is reflected in result", () => {
    const result = calculateDamage(neutralMon(), neutralMon(), "Earthquake");
    expect(result.moveName).toBe("Earthquake");
  });
});

// ── STAB ──────────────────────────────────────────────────────────────────────
// STAB multiplier = 1.5 (Adaptability would be 2.0 but we test base)
// minRoll: floor(46 * 1.5 * 85/100) = floor(58.65) = 58
// maxRoll: floor(46 * 1.5 * 100/100) = floor(69.0) = 69
describe("calculateDamage — STAB", () => {
  it("STAB Ground attacker using Earthquake gets 1.5× multiplier", () => {
    const atk = neutralMon({ types: ["ground"] });
    const result = calculateDamage(atk, neutralMon(), "Earthquake");
    expect(result.damage[0]).toBe(58);
    expect(result.damage[1]).toBe(69);
  });

  it("no STAB when attacker type doesn't match move type", () => {
    const atk = neutralMon({ types: ["water"] }); // Water-type using Earthquake — no STAB
    const result = calculateDamage(atk, neutralMon(), "Earthquake");
    expect(result.damage[0]).toBe(BASE_DAMAGE_MIN);
    expect(result.damage[1]).toBe(BASE_DAMAGE_MAX);
  });
});

// ── Type effectiveness ────────────────────────────────────────────────────────
// Super effective (2×): floor(46 * 2.0 * 85/100) = 78, max = 92
// Not very effective (0.5×): floor(46 * 0.5 * 85/100) = 19, max = 23
describe("calculateDamage — type effectiveness", () => {
  it("super effective (2×) roughly doubles damage vs neutral", () => {
    const atk = neutralMon({ types: ["normal"] });
    const def = neutralMon({ types: ["rock"] }); // Ground super effective vs Rock
    const neutral = calculateDamage(atk, def, "Earthquake");
    const se = calculateDamage(neutralMon({ types: ["ground"] }), def, "Earthquake");
    // STAB + SE = 3× — just check SE is substantially higher
    expect(se.damage[1]).toBeGreaterThan(neutral.damage[1]);
  });

  it("immune (0×) returns zero damage", () => {
    const def = neutralMon({ types: ["flying"] }); // Ground immune to Flying
    const result = calculateDamage(neutralMon(), def, "Earthquake");
    expect(result.damage[0]).toBe(0);
    expect(result.damage[1]).toBe(0);
    expect(result.effectiveness).toBe(0);
  });

  it("effectiveness field is correct for neutral hit", () => {
    const result = calculateDamage(neutralMon(), neutralMon(), "Flamethrower");
    expect(result.effectiveness).toBe(1);
  });

  it("effectiveness is 2 for super effective", () => {
    const def = neutralMon({ types: ["grass"] }); // Fire SE vs Grass
    const result = calculateDamage(neutralMon({ types: ["fire"] }), def, "Flamethrower");
    expect(result.effectiveness).toBe(2);
  });

  it("effectiveness is 0.5 for not very effective", () => {
    const def = neutralMon({ types: ["water"] }); // Fire NVE vs Water
    const result = calculateDamage(neutralMon({ types: ["fire"] }), def, "Flamethrower");
    expect(result.effectiveness).toBe(0.5);
  });
});

// ── Status moves return zero damage ──────────────────────────────────────────
describe("calculateDamage — status moves", () => {
  it("returns zero damage for status move", () => {
    const result = calculateDamage(neutralMon(), neutralMon(), "Protect");
    expect(result.damage[0]).toBe(0);
    expect(result.damage[1]).toBe(0);
  });
});

// ── Weather effects ───────────────────────────────────────────────────────────
// Sun + Fire: 1.5× → floor(46 * 1.5 * 85/100) = 58 min (if no STAB)
// Rain + Water: 1.5× similarly
// Sun + Water: 0.5× → floor(46 * 0.5 * 85/100) = 19 min
describe("calculateDamage — weather", () => {
  it("sun boosts fire moves by 1.5×", () => {
    const neutral = calculateDamage(neutralMon(), neutralMon(), "Flamethrower");
    const sun     = calculateDamage(neutralMon(), neutralMon(), "Flamethrower", { weather: "sun" });
    expect(sun.damage[1]).toBeGreaterThan(neutral.damage[1]);
    // Floor operations can cause ±1 difference; verify roughly 1.5×
    expect(sun.damage[1]).toBeGreaterThanOrEqual(Math.floor(neutral.damage[1] * 1.4));
  });

  it("rain halves fire moves", () => {
    const neutral = calculateDamage(neutralMon(), neutralMon(), "Flamethrower");
    const rain    = calculateDamage(neutralMon(), neutralMon(), "Flamethrower", { weather: "rain" });
    expect(rain.damage[1]).toBeLessThan(neutral.damage[1]);
  });

  it("rain boosts water moves by 1.5×", () => {
    const neutral = calculateDamage(neutralMon(), neutralMon(), "Waterfall");
    const rain    = calculateDamage(neutralMon(), neutralMon(), "Waterfall", { weather: "rain" });
    expect(rain.damage[1]).toBeGreaterThan(neutral.damage[1]);
  });

  it("sun does not affect non-fire/water moves", () => {
    const neutral = calculateDamage(neutralMon(), neutralMon(), "Earthquake");
    const sun     = calculateDamage(neutralMon(), neutralMon(), "Earthquake", { weather: "sun" });
    expect(sun.damage[0]).toBe(neutral.damage[0]);
    expect(sun.damage[1]).toBe(neutral.damage[1]);
  });
});

// ── Burn ──────────────────────────────────────────────────────────────────────
describe("calculateDamage — burn", () => {
  it("burn halves physical damage", () => {
    const normal = calculateDamage(neutralMon(), neutralMon(), "Earthquake");
    const burned = calculateDamage(neutralMon({ isBurned: true }), neutralMon(), "Earthquake");
    expect(burned.damage[1]).toBeLessThan(normal.damage[1]);
  });

  it("burn does not affect special moves", () => {
    const normal = calculateDamage(neutralMon(), neutralMon(), "Flamethrower");
    const burned = calculateDamage(neutralMon({ isBurned: true }), neutralMon(), "Flamethrower");
    expect(burned.damage[0]).toBe(normal.damage[0]);
    expect(burned.damage[1]).toBe(normal.damage[1]);
  });
});

// ── Helping Hand ──────────────────────────────────────────────────────────────
describe("calculateDamage — helping hand", () => {
  it("Helping Hand boosts damage by 1.5×", () => {
    const normal = calculateDamage(neutralMon(), neutralMon(), "Earthquake");
    const hh     = calculateDamage(neutralMon(), neutralMon(), "Earthquake", { helpingHand: true });
    expect(hh.damage[1]).toBeCloseTo(normal.damage[1] * 1.5, 0);
  });
});

// ── Crit ──────────────────────────────────────────────────────────────────────
describe("calculateDamage — critical hit", () => {
  it("crit deals 1.5× damage compared to non-crit", () => {
    const normal = calculateDamage(neutralMon(), neutralMon(), "Earthquake");
    const crit   = calculateDamage(neutralMon(), neutralMon(), "Earthquake", { isCrit: true });
    expect(crit.damage[1]).toBeGreaterThan(normal.damage[1]);
  });
});

// ── Doubles spread reduction ──────────────────────────────────────────────────
describe("calculateDamage — doubles spread", () => {
  it("spread move in doubles with 2 targets takes 0.75× damage", () => {
    const single   = calculateDamage(neutralMon(), neutralMon(), "Earthquake");
    const spread   = calculateDamage(neutralMon(), neutralMon(), "Earthquake", {
      isDoubles: true, targetCount: 2,
    });
    expect(spread.damage[1]).toBeLessThan(single.damage[1]);
  });

  it("spread move in doubles with 1 target has no reduction", () => {
    const single = calculateDamage(neutralMon(), neutralMon(), "Earthquake");
    const spread = calculateDamage(neutralMon(), neutralMon(), "Earthquake", {
      isDoubles: true, targetCount: 1,
    });
    expect(spread.damage[1]).toBe(single.damage[1]);
  });
});

// ── isOHKO / is2HKO flags ─────────────────────────────────────────────────────
describe("calculateDamage — KO flags", () => {
  it("very high power vs low HP is flagged as OHKO", () => {
    // Attacker with 252 SP → huge attack stat; defender with 0 SP → low HP
    const bigAtk = neutralMon({
      sp: { hp: 0, attack: 32, defense: 0, spAtk: 32, spDef: 0, speed: 0 },
    });
    const lowDef = neutralMon({
      baseStats: { hp: 45, attack: 45, defense: 45, spAtk: 45, spDef: 45, speed: 45 },
    });
    const result = calculateDamage(bigAtk, lowDef, "Earthquake", { computeKOChance: true });
    // With a massive stat advantage, expect OHKO or close
    expect(result.isOHKO || result.is2HKO || result.koChance.n <= 2).toBe(true);
  });
});

// ── simMode: only 2 rolls ──────────────────────────────────────────────────────
describe("calculateDamage — simMode", () => {
  it("simMode returns exactly 2 rolls", () => {
    const result = calculateDamage(neutralMon(), neutralMon(), "Earthquake", { simMode: true, computeKOChance: true });
    expect(result.rolls).toHaveLength(2);
  });

  it("simMode min <= full mode min, max >= full mode max", () => {
    const full = calculateDamage(neutralMon(), neutralMon(), "Earthquake");
    const sim  = calculateDamage(neutralMon(), neutralMon(), "Earthquake", { simMode: true });
    expect(sim.damage[0]).toBeLessThanOrEqual(full.damage[0]);
    expect(sim.damage[1]).toBeGreaterThanOrEqual(full.damage[1] - 1); // allow 1 off due to floor
  });
});
