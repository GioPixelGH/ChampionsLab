export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface LimitlessTournament {
  id: string;
  game: string;
  format: string;
  name: string;
  date: string;
  players: number;
}

interface LimitlessMon {
  id: string;      // Showdown-style ID  e.g. "rotom-wash", "ninetales-alola"
  name: string;    // Display name       e.g. "Wash Rotom", "Alolan Ninetales"
  item?: string;   // Held item          e.g. "Sitrus Berry"
  ability?: string; // Ability            e.g. "Intimidate"
  attacks?: string[]; // Moves            e.g. ["Fake Out", "Flare Blitz", ...]
  tera?: string | null;
}

interface LimitlessStanding {
  player: string;
  placing: number | null;
  drop: number | null;
  decklist: LimitlessMon[] | null;
  record: { wins: number; losses: number; ties: number };
}

export interface MetaEntry {
  showdownId: string; // e.g. "incineroar"
  name: string;       // display name from Limitless
  appearances: number;
  wins: number;       // placing === 1
  top4: number;
  top8: number;
  usageRate: number;  // appearances / totalTeams * 100
  winRate: number;    // wins / appearances * 100 (among used)
}

export interface TournamentPokemonUsage {
  showdownId: string;
  name: string;
  count: number;
  usageRate: number; // count / teams * 100
}

export interface TournamentBreakdown {
  id: string;
  name: string;
  date: string;
  players: number;
  teams: number; // players with valid decklists
  usage: TournamentPokemonUsage[];
  winner: { player: string; record: string; pokemon: { id: string; name: string; item?: string; ability?: string; moves?: string[] }[] } | null;
}

export interface MetaResponse {
  regulation: string;
  tournaments: number;
  teams: number;
  meta: MetaEntry[];
  byTournament: TournamentBreakdown[];
  updatedAt: string;
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const LIMITLESS_API = "https://play.limitlesstcg.com/api";
const REVALIDATE_SECONDS = 6 * 60 * 60; // 6 h

// M-B date boundary: tournaments on or after June 17 belong to regulation M-B.
const MB_CUTOFF = new Date("2026-06-17");

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const regulation = searchParams.get("regulation") ?? "M-A";
  const limit = Math.min(parseInt(searchParams.get("limit") ?? "25", 10), 100);
  const time = searchParams.get("time") ?? "7days"; // "7days" | "4weeks" | "YYYY-MM" | "all"

  // ── 1. Fetch tournament list ──────────────────────────────────────────────
  // The Limitless JSON API ignores time= for monthly values (YYYY-MM) — it always
  // returns the most-recent tournaments sorted by date desc. We must fetch a large
  // enough pool and filter locally.
  // Empirically: ~100 VGC tournaments/month, so to reach month M we need
  // (months_since_M * 100) + limit entries. We cap at 300 to stay safe.
  const isMonth = /^\d{4}-\d{2}$/.test(time);

  // For rolling windows (7days / 4weeks) the param MAY work server-side; keep it.
  // For months, the param is ignored, so don't send it (avoids confusion).
  const timeQuery = !isMonth && time !== "all" ? `&time=${encodeURIComponent(time)}` : "";

  const fetchLimit = isMonth
    ? 300                              // must reach back into target month
    : Math.min(limit * 2, 100);       // rolling window: small pool is enough

  // M-B tournaments on Limitless are still tagged as format=M-A (same Champions series).
  // The date filter (>= June 17) is the sole discriminant for M-B.
  const limitlessFormat = regulation === "M-B" ? "M-A" : regulation;
  const listUrl = `${LIMITLESS_API}/tournaments?game=VGC&format=${encodeURIComponent(limitlessFormat)}&limit=${fetchLimit}${timeQuery}`;

  let tournaments: LimitlessTournament[] = [];
  try {
    let res = await fetch(listUrl, { next: { revalidate: REVALIDATE_SECONDS } });
    // Retry once on 429 after the suggested delay (or 2 s)
    if (res.status === 429) {
      const retryAfter = parseInt(res.headers.get("Retry-After") ?? "2", 10);
      await new Promise((r) => setTimeout(r, retryAfter * 1000));
      res = await fetch(listUrl, { next: { revalidate: REVALIDATE_SECONDS } });
    }
    if (!res.ok) throw new Error(`tournaments list HTTP ${res.status}`);
    tournaments = await res.json();
  } catch (e) {
    console.error("[meta] failed to fetch tournaments:", e);
    return NextResponse.json({ error: "Failed to fetch tournaments from Limitless" }, { status: 502 });
  }

  // ── 1b. Local date filter (safety net in case Limitless ignores `time`) ──
  if (time === "7days" || time === "4weeks") {
    const days = time === "7days" ? 7 : 28;
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    tournaments = tournaments.filter((t) => new Date(t.date) >= cutoff);
  } else if (isMonth) {
    const [y, m] = time.split("-").map(Number);
    const start = new Date(y, m - 1, 1);
    const end   = new Date(y, m, 1);
    tournaments = tournaments.filter((t) => {
      const d = new Date(t.date);
      return d >= start && d < end;
    });
  }

  // Regulation date boundary: M-A = before June 17, M-B = June 17 onwards.
  if (regulation === "M-A") {
    tournaments = tournaments.filter((t) => new Date(t.date) < MB_CUTOFF);
  } else if (regulation === "M-B") {
    tournaments = tournaments.filter((t) => new Date(t.date) >= MB_CUTOFF);
  }

  // Cap to requested limit after filtering
  tournaments = tournaments.slice(0, limit);

  if (!tournaments.length) {
    return NextResponse.json<MetaResponse>({
      regulation,
      tournaments: 0,
      teams: 0,
      meta: [],
      byTournament: [],
      updatedAt: new Date().toISOString(),
    });
  }

  // ── 2. Fetch standings in batches to avoid rate-limiting ─────────────────
  const BATCH_SIZE = 8;
  const BATCH_DELAY_MS = 150;

  async function fetchStandings(t: LimitlessTournament): Promise<LimitlessStanding[]> {
    try {
      const res = await fetch(
        `${LIMITLESS_API}/tournaments/${t.id}/standings`,
        { next: { revalidate: REVALIDATE_SECONDS } }
      );
      if (!res.ok) return [];
      return (await res.json()) as LimitlessStanding[];
    } catch {
      return [];
    }
  }

  const standingsByTournament: LimitlessStanding[][] = [];
  for (let i = 0; i < tournaments.length; i += BATCH_SIZE) {
    const batch = tournaments.slice(i, i + BATCH_SIZE);
    const results = await Promise.all(batch.map(fetchStandings));
    standingsByTournament.push(...results);
    if (i + BATCH_SIZE < tournaments.length) {
      await new Promise((r) => setTimeout(r, BATCH_DELAY_MS));
    }
  }

  // ── 3. Aggregate global usage + per-tournament breakdown ─────────────────
  const usageMap = new Map<
    string,
    { name: string; appearances: number; wins: number; top4: number; top8: number; teamWins: number }
  >();

  let totalTeams = 0;
  const byTournament: TournamentBreakdown[] = [];

  for (let i = 0; i < tournaments.length; i++) {
    const t = tournaments[i];
    const standings = standingsByTournament[i];
    const tourneyUsage = new Map<string, { name: string; count: number }>();
    let tourneyTeams = 0;

    for (const player of standings) {
      if (!Array.isArray(player.decklist) || player.decklist.length === 0) continue;
      tourneyTeams++;
      totalTeams++;

      const placing = player.placing;
      for (const mon of player.decklist) {
        const key = mon.id.toLowerCase();

        // Per-tournament usage
        const tu = tourneyUsage.get(key) ?? { name: mon.name, count: 0 };
        tu.count++;
        tourneyUsage.set(key, tu);

        // Global aggregation
        const entry = usageMap.get(key) ?? {
          name: mon.name,
          appearances: 0,
          wins: 0,
          top4: 0,
          top8: 0,
          teamWins: player.record?.wins ?? 0,
        };
        entry.appearances++;
        if (placing === 1) entry.wins++;
        if (placing !== null && placing <= 4) entry.top4++;
        if (placing !== null && placing <= 8) entry.top8++;
        usageMap.set(key, entry);
      }
    }

    // Build per-tournament usage list
    const tourneyUsageList: TournamentPokemonUsage[] = Array.from(tourneyUsage.entries())
      .map(([showdownId, d]) => ({
        showdownId,
        name: d.name,
        count: d.count,
        usageRate: tourneyTeams > 0 ? Math.round((d.count / tourneyTeams) * 1000) / 10 : 0,
      }))
      .sort((a, b) => b.count - a.count);

    // Find the winner (placing 1 with a valid decklist)
    const winnerStanding = standings.find(
      (p) => p.placing === 1 && Array.isArray(p.decklist) && p.decklist.length > 0
    ) ?? null;
    const winner = winnerStanding
      ? {
          player: winnerStanding.player,
          record: `${winnerStanding.record?.wins ?? 0}-${winnerStanding.record?.losses ?? 0}-${winnerStanding.record?.ties ?? 0}`,
          pokemon: winnerStanding.decklist!.map((m) => ({ id: m.id, name: m.name, item: m.item, ability: m.ability, moves: m.attacks })),
        }
      : null;

    byTournament.push({
      id: t.id,
      name: t.name,
      date: t.date,
      players: t.players,
      teams: tourneyTeams,
      usage: tourneyUsageList,
      winner,
    });
  }

  const meta: MetaEntry[] = Array.from(usageMap.entries())
    .map(([showdownId, d]) => ({
      showdownId,
      name: d.name,
      appearances: d.appearances,
      wins: d.wins,
      top4: d.top4,
      top8: d.top8,
      usageRate:
        totalTeams > 0
          ? Math.round((d.appearances / totalTeams) * 1000) / 10
          : 0,
      winRate:
        d.appearances > 0
          ? Math.round((d.wins / d.appearances) * 1000) / 10
          : 0,
    }))
    .sort((a, b) => b.appearances - a.appearances);

  return NextResponse.json<MetaResponse>(
    {
      regulation,
      tournaments: tournaments.length,
      teams: totalTeams,
      meta,
      byTournament,
      updatedAt: new Date().toISOString(),
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "capacitor://localhost",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
      },
    }
  );
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "capacitor://localhost",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
