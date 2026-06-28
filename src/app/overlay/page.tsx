"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { spriteUrl } from "@/lib/sprite-url";
import { Check, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import type { OverlayState } from "@/lib/storage";
import { OVERLAY_STORAGE_KEY } from "@/lib/storage";

// Corner positioning via ?corner=tl|tr|bl|br (default: bl)
const CORNER_CLASSES: Record<string, string> = {
  tl: "top-4 left-4",
  tr: "top-4 right-4",
  bl: "bottom-4 left-4",
  br: "bottom-4 right-4",
};

export default function OverlayPage() {
  const searchParams = useSearchParams();
  const corner = searchParams.get("corner") ?? "bl";
  const posClass = CORNER_CLASSES[corner] ?? CORNER_CLASSES.bl;

  const [state, setState] = useState<OverlayState | null>(null);
  const [confirmed, setConfirmed] = useState<Set<number>>(new Set());

  // Force transparent background so OBS Browser Source shows no background
  useEffect(() => {
    const el = document.documentElement;
    document.body.style.cssText = "background:transparent!important";
    el.style.cssText = "background:transparent!important";
    return () => {
      document.body.style.cssText = "";
      el.style.cssText = "";
    };
  }, []);

  const loadState = useCallback(() => {
    try {
      const raw = localStorage.getItem(OVERLAY_STORAGE_KEY);
      if (!raw || raw === "null") return;
      const parsed = JSON.parse(raw) as OverlayState;
      setState(prev => {
        if (!prev || prev.updatedAt !== parsed.updatedAt) setConfirmed(new Set());
        return parsed;
      });
    } catch {}
  }, []);

  useEffect(() => {
    loadState();
    const onStorage = (e: StorageEvent) => { if (e.key === OVERLAY_STORAGE_KEY) loadState(); };
    window.addEventListener("storage", onStorage);
    const poll = setInterval(loadState, 1500);
    return () => { window.removeEventListener("storage", onStorage); clearInterval(poll); };
  }, [loadState]);

  const toggle = (slot: number) =>
    setConfirmed(prev => { const n = new Set(prev); n.has(slot) ? n.delete(slot) : n.add(slot); return n; });

  const allDone = state ? confirmed.size >= state.picks.length : false;

  if (!state) return null; // nothing to show — no overlay rendered

  return (
    // Full-screen transparent canvas — only the panel has a visible background
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9999 }}>
      <div className={cn("absolute pointer-events-auto", posClass)}>

        {/* Panel */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(8, 8, 16, 0.82)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
            minWidth: 220,
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-white/8">
            <span className="text-[10px] font-bold uppercase tracking-wider text-violet-300 flex-1 truncate">
              {state.label}
            </span>
            {state.winRate != null && (
              <span className={cn(
                "text-xs font-black tabular-nums",
                state.winRate >= 55 ? "text-green-400" : state.winRate >= 45 ? "text-gray-200" : "text-red-400"
              )}>
                {Math.round(state.winRate)}%
              </span>
            )}
            <button
              onClick={() => setConfirmed(new Set())}
              className="text-white/30 hover:text-white/60 transition-colors"
              title="Reset"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>

          {/* Pick rows */}
          <div className="flex flex-col gap-0 divide-y divide-white/5">
            {state.picks.map(pick => {
              const done = confirmed.has(pick.slot);
              return (
                <button
                  key={pick.slot}
                  onClick={() => toggle(pick.slot)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 w-full text-left transition-all",
                    done ? "opacity-35" : "hover:bg-white/5 active:bg-white/10"
                  )}
                >
                  {/* Slot badge */}
                  <span className={cn(
                    "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0",
                    done ? "bg-green-700/80 text-white" :
                      pick.role === "lead" ? "bg-violet-600 text-white" : "bg-amber-500 text-white"
                  )}>
                    {done ? <Check className="w-3 h-3" /> : pick.slot}
                  </span>

                  {/* Sprite */}
                  <Image
                    src={spriteUrl(pick.sprite)}
                    alt={pick.name}
                    width={32}
                    height={32}
                    unoptimized
                    className={cn("shrink-0", done && "grayscale opacity-40")}
                  />

                  {/* Name */}
                  <span className={cn(
                    "flex-1 text-[11px] font-semibold truncate",
                    done ? "text-white/30 line-through" : "text-white"
                  )}>
                    {pick.name}
                  </span>

                  {/* Role */}
                  <span className={cn(
                    "text-[8px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded shrink-0",
                    done ? "text-white/20 bg-white/5" :
                      pick.role === "lead" ? "text-violet-300 bg-violet-900/60" : "text-amber-300 bg-amber-900/50"
                  )}>
                    {pick.role === "lead" ? "Lead" : "Back"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Done banner */}
          {allDone && (
            <div className="px-3 py-2 text-center border-t border-white/8">
              <span className="text-[10px] font-bold text-green-400">✓ Good luck!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
