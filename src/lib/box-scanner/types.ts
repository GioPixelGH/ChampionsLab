export interface BoxLayout {
  x: number;      // left offset in video pixels
  y: number;      // top offset in video pixels
  w: number;      // width in video pixels
  h: number;      // height in video pixels
  cols: number;   // number of columns in the box grid
  rows: number;   // number of rows in the box grid
}

export interface ScanResult {
  pokemonId: number;
  confidence: number;
  cellIndex: number;
}

export type ScanMode = "capture" | "upload";

export type ScanState =
  | "idle"
  | "calibrating"
  | "scanning"
  | "paused"
  | "confirming"
  | "saved";

export type CaptureErrorCode = "NOT_ALLOWED" | "NOT_SUPPORTED" | "UNKNOWN";

export class CaptureError extends Error {
  constructor(public code: CaptureErrorCode, message: string) {
    super(message);
    this.name = "CaptureError";
  }
}
