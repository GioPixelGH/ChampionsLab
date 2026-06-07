"use client";

import { useState, useEffect } from "react";

export function useIsNative(): boolean {
  const [isNative, setIsNative] = useState(false);

  useEffect(() => {
    setIsNative(
      !!(window as { Capacitor?: { isNative?: boolean } }).Capacitor?.isNative
    );
  }, []);

  return isNative;
}
