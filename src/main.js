try {
  require('electron-reloader')(module);
} catch (_) {}
const { app, BrowserWindow } = require('electron');
const path = require('path');

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
})

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    x: 0,
    y: 0,
    width: 420,
    height: 440,
    // transparent: true,
    resizable: false,
    // alwaysOnTop: true,
    // webPreferences: {
    //   preload: path.join(__dirname, './preload.js'),
    // }

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  mainWindow.loadFile(path.join(__dirname, './index.html'));

});
