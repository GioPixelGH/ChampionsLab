"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import Image from "next/image";
import Link from "next/link";
import { exportTeamTesterPDF, PDF_LABELS_FR, PDF_LABELS_DE } from "@/lib/export-pdf";
import {
  Plus, Trash2, X, Trophy, Swords,
  BarChart3, BookOpen, Check, ClipboardList, Flame,
  TrendingUp, TrendingDown, Minus, AlertCircle, ExternalLink, FlaskConical, Download,
  ArrowUp, ArrowDown, ArrowUpDown, Users, Tag,
} from "lucide-react";
import { POKEMON_SEED } from "@/lib/pokemon-data";
import { cn } from "@/lib/utils";
import { spriteUrl } from "@/lib/sprite-url";
import { useI18n } from "@/lib/i18n";
import {
  getMatchRecords, saveMatchRecord, deleteMatchRecord, clearMatchRecords,
  getSavedTeams, deserializeTeam,
  type MatchRecord, type SavedTeam,
} from "@/lib/storage";
import { type ChampionsPokemon } from "@/lib/types";

// ─────────────────────────────────────────────────────────────────────────────

const ALL_POKEMON = POKEMON_SEED.filter((p) => !p.hidden).sort((a, b) => a.dexNumber - b.dexNumber);

function getById(id: number): ChampionsPokemon | undefined {
  return POKEMON_SEED.find((p) => p.id === id);
}

function fmtDate(ts: number): string {
  return new Date(ts).toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" });
}

// ── Mini sprite ───────────────────────────────────────────────────────────

function PSprite({ id, size = 40, className }: { id: number; size?: number; className?: string }) {
  const p = getById(id);
  if (!p) return <div className={cn("rounded-full bg-muted flex-shrink-0")} style={{ width: size, height: size }} />;
  return (
    <Image
      src={spriteUrl(p.sprite)}
      alt={p.name}
      width={size}
      height={size}
      className={cn("object-contain drop-shadow flex-shrink-0", className)}
      unoptimized
    />
  );
}

// ── Pokémon picker ────────────────────────────────────────────────────────

function PokemonPicker({
  selected,
  onToggle,
  maxSelect,
  label,
}: {
  selected: number[];
  onToggle: (id: number) => void;
  maxSelect: number;
  label: string;
}) {
  const [search, setSearch] = useState("");
  const { tp } = useI18n();

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    if (!q) return ALL_POKEMON.slice(0, 60);
    return ALL_POKEMON.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        tp(p.name).toLowerCase().includes(q) ||
        p.dexNumber.toString().includes(q)
    ).slice(0, 60);
  }, [search, tp]);

  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-xs text-muted-foreground">{selected.length}/{maxSelect}</span>
      </div>

      {selected.length > 0 && (
        <div className="flex flex-wrap gap-1.5 min-h-[2rem]">
          {selected.map((id) => {
            const p = getById(id);
            return (
              <button
                key={id}
                onClick={() => onToggle(id)}
                className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-500/40 text-xs text-emerald-800 dark:text-emerald-300 hover:bg-red-100 dark:hover:bg-red-500/20 hover:border-red-300 dark:hover:border-red-500/40 hover:text-red-700 dark:hover:text-red-400 transition-colors"
              >
                <PSprite id={id} size={18} />
                <span>{p?.name ?? id}</span>
                <X size={10} />
              </button>
            );
          })}
        </div>
      )}

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Pokemon..."
        className="w-full px-3 py-1.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-colors"
      />

      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-1 max-h-44 overflow-y-auto rounded-xl border border-border bg-muted/30 p-2">
        {filtered.map((p) => {
          const isSelected = selected.includes(p.id);
          const isDisabled = !isSelected && selected.length >= maxSelect;
          return (
            <button
              key={p.id}
              title={p.name}
              disabled={isDisabled}
              onClick={() => onToggle(p.id)}
              className={cn(
                "relative flex items-center justify-center rounded-lg p-0.5 transition-all",
                isSelected
                  ? "ring-2 ring-emerald-400 bg-emerald-50 dark:bg-emerald-500/20"
                  : isDisabled
                  ? "opacity-25 cursor-not-allowed"
                  : "hover:bg-accent"
              )}
            >
              <PSprite id={p.id} size={32} />
              {isSelected && (
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full flex items-center justify-center">
                  <Check size={7} className="text-white" />
                </span>
              )}
            </button>
          );
        })}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-xs text-muted-foreground py-4">No Pokemon found</div>
        )}
      </div>
    </div>
  );
}

// ── Result badge ──────────────────────────────────────────────────────────

function ResultBadge({ result }: { result: MatchRecord["result"] }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide shrink-0",
        result === "win"
          ? "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30"
          : result === "loss"
          ? "bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-500/30"
          : "bg-muted text-muted-foreground border border-border"
      )}
    >
      {result === "win" ? <TrendingUp size={10} /> : result === "loss" ? <TrendingDown size={10} /> : <Minus size={10} />}
      {result}
    </span>
  );
}

// ── Stats computation ─────────────────────────────────────────────────────

interface PokemonStat {
  id: number;
  wins: number;
  losses: number;
  ties: number;
  total: number;
  winRate: number;
}

interface PairStat {
  pairKey: string;
  id1: number; // first lead (picks[0])
  id2: number; // second lead (picks[1])
  wins: number;
  losses: number;
  ties: number;
  total: number;
  winRate: number;
}

function computeStats(records: MatchRecord[]) {
  const wins = records.filter((r) => r.result === "win").length;
  const losses = records.filter((r) => r.result === "loss").length;
  const ties = records.filter((r) => r.result === "tie").length;
  const total = records.length;
  const winRate = total > 0 ? (wins / total) * 100 : 0;

  const myPickMap = new Map<number, { wins: number; losses: number; ties: number }>();
  for (const r of records) {
    for (const id of r.myPicks) {
      if (!myPickMap.has(id)) myPickMap.set(id, { wins: 0, losses: 0, ties: 0 });
      const s = myPickMap.get(id)!;
      if (r.result === "win") s.wins++;
      else if (r.result === "loss") s.losses++;
      else s.ties++;
    }
  }
  const myPickStats: PokemonStat[] = Array.from(myPickMap.entries())
    .map(([id, s]) => { const t = s.wins + s.losses + s.ties; return { id, ...s, total: t, winRate: t > 0 ? (s.wins / t) * 100 : 0 }; })
    .sort((a, b) => b.total - a.total);

  const oppPickMap = new Map<number, { wins: number; losses: number; ties: number }>();
  for (const r of records) {
    for (const id of r.opponentPicks) {
      if (!oppPickMap.has(id)) oppPickMap.set(id, { wins: 0, losses: 0, ties: 0 });
      const s = oppPickMap.get(id)!;
      if (r.result === "win") s.wins++;
      else if (r.result === "loss") s.losses++;
      else s.ties++;
    }
  }
  const oppPickStats: PokemonStat[] = Array.from(oppPickMap.entries())
    .map(([id, s]) => { const t = s.wins + s.losses + s.ties; return { id, ...s, total: t, winRate: t > 0 ? (s.wins / t) * 100 : 0 }; })
    .sort((a, b) => b.total - a.total);

  // ── My lead pairs (only first 2 picks = actual leads) ────────────────────
  const myPairMap = new Map<string, { id1: number; id2: number; wins: number; losses: number; ties: number }>();
  for (const r of records) {
    const picks = r.myPicks;
    if (picks.length < 2) continue;
    // Canonical key uses sorted IDs so (A,B) and (B,A) are the same lead
    const canonKey = `${Math.min(picks[0], picks[1])}_${Math.max(picks[0], picks[1])}`;
    if (!myPairMap.has(canonKey)) myPairMap.set(canonKey, { id1: picks[0], id2: picks[1], wins: 0, losses: 0, ties: 0 });
    const s = myPairMap.get(canonKey)!;
    if (r.result === "win") s.wins++;
    else if (r.result === "loss") s.losses++;
    else s.ties++;
  }
  const myLeadStats: PairStat[] = Array.from(myPairMap.entries())
    .map(([pairKey, s]) => { const t = s.wins + s.losses + s.ties; return { pairKey, ...s, total: t, winRate: t > 0 ? (s.wins / t) * 100 : 0 }; })
    .sort((a, b) => b.total - a.total);

  // ── Opponent lead pairs (only first 2 picks = actual leads) ───────────────
  const oppPairMap = new Map<string, { id1: number; id2: number; wins: number; losses: number; ties: number }>();
  for (const r of records) {
    const picks = r.opponentPicks;
    if (picks.length < 2) continue;
    const canonKey = `${Math.min(picks[0], picks[1])}_${Math.max(picks[0], picks[1])}`;
    if (!oppPairMap.has(canonKey)) oppPairMap.set(canonKey, { id1: picks[0], id2: picks[1], wins: 0, losses: 0, ties: 0 });
    const s = oppPairMap.get(canonKey)!;
    if (r.result === "win") s.wins++;
    else if (r.result === "loss") s.losses++;
    else s.ties++;
  }
  const oppLeadStats: PairStat[] = Array.from(oppPairMap.entries())
    .map(([pairKey, s]) => { const t = s.wins + s.losses + s.ties; return { pairKey, ...s, total: t, winRate: t > 0 ? (s.wins / t) * 100 : 0 }; })
    .sort((a, b) => b.total - a.total);

  // ── Format breakdown ────────────────────────────────────────────────────
  const formatMap = new Map<string, { wins: number; losses: number; ties: number }>();
  for (const r of records) {
    const fmt = r.format?.trim();
    if (!fmt) continue;
    if (!formatMap.has(fmt)) formatMap.set(fmt, { wins: 0, losses: 0, ties: 0 });
    const s = formatMap.get(fmt)!;
    if (r.result === "win") s.wins++;
    else if (r.result === "loss") s.losses++;
    else s.ties++;
  }
  const formatStats = Array.from(formatMap.entries())
    .map(([format, s]) => { const t = s.wins + s.losses + s.ties; return { format, ...s, total: t, winRate: t > 0 ? (s.wins / t) * 100 : 0 }; })
    .sort((a, b) => b.total - a.total);

  return { wins, losses, ties, total, winRate, myPickStats, oppPickStats, myLeadStats, oppLeadStats, formatStats };
}

// ── Pair row ─────────────────────────────────────────────────────────────

function PairRow({ s }: { s: PairStat }) {
  const p1 = getById(s.id1);
  const p2 = getById(s.id2);
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-0.5 shrink-0">
        <PSprite id={s.id1} size={30} />
        <Plus size={9} className="text-muted-foreground/50 mx-0.5" />
        <PSprite id={s.id2} size={30} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-foreground truncate">
            {p1?.name ?? s.id1} + {p2?.name ?? s.id2}
          </span>
          <span className={cn("text-xs font-bold ml-2 shrink-0", s.winRate >= 50 ? "text-emerald-500 dark:text-emerald-400" : "text-red-500 dark:text-red-400")}>
            {s.winRate.toFixed(0)}%
          </span>
        </div>
        <div className="flex h-1.5 rounded-full bg-muted overflow-hidden">
          <div className="bg-emerald-400 h-full rounded-l-full" style={{ width: `${(s.wins / s.total) * 100}%` }} />
          <div className="bg-red-400 h-full" style={{ width: `${(s.losses / s.total) * 100}%` }} />
          <div className="bg-muted-foreground/30 h-full rounded-r-full" style={{ width: `${(s.ties / s.total) * 100}%` }} />
        </div>
        <p className="text-[10px] text-muted-foreground mt-0.5">
          {s.wins}W {s.losses}L{s.ties > 0 ? ` ${s.ties}T` : ""} · {s.total} game{s.total !== 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
}

// ── Pair sort bar ────────────────────────────────────────────────────────

function PairSortBar({
  sort,
  onSort,
}: {
  sort: { key: "total" | "winRate"; dir: SortDir };
  onSort: (key: "total" | "winRate") => void;
}) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-[10px] text-muted-foreground mr-1">Sort:</span>
      {(["total", "winRate"] as const).map((key) => {
        const active = sort.key === key;
        return (
          <button
            key={key}
            onClick={() => onSort(key)}
            className={cn(
              "flex items-center gap-0.5 px-1.5 py-0.5 rounded-md text-[10px] font-medium transition-colors",
              active
                ? "bg-primary/10 text-primary border border-primary/20"
                : "text-muted-foreground hover:text-foreground hover:bg-accent border border-transparent"
            )}
          >
            {key === "total" ? "Games" : "WR%"}
            <SortIcon active={active} dir={sort.dir} />
          </button>
        );
      })}
    </div>
  );
}

// ── Sort bar ──────────────────────────────────────────────────────────────

type SortKey = "name" | "winRate" | "total" | "wins" | "losses";
type SortDir = "desc" | "asc";

function SortIcon({ active, dir }: { active: boolean; dir: SortDir }) {
  if (!active) return <ArrowUpDown size={10} className="text-muted-foreground/50" />;
  return dir === "asc"
    ? <ArrowUp size={10} className="text-primary" />
    : <ArrowDown size={10} className="text-primary" />;
}

function SortBar({
  sort,
  onSort,
}: {
  sort: { key: SortKey; dir: SortDir };
  onSort: (key: SortKey) => void;
}) {
  const cols: { key: SortKey; label: string }[] = [
    { key: "name",    label: "Name"  },
    { key: "winRate", label: "WR%"   },
    { key: "total",   label: "Games" },
    { key: "wins",    label: "W"     },
    { key: "losses",  label: "L"     },
  ];
  return (
    <div className="flex items-center gap-1">
      <span className="text-[10px] text-muted-foreground mr-1">Sort:</span>
      {cols.map(({ key, label }) => {
        const active = sort.key === key;
        return (
          <button
            key={key}
            onClick={() => onSort(key)}
            className={cn(
              "flex items-center gap-0.5 px-1.5 py-0.5 rounded-md text-[10px] font-medium transition-colors",
              active
                ? "bg-primary/10 text-primary border border-primary/20"
                : "text-muted-foreground hover:text-foreground hover:bg-accent border border-transparent"
            )}
          >
            {label}
            <SortIcon active={active} dir={sort.dir} />
          </button>
        );
      })}
    </div>
  );
}

// ── Step definitions ──────────────────────────────────────────────────────

type FormStep = "myTeam" | "myPicks" | "opponentTeam" | "opponentPicks" | "result";

const STEPS: { key: FormStep; label: string; description: string }[] = [
  { key: "myTeam",        label: "My Team",         description: "Select the 6 Pokemon you brought to the game (your full team)" },
  { key: "myPicks",       label: "My Picks",         description: "Select the 2-4 Pokemon you actually chose to battle with" },
  { key: "opponentTeam",  label: "Opponent Team",    description: "Select the 6 Pokemon your opponent showed" },
  { key: "opponentPicks", label: "Opponent Picks",   description: "Select the 2-4 Pokemon your opponent chose" },
  { key: "result",        label: "Result",           description: "Did you win, lose, or tie?" },
];

// ── Main page ─────────────────────────────────────────────────────────────

export default function MatchJournalPage() {
  const { tp, locale } = useI18n();

  const [records, setRecords] = useState<MatchRecord[]>([]);
  useEffect(() => setRecords(getMatchRecords()), []);

  const [savedTeams, setSavedTeams] = useState<SavedTeam[]>([]);
  useEffect(() => setSavedTeams(getSavedTeams()), []);

  const [showForm, setShowForm] = useState(false);
  const [step, setStep] = useState<FormStep>("myTeam");
  const [myTeam, setMyTeam] = useState<number[]>([]);
  const [myPicks, setMyPicks] = useState<number[]>([]);
  const [opponentTeam, setOpponentTeam] = useState<number[]>([]);
  const [opponentPicks, setOpponentPicks] = useState<number[]>([]);
  const [result, setResult] = useState<MatchRecord["result"]>("win");
  const [notes, setNotes] = useState("");
  const [format, setFormat] = useState("");

  const [activeTab, setActiveTab] = useState<"history" | "stats">("history");
  const [expandedRecord, setExpandedRecord] = useState<string | null>(null);
  const [confirmClear, setConfirmClear] = useState(false);

  // Stats sort state
  const [mySort, setMySort] = useState<{ key: SortKey; dir: SortDir }>({ key: "total", dir: "desc" });
  const [oppSort, setOppSort] = useState<{ key: SortKey; dir: SortDir }>({ key: "winRate", dir: "asc" });

  function toggleSort(
    current: { key: SortKey; dir: SortDir },
    setter: React.Dispatch<React.SetStateAction<{ key: SortKey; dir: SortDir }>>,
    key: SortKey,
  ) {
    setter(current.key === key
      ? { key, dir: current.dir === "desc" ? "asc" : "desc" }
      : { key, dir: "desc" },
    );
  }

  const stepIndex = STEPS.findIndex((s) => s.key === step);

  const toggleMyTeam = useCallback((id: number) => {
    setMyTeam((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : prev.length < 6 ? [...prev, id] : prev);
  }, []);
  const toggleMyPicks = useCallback((id: number) => {
    setMyPicks((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : prev.length < 4 ? [...prev, id] : prev);
  }, []);
  const toggleOpponentTeam = useCallback((id: number) => {
    setOpponentTeam((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : prev.length < 6 ? [...prev, id] : prev);
  }, []);
  const toggleOpponentPicks = useCallback((id: number) => {
    setOpponentPicks((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : prev.length < 4 ? [...prev, id] : prev);
  }, []);

  const loadSavedTeam = useCallback((team: SavedTeam) => {
    const slots = deserializeTeam(team.slots);
    setMyTeam(slots.filter((s) => s.pokemon !== null).map((s) => s.pokemon!.id));
  }, []);

  // ── Past opponents: unique teams faced, sorted by most recent ─────────────
  const pastOpponents = useMemo(() => {
    type PastOpp = { ids: number[]; count: number; lastSeen: number; wins: number; losses: number; picksHistory: number[][] };
    const teamMap = new Map<string, PastOpp>();
    for (const r of records) {
      if (r.opponentTeam.length === 0) continue;
      const key = [...r.opponentTeam].sort((a, b) => a - b).join(",");
      const ex = teamMap.get(key);
      if (ex) {
        ex.count++;
        ex.lastSeen = Math.max(ex.lastSeen, r.date);
        if (r.result === "win") ex.wins++;
        else if (r.result === "loss") ex.losses++;
        if (r.opponentPicks.length >= 2) ex.picksHistory.push(r.opponentPicks);
      } else {
        teamMap.set(key, {
          ids: r.opponentTeam, count: 1, lastSeen: r.date,
          wins: r.result === "win" ? 1 : 0,
          losses: r.result === "loss" ? 1 : 0,
          picksHistory: r.opponentPicks.length >= 2 ? [r.opponentPicks] : [],
        });
      }
    }
    return [...teamMap.values()].sort((a, b) => b.lastSeen - a.lastSeen);
  }, [records]);

  // Unique past pick combos for the currently selected opponent team
  const matchedPastOpponent = useMemo(() => {
    if (opponentTeam.length < 4) return null;
    const key = [...opponentTeam].sort((a, b) => a - b).join(",");
    return pastOpponents.find(o => [...o.ids].sort((a, b) => a - b).join(",") === key) ?? null;
  }, [opponentTeam, pastOpponents]);

  function canAdvance(): boolean {
    switch (step) {
      case "myTeam":        return myTeam.length >= 1;
      case "myPicks":       return myPicks.length >= 2;
      case "opponentTeam":  return opponentTeam.length >= 1;
      case "opponentPicks": return opponentPicks.length >= 2;
      case "result":        return true;
    }
  }

  function goNext() { const n = STEPS[stepIndex + 1]; if (n) setStep(n.key); }
  function goPrev() { const p = STEPS[stepIndex - 1]; if (p) setStep(p.key); }

  function handleSave() {
    const saved = saveMatchRecord({ myTeam, myPicks, opponentTeam, opponentPicks, result, notes: notes.trim() || undefined, format: format.trim() || undefined });
    setRecords((prev) => [saved, ...prev]);
    resetForm();
  }

  function resetForm() {
    setShowForm(false); setStep("myTeam");
    setMyTeam([]); setMyPicks([]); setOpponentTeam([]); setOpponentPicks([]);
    setResult("win"); setNotes(""); setFormat("");
  }

  function handleDelete(id: string) {
    deleteMatchRecord(id);
    setRecords((prev) => prev.filter((r) => r.id !== id));
  }

  function handleClearAll() {
    clearMatchRecords(); setRecords([]); setConfirmClear(false);
  }

  function exportSavedReport(record: MatchRecord) {
    const report = record.teamTesterReport as Parameters<typeof exportTeamTesterPDF>[0] | undefined;
    if (!report) return;
    void exportTeamTesterPDF(report, locale === "fr" ? PDF_LABELS_FR : locale === "de" ? PDF_LABELS_DE : undefined);
  }

  const stats = useMemo(() => computeStats(records), [records]);

  const sortedMyPickStats = useMemo(() => {
    const arr = [...stats.myPickStats];
    const { key, dir } = mySort;
    arr.sort((a, b) => {
      const va = key === "name" ? (getById(a.id)?.name ?? "") : a[key];
      const vb = key === "name" ? (getById(b.id)?.name ?? "") : b[key];
      if (typeof va === "string") return dir === "asc" ? va.localeCompare(vb as string) : (vb as string).localeCompare(va);
      return dir === "asc" ? (va as number) - (vb as number) : (vb as number) - (va as number);
    });
    return arr;
  }, [stats.myPickStats, mySort]);

  const sortedOppPickStats = useMemo(() => {
    const arr = [...stats.oppPickStats];
    const { key, dir } = oppSort;
    arr.sort((a, b) => {
      const va = key === "name" ? (getById(a.id)?.name ?? "") : a[key];
      const vb = key === "name" ? (getById(b.id)?.name ?? "") : b[key];
      if (typeof va === "string") return dir === "asc" ? va.localeCompare(vb as string) : (vb as string).localeCompare(va);
      return dir === "asc" ? (va as number) - (vb as number) : (vb as number) - (va as number);
    });
    return arr;
  }, [stats.oppPickStats, oppSort]);

  // Lead pair sort state
  const [myLeadSort, setMyLeadSort] = useState<{ key: "total" | "winRate"; dir: SortDir }>({ key: "total", dir: "desc" });
  const [oppLeadSort, setOppLeadSort] = useState<{ key: "total" | "winRate"; dir: SortDir }>({ key: "total", dir: "desc" });
  const [fmtSort, setFmtSort] = useState<{ key: "total" | "winRate"; dir: SortDir }>({ key: "total", dir: "desc" });

  function togglePairSort(
    current: { key: "total" | "winRate"; dir: SortDir },
    setter: React.Dispatch<React.SetStateAction<{ key: "total" | "winRate"; dir: SortDir }>>,
    key: "total" | "winRate",
  ) {
    setter(current.key === key
      ? { key, dir: current.dir === "desc" ? "asc" : "desc" }
      : { key, dir: "desc" },
    );
  }

  const sortedMyLeads = useMemo(() => {
    const arr = [...stats.myLeadStats];
    const { key, dir } = myLeadSort;
    arr.sort((a, b) => {
      const va = key === "winRate" ? a.winRate : a.total;
      const vb = key === "winRate" ? b.winRate : b.total;
      return dir === "asc" ? va - vb : vb - va;
    });
    return arr.slice(0, 8);
  }, [stats.myLeadStats, myLeadSort]);

  const sortedOppLeads = useMemo(() => {
    const arr = [...stats.oppLeadStats];
    const { key, dir } = oppLeadSort;
    arr.sort((a, b) => {
      const va = key === "winRate" ? a.winRate : a.total;
      const vb = key === "winRate" ? b.winRate : b.total;
      return dir === "asc" ? va - vb : vb - va;
    });
    return arr.slice(0, 8);
  }, [stats.oppLeadStats, oppLeadSort]);

  const sortedFmtStats = useMemo(() => {
    const arr = [...stats.formatStats];
    const { key, dir } = fmtSort;
    arr.sort((a, b) => {
      const va = key === "winRate" ? a.winRate : a.total;
      const vb = key === "winRate" ? b.winRate : b.total;
      return dir === "asc" ? va - vb : vb - va;
    });
    return arr;
  }, [stats.formatStats, fmtSort]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-4xl font-bold">
          <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Match Journal
          </span>
        </h1>
        <p className="text-muted-foreground mt-2 text-sm max-w-xl">
          Track your games, review your picks and learn from your results.
        </p>
      </motion.div>

      {/* Quick stats */}
      {records.length > 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-4 gap-3">
          {[
            { label: "Games",  value: stats.total, color: "text-foreground" },
            { label: "Wins",   value: stats.wins,  color: "text-emerald-500 dark:text-emerald-400" },
            { label: "Losses", value: stats.losses, color: "text-red-500 dark:text-red-400" },
            { label: "Win %",  value: `${stats.winRate.toFixed(0)}%`, color: stats.winRate >= 50 ? "text-emerald-500 dark:text-emerald-400" : "text-red-500 dark:text-red-400" },
          ].map(({ label, value, color }) => (
            <div key={label} className="glass rounded-xl p-3 text-center">
              <div className={cn("text-2xl font-bold", color)}>{value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Toolbar */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => setShowForm((p) => !p)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 text-white text-sm font-medium shadow-sm hover:from-violet-600 hover:to-indigo-700 transition-all"
        >
          {showForm ? <X size={15} /> : <Plus size={15} />}
          {showForm ? "Cancel" : "Log New Game"}
        </button>

        <div className="flex items-center gap-1 glass rounded-xl p-1">
          {(["history", "stats"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all",
                activeTab === tab
                  ? "bg-gradient-to-r from-violet-500 to-indigo-600 text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab === "history" ? <ClipboardList size={13} /> : <BarChart3 size={13} />}
              {tab === "history" ? "History" : "Stats"}
            </button>
          ))}
        </div>
      </div>

      {/* Log Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="glass rounded-2xl border border-violet-200 dark:border-violet-500/20 p-5 space-y-5">

              {/* Step indicator */}
              <div className="flex items-center gap-1">
                {STEPS.map((s, i) => (
                  <div key={s.key} className="flex items-center gap-1 flex-1">
                    <button
                      onClick={() => { if (i <= stepIndex) setStep(s.key); }}
                      className={cn(
                        "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all shrink-0",
                        i < stepIndex  ? "bg-violet-500 text-white cursor-pointer"
                        : i === stepIndex ? "bg-violet-500 text-white ring-2 ring-violet-300 dark:ring-violet-500/40"
                        : "bg-muted text-muted-foreground cursor-default"
                      )}
                    >
                      {i < stepIndex ? <Check size={12} /> : i + 1}
                    </button>
                    {i < STEPS.length - 1 && (
                      <div className={cn("flex-1 h-0.5 rounded", i < stepIndex ? "bg-violet-400" : "bg-border")} />
                    )}
                  </div>
                ))}
              </div>

              <div>
                <h2 className="font-semibold text-foreground">Step {stepIndex + 1}: {STEPS[stepIndex].label}</h2>
                <p className="text-xs text-muted-foreground mt-0.5">{STEPS[stepIndex].description}</p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.15 }}
                >
                  {step === "myTeam" && (
                    <div className="space-y-3">
                      {savedTeams.length > 0 && (
                        <div className="space-y-1.5">
                          <span className="text-xs font-medium text-muted-foreground">Load from saved team:</span>
                          <div className="flex flex-wrap gap-2">
                            {savedTeams.map((t) => (
                              <button
                                key={t.id}
                                onClick={() => loadSavedTeam(t)}
                                className="px-3 py-1 rounded-lg text-xs glass glass-hover border border-border hover:border-violet-400 hover:text-violet-600 dark:hover:text-violet-400 text-foreground transition-colors"
                              >
                                {t.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                      <PokemonPicker selected={myTeam} onToggle={toggleMyTeam} maxSelect={6} label="Select up to 6 Pokemon (your full team)" />
                    </div>
                  )}

                  {step === "myPicks" && (
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {myTeam.map((id) => {
                          const isSelected = myPicks.includes(id);
                          const disabled = !isSelected && myPicks.length >= 4;
                          return (
                            <button
                              key={id}
                              disabled={disabled}
                              onClick={() => toggleMyPicks(id)}
                              className={cn(
                                "flex flex-col items-center gap-0.5 p-2 rounded-xl border transition-all",
                                isSelected  ? "border-emerald-400 dark:border-emerald-500/60 bg-emerald-50 dark:bg-emerald-500/10 ring-2 ring-emerald-300 dark:ring-emerald-500/30"
                                : disabled  ? "border-border opacity-30 cursor-not-allowed"
                                : "border-border glass-hover hover:border-emerald-300"
                              )}
                            >
                              <PSprite id={id} size={44} />
                              <span className="text-[10px] text-muted-foreground max-w-[52px] truncate">{getById(id)?.name}</span>
                            </button>
                          );
                        })}
                      </div>
                      <p className="text-xs text-muted-foreground">Select 2-4 Pokemon you brought. ({myPicks.length}/4)</p>
                    </div>
                  )}

                  {step === "opponentTeam" && (
                    <div className="space-y-4">
                      {/* ── Past opponents quick-select ── */}
                      {pastOpponents.length > 0 && (
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5" /> Avversari già affrontati
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
                            {pastOpponents.map((opp) => {
                              const key = [...opp.ids].sort((a, b) => a - b).join(",");
                              const curKey = [...opponentTeam].sort((a, b) => a - b).join(",");
                              const isActive = key === curKey;
                              const wr = opp.wins + opp.losses > 0
                                ? Math.round((opp.wins / (opp.wins + opp.losses)) * 100)
                                : null;
                              return (
                                <button
                                  type="button"
                                  key={key}
                                  onClick={() => { setOpponentTeam(opp.ids); setOpponentPicks([]); }}
                                  className={cn(
                                    "flex items-center gap-2 p-2.5 rounded-xl border text-left transition-all",
                                    isActive
                                      ? "border-red-400 dark:border-red-500/60 bg-red-50 dark:bg-red-500/10 ring-2 ring-red-200 dark:ring-red-500/20"
                                      : "border-border hover:border-red-300 dark:hover:border-red-500/40 glass-hover"
                                  )}
                                >
                                  <div className="flex flex-wrap gap-0.5 flex-1">
                                    {opp.ids.map(id => <PSprite key={id} id={id} size={28} />)}
                                  </div>
                                  <div className="text-right shrink-0 min-w-[52px]">
                                    <p className="text-[10px] font-semibold text-muted-foreground">
                                      {opp.count}× affrontato
                                    </p>
                                    {wr !== null && (
                                      <p className={cn("text-[10px] font-bold",
                                        wr >= 55 ? "text-emerald-600 dark:text-emerald-400" :
                                        wr < 45  ? "text-red-500 dark:text-red-400" :
                                        "text-muted-foreground"
                                      )}>
                                        {wr}% WR
                                      </p>
                                    )}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                          <p className="text-[10px] text-muted-foreground mt-2">
                            Clicca su un team per selezionarlo, oppure componi manualmente qui sotto.
                          </p>
                        </div>
                      )}

                      {/* ── Manual picker ── */}
                      <PokemonPicker selected={opponentTeam} onToggle={toggleOpponentTeam} maxSelect={6} label="Seleziona fino a 6 Pokémon (team avversario)" />
                    </div>
                  )}

                  {step === "opponentPicks" && (
                    <div className="space-y-4">
                      {/* ── Past picks for this specific opponent team ── */}
                      {matchedPastOpponent && matchedPastOpponent.picksHistory.length > 0 && (() => {
                        const uniquePicks = [...new Map(
                          matchedPastOpponent.picksHistory.map(p => [[...p].sort((a,b)=>a-b).join(","), p])
                        ).values()];
                        return (
                          <div>
                            <p className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-1.5">
                              <BookOpen className="w-3.5 h-3.5" /> Picks usati in passato da questo team
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {uniquePicks.slice(0, 6).map((picks, i) => {
                                const isActive = [...picks].sort((a,b)=>a-b).join(",") === [...opponentPicks].sort((a,b)=>a-b).join(",");
                                return (
                                  <button
                                    type="button"
                                    key={i}
                                    onClick={() => setOpponentPicks(picks)}
                                    className={cn(
                                      "flex items-center gap-1 p-2 rounded-xl border transition-all",
                                      isActive
                                        ? "border-red-400 dark:border-red-500/60 bg-red-50 dark:bg-red-500/10 ring-2 ring-red-200 dark:ring-red-500/20"
                                        : "border-border hover:border-red-300 dark:hover:border-red-500/40 glass-hover"
                                    )}
                                  >
                                    {picks.map(id => <PSprite key={id} id={id} size={32} />)}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })()}

                      {/* ── Toggle singoli ── */}
                      <div className="flex flex-wrap gap-2">
                        {opponentTeam.map((id) => {
                          const isSelected = opponentPicks.includes(id);
                          const disabled = !isSelected && opponentPicks.length >= 4;
                          return (
                            <button
                              type="button"
                              key={id}
                              disabled={disabled}
                              onClick={() => toggleOpponentPicks(id)}
                              className={cn(
                                "flex flex-col items-center gap-0.5 p-2 rounded-xl border transition-all",
                                isSelected  ? "border-red-400 dark:border-red-500/60 bg-red-50 dark:bg-red-500/10 ring-2 ring-red-300 dark:ring-red-500/30"
                                : disabled  ? "border-border opacity-30 cursor-not-allowed"
                                : "border-border glass-hover hover:border-red-300"
                              )}
                            >
                              <PSprite id={id} size={44} />
                              <span className="text-[10px] text-muted-foreground max-w-[52px] truncate">{getById(id)?.name}</span>
                            </button>
                          );
                        })}
                      </div>
                      <p className="text-xs text-muted-foreground">Seleziona 2-4 Pokémon portati dall&apos;avversario. ({opponentPicks.length}/4)</p>
                    </div>
                  )}

                  {step === "result" && (
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        {(["win", "loss", "tie"] as const).map((r) => (
                          <button
                            key={r}
                            onClick={() => setResult(r)}
                            className={cn(
                              "flex-1 py-3 rounded-xl border-2 font-bold uppercase tracking-wide text-sm transition-all",
                              result === r
                                ? r === "win"  ? "border-emerald-400 dark:border-emerald-500/60 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                                : r === "loss" ? "border-red-400 dark:border-red-500/60 bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400"
                                : "border-border bg-muted text-foreground"
                                : "border-border text-muted-foreground hover:border-muted-foreground/50"
                            )}
                          >
                            {r === "win" ? "Win" : r === "loss" ? "Loss" : "Tie"}
                          </button>
                        ))}
                      </div>

                      <div>
                        <label className="text-xs text-muted-foreground block mb-1">Format <span className="opacity-60">(optional)</span></label>
                        <input
                          type="text"
                          value={format}
                          onChange={(e) => setFormat(e.target.value)}
                          placeholder="e.g. Ladder, BO3 G1, Tournament..."
                          className="w-full px-3 py-1.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-muted-foreground block mb-1">Notes <span className="opacity-60">(optional)</span></label>
                        <textarea
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="What went well? What would you do differently?"
                          rows={3}
                          className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-colors resize-none"
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between pt-1 border-t border-border">
                <button
                  onClick={goPrev}
                  disabled={stepIndex === 0}
                  className="px-4 py-2 rounded-lg text-sm text-muted-foreground glass glass-hover border border-border disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  Back
                </button>
                {stepIndex < STEPS.length - 1 ? (
                  <button
                    onClick={goNext}
                    disabled={!canAdvance()}
                    className="px-5 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-sm font-medium transition-all shadow-sm"
                  >
                    <Check size={14} />
                    Save Game
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty state */}
      {records.length === 0 && !showForm && (
        <div className="text-center py-20 space-y-3">
          <BookOpen size={40} className="mx-auto text-muted-foreground/40" />
          <p className="font-medium text-muted-foreground">No games logged yet</p>
          <p className="text-sm text-muted-foreground/60">Click "Log New Game" to record your first match.</p>
        </div>
      )}

      {/* History */}
      {records.length > 0 && activeTab === "history" && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{records.length} game{records.length !== 1 ? "s" : ""} recorded</span>
            {!confirmClear ? (
              <button onClick={() => setConfirmClear(true)} className="text-xs text-red-500 dark:text-red-400 hover:text-red-600 transition-colors flex items-center gap-1">
                <Trash2 size={11} /> Clear all
              </button>
            ) : (
              <div className="flex items-center gap-2 text-xs">
                <span className="text-red-500">Are you sure?</span>
                <button onClick={handleClearAll} className="px-2 py-0.5 rounded bg-red-500 text-white hover:bg-red-600 transition-colors">Yes</button>
                <button onClick={() => setConfirmClear(false)} className="px-2 py-0.5 rounded border border-border text-muted-foreground hover:text-foreground transition-colors">No</button>
              </div>
            )}
          </div>

          {records.map((r) => {
            const isExpanded = expandedRecord === r.id;
            return (
              <motion.div
                key={r.id}
                layout
                className={cn(
                  "glass rounded-xl overflow-hidden",
                  r.result === "win"  ? "border border-emerald-200 dark:border-emerald-500/20"
                  : r.result === "loss" ? "border border-red-200 dark:border-red-500/20"
                  : "border border-border"
                )}
              >
                <div
                  className="flex items-center gap-3 p-3 cursor-pointer hover:bg-accent/40 transition-colors"
                  onClick={() => setExpandedRecord(isExpanded ? null : r.id)}
                >
                  <ResultBadge result={r.result} />

                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wide w-6 shrink-0">Me</span>
                      <div className="flex gap-0.5">{r.myPicks.map((id) => <PSprite key={id} id={id} size={28} />)}</div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wide w-6 shrink-0">Opp</span>
                      <div className="flex gap-0.5">{r.opponentPicks.map((id) => <PSprite key={id} id={id} size={28} />)}</div>
                    </div>
                  </div>

                  <div className="text-right flex flex-col items-end gap-1 shrink-0">
                    <span className="text-xs text-muted-foreground">{fmtDate(r.date)}</span>
                    {r.format && <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-muted text-muted-foreground">{r.format}</span>}
                  </div>

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn("text-muted-foreground transition-transform duration-200 shrink-0", isExpanded && "rotate-180")}><path d="m6 9 6 6 6-6"/></svg>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-3 border-t border-border space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">My Full Team</p>
                            <div className="flex flex-wrap gap-1.5">
                              {r.myTeam.map((id) => (
                                <div key={id} className={cn("flex items-center gap-1 px-1.5 py-0.5 rounded-lg text-xs border",
                                  r.myPicks.includes(id)
                                    ? "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300"
                                    : "bg-muted border-border text-muted-foreground"
                                )}>
                                  <PSprite id={id} size={22} />
                                  <span>{getById(id)?.name}</span>
                                  {r.myPicks.includes(id) && <Check size={9} className="text-emerald-500" />}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Opponent Full Team</p>
                            <div className="flex flex-wrap gap-1.5">
                              {r.opponentTeam.map((id) => (
                                <div key={id} className={cn("flex items-center gap-1 px-1.5 py-0.5 rounded-lg text-xs border",
                                  r.opponentPicks.includes(id)
                                    ? "bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/30 text-red-800 dark:text-red-300"
                                    : "bg-muted border-border text-muted-foreground"
                                )}>
                                  <PSprite id={id} size={22} />
                                  <span>{getById(id)?.name}</span>
                                  {r.opponentPicks.includes(id) && <Swords size={9} className="text-red-400" />}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {r.notes && (
                          <div className="bg-muted/50 rounded-xl p-3">
                            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Notes</p>
                            <p className="text-sm text-foreground">{r.notes}</p>
                          </div>
                        )}

                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <button
                            onClick={() => handleDelete(r.id)}
                            className="flex items-center gap-1 text-xs text-red-500 dark:text-red-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 size={11} /> Delete this record
                          </button>
                          <div className="flex items-center gap-2 flex-wrap">
                            {!!r.teamTesterReport && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  exportSavedReport(r);
                                }}
                                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-colors"
                              >
                                <Download size={11} />
                                Matchup PDF
                              </button>
                            )}
                            <Link
                              href={`/battle-bot?tab=team-tester&opp=${r.opponentTeam.join(',')}`}
                              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30 hover:bg-amber-100 dark:hover:bg-amber-500/20 transition-colors"
                            >
                              <FlaskConical size={11} />
                              Test vs this team
                              <ExternalLink size={10} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Stats */}
      {records.length > 0 && activeTab === "stats" && (
        <div className="space-y-6">

          {/* My performance */}
          <div className="glass rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Trophy size={15} className="text-violet-500" />
                <h2 className="font-semibold text-foreground text-sm">My Pokémon Performance</h2>
                <span className="text-xs text-muted-foreground">win rate when I bring each</span>
              </div>
              <SortBar sort={mySort} onSort={(k) => toggleSort(mySort, setMySort, k)} />
            </div>
            {stats.myPickStats.length === 0 ? (
              <p className="text-sm text-muted-foreground">Not enough data yet.</p>
            ) : (
              <div className="space-y-2.5">
                {sortedMyPickStats.map((s) => {
                  const p = getById(s.id);
                  return (
                    <div key={s.id} className="flex items-center gap-3">
                      <PSprite id={s.id} size={32} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-foreground truncate">{p?.name ?? s.id}</span>
                          <span className={cn("text-xs font-bold ml-2 shrink-0", s.winRate >= 50 ? "text-emerald-500 dark:text-emerald-400" : "text-red-500 dark:text-red-400")}>
                            {s.winRate.toFixed(0)}%
                          </span>
                        </div>
                        <div className="flex h-1.5 rounded-full bg-muted overflow-hidden">
                          <div className="bg-emerald-400 h-full rounded-l-full" style={{ width: `${(s.wins / s.total) * 100}%` }} />
                          <div className="bg-red-400 h-full" style={{ width: `${(s.losses / s.total) * 100}%` }} />
                          <div className="bg-muted-foreground/30 h-full rounded-r-full" style={{ width: `${(s.ties / s.total) * 100}%` }} />
                        </div>
                        <p className="text-[10px] text-muted-foreground mt-0.5">
                          {s.wins}W {s.losses}L{s.ties > 0 ? ` ${s.ties}T` : ""} · {s.total} game{s.total !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* My lead pairs */}
          {stats.myLeadStats.length > 0 && (
            <div className="glass rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Users size={15} className="text-violet-400" />
                  <h2 className="font-semibold text-foreground text-sm">My Lead Pairs</h2>
                  <span className="text-xs text-muted-foreground">most used Pokémon combos</span>
                </div>
                <PairSortBar sort={myLeadSort} onSort={(k) => togglePairSort(myLeadSort, setMyLeadSort, k)} />
              </div>
              <div className="space-y-2.5">
                {sortedMyLeads.map((s) => <PairRow key={s.pairKey} s={s} />)}
              </div>
            </div>
          )}

          {/* Threats */}
          <div className="glass rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Flame size={15} className="text-red-500" />
                <h2 className="font-semibold text-foreground text-sm">Opponent Threats</h2>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <SortBar sort={oppSort} onSort={(k) => toggleSort(oppSort, setOppSort, k)} />
                {stats.oppPickStats.length > 0 && (
                  <Link
                    href={`/battle-bot?tab=team-tester&opp=${stats.oppPickStats.slice(0, 6).map((s) => s.id).join(',')}`}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30 hover:bg-amber-100 dark:hover:bg-amber-500/20 transition-colors"
                  >
                    <FlaskConical size={11} />
                    Test vs top threats
                    <ExternalLink size={10} />
                  </Link>
                )}
              </div>
            </div>
            {stats.oppPickStats.length === 0 ? (
              <p className="text-sm text-muted-foreground">Not enough data yet.</p>
            ) : (
              <div className="space-y-2.5">
                {sortedOppPickStats.map((s) => {
                  const p = getById(s.id);
                  const wr = s.wins / s.total;
                  return (
                    <div key={s.id} className="flex items-center gap-3">
                      <PSprite id={s.id} size={32} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className="text-sm text-foreground truncate">{p?.name ?? s.id}</span>
                            {wr < 0.4 && <AlertCircle size={12} className="text-red-400 shrink-0" />}
                          </div>
                          <span className={cn("text-xs font-bold ml-2 shrink-0", wr >= 0.5 ? "text-emerald-500 dark:text-emerald-400" : "text-red-500 dark:text-red-400")}>
                            {(wr * 100).toFixed(0)}%
                          </span>
                        </div>
                        <div className="flex h-1.5 rounded-full bg-muted overflow-hidden">
                          <div className="bg-emerald-400 h-full rounded-l-full" style={{ width: `${wr * 100}%` }} />
                          <div className="bg-red-400 h-full" style={{ width: `${(s.losses / s.total) * 100}%` }} />
                          <div className="bg-muted-foreground/30 h-full rounded-r-full" style={{ width: `${(s.ties / s.total) * 100}%` }} />
                        </div>
                        <p className="text-[10px] text-muted-foreground mt-0.5">
                          {s.wins}W {s.losses}L{s.ties > 0 ? ` ${s.ties}T` : ""} · faced {s.total} time{s.total !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Opponent lead pairs */}
          {stats.oppLeadStats.length > 0 && (
            <div className="glass rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Swords size={15} className="text-red-400" />
                  <h2 className="font-semibold text-foreground text-sm">Opponent Lead Pairs</h2>
                  <span className="text-xs text-muted-foreground">most seen opponent combos</span>
                </div>
                <PairSortBar sort={oppLeadSort} onSort={(k) => togglePairSort(oppLeadSort, setOppLeadSort, k)} />
              </div>
              <div className="space-y-2.5">
                {sortedOppLeads.map((s) => <PairRow key={s.pairKey} s={s} />)}
              </div>
            </div>
          )}

          {/* Format breakdown */}
          {stats.formatStats.length > 0 && (
            <div className="glass rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Tag size={15} className="text-cyan-500" />
                  <h2 className="font-semibold text-foreground text-sm">By Format</h2>
                  <span className="text-xs text-muted-foreground">performance per game format</span>
                </div>
                <PairSortBar sort={fmtSort} onSort={(k) => togglePairSort(fmtSort, setFmtSort, k)} />
              </div>
              <div className="space-y-2">
                {sortedFmtStats.map((f) => (
                  <div key={f.format} className="flex items-center gap-3">
                    <div className="w-24 shrink-0">
                      <span className="text-xs font-medium text-foreground truncate block">{f.format}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-muted-foreground">{f.wins}W {f.losses}L{f.ties > 0 ? ` ${f.ties}T` : ""} · {f.total} game{f.total !== 1 ? "s" : ""}</span>
                        <span className={cn("text-xs font-bold ml-2 shrink-0", f.winRate >= 50 ? "text-emerald-500 dark:text-emerald-400" : "text-red-500 dark:text-red-400")}>
                          {f.winRate.toFixed(0)}%
                        </span>
                      </div>
                      <div className="flex h-1.5 rounded-full bg-muted overflow-hidden">
                        <div className="bg-emerald-400 h-full rounded-l-full" style={{ width: `${(f.wins / f.total) * 100}%` }} />
                        <div className="bg-red-400 h-full" style={{ width: `${(f.losses / f.total) * 100}%` }} />
                        <div className="bg-muted-foreground/30 h-full rounded-r-full" style={{ width: `${(f.ties / f.total) * 100}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Trend */}
          {records.length >= 3 && (
            <div className="glass rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2">
                <TrendingUp size={15} className="text-indigo-500" />
                <h2 className="font-semibold text-foreground text-sm">Recent Form</h2>
                <span className="text-xs text-muted-foreground">last {Math.min(10, records.length)} games</span>
              </div>
              <div className="flex items-center gap-1.5">
                {records.slice(0, 10).reverse().map((r) => (
                  <div
                    key={r.id}
                    title={`${r.result} - ${fmtDate(r.date)}`}
                    className={cn("flex-1 h-9 rounded-lg", r.result === "win" ? "bg-emerald-400" : r.result === "loss" ? "bg-red-400" : "bg-muted-foreground/30")}
                  />
                ))}
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-emerald-400 inline-block" />Win</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-red-400 inline-block" />Loss</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-muted-foreground/30 inline-block" />Tie</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
