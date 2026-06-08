"use client";

import { useState } from "react";
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
  exportAllData,
  importAllData,
  countExportRoster,
  type ExportData,
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
  const [clearConfirm, setClearConfirm] = useState(false);

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
    const data = exportAllData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `championslab-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showStatus(
      "success",
      `${data.teams.length} team · ${data.matchJournal.length} partite · ${countExportRoster(data.myRoster)} Pokémon esportati`
    );
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
      } catch (err) {
        showStatus("error", err instanceof Error ? err.message : "File non valido o corrotto");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  }

  function handleConfirmImport() {
    if (!confirmImport) return;
    try {
      importAllData(confirmImport);
      showStatus(
        "success",
        `${confirmImport.teams.length} team · ${confirmImport.matchJournal.length} partite · ${countExportRoster(confirmImport.myRoster)} Pokémon importati`
      );
      setConfirmImport(null);
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
          <p className="text-[11px] text-muted-foreground mb-3">Scegli il tema dell'interfaccia.</p>
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
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center shrink-0">
              <HardDrive className="w-3.5 h-3.5 text-white" />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Backup & Dati
            </h2>
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            I tuoi dati sono salvati localmente nel browser. Esporta un backup per non perderli.
          </p>

          {confirmImport && (
            <div className="mb-4 p-4 rounded-xl border-2 border-amber-300 dark:border-amber-500/40 bg-amber-50 dark:bg-amber-500/10">
              <div className="flex items-start gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-amber-700 dark:text-amber-400">
                    Conferma importazione
                  </p>
                  <p className="text-xs text-amber-600 dark:text-amber-300 mt-0.5">
                    {confirmImport.teams.length} team · {confirmImport.matchJournal.length} partite ·{" "}
                    {countExportRoster(confirmImport.myRoster)} Pokémon
                  </p>
                  <p className="text-xs text-amber-600 dark:text-amber-300 mt-1">
                    I dati attuali verranno <strong>sostituiti</strong>. Sei sicuro?
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleConfirmImport}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-colors"
                >
                  Importa
                </button>
                <button
                  onClick={() => setConfirmImport(null)}
                  className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/10 text-xs font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                >
                  Annulla
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={handleExport}
              className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.02] hover:border-violet-300 dark:hover:border-violet-500/40 hover:bg-violet-50/50 dark:hover:bg-violet-500/5 transition-all text-left group"
            >
              <div className="w-9 h-9 rounded-xl bg-violet-100 dark:bg-violet-500/20 flex items-center justify-center shrink-0 group-hover:bg-violet-200 dark:group-hover:bg-violet-500/30 transition-colors">
                <Download className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              </div>
              <div>
                <p className="text-sm font-bold">Esporta backup</p>
                <p className="text-[11px] text-muted-foreground">Scarica file JSON</p>
              </div>
            </button>

            <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.02] hover:border-blue-300 dark:hover:border-blue-500/40 hover:bg-blue-50/50 dark:hover:bg-blue-500/5 transition-all cursor-pointer text-left group">
              <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-200 dark:group-hover:bg-blue-500/30 transition-colors">
                <Upload className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-bold">Importa backup</p>
                <p className="text-[11px] text-muted-foreground">Carica file JSON</p>
              </div>
              <input type="file" accept=".json" className="hidden" onChange={handleFileChange} />
            </label>
          </div>
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
