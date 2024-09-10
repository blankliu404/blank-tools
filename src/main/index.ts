import { app, nativeImage, BrowserWindow, shell, ipcMain } from 'electron'
import { electronApp, is } from '@electron-toolkit/utils'
import { join } from 'path'
import vars from '../common/var'
import { initTray } from './tray/tray'
import { EVENT_CLOSE_WIN, EVENT_FULL_SCREEN_WIN, EVENT_MINUS_WIN } from '../common/events'

const icon = nativeImage.createFromPath('resources/icon.png')
let mainWindow: BrowserWindow

function createWindow(): void {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    transparent: true,
    frame: false,
    show: false,
    // autoHideMenuBar: true,
    // titleBarStyle: 'hidden',
    // titleBarOverlay: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  mainWindow.on('close', (e) => {
    if (!vars.mainWindowQuit) {
      e.preventDefault()
      mainWindow.hide()
    }
  })
}

app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('tools.blank')

  createWindow()

  // init tray
  initTray(mainWindow)
})

ipcMain.on(EVENT_CLOSE_WIN, () => mainWindow.close())
ipcMain.on(EVENT_FULL_SCREEN_WIN, () =>
  mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize()
)
ipcMain.on(EVENT_MINUS_WIN, () => mainWindow.minimize())
