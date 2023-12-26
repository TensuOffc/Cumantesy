let handler = async (m, { conn, command, text, args }) => {
    if (!text) throw 'Mau Cheat?, Tag User nya, ketik .cheat @user'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag??'
    let users = global.db.data.users
        users[who].limit = 99999999999999
        users[who].level = 99999999999999
        
        conn.reply(m.chat, `⚠️ *Sukses Cheat!*`, m)
}
handler.help = ['cheat']
handler.tags = ['owner']
handler.command = /^cheat(user)?$/i
handler.owner = true

module.exports = handler
