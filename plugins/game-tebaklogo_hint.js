let handler = async (m, { conn }) => {
    conn.tebaklogo = conn.tebaklogo ? conn.tebaklogo : {}
    let id = 'tebaklogo-' + m.chat
    if (!(id in conn.tebaklogo)) return
    let json = conn.tebaklogo[id][1]
    m.reply('Clue : ' + '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```' + '\n\n_*Balas soalnya, bukan pesan ini!*_')
}
handler.command = /^tego$/i
handler.limit = true
module.exports = handler