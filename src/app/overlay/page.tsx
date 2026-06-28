"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const SCREENS: Record<string, { label: string; color: string }> = {
  "team-select": { label: "Selezione Team", color: "#7c3aed" },
};

export default function OverlayPage() {
  const searchParams = useSearchParams();
  const screen = searchParams.get("screen") ?? "";
  const info = SCREENS[screen];

  // Strip all browser-rendered backgrounds so the window is transparent
  useEffect(() => {
    document.documentElement.style.background = "transparent";
    document.body.style.background = "transparent";
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "transparent",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 16,
        pointerEvents: "none",
        fontFamily: "sans-serif",
      }}
    >
      {info && (
        <div
          style={{
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(8px)",
            border: `1px solid ${info.color}`,
            borderRadius: 8,
            padding: "6px 14px",
            color: "white",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: info.color, display: "inline-block" }} />
          {info.label}
        </div>
      )}
    </div>
  );
}
