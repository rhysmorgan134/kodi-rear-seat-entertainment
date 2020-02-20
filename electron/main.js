const path = require('path');
const url = require('url');
const { app, BrowserWindow, ipcMain } = require('electron');
const { channels } = require('../src/shared/constants');
const server = require('./server');

let mainWindow;
function createWindow () {
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '../index.html'),
    protocol: 'file:',
    slashes: true,
  });
  mainWindow = new BrowserWindow({
    width: 800,
    height: 480,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  mainWindow.loadURL(startUrl);
  //mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on(channels.APP_INFO, (event) => {
    event.sender.send(channels.APP_INFO, {
      appName: app.getName(),
      appVersion: app.getVersion(),
    });
  });

  ipcMain.on(channels.APP_CLOSE, (event) => {
    app.quit();
    event.sender.send(channels.APP_CLOSE, {
      test: 'test'
    })
  })