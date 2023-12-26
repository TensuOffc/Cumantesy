let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
╔╣ *AFK Sampai Mengirim Pesan* 
║ *User*: @${m.sender.split`@`[0]} Telah *AFK* 💤
║ *Alasan*: ${text ? text : 'None'}
╚══════════╣⊱ `)
}
handler.help = ['afk *alasan*']
handler.tags = ['fun']
handler.command = /^afk$/i
handler.limit = 0

module.exports = handler
