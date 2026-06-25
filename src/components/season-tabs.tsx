"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import { SEASONS, getPokemonByRegulation } from "@/lib/pokemon-data";
import { cn } from "@/lib/utils";
import { Shield, Scroll, Swords, Users, Timer, Sparkles, Ban, Gauge, ListChecks, Calendar, Dna, ChevronDown, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { getSettings } from "@/lib/storage";
import type { Regulation } from "@/lib/types";

// ── Season + Regulation selector ──────────────────────────────────────────────

interface SeasonTabsProps {
  activeRegulation: string;
  onRegulationChange: (regulationId: string) => void;
  variant?: "dropdowns" | "cards";
}

export function SeasonTabs({ activeRegulation, onRegulationChange, variant = "dropdowns" }: SeasonTabsProps) {
  const { t } = useI18n();

  const translateName = (name: string) =>
    name
      .replace(/\bSeason\b/g, t('season.seasonWord'))
      .replace(/\bRegulation\b/g, t('season.regulationWord'));

  // The "LIVE" marker follows the user's saved default regulation (falls back to data isActive)
  const storedDefault = getSettings().defaultRegulationId;
  const liveRegId = storedDefault || SEASONS.flatMap(s => s.regulations).find(r => r.isActive)?.id || "";

  const activeSeasonId =
    SEASONS.find((s) => s.regulations.some((r) => r.id === activeRegulation))?.id ?? SEASONS[0]?.id;

  const activeSeason = SEASONS.find((s) => s.id === activeSeasonId);
  const activeSeasonIsLive = activeSeason?.regulations.some(r => r.id === liveRegId) ?? false;
  const activeRegIsLive = activeRegulation === liveRegId;

  if (variant === "cards") {
    return (
      <div className="space-y-4 w-full">
        {SEASONS.map((season) => (
          <div key={season.id}>
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2 px-1">
              {translateName(season.name)}
              {season.regulations.some(r => r.id === liveRegId) ? " — LIVE" : ""}
            </p>
            <div className="space-y-1.5">
              {season.regulations.map((reg) => {
                const isSelected = activeRegulation === reg.id;
                const isLive = liveRegId === reg.id;
                return (
                  <button
                    key={reg.id}
                    type="button"
                    onClick={() => onRegulationChange(reg.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all text-left",
                      isSelected
                        ? "border-violet-400 bg-violet-50 dark:bg-violet-500/10"
                        : "border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 bg-white/50 dark:bg-white/[0.02]"
                    )}
                  >
                    <div className="flex-1 flex items-center gap-2 min-w-0">
                      <span className={cn(
                        "text-sm font-bold",
                        isSelected ? "text-violet-600 dark:text-violet-400" : ""
                      )}>
                        {translateName(reg.label)}
                      </span>
                      {isLive && (
                        <span className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-200 dark:ring-emerald-500/30 uppercase tracking-wider">
                          LIVE
                        </span>
                      )}
                      {reg.isActive && !isLive && (
                        <span className="shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-muted-foreground">
                          Attiva
                        </span>
                      )}
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-violet-500 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2.5 min-w-[190px]">
      {/* Season dropdown */}
      <div className="relative">
        <Shield className={cn("absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none", activeSeasonIsLive ? "text-green-500" : "text-gray-400 dark:text-gray-500")} />
        <select
          title={t('season.seasonWord')}
          value={activeSeasonId}
          onChange={(e) => {
            const season = SEASONS.find((s) => s.id === Number(e.target.value));
            const target =
              season?.regulations.find((r) => r.isActive) ??
              season?.regulations[season.regulations.length - 1];
            if (target) onRegulationChange(target.id);
          }}
          className={cn(
            "w-full appearance-none pl-8 pr-8 py-2 rounded-xl text-sm font-medium bg-white dark:bg-white/5 border cursor-pointer focus:outline-none focus:ring-2 focus:border-transparent transition-colors",
            activeSeasonIsLive
              ? "border-green-400 dark:border-green-500/40 text-green-600 dark:text-green-400 focus:ring-green-400"
              : "border-gray-200 dark:border-white/10 text-foreground focus:ring-violet-400"
          )}
        >
          {SEASONS.map((season) => (
            <option
              key={season.id}
              value={season.id}
              style={{ color: season.regulations.some(r => r.id === liveRegId) ? "#22c55e" : "CanvasText" }}
            >
              {translateName(season.name)}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
      </div>

      {/* Regulation dropdown */}
      {activeSeason && activeSeason.regulations.length > 1 && (
        <div className="relative">
          <Scroll className={cn("absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none", activeRegIsLive ? "text-green-500" : "text-gray-400 dark:text-gray-500")} />
          <select
            title={t('season.regulationWord')}
            value={activeRegulation}
            onChange={(e) => onRegulationChange(e.target.value)}
            className={cn(
              "w-full appearance-none pl-8 pr-8 py-2 rounded-xl text-sm font-medium bg-white dark:bg-white/5 border cursor-pointer focus:outline-none focus:ring-2 focus:border-transparent transition-colors",
              activeRegIsLive
                ? "border-green-400 dark:border-green-500/40 text-green-600 dark:text-green-400 focus:ring-green-400"
                : "border-gray-200 dark:border-white/10 text-foreground focus:ring-violet-400"
            )}
          >
            {activeSeason.regulations.map((reg) => (
              <option
                key={reg.id}
                value={reg.id}
                style={{ color: reg.id === liveRegId ? "#22c55e" : "CanvasText" }}
              >
                {translateName(reg.label)}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
        </div>
      )}
    </div>
  );
}

interface RuleConfig {
  icon: typeof Swords;
  labelKey: string;
  descKey: string;
  color: string;
  bg: string;
  ring: string;
}

const RULES_CONFIG: Record<string, RuleConfig> = {
  "Doubles format": {
    icon: Swords,
    labelKey: "season.ruleDoubles",
    descKey: "season.ruleDoublesDesc",
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-500/15",
    ring: "ring-red-100 dark:ring-red-500/25",
  },
  "Bring 6, Pick 4": {
    icon: ListChecks,
    labelKey: "season.ruleBring6",
    descKey: "season.ruleBring6Desc",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-500/15",
    ring: "ring-blue-100 dark:ring-blue-500/25",
  },
  "Level 50 auto-level": {
    icon: Gauge,
    labelKey: "season.ruleLevel50",
    descKey: "season.ruleLevel50Desc",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-500/15",
    ring: "ring-amber-100 dark:ring-amber-500/25",
  },
  "Stat Points (no IVs/EVs)": {
    icon: Sparkles,
    labelKey: "season.ruleStatPoints",
    descKey: "season.ruleStatPointsDesc",
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-500/15",
    ring: "ring-violet-100 dark:ring-violet-500/25",
  },
  "Mega Evolution": {
    icon: Sparkles,
    labelKey: "season.ruleMega",
    descKey: "season.ruleMegaDesc",
    color: "text-pink-600 dark:text-pink-400",
    bg: "bg-pink-50 dark:bg-pink-500/15",
    ring: "ring-pink-100 dark:ring-pink-500/25",
  },
  "No duplicate Pokémon": {
    icon: Ban,
    labelKey: "season.ruleNoDupePokemon",
    descKey: "season.ruleNoDupePokemonDesc",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-500/15",
    ring: "ring-emerald-100 dark:ring-emerald-500/25",
  },
  "No duplicate held items": {
    icon: Ban,
    labelKey: "season.ruleNoDupeItems",
    descKey: "season.ruleNoDupeItemsDesc",
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-50 dark:bg-cyan-500/15",
    ring: "ring-cyan-100 dark:ring-cyan-500/25",
  },
  "20-minute game timer": {
    icon: Timer,
    labelKey: "season.ruleTimer",
    descKey: "season.ruleTimerDesc",
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-500/15",
    ring: "ring-orange-100 dark:ring-orange-500/25",
  },
};

function RuleCard({ rule }: { rule: string }) {
  const [hovered, setHovered] = useState(false);
  const { t } = useI18n();
  const config = RULES_CONFIG[rule];

  if (!config) return null;

  const Icon = config.icon;
  const label = t(config.labelKey);
  const description = t(config.descKey);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2 px-3.5 py-2 rounded-xl cursor-default transition-all duration-200 ring-1",
          config.bg,
          config.ring,
          hovered && "shadow-md ring-2"
        )}
      >
        <Icon className={cn("w-3.5 h-3.5 flex-shrink-0", config.color)} />
        <span className={cn("text-xs font-medium", config.color)}>{label}</span>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 left-0 top-full mt-2 w-72 p-4 bg-white dark:bg-[#131c2e] rounded-xl shadow-xl shadow-black/10 dark:shadow-black/40 border border-gray-100 dark:border-gray-200/10"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className={cn("w-6 h-6 rounded-lg flex items-center justify-center", config.bg)}>
                <Icon className={cn("w-3.5 h-3.5", config.color)} />
              </div>
              <span className="text-sm font-semibold text-foreground">{label}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SeasonInfo({ regulationId, noCard, hideRules }: { regulationId: string; noCard?: boolean; hideRules?: boolean }) {
  const { t, locale } = useI18n();

  // Find the regulation and its parent season
  const season = SEASONS.find((s) => s.regulations.some((r) => r.id === regulationId));
  const regulation: Regulation | undefined = season?.regulations.find((r) => r.id === regulationId);
  if (!season || !regulation) return null;

  const rosterCount = getPokemonByRegulation(regulationId).length;
  const megaCount = getPokemonByRegulation(regulationId).filter((p) => p.hasMega).length;

  const formatDate = (d: string) =>
    new Date(d + "T12:00:00Z").toLocaleDateString(
      locale === "fr" ? "fr-FR" : locale === "es" ? "es-ES" : locale === "it" ? "it-IT" : locale === "de" ? "de-DE" : "en-US",
      { month: "long", day: "numeric", year: "numeric" }
    );

  const translateName = (name: string) =>
    name
      .replace(/\bSeason\b/g, t('season.seasonWord'))
      .replace(/\bRegulation\b/g, t('season.regulationWord'));
  const regulationEnd = regulation.endDate ?? season.endDate;

  return (
    <motion.div
      key={regulationId}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={noCard ? "" : "bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-gray-200/10 shadow-sm"}
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-500/20 dark:to-indigo-500/20 flex items-center justify-center">
            <Shield className="w-4.5 h-4.5 text-violet-600 dark:text-violet-400" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {translateName(season.name)} — {translateName(regulation.label)}
            </h3>
            <p className="text-xs text-muted-foreground">
              {formatDate(regulation.startDate)}
              {regulation.endDate ? ` – ${formatDate(regulation.endDate)}` : ""}
            </p>
          </div>
        </div>
        {regulation.isActive && (
          <span className="px-3 py-1 text-[10px] font-bold rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-200 dark:ring-emerald-500/25 uppercase tracking-wider">
            {t('season.activeSeason')}
          </span>
        )}
      </div>

      {/* Regulation details grid */}
      <div className={cn("grid grid-cols-2 sm:grid-cols-4 gap-3", !hideRules && "mb-5")}>
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-white/5 ring-1 ring-gray-100 dark:ring-gray-200/10">
          <Calendar className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
          <div>
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{t('season.seasonEnds')}</p>
            <p className="text-xs font-semibold text-foreground">{season.endDate ? formatDate(season.endDate) : "TBD"}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-white/5 ring-1 ring-gray-100 dark:ring-gray-200/10">
          <Calendar className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
          <div>
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{t('season.regulationUntil')}</p>
            <p className="text-xs font-semibold text-foreground">{regulationEnd ? formatDate(regulationEnd) : "TBD"}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-white/5 ring-1 ring-gray-100 dark:ring-gray-200/10">
          <Users className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
          <div>
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{t('season.pokemon')}</p>
            <p className="text-xs font-semibold text-foreground">{t('season.inRoster', { count: rosterCount })}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-white/5 ring-1 ring-gray-100 dark:ring-gray-200/10">
          <Dna className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
          <div>
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{t('season.megaEvolutions')}</p>
            <p className="text-xs font-semibold text-foreground">{t('season.available', { count: megaCount })}</p>
          </div>
        </div>
      </div>

      {!hideRules && (
        <>
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-3">{t('season.rulesHover')}</p>
          <div className="flex flex-wrap gap-2">
            {season.rules.map((rule) => (
              <RuleCard key={rule} rule={rule} />
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}

export function SeasonRulesSection({ regulationId }: { regulationId: string }) {
  const { t } = useI18n();
  const season = SEASONS.find((s) => s.regulations.some((r) => r.id === regulationId));
  if (!season) return null;

  return (
    <div>
      <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-3">{t('season.rulesHover')}</p>
      <div className="flex flex-wrap gap-2">
        {season.rules.map((rule) => (
          <RuleCard key={rule} rule={rule} />
        ))}
      </div>
    </div>
  );
}
