const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = 'tebaklogo-' + m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*tego/i.test(m.quoted.text) || /.*tego/i.test(m.text))
        return !0
    this.tebaklogo = this.tebaklogo ? this.tebaklogo : {}
    if (!(id in this.tebaklogo))
        return m.reply('⚠️ Soal itu telah berakhir, Ketik .tebaklogo Untuk memulai sesi baru!')
    if (m.quoted.id == this.tebaklogo[id][0].id) {
    let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebaklogo[id][3])
            delete this.tebaklogo[id]
            return m.reply('*Yah Menyerah!*')
        }
        let json = JSON.parse(JSON.stringify(this.tebaklogo[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebaklogo[id][2]
            global.db.data.users[m.sender].money += 4999
            m.reply(`✔ *Benar!*\n+${this.tebaklogo[id][2]} XP ✨\n+4999 Money 💵`)
            clearTimeout(this.tebaklogo[id][3])
            delete this.tebaklogo[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            m.reply(`✖ *Salah!*`)
    }
    return !0
}
module.exports = handler
