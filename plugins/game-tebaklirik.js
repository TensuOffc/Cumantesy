const fs = require('fs')
const fetch = require('node-fetch')

let timeout = 180000
let poin = 9999
let money = 4999
let handler = async (m, {
  conn, usedPrefix
}) => {
  if (!db.data.settings[conn.user.jid].game) return m.reply(status.game)
  conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik: {}
  let id = m.chat
  if (id in conn.tebaklirik) {
    conn.reply(m.chat, '⚠️ Masih ada soal belum terjawab di chat ini', conn.tebaklirik[id][0])
    throw false
  }
  let res = await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let data = await res.json()
  let json = data[Math.floor(Math.random() * data.length)]
  let caption = `_*TEBAK LIRIK*_
  
  ${json.soal}

❏ Timeout *${(timeout / 1000).toFixed(2)} Detik*
❏ Ketik ${usedPrefix}teli Untuk bantuan
❏ Bonus: +${poin} Exp ✨
❏ Bonus: +${money} Money 💵
  
  *Note: Setiap bantuan menggunakan 1 limit!*
  *Balas pesan/soal ini untuk menjawab!*
  *Ketik _nyerah/menyerah_ untuk skip soal ini!*`.trim()
  conn.tebaklirik[id] = [
    await conn.reply(m.chat, caption, m),
    json,
    poin,
    setTimeout(() => {
      if (conn.tebaklirik[id]) conn.reply(m.chat, `⚠️ Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebaklirik[id][0])
      delete conn.tebaklirik[id]
    },
      timeout)
  ]
}
handler.help = ['tebaklirik']
handler.tags = ['game']
handler.command = /^tebaklirik/i
handler.limit = true
handler.group = true

module.exports = handler