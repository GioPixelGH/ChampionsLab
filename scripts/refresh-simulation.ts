/**
 * Simulation Refresh Pipeline
 * ───────────────────────────
 * Detects regulation changes and re-runs the tier sync when needed.
 * Run with: tsx scripts/refresh-simulation.ts
 *
 * This script checks if the active regulation has changed since the last run,
 * and if so triggers sync:tiers to update the static simulation data.
 *
 * For a full meta recalculation (2M battle re-simulation), call with --full:
 *   tsx scripts/refresh-simulation.ts --full
 *
 * Intended to be run via cron or CI after regulation changes.
 */

import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

const STATE_FILE = path.join(__dirname, ".refresh-state.json");

interface RefreshState {
  lastRegulation: string;
  lastRunAt: string;
  lastTierHash: string;
}

function readState(): RefreshState {
  try {
    return JSON.parse(fs.readFileSync(STATE_FILE, "utf-8")) as RefreshState;
  } catch {
    return { lastRegulation: "", lastRunAt: "", lastTierHash: "" };
  }
}

function writeState(state: RefreshState) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

function hashFile(filePath: string): string {
  const content = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf-8") : "";
  let hash = 0;
  for (let i = 0; i < content.length; i++) {
    hash = ((hash << 5) - hash) + content.charCodeAt(i);
    hash |= 0;
  }
  return hash.toString(16);
}

function getActiveRegulation(): string {
  // Parse pokemon-data.ts to find the active regulation
  const dataFile = path.join(__dirname, "../src/lib/pokemon-data.ts");
  const content = fs.readFileSync(dataFile, "utf-8");
  const match = content.match(/isActive:\s*true[^}]*?id:\s*"([^"]+)"/)
    ?? content.match(/id:\s*"([^"]+)"[^}]*?isActive:\s*true/);
  return match?.[1] ?? "unknown";
}

function run(cmd: string): void {
  console.log(`\n$ ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd: path.join(__dirname, "..") });
}

// ── Main ──────────────────────────────────────────────────────────────────────

const isFull = process.argv.includes("--full");
const tiersFile = path.join(__dirname, "../src/lib/tiers.ts");
const state = readState();

const currentRegulation = getActiveRegulation();
const currentTierHash = hashFile(tiersFile);

const regulationChanged = currentRegulation !== state.lastRegulation;
const tiersChanged      = currentTierHash !== state.lastTierHash;

console.log("=== Champions Lab Simulation Refresh ===");
console.log(`Active regulation : ${currentRegulation}`);
console.log(`Last regulation   : ${state.lastRegulation || "(none)"}`);
console.log(`Regulation changed: ${regulationChanged}`);
console.log(`Tiers file changed: ${tiersChanged}`);
console.log(`Full refresh      : ${isFull}`);

if (!regulationChanged && !tiersChanged && !isFull) {
  console.log("\n✓ No changes detected — nothing to refresh.\n");
  process.exit(0);
}

console.log("\n→ Running tier sync...");
run("npx tsx scripts/sync-tiers.ts");

if (isFull) {
  console.log("\n→ Full simulation refresh requested.");
  console.log("  This would re-run the Monte Carlo simulation pipeline.");
  console.log("  NOTE: Re-simulation requires significant compute (~30 min).");
  console.log("  Implement your simulation runner here, e.g.:");
  console.log("    run('npx tsx scripts/run-simulation.ts')");
  console.log("  Then update simulation-data.ts with the results.");
}

const newState: RefreshState = {
  lastRegulation: currentRegulation,
  lastRunAt: new Date().toISOString(),
  lastTierHash: hashFile(tiersFile),
};
writeState(newState);

console.log(`\n✓ Refresh complete. State saved to ${STATE_FILE}`);
console.log(`  Next run: tsx scripts/refresh-simulation.ts`);
console.log(`  Full run: tsx scripts/refresh-simulation.ts --full\n`);
