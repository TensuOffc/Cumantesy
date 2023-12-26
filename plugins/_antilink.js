let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`⚠️「 *Link Group Terdeteksi* 」\nMaaf *${await conn.getName(m.sender)}*, group ini tidak mengizinkan link group lain!`)
    if (isAdmin) return m.reply('*Oh, Hello Admin!*')
    let linkGC = ('https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat))
    let isLinkconnGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkconnGc.test(m.text)
    if (isgclink) return m.reply('⚠️「 *Link Group Terdeteksi* 」\n\nPesan ditolak, bot tidak akan Hapus.\nKarena link group itu sendiri!')
    await conn.sendMessage(m.chat, { delete: m.key })
  }
  return true
}

module.exports = handler
