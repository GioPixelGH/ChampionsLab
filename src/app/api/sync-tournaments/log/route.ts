export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import * as path from "path";
import * as fs from "fs";

export async function GET() {
  const logPath = path.join(process.cwd(), "scripts", "sync-last-run.log");
  if (!fs.existsSync(logPath)) {
    return NextResponse.json({ exists: false, log: "" });
  }
  const log = fs.readFileSync(logPath, "utf-8");
  const done = log.includes("Exited with code");
  const failed = done && !log.includes("Exited with code 0");
  return NextResponse.json({ exists: true, log, done, failed });
}
