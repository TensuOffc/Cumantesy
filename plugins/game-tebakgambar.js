let fetch = require('node-fetch')

let timeout = 120000
let poin = 9999
let money = 4999
let src
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
  let id = m.chat
  if (id in conn.tebakgambar) {
    conn.reply(m.chat, '⚠️ Masih ada soal belum terjawab di chat ini', conn.tebakgambar[id][0])
    throw false
  }
  if (!src) src = await (await fetch(global.API('https://raw.githubusercontent.com', '/BochilTeam/database/master/games/tebakgambar.json'))).json()
  let json = src[Math.floor(Math.random() * src.length)]
  if (!json) throw json
  let caption = `_*TEBAK GAMBAR*_

❏ Timeout *${(timeout / 1000).toFixed(2)} Detik*
❏ Ketik ${usedPrefix}hint Untuk bantuan
❏ Bonus: +${poin} Exp ✨
❏ Bonus: +${money} Money 💵
  
  *Note: Setiap bantuan menggunakan 1 limit!*
  *Balas pesan/soal ini untuk menjawab!*
  *Ketik _nyerah/menyerah_ untuk skip soal ini!*`.trim()
conn.tebakgambar[id] = [
    await conn.sendMessage(m.chat, { image: { url: json.img }, caption: caption }, { quoted: m }),
    json, poin,
    setTimeout(() => {
      if (conn.tebakgambar[id]) conn.reply(m.chat, `⚠️ Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakgambar[id][0])
      delete conn.tebakgambar[id]
    }, timeout)
  ]
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^(tebakgambar)/i
handler.limit = true
handler.group = true
handler.game = true
module.exports = handler