"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Play, Pause, SkipBack, SkipForward, RotateCcw,
  Wind, Clock, Zap, Trophy, Skull,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { BattleLogEntry, DetailedBattleResult } from "@/lib/engine/battle-sim";

// ── Types ─────────────────────────────────────────────────────────────────────

export interface BattleReplayViewerProps {
  result: DetailedBattleResult;
  /** Label for team 1 (defaults to "Your Team") */
  team1Label?: string;
  /** Label for team 2 (defaults to "Opponent") */
  team2Label?: string;
  /** Auto-play interval in ms (defaults to 1800) */
  autoPlayInterval?: number;
  className?: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

/** HP percentage → colour class */
function hpColor(pct: number): string {
  if (pct <= 0) return "bg-gray-400 dark:bg-gray-600";
  if (pct <= 25) return "bg-red-500";
  if (pct <= 50) return "bg-yellow-400";
  return "bg-green-500";
}

/** Weather value → human label + colour */
const WEATHER_META: Record<string, { label: string; cls: string }> = {
  sun: { label: "Harsh Sun", cls: "bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-300 border border-orange-300/50" },
  rain: { label: "Rain", cls: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 border border-blue-300/50" },
  sand: { label: "Sandstorm", cls: "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300 border border-amber-300/50" },
  hail: { label: "Hail", cls: "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-300/50" },
  snow: { label: "Snow", cls: "bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300 border border-sky-300/50" },
};

function weatherLabel(w: string): { label: string; cls: string } {
  const key = w.toLowerCase();
  return (
    WEATHER_META[key] ??
    WEATHER_META[Object.keys(WEATHER_META).find(k => key.includes(k)) ?? ""] ?? {
      label: w,
      cls: "bg-gray-100 text-gray-700 dark:bg-gray-500/20 dark:text-gray-300 border border-gray-300/50",
    }
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

interface HpBarRowProps {
  name: string;
  hpPct: number;
  fainted: boolean;
}

function HpBarRow({ name, hpPct, fainted }: HpBarRowProps) {
  const pct = Math.max(0, Math.min(100, hpPct));
  return (
    <div className="flex items-center gap-2 min-w-0">
      <span
        className={cn(
          "text-[10px] w-[4.5rem] shrink-0 truncate text-right font-medium",
          fainted ? "text-gray-400 dark:text-gray-600 line-through" : "text-gray-700 dark:text-gray-200",
        )}
        title={name}
      >
        {name}
      </span>
      <div className="flex-1 h-2.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className={cn("h-full rounded-full", hpColor(pct))}
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        />
      </div>
      <span
        className={cn(
          "text-[10px] font-mono w-8 shrink-0 text-right tabular-nums",
          fainted ? "text-gray-400 dark:text-gray-600" : "text-gray-600 dark:text-gray-300",
        )}
      >
        {fainted ? "FNT" : `${Math.round(pct)}%`}
      </span>
    </div>
  );
}

interface FieldBadgesProps {
  entry: BattleLogEntry;
  team1Label: string;
  team2Label: string;
}

function FieldBadges({ entry, team1Label, team2Label }: FieldBadgesProps) {
  const badges: { key: string; label: string; cls: string }[] = [];

  if (entry.field.weather) {
    const meta = weatherLabel(entry.field.weather);
    badges.push({ key: "weather", label: meta.label, cls: meta.cls });
  }
  if (entry.field.trickRoom) {
    badges.push({
      key: "tr",
      label: "Trick Room",
      cls: "bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300 border border-violet-300/50",
    });
  }
  if (entry.field.tailwind1) {
    badges.push({
      key: "tw1",
      label: `${team1Label} Tailwind`,
      cls: "bg-teal-100 text-teal-700 dark:bg-teal-500/20 dark:text-teal-300 border border-teal-300/50",
    });
  }
  if (entry.field.tailwind2) {
    badges.push({
      key: "tw2",
      label: `${team2Label} Tailwind`,
      cls: "bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300 border border-rose-300/50",
    });
  }

  if (badges.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5">
      {badges.map(b => (
        <span key={b.key} className={cn("px-2 py-0.5 rounded-full text-[10px] font-semibold", b.cls)}>
          {b.label}
        </span>
      ))}
    </div>
  );
}

interface EventLogProps {
  entries: BattleLogEntry[];
  currentTurn: number;
}

function EventLog({ entries, currentTurn }: EventLogProps) {
  const currentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    currentRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [currentTurn]);

  return (
    <div className="space-y-1 max-h-56 overflow-y-auto pr-0.5 scroll-smooth">
      {entries
        .slice()
        .reverse()
        .map(entry => {
          const isCurrent = entry.turn === entries[currentTurn]?.turn;
          return (
            <div
              key={entry.turn}
              ref={isCurrent ? currentRef : null}
              className={cn(
                "rounded-lg p-2.5 transition-colors",
                isCurrent
                  ? "bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/25 shadow-sm"
                  : "bg-gray-50 dark:bg-white/[0.03] border border-transparent",
              )}
            >
              <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">
                {entry.turn === 0 ? "Battle Start" : `Turn ${entry.turn}`}
              </p>
              {entry.events.map((ev, i) => (
                <p key={i} className="text-[11px] text-gray-600 dark:text-gray-300 leading-snug">
                  {ev}
                </p>
              ))}
            </div>
          );
        })}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export function BattleReplayViewer({
  result,
  team1Label = "Your Team",
  team2Label = "Opponent",
  autoPlayInterval = 1800,
  className,
}: BattleReplayViewerProps) {
  const { log, winner, turnsPlayed, team1Names, team2Names, team1Remaining, team2Remaining } = result;

  const [turnIdx, setTurnIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const maxIdx = Math.max(0, log.length - 1);
  const entry = log[turnIdx] ?? log[0];

  // ── Auto-play ───────────────────────────────────────────────────────────────
  const stopPlaying = useCallback(() => {
    setPlaying(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!playing) {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = null;
      return;
    }
    timerRef.current = setInterval(() => {
      setTurnIdx(prev => {
        if (prev >= maxIdx) {
          stopPlaying();
          return prev;
        }
        return prev + 1;
      });
    }, autoPlayInterval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [playing, maxIdx, autoPlayInterval, stopPlaying]);

  // ── Controls ────────────────────────────────────────────────────────────────
  const handleReset = () => {
    stopPlaying();
    setTurnIdx(0);
  };
  const handlePrev = () => {
    stopPlaying();
    setTurnIdx(prev => Math.max(0, prev - 1));
  };
  const handleNext = () => {
    stopPlaying();
    setTurnIdx(prev => Math.min(maxIdx, prev + 1));
  };
  const handlePlayPause = () => {
    if (playing) {
      stopPlaying();
    } else {
      if (turnIdx >= maxIdx) setTurnIdx(0);
      setPlaying(true);
    }
  };
  const handleScrub = (e: React.ChangeEvent<HTMLInputElement>) => {
    stopPlaying();
    setTurnIdx(Number(e.target.value));
  };

  // ── HP data ─────────────────────────────────────────────────────────────────
  // Determine initial HP per pokemon (max HP = HP at turn 0)
  const maxHp1 = log[0]?.team1HP ?? team1Names.map(() => 100);
  const maxHp2 = log[0]?.team2HP ?? team2Names.map(() => 100);

  const currentHp1 = entry?.team1HP ?? maxHp1;
  const currentHp2 = entry?.team2HP ?? maxHp2;

  function hpPct(current: number, max: number) {
    if (max <= 0) return 0;
    return (current / max) * 100;
  }

  // ── Result banner ───────────────────────────────────────────────────────────
  const isAtEnd = turnIdx >= maxIdx;

  return (
    <div className={cn("flex flex-col gap-4", className)}>

      {/* Team HP panels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Team 1 */}
        <div className="glass rounded-xl p-3 border border-blue-200/60 dark:border-blue-500/20">
          <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            {team1Label}
          </p>
          <div className="space-y-1.5">
            {team1Names.map((name, idx) => (
              <HpBarRow
                key={name + idx}
                name={name}
                hpPct={hpPct(currentHp1[idx] ?? 0, maxHp1[idx] ?? 100)}
                fainted={(currentHp1[idx] ?? 0) <= 0}
              />
            ))}
          </div>
        </div>

        {/* Team 2 */}
        <div className="glass rounded-xl p-3 border border-red-200/60 dark:border-red-500/20">
          <p className="text-[10px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-2">
            {team2Label}
          </p>
          <div className="space-y-1.5">
            {team2Names.map((name, idx) => (
              <HpBarRow
                key={name + idx}
                name={name}
                hpPct={hpPct(currentHp2[idx] ?? 0, maxHp2[idx] ?? 100)}
                fainted={(currentHp2[idx] ?? 0) <= 0}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Field state badges */}
      {entry && (
        <AnimatePresence mode="wait">
          <motion.div
            key={`field-${entry.turn}`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="min-h-[1.5rem]"
          >
            <FieldBadges entry={entry} team1Label={team1Label} team2Label={team2Label} />
          </motion.div>
        </AnimatePresence>
      )}

      {/* Turn events */}
      {log.length > 0 && (
        <EventLog entries={log.slice(0, turnIdx + 1)} currentTurn={turnIdx} />
      )}

      {/* Replay controls */}
      <div className="flex flex-col gap-2">
        {/* Scrubber */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-gray-400 dark:text-gray-500 tabular-nums w-6 text-right">0</span>
          <input
            type="range"
            min={0}
            max={maxIdx}
            value={turnIdx}
            onChange={handleScrub}
            className="flex-1 accent-amber-500 cursor-pointer"
            aria-label="Turn scrubber"
          />
          <span className="text-[10px] text-gray-400 dark:text-gray-500 tabular-nums w-6">{maxIdx}</span>
        </div>

        {/* Buttons row */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            {/* Reset */}
            <button
              type="button"
              onClick={handleReset}
              disabled={turnIdx === 0 && !playing}
              className="p-2 rounded-lg glass glass-hover disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
              aria-label="Reset"
              title="Reset"
            >
              <RotateCcw className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Prev */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={turnIdx === 0}
              className="p-2 rounded-lg glass glass-hover disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
              aria-label="Previous turn"
              title="Previous turn"
            >
              <ChevronLeft className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Play / Pause */}
            <button
              type="button"
              onClick={handlePlayPause}
              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm hover:shadow-md transition-shadow"
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {playing ? "Pause" : "Play"}
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={handleNext}
              disabled={turnIdx >= maxIdx}
              className="p-2 rounded-lg glass glass-hover disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
              aria-label="Next turn"
              title="Next turn"
            >
              <ChevronRight className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Skip to end */}
            <button
              type="button"
              onClick={() => { stopPlaying(); setTurnIdx(maxIdx); }}
              disabled={turnIdx >= maxIdx}
              className="p-2 rounded-lg glass glass-hover disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
              aria-label="Skip to end"
              title="Skip to end"
            >
              <SkipForward className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          {/* Turn counter */}
          <span className="text-xs font-mono text-gray-400 dark:text-gray-500 tabular-nums">
            <Clock className="w-3 h-3 inline-block mr-0.5 -mt-px opacity-60" />
            Turn {entry?.turn ?? 0} / {turnsPlayed}
          </span>
        </div>
      </div>

      {/* Result banner — shown once we reach the last turn */}
      <AnimatePresence>
        {isAtEnd && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={cn(
              "rounded-xl p-3.5 text-center border shadow-sm",
              winner === 1
                ? "bg-green-50 dark:bg-green-500/10 border-green-300 dark:border-green-500/30 text-green-700 dark:text-green-400"
                : "bg-red-50 dark:bg-red-500/10 border-red-300 dark:border-red-500/30 text-red-700 dark:text-red-400",
            )}
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              {winner === 1
                ? <Trophy className="w-4 h-4" />
                : <Skull className="w-4 h-4" />}
              <span className="text-sm font-bold">
                {winner === 1 ? "Victory" : "Defeat"}
              </span>
            </div>
            <p className="text-xs opacity-80">
              {turnsPlayed} turn{turnsPlayed !== 1 ? "s" : ""}
              {" · "}
              {team1Label}: {team1Remaining} left
              {" · "}
              {team2Label}: {team2Remaining} left
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BattleReplayViewer;
