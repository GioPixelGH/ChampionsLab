"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import Image from "next/image";
import { Search, X, Check, Copy, RotateCcw, ChevronRight, Swords, Shield, Users } from "lucide-react";
import { POKEMON_SEED } from "@/lib/pokemon-data";
import { ChampionsPokemon, TYPE_COLORS, PokemonType } from "@/lib/types";
import { spriteUrl } from "@/lib/sprite-url";
import { cn } from "@/lib/utils";

// ── Constants ────────────────────────────────────────────────────────────────

const TEAM_SIZE = 6;
const BRING_SIZE = 4;

type Phase = "show-p1" | "show-p2" | "pick" | "result";

interface PlayerState {
  team: ChampionsPokemon[];
  brings: Set<number>; // pokemon ids selected to bring
}

const ROSTER = POKEMON_SEED.filter((p) => !p.hidden);

// ── Type badge ────────────────────────────────────────────────────────────────

function TypeBadge({ type }: { type: PokemonType }) {
  const color = TYPE_COLORS[type];
  return (
    <span
      className="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wide text-white/90"
      style={{ backgroundColor: color + "cc" }}
    >
      {type}
    </span>
  );
}

// ── Roster picker card ────────────────────────────────────────────────────────

function RosterCard({
  pokemon,
  selected,
  disabled,
  onToggle,
}: {
  pokemon: ChampionsPokemon;
  selected: boolean;
  disabled: boolean;
  onToggle: () => void;
}) {
  const primaryColor = TYPE_COLORS[pokemon.types[0]];
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled && !selected}
      className={cn(
        "relative flex flex-col items-center rounded-xl border transition-all duration-150 p-1.5 gap-0.5 focus-visible:outline-2 focus-visible:outline-offset-2",
        selected
          ? "border-violet-400 bg-violet-500/20 shadow-[0_0_12px_rgba(124,58,237,0.4)]"
          : disabled
          ? "border-white/5 bg-white/3 opacity-40 cursor-not-allowed"
          : "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10 cursor-pointer"
      )}
      style={selected ? { outlineColor: primaryColor } : undefined}
    >
      {selected && (
        <span className="absolute top-1 right-1 z-10 w-4 h-4 rounded-full bg-violet-500 flex items-center justify-center">
          <Check className="w-2.5 h-2.5 text-white" />
        </span>
      )}
      <div className="w-full aspect-square relative rounded-lg overflow-hidden" style={{ background: primaryColor + "22" }}>
        <Image
          src={spriteUrl(pokemon.sprite)}
          alt={pokemon.name}
          fill
          className="object-contain p-0.5 drop-shadow-md"
          unoptimized
        />
      </div>
      <p className="text-[10px] font-semibold text-white/80 leading-tight text-center truncate w-full px-0.5">
        {pokemon.name}
      </p>
      <div className="flex gap-0.5 flex-wrap justify-center">
        {pokemon.types.map((t) => (
          <TypeBadge key={t} type={t} />
        ))}
      </div>
    </button>
  );
}

// ── Bring pick card (pick phase) ──────────────────────────────────────────────

function BringCard({
  pokemon,
  picked,
  disabled,
  onToggle,
  playerColor,
}: {
  pokemon: ChampionsPokemon;
  picked: boolean;
  disabled: boolean;
  onToggle: () => void;
  playerColor: string;
}) {
  const primaryColor = TYPE_COLORS[pokemon.types[0]];
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled && !picked}
      className={cn(
        "relative flex flex-col items-center rounded-xl border p-2 gap-1 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2",
        picked
          ? "border-opacity-100 scale-[1.03] shadow-lg"
          : disabled
          ? "border-white/5 bg-white/3 opacity-40 cursor-not-allowed"
          : "border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10 cursor-pointer"
      )}
      style={
        picked
          ? {
              borderColor: playerColor,
              background: playerColor + "22",
              boxShadow: `0 0 16px ${playerColor}44`,
            }
          : undefined
      }
    >
      {picked && (
        <span
          className="absolute top-1 right-1 z-10 w-4 h-4 rounded-full flex items-center justify-center"
          style={{ backgroundColor: playerColor }}
        >
          <Check className="w-2.5 h-2.5 text-white" />
        </span>
      )}
      <div
        className="w-full aspect-square relative rounded-lg overflow-hidden"
        style={{ background: primaryColor + "22" }}
      >
        <Image
          src={spriteUrl(pokemon.sprite)}
          alt={pokemon.name}
          fill
          className="object-contain p-1 drop-shadow-md"
          unoptimized
        />
      </div>
      <p className="text-[11px] font-semibold text-white/90 leading-tight text-center truncate w-full">
        {pokemon.name}
      </p>
      <div className="flex gap-0.5 flex-wrap justify-center">
        {pokemon.types.map((t) => (
          <TypeBadge key={t} type={t} />
        ))}
      </div>
    </button>
  );
}

// ── Result sprite row ────────────────────────────────────────────────────────

function ResultRow({
  label,
  pokemon,
  accent,
}: {
  label: string;
  pokemon: ChampionsPokemon[];
  accent: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="w-1 h-5 rounded-full" style={{ backgroundColor: accent }} />
        <span className="text-sm font-semibold text-white/70">{label} brought</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {pokemon.map((p) => {
          const c = TYPE_COLORS[p.types[0]];
          return (
            <div
              key={p.id}
              className="flex flex-col items-center rounded-xl border p-2 gap-1"
              style={{ borderColor: accent + "55", background: c + "18" }}
            >
              <div
                className="w-full aspect-square relative rounded-lg overflow-hidden"
                style={{ background: c + "22" }}
              >
                <Image
                  src={spriteUrl(p.sprite)}
                  alt={p.name}
                  fill
                  className="object-contain p-1 drop-shadow-lg"
                  unoptimized
                />
              </div>
              <p className="text-[11px] font-semibold text-white/90 text-center truncate w-full">
                {p.name}
              </p>
              <div className="flex gap-0.5 flex-wrap justify-center">
                {p.types.map((t) => (
                  <TypeBadge key={t} type={t} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Phase indicator ───────────────────────────────────────────────────────────

function PhaseBar({ phase }: { phase: Phase }) {
  const steps: { key: Phase[]; label: string }[] = [
    { key: ["show-p1", "show-p2"], label: "Show teams" },
    { key: ["pick"], label: "Pick 4" },
    { key: ["result"], label: "Result" },
  ];

  const activeStep =
    phase === "result"
      ? 2
      : phase === "pick"
      ? 1
      : 0;

  return (
    <div className="flex items-center gap-0 w-full max-w-xs mx-auto">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center flex-1">
          <div
            className={cn(
              "flex-1 flex flex-col items-center gap-1",
              i < activeStep ? "opacity-50" : ""
            )}
          >
            <div
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all",
                i === activeStep
                  ? "bg-violet-500 text-white shadow-[0_0_10px_rgba(124,58,237,0.6)]"
                  : i < activeStep
                  ? "bg-violet-800/40 text-violet-400"
                  : "bg-white/10 text-white/30"
              )}
            >
              {i < activeStep ? <Check className="w-3 h-3" /> : i + 1}
            </div>
            <span
              className={cn(
                "text-[10px] font-medium whitespace-nowrap",
                i === activeStep ? "text-white/80" : "text-white/30"
              )}
            >
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={cn(
                "h-px flex-1 mx-1 mb-4 transition-colors",
                i < activeStep ? "bg-violet-500/50" : "bg-white/10"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ── Roster picker panel ───────────────────────────────────────────────────────

function RosterPicker({
  playerLabel,
  accentColor,
  selected,
  onToggle,
}: {
  playerLabel: string;
  accentColor: string;
  selected: ChampionsPokemon[];
  onToggle: (p: ChampionsPokemon) => void;
}) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return ROSTER;
    return ROSTER.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.types.some((t) => t.includes(q))
    );
  }, [search]);

  const selectedIds = useMemo(() => new Set(selected.map((p) => p.id)), [selected]);

  return (
    <div className="flex flex-col gap-3 min-h-0">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-6 rounded-full" style={{ backgroundColor: accentColor }} />
          <span className="font-heading font-bold text-white text-base">{playerLabel}</span>
        </div>
        <span
          className={cn(
            "text-xs font-bold px-2 py-0.5 rounded-full",
            selected.length === TEAM_SIZE
              ? "bg-emerald-500/20 text-emerald-400"
              : "bg-white/10 text-white/50"
          )}
        >
          {selected.length} / {TEAM_SIZE}
        </span>
      </div>

      {/* Selected team preview */}
      {selected.length > 0 && (
        <div className="flex gap-1.5 flex-wrap">
          {selected.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => onToggle(p)}
              className="flex items-center gap-1 px-2 py-1 rounded-lg border border-white/10 bg-white/5 hover:border-red-400/50 hover:bg-red-500/10 transition-colors group"
            >
              <div className="relative w-5 h-5">
                <Image src={spriteUrl(p.sprite)} alt={p.name} fill className="object-contain" unoptimized />
              </div>
              <span className="text-[10px] font-medium text-white/70 group-hover:text-red-400 transition-colors">
                {p.name}
              </span>
              <X className="w-2.5 h-2.5 text-white/30 group-hover:text-red-400 transition-colors" />
            </button>
          ))}
        </div>
      )}

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
        <input
          type="text"
          placeholder="Search by name or type…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-lg pl-8 pr-3 py-2 text-sm text-white/80 placeholder:text-white/25 focus:outline-none focus:border-violet-400/60 focus:bg-white/8 transition-colors"
        />
        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60"
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Grid */}
      <div className="overflow-y-auto flex-1 min-h-0" style={{ maxHeight: "340px" }}>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-5 xl:grid-cols-6 gap-1.5 pr-1">
          {filtered.map((p) => (
            <RosterCard
              key={p.id}
              pokemon={p}
              selected={selectedIds.has(p.id)}
              disabled={selected.length >= TEAM_SIZE && !selectedIds.has(p.id)}
              onToggle={() => onToggle(p)}
            />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-white/30 text-sm py-8">
            No Pokemon match &ldquo;{search}&rdquo;
          </p>
        )}
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function DraftPage() {
  const [phase, setPhase] = useState<Phase>("show-p1");
  const [p1, setP1] = useState<PlayerState>({ team: [], brings: new Set() });
  const [p2, setP2] = useState<PlayerState>({ team: [], brings: new Set() });
  const [copied, setCopied] = useState(false);

  // ── Team selection handlers ────────────────────────────────────────────────

  const toggleP1 = useCallback(
    (pokemon: ChampionsPokemon) => {
      setP1((prev) => {
        const next = [...prev.team];
        const idx = next.findIndex((p) => p.id === pokemon.id);
        if (idx >= 0) {
          next.splice(idx, 1);
        } else if (next.length < TEAM_SIZE) {
          next.push(pokemon);
        }
        return { ...prev, team: next };
      });
    },
    []
  );

  const toggleP2 = useCallback(
    (pokemon: ChampionsPokemon) => {
      setP2((prev) => {
        const next = [...prev.team];
        const idx = next.findIndex((p) => p.id === pokemon.id);
        if (idx >= 0) {
          next.splice(idx, 1);
        } else if (next.length < TEAM_SIZE) {
          next.push(pokemon);
        }
        return { ...prev, team: next };
      });
    },
    []
  );

  // ── Bring selection handlers ───────────────────────────────────────────────

  const toggleBring = useCallback(
    (player: 1 | 2, pokemonId: number) => {
      const setter = player === 1 ? setP1 : setP2;
      setter((prev) => {
        const next = new Set(prev.brings);
        if (next.has(pokemonId)) {
          next.delete(pokemonId);
        } else if (next.size < BRING_SIZE) {
          next.add(pokemonId);
        }
        return { ...prev, brings: next };
      });
    },
    []
  );

  // ── Navigation ─────────────────────────────────────────────────────────────

  const canAdvanceFromShowP1 = p1.team.length === TEAM_SIZE;
  const canAdvanceFromShowP2 = p2.team.length === TEAM_SIZE;
  const canConfirmPick = p1.brings.size === BRING_SIZE && p2.brings.size === BRING_SIZE;

  const handleReset = useCallback(() => {
    setPhase("show-p1");
    setP1({ team: [], brings: new Set() });
    setP2({ team: [], brings: new Set() });
    setCopied(false);
  }, []);

  const handleResetPicks = useCallback(() => {
    setPhase("pick");
    setP1((prev) => ({ ...prev, brings: new Set() }));
    setP2((prev) => ({ ...prev, brings: new Set() }));
    setCopied(false);
  }, []);

  // ── Clipboard ──────────────────────────────────────────────────────────────

  const handleCopy = useCallback(() => {
    const p1Brings = p1.team.filter((p) => p1.brings.has(p.id));
    const p2Brings = p2.team.filter((p) => p2.brings.has(p.id));
    const text = [
      "=== VGC Draft Result ===",
      "",
      "Player 1 brought:",
      p1Brings.map((p) => `  - ${p.name} (${p.types.join("/")})`).join("\n"),
      "",
      "Player 2 brought:",
      p2Brings.map((p) => `  - ${p.name} (${p.types.join("/")})`).join("\n"),
    ].join("\n");
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [p1, p2]);

  // ── Derived ────────────────────────────────────────────────────────────────

  const p1Brings = useMemo(
    () => p1.team.filter((p) => p1.brings.has(p.id)),
    [p1]
  );
  const p2Brings = useMemo(
    () => p2.team.filter((p) => p2.brings.has(p.id)),
    [p2]
  );

  const P1_COLOR = "#7c3aed"; // violet — project neon-purple
  const P2_COLOR = "#eab308"; // gold — project neon-gold

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <main className="min-h-screen bg-[#0d1117] text-white pb-16">
      {/* ── Top bar ── */}
      <div className="sticky top-0 z-40 bg-[#0d1117]/90 backdrop-blur-md border-b border-white/8 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center">
              <Swords className="w-4 h-4 text-violet-400" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-white text-sm leading-tight">Draft Simulator</h1>
              <p className="text-[10px] text-white/40 leading-tight">Bring 6, Pick 4</p>
            </div>
          </div>
          <PhaseBar phase={phase} />
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white/90 text-xs transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            Reset
          </button>
        </div>
      </div>

      {/* ── Phase content ── */}
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <AnimatePresence mode="wait">

          {/* ── Phase: show-p1 ── */}
          {phase === "show-p1" && (
            <motion.div
              key="show-p1"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.22 }}
              className="flex flex-col gap-5"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: P1_COLOR }} />
                <h2 className="font-heading font-bold text-lg text-white">
                  Player 1 — choose your 6
                </h2>
                <span className="text-xs text-white/40 ml-auto hidden sm:block">
                  Pick the Pokemon you&rsquo;re bringing to the match
                </span>
              </div>
              <RosterPicker
                playerLabel="Player 1"
                accentColor={P1_COLOR}
                selected={p1.team}
                onToggle={toggleP1}
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  disabled={!canAdvanceFromShowP1}
                  onClick={() => setPhase("show-p2")}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all",
                    canAdvanceFromShowP1
                      ? "bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_16px_rgba(124,58,237,0.4)] hover:shadow-[0_0_24px_rgba(124,58,237,0.6)]"
                      : "bg-white/5 text-white/25 cursor-not-allowed"
                  )}
                >
                  Confirm team
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ── Phase: show-p2 ── */}
          {phase === "show-p2" && (
            <motion.div
              key="show-p2"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.22 }}
              className="flex flex-col gap-5"
            >
              {/* P1 team confirmed summary */}
              <div className="rounded-xl border border-white/8 bg-white/3 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-4 rounded-full" style={{ backgroundColor: P1_COLOR }} />
                  <span className="text-xs font-semibold text-white/60">Player 1&rsquo;s team (confirmed)</span>
                  <Shield className="w-3 h-3 text-white/20 ml-auto" />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {p1.team.map((p) => (
                    <div key={p.id} className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20">
                      <div className="relative w-5 h-5 shrink-0">
                        <Image src={spriteUrl(p.sprite)} alt={p.name} fill className="object-contain" unoptimized />
                      </div>
                      <span className="text-[10px] font-medium text-white/70">{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: P2_COLOR }} />
                <h2 className="font-heading font-bold text-lg text-white">
                  Player 2 — choose your 6
                </h2>
              </div>
              <RosterPicker
                playerLabel="Player 2"
                accentColor={P2_COLOR}
                selected={p2.team}
                onToggle={toggleP2}
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setPhase("show-p1")}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Back
                </button>
                <button
                  type="button"
                  disabled={!canAdvanceFromShowP2}
                  onClick={() => setPhase("pick")}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all",
                    canAdvanceFromShowP2
                      ? "text-white shadow-[0_0_16px_rgba(234,179,8,0.3)] hover:shadow-[0_0_24px_rgba(234,179,8,0.5)]"
                      : "bg-white/5 text-white/25 cursor-not-allowed"
                  )}
                  style={
                    canAdvanceFromShowP2
                      ? { backgroundColor: P2_COLOR, color: "#0d1117" }
                      : undefined
                  }
                >
                  Confirm team
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ── Phase: pick ── */}
          {phase === "pick" && (
            <motion.div
              key="pick"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-6"
            >
              {/* VS header */}
              <div className="flex items-center justify-center gap-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-5 rounded-full" style={{ backgroundColor: P1_COLOR }} />
                  <span className="font-heading font-bold text-white">Player 1</span>
                  <span
                    className={cn(
                      "text-xs font-bold px-2 py-0.5 rounded-full",
                      p1.brings.size === BRING_SIZE
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-white/10 text-white/50"
                    )}
                  >
                    {p1.brings.size} / {BRING_SIZE}
                  </span>
                </div>
                <div className="relative px-3 py-1">
                  <span className="font-heading font-black text-2xl text-white/20 tracking-widest">VS</span>
                  <div className="absolute inset-0 blur-lg bg-white/5 rounded-full" />
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "text-xs font-bold px-2 py-0.5 rounded-full",
                      p2.brings.size === BRING_SIZE
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-white/10 text-white/50"
                    )}
                  >
                    {p2.brings.size} / {BRING_SIZE}
                  </span>
                  <span className="font-heading font-bold text-white">Player 2</span>
                  <div className="w-1.5 h-5 rounded-full" style={{ backgroundColor: P2_COLOR }} />
                </div>
              </div>

              {/* Two team grids side by side */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2px_1fr] gap-4 lg:gap-0">
                {/* P1 picks */}
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-medium text-white/40 text-center lg:text-left">
                    Click to select 4 to bring
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {p1.team.map((pokemon) => (
                      <BringCard
                        key={pokemon.id}
                        pokemon={pokemon}
                        picked={p1.brings.has(pokemon.id)}
                        disabled={p1.brings.size >= BRING_SIZE}
                        onToggle={() => toggleBring(1, pokemon.id)}
                        playerColor={P1_COLOR}
                      />
                    ))}
                  </div>
                </div>

                {/* Center divider */}
                <div className="hidden lg:flex flex-col items-center justify-center mx-6">
                  <div
                    className="w-px flex-1 opacity-20"
                    style={{
                      background: `linear-gradient(to bottom, transparent, ${P1_COLOR}, #ffffff44, ${P2_COLOR}, transparent)`,
                    }}
                  />
                </div>
                <div className="block lg:hidden h-px w-full bg-white/8" />

                {/* P2 picks */}
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-medium text-white/40 text-center lg:text-right">
                    Click to select 4 to bring
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {p2.team.map((pokemon) => (
                      <BringCard
                        key={pokemon.id}
                        pokemon={pokemon}
                        picked={p2.brings.has(pokemon.id)}
                        disabled={p2.brings.size >= BRING_SIZE}
                        onToggle={() => toggleBring(2, pokemon.id)}
                        playerColor={P2_COLOR}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  disabled={!canConfirmPick}
                  onClick={() => setPhase("result")}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all",
                    canConfirmPick
                      ? "bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.5)]"
                      : "bg-white/5 text-white/25 cursor-not-allowed"
                  )}
                >
                  <Users className="w-4 h-4" />
                  Reveal picks
                </button>
              </div>
            </motion.div>
          )}

          {/* ── Phase: result ── */}
          {phase === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-8"
            >
              {/* VS header */}
              <div className="text-center">
                <p className="text-xs font-medium text-white/30 uppercase tracking-widest mb-1">Final lineup</p>
                <h2 className="font-heading font-black text-3xl text-white tracking-tight">
                  Match is set
                </h2>
              </div>

              {/* Result cards */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-6 items-start">
                <ResultRow label="Player 1" pokemon={p1Brings} accent={P1_COLOR} />

                {/* VS divider */}
                <div className="hidden lg:flex flex-col items-center justify-center self-center px-2">
                  <span className="font-heading font-black text-4xl text-white/10 tracking-widest">VS</span>
                </div>

                <ResultRow label="Player 2" pokemon={p2Brings} accent={P2_COLOR} />
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-sm transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy picks
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleResetPicks}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Try different picks
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600/20 border border-violet-500/30 hover:bg-violet-600/30 text-violet-300 hover:text-violet-200 text-sm transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  New match
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </main>
  );
}
