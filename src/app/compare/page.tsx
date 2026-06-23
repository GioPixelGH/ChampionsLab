"use client";

// ═══════════════════════════════════════════════════════════════════════════════
// CHAMPIONS LAB - TEAM COMPARISON TOOL
// Side-by-side analysis: speed tiers, type coverage, archetypes, weaknesses
// ═══════════════════════════════════════════════════════════════════════════════

import { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "@/lib/motion";
import {
  ChevronDown, Link, X, AlertTriangle, Zap, Shield, Swords,
  BarChart3, Check, Loader2,
  Users, TrendingUp,
} from "lucide-react";
import { inflateRaw } from "pako";
import { getSavedTeams, deserializeTeam } from "@/lib/storage";
import type { SavedTeam, SavedTeamSlot } from "@/lib/storage";
import type { ChampionsPokemon, PokemonType } from "@/lib/types";
import { TYPE_COLORS } from "@/lib/types";
import { calculateStats } from "@/lib/engine/stat-calc";
import { detectArchetypes, getWeaknesses, teamTypeCoverage } from "@/lib/engine";
import { spriteUrl } from "@/lib/sprite-url";
import { cn } from "@/lib/utils";

// ── Constants ──────────────────────────────────────────────────────────────

const ALL_TYPES: PokemonType[] = [
  "normal","fire","water","electric","grass","ice",
  "fighting","poison","ground","flying","psychic","bug",
  "rock","ghost","dragon","dark","steel","fairy",
];

const EMPTY_SP = { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 };

// ── Types ──────────────────────────────────────────────────────────────────

type MobileTab = "teamA" | "teamB" | "comparison";

interface ResolvedMember {
  pokemon: ChampionsPokemon;
  speed: number;
}

interface TeamData {
  team: SavedTeam;
  members: ResolvedMember[];
  archetypes: string[];
  weaknesses: PokemonType[];
  coverageMap: Record<PokemonType, number>;
}

// ── Helper: decode share URL format (same as team-builder) ────────────────

function decodeShareUrl(raw: string): SavedTeam | null {
  try {
    const url = new URL(raw.includes("://") ? raw : `https://x.com?${raw}`);
    const params = raw.includes("://") ? url.searchParams : new URLSearchParams(raw);

    const tParam = params.get("t");
    const teamParam = params.get("team");

    let data: { n?: string; s: Array<{ p: number; a?: string; t?: string; m: string[]; sp: number[]; te?: string; i?: string; mg?: boolean; mgi?: number; pa?: string }> };

    if (tParam) {
      const b64 = tParam.replace(/-/g, "+").replace(/_/g, "/");
      const binary = atob(b64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      data = JSON.parse(new TextDecoder().decode(inflateRaw(bytes)));
    } else if (teamParam) {
      data = JSON.parse(atob(teamParam));
    } else {
      return null;
    }

    if (!data.s || !Array.isArray(data.s)) return null;

    const slots: SavedTeamSlot[] = data.s.map((s) => ({
      pokemonId: s.p,
      ability: s.a,
      nature: s.t,
      moves: s.m ?? [],
      statPoints: s.sp
        ? { hp: s.sp[0], attack: s.sp[1], defense: s.sp[2], spAtk: s.sp[3], spDef: s.sp[4], speed: s.sp[5] }
        : { ...EMPTY_SP },
      teraType: s.te as PokemonType | undefined,
      item: s.i,
      isMega: s.mg,
      megaFormIndex: s.mgi,
      preMegaAbility: s.pa,
    }));

    return {
      id: `url-${Date.now()}`,
      name: data.n ?? "Shared Team",
      slots,
      regulation: undefined,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
  } catch {
    return null;
  }
}

// ── Helper: resolve SavedTeam to TeamData ─────────────────────────────────

function resolveTeamData(team: SavedTeam): TeamData {
  const teamSlots = deserializeTeam(team.slots);

  const members: ResolvedMember[] = teamSlots
    .filter((s) => s.pokemon !== null)
    .map((s) => {
      const pokemon = s.pokemon!;
      const stats = calculateStats(
        pokemon.baseStats,
        s.statPoints ?? EMPTY_SP,
        (s.nature as Parameters<typeof calculateStats>[2]) ?? "Hardy"
      );
      return { pokemon, speed: stats.speed };
    });

  const pokemons = members.map((m) => m.pokemon);

  const archetypeProfiles = detectArchetypes(pokemons);
  const archetypes = archetypeProfiles.length > 0
    ? archetypeProfiles.map((a) => a.archetype.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()))
    : ["Balance"];

  // Aggregate weaknesses across all team members
  const weaknessCounts: Record<string, number> = {};
  for (const m of members) {
    for (const w of getWeaknesses(m.pokemon.types)) {
      weaknessCounts[w] = (weaknessCounts[w] ?? 0) + 1;
    }
  }
  const weaknesses = ALL_TYPES.filter((t) => (weaknessCounts[t] ?? 0) >= 2);

  // Type coverage from moves
  const moveTypeSets = members.map((m) =>
    m.pokemon.moves.filter((mv) => mv.category !== "status").map((mv) => mv.type)
  );
  const coverageMap = teamTypeCoverage(moveTypeSets);

  return { team, members, archetypes, weaknesses, coverageMap };
}

// ── Sub-components ────────────────────────────────────────────────────────

function TypeBadge({ type }: { type: PokemonType }) {
  const color = TYPE_COLORS[type];
  return (
    <span
      className="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide text-white"
      style={{ backgroundColor: color }}
    >
      {type}
    </span>
  );
}

function TierBadge({ tier }: { tier?: string }) {
  if (!tier) return null;
  const colors: Record<string, string> = {
    Z: "bg-amber-500 text-black",
    S: "bg-red-500 text-white",
    A: "bg-orange-500 text-white",
    B: "bg-yellow-500 text-black",
    C: "bg-green-500 text-white",
    D: "bg-slate-500 text-white",
  };
  return (
    <span className={cn("inline-block px-1 py-0.5 rounded text-[10px] font-bold", colors[tier] ?? "bg-slate-500 text-white")}>
      {tier}
    </span>
  );
}

function PokemonCard({ member }: { member: ResolvedMember }) {
  const { pokemon } = member;
  return (
    <div className="flex items-center gap-2 py-1.5 px-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
      <div className="relative w-10 h-10 shrink-0">
        <Image
          src={spriteUrl(pokemon.sprite)}
          alt={pokemon.name}
          fill
          className="object-contain drop-shadow-sm"
          unoptimized
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1 flex-wrap">
          <span className="text-sm font-semibold text-foreground truncate">{pokemon.name}</span>
          <TierBadge tier={pokemon.tier} />
        </div>
        <div className="flex gap-1 mt-0.5 flex-wrap">
          {pokemon.types.map((t) => <TypeBadge key={t} type={t} />)}
        </div>
      </div>
      <div className="text-right shrink-0">
        <div className="text-xs text-muted-foreground">Spe</div>
        <div className="text-sm font-mono font-bold text-foreground">{member.speed}</div>
      </div>
    </div>
  );
}

function TeamSelector({
  label,
  teams,
  selectedId,
  onChange,
  onLoadFromUrl,
}: {
  label: string;
  teams: SavedTeam[];
  selectedId: string | null;
  onChange: (id: string | null) => void;
  onLoadFromUrl: (team: SavedTeam) => void;
}) {
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [urlValue, setUrlValue] = useState("");
  const [urlError, setUrlError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLoadUrl = useCallback(() => {
    if (!urlValue.trim()) return;
    setLoading(true);
    setUrlError(null);
    setTimeout(() => {
      const result = decodeShareUrl(urlValue.trim());
      if (result) {
        onLoadFromUrl(result);
        setUrlValue("");
        setShowUrlInput(false);
      } else {
        setUrlError("Could not decode team from URL. Make sure it is a valid Champions Lab share link.");
      }
      setLoading(false);
    }, 50);
  }, [urlValue, onLoadFromUrl]);

  return (
    <div className="flex flex-col gap-3">
      {/* Label */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
          <Users className="w-4 h-4 text-primary" />
          {label}
        </h2>
        <button
          onClick={() => { setShowUrlInput((v) => !v); setUrlError(null); }}
          className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
        >
          <Link className="w-3 h-3" />
          Load from URL
        </button>
      </div>

      {/* URL input */}
      <AnimatePresence>
        {showUrlInput && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={urlValue}
                onChange={(e) => setUrlValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLoadUrl()}
                placeholder="Paste share link here…"
                className="flex-1 text-sm px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
              />
              <button
                onClick={handleLoadUrl}
                disabled={loading || !urlValue.trim()}
                className="px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium disabled:opacity-50 hover:bg-primary/90 transition-colors"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Load"}
              </button>
              <button
                onClick={() => setShowUrlInput(false)}
                className="px-2 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {urlError && (
              <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                {urlError}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dropdown */}
      <div className="relative">
        <select
          value={selectedId ?? ""}
          onChange={(e) => onChange(e.target.value || null)}
          className="w-full appearance-none bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 pr-8 text-sm text-foreground focus:outline-none focus:border-primary/50 cursor-pointer"
        >
          <option value="">— Select a saved team —</option>
          {teams.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}{t.regulation ? ` (${t.regulation})` : ""}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
      </div>

      {selectedId && (
        <button
          onClick={() => onChange(null)}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors text-left flex items-center gap-1"
        >
          <X className="w-3 h-3" /> Clear selection
        </button>
      )}
    </div>
  );
}

function TeamPanel({ data, label }: { data: TeamData | null; label: string }) {
  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[200px] gap-3 text-muted-foreground">
        <Users className="w-8 h-8 opacity-40" />
        <p className="text-sm">Select or load a team to see {label}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="mb-1 px-1">
        <h3 className="font-semibold text-foreground">{data.team.name}</h3>
        {data.team.regulation && (
          <span className="text-xs text-muted-foreground">{data.team.regulation}</span>
        )}
      </div>
      {data.members.map((m) => (
        <PokemonCard key={m.pokemon.id} member={m} />
      ))}
      {data.members.length === 0 && (
        <p className="text-sm text-muted-foreground px-1">No Pokémon in this team.</p>
      )}
    </div>
  );
}

// ── Speed Tiers Comparison ────────────────────────────────────────────────

function SpeedTiersComparison({ dataA, dataB }: { dataA: TeamData; dataB: TeamData }) {
  const allEntries = [
    ...dataA.members.map((m) => ({ ...m, team: "A" as const })),
    ...dataB.members.map((m) => ({ ...m, team: "B" as const })),
  ].sort((a, b) => b.speed - a.speed);

  return (
    <div className="flex flex-col gap-1.5">
      {allEntries.map((entry, i) => (
        <div key={`${entry.team}-${entry.pokemon.id}-${i}`} className="flex items-center gap-2">
          <span
            className={cn(
              "shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold",
              entry.team === "A" ? "bg-blue-500/20 text-blue-400" : "bg-purple-500/20 text-purple-400"
            )}
          >
            {entry.team}
          </span>
          <div className="relative flex-1 h-6 rounded overflow-hidden bg-white/5">
            <div
              className={cn(
                "absolute inset-y-0 left-0 rounded transition-all",
                entry.team === "A" ? "bg-blue-500/30" : "bg-purple-500/30"
              )}
              style={{ width: `${Math.min(100, (entry.speed / 220) * 100)}%` }}
            />
            <div className="absolute inset-0 flex items-center px-2 gap-2">
              <span className="text-xs font-medium text-foreground truncate">{entry.pokemon.name}</span>
              <span className="text-xs font-mono text-muted-foreground ml-auto">{entry.speed}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Type Coverage Comparison ───────────────────────────────────────────────

function TypeCoverageComparison({ dataA, dataB }: { dataA: TeamData; dataB: TeamData }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr>
            <th className="text-left py-1 pr-3 text-muted-foreground font-medium">Type</th>
            <th className="text-center py-1 px-2 text-blue-400 font-medium">A</th>
            <th className="text-center py-1 px-2 text-purple-400 font-medium">B</th>
          </tr>
        </thead>
        <tbody>
          {ALL_TYPES.map((type) => {
            const covA = dataA.coverageMap[type] ?? 1;
            const covB = dataB.coverageMap[type] ?? 1;
            const aSE = covA >= 2;
            const bSE = covB >= 2;
            const shared = aSE && bSE;
            const gap = !aSE && !bSE;
            return (
              <tr key={type} className={cn("border-t border-white/5", gap && "opacity-50")}>
                <td className="py-1 pr-3">
                  <TypeBadge type={type} />
                </td>
                <td className="text-center py-1 px-2">
                  {aSE ? (
                    <Check className={cn("w-3.5 h-3.5 mx-auto", shared ? "text-green-400" : "text-blue-400")} />
                  ) : (
                    <span className="text-muted-foreground/40">—</span>
                  )}
                </td>
                <td className="text-center py-1 px-2">
                  {bSE ? (
                    <Check className={cn("w-3.5 h-3.5 mx-auto", shared ? "text-green-400" : "text-purple-400")} />
                  ) : (
                    <span className="text-muted-foreground/40">—</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ── Weaknesses Comparison ──────────────────────────────────────────────────

function WeaknessesComparison({ dataA, dataB }: { dataA: TeamData; dataB: TeamData }) {
  const sharedWeaknesses = dataA.weaknesses.filter((w) => dataB.weaknesses.includes(w));

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        {(["A", "B"] as const).map((side) => {
          const data = side === "A" ? dataA : dataB;
          return (
            <div key={side}>
              <div className={cn("text-xs font-semibold mb-2", side === "A" ? "text-blue-400" : "text-purple-400")}>
                Team {side} — {data.team.name}
              </div>
              <div className="flex flex-wrap gap-1">
                {data.weaknesses.length === 0 ? (
                  <span className="text-xs text-muted-foreground">No shared weaknesses</span>
                ) : (
                  data.weaknesses.map((w) => (
                    <span
                      key={w}
                      className={cn(
                        "inline-block px-1.5 py-0.5 rounded text-[10px] font-bold uppercase text-white ring-1 ring-offset-1 ring-offset-transparent",
                        sharedWeaknesses.includes(w) ? "ring-red-400" : "ring-transparent"
                      )}
                      style={{ backgroundColor: TYPE_COLORS[w] }}
                      title={sharedWeaknesses.includes(w) ? "Shared weakness!" : undefined}
                    >
                      {w}
                    </span>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {sharedWeaknesses.length > 0 && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
            <span className="text-sm font-semibold text-red-400">
              {sharedWeaknesses.length} shared {sharedWeaknesses.length === 1 ? "weakness" : "weaknesses"}
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            {sharedWeaknesses.map((w) => (
              <span
                key={w}
                className="inline-block px-2 py-1 rounded text-[11px] font-bold uppercase text-white"
                style={{ backgroundColor: TYPE_COLORS[w] }}
              >
                {w}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Archetypes Comparison ──────────────────────────────────────────────────

function ArchetypesComparison({ dataA, dataB }: { dataA: TeamData; dataB: TeamData }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {(["A", "B"] as const).map((side) => {
        const data = side === "A" ? dataA : dataB;
        return (
          <div key={side}>
            <div className={cn("text-xs font-semibold mb-2", side === "A" ? "text-blue-400" : "text-purple-400")}>
              Team {side} — {data.team.name}
            </div>
            <div className="flex flex-col gap-1.5">
              {data.archetypes.map((arch) => (
                <div
                  key={arch}
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/5 text-sm"
                >
                  <TrendingUp className={cn("w-3.5 h-3.5 shrink-0", side === "A" ? "text-blue-400" : "text-purple-400")} />
                  <span className="text-foreground capitalize">{arch}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Comparison Section ────────────────────────────────────────────────────

function ComparisonSection({ dataA, dataB }: { dataA: TeamData | null; dataB: TeamData | null }) {
  if (!dataA || !dataB) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[200px] gap-3 text-muted-foreground text-center px-4">
        <BarChart3 className="w-8 h-8 opacity-40" />
        <p className="text-sm">Select both Team A and Team B to see the comparison.</p>
      </div>
    );
  }

  const sections = [
    {
      id: "speed",
      icon: <Zap className="w-4 h-4" />,
      title: "Speed Tiers",
      content: <SpeedTiersComparison dataA={dataA} dataB={dataB} />,
    },
    {
      id: "coverage",
      icon: <Swords className="w-4 h-4" />,
      title: "Type Coverage",
      content: <TypeCoverageComparison dataA={dataA} dataB={dataB} />,
    },
    {
      id: "archetypes",
      icon: <TrendingUp className="w-4 h-4" />,
      title: "Team Archetypes",
      content: <ArchetypesComparison dataA={dataA} dataB={dataB} />,
    },
    {
      id: "weaknesses",
      icon: <Shield className="w-4 h-4" />,
      title: "Weaknesses",
      content: <WeaknessesComparison dataA={dataA} dataB={dataB} />,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {sections.map((s) => (
        <section
          key={s.id}
          className="rounded-xl bg-white/5 border border-white/10 overflow-hidden"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
            <span className="text-primary">{s.icon}</span>
            <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
          </div>
          <div className="p-4">{s.content}</div>
        </section>
      ))}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────

export default function ComparePage() {
  const [savedTeams, setSavedTeams] = useState<SavedTeam[]>([]);
  const [selectedIdA, setSelectedIdA] = useState<string | null>(null);
  const [selectedIdB, setSelectedIdB] = useState<string | null>(null);
  // URL-loaded teams (stored separately so they can be swapped out)
  const [urlTeamA, setUrlTeamA] = useState<SavedTeam | null>(null);
  const [urlTeamB, setUrlTeamB] = useState<SavedTeam | null>(null);
  const [mobileTab, setMobileTab] = useState<MobileTab>("teamA");

  // Load saved teams from storage on mount
  useEffect(() => {
    const teams = getSavedTeams();
    setSavedTeams(teams);
  }, []);

  // Resolve the active team for each side (URL team takes priority over saved selection)
  const activeTeamA = useMemo<SavedTeam | null>(() => {
    if (urlTeamA) return urlTeamA;
    if (!selectedIdA) return null;
    return savedTeams.find((t) => t.id === selectedIdA) ?? null;
  }, [urlTeamA, selectedIdA, savedTeams]);

  const activeTeamB = useMemo<SavedTeam | null>(() => {
    if (urlTeamB) return urlTeamB;
    if (!selectedIdB) return null;
    return savedTeams.find((t) => t.id === selectedIdB) ?? null;
  }, [urlTeamB, selectedIdB, savedTeams]);

  const dataA = useMemo<TeamData | null>(() => {
    if (!activeTeamA) return null;
    return resolveTeamData(activeTeamA);
  }, [activeTeamA]);

  const dataB = useMemo<TeamData | null>(() => {
    if (!activeTeamB) return null;
    return resolveTeamData(activeTeamB);
  }, [activeTeamB]);

  const handleSelectA = useCallback((id: string | null) => {
    setSelectedIdA(id);
    setUrlTeamA(null);
  }, []);

  const handleSelectB = useCallback((id: string | null) => {
    setSelectedIdB(id);
    setUrlTeamB(null);
  }, []);

  const TABS: { id: MobileTab; label: string }[] = [
    { id: "teamA", label: "Team A" },
    { id: "teamB", label: "Team B" },
    { id: "comparison", label: "Compare" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-white/10 bg-white/5 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          <BarChart3 className="w-5 h-5 text-primary shrink-0" />
          <div>
            <h1 className="text-base font-bold text-foreground leading-tight">Team Comparison</h1>
            <p className="text-xs text-muted-foreground hidden sm:block">
              Side-by-side analysis of speed tiers, type coverage, archetypes and weaknesses
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Tabs */}
      <div className="lg:hidden border-b border-white/10 bg-background sticky top-[49px] z-10">
        <div className="flex">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setMobileTab(tab.id)}
              className={cn(
                "flex-1 py-2.5 text-sm font-medium transition-colors",
                mobileTab === tab.id
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Desktop: 3-column layout */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1fr_1fr] gap-6">
          {/* Team A Column */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl bg-white/5 border border-blue-500/20 p-4">
              <TeamSelector
                label="Team A"
                teams={savedTeams}
                selectedId={urlTeamA ? `url-a` : selectedIdA}
                onChange={handleSelectA}
                onLoadFromUrl={(team) => { setUrlTeamA(team); setSelectedIdA(null); }}
              />
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <TeamPanel data={dataA} label="Team A" />
            </div>
          </div>

          {/* Team B Column */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl bg-white/5 border border-purple-500/20 p-4">
              <TeamSelector
                label="Team B"
                teams={savedTeams}
                selectedId={urlTeamB ? `url-b` : selectedIdB}
                onChange={handleSelectB}
                onLoadFromUrl={(team) => { setUrlTeamB(team); setSelectedIdB(null); }}
              />
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <TeamPanel data={dataB} label="Team B" />
            </div>
          </div>

          {/* Comparison Column */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl bg-white/5 border border-primary/20 p-4">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-primary" />
                Analysis
              </h2>
              {!dataA && !dataB && (
                <p className="text-xs text-muted-foreground mt-1">Select both teams to compare</p>
              )}
            </div>
            <ComparisonSection dataA={dataA} dataB={dataB} />
          </div>
        </div>

        {/* Mobile: tabbed layout */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            {mobileTab === "teamA" && (
              <motion.div
                key="teamA"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="flex flex-col gap-4"
              >
                <div className="rounded-xl bg-white/5 border border-blue-500/20 p-4">
                  <TeamSelector
                    label="Team A"
                    teams={savedTeams}
                    selectedId={urlTeamA ? `url-a` : selectedIdA}
                    onChange={handleSelectA}
                    onLoadFromUrl={(team) => { setUrlTeamA(team); setSelectedIdA(null); }}
                  />
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <TeamPanel data={dataA} label="Team A" />
                </div>
              </motion.div>
            )}

            {mobileTab === "teamB" && (
              <motion.div
                key="teamB"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="flex flex-col gap-4"
              >
                <div className="rounded-xl bg-white/5 border border-purple-500/20 p-4">
                  <TeamSelector
                    label="Team B"
                    teams={savedTeams}
                    selectedId={urlTeamB ? `url-b` : selectedIdB}
                    onChange={handleSelectB}
                    onLoadFromUrl={(team) => { setUrlTeamB(team); setSelectedIdB(null); }}
                  />
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <TeamPanel data={dataB} label="Team B" />
                </div>
              </motion.div>
            )}

            {mobileTab === "comparison" && (
              <motion.div
                key="comparison"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
              >
                <ComparisonSection dataA={dataA} dataB={dataB} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
