import { BrowserWindow } from 'electron'

const EVENT_OPEN_PAGE: string = 'open-page'
const EVENT_MINUS_WIN: string = 'minus-win'
const EVENT_FULL_SCREEN_WIN: string = 'full-screen-win'
const EVENT_CLOSE_WIN: string = 'close-win'

const openPage = (data: { window: BrowserWindow; page: string }) => {
  // console.log(data.page)

  data.window.show()
  data.window.webContents.send(EVENT_OPEN_PAGE, data.page)
}

export { EVENT_OPEN_PAGE, EVENT_MINUS_WIN, EVENT_FULL_SCREEN_WIN, EVENT_CLOSE_WIN, openPage }
