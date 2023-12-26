let fetch = require('node-fetch')

let timeout = 180000
let poin = 9999
let money = 4999
let handler = async (m, {
  conn, usedPrefix
}) => {
  if (!db.data.settings[conn.user.jid].game) return m.reply(status.game)
  conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku: {}
  let id = m.chat
  if (id in conn.siapakahaku) {
    conn.reply(m.chat, '⚠️ Masih ada soal belum terjawab di chat ini', conn.siapakahaku[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `_*SIAPAKAH AKU?*_
  
  ${json.soal}

❏ Timeout *${(timeout / 1000).toFixed(2)} Detik*
❏ Ketik ${usedPrefix}who Untuk bantuan
❏ Bonus: +${poin} Exp ✨
❏ Bonus: +${money} Money 💵
  
  *Note: Setiap bantuan menggunakan 1 limit!*
  *Balas pesan/soal ini untuk menjawab!*
  *Ketik _nyerah/menyerah_ untuk skip soal ini!*`.trim()
  conn.siapakahaku[id] = [
    await conn.reply(m.chat, caption, m),
    json,
    poin,
    setTimeout(() => {
      if (conn.siapakahaku[id]) conn.reply(m.chat, `⚠️ Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.siapakahaku[id][0])
      delete conn.siapakahaku[id]
    },
      timeout)
  ]
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapa(kah)?aku/i
handler.limit = true
handler.group = true
module.exports = handler