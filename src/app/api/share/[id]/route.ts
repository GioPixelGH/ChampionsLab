export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

const TEAMS_FILE = join(process.cwd(), "data", "shared-teams.json");

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id || id.length !== 6) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    // Primary path: Supabase
    if (isSupabaseConfigured()) {
      const { data, error } = await supabase
        .from("shared_teams")
        .select("data")
        .eq("id", id)
        .gt("expires_at", new Date().toISOString())
        .single();

      if (!error && data) {
        // Bump view counter asynchronously (don't block response)
        void supabase.rpc("increment_shared_team_views", { team_id: id });
        return NextResponse.json(data.data);
      }

      if (error && error.code !== "PGRST116") {
        // PGRST116 = row not found — fall through to flat-file fallback
        console.error("[share/get] Supabase error:", error.message);
      }
    }

    // Fallback: flat file
    const raw = await readFile(TEAMS_FILE, "utf-8");
    const store = JSON.parse(raw) as Record<string, { data: unknown }>;
    const entry = store[id];

    if (!entry) {
      return NextResponse.json({ error: "Team not found" }, { status: 404 });
    }

    return NextResponse.json(entry.data);
  } catch {
    return NextResponse.json({ error: "Team not found" }, { status: 404 });
  }
}
