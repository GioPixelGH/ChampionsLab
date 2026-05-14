"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Award, ChevronDown, ChevronUp, Trophy, Users, RefreshCw, Calendar, List, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { POKEMON_SEED } from "@/lib/pokemon-data";
import type { MetaResponse, TournamentBreakdown, TournamentPokemonUsage } from "@/app/api/meta/route";

// ── Regulation options ────────────────────────────────────────────────────────
const REGULATIONS = [
  { value: "M-A", label: "Reg M-A" },
  { value: "M-B", label: "Reg M-B" },
  { value: "M-C", label: "Reg M-C" },
];

const TIME_OPTIONS = [
  { value: "7days", label: "7 days" },
  { value: "30days", label: "30 days" },
  { value: "all", label: "All time" },
];

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
  const byName = POKEMON_SEED.find((p) => p.name === baseName || p.name === displayName);
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
export function LiveUsage({
  defaultRegulation = "M-B",
}: {
  defaultRegulation?: string;
}) {
  const [regulation, setRegulation] = useState(defaultRegulation);
  const [time, setTime] = useState<string>("7days");
  const [data, setData] = useState<MetaResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<"aggregated" | "byTournament">("aggregated");
  const [expandedTournament, setExpandedTournament] = useState<string | null>(null);
  const [showAllAggregated, setShowAllAggregated] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `/api/meta?regulation=${encodeURIComponent(regulation)}&time=${time}&limit=25`
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
  }, [regulation, time]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
          {/* Regulation selector */}
          <div className="flex rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden text-xs">
            {REGULATIONS.map((r) => (
              <button
                key={r.value}
                onClick={() => setRegulation(r.value)}
                className={cn(
                  "px-3 py-1.5 font-semibold transition-colors",
                  regulation === r.value
                    ? "bg-indigo-500 text-white"
                    : "bg-white dark:bg-white/[0.04] text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/[0.07]"
                )}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* Time selector */}
          <div className="flex rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden text-xs">
            {TIME_OPTIONS.map((t) => (
              <button
                key={t.value}
                onClick={() => setTime(t.value)}
                className={cn(
                  "px-3 py-1.5 font-semibold transition-colors",
                  time === t.value
                    ? "bg-violet-500 text-white"
                    : "bg-white dark:bg-white/[0.04] text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/[0.07]"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Refresh */}
          <button
            onClick={fetchData}
            disabled={loading}
            className="p-1.5 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-gray-500 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors disabled:opacity-50"
            title="Refresh"
          >
            <RefreshCw className={cn("w-4 h-4", loading && "animate-spin")} />
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
          {data.byTournament.map((t) => (
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
