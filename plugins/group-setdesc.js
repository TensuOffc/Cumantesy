let handler = async (m, {
    conn,
    args
  }) => {
    await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
    m.reply('Sukses mengganti deskripsi group')
  }
  
  handler.help = ['setdesc']
  handler.tags = ['group']
  handler.command = ['setdesc']
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = true
  handler.private = false
  handler.register = false
  handler.admin = true
  handler.botAdmin = true
  module.exports = handler
  