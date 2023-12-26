let fetch = require('node-fetch')

let timeout = 180000
let poin = 9999
let money = 4999
let handler = async (m, {
  conn, usedPrefix
}) => {
  if (!db.data.settings[conn.user.jid].game) return m.reply(status.game)
  conn.lengkapikalimat = conn.lengkapikalimat ? conn.lengkapikalimat: {}
  let id = m.chat
  if (id in conn.lengkapikalimat) {
    conn.reply(m.chat, '⚠️ Masih ada soal belum terjawab di chat ini', conn.lengkapikalimat[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/lengkapikalimat.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `_*LENGKAPI KALIMAT*_
  
${json.pertanyaan}

❏ Timeout *${(timeout / 1000).toFixed(2)} Detik*
❏ Ketik ${usedPrefix}leka Untuk bantuan
❏ Bonus: +${poin} Exp ✨
❏ Bonus: +${money} Money 💵
  
  *Note: Setiap bantuan menggunakan 1 limit!*
  *Balas pesan/soal ini untuk menjawab!*
  *Ketik _nyerah/menyerah_ untuk skip soal ini!*`.trim()
  conn.lengkapikalimat[id] = [
    await conn.reply(m.chat, caption, m),
    json,
    poin,
    setTimeout(() => {
      if (conn.lengkapikalimat[id]) conn.reply(m.chat, `⚠️ Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.lengkapikalimat[id][0])
      delete conn.lengkapikalimat[id]
    },
      timeout)
  ]
}
handler.help = ['lengkapikalimat']
handler.tags = ['game']
handler.command = /^lengkapikalimat/i
handler.limit = true
handler.group = true

module.exports = handler