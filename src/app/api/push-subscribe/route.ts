export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";

// In-memory fallback when Supabase is not configured.
// NOTE: this is per-process and will not survive restarts or work across
// multiple server instances. Configure Supabase for production use.
const inMemorySubscriptions: { id: string; subscription: unknown; created_at: string }[] = [];

function generateId(): string {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export async function POST(req: Request) {
  let body: { subscription?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const subscription = body?.subscription;
  if (
    !subscription ||
    typeof subscription !== "object" ||
    !(subscription as Record<string, unknown>).endpoint
  ) {
    return NextResponse.json({ error: "Missing or invalid subscription object" }, { status: 400 });
  }

  const client = getSupabaseClient();

  if (client) {
    // Upsert by endpoint to avoid duplicates
    const endpoint = (subscription as Record<string, unknown>).endpoint as string;

    // Check if subscription already exists
    const { data: existing } = await client
      .from("push_subscriptions")
      .select("id")
      .eq("subscription->>endpoint", endpoint)
      .maybeSingle();

    if (existing) {
      // Update the existing subscription (keys may have rotated)
      const { error } = await client
        .from("push_subscriptions")
        .update({ subscription })
        .eq("id", existing.id);

      if (error) {
        console.error("[push-subscribe] Supabase update error:", error);
        return NextResponse.json({ error: "Failed to update subscription" }, { status: 500 });
      }
      return NextResponse.json({ ok: true, updated: true });
    }

    // Insert new subscription
    const { error } = await client
      .from("push_subscriptions")
      .insert({ subscription });

    if (error) {
      console.error("[push-subscribe] Supabase insert error:", error);
      return NextResponse.json({ error: "Failed to save subscription" }, { status: 500 });
    }

    return NextResponse.json({ ok: true, updated: false });
  }

  // In-memory fallback
  const endpoint = (subscription as Record<string, unknown>).endpoint as string;
  const existingIdx = inMemorySubscriptions.findIndex(
    (s) => (s.subscription as Record<string, unknown>).endpoint === endpoint
  );

  if (existingIdx >= 0) {
    inMemorySubscriptions[existingIdx].subscription = subscription;
    return NextResponse.json({ ok: true, updated: true });
  }

  inMemorySubscriptions.push({
    id: generateId(),
    subscription,
    created_at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true, updated: false });
}
