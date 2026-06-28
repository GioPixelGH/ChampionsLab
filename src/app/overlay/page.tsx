"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { X, Minus } from "lucide-react";

declare global {
  interface Window {
    electronAPI?: {
      close: () => void;
      minimize: () => void;
      isElectron: boolean;
    };
  }
}

const SCREENS: Record<string, { label: string; color: string }> = {
  "team-select": { label: "Selezione Team", color: "#7c3aed" },
};

export default function OverlayPage() {
  const searchParams = useSearchParams();
  const screen = searchParams.get("screen") ?? "team-select";
  const info = SCREENS[screen] ?? SCREENS["team-select"];
  const [inElectron, setInElectron] = useState(false);

  useEffect(() => {
    setInElectron(!!window.electronAPI?.isElectron);
    // Make body/html transparent when loaded standalone in browser too
    document.documentElement.style.background = "transparent";
    document.body.style.background = "transparent";
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        fontFamily: "system-ui, sans-serif",
        background: "transparent",
        userSelect: "none",
      }}
    >
      <div
        style={{
          margin: 0,
          background: "rgba(10, 10, 15, 0.82)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 12,
          overflow: "hidden",
          minWidth: 280,
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
        }}
      >
        {/* Title bar — draggable */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 10px",
            background: "rgba(255,255,255,0.04)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            // @ts-expect-error electron drag region
            WebkitAppRegion: "drag",
            cursor: "default",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: info.color,
                boxShadow: `0 0 6px ${info.color}`,
              }}
            />
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Champions Lab
            </span>
          </div>

          {inElectron && (
            <div
              style={{
                display: "flex",
                gap: 4,
                // @ts-expect-error electron no-drag
                WebkitAppRegion: "no-drag",
              }}
            >
              <button
                onClick={() => window.electronAPI?.minimize()}
                style={btnStyle}
                title="Minimizza"
              >
                <Minus size={10} />
              </button>
              <button
                onClick={() => window.electronAPI?.close()}
                style={{ ...btnStyle, color: "#f87171" }}
                title="Chiudi"
              >
                <X size={10} />
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: "12px 14px", color: "white" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <span
              style={{
                background: info.color + "33",
                border: `1px solid ${info.color}66`,
                color: info.color,
                borderRadius: 6,
                padding: "2px 8px",
                fontSize: 10,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {info.label}
            </span>
          </div>

          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, margin: 0 }}>
            Avvia le simulazioni nel Battle Bot per vedere i suggerimenti qui.
          </p>
        </div>
      </div>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  width: 20,
  height: 20,
  borderRadius: 4,
  border: "none",
  background: "rgba(255,255,255,0.08)",
  color: "rgba(255,255,255,0.6)",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
};
