let handler = async (m, { conn, isOwner, text, isAdmin }) => {
  let who
  if (m.isGroup) {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn)
      throw false
    }
    if (isOwner) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    else who = m.chat
  } else {
    if (!isOwner) {
      global.dfail('owner', m, conn)
      throw false
    }
    who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
  }

  try {
    if (who.endsWith('g.us')) global.db.data.chats[who].isBanned = true
    else global.db.data.users[who].banned = true
    conn.reply(m.chat, `✅ Berhasil Banned *${await conn.getName(who) == undefined ? 'ini' : await conn.getName(who)}*, User Tidak Dapat Menggunakan Bot *${await conn.user.name}*`, m)
  } catch (e) {
    throw `⚠️ Nomor tidak ada dalam database!`
  }
}
handler.help = ['ban']
handler.tags = ['owner', 'group']
handler.command = ['ban', 'banchat']
module.exports = handler