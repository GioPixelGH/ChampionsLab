// Simple in-memory rate limiter — good enough for serverless routes that
// process expensive external API calls (sync-tournaments, sync-usage-rankings).
// Resets on cold start; not distributed — sufficient for single-region deploys.

interface RateLimitRecord {
  count: number;
  windowStart: number;
}

const store = new Map<string, RateLimitRecord>();

export interface RateLimitOptions {
  /** Max requests per window */
  limit: number;
  /** Window size in milliseconds */
  windowMs: number;
}

/**
 * Returns true if the request should be allowed, false if rate-limited.
 * @param key  Unique identifier (e.g. IP address, route name)
 */
export function checkRateLimit(key: string, options: RateLimitOptions): boolean {
  const now = Date.now();
  const record = store.get(key);

  if (!record || now - record.windowStart > options.windowMs) {
    store.set(key, { count: 1, windowStart: now });
    return true;
  }

  if (record.count >= options.limit) return false;

  record.count += 1;
  return true;
}

/** Clean up stale keys older than 2× the longest window to prevent memory growth. */
export function pruneRateLimitStore(maxAgeMs = 120_000) {
  const now = Date.now();
  for (const [key, record] of store) {
    if (now - record.windowStart > maxAgeMs) store.delete(key);
  }
}
