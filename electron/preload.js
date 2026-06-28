const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  isElectron: true,
  close: () => ipcRenderer.send("win-close"),
  minimize: () => ipcRenderer.send("win-minimize"),
  getSpritesList: () => ipcRenderer.invoke("get-sprites-list"),
  scanOpponent: () => ipcRenderer.invoke("scan-opponent"),
});
