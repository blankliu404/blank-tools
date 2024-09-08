import { contextBridge, ipcRenderer } from 'electron'
import { EVENT_OPEN_PAGE } from '../common/events'

// Custom APIs for renderer
const api = {
  openPage: (callback: (arg0: string) => void) =>
    ipcRenderer.on(EVENT_OPEN_PAGE, (_event, value) => callback(value))
}

try {
  contextBridge.exposeInMainWorld('api', api)
} catch (error) {
  console.error(error)
}
