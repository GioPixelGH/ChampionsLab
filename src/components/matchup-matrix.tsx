"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { getMatchup } from "@/lib/engine/type-chart";
import { spriteUrl } from "@/lib/sprite-url";
import type { TeamSlot, PokemonType } from "@/lib/types";
import { TYPE_COLORS as TYPE_COLOR_MAP } from "@/lib/types";

// ─── Types ───────────────────────────────────────────────────────────────────

interface MatchupCell {
  /** Best multiplier attacker can achieve against defender */
  multiplier: number;
  /** Attacker type that produced the best multiplier */
  bestType: PokemonType;
}

interface MatchupMatrixProps {
  team1: TeamSlot[];
  team2: TeamSlot[];
  /** Optional label for team 1 (attacker row headers). Defaults to "Team 1". */
  team1Label?: string;
  /** Optional label for team 2 (defender column headers). Defaults to "Team 2". */
  team2Label?: string;
  className?: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Compute best offensive type multiplier from attacker's types against defender's types */
function bestOffensiveMatchup(
  attackerTypes: PokemonType[],
  defenderTypes: PokemonType[]
): MatchupCell {
  let best = { multiplier: 0, bestType: attackerTypes[0] };
  for (const atkType of attackerTypes) {
    const mult = getMatchup(atkType, defenderTypes);
    if (mult > best.multiplier) {
      best = { multiplier: mult, bestType: atkType };
    }
  }
  // If all are 0 (all types immune), return 0 with first attacker type
  return best;
}

/** Tailwind background + text classes for each effectiveness tier */
function cellStyle(multiplier: number): {
  bg: string;
  text: string;
  border: string;
  label: string;
} {
  if (multiplier === 0) {
    return { bg: "bg-neutral-900", text: "text-neutral-500", border: "border-neutral-700", label: "0×" };
  }
  if (multiplier <= 0.25) {
    return { bg: "bg-red-950", text: "text-red-400", border: "border-red-900", label: "0.25×" };
  }
  if (multiplier < 1) {
    return { bg: "bg-red-900/60", text: "text-red-300", border: "border-red-800", label: "0.5×" };
  }
  if (multiplier === 1) {
    return { bg: "bg-neutral-800", text: "text-neutral-400", border: "border-neutral-700", label: "1×" };
  }
  if (multiplier === 2) {
    return { bg: "bg-green-900/70", text: "text-green-300", border: "border-green-800", label: "2×" };
  }
  // 4×
  return { bg: "bg-green-500/25", text: "text-green-200", border: "border-green-600", label: "4×" };
}

function formatMultiplier(m: number): string {
  if (m === 0) return "0×";
  if (m === 0.25) return "¼×";
  if (m === 0.5) return "½×";
  if (m === 1) return "1×";
  if (m === 2) return "2×";
  if (m === 4) return "4×";
  return `${m}×`;
}

function getPokemonName(slot: TeamSlot): string {
  return slot.pokemon?.name ?? "—";
}

function getPokemonSprite(slot: TeamSlot): string | null {
  if (!slot.pokemon) return null;
  // If isMega and forms exist, find the mega form sprite
  if (slot.isMega && slot.pokemon.forms) {
    const megaIdx = slot.megaFormIndex ?? 0;
    const form = slot.pokemon.forms[megaIdx];
    if (form?.sprite) return spriteUrl(form.sprite);
  }
  return spriteUrl(slot.pokemon.sprite);
}

function getPokemonTypes(slot: TeamSlot): PokemonType[] {
  if (!slot.pokemon) return [];
  // Use mega form types if applicable
  if (slot.isMega && slot.pokemon.forms) {
    const megaIdx = slot.megaFormIndex ?? 0;
    const form = slot.pokemon.forms[megaIdx];
    if (form?.types) return form.types;
  }
  return slot.pokemon.types;
}

function TypeBadge({ type, small = false }: { type: PokemonType; small?: boolean }) {
  const color = TYPE_COLOR_MAP[type] ?? "#888";
  return (
    <span
      className={cn(
        "inline-block rounded font-bold uppercase tracking-wide",
        small ? "px-1 py-0 text-[9px]" : "px-1.5 py-0.5 text-[10px]"
      )}
      style={{ backgroundColor: color + "33", color, border: `1px solid ${color}55` }}
    >
      {type.slice(0, 3)}
    </span>
  );
}

// ─── Tooltip ─────────────────────────────────────────────────────────────────

interface TooltipProps {
  attackerName: string;
  attackerTypes: PokemonType[];
  defenderName: string;
  defenderTypes: PokemonType[];
  cell: MatchupCell;
  visible: boolean;
  x: number;
  y: number;
}

function CellTooltip({
  attackerName,
  attackerTypes,
  defenderName,
  defenderTypes,
  cell,
  visible,
  x,
  y,
}: TooltipProps) {
  if (!visible) return null;

  const style = cellStyle(cell.multiplier);

  return (
    <div
      className="pointer-events-none fixed z-50 rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 shadow-xl text-xs"
      style={{ left: x + 12, top: y - 8, maxWidth: 220 }}
    >
      <div className="mb-1 font-semibold text-white">
        {attackerName} vs {defenderName}
      </div>
      <div className="flex items-center gap-1 mb-1">
        <span className="text-neutral-400">Attacker:</span>
        {attackerTypes.map(t => <TypeBadge key={t} type={t} small />)}
      </div>
      <div className="flex items-center gap-1 mb-2">
        <span className="text-neutral-400">Defender:</span>
        {defenderTypes.map(t => <TypeBadge key={t} type={t} small />)}
      </div>
      <div className={cn("flex items-center gap-2 rounded px-2 py-1", style.bg, style.border, "border")}>
        <TypeBadge type={cell.bestType} small />
        <span className="text-neutral-300 text-[10px]">best type</span>
        <span className={cn("ml-auto font-bold text-sm", style.text)}>
          {formatMultiplier(cell.multiplier)}
        </span>
      </div>
    </div>
  );
}

// ─── Sprite Header Cell ───────────────────────────────────────────────────────

function SpriteHeader({
  slot,
  size = 32,
  orientation = "row",
}: {
  slot: TeamSlot;
  size?: number;
  orientation?: "row" | "col";
}) {
  const sprite = getPokemonSprite(slot);
  const types = getPokemonTypes(slot);
  const name = getPokemonName(slot);

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-1",
        orientation === "col" ? "flex-col" : "flex-col"
      )}
      title={name}
    >
      {sprite ? (
        <Image
          src={sprite}
          alt={name}
          width={size}
          height={size}
          className="object-contain pixelated"
          unoptimized
        />
      ) : (
        <div
          className="flex items-center justify-center rounded bg-neutral-800 text-neutral-500 text-[10px]"
          style={{ width: size, height: size }}
        >
          ?
        </div>
      )}
      {types.length > 0 && (
        <div className="flex flex-wrap justify-center gap-0.5">
          {types.map(t => <TypeBadge key={t} type={t} small />)}
        </div>
      )}
    </div>
  );
}

// ─── Legend ───────────────────────────────────────────────────────────────────

function Legend() {
  const items: { multiplier: number; desc: string }[] = [
    { multiplier: 0, desc: "Immune" },
    { multiplier: 0.5, desc: "Not very effective" },
    { multiplier: 1, desc: "Neutral" },
    { multiplier: 2, desc: "Super effective" },
    { multiplier: 4, desc: "Very super effective" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 mt-3 pt-3 border-t border-neutral-800">
      <span className="font-medium text-neutral-500">Legend:</span>
      {items.map(({ multiplier, desc }) => {
        const s = cellStyle(multiplier);
        return (
          <div key={multiplier} className="flex items-center gap-1.5">
            <div
              className={cn("w-7 h-5 rounded flex items-center justify-center border text-[10px] font-bold", s.bg, s.text, s.border)}
            >
              {formatMultiplier(multiplier)}
            </div>
            <span>{desc}</span>
          </div>
        );
      })}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function MatchupMatrix({
  team1,
  team2,
  team1Label = "Team 1",
  team2Label = "Team 2",
  className,
}: MatchupMatrixProps) {
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    x: number;
    y: number;
    rowIdx: number;
    colIdx: number;
  }>({ visible: false, x: 0, y: 0, rowIdx: -1, colIdx: -1 });

  // Filter to occupied slots
  const attackers = useMemo(() => team1.filter(s => s.pokemon !== null), [team1]);
  const defenders = useMemo(() => team2.filter(s => s.pokemon !== null), [team2]);

  // Precompute all cells
  const matrix = useMemo<MatchupCell[][]>(() => {
    return attackers.map(atk => {
      const atkTypes = getPokemonTypes(atk);
      return defenders.map(def => {
        const defTypes = getPokemonTypes(def);
        if (atkTypes.length === 0 || defTypes.length === 0) {
          return { multiplier: 1, bestType: "normal" as PokemonType };
        }
        return bestOffensiveMatchup(atkTypes, defTypes);
      });
    });
  }, [attackers, defenders]);

  const handleMouseEnter = (e: React.MouseEvent, rowIdx: number, colIdx: number) => {
    setTooltip({ visible: true, x: e.clientX, y: e.clientY, rowIdx, colIdx });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (tooltip.visible) {
      setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }));
    }
  };

  const handleMouseLeave = () => {
    setTooltip(prev => ({ ...prev, visible: false }));
  };

  if (attackers.length === 0 || defenders.length === 0) {
    return (
      <div className={cn("flex items-center justify-center p-8 text-neutral-500 text-sm", className)}>
        Add Pokémon to both teams to see matchup matrix.
      </div>
    );
  }

  const tooltipCell =
    tooltip.visible && tooltip.rowIdx >= 0 && tooltip.colIdx >= 0
      ? matrix[tooltip.rowIdx]?.[tooltip.colIdx]
      : null;

  return (
    <div className={cn("select-none", className)}>
      {/* Scroll container */}
      <div className="overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-950">
        <table className="border-collapse" style={{ minWidth: defenders.length * 56 + 80 }}>
          <thead>
            <tr>
              {/* Top-left corner cell */}
              <th className="p-2 border-b border-r border-neutral-800 bg-neutral-950 sticky left-0 z-10">
                <div className="text-[10px] font-medium text-neutral-600 text-left leading-tight">
                  <span className="block">{team1Label}</span>
                  <span className="block text-neutral-700">vs</span>
                  <span className="block">{team2Label}</span>
                </div>
              </th>
              {/* Defender column headers */}
              {defenders.map((def, colIdx) => (
                <th
                  key={colIdx}
                  className="p-2 border-b border-r border-neutral-800 bg-neutral-950 text-center align-bottom"
                  style={{ minWidth: 56 }}
                >
                  <SpriteHeader slot={def} size={32} orientation="col" />
                  <div className="text-[9px] text-neutral-500 mt-1 max-w-[52px] truncate text-center" title={getPokemonName(def)}>
                    {getPokemonName(def)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {attackers.map((atk, rowIdx) => (
              <tr key={rowIdx} className="group">
                {/* Attacker row header */}
                <td className="p-2 border-b border-r border-neutral-800 bg-neutral-950 sticky left-0 z-10">
                  <div className="flex items-center gap-2">
                    <SpriteHeader slot={atk} size={28} orientation="row" />
                    <span className="text-[9px] text-neutral-500 max-w-[52px] leading-tight" title={getPokemonName(atk)}>
                      {getPokemonName(atk)}
                    </span>
                  </div>
                </td>
                {/* Matchup cells */}
                {defenders.map((_def, colIdx) => {
                  const cell = matrix[rowIdx][colIdx];
                  const s = cellStyle(cell.multiplier);
                  const isHovered =
                    tooltip.visible &&
                    tooltip.rowIdx === rowIdx &&
                    tooltip.colIdx === colIdx;
                  return (
                    <td
                      key={colIdx}
                      className={cn(
                        "border-b border-r border-neutral-800 text-center cursor-default transition-all duration-100",
                        s.bg,
                        isHovered && "ring-2 ring-inset ring-white/20"
                      )}
                      style={{ minWidth: 56, height: 44 }}
                      onMouseEnter={e => handleMouseEnter(e, rowIdx, colIdx)}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="flex flex-col items-center justify-center h-full gap-0.5 py-1">
                        <span className={cn("font-bold text-sm leading-none", s.text)}>
                          {formatMultiplier(cell.multiplier)}
                        </span>
                        <TypeBadge type={cell.bestType} small />
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Legend />

      {/* Tooltip */}
      {tooltipCell && tooltip.rowIdx >= 0 && tooltip.colIdx >= 0 && (
        <CellTooltip
          attackerName={getPokemonName(attackers[tooltip.rowIdx])}
          attackerTypes={getPokemonTypes(attackers[tooltip.rowIdx])}
          defenderName={getPokemonName(defenders[tooltip.colIdx])}
          defenderTypes={getPokemonTypes(defenders[tooltip.colIdx])}
          cell={tooltipCell}
          visible={tooltip.visible}
          x={tooltip.x}
          y={tooltip.y}
        />
      )}
    </div>
  );
}

// ─── Compact Variant ─────────────────────────────────────────────────────────

/**
 * MatchupMatrixCompact — a condensed version suitable for embedding in a sidebar.
 * Shows a color-coded grid without text labels inside cells. Sprite headers are smaller.
 * Hovering a cell still shows the full tooltip.
 */
export function MatchupMatrixCompact({
  team1,
  team2,
  team1Label = "Your Team",
  team2Label = "Opponent",
  className,
}: MatchupMatrixProps) {
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    x: number;
    y: number;
    rowIdx: number;
    colIdx: number;
  }>({ visible: false, x: 0, y: 0, rowIdx: -1, colIdx: -1 });

  const attackers = useMemo(() => team1.filter(s => s.pokemon !== null), [team1]);
  const defenders = useMemo(() => team2.filter(s => s.pokemon !== null), [team2]);

  const matrix = useMemo<MatchupCell[][]>(() => {
    return attackers.map(atk => {
      const atkTypes = getPokemonTypes(atk);
      return defenders.map(def => {
        const defTypes = getPokemonTypes(def);
        if (atkTypes.length === 0 || defTypes.length === 0) {
          return { multiplier: 1, bestType: "normal" as PokemonType };
        }
        return bestOffensiveMatchup(atkTypes, defTypes);
      });
    });
  }, [attackers, defenders]);

  const handleMouseEnter = (e: React.MouseEvent, rowIdx: number, colIdx: number) => {
    setTooltip({ visible: true, x: e.clientX, y: e.clientY, rowIdx, colIdx });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (tooltip.visible) {
      setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }));
    }
  };

  const handleMouseLeave = () => {
    setTooltip(prev => ({ ...prev, visible: false }));
  };

  if (attackers.length === 0 || defenders.length === 0) {
    return (
      <div className={cn("text-neutral-600 text-xs italic p-3", className)}>
        No matchup data — fill both teams.
      </div>
    );
  }

  const tooltipCell =
    tooltip.visible && tooltip.rowIdx >= 0 && tooltip.colIdx >= 0
      ? matrix[tooltip.rowIdx]?.[tooltip.colIdx]
      : null;

  const CELL = 28; // px per cell

  return (
    <div className={cn("select-none", className)}>
      {/* Header row labels */}
      <div className="flex items-center justify-between text-[10px] text-neutral-500 mb-1 px-0.5">
        <span>{team1Label} (atk)</span>
        <span>{team2Label} (def)</span>
      </div>

      {/* Scroll wrapper */}
      <div className="overflow-x-auto">
        <div className="inline-block">
          {/* Defender sprite row */}
          <div className="flex" style={{ marginLeft: CELL + 4 }}>
            {defenders.map((def, colIdx) => {
              const sprite = getPokemonSprite(def);
              return (
                <div
                  key={colIdx}
                  className="flex items-end justify-center"
                  style={{ width: CELL, flexShrink: 0 }}
                  title={getPokemonName(def)}
                >
                  {sprite ? (
                    <Image
                      src={sprite}
                      alt={getPokemonName(def)}
                      width={24}
                      height={24}
                      className="object-contain pixelated"
                      unoptimized
                    />
                  ) : (
                    <div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center text-[9px] text-neutral-600">?</div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Data rows */}
          {attackers.map((atk, rowIdx) => {
            const sprite = getPokemonSprite(atk);
            return (
              <div key={rowIdx} className="flex items-center mt-0.5">
                {/* Attacker sprite */}
                <div
                  className="flex items-center justify-center flex-shrink-0 mr-1"
                  style={{ width: CELL }}
                  title={getPokemonName(atk)}
                >
                  {sprite ? (
                    <Image
                      src={sprite}
                      alt={getPokemonName(atk)}
                      width={24}
                      height={24}
                      className="object-contain pixelated"
                      unoptimized
                    />
                  ) : (
                    <div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center text-[9px] text-neutral-600">?</div>
                  )}
                </div>

                {/* Cells */}
                {defenders.map((_def, colIdx) => {
                  const cell = matrix[rowIdx][colIdx];
                  const s = cellStyle(cell.multiplier);
                  const isHovered =
                    tooltip.visible &&
                    tooltip.rowIdx === rowIdx &&
                    tooltip.colIdx === colIdx;
                  return (
                    <div
                      key={colIdx}
                      className={cn(
                        "flex items-center justify-center rounded-sm cursor-default transition-all duration-75 border",
                        s.bg,
                        s.border,
                        isHovered && "ring-1 ring-white/30"
                      )}
                      style={{ width: CELL - 2, height: CELL - 2, marginRight: 2, flexShrink: 0 }}
                      onMouseEnter={e => handleMouseEnter(e, rowIdx, colIdx)}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className={cn("font-bold leading-none", s.text)} style={{ fontSize: 9 }}>
                        {cell.multiplier === 0
                          ? "✕"
                          : cell.multiplier === 0.25
                          ? "¼"
                          : cell.multiplier === 0.5
                          ? "½"
                          : cell.multiplier === 1
                          ? "·"
                          : cell.multiplier === 2
                          ? "2×"
                          : "4×"}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Compact legend */}
      <div className="flex flex-wrap gap-2 mt-2 text-[10px] text-neutral-500">
        {[
          { m: 0, label: "✕ Immune" },
          { m: 0.5, label: "½ NVE" },
          { m: 1, label: "· Neutral" },
          { m: 2, label: "2× SE" },
          { m: 4, label: "4× VSE" },
        ].map(({ m, label }) => {
          const s = cellStyle(m);
          return (
            <span key={m} className="flex items-center gap-1">
              <span
                className={cn("inline-block w-4 h-3.5 rounded-sm border", s.bg, s.border)}
              />
              <span>{label}</span>
            </span>
          );
        })}
      </div>

      {/* Tooltip */}
      {tooltipCell && tooltip.rowIdx >= 0 && tooltip.colIdx >= 0 && (
        <CellTooltip
          attackerName={getPokemonName(attackers[tooltip.rowIdx])}
          attackerTypes={getPokemonTypes(attackers[tooltip.rowIdx])}
          defenderName={getPokemonName(defenders[tooltip.colIdx])}
          defenderTypes={getPokemonTypes(defenders[tooltip.colIdx])}
          cell={tooltipCell}
          visible={tooltip.visible}
          x={tooltip.x}
          y={tooltip.y}
        />
      )}
    </div>
  );
}
