const { app, Menu, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
let win;

function createWindow() {
Menu.setApplicationMenu(null);
  win = new BrowserWindow({
    icon: path.join(__dirname, "icons/favicon.ico"),
    width: 1080,
    height: 600,
    resizable: true,
    allowRunningInsecureContent: true,
    experimentalCanvasFeatures: true,
    simpleFullscreen: false,
  });

  // win.webContents.openDevTools();
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `src/index.html`),
      protocol: "file:",
      slashes: true,
    })
  );

  // win.loadURL('https://www.sharp-witted.com/')
  win.on("closed", () => {
    win = null;
  });
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
