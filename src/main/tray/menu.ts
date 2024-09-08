import { BrowserWindow, MenuItem, MenuItemConstructorOptions, app } from 'electron'
import { openPage } from '../../common/events'
import vars from '../../common/var'

const getMenu = (window: BrowserWindow): Array<MenuItemConstructorOptions | MenuItem> => {
  /**
   * menu config
   */
  const menu: Array<MenuItemConstructorOptions | MenuItem> = [
    {
      label: '工具',
      type: 'submenu',
      submenu: [
        {
          label: '编解码',
          type: 'submenu',
          submenu: [
            {
              label: 'Base64',
              click: () => openPage({ window: window, page: 'base64' })
            }
          ]
        }
      ]
    },
    { type: 'separator' },
    {
      label: '设置',
      click: () => openPage({ window: window, page: 'settings' })
    },
    { type: 'separator' },
    {
      label: '退出',
      click: () => {
        vars.mainWindowQuit = true
        app.quit()
      }
    }
  ]
  return menu
}

export { getMenu }
