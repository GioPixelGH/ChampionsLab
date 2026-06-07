/**
 * Base URL for API calls.
 * In mobile (Capacitor) builds, calls must use the absolute deployed URL
 * because the app runs from file:// and has no local server.
 */
export const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "";
