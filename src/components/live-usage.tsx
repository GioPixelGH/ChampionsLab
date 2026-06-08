"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, ChevronDown, ChevronUp, Trophy, Users, RefreshCw, Calendar, List, BarChart3, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { POKEMON_SEED, SEASONS } from "@/lib/pokemon-data";
import { getSettings } from "@/lib/storage";
import { USAGE_DATA } from "@/lib/usage-data";
import { deflateRaw } from "pako";
import type { MetaResponse, TournamentBreakdown, TournamentPokemonUsage } from "@/app/api/meta/route";

const REGULATIONS = SEASONS.flatMap(s => s.regulations).map(r => ({ value: r.id, label: r.label }));

// Generate last N months as { value: "YYYY-MM", label: "Month YYYY" }
function getMonthOptions(count = 18) {
  const months: { value: string; label: string }[] = [];
  const now = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const value = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    const label = d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    months.push({ value, label });
  }
  return months;
}
const MONTH_OPTIONS = getMonthOptions(2);

const SHOW_OPTIONS = [
  { value: 25, label: "25" },
  { value: 50, label: "50" },
  { value: 100, label: "100" },
];

const SORT_OPTIONS = [
  { value: "date-desc",    label: "Newest first" },
  { value: "date-asc",     label: "Oldest first" },
  { value: "players-desc", label: "Most players" },
  { value: "players-asc",  label: "Fewest players" },
];

// ── Build Team Builder URL from Limitless decklist ───────────────────────────
function buildWinnerTeamUrl(
  pokemon: { id: string; name: string; item?: string; ability?: string; moves?: string[] }[],
  tournamentName: string
): string {
  const isMegaId = (id: string) => /-mega(-[xy])?$/.test(id.toLowerCase());
  const isMegaStoneItem = (item: string) =>
    item.endsWith("ite") || item.endsWith("ite X") || item.endsWith("ite Y") || item.endsWith("ite Z");

  const slots = pokemon.slice(0, 6).map((mon) => {
    // Detect mega: either the id ends in -mega, or the held item is a mega stone
    const isMegaById = isMegaId(mon.id);
    const isMegaByItem = !!(mon.item && isMegaStoneItem(mon.item));
    const isMega = isMegaById || isMegaByItem;
    const baseId = isMegaById
      ? mon.id.toLowerCase().replace(/-mega(-[xy])?$/, "")
      : mon.id.toLowerCase();

    // Find the POKEMON_SEED entry
    // Also handle gender-symbol names from Limitless (e.g. "Basculegion ♂" / "Basculegion ♀")
    const genderMatch = mon.name.match(/^(.+?)\s([♀♂])$/);
    const genderSuffix = genderMatch ? (genderMatch[2] === "♀" ? "-F" : "-M") : null;
    const baseName = genderMatch ? genderMatch[1] : mon.name.replace(/^Mega /, "");
    const pkm =
      POKEMON_SEED.find((p) => p.showdownName?.toLowerCase() === baseId) ??
      POKEMON_SEED.find((p) => p.name.toLowerCase().replace(/[^a-z0-9]/g, "") === baseId.replace(/-/g, "")) ??
      POKEMON_SEED.find((p) => p.name.toLowerCase() === mon.name.toLowerCase().replace(/^Mega /, "")) ??
      (genderSuffix ? POKEMON_SEED.find((p) => p.name.toLowerCase() === (baseName + genderSuffix).toLowerCase()) : undefined) ??
      POKEMON_SEED.find((p) => p.name.toLowerCase().startsWith(baseId + "-"));

    if (!pkm) return null;

    // Resolve mega form index from ability (for team builder slot)
    const megaForms = pkm.forms?.filter((f) => f.isMega && !f.hidden) ?? [];
    let mgi: number | undefined;
    if (isMega && mon.ability) {
      const idx = megaForms.findIndex((f) => f.abilities.some((a) => a.name === mon.ability));
      mgi = idx >= 0 ? idx : 0;
    } else if (isMega) {
      mgi = 0;
    }

    // Use actual Limitless data when available; fall back to USAGE_DATA for SP spread and nature
    if (mon.ability && mon.moves && mon.moves.length > 0) {
      const sets = USAGE_DATA[pkm.id] ?? [];
      const matchedSet = sets.find((s) => s.ability === mon.ability) ?? sets[0];
      return {
        p: pkm.id,
        a: mon.ability,
        t: matchedSet?.nature,
        m: mon.moves.slice(0, 4),
        sp: matchedSet
          ? [matchedSet.sp.hp, matchedSet.sp.attack, matchedSet.sp.defense, matchedSet.sp.spAtk, matchedSet.sp.spDef, matchedSet.sp.speed]
          : [0, 0, 0, 0, 0, 0],
        i: mon.item ?? matchedSet?.item,
        mg: isMega || undefined,
        mgi,
      };
    }

    // No actual data – fall back to best USAGE_DATA set
    const sets = USAGE_DATA[pkm.id] ?? [];
    const bestSet = isMega
      ? (sets.find((s) => isMegaStoneItem(s.item)) ?? sets[0])
      : (sets.find((s) => !isMegaStoneItem(s.item)) ?? sets[0]);
    if (bestSet) {
      return {
        p: pkm.id,
        a: bestSet.ability,
        t: bestSet.nature,
        m: bestSet.moves,
        sp: [bestSet.sp.hp, bestSet.sp.attack, bestSet.sp.defense, bestSet.sp.spAtk, bestSet.sp.spDef, bestSet.sp.speed],
        i: bestSet.item,
        mg: isMega || undefined,
        mgi,
      };
    }
    return {
      p: pkm.id,
      a: pkm.abilities[0]?.name,
      m: pkm.moves.slice(0, 4).map((mv) => mv.name),
      sp: [0, 0, 0, 0, 0, 0],
      mg: isMega || undefined,
      mgi,
    };
  }).filter(Boolean);

  if (slots.length === 0) return "/team-builder";

  const data = { n: tournamentName, s: slots };
  const compressed = deflateRaw(JSON.stringify(data));
  const b64 = btoa(String.fromCharCode(...compressed))
    .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  return `/team-builder?t=${b64}`;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function getSpriteForShowdownId(showdownId: string, displayName: string): string | null {
  // Try matching by showdownName field
  const byShowdown = POKEMON_SEED.find(
    (p) => p.showdownName?.toLowerCase() === showdownId.toLowerCase()
  );
  if (byShowdown) return byShowdown.sprite;

  // Try matching by name (direct or stripping "Mega ")
  const baseName = displayName.startsWith("Mega ")
    ? displayName.replace(/^Mega /, "").replace(/ [XYZ]$/, "")
    : displayName;

  // Strip gender symbols (e.g. "Basculegion ♀" → "Basculegion", "Basculegion ♂" → "Basculegion")
  // Also map gender symbol to the -F / -M suffix used in POKEMON_SEED
  const genderMatch = baseName.match(/^(.+?)\s([♀♂])$/);
  const baseNameNoGender = genderMatch ? genderMatch[1] : baseName;
  const genderSuffix = genderMatch ? (genderMatch[2] === "♀" ? "-F" : "-M") : null;

  const byName =
    POKEMON_SEED.find((p) => p.name === baseName || p.name === displayName) ??
    // Try with gender suffix (e.g. "Basculegion-F")
    (genderSuffix ? POKEMON_SEED.find((p) => p.name === baseNameNoGender + genderSuffix) : undefined) ??
    POKEMON_SEED.find((p) => p.name.startsWith(baseName + "-")) ??
    // Fallback: match by base name without gender (returns the first form found)
    (genderMatch ? POKEMON_SEED.find((p) => p.name.startsWith(baseNameNoGender + "-")) : undefined);
  if (!byName) return null;

  if (displayName.startsWith("Mega ")) {
    const suffix = displayName.match(/ ([XYZ])$/)?.[1];
    const megaForms = byName.forms?.filter((f) => f.isMega && !f.hidden) ?? [];
    if (suffix) {
      const form = megaForms.find((f) => f.name.endsWith(` ${suffix}`)) ?? megaForms[0];
      return form?.sprite ?? byName.sprite;
    }
    return megaForms[0]?.sprite ?? byName.sprite;
  }
  return byName.sprite;
}

// ── Sub-components ────────────────────────────────────────────────────────────
function UsageBar({
  entry,
  maxUsage,
  rank,
  onClick,
}: {
  entry: TournamentPokemonUsage;
  maxUsage: number;
  rank: number;
  onClick?: () => void;
}) {
  const sprite = getSpriteForShowdownId(entry.showdownId, entry.name);
  return (
    <div
      className={cn(
        "flex items-center gap-3 p-3 rounded-xl transition-colors",
        onClick && "cursor-pointer",
        rank <= 5
          ? "bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-500/[0.08] dark:to-violet-500/[0.08] border border-indigo-200 dark:border-indigo-500/20 hover:border-indigo-300 dark:hover:border-indigo-500/30"
          : rank <= 15
          ? "bg-gray-50/80 dark:bg-white/[0.04] border border-gray-100 dark:border-white/[0.06] hover:border-gray-200 dark:hover:border-white/10"
          : "bg-gray-50/50 dark:bg-white/[0.03] hover:bg-gray-100/80 dark:hover:bg-white/[0.06]"
      )}
      onClick={onClick}
    >
      <span
        className={cn(
          "text-sm font-extrabold w-7 text-center tabular-nums",
          rank <= 3
            ? "text-indigo-600 dark:text-indigo-400"
            : rank <= 10
            ? "text-gray-600 dark:text-gray-300"
            : "text-gray-400 dark:text-gray-500"
        )}
      >
        {rank}
      </span>
      {sprite && (
        <Image src={sprite} alt={entry.name} width={36} height={36} className="drop-shadow-sm" unoptimized />
      )}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold truncate">{entry.name}</p>
        <div className="flex items-center gap-2 mt-0.5">
          <div className="flex-1 h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-violet-400"
              style={{ width: `${maxUsage > 0 ? Math.min(100, (entry.usageRate / maxUsage) * 100) : 0}%` }}
            />
          </div>
          <span className="text-xs font-bold text-indigo-700 dark:text-indigo-400 tabular-nums shrink-0">
            {entry.usageRate}%
          </span>
        </div>
      </div>
      <div className="text-right shrink-0">
        <span className="text-[10px] text-muted-foreground block">{entry.count} teams</span>
      </div>
    </div>
  );
}

function TournamentDetail({
  tournament,
  onClose,
}: {
  tournament: TournamentBreakdown;
  onClose: () => void;
}) {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? tournament.usage : tournament.usage.slice(0, 30);
  const maxUsage = tournament.usage[0]?.usageRate ?? 100;

  return (
    <div className="mt-4 rounded-xl border border-indigo-200 dark:border-indigo-500/30 bg-white dark:bg-black/20 p-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="font-bold text-sm">{tournament.name}</p>
          <p className="text-xs text-muted-foreground">
            {new Date(tournament.date).toLocaleDateString()} · {tournament.players} players · {tournament.teams} teams with decklists
          </p>
        </div>
        <button
          onClick={onClose}
          aria-label="Collapse tournament"
          className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-gray-500 transition-colors"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      </div>

      {/* Winner section */}
      {tournament.winner && (
        <div className="mb-4 p-3 rounded-xl bg-amber-50/60 dark:bg-amber-500/[0.08] border border-amber-200 dark:border-amber-500/20">
          {/* Header row */}
          <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
            <div className="flex items-center gap-2 min-w-0">
              <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
              <p className="text-xs font-bold text-amber-700 dark:text-amber-400 truncate">
                {tournament.winner.player}
                <span className="ml-1.5 font-normal text-muted-foreground">({tournament.winner.record})</span>
              </p>
            </div>
            <Link
              href={buildWinnerTeamUrl(tournament.winner.pokemon, `${tournament.winner.player} - ${tournament.name}`)}
              className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Open in Team Builder
            </Link>
          </div>
          {/* Full team cards */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {tournament.winner.pokemon.map((mon) => {
              const isMegaMon = /-mega(-[xy])?$/.test(mon.id.toLowerCase());
              const baseId = isMegaMon ? mon.id.toLowerCase().replace(/-mega(-[xy])?$/, "") : mon.id.toLowerCase();
              const gm = mon.name.match(/^(.+?)\s([♀♂])$/);
              const gSuffix = gm ? (gm[2] === "♀" ? "-F" : "-M") : null;
              const bName = gm ? gm[1] : mon.name.replace(/^Mega /, "");
              const isMegaStone = (item: string) => item.endsWith("ite") || item.endsWith("ite X") || item.endsWith("ite Y") || item.endsWith("ite Z");
              const pkm =
                POKEMON_SEED.find((p) => p.showdownName?.toLowerCase() === baseId) ??
                POKEMON_SEED.find((p) => p.name.toLowerCase().replace(/[^a-z0-9]/g, "") === baseId.replace(/-/g, "")) ??
                POKEMON_SEED.find((p) => p.name.toLowerCase() === mon.name.toLowerCase().replace(/^Mega /, "")) ??
                (gSuffix ? POKEMON_SEED.find((p) => p.name.toLowerCase() === (bName + gSuffix).toLowerCase()) : undefined) ??
                POKEMON_SEED.find((p) => p.name.toLowerCase().startsWith(baseId + "-"));
              const sets = pkm ? (USAGE_DATA[pkm.id] ?? []) : [];
              const set = isMegaMon
                ? (sets.find((s) => isMegaStone(s.item)) ?? sets[0])
                : (sets.find((s) => !isMegaStone(s.item)) ?? sets[0]);
              const sprite = getSpriteForShowdownId(mon.id, mon.name);
              return (
                <div key={mon.id + mon.name} className="bg-white/60 dark:bg-white/[0.05] rounded-xl p-2 flex flex-col">
                  <div className="flex justify-center mb-1">
                    {sprite
                      ? <Image src={sprite} alt={mon.name} width={44} height={44} className="drop-shadow-sm" unoptimized />
                      : <div className="w-11 h-11 rounded bg-gray-200 dark:bg-white/10" />
                    }
                  </div>
                  <p className="text-[10px] font-bold truncate text-center leading-tight mb-1">{mon.name}</p>
                  {set ? (
                    <>
                      {set.item && <p className="text-[9px] text-amber-700 dark:text-amber-400 truncate font-medium">{set.item}</p>}
                      {set.nature && <p className="text-[9px] text-emerald-600 dark:text-emerald-400 truncate">{set.nature}</p>}
                      <div className="mt-0.5">
                        {set.moves.slice(0, 4).map((m) => (
                          <p key={m} className="text-[8px] text-muted-foreground truncate leading-tight">• {m}</p>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="text-[8px] text-muted-foreground italic">No set data</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {displayed.map((entry, i) => (
          <UsageBar key={entry.showdownId} entry={entry} maxUsage={maxUsage} rank={i + 1} />
        ))}
      </div>
      {!showAll && tournament.usage.length > 30 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-3 w-full py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04] text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/[0.07] transition-all flex items-center justify-center gap-2"
        >
          Show all {tournament.usage.length} Pokémon <ChevronDown className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export function LiveUsage() {
  const [regulation, setRegulation] = useState(() => {
    const stored = getSettings().defaultRegulationId;
    return stored || SEASONS.flatMap(s => s.regulations).find(r => r.isActive)?.id || SEASONS[0]?.regulations[0]?.id || "M-A";
  });
  const [time, setTime] = useState<string>("7days");
  const [show, setShow] = useState<number>(25);
  const [data, setData] = useState<MetaResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<"aggregated" | "byTournament">("aggregated");
  const [sort, setSort] = useState<string>("date-desc");
  const [expandedTournament, setExpandedTournament] = useState<string | null>(null);
  const [showAllAggregated, setShowAllAggregated] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `/api/meta?regulation=${encodeURIComponent(regulation)}&time=${time}&limit=${show}`
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json: MetaResponse = await res.json();
      setData(json);
      setExpandedTournament(null);
      setShowAllAggregated(false);
    } catch (e) {
      setError("Failed to fetch live usage data. Please try again.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [regulation, time, show]);

  const aggregatedList: TournamentPokemonUsage[] = data?.meta.map((m) => ({
    showdownId: m.showdownId,
    name: m.name,
    count: m.appearances,
    usageRate: m.usageRate,
  })) ?? [];

  const maxAggregated = aggregatedList[0]?.usageRate ?? 100;
  const displayedAggregated = showAllAggregated
    ? aggregatedList
    : aggregatedList.slice(0, 30);

  return (
    <div className="glass rounded-2xl p-6 border border-indigo-200/60 dark:border-indigo-500/20 bg-gradient-to-br from-indigo-50/30 via-white to-violet-50/30 dark:from-indigo-950/20 dark:via-transparent dark:to-violet-950/20">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-indigo-500" />
          <h2 className="text-lg font-bold">Live Regulation Usage</h2>
          <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded-full bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-500/30">
            LIVE
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Regulation dropdown */}
          <select
            aria-label="Regulation"
            value={regulation}
            onChange={(e) => setRegulation(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-gray-700 dark:text-white text-xs font-semibold transition-colors hover:bg-gray-50 dark:hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-indigo-400/50 cursor-pointer"
          >
            {REGULATIONS.map((r) => (
              <option
                key={r.value}
                value={r.value}
                style={{ color: r.value === getSettings().defaultRegulationId ? "#22c55e" : "CanvasText" }}
              >
                {r.label}
              </option>
            ))}
          </select>

          {/* Time dropdown */}
          <select
            aria-label="Time range"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-gray-700 dark:text-white text-xs font-semibold transition-colors hover:bg-gray-50 dark:hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-violet-400/50 cursor-pointer"
          >
            <option value="7days">Past 7 days</option>
            <option value="4weeks">Past 4 weeks</option>
            <option value="all">All time</option>
            <optgroup label="By month">
              {MONTH_OPTIONS.map((m) => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </optgroup>
          </select>

          {/* Tournament count dropdown */}
          <select
            aria-label="Tournament count"
            value={show}
            onChange={(e) => setShow(Number(e.target.value))}
            className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-gray-700 dark:text-white text-xs font-semibold transition-colors hover:bg-gray-50 dark:hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-indigo-400/50 cursor-pointer"
          >
            {SHOW_OPTIONS.map((s) => (
              <option key={s.value} value={s.value}>{s.label} tournaments</option>
            ))}
          </select>

          {/* Sort dropdown */}
          <select
            aria-label="Sort by"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-gray-700 dark:text-white text-xs font-semibold transition-colors hover:bg-gray-50 dark:hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-indigo-400/50 cursor-pointer"
          >
            {SORT_OPTIONS.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>

          {/* Load / Refresh */}
          <button
            onClick={fetchData}
            disabled={loading}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-colors disabled:opacity-50",
              data
                ? "border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-gray-500 hover:bg-gray-50 dark:hover:bg-white/10"
                : "border-indigo-300 dark:border-indigo-500/40 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-500/20"
            )}
            title={data ? "Refresh" : "Carica dati"}
          >
            <RefreshCw className={cn("w-3.5 h-3.5", loading && "animate-spin")} />
            {data ? "Refresh" : "Carica dati"}
          </button>
        </div>
      </div>

      {/* Stats row */}
      {data && !loading && (
        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Trophy className="w-4 h-4 text-amber-500" />
            <strong className="text-foreground">{data.tournaments}</strong> tournaments
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-indigo-500" />
            <strong className="text-foreground">{data.teams.toLocaleString()}</strong> teams with decklists
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-violet-500" />
            Last updated {new Date(data.updatedAt).toLocaleTimeString()}
          </span>
        </div>
      )}

      {/* View toggle */}
      {data && !loading && data.tournaments > 0 && (
        <div className="flex rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden text-xs mb-5 w-fit">
          <button
            onClick={() => setView("aggregated")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 font-semibold transition-colors",
              view === "aggregated"
                ? "bg-indigo-500 text-white"
                : "bg-white dark:bg-white/[0.04] text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/[0.07]"
            )}
          >
            <BarChart3 className="w-3.5 h-3.5" /> Aggregated
          </button>
          <button
            onClick={() => setView("byTournament")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 font-semibold transition-colors",
              view === "byTournament"
                ? "bg-indigo-500 text-white"
                : "bg-white dark:bg-white/[0.04] text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/[0.07]"
            )}
          >
            <List className="w-3.5 h-3.5" /> Per Tournament
          </button>
        </div>
      )}

      {/* Idle state — before first fetch */}
      {!loading && !error && !data && (
        <div className="flex flex-col items-center justify-center py-12 text-center gap-3">
          <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
            <RefreshCw className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-muted-foreground">Dati non ancora caricati</p>
            <p className="text-[11px] text-muted-foreground mt-1">Premi <strong>Carica dati</strong> per recuperare i dati live da Limitless</p>
          </div>
        </div>
      )}

      {/* Loading state */}
      {loading && (
        <div className="flex items-center justify-center py-12 text-sm text-muted-foreground">
          <RefreshCw className="w-5 h-5 animate-spin mr-2 text-indigo-500" />
          Fetching live data from Limitless…
        </div>
      )}

      {/* Error state */}
      {!loading && error && (
        <div className="py-8 text-center text-sm text-red-500">
          {error}
          <button onClick={fetchData} className="ml-2 underline hover:no-underline">
            Retry
          </button>
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && data && data.tournaments === 0 && (
        <div className="py-8 text-center text-sm text-muted-foreground">
          No tournaments found for <strong>{regulation}</strong> in the selected time window.
        </div>
      )}

      {/* Aggregated view */}
      {!loading && !error && data && view === "aggregated" && aggregatedList.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {displayedAggregated.map((entry, i) => (
              <UsageBar key={entry.showdownId} entry={entry} maxUsage={maxAggregated} rank={i + 1} />
            ))}
          </div>
          {!showAllAggregated && aggregatedList.length > 30 && (
            <button
              onClick={() => setShowAllAggregated(true)}
              className="mt-4 w-full py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04] text-gray-600 dark:text-gray-400 text-sm font-medium hover:bg-gray-100 dark:hover:bg-white/[0.07] transition-all flex items-center justify-center gap-2"
            >
              Show all {aggregatedList.length} Pokémon <ChevronDown className="w-4 h-4" />
            </button>
          )}
        </>
      )}

      {/* Per-tournament view */}
      {!loading && !error && data && view === "byTournament" && (
        <div className="space-y-3">
          {[...data.byTournament].sort((a, b) => {
            if (sort === "date-asc")     return new Date(a.date).getTime() - new Date(b.date).getTime();
            if (sort === "players-desc") return b.players - a.players;
            if (sort === "players-asc")  return a.players - b.players;
            return new Date(b.date).getTime() - new Date(a.date).getTime(); // date-desc default
          }).map((t) => (
            <div key={t.id}>
              <button
                className={cn(
                  "w-full flex items-center justify-between p-4 rounded-xl border transition-colors text-left",
                  expandedTournament === t.id
                    ? "border-indigo-300 dark:border-indigo-500/50 bg-indigo-50/80 dark:bg-indigo-500/[0.08]"
                    : "border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] hover:bg-gray-50 dark:hover:bg-white/[0.06]"
                )}
                onClick={() =>
                  setExpandedTournament(expandedTournament === t.id ? null : t.id)
                }
              >
                <div className="min-w-0">
                  <p className="font-semibold text-sm truncate">{t.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {new Date(t.date).toLocaleDateString()} · {t.players} players ·{" "}
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                      {t.teams} decklists
                    </span>{" "}
                    · {t.usage.length} unique Pokémon
                  </p>
                </div>
                {expandedTournament === t.id ? (
                  <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                )}
              </button>

              {expandedTournament === t.id && (
                <TournamentDetail
                  tournament={t}
                  onClose={() => setExpandedTournament(null)}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
