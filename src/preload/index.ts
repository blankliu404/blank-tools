import { contextBridge, ipcRenderer } from 'electron'
import {
  EVENT_OPEN_PAGE,
  EVENT_MINUS_WIN,
  EVENT_FULL_SCREEN_WIN,
  EVENT_CLOSE_WIN
} from '../common/events'
import { getSystemConfig } from '../common/sqlite-util'

// Custom APIs for renderer
const api = {
  openPage: (callback: (arg0: string) => void) =>
    ipcRenderer.on(EVENT_OPEN_PAGE, (_event, value) => callback(value)),
  minusWin: () => ipcRenderer.send(EVENT_MINUS_WIN),
  fullScreenWin: () => ipcRenderer.send(EVENT_FULL_SCREEN_WIN),
  closeWin: () => ipcRenderer.send(EVENT_CLOSE_WIN),
  getSystemConfig
}

try {
  contextBridge.exposeInMainWorld('api', api)
} catch (error) {
  console.error(error)
}
