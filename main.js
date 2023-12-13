const { app, BrowserWindow, ipcMain } = require("electron/main");
const path = require("node:path");

function createWindow() {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  ipcMain.on("start-python", (event) => {
    console.log("start-python");
    const { spawn } = require("child_process");
    const pyProg = spawn("python", ["./sign-language/main.py"]);
    pyProg.stdout.on("data", function (data) {
      console.log(data.toString());
      event.reply("python-stdout", data.toString());
    });
    pyProg.stderr.on("data", (data) => {
      console.log(data.toString());
      event.reply("python-stderr", data.toString());
    });
  });

  ipcMain.on("start-talk", (event) => {
    console.log("start-talk");
    const { spawn } = require("child_process");
    const jsProg = spawn("node", ["./speech-to-text.js"]);
    jsProg.stdout.on("data", function (data) {
      console.log(data.toString());
      event.reply("talk-stdout", data.toString());
    });
  });

  mainWindow.loadFile("index.html");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
