const { app, BrowserWindow } = require('electron')

// Performance Optimization Flags to reduce lag
app.commandLine.appendSwitch('enable-gpu-rasterization');
app.commandLine.appendSwitch('enable-zero-copy');
app.commandLine.appendSwitch('ignore-gpu-blocklist');
app.commandLine.appendSwitch('enable-hardware-overlays');
app.commandLine.appendSwitch('disable-software-rasterizer');

function createWindow() {
  const win = new BrowserWindow({
    width: 1800,
    height: 1000,
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#000000',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true
    }
  })
  win.loadFile('index.html')
  win.maximize()
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit() })
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow() })
