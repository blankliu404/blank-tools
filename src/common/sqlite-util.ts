import path from 'path'
import fs from 'fs'

const dbName = path.join(__dirname, 'data.db')
let db

const initDb = (callback) => {
  fs.access(dbName, fs.constants.F_OK, (err) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const sqlite3 = require('sqlite3').verbose()
    db = new sqlite3.Database(dbName)
    if (err) {
      // 文件不存在进行初始化
      db.serialize(() => {
        db.run('CREATE TABLE system_config (key TEXT, value BOOLEAN)')
        const stmt = db.prepare('INSERT INTO system_config (key, value) VALUES ($key, $value)')
        stmt.run({ $key: 'AUTO_START', $value: false })
        stmt.finalize()
        callback()
      })
    }
  })
}

const getSystemConfig = (key: string) => {
  return new Promise((resolve, reject) => {
    db.get('SELECT value FROM system_config WHERE key = $key', { $key: key }, (err, row) => {
      if (err) {
        reject(err)
      } else {
        resolve(row)
      }
    })
  })
}

const closeDb = () => {
  if (db) {
    db.close()
  }
}

export { initDb, getSystemConfig, closeDb }
