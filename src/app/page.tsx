"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "@/lib/motion";
import Image from "next/image";
import { LastUpdated } from "@/components/last-updated";
import { Search, SlidersHorizontal, Sparkles, PackageOpen, RotateCcw } from "lucide-react";
import { getPokemonByRegulation, getActiveRegulation, SEASONS, getRegulationById } from "@/lib/pokemon-data";
import { PokemonType, ChampionsPokemon } from "@/lib/types";
import { PokemonCard } from "@/components/pokemon-card";
import { PokemonDetailModal } from "@/components/pokemon-detail-modal";
import { SeasonTabs, SeasonInfo, SeasonRulesSection } from "@/components/season-tabs";
import { fetchMeta, matchMetaToSeed } from "@/lib/meta-service";
import type { MetaEntry } from "@/app/api/meta/route";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { useI18n } from "@/lib/i18n";
import { useIsNative } from "@/hooks/useIsNative";
import { getSettings } from "@/lib/storage";
import { computeTierMap } from "@/lib/usage-rankings-cache";

// ── Mobile-only compact Pokemon card ────────────────────────────────────────
function MobilePokemonCard({ pokemon, onClick, isNew }: { pokemon: ChampionsPokemon; onClick: (p: ChampionsPokemon) => void; isNew?: boolean }) {
  const primaryType = pokemon.types[0];
  const { tp, t } = useI18n();
  return (
    <button
      type="button"
      onClick={() => onClick(pokemon)}
      className={cn(
        "flex flex-col items-center rounded-2xl p-2 active:scale-95 transition-transform w-full border",
        isNew
          ? "bg-emerald-950/30 border-emerald-500/30"
          : "bg-white/5 border-white/10"
      )}
    >
      <div className={cn("relative w-full aspect-square flex items-center justify-center rounded-xl overflow-hidden mb-1", `radial-type-${primaryType}`)}>
        <Image
          src={pokemon.officialArt}
          alt={tp(pokemon.name)}
          width={80}
          height={80}
          className="object-contain drop-shadow-lg"
          loading="lazy"
          unoptimized
        />
        {pokemon.tier && (
          <span className={cn(
            "absolute top-1 right-1 text-[9px] font-bold px-1.5 py-0.5 rounded-md backdrop-blur-sm",
            pokemon.tier === "Z" && "bg-rose-500/20 text-rose-400 ring-1 ring-rose-500/30",
            pokemon.tier === "S" && "bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/30",
            pokemon.tier === "A" && "bg-violet-500/20 text-violet-400 ring-1 ring-violet-500/30",
            pokemon.tier === "B" && "bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/30",
            (pokemon.tier === "C" || pokemon.tier === "D") && "bg-white/10 text-gray-400 ring-1 ring-white/15",
          )}>
            {pokemon.tier}
          </span>
        )}
        <div className="absolute top-1 left-1 flex flex-col gap-0.5">
          {isNew && (
            <span className="text-[8px] font-bold px-1 py-0.5 rounded bg-emerald-500/30 text-emerald-300 ring-1 ring-emerald-500/40 backdrop-blur-sm leading-none">✦</span>
          )}
          {pokemon.hasMega && (
            <span className="text-[8px] font-bold px-1 py-0.5 rounded bg-gradient-to-r from-pink-500/30 to-violet-500/30 text-pink-300 ring-1 ring-pink-500/30 backdrop-blur-sm">M</span>
          )}
        </div>
      </div>
      <p className="text-[11px] font-semibold text-white text-center leading-tight w-full truncate px-0.5">
        {tp(pokemon.name)}
      </p>
      <div className="flex gap-0.5 mt-1 flex-wrap justify-center">
        {pokemon.types.map((type) => (
          <span key={type} className={cn("px-1.5 py-0 text-[8px] font-bold uppercase rounded text-white", `type-bg-cc-${type}`)}>
            {t(`common.types.${type}`).slice(0, 4)}
          </span>
        ))}
      </div>
    </button>
  );
}

const ALL_TYPES: PokemonType[] = [
  "normal", "fire", "water", "electric", "grass", "ice",
  "fighting", "poison", "ground", "flying", "psychic", "bug",
  "rock", "ghost", "dragon", "dark", "steel", "fairy",
];

const ALL_GENS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

type SortOption = "name" | "dex" | "tier" | "usage" | "hp" | "attack" | "defense" | "spAtk" | "spDef" | "speed" | "bst";

type StatKey = "hp" | "attack" | "defense" | "spAtk" | "spDef" | "speed";
const STAT_KEYS: { key: StatKey; label: string; color: string }[] = [
  { key: "hp", label: "HP", color: "#ff5959" },
  { key: "attack", label: "Atk", color: "#f5ac78" },
  { key: "defense", label: "Def", color: "#fae078" },
  { key: "spAtk", label: "SpA", color: "#9db7f5" },
  { key: "spDef", label: "SpD", color: "#a7db8d" },
  { key: "speed", label: "Spe", color: "#fa92b2" },
];
const EMPTY_STAT_FILTERS = { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0, bst: 0 };
type StatFilters = typeof EMPTY_STAT_FILTERS;
function getBST(p: ChampionsPokemon) { return p.baseStats.hp + p.baseStats.attack + p.baseStats.defense + p.baseStats.spAtk + p.baseStats.spDef + p.baseStats.speed; }

export default function HomePage() {
  const defaultRegulation = getSettings().defaultRegulationId || (getActiveRegulation()?.id ?? SEASONS[0]?.regulations[0]?.id ?? "M-A");
  const [activeRegulation, setActiveRegulation] = useState(defaultRegulation);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<PokemonType[]>([]);
  const [selectedGens, setSelectedGens] = useState<number[]>([]);
  const [showMegaOnly, setShowMegaOnly] = useState(false);
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("dex");
  const [statFilters, setStatFilters] = useState<StatFilters>({ ...EMPTY_STAT_FILTERS });
  const [selectedPokemon, setSelectedPokemon] = useState<ChampionsPokemon | null>(null);
  const [liveMeta, setLiveMeta] = useState<Map<number, MetaEntry>>(new Map());
  const [metaLoading, setMetaLoading] = useState(false);
  const [tierMap, setTierMap] = useState<Map<number, string>>(() => computeTierMap(defaultRegulation));
  const { t, ts, tp, tm, ta } = useI18n();
  const isNative = useIsNative();

  // All regulations in chronological order — used to detect "new" Pokémon
  const allRegsOrdered = useMemo(() => SEASONS.flatMap((s) => s.regulations), []);

  // True only from the 2nd regulation onwards (M-B, not M-A)
  const hasPreviousRegulation = useMemo(() => {
    const idx = allRegsOrdered.findIndex((r) => r.id === activeRegulation);
    return idx > 0;
  }, [activeRegulation, allRegsOrdered]);

  // IDs of Pokémon introduced exactly in the selected regulation
  const newPokemonIds = useMemo((): Set<number> => {
    if (!hasPreviousRegulation) return new Set();
    return new Set(
      getPokemonByRegulation(activeRegulation)
        .filter((p) => p.regulation === activeRegulation)
        .map((p) => p.id)
    );
  }, [activeRegulation, hasPreviousRegulation]);

  // Reset showNewOnly when switching to a regulation without a previous one
  useEffect(() => {
    if (!hasPreviousRegulation) setShowNewOnly(false);
  }, [hasPreviousRegulation]);

  useEffect(() => {
    setTierMap(computeTierMap(activeRegulation));
  }, [activeRegulation]);

  const activeRegulationLabel = useMemo(
    () => getRegulationById(activeRegulation)?.label ?? activeRegulation,
    [activeRegulation]
  );

  // Live meta from Limitless
  useEffect(() => {
    let cancelled = false;
    setMetaLoading(true);
    fetchMeta(activeRegulation).then((data) => {
      if (cancelled || !data) return;
      const seed = getPokemonByRegulation(activeRegulation);
      setLiveMeta(matchMetaToSeed(data.meta, seed));
      setMetaLoading(false);
    });
    return () => { cancelled = true; };
  }, [activeRegulation]);

  const filteredPokemon = useMemo(() => {
    let results = getPokemonByRegulation(activeRegulation);

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          tp(p.name).toLowerCase().includes(q) ||
          p.dexNumber.toString().includes(q) ||
          p.types.some((ty) => ty.includes(q) || t(`common.types.${ty}`).toLowerCase().includes(q)) ||
          p.abilities.some((a) => a.name.toLowerCase().includes(q) || ta(a.name).toLowerCase().includes(q)) ||
          p.moves.some((m) => m.name.toLowerCase().includes(q) || tm(m.name).toLowerCase().includes(q)) ||
          (p.forms?.some((f) =>
            f.name.toLowerCase().includes(q) ||
            f.abilities.some((a) => a.name.toLowerCase().includes(q) || ta(a.name).toLowerCase().includes(q))
          ) ?? false)
      );
    }

    if (selectedTypes.length > 0) {
      results = results.filter((p) =>
        selectedTypes.some((ty) => p.types.includes(ty))
      );
    }

    if (selectedGens.length > 0) {
      results = results.filter((p) => selectedGens.includes(p.generation));
    }

    if (showMegaOnly) {
      results = results.filter((p) => p.hasMega);
    }

    if (showNewOnly && hasPreviousRegulation) {
      results = results.filter((p) => newPokemonIds.has(p.id));
    }

    // Stat filters
    for (const sk of STAT_KEYS) {
      if (statFilters[sk.key] > 0) {
        results = results.filter((p) => p.baseStats[sk.key] >= statFilters[sk.key]);
      }
    }
    if (statFilters.bst > 0) {
      results = results.filter((p) => getBST(p) >= statFilters.bst);
    }

    // Apply dynamic tiers from usage-rankings cache (if available)
    if (tierMap.size > 0) {
      results = results.map((p) => {
        const t = tierMap.get(p.id) ?? "D";
        return t === p.tier ? p : { ...p, tier: t } as typeof p;
      });
    }

    const tierOrder: Record<string, number> = { Z: 0, S: 1, A: 2, B: 3, C: 4, D: 5 };
    results = [...results].sort((a, b) => {
      switch (sortBy) {
        case "name": return a.name.localeCompare(b.name);
        case "dex": return a.dexNumber - b.dexNumber;
        case "tier": {
          return (tierOrder[a.tier ?? "D"] ?? 6) - (tierOrder[b.tier ?? "D"] ?? 6);
        }
        case "usage": {
          const ua = liveMeta.get(a.id)?.usageRate ?? (a.usageRate ?? -1);
          const ub = liveMeta.get(b.id)?.usageRate ?? (b.usageRate ?? -1);
          return ub - ua;
        }
        case "hp": return b.baseStats.hp - a.baseStats.hp;
        case "attack": return b.baseStats.attack - a.baseStats.attack;
        case "defense": return b.baseStats.defense - a.baseStats.defense;
        case "spAtk": return b.baseStats.spAtk - a.baseStats.spAtk;
        case "spDef": return b.baseStats.spDef - a.baseStats.spDef;
        case "speed": return b.baseStats.speed - a.baseStats.speed;
        case "bst": return getBST(b) - getBST(a);
        default: return 0;
      }
    });

    return results;
  }, [activeRegulation, searchQuery, selectedTypes, selectedGens, showMegaOnly, showNewOnly, sortBy, statFilters, liveMeta, newPokemonIds, hasPreviousRegulation, tierMap, tp, tm, ta, t]);

  const toggleType = (type: PokemonType) => {
    trackEvent("filter_type", "pokedex", type);
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleGen = (gen: number) => {
    trackEvent("filter_gen", "pokedex", `gen_${gen}`);
    setSelectedGens((prev) =>
      prev.includes(gen) ? prev.filter((g) => g !== gen) : [...prev, gen]
    );
  };

  // ── MOBILE LAYOUT ──────────────────────────────────────────────────────────
  if (isNative) {
    const hasActiveFilters = selectedTypes.length > 0 || searchQuery || showMegaOnly || showNewOnly || selectedGens.length > 0 || Object.values(statFilters).some(v => v > 0);

    return (
      <div className="pb-24">
        {/* Sticky header */}
        <div className="sticky top-0 z-30 bg-[#0d1526]/96 backdrop-blur-md border-b border-white/10">
          <div className="px-4 pt-3 pb-2">
            {/* Title + sort row */}
            <div className="flex items-center gap-2 mb-2">
              <Image src="/logo.png" alt="Champions Lab" width={32} height={32} className="-my-1 flex-shrink-0" unoptimized />
              <h1 className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent flex-1 min-w-0">
                Pokédex
              </h1>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label={t("pokedex.filters.sortBy")}
                className="text-xs px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 cursor-pointer focus:outline-none focus:border-emerald-500/50 flex-shrink-0"
              >
                <option value="dex">Dex #</option>
                <option value="tier">Tier</option>
                <option value="name">A-Z</option>
                <option value="usage">Usage</option>
                <option value="speed">Speed</option>
                <option value="bst">BST</option>
                <option value="hp">HP</option>
                <option value="attack">Attack</option>
                <option value="defense">Defense</option>
                <option value="spAtk">Sp.Atk</option>
                <option value="spDef">Sp.Def</option>
              </select>
            </div>
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder={t("pokedex.searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:outline-none text-sm text-white placeholder:text-gray-500"
              />
            </div>
          </div>
          {/* Season tabs */}
          <div className="px-4 pb-2">
            <SeasonTabs activeRegulation={activeRegulation} onRegulationChange={setActiveRegulation} />
          </div>
          {/* Season info */}
          <div className="px-4 pb-1">
            <SeasonInfo regulationId={activeRegulation} />
          </div>
        </div>

        {/* Type filter chips */}
        <div className="flex gap-1.5 overflow-x-auto px-4 py-2.5 scrollbar-hide">
          {ALL_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => toggleType(type)}
              className={cn(
                "flex-shrink-0 px-3 py-1.5 text-[10px] font-bold uppercase rounded-lg border-[1.5px] transition-all",
                selectedTypes.includes(type)
                  ? `type-bg-cc-${type} text-white border-transparent`
                  : `type-bg-30-${type} type-color-${type} type-border-55-${type}`
              )}
            >
              {t(`common.types.${type}`)}
            </button>
          ))}
        </div>

        {/* Generation filter chips + Mega toggle */}
        <div className="flex gap-1.5 overflow-x-auto px-4 pb-2 scrollbar-hide">
          {[1,2,3,4,5,6,7,8,9].map((gen) => (
            <button
              key={gen}
              type="button"
              onClick={() => toggleGen(gen)}
              className={cn(
                "flex-shrink-0 px-2.5 py-1 text-[10px] font-bold rounded-lg border transition-all",
                selectedGens.includes(gen)
                  ? "bg-violet-500/20 border-violet-500/40 text-violet-300"
                  : "bg-white/5 border-white/10 text-gray-500"
              )}
            >
              Gen {gen}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setShowMegaOnly(!showMegaOnly)}
            className={cn(
              "flex-shrink-0 flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold rounded-lg border transition-all",
              showMegaOnly
                ? "bg-pink-500/20 border-pink-500/40 text-pink-300"
                : "bg-white/5 border-white/10 text-gray-500"
            )}
          >
            <Sparkles className="w-3 h-3" />
            Mega
          </button>
          {hasPreviousRegulation && (
            <button
              type="button"
              onClick={() => setShowNewOnly(!showNewOnly)}
              className={cn(
                "flex-shrink-0 px-2.5 py-1 text-[10px] font-bold rounded-lg border transition-all",
                showNewOnly
                  ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                  : "bg-white/5 border-white/10 text-gray-500"
              )}
            >
              ✦ Nuovi
            </button>
          )}
        </div>

        {/* Stat filters */}
        <div className="px-4 pb-2 space-y-1.5">
          {[
            { key: 'hp' as const, label: 'HP', max: 255, step: 5 },
            { key: 'attack' as const, label: 'Atk', max: 255, step: 5 },
            { key: 'defense' as const, label: 'Def', max: 255, step: 5 },
            { key: 'spAtk' as const, label: 'SpA', max: 255, step: 5 },
            { key: 'spDef' as const, label: 'SpD', max: 255, step: 5 },
            { key: 'speed' as const, label: 'Spe', max: 255, step: 5 },
          ].map(({ key, label, max, step }) => (
            <div key={key} className="flex items-center gap-2">
              <span className="text-[10px] font-semibold text-gray-400 w-8 flex-shrink-0">{label}</span>
              <input
                type="range"
                min={0}
                max={max}
                step={step}
                value={statFilters[key]}
                onChange={(e) => setStatFilters(prev => ({ ...prev, [key]: Number(e.target.value) }))}
                aria-label={label}
                className="flex-1 h-1 accent-emerald-400"
              />
              <span className={cn("text-[10px] w-8 text-right flex-shrink-0", statFilters[key] > 0 ? "text-emerald-400 font-bold" : "text-gray-600")}>
                {statFilters[key] > 0 ? `≥${statFilters[key]}` : "–"}
              </span>
            </div>
          ))}
          {/* BST */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold text-gray-400 w-8 flex-shrink-0">BST</span>
            <input
              type="range"
              min={0}
              max={800}
              step={10}
              value={statFilters.bst}
              onChange={(e) => setStatFilters(prev => ({ ...prev, bst: Number(e.target.value) }))}
              aria-label="BST"
              className="flex-1 h-1 accent-emerald-400"
            />
            <span className={cn("text-[10px] w-8 text-right flex-shrink-0", statFilters.bst > 0 ? "text-emerald-400 font-bold" : "text-gray-600")}>
              {statFilters.bst > 0 ? `≥${statFilters.bst}` : "–"}
            </span>
          </div>
        </div>

        {/* Count + clear row */}
        <div className="flex items-center justify-between px-4 pb-2">
          <span className="text-xs text-gray-500">
            {filteredPokemon.length} {filteredPokemon.length === 1 ? "Pokémon" : "Pokémon"}
            {metaLoading && <span className="ml-1 text-gray-600">…</span>}
          </span>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedTypes([]);
                setSelectedGens([]);
                setShowMegaOnly(false);
                setShowNewOnly(false);
                setStatFilters({ ...EMPTY_STAT_FILTERS });
              }}
              className="flex items-center gap-1 text-xs text-emerald-400 font-medium"
            >
              <RotateCcw className="w-3 h-3" />
              Reset
            </button>
          )}
        </div>

        {/* Pokemon 3-col grid */}
        {filteredPokemon.length > 0 ? (
          <div className="grid grid-cols-3 gap-2 px-3">
            {filteredPokemon.map((pokemon) => (
              <MobilePokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                isNew={newPokemonIds.has(pokemon.id)}
                onClick={(p) => {
                  trackEvent("pokemon_click", "pokedex", p.name);
                  setSelectedPokemon(p);
                }}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 py-20 px-8 text-center">
            <PackageOpen className="w-12 h-12 text-gray-600" />
            <div>
              <p className="font-semibold text-white">{t("pokedex.noMatch")}</p>
              <p className="text-sm text-gray-500 mt-1">{t("pokedex.adjustFilters")}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedTypes([]);
                setSelectedGens([]);
                setShowMegaOnly(false);
                setShowNewOnly(false);
                setStatFilters({ ...EMPTY_STAT_FILTERS });
              }}
              className="text-sm font-semibold text-emerald-400"
            >
              {t("common.clearAll")}
            </button>
          </div>
        )}

        {/* Reuse existing detail modal */}
        <PokemonDetailModal
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
          liveMetaEntry={selectedPokemon ? liveMeta.get(selectedPokemon.id) : undefined}
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-10 space-y-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.05, duration: 0.3 }}
          className="flex justify-center mb-2"
        >
          <Image
            src="/logo.png"
            alt="Champions Lab"
            width={200}
            height={200}
            className="drop-shadow-xl"
            priority
            unoptimized
          />
        </motion.div>
        <motion.h1
          className="text-3xl sm:text-4xl font-bold tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.25 }}
        >
          <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
            {t("pokedex.title")}
          </span>
        </motion.h1>
        <div className="flex justify-center mt-2">
          <LastUpdated page="pokedex" />
        </div>
        <motion.p
          className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.12, duration: 0.25 }}
        >
          {t("pokedex.description", { count: getPokemonByRegulation(activeRegulation).length })}
        </motion.p>

      </motion.div>

      {/* Season Rules */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.3 }}
        className="mb-8 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-gray-200/10 shadow-sm"
      >
        <div className="flex items-start">
          <div className="flex-shrink-0 px-5 py-5 border-r border-gray-100 dark:border-gray-200/10 w-56">
            <SeasonTabs activeRegulation={activeRegulation} onRegulationChange={setActiveRegulation} />
          </div>
          <div className="flex-1 min-w-0 px-6 pt-5 pb-0">
            <SeasonInfo regulationId={activeRegulation} noCard hideRules />
          </div>
        </div>
        <div className="px-6 pt-4 pb-5 border-t border-gray-100 dark:border-gray-200/10">
          <SeasonRulesSection regulationId={activeRegulation} />
        </div>
      </motion.div>

      {/* Search & Filters bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="mb-6 space-y-4"
      >
        <div className="flex gap-3 items-center">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={t("pokedex.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-[#111a2e] border border-gray-200 dark:border-gray-200/15 focus:border-violet-400 dark:focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-100 dark:focus:ring-violet-900/30 text-sm text-foreground placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all shadow-sm dark:shadow-none"
            />
          </div>

          {/* Filter toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              "p-3 rounded-xl transition-all flex items-center gap-2",
              showFilters
                ? "bg-violet-100 text-violet-700 border border-violet-300"
                : "glass glass-hover text-muted-foreground"
            )}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="hidden sm:inline text-sm">{t("common.filters")}</span>
          </button>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            aria-label={t("pokedex.filters.sortBy")}
            className="px-4 py-3 rounded-xl glass border border-gray-200 text-sm bg-transparent cursor-pointer focus:outline-none focus:border-violet-500/50"
          >
            <option value="tier">{t("pokedex.sort.tier")}</option>
            <option value="name">{t("pokedex.sort.name")}</option>
            <option value="dex">{t("pokedex.sort.dex")}</option>
            <option value="hp">{t("pokedex.sort.hp")}</option>
            <option value="attack">{t("pokedex.sort.attack")}</option>
            <option value="defense">{t("pokedex.sort.defense")}</option>
            <option value="spAtk">{t("pokedex.sort.spAtk")}</option>
            <option value="spDef">{t("pokedex.sort.spDef")}</option>
            <option value="speed">{t("pokedex.sort.speed")}</option>
            <option value="bst">{t("pokedex.sort.bst")}</option>
            <option value="usage">📊 {t("pokedex.sort.usage") || "Usage (Live)"}{metaLoading ? " …" : liveMeta.size > 0 ? ` (${liveMeta.size})` : ""}</option>
          </select>
        </div>

        {/* Expandable filters */}
        <motion.div
          initial={false}
          animate={{ height: showFilters ? "auto" : 0, opacity: showFilters ? 1 : 0 }}
          className="overflow-hidden"
        >
          <div className="glass rounded-2xl p-5 border border-gray-200/60 space-y-4">
            {/* Type filters */}
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2.5">{t("pokedex.filters.type")}</h4>
              <div className="flex flex-wrap gap-1.5">
                {ALL_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleType(type)}
                    className={cn(
                      "px-3 py-1.5 text-[11px] font-bold uppercase rounded-lg transition-all tracking-wider border-[1.5px]",
                      selectedTypes.includes(type)
                        ? `type-bg-cc-${type} text-white type-border-${type} shadow-lg`
                        : `type-bg-30-${type} type-color-${type} type-border-55-${type} hover:opacity-90`
                    )}
                  >
                    {t(`common.types.${type}`)}
                  </button>
                ))}
              </div>
            </div>

            {/* Generation filters */}
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2.5">{t("pokedex.filters.generation")}</h4>
              <div className="flex flex-wrap gap-1.5">
                {ALL_GENS.map((gen) => (
                  <button
                    key={gen}
                    onClick={() => toggleGen(gen)}
                    className={cn(
                      "px-3 py-1.5 text-[11px] font-bold rounded-lg transition-all",
                      selectedGens.includes(gen)
                        ? "bg-violet-100 text-violet-700 border border-violet-300"
                        : "glass glass-hover text-muted-foreground"
                    )}
                  >
                    Gen {gen}
                  </button>
                ))}
              </div>
            </div>

            {/* Special filters */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setShowMegaOnly(!showMegaOnly)}
                className={cn(
                  "px-4 py-2 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5",
                  showMegaOnly
                    ? "bg-gradient-to-r from-pink-100 to-violet-100 text-pink-700 border border-pink-300"
                    : "glass glass-hover text-muted-foreground"
                )}
              >
                <Sparkles className="w-3.5 h-3.5" />
                {t("pokedex.filters.megaOnly")}
              </button>
              {hasPreviousRegulation && (
                <button
                  onClick={() => setShowNewOnly(!showNewOnly)}
                  className={cn(
                    "px-4 py-2 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5",
                    showNewOnly
                      ? "bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/40"
                      : "glass glass-hover text-muted-foreground"
                  )}
                >
                  <span className="text-[11px]">✦</span>
                  Nuovi in {activeRegulationLabel}
                  {newPokemonIds.size > 0 && (
                    <span className={cn(
                      "text-[9px] font-bold px-1.5 py-0.5 rounded-full",
                      showNewOnly
                        ? "bg-emerald-200 dark:bg-emerald-500/30 text-emerald-700 dark:text-emerald-300"
                        : "bg-white/10 dark:bg-white/10 text-gray-500"
                    )}>
                      {newPokemonIds.size}
                    </span>
                  )}
                </button>
              )}
            </div>

            {/* Base Stat Filters */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-violet-500" />
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t("pokedex.filters.baseStats")}</h4>
                  {Object.values(statFilters).some(v => v > 0) && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-violet-100 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400">
                      {Object.values(statFilters).filter(v => v > 0).length} active
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setStatFilters({ ...EMPTY_STAT_FILTERS })}
                  className={cn(
                    "text-[10px] font-semibold transition-colors",
                    Object.values(statFilters).some(v => v > 0)
                      ? "text-violet-500 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
                      : "text-transparent pointer-events-none"
                  )}
                >
                  {t("common.clearAll")}
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                {STAT_KEYS.map(({ key, label, color: _color }) => (
                  <div key={key} className="flex items-center gap-2.5">
                    <span className={cn("text-[11px] font-bold w-8 text-right", `stat-color-${key}`)}>{ts(key)}</span>
                    <input
                      type="range"
                      min={0}
                      max={255}
                      step={5}
                      value={statFilters[key]}
                      onChange={(e) => setStatFilters(prev => ({ ...prev, [key]: Number(e.target.value) }))}
                      aria-label={label}
                      className={cn("flex-1 h-1.5 cursor-pointer", `stat-accent-${key}`)}
                    />
                    <span className={cn(
                      "text-[11px] font-mono w-9 tabular-nums text-right transition-colors",
                      statFilters[key] > 0 ? `font-bold stat-color-${key}` : "text-gray-400 dark:text-gray-500"
                    )}>
                      {statFilters[key] > 0 ? `≥${statFilters[key]}` : " - "}
                    </span>
                  </div>
                ))}
                {/* BST row */}
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-bold w-8 text-right text-gray-500">BST</span>
                  <input
                    type="range"
                    min={0}
                    max={800}
                    step={10}
                    value={statFilters.bst}
                    onChange={(e) => setStatFilters(prev => ({ ...prev, bst: Number(e.target.value) }))}
                    aria-label="BST"
                    className="flex-1 h-1.5 cursor-pointer stat-accent-bst"
                  />
                  <span className={cn(
                    "text-[11px] font-mono w-9 tabular-nums text-right transition-colors",
                    statFilters.bst > 0 ? "font-bold text-gray-600 dark:text-gray-300" : "text-gray-400 dark:text-gray-500"
                  )}>
                    {statFilters.bst > 0 ? `≥${statFilters.bst}` : " - "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm text-gray-400">
          {t("common.showing", { count: filteredPokemon.length })}
        </p>
      </div>

      {/* Pokémon Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5"
      >
        {filteredPokemon.map((pokemon, i) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onClick={(p) => { trackEvent("pokemon_click", "pokedex", p.name); setSelectedPokemon(p); }}
            index={i}
            isNew={newPokemonIds.has(pokemon.id)}
          />
        ))}
      </motion.div>

      {/* Empty state */}
      {filteredPokemon.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center py-24 flex flex-col items-center gap-4"
        >
          <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center">
            <PackageOpen className="w-8 h-8 text-muted-foreground/40" />
          </div>
          <div className="space-y-1">
            <p className="font-semibold text-foreground">{t("pokedex.noMatch")}</p>
            <p className="text-sm text-muted-foreground">{t("pokedex.adjustFilters")}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedTypes([]);
              setSelectedGens([]);
              setShowMegaOnly(false);
              setShowNewOnly(false);
              setStatFilters({ ...EMPTY_STAT_FILTERS });
            }}
            className="text-xs font-semibold text-violet-500 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 transition-colors"
          >
            {t("common.clearAll")}
          </button>
        </motion.div>
      )}

      {/* Detail Modal */}
      <PokemonDetailModal
        pokemon={selectedPokemon}
        onClose={() => setSelectedPokemon(null)}
        liveMetaEntry={selectedPokemon ? liveMeta.get(selectedPokemon.id) : undefined}
      />
    </div>
  );
}
