let handler = async (m, {
  usedPrefix,
  command,
  args,
  text
}) => {
  let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  let name = m.sender
  let [_, code] = text.match(linkRegex) || []
  if (!args[0]) return m.reply(`⚠️ Masukan Link Grup\n\n 📌 Contoh:\n *${usedPrefix + command}* <linkwa> <Hari>`)
  if (!code) return m.reply(`⚠️ Link tidak valid!`)
  if (!args[1]) return m.reply(`⚠️ Masukan jumlah hari!`)
  if (isNaN(args[1])) return m.reply(`⚠️ Hanya format angka mewakili jumlah hari.`)
  let anubot = global.owner[1] 
  m.reply(`⚠️ Tunggu 5 detik, Bot otomatis akan bergabung dengan grup!`)
  await Func.delay(5000)
  try {
    var res = await conn.groupAcceptInvite(code)
    var b = await conn.groupMetadata(res)
    var d = b.participants.map(v => v.id)
    var member = d.toString()
    var e = await d.filter(v => v.endsWith(anubot + '@s.whatsapp.net'))
    var jumlahHari = 86400000 * args[1]
    var now = new Date() * 1
    if (now < db.data.chats[res].expired) db.data.chats[res].expired += jumlahHari
    else db.data.chats[res].expired = now + jumlahHari
    if (e.length) await m.reply(`✔ Bot Sukses Bergabung Dengan Group!!\n Group Name: *${await conn.getName(res)}*\n\nExpired: *${msToDate(global.db.data.chats[res].expired - now)}*\n`)
    conn.reply(res, `Halo semuanya👋\n\nSaya adalah Tensura, whatsapp bot yang siap membantu kamu mendapatkan data, informasi, mendownload media, dll hanya melalui whatsapp\n\nBot akan keluar otomatis setelah masa aktif habis\n*Expired* : ${msToDate(db.data.chats[res].expired - now)}`, null, {
      mentions: [d]
    })
  } catch (e) {
    console.log(e)
    return m.reply(Func.jsonFormat(e))
  }
}
handler.help = ['join']
handler.tags = ['owner']
handler.command = ['join']
handler.owner = true
module.exports = handler

function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Hari* - ', h, ' *Jam* - ', m, ' *Menit* - ', s, ' *Detik* '].map(v => v.toString().padStart(2, 0)).join('')
}
