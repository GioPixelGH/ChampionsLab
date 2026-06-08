"use client";

import { useState, useRef } from "react";
import { HardDrive, Download, Upload, Check, AlertTriangle, X } from "lucide-react";
import { exportAllData, importAllData, countExportRoster, type ExportData } from "@/lib/storage";
import { cn } from "@/lib/utils";

export function DataSyncButton() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");
  const [confirmImport, setConfirmImport] = useState<ExportData | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function close() {
    setOpen(false);
    setConfirmImport(null);
  }

  function handleExport() {
    const data = exportAllData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `championslab-backup-${new Date(data.exportedAt).toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setStatus("success");
    setStatusMsg(`Esportati: ${data.teams.length} team · ${data.matchJournal.length} partite · ${countExportRoster(data.myRoster)} Pokémon`);
    setTimeout(() => setStatus("idle"), 3500);
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target?.result as string) as ExportData;
        if (!data.version || !data.exportedAt) throw new Error("Formato non valido");
        if (data.version !== 1) throw new Error("Versione non supportata");
        setConfirmImport(data);
      } catch {
        setStatus("error");
        setStatusMsg("File non valido o corrotto");
        setTimeout(() => setStatus("idle"), 3500);
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  }

  function handleConfirmImport() {
    if (!confirmImport) return;
    try {
      importAllData(confirmImport);
      const msg = `Importati: ${confirmImport.teams.length} team · ${confirmImport.matchJournal.length} partite · ${countExportRoster(confirmImport.myRoster)} Pokémon`;
      setConfirmImport(null);
      setStatus("success");
      setStatusMsg(msg);
      setTimeout(() => { setStatus("idle"); close(); }, 3000);
    } catch (err) {
      setStatus("error");
      setStatusMsg(err instanceof Error ? err.message : "Errore durante l'importazione");
      setTimeout(() => setStatus("idle"), 3500);
    }
  }

  const panelContent = (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center">
            <HardDrive className="w-4 h-4 text-muted-foreground" />
          </div>
          <div>
            <p className="text-sm font-semibold">Backup dati</p>
            <p className="text-xs text-muted-foreground">Team · partite · roster</p>
          </div>
        </div>
        <button
          type="button"
          onClick={close}
          aria-label="Chiudi"
          className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 text-muted-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Confirm import */}
      {confirmImport && (
        <div className="mb-4 p-4 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30">
          <div className="flex items-start gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">Sovrascrivere i dati attuali?</p>
              <p className="text-xs text-amber-600 dark:text-amber-300 mt-1">
                {confirmImport.teams.length} team · {confirmImport.matchJournal.length} partite · {countExportRoster(confirmImport.myRoster)} Pokémon nel roster
              </p>
              <p className="text-[10px] text-amber-400 dark:text-amber-500 mt-1">
                Esportato il {new Date(confirmImport.exportedAt).toLocaleDateString("it-IT")}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleConfirmImport}
              className="flex-1 py-2.5 rounded-xl bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 active:bg-amber-700 transition-colors"
            >
              Conferma importazione
            </button>
            <button
              type="button"
              onClick={() => setConfirmImport(null)}
              className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/20 text-sm font-medium text-muted-foreground hover:bg-gray-50 dark:hover:bg-white/5 active:bg-gray-100 transition-colors"
            >
              Annulla
            </button>
          </div>
        </div>
      )}

      {/* Status */}
      {status !== "idle" && (
        <div className={cn(
          "mb-4 p-3 rounded-xl flex items-start gap-2 text-sm",
          status === "success"
            ? "bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400"
            : "bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400"
        )}>
          {status === "success"
            ? <Check className="w-4 h-4 shrink-0 mt-0.5" />
            : <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
          }
          {statusMsg}
        </div>
      )}

      {/* Action buttons */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={handleExport}
          className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 active:bg-gray-100 dark:active:bg-white/10 transition-colors text-left group"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors">
            <Download className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <p className="text-sm font-semibold">Esporta tutto</p>
            <p className="text-xs text-muted-foreground mt-0.5">Scarica un file .json di backup</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 active:bg-gray-100 dark:active:bg-white/10 transition-colors text-left group"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 transition-colors">
            <Upload className="w-5 h-5 text-emerald-500" />
          </div>
          <div>
            <p className="text-sm font-semibold">Importa backup</p>
            <p className="text-xs text-muted-foreground mt-0.5">Carica un file .json precedente</p>
          </div>
        </button>
      </div>

      <input
        ref={fileRef}
        type="file"
        accept=".json,application/json"
        title="Seleziona file di backup"
        aria-label="Seleziona file di backup"
        className="hidden"
        onChange={handleFileChange}
      />
    </>
  );

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={cn(
          "p-2 rounded-lg transition-colors",
          open
            ? "bg-gray-900/[0.05] text-foreground dark:bg-white/10"
            : "text-muted-foreground hover:text-foreground hover:bg-gray-900/[0.03] dark:hover:bg-white/5"
        )}
        title="Backup dati"
      >
        <HardDrive className="w-4 h-4" />
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/20 dark:bg-black/50 sm:bg-transparent sm:dark:bg-transparent"
            onClick={close}
          />

          {/* Mobile: bottom sheet — Desktop: dropdown */}
          <div className={cn(
            "z-50 bg-white dark:bg-gray-900 border border-gray-200/60 dark:border-white/10 shadow-xl p-4",
            // Mobile: full-width bottom sheet
            "fixed bottom-0 left-0 right-0 rounded-t-2xl",
            // Desktop: dropdown anchored to button
            "sm:absolute sm:bottom-auto sm:left-auto sm:right-0 sm:top-10 sm:w-72 sm:rounded-xl sm:fixed-none",
          )}>
            {/* Mobile drag handle */}
            <div className="flex justify-center mb-3 sm:hidden">
              <div className="w-10 h-1 rounded-full bg-gray-300 dark:bg-white/20" />
            </div>

            {panelContent}

            {/* Mobile safe area padding */}
            <div className="pb-6 sm:hidden" />
          </div>
        </>
      )}
    </div>
  );
}
