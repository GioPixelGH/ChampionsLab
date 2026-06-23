import { describe, it, expect } from "vitest";
import { calculateStats, getEffectiveSpeed } from "../stat-calc";
import type { BaseStats, StatPoints } from "@/lib/types";

// ── Fixture: Garchomp base stats (108/130/95/80/85/102) ──────────────────────
const GARCHOMP: BaseStats = { hp: 108, attack: 130, defense: 95, spAtk: 80, spDef: 85, speed: 102 };
const ZERO_SP: StatPoints  = { hp: 0,  attack: 0,  defense: 0,  spAtk: 0,  spDef: 0,  speed: 0  };
const MAX_SP: StatPoints   = { hp: 32, attack: 32, defense: 32, spAtk: 32, spDef: 32, speed: 32 };
const HALF_SP: StatPoints  = { hp: 16, attack: 16, defense: 16, spAtk: 16, spDef: 16, speed: 16 };

// ── HP formula: floor((2*Base+31)*50/100) + 50 + 10 + SP ─────────────────────
//   Garchomp: floor((247)*50/100) + 60 = 123 + 60 = 183 at 0 SP
describe("calculateStats — HP", () => {
  it("HP with 0 SP matches formula", () => {
    expect(calculateStats(GARCHOMP, ZERO_SP, "Hardy").hp).toBe(183);
  });

  it("HP adds SP linearly", () => {
    expect(calculateStats(GARCHOMP, MAX_SP,  "Hardy").hp).toBe(215); // 183 + 32
    expect(calculateStats(GARCHOMP, HALF_SP, "Hardy").hp).toBe(199); // 183 + 16
  });

  it("HP is not affected by nature", () => {
    const hardy  = calculateStats(GARCHOMP, ZERO_SP, "Hardy").hp;
    const adamant = calculateStats(GARCHOMP, ZERO_SP, "Adamant").hp;
    const modest  = calculateStats(GARCHOMP, ZERO_SP, "Modest").hp;
    expect(hardy).toBe(adamant);
    expect(hardy).toBe(modest);
  });
});

// ── Non-HP formula: floor((floor(((2*Base+31)*50)/100)+5+SP)*NatureMod) ───────
//   Garchomp Attack: floor((floor(291*50/100)+5+32)*1.0) = floor((145+37)*1.0) = 182 (Hardy, 32 SP)
describe("calculateStats — Attack", () => {
  it("Attack with 32 SP, neutral nature", () => {
    expect(calculateStats(GARCHOMP, MAX_SP, "Hardy").attack).toBe(182);
  });

  it("Attack with 32 SP, +10% nature (Adamant)", () => {
    expect(calculateStats(GARCHOMP, MAX_SP, "Adamant").attack).toBe(200); // floor(182*1.1)
  });

  it("Attack with 32 SP, -10% nature (Modest)", () => {
    expect(calculateStats(GARCHOMP, MAX_SP, "Modest").attack).toBe(163); // floor(182*0.9)
  });

  it("Attack with 0 SP, neutral", () => {
    // floor((floor(291*50/100)+5+0)*1.0) = floor((145+5)*1.0) = 150
    expect(calculateStats(GARCHOMP, ZERO_SP, "Hardy").attack).toBe(150);
  });
});

// ── Speed ─────────────────────────────────────────────────────────────────────
//   Garchomp Speed: base 102 → floor((floor(235*50/100)+5+32)*1.1) = floor(154*1.1) = 169 (Jolly, 32 SP)
describe("calculateStats — Speed", () => {
  it("Speed with 32 SP, Jolly (+10%)", () => {
    expect(calculateStats(GARCHOMP, MAX_SP, "Jolly").speed).toBe(169);
  });

  it("Speed with 0 SP, Hardy (neutral)", () => {
    // floor((floor(235*50/100)+5+0)*1.0) = floor((117+5)*1.0) = 122
    expect(calculateStats(GARCHOMP, ZERO_SP, "Hardy").speed).toBe(122);
  });

  it("Speed with 0 SP, Timid (+10%)", () => {
    expect(calculateStats(GARCHOMP, ZERO_SP, "Timid").speed).toBe(134); // floor(122*1.1)
  });
});

// ── Squishy: low base stat Pokemon (Blissey HP 255) ──────────────────────────
describe("calculateStats — high HP base", () => {
  const BLISSEY: BaseStats = { hp: 255, attack: 10, defense: 10, spAtk: 75, spDef: 135, speed: 55 };
  it("Blissey HP with 32 SP", () => {
    // floor((2*255+31)*50/100) + 50 + 10 + 32 = floor(541*50/100) + 92 = 270 + 92 = 362
    expect(calculateStats(BLISSEY, MAX_SP, "Hardy").hp).toBe(362);
  });
});

// ── getEffectiveSpeed ─────────────────────────────────────────────────────────
describe("getEffectiveSpeed", () => {
  it("doubles speed with tailwind", () => {
    const base = getEffectiveSpeed(100, { tailwind: false });
    const tw   = getEffectiveSpeed(100, { tailwind: true });
    expect(tw).toBe(base * 2);
  });

  it("multiplies by 1.5 with Choice Scarf", () => {
    const base  = getEffectiveSpeed(100, { choiceScarf: false });
    const scarf = getEffectiveSpeed(100, { choiceScarf: true });
    expect(scarf).toBe(Math.floor(base * 1.5));
  });

  it("halves speed with paralysis", () => {
    const base  = getEffectiveSpeed(100, { paralysis: false });
    const para  = getEffectiveSpeed(100, { paralysis: true });
    expect(para).toBe(Math.floor(base * 0.5));
  });
});
