export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { readFile, writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

const DATA_DIR = join(process.cwd(), "data");
const TEAMS_FILE = join(DATA_DIR, "shared-teams.json");

type TeamsStore = Record<string, { data: unknown; created: number }>;

async function ensureDir() {
  await mkdir(DATA_DIR, { recursive: true });
}

async function readStore(): Promise<TeamsStore> {
  try {
    const raw = await readFile(TEAMS_FILE, "utf-8");
    return JSON.parse(raw) as TeamsStore;
  } catch {
    return {};
  }
}

async function writeStore(store: TeamsStore) {
  await ensureDir();
  await writeFile(TEAMS_FILE, JSON.stringify(store), "utf-8");
}

function generateId(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const bytes = randomBytes(6);
  let id = "";
  for (let i = 0; i < 6; i++) id += chars[bytes[i] % chars.length];
  return id;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body || !body.s || !Array.isArray(body.s)) {
      return NextResponse.json({ error: "Invalid team data" }, { status: 400 });
    }

    const id = generateId();

    // Primary path: Supabase (persistent, TTL 90 days)
    if (isSupabaseConfigured()) {
      const { error } = await supabase
        .from("shared_teams")
        .insert({ id, data: body });

      if (error) {
        console.error("[share] Supabase insert error:", error.message);
        // Fall through to flat-file fallback
      } else {
        return NextResponse.json({ id });
      }
    }

    // Fallback: flat file (local dev / Supabase not configured)
    const store = await readStore();
    let finalId = id;
    while (store[finalId]) finalId = generateId();
    store[finalId] = { data: body, created: Date.now() };
    await writeStore(store);

    return NextResponse.json({ id: finalId });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
