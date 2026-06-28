"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { X, Minus, ScanLine, Loader2, AlertCircle, Zap } from "lucide-react";

// ── Global type for Electron bridge ─────────────────────────────────────
declare global {
  interface Window {
    electronAPI?: {
      isElectron: boolean;
      close: () => void;
      minimize: () => void;
      getSpritesList: () => Promise<SpriteInfo[]>;
      scanOpponent: () => Promise<string[] | null>;
    };
  }
}

// ── Minimal types (mirrors storage.ts, no import needed) ─────────────────
interface SpriteInfo { id: number; form: string; filename: string }
interface Composition { lead1: string; lead2: string; back1: string; back2: string }
interface TeamRule {
  id: string; label?: string;
  triggerPokemonIds: number[]; triggerCount: number;
  isDefault?: boolean; composition: Composition;
}
interface SavedTeamSlot { pokemonId: number }
interface TeamData { slots: SavedTeamSlot[]; rules: { rules: TeamRule[] } }

// ── Constants ────────────────────────────────────────────────────────────
const THUMB = 28; // px for fingerprint canvas

// ── Canvas fingerprinting ────────────────────────────────────────────────
async function fingerprint(src: string): Promise<Float32Array | null> {
  try {
    const img = new Image();
    img.crossOrigin = "anonymous";
    await new Promise<void>((res, rej) => {
      img.onload = () => res();
      img.onerror = () => rej();
      img.src = src;
    });
    const c = document.createElement("canvas");
    c.width = THUMB; c.height = THUMB;
    const ctx = c.getContext("2d")!;
    ctx.drawImage(img, 0, 0, THUMB, THUMB);
    const px = ctx.getImageData(0, 0, THUMB, THUMB).data;
    const fp = new Float32Array(THUMB * THUMB * 3);
    for (let i = 0; i < THUMB * THUMB; i++) {
      fp[i * 3]     = px[i * 4]     / 255;
      fp[i * 3 + 1] = px[i * 4 + 1] / 255;
      fp[i * 3 + 2] = px[i * 4 + 2] / 255;
    }
    return fp;
  } catch { return null; }
}

function mse(a: Float32Array, b: Float32Array): number {
  let s = 0;
  for (let i = 0; i < a.length; i++) { const d = a[i] - b[i]; s += d * d; }
  return s / a.length;
}

// ── localStorage helpers ─────────────────────────────────────────────────
function readTeam(): TeamData | null {
  try {
    const raw = localStorage.getItem("champions-lab:teams");
    const lastRaw = localStorage.getItem("champions-lab:last-team");
    if (!raw) return null;
    const teams = JSON.parse(raw) as Array<{ id: string; slots: SavedTeamSlot[]; rules?: { rules: TeamRule[] } }>;
    const last = lastRaw ? (JSON.parse(lastRaw) as { teamId?: string }) : null;
    const team = teams.find(t => t.id === last?.teamId) ?? teams[0];
    if (!team) return null;
    return { slots: team.slots ?? [], rules: team.rules ?? { rules: [] } };
  } catch { return null; }
}

function matchRules(rules: TeamRule[], opponentIds: number[]): TeamRule[] {
  const opSet = new Set(opponentIds);
  const triggered = rules.filter(r => {
    if (r.isDefault) return false;
    const ids = r.triggerPokemonIds ?? [];
    if (!ids.length) return false;
    return ids.filter(id => opSet.has(id)).length >= (r.triggerCount ?? 1);
  });
  if (triggered.length) return triggered;
  const fb = rules.find(r => r.isDefault);
  return fb ? [fb] : [];
}

function spriteUrl(id: number, form = ""): string {
  const pad = String(id).padStart(4, "0");
  return `/sprites_champions/Menu_CP_${pad}${form}.png`;
}

// ── Component ────────────────────────────────────────────────────────────
export default function OverlayPage() {
  const [inElectron, setInElectron]     = useState(false);
  const [loading, setLoading]           = useState(true);   // fingerprint preload
  const [progress, setProgress]         = useState(0);
  const [total, setTotal]               = useState(0);
  const [scanning, setScanning]         = useState(false);
  const [opponent, setOpponent]         = useState<(SpriteInfo | null)[]>([]);
  const [crops, setCrops]               = useState<string[]>([]);
  const [rules, setRules]               = useState<TeamRule[]>([]);
  const [matched, setMatched]           = useState<TeamRule[]>([]);
  const [error, setError]               = useState<string | null>(null);

  // fingerprint map: filename → Float32Array
  const fpMap = useRef<Map<string, Float32Array>>(new Map());
  const sprites = useRef<SpriteInfo[]>([]);

  // ── Boot ────────────────────────────────────────────────────────────────
  useEffect(() => {
    document.documentElement.style.background = "transparent";
    document.body.style.background = "transparent";

    const isEl = !!window.electronAPI?.isElectron;
    setInElectron(isEl);

    // Read team rules from localStorage
    const team = readTeam();
    if (team) setRules(team.rules.rules ?? []);

    if (!isEl) { setLoading(false); return; }

    // Load sprite list then precompute fingerprints in background
    window.electronAPI!.getSpritesList().then(async (list) => {
      sprites.current = list;
      setTotal(list.length);

      let done = 0;
      const BATCH = 12;
      for (let i = 0; i < list.length; i += BATCH) {
        const batch = list.slice(i, i + BATCH);
        await Promise.all(
          batch.map(async (s) => {
            const fp = await fingerprint(`/sprites_champions/${s.filename}`);
            if (fp) fpMap.current.set(s.filename, fp);
            done++;
            setProgress(done);
          })
        );
      }
      setLoading(false);
    });
  }, []);

  // ── Scan ─────────────────────────────────────────────────────────────────
  const handleScan = useCallback(async () => {
    if (!window.electronAPI || scanning) return;
    setScanning(true);
    setError(null);

    try {
      const cropDataUrls = await window.electronAPI.scanOpponent();
      if (!cropDataUrls) { setError("Scan failed"); return; }

      setCrops(cropDataUrls);

      // Match each crop against known fingerprints
      const detected: (SpriteInfo | null)[] = await Promise.all(
        cropDataUrls.map(async (dataUrl) => {
          const cropFp = await fingerprint(dataUrl);
          if (!cropFp) return null;

          let best: SpriteInfo | null = null;
          let bestErr = Infinity;

          for (const s of sprites.current) {
            const fp = fpMap.current.get(s.filename);
            if (!fp) continue;
            const err = mse(cropFp, fp);
            if (err < bestErr) { bestErr = err; best = s; }
          }

          // Confidence threshold — if error is too high, not a match
          return bestErr < 0.08 ? best : null;
        })
      );

      setOpponent(detected);

      // Apply rule matching
      const detectedIds = detected.filter(Boolean).map(s => s!.id);
      setMatched(matchRules(rules, detectedIds));
    } catch (e) {
      setError(String(e));
    } finally {
      setScanning(false);
    }
  }, [scanning, rules]);

  // ── Render helpers ───────────────────────────────────────────────────────
  const pct = total > 0 ? Math.round((progress / total) * 100) : 0;

  return (
    <div style={{ position: "fixed", inset: 0, background: "transparent", fontFamily: "system-ui, sans-serif", userSelect: "none" }}>
      <div style={{
        margin: 0,
        background: "rgba(8, 8, 14, 0.88)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.09)",
        borderRadius: 14,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
      }}>

        {/* ── Title bar ── */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "7px 10px",
          background: "rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          // @ts-expect-error Electron drag region
          WebkitAppRegion: "drag",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#7c3aed", boxShadow: "0 0 6px #7c3aed" }} />
            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase" }}>
              Champions Lab
            </span>
            {loading && (
              <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 9.5 }}>
                · Caricamento {pct}%
              </span>
            )}
          </div>
          {inElectron && (
            <div style={{ display: "flex", gap: 4, /* @ts-expect-error */ WebkitAppRegion: "no-drag" }}>
              <WinBtn onClick={() => window.electronAPI?.minimize()} title="Minimizza"><Minus size={9} /></WinBtn>
              <WinBtn onClick={() => window.electronAPI?.close()} danger title="Chiudi"><X size={9} /></WinBtn>
            </div>
          )}
        </div>

        {/* ── Body ── */}
        <div style={{ flex: 1, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 8, overflow: "hidden" }}>

          {/* Opponent row */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 9.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", flexShrink: 0 }}>
              Avversario
            </span>
            <div style={{ flex: 1, display: "flex", gap: 4 }}>
              {opponent.length === 0
                ? Array.from({ length: 6 }).map((_, i) => <EmptySlot key={i} />)
                : opponent.map((s, i) =>
                    s
                      ? <img key={i} src={spriteUrl(s.id, s.form)} alt={`#${s.id}`}
                          style={{ width: 34, height: 34, imageRendering: "pixelated", flexShrink: 0 }} />
                      : <EmptySlot key={i} dim />
                  )
              }
            </div>
            {inElectron && (
              <button
                onClick={handleScan}
                disabled={loading || scanning}
                style={{
                  flexShrink: 0,
                  display: "flex", alignItems: "center", gap: 4,
                  padding: "4px 9px",
                  borderRadius: 6,
                  border: "1px solid rgba(124,58,237,0.5)",
                  background: loading || scanning ? "rgba(124,58,237,0.1)" : "rgba(124,58,237,0.2)",
                  color: loading || scanning ? "rgba(255,255,255,0.3)" : "#a78bfa",
                  fontSize: 10, fontWeight: 700,
                  cursor: loading || scanning ? "not-allowed" : "pointer",
                  // @ts-expect-error
                  WebkitAppRegion: "no-drag",
                }}
              >
                {scanning
                  ? <Loader2 size={10} style={{ animation: "spin 1s linear infinite" }} />
                  : <ScanLine size={10} />
                }
                {scanning ? "Scan..." : "Scan"}
              </button>
            )}
          </div>

          {/* Error */}
          {error && (
            <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#f87171", fontSize: 9.5 }}>
              <AlertCircle size={11} />{error}
            </div>
          )}

          {/* Composition */}
          {matched.length > 0 ? (
            <div style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.25)", borderRadius: 9, padding: "8px 10px" }}>
              {/* Rule label */}
              <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 7 }}>
                <Zap size={10} color="#a78bfa" />
                <span style={{ color: "#c4b5fd", fontSize: 9.5, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  {matched[0].label || "Regola attiva"}
                </span>
              </div>

              {/* 4 slots */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 10px" }}>
                {(["lead1", "lead2", "back1", "back2"] as const).map((slot, i) => {
                  const name = matched[0].composition[slot];
                  const label = i < 2 ? `Lead ${i + 1}` : `Back ${i - 1}`;
                  return (
                    <div key={slot} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{
                        width: 16, height: 16, borderRadius: 4,
                        background: i < 2 ? "#7c3aed" : "#4c1d95",
                        color: "white", fontSize: 9, fontWeight: 800,
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>{i + 1}</span>
                      <div>
                        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 8, letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</div>
                        <div style={{ color: "white", fontSize: 11, fontWeight: 600, lineHeight: 1.2 }}>{name || "—"}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div style={{ color: "rgba(255,255,255,0.22)", fontSize: 10, textAlign: "center", paddingTop: 4 }}>
              {inElectron
                ? loading
                  ? `Caricamento sprite ${pct}%…`
                  : opponent.length === 0
                    ? "Premi Scan sulla schermata Selezione Team"
                    : "Nessuna regola corrisponde all'avversario rilevato"
                : "Apri tramite npm run electron"
              }
            </div>
          )}
        </div>

        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
      </div>
    </div>
  );
}

// ── Sub-components ───────────────────────────────────────────────────────
function EmptySlot({ dim }: { dim?: boolean }) {
  return (
    <div style={{
      width: 34, height: 34, borderRadius: 6, flexShrink: 0,
      background: dim ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.07)",
    }} />
  );
}

function WinBtn({ onClick, danger, title, children }: {
  onClick: () => void; danger?: boolean; title?: string; children: React.ReactNode;
}) {
  return (
    <button onClick={onClick} title={title} style={{
      width: 20, height: 20, borderRadius: 4, border: "none",
      background: "rgba(255,255,255,0.07)",
      color: danger ? "#f87171" : "rgba(255,255,255,0.55)",
      cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: 0,
    }}>
      {children}
    </button>
  );
}
