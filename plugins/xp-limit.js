let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') return m.reply('⚠ Pengguna tidak ada didalam data base')
    m.reply(`🌟 *Total*: ${Func.h2k(global.db.data.users[who].limit)} Limit Left ಥ_ಥ`)
  }
  handler.help = ['limit']
  handler.tags = ['xp']
  handler.command = ['limit']
  module.exports = handler
  