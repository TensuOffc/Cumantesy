let handler = async (m, {
    usedPrefix,
    command,
    text
}) => {
    if (!text) return m.reply(Func.example(usedPrefix, command, 'Halo Tensu Bot Ai Disini👋🏻, Untuk mengunakan fitur ini, Ketik .ai masukan pertanyaan yang kamu ingin tanyakan kepada ai\n Untuk penggunaan fitur ai-img ketik .ai-img kucing'))
    m.reply(status.wait)
    try {
        if (command == 'ai') {
            let json = await Func.fetchJson(API('alya', '/api/openai', { prompt: text }, 'apikey'))
            if (!json.status) return m.reply(Func.jsonFormat(json))
            m.reply(json.data.content)
        } else if (command == 'ai-img') {
            let json = await Func.fetchJson(API('alya', '/api/ai-img', { prompt: text }, 'apikey'))
            if (!json.status) return m.reply(Func.jsonFormat(json))
            conn.sendFile(m.chat, json.data[0].url, 'ai-img.jpg', global.set.wm, m)
        }
    } catch (e) {
        console.log(e)
        return m.reply(status.error)
    }
}
handler.help = handler.command = ['ai','ai-img']
handler.tags = ['ai']
handler.limit = 1

module.exports = handler