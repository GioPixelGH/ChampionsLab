export const dynamic = "force-dynamic";
import { NextResponse, NextRequest } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { spawn } from "child_process";
import * as path from "path";
import * as fs from "fs";

export async function POST(req: NextRequest) {
  // Rate limit: max 1 spawn per 5 minutes per origin
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!checkRateLimit(`sync-tournaments:${ip}`, { limit: 1, windowMs: 5 * 60 * 1000 })) {
    return NextResponse.json({ error: "Too many requests — wait 5 minutes" }, { status: 429 });
  }

  // Optional secret guard (set SYNC_SECRET in .env.local to enable)
  const secret = process.env.SYNC_SECRET;
  if (secret) {
    const { secret: provided } = await req.json().catch(() => ({ secret: "" }));
    if (provided !== secret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const cwd = process.cwd();
  const scriptPath = path.join(cwd, "scripts", "sync-limitless-tournaments.ts");
  const isWin = process.platform === "win32";
  const tsxCmd = isWin ? `"${path.join(cwd, "node_modules", ".bin", "tsx.cmd")}"` : path.join(cwd, "node_modules", ".bin", "tsx");
  const logPath = path.join(cwd, "scripts", "sync-last-run.log");

  // Write a "started" marker so the UI can poll
  fs.writeFileSync(logPath, `[${new Date().toISOString()}] Sync started\n`);

  // Spawn detached — returns immediately, script runs in background
  const child = spawn(tsxCmd, [scriptPath], {
    cwd,
    shell: isWin,
    detached: true,
    stdio: ["ignore", "pipe", "pipe"],
  });

  // Stream output to log file
  const logStream = fs.createWriteStream(logPath, { flags: "a" });
  child.stdout?.pipe(logStream);
  child.stderr?.pipe(logStream);
  child.on("close", code => {
    fs.appendFileSync(logPath, `\n[${new Date().toISOString()}] Exited with code ${code}\n`);
    logStream.close();
  });

  child.unref();

  return NextResponse.json({ ok: true, status: "started", logPath: "scripts/sync-last-run.log" });
}
