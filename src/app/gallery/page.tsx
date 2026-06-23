"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import { deflateRaw } from "pako";
import {
  Users, Search, Filter, GitFork, Calendar, Trophy, ArrowRight,
  RefreshCw, Loader2, AlertCircle, Sparkles, ChevronDown,
} from "lucide-react";
import { POKEMON_SEED } from "@/lib/pokemon-data";
import { cn } from "@/lib/utils";

// ── Types ──────────────────────────────────────────────────────────────────

interface SharedTeamSlot {
  p: number;        // pokemonId
  a?: string;       // ability
  t?: string;       // nature
  m: string[];      // moves
  sp: number[];     // stat points [hp,atk,def,spa,spd,spe]
  te?: string;      // tera type
  i?: string;       // item
  mg?: boolean;     // isMega
  mgi?: number;     // megaFormIndex
  pa?: string;      // preMegaAbility
}

interface SharedTeamData {
  n?: string;       // name
  s: SharedTeamSlot[];
  regulation?: string;
}

interface GalleryTeam {
  id: string;
  data: SharedTeamData;
  views: number;
  created_at: string;
  expires_at?: string;
}

// ── Helpers ────────────────────────────────────────────────────────────────

function buildForkUrl(data: SharedTeamData): string {
  try {
    const compressed = deflateRaw(JSON.stringify(data));
    const b64 = btoa(String.fromCharCode(...compressed))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
    return `/team-builder?t=${b64}`;
  } catch {
    return "/team-builder";
  }
}

function getDexNumber(pokemonId: number): number | null {
  const pokemon = POKEMON_SEED.find((p) => p.id === pokemonId);
  return pokemon ? pokemon.dexNumber : null;
}

function getPokemonName(pokemonId: number): string {
  const pokemon = POKEMON_SEED.find((p) => p.id === pokemonId);
  return pokemon ? pokemon.name : `#${pokemonId}`;
}

function getSpriteUrl(pokemonId: number): string {
  const dex = getDexNumber(pokemonId);
  if (dex == null) return "";
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dex}.png`;
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

function inferRegulation(data: SharedTeamData): string {
  if (data.regulation) return data.regulation;
  // Infer from pokemon IDs: if any pokemon is M-B only, label M-B
  const ids = data.s.map((s) => s.p);
  const hasMB = ids.some((id) => {
    const p = POKEMON_SEED.find((pk) => pk.id === id);
    return p?.regulation === "M-B";
  });
  return hasMB ? "M-B" : "M-A";
}

const REGULATIONS = ["All", "M-A", "M-B"] as const;
type RegulationFilter = (typeof REGULATIONS)[number];

// ── Supabase fetch ─────────────────────────────────────────────────────────

async function fetchGalleryTeams(): Promise<{ teams: GalleryTeam[]; configured: boolean }> {
  try {
    const res = await fetch("/api/gallery", { cache: "no-store" });
    if (res.status === 503) return { teams: [], configured: false };
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const teams: GalleryTeam[] = await res.json();
    return { teams, configured: true };
  } catch {
    return { teams: [], configured: false };
  }
}

// ── Team Card ──────────────────────────────────────────────────────────────

function TeamCard({ team }: { team: GalleryTeam }) {
  const { data } = team;
  const slots = data.s ?? [];
  const name = data.n?.trim() || "Unnamed Team";
  const regulation = inferRegulation(data);
  const forkUrl = buildForkUrl(data);
  const date = formatDate(team.created_at);

  const regulationColor =
    regulation === "M-B"
      ? "bg-violet-500/10 text-violet-400 border-violet-500/20"
      : "bg-blue-500/10 text-blue-400 border-blue-500/20";

  return (
    <div className="group relative flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-foreground leading-tight" title={name}>
            {name}
          </h3>
          <div className="mt-1 flex items-center gap-2">
            <span
              className={cn(
                "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium",
                regulationColor,
              )}
            >
              {regulation}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              {date}
            </span>
          </div>
        </div>
        {team.views > 0 && (
          <span className="shrink-0 flex items-center gap-1 text-xs text-muted-foreground">
            <Users className="h-3 w-3" />
            {team.views}
          </span>
        )}
      </div>

      {/* Sprites */}
      <div className="flex flex-wrap gap-1">
        {slots.slice(0, 6).map((slot, i) => {
          const spriteUrl = getSpriteUrl(slot.p);
          const pokeName = getPokemonName(slot.p);
          return (
            <div
              key={i}
              className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-muted/50 ring-1 ring-border/40"
              title={pokeName}
            >
              {spriteUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={spriteUrl}
                  alt={pokeName}
                  width={40}
                  height={40}
                  loading="lazy"
                  className="h-10 w-10 object-contain"
                />
              ) : (
                <span className="text-[10px] text-muted-foreground">?</span>
              )}
            </div>
          );
        })}
        {/* Placeholder slots when team has fewer than 6 */}
        {Array.from({ length: Math.max(0, 6 - slots.length) }).map((_, i) => (
          <div
            key={`empty-${i}`}
            className="h-12 w-12 rounded-xl border border-dashed border-border/40 bg-muted/20"
          />
        ))}
      </div>

      {/* Pokemon names strip */}
      <div className="flex flex-wrap gap-x-2 gap-y-0.5">
        {slots.slice(0, 6).map((slot, i) => (
          <span key={i} className="text-xs text-muted-foreground">
            {getPokemonName(slot.p)}
          </span>
        ))}
      </div>

      {/* Fork button */}
      <Link
        href={forkUrl}
        className="mt-auto flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-3 py-2 text-sm font-medium text-primary transition-all duration-150 hover:bg-primary/10 hover:border-primary/50 active:scale-95"
        onClick={() => {
          // Analytics hint — fire-and-forget
          if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("cl:gallery-fork", { detail: { id: team.id } }));
          }
        }}
      >
        <GitFork className="h-4 w-4" />
        Fork team
      </Link>
    </div>
  );
}

// ── Empty State ────────────────────────────────────────────────────────────

function EmptyState({ configured, hasFilters }: { configured: boolean; hasFilters: boolean }) {
  if (!configured) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border/60 bg-muted/20 py-20 px-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10">
          <AlertCircle className="h-7 w-7 text-amber-500" />
        </div>
        <div>
          <p className="font-semibold text-foreground">Gallery unavailable</p>
          <p className="mt-1 text-sm text-muted-foreground max-w-sm">
            The community gallery requires Supabase to be configured. Check back later or build your own team now.
          </p>
        </div>
        <Link
          href="/team-builder"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Open Team Builder
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="col-span-full flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border/60 bg-muted/20 py-20 px-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
        <Trophy className="h-7 w-7 text-primary" />
      </div>
      <div>
        <p className="font-semibold text-foreground">
          {hasFilters ? "No teams match your filters" : "No shared teams yet"}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {hasFilters
            ? "Try adjusting your search or regulation filter."
            : "Be the first to share your team with the community!"}
        </p>
      </div>
      {!hasFilters && (
        <Link
          href="/team-builder"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Build a team
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  const [teams, setTeams] = useState<GalleryTeam[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [configured, setConfigured] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [regulationFilter, setRegulationFilter] = useState<RegulationFilter>("All");
  const [showRegDropdown, setShowRegDropdown] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { teams: data, configured: ok } = await fetchGalleryTeams();
      setTeams(data);
      setConfigured(ok);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load teams");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!showRegDropdown) return;
    const handler = () => setShowRegDropdown(false);
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, [showRegDropdown]);

  const filteredTeams = useMemo(() => {
    let result = teams;
    if (regulationFilter !== "All") {
      result = result.filter((t) => inferRegulation(t.data) === regulationFilter);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((t) => {
        const name = (t.data.n ?? "").toLowerCase();
        if (name.includes(q)) return true;
        // Also search by pokemon names
        return t.data.s.some((slot) => getPokemonName(slot.p).toLowerCase().includes(q));
      });
    }
    return result;
  }, [teams, regulationFilter, searchQuery]);

  const hasFilters = regulationFilter !== "All" || searchQuery.trim().length > 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero banner */}
      <div className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-primary/8 via-background to-background px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Community Gallery</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Shared Teams
              </h1>
              <p className="mt-2 text-muted-foreground max-w-lg">
                Browse teams shared by the Champions Lab community. Fork any team to load it straight
                into the Team Builder.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/team-builder"
              className="inline-flex shrink-0 items-center gap-2 rounded-2xl border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-150 hover:bg-primary/20 hover:border-primary/50"
            >
              <Sparkles className="h-4 w-4" />
              Share your team
            </Link>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="sticky top-0 z-20 border-b border-border/40 bg-background/90 backdrop-blur-sm px-4 py-3 sm:px-6">
        <div className="mx-auto flex max-w-5xl items-center gap-3">
          {/* Search */}
          <div className="relative flex-1 min-w-0">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by team name or Pokémon..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 w-full rounded-xl border border-border bg-muted/50 pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/40 focus:bg-background focus:ring-0"
            />
          </div>

          {/* Regulation filter */}
          <div className="relative shrink-0">
            <button
              type="button"
              className="flex h-9 items-center gap-1.5 rounded-xl border border-border bg-muted/50 px-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              onClick={(e) => {
                e.stopPropagation();
                setShowRegDropdown((v) => !v);
              }}
              aria-expanded={showRegDropdown}
            >
              <Filter className="h-3.5 w-3.5 text-muted-foreground" />
              {regulationFilter}
              <ChevronDown className={cn("h-3.5 w-3.5 text-muted-foreground transition-transform", showRegDropdown && "rotate-180")} />
            </button>
            {showRegDropdown && (
              <div className="absolute right-0 top-full mt-1 z-30 min-w-[120px] overflow-hidden rounded-xl border border-border bg-card shadow-lg">
                {REGULATIONS.map((reg) => (
                  <button
                    key={reg}
                    type="button"
                    className={cn(
                      "flex w-full items-center px-3 py-2 text-sm transition-colors hover:bg-muted",
                      regulationFilter === reg && "bg-primary/10 font-medium text-primary",
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                      setRegulationFilter(reg);
                      setShowRegDropdown(false);
                    }}
                  >
                    {reg}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Refresh */}
          <button
            type="button"
            onClick={load}
            disabled={loading}
            title="Refresh"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/50 text-muted-foreground transition-colors hover:bg-muted disabled:opacity-50"
          >
            <RefreshCw className={cn("h-4 w-4", loading && "animate-spin")} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {/* Stats bar */}
        {!loading && configured && teams.length > 0 && (
          <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
            <span>
              {filteredTeams.length === teams.length
                ? `${teams.length} team${teams.length !== 1 ? "s" : ""} shared`
                : `${filteredTeams.length} of ${teams.length} teams`}
            </span>
            {hasFilters && (
              <button
                type="button"
                className="text-primary hover:underline"
                onClick={() => {
                  setSearchQuery("");
                  setRegulationFilter("All");
                }}
              >
                Clear filters
              </button>
            )}
          </div>
        )}

        {/* Error banner */}
        {error && (
          <div className="mb-6 flex items-center gap-3 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
            <button
              type="button"
              onClick={load}
              className="ml-auto shrink-0 underline hover:no-underline"
            >
              Retry
            </button>
          </div>
        )}

        {/* Loading skeleton */}
        {loading && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4"
                style={{ opacity: 1 - i * 0.12 }}
              >
                <div className="flex items-start gap-2">
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-2/3 rounded-md bg-muted animate-pulse" />
                    <div className="h-3 w-1/3 rounded-md bg-muted animate-pulse" />
                  </div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: 6 }).map((_, j) => (
                    <div key={j} className="h-12 w-12 rounded-xl bg-muted animate-pulse" />
                  ))}
                </div>
                <div className="h-3 w-4/5 rounded-md bg-muted animate-pulse" />
                <div className="mt-auto h-9 rounded-xl bg-muted animate-pulse" />
              </div>
            ))}
          </div>
        )}

        {/* Loading indicator overlay */}
        {loading && (
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading community teams...
          </div>
        )}

        {/* Teams grid */}
        {!loading && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTeams.length > 0
              ? filteredTeams.map((team) => <TeamCard key={team.id} team={team} />)
              : <EmptyState configured={configured} hasFilters={hasFilters} />}
          </div>
        )}

        {/* Bottom CTA */}
        {!loading && configured && filteredTeams.length > 0 && (
          <div className="mt-12 rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 to-transparent p-6 text-center">
            <Trophy className="mx-auto mb-3 h-8 w-8 text-primary/70" />
            <h2 className="font-semibold text-foreground">Ready to compete?</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fork a team and customise it in the Team Builder, or build your own from scratch.
            </p>
            <Link
              href="/team-builder"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Open Team Builder
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
