"use client";

import { useState, useEffect } from "react";

type CapacitorBridge = {
  isNativePlatform?: () => boolean;
  getPlatform?: () => string;
};

function checkIsNative(): boolean {
  if (typeof window === "undefined") return false;
  const cap = (window as { Capacitor?: CapacitorBridge }).Capacitor;
  if (!cap) return false;
  if (typeof cap.isNativePlatform === "function") return cap.isNativePlatform();
  if (typeof cap.getPlatform === "function") return cap.getPlatform() !== "web";
  return false;
}

export function useIsNative(): boolean {
  const [isNative, setIsNative] = useState(false);
  useEffect(() => {
    setIsNative(checkIsNative());
  }, []);
  return isNative;
}
