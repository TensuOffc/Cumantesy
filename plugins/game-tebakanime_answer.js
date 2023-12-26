const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*nime/i.test(m.quoted.text)) return !0
  this.tebakjudulanim = this.tebakjudulanim ? this.tebakjudulanim : {}
  if (!(id in this.tebakjudulanim)) return m.reply('⚠️ Soal itu telah berakhir, Ketik .tebakanime Untuk memulai sesi baru!')
  if (m.quoted.id == this.tebakjudulanim[id][0].id) {
  let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakjudulanim[id][3])
            delete this.tebakjudulanim[id]
            return m.reply('*Yah Menyerah!*')
        }
    let json = JSON.parse(JSON.stringify(this.tebakjudulanim[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
      global.db.data.users[m.sender].exp += this.tebakjudulanim[id][2]
      global.db.data.users[m.sender].money += 4999
      m.reply(`✔ *Benar!*\n+${this.tebakjudulanim[id][2]} XP ✨\n+4999 Money 💵`)
      clearTimeout(this.tebakjudulanim[id][3])
      delete this.tebakjudulanim[id]
    } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
    else m.reply(`✖ *Salah!*`)
  }
  return !0
}
handler.exp = 0

module.exports = handler
