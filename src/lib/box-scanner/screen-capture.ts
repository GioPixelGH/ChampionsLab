import { CaptureError } from "./types";

export interface CaptureStream {
  stream: MediaStream;
  stop: () => void;
}

/** Returns true when running inside Capacitor (Android/iOS). */
function isCapacitor(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof (window as unknown as Record<string, unknown>).Capacitor !== "undefined"
  );
}

/** Returns true when the browser supports getDisplayMedia (screen capture). */
export function isScreenCaptureSupported(): boolean {
  if (isCapacitor()) return false;
  return (
    typeof navigator !== "undefined" &&
    typeof navigator.mediaDevices?.getDisplayMedia === "function"
  );
}

/**
 * Request a screen capture stream from the user.
 * Throws CaptureError with a typed code on failure.
 */
export async function requestScreenCapture(): Promise<CaptureStream> {
  if (!isScreenCaptureSupported()) {
    throw new CaptureError("NOT_SUPPORTED", "getDisplayMedia is not available on this device.");
  }

  let stream: MediaStream;
  try {
    stream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        frameRate: { ideal: 30 },
        displaySurface: "window",
      } as MediaTrackConstraints,
      audio: false,
    });
  } catch (err) {
    if (err instanceof Error) {
      if (err.name === "NotAllowedError" || err.name === "PermissionDeniedError") {
        throw new CaptureError("NOT_ALLOWED", "Screen capture permission was denied.");
      }
      if (err.name === "NotSupportedError") {
        throw new CaptureError("NOT_SUPPORTED", "Screen capture is not supported.");
      }
    }
    throw new CaptureError("UNKNOWN", String(err));
  }

  return {
    stream,
    stop: () => {
      stream.getTracks().forEach((t) => t.stop());
    },
  };
}
