"use client";

import { useState, useEffect } from "react";
import {
  Settings,
  Sun,
  Moon,
  Monitor,
  Globe,
  HardDrive,
  Download,
  Upload,
  Check,
  AlertTriangle,
  Trash2,
  Shield,
  Radio,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  getSettings,
  updateSettings,
  exportSelectedData,
  importAllData,
  mergeImportData,
  countExportRoster,
  getDataCounts,
  analyzeImport,
  type ExportData,
  type ExportOptions,
  type ImportAnalysis,
  type ImportStats,
} from "@/lib/storage";
import { SEASONS } from "@/lib/pokemon-data";
import { useI18n, type Locale } from "@/lib/i18n";
import { useIsNative } from "@/hooks/useIsNative";

const LANGUAGES: { code: Locale; flag: string; label: string }[] = [
  { code: "en", flag: "gb", label: "English" },
  { code: "fr", flag: "fr", label: "Français" },
  { code: "es", flag: "es", label: "Español" },
  { code: "it", flag: "it", label: "Italiano" },
  { code: "de", flag: "de", label: "Deutsch" },
  { code: "pt-PT", flag: "pt", label: "Português" },
];

type ThemeOption = "light" | "dark" | "system";

function applyTheme(theme: ThemeOption) {
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  localStorage.setItem("championslab-theme", theme);
  document.cookie = `cl-theme=${isDark ? "dark" : "light"};path=/;max-age=31536000;SameSite=Lax`;
  window.dispatchEvent(new Event("theme-change"));
}

function readStoredTheme(): ThemeOption {
  if (typeof window === "undefined") return "system";
  const stored = localStorage.getItem("championslab-theme");
  if (stored === "dark" || stored === "light" || stored === "system") return stored;
  return "system";
}

export default function SettingsPage() {
  const isNative = useIsNative();
  const { locale, setLocale } = useI18n();

  const [currentTheme, setCurrentTheme] = useState<ThemeOption>(readStoredTheme);
  const [defaultRegId, setDefaultRegId] = useState<string>(() => {
    const stored = getSettings().defaultRegulationId;
    return stored || SEASONS.flatMap(s => s.regulations).find(r => r.isActive)?.id || "";
  });
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);
  const [confirmImport, setConfirmImport] = useState<ExportData | null>(null);
  const [importAnalysis, setImportAnalysis] = useState<ImportAnalysis | null>(null);
  const [importStats, setImportStats] = useState<ImportStats | null>(null);
  const [clearConfirm, setClearConfirm] = useState(false);
  const [exportOpts, setExportOpts] = useState<ExportOptions>({
    teams: true,
    matchJournal: true,
    myRoster: true,
    simResults: false,
    settings: false,
  });
  const [dataCounts, setDataCounts] = useState<{ teams: number; matches: number; roster: number; simResults: number }>({
    teams: 0,
    matches: 0,
    roster: 0,
    simResults: 0,
  });

  useEffect(() => {
    setDataCounts(getDataCounts());
  }, []);

  function showStatus(type: "success" | "error", msg: string) {
    setStatus({ type, msg });
    setTimeout(() => setStatus(null), 4000);
  }

  function handleTheme(theme: ThemeOption) {
    setCurrentTheme(theme);
    applyTheme(theme);
    updateSettings({ theme });
  }

  function handleSetDefaultRegulation(regId: string) {
    updateSettings({ defaultRegulationId: regId });
    setDefaultRegId(regId);
    const reg = SEASONS.flatMap(s => s.regulations).find(r => r.id === regId);
    showStatus("success", `${reg?.label ?? regId} impostata come regulation di default`);
  }

  function handleExport() {
    const data = exportSelectedData(exportOpts);
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `championslab-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    const parts: string[] = [];
    if (exportOpts.teams && data.teams.length > 0) parts.push(`${data.teams.length} team`);
    if (exportOpts.matchJournal && data.matchJournal.length > 0) parts.push(`${data.matchJournal.length} partite`);
    if (exportOpts.myRoster) {
      const rCount = countExportRoster(data.myRoster);
      if (rCount > 0) parts.push(`${rCount} Pokémon`);
    }
    if (exportOpts.simResults && data.simResults.length > 0) parts.push(`${data.simResults.length} sim`);
    if (exportOpts.settings) parts.push("impostazioni");
    showStatus("success", parts.length > 0 ? `${parts.join(" · ")} esportati` : "File esportato");
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target?.result as string) as ExportData;
        if (data.version !== 1) throw new Error("Versione non supportata");
        setConfirmImport(data);
        setImportAnalysis(analyzeImport(data));
        setImportStats(null);
      } catch (err) {
        showStatus("error", err instanceof Error ? err.message : "File non valido o corrotto");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  }

  function handleMergeImport() {
    if (!confirmImport) return;
    try {
      const stats = mergeImportData(confirmImport);
      setImportStats(stats);
      setConfirmImport(null);
      setImportAnalysis(null);
      setDataCounts(getDataCounts());
    } catch (err) {
      showStatus("error", err instanceof Error ? err.message : "Errore durante l'importazione");
    }
  }

  function handleReplaceImport() {
    if (!confirmImport) return;
    try {
      importAllData(confirmImport);
      showStatus(
        "success",
        `${confirmImport.teams.length} team · ${confirmImport.matchJournal.length} partite · ${countExportRoster(confirmImport.myRoster)} Pokémon importati`
      );
      setConfirmImport(null);
      setImportAnalysis(null);
      setDataCounts(getDataCounts());
    } catch (err) {
      showStatus("error", err instanceof Error ? err.message : "Errore durante l'importazione");
    }
  }

  function handleClearAll() {
    const toRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k?.startsWith("champions-lab:")) toRemove.push(k);
    }
    toRemove.forEach((k) => localStorage.removeItem(k));
    setClearConfirm(false);
    showStatus("success", "Tutti i dati eliminati");
  }

  if (isNative) return null;

  return (
    <div className="pb-24">
      {/* Page Header */}
      <div className="px-4 pt-6 pb-4 border-b border-gray-200/60 dark:border-white/10 flex flex-col items-center text-center gap-2">
        <div className="p-3 rounded-2xl bg-gradient-to-br from-slate-500 to-gray-700">
          <Settings className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-xl font-bold">Impostazioni</h1>
        <p className="text-sm text-muted-foreground">
          Personalizza la tua esperienza su Champions Lab
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-5">

        {/* Global status banner */}
        {status && (
          <div
            className={cn(
              "p-3 rounded-xl text-xs font-medium border flex items-center gap-2",
              status.type === "success"
                ? "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400"
                : "bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/30 text-red-700 dark:text-red-400"
            )}
          >
            {status.type === "success"
              ? <Check className="w-3.5 h-3.5 shrink-0" />
              : <AlertTriangle className="w-3.5 h-3.5 shrink-0" />}
            {status.msg}
          </div>
        )}

        {/* ── Appearance ─────────────────────────────────────────────── */}
        <section className="glass rounded-2xl p-5 border border-gray-200/60 dark:border-white/10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shrink-0">
              <Sun className="w-3.5 h-3.5 text-white" />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Aspetto</h2>
          </div>
          <p className="text-[11px] text-muted-foreground mb-3">Scegli il tema dell&apos;interfaccia.</p>
          <div className="grid grid-cols-3 gap-2">
            {([
              { value: "light", label: "Chiaro", icon: Sun, desc: "Sempre chiaro" },
              { value: "system", label: "Sistema", icon: Monitor, desc: "Segue il dispositivo" },
              { value: "dark", label: "Scuro", icon: Moon, desc: "Sempre scuro" },
            ] as const).map(({ value, label, icon: Icon, desc }) => (
              <button
                key={value}
                onClick={() => handleTheme(value)}
                className={cn(
                  "flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all text-center",
                  currentTheme === value
                    ? "border-violet-400 bg-violet-50 dark:bg-violet-500/10"
                    : "border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 bg-white/50 dark:bg-white/[0.02]"
                )}
              >
                <Icon
                  className={cn(
                    "w-5 h-5",
                    currentTheme === value ? "text-violet-500" : "text-muted-foreground"
                  )}
                />
                <p
                  className={cn(
                    "text-xs font-bold",
                    currentTheme === value ? "text-violet-600 dark:text-violet-400" : "text-foreground"
                  )}
                >
                  {label}
                </p>
                <p className="text-[10px] text-muted-foreground leading-tight">{desc}</p>
              </button>
            ))}
          </div>
        </section>

        {/* ── Language ────────────────────────────────────────────────── */}
        <section className="glass rounded-2xl p-5 border border-gray-200/60 dark:border-white/10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shrink-0">
              <Globe className="w-3.5 h-3.5 text-white" />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Lingua</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLocale(lang.code)}
                className={cn(
                  "flex items-center gap-2.5 p-3 rounded-xl border-2 transition-all text-left",
                  locale === lang.code
                    ? "border-blue-400 bg-blue-50 dark:bg-blue-500/10"
                    : "border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 bg-white/50 dark:bg-white/[0.02]"
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://flagcdn.com/w40/${lang.flag}.png`}
                  alt=""
                  className="w-6 h-4 object-cover rounded-sm shadow-sm ring-1 ring-black/10 dark:ring-white/20 shrink-0"
                />
                <span
                  className={cn(
                    "text-sm font-semibold flex-1 min-w-0 truncate",
                    locale === lang.code ? "text-blue-600 dark:text-blue-400" : ""
                  )}
                >
                  {lang.label}
                </span>
                {locale === lang.code && (
                  <Check className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* ── Regulation di Default ────────────────────────────────────── */}
        <section className="glass rounded-2xl p-5 border border-gray-200/60 dark:border-white/10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-400 to-indigo-600 flex items-center justify-center shrink-0">
              <Radio className="w-3.5 h-3.5 text-white" />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Regulation di Default
            </h2>
          </div>
          <p className="text-[11px] text-muted-foreground mb-4">
            La regulation selezionata viene usata come punto di partenza in tutte le pagine e apparirà in{" "}
            <span className="font-bold text-green-500">verde</span> nei menu a tendina.
          </p>

          <select
            aria-label="Regulation di Default"
            value={defaultRegId}
            onChange={(e) => handleSetDefaultRegulation(e.target.value)}
            className={cn(
              "w-full px-3 py-2.5 rounded-xl border bg-white dark:bg-white/5 text-sm font-medium focus:outline-none focus:ring-2 focus:border-transparent transition-colors",
              defaultRegId
                ? "border-green-400 dark:border-green-500/40 text-green-600 dark:text-green-400 focus:ring-green-400"
                : "border-gray-200 dark:border-white/10 text-foreground focus:ring-violet-400"
            )}
          >
            {SEASONS.map((season) => (
              <optgroup key={season.id} label={season.name}>
                {season.regulations.map((reg) => (
                  <option
                    key={reg.id}
                    value={reg.id}
                    style={{ color: reg.id === defaultRegId ? "#22c55e" : "CanvasText" }}
                  >
                    {reg.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </section>

        {/* ── Backup & Data ─────────────────────────────────────────────── */}
        <section className="glass rounded-2xl p-5 border border-gray-200/60 dark:border-white/10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-7 rounded-lg bg-linear-to-br from-violet-400 to-purple-500 flex items-center justify-center shrink-0">
              <HardDrive className="w-3.5 h-3.5 text-white" />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Backup & Dati
            </h2>
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            I tuoi dati sono salvati localmente nel browser. Esporta un backup per non perderli.
          </p>

          {/* ── Export: selection rows ── */}
          <div className="mb-3">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Esporta
            </p>
            <div className="rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden divide-y divide-gray-100 dark:divide-white/[0.06]">
              {([
                {
                  key: "teams" as const,
                  label: "Team Builder",
                  count: dataCounts.teams,
                  unit: "team",
                  alwaysShow: false,
                },
                {
                  key: "matchJournal" as const,
                  label: "Match Journal",
                  count: dataCounts.matches,
                  unit: dataCounts.matches === 1 ? "partita" : "partite",
                  alwaysShow: false,
                },
                {
                  key: "myRoster" as const,
                  label: "Roster Pokémon",
                  count: dataCounts.roster,
                  unit: "Pokémon",
                  alwaysShow: true,
                },
                {
                  key: "simResults" as const,
                  label: "Risultati sim.",
                  count: dataCounts.simResults,
                  unit: dataCounts.simResults === 1 ? "risultato" : "risultati",
                  alwaysShow: false,
                },
              ])
                .filter(({ count, alwaysShow }) => alwaysShow || count > 0)
                .map(({ key, label, count, unit }) => (
                  <label
                    key={key}
                    className="flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={exportOpts[key]}
                      onChange={(e) =>
                        setExportOpts((o) => ({ ...o, [key]: e.target.checked }))
                      }
                      className="w-4 h-4 rounded accent-violet-500 shrink-0"
                    />
                    <span className="text-sm font-medium flex-1">{label}</span>
                    {count > 0 && (
                      <span className="text-xs text-muted-foreground tabular-nums">
                        {count} {unit}
                      </span>
                    )}
                  </label>
                ))}
              {/* Settings row — always shown */}
              <label className="flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors">
                <input
                  type="checkbox"
                  checked={exportOpts.settings}
                  onChange={(e) =>
                    setExportOpts((o) => ({ ...o, settings: e.target.checked }))
                  }
                  className="w-4 h-4 rounded accent-violet-500 shrink-0"
                />
                <span className="text-sm font-medium flex-1">Impostazioni</span>
              </label>
            </div>
            <button
              onClick={handleExport}
              disabled={
                !Object.values(exportOpts).some(Boolean) ||
                (exportOpts.teams && dataCounts.teams === 0 &&
                  exportOpts.matchJournal && dataCounts.matches === 0 &&
                  exportOpts.myRoster && dataCounts.roster === 0 &&
                  exportOpts.simResults && dataCounts.simResults === 0 &&
                  !exportOpts.settings)
              }
              className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-violet-500 hover:bg-violet-600 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-bold transition-colors"
            >
              <Download className="w-4 h-4" />
              Esporta selezionati
            </button>
          </div>

          {/* ── Import analysis dialog ── */}
          {confirmImport && importAnalysis && (
            <div className="mb-4 p-4 rounded-xl border-2 border-blue-300 dark:border-blue-500/40 bg-blue-50 dark:bg-blue-500/10">
              <p className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-3">
                Analisi file importato
              </p>
              <div className="space-y-1.5 mb-4">
                {importAnalysis.teams.total > 0 && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-muted-foreground w-28 shrink-0">Team Builder</span>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {importAnalysis.teams.new} nuovi
                    </span>
                    {importAnalysis.teams.duplicate > 0 && (
                      <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                        {importAnalysis.teams.duplicate} già presenti
                      </span>
                    )}
                  </div>
                )}
                {importAnalysis.matches.total > 0 && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-muted-foreground w-28 shrink-0">Match Journal</span>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {importAnalysis.matches.new} nuovi
                    </span>
                    {importAnalysis.matches.duplicate > 0 && (
                      <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                        {importAnalysis.matches.duplicate} già presenti
                      </span>
                    )}
                  </div>
                )}
                {importAnalysis.roster.total > 0 && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-muted-foreground w-28 shrink-0">Roster Pokémon</span>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {importAnalysis.roster.total} Pokémon
                    </span>
                  </div>
                )}
                {importAnalysis.simResults.total > 0 && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-muted-foreground w-28 shrink-0">Risultati sim.</span>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {importAnalysis.simResults.new} nuovi
                    </span>
                    {importAnalysis.simResults.duplicate > 0 && (
                      <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                        {importAnalysis.simResults.duplicate} già presenti
                      </span>
                    )}
                  </div>
                )}
                {importAnalysis.hasSettings && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground w-28 shrink-0">Impostazioni</span>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">presenti</span>
                  </div>
                )}
              </div>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={handleMergeImport}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold transition-colors"
                >
                  Unisci
                </button>
                <button
                  onClick={handleReplaceImport}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-colors"
                >
                  Sostituisci tutto
                </button>
                <button
                  onClick={() => { setConfirmImport(null); setImportAnalysis(null); }}
                  className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 text-xs font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                >
                  Annulla
                </button>
              </div>
            </div>
          )}

          {/* ── Merge success stats ── */}
          {importStats && (
            <div className="mb-4 p-4 rounded-xl border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10">
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
                  Importazione completata
                </p>
              </div>
              <div className="space-y-1">
                {importStats.teams.added > 0 && (
                  <p className="text-xs text-emerald-700 dark:text-emerald-300">
                    +{importStats.teams.added} team
                    {importStats.teams.skipped > 0 && (
                      <span className="text-amber-600 dark:text-amber-400"> · {importStats.teams.skipped} saltati</span>
                    )}
                  </p>
                )}
                {importStats.matches.added > 0 && (
                  <p className="text-xs text-emerald-700 dark:text-emerald-300">
                    +{importStats.matches.added} partite
                    {importStats.matches.skipped > 0 && (
                      <span className="text-amber-600 dark:text-amber-400"> · {importStats.matches.skipped} saltate</span>
                    )}
                  </p>
                )}
                {importStats.roster > 0 && (
                  <p className="text-xs text-emerald-700 dark:text-emerald-300">
                    {importStats.roster} Pokémon nel roster
                  </p>
                )}
                {importStats.simResults.added > 0 && (
                  <p className="text-xs text-emerald-700 dark:text-emerald-300">
                    +{importStats.simResults.added} risultati sim.
                  </p>
                )}
              </div>
              <button
                onClick={() => setImportStats(null)}
                className="mt-2 text-[11px] text-emerald-600 dark:text-emerald-400 underline"
              >
                Chiudi
              </button>
            </div>
          )}

          {/* ── Import button ── */}
          <label className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/2 hover:border-blue-300 dark:hover:border-blue-500/40 hover:bg-blue-50/50 dark:hover:bg-blue-500/5 transition-all cursor-pointer text-sm font-bold">
            <Upload className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Importa backup</span>
            <input type="file" accept=".json" className="hidden" onChange={handleFileChange} />
          </label>
        </section>

        {/* ── Danger Zone ──────────────────────────────────────────────── */}
        <section className="glass rounded-2xl p-5 border border-red-200/60 dark:border-red-500/20">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-red-400 to-rose-600 flex items-center justify-center shrink-0">
              <Trash2 className="w-3.5 h-3.5 text-white" />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-red-500 dark:text-red-400">
              Zona Pericolosa
            </h2>
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            Questa azione è irreversibile. Esporta un backup prima di procedere.
          </p>

          {clearConfirm ? (
            <div className="p-4 rounded-xl border-2 border-red-300 dark:border-red-500/40 bg-red-50 dark:bg-red-500/10">
              <p className="text-sm font-bold text-red-700 dark:text-red-400 mb-1">
                Sei assolutamente sicuro?
              </p>
              <p className="text-xs text-red-600 dark:text-red-300 mb-3">
                Tutti i team, partite, roster e impostazioni verranno cancellati definitivamente.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleClearAll}
                  className="px-3 py-1.5 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs font-bold transition-colors"
                >
                  Sì, cancella tutto
                </button>
                <button
                  onClick={() => setClearConfirm(false)}
                  className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 text-xs font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                >
                  Annulla
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setClearConfirm(true)}
              className="w-full flex items-center gap-3 p-4 rounded-xl border border-red-200 dark:border-red-500/20 bg-red-50/50 dark:bg-red-500/5 hover:border-red-300 dark:hover:border-red-500/40 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all text-left"
            >
              <div className="w-9 h-9 rounded-xl bg-red-100 dark:bg-red-500/20 flex items-center justify-center shrink-0">
                <Trash2 className="w-4 h-4 text-red-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-red-600 dark:text-red-400">
                  Cancella tutti i dati
                </p>
                <p className="text-[11px] text-muted-foreground">Team, partite, roster e impostazioni</p>
              </div>
            </button>
          )}
        </section>

        {/* ── About ────────────────────────────────────────────────────── */}
        <section className="glass rounded-2xl p-5 border border-gray-200/60 dark:border-white/10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-gray-400 to-slate-600 flex items-center justify-center shrink-0">
              <Shield className="w-3.5 h-3.5 text-white" />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Informazioni
            </h2>
          </div>
          <div className="divide-y divide-gray-100 dark:divide-white/[0.06] text-sm">
            <div className="flex justify-between py-2.5">
              <span className="text-muted-foreground">App</span>
              <span className="font-semibold">Champions Lab</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-muted-foreground">Dati salvati</span>
              <span className="font-semibold">Localmente nel browser</span>
            </div>
            <div className="flex justify-between py-2.5">
              <span className="text-[11px] text-muted-foreground">Pokémon © Nintendo / Game Freak</span>
              <span className="text-[11px] text-muted-foreground">Fan project</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
