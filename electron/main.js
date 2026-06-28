const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const BASE_URL = "http://localhost:3000";

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 220,
    minWidth: 300,
    minHeight: 120,
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

  // Stay above fullscreen apps (OBS preview, game windows)
  win.setAlwaysOnTop(true, "screen-saver");
  win.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });

  // Strip all app chrome (navbar, footer, scrollbars, background)
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
      main {
        padding-top: 0 !important;
        margin-top: 0 !important;
        min-height: 0 !important;
        flex: none !important;
      }
    `);
  });

  win.loadURL(`${BASE_URL}/overlay`);

  ipcMain.on("win-close", () => win.close());
  ipcMain.on("win-minimize", () => win.minimize());
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
