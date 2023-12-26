let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])}, ${pickRandom(['detik', 'menit', 'jam', 'hari', 'minggu', 'bulan', 'tahun', 'dekade', 'abad'])} lagi..
`.trim(), m, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: wm,jpegThumbnail: Buffer.alloc(0)}}}})
}

handler.help = ['', 'kah'].map(v => 'kapan' + v + ' <text>?')
handler.tags = ['fun']
handler.command = /^kapan(kah)?$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
