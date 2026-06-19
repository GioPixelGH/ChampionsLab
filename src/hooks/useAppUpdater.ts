"use client";

import { useState, useEffect, useCallback } from "react";

export interface UpdateInfo {
  version: string;
}

interface UseAppUpdaterResult {
  updateAvailable: UpdateInfo | null;
  isChecking: boolean;
  applyUpdate: () => void;
  dismissUpdate: () => void;
}

const VERSION_KEY = "cl-app-version";
const VERSION_URL = "https://champions-lab-puce.vercel.app/api/version";

type CapacitorBridge = {
  isNativePlatform?: () => boolean;
  getPlatform?: () => string;
};

function isNative(): boolean {
  if (typeof window === "undefined") return false;
  const cap = (window as { Capacitor?: CapacitorBridge }).Capacitor;
  if (!cap) return false;
  if (typeof cap.isNativePlatform === "function") return cap.isNativePlatform();
  if (typeof cap.getPlatform === "function") return cap.getPlatform() !== "web";
  return false;
}

export function useAppUpdater(): UseAppUpdaterResult {
  const [updateAvailable, setUpdateAvailable] = useState<UpdateInfo | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    if (!isNative()) return;
    checkForUpdate();
  }, []);

  async function checkForUpdate() {
    setIsChecking(true);
    try {
      const res = await fetch(VERSION_URL, { cache: "no-store" });
      if (!res.ok) return;
      const data = (await res.json()) as { version: string };
      const remoteVersion = data.version;
      const localVersion = localStorage.getItem(VERSION_KEY);

      // First launch: silently save the version, no popup
      if (!localVersion) {
        localStorage.setItem(VERSION_KEY, remoteVersion);
        return;
      }

      if (remoteVersion !== localVersion) {
        setUpdateAvailable({ version: remoteVersion });
      }
    } catch {
      // No internet or server down — silent fail
    } finally {
      setIsChecking(false);
    }
  }

  // With server.url approach, "updating" means reloading the page.
  // The WebView will fetch the latest assets from Vercel automatically.
  const applyUpdate = useCallback(() => {
    if (!updateAvailable) return;
    localStorage.setItem(VERSION_KEY, updateAvailable.version);
    setUpdateAvailable(null);
    window.location.reload();
  }, [updateAvailable]);

  const dismissUpdate = useCallback(() => {
    setUpdateAvailable(null);
  }, []);

  return {
    updateAvailable,
    isChecking,
    applyUpdate,
    dismissUpdate,
  };
}
