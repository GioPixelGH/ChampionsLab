"use client";

import { useIsNative } from "@/hooks/useIsNative";
import { LazyParticles } from "@/components/lazy-particles";
import { ThemeToggle } from "@/components/theme-toggle";
import { BottomTabBar } from "@/components/bottom-tab-bar";

export function NativeUiWrapper() {
  const isNative = useIsNative();

  if (isNative) {
    // Native app: no particles, no floating theme toggle, use bottom tab bar
    return <BottomTabBar />;
  }

  // Web: full experience
  return (
    <>
      <LazyParticles />
      <ThemeToggle />
    </>
  );
}
