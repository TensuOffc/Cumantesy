let handler = m => m
const moment = require('moment-timezone')
const fs = require('fs')
handler.before = function(m) {
    let setting = global.db.data.settings[this.user.jid]
    if (setting.backup) {
        if (new Date() * 1 - setting.backupTime > 3600000) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            let fdoc = {key: {remoteJid: 'status@broadcast',participant: '0@s.whatsapp.net'},message: {documentMessage: {title: '𝙳 𝙰 𝚃 𝙰 𝙱 𝙰 𝚂 𝙴'}}}
            let data = fs.readFileSync('./database.json')
          this.reply(global.numberowner + '@s.whatsapp.net', `*🗓 𝙳 𝙰 𝚃 𝙰 𝙱 𝙰 𝚂 𝙴:* ${date}`, null)
          this.sendMessage(global.numberowner + '@s.whatsapp.net', {document: data, mimetype: 'application/json', fileName: 'database.json'}, {quoted: fdoc})
            setting.backupTime = new Date() * 1
        }
    }
    return !0
}
module.exports = handler