const { app, BrowserWindow, ipcMain, screen } = require("electron");
const path = require("path");
const fs = require("fs");

const BASE_URL = "http://localhost:3000";

// Relative centre-points of the 6 opponent sprite icons on the right panel.
// Calibrated from a 1456×816 (16:9) game screenshot.
const SPRITE_REGIONS = [
  { cx: 0.841, cy: 0.197 },
  { cx: 0.841, cy: 0.312 },
  { cx: 0.841, cy: 0.428 },
  { cx: 0.841, cy: 0.543 },
  { cx: 0.841, cy: 0.662 },
  { cx: 0.841, cy: 0.781 },
];
const SPRITE_W_REL = 0.058;
const SPRITE_H_REL = 0.090;

let win = null;

function createWindow() {
  win = new BrowserWindow({
    width: 460,
    height: 300,
    minWidth: 360,
    minHeight: 200,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    hasShadow: false,
    skipTaskbar: false,
    resizable: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.setAlwaysOnTop(true, "screen-saver");
  win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });

  win.webContents.on("did-finish-load", () => {
    win.webContents.insertCSS(`
      ::-webkit-scrollbar { display: none !important; }
      header, footer, #mobile-nav-toggle { display: none !important; }
      html, body {
        background: transparent !important;
        overflow: hidden !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      main { padding-top: 0 !important; margin-top: 0 !important; flex: none !important; }
    `);
  });

  win.loadURL(`${BASE_URL}/overlay`);

  ipcMain.on("win-close", () => win.close());
  ipcMain.on("win-minimize", () => win.minimize());
}

// ── IPC: sprite list ────────────────────────────────────────────────────
ipcMain.handle("get-sprites-list", () => {
  const dir = path.join(__dirname, "../public/sprites_champions");
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".png"))
      .map((filename) => {
        const m = filename.match(/^Menu_CP_(\d{4})(.*?)\.png$/);
        if (!m) return null;
        return { id: parseInt(m[1], 10), form: m[2] || "", filename };
      })
      .filter(Boolean);
  } catch {
    return [];
  }
});

// ── IPC: screenshot + crop 6 opponent sprite regions ───────────────────
ipcMain.handle("scan-opponent", async () => {
  try {
    const { width, height } = screen.getPrimaryDisplay().size;

    // desktopCapturer needs the Electron window hidden briefly to avoid
    // capturing the overlay itself — hide, wait a frame, capture, show.
    if (win) win.hide();
    await new Promise((r) => setTimeout(r, 80));

    const { desktopCapturer } = require("electron");
    const sources = await desktopCapturer.getSources({
      types: ["screen"],
      thumbnailSize: { width, height },
    });

    if (win) win.show();
    if (!sources.length) return null;

    const shot = sources[0].thumbnail;

    const crops = SPRITE_REGIONS.map((region) => {
      const sw = Math.round(width * SPRITE_W_REL);
      const sh = Math.round(height * SPRITE_H_REL);
      const sx = Math.round(width * region.cx - sw / 2);
      const sy = Math.round(height * region.cy - sh / 2);
      return shot.crop({ x: sx, y: sy, width: sw, height: sh }).toDataURL();
    });

    return crops;
  } catch (e) {
    console.error("scan-opponent error:", e);
    if (win) win.show();
    return null;
  }
});

app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
