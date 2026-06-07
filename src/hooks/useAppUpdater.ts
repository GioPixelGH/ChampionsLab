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
const VERSION_URL = "https://championslab.xyz/api/version";

function isNative(): boolean {
  return typeof window !== "undefined" && !!(window as { Capacitor?: { isNative?: boolean } }).Capacitor?.isNative;
}

export function useAppUpdater(): UseAppUpdaterResult {
  const [updateAvailable, setUpdateAvailable] = useState<UpdateInfo | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    if (!isNative()) return;
    checkForUpdate();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
