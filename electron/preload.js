const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  isElectron: true,
  close:            () => ipcRenderer.send("win-close"),
  minimize:         () => ipcRenderer.send("win-minimize"),
  getSpritesList:   () => ipcRenderer.invoke("get-sprites-list"),
  scanOpponent:     () => ipcRenderer.invoke("scan-opponent"),
  getCalibration:   () => ipcRenderer.invoke("get-calibration"),
  startCalibration: () => ipcRenderer.invoke("start-calibration"),
  saveCalibration:  (cal) => ipcRenderer.invoke("save-calibration", cal),
  cancelCalibration:() => ipcRenderer.invoke("cancel-calibration"),
});
