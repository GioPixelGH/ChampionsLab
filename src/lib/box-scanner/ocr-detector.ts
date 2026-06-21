import type { ChampionsPokemon } from "@/lib/types";

// Lazy-loaded Tesseract worker (singleton, created on first use)
let workerPromise: Promise<import("tesseract.js").Worker> | null = null;

async function getWorker(): Promise<import("tesseract.js").Worker> {
  if (!workerPromise) {
    workerPromise = (async () => {
      const { createWorker } = await import("tesseract.js");
      const w = await createWorker("eng", 1, {
        // Suppress verbose Tesseract logs
        logger: () => {},
      });
      await w.setParameters({
        // Treat the region as a single line of text
        tessedit_pageseg_mode: "7" as unknown as import("tesseract.js").PSM,
        // Only allow letters, hyphens, spaces, dots (Pokémon name charset)
        tessedit_char_whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-. '",
      });
      return w;
    })();
  }
  return workerPromise;
}

/**
 * Returns the actual rendered area of the video considering object-contain letterboxing.
 * The video element may have CSS dimensions larger than the rendered video area.
 */
function getVideoDisplayRect(video: HTMLVideoElement): {
  x: number; y: number; w: number; h: number;
} {
  const containerW = video.clientWidth;
  const containerH = video.clientHeight;
  const videoW = video.videoWidth;
  const videoH = video.videoHeight;

  if (!videoW || !videoH) return { x: 0, y: 0, w: containerW, h: containerH };

  const containerAspect = containerW / containerH;
  const videoAspect = videoW / videoH;

  let displayW: number, displayH: number, offsetX: number, offsetY: number;

  if (videoAspect > containerAspect) {
    // Video wider than container: bars on top and bottom
    displayW = containerW;
    displayH = containerW / videoAspect;
    offsetX = 0;
    offsetY = (containerH - displayH) / 2;
  } else {
    // Video taller than container: bars on left and right
    displayH = containerH;
    displayW = containerH * videoAspect;
    offsetX = (containerW - displayW) / 2;
    offsetY = 0;
  }

  return { x: offsetX, y: offsetY, w: displayW, h: displayH };
}

/** Extract a cropped canvas from the name region of a video element. */
export function cropNameRegion(
  source: HTMLVideoElement,
  region: NameRegion
): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = region.w;
  canvas.height = region.h;
  const ctx = canvas.getContext("2d")!;

  // Account for object-contain letterboxing offset
  const { x: dispX, y: dispY, w: dispW, h: dispH } = getVideoDisplayRect(source);
  const scaleX = source.videoWidth / dispW;
  const scaleY = source.videoHeight / dispH;

  const srcX = (region.x - dispX) * scaleX;
  const srcY = (region.y - dispY) * scaleY;
  const srcW = region.w * scaleX;
  const srcH = region.h * scaleY;

  ctx.drawImage(source, srcX, srcY, srcW, srcH, 0, 0, region.w, region.h);
  return canvas;
}

/** Levenshtein distance between two strings (for fuzzy name matching). */
function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

/**
 * Fuzzy-match an OCR result against the known Pokémon list.
 * Returns the best match if its similarity is high enough, or null.
 */
export function matchPokemonByName(
  ocrText: string,
  pokemonList: ChampionsPokemon[]
): ChampionsPokemon | null {
  const cleaned = ocrText.trim().replace(/[^A-Za-z0-9\-'. ]/g, "");
  if (cleaned.length < 2) return null;

  let best: ChampionsPokemon | null = null;
  let bestDist = Infinity;

  for (const p of pokemonList) {
    const dist = levenshtein(cleaned.toLowerCase(), p.name.toLowerCase());
    // Normalize by the longer name to get a relative distance
    const maxLen = Math.max(cleaned.length, p.name.length);
    const normalized = dist / maxLen;
    if (normalized < 0.35 && dist < bestDist) {
      bestDist = dist;
      best = p;
    }
  }
  return best;
}

/**
 * Run OCR on a canvas image and return the recognized name.
 * Preprocesses the image for better accuracy (high-contrast, upscaled).
 */
export async function recognizeNameFromCanvas(
  canvas: HTMLCanvasElement
): Promise<string> {
  // Upscale for better OCR accuracy (Tesseract works better with larger images)
  const upscaled = document.createElement("canvas");
  const scale = 3;
  upscaled.width = canvas.width * scale;
  upscaled.height = canvas.height * scale;
  const ctx = upscaled.getContext("2d")!;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(canvas, 0, 0, upscaled.width, upscaled.height);

  const worker = await getWorker();
  const result = await worker.recognize(upscaled);
  return result.data.text.trim();
}

/** Clean up the Tesseract worker (call on component unmount if needed). */
export async function terminateOCRWorker(): Promise<void> {
  if (workerPromise) {
    const w = await workerPromise;
    await w.terminate();
    workerPromise = null;
  }
}

// ── Name Region type ──────────────────────────────────────────────────────

export interface NameRegion {
  x: number;   // left offset in display (CSS) pixels
  y: number;   // top offset in display pixels
  w: number;   // width
  h: number;   // height
}

export const DEFAULT_NAME_REGION_W = 280;
export const DEFAULT_NAME_REGION_H = 52;
