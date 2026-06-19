"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import Image from "next/image";
import Link from "next/link";
import { exportTeamTesterPDF, PDF_LABELS_FR, PDF_LABELS_DE } from "@/lib/export-pdf";
import {
  Plus, Trash2, X, Trophy, Swords, ChevronDown,
  BarChart3, BookOpen, Check, ClipboardList, Flame,
  TrendingUp, TrendingDown, Minus, AlertCircle, ExternalLink, FlaskConical, Download,
  ArrowUp, ArrowDown, ArrowUpDown, Users, Tag, Globe, Loader2, Film,
} from "lucide-react";
import { POKEMON_SEED } from "@/lib/pokemon-data";
import { cn } from "@/lib/utils";
import { useIsNative } from "@/hooks/useIsNative";
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

// ── Limitless import helpers ──────────────────────────────────────────────────

const LIMITLESS_SLUG_OVERRIDES: Record<string, string> = {
  "rotom-heat": "Heat Rotom", "rotom-wash": "Wash Rotom", "rotom-mow": "Mow Rotom",
  "rotom-fan": "Fan Rotom", "rotom-frost": "Frost Rotom",
  "arcanine-hisui": "Hisuian Arcanine", "typhlosion-hisui": "Hisuian Typhlosion",
  "lilligant-hisui": "Hisuian Lilligant", "zoroark-hisui": "Hisuian Zoroark",
  "braviary-hisui": "Hisuian Braviary", "goodra-hisui": "Hisuian Goodra",
  "decidueye-hisui": "Hisuian Decidueye", "samurott-hisui": "Hisuian Samurott",
  "electrode-hisui": "Hisuian Electrode", "avalugg-hisui": "Hisuian Avalugg",
  "sneasel-hisui": "Hisuian Sneasel", "voltorb-hisui": "Hisuian Voltorb",
  "ninetales-alola": "Alolan Ninetales", "muk-alola": "Alolan Muk",
  "marowak-alola": "Alolan Marowak", "raichu-alola": "Alolan Raichu",
  "exeggutor-alola": "Alolan Exeggutor", "persian-alola": "Alolan Persian",
  "sandslash-alola": "Alolan Sandslash", "golem-alola": "Alolan Golem",
  "slowking-galar": "Galarian Slowking", "slowbro-galar": "Galarian Slowbro",
  "weezing-galar": "Galarian Weezing", "moltres-galar": "Galarian Moltres",
  "zapdos-galar": "Galarian Zapdos", "articuno-galar": "Galarian Articuno",
  "tauros-paldea-combat": "Paldean Tauros Combat", "tauros-paldea-blaze": "Paldean Tauros Blaze",
  "tauros-paldea-aqua": "Paldean Tauros Aqua", "tauros-paldea": "Paldean Tauros Combat",
  "basculegion-f": "Basculegion-F", "basculegion-female": "Basculegion-F",
  "basculegion": "Basculegion-M", "basculegion-m": "Basculegion-M", "basculegion-male": "Basculegion-M",
  "meowstic": "Meowstic-M", "meowstic-f": "Meowstic-F", "meowstic-female": "Meowstic-F",
  "indeedee": "Indeedee-M", "indeedee-f": "Indeedee-F", "indeedee-female": "Indeedee-F",
  "urshifu": "Urshifu", "urshifu-rapid-strike": "Urshifu-Rapid-Strike",
  "ogerpon-wellspring": "Ogerpon-Wellspring", "ogerpon-hearthflame": "Ogerpon-Hearthflame",
  "ogerpon-cornerstone": "Ogerpon-Cornerstone",
  "palafin": "Palafin", "palafin-hero": "Palafin",
  "aegislash": "Aegislash", "aegislash-blade": "Aegislash",
  "wormadam-sandy": "Wormadam-Sandy", "wormadam-trash": "Wormadam-Trash", "wormadam": "Wormadam",
  "lycanroc-midnight": "Lycanroc-Midnight", "lycanroc-dusk": "Lycanroc-Dusk", "lycanroc": "Lycanroc",
  "kommo-o": "Kommo-o", "jangmo-o": "Jangmo-o", "hakamo-o": "Hakamo-o",
  "ho-oh": "Ho-Oh", "chi-yu": "Chi-Yu", "ting-lu": "Ting-Lu",
  "chien-pao": "Chien-Pao", "wo-chien": "Wo-Chien",
  "mr-rime": "Mr. Rime", "mr-mime": "Mr. Mime", "mime-jr": "Mime Jr.",
  "type-null": "Type: Null",
};

const pokemonNameMap = new Map<string, number>(POKEMON_SEED.map((p) => [p.name.toLowerCase(), p.id]));

function resolveSlug(slug: string): number | null {
  const ov = LIMITLESS_SLUG_OVERRIDES[slug.toLowerCase()];
  if (ov) { const id = pokemonNameMap.get(ov.toLowerCase()); if (id !== undefined) return id; }
  const direct = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const did = pokemonNameMap.get(direct.toLowerCase());
  if (did !== undefined) return did;
  const first = slug.split("-")[0];
  const fid = pokemonNameMap.get((first.charAt(0).toUpperCase() + first.slice(1)).toLowerCase());
  if (fid !== undefined) return fid;
  return null;
}

function parseLimitlessUrl(raw: string): { tournamentId: string; playerId: string } | null {
  try {
    const url = raw.trim().startsWith("http") ? raw.trim() : `https://${raw.trim()}`;
    const parts = new URL(url).pathname.split("/").filter(Boolean);
    // Format: standings.limitlessvgc.com/{id}/player/{playerId}
    if (parts.length >= 3 && parts[1] === "player") return { tournamentId: parts[0], playerId: parts[2] };
    // Format: play.limitlesstcg.com/tournament/{id}/player/{playerId}
    if (parts.length >= 4 && parts[0] === "tournament" && parts[2] === "player") return { tournamentId: parts[1], playerId: parts[3] };
    return null;
  } catch { return null; }
}

interface LimitlessMatchRaw {
  table: number;
  round: number;
  phase: number;
  completed: number;
  winner: number | null;
  p1_id: number;
  p2_id: number | null;
  p1_name: string;
  p2_name: string | null;
  p1_team: string;
  p2_team: string | null;
}
interface LimitlessTournamentInfo {
  name?: string;
  city?: string;
  country?: string;
  date?: string;
}
interface ImportMatch {
  round: number;
  phase: string;
  result: "win" | "loss" | "tie";
  myTeam: number[];
  oppTeam: number[];
  oppName: string;
  format: string;
  isDuplicate: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────

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

  const picksUnknownCount = records.filter((r) => r.picksUnknown).length;
  const picksRecords = records.filter((r) => !r.picksUnknown);

  const myPickMap = new Map<number, { wins: number; losses: number; ties: number }>();
  for (const r of picksRecords) {
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
  for (const r of picksRecords) {
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
  for (const r of picksRecords) {
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
  for (const r of picksRecords) {
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

  return { wins, losses, ties, total, winRate, myPickStats, oppPickStats, myLeadStats, oppLeadStats, formatStats, picksUnknownCount };
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
  const isNative = useIsNative();

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
  const [picksUnknown, setPicksUnknown] = useState(false);

  const [showImport, setShowImport] = useState(false);
  const [importUrl, setImportUrl] = useState("");
  const [importLoading, setImportLoading] = useState(false);
  const [importError, setImportError] = useState<string | null>(null);
  const [importPreview, setImportPreview] = useState<ImportMatch[] | null>(null);
  const [importTournamentName, setImportTournamentName] = useState("");

  const [showJsonImport, setShowJsonImport] = useState(false);
  const [jsonImportText, setJsonImportText] = useState("");
  const [jsonImportPreview, setJsonImportPreview] = useState<ImportMatch[] | null>(null);
  const [jsonImportError, setJsonImportError] = useState<string | null>(null);

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

  const activeSteps = useMemo(
    () => picksUnknown
      ? STEPS.filter((s) => s.key !== "myPicks" && s.key !== "opponentPicks")
      : STEPS,
    [picksUnknown]
  );
  const stepIndex = activeSteps.findIndex((s) => s.key === step);

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

  function goNext() { const n = activeSteps[stepIndex + 1]; if (n) setStep(n.key); }
  function goPrev() { const p = activeSteps[stepIndex - 1]; if (p) setStep(p.key); }

  function handleSave() {
    const saved = saveMatchRecord({ myTeam, myPicks: picksUnknown ? [] : myPicks, opponentTeam, opponentPicks: picksUnknown ? [] : opponentPicks, result, notes: notes.trim() || undefined, format: format.trim() || undefined, picksUnknown: picksUnknown || undefined });
    setRecords((prev) => [saved, ...prev]);
    resetForm();
  }

  function resetForm() {
    setShowForm(false); setStep("myTeam");
    setMyTeam([]); setMyPicks([]); setOpponentTeam([]); setOpponentPicks([]);
    setResult("win"); setNotes(""); setFormat(""); setPicksUnknown(false);
  }

  function resetImport() {
    setShowImport(false);
    setImportUrl("");
    setImportPreview(null);
    setImportError(null);
    setImportTournamentName("");
  }

  function resetJsonImport() {
    setShowJsonImport(false);
    setJsonImportText("");
    setJsonImportPreview(null);
    setJsonImportError(null);
  }

  interface AiJsonMatch {
    round?: string;
    opponent?: string;
    result?: string;
    opponentTeam?: string[];
    myPicks?: string[];
    opponentPicks?: string[];
    opponentPicksUnknown?: boolean;
    notes?: string;
  }

  function parseJsonImport() {
    setJsonImportError(null);
    setJsonImportPreview(null);
    let parsed: { myTeam?: string[]; matches?: AiJsonMatch[] };
    try {
      const text = jsonImportText.trim();
      const start = text.indexOf("{");
      const end = text.lastIndexOf("}");
      parsed = JSON.parse(start >= 0 && end >= 0 ? text.slice(start, end + 1) : text);
    } catch {
      setJsonImportError("JSON non valido. Copia l'intero output di Gemini senza modifiche.");
      return;
    }
    if (!parsed.matches || !Array.isArray(parsed.matches)) {
      setJsonImportError("Il JSON deve avere un campo \"matches\" con l'array dei match.");
      return;
    }
    const globalMyTeam = (parsed.myTeam ?? [])
      .map((s) => resolveSlug(s))
      .filter((id): id is number => id !== null);

    const existingFormats = new Set(records.map((r) => r.format).filter(Boolean));
    const preview: ImportMatch[] = parsed.matches.map((m, i) => {
      const myTeam = globalMyTeam;
      const oppTeam = (m.opponentTeam ?? [])
        .map((s) => resolveSlug(s))
        .filter((id): id is number => id !== null);
      const myPicks = (m.myPicks ?? [])
        .map((s) => resolveSlug(s))
        .filter((id): id is number => id !== null);
      const oppPicks = m.opponentPicksUnknown ? [] :
        (m.opponentPicks ?? [])
          .map((s) => resolveSlug(s))
          .filter((id): id is number => id !== null);
      const result: "win" | "loss" | "tie" =
        m.result === "win" || m.result === "loss" || m.result === "tie" ? m.result : "win";
      const roundLabel = m.round ?? `Match ${i + 1}`;
      const fmt = `AI Import · ${roundLabel}`;
      return {
        round: i + 1,
        phase: roundLabel,
        result,
        myTeam,
        oppTeam,
        oppName: m.opponent ?? "Unknown",
        format: fmt,
        isDuplicate: existingFormats.has(fmt),
        _myPicks: myPicks,
        _oppPicks: oppPicks,
        _picksUnknown: m.opponentPicksUnknown ?? false,
        _notes: m.notes ?? "",
      } as ImportMatch & { _myPicks: number[]; _oppPicks: number[]; _picksUnknown: boolean; _notes: string };
    });
    if (preview.length === 0) {
      setJsonImportError("Nessun match trovato nel JSON.");
      return;
    }
    setJsonImportPreview(preview);
  }

  function handleJsonImport() {
    if (!jsonImportPreview) return;
    const newMatches = jsonImportPreview.filter((m) => !m.isDuplicate);
    if (newMatches.length === 0) return;
    const saved = newMatches.map((m) => {
      const ext = m as ImportMatch & { _myPicks: number[]; _oppPicks: number[]; _picksUnknown: boolean; _notes: string };
      return saveMatchRecord({
        myTeam: m.myTeam,
        myPicks: ext._myPicks ?? [],
        opponentTeam: m.oppTeam,
        opponentPicks: ext._oppPicks ?? [],
        result: m.result,
        format: m.format,
        notes: ext._notes || (m.oppName !== "Unknown" ? `vs ${m.oppName}` : undefined),
        picksUnknown: ext._picksUnknown || ext._oppPicks?.length === 0 || undefined,
      });
    });
    setRecords((prev) => [...saved.reverse(), ...prev]);
    resetJsonImport();
  }

  async function fetchImportData() {
    const parsed = parseLimitlessUrl(importUrl);
    if (!parsed) {
      setImportError("URL non valido. Formato atteso: standings.limitlessvgc.com/{id}/player/{name} oppure play.limitlesstcg.com/tournament/{id}/player/{name}");
      return;
    }
    setImportLoading(true);
    setImportError(null);
    setImportPreview(null);
    setImportTournamentName("");
    try {
      const res = await fetch(`/api/limitless-matches?tournamentId=${parsed.tournamentId}&playerId=${parsed.playerId}`);
      const data = await res.json() as { matches?: LimitlessMatchRaw[]; tournament?: LimitlessTournamentInfo; error?: string };
      if (!res.ok) { setImportError(data.error ?? "Errore nel caricamento"); return; }
      const { matches = [], tournament } = data;
      if (tournament) {
        const parts = [
          tournament.name,
          [tournament.city, tournament.country].filter(Boolean).join(", "),
          tournament.date,
        ].filter(Boolean);
        setImportTournamentName(parts.join(" · "));
      }
      const myId = parseInt(parsed.playerId, 10);
      const existingFormats = new Set(records.map((r) => r.format).filter(Boolean));
      const preview: ImportMatch[] = matches
        .filter((m) => m.completed && (m.p1_id === myId || m.p2_id === myId) && m.p2_id != null)
        .sort((a, b) => a.round - b.round)
        .map((m) => {
          const iP1 = m.p1_id === myId;
          const myTeamStr = iP1 ? m.p1_team : (m.p2_team ?? "");
          const oppTeamStr = iP1 ? (m.p2_team ?? "") : m.p1_team;
          const oppName = iP1 ? (m.p2_name ?? "???") : m.p1_name;
          const myTeam = myTeamStr.split(",").map((s) => resolveSlug(s.trim())).filter((id): id is number => id !== null);
          const oppTeam = oppTeamStr.split(",").map((s) => resolveSlug(s.trim())).filter((id): id is number => id !== null);
          const result: "win" | "loss" | "tie" = m.winner === null ? "tie" : m.winner === myId ? "win" : "loss";
          const phaseLabel = m.phase >= 3 ? "Top Cut" : "Swiss";
          const fmt = `Limitless #${parsed.tournamentId} ${phaseLabel} R${m.round}`;
          return { round: m.round, phase: phaseLabel, result, myTeam, oppTeam, oppName, format: fmt, isDuplicate: existingFormats.has(fmt) };
        });
      setImportPreview(preview);
    } catch { setImportError("Errore di rete. Riprova."); }
    finally { setImportLoading(false); }
  }

  function handleImport() {
    if (!importPreview) return;
    const newMatches = importPreview.filter((m) => !m.isDuplicate);
    if (newMatches.length === 0) return;
    const saved = newMatches.map((m) =>
      saveMatchRecord({
        myTeam: m.myTeam, myPicks: [], opponentTeam: m.oppTeam, opponentPicks: [],
        result: m.result, format: m.format, notes: `vs ${m.oppName}`, picksUnknown: true,
      }),
    );
    setRecords((prev) => [...saved.reverse(), ...prev]);
    resetImport();
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
  const [formSearch, setFormSearch] = useState("");

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

  // ── MOBILE LAYOUT ──────────────────────────────────────────────────────────
  if (isNative) {
    const formMonResults = formSearch
      ? ALL_POKEMON.filter(p =>
          p.name.toLowerCase().includes(formSearch.toLowerCase()) ||
          tp(p.name).toLowerCase().includes(formSearch.toLowerCase())
        ).slice(0, 80)
      : ALL_POKEMON.slice(0, 80);

    const MiniPokemonGrid = ({
      selected, onToggle, maxCount, highlightColor,
    }: { selected: number[]; onToggle: (id: number) => void; maxCount: number; highlightColor: string }) => (
      <div className="overflow-y-auto flex-1 pb-4">
        <div className="relative px-3 pt-2 pb-2 flex-shrink-0">
          <input
            type="text"
            placeholder="Search Pokémon..."
            value={formSearch}
            onChange={e => setFormSearch(e.target.value)}
            className="w-full pl-3 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500/50"
          />
        </div>
        <div className="px-2 pb-2 flex flex-wrap gap-1.5">
          {selected.map(id => {
            const p = getById(id);
            if (!p) return null;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onToggle(id)}
                className={cn("flex items-center gap-1 px-2 py-1 rounded-xl text-[11px] font-semibold border", highlightColor)}
              >
                <Image src={spriteUrl(p.sprite)} alt={p.name} width={20} height={20} className="object-contain" unoptimized />
                {tp(p.name)}
                <X className="w-3 h-3" />
              </button>
            );
          })}
          {selected.length === 0 && <p className="text-[11px] text-gray-500 px-1">0/{maxCount} selected</p>}
        </div>
        <div className="grid grid-cols-4 gap-1.5 px-2">
          {formMonResults.map(p => {
            const isSel = selected.includes(p.id);
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => onToggle(p.id)}
                className={cn(
                  "flex flex-col items-center rounded-xl p-1.5 border transition-all",
                  isSel ? cn("border-opacity-80", highlightColor) : "bg-white/5 border-white/10"
                )}
              >
                <Image src={spriteUrl(p.sprite)} alt={p.name} width={40} height={40} className="object-contain" unoptimized />
                <p className="text-[9px] text-white truncate w-full text-center mt-0.5">{tp(p.name)}</p>
              </button>
            );
          })}
        </div>
      </div>
    );

    const PicksSelector = ({
      team, picks, onToggle, maxCount, accentClass,
    }: { team: number[]; picks: number[]; onToggle: (id: number) => void; maxCount: number; accentClass: string }) => (
      <div className="overflow-y-auto flex-1 px-4 pt-2">
        <p className="text-xs text-gray-400 mb-3">Select {maxCount} Pokémon you actually brought</p>
        <div className="grid grid-cols-3 gap-2">
          {team.map(id => {
            const p = getById(id);
            if (!p) return null;
            const isSel = picks.includes(id);
            return (
              <button
                key={id}
                type="button"
                onClick={() => onToggle(id)}
                className={cn(
                  "flex flex-col items-center rounded-2xl border py-3 transition-all",
                  isSel ? cn("border-opacity-60", accentClass) : "bg-white/5 border-white/10"
                )}
              >
                <Image src={spriteUrl(p.sprite)} alt={p.name} width={52} height={52} className="object-contain" unoptimized />
                <p className="text-[11px] text-white mt-1 truncate max-w-[72px] text-center">{tp(p.name)}</p>
                {isSel && <span className={cn("mt-1 w-2 h-2 rounded-full", accentClass.includes("emerald") ? "bg-emerald-400" : "bg-red-400")} />}
              </button>
            );
          })}
        </div>
      </div>
    );

    return (
      <div className="pb-24">
        {/* Header */}
        <div className="px-4 pt-4 pb-3 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Match Journal
              </h1>
              <p className="text-xs text-gray-400 mt-0.5">{records.length} {records.length === 1 ? "match" : "matches"} recorded</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowImport((p) => !p)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-semibold"
              >
                <Globe className="w-4 h-4" />
                Import
              </button>
              <button
                type="button"
                onClick={() => { setShowForm(true); setStep("myTeam"); setMyTeam([]); setMyPicks([]); setOpponentTeam([]); setOpponentPicks([]); setResult("win"); setNotes(""); setFormat(""); setFormSearch(""); setPicksUnknown(false); }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold shadow-lg shadow-emerald-500/30"
              >
                <Plus className="w-4 h-4" />
                New
              </button>
            </div>
          </div>
        </div>

        {/* Stats summary */}
        {records.length > 0 && (
          <div className="px-4 pt-3 pb-2">
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-2.5 text-center">
                <p className="text-xl font-black text-emerald-400">{stats.wins}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">W</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-2.5 text-center">
                <p className="text-xl font-black text-red-400">{stats.losses}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">L</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
                <p className="text-xl font-black text-gray-300">{stats.ties}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">T</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
                <p className="text-xl font-black text-white">{stats.winRate.toFixed(0)}%</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wide">WR</p>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-1 px-4 pt-2 pb-1">
          {(["history", "stats"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={cn(
                "flex-1 py-2 rounded-xl text-xs font-semibold capitalize transition-all",
                activeTab === tab
                  ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white"
                  : "bg-white/5 border border-white/10 text-gray-400"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* History tab */}
        {activeTab === "history" && (
          <div className="px-4 pt-2 space-y-2">
            {records.length === 0 ? (
              <div className="flex flex-col items-center gap-3 py-20 text-center">
                <BookOpen className="w-12 h-12 text-gray-600" />
                <div>
                  <p className="font-semibold text-white">No matches yet</p>
                  <p className="text-sm text-gray-500 mt-1">Tap &quot;New&quot; to log your first match</p>
                </div>
              </div>
            ) : (
              <>
                {records.length >= 5 && (
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => { if (confirmClear) { handleClearAll(); } else setConfirmClear(true); }}
                      className="text-[11px] text-red-400/70 px-2 py-1"
                    >
                      {confirmClear ? "Confirm clear all" : "Clear all"}
                    </button>
                  </div>
                )}
                {records.slice().reverse().map((record) => {
                  const isExp = expandedRecord === record.id;
                  const myPicksPokemon = record.myPicks.map(id => getById(id)).filter(Boolean);
                  const oppPicksPokemon = record.opponentPicks.map(id => getById(id)).filter(Boolean);
                  const myTeamPokemon = record.myTeam.map(id => getById(id)).filter(Boolean);
                  const oppTeamPokemon = record.opponentTeam.map(id => getById(id)).filter(Boolean);
                  return (
                    <div
                      key={record.id}
                      className={cn(
                        "bg-white/5 border rounded-2xl overflow-hidden transition-all",
                        record.result === "win" ? "border-emerald-500/20" :
                        record.result === "loss" ? "border-red-500/20" : "border-white/10"
                      )}
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedRecord(isExp ? null : record.id)}
                        className="w-full text-left p-3"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className={cn(
                            "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase flex-shrink-0",
                            record.result === "win" ? "bg-emerald-500/20 text-emerald-400" :
                            record.result === "loss" ? "bg-red-500/20 text-red-400" :
                            "bg-white/10 text-gray-400"
                          )}>
                            {record.result}
                          </span>
                          <span className="text-xs text-gray-400 flex-1">{fmtDate(record.date)}</span>
                          {record.format && <span className="text-[10px] text-gray-500 truncate max-w-[80px]">{record.format}</span>}
                          <ChevronDown className={cn("w-4 h-4 text-gray-500 transition-transform", isExp && "rotate-180")} />
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={cn("flex gap-0.5 flex-1", record.picksUnknown && "opacity-60")}>
                            {(record.picksUnknown ? myTeamPokemon : myPicksPokemon).slice(0, 4).map((p) => p && (
                              <Image key={p.id} src={spriteUrl(p.sprite)} alt={p.name} width={30} height={30} className="object-contain" unoptimized />
                            ))}
                          </div>
                          <div className="flex flex-col items-center gap-0.5 shrink-0">
                            <span className="text-gray-600 text-xs">vs</span>
                            {record.picksUnknown && <span className="text-[8px] text-amber-500 bg-amber-500/10 px-1 rounded leading-tight">torneo</span>}
                          </div>
                          <div className={cn("flex gap-0.5 flex-1 justify-end", record.picksUnknown && "opacity-60")}>
                            {(record.picksUnknown ? oppTeamPokemon : oppPicksPokemon).slice(0, 4).map((p) => p && (
                              <Image key={p.id} src={spriteUrl(p.sprite)} alt={p.name} width={30} height={30} className="object-contain" unoptimized />
                            ))}
                          </div>
                        </div>
                      </button>

                      {isExp && (
                        <div className="px-3 pb-3 pt-1 border-t border-white/10 space-y-3">
                          {/* Full teams */}
                          {record.picksUnknown && (
                            <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                              <AlertCircle className="w-3 h-3 text-amber-400 flex-shrink-0" />
                              <span className="text-[10px] text-amber-400">Picks non registrati (risultato di torneo)</span>
                            </div>
                          )}
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <p className="text-[10px] font-semibold text-gray-500 uppercase mb-1.5">My Team</p>
                              <div className="flex flex-wrap gap-1">
                                {myTeamPokemon.map(p => p && (
                                  <div
                                    key={p.id}
                                    className={cn(
                                      "flex items-center gap-1 px-1.5 py-0.5 rounded-lg border",
                                      !record.picksUnknown && record.myPicks.includes(p.id)
                                        ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-300"
                                        : "bg-white/5 border-white/10 text-gray-400"
                                    )}
                                  >
                                    <Image src={spriteUrl(p.sprite)} alt={p.name} width={18} height={18} className="object-contain" unoptimized />
                                    <span className="text-[10px]">{tp(p.name)}</span>
                                    {!record.picksUnknown && record.myPicks.includes(p.id) && <Check className="w-2.5 h-2.5 text-emerald-400 flex-shrink-0" />}
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-[10px] font-semibold text-gray-500 uppercase mb-1.5">Opponent</p>
                              <div className="flex flex-wrap gap-1">
                                {oppTeamPokemon.map(p => p && (
                                  <div
                                    key={p.id}
                                    className={cn(
                                      "flex items-center gap-1 px-1.5 py-0.5 rounded-lg border",
                                      !record.picksUnknown && record.opponentPicks.includes(p.id)
                                        ? "bg-red-500/15 border-red-500/30 text-red-300"
                                        : "bg-white/5 border-white/10 text-gray-400"
                                    )}
                                  >
                                    <Image src={spriteUrl(p.sprite)} alt={p.name} width={18} height={18} className="object-contain" unoptimized />
                                    <span className="text-[10px]">{tp(p.name)}</span>
                                    {!record.picksUnknown && record.opponentPicks.includes(p.id) && <Swords className="w-2.5 h-2.5 text-red-400 flex-shrink-0" />}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {record.notes && (
                            <div className="bg-white/5 rounded-xl p-2.5">
                              <p className="text-[10px] font-semibold text-gray-500 uppercase mb-1">Notes</p>
                              <p className="text-xs text-gray-300">{record.notes}</p>
                            </div>
                          )}

                          <div className="flex items-center gap-2 flex-wrap pt-1">
                            <button
                              type="button"
                              onClick={() => handleDelete(record.id)}
                              className="flex items-center gap-1 text-[11px] text-red-400/80 px-2 py-1 rounded-lg bg-red-500/10 border border-red-500/20"
                            >
                              <Trash2 className="w-3 h-3" /> Delete
                            </button>
                            {record.opponentTeam.length > 0 && (
                              <Link
                                href={`/battle-bot?tab=team-tester&opp=${record.opponentTeam.join(",")}`}
                                className="flex items-center gap-1 text-[11px] text-amber-400/80 px-2 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20"
                              >
                                <FlaskConical className="w-3 h-3" /> Test vs this team
                              </Link>
                            )}
                            {!!record.teamTesterReport && (
                              <button
                                type="button"
                                onClick={() => exportSavedReport(record)}
                                className="flex items-center gap-1 text-[11px] text-emerald-400/80 px-2 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20"
                              >
                                <Download className="w-3 h-3" /> Matchup PDF
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </>
            )}
          </div>
        )}

        {/* Stats tab */}
        {activeTab === "stats" && (
          <div className="px-4 pt-2 space-y-5">
            {records.length === 0 ? (
              <div className="flex flex-col items-center gap-3 py-16 text-center">
                <BarChart3 className="w-10 h-10 text-gray-600" />
                <p className="text-sm text-gray-500">Log some matches to see your stats</p>
              </div>
            ) : (
              <>
                {/* My Picks */}
                {stats.picksUnknownCount > 0 && (
                  <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <AlertCircle className="w-3 h-3 text-amber-400 flex-shrink-0" />
                    <span className="text-[10px] text-amber-400">
                      {stats.picksUnknownCount} match{stats.picksUnknownCount !== 1 ? "es" : ""} di torneo esclusi da picks/leads stats
                    </span>
                  </div>
                )}
                {sortedMyPickStats.length > 0 && (
                  <div>
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2">My Pokémon Performance</p>
                    <div className="space-y-1.5">
                      {sortedMyPickStats.map((pk) => {
                        const mon = getById(pk.id);
                        if (!mon) return null;
                        return (
                          <div key={pk.id} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                            <Image src={spriteUrl(mon.sprite)} alt={mon.name} width={28} height={28} className="object-contain flex-shrink-0" unoptimized />
                            <span className="text-xs text-white flex-1 truncate">{tp(mon.name)}</span>
                            <div className="text-right">
                              <span className={cn("text-sm font-bold", pk.winRate >= 60 ? "text-emerald-400" : pk.winRate >= 50 ? "text-gray-300" : "text-red-400")}>
                                {pk.winRate.toFixed(0)}%
                              </span>
                              <p className="text-[10px] text-gray-500">{pk.wins}W {pk.losses}L · {pk.total}g</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* My Lead Pairs */}
                {sortedMyLeads.length > 0 && (
                  <div>
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2">My Lead Pairs</p>
                    <div className="space-y-1.5">
                      {sortedMyLeads.map((pair) => {
                        const a = getById(pair.id1);
                        const b = getById(pair.id2);
                        if (!a) return null;
                        return (
                          <div key={pair.pairKey} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                            <Image src={spriteUrl(a.sprite)} alt={a.name} width={24} height={24} className="object-contain" unoptimized />
                            {b && <Image src={spriteUrl(b.sprite)} alt={b.name} width={24} height={24} className="object-contain" unoptimized />}
                            <span className="text-xs text-white flex-1">{tp(a.name)}{b ? ` + ${tp(b.name)}` : ""}</span>
                            <span className={cn("text-sm font-bold", pair.winRate >= 60 ? "text-emerald-400" : pair.winRate >= 50 ? "text-gray-300" : "text-red-400")}>
                              {pair.winRate.toFixed(0)}%
                            </span>
                            <span className="text-[10px] text-gray-500">{pair.total}g</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Opponent Threats */}
                {sortedOppPickStats.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Opponent Threats</p>
                      {sortedOppPickStats.length >= 4 && (
                        <Link
                          href={`/battle-bot?opp=${sortedOppPickStats.slice(0, 6).map(p => p.id).join(",")}`}
                          className="text-[11px] text-amber-400 flex items-center gap-1"
                        >
                          Test vs top threats <ExternalLink className="w-3 h-3" />
                        </Link>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      {sortedOppPickStats.map((pk) => {
                        const mon = getById(pk.id);
                        if (!mon) return null;
                        const myWr = 100 - pk.winRate;
                        return (
                          <div key={pk.id} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                            <Image src={spriteUrl(mon.sprite)} alt={mon.name} width={28} height={28} className="object-contain flex-shrink-0" unoptimized />
                            <span className="text-xs text-white flex-1 truncate">{tp(mon.name)}</span>
                            {myWr < 40 && <AlertCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />}
                            <div className="text-right">
                              <span className={cn("text-sm font-bold", myWr < 40 ? "text-red-400" : myWr < 50 ? "text-amber-400" : "text-gray-300")}>
                                {pk.winRate.toFixed(0)}% WR vs me
                              </span>
                              <p className="text-[10px] text-gray-500">faced {pk.total}×</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Opponent Lead Pairs */}
                {sortedOppLeads.length > 0 && (
                  <div>
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2">Opponent Lead Pairs</p>
                    <div className="space-y-1.5">
                      {sortedOppLeads.map((pair) => {
                        const a = getById(pair.id1);
                        const b = getById(pair.id2);
                        if (!a) return null;
                        return (
                          <div key={pair.pairKey} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                            <Image src={spriteUrl(a.sprite)} alt={a.name} width={24} height={24} className="object-contain" unoptimized />
                            {b && <Image src={spriteUrl(b.sprite)} alt={b.name} width={24} height={24} className="object-contain" unoptimized />}
                            <span className="text-xs text-white flex-1">{tp(a.name)}{b ? ` + ${tp(b.name)}` : ""}</span>
                            <span className={cn("text-sm font-bold", pair.winRate >= 60 ? "text-red-400" : pair.winRate >= 50 ? "text-amber-400" : "text-gray-300")}>
                              {pair.winRate.toFixed(0)}% WR vs me
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Format breakdown */}
                {sortedFmtStats.length > 0 && (
                  <div>
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2">By Format</p>
                    <div className="space-y-1.5">
                      {sortedFmtStats.map((f) => (
                        <div key={f.format || "none"} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-white flex-1 truncate">{f.format || "(no format)"}</span>
                            <span className={cn("text-sm font-bold", f.winRate >= 60 ? "text-emerald-400" : f.winRate >= 50 ? "text-gray-300" : "text-red-400")}>
                              {f.winRate.toFixed(0)}%
                            </span>
                          </div>
                          <div className="mt-1.5 h-1.5 rounded-full bg-white/10 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
                              style={{ width: `${f.winRate}%` }}
                            />
                          </div>
                          <p className="text-[10px] text-gray-500 mt-1">{f.wins}W {f.losses}L {f.ties > 0 ? `${f.ties}T` : ""} · {f.total} games</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* Import from Limitless sheet (mobile) */}
        {showImport && (
          <div className="fixed inset-0 z-[70] flex flex-col justify-end">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={resetImport} />
            <div className="relative bg-[#0d1526] border-t border-white/10 rounded-t-3xl flex flex-col" style={{ maxHeight: "85vh" }}>
              <div className="px-4 pt-3 pb-3 flex-shrink-0 border-b border-white/10">
                <div className="w-10 h-1 rounded-full bg-white/20 mx-auto mb-3" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-400" />
                    <p className="text-sm font-bold text-white">Import da Limitless</p>
                  </div>
                  <button type="button" onClick={resetImport} className="text-gray-400"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto px-4 pt-3 pb-4 space-y-3 min-h-0">
                {/* URL input */}
                <div className="space-y-2">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">URL profilo Limitless</p>
                  <input
                    type="url"
                    value={importUrl}
                    onChange={(e) => setImportUrl(e.target.value)}
                    placeholder="play.limitlesstcg.com/tournament/.../player/..."
                    className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none text-sm text-white placeholder:text-gray-600"
                  />
                  <button
                    type="button"
                    onClick={fetchImportData}
                    disabled={importLoading || !importUrl.trim()}
                    className="w-full py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold disabled:opacity-40 flex items-center justify-center gap-2"
                  >
                    {importLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Globe className="w-4 h-4" />}
                    {importLoading ? "Caricamento..." : "Cerca partite"}
                  </button>
                </div>
                {importError && (
                  <div className="flex items-start gap-2 px-3 py-2 rounded-xl bg-red-500/10 border border-red-500/20">
                    <AlertCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-red-400">{importError}</p>
                  </div>
                )}
                {importTournamentName && (
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <Trophy className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <p className="text-xs text-amber-300">{importTournamentName}</p>
                  </div>
                )}
                {importPreview && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[10px]">
                      <span className="text-gray-400">{importPreview.length} partite</span>
                      {importPreview.filter((m) => m.isDuplicate).length > 0 && (
                        <span className="text-amber-400">{importPreview.filter((m) => m.isDuplicate).length} già importate</span>
                      )}
                      <span className="text-emerald-400 font-semibold">{importPreview.filter((m) => !m.isDuplicate).length} nuove</span>
                    </div>
                    <div className="space-y-1.5">
                      {importPreview.map((m, i) => (
                        <div
                          key={i}
                          className={cn(
                            "flex items-center gap-2 px-2.5 py-2 rounded-xl border",
                            m.isDuplicate ? "opacity-40 bg-white/3 border-white/10"
                              : m.result === "win" ? "bg-emerald-500/10 border-emerald-500/20"
                              : m.result === "loss" ? "bg-red-500/10 border-red-500/20"
                              : "bg-white/5 border-white/10"
                          )}
                        >
                          <span className={cn(
                            "text-[9px] font-bold px-1.5 py-0.5 rounded-md flex-shrink-0 uppercase",
                            m.phase === "Top Cut" ? "bg-amber-500/20 text-amber-400" : "bg-white/10 text-gray-400"
                          )}>
                            {m.phase === "Top Cut" ? "TC" : "R"}{m.round}
                          </span>
                          <span className={cn(
                            "text-[10px] font-bold flex-shrink-0",
                            m.result === "win" ? "text-emerald-400" : m.result === "loss" ? "text-red-400" : "text-gray-400"
                          )}>
                            {m.result === "win" ? "W" : m.result === "loss" ? "L" : "T"}
                          </span>
                          <span className="text-[11px] text-white flex-1 truncate">{m.oppName}</span>
                          <div className="flex gap-0.5 flex-shrink-0">
                            {m.oppTeam.slice(0, 4).map((id) => <PSprite key={id} id={id} size={20} />)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {importPreview && importPreview.filter((m) => !m.isDuplicate).length > 0 && (
                <div className="px-4 py-3 border-t border-white/10 flex-shrink-0">
                  <button
                    type="button"
                    onClick={handleImport}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-bold flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Importa {importPreview.filter((m) => !m.isDuplicate).length} partite
                  </button>
                </div>
              )}
              {importPreview && importPreview.filter((m) => !m.isDuplicate).length === 0 && (
                <div className="px-4 py-3 border-t border-white/10 flex-shrink-0">
                  <p className="text-center text-xs text-gray-500">Tutte le partite sono già state importate.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Import AI/YouTube sheet (mobile) */}
        {showJsonImport && (
          <div className="fixed inset-0 z-[70] flex flex-col justify-end">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={resetJsonImport} />
            <div className="relative bg-[#0d1526] border-t border-white/10 rounded-t-3xl flex flex-col" style={{ maxHeight: "85vh" }}>
              <div className="px-4 pt-3 pb-3 flex-shrink-0 border-b border-white/10">
                <div className="w-10 h-1 rounded-full bg-white/20 mx-auto mb-3" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Film className="w-4 h-4 text-red-400" />
                    <p className="text-sm font-bold text-white">Import AI / YouTube</p>
                  </div>
                  <button type="button" onClick={resetJsonImport} className="text-gray-400"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto px-4 pt-3 pb-4 space-y-3 min-h-0">
                <p className="text-[10px] text-gray-500">Incolla il JSON restituito da Gemini dopo aver analizzato il video YouTube.</p>
                <textarea
                  value={jsonImportText}
                  onChange={(e) => setJsonImportText(e.target.value)}
                  placeholder={'{\n  "myTeam": [...],\n  "matches": [...]\n}'}
                  rows={7}
                  className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-red-500/50 focus:outline-none text-xs text-white placeholder:text-gray-600 font-mono resize-none"
                />
                <button
                  type="button"
                  onClick={parseJsonImport}
                  disabled={!jsonImportText.trim()}
                  className="w-full py-2.5 rounded-xl bg-red-600 text-white text-sm font-bold disabled:opacity-40 flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Analizza JSON
                </button>
                {jsonImportError && (
                  <div className="flex items-start gap-2 px-3 py-2 rounded-xl bg-red-500/10 border border-red-500/20">
                    <AlertCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-red-400">{jsonImportError}</p>
                  </div>
                )}
                {jsonImportPreview && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[10px]">
                      <span className="text-gray-400">{jsonImportPreview.length} partite</span>
                      {jsonImportPreview.filter((m) => m.isDuplicate).length > 0 && (
                        <span className="text-amber-400">{jsonImportPreview.filter((m) => m.isDuplicate).length} già importate</span>
                      )}
                      <span className="text-emerald-400 font-semibold">{jsonImportPreview.filter((m) => !m.isDuplicate).length} nuove</span>
                    </div>
                    <div className="space-y-1.5">
                      {jsonImportPreview.map((m, i) => (
                        <div
                          key={i}
                          className={cn(
                            "flex items-center gap-2 px-2.5 py-2 rounded-xl border",
                            m.isDuplicate ? "opacity-40 bg-white/3 border-white/10"
                              : m.result === "win" ? "bg-emerald-500/10 border-emerald-500/20"
                              : m.result === "loss" ? "bg-red-500/10 border-red-500/20"
                              : "bg-white/5 border-white/10"
                          )}
                        >
                          <span className={cn(
                            "text-[10px] font-bold flex-shrink-0",
                            m.result === "win" ? "text-emerald-400" : m.result === "loss" ? "text-red-400" : "text-gray-400"
                          )}>
                            {m.result === "win" ? "W" : m.result === "loss" ? "L" : "T"}
                          </span>
                          <span className="text-[11px] text-white flex-1 truncate">{m.phase}</span>
                          <div className="flex gap-0.5 flex-shrink-0">
                            {m.oppTeam.slice(0, 4).map((id) => <PSprite key={id} id={id} size={20} />)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {jsonImportPreview && jsonImportPreview.filter((m) => !m.isDuplicate).length > 0 && (
                <div className="px-4 py-3 border-t border-white/10 flex-shrink-0">
                  <button
                    type="button"
                    onClick={handleJsonImport}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 text-white text-sm font-bold flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Importa {jsonImportPreview.filter((m) => !m.isDuplicate).length} partite
                  </button>
                </div>
              )}
              {jsonImportPreview && jsonImportPreview.filter((m) => !m.isDuplicate).length === 0 && (
                <div className="px-4 py-3 border-t border-white/10 flex-shrink-0">
                  <p className="text-center text-xs text-gray-500">Tutte le partite sono già state importate.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Multi-step form */}
        {showForm && (
          <div className="fixed inset-0 z-[70] flex flex-col justify-end">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={resetForm} />
            <div className="relative bg-[#0d1526] border-t border-white/10 rounded-t-3xl flex flex-col" style={{ maxHeight: "92vh" }}>
              {/* Sheet handle + header */}
              <div className="px-4 pt-3 pb-3 flex-shrink-0 border-b border-white/10">
                <div className="w-10 h-1 rounded-full bg-white/20 mx-auto mb-3" />
                {/* Step dots */}
                <div className="flex gap-1.5 justify-center mb-3">
                  {activeSteps.map((s, i) => (
                    <div
                      key={s.key}
                      className={cn(
                        "rounded-full transition-all",
                        i === stepIndex ? "w-5 h-1.5 bg-emerald-400" : i < stepIndex ? "w-1.5 h-1.5 bg-emerald-400/50" : "w-1.5 h-1.5 bg-white/20"
                      )}
                    />
                  ))}
                </div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-bold text-white">{activeSteps[stepIndex]?.label}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{activeSteps[stepIndex]?.description}</p>
                  </div>
                  <button type="button" onClick={resetForm} className="text-gray-400 flex-shrink-0" aria-label="Close">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Step content */}
              <div className="flex-1 overflow-hidden flex flex-col min-h-0">
                {/* Step 1: My Team */}
                {step === "myTeam" && (
                  <>
                    {savedTeams.length > 0 && (
                      <div className="px-4 pt-2 pb-1 flex-shrink-0">
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1.5">Load saved team</p>
                        <div className="flex gap-1.5 overflow-x-auto pb-1">
                          {savedTeams.slice(0, 6).map(st => (
                            <button
                              key={st.id}
                              type="button"
                              onClick={() => { loadSavedTeam(st); setFormSearch(""); }}
                              className="flex-shrink-0 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400 whitespace-nowrap"
                            >
                              {st.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="px-4 pt-1 pb-1 flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => setPicksUnknown((p) => !p)}
                        className={cn(
                          "w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl border text-left transition-all",
                          picksUnknown
                            ? "bg-amber-500/15 border-amber-500/40 text-amber-300"
                            : "bg-white/5 border-white/10 text-gray-400"
                        )}
                      >
                        <div className={cn(
                          "w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors",
                          picksUnknown ? "bg-amber-500 border-amber-500" : "border-gray-500"
                        )}>
                          {picksUnknown && <Check className="w-2.5 h-2.5 text-white" />}
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold">Risultato di torneo</p>
                          <p className="text-[10px] text-gray-500">Picks non disponibili — solo i team</p>
                        </div>
                      </button>
                    </div>
                    <MiniPokemonGrid selected={myTeam} onToggle={toggleMyTeam} maxCount={6} highlightColor="bg-emerald-500/20 border-emerald-500/50 text-emerald-300" />
                  </>
                )}

                {/* Step 2: My Picks */}
                {step === "myPicks" && (
                  <PicksSelector team={myTeam} picks={myPicks} onToggle={toggleMyPicks} maxCount={4} accentClass="bg-emerald-500/20 border-emerald-500/50 text-emerald-300" />
                )}

                {/* Step 3: Opponent Team */}
                {step === "opponentTeam" && (
                  <>
                    {pastOpponents.length > 0 && (
                      <div className="px-4 pt-2 pb-1 flex-shrink-0">
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1.5">Past opponents</p>
                        <div className="flex gap-2 overflow-x-auto pb-1">
                          {pastOpponents.slice(0, 5).map((opp, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => { setOpponentTeam(opp.ids); setFormSearch(""); }}
                              className="flex-shrink-0 flex items-center gap-1 px-2 py-1.5 rounded-xl bg-red-500/10 border border-red-500/20"
                            >
                              {opp.ids.slice(0, 3).map(id => {
                                const p = getById(id);
                                return p ? <Image key={id} src={spriteUrl(p.sprite)} alt={p.name} width={20} height={20} className="object-contain" unoptimized /> : null;
                              })}
                              <span className="text-[10px] text-gray-400 ml-1">{opp.wins}W{opp.losses}L</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    <MiniPokemonGrid selected={opponentTeam} onToggle={toggleOpponentTeam} maxCount={6} highlightColor="bg-red-500/20 border-red-500/50 text-red-300" />
                  </>
                )}

                {/* Step 4: Opponent Picks */}
                {step === "opponentPicks" && (
                  <>
                    {matchedPastOpponent && matchedPastOpponent.picksHistory.length > 0 && (
                      <div className="px-4 pt-2 pb-1 flex-shrink-0">
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1.5">Their past picks</p>
                        <div className="flex gap-2 overflow-x-auto pb-1">
                          {matchedPastOpponent.picksHistory.slice(0, 4).map((ph, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setOpponentPicks(ph.slice(0, 4))}
                              className="flex-shrink-0 flex items-center gap-1 px-2 py-1.5 rounded-xl bg-red-500/10 border border-red-500/20"
                            >
                              {ph.slice(0, 4).map(id => {
                                const p = getById(id);
                                return p ? <Image key={id} src={spriteUrl(p.sprite)} alt={p.name} width={20} height={20} className="object-contain" unoptimized /> : null;
                              })}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    <PicksSelector team={opponentTeam} picks={opponentPicks} onToggle={toggleOpponentPicks} maxCount={4} accentClass="bg-red-500/20 border-red-500/50 text-red-300" />
                  </>
                )}

                {/* Step 5: Result */}
                {step === "result" && (
                  <div className="overflow-y-auto flex-1 px-4 py-4 space-y-4">
                    <div>
                      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2">Result</p>
                      <div className="flex gap-2">
                        {(["win", "loss", "tie"] as const).map((r) => (
                          <button
                            key={r}
                            type="button"
                            onClick={() => setResult(r)}
                            className={cn(
                              "flex-1 py-3.5 rounded-xl text-sm font-bold capitalize transition-all",
                              result === r
                                ? r === "win" ? "bg-emerald-500/30 border border-emerald-500/50 text-emerald-400"
                                : r === "loss" ? "bg-red-500/30 border border-red-500/50 text-red-400"
                                : "bg-white/10 border border-white/20 text-gray-300"
                                : "bg-white/5 border border-white/10 text-gray-500"
                            )}
                          >
                            {r}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2">Format <span className="text-gray-600 normal-case">(optional)</span></p>
                      <input
                        type="text"
                        value={format}
                        onChange={e => setFormat(e.target.value)}
                        placeholder="e.g. VGC 2026, Regulation G"
                        className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:outline-none text-sm text-white placeholder:text-gray-500"
                      />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2">Notes <span className="text-gray-600 normal-case">(optional)</span></p>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="What happened? Key moments, matchup notes..."
                        rows={3}
                        className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500/50 focus:outline-none text-sm text-white placeholder:text-gray-500 resize-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation buttons */}
              <div className="px-4 py-3 flex-shrink-0 border-t border-white/10 flex gap-2">
                {stepIndex > 0 && (
                  <button
                    type="button"
                    onClick={() => { goPrev(); setFormSearch(""); }}
                    className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 font-medium"
                  >
                    Back
                  </button>
                )}
                {stepIndex < activeSteps.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => { goNext(); setFormSearch(""); }}
                    disabled={!canAdvance()}
                    className={cn(
                      "flex-1 py-3 rounded-xl text-sm font-bold transition-all",
                      canAdvance()
                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30"
                        : "bg-white/5 border border-white/10 text-gray-500"
                    )}
                  >
                    Next → {activeSteps[stepIndex + 1]?.label}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSave}
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold shadow-lg shadow-emerald-500/30"
                  >
                    Save Match
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

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
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowForm((p) => !p)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 text-white text-sm font-medium shadow-sm hover:from-violet-600 hover:to-indigo-700 transition-all"
          >
            {showForm ? <X size={15} /> : <Plus size={15} />}
            {showForm ? "Cancel" : "Log New Game"}
          </button>
          <button
            onClick={() => { setShowImport((p) => !p); if (showImport) resetImport(); if (!showImport) resetJsonImport(); }}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all border",
              showImport
                ? "bg-blue-50 dark:bg-blue-500/10 border-blue-300 dark:border-blue-500/30 text-blue-700 dark:text-blue-400"
                : "glass glass-hover border-border text-muted-foreground hover:text-foreground"
            )}
          >
            <Globe size={15} />
            Import Limitless
          </button>
          <button
            onClick={() => { setShowJsonImport((p) => !p); if (showJsonImport) resetJsonImport(); if (!showJsonImport) resetImport(); }}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all border",
              showJsonImport
                ? "bg-red-50 dark:bg-red-500/10 border-red-300 dark:border-red-500/30 text-red-700 dark:text-red-400"
                : "glass glass-hover border-border text-muted-foreground hover:text-foreground"
            )}
          >
            <Film size={15} />
            Import AI/YouTube
          </button>
        </div>

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
                {activeSteps.map((s, i) => (
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
                    {i < activeSteps.length - 1 && (
                      <div className={cn("flex-1 h-0.5 rounded", i < stepIndex ? "bg-violet-400" : "bg-border")} />
                    )}
                  </div>
                ))}
              </div>

              <div>
                <h2 className="font-semibold text-foreground">Step {stepIndex + 1}: {activeSteps[stepIndex]?.label}</h2>
                <p className="text-xs text-muted-foreground mt-0.5">{activeSteps[stepIndex]?.description}</p>
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
                      <label className="flex items-center gap-2.5 p-2.5 rounded-xl border border-amber-200 dark:border-amber-500/20 bg-amber-50 dark:bg-amber-500/5 cursor-pointer hover:bg-amber-100 dark:hover:bg-amber-500/10 transition-colors">
                        <input
                          type="checkbox"
                          checked={picksUnknown}
                          onChange={(e) => setPicksUnknown(e.target.checked)}
                          className="sr-only"
                        />
                        <div className={cn(
                          "w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors",
                          picksUnknown ? "bg-amber-500 border-amber-500" : "border-muted-foreground/40 bg-background"
                        )}>
                          {picksUnknown && <Check size={10} className="text-white" />}
                        </div>
                        <div>
                          <span className="text-xs font-medium text-foreground">Risultato di torneo</span>
                          <span className="text-xs text-muted-foreground ml-1.5">— picks non disponibili</span>
                        </div>
                      </label>
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
                {stepIndex < activeSteps.length - 1 ? (
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

      {/* Import from Limitless panel (desktop) */}
      <AnimatePresence>
        {showImport && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="glass rounded-2xl border border-blue-200 dark:border-blue-500/20 p-5 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-blue-500" />
                  <h2 className="font-semibold text-foreground text-sm">Import da Limitless VGC</h2>
                </div>
                <button onClick={resetImport} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X size={15} />
                </button>
              </div>

              {/* URL input */}
              <div className="flex gap-2">
                <input
                  type="url"
                  value={importUrl}
                  onChange={(e) => setImportUrl(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !importLoading && fetchImportData()}
                  placeholder="https://play.limitlesstcg.com/tournament/.../player/..."
                  className="flex-1 px-3 py-1.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-colors"
                />
                <button
                  onClick={fetchImportData}
                  disabled={importLoading || !importUrl.trim()}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  {importLoading ? <Loader2 size={14} className="animate-spin" /> : <Globe size={14} />}
                  {importLoading ? "Caricamento..." : "Fetch"}
                </button>
              </div>

              {/* Error */}
              {importError && (
                <p className="text-xs text-red-500 dark:text-red-400 flex items-center gap-1.5">
                  <AlertCircle size={11} className="flex-shrink-0" />{importError}
                </p>
              )}

              {/* Tournament info */}
              {importTournamentName && (
                <p className="text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                  <Trophy size={11} className="flex-shrink-0" />{importTournamentName}
                </p>
              )}

              {/* Preview */}
              {importPreview && (
                <div className="space-y-3">
                  {/* Summary */}
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-muted-foreground">{importPreview.length} partite trovate</span>
                    {importPreview.filter((m) => m.isDuplicate).length > 0 && (
                      <span className="text-amber-500 dark:text-amber-400">{importPreview.filter((m) => m.isDuplicate).length} già importate</span>
                    )}
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                      {importPreview.filter((m) => !m.isDuplicate).length} nuove
                    </span>
                  </div>

                  {/* Match list */}
                  <div className="max-h-72 overflow-y-auto space-y-1 pr-1">
                    {importPreview.map((m, i) => (
                      <div
                        key={i}
                        className={cn(
                          "flex items-center gap-2 px-3 py-2 rounded-lg border text-xs",
                          m.isDuplicate
                            ? "opacity-40 bg-muted/30 border-border"
                            : m.result === "win"
                              ? "bg-emerald-50 dark:bg-emerald-500/5 border-emerald-200 dark:border-emerald-500/15"
                              : m.result === "loss"
                                ? "bg-red-50 dark:bg-red-500/5 border-red-200 dark:border-red-500/15"
                                : "bg-muted/30 border-border"
                        )}
                      >
                        <span className={cn(
                          "text-[10px] font-bold px-1.5 py-0.5 rounded-md flex-shrink-0 uppercase",
                          m.phase === "Top Cut" ? "bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400" : "bg-muted text-muted-foreground"
                        )}>
                          {m.phase === "Top Cut" ? "TC" : "R"}{m.round}
                        </span>
                        <ResultBadge result={m.result} />
                        <span className="text-foreground truncate flex-1 text-xs">{m.oppName}</span>
                        <div className="flex items-center gap-0.5 flex-shrink-0">
                          <span className="text-[9px] text-muted-foreground mr-1">vs</span>
                          {m.oppTeam.slice(0, 6).map((id) => <PSprite key={id} id={id} size={22} />)}
                        </div>
                        {m.isDuplicate && <span className="text-[9px] text-muted-foreground flex-shrink-0 ml-1">già importato</span>}
                      </div>
                    ))}
                  </div>

                  {/* Import button */}
                  {importPreview.filter((m) => !m.isDuplicate).length > 0 ? (
                    <button
                      onClick={handleImport}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-sm font-medium transition-all shadow-sm flex items-center justify-center gap-2"
                    >
                      <Check size={14} />
                      Importa {importPreview.filter((m) => !m.isDuplicate).length} partite nel Journal
                    </button>
                  ) : (
                    <p className="text-center text-sm text-muted-foreground py-1">
                      Tutte le partite di questo torneo sono già state importate.
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Import from AI/YouTube panel (desktop) */}
      <AnimatePresence>
        {showJsonImport && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="glass rounded-2xl border border-red-200 dark:border-red-500/20 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Film size={16} className="text-red-500" />
                  <h2 className="font-semibold text-foreground text-sm">Import da AI / YouTube (Gemini)</h2>
                </div>
                <button onClick={resetJsonImport} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X size={15} />
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Incolla il JSON restituito da Gemini dopo aver analizzato il video YouTube.
              </p>
              <div className="flex gap-2">
                <textarea
                  value={jsonImportText}
                  onChange={(e) => setJsonImportText(e.target.value)}
                  placeholder={'{\n  "myTeam": ["staraptor", ...],\n  "matches": [...]\n}'}
                  rows={6}
                  className="flex-1 px-3 py-2 text-xs rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 font-mono focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500/40 transition-colors resize-none"
                />
              </div>
              <button
                onClick={parseJsonImport}
                disabled={!jsonImportText.trim()}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <Check size={14} />
                Analizza JSON
              </button>
              {jsonImportError && (
                <p className="text-xs text-red-500 dark:text-red-400 flex items-center gap-1.5">
                  <AlertCircle size={11} className="flex-shrink-0" />{jsonImportError}
                </p>
              )}
              {jsonImportPreview && (
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-muted-foreground">{jsonImportPreview.length} partite trovate</span>
                    {jsonImportPreview.filter((m) => m.isDuplicate).length > 0 && (
                      <span className="text-amber-500 dark:text-amber-400">{jsonImportPreview.filter((m) => m.isDuplicate).length} già importate</span>
                    )}
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                      {jsonImportPreview.filter((m) => !m.isDuplicate).length} nuove
                    </span>
                  </div>
                  <div className="max-h-72 overflow-y-auto space-y-1 pr-1">
                    {jsonImportPreview.map((m, i) => (
                      <div
                        key={i}
                        className={cn(
                          "flex items-center gap-2 px-3 py-2 rounded-lg border text-xs",
                          m.isDuplicate
                            ? "opacity-40 bg-muted/30 border-border"
                            : m.result === "win"
                              ? "bg-emerald-50 dark:bg-emerald-500/5 border-emerald-200 dark:border-emerald-500/15"
                              : m.result === "loss"
                                ? "bg-red-50 dark:bg-red-500/5 border-red-200 dark:border-red-500/15"
                                : "bg-muted/30 border-border"
                        )}
                      >
                        <ResultBadge result={m.result} />
                        <span className="text-foreground truncate flex-1 text-xs">{m.phase}</span>
                        <div className="flex items-center gap-0.5 flex-shrink-0">
                          <span className="text-[9px] text-muted-foreground mr-1">vs</span>
                          {m.oppTeam.slice(0, 6).map((id) => <PSprite key={id} id={id} size={22} />)}
                        </div>
                        {m.isDuplicate && <span className="text-[9px] text-muted-foreground flex-shrink-0 ml-1">già importato</span>}
                      </div>
                    ))}
                  </div>
                  {jsonImportPreview.filter((m) => !m.isDuplicate).length > 0 ? (
                    <button
                      onClick={handleJsonImport}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white text-sm font-medium transition-all shadow-sm flex items-center justify-center gap-2"
                    >
                      <Check size={14} />
                      Importa {jsonImportPreview.filter((m) => !m.isDuplicate).length} partite nel Journal
                    </button>
                  ) : (
                    <p className="text-center text-sm text-muted-foreground py-1">
                      Tutte le partite sono già state importate.
                    </p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty state */}
      {records.length === 0 && !showForm && (
        <div className="text-center py-20 space-y-3">
          <BookOpen size={40} className="mx-auto text-muted-foreground/40" />
          <p className="font-medium text-muted-foreground">No games logged yet</p>
          <p className="text-sm text-muted-foreground/60">Click &quot;Log New Game&quot; to record your first match.</p>
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
                      <div className={cn("flex gap-0.5", r.picksUnknown && "opacity-50")}>
                        {(r.picksUnknown ? r.myTeam : r.myPicks).map((id) => <PSprite key={id} id={id} size={28} />)}
                      </div>
                      {r.picksUnknown && <span className="text-[9px] text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 px-1 py-0.5 rounded ml-1">torneo</span>}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wide w-6 shrink-0">Opp</span>
                      <div className={cn("flex gap-0.5", r.picksUnknown && "opacity-50")}>
                        {(r.picksUnknown ? r.opponentTeam : r.opponentPicks).map((id) => <PSprite key={id} id={id} size={28} />)}
                      </div>
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
                        {r.picksUnknown && (
                          <p className="text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                            <AlertCircle size={11} className="flex-shrink-0" />
                            Picks non registrati per questo match (risultato di torneo)
                          </p>
                        )}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">My Full Team</p>
                            <div className="flex flex-wrap gap-1.5">
                              {r.myTeam.map((id) => (
                                <div key={id} className={cn("flex items-center gap-1 px-1.5 py-0.5 rounded-lg text-xs border",
                                  !r.picksUnknown && r.myPicks.includes(id)
                                    ? "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300"
                                    : "bg-muted border-border text-muted-foreground"
                                )}>
                                  <PSprite id={id} size={22} />
                                  <span>{getById(id)?.name}</span>
                                  {!r.picksUnknown && r.myPicks.includes(id) && <Check size={9} className="text-emerald-500" />}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Opponent Full Team</p>
                            <div className="flex flex-wrap gap-1.5">
                              {r.opponentTeam.map((id) => (
                                <div key={id} className={cn("flex items-center gap-1 px-1.5 py-0.5 rounded-lg text-xs border",
                                  !r.picksUnknown && r.opponentPicks.includes(id)
                                    ? "bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/30 text-red-800 dark:text-red-300"
                                    : "bg-muted border-border text-muted-foreground"
                                )}>
                                  <PSprite id={id} size={22} />
                                  <span>{getById(id)?.name}</span>
                                  {!r.picksUnknown && r.opponentPicks.includes(id) && <Swords size={9} className="text-red-400" />}
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
            {stats.picksUnknownCount > 0 && (
              <p className="text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                <AlertCircle size={11} className="flex-shrink-0" />
                {stats.picksUnknownCount} match{stats.picksUnknownCount !== 1 ? "es" : ""} di torneo (senza picks) esclusi da queste statistiche
              </p>
            )}
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
