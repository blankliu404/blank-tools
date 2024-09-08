import { Tray, Menu, BrowserWindow } from 'electron'
import { getMenu } from './menu'
import vars from '../../common/var'
import path from 'path'

const icon = path.join(__dirname, '../../resources/icon.png')

// init Tray
const initTray = (window: BrowserWindow) => {
  const tray = new Tray(icon)

  tray.setToolTip(vars.APP_ZN_NAME)
  tray.setTitle(vars.APP_ZN_NAME)

  const contextMenu = Menu.buildFromTemplate(getMenu(window))

  tray.setContextMenu(contextMenu)
}

export { initTray }
