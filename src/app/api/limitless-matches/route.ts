import { NextRequest, NextResponse } from "next/server";

const VGC_API = "https://mew.limitlesstcg.com/labs/data/vgc";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tournamentId = searchParams.get("tournamentId");
  const playerId = searchParams.get("playerId");

  if (!tournamentId || !playerId) {
    return NextResponse.json({ error: "Parametri mancanti" }, { status: 400 });
  }

  try {
    // If playerId is not numeric (e.g. Limitless username from play.limitlesstcg.com),
    // fetch all tournament matches — the client filters by player name client-side.
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
    const matchesData = await matchesRes.json() as { ok: boolean; message: unknown };
    const tournamentData = tournamentRes.ok ? await tournamentRes.json() as { ok: boolean; message: unknown } : null;

    return NextResponse.json({
      matches: matchesData.message ?? [],
      tournament: tournamentData?.message ?? null,
    });
  } catch {
    return NextResponse.json({ error: "Errore di rete" }, { status: 500 });
  }
}
