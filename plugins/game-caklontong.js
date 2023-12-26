let fetch = require('node-fetch')

let timeout = 180000
let poin = 9999
let money = 4999
let handler = async (m, {
  conn, usedPrefix
}) => {
  if (!db.data.settings[conn.user.jid].game) return m.reply(status.game)
  conn.caklontong = conn.caklontong ? conn.caklontong: {}
  let id = m.chat
  if (id in conn.caklontong) {
    conn.reply(m.chat, '⚠️ Masih ada soal belum terjawab di chat ini', conn.caklontong[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `_*CAK LONTONG*_
  
  ${json.soal}

❏ Timeout *${(timeout / 1000).toFixed(2)} Detik*
❏ Ketik ${usedPrefix}calo Untuk bantuan
❏ Bonus: +${poin} Exp ✨
❏ Bonus: +${money} Money 💵
  
  *Note: Setiap bantuan menggunakan 1 limit!*
  *Balas pesan/soal ini untuk menjawab!*
  *Ketik _nyerah/menyerah_ untuk skip soal ini!*`.trim()
  conn.caklontong[id] = [
    await conn.reply(m.chat, caption, m),
    json,
    poin,
    setTimeout(() => {
      if (conn.caklontong[id]) conn.reply(m.chat, `⚠️ Waktu habis!\nJawabannya adalah *${json.jawaban}*\n${json.deskripsi}`, conn.caklontong[id][0])
      delete conn.caklontong[id]
    },
      timeout)
  ]
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i
handler.limit = true

module.exports = handler