let fetch = require('node-fetch')
let { sticker } = require('../lib/sticker.js')
//import db from '../lib/database.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
	
   let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
     if (!who) throw `✳️ Tag or mention someone\n\n📌 Example : ${usedPrefix + command} @tag` 
     
    let user = global.db.data.users[who]
    let name = await conn.getName(who) 
   let name2 = m.name
    await m.react('🕛')

  let rpat = await fetch(`https://api.waifu.pics/nsfw/blowjob`)
    if (!rpat.ok) throw await rpat.text()
   let json = await rpat.json()
   let { url } = json
   let stiker = await sticker(null, url, `(${name2}) blowjob to`, `${name}`)
   conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
   await m.reply('🥵')  
   
}

handler.help = ['blowjob @tag']
handler.tags = ['anime', 'nsfw']
handler.command = /^(blowjob)$/i
handler.group = true
handler.premium = true
module.exports = handler