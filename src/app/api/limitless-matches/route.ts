import { NextRequest, NextResponse } from "next/server";

const VGC_API = "https://mew.limitlesstcg.com/labs/data/vgc";
const PLAY_API = "https://play.limitlesstcg.com/api";

// MongoDB ObjectId format used by play.limitlesstcg.com
function isHashId(id: string): boolean {
  return /^[a-f0-9]{24}$/i.test(id);
}

interface NewPairing {
  round: number;
  phase: number;
  table: number | null;
  // winner is the username string of the winner for completed matches,
  // -1 (number) or absent when pending, "tie" or 0 for a tie
  winner: string | number | null;
  player1: string;
  player2?: string | null;
}

interface NewStanding {
  player: string;
  decklist: { id: string }[];
}

interface NewDetails {
  name: string;
  date: string;
  city: string | null;
  country: string | null;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tournamentId = searchParams.get("tournamentId");
  const playerId = searchParams.get("playerId");

  if (!tournamentId || !playerId) {
    return NextResponse.json({ error: "Parametri mancanti" }, { status: 400 });
  }

  try {
    if (isHashId(tournamentId)) {
      // New play.limitlesstcg.com API (hash-format tournament IDs)
      const teamlistPageUrl = `https://play.limitlesstcg.com/tournament/${tournamentId}/player/${playerId}/teamlist`;
      const [pairingsRes, detailsRes, standingsRes, teamlistRes] = await Promise.all([
        fetch(`${PLAY_API}/tournaments/${tournamentId}/pairings`, { cache: "no-store" }),
        fetch(`${PLAY_API}/tournaments/${tournamentId}/details`, { cache: "no-store" }),
        fetch(`${PLAY_API}/tournaments/${tournamentId}/standings`, { cache: "no-store" }),
        fetch(teamlistPageUrl, { cache: "no-store" }),
      ]);

      if (!pairingsRes.ok) {
        return NextResponse.json(
          { error: `Dati non trovati (${pairingsRes.status}). Verifica l'URL e riprova.` },
          { status: pairingsRes.status },
        );
      }

      const pairings = (await pairingsRes.json()) as NewPairing[];
      const details = detailsRes.ok ? ((await detailsRes.json()) as NewDetails) : null;
      const standings = standingsRes.ok ? ((await standingsRes.json()) as NewStanding[]) : [];

      // Player's own team: parse the teamlist HTML page.
      // Primary: extract from `const teamlist = \`...\`` (showdown format) in the inline script.
      // Fallback: extract slugs from pokemon image src attributes.
      let playerTeamStr = "";
      if (teamlistRes.ok) {
        const html = await teamlistRes.text();

        // Primary: showdown format embedded in script tag
        const scriptMatch = html.match(/const\s+teamlist\s*=\s*`([\s\S]*?)`/);
        if (scriptMatch) {
          const showdown = scriptMatch[1].replace(/\r\n/g, "\n");
          const slugs = showdown
            .trim()
            .split(/\n\n/)
            .map((block) => {
              const firstLine = block.trim().split("\n")[0]; // "Pyroar @ Pyroarite"
              const name = firstLine.split(" @ ")[0].trim(); // "Pyroar"
              return name.toLowerCase().replace(/\s+/g, "-"); // "pyroar"
            })
            .filter((s) => s.length > 0);
          // Deduplicate while preserving order
          const seen = new Set<string>();
          const unique = slugs.filter((s) => (seen.has(s) ? false : (seen.add(s), true)));
          if (unique.length > 0) playerTeamStr = unique.join(",");
        }

        // Fallback: pokemon image URLs
        if (!playerTeamStr) {
          const seen = new Set<string>();
          const slugs = [...html.matchAll(/r2\.limitlesstcg\.net\/pokemon\/gen9\/([a-z0-9-]+)\.png/gi)]
            .map((m) => m[1].toLowerCase())
            .filter((s) => (seen.has(s) ? false : (seen.add(s), true)));
          if (slugs.length > 0) playerTeamStr = slugs.join(",");
        }
      }

      // Opponents' teams: build username → comma-separated slug string from standings decklists
      const teamMap = new Map<string, string>();
      for (const s of standings) {
        if (s.player && s.decklist?.length > 0) {
          teamMap.set(s.player.toLowerCase(), s.decklist.map((p) => p.id).join(","));
        }
      }
      // Also seed the player's own team in the map (overrides standings if both exist)
      if (playerTeamStr) teamMap.set(playerId.toLowerCase(), playerTeamStr);

      // Normalize pairings to the same shape as the old API response.
      // winner field in the new API is the winner's username string (e.g. "snorlaxpikachu1"),
      // or -1 / null when not yet completed, or 0/"tie" for a draw.
      // Map to p1_id=1 / p2_id=2 so the frontend comparison (m.winner === myActualId) works.
      const matches = pairings
        .filter((p) => p.player1 && p.player2)
        .map((p) => {
          const p1 = p.player1.toLowerCase();
          const p2 = (p.player2 ?? "").toLowerCase();
          // -1 = pending; any other value (username string, "tie", 0) = completed
          const completed = p.winner !== -1 ? 1 : 0;
          const w = typeof p.winner === "string" ? p.winner.toLowerCase() : null;
          const winner = w === p1 ? 1 : w === p2 ? 2 : null; // null = tie or pending
          return {
            table: p.table ?? 0,
            round: p.round,
            phase: p.phase,
            completed,
            winner,
            p1_id: 1,
            p2_id: 2,
            p1_name: p.player1,
            p2_name: p.player2 ?? null,
            p1_team: teamMap.get(p1) ?? "",
            p2_team: teamMap.get(p2) ?? "",
          };
        });

      const tournament = details
        ? {
            name: details.name,
            date: details.date?.split("T")[0] ?? null,
            city: details.city,
            country: details.country,
          }
        : null;

      return NextResponse.json({ matches, tournament });
    }

    // Old mew.limitlesstcg.com API (numeric tournament IDs)
    const playerIdNum = parseInt(playerId, 10);
    const matchesUrl = isNaN(playerIdNum)
      ? `${VGC_API}/matches?tournamentId=${tournamentId}`
      : `${VGC_API}/matches?tournamentId=${tournamentId}&playerId=${playerId}`;

    const [matchesRes, tournamentRes] = await Promise.all([
      fetch(matchesUrl, { next: { revalidate: 60 } }),
      fetch(`${VGC_API}/tournament?id=${tournamentId}&division=MA`, {
        next: { revalidate: 3600 },
      }),
    ]);

    if (!matchesRes.ok) {
      return NextResponse.json(
        { error: `Dati non trovati (${matchesRes.status}). Verifica l'URL e riprova.` },
        { status: matchesRes.status },
      );
    }

    // API wraps data in { ok: true, message: ... } — unwrap it
    const matchesData = (await matchesRes.json()) as { ok: boolean; message: unknown };
    const tournamentData = tournamentRes.ok
      ? ((await tournamentRes.json()) as { ok: boolean; message: unknown })
      : null;

    return NextResponse.json({
      matches: matchesData.message ?? [],
      tournament: tournamentData?.message ?? null,
    });
  } catch {
    return NextResponse.json({ error: "Errore di rete" }, { status: 500 });
  }
}
