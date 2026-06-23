export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import webpush from "web-push";
import { getSupabaseClient } from "@/lib/supabase";

// In-memory fallback (shared module-level reference — same process as push-subscribe)
// This import provides access to the same in-memory array when Supabase is not configured.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const subscribeModule = require("../push-subscribe/route");

function getVapidConfig(): { publicKey: string; privateKey: string; subject: string } | null {
  const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  const privateKey = process.env.VAPID_PRIVATE_KEY;
  const subject = process.env.VAPID_SUBJECT;

  if (!publicKey || !privateKey || !subject) return null;
  return { publicKey, privateKey, subject };
}

export async function POST(req: Request) {
  // Auth: require SYNC_SECRET header or body field
  const syncSecret = process.env.SYNC_SECRET;
  if (syncSecret) {
    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    if (body.secret !== syncSecret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    return handleSend(body);
  }

  // No secret configured — open endpoint (not recommended for production)
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  return handleSend(body);
}

async function handleSend(body: Record<string, unknown>) {
  const vapid = getVapidConfig();
  if (!vapid) {
    return NextResponse.json(
      { error: "VAPID keys not configured. Set NEXT_PUBLIC_VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, and VAPID_SUBJECT." },
      { status: 503 }
    );
  }

  const title = typeof body.title === "string" ? body.title : "Champions Lab";
  const notifBody = typeof body.body === "string" ? body.body : "";
  const url = typeof body.url === "string" ? body.url : "/";
  const icon = typeof body.icon === "string" ? body.icon : "/icon-192.png";

  webpush.setVapidDetails(vapid.subject, vapid.publicKey, vapid.privateKey);

  const payload = JSON.stringify({ title, body: notifBody, url, icon });

  // Load subscriptions from Supabase or in-memory fallback
  const client = getSupabaseClient();
  let subscriptions: { id: string; subscription: unknown }[] = [];

  if (client) {
    const { data, error } = await client
      .from("push_subscriptions")
      .select("id, subscription");

    if (error) {
      console.error("[push-send] Failed to load subscriptions from Supabase:", error);
      return NextResponse.json({ error: "Failed to load subscriptions" }, { status: 500 });
    }
    subscriptions = (data ?? []) as { id: string; subscription: unknown }[];
  } else {
    // In-memory fallback: access the shared array from the subscribe route module
    const fallback = (subscribeModule as { inMemorySubscriptions?: typeof subscriptions })
      .inMemorySubscriptions;
    subscriptions = Array.isArray(fallback) ? fallback : [];
  }

  if (subscriptions.length === 0) {
    return NextResponse.json({ ok: true, sent: 0, failed: 0, message: "No subscribers" });
  }

  let sent = 0;
  let failed = 0;
  const expiredIds: string[] = [];

  await Promise.allSettled(
    subscriptions.map(async ({ id, subscription }) => {
      try {
        await webpush.sendNotification(
          subscription as webpush.PushSubscription,
          payload
        );
        sent++;
      } catch (err: unknown) {
        const statusCode = (err as { statusCode?: number }).statusCode;
        if (statusCode === 404 || statusCode === 410) {
          // Subscription is expired or unsubscribed — mark for removal
          expiredIds.push(id);
        }
        console.error(`[push-send] Failed to send to subscription ${id}:`, err);
        failed++;
      }
    })
  );

  // Clean up expired subscriptions
  if (expiredIds.length > 0) {
    if (client) {
      await client.from("push_subscriptions").delete().in("id", expiredIds);
    } else {
      const fallback = (subscribeModule as { inMemorySubscriptions?: { id: string; subscription: unknown; created_at: string }[] })
        .inMemorySubscriptions;
      if (Array.isArray(fallback)) {
        for (let i = fallback.length - 1; i >= 0; i--) {
          if (expiredIds.includes(fallback[i].id)) {
            fallback.splice(i, 1);
          }
        }
      }
    }
  }

  return NextResponse.json({ ok: true, sent, failed, expired: expiredIds.length });
}
