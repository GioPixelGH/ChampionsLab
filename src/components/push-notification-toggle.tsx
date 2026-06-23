"use client";

import { useEffect, useState, useCallback } from "react";
import { BellRing, BellOff, Loader2 } from "lucide-react";

type NotifState = "unsupported" | "loading" | "enabled" | "disabled" | "denied";

const VAPID_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? "";

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; i++) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

async function registerServiceWorker(): Promise<ServiceWorkerRegistration | null> {
  if (!("serviceWorker" in navigator)) return null;
  try {
    const reg = await navigator.serviceWorker.register("/sw.js", { scope: "/" });
    // Wait until the SW is active
    if (reg.installing) {
      await new Promise<void>((resolve) => {
        reg.installing!.addEventListener("statechange", function onStateChange() {
          if (this.state === "activated" || this.state === "redundant") {
            this.removeEventListener("statechange", onStateChange);
            resolve();
          }
        });
      });
    }
    return reg;
  } catch (err) {
    console.error("[push] SW registration failed:", err);
    return null;
  }
}

async function getCurrentSubscription(): Promise<PushSubscription | null> {
  if (!("serviceWorker" in navigator)) return null;
  try {
    const reg = await navigator.serviceWorker.getRegistration("/sw.js");
    if (!reg) return null;
    return reg.pushManager.getSubscription();
  } catch {
    return null;
  }
}

async function subscribe(): Promise<PushSubscription | null> {
  const reg = await registerServiceWorker();
  if (!reg) return null;

  try {
    const sub = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY).buffer.slice(0) as ArrayBuffer,
    });
    return sub;
  } catch (err) {
    console.error("[push] Subscribe failed:", err);
    return null;
  }
}

async function saveSubscription(sub: PushSubscription): Promise<boolean> {
  try {
    const res = await fetch("/api/push-subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subscription: sub.toJSON() }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export function PushNotificationToggle() {
  const [state, setState] = useState<NotifState>("loading");

  // Hide entirely when VAPID key is not set
  if (!VAPID_PUBLIC_KEY) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!("Notification" in window) || !("serviceWorker" in navigator) || !("PushManager" in window)) {
      setState("unsupported");
      return;
    }

    if (Notification.permission === "denied") {
      setState("denied");
      return;
    }

    getCurrentSubscription().then((sub) => {
      setState(sub ? "enabled" : "disabled");
    });
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handleToggle = useCallback(async () => {
    if (state === "loading" || state === "unsupported" || state === "denied") return;

    if (state === "enabled") {
      // Unsubscribe
      setState("loading");
      try {
        const sub = await getCurrentSubscription();
        if (sub) {
          await sub.unsubscribe();
        }
        setState("disabled");
      } catch (err) {
        console.error("[push] Unsubscribe failed:", err);
        setState("enabled");
      }
      return;
    }

    // state === "disabled" — request permission and subscribe
    setState("loading");

    if (Notification.permission === "default") {
      const permission = await Notification.requestPermission();
      if (permission === "denied") {
        setState("denied");
        return;
      }
      if (permission !== "granted") {
        setState("disabled");
        return;
      }
    }

    const sub = await subscribe();
    if (!sub) {
      setState("disabled");
      return;
    }

    const saved = await saveSubscription(sub);
    if (!saved) {
      console.warn("[push] Subscription created but failed to save to server.");
    }
    setState("enabled");
  }, [state]);

  if (state === "unsupported") return null;

  const isEnabled = state === "enabled";
  const isLoading = state === "loading";
  const isDenied = state === "denied";

  const label = isDenied
    ? "Notifications blocked by browser"
    : isEnabled
    ? "Disable push notifications"
    : "Enable push notifications";

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={isLoading || isDenied}
      aria-label={label}
      title={label}
      className={[
        "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        isDenied
          ? "cursor-not-allowed opacity-50 bg-muted text-muted-foreground"
          : isEnabled
          ? "bg-primary/10 text-primary hover:bg-primary/20"
          : "bg-muted text-muted-foreground hover:bg-muted/80",
        isLoading ? "cursor-wait opacity-70" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : isEnabled ? (
        <BellRing className="h-4 w-4" />
      ) : (
        <BellOff className="h-4 w-4" />
      )}
      <span className="hidden sm:inline">
        {isDenied ? "Notifications blocked" : isEnabled ? "Notifications on" : "Notifications off"}
      </span>
    </button>
  );
}
