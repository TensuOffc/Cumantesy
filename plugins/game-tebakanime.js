let fetch = require('node-fetch')
let timeout = 120000
let poin = 9999
let money = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakjudulanim = conn.tebakjudulanim ? conn.tebakjudulanim : {}
    let id = m.chat
    if (id in conn.tebakjudulanim) {
        conn.reply(m.chat, '⚠️ Masih ada soal belum terjawab di chat ini', conn.tebakjudulanim[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/unx21/ngetezz/main/src/data/nyenyenye.json')
    if (!res.ok) throw eror
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `_*TEBAK ANIME*_
    
❏ Timeout *${(timeout / 1000).toFixed(2)} Detik*
❏ Ketik ${usedPrefix}nime Untuk bantuan
❏ Bonus: +${poin} Exp ✨
❏ Bonus: +${money} Money 💵
  
  *Note: Setiap bantuan menggunakan 1 limit!*
  *Balas pesan/soal ini untuk menjawab!*
  *Ketik _nyerah/menyerah_ untuk skip soal ini!*`.trim()
    conn.tebakjudulanim[id] = [
        await conn.sendFile(m.chat, json.img,  'ages.jpg', caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tebakjudulanim[id]) conn.reply(m.chat, `⚠️ Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakjudulanim[id][0])
            delete conn.tebakjudulanim[id]
        }, timeout)
    ]
}
handler.help = ['tebakanime']
handler.tags = ['game']
handler.command = /^tebakanime/i
handler.group = true
handler.limit = true

module.exports = handler