
const timeout = 10800000

let handler = async (m, { conn, usedPrefix, text }) => {
    let user = db.data.users[m.sender]
    let time = user.lastmaling + 10800000
    if (new Date - user.lastmaling< 10800000) return m.reply(`⚠️ Anda sudah merampok bank\nTunggu selama ⌛ ${msToTime(time - new Date())} lagi`)
	let money = `${Math.floor(Math.random() * 80000)}`.trim()
	let exp = `${Math.floor(Math.random() * 50000)}`.trim()
	let kardus = `${Math.floor(Math.random() * 300)}`.trim()
	user.money += money * 1
	user.exp += exp * 1
	user.kardus += kardus * 1
	user.lastmaling = new Date * 1
    m.reply(`Selamat kamu mendapatkan : \n💰+${money} Money\n📦+${kardus} Kardus\n✨+${exp} Exp`)
    setTimeout(() => {
        conn.reply(m.chat, `Yuk waktunya Maling lagi 🥷…`, m)
    }, timeout)
}
handler.help = ['maling']
handler.tags = ['rpg']
handler.command = /^(maling)/i
handler.register = true
handler.group = true
handler.rpg = true
handler.limit = true
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