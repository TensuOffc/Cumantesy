let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
m.react('🕛')
     let res = await fetch('https://cataas.com/cat')
     let img = await res.buffer()
     let caption = `Myaw🐱`.trim()
    conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Erro!*_'
    }
}

handler.help = ['cat']
handler.tags = ['internet']
handler.command = /^(cat|kucing)$/i
handler.limit = true
handler.fail = null

module.exports = handler