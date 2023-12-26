let handler = async (m, { conn }) => {
    conn.tebakjudulanim = conn.tebakjudulanim ? conn.tebakjudulanim : {}
    let id = m.chat
    if (!(id in conn.tebakjudulanim)) throw false
    let json = conn.tebakjudulanim[id][1]
    let ans = json.jawaban.trim()
    let clue = ans.replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + clue + '```\nBalas soalnya, bukan pesan ini', conn.tebakjudulanim[id][0])
}
handler.command = /^nime$/i
handler.limit = true

module.exports = handler