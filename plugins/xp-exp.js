let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') return m.reply('Pengguna tidak ada didalam data base')
    m.reply(`✨ *Total:* ${Func.h2k(global.db.data.users[who].exp)} Exp`)
  }
  handler.help = ['exp']
  handler.tags = ['xp']
  handler.command = ['exp']
  module.exports = handler
  