let fetch = require('node-fetch')
let { sticker } = require('../lib/sticker.js')
//import db from '../lib/database.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
	
	 let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    if (!who) throw `✳️Tag or mention someone\n\n📌 Example : ${usedPrefix + command} @tag`
    
    let user = global.db.data.users[who]
    let name = await conn.getName(who) 
   let name2 = m.name
    await m.react('🕛')

  let rki = await fetch(`https://api.waifu.pics/sfw/kiss`)
    if (!rki.ok) throw await rki.text()
   let jkis = await rki.json()
   let { url } = jkis
   let stiker = await sticker(null, url, `(${name2}) kissed`, `${name}`)
   conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
   await m.reply('😚')  
   
}

handler.help = ['kiss @tag']
handler.tags = ['anime', 'nsfw']
handler.command = /^(kiss|beso)$/i
handler.premium = true
handler.group = true

module.exports = handler
