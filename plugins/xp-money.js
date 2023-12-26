let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') return m.reply('Pengguna tidak ada didalam data base')
    m.reply(`💵 *Total:* ${Func.h2k(global.db.data.users[who].money)} Money`)
  }
  handler.help = ['money']
  handler.tags = ['xp']
  handler.command = ['money', 'uang']
  module.exports = handler
  