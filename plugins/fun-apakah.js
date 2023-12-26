
let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(['Ya', 'Mungkin iya', 'Mungkin', 'Mungkin tidak', 'Tidak', 'Tidak mungkin'])}
`.trim(), m, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: wm,jpegThumbnail: Buffer.alloc(0)}}}})
}
handler.help = ['apakah'].map(v => v + ' <pertanyaan>')
handler.tags = ['fun']
handler.command = /^apakah/i
handler.owner = false

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

