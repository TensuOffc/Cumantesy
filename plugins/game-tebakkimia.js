let fetch = require('node-fetch')

let timeout = 180000
let poin = 9999
let money = 4999
let handler = async (m, {
  conn, usedPrefix
}) => {
  if (!db.data.settings[conn.user.jid].game) return m.reply(status.game)
  conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia: {}
  let id = m.chat
  if (id in conn.tebakkimia) {
    conn.reply(m.chat, '⚠️ Masih ada soal belum terjawab di chat ini', conn.tebakkimia[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `_*TEBAK KIMIA*_
  
  Nama unsur dari lambang ${json.lambang} adalah...

❏ Timeout *${(timeout / 1000).toFixed(2)} Detik*
❏ Ketik ${usedPrefix}teki Untuk bantuan
❏ Bonus: +${poin} Exp ✨
❏ Bonus: +${money} Money 💵
  
  *Note: Setiap bantuan menggunakan 1 limit!*
  *Balas pesan/soal ini untuk menjawab!*
  *Ketik _nyerah/menyerah_ untuk skip soal ini!*`.trim()
  conn.tebakkimia[id] = [
    await conn.reply(m.chat, caption, m),
    json,
    poin,
    setTimeout(() => {
      if (conn.tebakkimia[id]) conn.reply(m.chat, `⚠️ Waktu habis!\nJawabannya adalah *${json.unsur}*`, conn.tebakkimia[id][0])
      delete conn.tebakkimia[id]
    },
      timeout)
  ]
}
handler.help = ['tebakkimia']
handler.tags = ['game']
handler.command = /^tebakkimia/i
handler.limit = true
handler.group = true

module.exports = handler