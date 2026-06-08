import { NextRequest } from "next/server";
import { POKEMON_SEED } from "@/lib/pokemon-data";

const API_BASE = "https://play.limitlesstcg.com/api";
const GAME = "VGC";
const MIN_PLAYERS = 8;
const MIN_TEAMS = 1;   // skip tournaments with no team decklists
const MAX_TOURNAMENTS = 25;
const RATE_MS = 800; // faster than the offline script; user-triggered

// ── Slug resolution (mirrors scripts/sync-limitless-tournaments.ts) ───────────

const pokemonByName = new Map<string, { id: number; name: string }>();
for (const p of POKEMON_SEED) {
  if ((p as { hidden?: boolean }).hidden) continue;
  pokemonByName.set(p.name.toLowerCase(), { id: p.id, name: p.name });
}

const SLUG_OVERRIDES: Record<string, string> = {
  "rotom-heat": "Heat Rotom", "rotom-wash": "Wash Rotom", "rotom-mow": "Mow Rotom",
  "rotom-fan": "Fan Rotom", "rotom-frost": "Frost Rotom",
  "arcanine-hisui": "Hisuian Arcanine", "typhlosion-hisui": "Hisuian Typhlosion",
  "lilligant-hisui": "Hisuian Lilligant", "zoroark-hisui": "Hisuian Zoroark",
  "braviary-hisui": "Hisuian Braviary", "goodra-hisui": "Hisuian Goodra",
  "decidueye-hisui": "Hisuian Decidueye", "samurott-hisui": "Hisuian Samurott",
  "electrode-hisui": "Hisuian Electrode", "avalugg-hisui": "Hisuian Avalugg",
  "sneasel-hisui": "Hisuian Sneasel", "voltorb-hisui": "Hisuian Voltorb",
  "ninetales-alola": "Alolan Ninetales", "muk-alola": "Alolan Muk",
  "marowak-alola": "Alolan Marowak", "raichu-alola": "Alolan Raichu",
  "exeggutor-alola": "Alolan Exeggutor", "persian-alola": "Alolan Persian",
  "sandslash-alola": "Alolan Sandslash", "golem-alola": "Alolan Golem",
  "slowking-galar": "Galarian Slowking", "slowbro-galar": "Galarian Slowbro",
  "weezing-galar": "Galarian Weezing", "moltres-galar": "Galarian Moltres",
  "zapdos-galar": "Galarian Zapdos", "articuno-galar": "Galarian Articuno",
  "tauros-paldea-combat": "Paldean Tauros Combat", "tauros-paldea-blaze": "Paldean Tauros Blaze",
  "tauros-paldea-aqua": "Paldean Tauros Aqua", "tauros-paldea": "Paldean Tauros Combat",
  "basculegion-f": "Basculegion-F", "basculegion-female": "Basculegion-F",
  "basculegion": "Basculegion-M", "basculegion-m": "Basculegion-M", "basculegion-male": "Basculegion-M",
  "meowstic": "Meowstic-M", "meowstic-f": "Meowstic-F", "meowstic-female": "Meowstic-F",
  "indeedee": "Indeedee-M", "indeedee-f": "Indeedee-F", "indeedee-female": "Indeedee-F",
  "urshifu": "Urshifu", "urshifu-rapid-strike": "Urshifu-Rapid-Strike",
  "ogerpon-wellspring": "Ogerpon-Wellspring", "ogerpon-hearthflame": "Ogerpon-Hearthflame",
  "ogerpon-cornerstone": "Ogerpon-Cornerstone",
  "palafin": "Palafin", "palafin-hero": "Palafin",
  "aegislash": "Aegislash", "aegislash-blade": "Aegislash",
  "wormadam-sandy": "Wormadam-Sandy", "wormadam-trash": "Wormadam-Trash", "wormadam": "Wormadam",
  "lycanroc-midnight": "Lycanroc-Midnight", "lycanroc-dusk": "Lycanroc-Dusk", "lycanroc": "Lycanroc",
  "kommo-o": "Kommo-o", "jangmo-o": "Jangmo-o", "hakamo-o": "Hakamo-o",
  "ho-oh": "Ho-Oh", "chi-yu": "Chi-Yu", "ting-lu": "Ting-Lu",
  "chien-pao": "Chien-Pao", "wo-chien": "Wo-Chien",
  "mr-rime": "Mr. Rime", "mr-mime": "Mr. Mime", "mime-jr": "Mime Jr.",
  "type-null": "Type: Null",
};

function resolveSlug(slug: string): { id: number; name: string } | null {
  const override = SLUG_OVERRIDES[slug];
  if (override) {
    const found = pokemonByName.get(override.toLowerCase());
    if (found) return found;
  }
  const directName = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const direct = pokemonByName.get(directName.toLowerCase());
  if (direct) return direct;
  const firstWord = slug.split("-")[0];
  const capitalized = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
  return pokemonByName.get(capitalized.toLowerCase()) ?? null;
}

// ── Limitless API types ───────────────────────────────────────────────────────

interface LimitlessTournament {
  id: string; name: string; date: string; players: number; format: string;
}
interface LimitlessStanding {
  name: string;
  placing: number | null;
  record: { wins: number; losses: number; ties: number };
  decklist: Array<{ id: string; name: string; item: string; ability: string; attacks: string[]; tera: string | null }> | null;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)); }

async function fetchLimitless<T>(url: string): Promise<T> {
  for (let attempt = 1; attempt <= 4; attempt++) {
    const res = await fetch(url, { next: { revalidate: 0 } });
    if (res.status === 429) {
      const wait = (parseInt(res.headers.get("retry-after") ?? "30") + 2) * 1000;
      await sleep(wait);
      continue;
    }
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    return res.json() as Promise<T>;
  }
  throw new Error(`Rate limited: ${url}`);
}

// ── Route ─────────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const {
    regulationId,
    knownIds = [],      // IDs already in valid cache — used as the temporal boundary
    emptyIds: clientEmptyIds = [],  // IDs previously found to have 0 decklists — skip, don't stop
  }: { regulationId: string; knownIds: string[]; emptyIds: string[] } = await req.json();

  // validKnownSet  → hitting one of these means we've reached already-processed territory: STOP
  const validKnownSet = new Set<string>(knownIds);
  // skipSet        → includes both valid-cached and empty; skip these without stopping
  const skipSet = new Set<string>([...knownIds, ...clientEmptyIds]);

  const enc = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      function send(data: object) {
        controller.enqueue(enc.encode(JSON.stringify(data) + "\n"));
      }

      try {
        // 1. Fetch tournament list newest-first, stop when we hit a known-valid boundary.
        //    Known-empty IDs are skipped without stopping (they sit in the timeline but have
        //    no usable data — newer valid ones may still exist above them).
        send({ type: "progress", msg: `Recupero lista tornei ${regulationId}…` });

        const newCandidates: LimitlessTournament[] = [];
        let page = 1;
        let hitBoundary = false;

        while (!hitBoundary && newCandidates.length < MAX_TOURNAMENTS) {
          const batch = await fetchLimitless<LimitlessTournament[]>(
            `${API_BASE}/tournaments?game=${GAME}&format=${regulationId}&limit=50&page=${page}`
          );
          if (batch.length === 0) break;
          for (const t of batch) {
            if (t.players < MIN_PLAYERS) continue;
            if (validKnownSet.has(t.id)) { hitBoundary = true; break; }
            if (skipSet.has(t.id)) continue; // known empty — skip, keep going
            newCandidates.push(t);
            if (newCandidates.length >= MAX_TOURNAMENTS) break;
          }
          if (hitBoundary || batch.length < 50) break;
          page++;
          await sleep(RATE_MS);
        }

        if (newCandidates.length === 0) {
          send({ type: "done", totalNew: 0, emptyIds: [] });
          return;
        }

        send({ type: "progress", msg: `${newCandidates.length} torneo/i da scaricare…` });

        // 2. Fetch standings for each new candidate
        const emptyIds: string[] = [];
        for (let i = 0; i < newCandidates.length; i++) {
          const tournament = newCandidates[i];
          await sleep(RATE_MS);
          send({ type: "progress", msg: `[${i + 1}/${newCandidates.length}] ${tournament.name} (${tournament.players}p)` });

          let standings: LimitlessStanding[];
          try {
            standings = await fetchLimitless<LimitlessStanding[]>(
              `${API_BASE}/tournaments/${tournament.id}/standings`
            );
          } catch {
            send({ type: "progress", msg: `  ⊘ Saltato: impossibile scaricare standings` });
            continue;
          }

          const teams = standings
            .filter(s => s.decklist && s.decklist.length >= 4 && s.placing != null)
            .map(s => {
              const resolved = (s.decklist ?? []).map(pk => resolveSlug(pk.id)).filter(Boolean) as { id: number; name: string }[];
              if (resolved.length < 4) return null;
              return {
                placement: s.placing!,
                player: s.name ?? "Unknown",
                pokemonIds: resolved.map(p => p.id),
                pokemonNames: resolved.map(p => p.name),
                sets: (s.decklist ?? []).slice(0, resolved.length).map(pk => ({
                  ability: pk.ability ?? "",
                  item: pk.item ?? "",
                  moves: pk.attacks ?? [],
                  teraType: pk.tera ?? undefined,
                })),
              };
            })
            .filter((t): t is NonNullable<typeof t> => t !== null);

          if (teams.length < MIN_TEAMS) {
            emptyIds.push(tournament.id);
            send({ type: "progress", msg: `  ⊘ Saltato: nessun team con decklist (${tournament.players}p)` });
            continue;
          }

          send({
            type: "tournament",
            data: {
              id: tournament.id,
              name: tournament.name.replace(/[\u{1F300}-\u{1FAFF}]/gu, "").trim(),
              date: tournament.date,
              players: tournament.players,
              teams,
            },
          });
        }

        send({ type: "done", totalNew: newCandidates.length - emptyIds.length, emptyIds });
      } catch (err) {
        send({ type: "error", msg: String(err) });
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "application/x-ndjson",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
