let fetch = require('node-fetch')

let timeout = 180000
let poin = 9999
let money = 4999
let handler = async (m, {
  conn, usedPrefix
}) => {
  if (!db.data.settings[conn.user.jid].game) return m.reply(status.game)
  conn.tebakgame = conn.tebakgame ? conn.tebakgame: {}
  let id = m.chat
  if (id in conn.tebakgame) {
    conn.reply(m.chat, '⚠️ Masih ada soal belum terjawab di chat ini', conn.tebakgame[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  // if (!json.status) throw json
  let caption = `_*TEBAK GAME*_
  
❏ Timeout *${(timeout / 1000).toFixed(2)} Detik*
❏ Ketik ${usedPrefix}tega Untuk bantuan
❏ Bonus: +${poin} Exp ✨
❏ Bonus: +${money} Money 💵
  
  *Note: Setiap bantuan menggunakan 1 limit!*
  *Balas pesan/soal ini untuk menjawab!*
  *Ketik _nyerah/menyerah_ untuk skip soal ini!*`.trim()
  conn.tebakgame[id] = [
    await conn.sendFile(m.chat, json.img, 'tebakgame.jpg', caption, m, false, {
      thumbnail: Buffer.alloc(0)
    }),
    json,
    poin,
    setTimeout(() => {
      if (conn.tebakgame[id]) conn.reply(m.chat, `⚠️ Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakgame[id][0])
      delete conn.tebakgame[id]
    },
      timeout)
  ]
}
handler.help = ['tebakgame']
handler.tags = ['game']
handler.command = /^tebakgame/i
handler.limit = true
handler.group = true

module.exports = handler