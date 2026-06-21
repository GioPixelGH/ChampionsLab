"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Grid3X3, Users, Swords, TrendingUp, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsNative } from "@/hooks/useIsNative";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import { BookOpen, CalendarDays, GraduationCap, ScanLine } from "lucide-react";

const MAIN_TABS = [
  { href: "/", i18nKey: "nav.pokedex", icon: Grid3X3 },
  { href: "/team-builder", i18nKey: "nav.teamBuilder", icon: Users },
  { href: "/battle-bot", i18nKey: "nav.battleBot", icon: Swords },
  { href: "/meta", i18nKey: "nav.meta", icon: TrendingUp },
];

const MORE_ITEMS = [
  { href: "/match-journal", i18nKey: "nav.matchJournal", icon: BookOpen },
  { href: "/box-scanner", i18nKey: "nav.boxScanner", icon: ScanLine },
  { href: "/events", i18nKey: "nav.tournaments", icon: CalendarDays },
  { href: "/learn", i18nKey: "nav.pokeSchool", icon: GraduationCap },
];

export function BottomTabBar() {
  const isNative = useIsNative();
  const pathname = usePathname();
  const { t } = useI18n();
  const [showMore, setShowMore] = useState(false);

  if (!isNative) return null;

  const isMoreActive = MORE_ITEMS.some((i) => i.href === pathname);

  return (
    <>
      {/* More drawer */}
      {showMore && (
        <div className="fixed inset-0 z-[60]" onClick={() => setShowMore(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div
            className="absolute bottom-16 left-0 right-0 bg-white dark:bg-[#111a2e] border-t border-gray-200/60 dark:border-gray-200/10 rounded-t-2xl px-4 py-4 space-y-1"
            onClick={(e) => e.stopPropagation()}
          >
            {MORE_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setShowMore(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    : "text-muted-foreground hover:text-foreground hover:bg-gray-100 dark:hover:bg-white/5"
                )}
              >
                <item.icon className="w-5 h-5" />
                {t(item.i18nKey)}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Tab bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#0d1526]/95 backdrop-blur-md border-t border-gray-200/60 dark:border-gray-200/10 pb-safe">
        <div className="flex items-center justify-around px-2 h-16">
          {MAIN_TABS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl transition-colors min-w-0"
              >
                <item.icon
                  className={cn(
                    "w-5 h-5 transition-colors",
                    isActive ? "text-emerald-500" : "text-muted-foreground"
                  )}
                />
                <span
                  className={cn(
                    "text-[10px] font-medium truncate transition-colors",
                    isActive ? "text-emerald-500" : "text-muted-foreground"
                  )}
                >
                  {t(item.i18nKey)}
                </span>
              </Link>
            );
          })}

          {/* More button */}
          <button
            type="button"
            onClick={() => setShowMore((v) => !v)}
            className="flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl transition-colors"
          >
            <Menu
              className={cn(
                "w-5 h-5 transition-colors",
                isMoreActive || showMore ? "text-emerald-500" : "text-muted-foreground"
              )}
            />
            <span
              className={cn(
                "text-[10px] font-medium transition-colors",
                isMoreActive || showMore ? "text-emerald-500" : "text-muted-foreground"
              )}
            >
              Altro
            </span>
          </button>
        </div>
      </div>

      {/* Spacer so content doesn't hide behind tab bar */}
      <div className="h-16" />
    </>
  );
}
