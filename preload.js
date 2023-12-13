const { contextBridge, ipcRenderer } = require("electron/renderer");

contextBridge.exposeInMainWorld("electronAPI", {
  //   setTitle: (title) => ipcRenderer.send('set-title', title)
  startPython: () => ipcRenderer.send("start-python"),
  startTalk: () => ipcRenderer.send("start-talk"),
});
