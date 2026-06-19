'use client';

import { useState, useMemo } from 'react';
import { motion } from '@/lib/motion';
import { LastUpdated } from '@/components/last-updated';
import { cn } from '@/lib/utils';
import {
  TIER_LABEL,
  REGION_LABEL,
  type EventTier,
  type EventRegion,
  type VGCEvent,
} from '@/lib/vgc-events';
import { useI18n } from '@/lib/i18n';
import { useIsNative } from '@/hooks/useIsNative';

// ── Tier colours ──────────────────────────────────────────────────────────────

const TIER_COLOR: Record<EventTier, string> = {
  regional:      '#6890f0', // water
  international: '#f85888', // psychic
  worlds:        '#f8d030', // electric
  special:       '#f08030', // fire
  national:      '#78c850', // grass
  online:        '#b8b8d0', // steel
  community:     '#a78bfa', // ghost
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatDateRange(start: string, end: string): string {
  const s = new Date(start + 'T12:00:00Z');
  const e = new Date(end   + 'T12:00:00Z');
  const opts: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
  if (s.toDateString() === e.toDateString()) {
    return s.toLocaleDateString('en-US', { ...opts, year: 'numeric' });
  }
  if (s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear()) {
    return `${s.toLocaleDateString('en-US', opts)}\u2013${e.getDate()}, ${e.getFullYear()}`;
  }
  return `${s.toLocaleDateString('en-US', opts)} \u2013 ${e.toLocaleDateString('en-US', { ...opts, year: 'numeric' })}`;
}

function monthKey(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00Z');
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function monthLabel(key: string): string {
  const [year, month] = key.split('-');
  return new Date(Number(year), Number(month) - 1, 1).toLocaleDateString('en-US', {
    month: 'long', year: 'numeric',
  });
}

function isPast(event: VGCEvent, todayISO: string): boolean {
  return event.endDate < todayISO;
}

function isOngoing(event: VGCEvent, todayISO: string): boolean {
  return event.startDate <= todayISO && todayISO <= event.endDate;
}

function safeUrl(url: string): string {
  return url.startsWith('https://') || url.startsWith('http://') ? url : '#';
}

// ── Event card ────────────────────────────────────────────────────────────────

function EventCard({ event, todayISO, index: _index }: { event: VGCEvent; todayISO: string; index: number }) {
  const { t } = useI18n();
  const color   = TIER_COLOR[event.tier];
  const past    = isPast(event, todayISO);
  const ongoing = isOngoing(event, todayISO);
  const note    = event.registrationNote;
  const soldOut = note?.toLowerCase().includes('sold out');

  const btnLabel = past ? t('events.results') : soldOut ? t('events.soldOut') : t('events.register');
  const btnColor = past || soldOut ? 'var(--muted-foreground)' : color;
  const btnBg    = past || soldOut ? 'var(--card)' : `${color}22`;
  const btnBorder = past || soldOut ? 'var(--border)' : `${color}44`;

  return (
    <div
      className={cn(
        "glass flex items-start gap-4 p-4 rounded-xl transition-all duration-200 hover:scale-[1.01]",
        ongoing && "ring-2 ring-green-500/30",
        past && "hover:scale-100"
      )}
      style={{ border: '1px solid var(--border)', borderLeft: `3px solid ${color}`, opacity: past ? 0.45 : 1 }}
    >
      {/* Date block */}
      <div className="shrink-0 text-center w-12">
        {(() => {
          const d = new Date(event.startDate + 'T12:00:00Z');
          return (
            <>
              <div className="text-xs font-semibold uppercase" style={{ color: 'var(--muted-foreground)' }}>
                {d.toLocaleDateString('en-US', { month: 'short' })}
              </div>
              <div className="text-xl font-bold leading-none">{d.getDate()}</div>
            </>
          );
        })()}
      </div>

      {/* Main info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{ background: `${color}22`, color }}
          >
            {TIER_LABEL[event.tier]}
          </span>
          {ongoing && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-500/20 text-green-500">
              {t('events.live')}
            </span>
          )}
          <span className="text-xs text-muted-foreground">
            {REGION_LABEL[event.region]}
          </span>
        </div>

        <p className="font-semibold text-sm leading-snug">{event.name}</p>

        <div className="flex items-center gap-3 mt-1 flex-wrap">
          {event.city !== 'Online' && (
            <span className="text-xs text-muted-foreground">
              {event.city}, {event.country}
            </span>
          )}
          <span className="text-xs text-muted-foreground">
            {formatDateRange(event.startDate, event.endDate)}
          </span>
          {event.cpPoints > 0 && (
            <span className="text-xs text-muted-foreground">
              {event.cpPoints.toLocaleString()} CP
            </span>
          )}
          {note && !soldOut && (
            <span
              className="text-xs px-1.5 py-0.5 rounded"
              style={{ background: `${color}22`, color }}
            >
              {note}
            </span>
          )}
        </div>
      </div>

      {/* Action button */}
      <a
        href={safeUrl(event.registrationUrl)}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 text-xs px-3 py-1.5 rounded-md font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
        style={{ background: btnBg, color: btnColor, border: `1px solid ${btnBorder}` }}
      >
        {btnLabel}
      </a>
    </div>
  );
}

// ── Filter pill ───────────────────────────────────────────────────────────────

function FilterPill({
  active, color, onClick, children,
}: {
  active: boolean;
  color?: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="text-xs px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer"
      style={{
        background: active ? (color ? `${color}22` : 'rgba(255,255,255,0.1)') : 'var(--card)',
        color:      active ? (color ?? 'var(--foreground)') : 'var(--muted-foreground)',
        border:     `1px solid ${active ? (color ? `${color}55` : 'rgba(255,255,255,0.3)') : 'var(--border)'}`,
        boxShadow:  active && color ? `0 0 10px ${color}22` : 'none',
      }}
    >
      {children}
    </motion.button>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

type TimeFilter   = 'upcoming' | 'past' | 'all';
type TierFilter   = EventTier | 'all';
type RegionFilter = EventRegion | 'all';

const TIER_FILTERS: EventTier[]     = ['regional', 'international', 'worlds', 'special', 'national', 'online', 'community'];
const REGION_FILTERS: EventRegion[] = ['NA', 'EU', 'LA', 'OC', 'APAC', 'ONLINE'];

export function EventsCalendar({ events, todayISO }: { events: VGCEvent[]; todayISO: string }) {
  const [time,   setTime]   = useState<TimeFilter>('upcoming');
  const [tier,   setTier]   = useState<TierFilter>('all');
  const [region, setRegion] = useState<RegionFilter>('all');
  const { t } = useI18n();
  const isNative = useIsNative();

  const filtered = useMemo(() => {
    return events.filter(ev => {
      if (time === 'upcoming' && isPast(ev, todayISO))  return false;
      if (time === 'past'     && !isPast(ev, todayISO)) return false;
      if (tier   !== 'all' && ev.tier   !== tier)       return false;
      if (region !== 'all' && ev.region !== region)     return false;
      return true;
    });
  }, [events, time, tier, region, todayISO]);

  const grouped = useMemo(() => {
    const map = new Map<string, VGCEvent[]>();
    for (const ev of filtered) {
      const key = monthKey(ev.startDate);
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(ev);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const upcomingCount = useMemo(
    () => events.filter(ev => !isPast(ev, todayISO)).length,
    [events, todayISO],
  );

  // ── MOBILE LAYOUT ──────────────────────────────────────────────────────────
  if (isNative) {
    return (
      <div className="pb-24">
        {/* Header */}
        <div className="px-4 pt-4 pb-3 border-b border-white/10">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-400 mb-0.5">
            {t('events.season')}
          </p>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {t('events.title')}
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">{upcomingCount} upcoming</span>
              <LastUpdated page="events" />
            </div>
          </div>
        </div>

        {/* Time filter tabs */}
        <div className="flex gap-1 px-4 pt-3 pb-2">
          {(['upcoming', 'all', 'past'] as TimeFilter[]).map((tf) => (
            <button
              key={tf}
              type="button"
              onClick={() => setTime(tf)}
              className={cn(
                "flex-1 py-2 rounded-xl text-xs font-semibold capitalize transition-all",
                time === tf
                  ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white"
                  : "bg-white/5 border border-white/10 text-gray-400"
              )}
            >
              {tf === 'upcoming' ? t('events.upcoming') : tf === 'past' ? t('events.past') : t('events.all')}
            </button>
          ))}
        </div>

        {/* Tier filter chips */}
        <div className="px-4 pb-2 overflow-x-auto">
          <div className="flex gap-1.5 w-max">
            <button
              type="button"
              onClick={() => setTier('all')}
              className={cn(
                "px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all",
                tier === 'all'
                  ? "bg-white/20 text-white"
                  : "bg-white/5 border border-white/10 text-gray-400"
              )}
            >
              {t('events.allTiers')}
            </button>
            {TIER_FILTERS.map((tf) => (
              <button
                key={tf}
                type="button"
                onClick={() => setTier(tf)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all border",
                  tier === tf ? "opacity-100" : "opacity-50"
                )}
                style={{
                  background: tier === tf ? `${TIER_COLOR[tf]}22` : 'rgba(255,255,255,0.03)',
                  borderColor: tier === tf ? `${TIER_COLOR[tf]}55` : 'rgba(255,255,255,0.1)',
                  color: TIER_COLOR[tf],
                }}
              >
                {TIER_LABEL[tf]}
              </button>
            ))}
          </div>
        </div>

        {/* Region filter chips */}
        <div className="px-4 pb-2 overflow-x-auto">
          <div className="flex gap-1.5 w-max">
            <button
              type="button"
              onClick={() => setRegion('all')}
              className={cn(
                "px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all",
                region === 'all'
                  ? "bg-white/20 text-white"
                  : "bg-white/5 border border-white/10 text-gray-400"
              )}
            >
              All Regions
            </button>
            {REGION_FILTERS.map((rf) => (
              <button
                key={rf}
                type="button"
                onClick={() => setRegion(rf)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all border",
                  region === rf ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400" : "bg-white/5 border-white/10 text-gray-400"
                )}
              >
                {rf}
              </button>
            ))}
          </div>
        </div>

        {/* Tier legend */}
        <div className="px-4 pb-2 flex flex-wrap gap-x-3 gap-y-1">
          {TIER_FILTERS.map((tf) => (
            <div key={tf} className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: TIER_COLOR[tf] }} />
              <span className="text-[10px] text-gray-500">{TIER_LABEL[tf]}</span>
            </div>
          ))}
        </div>

        {/* Events list */}
        <div className="px-4 pt-1 space-y-4">
          {grouped.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-16 text-center">
              <span className="text-4xl">🗓️</span>
              <p className="text-sm text-gray-400">{t('events.noMatch')}</p>
            </div>
          ) : (
            grouped.map(([key, groupEvents]) => (
              <div key={key}>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    {monthLabel(key)}
                  </p>
                  <span className="flex-1 h-px bg-white/10" />
                </div>
                <div className="space-y-2">
                  {groupEvents.map((ev) => {
                    const color = TIER_COLOR[ev.tier];
                    const past = isPast(ev, todayISO);
                    const ongoing = isOngoing(ev, todayISO);
                    const d = new Date(ev.startDate + 'T12:00:00Z');
                    const soldOut = ev.registrationNote?.toLowerCase().includes('sold out');
                    const btnLabel = past ? t('events.results') : soldOut ? t('events.soldOut') : t('events.register');
                    return (
                      <div
                        key={ev.id}
                        className={cn(
                          "bg-white/5 border border-white/10 rounded-2xl p-3 flex gap-3",
                          ongoing && "ring-1 ring-emerald-500/40",
                          past && "opacity-50"
                        )}
                        style={{ borderLeftWidth: 3, borderLeftColor: color }}
                      >
                        {/* Date block */}
                        <div className="flex-shrink-0 text-center w-10">
                          <p className="text-[10px] uppercase font-semibold text-gray-400">
                            {d.toLocaleDateString('en-US', { month: 'short' })}
                          </p>
                          <p className="text-xl font-black text-white leading-none">{d.getDate()}</p>
                        </div>
                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 flex-wrap mb-1">
                            <span
                              className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                              style={{ background: `${color}22`, color }}
                            >
                              {TIER_LABEL[ev.tier]}
                            </span>
                            {ongoing && (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                                {t('events.live')}
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-semibold text-white leading-snug truncate">{ev.name}</p>
                          <p className="text-[11px] text-gray-400 mt-0.5">
                            <span className="font-semibold" style={{ color: TIER_COLOR[ev.tier] }}>{REGION_LABEL[ev.region]}</span>
                            {ev.city !== 'Online' ? ` · ${ev.city}, ${ev.country}` : ''} · {formatDateRange(ev.startDate, ev.endDate)}
                            {ev.cpPoints > 0 ? ` · ${ev.cpPoints.toLocaleString()} CP` : ''}
                          </p>
                        </div>
                        {/* Action */}
                        <a
                          href={safeUrl(ev.registrationUrl)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 self-center text-[11px] font-semibold px-2.5 py-1.5 rounded-xl whitespace-nowrap"
                          style={{ background: `${color}22`, color, border: `1px solid ${color}44` }}
                        >
                          {btnLabel}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between gap-4 flex-wrap"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-1 text-emerald-500">
            {t('events.season')}
          </p>
          <h1 className="text-3xl font-bold tracking-tight font-heading bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
            {t('events.title')}
          </h1>
          <div className="mt-1"><LastUpdated page="events" /></div>
          <p className="text-sm mt-1 text-muted-foreground">
            {t('events.upcomingCount', { count: upcomingCount })}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {(['upcoming', 'all', 'past'] as TimeFilter[]).map(tf => (
            <FilterPill key={tf} active={time === tf} onClick={() => setTime(tf)}>
              {tf === 'upcoming' ? t('events.upcoming') : tf === 'past' ? t('events.past') : t('events.all')}
            </FilterPill>
          ))}
        </div>
      </motion.div>

      {/* Tier filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-2"
      >
        <div className="flex gap-2 flex-wrap">
          <FilterPill active={tier === 'all'} onClick={() => setTier('all')}>{t('events.allTiers')}</FilterPill>
          {TIER_FILTERS.map(t => (
            <FilterPill key={t} active={tier === t} color={TIER_COLOR[t]} onClick={() => setTier(t)}>
              {TIER_LABEL[t]}
            </FilterPill>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap">
          <FilterPill active={region === 'all'} onClick={() => setRegion('all')}>{t('events.allRegions')}</FilterPill>
          {REGION_FILTERS.map(r => (
            <FilterPill key={r} active={region === r} onClick={() => setRegion(r)}>
              {r}
            </FilterPill>
          ))}
        </div>
      </motion.div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex gap-x-5 gap-y-1 flex-wrap"
      >
        {TIER_FILTERS.map(t => (
          <div key={t} className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full" style={{ background: TIER_COLOR[t] }} />
            <span className="text-xs text-muted-foreground">{TIER_LABEL[t]}</span>
          </div>
        ))}
      </motion.div>

      {/* Events grouped by month */}
      {grouped.length === 0 ? (
        <div className="glass rounded-xl p-8 text-center text-sm text-muted-foreground border border-border">
          {t('events.noMatch')}
        </div>
      ) : (
        <div>
          {grouped.map(([key, groupEvents]) => (
            <div key={key} className="space-y-2 mb-6">
              <div className="flex items-center gap-2 px-1">
                <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                  {monthLabel(key)}
                </h2>
                <span className="flex-1 h-px bg-border" />
              </div>
              {groupEvents.map((ev) => (
                <EventCard key={ev.id} event={ev} todayISO={todayISO} index={0} />
              ))}
            </div>
          ))}
        </div>
      )}

    
    </div>
  );
}
