import { BrowserWindow } from 'electron'

const EVENT_OPEN_PAGE: string = 'open-page'

const openPage = (data: { window: BrowserWindow; page: string }) => {
  console.log(data.page)

  data.window.show()
  data.window.webContents.send(EVENT_OPEN_PAGE, data.page)
}

export { EVENT_OPEN_PAGE, openPage }
