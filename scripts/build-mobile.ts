/**
 * build-mobile.ts — Bundle the web app into the Capacitor native projects.
 *
 * Usage:
 *   npm run build:mobile           # build + copy (default)
 *   npm run build:mobile -- --sync # build + sync (also updates native plugins)
 *
 * What it does:
 *   1. Runs "next build" to produce a static export in out/
 *   2. Runs "npx cap copy" to copy out/ into android/assets and ios/App
 *      (or "npx cap sync" when --sync is passed, which also runs pod install etc.)
 *
 * After running this script, open the native project to deploy:
 *   npx cap open android
 *   npx cap open ios
 *
 * The resulting app is fully self-contained — it serves bundled assets from the
 * device and works completely offline with no dependency on Vercel or any server.
 */

import { execSync } from "node:child_process";

const sync = process.argv.includes("--sync");

function run(cmd: string) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

run("next build");
run(sync ? "npx cap sync" : "npx cap copy");

console.log(
  sync
    ? "\nDone. Native projects are synced. Run `npx cap open android` or `npx cap open ios`."
    : "\nDone. Web assets copied. Run `npx cap open android` or `npx cap open ios`."
);
