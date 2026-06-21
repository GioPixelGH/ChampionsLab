"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import type { ScanState } from "@/lib/box-scanner/types";
import type { NameRegion } from "@/lib/box-scanner/ocr-detector";
import {
  cropNameRegion,
  recognizeNameFromCanvas,
  matchPokemonByName,
  DEFAULT_NAME_REGION_W,
  DEFAULT_NAME_REGION_H,
} from "@/lib/box-scanner/ocr-detector";
import type { ChampionsPokemon } from "@/lib/types";
import { cn } from "@/lib/utils";

interface BoxScannerPreviewProps {
  stream: MediaStream | null;
  nameRegion: NameRegion | null;
  scanState: ScanState;
  pokemonList: ChampionsPokemon[];
  onNameRegionChange: (region: NameRegion) => void;
  onDetected: (pokemonId: number) => void;
  onStateChange: (state: ScanState) => void;
}

// Poll every 200ms — isOcrRunning ref prevents concurrent calls, so effective
// rate is max(200, actual_ocr_duration).
const OCR_INTERVAL_MS = 200;

const CORNER_R = 7;   // handle radius (px)
const MIN_W = 40;
const MIN_H = 14;

type DragHandle = "tl" | "tr" | "bl" | "br" | "move";

interface DragState {
  handle: DragHandle;
  startMouseX: number;
  startMouseY: number;
  startRegion: NameRegion;
  currentRegion: NameRegion;
}

const CURSOR: Record<DragHandle, string> = {
  tl: "nw-resize", tr: "ne-resize", bl: "sw-resize", br: "se-resize", move: "move",
};

function applyDrag(
  start: NameRegion,
  handle: DragHandle,
  dx: number,
  dy: number,
  cw: number,
  ch: number,
): NameRegion {
  let { x, y, w, h } = start;

  switch (handle) {
    case "tl": {
      const cdx = Math.min(dx, start.w - MIN_W);
      const cdy = Math.min(dy, start.h - MIN_H);
      x = start.x + cdx; y = start.y + cdy;
      w = start.w - cdx; h = start.h - cdy;
      break;
    }
    case "tr": {
      const cdy = Math.min(dy, start.h - MIN_H);
      y = start.y + cdy;
      w = Math.max(MIN_W, start.w + dx); h = start.h - cdy;
      break;
    }
    case "bl": {
      const cdx = Math.min(dx, start.w - MIN_W);
      x = start.x + cdx;
      w = start.w - cdx; h = Math.max(MIN_H, start.h + dy);
      break;
    }
    case "br":
      w = Math.max(MIN_W, start.w + dx);
      h = Math.max(MIN_H, start.h + dy);
      break;
    case "move":
      x = start.x + dx; y = start.y + dy;
      break;
  }

  // Clamp to container bounds
  x = Math.max(0, Math.min(cw - w, x));
  y = Math.max(0, Math.min(ch - h, y));
  w = Math.min(w, cw - x);
  h = Math.min(h, ch - y);
  return { x, y, w, h };
}

export function BoxScannerPreview({
  stream,
  nameRegion,
  scanState,
  pokemonList,
  onNameRegionChange,
  onDetected,
  onStateChange,
}: BoxScannerPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isOcrRunning = useRef(false);
  const lastDetectedIdRef = useRef<number | null>(null);
  const [lastReadName, setLastReadName] = useState<string>("");

  // Drag tracking — ref for stable identity across global listeners
  const dragRef = useRef<DragState | null>(null);
  const [dragRegion, setDragRegion] = useState<NameRegion | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Attach stream to video element
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !stream) return;
    video.srcObject = stream;
    video.play().catch(() => {});
    return () => { video.srcObject = null; };
  }, [stream]);

  // OCR polling
  useEffect(() => {
    if (scanState !== "scanning" || !nameRegion) return;
    lastDetectedIdRef.current = null;
    let cancelled = false;

    const runOCR = async () => {
      if (cancelled || isOcrRunning.current) return;
      const video = videoRef.current;
      if (!video || document.hidden || video.readyState < 2) return;
      isOcrRunning.current = true;
      try {
        const cropped = cropNameRegion(video, nameRegion);
        const ocrText = await recognizeNameFromCanvas(cropped);
        if (cancelled) return;
        const match = matchPokemonByName(ocrText, pokemonList);
        if (match && match.id !== lastDetectedIdRef.current) {
          lastDetectedIdRef.current = match.id;
          setLastReadName(match.name);
          onDetected(match.id);
        }
      } catch { /* ignore transient errors */ }
      finally { isOcrRunning.current = false; }
    };

    runOCR();
    const timer = setInterval(runOCR, OCR_INTERVAL_MS);
    return () => { cancelled = true; clearInterval(timer); isOcrRunning.current = false; };
  }, [scanState, nameRegion, pokemonList, onDetected]);

  // Global mouse listeners while a drag is active — tracks cursor outside the container
  useEffect(() => {
    if (!isDragging) return;

    const onMove = (e: MouseEvent) => {
      if (!dragRef.current || !containerRef.current) return;
      const dx = e.clientX - dragRef.current.startMouseX;
      const dy = e.clientY - dragRef.current.startMouseY;
      const { clientWidth: cw, clientHeight: ch } = containerRef.current;
      const r = applyDrag(dragRef.current.startRegion, dragRef.current.handle, dx, dy, cw, ch);
      dragRef.current.currentRegion = r;
      setDragRegion(r);
    };

    const onUp = () => {
      if (dragRef.current) onNameRegionChange(dragRef.current.currentRegion);
      dragRef.current = null;
      setDragRegion(null);
      setIsDragging(false);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [isDragging, onNameRegionChange]);

  // Begin a drag from a corner / interior handle
  const startDrag = useCallback((e: React.MouseEvent, handle: DragHandle) => {
    if (!nameRegion) return;
    e.preventDefault();
    e.stopPropagation();
    const base = dragRegion ?? nameRegion;
    dragRef.current = {
      handle,
      startMouseX: e.clientX,
      startMouseY: e.clientY,
      startRegion: { ...base },
      currentRegion: { ...base },
    };
    setIsDragging(true);
  }, [nameRegion, dragRegion]);

  // Click to place the initial region during calibration
  const handleClick = useCallback((e: React.MouseEvent) => {
    if (scanState !== "calibrating") return;
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    onNameRegionChange({
      x: Math.max(0, cx - DEFAULT_NAME_REGION_W / 2),
      y: Math.max(0, cy - DEFAULT_NAME_REGION_H / 2),
      w: DEFAULT_NAME_REGION_W,
      h: DEFAULT_NAME_REGION_H,
    });
    onStateChange("scanning");
  }, [scanState, onNameRegionChange, onStateChange]);

  const display = dragRegion ?? nameRegion;
  const showOverlay = !!display && scanState !== "idle" && scanState !== "calibrating";

  const corners: { handle: DragHandle; cx: number; cy: number }[] = display ? [
    { handle: "tl", cx: display.x,           cy: display.y },
    { handle: "tr", cx: display.x + display.w, cy: display.y },
    { handle: "bl", cx: display.x,           cy: display.y + display.h },
    { handle: "br", cx: display.x + display.w, cy: display.y + display.h },
  ] : [];

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full rounded-xl overflow-hidden bg-black aspect-video select-none",
        scanState === "calibrating" && "cursor-crosshair",
        isDragging && "cursor-grabbing"
      )}
      onClick={handleClick}
    >
      {stream ? (
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          muted
          playsInline
          autoPlay
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
          Nessuna schermata condivisa
        </div>
      )}

      {/* Name region overlay with draggable handles */}
      {showOverlay && display && (
        <svg
          className="absolute inset-0"
          style={{ width: "100%", height: "100%", overflow: "visible" }}
        >
          {/* Interior — drag to move */}
          <rect
            x={display.x + CORNER_R}
            y={display.y + CORNER_R}
            width={Math.max(0, display.w - CORNER_R * 2)}
            height={Math.max(0, display.h - CORNER_R * 2)}
            fill="transparent"
            style={{ cursor: CURSOR.move, pointerEvents: "all" }}
            onMouseDown={e => startDrag(e, "move")}
          />
          {/* Visible border */}
          <rect
            x={display.x}
            y={display.y}
            width={display.w}
            height={display.h}
            fill="rgba(16,185,129,0.10)"
            stroke="#10b981"
            strokeWidth={2}
            rx={4}
            style={{ pointerEvents: "none" }}
          />
          {/* Dimension label */}
          <text
            x={display.x + display.w / 2}
            y={display.y - 6}
            textAnchor="middle"
            fontSize={10}
            fill="#10b981"
            style={{ pointerEvents: "none", userSelect: "none" }}
          >
            {Math.round(display.w)} × {Math.round(display.h)} px
          </text>
          {/* Corner handles */}
          {corners.map(({ handle, cx, cy }) => (
            <circle
              key={handle}
              cx={cx}
              cy={cy}
              r={CORNER_R}
              fill="#10b981"
              stroke="white"
              strokeWidth={1.5}
              style={{ cursor: CURSOR[handle], pointerEvents: "all" }}
              onMouseDown={e => startDrag(e, handle)}
            />
          ))}
        </svg>
      )}

      {/* Calibration overlay */}
      {scanState === "calibrating" && (
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-3 pointer-events-none">
          <div className="w-10 h-10 rounded-full border-2 border-emerald-400 border-dashed flex items-center justify-center">
            <div className="w-1 h-1 bg-emerald-400 rounded-full" />
          </div>
          <p className="text-white text-sm font-medium text-center px-4">
            Clicca sul nome del Pokémon nel pannello in alto a destra del gioco
          </p>
          <p className="text-emerald-300 text-xs opacity-75">
            (trascina i cerchi verdi per ridimensionare)
          </p>
        </div>
      )}

      {/* Resize hint — shown briefly after region is placed */}
      {showOverlay && !isDragging && (
        <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/60 text-emerald-300 text-[10px] rounded pointer-events-none">
          Trascina gli angoli per regolare
        </div>
      )}

      {/* Last read name badge */}
      {scanState === "scanning" && lastReadName && (
        <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-black/70 text-white text-xs font-medium rounded-lg flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          {lastReadName}
        </div>
      )}
    </div>
  );
}
