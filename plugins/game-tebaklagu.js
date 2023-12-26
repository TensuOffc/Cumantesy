let fetch = require('node-fetch')

let timeout = 180000
let poin = 9999
let money = 4999
let handler = async (m, {
  conn, usedPrefix
}) => {
  if (!db.data.settings[conn.user.jid].game) return m.reply(status.game)
  conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu: {}
  let id = m.chat
  if (id in conn.tebaklagu) {
    conn.reply(m.chat, '⚠️ Masih ada soal belum terjawab di chat ini', conn.tebaklagu[id][0])
    throw false
  }
  // ubah isi 'id' kalo mau ganti playlist spotifynya

  let src = await (await fetch('https://raw.githubusercontent.com/Aiinne/scrape/main/tebaklagu.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  // if (!json.status) throw json
  let caption = `_*TEBAK JUDUL LAGU*_

❏ Artis : ${json.artis}
❏ Judul : _____
❏ Timeout *${(timeout / 1000).toFixed(2)} detik*
❏ Ketik *${usedPrefix}cek* untuk bantuan
❏ Bonus: +${poin} XP ✨
❏ Bonus: +${money} Money 💵

  *Note: Setiap bantuan menggunakan 1 limit!*
  *Balas pesan/soal ini untuk menjawab!*
  *Ketik _nyerah/menyerah_ untuk skip soal ini!*`.trim()
  conn.tebaklagu[id] = [
    await m.reply(caption),
    json,
    poin,
    setTimeout(() => {
      if (conn.tebaklagu[id]) conn.reply(m.chat, `⚠️ Waktu habis!\nJawabannya adalah *${json.judul}*`, conn.tebaklagu[id][0])
      delete conn.tebaklagu[id]
    },
      timeout)
  ]
  await conn.sendFile(m.chat,
    json.lagu,
    'audio.mp3',
    '',
    m)
}
handler.help = ['tebaklagu']
handler.tags = ['game']
handler.command = /^tebaklagu$/i
handler.limit = true
handler.group = true
module.exports = handler