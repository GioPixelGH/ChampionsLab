import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GATE_TOKEN  = process.env.GATE_TOKEN ?? "";
const COOKIE_NAME = "cl_access";

// Paths that bypass the gate
const PUBLIC_PREFIXES = [
  "/_next/",
  "/favicon",
  "/icons/",
  "/blocked",
  "/manifest.json",
  "/robots.txt",
  "/api/version",
];

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  // No GATE_TOKEN configured → open to all (local dev)
  if (!GATE_TOKEN) return NextResponse.next();

  // Always allow static assets and the blocked page itself
  if (PUBLIC_PREFIXES.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // --- First-time auth via query param (sent by the APK on first open) ---
  const paramToken = searchParams.get("token");
  if (paramToken === GATE_TOKEN) {
    const clean = req.nextUrl.clone();
    clean.searchParams.delete("token");
    const res = NextResponse.redirect(clean);
    res.cookies.set(COOKIE_NAME, GATE_TOKEN, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 90, // 90 giorni
      path: "/",
      secure: true,
    });
    return res;
  }

  // --- Subsequent requests: validate cookie ---
  const cookieToken = req.cookies.get(COOKIE_NAME)?.value;
  if (cookieToken === GATE_TOKEN) return NextResponse.next();

  // Blocked
  return NextResponse.redirect(new URL("/blocked", req.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico).*)"],
};
