"use client";

import { ShieldOff, Smartphone } from "lucide-react";

export default function BlockedPage() {
  return (
    <div className="min-h-screen bg-[#0d1526] flex items-center justify-center px-6">
      <div className="max-w-sm w-full text-center">
        {/* Icon */}
        <div className="relative mx-auto w-20 h-20 mb-6">
          <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping" />
          <div className="relative w-20 h-20 rounded-full bg-[#1a2540] border border-red-500/40 flex items-center justify-center">
            <ShieldOff className="w-9 h-9 text-red-400" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-white mb-2">Accesso Riservato</h1>
        <p className="text-slate-400 text-sm leading-relaxed mb-8">
          Questa piattaforma è accessibile esclusivamente tramite
          l&apos;app ufficiale <span className="text-emerald-400 font-semibold">Champions Lab</span>.
        </p>

        {/* Info box */}
        <div className="bg-[#1a2540] border border-white/10 rounded-2xl p-5 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <Smartphone className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-white text-sm font-medium">Come accedere</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed text-left">
            Installa l&apos;APK di Champions Lab sul tuo dispositivo Android
            e accedi direttamente dall&apos;applicazione.
          </p>
        </div>

        <p className="text-slate-600 text-xs">
          Codice errore: <code className="text-slate-500">403 Unauthorized</code>
        </p>
      </div>
    </div>
  );
}
