let fs = require('fs')
let timeout = 120000
let poin = 9999
let money = 4999
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebaklogo = conn.tebaklogo ? conn.tebaklogo: {}
    let id = 'tebaklogo-' + m.chat
    if (id in conn.tebaklogo) return conn.reply(m.chat, '⚠️ Masih ada soal belum terjawab di chat ini', conn.tebaklogo[id][0])
    let src = JSON.parse(fs.readFileSync('./json/tebaklogo.json', 'utf-8'))
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `_*TEBAK LOGO*_
    
${json.deskripsi}

❏ Timeout *${(timeout / 1000).toFixed(2)} Detik*
❏ Ketik ${usedPrefix}tego Untuk bantuan
❏ Bonus: +${poin} Exp ✨
❏ Bonus: +${money} Money 💵
  
  *Note: Setiap bantuan menggunakan 1 limit!*
  *Balas pesan/soal ini untuk menjawab!*
  *Ketik _nyerah/menyerah_ untuk skip soal ini!*`.trim()
    conn.tebaklogo[id] = [
        await conn.sendFile(m.chat, json.img, 'tebaklogo.jpg', caption, m),
        json,
        poin,
        setTimeout(() => {
            if (conn.tebaklogo[id]) conn.reply(m.chat, `⚠️ Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebaklogo[id][0])
            delete conn.tebaklogo[id]
        }, timeout)
    ]
}
handler.help = ['tebaklogo']
handler.tags = ['game']
handler.command = /^tebaklogo$/i

handler.limit = true
handler.group = true

module.exports = handler