
let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(['Mungkin suatu hari','Tidak juga','Tidak keduanya','Kurasa tidak','Ya','Coba tanya lagi','Tidak ada'])}
`.trim(), m, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: wm,jpegThumbnail: Buffer.alloc(0)}}}})
}
handler.help = ['kerang', 'kerangajaib'].map(v => v + ' <pertanyaan>')

handler.tags = ['fun']
handler.command = /^(kulit)?kerang(ajaib)?$/i
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

