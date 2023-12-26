const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*suska/i.test(m.quoted.text)) return !0
    this.susunkata = this.susunkata ? this.susunkata : {}
    if (!(id in this.susunkata)) return m.reply('⚠️ Soal itu telah berakhir, Ketik .susunkata Untuk memulai sesi baru!')
    if (m.quoted.id == this.susunkata[id][0].id) {
    let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.susunkata[id][3])
            delete this.susunkata[id]
            return m.reply('*Yah Menyerah!*')
        }
        let json = JSON.parse(JSON.stringify(this.susunkata[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.susunkata[id][2]
            global.db.data.users[m.sender].money += 4999
            m.reply(`✔ *Benar!*\n+${this.susunkata[id][2]} XP ✨\n+4999 Money 💵`)
            clearTimeout(this.susunkata[id][3])
            delete this.susunkata[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`✖ *Salah!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler