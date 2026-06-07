"use client";

import { useAppUpdater } from "@/hooks/useAppUpdater";

export function UpdateModal() {
  const { updateAvailable, applyUpdate, dismissUpdate } = useAppUpdater();

  if (!updateAvailable) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center px-4 pb-8 sm:items-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={dismissUpdate} />

      {/* Modal */}
      <div className="relative w-full max-w-sm rounded-2xl bg-white dark:bg-[#111a2e] border border-gray-200 dark:border-gray-200/10 shadow-2xl p-6 space-y-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/25 flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-foreground">Aggiornamento disponibile</p>
            <p className="text-xs text-muted-foreground">Versione {updateAvailable.version}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          È disponibile una nuova versione di Champions Lab. L&apos;aggiornamento è immediato — l&apos;app verrà ricaricata con le ultime novità.
        </p>

        {/* Buttons */}
        <div className="flex gap-2 pt-1">
          <button
            type="button"
            onClick={dismissUpdate}
            className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
          >
            Più tardi
          </button>
          <button
            type="button"
            onClick={applyUpdate}
            className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg shadow-emerald-500/20"
          >
            Aggiorna ora
          </button>
        </div>
      </div>
    </div>
  );
}
