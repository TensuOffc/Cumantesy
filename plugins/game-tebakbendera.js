/*let fetch = require('node-fetch')

let timeout = 180000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
  let id = m.chat
  if (id in conn.tebakbendera) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakbendera[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
  // if (!json.status) throw json
  let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tekbe untuk hint
Bonus: ${poin} XP
    `.trim()
  conn.tebakbendera[id] = [
    await conn.sendFile(m.chat, json.img, 'tebakbendera.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) }),
    json, poin,
    setTimeout(() => {
      if (conn.tebakbendera[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.name}*`, conn.tebakbendera[id][0])
      delete conn.tebakbendera[id]
    }, timeout)
  ]
}
handler.help = ['tebakbendera (error)']
handler.tags = ['game']
handler.command = /^tebakbendera/i
handler.limit = true
handler.group = true

module.exports = handler*/


let fetch = require('node-fetch')

let timeout = 120000
let poin = 9999
let money = 4999
let src
let handler = async (m, {
  conn, usedPrefix
}) => {
  if (!db.data.settings[conn.user.jid].game) return m.reply(status.game)
  conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera: {}
  let id = m.chat
  if (id in conn.tebakbendera) {
    conn.reply(m.chat, '⚠️ Masih ada soal belum terjawab di chat ini', conn.tebakbendera[id][0])
    throw false
  }
  if (!src) src = await (await fetch(global.API('https://raw.githubusercontent.com', '/qisyana/scrape/main/flag.json'))).json()
  let json = src[Math.floor(Math.random() * src.length)]
  if (!json) throw json
  let caption = `_*TEBAK BENDERA*_
  
❏ Timeout *${(timeout / 1000).toFixed(2)} Detik*
❏ Ketik ${usedPrefix}tekbe Untuk bantuan
❏ Bonus: +${poin} Exp ✨
❏ Bonus: +${money} Money 💵
  
  *Note: Setiap bantuan menggunakan 1 limit!*
  *Balas pesan/soal ini untuk menjawab!*
  *Ketik _nyerah/menyerah_ untuk skip soal ini!*`.trim()
  conn.tebakbendera[id] = [
    await conn.sendFile(m.chat, json.img, 'img.jpg', caption, m),
    json,
    poin,
    setTimeout(() => {
      if (conn.tebakbendera[id]) conn.reply(m.chat, `⚠️ Waktu habis!\nJawabannya adalah *${json.name}*`, conn.tebakbendera[id][0])
      delete conn.tebakbendera[id]
    },
      timeout)
  ]
}
handler.help = ['tebakbendera']
handler.tags = ['game']
handler.command = /^tebakbendera/i
handler.limit = true
handler.group = true

module.exports = handler