let fetch = require('node-fetch')

let timeout = 180000
let poin = 9999
let money = 4999
let handler = async (m, {
  conn, usedPrefix
}) => {
  if (!db.data.settings[conn.user.jid].game) return m.reply(status.game)
  conn.tekateki = conn.tekateki ? conn.tekateki: {}
  let id = m.chat
  if (id in conn.tekateki) {
    conn.reply(m.chat, '⚠️ Masih ada soal belum terjawab di chat ini', conn.tekateki[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/tekateki.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `_*TEKA TEKI*_
  
  ${json.pertanyaan}

❏ Timeout *${(timeout / 1000).toFixed(2)} Detik*
❏ Ketik ${usedPrefix}tekki Untuk bantuan
❏ Bonus: +${poin} Exp ✨
❏ Bonus: +${money} Money 💵
  
  *Note: Setiap bantuan menggunakan 1 limit!*
  *Balas pesan/soal ini untuk menjawab!*
  *Ketik _nyerah/menyerah_ untuk skip soal ini!*`.trim()
  conn.tekateki[id] = [
    await conn.reply(m.chat, caption, m),
    json,
    poin,
    setTimeout(() => {
      if (conn.tekateki[id]) conn.reply(m.chat, `⚠️ Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tekateki[id][0])
      delete conn.tekateki[id]
    },
      timeout)
  ]
}
handler.help = ['tekateki']
handler.tags = ['game']
handler.command = /^tekateki/i
handler.limit = true
handler.group = true

module.exports = handler