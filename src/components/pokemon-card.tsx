"use client";

import { motion } from "@/lib/motion";
import Image from "next/image";
import { spriteUrl } from "@/lib/sprite-url";
import { ChampionsPokemon } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface PokemonCardProps {
  pokemon: ChampionsPokemon;
  onClick: (pokemon: ChampionsPokemon) => void;
  index: number;
  isNew?: boolean;
}

export function PokemonCard({ pokemon, onClick, index, isNew }: PokemonCardProps) {
  const primaryType = pokemon.types[0];
  const { tp, t } = useI18n();

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onClick(pokemon)}
      className="group relative cursor-pointer"
    >
      {/* Glow effect behind card */}
      <div
        className={cn(
          "absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl",
          `type-bg-30-${primaryType}`
        )}
      />

      {/* Card */}
      <div className={cn(
        "relative bg-white dark:bg-[#111a2e] rounded-2xl overflow-hidden border transition-all duration-500",
        isNew
          ? "border-emerald-300/70 dark:border-emerald-500/35 group-hover:border-emerald-400 dark:group-hover:border-emerald-400/60 group-hover:shadow-xl group-hover:shadow-emerald-900/10 dark:group-hover:shadow-emerald-900/30"
          : "border-gray-100 dark:border-gray-200/10 group-hover:border-gray-200/80 dark:group-hover:border-gray-200/20 group-hover:shadow-xl group-hover:shadow-black/[0.06] dark:group-hover:shadow-black/40"
      )}>
        {/* Tier badge */}
        {pokemon.tier && (
          <div className="absolute top-2.5 right-2.5 z-20">
            <span
              className={cn(
                "px-2 py-0.5 text-[10px] font-bold rounded-md backdrop-blur-sm",
                pokemon.tier === "Z" && "bg-rose-50/90 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 ring-1 ring-rose-200 dark:ring-rose-500/30",
                pokemon.tier === "S" && "bg-amber-50/90 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 ring-1 ring-amber-200 dark:ring-amber-500/30",
                pokemon.tier === "A" && "bg-violet-50/90 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400 ring-1 ring-violet-200 dark:ring-violet-500/30",
                pokemon.tier === "B" && "bg-blue-50/90 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 ring-1 ring-blue-200 dark:ring-blue-500/30",
                pokemon.tier === "C" && "bg-emerald-50/90 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-200 dark:ring-emerald-500/30",
                pokemon.tier === "D" && "bg-gray-50/90 dark:bg-gray-500/20 text-gray-500 dark:text-gray-400 ring-1 ring-gray-200 dark:ring-gray-500/30"
              )}
            >
              {pokemon.tier}
            </span>
          </div>
        )}

        {/* Left-side badges: NEW + MEGA stacked */}
        {(isNew || pokemon.hasMega) && (
          <div className="absolute top-2.5 left-2.5 z-20 flex flex-col gap-1">
            {isNew && (
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-emerald-50/90 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-200 dark:ring-emerald-500/40 backdrop-blur-sm tracking-wide">
                ✦ NEW
              </span>
            )}
            {pokemon.hasMega && (
              <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold rounded-md bg-gradient-to-r from-pink-50 to-violet-50 dark:from-pink-500/20 dark:to-violet-500/20 text-pink-600 dark:text-pink-400 ring-1 ring-pink-200 dark:ring-pink-500/30 backdrop-blur-sm">
                <Sparkles className="w-3 h-3" />
                MEGA
              </span>
            )}
          </div>
        )}

        {/* Sprite area with radial type-colour spotlight */}
        <div className={cn("relative h-40 flex items-center justify-center overflow-hidden", `radial-type-${primaryType}`)}>
          {/* Solid circle behind sprite — same hue, very low opacity */}
          <div
            className={cn(
              "absolute w-28 h-28 rounded-full opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-500",
              `type-bg-${primaryType}`
            )}
          />

          {/* Sprite */}
          <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
            <Image
              src={spriteUrl(pokemon.officialArt)}
              alt={tp(pokemon.name)}
              width={130}
              height={130}
              className="drop-shadow-xl object-contain"
              loading="lazy"
              unoptimized
            />
          </div>
        </div>

        {/* Info section */}
        <div className="px-4 pb-4 pt-2 space-y-2">
          {/* Name & Dex number */}
          <div className="flex items-center justify-between gap-1">
            <h3 className="font-semibold text-[13px] tracking-tight text-foreground truncate min-w-0">
              {tp(pokemon.name).replace(/^(.+?)\s*\((.+)\)$/, "($2) $1")}
            </h3>
            <span className="text-[10px] text-gray-400 tabular-nums flex-shrink-0">
              #{pokemon.dexNumber.toString().padStart(3, "0")}
            </span>
          </div>

          {/* Types — static CSS class replaces inline backgroundColor */}
          <div className="flex gap-1.5">
            {pokemon.types.map((type) => (
              <span
                key={type}
                className={cn("px-2 py-0.5 text-[9px] font-bold uppercase rounded-md text-white tracking-wider", `type-bg-cc-${type}`)}
              >
                {t(`common.types.${type}`)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
