import type { ChampionsPokemon } from "@/lib/types";
import type { BoxLayout, ScanResult } from "./types";

const CDN = process.env.NEXT_PUBLIC_SPRITE_CDN ?? "";

function resolveSpriteUrl(path: string): string {
  if (!path || path.startsWith("http")) return path;
  return CDN + path;
}

// 16-bin histogram per channel (R, G, B) = 48 floats total
const BINS = 16;
const HISTOGRAM_SIZE = BINS * 3;
const CELL_SIZE = 64;
const MATCH_THRESHOLD = 0.82;

export type FingerprintMap = Map<number, Float32Array>;

function computeHistogram(imageData: ImageData): Float32Array {
  const hist = new Float32Array(HISTOGRAM_SIZE);
  const { data, width, height } = imageData;
  let count = 0;

  for (let i = 0; i < width * height; i++) {
    const r = data[i * 4];
    const g = data[i * 4 + 1];
    const b = data[i * 4 + 2];
    const a = data[i * 4 + 3];
    if (a < 128) continue; // skip transparent pixels
    hist[Math.floor((r / 256) * BINS)] += 1;
    hist[BINS + Math.floor((g / 256) * BINS)] += 1;
    hist[BINS * 2 + Math.floor((b / 256) * BINS)] += 1;
    count++;
  }

  if (count > 0) {
    for (let i = 0; i < HISTOGRAM_SIZE; i++) hist[i] /= count;
  }
  return hist;
}

function cosineSimilarity(a: Float32Array, b: Float32Array): number {
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  const denom = Math.sqrt(normA) * Math.sqrt(normB);
  return denom === 0 ? 0 : dot / denom;
}

function loadImageOnCanvas(src: string, useCrossOrigin: boolean): Promise<HTMLCanvasElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    if (useCrossOrigin) img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = CELL_SIZE;
      canvas.height = CELL_SIZE;
      const ctx = canvas.getContext("2d");
      if (!ctx) { resolve(null); return; }
      ctx.drawImage(img, 0, 0, CELL_SIZE, CELL_SIZE);
      resolve(canvas);
    };
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

/** Build fingerprint map for all Pokémon. Call once on component mount. */
export async function buildFingerprintMap(
  pokemon: ChampionsPokemon[],
  onProgress?: (loaded: number, total: number) => void
): Promise<FingerprintMap> {
  const map: FingerprintMap = new Map();
  const useCrossOrigin = CDN !== "" && CDN.startsWith("http");
  const BATCH = 20;

  for (let i = 0; i < pokemon.length; i += BATCH) {
    const batch = pokemon.slice(i, i + BATCH);
    const results = await Promise.allSettled(
      batch.map(async (p) => {
        const url = resolveSpriteUrl(p.sprite);
        const canvas = await loadImageOnCanvas(url, useCrossOrigin);
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const imageData = ctx.getImageData(0, 0, CELL_SIZE, CELL_SIZE);
        map.set(p.id, computeHistogram(imageData));
      })
    );
    onProgress?.(Math.min(i + BATCH, pokemon.length), pokemon.length);
    // Yield to avoid blocking the main thread
    await new Promise((r) => setTimeout(r, 0));
    void results; // consumed via side effects in map
  }

  return map;
}

/** Match a single image cell against the fingerprint map. Returns null if no confident match. */
export function matchCell(
  imageData: ImageData,
  map: FingerprintMap
): { pokemonId: number; confidence: number } | null {
  const cellHist = computeHistogram(imageData);
  let bestId = -1;
  let bestScore = 0;

  for (const [id, fingerprint] of map) {
    const score = cosineSimilarity(cellHist, fingerprint);
    if (score > bestScore) {
      bestScore = score;
      bestId = id;
    }
  }

  if (bestScore < MATCH_THRESHOLD || bestId === -1) return null;
  return { pokemonId: bestId, confidence: bestScore };
}

/** Scan a full video frame given a box layout. Returns one result per matching cell. */
export function scanBoxFrame(
  source: HTMLVideoElement | HTMLCanvasElement | ImageBitmap,
  layout: BoxLayout,
  map: FingerprintMap
): ScanResult[] {
  const offscreen = document.createElement("canvas");
  offscreen.width = layout.w;
  offscreen.height = layout.h;
  const ctx = offscreen.getContext("2d");
  if (!ctx) return [];

  // Crop the relevant region from the source
  if (source instanceof HTMLVideoElement) {
    const scaleX = source.videoWidth / source.clientWidth;
    const scaleY = source.videoHeight / source.clientHeight;
    ctx.drawImage(
      source,
      layout.x * scaleX,
      layout.y * scaleY,
      layout.w * scaleX,
      layout.h * scaleY,
      0,
      0,
      layout.w,
      layout.h
    );
  } else {
    ctx.drawImage(source, layout.x, layout.y, layout.w, layout.h, 0, 0, layout.w, layout.h);
  }

  const cellW = layout.w / layout.cols;
  const cellH = layout.h / layout.rows;
  const results: ScanResult[] = [];

  for (let row = 0; row < layout.rows; row++) {
    for (let col = 0; col < layout.cols; col++) {
      const cx = Math.round(col * cellW);
      const cy = Math.round(row * cellH);
      const cw = Math.round(cellW);
      const ch = Math.round(cellH);

      const cellCanvas = document.createElement("canvas");
      cellCanvas.width = CELL_SIZE;
      cellCanvas.height = CELL_SIZE;
      const cellCtx = cellCanvas.getContext("2d");
      if (!cellCtx) continue;

      cellCtx.drawImage(offscreen, cx, cy, cw, ch, 0, 0, CELL_SIZE, CELL_SIZE);
      const imageData = cellCtx.getImageData(0, 0, CELL_SIZE, CELL_SIZE);
      const match = matchCell(imageData, map);

      if (match) {
        results.push({
          pokemonId: match.pokemonId,
          confidence: match.confidence,
          cellIndex: row * layout.cols + col,
        });
      }
    }
  }

  return results;
}
