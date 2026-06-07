"use client";

import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "@/lib/motion";
import {
  Swords, Play, Search, X, Trophy, Loader2,
  SkipForward, Pause, RotateCcw, ChevronRight, Trash2,
  ArrowRightLeft, FolderOpen, Save, Target, Star, Lightbulb,
  TrendingUp, TrendingDown, GitBranch, Shield,
  Settings2, Minus, Plus, Sparkles, Check, Zap, Download, ClipboardPaste, BookOpen,
} from "lucide-react";
import {
  exportTeamTesterPDF, PDF_LABELS_FR, PDF_LABELS_DE,
} from "@/lib/export-pdf";
import { POKEMON_SEED, STAT_PRESETS } from "@/lib/pokemon-data";
import type { ChampionsPokemon, CommonSet, PokemonType, StatPoints } from "@/lib/types";
import { TYPE_COLORS } from "@/lib/types";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { useI18n } from "@/lib/i18n";
import { runTeamTestSimulationParallel, prewarmBattleWorkers, terminateBattleWorkers } from "@/lib/engine/battle-sim-parallel";
import {
  PREBUILT_TEAMS,
  NATURES,
  ITEMS,
  getAllNatures,
  getAllItems,
  isItemAvailable,
  analyzeTeamSynergy,
  identifyRoles,
  detectArchetypes,
  getSpeedTierReport,
  calculateStats,
  translateInsights,
  translateStrategyTree,
  translateInsightsES,
  translateStrategyTreeES,
  translateInsightsIT,
  translateStrategyTreeIT,
  translateInsightsDE,
  translateStrategyTreeDE,
  generateStrategyTree,
  type PrebuiltTeam,
  type LeadComboResult,
  type PokemonImpact,
  type StrategyNode as StrategyNodeData,
  computeBattleBoard,
  type BattleBoardData,
  type BattleSlotInfo,
  type BattleMoveEntry,
  type FieldOverrides,
  type MonOverrides,
} from "@/lib/engine";
import { SearchSelect, type SearchSelectOption } from "@/components/search-select";
import {
  type DetailedBattleResult,
} from "@/lib/engine/battle-sim";
import { USAGE_DATA } from "@/lib/usage-data";
import { SIM_POKEMON } from "@/lib/simulation-data";
import { TOURNAMENT_USAGE } from "@/lib/engine/vgc-data";
import {
  getSavedTeams, deserializeTeam, saveMatchRecord, getMatchRecords,
  type SavedTeam, type MatchRecord,
} from "@/lib/storage";

// ── Helpers ──────────────────────────────────────────────────────────────

const MAX_TOTAL_POINTS = 66;
const MAX_PER_STAT = 32;
const STAT_KEYS: (keyof StatPoints)[] = ["hp", "attack", "defense", "spAtk", "spDef", "speed"];
const allNatureNames = getAllNatures();
const allItemNames = getAllItems();

function bestAvailableSet(p: ChampionsPokemon): CommonSet {
  const usageSet = USAGE_DATA[p.id];
  if (usageSet && usageSet.length > 0) {
    const set = { ...usageSet[0] };
    if (set.item && !isItemAvailable(set.item)) set.item = "";
    return set;
  }
  const isSpecial = p.baseStats.spAtk > p.baseStats.attack;
  const hasProtect = p.moves.some(m => m.name === "Protect");
  const damaging = p.moves.filter(m => m.category !== "status").map(m => m.name);
  const moves: string[] = [];
  if (hasProtect) moves.push("Protect");
  moves.push(...damaging.slice(0, 4 - moves.length));
  return {
    name: p.name,
    nature: isSpecial ? "Modest" : "Adamant",
    ability: p.abilities[0]?.name ?? "",
    item: "Focus Sash",
    moves,
    sp: { hp: 2, attack: isSpecial ? 0 : 32, defense: 0, spAtk: isSpecial ? 32 : 0, spDef: 0, speed: 32 },
  };
}

interface TeamTestResult {
  wins: number;
  losses: number;
  winRate: number;
  avgTurns: number;
  totalGames: number;
  sampleBattle: DetailedBattleResult | null;
  leadCombos: LeadComboResult[];
  pokemonImpact: PokemonImpact[];
  insights: string[];
}

type TeamTesterPdfData = Parameters<typeof exportTeamTesterPDF>[0];

// ── Component ────────────────────────────────────────────────────────────

interface TeamTesterProps {
  initialTeam2Ids?: number[];
}

export default function TeamTester({ initialTeam2Ids }: TeamTesterProps) {
  const { t, tm, ta, ti, tn, tp, ts, tt, tmd, tad, tid, locale } = useI18n();
  // Team 1
  const [team1Pokemon, setTeam1Pokemon] = useState<ChampionsPokemon[]>([]);
  const [team1Sets, setTeam1Sets] = useState<CommonSet[]>([]);
  // Team 2
  const [team2Pokemon, setTeam2Pokemon] = useState<ChampionsPokemon[]>([]);
  const [team2Sets, setTeam2Sets] = useState<CommonSet[]>([]);

  // Pre-load Team 2 from journal deep-link
  useEffect(() => {
    if (!initialTeam2Ids || initialTeam2Ids.length === 0) return;
    const pokemon = initialTeam2Ids
      .map((id) => POKEMON_SEED.find((p) => p.id === id))
      .filter((p): p is ChampionsPokemon => !!p);
    if (pokemon.length === 0) return;
    setTeam2Pokemon(pokemon);
    setTeam2Sets(pokemon.map((p) => bestAvailableSet(p)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [iterations, setIterations] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<TeamTestResult | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [simProgress, setSimProgress] = useState(0);
  const startTimeRef = useRef<number>(0);
  const [selectedLeadIdx, setSelectedLeadIdx] = useState(0);

  // Match Journal logging state
  const [journalOpen, setJournalOpen] = useState(false);
  const [journalResult, setJournalResult] = useState<"win" | "loss" | "tie">("win");
  const [journalMyPicks, setJournalMyPicks] = useState<number[]>([]);
  const [journalOppPicks, setJournalOppPicks] = useState<number[]>([]);
  const [journalNotes, setJournalNotes] = useState("");
  const [journalSaved, setJournalSaved] = useState(false);

  const buildTeamTesterPdfData = useCallback((): TeamTesterPdfData | null => {
    if (!result) return null;

    const activeLead = result.leadCombos[selectedLeadIdx] ?? result.leadCombos[0];
    const rawTree = activeLead
      ? generateStrategyTree(team1Pokemon, team1Sets, team2Pokemon, team2Sets, activeLead, result.winRate)
      : null;
    const tree = rawTree && locale === "fr"
      ? translateStrategyTree(rawTree, tm, ta)
      : rawTree && locale === "es"
      ? translateStrategyTreeES(rawTree, tm, ta)
      : rawTree && locale === "it"
      ? translateStrategyTreeIT(rawTree, tm, ta)
      : rawTree && locale === "de"
      ? translateStrategyTreeDE(rawTree, tm, ta)
      : rawTree;

    let strategyData: TeamTesterPdfData["strategy"] = null;
    if (tree) {
      const flatSteps: { label: string; detail?: string; severity?: "good" | "neutral" | "bad" }[] = [];
      const flatten = (node: StrategyNodeData) => {
        if (node.type !== "start" && node.type !== "opponent-lead") {
          flatSteps.push({
            label: (node.branchLabel ? `${node.branchLabel}: ` : "") + node.label,
            detail: node.detail,
            severity: node.severity,
          });
        }
        for (const child of node.children) flatten(child);
      };
      const firstScenario = tree.root.children[0];
      if (firstScenario) {
        flatSteps.push({ label: `vs ${firstScenario.label}`, detail: firstScenario.detail, severity: "neutral" });
        for (const child of firstScenario.children) flatten(child);
      }
      strategyData = {
        archetype: tree.archetype,
        winCondition: tree.winCondition,
        keyThreats: tree.keyThreats,
        backupPlan: tree.backupPlan,
        steps: flatSteps,
      };
    }

    const syn1 = analyzeTeamSynergy(team1Pokemon);
    const syn2 = analyzeTeamSynergy(team2Pokemon);
    const speed1 = getSpeedTierReport(team1Pokemon);
    const speed2 = getSpeedTierReport(team2Pokemon);
    const roles1 = team1Pokemon.map((p) => {
      const roleInfo = identifyRoles(p);
      return { name: p.name, primaryRole: roleInfo.primaryRole, roles: roleInfo.roles };
    });
    const roles2 = team2Pokemon.map((p) => {
      const roleInfo = identifyRoles(p);
      return { name: p.name, primaryRole: roleInfo.primaryRole, roles: roleInfo.roles };
    });
    const arch1 = detectArchetypes(team1Pokemon).filter((a) => a.confidence >= 0.3).map((a) => ({ archetype: a.archetype, confidence: a.confidence, keyPokemon: a.keyPokemon }));
    const arch2 = detectArchetypes(team2Pokemon).filter((a) => a.confidence >= 0.3).map((a) => ({ archetype: a.archetype, confidence: a.confidence, keyPokemon: a.keyPokemon }));

    return {
      team1: team1Pokemon.map((p, i) => ({
        name: tp(p.name),
        ability: ta(String(team1Sets[i]?.ability || p.abilities?.[0] || "")),
        item: ti(team1Sets[i]?.item || ""),
        moves: (team1Sets[i]?.moves || []).map((m) => tm(m)),
      })),
      team2: team2Pokemon.map((p, i) => ({
        name: tp(p.name),
        ability: ta(String(team2Sets[i]?.ability || p.abilities?.[0] || "")),
        item: ti(team2Sets[i]?.item || ""),
        moves: (team2Sets[i]?.moves || []).map((m) => tm(m)),
      })),
      wins: result.wins,
      losses: result.losses,
      winRate: result.winRate,
      avgTurns: result.avgTurns,
      totalGames: result.totalGames,
      leadCombos: result.leadCombos.map((lc) => ({ lead1: lc.lead1, lead2: lc.lead2, winRate: lc.winRate, games: lc.games })),
      pokemonImpact: result.pokemonImpact.map((pi) => ({ name: pi.name, impact: pi.impact, excludeWinRate: pi.excludeWinRate })),
      insights: locale === "fr"
        ? translateInsights(result.insights, tm)
        : locale === "es"
        ? translateInsightsES(result.insights, tm)
        : locale === "it"
        ? translateInsightsIT(result.insights, tm)
        : locale === "de"
        ? translateInsightsDE(result.insights, tm)
        : result.insights,
      strategy: strategyData,
      speedTiers: { team1: speed1, team2: speed2 },
      typeProfile: {
        team1: {
          weaknesses: syn1.weaknessProfile.map((w) => ({ type: w.type, count: w.count })),
          resistances: syn1.resistanceProfile.map((r) => ({ type: r.type, count: r.count })),
          uncovered: syn1.uncoveredTypes,
        },
        team2: {
          weaknesses: syn2.weaknessProfile.map((w) => ({ type: w.type, count: w.count })),
          resistances: syn2.resistanceProfile.map((r) => ({ type: r.type, count: r.count })),
          uncovered: syn2.uncoveredTypes,
        },
      },
      roles: { team1: roles1, team2: roles2 },
      archetypes: { team1: arch1, team2: arch2 },
      synergyScores: { team1: syn1.overallScore, team2: syn2.overallScore },
    };
  }, [locale, result, selectedLeadIdx, ta, team1Pokemon, team1Sets, team2Pokemon, team2Sets, ti, tm, tp]);

  // Picker
  const [pickerTarget, setPickerTarget] = useState<{ team: 1 | 2 } | null>(null);
  const [pickerSearch, setPickerSearch] = useState("");
  const [pickerTypeFilter, setPickerTypeFilter] = useState<PokemonType | null>(null);

  // Team loader
  const [showLoader, setShowLoader] = useState<1 | 2 | null>(null);
  const [savedTeams, setSavedTeams] = useState<SavedTeam[]>([]);
  const [pasteText, setPasteText] = useState("");
  const [pasteError, setPasteError] = useState("");
  // Replay
  const [replayTurn, setReplayTurn] = useState(0);
  const [replayPlaying, setReplayPlaying] = useState(false);
  const replayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Speed tier overrides: key = `${team}-${name}`, value = speed
  const [speedOverrides, setSpeedOverrides] = useState<Record<string, number>>({});
  const [speedTailwind, setSpeedTailwind] = useState(false);
  const [speedTailwindOpp, setSpeedTailwindOpp] = useState(false);
  const [speedTrickRoom, setSpeedTrickRoom] = useState(false);

  // Pokemon detail modal
  const [detailMon, setDetailMon] = useState<{ pokemon: ChampionsPokemon; set: CommonSet; team: 1 | 2; editable?: boolean; slotIndex: number } | null>(null);

  const openPokemonDetail = useCallback((name: string, team: 1 | 2, editable = false) => {
    const pokemon = (team === 1 ? team1Pokemon : team2Pokemon);
    const sets = (team === 1 ? team1Sets : team2Sets);
    const idx = pokemon.findIndex(p => p.name === name);
    if (idx >= 0) setDetailMon({ pokemon: pokemon[idx], set: sets[idx], team, editable, slotIndex: idx });
  }, [team1Pokemon, team1Sets, team2Pokemon, team2Sets]);

  // ── Edit helpers (for editable detail modal) ──
  const updateTesterSetField = (team: 1 | 2, index: number, updates: Partial<CommonSet>) => {
    const setter = team === 1 ? setTeam1Sets : setTeam2Sets;
    setter(prev => prev.map((s, i) => i === index ? { ...s, ...updates } : s));
  };

  const updateTesterSetMove = (team: 1 | 2, index: number, moveIndex: number, moveName: string) => {
    const setter = team === 1 ? setTeam1Sets : setTeam2Sets;
    setter(prev => prev.map((s, i) => {
      if (i !== index) return s;
      const newMoves = [...s.moves];
      newMoves[moveIndex] = moveName;
      return { ...s, moves: newMoves };
    }));
  };

  const updateTesterSetSP = (team: 1 | 2, index: number, stat: keyof StatPoints, delta: number) => {
    const setter = team === 1 ? setTeam1Sets : setTeam2Sets;
    setter(prev => prev.map((s, i) => {
      if (i !== index) return s;
      const sp = { ...s.sp };
      const currentTotal = Object.values(sp).reduce((a, b) => a + b, 0);
      const newVal = Math.max(0, Math.min(MAX_PER_STAT, sp[stat] + delta));
      const newTotal = currentTotal - sp[stat] + newVal;
      if (newTotal > MAX_TOTAL_POINTS) return s;
      sp[stat] = newVal;
      return { ...s, sp };
    }));
  };

  const setTesterSPDirect = (team: 1 | 2, index: number, stat: keyof StatPoints, value: number) => {
    const setter = team === 1 ? setTeam1Sets : setTeam2Sets;
    setter(prev => prev.map((s, i) => {
      if (i !== index) return s;
      const sp = { ...s.sp };
      const currentTotal = Object.values(sp).reduce((a, b) => a + b, 0);
      const clamped = Math.max(0, Math.min(MAX_PER_STAT, value));
      const newTotal = currentTotal - sp[stat] + clamped;
      if (newTotal > MAX_TOTAL_POINTS) return s;
      sp[stat] = clamped;
      return { ...s, sp };
    }));
  };

  // ── Battle event translation (reuse battleBot.events.* keys) ──
  const translateBattleEvent = useCallback((s: string): string => {
    if (locale === 'en') return s;
    let m;
    if ((m = s.match(/^The (harsh sunlight|rain|sandstorm|snow|hail) subsided!$/))) return t("battleBot.events.weatherSubsided", { weather: m[1] });
    if (s === "Trick Room wore off! Normal speed order restored.") return t("battleBot.events.trickRoomWoreOff");
    if ((m = s.match(/^The (\w+) terrain faded!$/))) return t("battleBot.events.terrainFaded", { terrain: m[1] });
    if ((m = s.match(/^(Your|Opponent's) Tailwind petered out!$/))) return t("battleBot.events.tailwindEnd", { side: t(`battleBot.events.${m[1] === "Your" ? "your" : "opponents"}`) });
    if ((m = s.match(/^(Your|Opponent's) Reflect wore off!$/))) return t("battleBot.events.reflectEnd", { side: t(`battleBot.events.${m[1] === "Your" ? "your" : "opponents"}`) });
    if ((m = s.match(/^(Your|Opponent's) Light Screen wore off!$/))) return t("battleBot.events.lightScreenEnd", { side: t(`battleBot.events.${m[1] === "Your" ? "your" : "opponents"}`) });
    if ((m = s.match(/^(Your|Opponent's) Aurora Veil wore off!$/))) return t("battleBot.events.auroraVeilEnd", { side: t(`battleBot.events.${m[1] === "Your" ? "your" : "opponents"}`) });
    if ((m = s.match(/^(.+) was hurt by its burn! \((\d+)%\)$/))) return t("battleBot.events.hurtByBurn", { name: tp(m[1]), pct: m[2] });
    if ((m = s.match(/^(.+) was hurt by poison! \((\d+)%\)$/))) return t("battleBot.events.hurtByPoison", { name: tp(m[1]), pct: m[2] });
    if ((m = s.match(/^(.+) restored HP with Leftovers!$/))) return t("battleBot.events.leftoversHeal", { name: tp(m[1]) });
    if ((m = s.match(/^(.+)'s Lum Berry cured its (.+)!$/))) return t("battleBot.events.lumBerryCure", { name: tp(m[1]), status: m[2] });
    if ((m = s.match(/^(.+) was buffeted by the sandstorm! \((\d+)%\)$/))) return t("battleBot.events.sandstormDmg", { name: tp(m[1]), pct: m[2] });
    if ((m = s.match(/^(.+) restored HP from Grassy Terrain!$/))) return t("battleBot.events.grassyHeal", { name: tp(m[1]) });
    if ((m = s.match(/^(.+) fainted!$/))) return t("battleBot.events.fainted", { name: tp(m[1]) });
    if ((m = s.match(/^(.+)'s (.+) set the (.+)!$/))) return t("battleBot.events.setWeather", { name: tp(m[1]), ability: ta(m[2]), weather: m[3] });
    if ((m = s.match(/^(.+)'s (.+) set (.+) terrain!$/))) return t("battleBot.events.setTerrain", { name: tp(m[1]), ability: ta(m[2]), terrain: m[3] });
    if ((m = s.match(/^(.+) transformed into (.+) using Imposter!$/))) return t("battleBot.events.imposterTransform", { name: tp(m[1]), target: tp(m[2]) });
    if ((m = s.match(/^(.+)'s Mirror Armor reflected (.+)'s Intimidate!$/))) return t("battleBot.events.mirrorArmorReflect", { opp: tp(m[1]), name: tp(m[2]) });
    if ((m = s.match(/^(.+)'s Guard Dog raised its Attack from (.+)'s Intimidate!$/))) return t("battleBot.events.guardDogRaise", { opp: tp(m[1]), name: tp(m[2]) });
    if ((m = s.match(/^(.+)'s Intimidate lowered (.+)'s Attack!$/))) return t("battleBot.events.intimidateLower", { name: tp(m[1]), opp: tp(m[2]) });
    if ((m = s.match(/^(.+)'s Competitive raised its Sp\.Atk!$/))) return t("battleBot.events.competitiveRaise", { opp: tp(m[1]) });
    if ((m = s.match(/^(.+)'s Defiant raised its Attack!$/))) return t("battleBot.events.defiantRaise", { opp: tp(m[1]) });
    if ((m = s.match(/^(.+)'s Commander Surge raised its Sp\.Atk!$/))) return t("battleBot.events.commanderSurge", { name: tp(m[1]) });
    if ((m = s.match(/^(.+)'s Razor Plating raised its Defense!$/))) return t("battleBot.events.razorPlating", { name: tp(m[1]) });
    if ((m = s.match(/^(.+) Mega Evolved!$/))) return t("battleBot.events.megaEvolved", { name: tp(m[1]) });
    if ((m = s.match(/^(.+) flinched!$/))) return t("battleBot.events.flinched", { name: tp(m[1]) });
    if ((m = s.match(/^(.+) switched out! (.+) was sent in! Palafin transformed into Hero Form!$/))) return t("battleBot.events.switchedOutPalafin", { prev: tp(m[1]), next: tp(m[2]) });
    if ((m = s.match(/^(.+) switched out! (.+) was sent in!$/))) return t("battleBot.events.switchedOut", { prev: tp(m[1]), next: tp(m[2]) });
    if ((m = s.match(/^(.+) used Sucker Punch - but it failed!$/))) return t("battleBot.events.suckerPunchFailed", { name: tp(m[1]) });
    if ((m = s.match(/^(.+) changed to Blade Forme!$/))) return t("battleBot.events.stanceChangeBlade", { name: tp(m[1]) });
    if ((m = s.match(/^(.+) changed to Shield Forme!$/))) return t("battleBot.events.stanceChangeShield", { name: tp(m[1]) });
    if ((m = s.match(/^(.+)'s Disguise was busted!$/))) return t("battleBot.events.disguiseBusted", { name: tp(m[1]) });
    if ((m = s.match(/^(.+)'s Illusion broke!$/))) return t("battleBot.events.illusionBroke", { name: tp(m[1]) });
    if ((m = s.match(/^(.+) used (.+) on (.+)! \3 was (.+)!$/))) return t("battleBot.events.usedStatusOn", { name: tp(m[1]), move: tm(m[2]), target: tp(m[3]), status: m[4] });
    if ((m = s.match(/^(.+) used (.+) on (.+) - no effect!$/))) return t("battleBot.events.usedStatusNoEffect", { name: tp(m[1]), move: tm(m[2]), target: tp(m[3]) });
    if ((m = s.match(/^(.+) used (.+) on (.+) - blocked by Protect!$/))) return t("battleBot.events.blockedByProtect", { name: tp(m[1]), move: tm(m[2]), target: tp(m[3]) });
    if ((m = s.match(/^(.+)'s King's Shield lowered (.+)'s Attack!$/))) return t("battleBot.events.kingsShieldDrop", { target: tp(m[1]), name: tp(m[2]) });
    if ((m = s.match(/^(.+) used (.+) on (.+) - KO!$/))) return t("battleBot.events.usedMoveKO", { name: tp(m[1]), move: tm(m[2]), target: tp(m[3]) });
    if ((m = s.match(/^(.+) used (.+) on (.+) \((\d+)% damage\)$/))) return t("battleBot.events.usedMoveDmg", { name: tp(m[1]), move: tm(m[2]), target: tp(m[3]), pct: m[4] });
    if ((m = s.match(/^(.+) used (.+) on (.+) - missed!$/))) return t("battleBot.events.usedMoveMissTarget", { name: tp(m[1]), move: tm(m[2]), target: tp(m[3]) });
    if ((m = s.match(/^(.+) fainted from (.+)!$/))) {
      const label = m[2] === "recoil" ? t("battleBot.events.recoil") : m[2] === "Life Orb damage" ? t("battleBot.events.lifeOrbDamage") : tm(m[2]);
      return t("battleBot.events.faintedFrom", { name: tp(m[1]), label });
    }
    if ((m = s.match(/^(.+) took (\d+)% (.+)!$/))) {
      const label = m[3] === "recoil" ? t("battleBot.events.recoil") : m[3] === "Life Orb damage" ? t("battleBot.events.lifeOrbDamage") : tm(m[3]);
      return t("battleBot.events.tookDamage", { name: tp(m[1]), pct: m[2], label });
    }
    if ((m = s.match(/^(.+) used (.+) - missed!$/))) return t("battleBot.events.usedMoveMiss", { name: tp(m[1]), move: tm(m[2]) });
    if ((m = s.match(/^(.+) used (.+) - no target$/))) return t("battleBot.events.usedMoveNoTarget", { name: tp(m[1]), move: tm(m[2]) });
    if ((m = s.match(/^(.+)'s (.+) failed!$/))) return t("battleBot.events.protectFailed", { name: tp(m[1]), move: tm(m[2]) });
    if ((m = s.match(/^(Your|Opponent's) team's Speed doubled for 4 turns!$/))) return t("battleBot.events.tailwindSet", { side: t(`battleBot.events.${m[1] === "Your" ? "your" : "opponents"}`) });
    if (s === "Slower Pokémon now move first!") return t("battleBot.events.trickRoomOn");
    if (s === "Normal speed order restored!") return t("battleBot.events.trickRoomOff");
    if ((m = s.match(/^Special damage reduced for (your|opponent's) side!$/))) return t("battleBot.events.lightScreenSet", { side: t(`battleBot.events.${m[1] === "your" ? "your" : "opponents"}`) });
    if ((m = s.match(/^Physical damage reduced for (your|opponent's) side!$/))) return t("battleBot.events.reflectSet", { side: t(`battleBot.events.${m[1] === "your" ? "your" : "opponents"}`) });
    if ((m = s.match(/^All damage reduced for (your|opponent's) side!$/))) return t("battleBot.events.auroraVeilSet", { side: t(`battleBot.events.${m[1] === "your" ? "your" : "opponents"}`) });
    if (s === "Harsh sunlight intensified!") return t("battleBot.events.weatherSun");
    if (s === "It started to rain!") return t("battleBot.events.weatherRain");
    if (s === "A sandstorm kicked up!") return t("battleBot.events.weatherSand");
    if (s === "It started to snow!") return t("battleBot.events.weatherSnow");
    if (s === "It started to hail!") return t("battleBot.events.weatherHail");
    if ((m = s.match(/^The weather changed to (.+)!$/))) return t("battleBot.events.weatherChanged", { weather: m[1] });
    if (s === "An electric current runs across the battlefield!") return t("battleBot.events.terrainElectric");
    if (s === "Grass grew to cover the battlefield!") return t("battleBot.events.terrainGrassy");
    if (s === "The battlefield got weird!") return t("battleBot.events.terrainPsychic");
    if (s === "Mist swirled around the battlefield!") return t("battleBot.events.terrainMisty");
    if ((m = s.match(/^(\w+) terrain was set!$/))) return t("battleBot.events.terrainSet", { terrain: m[1] });
    if ((m = s.match(/^(Your|Opponent's) (.+) was sent in!$/))) return t("battleBot.events.sentIn", { side: t(`battleBot.events.${m[1] === "Your" ? "your" : "opponents"}`), name: tp(m[2]) });
    if ((m = s.match(/^(.+)'s (.+)! (.+)$/))) return t("battleBot.events.weatherAbility", { name: tp(m[1]), ability: ta(m[2]), desc: m[3] });
    if ((m = s.match(/^(.+) used (.+)!$/))) return t("battleBot.events.usedMove", { name: tp(m[1]), move: tm(m[2]) });
    return s;
  }, [locale, t, tp, tm, ta]);

  useEffect(() => { setSavedTeams(getSavedTeams()); }, []);

  useEffect(() => {
    prewarmBattleWorkers();
    return terminateBattleWorkers;
  }, []);

  // Re-initialise speed overrides whenever teams or sets change
  useEffect(() => {
    const overrides: Record<string, number> = {};
    team1Pokemon.forEach((p, i) => {
      const s = team1Sets[i];
      if (!s) return;
      const stats = calculateStats(p.baseStats, s.sp, s.nature as Parameters<typeof calculateStats>[2]);
      overrides[`1-${p.name}`] = stats.speed;
    });
    team2Pokemon.forEach((p, i) => {
      const s = team2Sets[i];
      if (!s) return;
      const stats = calculateStats(p.baseStats, s.sp, s.nature as Parameters<typeof calculateStats>[2]);
      overrides[`2-${p.name}`] = stats.speed;
    });
    setSpeedOverrides(overrides);
  }, [team1Pokemon, team1Sets, team2Pokemon, team2Sets]);

  useEffect(() => {
    if (replayPlaying && result?.sampleBattle) {
      replayTimerRef.current = setInterval(() => {
        setReplayTurn(prev => {
          if (prev >= (result.sampleBattle?.log.length ?? 1) - 1) {
            setReplayPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1500);
    }
    return () => { if (replayTimerRef.current) clearInterval(replayTimerRef.current); };
  }, [replayPlaying, result?.sampleBattle]);

  const addPokemon = useCallback((pokemon: ChampionsPokemon) => {
    if (!pickerTarget) return;
    const set = bestAvailableSet(pokemon);
    if (pickerTarget.team === 1) {
      if (team1Pokemon.length < 6 && !team1Pokemon.find(p => p.id === pokemon.id)) {
        setTeam1Pokemon(prev => [...prev, pokemon]);
        setTeam1Sets(prev => [...prev, set]);
      }
    } else {
      if (team2Pokemon.length < 6 && !team2Pokemon.find(p => p.id === pokemon.id)) {
        setTeam2Pokemon(prev => [...prev, pokemon]);
        setTeam2Sets(prev => [...prev, set]);
      }
    }
  }, [pickerTarget, team1Pokemon, team2Pokemon]);

  const removePokemon = (team: 1 | 2, id: number) => {
    if (team === 1) {
      const idx = team1Pokemon.findIndex(p => p.id === id);
      if (idx >= 0) {
        setTeam1Pokemon(prev => prev.filter((_, i) => i !== idx));
        setTeam1Sets(prev => prev.filter((_, i) => i !== idx));
      }
    } else {
      const idx = team2Pokemon.findIndex(p => p.id === id);
      if (idx >= 0) {
        setTeam2Pokemon(prev => prev.filter((_, i) => i !== idx));
        setTeam2Sets(prev => prev.filter((_, i) => i !== idx));
      }
    }
  };

  const loadSavedTeam = (team: SavedTeam, target: 1 | 2) => {
    const slots = deserializeTeam(team.slots);
    const pokemon = slots.filter(s => s.pokemon).map(s => s.pokemon!);
    const sets = slots.filter(s => s.pokemon).map(s => {
      const p = s.pokemon!;
      if (s.ability && s.moves.length > 0) {
        return {
          name: p.name,
          nature: s.nature ?? "Hardy",
          ability: s.ability,
          item: s.item ?? "Life Orb",
          moves: s.moves.slice(0, 4),
          sp: s.statPoints,
          teraType: s.teraType,
          preMegaAbility: s.preMegaAbility,
        } as CommonSet;
      }
      return bestAvailableSet(p);
    });
    if (target === 1) { setTeam1Pokemon(pokemon); setTeam1Sets(sets); }
    else { setTeam2Pokemon(pokemon); setTeam2Sets(sets); }
    setShowLoader(null);
  };

  const loadPrebuiltTeam = (team: PrebuiltTeam, target: 1 | 2) => {
    const pokemon = team.pokemonIds
      .map(id => POKEMON_SEED.find(p => p.id === id))
      .filter(Boolean) as ChampionsPokemon[];
    if (target === 1) { setTeam1Pokemon(pokemon); setTeam1Sets(team.sets.slice(0, pokemon.length)); }
    else { setTeam2Pokemon(pokemon); setTeam2Sets(team.sets.slice(0, pokemon.length)); }
    setShowLoader(null);
  };

  const importFromPokepaste = (text: string, target: 1 | 2) => {
    trackEvent("import_pokepaste", "team_tester");
    setPasteError("");
    const matchName = (p: ChampionsPokemon, name: string) => {
      const c = name.toLowerCase();
      const pName = p.name.toLowerCase();
      if (pName === c || p.showdownName?.toLowerCase() === c) return true;
      const regionalSuffixes: Record<string, string> = { hisui: "Hisuian", alola: "Alolan", galar: "Galarian", paldea: "Paldean" };
      const dashIdx = c.lastIndexOf("-");
      if (dashIdx > 0) {
        const base = c.slice(0, dashIdx);
        const suffix = c.slice(dashIdx + 1);
        const prefix = regionalSuffixes[suffix];
        if (prefix && pName === `${prefix.toLowerCase()} ${base}`) return true;
      }
      // Gendered forms: "Basculegion" → "Basculegion-M", "Meowstic" → "Meowstic-M" (default = male in Showdown)
      if (pName === `${c}-m`) return true;
      return false;
    };
    const blocks = text.trim().split(/\n\n+/).filter(Boolean);
    if (blocks.length === 0) { setPasteError("No Pokémon found in the paste."); return; }
    const pokemon: ChampionsPokemon[] = [];
    const sets: CommonSet[] = [];
    for (const block of blocks.slice(0, 6)) {
      const lines = block.split("\n").map(l => l.trim()).filter(Boolean);
      if (lines.length === 0) continue;
      let pokeName = lines[0];
      let item: string | undefined;
      if (pokeName.includes(" @ ")) {
        const parts = pokeName.split(" @ ");
        pokeName = parts[0].trim();
        item = parts[1].trim();
      }
      pokeName = pokeName.replace(/\s*\((?:M|F)\)\s*$/, "").trim();
      const parenMatch = pokeName.match(/\((.+?)\)/);
      if (parenMatch) pokeName = parenMatch[1].trim();
      pokeName = pokeName.replace(/^(.+)-Mega(?:-[XY])?$/i, "$1").trim();
      const mon = POKEMON_SEED.find(p => matchName(p, pokeName));
      if (!mon) continue;
      let ability: string | undefined;
      let nature: string | undefined;
      const moves: string[] = [];
      const sp: StatPoints = { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 };
      let isNativeSP = false;
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (line.startsWith("Ability:")) ability = line.replace("Ability:", "").trim();
        else if (line.endsWith("Nature")) nature = line.replace("Nature", "").trim();
        else if (line.startsWith("- ")) moves.push(line.slice(2).trim());
        else if (line.startsWith("EVs:") || line.startsWith("Stat Points:")) {
          const isSP = line.startsWith("Stat Points:");
          const parts = line.replace(/^(?:EVs|Stat Points):/, "").trim().split("/").map(s => s.trim());
          for (const part of parts) {
            const m = part.match(/(\d+)\s+(HP|Atk|Def|SpA|SpD|Spe)/i);
            if (m) {
              const val = parseInt(m[1]), stat = m[2].toLowerCase();
              if (stat === "hp") sp.hp = val; else if (stat === "atk") sp.attack = val;
              else if (stat === "def") sp.defense = val; else if (stat === "spa") sp.spAtk = val;
              else if (stat === "spd") sp.spDef = val; else if (stat === "spe") sp.speed = val;
            }
          }
          const maxVal = Math.max(sp.hp, sp.attack, sp.defense, sp.spAtk, sp.spDef, sp.speed);
          const totalVal = sp.hp + sp.attack + sp.defense + sp.spAtk + sp.spDef + sp.speed;
          if ((isSP && maxVal <= MAX_PER_STAT) || (!isSP && maxVal <= MAX_PER_STAT && totalVal <= MAX_TOTAL_POINTS)) isNativeSP = true;
        }
      }
      // Convert Showdown EVs → stat points if needed
      let converted = sp;
      if (!isNativeSP) {
        const raw = STAT_KEYS.map(k => Math.min(MAX_PER_STAT, Math.round(sp[k] * MAX_PER_STAT / 252)));
        let total = raw.reduce((a, b) => a + b, 0);
        while (total > MAX_TOTAL_POINTS) {
          let mi = -1, mv = Infinity;
          for (let i = 0; i < raw.length; i++) { if (raw[i] > 0 && raw[i] < mv) { mv = raw[i]; mi = i; } }
          if (mi === -1) break;
          raw[mi]--; total--;
        }
        converted = { hp: 0, attack: 0, defense: 0, spAtk: 0, spDef: 0, speed: 0 };
        STAT_KEYS.forEach((k, i) => { converted[k] = raw[i]; });
      }
      pokemon.push(mon);
      sets.push({
        name: mon.name,
        nature: nature ?? "Hardy",
        ability: ability ?? mon.abilities[0]?.name ?? "",
        item: item ?? "Life Orb",
        moves: moves.length > 0 ? moves.slice(0, 4) : mon.moves.slice(0, 4).map(m => m.name),
        sp: converted,
      });
    }
    if (pokemon.length === 0) { setPasteError("Could not match any Pokémon. Check Pokepaste/Showdown format."); return; }
    if (target === 1) { setTeam1Pokemon(pokemon); setTeam1Sets(sets); }
    else { setTeam2Pokemon(pokemon); setTeam2Sets(sets); }
    setShowLoader(null);
    setPasteText("");
    setPasteError("");
  };

  const swapTeams = () => {
    const tmpPoke = [...team1Pokemon];
    const tmpSets = [...team1Sets];
    setTeam1Pokemon([...team2Pokemon]);
    setTeam1Sets([...team2Sets]);
    setTeam2Pokemon(tmpPoke);
    setTeam2Sets(tmpSets);
    setResult(null);
  };

  const canRun = team1Pokemon.length >= 4 && team2Pokemon.length >= 4 && !isRunning;

  const handleRun = useCallback(async () => {
    trackEvent("run_test", "team_tester", `${team1Pokemon.length}v${team2Pokemon.length}`, iterations);
    if (!canRun) return;
    setIsRunning(true);
    setResult(null);
    setElapsed(0);
    startTimeRef.current = performance.now();
    setSelectedLeadIdx(0);
    setReplayTurn(0);
    setReplayPlaying(false);

    // Scroll loading bar into view
    await new Promise(r => setTimeout(r, 50));
    progressRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setSimProgress(0);

    const elapsedInterval = setInterval(() => {
      setElapsed(Math.round((performance.now() - startTimeRef.current) / 100) / 10);
    }, 200);

    const simResult = await runTeamTestSimulationParallel(
      team1Pokemon, team1Sets, team2Pokemon, team2Sets, iterations,
      (pct) => setSimProgress(pct)
    );

    clearInterval(elapsedInterval);
    setElapsed(Math.round((performance.now() - startTimeRef.current) / 100) / 10);

    setResult({
      wins: simResult.wins,
      losses: simResult.losses,
      winRate: simResult.winRate,
      avgTurns: simResult.avgTurns,
      totalGames: simResult.totalGames,
      sampleBattle: simResult.sampleBattle,
      leadCombos: simResult.leadCombos,
      pokemonImpact: simResult.pokemonImpact,
      insights: simResult.insights,
    });
    setIsRunning(false);

    // Scroll results into view (offset for navbar)
    await new Promise(r => setTimeout(r, 100));
    if (resultsRef.current) {
      const top = resultsRef.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [canRun, team1Pokemon, team1Sets, team2Pokemon, team2Sets, iterations]);

  // ── Match Journal Intelligence ────────────────────────────────────────────
  interface JournalInsight {
    name: string; sprite: string; pokemonId: number;
    journalGames: number; journalWins: number;
    journalWinRate: number | null; // null = no data
    bringRate: number | null;
    isLeadFavorite: boolean;
    simImpact: number;
    recommendation: "core" | "underrated" | "overrated" | "situational" | "no-data";
  }
  interface JournalInsights {
    insights: JournalInsight[];
    isTeamSpecific: boolean;
    totalRecords: number;
    hasAnyData: boolean;
  }

  const journalInsights = useMemo((): JournalInsights | null => {
    if (!result || team1Pokemon.length === 0) return null;
    const allRecords: MatchRecord[] = getMatchRecords();
    const team1Ids = new Set(team1Pokemon.map(p => p.id));

    // Prefer team-specific records (myTeam shares ≥4 Pokémon with current team)
    const teamRecords = allRecords.filter(r =>
      r.myTeam.filter(id => team1Ids.has(id)).length >= Math.min(4, team1Ids.size)
    );
    const isTeamSpecific = teamRecords.length >= 3;
    const baseRecords = isTeamSpecific ? teamRecords : allRecords;
    const totalRecords = baseRecords.length;

    const insights: JournalInsight[] = team1Pokemon.map(pokemon => {
      const simMon = result.pokemonImpact.find(pi => pi.name === pokemon.name);
      const simImpact = simMon?.impact ?? 0;

      const pickedRecords = baseRecords.filter(r => r.myPicks.includes(pokemon.id));
      const journalGames = pickedRecords.length;
      const journalWins = pickedRecords.filter(r => r.result === "win").length;
      const journalWinRate = journalGames > 0
        ? Math.round((journalWins / journalGames) * 100)
        : null;
      const bringRate = totalRecords > 0
        ? Math.round((journalGames / totalRecords) * 100)
        : null;
      const leadCount = pickedRecords.filter(r => r.myPicks.slice(0, 2).includes(pokemon.id)).length;
      const isLeadFavorite = journalGames >= 3 && leadCount >= journalGames * 0.5;

      let recommendation: JournalInsight["recommendation"] = "no-data";
      if (journalGames >= 3 && journalWinRate !== null) {
        if (journalWinRate >= 55 && simImpact > 1)       recommendation = "core";
        else if (journalWinRate >= 52 && simImpact <= 1) recommendation = "underrated";
        else if (journalWinRate < 45 && simImpact > 3)   recommendation = "overrated";
        else                                               recommendation = "situational";
      }

      return { name: pokemon.name, sprite: pokemon.sprite, pokemonId: pokemon.id,
               journalGames, journalWins, journalWinRate, bringRate,
               isLeadFavorite, simImpact, recommendation };
    });

    const hasAnyData = insights.some(i => i.journalGames > 0);
    return { insights, isTeamSpecific, totalRecords, hasAnyData };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, team1Pokemon]);

  const filteredPokemon = useMemo(() => {
    if (!pickerTarget) return [];
    const existingIds = pickerTarget.team === 1
      ? team1Pokemon.map(p => p.id)
      : team2Pokemon.map(p => p.id);
    return POKEMON_SEED.filter(p => {
      if (p.hidden) return false;
      if (existingIds.includes(p.id)) return false;
      if (pickerTypeFilter && !p.types.includes(pickerTypeFilter)) return false;
      if (pickerSearch === "") return true;
      const q = pickerSearch.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        tp(p.name).toLowerCase().includes(q) ||
        p.types.some(ty => ty.includes(q) || t(`common.types.${ty}`).toLowerCase().includes(q)) ||
        p.abilities.some(a => a.name.toLowerCase().includes(q) || ta(a.name).toLowerCase().includes(q)) ||
        p.moves.some(m => m.name.toLowerCase().includes(q) || tm(m.name).toLowerCase().includes(q))
      );
    });
  }, [pickerTarget, pickerSearch, pickerTypeFilter, team1Pokemon, team2Pokemon, tp, tm, ta, t]);

  // ── Render ─────────────────────────────────────────────────────────────

  return (
    <div className="space-y-6">
      {/* Two teams side by side */}
      <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-4 items-start">
        {/* Team 1 */}
        <TeamPanel
          label={t('teamTester.team1')}
          color="blue"
          pokemon={team1Pokemon}
          sets={team1Sets}
          onPickerOpen={() => setPickerTarget({ team: 1 })}
          onRemove={(id) => removePokemon(1, id)}
          onClear={() => { setTeam1Pokemon([]); setTeam1Sets([]); setResult(null); }}
          onLoadTeam={() => setShowLoader(1)}
          onPokemonClick={(name) => openPokemonDetail(name, 1, true)}
        />

        {/* Center controls */}
        <div className="flex flex-col items-center gap-4 lg:pt-20">
          <button
            onClick={swapTeams}
            className="p-3 rounded-xl glass glass-hover border border-gray-200/60 hover:border-violet-300 transition-all"
            title="Swap teams"
          >
            <ArrowRightLeft className="w-5 h-5 text-muted-foreground" />
          </button>

          <div className="text-center text-3xl font-black font-heading text-muted-foreground/30">VS</div>
        </div>

        {/* Team 2 */}
        <TeamPanel
          label={t('teamTester.team2')}
          color="red"
          pokemon={team2Pokemon}
          sets={team2Sets}
          onPickerOpen={() => setPickerTarget({ team: 2 })}
          onRemove={(id) => removePokemon(2, id)}
          onClear={() => { setTeam2Pokemon([]); setTeam2Sets([]); setResult(null); }}
          onLoadTeam={() => setShowLoader(2)}
          onPokemonClick={(name) => openPokemonDetail(name, 2, true)}
        />
      </div>

      {/* Simulation Controls */}
      <div className="glass rounded-2xl p-5 border border-gray-200/60">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground">{t('teamTester.battles')}</span>
            <div className="flex gap-1.5">
              {[500, 1000, 1500, 2000, 2500, 5000].map(n => (
                <button
                  key={n}
                  onClick={() => setIterations(n)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all",
                    iterations === n
                      ? "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-sm"
                      : "glass glass-hover text-muted-foreground"
                  )}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1" />

          <button
            onClick={handleRun}
            disabled={!canRun}
            className={cn(
              "px-8 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all",
              isRunning
                ? "bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 text-white shadow-lg shadow-orange-400/30 cursor-wait"
                : canRun
                  ? "bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 text-white hover:from-red-600 hover:via-orange-600 hover:to-amber-600 shadow-lg shadow-red-500/20"
                  : "bg-gray-100 dark:bg-white/5 text-muted-foreground cursor-not-allowed"
            )}
          >
            {isRunning ? (
              <><Loader2 className="w-4 h-4 animate-spin" /> {t('teamTester.battling')}</>
            ) : (
              <><Swords className="w-4 h-4" /> {t('teamTester.runBattles', { n: iterations })}</>
            )}
          </button>
        </div>

        {!canRun && !isRunning && (team1Pokemon.length < 4 || team2Pokemon.length < 4) && (
          <p className="text-[11px] text-muted-foreground text-center mt-2">
            {t('teamTester.needPokemon')}
          </p>
        )}
      </div>

      {/* Progress */}
      {isRunning && (
        <div ref={progressRef} className="glass rounded-2xl p-6 border border-gray-200/60">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 flex-shrink-0">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-red-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-3 rounded-full bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                <Swords className="w-5 h-5 text-orange-500" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{t('teamTester.runningSimulation', { n: iterations })}</p>
                <span className="text-xs font-mono tabular-nums text-muted-foreground bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded-md">
                  {elapsed.toFixed(1)}s
                </span>
              </div>
              <div className="h-2 bg-gray-100 dark:bg-white/10 rounded-full mt-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all duration-300"
                  style={{ width: `${Math.max(4, simProgress)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      <AnimatePresence>
        {result && !isRunning && (
          <motion.div
            ref={resultsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-5"
          >
            {/* Hero Stats */}
            <div className="glass rounded-2xl p-6 border border-gray-200/60">
              <div className="flex items-center gap-8 justify-center">
                {/* Team 1 side */}
                <div className="text-center">
                  <p className="text-[10px] font-bold uppercase text-blue-600 mb-1">{t('teamTester.team1')}</p>
                  <div className="flex gap-1 justify-center mb-2">
                    {team1Pokemon.slice(0, 4).map(p => (
                      <Image key={p.id} src={p.sprite} alt={p.name} width={28} height={28} unoptimized />
                    ))}
                  </div>
                  <p className={cn(
                    "text-4xl font-black font-heading",
                    result.winRate >= 50
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent"
                      : "bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
                  )}>
                    {result.winRate}%
                  </p>
                  <p className="text-xs text-muted-foreground">{t('teamTester.winsLosses', { wins: result.wins, losses: result.losses })}</p>
                </div>

                {/* VS */}
                <div className="text-center">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black shadow-lg",
                    result.winRate >= 55 ? "bg-gradient-to-br from-green-400 to-emerald-600 text-white" :
                    result.winRate <= 45 ? "bg-gradient-to-br from-red-400 to-red-600 text-white" :
                    "bg-gradient-to-br from-yellow-400 to-amber-500 text-white"
                  )}>
                    {t('teamTester.vs')}
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1">{t('teamTester.nBattles', { n: result.totalGames })}</p>
                  <p className="text-[10px] text-muted-foreground">{t('teamTester.turnsAvg', { n: result.avgTurns })}</p>
                  {elapsed > 0 && (
                    <p className="text-[10px] font-mono text-muted-foreground/70 mt-0.5">⏱ {elapsed.toFixed(1)}s</p>
                  )}
                </div>

                {/* Team 2 side */}
                <div className="text-center">
                  <p className="text-[10px] font-bold uppercase text-red-600 mb-1">{t('teamTester.team2')}</p>
                  <div className="flex gap-1 justify-center mb-2">
                    {team2Pokemon.slice(0, 4).map(p => (
                      <Image key={p.id} src={p.sprite} alt={p.name} width={28} height={28} unoptimized />
                    ))}
                  </div>
                  <p className={cn(
                    "text-4xl font-black font-heading",
                    result.winRate <= 50
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent"
                      : "bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
                  )}>
                    {(100 - result.winRate).toFixed(1)}%
                  </p>
                  <p className="text-xs text-muted-foreground">{t('teamTester.winsLosses', { wins: result.losses, losses: result.wins })}</p>
                </div>
              </div>

              {/* Win bar */}
              <div className="mt-5 relative">
                <div className="h-4 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden flex">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${result.winRate}%` }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                  />
                  <motion.div
                    className="h-full bg-gradient-to-r from-red-400 to-red-500 flex-1"
                    initial={{ width: 0 }}
                    animate={{ width: `${100 - result.winRate}%` }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-white drop-shadow-sm">
                    {result.winRate}% - {(100 - result.winRate).toFixed(1)}%
                  </span>
                </div>
              </div>

              {/* Verdict */}
              <div className={cn(
                "mt-4 p-3 rounded-xl text-center text-sm font-bold",
                result.winRate > 55 ? "bg-blue-50 text-blue-700 border border-blue-200" :
                result.winRate < 45 ? "bg-red-50 text-red-700 border border-red-200" :
                "bg-yellow-50 text-yellow-700 border border-yellow-200"
              )}>
                {result.winRate > 60 ? t('teamTester.verdictDominate1') :
                 result.winRate > 55 ? t('teamTester.verdictClear1') :
                 result.winRate > 52 ? t('teamTester.verdictSlight1') :
                 result.winRate > 48 ? t('teamTester.verdictEven') :
                 result.winRate > 45 ? t('teamTester.verdictSlight2') :
                 result.winRate > 40 ? t('teamTester.verdictClear2') :
                 t('teamTester.verdictDominate2')}
              </div>

              {/* Export PDF + Log to Journal */}
              <div className="mt-3 flex justify-center gap-2 flex-wrap">
                <button
                  onClick={() => {
                    trackEvent("export_pdf", "team_tester");
                    const pdfData = buildTeamTesterPdfData();
                    if (!pdfData) return;
                    void exportTeamTesterPDF(pdfData, locale === "fr" ? PDF_LABELS_FR : locale === "de" ? PDF_LABELS_DE : undefined);
                  }}
                  className="px-4 py-2 text-xs rounded-xl flex items-center gap-2 font-heading font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  {t('battleBot.downloadMatchupStudy')}
                </button>

                {/* Log to Match Journal */}
                <button
                  onClick={() => {
                    const combo = result.leadCombos[selectedLeadIdx] ?? result.leadCombos[0];
                    const picks: number[] = [];
                    if (combo) {
                      [combo.lead1, combo.lead2, combo.back1, combo.back2]
                        .filter(Boolean)
                        .forEach(name => {
                          const id = team1Pokemon.find(p => p.name === name)?.id;
                          if (id != null && !picks.includes(id)) picks.push(id);
                        });
                    }
                    for (const mon of team1Pokemon) {
                      if (picks.length >= 4) break;
                      if (!picks.includes(mon.id)) picks.push(mon.id);
                    }
                    setJournalMyPicks(picks);
                    setJournalOppPicks(team2Pokemon.slice(0, 4).map((p) => p.id));
                    setJournalResult("win");
                    setJournalNotes("");
                    setJournalSaved(false);
                    setJournalOpen(true);
                  }}
                  className="px-4 py-2 text-xs rounded-xl flex items-center gap-2 font-heading font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-sm shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-[1.02] transition-all"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Log to Journal
                </button>
              </div>

              {/* ── Journal Form (inline, collapsible) ────────────────────── */}
              <AnimatePresence>
                {journalOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-gray-200/60 dark:border-white/10 space-y-4">
                      {journalSaved ? (
                        <div className="flex flex-col items-center gap-3 py-4">
                          <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center">
                            <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">Saved to Match Journal!</p>
                          <Link
                            href="/match-journal"
                            className="flex items-center gap-1 text-xs text-violet-600 dark:text-violet-400 hover:underline"
                          >
                            View in Journal <ChevronRight className="w-3 h-3" />
                          </Link>
                        </div>
                      ) : (
                        <>
                          {/* My Picks */}
                          <div>
                            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                              My Picks <span className="normal-case font-normal opacity-60">— default: selected lead combo (2–4)</span>
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {team1Pokemon.map(p => {
                                const sel = journalMyPicks.includes(p.id);
                                return (
                                  <button
                                    key={p.id}
                                    onClick={() => setJournalMyPicks(prev =>
                                      sel ? prev.filter(id => id !== p.id)
                                          : prev.length < 4 ? [...prev, p.id] : prev
                                    )}
                                    className={cn(
                                      "flex items-center gap-1 px-2 py-1 rounded-lg text-xs border transition-all",
                                      sel
                                        ? "bg-blue-50 dark:bg-blue-500/10 border-blue-300 dark:border-blue-500/40 text-blue-800 dark:text-blue-300"
                                        : "bg-muted border-border text-muted-foreground hover:border-gray-400 dark:hover:border-white/30"
                                    )}
                                  >
                                    <Image src={p.sprite} alt={p.name} width={20} height={20} unoptimized />
                                    <span>{p.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                            <p className="text-[10px] text-muted-foreground mt-1">{journalMyPicks.length}/4 selected</p>
                          </div>

                          {/* Opponent Picks */}
                          <div>
                            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                              Opponent Picks <span className="normal-case font-normal opacity-60">— what they brought (2–4)</span>
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {team2Pokemon.map(p => {
                                const sel = journalOppPicks.includes(p.id);
                                return (
                                  <button
                                    key={p.id}
                                    onClick={() => setJournalOppPicks(prev =>
                                      sel ? prev.filter(id => id !== p.id)
                                          : prev.length < 4 ? [...prev, p.id] : prev
                                    )}
                                    className={cn(
                                      "flex items-center gap-1 px-2 py-1 rounded-lg text-xs border transition-all",
                                      sel
                                        ? "bg-red-50 dark:bg-red-500/10 border-red-300 dark:border-red-500/40 text-red-800 dark:text-red-300"
                                        : "bg-muted border-border text-muted-foreground hover:border-gray-400 dark:hover:border-white/30"
                                    )}
                                  >
                                    <Image src={p.sprite} alt={p.name} width={20} height={20} unoptimized />
                                    <span>{p.name}</span>
                                  </button>
                                );
                              })}
                            </div>
                            <p className="text-[10px] text-muted-foreground mt-1">{journalOppPicks.length}/4 selected</p>
                          </div>

                          {/* Result */}
                          <div>
                            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">Result</p>
                            <div className="flex gap-2">
                              {(["win", "loss", "tie"] as const).map(r => (
                                <button
                                  key={r}
                                  onClick={() => setJournalResult(r)}
                                  className={cn(
                                    "flex-1 py-2 rounded-xl border-2 font-bold uppercase tracking-wide text-xs transition-all",
                                    journalResult === r
                                      ? r === "win"  ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                                        : r === "loss" ? "border-red-500 bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400"
                                        : "border-muted-foreground/50 bg-muted text-foreground"
                                      : "border-border text-muted-foreground hover:border-muted-foreground/40"
                                  )}
                                >
                                  {r === "win" ? "Win" : r === "loss" ? "Loss" : "Tie"}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Notes */}
                          <div>
                            <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                              Notes <span className="normal-case font-normal opacity-60">(optional)</span>
                            </label>
                            <textarea
                              value={journalNotes}
                              onChange={e => setJournalNotes(e.target.value)}
                              placeholder="Key plays, reads, what went well..."
                              rows={2}
                              className="w-full px-3 py-2 text-xs rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-colors resize-none"
                            />
                          </div>

                          {/* Actions */}
                          <div className="flex items-center justify-between pt-1">
                            <button
                              onClick={() => setJournalOpen(false)}
                              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                            >
                              Cancel
                            </button>
                            <button
                              disabled={journalMyPicks.length < 2 || journalOppPicks.length < 2}
                              onClick={() => {
                                const pdfData = buildTeamTesterPdfData();
                                saveMatchRecord({
                                  myTeam: team1Pokemon.map(p => p.id),
                                  myPicks: journalMyPicks,
                                  opponentTeam: team2Pokemon.map(p => p.id),
                                  opponentPicks: journalOppPicks,
                                  result: journalResult,
                                  notes: journalNotes.trim() || undefined,
                                  format: "Team Tester",
                                  teamTesterReport: pdfData ?? undefined,
                                });
                                setJournalSaved(true);
                              }}
                              className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 disabled:opacity-30 disabled:cursor-not-allowed text-white text-xs font-semibold transition-all"
                            >
                              Save to Journal
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Best Lead Combos  -  Full Width with Detailed Cards */}
            {result.leadCombos.length > 0 && (
              <div className="glass rounded-2xl p-5 border border-gray-200/60">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Target className="w-4 h-4 text-violet-500" />
                  {t('teamTester.bestLeadCombos')}
                </h3>
                <div className="space-y-3">
                  {result.leadCombos.slice(0, 5).map((combo, idx) => {
                    const p1Idx = team1Pokemon.findIndex(p => p.name === combo.lead1);
                    const p2Idx = team1Pokemon.findIndex(p => p.name === combo.lead2);
                    const p1 = p1Idx >= 0 ? team1Pokemon[p1Idx] : null;
                    const p2 = p2Idx >= 0 ? team1Pokemon[p2Idx] : null;
                    const s1 = p1Idx >= 0 ? team1Sets[p1Idx] : null;
                    const s2 = p2Idx >= 0 ? team1Sets[p2Idx] : null;
                    return (
                      <div
                        key={`${combo.lead1}-${combo.lead2}`}
                        onClick={() => setSelectedLeadIdx(idx)}
                        className={cn(
                          "p-4 rounded-xl border transition-all cursor-pointer",
                          idx === selectedLeadIdx
                            ? "bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-950/50 dark:to-indigo-950/50 border-violet-300 dark:border-violet-600 ring-2 ring-violet-200 dark:ring-violet-800 shadow-sm"
                            : idx === 0 ? "bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30 border-amber-200 dark:border-amber-800 hover:border-amber-300"
                            : "bg-gray-50/80 dark:bg-white/5 border-gray-200/60 dark:border-white/10 hover:border-gray-300"
                        )}
                      >
                        {/* Rank + Win Rate Header */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <span className={cn(
                              "w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold",
                              idx === selectedLeadIdx ? "bg-violet-200 dark:bg-violet-800 text-violet-800 dark:text-violet-200" :
                              idx === 0 ? "bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200" : "bg-white/20 dark:bg-white/10 text-gray-600 dark:text-gray-400"
                            )}>
                              {idx + 1}
                            </span>
                            <span className="text-xs font-semibold">{combo.lead1} + {combo.lead2}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div
                                className={cn(
                                  "h-full rounded-full",
                                  combo.winRate >= 60 ? "bg-gradient-to-r from-green-400 to-emerald-500" :
                                  combo.winRate >= 50 ? "bg-gradient-to-r from-blue-400 to-blue-500" :
                                  combo.winRate >= 40 ? "bg-gradient-to-r from-yellow-400 to-amber-500" :
                                  "bg-gradient-to-r from-red-400 to-red-500"
                                )}
                                initial={{ width: 0 }}
                                animate={{ width: `${combo.winRate}%` }}
                                transition={{ delay: 0.15 + idx * 0.08, duration: 0.6 }}
                              />
                            </div>
                            <span className={cn(
                              "text-sm font-black",
                              combo.winRate >= 55 ? "text-green-600" : combo.winRate >= 45 ? "text-foreground" : "text-red-500"
                            )}>
                              {combo.winRate}%
                            </span>
                          </div>
                        </div>

                        {/* Two Lead Pokemon Side by Side */}
                        <div className="grid grid-cols-2 gap-3">
                          {[{ p: p1, s: s1, name: combo.lead1, sprite: combo.lead1Sprite },
                            { p: p2, s: s2, name: combo.lead2, sprite: combo.lead2Sprite }].map(({ p, s, name, sprite }) => (
                            <button
                              key={name}
                              onClick={() => p && openPokemonDetail(name, 1)}
                              className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/60 dark:bg-white/5 hover:bg-white/90 dark:hover:bg-white/10 border border-gray-100 dark:border-white/10 transition-all text-left cursor-pointer"
                            >
                              <Image src={sprite} alt={name} width={36} height={36} unoptimized className="flex-shrink-0 mt-0.5" />
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-[11px] font-semibold truncate">{name}</span>
                                  {p && (
                                    <div className="flex gap-0.5">
                                      {p.types.map(t => (
                                        <span key={t} className={cn("w-2 h-2 rounded-full flex-shrink-0", `type-bg-${t}`)} />
                                      ))}
                                    </div>
                                  )}
                                </div>
                                {s && (
                                  <>
                                    <div className="flex gap-x-3 text-[9px] text-muted-foreground mt-0.5">
                                      <span>{ta(s.ability)}</span>
                                      <span>{ti(s.item)}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-0.5 mt-1">
                                      {s.moves.map(m => (
                                        <span key={m} className="px-1 py-px rounded bg-gray-100 dark:bg-white/10 text-[8px] font-medium text-muted-foreground">{tm(m)}</span>
                                      ))}
                                    </div>
                                  </>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>

                        {/* Back 2 Pokémon */}
                        {(combo.back1 || combo.back2) && (() => {
                          const backs = [
                            combo.back1 ? { name: combo.back1, sprite: combo.back1Sprite! } : null,
                            combo.back2 ? { name: combo.back2, sprite: combo.back2Sprite! } : null,
                          ].filter(Boolean) as { name: string; sprite: string }[];
                          if (backs.length === 0) return null;
                          return (
                            <div className="mt-2.5 pt-2.5 border-t border-gray-200/60 dark:border-white/10">
                              <p className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground/60 mb-1.5">Back</p>
                              <div className="flex gap-2">
                                {backs.map(({ name, sprite }) => {
                                  const pIdx = team1Pokemon.findIndex(p => p.name === name);
                                  const p = pIdx >= 0 ? team1Pokemon[pIdx] : null;
                                  const s = pIdx >= 0 ? team1Sets[pIdx] : null;
                                  return (
                                    <button
                                      key={name}
                                      onClick={(e) => { e.stopPropagation(); if (p) openPokemonDetail(name, 1); }}
                                      className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-white/60 dark:bg-white/5 hover:bg-white/90 dark:hover:bg-white/10 border border-gray-100 dark:border-white/10 transition-all text-left cursor-pointer flex-1 min-w-0"
                                    >
                                      <Image src={sprite} alt={name} width={28} height={28} unoptimized className="flex-shrink-0" />
                                      <div className="min-w-0">
                                        <div className="flex items-center gap-1">
                                          <span className="text-[10px] font-semibold truncate">{name}</span>
                                          {p && (
                                            <div className="flex gap-0.5 flex-shrink-0">
                                              {p.types.map(ty => (
                                                <span key={ty} className={cn("w-1.5 h-1.5 rounded-full", `type-bg-${ty}`)} />
                                              ))}
                                            </div>
                                          )}
                                        </div>
                                        {s && (
                                          <p className="text-[8px] text-muted-foreground truncate">{ta(s.ability)} · {ti(s.item)}</p>
                                        )}
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    );
                  })}
                </div>
                <p className="text-[10px] text-muted-foreground mt-3">
                  {t('teamTester.leadComboHelp', { n: result.leadCombos[0]?.games ?? 0 })}
                </p>
              </div>
            )}

            {/* Strategy Flowchart */}
            {result.leadCombos.length > 0 && (
              <div className="glass rounded-2xl p-5 border border-gray-200/60">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-indigo-500" />
                  {t('teamTester.strategyFlowchart')}
                </h3>
                <StrategyFlowchart
                  team1Pokemon={team1Pokemon}
                  team1Sets={team1Sets}
                  team2Pokemon={team2Pokemon}
                  team2Sets={team2Sets}
                  bestLead={result.leadCombos[selectedLeadIdx]}
                  winRate={result.leadCombos[selectedLeadIdx]?.winRate ?? result.winRate}
                  onPokemonClick={openPokemonDetail}
                />
              </div>
            )}

            {/* Pokémon Impact + Matchup Insights  -  Side by Side */}
            <div className="grid lg:grid-cols-2 gap-5">
              {/* Pokémon Impact Analysis */}
              {result.pokemonImpact.length > 0 && (
                <div className="glass rounded-2xl p-5 border border-gray-200/60">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-500" />
                    {t('teamTester.pokemonImpact')}
                  </h3>
                  <div className="space-y-2">
                    {result.pokemonImpact.map((mon, idx) => {
                      const monIdx = team1Pokemon.findIndex(p => p.name === mon.name);
                      const set = monIdx >= 0 ? team1Sets[monIdx] : null;
                      return (
                        <button
                          key={mon.name}
                          onClick={() => openPokemonDetail(mon.name, 1)}
                          className={cn(
                            "w-full text-left p-3 rounded-xl transition-all cursor-pointer hover:ring-2 hover:ring-violet-300",
                            idx === 0 && mon.impact > 0 ? "bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800" : "bg-gray-50 dark:bg-white/5"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            {idx === 0 && mon.impact > 0 && (
                              <span className="px-1.5 py-0.5 text-[9px] font-black uppercase rounded bg-gradient-to-r from-amber-400 to-amber-500 text-white flex-shrink-0">
                                {t('teamTester.mvp')}
                              </span>
                            )}
                            <Image src={mon.sprite} alt={mon.name} width={32} height={32} unoptimized className="flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <span className="text-xs font-semibold truncate block">{mon.name}</span>
                              {set && (
                                <span className="text-[9px] text-muted-foreground">{ta(set.ability)} · {ti(set.item)}</span>
                              )}
                            </div>
                            <div className="flex items-center gap-1.5 flex-shrink-0">
                              {mon.impact > 0 ? (
                                <TrendingUp className="w-3.5 h-3.5 text-green-500" />
                              ) : mon.impact < 0 ? (
                                <TrendingDown className="w-3.5 h-3.5 text-red-500" />
                              ) : null}
                              <span className={cn(
                                "text-sm font-bold",
                                mon.impact > 5 ? "text-green-600" :
                                mon.impact > 0 ? "text-green-500" :
                                mon.impact === 0 ? "text-muted-foreground" :
                                mon.impact > -5 ? "text-red-400" :
                                "text-red-600"
                              )}>
                                {mon.impact > 0 ? "+" : ""}{mon.impact}%
                              </span>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-3">
                    {t('teamTester.impactHelp')}
                  </p>
                </div>
              )}

              {/* Match Journal Intelligence */}
              {result && journalInsights && (
                <div className="glass rounded-2xl p-5 border border-violet-200/60 dark:border-violet-500/20 bg-gradient-to-br from-violet-50/30 via-white to-purple-50/30 dark:from-violet-950/20 dark:via-transparent dark:to-purple-950/20">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-violet-500" />
                    Match Journal Intelligence
                  </h3>
                  <p className="text-[10px] text-muted-foreground mb-4">
                    {journalInsights.totalRecords === 0
                      ? "Nessuna partita nel Match Journal. Inizia a loggare per ricevere insights personalizzati."
                      : journalInsights.isTeamSpecific
                        ? `Dati da ${journalInsights.totalRecords} partite con questo team specifico`
                        : `Dati da ${journalInsights.totalRecords} partite totali (nessun record specifico per questo team)`}
                  </p>

                  <div className="space-y-2">
                    {journalInsights.insights.map(insight => (
                      <div key={insight.name} className={cn(
                        "p-3 rounded-xl border transition-all",
                        insight.recommendation === "core"        ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/40" :
                        insight.recommendation === "underrated"  ? "bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800/40" :
                        insight.recommendation === "overrated"   ? "bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800/40" :
                        "bg-gray-50 dark:bg-white/[0.04] border-gray-200 dark:border-white/10"
                      )}>
                        <div className="flex items-center gap-3">
                          <Image src={insight.sprite} alt={insight.name} width={36} height={36} unoptimized className="flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 flex-wrap mb-0.5">
                              <span className="text-xs font-bold">{insight.name}</span>
                              {insight.isLeadFavorite && (
                                <span className="px-1.5 py-0.5 text-[8px] font-black uppercase rounded bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400">LEAD</span>
                              )}
                              {insight.recommendation === "core" && (
                                <span className="px-1.5 py-0.5 text-[8px] font-black uppercase rounded bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">Core pick</span>
                              )}
                              {insight.recommendation === "underrated" && (
                                <span className="px-1.5 py-0.5 text-[8px] font-black uppercase rounded bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-400">Utility gem</span>
                              )}
                              {insight.recommendation === "overrated" && (
                                <span className="px-1.5 py-0.5 text-[8px] font-black uppercase rounded bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400">Overrated</span>
                              )}
                              {insight.recommendation === "situational" && (
                                <span className="px-1.5 py-0.5 text-[8px] font-black uppercase rounded bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400">Situational</span>
                              )}
                            </div>
                            <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                              {insight.journalWinRate !== null ? (
                                <>
                                  <span>
                                    WR reale:{" "}
                                    <strong className={cn(
                                      insight.journalWinRate >= 55 ? "text-emerald-600 dark:text-emerald-400" :
                                      insight.journalWinRate < 45 ? "text-red-500 dark:text-red-400" :
                                      "text-foreground"
                                    )}>
                                      {insight.journalWinRate}%
                                    </strong>
                                    <span className="text-muted-foreground/60 ml-1">({insight.journalWins}/{insight.journalGames})</span>
                                  </span>
                                  {insight.bringRate !== null && (
                                    <span>Pick rate: <strong>{insight.bringRate}%</strong></span>
                                  )}
                                </>
                              ) : (
                                <span className="italic">Nessun dato — inizia a loggare partite</span>
                              )}
                            </div>
                          </div>
                          {/* Sim impact */}
                          <div className="text-right flex-shrink-0">
                            <div className="text-[9px] text-muted-foreground uppercase">Sim</div>
                            <div className={cn("text-sm font-bold",
                              insight.simImpact > 3  ? "text-emerald-600 dark:text-emerald-400" :
                              insight.simImpact > 0  ? "text-emerald-500" :
                              insight.simImpact === 0 ? "text-muted-foreground" :
                              "text-red-500"
                            )}>
                              {insight.simImpact > 0 ? "+" : ""}{insight.simImpact}%
                            </div>
                          </div>
                        </div>

                        {/* Dual progress bars */}
                        {insight.journalWinRate !== null && (
                          <div className="mt-2.5 space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[9px] text-muted-foreground w-14 shrink-0">WR reale</span>
                              <div className="flex-1 h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                                <div
                                  className={cn("h-full rounded-full transition-all",
                                    insight.journalWinRate >= 55 ? "bg-emerald-500" :
                                    insight.journalWinRate < 45 ? "bg-red-400" : "bg-amber-400"
                                  )}
                                  style={{ width: `${Math.min(100, insight.journalWinRate)}%` }}
                                />
                              </div>
                              <span className="text-[9px] font-mono w-8 text-right shrink-0">{insight.journalWinRate}%</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-[9px] text-muted-foreground w-14 shrink-0">Sim impact</span>
                              <div className="flex-1 h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                                <div
                                  className={cn("h-full rounded-full transition-all",
                                    insight.simImpact > 0 ? "bg-blue-400" : "bg-red-300"
                                  )}
                                  style={{ width: `${Math.min(100, Math.abs(insight.simImpact) * 10 + 50)}%` }}
                                />
                              </div>
                              <span className={cn("text-[9px] font-mono w-8 text-right shrink-0",
                                insight.simImpact > 0 ? "text-blue-500" : "text-red-400"
                              )}>
                                {insight.simImpact > 0 ? "+" : ""}{insight.simImpact}%
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Legend */}
                  <div className="mt-4 pt-3 border-t border-violet-200/40 dark:border-violet-500/20 flex flex-wrap gap-3 text-[10px] text-muted-foreground">
                    <span><strong className="text-emerald-600">Core pick</strong> — forte sia in sim che in partita</span>
                    <span><strong className="text-violet-600">Utility gem</strong> — vince in partita ma non emerge nel sim (es. Perish Song, support)</span>
                    <span><strong className="text-orange-500">Overrated</strong> — buono in sim, delude in partita reale</span>
                    <span className="text-muted-foreground/60">(Soglia minima: 3 partite per Pokémon)</span>
                  </div>
                </div>
              )}

              {/* Speed Tiers */}
              {(team1Pokemon.length > 0 || team2Pokemon.length > 0) && result && (() => {
                const allMons: { name: string; sprite: string; speed: number; team: 1 | 2 }[] = [
                  ...team1Pokemon.map(p => ({
                    name: p.name, sprite: p.sprite,
                    speed: Math.min(999, Math.floor((speedOverrides[`1-${p.name}`] ?? 0) * (speedTailwind ? 1.5 : 1))),
                    team: 1 as const,
                  })),
                  ...team2Pokemon.map(p => ({
                    name: p.name, sprite: p.sprite,
                    speed: Math.min(999, Math.floor((speedOverrides[`2-${p.name}`] ?? 0) * (speedTailwindOpp ? 1.5 : 1))),
                    team: 2 as const,
                  })),
                ].sort((a, b) => speedTrickRoom ? a.speed - b.speed : b.speed - a.speed);
                const maxSpeed = Math.max(...allMons.map(m => m.speed), 1);
                return (
                  <div className="glass rounded-2xl p-5 border border-gray-200/60">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        Speed Tiers
                      </h3>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSpeedTailwind(v => !v)}
                          className={cn(
                            "flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all",
                            speedTailwind
                              ? "bg-blue-500 text-white border-blue-600 shadow-sm"
                              : "bg-white/60 dark:bg-white/5 text-muted-foreground border-gray-200 dark:border-white/10 hover:border-blue-300"
                          )}
                        >
                          🌬️ Tailwind
                        </button>
                        <button
                          onClick={() => setSpeedTailwindOpp(v => !v)}
                          className={cn(
                            "flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all",
                            speedTailwindOpp
                              ? "bg-red-500 text-white border-red-600 shadow-sm"
                              : "bg-white/60 dark:bg-white/5 text-muted-foreground border-gray-200 dark:border-white/10 hover:border-red-300"
                          )}
                        >
                          🌬️ Tailwind Opp
                        </button>
                        <button
                          onClick={() => setSpeedTrickRoom(v => !v)}
                          className={cn(
                            "flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all",
                            speedTrickRoom
                              ? "bg-violet-500 text-white border-violet-600 shadow-sm"
                              : "bg-white/60 dark:bg-white/5 text-muted-foreground border-gray-200 dark:border-white/10 hover:border-violet-300"
                          )}
                        >
                          🔀 Trick Room
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {allMons.map((mon, idx) => (
                        <div
                          key={`${mon.team}-${mon.name}`}
                          className={cn(
                            "flex items-center gap-3 p-2.5 rounded-xl border transition-all",
                            mon.team === 1
                              ? "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800"
                              : "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800"
                          )}
                        >
                          <span className={cn(
                              "text-[10px] font-bold w-4 text-center flex-shrink-0",
                              speedTrickRoom ? "text-violet-500" : "text-muted-foreground/60"
                            )}>{speedTrickRoom ? allMons.length - idx : idx + 1}</span>
                          <Image src={mon.sprite} alt={mon.name} width={28} height={28} unoptimized className="flex-shrink-0" />
                          <span className="text-xs font-semibold flex-1 truncate">{mon.name}</span>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <div className="w-20 h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                              <div
                                className={cn("h-full rounded-full transition-all duration-200", mon.team === 1 ? "bg-blue-400" : "bg-red-400")}
                                style={{ width: `${(mon.speed / maxSpeed) * 100}%` }}
                              />
                            </div>
                            <input
                              type="number"
                              min={1}
                              max={999}
                              title="Speed value"
                              value={mon.speed}
                              onChange={e => {
                                const val = Math.max(1, Math.min(999, parseInt(e.target.value) || 1));
                                setSpeedOverrides(prev => ({ ...prev, [`${mon.team}-${mon.name}`]: val }));
                              }}
                              className={cn(
                                "w-14 text-right text-sm font-black rounded-lg border px-1.5 py-0.5 bg-transparent focus:outline-none focus:ring-1",
                                mon.team === 1
                                  ? "text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700 focus:ring-blue-400"
                                  : "text-red-600 dark:text-red-400 border-red-200 dark:border-red-700 focus:ring-red-400"
                              )}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-3">Edit speed values to simulate Tailwind, Choice Scarf, Trick Room and other modifiers.</p>
                  </div>
                );
              })()}

              {/* Matchup Insights */}
              {result.insights.length > 0 && (
                <div className="glass rounded-2xl p-5 border border-gray-200/60">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-yellow-500" />
                    {t('teamTester.matchupInsights')}
                  </h3>
                  <div className="space-y-2">
                    {(locale === 'fr' ? translateInsights(result.insights, tm) : locale === 'es' ? translateInsightsES(result.insights, tm) : locale === 'it' ? translateInsightsIT(result.insights, tm) : locale === 'de' ? translateInsightsDE(result.insights, tm) : result.insights).map((tip, idx) => (                      <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-gray-50 dark:bg-white/5">
                        <span className="text-sm mt-0.5">💡</span>
                        <p className="text-xs text-muted-foreground leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sample Battle Replay */}
            {result.sampleBattle && (
              <div className="glass rounded-2xl p-5 border border-gray-200/60">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  {t('teamTester.sampleBattleReplay')}
                </h3>

                {/* Team headers */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
                    <p className="text-[10px] font-bold text-blue-600 uppercase mb-1">{t('teamTester.team1')}</p>
                    <div className="flex gap-1 flex-wrap">
                      {result.sampleBattle.team1Names.map(name => {
                        const mon = POKEMON_SEED.find(p => p.name === name);
                        return mon ? (
                          <Image key={name} src={mon.sprite} alt={name} width={28} height={28} unoptimized title={name} />
                        ) : <span key={name} className="text-[10px]">{name}</span>;
                      })}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200">
                    <p className="text-[10px] font-bold text-red-600 uppercase mb-1">{t('teamTester.team2')}</p>
                    <div className="flex gap-1 flex-wrap">
                      {result.sampleBattle.team2Names.map(name => {
                        const mon = POKEMON_SEED.find(p => p.name === name);
                        return mon ? (
                          <Image key={name} src={mon.sprite} alt={name} width={28} height={28} unoptimized title={name} />
                        ) : <span key={name} className="text-[10px]">{name}</span>;
                      })}
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-2 mb-4">
                  <button
                    onClick={() => { setReplayTurn(0); setReplayPlaying(false); }}
                    className="p-2 rounded-lg glass glass-hover"
                    title={t('teamTester.reset')}
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setReplayPlaying(!replayPlaying)}
                    className="p-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 text-white"
                  >
                    {replayPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setReplayTurn(prev => Math.min(prev + 1, result.sampleBattle!.log.length - 1))}
                    className="p-2 rounded-lg glass glass-hover"
                    title={t('teamTester.nextTurn')}
                  >
                    <SkipForward className="w-4 h-4" />
                  </button>
                  <div className="flex-1 mx-2">
                    <input
                      type="range"
                      min={0}
                      max={result.sampleBattle.log.length - 1}
                      value={replayTurn}
                      title="Battle replay turn"
                      onChange={(e) => { setReplayTurn(Number(e.target.value)); setReplayPlaying(false); }}
                      className="w-full accent-orange-500"
                    />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">
                    {t('teamTester.turnCounter', { current: result.sampleBattle.log[replayTurn]?.turn ?? 0, total: result.sampleBattle.turnsPlayed })}
                  </span>
                </div>

                {/* HP Bars */}
                {result.sampleBattle.log[replayTurn] && (
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="space-y-1.5">
                      {result.sampleBattle.team1Names.map((name, idx) => {
                        const hp = result.sampleBattle!.log[replayTurn]?.team1HP[idx] ?? 0;
                        return (
                          <div key={name} className="flex items-center gap-2">
                            <span className="text-[10px] w-20 truncate text-right">{name}</span>
                            <div className="flex-1 h-2.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                              <motion.div
                                className={cn(
                                  "h-full rounded-full transition-all duration-500",
                                  hp > 50 ? "bg-green-500" : hp > 25 ? "bg-yellow-500" : hp > 0 ? "bg-red-500" : "bg-gray-300"
                                )}
                                style={{ width: `${hp}%` }}
                              />
                            </div>
                            <span className="text-[10px] font-mono w-8 text-right">{hp}%</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="space-y-1.5">
                      {result.sampleBattle.team2Names.map((name, idx) => {
                        const hp = result.sampleBattle!.log[replayTurn]?.team2HP[idx] ?? 0;
                        return (
                          <div key={name} className="flex items-center gap-2">
                            <span className="text-[10px] w-20 truncate text-right">{name}</span>
                            <div className="flex-1 h-2.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                              <motion.div
                                className={cn(
                                  "h-full rounded-full transition-all duration-500",
                                  hp > 50 ? "bg-green-500" : hp > 25 ? "bg-yellow-500" : hp > 0 ? "bg-red-500" : "bg-gray-300"
                                )}
                                style={{ width: `${hp}%` }}
                              />
                            </div>
                            <span className="text-[10px] font-mono w-8 text-right">{hp}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Field state */}
                {result.sampleBattle.log[replayTurn] && (
                  <div className="flex gap-2 flex-wrap mb-3">
                    {result.sampleBattle.log[replayTurn].field.weather && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-blue-100 text-blue-700">
                        {result.sampleBattle.log[replayTurn].field.weather}
                      </span>
                    )}
                    {result.sampleBattle.log[replayTurn].field.trickRoom && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-violet-100 text-violet-700">
                        {t('teamTester.trickRoom')}
                      </span>
                    )}
                    {result.sampleBattle.log[replayTurn].field.tailwind1 && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-cyan-100 text-cyan-700">
                        {t('teamTester.team1Tailwind')}
                      </span>
                    )}
                    {result.sampleBattle.log[replayTurn].field.tailwind2 && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-orange-100 text-orange-700">
                        {t('teamTester.team2Tailwind')}
                      </span>
                    )}
                  </div>
                )}

                {/* Turn events */}
                <div className="space-y-1 max-h-72 overflow-y-auto">
                  {result.sampleBattle.log.slice(0, replayTurn + 1).reverse().map((entry) => (
                    <div key={entry.turn} className={cn(
                      "p-2 rounded-lg",
                      entry.turn === result.sampleBattle!.log[replayTurn]?.turn ? "bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800" : "bg-gray-50 dark:bg-white/5"
                    )}>
                      <p className="text-[10px] font-bold text-muted-foreground mb-1">
                        {entry.turn === 0 ? t('teamTester.battleStart') : t('teamTester.turnN', { n: entry.turn })}
                      </p>
                      {entry.events.map((ev, eidx) => (
                        <p key={eidx} className="text-[11px] text-muted-foreground">{translateBattleEvent(ev)}</p>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Result */}
                <div className={cn(
                  "mt-3 p-3 rounded-xl text-center text-sm font-bold",
                  result.sampleBattle.winner === 1
                    ? "bg-blue-100 text-blue-700 border border-blue-300"
                    : "bg-red-100 text-red-700 border border-red-300"
                )}>
                  {result.sampleBattle.winner === 1 ? t('teamTester.team1Wins') : t('teamTester.team2Wins')}{' '}
                  {t('teamTester.winsInTurns', { turns: result.sampleBattle.turnsPlayed, t1: result.sampleBattle.team1Remaining, t2: result.sampleBattle.team2Remaining })}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty state */}
      {!result && !isRunning && (
        <div className="glass rounded-2xl p-12 border border-gray-200/60 text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-10 h-10 text-muted-foreground/20" />
          </div>
          <p className="text-muted-foreground text-sm mb-1 font-medium">{t('teamTester.emptyTitle')}</p>
          <p className="text-xs text-muted-foreground/60 max-w-sm mx-auto">
            {t('teamTester.emptyDesc')}
          </p>
        </div>
      )}

      {/* ── POKEMON PICKER MODAL ────────────────────────────────── */}
      {pickerTarget && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
            onClick={() => { setPickerTarget(null); setPickerSearch(""); setPickerTypeFilter(null); }}
          />
          <div className="fixed inset-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 sm:w-full sm:max-w-lg sm:max-h-[70vh] glass rounded-2xl border border-gray-200/60 flex flex-col overflow-hidden">
            <div className="p-4 border-b border-gray-200/60">
              <div className="flex items-center gap-3">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={t('teamTester.searchPlaceholder')}
                  value={pickerSearch}
                  onChange={(e) => setPickerSearch(e.target.value)}
                  className="flex-1 bg-transparent focus:outline-none text-sm"
                  autoFocus
                />
                <button title="Close picker" onClick={() => { setPickerTarget(null); setPickerSearch(""); setPickerTypeFilter(null); }}>
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {(Object.keys(TYPE_COLORS) as PokemonType[]).map((ty) => (
                  <button
                    key={ty}
                    onClick={() => setPickerTypeFilter(pickerTypeFilter === ty ? null : ty)}
                    className={cn(
                      "px-2 py-1 rounded-full text-[10px] font-semibold capitalize transition-all border",
                      pickerTypeFilter === ty
                        ? `type-bg-${ty} type-border-${ty} text-white`
                        : `type-bg-10-${ty} type-color-${ty} type-border-55-${ty}`
                    )}
                  >
                    {t(`common.types.${ty}`)}
                  </button>
                ))}
              </div>
              {(pickerSearch || pickerTypeFilter) && (
                <p className="text-[10px] text-muted-foreground mt-2">{t('common.pokemonFound', { count: filteredPokemon.length })}</p>
              )}
            </div>
            <div className="flex-1 overflow-y-auto p-3">
              <div className="grid grid-cols-2 gap-2">
                {filteredPokemon.map(p => (
                  <button
                    key={p.id}
                    onClick={() => {
                      addPokemon(p);
                      const teamLen = pickerTarget.team === 1 ? team1Pokemon.length : team2Pokemon.length;
                      if (teamLen >= 5) { setPickerTarget(null); setPickerSearch(""); setPickerTypeFilter(null); }
                    }}
                    className="flex items-center gap-2 p-3 rounded-xl glass glass-hover text-left"
                  >
                    <Image src={p.sprite} alt={p.name} width={36} height={36} unoptimized />
                    <div>
                      <p className="text-xs font-medium">{p.name}</p>
                      <div className="flex gap-1 mt-0.5">
                        {p.types.map(t => (
                          <span key={t} className={cn("w-2 h-2 rounded-full", `type-bg-${t}`)} />
                        ))}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── TEAM LOADER MODAL ────────────────────────────────── */}
      {showLoader && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
            onClick={() => { setShowLoader(null); setPasteText(""); setPasteError(""); }}
          />
          <div className="fixed inset-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 sm:w-full sm:max-w-md sm:max-h-[70vh] glass rounded-2xl border border-gray-200/60 flex flex-col overflow-hidden">
            <div className="p-4 border-b border-gray-200/60 flex items-center justify-between">
              <p className="text-sm font-semibold">{t('teamTester.loadTeam', { n: showLoader })}</p>
              <button title="Close" onClick={() => { setShowLoader(null); setPasteText(""); setPasteError(""); }}>
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {/* Pokepaste Import */}
              <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-600 p-3">
                <p className="text-[10px] text-muted-foreground uppercase font-medium mb-2 flex items-center gap-1.5">
                  <ClipboardPaste className="w-3 h-3" /> {t('teamTester.importPokepaste')}
                </p>
                <textarea
                  value={pasteText}
                  onChange={e => { setPasteText(e.target.value); setPasteError(""); }}
                  placeholder={t('teamTester.pastePlaceholder') + "\n\nIncineroar @ Assault Vest\nAbility: Intimidate\nEVs: 252 HP / 4 Atk / 252 SpD\nCareful Nature\n- Fake Out\n- Flare Blitz\n- Knock Off\n- U-turn"}
                  className="w-full h-24 text-[11px] bg-white/50 dark:bg-white/5 border border-gray-200/60 dark:border-white/10 rounded-lg p-2 resize-none focus:outline-none focus:ring-1 focus:ring-violet-500/50 placeholder:text-muted-foreground/50"
                />
                {pasteError && <p className="text-[10px] text-red-500 mt-1">{pasteError}</p>}
                <button
                  onClick={() => showLoader && importFromPokepaste(pasteText, showLoader)}
                  disabled={!pasteText.trim()}
                  className="mt-2 w-full py-1.5 rounded-lg text-[11px] font-medium bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  {t('teamTester.importTeam')}
                </button>
              </div>

              {savedTeams.length > 0 && (
                <>
                  <p className="text-[10px] text-muted-foreground uppercase font-medium">{t('teamTester.yourSavedTeams')}</p>
                  {[...savedTeams].sort((a, b) => b.updatedAt - a.updatedAt).map(t => (
                    <button
                      key={t.id}
                      onClick={() => loadSavedTeam(t, showLoader)}
                      className="w-full text-left p-3 rounded-xl glass glass-hover flex items-center gap-3"
                    >
                      <Save className="w-4 h-4 text-violet-500 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs font-medium truncate">{t.name}</p>
                        <p className="text-[10px] text-muted-foreground">{t.slots.length} Pokémon · {new Date(t.updatedAt).toLocaleDateString()} {new Date(t.updatedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
                      </div>
                    </button>
                  ))}
                </>
              )}
              <p className="text-[10px] text-muted-foreground uppercase font-medium mt-2">{t('teamTester.prebuiltTeams')}</p>
              {PREBUILT_TEAMS.map(t => (
                <button
                  key={t.id}
                  onClick={() => loadPrebuiltTeam(t, showLoader)}
                  className="w-full text-left p-3 rounded-xl glass glass-hover flex items-center gap-3"
                >
                  <span className={cn(
                    "px-1.5 py-0.5 text-[9px] font-bold rounded flex-shrink-0",
                    t.tier === "S" ? "bg-amber-100 text-amber-700" :
                    t.tier === "A" ? "bg-blue-100 text-blue-700" :
                    "bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400"
                  )}>{t.tier}</span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium truncate">{t.name}</p>
                    <p className="text-[10px] text-muted-foreground truncate">{t.archetype}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ── POKEMON DETAIL / EDIT MODAL ─────────────────────────── */}
      {detailMon && (() => {
        const editPkm = detailMon.pokemon;
        const editSet = detailMon.editable
          ? (detailMon.team === 1 ? team1Sets : team2Sets)[detailMon.slotIndex] ?? detailMon.set
          : detailMon.set;
        const megaForms = editPkm.forms?.filter(f => f.isMega && !f.hidden) ?? [];
        const isMegaItem = (item: string) => item.endsWith("ite") || item.endsWith("ite X") || item.endsWith("ite Y") || item.endsWith("ite Z");
        const isMega = isMegaItem(editSet.item);
        const activeMegaForm = isMega ? megaForms.find(f => f.abilities.some(a => a.name === editSet.ability)) ?? megaForms[0] : null;
        const displayTypes = activeMegaForm?.types ?? editPkm.types;
        const displaySprite = activeMegaForm?.sprite ?? editPkm.sprite;
        const displayName = activeMegaForm?.name ?? editPkm.name;
        const usageSets = USAGE_DATA[editPkm.id] ?? [];
        const team = detailMon.team;
        const idx = detailMon.slotIndex;
        return (
          <>
            <div
              className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
              onClick={() => setDetailMon(null)}
            />
            <div className={cn(
              "fixed left-3 right-3 top-[72px] bottom-3 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 sm:w-full max-h-[calc(100dvh-84px)] sm:max-h-[85vh] glass rounded-2xl border border-gray-200/60 flex flex-col overflow-hidden",
              detailMon.editable ? "sm:max-w-2xl" : "sm:max-w-lg"
            )}>
              {/* Header */}
              <div className="p-4 border-b border-gray-200/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image src={displaySprite} alt={displayName} width={44} height={44} className="drop-shadow-md" unoptimized />
                  <div>
                    <h3 className="text-sm font-bold flex items-center gap-2">
                      {detailMon.editable && <Settings2 className="w-3.5 h-3.5 text-violet-500" />}
                      {displayName}
                    </h3>
                    <div className="flex gap-1 mt-0.5">
                      {displayTypes.map(t => (
                        <span key={t} className={cn("px-1.5 py-0.5 text-[7px] font-bold uppercase rounded text-white/80", `type-bg-aa-${t}`)}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {detailMon.editable && (
                    <button
                      onClick={() => {
                        const remover = detailMon.team === 1
                          ? () => { setTeam1Pokemon(p => p.filter((_, i) => i !== idx)); setTeam1Sets(s => s.filter((_, i) => i !== idx)); }
                          : () => { setTeam2Pokemon(p => p.filter((_, i) => i !== idx)); setTeam2Sets(s => s.filter((_, i) => i !== idx)); };
                        remover();
                        setDetailMon(null);
                      }}
                      className="p-1.5 rounded-lg hover:bg-red-100 text-muted-foreground hover:text-red-600 transition-colors"
                      title={t('teamTester.removePokemon')}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                  <button title="Close" onClick={() => setDetailMon(null)} className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {detailMon.editable ? (
                  /* ── EDITABLE MODE ── */
                  <>
                    {/* Quick Apply Sets */}
                    {usageSets.length > 0 && (
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase font-medium mb-2">{t('teamTester.quickApplySet')}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {usageSets.slice(0, 5).map((s, i) => (
                            <button key={i} onClick={() => updateTesterSetField(team, idx, { ability: s.ability, moves: s.moves.slice(0, 4), sp: s.sp, nature: s.nature, item: s.item })} className="px-2.5 py-1 rounded-lg bg-violet-50 dark:bg-violet-500/10 hover:bg-violet-100 dark:hover:bg-violet-500/20 border border-violet-200 dark:border-violet-500/20 hover:border-violet-300 transition-all text-[10px] font-medium text-violet-700 dark:text-violet-300">
                              {i === 0 ? <><Zap className="w-3 h-3 inline mr-1" />{t('teamTester.bestSet')}</> : s.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Col 1: Moves */}
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase font-medium mb-2">{t('teamTester.moves')}</p>
                        <div className="space-y-1.5">
                          {[0, 1, 2, 3].map((moveIdx) => {
                            const currentMove = editSet.moves[moveIdx] || "";
                            const sortedMoves = [...editPkm.moves].sort((a, b) => a.name.localeCompare(b.name));
                            const moveData = editPkm.moves.find(m => m.name === currentMove);
                            const moveOptions: SearchSelectOption[] = [
                              { value: "", label: t('teamTester.emptySlot') },
                              ...sortedMoves.map((m) => ({
                                value: m.name,
                                label: tm(m.name),
                                sub: `${m.type} · ${m.category}${m.power ? ` · ${m.power}bp` : ""}${m.accuracy ? ` · ${m.accuracy}%` : ""} · ${m.pp}pp`,
                                badge: tt(m.type),
                                badgeColor: `${TYPE_COLORS[m.type]}AA`,
                                description: m.description ? tmd(m.name, m.description) : undefined,
                              })),
                            ];
                            return (
                              <SearchSelect
                                key={moveIdx}
                                value={currentMove}
                                options={moveOptions}
                                onChange={(v) => updateTesterSetMove(team, idx, moveIdx, v)}
                                placeholder={t('teamTester.emptySlot')}
                                triggerBadge={moveData ? { text: tt(moveData.type), color: `${TYPE_COLORS[moveData.type]}AA` } : null}
                              />
                            );
                          })}
                        </div>
                      </div>

                      {/* Col 2: Ability + Nature + Item */}
                      <div className="space-y-3">
                        <div>
                          <p className="text-[10px] text-muted-foreground uppercase font-medium mb-1.5">{isMega ? t('teamTester.preMegaAbility') : t('teamTester.ability')}</p>
                          <div className="space-y-1">
                            {isMega ? (
                              <>
                                {/* Pre-mega ability selector (base abilities) */}
                                {editPkm.abilities.map((ab) => {
                                  const preMega = editSet.preMegaAbility || editPkm.abilities[0]?.name || "";
                                  const isActive = preMega === ab.name;
                                  return (
                                    <button key={ab.name} onClick={() => updateTesterSetField(team, idx, { preMegaAbility: ab.name })} className={cn("w-full text-left px-2.5 py-1.5 rounded-lg text-[10px] border transition-all", isActive ? "bg-emerald-100 dark:bg-emerald-500/30 border-emerald-300 dark:border-emerald-400/50 font-semibold text-emerald-800 dark:text-white" : "bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10")}>
                                      <div className="flex items-center justify-between">
                                        <span>{ta(ab.name)}{ab.isHidden ? " (H)" : ""}</span>
                                        {isActive && <span className="text-[8px] text-emerald-500 dark:text-emerald-400 font-bold">{t('teamTester.active')}</span>}
                                      </div>
                                      <p className={cn("text-[8px] mt-0.5 line-clamp-1", isActive ? "text-emerald-600 dark:text-emerald-300" : "text-muted-foreground")}>{tad(ab.name, ab.description)}</p>
                                    </button>
                                  );
                                })}
                                {/* Mega ability (locked display) */}
                                {(() => {
                                  const megaAb = activeMegaForm?.abilities?.[0];
                                  if (!megaAb) return null;
                                  return (
                                    <>
                                      <p className="text-[10px] text-amber-600 dark:text-amber-400 font-bold uppercase mt-2 mb-1">{t('teamTester.megaAbility')}</p>
                                      <div className="w-full text-left px-2.5 py-1.5 rounded-lg text-[10px] border bg-amber-50 dark:bg-amber-500/20 border-amber-200 dark:border-amber-400/50 text-amber-800 dark:text-amber-100">
                                        <div className="flex items-center justify-between">
                                          <span>{ta(megaAb.name)}<span className="ml-1 text-[8px] text-amber-600 dark:text-amber-400 font-bold">{t('teamTester.mega')}</span></span>
                                        </div>
                                        <p className="text-[8px] text-muted-foreground mt-0.5 line-clamp-1">{tad(megaAb.name, megaAb.description)}</p>
                                      </div>
                                    </>
                                  );
                                })()}
                              </>
                            ) : (
                              <>
                                {editPkm.abilities.map((ab) => (
                                  <button key={ab.name} onClick={() => updateTesterSetField(team, idx, { ability: ab.name })} className={cn("w-full text-left px-2.5 py-1.5 rounded-lg text-[10px] border transition-all", editSet.ability === ab.name ? "bg-violet-100 dark:bg-violet-500/30 border-violet-300 dark:border-violet-400/50 font-semibold text-violet-800 dark:text-white" : "bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10")}>
                                    <span>{ta(ab.name)}{ab.isHidden ? " (H)" : ""}</span>
                                    <p className={cn("text-[8px] mt-0.5 line-clamp-1", editSet.ability === ab.name ? "text-violet-600" : "text-muted-foreground")}>{tad(ab.name, ab.description)}</p>
                                  </button>
                                ))}
                                {megaForms.map((form) => {
                                  const megaAb = form.abilities?.[0];
                                  if (!megaAb || editPkm.abilities.some(a => a.name === megaAb.name)) return null;
                                  const getMegaStone = () => {
                                    const s = usageSets.find(s2 => isMegaItem(s2.item) && s2.ability === megaAb.name);
                                    return s?.item ?? usageSets.find(s2 => isMegaItem(s2.item))?.item;
                                  };
                                  return (
                                    <button key={megaAb.name} onClick={() => updateTesterSetField(team, idx, { ability: megaAb.name, item: getMegaStone() ?? editSet.item, preMegaAbility: editSet.ability })} className={cn("w-full text-left px-2.5 py-1.5 rounded-lg text-[10px] border transition-all", editSet.ability === megaAb.name ? "bg-amber-100 dark:bg-amber-500/30 border-amber-300 dark:border-amber-400/50 font-semibold text-amber-800 dark:text-white" : "bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10")}>
                                      <span>{ta(megaAb.name)} <span className="text-[8px] text-amber-600 font-bold">{t('teamTester.mega')}</span></span>
                                      <p className={cn("text-[8px] mt-0.5 line-clamp-1", editSet.ability === megaAb.name ? "text-amber-600" : "text-muted-foreground")}>{tad(megaAb.name, megaAb.description)}</p>
                                    </button>
                                  );
                                })}
                              </>
                            )}
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] text-muted-foreground uppercase font-medium mb-1">{t('teamTester.nature')}</p>
                          <SearchSelect
                            value={editSet.nature || "Hardy"}
                            options={allNatureNames.map((n) => {
                              const nat = NATURES[n];
                              return {
                                value: n,
                                label: tn(n),
                                sub: nat.plus && nat.minus ? `+${ts(nat.plus)} / -${ts(nat.minus)}` : t('teamTester.neutral'),
                              };
                            })}
                            onChange={(v) => updateTesterSetField(team, idx, { nature: v })}
                            placeholder={t('teamTester.selectNature')}
                          />
                        </div>
                        <div>
                          <p className="text-[10px] text-muted-foreground uppercase font-medium mb-1">{t('teamTester.heldItem')}</p>
                          <SearchSelect
                            value={editSet.item || ""}
                            options={[
                              { value: "", label: t('teamTester.noItem') },
                              ...allItemNames.map((name) => ({
                                value: name,
                                label: ti(name),
                                sub: tid(name, ITEMS[name]?.description ?? ''),
                              })),
                            ]}
                            onChange={(v) => updateTesterSetField(team, idx, { item: v || "" })}
                            placeholder={t('teamTester.noItem')}
                            disabled={isMega}
                          />
                          {isMega && <p className="text-[8px] text-amber-600 mt-1">{t('teamTester.megaStoneRequired')}</p>}
                        </div>
                      </div>

                      {/* Col 3: SP Distribution */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[10px] text-muted-foreground uppercase font-medium">{t('teamTester.statPoints')}</p>
                          <span className={cn("text-[10px] font-bold", Object.values(editSet.sp).reduce((a, b) => a + b, 0) >= MAX_TOTAL_POINTS ? "text-red-500" : "text-muted-foreground")}>{Object.values(editSet.sp).reduce((a, b) => a + b, 0)}/{MAX_TOTAL_POINTS}</span>
                        </div>
                        <div className="space-y-1.5">
                          {STAT_KEYS.map((stat) => {
                            const value = editSet.sp[stat];
                            return (
                              <div key={stat} className="flex items-center gap-1.5">
                                <span className="text-[9px] font-medium text-muted-foreground w-6">{ts(stat)}</span>
                                <button title={`Decrease ${stat}`} onClick={() => updateTesterSetSP(team, idx, stat, -2)} className="w-5 h-5 rounded bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15 flex items-center justify-center transition-colors"><Minus className="w-2.5 h-2.5" /></button>
                                <div className="flex-1 h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden"><div className="h-full rounded-full bg-violet-400 transition-all duration-150" style={{ width: `${(value / MAX_PER_STAT) * 100}%` }} /></div>
                                <button title={`Increase ${stat}`} onClick={() => updateTesterSetSP(team, idx, stat, 2)} className="w-5 h-5 rounded bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15 flex items-center justify-center transition-colors"><Plus className="w-2.5 h-2.5" /></button>
                                <input type="number" min={0} max={MAX_PER_STAT} title={stat} value={value} onChange={(e) => setTesterSPDirect(team, idx, stat, parseInt(e.target.value) || 0)} className="w-9 text-center text-[10px] font-medium rounded bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-1 focus:ring-violet-300 py-0.5" />
                              </div>
                            );
                          })}
                        </div>
                        <div className="mt-2">
                          <p className="text-[8px] text-muted-foreground uppercase mb-1">{t('teamTester.presets')}</p>
                          <div className="flex flex-wrap gap-1">
                            {Object.entries(STAT_PRESETS).map(([name, sp]) => (
                              <button key={name} onClick={() => updateTesterSetField(team, idx, { sp: { ...sp } })} className="px-1.5 py-0.5 text-[8px] rounded bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-violet-50 dark:hover:bg-violet-500/10 hover:border-violet-200 dark:hover:border-violet-500/20 transition-colors">{t(`common.statPresets.${name}`)}</button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mega Toggle */}
                    {editPkm.hasMega && megaForms.length > 0 && (
                      <div className="pt-3 border-t border-gray-200/60">
                        <p className="text-[10px] text-muted-foreground uppercase font-medium mb-2">{t('teamTester.megaEvolution')}</p>
                        <div className="flex flex-wrap gap-2">
                          {megaForms.map((form, fi) => {
                            const megaAb = form.abilities?.[0];
                            const isActive = isMega && editSet.ability === megaAb?.name;
                            const getMegaStone = () => {
                              const s = usageSets.find(s2 => isMegaItem(s2.item) && s2.ability === megaAb?.name);
                              return s?.item ?? usageSets.find(s2 => isMegaItem(s2.item))?.item;
                            };
                            return (
                              <button key={fi} onClick={() => {
                                if (isActive) {
                                  updateTesterSetField(team, idx, { ability: editSet.preMegaAbility || (editPkm.abilities[0]?.name ?? ""), item: "Life Orb", preMegaAbility: undefined });
                                } else if (megaAb) {
                                  updateTesterSetField(team, idx, { ability: megaAb.name, item: getMegaStone() ?? editSet.item, preMegaAbility: editSet.ability });
                                }
                              }} className={cn("px-3 py-1.5 rounded-lg text-[11px] font-medium border transition-all flex items-center gap-1.5", isActive ? "bg-amber-100 dark:bg-amber-500/30 border-amber-300 dark:border-amber-400/50 text-amber-800 dark:text-white" : "bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:bg-amber-50 dark:hover:bg-amber-500/10 hover:border-amber-200 dark:hover:border-amber-500/20")}>
                                <Sparkles className="w-3.5 h-3.5" />{isActive ? t('teamTester.megaActive') : form.name.replace(editPkm.name, "").replace("Mega ", "").trim() || t('teamTester.enableMega')}
                              </button>
                            );
                          })}
                          {isMega && (
                            <button onClick={() => updateTesterSetField(team, idx, { ability: editSet.preMegaAbility || (editPkm.abilities[0]?.name ?? ""), item: "Life Orb", preMegaAbility: undefined })} className="px-3 py-1.5 rounded-lg text-[10px] font-medium border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:bg-red-50 dark:hover:bg-red-500/10 hover:border-red-200 dark:hover:border-red-500/20 transition-all text-gray-600 dark:text-gray-400">
                              {t('teamTester.disable')}
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  /* ── DISPLAY-ONLY MODE ── */
                  <>
                    {/* Ability + Item + Nature */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-2.5 rounded-xl bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800 text-center">
                        <p className="text-[9px] font-bold text-violet-600 uppercase mb-0.5">{isMega && editSet.preMegaAbility ? t('teamTester.preMegaAbility') : t('teamTester.ability')}</p>
                        {isMega && editSet.preMegaAbility ? (
                          <>
                            <p className="text-[11px] font-semibold">{ta(editSet.preMegaAbility)}</p>
                            {(() => {
                              const ab = editPkm.abilities.find(a => a.name === editSet.preMegaAbility);
                              return ab ? <p className="text-[9px] text-muted-foreground mt-0.5 line-clamp-2">{tad(ab.name, ab.description)}</p> : null;
                            })()}
                          </>
                        ) : (
                          <>
                            <p className="text-[11px] font-semibold">{ta(editSet.ability)}</p>
                            {(() => {
                              const ab = editPkm.abilities.find(a => a.name === editSet.ability);
                              return ab ? <p className="text-[9px] text-muted-foreground mt-0.5 line-clamp-2">{tad(ab.name, ab.description)}</p> : null;
                            })()}
                          </>
                        )}
                      </div>
                      <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-center">
                        <p className="text-[9px] font-bold text-amber-600 uppercase mb-0.5">{t('teamTester.heldItem')}</p>
                        <p className="text-[11px] font-semibold">{ti(editSet.item)}</p>
                      </div>
                      <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-center">
                        <p className="text-[9px] font-bold text-blue-600 uppercase mb-0.5">{t('teamTester.nature')}</p>
                        <p className="text-[11px] font-semibold">{tn(editSet.nature)}</p>
                      </div>
                    </div>
                    {isMega && editSet.preMegaAbility && activeMegaForm?.abilities?.[0] && (
                      <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-center">
                        <p className="text-[9px] font-bold text-amber-600 uppercase mb-0.5">{t('teamTester.megaAbility')}</p>
                        <p className="text-[11px] font-semibold">{ta(activeMegaForm.abilities[0].name)}</p>
                        <p className="text-[9px] text-muted-foreground mt-0.5 line-clamp-2">{tad(activeMegaForm.abilities[0].name, activeMegaForm.abilities[0].description)}</p>
                      </div>
                    )}

                    {/* Base Stats */}
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase mb-2">{t('teamTester.baseStats')}</p>
                      <div className="space-y-1.5">
                        {([
                          [ts('hp'), editPkm.baseStats.hp, editSet.sp.hp],
                          [ts('attack'), editPkm.baseStats.attack, editSet.sp.attack],
                          [ts('defense'), editPkm.baseStats.defense, editSet.sp.defense],
                          [ts('spAtk'), editPkm.baseStats.spAtk, editSet.sp.spAtk],
                          [ts('spDef'), editPkm.baseStats.spDef, editSet.sp.spDef],
                          [ts('speed'), editPkm.baseStats.speed, editSet.sp.speed],
                        ] as [string, number, number][]).map(([label, base, sp]) => (
                          <div key={label} className="flex items-center gap-2">
                            <span className="text-[10px] font-medium w-7 text-right text-muted-foreground">{label}</span>
                            <span className="text-[10px] font-bold w-7 text-right">{base}</span>
                            <div className="flex-1 h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                              <div
                                className={cn(
                                  "h-full rounded-full",
                                  base >= 130 ? "bg-green-500" : base >= 100 ? "bg-green-400" :
                                  base >= 80 ? "bg-yellow-400" : base >= 60 ? "bg-orange-400" : "bg-red-400"
                                )}
                                style={{ width: `${Math.min(100, (base / 200) * 100)}%` }}
                              />
                            </div>
                            {sp > 0 && (
                              <span className="text-[9px] font-medium text-violet-500 w-8">+{sp} SP</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Moves */}
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase mb-2">{t('teamTester.moves')}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {editSet.moves.map(moveName => {
                          const moveData = editPkm.moves.find(m => m.name === moveName);
                          return (
                            <div key={moveName} className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                              <div className="flex items-center gap-1.5 mb-1">
                                {moveData && (
                                  <span className={cn("px-1 py-px text-[8px] font-bold uppercase rounded text-white", `type-bg-${moveData.type}`)}>
                                    {moveData.type}
                                  </span>
                                )}
                                <span className="text-[11px] font-semibold">{tm(moveName)}</span>
                              </div>
                              {moveData && (
                                <div className="flex gap-2 text-[9px] text-muted-foreground">
                                  <span className={cn(
                                    "font-medium",
                                    moveData.category === "physical" ? "text-red-500" :
                                    moveData.category === "special" ? "text-blue-500" : "text-gray-500"
                                  )}>
                                    {moveData.category === "physical" ? t('teamTester.phys') : moveData.category === "special" ? t('teamTester.spec') : t('teamTester.status')}
                                  </span>
                                  {moveData.power && <span>BP: {moveData.power}</span>}
                                  {moveData.accuracy && <span>Acc: {moveData.accuracy}%</span>}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* All Abilities */}
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase mb-2">{t('teamTester.allAbilities')}</p>
                      <div className="space-y-1.5">
                        {editPkm.abilities.map(ab => (
                          <div key={ab.name} className={cn(
                            "p-2 rounded-lg text-[10px]",
                            ab.name === editSet.ability ? "bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800" : "bg-gray-50 dark:bg-white/5"
                          )}>
                            <div className="flex items-center gap-1.5">
                              <span className="font-semibold">{ta(ab.name)}</span>
                              {ab.name === editSet.ability && (
                                <span className="px-1 py-px text-[8px] font-bold bg-violet-200 text-violet-700 rounded">{t('teamTester.active')}</span>
                              )}
                              {ab.isHidden && (
                                <span className="px-1 py-px text-[8px] font-bold bg-gray-200 text-gray-600 rounded">{t('teamTester.ha')}</span>
                              )}
                            </div>
                            <p className="text-muted-foreground mt-0.5">{tad(ab.name, ab.description)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Footer (edit mode only) */}
              {detailMon.editable && (
                <div className="p-3 border-t border-gray-200/60 flex items-center justify-between">
                  <p className="text-[9px] text-muted-foreground">{t('teamTester.sessionOnly')}</p>
                  <button onClick={() => setDetailMon(null)} className="px-4 py-1.5 rounded-lg bg-violet-500 hover:bg-violet-600 text-white text-xs font-semibold transition-colors flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> {t('teamTester.done')}
                  </button>
                </div>
              )}
            </div>
          </>
        );
      })()}
    </div>
  );
}

function TeamPanel({
  label, color, pokemon, onPickerOpen, onRemove, onClear, onLoadTeam, onPokemonClick,
}: {
  label: string;
  color: "blue" | "red";
  pokemon: ChampionsPokemon[];
  sets: CommonSet[];
  onPickerOpen: () => void;
  onRemove: (id: number) => void;
  onClear: () => void;
  onLoadTeam: () => void;
  onPokemonClick?: (name: string) => void;
}) {
  const borderColor = color === "blue" ? "border-blue-200 dark:border-blue-800" : "border-red-200 dark:border-red-800";
  const headerBg = color === "blue" ? "from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950" : "from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950";
  const headerText = color === "blue" ? "text-blue-600 dark:text-blue-400" : "text-red-600 dark:text-red-400";
  const { t } = useI18n();

  return (
    <div className={cn("glass rounded-2xl border overflow-hidden", borderColor)}>
      <div className={cn("p-4 bg-gradient-to-r flex items-center justify-between", headerBg)}>
        <h3 className={cn("text-sm font-semibold uppercase tracking-wider flex items-center gap-2", headerText)}>
          <Swords className="w-4 h-4" />
          {label} ({pokemon.length}/6)
        </h3>
        <button
          onClick={onLoadTeam}
          className="text-[10px] text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
        >
          <FolderOpen className="w-3 h-3" /> {t('teamTester.load')}
        </button>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-3 gap-2.5 mb-3">
          {Array.from({ length: 6 }, (_, i) => {
            const mon = pokemon[i];
            return (
              <div
                key={i}
                className={cn(
                  "rounded-xl p-2 aspect-square flex flex-col items-center justify-center transition-all",
                  mon ? "glass border border-gray-200" : "border border-dashed border-gray-300 cursor-pointer hover:border-violet-400"
                )}
                onClick={() => !mon && onPickerOpen()}
              >
                {mon ? (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); onRemove(mon.id); }}
                      className="self-end -mt-1 -mr-1 p-0.5 rounded hover:bg-red-100"
                    >
                      <span className="text-xs text-muted-foreground hover:text-red-600">✕</span>
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); onPokemonClick?.(mon.name); }}
                      className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                    >
                      <Image src={mon.sprite} alt={mon.name} width={40} height={40} unoptimized />
                      <span className="text-[9px] font-medium mt-0.5 truncate w-full text-center">{mon.name}</span>
                    </button>
                  </>
                ) : (
                  <span className="text-lg text-gray-300">+</span>
                )}
              </div>
            );
          })}
        </div>

        {pokemon.length < 6 && (
          <button
            onClick={onPickerOpen}
            className="w-full py-2 rounded-xl glass glass-hover text-sm text-muted-foreground hover:text-foreground flex items-center justify-center gap-2 transition-colors"
          >
            {t('teamTester.addPokemon')} <ChevronRight className="w-4 h-4" />
          </button>
        )}

        {pokemon.length > 0 && (
          <button
            onClick={onClear}
            className="w-full mt-2 py-1.5 rounded-xl text-xs text-red-400 hover:text-red-600 hover:bg-red-50 transition-colors flex items-center justify-center gap-1"
          >
            <Trash2 className="w-3 h-3" /> {t('teamTester.clear')}
          </button>
        )}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// BATTLE BOARD  -  Visual VGC battle field analyzer
// ══════════════════════════════════════════════════════════════════════════

// (imports hoisted to file top)

// ── Target sub-cell (one per opponent inside a perTarget move card) ──────────
function TargetSubCell({
  tgt,
  isOpp,
  isStatus,
  isBest,
}: {
  tgt: NonNullable<BattleMoveEntry["perTarget"]>["a"];
  isOpp: boolean;
  isStatus: boolean;
  isBest: boolean;
}) {
  const isImmune = tgt.effectiveness === 0;
  const barColor = tgt.isOHKO
    ? "#ef4444"
    : tgt.is2HKO
    ? "#f97316"
    : tgt.effectiveness >= 2
    ? "#10b981"
    : isOpp
    ? "#a855f7"
    : "#6366f1";

  const cellClass = isBest
    ? isOpp
      ? "flex flex-col gap-0.5 px-1 py-0.5 rounded min-w-0 overflow-hidden ring-1 ring-red-400 dark:ring-red-500 bg-red-50/60 dark:bg-red-900/20"
      : "flex flex-col gap-0.5 px-1 py-0.5 rounded min-w-0 overflow-hidden ring-1 ring-emerald-400 dark:ring-emerald-500 bg-emerald-50/60 dark:bg-emerald-900/20"
    : "flex flex-col gap-0.5 px-1 py-0.5 rounded bg-black/5 dark:bg-white/5 min-w-0 overflow-hidden";

  return (
    <div className={cellClass}>
      <div className="flex items-center gap-0.5 min-w-0">
        {isBest && (
          <span className={cn("text-[7px] font-bold flex-shrink-0", isOpp ? "text-red-500" : "text-emerald-500")}>★</span>
        )}
        <span className="text-[7px] text-muted-foreground/80 font-medium truncate">{tgt.name.split("-")[0]}</span>
      </div>
      {isStatus ? null : isImmune ? (
        <span className="text-[7px] text-muted-foreground/40">✗ Immune</span>
      ) : (
        <>
          <div className="flex items-center gap-0.5">
            <div className="flex-1 h-1 rounded-full bg-gray-100 dark:bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${Math.min(tgt.percent, 100)}%`, backgroundColor: barColor }}
              />
            </div>
            <span className={cn("text-[7px] font-semibold flex-shrink-0 tabular-nums", tgt.koColor)}>
              {tgt.koText}
            </span>
          </div>
          <span className="text-[7px] tabular-nums text-muted-foreground/70 truncate">{tgt.label}</span>
        </>
      )}
    </div>
  );
}

// ── Move cell (grid card) ───────────────────────────────────────────────────
function MoveCell({ move, side }: { move: BattleMoveEntry; side: "mine" | "opp" }) {
  const typeColor = TYPE_COLORS[move.moveType] ?? "#888"; // kept for potential non-type moves
  // use type-bg-* CSS class where possible (all 18 known types)
  const isStatus = move.category === "status";
  const isOpp = side === "opp";
  const hasPerTarget = !!move.perTarget;

  const bgClass = move.isRecommended
    ? isOpp
      ? "bg-red-50/80 dark:bg-red-950/30 border-red-300 dark:border-red-700/50 ring-1 ring-red-200 dark:ring-red-700/30"
      : "bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-700/50 ring-1 ring-emerald-200 dark:ring-emerald-700/30"
    : move.isOHKO
    ? "bg-red-50/40 dark:bg-red-950/10 border-gray-100 dark:border-white/10"
    : move.is2HKO
    ? "bg-orange-50/40 dark:bg-orange-950/10 border-gray-100 dark:border-white/10"
    : "bg-white/50 dark:bg-white/5 border-gray-100 dark:border-white/10";

  // ── Opponent-targeting moves: compact card with two stacked sub-cells ──
  if (hasPerTarget) {
    return (
      <div className={`rounded-lg p-1.5 border flex flex-col gap-0.5 min-w-0 ${bgClass}`}>
        {/* Type badge + priority + recommended star + move name */}
        <div className="flex items-center gap-1 min-w-0">
          <span
            className={cn("flex-shrink-0 px-1 py-px rounded text-[6px] font-bold text-white uppercase leading-none", `type-bg-${move.moveType}`)}
          >
            {move.moveType}
          </span>
          {move.priority < 0 && (
            <span className="flex-shrink-0 text-[7px] text-muted-foreground/50">{move.priority}</span>
          )}
          {move.isRecommended && (
            <span className={cn("text-[8px] flex-shrink-0 font-bold", isOpp ? "text-red-500" : "text-emerald-500")}>★</span>
          )}
          <span className="font-semibold text-[10px] leading-tight truncate">{move.moveName}</span>
        </div>
        {/* Sub-cells side by side, one per opponent */}
        <div className="grid grid-cols-2 gap-0.5">
          <TargetSubCell tgt={move.perTarget!.a} isOpp={isOpp} isStatus={isStatus} isBest={move.perTarget!.best === "a" || move.perTarget!.best === "both"} />
          <TargetSubCell tgt={move.perTarget!.b} isOpp={isOpp} isStatus={isStatus} isBest={move.perTarget!.best === "b" || move.perTarget!.best === "both"} />
        </div>
        {/* Ally damage warning for allAdjacent moves (Earthquake, Bulldoze…) */}
        {move.perTarget!.ally && move.perTarget!.ally.effectiveness > 0 && (
          <div className="flex items-center gap-1 px-1 py-0.5 rounded bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/40">
            <span className="text-[8px] font-bold text-amber-600 dark:text-amber-400 flex-shrink-0">⚠ Ally</span>
            <span className="text-[7px] text-amber-700 dark:text-amber-300 font-medium flex-shrink-0 truncate">{move.perTarget!.ally.name.split("-")[0]}</span>
            <div className="flex-1 h-1 rounded-full bg-amber-100 dark:bg-amber-900/40 overflow-hidden">
              <div className="h-full rounded-full bg-amber-400" style={{ width: `${Math.min(move.perTarget!.ally.percent, 100)}%` }} />
            </div>
            <span className={cn("text-[7px] font-semibold flex-shrink-0 tabular-nums", move.perTarget!.ally.koColor)}>{move.perTarget!.ally.koText !== "—" ? move.perTarget!.ally.koText : `${move.perTarget!.ally.percent}%`}</span>
          </div>
        )}
        {/* Shared effect label (status moves) */}
        {isStatus && move.effectLabel && move.effectLabel !== "–" && (
          <div className="text-[8px] text-muted-foreground/80 leading-tight italic truncate">{move.effectLabel}</div>
        )}
      </div>
    );
  }

  // ── Self / field moves: original compact single-cell layout ────────────
  const isImmune = !isStatus && move.effectiveness === 0 && move.percentHPMax === 0;
  const barColor = move.isOHKO
    ? "#ef4444"
    : move.is2HKO
    ? "#f97316"
    : move.effectiveness >= 2
    ? "#10b981"
    : isOpp
    ? "#a855f7"
    : "#6366f1";

  return (
    <div className={`rounded-lg p-1.5 border flex flex-col gap-0.5 min-w-0 ${bgClass}`}>
      {/* Type badge row */}
      <div className="flex items-center gap-1 min-w-0">
        <span
          className={cn("flex-shrink-0 px-1 py-px rounded text-[6px] font-bold text-white uppercase leading-none", `type-bg-${move.moveType}`)}
        >
          {move.moveType}
        </span>
        {move.priority > 0 && (
          <span className="flex-shrink-0 text-[7px] font-bold text-amber-500">+{move.priority}</span>
        )}
        {move.priority < 0 && (
          <span className="flex-shrink-0 text-[7px] text-muted-foreground/50">{move.priority}</span>
        )}
        <span className="text-[7px] text-muted-foreground ml-auto truncate">
          {move.targetName === "self" ? "→ self" : ""}
        </span>
      </div>

      {/* Move name */}
      <div className="flex items-center gap-0.5 min-w-0">
        {move.isRecommended && (
          <span className={cn("text-[8px] flex-shrink-0 font-bold", isOpp ? "text-red-500" : "text-emerald-500")}>
            ★
          </span>
        )}
        <span className="font-semibold text-[10px] leading-tight truncate">{move.moveName}</span>
      </div>

      {/* Damage / effect */}
      {isStatus ? (
        move.effectLabel ? (
          <div className="text-[8px] text-muted-foreground/80 leading-tight truncate italic">
            {move.effectLabel}
          </div>
        ) : null
      ) : isImmune ? (
        <div className="text-[8px] text-muted-foreground/40">✗ Immune</div>
      ) : (
        <div className="flex items-center gap-1 mt-px">
          <div className="flex-1 h-1 rounded-full bg-gray-100 dark:bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ width: `${Math.min(move.percentHPMax, 100)}%`, backgroundColor: barColor }}
            />
          </div>
          <span className={cn("text-[7px] font-semibold flex-shrink-0 tabular-nums", move.koColor)}>
            {move.koText}
          </span>
        </div>
      )}
    </div>
  );
}

// ── Single Pokémon panel ────────────────────────────────────────────────────
function StageBtn({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center gap-0.5">
      <button
        onClick={() => onChange(Math.max(-6, value - 1))}
        className="w-4 h-4 rounded flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/15 text-muted-foreground text-[10px] leading-none"
      >−</button>
      <span className={cn("w-5 text-center text-[9px] font-mono font-bold tabular-nums",
        value > 0 ? "text-green-500" : value < 0 ? "text-red-500" : "text-muted-foreground/50"
      )}>
        {value === 0 ? "0" : value > 0 ? `+${value}` : `${value}`}
      </span>
      <button
        onClick={() => onChange(Math.min(6, value + 1))}
        className="w-4 h-4 rounded flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/15 text-muted-foreground text-[10px] leading-none"
      >+</button>
    </div>
  );
}

// ── Move picker panel (sub-component to allow hooks) ─────────────────────────
function MovePickerPanel({
  slot,
  monOv,
  onMonOvChange,
}: {
  slot: BattleSlotInfo;
  monOv: MonOverrides;
  onMonOvChange: (patch: Partial<MonOverrides>) => void;
}) {
  // Current 4 moves (from override or from the set)
  const currentMoves: string[] = monOv.moveOverrides
    ? [...monOv.moveOverrides]
    : slot.set.moves.slice(0, 4).concat(["", "", "", ""]).slice(0, 4);

  // Which slot (0-3) is being targeted for replacement
  const [editSlotIdx, setEditSlotIdx] = useState<number | null>(null);

  // All moves from the Pokémon's learnset, sorted alphabetically
  const allMoves = slot.pokemon.moves.map((m) => m.name).sort((a, b) => a.localeCompare(b));

  const setMove = (slotIdx: number, moveName: string) => {
    const next = [...currentMoves] as [string, string, string, string];
    next[slotIdx] = moveName;
    onMonOvChange({ moveOverrides: next });
    setEditSlotIdx(null);
  };

  const resetMoves = () => {
    onMonOvChange({ moveOverrides: undefined });
    setEditSlotIdx(null);
  };

  return (
    <div className="px-2 pb-2 bg-orange-50/40 dark:bg-orange-950/10 border-t border-orange-200 dark:border-orange-800/30">
      <div className={`text-[7px] font-bold uppercase tracking-wider text-orange-400 mb-1.5 pt-1.5`}>
        Custom moves — click a slot to change
      </div>
      {/* 4 move slot buttons */}
      <div className="grid grid-cols-2 gap-1 mb-2">
        {currentMoves.map((moveName, i) => (
          <button
            key={i}
            onClick={() => setEditSlotIdx(editSlotIdx === i ? null : i)}
            className={cn(
              "px-1.5 py-1 rounded-lg border text-[8px] font-medium text-left truncate transition-all",
              editSlotIdx === i
                ? "bg-orange-400 text-white border-orange-500 ring-1 ring-orange-300"
                : moveName
                  ? "bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-foreground hover:border-orange-300"
                  : "bg-white/50 dark:bg-white/[0.03] border-dashed border-gray-300 dark:border-white/10 text-muted-foreground/50",
            )}
          >
            {moveName || `— Slot ${i + 1}`}
            {editSlotIdx === i && <span className="ml-1 opacity-70">▾</span>}
          </button>
        ))}
      </div>

      {/* Move grid — shown when a slot is being edited */}
      {editSlotIdx !== null && (
        <div className="max-h-40 overflow-y-auto rounded-lg border border-orange-200 dark:border-orange-800/40 bg-white dark:bg-white/[0.03] p-1">
          <div className="flex flex-wrap gap-1">
            {allMoves.map((moveName) => (
              <button
                key={moveName}
                onClick={() => setMove(editSlotIdx, moveName)}
                className={cn(
                  "px-1.5 py-0.5 rounded text-[7px] font-medium border transition-all",
                  currentMoves[editSlotIdx] === moveName
                    ? "bg-orange-400 text-white border-orange-500"
                    : "bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-foreground hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:border-orange-300",
                )}
              >
                {moveName}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Reset button */}
      {monOv.moveOverrides && (
        <button
          onClick={resetMoves}
          className="mt-1.5 text-[7px] text-orange-500 hover:text-orange-700 underline"
        >
          ↺ Reset to default moves
        </button>
      )}
    </div>
  );
}

function MonPanel({
  slot,
  side,
  monOv,
  onMonOvChange,
  onSpriteClick,
}: {
  slot: BattleSlotInfo;
  side: "mine" | "opp";
  monOv: MonOverrides;
  onMonOvChange: (patch: Partial<MonOverrides>) => void;
  onSpriteClick: (name: string) => void;
}) {
  const [showCalcdex, setShowCalcdex] = useState(false);
  const [showMovePicker, setShowMovePicker] = useState(false);
  const [showMetaMoves, setShowMetaMoves] = useState(false);
  const isOpp = side === "opp";
  const border = isOpp
    ? "border-red-200 dark:border-red-800/60"
    : "border-blue-200 dark:border-blue-800/60";
  const headerGrad = isOpp
    ? "from-red-50 to-orange-50 dark:from-red-950/40 dark:to-orange-950/30"
    : "from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/30";
  const labelColor = isOpp
    ? "text-red-500 dark:text-red-400"
    : "text-emerald-600 dark:text-emerald-400";

  const hp = monOv.hpPct ?? 100;
  const maxHp = slot.actualStats.hp;
  const currentHp = Math.round(maxHp * hp / 100);

  // Local draft for HP text input — avoids recalc-on-every-keystroke
  const [hpDraft, setHpDraft] = useState<string | null>(null);

  const commitHp = (raw: string) => {
    const val = parseInt(raw, 10);
    if (!isNaN(val)) {
      const clamped = Math.max(1, Math.min(maxHp, val));
      onMonOvChange({ hpPct: (clamped / maxHp) * 100 });
    }
    setHpDraft(null);
  };

  const stepHp = (delta: number) => {
    const next = Math.max(1, Math.min(maxHp, currentHp + delta));
    onMonOvChange({ hpPct: (next / maxHp) * 100 });
  };

  return (
    <div className={`rounded-2xl border ${border} overflow-hidden flex flex-col`}>
      {/* Header: sprite + info */}
      <div className={`bg-gradient-to-br ${headerGrad} px-3 pt-3 pb-2`}>
        <div className="flex items-start gap-2">
          <button
            title={`View ${slot.pokemon.name}`}
            onClick={() => onSpriteClick(slot.pokemon.name)}
            className="hover:scale-110 transition-transform flex-shrink-0"
          >
            <Image
              src={slot.pokemon.sprite}
              alt={slot.pokemon.name}
              width={56}
              height={56}
              unoptimized
              className="drop-shadow"
            />
          </button>
          <div className="flex-1 min-w-0 pt-0.5">
            <div className="font-bold text-[12px] truncate leading-tight">{slot.pokemon.name}</div>
            <div className="flex flex-wrap gap-0.5 mt-1 items-center">
              {slot.types.map((t) => (
                <span
                  key={t}
                  className={cn("px-1 py-px rounded text-[7px] font-bold text-white uppercase leading-none", `type-bg-${t}`)}
                >
                  {t}
                </span>
              ))}
              {/* Status condition badge */}
              {(monOv.status || monOv.isBurned) && (() => {
                const st = monOv.status ?? (monOv.isBurned ? "burn" : null);
                const STATUS_BADGE: Record<string, { label: string; cls: string }> = {
                  burn:           { label: "BRN", cls: "bg-red-500 text-white" },
                  paralysis:      { label: "PAR", cls: "bg-yellow-400 text-black" },
                  sleep:          { label: "SLP", cls: "bg-indigo-500 text-white" },
                  freeze:         { label: "FRZ", cls: "bg-cyan-400 text-black" },
                  poison:         { label: "PSN", cls: "bg-purple-500 text-white" },
                  "badly-poison": { label: "TOX", cls: "bg-fuchsia-600 text-white" },
                };
                const badge = st ? STATUS_BADGE[st] : null;
                if (!badge) return null;
                return (
                  <span className={cn("px-1 py-px rounded text-[7px] font-bold leading-none", badge.cls)}>
                    {badge.label}
                  </span>
                );
              })()}
            </div>

            {/* Form buttons — Base always visible, Mega only if available */}
            <div className="flex flex-wrap gap-1 mt-1.5">
              {/* Base form button */}
              <button
                onClick={() => onMonOvChange({ megaFormIndex: -1 })}
                title="Base form"
                className={cn(
                  "px-1.5 py-0.5 rounded text-[8px] font-bold border transition-all",
                  slot.activeMegaIndex === -1
                    ? "bg-gray-200 dark:bg-white/20 border-gray-400 dark:border-white/40 text-foreground"
                    : "border-gray-200 dark:border-white/10 text-muted-foreground hover:border-gray-400",
                )}
              >
                Base
              </button>
              {slot.megaOptions.map((mega) => {
                const isActive = slot.activeMegaIndex === mega.formIndex;
                const suffix = mega.name.endsWith(" X") ? "X"
                  : mega.name.endsWith(" Y") ? "Y"
                  : mega.name.endsWith(" Z") ? "Z"
                  : "";
                return (
                  <button
                    key={mega.formIndex}
                    title={mega.name}
                    onClick={() => onMonOvChange({ megaFormIndex: isActive ? -1 : mega.formIndex })}
                    className={cn(
                      "px-1.5 py-0.5 rounded text-[8px] font-bold border transition-all",
                      isActive
                        ? "bg-violet-600 text-white border-violet-700 shadow-sm shadow-violet-400/30"
                        : "border-violet-200 dark:border-violet-500/30 text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-500/10",
                    )}
                  >
                    ◆ Mega{suffix ? ` ${suffix}` : ""}
                  </button>
                );
              })}
            </div>

            <div className="mt-1 space-y-px">
              <div className="text-[9px] text-muted-foreground">
                ⚡ <span className="font-semibold">{slot.speed}</span>
                {slot.speedNote && (
                  <span className="ml-1.5 text-sky-600 dark:text-sky-400 font-semibold text-[8px]">
                    ({slot.speedNote})
                  </span>
                )}
                {slot.priorityTag && (
                  <span className="ml-2 text-amber-600 dark:text-amber-400 font-semibold">
                    ▲ {slot.priorityTag}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-1 mt-0.5">
                <span className="text-[8px] text-muted-foreground/70 truncate">{slot.ability}</span>
                {slot.fakeOutImmune && (
                  <span
                    className="text-[6px] font-bold uppercase px-1 py-px rounded leading-none bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 border border-purple-200 dark:border-purple-700/40"
                    title="Ghost-type: immune to Normal-type Fake Out"
                  >
                    FO Immune
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* HP bar (always visible) */}
        <div className="mt-2 flex items-center gap-1.5">
          <span className="text-[8px] text-muted-foreground w-5">HP</span>
          <div className="flex-1 h-1.5 rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
            <div
              className={cn("h-full rounded-full transition-all", hp > 50 ? "bg-green-400" : hp > 25 ? "bg-yellow-400" : "bg-red-400")}
              style={{ width: `${hp}%` }}
            />
          </div>
          {!isOpp ? (
            <div className="flex items-center gap-0.5 w-24 justify-end">
              <button
                title="−1 HP"
                onClick={() => stepHp(-1)}
                className="w-4 h-4 rounded text-[10px] font-bold leading-none flex items-center justify-center bg-black/5 dark:bg-white/10 hover:bg-red-100 dark:hover:bg-red-900/30 text-muted-foreground hover:text-red-500 transition-colors flex-shrink-0"
              >−</button>
              <input
                type="text"
                inputMode="numeric"
                title="Current HP"
                value={hpDraft ?? currentHp}
                onChange={(e) => setHpDraft(e.target.value)}
                onBlur={(e) => commitHp(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") commitHp((e.target as HTMLInputElement).value);
                  if (e.key === "Escape") setHpDraft(null);
                }}
                className="w-9 text-center text-[8px] font-medium rounded bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-1 focus:ring-green-400 tabular-nums py-px"
              />
              <span className="text-[8px] text-muted-foreground/50 tabular-nums flex-shrink-0">/{maxHp}</span>
              <button
                title="+1 HP"
                onClick={() => stepHp(1)}
                className="w-4 h-4 rounded text-[10px] font-bold leading-none flex items-center justify-center bg-black/5 dark:bg-white/10 hover:bg-green-100 dark:hover:bg-green-900/30 text-muted-foreground hover:text-green-500 transition-colors flex-shrink-0"
              >+</button>
            </div>
          ) : (
            <span className="text-[8px] text-muted-foreground w-7 text-right tabular-nums">{hp}%</span>
          )}
        </div>
        <input
          type="range" min={1} max={100} value={hp}
          title="HP percentage"
          onChange={(e) => onMonOvChange({ hpPct: Number(e.target.value) })}
          className={cn("w-full mt-1 h-1", isOpp ? "accent-red-500" : "accent-blue-500")}
        />
      </div>

      {/* Move grid — always shows all 4 moves in original slot order */}
      <div className="p-2 bg-white/30 dark:bg-black/10">
        <div className={`text-[8px] font-bold uppercase tracking-wider mb-1.5 ${labelColor}`}>
          {isOpp
            ? slot.topMoves.find(m => m.isRecommended)?.isProtection
              ? "🛡 Likely protects"
              : "⚠ Likely attacks"
            : "★ Do this"}
        </div>
        {slot.topMoves.length === 0 ? (
          <div className="text-[10px] text-muted-foreground italic py-2 text-center">—</div>
        ) : (
          <div className="grid grid-cols-2 gap-1.5">
            {slot.topMoves.map((move, i) => (
              <MoveCell key={i} move={move} side={side} />
            ))}
          </div>
        )}
      </div>

      {/* Meta moves toggle */}
      {slot.metaMoves.length > 0 && (
        <>
          <button
            onClick={() => setShowMetaMoves((v) => !v)}
            className="w-full px-3 py-1.5 flex items-center justify-between text-[9px] font-semibold text-muted-foreground hover:text-foreground bg-gray-50/60 dark:bg-white/[0.03] border-t border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/[0.06] transition-colors"
          >
            <span className="flex items-center gap-1.5">
              📊 Meta moves
              <span className="text-[7px] text-muted-foreground/60">({slot.metaMoves[0]?.total ?? 0} sets)</span>
            </span>
            <ChevronRight className={cn("w-3 h-3 transition-transform", showMetaMoves && "rotate-90")} />
          </button>
          {showMetaMoves && (
            <div className="px-2 pb-2 bg-gray-50/60 dark:bg-white/[0.03] border-t border-gray-200 dark:border-white/10">
              <div className="flex flex-col gap-px pt-1.5">
                {slot.metaMoves.map((m) => {
                  const pct = Math.round(m.frequency * 100);
                  const barColor = pct === 100
                    ? "#6366f1"
                    : pct >= 67
                    ? "#8b5cf6"
                    : pct >= 34
                    ? "#a78bfa"
                    : "#c4b5fd";
                  return (
                    <div key={m.moveName} className="flex items-center gap-1.5">
                      <span className="text-[8px] flex-1 truncate text-foreground/80">{m.moveName}</span>
                      <div className="w-12 h-1 rounded-full bg-gray-100 dark:bg-white/10 overflow-hidden flex-shrink-0">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${pct}%`, backgroundColor: barColor }}
                        />
                      </div>
                      <span className="text-[7px] text-muted-foreground w-6 text-right tabular-nums flex-shrink-0">
                        {pct}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}

      {/* Move picker toggle */}
      <button
        onClick={() => setShowMovePicker((v) => !v)}
        className="w-full px-3 py-1.5 flex items-center justify-between text-[9px] font-semibold text-muted-foreground hover:text-foreground bg-gray-50/60 dark:bg-white/[0.03] border-t border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/[0.06] transition-colors"
      >
        <span className="flex items-center gap-1.5">
          ✎ Edit moves
          {monOv.moveOverrides && (
            <span className="px-1 py-px rounded-full bg-orange-400 text-white text-[7px]">●</span>
          )}
        </span>
        <ChevronRight className={cn("w-3 h-3 transition-transform", showMovePicker && "rotate-90")} />
      </button>

      {showMovePicker && (
        <MovePickerPanel
          slot={slot}
          monOv={monOv}
          onMonOvChange={onMonOvChange}
        />
      )}

      {/* Calcdex toggle footer */}
      <button
        onClick={() => setShowCalcdex((v) => !v)}
        className="w-full px-3 py-1.5 flex items-center justify-between text-[9px] font-semibold text-muted-foreground hover:text-foreground bg-gray-50/60 dark:bg-white/[0.03] border-t border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/[0.06] transition-colors"
      >
        <span className="flex items-center gap-1.5">
          <Shield className="w-3 h-3" /> Calcdex
          {(monOv.atkStage || monOv.defStage || monOv.spAtkStage || monOv.spDefStage || monOv.spdStage || monOv.isBurned || monOv.status || monOv.helpingHand || (monOv.megaFormIndex != null && monOv.megaFormIndex >= 0)) && (
            <span className="px-1 py-px rounded-full bg-violet-500 text-white text-[7px]">●</span>
          )}
        </span>
        <ChevronRight className={cn("w-3 h-3 transition-transform", showCalcdex && "rotate-90")} />
      </button>

      {showCalcdex && (
        <div className="px-3 py-2.5 border-t border-gray-200 dark:border-white/10 space-y-2.5 bg-gray-50/60 dark:bg-white/[0.03]">

          {/* ── Actual stat spread ─────────────────────────────────── */}
          <div>
            <div className="text-[8px] font-bold uppercase tracking-wider text-muted-foreground mb-1">Stats (Lv.50)</div>
            <div className="grid grid-cols-3 gap-x-2 gap-y-0.5">
              {([
                ["HP",  slot.actualStats.hp,      "#6bce68"],
                ["Atk", slot.actualStats.attack,   "#f56c2d"],
                ["Def", slot.actualStats.defense,  "#e4cd51"],
                ["SpA", slot.actualStats.spAtk,    "#8eb4e4"],
                ["SpD", slot.actualStats.spDef,    "#97cf6e"],
                ["Spe", slot.actualStats.speed,    "#e87ee3"],
              ] as [string, number, string][]).map(([label, val, color]) => {
                const barPct = Math.min(100, Math.round((val / 255) * 100));
                return (
                  <div key={label} className="flex items-center gap-1">
                    <span className="text-[8px] text-muted-foreground w-6 flex-shrink-0">{label}</span>
                    <div className="flex-1 h-1.5 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${barPct}%`, backgroundColor: color }} />
                    </div>
                    <span className="text-[8px] tabular-nums text-foreground w-6 text-right flex-shrink-0">{val}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Stat stages ────────────────────────────────────────── */}
          <div>
            <div className="text-[8px] font-bold uppercase tracking-wider text-muted-foreground mb-1">Stages</div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1">
              {([
                ["Atk", "atkStage"],
                ["Def", "defStage"],
                ["SpA", "spAtkStage"],
                ["SpD", "spDefStage"],
                ["Spe", "spdStage"],
              ] as const).map(([label, key]) => (
                <div key={key} className="flex items-center gap-1">
                  <span className="text-[9px] text-muted-foreground w-6">{label}</span>
                  <StageBtn
                    value={(monOv[key] as number | undefined) ?? 0}
                    onChange={(v) => onMonOvChange({ [key]: v })}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── Status condition ────────────────────────────────────── */}
          <div>
            <div className="text-[8px] font-bold uppercase tracking-wider text-muted-foreground mb-1">Status</div>
            <div className="flex flex-wrap gap-1">
              {([
                ["BRN", "burn",          "bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700/50 text-red-700 dark:text-red-300"],
                ["PAR", "paralysis",     "bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700/50 text-yellow-700 dark:text-yellow-300"],
                ["SLP", "sleep",         "bg-indigo-100 dark:bg-indigo-900/30 border-indigo-300 dark:border-indigo-700/50 text-indigo-700 dark:text-indigo-300"],
                ["FRZ", "freeze",        "bg-cyan-100 dark:bg-cyan-900/30 border-cyan-300 dark:border-cyan-700/50 text-cyan-700 dark:text-cyan-300"],
                ["PSN", "poison",        "bg-purple-100 dark:bg-purple-900/30 border-purple-300 dark:border-purple-700/50 text-purple-700 dark:text-purple-300"],
                ["TOX", "badly-poison",  "bg-fuchsia-100 dark:bg-fuchsia-900/30 border-fuchsia-300 dark:border-fuchsia-700/50 text-fuchsia-700 dark:text-fuchsia-300"],
              ] as [string, string, string][]).map(([label, val, activeClass]) => {
                const active = (monOv.status === val) || (val === "burn" && monOv.isBurned);
                return (
                  <button
                    key={val}
                    onClick={() => {
                      const newStatus = active ? null : val as MonOverrides["status"];
                      onMonOvChange({ status: newStatus, isBurned: newStatus === "burn" });
                    }}
                    className={cn(
                      "px-2 py-0.5 rounded-full border text-[9px] font-bold transition-colors",
                      active ? activeClass : "border-border text-muted-foreground hover:border-violet-300 hover:text-violet-500"
                    )}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Other toggles ───────────────────────────────────────── */}
          <div className="flex flex-wrap gap-1">
            <button
              onClick={() => onMonOvChange({ helpingHand: !monOv.helpingHand })}
              className={cn(
                "px-2 py-0.5 rounded-full border text-[9px] font-semibold transition-colors",
                monOv.helpingHand
                  ? "bg-violet-100 dark:bg-violet-500/20 border-violet-300 dark:border-violet-500/40 text-violet-700 dark:text-violet-300"
                  : "border-border text-muted-foreground hover:border-violet-300 hover:text-violet-500"
              )}
            >
              🤝 HH
            </button>

            {/* Reset all */}
            {(monOv.atkStage || monOv.defStage || monOv.spAtkStage || monOv.spDefStage || monOv.spdStage || monOv.isBurned || monOv.status || monOv.helpingHand || (monOv.megaFormIndex != null && monOv.megaFormIndex >= 0)) && (
              <button
                onClick={() => onMonOvChange({ atkStage: 0, defStage: 0, spAtkStage: 0, spDefStage: 0, spdStage: 0, isBurned: false, status: null, helpingHand: false, megaFormIndex: -1 })}
                className="px-2 py-0.5 rounded-full border border-gray-200 dark:border-white/10 text-[9px] text-muted-foreground hover:text-red-500 hover:border-red-300 transition-colors"
              >
                ↺ Reset
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Speed order strip ───────────────────────────────────────────────────────
function SpeedStrip({
  speedOrder,
  hasTrickRoom,
}: {
  speedOrder: BattleBoardData["speedOrder"];
  hasTrickRoom: boolean;
}) {
  return (
    <div className="w-full py-2 px-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center gap-2">
      <span className="text-[9px] font-bold text-muted-foreground flex-shrink-0 uppercase tracking-wide">
        {hasTrickRoom ? "🔮 TR" : "⚡"}
      </span>
      <div className="flex items-center gap-1 flex-wrap">
        {speedOrder.map((mon, i) => (
          <div key={`${i}-${mon.name}`} className="flex items-center gap-0.5">
            {i > 0 && <span className="text-[10px] text-muted-foreground">›</span>}
            <div
              className={cn(
                "flex items-center gap-1 px-1.5 py-0.5 rounded-lg text-[9px] font-bold",
                mon.isOurs
                  ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                  : "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
              )}
            >
              <Image src={mon.sprite} alt={mon.name} width={16} height={16} unoptimized className="rounded-full" />
              <span className="truncate max-w-[48px]">{mon.name.split("-")[0]}</span>
              <span className="opacity-70">
                {mon.hasTailwind ? (
                  <><span className="line-through">{mon.speed}</span>→{mon.effectiveSpeed}</>
                ) : mon.effectiveSpeed}
              </span>
              {mon.hasTailwind && <span className="text-cyan-500 dark:text-cyan-400">💨</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Field picker ─────────────────────────────────────────────────────────────
/**
 * Slot-explicit field picker: two clearly labelled slot buttons at the top,
 * click a slot to "target" it, then click any Pokémon below to assign it.
 * Clicking an already-active Pokémon in the non-targeted slot swaps it into
 * the targeted slot. The two slots always stay filled.
 */
function FieldPicker({
  label,
  color,
  allPokemon,
  fieldIdx,
  onSwap,
}: {
  label: string;
  color: "blue" | "red";
  allPokemon: ChampionsPokemon[];
  fieldIdx: [number, number];
  onSwap: (idx: [number, number]) => void;
}) {
  // Which slot is currently being targeted for replacement (0 = slot1, 1 = slot2, null = none)
  const [targetSlot, setTargetSlot] = useState<0 | 1 | null>(null);

  const activeClass = color === "blue"
    ? "bg-blue-500 text-white border-blue-600"
    : "bg-red-500 text-white border-red-600";
  const targetClass = "bg-violet-500 text-white border-violet-600 ring-2 ring-violet-300 ring-offset-1";

  return (
    <div>
      <div className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground mb-2">{label}</div>

      {/* Slot buttons — click to target a slot for replacement */}
      <div className="flex gap-2 mb-3">
        {([0, 1] as const).map((slotIdx) => {
          const monIdx = fieldIdx[slotIdx];
          const mon = allPokemon[monIdx];
          const isTargeted = targetSlot === slotIdx;
          return (
            <button
              key={slotIdx}
              onClick={() => setTargetSlot(isTargeted ? null : slotIdx)}
              className={cn(
                "flex items-center gap-1.5 px-2 py-1.5 rounded-xl border text-[9px] font-semibold transition-all flex-1",
                isTargeted ? targetClass : activeClass,
              )}
            >
              <span className="text-[8px] opacity-70">Slot {slotIdx + 1}</span>
              {mon && <Image src={mon.sprite} alt={mon.name} width={20} height={20} unoptimized />}
              <span className="truncate">{mon?.name.split("-")[0] ?? "—"}</span>
              {isTargeted && <span className="ml-auto text-[8px] opacity-80">✎</span>}
            </button>
          );
        })}
      </div>

      {/* Pokémon grid */}
      <div className="flex flex-wrap gap-1.5">
        {allPokemon.map((p, i) => {
          const inSlot0 = fieldIdx[0] === i;
          const inSlot1 = fieldIdx[1] === i;
          const inAnySlot = inSlot0 || inSlot1;
          const mySlot: 0 | 1 | null = inSlot0 ? 0 : inSlot1 ? 1 : null;
          return (
            <button
              key={p.name}
              title={p.name}
              onClick={() => {
                if (targetSlot === null) {
                  // No slot targeted: clicking the active slot selects it as target
                  if (inAnySlot) {
                    setTargetSlot(mySlot!);
                  } else {
                    // Clicking bench mon: put it in slot 1 (legacy behaviour)
                    onSwap([i, fieldIdx[0]]);
                  }
                } else {
                  // Slot targeted: put this mon into the targeted slot
                  if (i === fieldIdx[targetSlot]) {
                    // Clicked the mon already in the target slot → deselect
                    setTargetSlot(null);
                    return;
                  }
                  const newIdx: [number, number] = [...fieldIdx] as [number, number];
                  // If the mon is already in the other slot, swap the two slots
                  const otherSlot = targetSlot === 0 ? 1 : 0;
                  if (newIdx[otherSlot] === i) {
                    // Swap
                    newIdx[targetSlot] = i;
                    newIdx[otherSlot] = fieldIdx[targetSlot];
                  } else {
                    newIdx[targetSlot] = i;
                  }
                  onSwap(newIdx);
                  setTargetSlot(null);
                }
              }}
              className={cn(
                "relative flex flex-col items-center gap-0.5 p-1.5 rounded-xl border text-[8px] font-medium transition-all",
                targetSlot !== null && !inAnySlot
                  ? "ring-1 ring-violet-300 hover:bg-violet-50 dark:hover:bg-violet-900/20 border-violet-200 dark:border-violet-700/40 bg-white/80 dark:bg-white/5 text-foreground"
                  : inAnySlot
                    ? color === "blue"
                      ? "bg-blue-500 text-white border-blue-600 shadow-sm scale-105"
                      : "bg-red-500 text-white border-red-600 shadow-sm scale-105"
                    : "bg-white/80 dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-violet-300 text-muted-foreground",
              )}
            >
              <Image src={p.sprite} alt={p.name} width={28} height={28} unoptimized />
              <span className="max-w-[50px] truncate text-center leading-tight">{p.name.split("-")[0]}</span>
              {inAnySlot && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[7px] font-bold flex items-center justify-center bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow border border-gray-200 dark:border-white/20">
                  {(mySlot! + 1)}
                </span>
              )}
            </button>
          );
        })}
      </div>
      {targetSlot !== null && (
        <p className="text-[8px] text-violet-500 mt-1.5 animate-pulse">
          Click a Pokémon to place it in Slot {targetSlot + 1}
        </p>
      )}
    </div>
  );
}

// ── Team prediction ──────────────────────────────────────────────────────────
/**
 * Given the opponent's full team and which Pokémon are currently on the field,
 * returns the bench Pokémon (not on field) ranked by how likely they are to
 * be brought in, based on:
 *   1. Co-usage score: how often each bench mon appears as a bestPartner with
 *      either of the leads in the simulation data (SIM_POKEMON.bestPartners).
 *   2. Fallback: TOURNAMENT_USAGE bringRate when no sim pair data exists.
 *
 * Only Pokémon actually in the opponent's team are shown.
 */
function predictOpponentTeam(
  allPokemon: ChampionsPokemon[],
  fieldIdx: [number, number],
): Array<{ pokemon: ChampionsPokemon; score: number; label: string }> {
  const [i1, i2] = fieldIdx;
  const lead1 = allPokemon[i1];
  const lead2 = allPokemon[i2];
  if (!lead1 || !lead2) return [];

  // Bench = everyone NOT currently on field
  const bench = allPokemon.filter((_, i) => i !== i1 && i !== i2);
  if (bench.length === 0) return [];

  // Build partner score from SIM_POKEMON.bestPartners
  // bestPartners is [{name, winRate, games}] — use winRate*games as weight
  const pairScore = (benchMon: ChampionsPokemon, lead: ChampionsPokemon): number => {
    const simKey = String(benchMon.id);
    const simData = SIM_POKEMON[simKey];
    if (!simData) return 0;
    const partner = simData.bestPartners.find(
      (p) => p.name.toLowerCase() === lead.name.toLowerCase()
    );
    if (!partner) return 0;
    // Normalise: winRate 50-100, games as weight
    return (partner.winRate - 50) * partner.games;
  };

  const bringRate = (mon: ChampionsPokemon): number => {
    const usage = TOURNAMENT_USAGE.find((u) => u.pokemonId === mon.id);
    return usage?.bringRate ?? 50;
  };

  return bench
    .map((mon) => {
      const s1 = pairScore(mon, lead1);
      const s2 = pairScore(mon, lead2);
      const simScore = s1 + s2;
      // Fallback to bringRate when no pair data
      const finalScore = simScore > 0 ? simScore : bringRate(mon);
      // Label: show which lead they pair best with
      const hasPairData = s1 > 0 || s2 > 0;
      const label = hasPairData
        ? `pairs w/ ${s1 >= s2 ? lead1.name.split("-")[0] : lead2.name.split("-")[0]}`
        : `${Math.round(bringRate(mon))}% bring rate`;
      return { pokemon: mon, score: finalScore, label };
    })
    .sort((a, b) => b.score - a.score);
}

// ── Slot advice computation ─────────────────────────────────────────────────
const PROTECT_MOVES = new Set([
  "Protect", "Detect", "King's Shield", "Spiky Shield", "Baneful Bunker",
  "Max Guard", "Silk Trap", "Burning Bulwark", "Obstruct",
]);

type SlotAdvice = {
  action: "protect" | "switch" | "attack" | "support";
  urgency: "high" | "medium" | "low";
  reason: string;
  detail: string;
};

function computeSlotAdvice(
  mySlot: BattleSlotInfo,
  allySlot: BattleSlotInfo,
  oppSlot1: BattleSlotInfo,
  oppSlot2: BattleSlotInfo,
  myHpPct: number,
): SlotAdvice {
  const myName = mySlot.pokemon.name;

  // Incoming threats from each opponent to THIS mon (% of max HP)
  const threatsOpp1 = oppSlot1.topMoves.filter(m => m.targetName === myName && m.category !== "status");
  const threatsOpp2 = oppSlot2.topMoves.filter(m => m.targetName === myName && m.category !== "status");

  const maxThreatOpp1 = threatsOpp1.reduce((max, m) => Math.max(max, m.percentHPMax), 0);
  const maxThreatOpp2 = threatsOpp2.reduce((max, m) => Math.max(max, m.percentHPMax), 0);

  const opp1OHKOs = maxThreatOpp1 >= myHpPct;
  const opp2OHKOs = maxThreatOpp2 >= myHpPct;
  const opp1BigThreat = maxThreatOpp1 >= myHpPct * 0.6;
  const opp2BigThreat = maxThreatOpp2 >= myHpPct * 0.6;

  // My outgoing damage to each opponent
  const myOHKOvsOpp1 = mySlot.topMoves.some(m => m.isOHKO && m.targetName === oppSlot1.pokemon.name);
  const myOHKOvsOpp2 = mySlot.topMoves.some(m => m.isOHKO && m.targetName === oppSlot2.pokemon.name);

  // Ally outgoing
  const allyOHKOvsOpp1 = allySlot.topMoves.some(m => m.isOHKO && m.targetName === oppSlot1.pokemon.name);
  const allyOHKOvsOpp2 = allySlot.topMoves.some(m => m.isOHKO && m.targetName === oppSlot2.pokemon.name);

  const hasProtect = mySlot.set.moves.some(m => PROTECT_MOVES.has(m));

  // ── Decision tree ────────────────────────────────────────────────────────

  // Both opponents OHKO me
  if (opp1OHKOs && opp2OHKOs) {
    if (hasProtect) {
      return {
        action: "protect", urgency: "high",
        reason: "Entrambi gli avversari possono OHKOarti",
        detail: "Usa Protect per sopravvivere al turno mentre il tuo alleato gestisce la minaccia",
      };
    }
    return {
      action: "switch", urgency: "high",
      reason: "Entrambi gli avversari possono OHKOarti",
      detail: "Cambia con un Pokémon con matchup migliore — non puoi sopravvivere in campo",
    };
  }

  // One OHKOs me, and my ally can remove that threat this turn
  if (opp1OHKOs && allyOHKOvsOpp1) {
    return {
      action: "protect", urgency: "high",
      reason: `${oppSlot1.pokemon.name} può OHKOarti`,
      detail: `Il tuo alleato ${allySlot.pokemon.name} può eliminarlo — usa Protect per sopravvivere`,
    };
  }
  if (opp2OHKOs && allyOHKOvsOpp2) {
    return {
      action: "protect", urgency: "high",
      reason: `${oppSlot2.pokemon.name} può OHKOarti`,
      detail: `Il tuo alleato ${allySlot.pokemon.name} può eliminarlo — usa Protect per sopravvivere`,
    };
  }

  // I can OHKO something → attack
  if (myOHKOvsOpp1) {
    const mv = mySlot.topMoves.find(m => m.isOHKO && m.targetName === oppSlot1.pokemon.name);
    return {
      action: "attack", urgency: "high",
      reason: `Puoi OHKOare ${oppSlot1.pokemon.name}`,
      detail: `Usa ${mv?.moveName ?? "la tua mossa migliore"} per eliminarlo`,
    };
  }
  if (myOHKOvsOpp2) {
    const mv = mySlot.topMoves.find(m => m.isOHKO && m.targetName === oppSlot2.pokemon.name);
    return {
      action: "attack", urgency: "high",
      reason: `Puoi OHKOare ${oppSlot2.pokemon.name}`,
      detail: `Usa ${mv?.moveName ?? "la tua mossa migliore"} per eliminarlo`,
    };
  }

  // One OHKOs me, can't respond well → protect if possible
  if (opp1OHKOs || opp2OHKOs) {
    const killer = opp1OHKOs ? oppSlot1 : oppSlot2;
    if (hasProtect) {
      return {
        action: "protect", urgency: "medium",
        reason: `${killer.pokemon.name} può OHKOarti`,
        detail: "Considera Protect per guadagnare un turno — aspetta il momento migliore per attaccare",
      };
    }
    return {
      action: "switch", urgency: "medium",
      reason: `${killer.pokemon.name} può OHKOarti`,
      detail: "Considera il cambio se hai un Pokémon con resistenza al tipo della mossa in arrivo",
    };
  }

  // Heavy combined pressure
  if (opp1BigThreat && opp2BigThreat) {
    if (hasProtect) {
      return {
        action: "protect", urgency: "medium",
        reason: "Pressione combinata elevata",
        detail: `${oppSlot1.pokemon.name} + ${oppSlot2.pokemon.name} coprono ${Math.round(maxThreatOpp1 + maxThreatOpp2)}% HP totale — considera Protect`,
      };
    }
  }

  // Default: attack with best move
  const bestDmgMove = mySlot.topMoves
    .filter(m => m.category !== "status" && !PROTECT_MOVES.has(m.moveName))
    .sort((a, b) => b.percentHPMax - a.percentHPMax)[0];

  if (bestDmgMove) {
    const tgt = bestDmgMove.targetName !== "–" ? ` su ${bestDmgMove.targetName}` : "";
    return {
      action: "attack", urgency: "low",
      reason: "Situazione stabile — attacca",
      detail: `${bestDmgMove.moveName}${tgt} (${bestDmgMove.percentHPMax}% HP max)`,
    };
  }

  return {
    action: "support", urgency: "low",
    reason: "Considera mosse di supporto",
    detail: "Nessun danno rilevante — usa setup, redirect o supporto all'alleato",
  };
}

// ── Main component ──────────────────────────────────────────────────────────
function StrategyFlowchart({
  team1Pokemon,
  team1Sets,
  team2Pokemon,
  team2Sets,
  bestLead,
  winRate,
  onPokemonClick,
}: {
  team1Pokemon: ChampionsPokemon[];
  team1Sets: CommonSet[];
  team2Pokemon: ChampionsPokemon[];
  team2Sets: CommonSet[];
  bestLead: LeadComboResult | undefined;
  winRate: number;
  onPokemonClick: (name: string, team: 1 | 2) => void;
}) {
  const [myFieldIdx, setMyFieldIdx] = useState<[number, number]>([0, 1]);
  const [oppFieldIdx, setOppFieldIdx] = useState<[number, number]>([0, 1]);
  const [showPicker, setShowPicker] = useState(false);

  // Field state overrides
  const [manualWeather, setManualWeather] = useState<string | null | undefined>(undefined);
  const [manualTR, setManualTR] = useState<boolean | undefined>(undefined);
  const [myTailwind, setMyTailwind] = useState(false);
  const [oppTailwind, setOppTailwind] = useState(false);

  // Per-mon calcdex overrides
  const [ovMyMon1, setOvMyMon1] = useState<MonOverrides>({});
  const [ovMyMon2, setOvMyMon2] = useState<MonOverrides>({});
  const [ovOppMon1, setOvOppMon1] = useState<MonOverrides>({});
  const [ovOppMon2, setOvOppMon2] = useState<MonOverrides>({});

  // Reset per-mon overrides when field slots change
  useEffect(() => { setTimeout(() => { setOvMyMon1({}); setOvMyMon2({}); }, 0); }, [myFieldIdx]);
  useEffect(() => { setTimeout(() => { setOvOppMon1({}); setOvOppMon2({}); }, 0); }, [oppFieldIdx]);

  // Default my leads from bestLead recommendation
  useEffect(() => {
    if (!bestLead || team1Pokemon.length < 2) return;
    const i1 = team1Pokemon.findIndex((p) => p.name === bestLead.lead1);
    const i2 = team1Pokemon.findIndex((p) => p.name === bestLead.lead2);
    if (i1 >= 0 && i2 >= 0 && i1 !== i2) setTimeout(() => setMyFieldIdx([i1, i2]), 0);
  }, [bestLead, team1Pokemon]);

  const fieldOverrides = useMemo<FieldOverrides>(() => ({
    ...(manualWeather !== undefined ? { weather: manualWeather } : {}),
    ...(manualTR !== undefined ? { trickRoom: manualTR } : {}),
    myTailwind,
    oppTailwind,
    myMon1: ovMyMon1,
    myMon2: ovMyMon2,
    oppMon1: ovOppMon1,
    oppMon2: ovOppMon2,
  }), [manualWeather, manualTR, myTailwind, oppTailwind, ovMyMon1, ovMyMon2, ovOppMon1, ovOppMon2]);

  const board = useMemo(() => {
    if (team1Pokemon.length < 2 || team2Pokemon.length < 2) return null;
    const [a, b] = myFieldIdx;
    const [c, d] = oppFieldIdx;
    const m1 = team1Pokemon[a], m2 = team1Pokemon[b];
    const o1 = team2Pokemon[c], o2 = team2Pokemon[d];
    const s1 = team1Sets[a], s2 = team1Sets[b];
    const os1 = team2Sets[c], os2 = team2Sets[d];
    if (!m1 || !m2 || !o1 || !o2 || !s1 || !s2 || !os1 || !os2) return null;
    return computeBattleBoard(m1, s1, m2, s2, o1, os1, o2, os2, winRate, fieldOverrides);
  }, [team1Pokemon, team1Sets, team2Pokemon, team2Sets, myFieldIdx, oppFieldIdx, winRate, fieldOverrides]);

  const handleSpriteClick = (name: string) => {
    if (team1Pokemon.some((p) => p.name === name)) onPokemonClick(name, 1);
    else if (team2Pokemon.some((p) => p.name === name)) onPokemonClick(name, 2);
  };

  if (!board) return null;

  const winPct = Math.round(board.winRate);
  const winBarColor =
    winPct >= 55 ? "bg-emerald-500" : winPct >= 45 ? "bg-amber-400" : "bg-red-500";
  const winTextColor =
    winPct >= 55
      ? "text-emerald-600 dark:text-emerald-400"
      : winPct >= 45
      ? "text-amber-600 dark:text-amber-400"
      : "text-red-600 dark:text-red-400";

  // Weather options
  const WEATHER_OPTIONS: Array<{ key: string; label: string; emoji: string; color: string; activeClass: string }> = [
    { key: "sun",  label: "Sun",  emoji: "☀",  color: "text-amber-600",   activeClass: "bg-amber-400 text-white border-amber-500" },
    { key: "rain", label: "Rain", emoji: "🌧", color: "text-blue-500",    activeClass: "bg-blue-500 text-white border-blue-600" },
    { key: "sand", label: "Sand", emoji: "🏜", color: "text-yellow-600",  activeClass: "bg-yellow-500 text-white border-yellow-600" },
    { key: "hail", label: "Snow", emoji: "❄",  color: "text-cyan-500",    activeClass: "bg-cyan-400 text-white border-cyan-500" },
  ];

  const toggleWeather = (key: string) => {
    if (manualWeather === key) {
      // clicking active weather: if it matches auto, go back to auto; else clear it
      setManualWeather(undefined);
    } else {
      setManualWeather(key);
    }
  };

  // Determine whether TR button reflects an auto-detected state
  const autoTR = ((): boolean => {
    const [a, b] = myFieldIdx;
    const [c, d] = oppFieldIdx;
    const s1 = team1Sets[a], s2 = team1Sets[b];
    const os1 = team2Sets[c], os2 = team2Sets[d];
    return [s1, s2, os1, os2].some(s => s?.moves?.includes("Trick Room") ?? false);
  })();
  const effectiveTR = manualTR ?? autoTR;

  const toggleTR = () => {
    if (manualTR === undefined) {
      // first click: set opposite of auto
      setManualTR(!autoTR);
    } else if (manualTR === !autoTR) {
      // second click: restore auto (set back to autoTR so it matches)
      setManualTR(autoTR);
    } else {
      // third click: back to undefined (auto)
      setManualTR(undefined);
    }
  };

  return (
    <div className="space-y-3">
      {/* ── Win rate ── */}
      <div className="flex items-center gap-2">
        <div className="flex-1 h-2 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
          <div className={`h-full rounded-full transition-all ${winBarColor}`} style={{ width: `${winPct}%` }} />
        </div>
        <span className={`text-sm font-bold flex-shrink-0 tabular-nums ${winTextColor}`}>{winPct}%</span>
      </div>

      {/* ── Field State Controls ── */}
      <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/60 dark:bg-white/[0.03] p-3 space-y-2.5">
        <div className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Field State</div>

        {/* Weather row */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[9px] text-muted-foreground w-10 flex-shrink-0">Weather</span>
          <div className="flex gap-1 flex-wrap">
            {WEATHER_OPTIONS.map(({ key, emoji, label, activeClass }) => {
              const isActive = manualWeather === key || (manualWeather === undefined && board.weather === key);
              return (
                <button
                  key={key}
                  title={label}
                  onClick={() => toggleWeather(key)}
                  className={cn(
                    "px-2 py-1 rounded-lg border text-[10px] font-bold transition-all",
                    isActive
                      ? activeClass
                      : "bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-muted-foreground hover:border-gray-400 dark:hover:border-white/30",
                  )}
                >
                  {emoji} {label}
                </button>
              );
            })}
            {(manualWeather !== undefined || board.weather) && (
              <button
                title="Clear weather"
                onClick={() => setManualWeather(null)}
                className="px-2 py-1 rounded-lg border border-gray-200 dark:border-white/10 text-[10px] text-muted-foreground hover:text-red-500 hover:border-red-300 transition-all bg-white dark:bg-white/5"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* TR + Tailwind row */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[9px] text-muted-foreground w-10 flex-shrink-0">Misc</span>
          <div className="flex gap-1 flex-wrap">
            {/* Trick Room */}
            <button
              title="Trick Room"
              onClick={toggleTR}
              className={cn(
                "px-2 py-1 rounded-lg border text-[10px] font-bold transition-all flex items-center gap-1",
                effectiveTR
                  ? "bg-purple-500 text-white border-purple-600"
                  : "bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-muted-foreground hover:border-purple-400 hover:text-purple-600",
                manualTR !== undefined && manualTR !== autoTR && "ring-1 ring-orange-400 ring-offset-1",
              )}
            >
              🔮 Trick Room
              {manualTR !== undefined && manualTR !== autoTR && (
                <span className="text-[7px] opacity-80">(manual)</span>
              )}
            </button>

            {/* My Tailwind */}
            <button
              title="Your Tailwind active"
              onClick={() => setMyTailwind((v) => !v)}
              className={cn(
                "px-2 py-1 rounded-lg border text-[10px] font-bold transition-all flex items-center gap-1",
                myTailwind
                  ? "bg-blue-500 text-white border-blue-600"
                  : "bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-muted-foreground hover:border-blue-400 hover:text-blue-600",
              )}
            >
              💨 My TW
            </button>

            {/* Opp Tailwind */}
            <button
              title="Opponent Tailwind active"
              onClick={() => setOppTailwind((v) => !v)}
              className={cn(
                "px-2 py-1 rounded-lg border text-[10px] font-bold transition-all flex items-center gap-1",
                oppTailwind
                  ? "bg-red-500 text-white border-red-600"
                  : "bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-muted-foreground hover:border-red-400 hover:text-red-600",
              )}
            >
              💨 Opp TW
            </button>

            {/* Reset all overrides */}
            {(manualWeather !== undefined || manualTR !== undefined || myTailwind || oppTailwind) && (
              <button
                title="Reset all field overrides"
                onClick={() => {
                  setManualWeather(undefined);
                  setManualTR(undefined);
                  setMyTailwind(false);
                  setOppTailwind(false);
                }}
                className="px-2 py-1 rounded-lg border border-gray-200 dark:border-white/10 text-[10px] text-muted-foreground hover:text-red-500 hover:border-red-300 transition-all bg-white dark:bg-white/5"
              >
                ↺ Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Opponent side ── */}
      <div>
        <div className="text-[9px] font-bold uppercase tracking-wider text-red-500 dark:text-red-400 mb-2 flex items-center gap-1.5">
          <Swords className="w-3 h-3" /> Opponent
          {board.oppTailwind && <span className="ml-1 text-cyan-500 font-bold">💨 Tailwind</span>}
        </div>

        {/* Team prediction based on opponent's leads */}
        {(() => {
          const predictions = predictOpponentTeam(team2Pokemon, oppFieldIdx);
          if (predictions.length === 0) return null;
          return (
            <div className="mb-2 rounded-xl border border-red-200 dark:border-red-800/40 bg-red-50/50 dark:bg-red-950/10 p-2">
              <div className="text-[8px] font-bold uppercase tracking-wider text-red-400 mb-1.5">
                🔍 Likely back row (from sim data)
              </div>
              <div className="flex flex-wrap gap-1.5">
                {predictions.map(({ pokemon: p, label }) => (
                  <div key={p.id} className="flex flex-col items-center gap-px p-1 rounded-lg border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5">
                    <Image src={p.sprite} alt={p.name} width={28} height={28} unoptimized />
                    <span className="text-[7px] text-muted-foreground truncate max-w-[48px] text-center">{p.name.split("-")[0]}</span>
                    <span className="text-[6px] text-muted-foreground/70 truncate max-w-[48px] text-center">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}

        <div className="grid grid-cols-2 gap-2">
          <MonPanel slot={board.oppSlot1} side="opp" monOv={ovOppMon1} onMonOvChange={(p) => setOvOppMon1((prev) => ({ ...prev, ...p }))} onSpriteClick={handleSpriteClick} />
          <MonPanel slot={board.oppSlot2} side="opp" monOv={ovOppMon2} onMonOvChange={(p) => setOvOppMon2((prev) => ({ ...prev, ...p }))} onSpriteClick={handleSpriteClick} />
        </div>
      </div>

      {/* ── Speed order ── */}
      <SpeedStrip speedOrder={board.speedOrder} hasTrickRoom={board.hasTrickRoom} />

      {/* ── Your side ── */}
      <div>
        <div className="text-[9px] font-bold uppercase tracking-wider text-blue-500 dark:text-blue-400 mb-2 flex items-center gap-1.5">
          <Play className="w-3 h-3" /> Your side
          {board.myTailwind && <span className="ml-1 text-cyan-500 font-bold">💨 Tailwind</span>}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {/* Slot 1 + advice */}
          <div className="space-y-1">
            {(() => {
              const adv = computeSlotAdvice(board.mySlot1, board.mySlot2, board.oppSlot1, board.oppSlot2, ovMyMon1.hpPct ?? 100);
              const ADVICE_STYLE: Record<string, string> = {
                "protect-high":  "border-red-400 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400",
                "switch-high":   "border-orange-400 bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400",
                "attack-high":   "border-green-400 bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400",
                "protect-medium":"border-amber-400 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400",
                "switch-medium": "border-amber-400 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400",
                "attack-medium": "border-blue-400 bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400",
                "attack-low":    "border-gray-300 bg-gray-50 dark:bg-white/5 text-muted-foreground",
                "support-low":   "border-gray-300 bg-gray-50 dark:bg-white/5 text-muted-foreground",
              };
              const ADVICE_ICON: Record<string, string> = { protect: "🛡️", switch: "🔄", attack: "⚔️", support: "🤝" };
              const styleKey = `${adv.action}-${adv.urgency}`;
              const cls = ADVICE_STYLE[styleKey] ?? ADVICE_STYLE["attack-low"];
              return (
                <div className={cn("rounded-lg border px-2 py-1.5", cls)}>
                  <div className="text-[9px] font-bold flex items-center gap-1">
                    {ADVICE_ICON[adv.action]} {adv.reason}
                  </div>
                  <div className="text-[8px] mt-0.5 opacity-80">{adv.detail}</div>
                </div>
              );
            })()}
            <MonPanel slot={board.mySlot1} side="mine" monOv={ovMyMon1} onMonOvChange={(p) => setOvMyMon1((prev) => ({ ...prev, ...p }))} onSpriteClick={handleSpriteClick} />
          </div>
          {/* Slot 2 + advice */}
          <div className="space-y-1">
            {(() => {
              const adv = computeSlotAdvice(board.mySlot2, board.mySlot1, board.oppSlot1, board.oppSlot2, ovMyMon2.hpPct ?? 100);
              const ADVICE_STYLE: Record<string, string> = {
                "protect-high":  "border-red-400 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400",
                "switch-high":   "border-orange-400 bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400",
                "attack-high":   "border-green-400 bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-green-400",
                "protect-medium":"border-amber-400 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400",
                "switch-medium": "border-amber-400 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400",
                "attack-medium": "border-blue-400 bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400",
                "attack-low":    "border-gray-300 bg-gray-50 dark:bg-white/5 text-muted-foreground",
                "support-low":   "border-gray-300 bg-gray-50 dark:bg-white/5 text-muted-foreground",
              };
              const ADVICE_ICON: Record<string, string> = { protect: "🛡️", switch: "🔄", attack: "⚔️", support: "🤝" };
              const styleKey = `${adv.action}-${adv.urgency}`;
              const cls = ADVICE_STYLE[styleKey] ?? ADVICE_STYLE["attack-low"];
              return (
                <div className={cn("rounded-lg border px-2 py-1.5", cls)}>
                  <div className="text-[9px] font-bold flex items-center gap-1">
                    {ADVICE_ICON[adv.action]} {adv.reason}
                  </div>
                  <div className="text-[8px] mt-0.5 opacity-80">{adv.detail}</div>
                </div>
              );
            })()}
            <MonPanel slot={board.mySlot2} side="mine" monOv={ovMyMon2} onMonOvChange={(p) => setOvMyMon2((prev) => ({ ...prev, ...p }))} onSpriteClick={handleSpriteClick} />
          </div>
        </div>
      </div>

      {/* ── Field customizer ── */}
      <div className="rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden">
        <button
          onClick={() => setShowPicker((p) => !p)}
          className="w-full px-4 py-2.5 flex items-center justify-between text-[11px] font-semibold text-muted-foreground hover:text-foreground hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
        >
          <span className="flex items-center gap-2">
            <ArrowRightLeft className="w-3.5 h-3.5" />
            Change Pokémon on field
          </span>
          <ChevronRight
            className={cn("w-3.5 h-3.5 transition-transform duration-200", showPicker && "rotate-90")}
          />
        </button>
        {showPicker && (
          <div className="px-4 pb-4 pt-3 border-t border-gray-200 dark:border-white/10 space-y-4 bg-gray-50/50 dark:bg-white/[0.02]">
            <FieldPicker
              label="Your team — pick 2 to lead"
              color="blue"
              allPokemon={team1Pokemon}
              fieldIdx={myFieldIdx}
              onSwap={setMyFieldIdx}
            />
            <FieldPicker
              label="Opponent — pick 2 leads"
              color="red"
              allPokemon={team2Pokemon}
              fieldIdx={oppFieldIdx}
              onSwap={setOppFieldIdx}
            />
          </div>
        )}
      </div>
    </div>
  );
}
