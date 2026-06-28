"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { X, Minus, ScanLine, Loader2, AlertCircle, Zap, Settings } from "lucide-react";

// ── Electron bridge type ─────────────────────────────────────────────────
declare global {
  interface Window {
    electronAPI?: {
      isElectron: boolean;
      close: () => void;
      minimize: () => void;
      getSpritesList:    () => Promise<SpriteInfo[]>;
      scanOpponent:      () => Promise<string[] | null>;
      getCalibration:    () => Promise<Calibration>;
      startCalibration:  () => Promise<CalibrationSession | null>;
      saveCalibration:   (cal: Calibration) => Promise<void>;
      cancelCalibration: () => Promise<void>;
    };
  }
}

// ── Types ────────────────────────────────────────────────────────────────
interface SpriteInfo   { id: number; form: string; filename: string }
interface Composition  { lead1: string; lead2: string; back1: string; back2: string }
interface TeamRule     {
  id: string; label?: string;
  triggerPokemonIds: number[]; triggerCount: number;
  isDefault?: boolean; composition: Composition;
}
interface Calibration  { sprites: { cx: number; cy: number }[]; w: number; h: number }
interface CalibrationSession { screenshot: string; calibration: Calibration; screenWidth: number; screenHeight: number }
interface FP           { fp: Float32Array; mask: Uint8Array }

// ── Fingerprinting ───────────────────────────────────────────────────────
const THUMB = 32;

async function loadSpriteFP(src: string): Promise<FP | null> {
  try {
    const img = new Image();
    img.crossOrigin = "anonymous";
    await new Promise<void>((res, rej) => { img.onload = () => res(); img.onerror = () => rej(); img.src = src; });
    const c = document.createElement("canvas"); c.width = THUMB; c.height = THUMB;
    const ctx = c.getContext("2d")!;
    ctx.clearRect(0, 0, THUMB, THUMB); // transparent base → alpha channel preserved
    ctx.drawImage(img, 0, 0, THUMB, THUMB);
    const px = ctx.getImageData(0, 0, THUMB, THUMB).data;
    const fp = new Float32Array(THUMB * THUMB * 3);
    const mask = new Uint8Array(THUMB * THUMB);
    for (let i = 0; i < THUMB * THUMB; i++) {
      fp[i*3]   = px[i*4]   / 255;
      fp[i*3+1] = px[i*4+1] / 255;
      fp[i*3+2] = px[i*4+2] / 255;
      mask[i]   = px[i*4+3];
    }
    return { fp, mask };
  } catch { return null; }
}

async function loadCropFP(src: string): Promise<Float32Array | null> {
  try {
    const img = new Image();
    img.crossOrigin = "anonymous";
    await new Promise<void>((res, rej) => { img.onload = () => res(); img.onerror = () => rej(); img.src = src; });
    const c = document.createElement("canvas"); c.width = THUMB; c.height = THUMB;
    const ctx = c.getContext("2d")!;
    ctx.drawImage(img, 0, 0, THUMB, THUMB);
    const px = ctx.getImageData(0, 0, THUMB, THUMB).data;
    const fp = new Float32Array(THUMB * THUMB * 3);
    for (let i = 0; i < THUMB * THUMB; i++) {
      fp[i*3]   = px[i*4]   / 255;
      fp[i*3+1] = px[i*4+1] / 255;
      fp[i*3+2] = px[i*4+2] / 255;
    }
    return fp;
  } catch { return null; }
}

// Only compare pixels where the reference sprite is opaque (alpha ≥ 32)
function maskedMSE(cropFP: Float32Array, ref: FP): number {
  let sum = 0, count = 0;
  for (let i = 0; i < THUMB * THUMB; i++) {
    if (ref.mask[i] < 32) continue;
    const d0 = cropFP[i*3]   - ref.fp[i*3];
    const d1 = cropFP[i*3+1] - ref.fp[i*3+1];
    const d2 = cropFP[i*3+2] - ref.fp[i*3+2];
    sum += d0*d0 + d1*d1 + d2*d2;
    count++;
  }
  return count >= 10 ? sum / count : Infinity;
}

// ── localStorage helpers ─────────────────────────────────────────────────
function readRules(): TeamRule[] {
  try {
    const raw  = localStorage.getItem("champions-lab:teams");
    const last = localStorage.getItem("champions-lab:last-team");
    if (!raw) return [];
    const teams = JSON.parse(raw) as Array<{ id: string; rules?: { rules: TeamRule[] } }>;
    const tid   = last ? (JSON.parse(last) as { teamId?: string }).teamId : undefined;
    const team  = teams.find(t => t.id === tid) ?? teams[0];
    return team?.rules?.rules ?? [];
  } catch { return []; }
}

function matchRules(rules: TeamRule[], ids: number[]): TeamRule[] {
  const s = new Set(ids);
  const triggered = rules.filter(r => {
    if (r.isDefault) return false;
    const tids = r.triggerPokemonIds ?? [];
    return tids.length > 0 && tids.filter(id => s.has(id)).length >= (r.triggerCount ?? 1);
  });
  if (triggered.length) return triggered;
  const fb = rules.find(r => r.isDefault);
  return fb ? [fb] : [];
}

function spriteUrl(id: number, form = "") {
  return `/sprites_champions/Menu_CP_${String(id).padStart(4, "0")}${form}.png`;
}

// ── Sub-components ───────────────────────────────────────────────────────
function WinBtn({ onClick, danger, title, children }: { onClick: () => void; danger?: boolean; title?: string; children: React.ReactNode }) {
  return (
    <button onClick={onClick} title={title} style={{
      width: 20, height: 20, borderRadius: 4, border: "none",
      background: "rgba(255,255,255,0.07)",
      color: danger ? "#f87171" : "rgba(255,255,255,0.55)",
      cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: 0,
    }}>{children}</button>
  );
}

function EmptySlot({ dim }: { dim?: boolean }) {
  return <div style={{ width: 34, height: 34, borderRadius: 6, flexShrink: 0, background: dim ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.07)" }} />;
}

// ── Calibration view (full-screen) ───────────────────────────────────────
const CAL_COLORS = ["#ef4444","#f97316","#eab308","#22c55e","#3b82f6","#a855f7"];

function CalibrationView({ data, onSave, onCancel }: {
  data: CalibrationSession;
  onSave: (cal: Calibration) => void;
  onCancel: () => void;
}) {
  const { screenshot, calibration, screenWidth: SW, screenHeight: SH } = data;
  const [rects, setRects] = useState(() => calibration.sprites.map(s => ({ ...s })));
  const drag = useRef<{ idx: number; ox: number; oy: number; startCx: number; startCy: number } | null>(null);

  const PW = calibration.w * SW;
  const PH = calibration.h * SH;

  function onPD(e: React.PointerEvent<HTMLDivElement>, idx: number) {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { idx, ox: e.clientX, oy: e.clientY, startCx: rects[idx].cx, startCy: rects[idx].cy };
    e.stopPropagation();
  }
  function onPM(e: React.PointerEvent<HTMLDivElement>) {
    if (!drag.current) return;
    const { idx, ox, oy, startCx, startCy } = drag.current;
    const ncx = Math.max(0, Math.min(1, startCx + (e.clientX - ox) / SW));
    const ncy = Math.max(0, Math.min(1, startCy + (e.clientY - oy) / SH));
    setRects(prev => prev.map((r, i) => i === idx ? { cx: ncx, cy: ncy } : r));
  }
  function onPU() { drag.current = null; }

  return (
    <div
      onPointerMove={onPM}
      onPointerUp={onPU}
      style={{ position: "fixed", inset: 0, background: "#000", overflow: "hidden", userSelect: "none" }}
    >
      {/* screenshot background */}
      {screenshot && <img src={screenshot} draggable={false} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "fill", pointerEvents: "none" }} />}

      {/* instruction overlay */}
      <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", background: "rgba(0,0,0,0.75)", borderRadius: 8, padding: "6px 14px", color: "white", fontSize: 12, fontWeight: 600, pointerEvents: "none", whiteSpace: "nowrap" }}>
        Trascina i rettangoli sopra i 6 sprite avversari → <span style={{ color: "#22c55e" }}>Salva</span>
      </div>

      {/* draggable rects */}
      {rects.map((r, i) => (
        <div
          key={i}
          onPointerDown={e => onPD(e, i)}
          style={{
            position: "absolute",
            left: r.cx * SW - PW / 2,
            top:  r.cy * SH - PH / 2,
            width: PW, height: PH,
            border: `2px solid ${CAL_COLORS[i]}`,
            background: CAL_COLORS[i] + "30",
            cursor: "move", boxSizing: "border-box",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <span style={{ color: CAL_COLORS[i], fontSize: 13, fontWeight: 800, textShadow: "0 0 4px #000" }}>{i + 1}</span>
        </div>
      ))}

      {/* action buttons */}
      <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 10 }}>
        <button onClick={() => onSave({ sprites: rects, w: calibration.w, h: calibration.h })} style={actionBtn("#22c55e")}>
          ✓ Salva
        </button>
        <button onClick={onCancel} style={actionBtn("#6b7280")}>
          ✕ Annulla
        </button>
      </div>
    </div>
  );
}

function actionBtn(color: string): React.CSSProperties {
  return {
    padding: "8px 20px", borderRadius: 8, border: "none",
    background: color, color: "white", fontSize: 13, fontWeight: 700,
    cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
  };
}

// ── Main overlay ─────────────────────────────────────────────────────────
export default function OverlayPage() {
  const [inElectron, setInElectron] = useState(false);
  const [loading, setLoading]       = useState(true);
  const [progress, setProgress]     = useState(0);
  const [total, setTotal]           = useState(0);
  const [scanning, setScanning]     = useState(false);
  const [opponent, setOpponent]     = useState<(SpriteInfo | null)[]>([]);
  const [crops, setCrops]           = useState<string[]>([]);
  const [rules, setRules]           = useState<TeamRule[]>([]);
  const [matched, setMatched]       = useState<TeamRule[]>([]);
  const [error, setError]           = useState<string | null>(null);
  const [calSession, setCalSession] = useState<CalibrationSession | null>(null);

  const fpMap   = useRef<Map<string, FP>>(new Map());
  const sprites = useRef<SpriteInfo[]>([]);

  // ── Boot ──────────────────────────────────────────────────────────────
  useEffect(() => {
    document.documentElement.style.background = "transparent";
    document.body.style.background = "transparent";
    const isEl = !!window.electronAPI?.isElectron;
    setInElectron(isEl);
    setRules(readRules());
    if (!isEl) { setLoading(false); return; }

    window.electronAPI!.getSpritesList().then(async (list) => {
      sprites.current = list;
      setTotal(list.length);
      let done = 0;
      for (let i = 0; i < list.length; i += 10) {
        await Promise.all(list.slice(i, i + 10).map(async (s) => {
          const fp = await loadSpriteFP(`/sprites_champions/${s.filename}`);
          if (fp) fpMap.current.set(s.filename, fp);
          setProgress(++done);
        }));
      }
      setLoading(false);
    });
  }, []);

  // ── Scan ──────────────────────────────────────────────────────────────
  const handleScan = useCallback(async () => {
    if (!window.electronAPI || scanning) return;
    setScanning(true); setError(null);
    try {
      const cropUrls = await window.electronAPI.scanOpponent();
      if (!cropUrls) { setError("Screenshot fallito"); return; }
      setCrops(cropUrls);

      const detected = await Promise.all(cropUrls.map(async (url) => {
        const cropFP = await loadCropFP(url);
        if (!cropFP) return null;
        let best: SpriteInfo | null = null, bestErr = Infinity;
        for (const s of sprites.current) {
          const ref = fpMap.current.get(s.filename);
          if (!ref) continue;
          const err = maskedMSE(cropFP, ref);
          if (err < bestErr) { bestErr = err; best = s; }
        }
        return bestErr < 0.12 ? best : null;
      }));

      setOpponent(detected);
      setMatched(matchRules(rules, detected.filter(Boolean).map(s => s!.id)));
    } catch (e) {
      setError(String(e));
    } finally {
      setScanning(false);
    }
  }, [scanning, rules]);

  // ── Calibration ────────────────────────────────────────────────────────
  const startCal = useCallback(async () => {
    if (!window.electronAPI) return;
    const session = await window.electronAPI.startCalibration();
    if (session) setCalSession(session);
  }, []);

  const saveCal = useCallback(async (cal: Calibration) => {
    await window.electronAPI?.saveCalibration(cal);
    setCalSession(null);
  }, []);

  const cancelCal = useCallback(async () => {
    await window.electronAPI?.cancelCalibration();
    setCalSession(null);
  }, []);

  // ── Calibration mode ───────────────────────────────────────────────────
  if (calSession) {
    return <CalibrationView data={calSession} onSave={saveCal} onCancel={cancelCal} />;
  }

  // ── Normal overlay ─────────────────────────────────────────────────────
  const pct = total > 0 ? Math.round((progress / total) * 100) : 0;

  return (
    <div style={{ position: "fixed", inset: 0, background: "transparent", fontFamily: "system-ui, sans-serif", userSelect: "none" }}>
      <div style={{
        margin: 0, background: "rgba(8,8,14,0.88)", backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.09)", borderRadius: 14, overflow: "hidden",
        display: "flex", flexDirection: "column", height: "100%", boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
      }}>

        {/* Title bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "7px 10px", background: "rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          // @ts-expect-error
          WebkitAppRegion: "drag",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#7c3aed", boxShadow: "0 0 6px #7c3aed" }} />
            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 10.5, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase" }}>Champions Lab</span>
            {loading && <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 9.5 }}>· {pct}%</span>}
          </div>
          {inElectron && (
            <div style={{ display: "flex", gap: 4, /* @ts-expect-error */ WebkitAppRegion: "no-drag" }}>
              <WinBtn onClick={startCal} title="Calibra posizioni sprite"><Settings size={9} /></WinBtn>
              <WinBtn onClick={() => window.electronAPI?.minimize()} title="Minimizza"><Minus size={9} /></WinBtn>
              <WinBtn onClick={() => window.electronAPI?.close()} danger title="Chiudi"><X size={9} /></WinBtn>
            </div>
          )}
        </div>

        {/* Body */}
        <div style={{ flex: 1, padding: "10px 12px", display: "flex", flexDirection: "column", gap: 8, overflow: "hidden" }}>

          {/* Opponent row */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 9.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", flexShrink: 0 }}>Avversario</span>
            <div style={{ flex: 1, display: "flex", gap: 4 }}>
              {opponent.length === 0
                ? Array.from({ length: 6 }).map((_, i) => <EmptySlot key={i} />)
                : opponent.map((s, i) =>
                    s
                      ? <img key={i} src={spriteUrl(s.id, s.form)} alt={`#${s.id}`}
                          title={`#${s.id}${s.form}`}
                          style={{ width: 34, height: 34, imageRendering: "pixelated", flexShrink: 0 }} />
                      : <EmptySlot key={i} dim />
                  )
              }
            </div>
            {inElectron && (
              <button onClick={handleScan} disabled={loading || scanning} style={{
                flexShrink: 0, display: "flex", alignItems: "center", gap: 4,
                padding: "4px 9px", borderRadius: 6,
                border: "1px solid rgba(124,58,237,0.5)",
                background: loading || scanning ? "rgba(124,58,237,0.1)" : "rgba(124,58,237,0.2)",
                color: loading || scanning ? "rgba(255,255,255,0.3)" : "#a78bfa",
                fontSize: 10, fontWeight: 700, cursor: loading || scanning ? "not-allowed" : "pointer",
                // @ts-expect-error
                WebkitAppRegion: "no-drag",
              }}>
                {scanning ? <Loader2 size={10} style={{ animation: "spin 1s linear infinite" }} /> : <ScanLine size={10} />}
                {scanning ? "…" : "Scan"}
              </button>
            )}
          </div>

          {/* Crop debug row — shows what was actually captured */}
          {crops.length > 0 && (
            <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
              <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 8.5, flexShrink: 0 }}>crop</span>
              {crops.map((c, i) => (
                <img key={i} src={c} alt={`crop${i}`}
                  style={{ width: 28, height: 28, borderRadius: 4, border: "1px solid rgba(255,255,255,0.1)", imageRendering: "pixelated" }} />
              ))}
            </div>
          )}

          {error && (
            <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#f87171", fontSize: 9.5 }}>
              <AlertCircle size={11} />{error}
            </div>
          )}

          {/* Composition */}
          {matched.length > 0 ? (
            <div style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.25)", borderRadius: 9, padding: "8px 10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 7 }}>
                <Zap size={10} color="#a78bfa" />
                <span style={{ color: "#c4b5fd", fontSize: 9.5, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  {matched[0].label || "Regola attiva"}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 10px" }}>
                {(["lead1","lead2","back1","back2"] as const).map((slot, i) => (
                  <div key={slot} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ width: 16, height: 16, borderRadius: 4, background: i < 2 ? "#7c3aed" : "#4c1d95", color: "white", fontSize: 9, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i+1}</span>
                    <div>
                      <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 8, letterSpacing: "0.06em", textTransform: "uppercase" }}>{i < 2 ? `Lead ${i+1}` : `Back ${i-1}`}</div>
                      <div style={{ color: "white", fontSize: 11, fontWeight: 600, lineHeight: 1.2 }}>{matched[0].composition[slot] || "—"}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ color: "rgba(255,255,255,0.22)", fontSize: 10, textAlign: "center", paddingTop: 4 }}>
              {!inElectron ? "Apri tramite npm run electron"
                : loading ? `Caricamento sprite ${pct}%…`
                : opponent.length === 0 ? "Premi Scan sulla schermata Selezione Team"
                : "Nessuna regola corrisponde all'avversario"}
            </div>
          )}
        </div>

        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  );
}
