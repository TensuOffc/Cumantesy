const { MessageType, Presence } = require('@whiskeysockets/baileys')
const PhoneNumber = require('awesome-phonenumber')
async function handler(m, {
  command,
  conn,
  text
}) {
  this.anonymous = this.anonymous ? this.anonymous : {}  
  let who = m.sender   
  let room = Object.values(this.anonymous).find(room => room.check(who))  
  if (!room) throw 'kamu tidak berada di anonymous chat'
  let other = room.other(who)
  var name
  if (text) name = text
  else name = conn.getName(m.sender)
	var number = who.split('@')[0]
	let tks = `➔ Nomor: ${m.sender.split`@`[0]}
➔ Nama: ${name}`
this.reply(m.chat, 'Menggirimkan Kontak...')
	if (other) this.reply(other, `Partner mengirimkan kontak kepadamu`)
	if (other) this.sendFile(other, await conn.profilePictureUrl(m.sender, 'image').catch(_ => './thumbnail.jpg'), '', ` ᴀɴᴏɴʏᴍᴏᴜs ᴄʜᴀᴛs\n ` + tks, m, {mentions: [m.sender]})
}

handler.help = handler.command = ['sendkontak']
handler.tags = ['anonymous']
handler.private = true
handler.fail = null
module.exports = handler
