const timeout = 10800000

let handler = async (m, {
  conn,
  usedPrefix,
  text
}) => {
 
  let time = global.db.data.users[m.sender].lastpanen + 10800000
  if (new Date - global.db.data.users[m.sender].lastpanen < 10800000) throw `⚠️ Anda sudah lelah untuk panen\nTunggu selama ${msToTime(time - new Date())} lagi`
    let mangga = `${Math.floor(Math.random() * 100)}`.trim()
	let anggur = `${Math.floor(Math.random() * 100)}`.trim()
	let pisang = `${Math.floor(Math.random() * 100)}`.trim()
	let jeruk = `${Math.floor(Math.random() * 100)}`.trim()
	let apel = `${Math.floor(Math.random() * 100)}`.trim()
	global.db.data.users[m.sender].mangga += mangga * 1
	global.db.data.users[m.sender].anggur += anggur * 1
	global.db.data.users[m.sender].pisang += pisang * 1
	global.db.data.users[m.sender].jeruk += jeruk * 1
	global.db.data.users[m.sender].apel += apel * 1
	global.db.data.users[m.sender].lastpanen = new Date * 1
  m.reply(`Selamat, Panen Kamu Jackpot, Mendapatkan: 
+${mangga} Mangga 🥭
+${anggur} Anggur 🍇
+${pisang} Pisang 🍌
+${jeruk} Jeruk 🍊
+${apel} Apel 🍎
Dari Kakek Zeus⚡`)
  setTimeout(() => {
    conn.reply(m.chat, `Waktunya panen buah Kakek Zeus lagi cuy 🍎`, m)
  }, timeout)
}
handler.help = ['panen']
handler.tags = ['rpg']
handler.command = ['panen']
handler.limit = true
handler.group = true
handler.rpg = true

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)


  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Jam 🕐" + minutes + " Menit ⏰" + seconds + " Detik ⏱️"
}
