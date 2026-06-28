const { app, BrowserWindow, ipcMain, screen } = require("electron");
const path = require("path");
const fs = require("fs");

const BASE_URL = "http://localhost:3000";
const CALIBRATION_FILE = path.join(__dirname, "calibration.json");

const DEFAULT_CAL = {
  sprites: [
    { cx: 0.841, cy: 0.197 },
    { cx: 0.841, cy: 0.312 },
    { cx: 0.841, cy: 0.428 },
    { cx: 0.841, cy: 0.543 },
    { cx: 0.841, cy: 0.662 },
    { cx: 0.841, cy: 0.781 },
  ],
  w: 0.058,
  h: 0.090,
};

function loadCal() {
  try { return JSON.parse(fs.readFileSync(CALIBRATION_FILE, "utf8")); }
  catch { return DEFAULT_CAL; }
}
function saveCal(cal) {
  fs.writeFileSync(CALIBRATION_FILE, JSON.stringify(cal, null, 2));
}

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
        margin: 0 !important; padding: 0 !important;
      }
      main { padding-top: 0 !important; margin-top: 0 !important; flex: none !important; }
    `);
  });

  win.loadURL(`${BASE_URL}/overlay`);

  ipcMain.on("win-close",    () => win.close());
  ipcMain.on("win-minimize", () => win.minimize());
}

// ── Sprites list ─────────────────────────────────────────────────────────
ipcMain.handle("get-sprites-list", () => {
  const dir = path.join(__dirname, "../public/sprites_champions");
  try {
    return fs.readdirSync(dir)
      .filter(f => f.endsWith(".png"))
      .map(filename => {
        const m = filename.match(/^Menu_CP_(\d{4})(.*?)\.png$/);
        if (!m) return null;
        return { id: parseInt(m[1], 10), form: m[2] || "", filename };
      })
      .filter(Boolean);
  } catch { return []; }
});

// ── Scan (uses calibration) ──────────────────────────────────────────────
async function takeScreenshot(w, h) {
  const { desktopCapturer } = require("electron");
  win.hide();
  await new Promise(r => setTimeout(r, 80));
  const sources = await desktopCapturer.getSources({
    types: ["screen"],
    thumbnailSize: { width: w, height: h },
  });
  win.show();
  return sources[0]?.thumbnail ?? null;
}

ipcMain.handle("scan-opponent", async () => {
  try {
    const { width, height } = screen.getPrimaryDisplay().size;
    const shot = await takeScreenshot(width, height);
    if (!shot) return null;

    const cal = loadCal();
    const crops = cal.sprites.map(({ cx, cy }) => {
      const sw = Math.round(width  * cal.w);
      const sh = Math.round(height * cal.h);
      const sx = Math.round(width  * cx - sw / 2);
      const sy = Math.round(height * cy - sh / 2);
      return shot.crop({ x: sx, y: sy, width: sw, height: sh }).toDataURL();
    });
    return crops;
  } catch (e) {
    console.error("scan-opponent:", e);
    if (win) win.show();
    return null;
  }
});

// ── Calibration ──────────────────────────────────────────────────────────
ipcMain.handle("get-calibration", () => loadCal());

ipcMain.handle("start-calibration", async () => {
  try {
    const { width, height } = screen.getPrimaryDisplay().size;
    const shot = await takeScreenshot(width, height);
    const screenshot = shot ? shot.toDataURL() : null;
    win.setSize(width, height);
    win.setPosition(0, 0);
    win.show();
    return { screenshot, calibration: loadCal(), screenWidth: width, screenHeight: height };
  } catch (e) {
    console.error("start-calibration:", e);
    win.show();
    return null;
  }
});

ipcMain.handle("save-calibration", (_, cal) => {
  saveCal(cal);
  win.setSize(460, 300);
  win.center();
});

ipcMain.handle("cancel-calibration", () => {
  win.setSize(460, 300);
  win.center();
});

app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
