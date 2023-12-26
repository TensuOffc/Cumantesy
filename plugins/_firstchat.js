let moment = require('moment-timezone')
let handler = m => m
handler.before = async function(m) {
  if (m.chat.endsWith('broadcast')) return
  if (m.fromMe) return
  if (m.isGroup) return
  let user = global.db.data.users[m.sender]
  let { banned } = db.data.users[m.chat]
  let username = conn.getName(m.sender)
  if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
  await this.reply(m.chat, `Hello!, ${ucapan()} ${username.replace(/@.+/, '')}\n\n${banned ? `Kamu telah terbanned, Hubungi Owner!` : `Ada yang bisa ${namebot} bantu?\nKetik ".tutorial" untuk mengetahui cara memulai bot!\n\nJangan Lupa Join Group Official Bot Untuk Mendapatkan Info Seputar Bot!\nLink: https://chat.whatsapp.com/JliwDGDqgCaF8nAfjWkpdn`}`.trim(), m)
  user.pc = new Date * 1
}
module.exports = handler

function ucapan() {
  let time = moment.tz('Asia/Jakarta').format('HH')
  let res = `💤 Jangan lupa tidur`
  if (time >= 5) res = `˃o˂ Selamat pagi`
  if (time >= 11) res = `˃o˂ Selamat siang`
  if (time >= 15) res = `˃o˂ Selamat sore`
  if (time >= 19) res = `˃o˂ Selamat malam`
  return res
}
