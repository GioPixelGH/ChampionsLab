"use client";

import { useEffect } from "react";

export function MobileNavInit() {
  useEffect(() => {
    // Hide hamburger button in native app (bottom tab bar handles navigation)
    const isNative = !!(window as { Capacitor?: { isNative?: boolean } }).Capacitor?.isNative;
    if (isNative) {
      const btn = document.getElementById("mobile-nav-toggle");
      if (btn) btn.style.display = "none";
      return;
    }

    const b = document.getElementById("mobile-nav-toggle");
    const toggle = () => document.body.classList.toggle("mobile-open");
    const closeOnNav = (e: MouseEvent) => {
      if (
        document.body.classList.contains("mobile-open") &&
        (e.target as Element).closest(".mobile-nav-panel a")
      ) {
        document.body.classList.remove("mobile-open");
      }
    };

    if (b) b.addEventListener("click", toggle);
    document.addEventListener("click", closeOnNav);

    return () => {
      if (b) b.removeEventListener("click", toggle);
      document.removeEventListener("click", closeOnNav);
    };
  }, []);

  return null;
}
