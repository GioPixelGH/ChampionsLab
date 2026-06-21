"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Plus, ChevronDown } from "lucide-react";
import { useState } from "react";
import { POKEMON_SEED, SEASONS } from "@/lib/pokemon-data";
import { spriteUrl } from "@/lib/sprite-url";
import { getMyRoster } from "@/lib/storage";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface DetectedRosterProps {
  detectedIds: Set<number>;
  onRemove: (id: number) => void;
  onAddToRoster: (ids: number[], seasonId: number) => void;
  onClear: () => void;
}

export function DetectedRoster({
  detectedIds,
  onRemove,
  onAddToRoster,
  onClear,
}: DetectedRosterProps) {
  const { tp } = useI18n();

  const activeSeasonId = SEASONS.find((s) => s.isActive)?.id ?? SEASONS[SEASONS.length - 1]?.id ?? 1;
  const [selectedSeasonId, setSelectedSeasonId] = useState<number>(activeSeasonId);
  const [showSeasonDropdown, setShowSeasonDropdown] = useState(false);

  const currentRoster = getMyRoster(selectedSeasonId);

  const newIds = Array.from(detectedIds).filter((id) => !currentRoster.has(id));
  const alreadyOwnedIds = Array.from(detectedIds).filter((id) => currentRoster.has(id));

  const allIds = [...newIds, ...alreadyOwnedIds];

  const selectedSeason = SEASONS.find((s) => s.id === selectedSeasonId);

  return (
    <div className="flex flex-col gap-3 h-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-foreground">
          {detectedIds.size === 0
            ? "Nessun Pokémon rilevato"
            : `${detectedIds.size} Pokémon rilevati`}
        </span>
        {detectedIds.size > 0 && (
          <button
            onClick={onClear}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Cancella
          </button>
        )}
      </div>

      {/* Pokémon chips */}
      <div className="flex-1 overflow-y-auto min-h-0">
        {detectedIds.size === 0 ? (
          <div className="flex flex-col items-center justify-center h-32 text-center text-muted-foreground text-sm gap-2">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <Plus className="w-5 h-5" />
            </div>
            <p>I Pokémon appariranno qui mentre li scansioni</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            <AnimatePresence>
              {allIds.map((id) => {
                const pokemon = POKEMON_SEED.find((p) => p.id === id);
                if (!pokemon) return null;
                const isOwned = alreadyOwnedIds.includes(id);

                return (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.15 }}
                    className={cn(
                      "flex items-center gap-2 px-2 py-1.5 rounded-lg border text-xs font-medium relative",
                      isOwned
                        ? "border-emerald-200 bg-emerald-50 dark:border-emerald-800/40 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400"
                        : "border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5"
                    )}
                  >
                    <Image
                      src={spriteUrl(pokemon.sprite)}
                      alt={tp(pokemon.name)}
                      width={28}
                      height={28}
                      className="object-contain flex-shrink-0"
                      unoptimized
                    />
                    <span className="truncate flex-1">{tp(pokemon.name)}</span>
                    {isOwned ? (
                      <Check className="w-3.5 h-3.5 flex-shrink-0 text-emerald-500" />
                    ) : (
                      <button
                        onClick={() => onRemove(id)}
                        className="flex-shrink-0 hover:text-red-500 transition-colors text-muted-foreground"
                        aria-label="Rimuovi"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Season selector + Add button */}
      {detectedIds.size > 0 && (
        <div className="flex flex-col gap-2 pt-2 border-t border-gray-200/60 dark:border-gray-700/40">
          {/* Season picker */}
          <div className="relative">
            <button
              onClick={() => setShowSeasonDropdown((v) => !v)}
              className="w-full flex items-center justify-between gap-2 px-3 py-2 text-xs rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
            >
              <span className="truncate text-muted-foreground">
                Stagione: <span className="text-foreground font-medium">{selectedSeason?.name ?? `Stagione ${selectedSeasonId}`}</span>
              </span>
              <ChevronDown className={cn("w-4 h-4 flex-shrink-0 transition-transform text-muted-foreground", showSeasonDropdown && "rotate-180")} />
            </button>

            {showSeasonDropdown && (
              <div className="absolute bottom-full left-0 right-0 mb-1 bg-white dark:bg-[#111a2e] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden z-20">
                {SEASONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSelectedSeasonId(s.id);
                      setShowSeasonDropdown(false);
                    }}
                    className={cn(
                      "w-full text-left px-3 py-2 text-xs hover:bg-gray-50 dark:hover:bg-white/5 transition-colors",
                      s.id === selectedSeasonId && "text-emerald-600 dark:text-emerald-400 font-semibold"
                    )}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Add to Roster button */}
          <button
            onClick={() => onAddToRoster(newIds, selectedSeasonId)}
            disabled={newIds.length === 0}
            className={cn(
              "w-full py-2.5 px-4 rounded-xl text-sm font-semibold transition-all",
              newIds.length > 0
                ? "bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white shadow-sm"
                : "bg-gray-100 dark:bg-white/10 text-muted-foreground cursor-not-allowed"
            )}
          >
            {newIds.length === 0
              ? "Tutti già nel Roster"
              : `Aggiungi ${newIds.length} al Roster`}
          </button>
        </div>
      )}
    </div>
  );
}
