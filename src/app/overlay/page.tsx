"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { spriteUrl } from "@/lib/sprite-url";
import { Check, RotateCcw, X, Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { OverlayState } from "@/lib/storage";
import { OVERLAY_STORAGE_KEY } from "@/lib/storage";

export default function OverlayPage() {
  const [state, setState] = useState<OverlayState | null>(null);
  const [confirmed, setConfirmed] = useState<Set<number>>(new Set());

  // Cover navbar/footer from root layout
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.background = "transparent";
    return () => {
      document.body.style.overflow = "";
      document.body.style.background = "";
    };
  }, []);

  const loadState = useCallback(() => {
    try {
      const raw = localStorage.getItem(OVERLAY_STORAGE_KEY);
      if (!raw || raw === "null") return;
      const parsed = JSON.parse(raw) as OverlayState;
      setState(prev => {
        if (!prev || prev.updatedAt !== parsed.updatedAt) {
          setConfirmed(new Set());
        }
        return parsed;
      });
    } catch {}
  }, []);

  useEffect(() => {
    loadState();
    // Cross-window updates (main app → overlay popup)
    const onStorage = (e: StorageEvent) => {
      if (e.key === OVERLAY_STORAGE_KEY) loadState();
    };
    window.addEventListener("storage", onStorage);
    // Polling fallback for same-origin same-window scenarios
    const poll = setInterval(loadState, 1500);
    return () => {
      window.removeEventListener("storage", onStorage);
      clearInterval(poll);
    };
  }, [loadState]);

  const toggleConfirm = (slot: number) => {
    setConfirmed(prev => {
      const next = new Set(prev);
      if (next.has(slot)) next.delete(slot);
      else next.add(slot);
      return next;
    });
  };

  const allDone = state ? confirmed.size >= state.picks.length : false;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col bg-gray-950 text-white select-none overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-900/90 border-b border-white/10 flex-shrink-0">
        <Gamepad2 className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-violet-300 flex-1 truncate min-w-0">
          {state?.label ?? "Waiting for Battle Bot…"}
        </span>
        {state?.winRate != null && (
          <span className={cn(
            "text-xs font-black flex-shrink-0",
            state.winRate >= 55 ? "text-green-400" : state.winRate >= 45 ? "text-gray-200" : "text-red-400"
          )}>
            {Math.round(state.winRate)}%
          </span>
        )}
        <span className="text-[9px] text-gray-500 flex-shrink-0 tabular-nums">
          {confirmed.size}/{state?.picks.length ?? 4}
        </span>
        <button
          onClick={() => setConfirmed(new Set())}
          title="Reset picks"
          className="p-1 rounded text-gray-500 hover:text-gray-300 transition-colors flex-shrink-0"
        >
          <RotateCcw className="w-3 h-3" />
        </button>
        <button
          onClick={() => window.close()}
          title="Close overlay"
          className="p-1 rounded text-gray-500 hover:text-red-400 transition-colors flex-shrink-0"
        >
          <X className="w-3 h-3" />
        </button>
      </div>

      {/* Pick rows */}
      <div className="flex-1 flex flex-col gap-1.5 p-2 justify-center">
        {state ? (
          <>
            {state.picks.map(pick => {
              const done = confirmed.has(pick.slot);
              return (
                <button
                  key={pick.slot}
                  onClick={() => toggleConfirm(pick.slot)}
                  className={cn(
                    "flex items-center gap-2.5 px-3 py-2 rounded-xl border text-left transition-all duration-150 w-full",
                    done
                      ? "bg-green-950/40 border-green-800/40 opacity-40"
                      : pick.role === "lead"
                        ? "bg-violet-900/50 border-violet-600/50 hover:border-violet-400 active:scale-[0.97]"
                        : "bg-amber-900/40 border-amber-600/40 hover:border-amber-400 active:scale-[0.97]"
                  )}
                >
                  {/* Slot number / check */}
                  <span className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black flex-shrink-0",
                    done
                      ? "bg-green-700 text-white"
                      : pick.role === "lead"
                        ? "bg-violet-500 text-white"
                        : "bg-amber-500 text-white"
                  )}>
                    {done ? <Check className="w-3.5 h-3.5" /> : pick.slot}
                  </span>

                  {/* Sprite */}
                  <Image
                    src={spriteUrl(pick.sprite)}
                    alt={pick.name}
                    width={36}
                    height={36}
                    unoptimized
                    className={cn("flex-shrink-0 transition-all duration-150", done && "grayscale opacity-50")}
                  />

                  {/* Name */}
                  <span className={cn(
                    "flex-1 text-sm font-semibold truncate",
                    done ? "text-gray-600 line-through" : "text-white"
                  )}>
                    {pick.name}
                  </span>

                  {/* Role badge */}
                  <span className={cn(
                    "text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded flex-shrink-0",
                    done
                      ? "text-gray-700 bg-gray-800"
                      : pick.role === "lead"
                        ? "text-violet-200 bg-violet-800/60"
                        : "text-amber-200 bg-amber-800/60"
                  )}>
                    {pick.role === "lead" ? "Lead" : "Back"}
                  </span>
                </button>
              );
            })}

            {allDone && (
              <div className="py-2 rounded-xl bg-green-900/40 border border-green-700/40 text-center mt-0.5">
                <p className="text-xs font-bold text-green-400">✓ All selected — Good luck!</p>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <Gamepad2 className="w-10 h-10 text-gray-800" />
            <div>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Open Battle Bot, load your team,
              </p>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                then run a simulation or set up Team Rules.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
