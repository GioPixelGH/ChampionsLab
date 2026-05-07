"use client";

// ══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB – Calcdex Panel (Showdex-style damage calculator)
// Integrated into Team Tester: pick one Pokémon per side → see move damage.
// ══════════════════════════════════════════════════════════════════════════════

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Sun, CloudRain, Wind, Snowflake, Zap, Leaf, Sparkles, Brain,
  Shield, ArrowRightLeft, Minus, Plus,
} from "lucide-react";
import type { ChampionsPokemon, CommonSet, PokemonType, StatPoints } from "@/lib/types";
import { TYPE_COLORS } from "@/lib/types";
import { cn } from "@/lib/utils";
import { spriteUrl } from "@/lib/sprite-url";
import {
  calculateDamage,
  calculateStats,
  type DamageCalcPokemon,
  type DamageCalcTarget,
  type DamageResult,
  type NatureName,
} from "@/lib/engine";
import { applyStatStage } from "@/lib/engine/stat-calc";
import { getMove } from "@/lib/engine/move-data";

// ── Types ─────────────────────────────────────────────────────────────────────

interface CalcdexPanelProps {
  team1Pokemon: ChampionsPokemon[];
  team1Sets: CommonSet[];
  team2Pokemon: ChampionsPokemon[];
  team2Sets: CommonSet[];
}

type Weather = "none" | "sun" | "rain" | "sand" | "snow";
type Terrain = "none" | "electric" | "grassy" | "misty" | "psychic";

interface SideState {
  selIdx: number;
  stages: { atk: number; spAtk: number; def: number; spDef: number; speed: number };
  lightScreen: boolean;
  reflect: boolean;
  auroraVeil: boolean;
  helpingHand: boolean;
  isBurned: boolean;
  currentHP: number; // 0-100
}

function makeSide(): SideState {
  return {
    selIdx: 0,
    stages: { atk: 0, spAtk: 0, def: 0, spDef: 0, speed: 0 },
    lightScreen: false,
    reflect: false,
    auroraVeil: false,
    helpingHand: false,
    isBurned: false,
    currentHP: 100,
  };
}

// ── Damage helpers ────────────────────────────────────────────────────────────

function buildAttacker(p: ChampionsPokemon, set: CommonSet, side: SideState): DamageCalcPokemon {
  return {
    baseStats: p.baseStats,
    sp: set.sp,
    nature: set.nature as NatureName,
    types: p.types as PokemonType[],
    ability: set.ability,
    item: set.item ?? "",
    atkStages: side.stages.atk,
    defStages: side.stages.def,
    spAtkStages: side.stages.spAtk,
    isBurned: side.isBurned,
    currentHPPercent: side.currentHP,
  };
}

function buildDefender(p: ChampionsPokemon, set: CommonSet, side: SideState): DamageCalcTarget {
  return {
    baseStats: p.baseStats,
    sp: set.sp,
    nature: set.nature as NatureName,
    types: p.types as PokemonType[],
    ability: set.ability,
    item: set.item ?? "",
    defStages: side.stages.def,
    spDefStages: side.stages.spDef,
    currentHPPercent: side.currentHP,
  };
}

function koLabel(r: DamageResult): { text: string; color: string } {
  const { koChance, percentHP } = r;
  if (percentHP[1] === 0) return { text: "—", color: "text-muted-foreground/40" };
  if (koChance.n === 1 && koChance.chance === 1) return { text: "OHKO", color: "text-green-500 dark:text-green-400 font-bold" };
  if (koChance.n === 1) return { text: koChance.text, color: "text-green-400" };
  if (koChance.n === 2 && koChance.chance === 1) return { text: "2HKO", color: "text-amber-500 dark:text-amber-400 font-semibold" };
  if (koChance.n === 2) return { text: koChance.text, color: "text-amber-400" };
  if (koChance.n === 3) return { text: koChance.n === 3 ? "3HKO" : `${koChance.n}HKO`, color: "text-orange-400" };
  if (koChance.n <= 6) return { text: `${koChance.n}HKO`, color: "text-red-400" };
  return { text: "—", color: "text-muted-foreground/40" };
}

// ── Sub-components ────────────────────────────────────────────────────────────

function TypeBadge({ type }: { type: PokemonType }) {
  const color = TYPE_COLORS[type] ?? "#888";
  return (
    <span
      className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider text-white"
      style={{ backgroundColor: color }}
    >
      {type.slice(0, 3).toUpperCase()}
    </span>
  );
}

function StatBar({ label, base, final, boosted }: { label: string; base: number; final: number; boosted: number; color?: string }) {
  const pct = Math.min(100, (base / 255) * 100);
  const isUp = boosted > final;
  const isDown = boosted < final;
  // bar color follows the boost direction
  const barColor = isUp ? "#4ade80" : isDown ? "#f87171" : "#60a5fa";
  return (
    <div className="flex items-center gap-1.5 text-[10px]">
      <span className="w-7 text-right text-muted-foreground font-mono shrink-0">{label}</span>
      <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
        <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: barColor }} />
      </div>
      <span className={cn(
        "w-7 text-right font-mono shrink-0",
        isUp ? "text-green-400 font-bold" : isDown ? "text-red-400 font-bold" : "text-foreground"
      )}>{boosted}</span>
    </div>
  );
}

function StageControl({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center gap-1 text-[10px]">
      <span className="w-8 text-muted-foreground shrink-0">{label}</span>
      <button
        onClick={() => onChange(Math.max(-6, value - 1))}
        className="w-5 h-5 rounded flex items-center justify-center hover:bg-accent text-muted-foreground"
      >
        <Minus size={9} />
      </button>
      <span className={cn("w-5 text-center font-mono font-semibold", value > 0 ? "text-green-500" : value < 0 ? "text-red-500" : "text-muted-foreground/50")}>
        {value === 0 ? "0" : value > 0 ? `+${value}` : `${value}`}
      </span>
      <button
        onClick={() => onChange(Math.min(6, value + 1))}
        className="w-5 h-5 rounded flex items-center justify-center hover:bg-accent text-muted-foreground"
      >
        <Plus size={9} />
      </button>
    </div>
  );
}

// ── Player panel (one side) ───────────────────────────────────────────────────

function PlayerPanel({
  label,
  color,
  team,
  sets,
  side,
  onSelectIdx,
  onStageChange,
  onToggle,
  isAttacker,
}: {
  label: string;
  color: "blue" | "red";
  team: ChampionsPokemon[];
  sets: CommonSet[];
  side: SideState;
  onSelectIdx: (i: number) => void;
  onStageChange: (stat: keyof SideState["stages"], v: number) => void;
  onToggle: (field: "lightScreen" | "reflect" | "auroraVeil" | "helpingHand" | "isBurned") => void;
  isAttacker: boolean;
}) {
  const accent = color === "blue"
    ? "text-blue-500 dark:text-blue-400"
    : "text-red-500 dark:text-red-400";
  const accentBg = color === "blue"
    ? "bg-blue-500"
    : "bg-red-500";
  const ringColor = color === "blue" ? "ring-blue-400" : "ring-red-400";

  const p = team[side.selIdx] ?? null;
  const set = sets[side.selIdx] ?? null;

  const calcStats = useMemo(() => {
    if (!p || !set) return null;
    return calculateStats(p.baseStats, set.sp, set.nature as NatureName);
  }, [p, set]);

  // Stage-boosted final values (used in the stat display)
  const boostedStats = useMemo(() => {
    if (!calcStats) return null;
    return {
      hp: calcStats.hp, // HP has no stage
      attack: applyStatStage(calcStats.attack, side.stages.atk),
      defense: applyStatStage(calcStats.defense, side.stages.def),
      spAtk: applyStatStage(calcStats.spAtk, side.stages.spAtk),
      spDef: applyStatStage(calcStats.spDef, side.stages.spDef),
      speed: applyStatStage(calcStats.speed, side.stages.speed),
    };
  }, [calcStats, side.stages]);

  return (
    <div className="flex-1 min-w-0 space-y-3">
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className={cn("text-xs font-bold uppercase tracking-widest", accent)}>{label}</span>
        {isAttacker && (
          <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-violet-100 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400 font-semibold uppercase tracking-wider">
            Attacker
          </span>
        )}
      </div>

      {/* Team roster */}
      {team.length > 0 ? (
        <div className="flex flex-wrap gap-1.5">
          {team.map((mon, i) => (
            <button
              key={mon.id}
              onClick={() => onSelectIdx(i)}
              className={cn(
                "relative p-0.5 rounded-lg transition-all ring-2",
                i === side.selIdx
                  ? `ring-${color === "blue" ? "blue" : "red"}-400 bg-${color === "blue" ? "blue" : "red"}-50 dark:bg-${color === "blue" ? "blue" : "red"}-500/10`
                  : "ring-transparent hover:ring-gray-300 dark:hover:ring-gray-600"
              )}
            >
              <Image
                src={spriteUrl(mon.sprite)}
                alt={mon.name}
                width={36}
                height={36}
                className="object-contain"
                unoptimized
              />
            </button>
          ))}
        </div>
      ) : (
        <p className="text-xs text-muted-foreground italic">No Pokémon in this team</p>
      )}

      {/* Selected Pokémon info */}
      {p && set && calcStats && boostedStats ? (
        <div className="rounded-xl border border-border bg-card/60 dark:bg-zinc-900/60 overflow-hidden">
          {/* Top: sprite + name + types */}
          <div className="flex items-center gap-3 px-3 pt-3 pb-2">
            <div className={cn("rounded-lg p-0.5 ring-2", ringColor, "bg-muted")}>
              <Image
                src={spriteUrl(p.sprite)}
                alt={p.name}
                width={48}
                height={48}
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-foreground leading-tight">{p.name}</p>
              <div className="flex gap-1 mt-0.5 flex-wrap">
                {p.types.map(ty => <TypeBadge key={ty} type={ty as PokemonType} />)}
              </div>
              <p className="text-[10px] text-muted-foreground mt-0.5 truncate">
                {set.ability} · {set.item || "No Item"} · {set.nature}
              </p>
            </div>
          </div>

          {/* HP bar */}
          <div className="px-3 pb-2">
            <div className="flex items-center gap-2 text-[10px]">
              <span className="text-muted-foreground w-5">HP</span>
              <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className={cn(
                    "h-full rounded-full transition-all",
                    side.currentHP > 50 ? "bg-green-400" : side.currentHP > 25 ? "bg-yellow-400" : "bg-red-400"
                  )}
                  style={{ width: `${side.currentHP}%` }}
                />
              </div>
              <span className="w-8 text-right text-muted-foreground">{side.currentHP}%</span>
              <input
                type="range"
                min={1}
                max={100}
                value={side.currentHP}
                onChange={(e) => onToggle("isBurned")} // handled by parent via a separate HP handler below
                className="w-12 h-1 accent-current"
                style={{ display: "none" }} // HP controlled via slider in parent
              />
            </div>
          </div>

          {/* Base stats */}
          <div className="px-3 pb-2 space-y-0.5">
            {([
              { stat: "hp",     label: "HP"  },
              { stat: "attack", label: "Atk" },
              { stat: "defense",label: "Def" },
              { stat: "spAtk",  label: "SpA" },
              { stat: "spDef",  label: "SpD" },
              { stat: "speed",  label: "Spe" },
            ] as const).map(({ stat, label }) => (
              <StatBar
                key={stat}
                label={label}
                base={p.baseStats[stat]}
                final={calcStats[stat] ?? 0}
                boosted={boostedStats[stat] ?? 0}
              />
            ))}
          </div>

          {/* Stat stages — same order as the stats above: Atk, Def, SpA, SpD, Spe (HP has no stage) */}
          <div className="border-t border-border/50 px-3 py-2 space-y-0.5 bg-muted/30">
            <p className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">Stages</p>
            <StageControl label="Atk" value={side.stages.atk}   onChange={(v) => onStageChange("atk",   v)} />
            <StageControl label="Def" value={side.stages.def}   onChange={(v) => onStageChange("def",   v)} />
            <StageControl label="SpA" value={side.stages.spAtk} onChange={(v) => onStageChange("spAtk", v)} />
            <StageControl label="SpD" value={side.stages.spDef} onChange={(v) => onStageChange("spDef", v)} />
            <StageControl label="Spe" value={side.stages.speed} onChange={(v) => onStageChange("speed", v)} />
          </div>

          {/* Toggles */}
          <div className="border-t border-border/50 px-3 py-2 flex flex-wrap gap-1.5">
            {([
              { key: "lightScreen" as const, label: "Light Scr" },
              { key: "reflect" as const, label: "Reflect" },
              { key: "auroraVeil" as const, label: "Aur. Veil" },
              { key: "helpingHand" as const, label: "Helping Hand" },
              { key: "isBurned" as const, label: "Burned" },
            ]).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => onToggle(key)}
                className={cn(
                  "px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wide border transition-colors",
                  side[key]
                    ? "bg-violet-100 dark:bg-violet-500/20 border-violet-300 dark:border-violet-500/40 text-violet-700 dark:text-violet-400"
                    : "border-border text-muted-foreground hover:border-violet-300 hover:text-violet-500"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border p-6 text-center text-xs text-muted-foreground">
          Add Pokémon to this team to use Calcdex
        </div>
      )}
    </div>
  );
}

// ── Move table ────────────────────────────────────────────────────────────────

function MoveTable({
  attacker,
  attackerSet,
  attackerSide,
  defender,
  defenderSet,
  defenderSide,
  weather,
  terrain,
  reversed,
}: {
  attacker: ChampionsPokemon;
  attackerSet: CommonSet;
  attackerSide: SideState;
  defender: ChampionsPokemon;
  defenderSet: CommonSet;
  defenderSide: SideState;
  weather: Weather;
  terrain: Terrain;
  reversed: boolean;
}) {
  const atk = buildAttacker(attacker, attackerSet, attackerSide);
  const def = buildDefender(defender, defenderSet, defenderSide);

  const opts = {
    weather: weather === "none" ? undefined : weather,
    terrain: terrain === "none" ? undefined : terrain,
    isDoubles: true,
    lightScreen: defenderSide.lightScreen,
    reflect: defenderSide.reflect,
    auroraVeil: defenderSide.auroraVeil,
    helpingHand: attackerSide.helpingHand,
    computeKOChance: true,
  };

  const moves = attackerSet.moves.filter(Boolean);
  const results = moves.map((m) => {
    try {
      return calculateDamage(atk, def, m, opts);
    } catch {
      return null;
    }
  });

  const attName = reversed ? defender.name : attacker.name;
  const defName = reversed ? attacker.name : defender.name;

  return (
    <div className="rounded-xl border border-border bg-card/60 dark:bg-zinc-900/60 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-muted/40 border-b border-border">
        <span className="text-[10px] font-bold text-foreground truncate">{attName}</span>
        <span className="text-muted-foreground/60 text-[10px]">→</span>
        <span className="text-[10px] font-bold text-foreground truncate">{defName}</span>
      </div>

      {/* Move rows */}
      {moves.length === 0 ? (
        <p className="text-xs text-muted-foreground text-center py-4">No moves</p>
      ) : (
        <div className="divide-y divide-border/50">
          {moves.map((moveName, i) => {
            const r = results[i];
            const move = getMove(moveName);
            const isStatus = !move || move.category === "status";
            const ko = r ? koLabel(r) : null;

            return (
              <div key={moveName} className="grid grid-cols-[1fr_auto_auto] items-center gap-x-2 px-3 py-1.5">
                {/* Move name */}
                <span className="text-[11px] font-medium text-foreground truncate">{moveName}</span>

                {/* Damage range */}
                {isStatus || !r ? (
                  <span className="text-[10px] text-muted-foreground/50 text-right">N/A</span>
                ) : (
                  <span className="text-[10px] text-foreground/80 text-right font-mono whitespace-nowrap">
                    {r.percentHP[0].toFixed(1)}–{r.percentHP[1].toFixed(1)}%
                  </span>
                )}

                {/* KO label */}
                {ko && !isStatus ? (
                  <span className={cn("text-[10px] font-semibold text-right whitespace-nowrap w-20", ko.color)}>
                    {ko.text}
                  </span>
                ) : (
                  <span className="w-20 text-right text-[10px] text-muted-foreground/30">—</span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── Field controls ────────────────────────────────────────────────────────────

const WEATHER_OPTS: { value: Weather; label: string; icon: React.ElementType | null }[] = [
  { value: "none", label: "—", icon: null },
  { value: "sun", label: "Sun", icon: Sun },
  { value: "rain", label: "Rain", icon: CloudRain },
  { value: "sand", label: "Sand", icon: Wind },
  { value: "snow", label: "Snow", icon: Snowflake },
];

const TERRAIN_OPTS: { value: Terrain; label: string; icon: React.ElementType }[] = [
  { value: "none", label: "—", icon: Minus },
  { value: "electric", label: "Electric", icon: Zap },
  { value: "grassy", label: "Grassy", icon: Leaf },
  { value: "misty", label: "Misty", icon: Sparkles },
  { value: "psychic", label: "Psychic", icon: Brain },
];

// ── Main component ────────────────────────────────────────────────────────────

export function CalcdexPanel({
  team1Pokemon,
  team1Sets,
  team2Pokemon,
  team2Sets,
}: CalcdexPanelProps) {
  const [left, setLeft] = useState<SideState>(makeSide());
  const [right, setRight] = useState<SideState>(makeSide());
  const [weather, setWeather] = useState<Weather>("none");
  const [terrain, setTerrain] = useState<Terrain>("none");
  const [attackerSide, setAttackerSide] = useState<1 | 2>(1); // 1 = left attacks right, 2 = right attacks left

  const hasLeft = team1Pokemon.length > 0;
  const hasRight = team2Pokemon.length > 0;

  // clamp selected index when team changes
  const leftIdx = Math.min(left.selIdx, Math.max(0, team1Pokemon.length - 1));
  const rightIdx = Math.min(right.selIdx, Math.max(0, team2Pokemon.length - 1));
  const leftP = team1Pokemon[leftIdx] ?? null;
  const leftSet = team1Sets[leftIdx] ?? null;
  const rightP = team2Pokemon[rightIdx] ?? null;
  const rightSet = team2Sets[rightIdx] ?? null;

  function updateStage(side: "left" | "right", stat: keyof SideState["stages"], v: number) {
    const setter = side === "left" ? setLeft : setRight;
    setter(prev => ({ ...prev, stages: { ...prev.stages, [stat]: v } }));
  }

  function toggle(side: "left" | "right", field: "lightScreen" | "reflect" | "auroraVeil" | "helpingHand" | "isBurned") {
    const setter = side === "left" ? setLeft : setRight;
    setter(prev => ({ ...prev, [field]: !prev[field] }));
  }

  function setHP(side: "left" | "right", pct: number) {
    const setter = side === "left" ? setLeft : setRight;
    setter(prev => ({ ...prev, currentHP: pct }));
  }

  const showCalc = hasLeft && hasRight && leftP && leftSet && rightP && rightSet;

  return (
    <div className="glass rounded-2xl border border-violet-200/40 dark:border-violet-500/20 overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-violet-500/10 via-indigo-500/10 to-blue-500/10 border-b border-violet-200/40 dark:border-violet-500/20">
        <Shield className="w-4 h-4 text-violet-500" />
        <span className="text-sm font-bold text-foreground">Calcdex</span>
        <span className="text-xs text-muted-foreground">Showdex-style damage calculator</span>
        <div className="ml-auto flex items-center gap-1">
          <span className="text-[10px] text-muted-foreground">Attacker:</span>
          <button
            onClick={() => setAttackerSide(1)}
            className={cn(
              "px-2 py-0.5 rounded text-[10px] font-semibold transition-colors",
              attackerSide === 1
                ? "bg-blue-500 text-white"
                : "text-muted-foreground hover:text-blue-500"
            )}
          >
            Team 1
          </button>
          <button
            onClick={() => setAttackerSide(s => s === 1 ? 2 : 1)}
            className="p-1 rounded hover:bg-accent text-muted-foreground"
            title="Swap attacker/defender"
          >
            <ArrowRightLeft size={12} />
          </button>
          <button
            onClick={() => setAttackerSide(2)}
            className={cn(
              "px-2 py-0.5 rounded text-[10px] font-semibold transition-colors",
              attackerSide === 2
                ? "bg-red-500 text-white"
                : "text-muted-foreground hover:text-red-500"
            )}
          >
            Team 2
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* HP sliders row */}
        {showCalc && (
          <div className="flex gap-4">
            <div className="flex-1 flex items-center gap-2 text-[10px]">
              <span className="text-blue-500 font-semibold w-14 shrink-0">{leftP.name.slice(0, 10)}</span>
              <span className="text-muted-foreground">HP</span>
              <input
                type="range" min={1} max={100} value={left.currentHP}
                onChange={(e) => setHP("left", Number(e.target.value))}
                className="flex-1 accent-blue-500"
              />
              <span className="w-8 text-right text-muted-foreground">{left.currentHP}%</span>
            </div>
            <div className="flex-1 flex items-center gap-2 text-[10px]">
              <span className="text-red-500 font-semibold w-14 shrink-0">{rightP.name.slice(0, 10)}</span>
              <span className="text-muted-foreground">HP</span>
              <input
                type="range" min={1} max={100} value={right.currentHP}
                onChange={(e) => setHP("right", Number(e.target.value))}
                className="flex-1 accent-red-500"
              />
              <span className="w-8 text-right text-muted-foreground">{right.currentHP}%</span>
            </div>
          </div>
        )}

        {/* Two side panels */}
        <div className="grid md:grid-cols-2 gap-4">
          <PlayerPanel
            label="Team 1"
            color="blue"
            team={team1Pokemon}
            sets={team1Sets}
            side={{ ...left, selIdx: leftIdx }}
            onSelectIdx={(i) => setLeft(prev => ({ ...prev, selIdx: i }))}
            onStageChange={(stat, v) => updateStage("left", stat, v)}
            onToggle={(f) => toggle("left", f)}
            isAttacker={attackerSide === 1}
          />
          <PlayerPanel
            label="Team 2"
            color="red"
            team={team2Pokemon}
            sets={team2Sets}
            side={{ ...right, selIdx: rightIdx }}
            onSelectIdx={(i) => setRight(prev => ({ ...prev, selIdx: i }))}
            onStageChange={(stat, v) => updateStage("right", stat, v)}
            onToggle={(f) => toggle("right", f)}
            isAttacker={attackerSide === 2}
          />
        </div>

        {/* Field: weather + terrain */}
        <div className="flex flex-wrap gap-4 items-center">
          {/* Weather */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider w-14">Weather</span>
            {WEATHER_OPTS.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                onClick={() => setWeather(value)}
                className={cn(
                  "flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-medium border transition-colors",
                  weather === value
                    ? "bg-amber-100 dark:bg-amber-500/20 border-amber-300 dark:border-amber-500/40 text-amber-700 dark:text-amber-400"
                    : "border-border text-muted-foreground hover:border-amber-300"
                )}
              >
                {Icon && <Icon size={9} />}
                {label}
              </button>
            ))}
          </div>

          {/* Terrain */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider w-14">Terrain</span>
            {TERRAIN_OPTS.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                onClick={() => setTerrain(value)}
                className={cn(
                  "flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-medium border transition-colors",
                  terrain === value
                    ? "bg-emerald-100 dark:bg-emerald-500/20 border-emerald-300 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-400"
                    : "border-border text-muted-foreground hover:border-emerald-300"
                )}
              >
                <Icon size={9} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Move tables */}
        {showCalc ? (
          <div className="grid md:grid-cols-2 gap-3">
            <MoveTable
              attacker={attackerSide === 1 ? leftP : rightP}
              attackerSet={attackerSide === 1 ? leftSet : rightSet}
              attackerSide={attackerSide === 1 ? left : right}
              defender={attackerSide === 1 ? rightP : leftP}
              defenderSet={attackerSide === 1 ? rightSet : leftSet}
              defenderSide={attackerSide === 1 ? right : left}
              weather={weather}
              terrain={terrain}
              reversed={false}
            />
            <MoveTable
              attacker={attackerSide === 1 ? rightP : leftP}
              attackerSet={attackerSide === 1 ? rightSet : leftSet}
              attackerSide={attackerSide === 1 ? right : left}
              defender={attackerSide === 1 ? leftP : rightP}
              defenderSet={attackerSide === 1 ? leftSet : rightSet}
              defenderSide={attackerSide === 1 ? left : right}
              weather={weather}
              terrain={terrain}
              reversed={true}
            />
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
            Add at least one Pokémon to each team to see damage calculations
          </div>
        )}
      </div>
    </div>
  );
}
