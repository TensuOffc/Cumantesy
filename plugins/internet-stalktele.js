let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {
  if (!text) throw `⚠️ Masukan Usernamenya`
  m.react('🕛')
  try {
    let res = await fetch(`https://www.forestapi.my.id/api/telegram/user/${text}`)
    let zel = await res.json()
   conn.sendFile(m.chat, zel.image_url, 'anu.jpg', `
本║ *T E L E G R A M - S T A L K* ║本

∘ Username Telegram: ${zel.username}
∘ Name: ${zel.name}
∘ Bio: ${zel.bio}`, m)
   } catch (e) {
   throw e
   }
}
handler.help = ['telestalk']
handler.tags = ['internet', 'premium']
handler.command = /^(telestalk)$/i
handler.premium = true 
module.exports = handler