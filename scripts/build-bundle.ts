/**
 * Post-build script for mobile (Capacitor) builds.
 * Run after `next build` with NEXT_PUBLIC_MOBILE=true.
 *
 * Does two things:
 * 1. Writes out/version.json with the current APP_VERSION
 * 2. Creates public/mobile-bundle.zip from the out/ directory
 *    (Vercel serves this at https://championslab.xyz/mobile-bundle.zip)
 */

import { execSync } from "node:child_process";
import { writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const OUT_DIR = join(ROOT, "out");
const PUBLIC_DIR = join(ROOT, "public");
const BUNDLE_PATH = join(PUBLIC_DIR, "mobile-bundle.zip");

const version = process.env.APP_VERSION ?? "1.0.0";
const timestamp = Math.floor(Date.now() / 1000);

if (!existsSync(OUT_DIR)) {
  console.error("❌  out/ directory not found — run build:mobile first");
  process.exit(1);
}

// 1. Write version.json into the static export
const versionJson = JSON.stringify({ version, timestamp }, null, 2);
writeFileSync(join(OUT_DIR, "version.json"), versionJson, "utf-8");
console.log(`✅  out/version.json written (v${version})`);

// 2. Create zip using PowerShell (Windows) or zip CLI (Unix)
const isWindows = process.platform === "win32";

if (isWindows) {
  execSync(
    `powershell -NoProfile -Command "Compress-Archive -Path '${OUT_DIR}\\*' -DestinationPath '${BUNDLE_PATH}' -Force"`,
    { stdio: "inherit" }
  );
} else {
  execSync(`zip -r "${BUNDLE_PATH}" .`, { cwd: OUT_DIR, stdio: "inherit" });
}

console.log(`✅  public/mobile-bundle.zip created (v${version})`);
console.log("👉  Deploy to Vercel to make the update available to users.");
