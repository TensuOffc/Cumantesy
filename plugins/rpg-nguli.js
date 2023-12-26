
const timeout = 10800000

let handler = async (m, {
  conn,
  usedPrefix,
  text
}) => {
 
  let time = global.db.data.users[m.sender].lastnguli + 10800000
  if (new Date - global.db.data.users[m.sender].lastnguli < 10800000) throw `⚠️ Anda sudah lelah untuk bekerja\nTunggu selama ${msToTime(time - new Date())} lagi`
  let batu = `${Math.floor(Math.random() * 150)}`.trim()
  let wood = `${Math.floor(Math.random() * 150)}`.trim()
  global.db.data.users[m.sender].batu += batu * 1
  global.db.data.users[m.sender].wood += wood * 1
  global.db.data.users[m.sender].lastnguli = new Date * 1
  m.reply(`Selamat kamu mendapatkan : \n+${wood} Batu 🪨\n+${wood} Kayu 🪵`)
  setTimeout(() => {
    conn.reply(m.chat, `Yuk waktunya nguli lagi cuy 🔨`, m)
  }, timeout)
}
handler.help = ['nguli']
handler.tags = ['rpg']
handler.command = ['nguli']
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
