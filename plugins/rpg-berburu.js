const timeout = 10800000

let handler = async (m, {
  conn,
  usedPrefix,
  text
}) => {
 
  let time = global.db.data.users[m.sender].lastberbru + 10800000
  if (new Date - global.db.data.users[m.sender].lastberbru < 10800000) throw `⚠️ Anda sudah lelah untuk berburu\nTunggu selama ${msToTime(time - new Date())} lagi`
  let banteng = `${Math.floor(Math.random() * 15)}`.trim()
  let harimau = `${Math.floor(Math.random() * 15)}`.trim()
  let gajah = `${Math.floor(Math.random() * 15)}`.trim()
  let kambing = `${Math.floor(Math.random() * 15)}`.trim()
  let kuda = `${Math.floor(Math.random() * 15)}`.trim()
  let buaya = `${Math.floor(Math.random() * 15)}`.trim()
  let kerbau = `${Math.floor(Math.random() * 15)}`.trim()
  let sapi = `${Math.floor(Math.random() * 15)}`.trim()
  let monyet = `${Math.floor(Math.random() * 15)}`.trim()
  let rusa = `${Math.floor(Math.random() * 15)}`.trim()
  let babi = `${Math.floor(Math.random() * 15)}`.trim()
  let ayam = `${Math.floor(Math.random() * 15)}`.trim()
		global.db.data.users[m.sender].banteng += banteng * 1
		global.db.data.users[m.sender].harimau += harimau * 1
		global.db.data.users[m.sender].gajah += gajah * 1
		global.db.data.users[m.sender].kambing += kambing * 1
		global.db.data.users[m.sender].kuda += kuda * 1
		global.db.data.users[m.sender].buaya += buaya * 1
		global.db.data.users[m.sender].kerbau += kerbau * 1
		global.db.data.users[m.sender].sapi += sapi * 1
		global.db.data.users[m.sender].monyet += monyet * 1
		global.db.data.users[m.sender].rusa += rusa * 1
		global.db.data.users[m.sender].babi += babi * 1
		global.db.data.users[m.sender].ayam += ayam * 1
  global.db.data.users[m.sender].lastberbru = new Date * 1
  m.reply(`List Hasil Buruan, Anda Menangkap Hewan:

 🐄 Sapi: ${sapi}
 🐖 Babi: ${babi}
 🦌 Rusa: ${rusa}
 🐎 Kuda: ${kuda}
 🐓 Ayam: ${ayam}
 🐘 Gajah: ${gajah}
 🐊 Buaya: ${buaya}
 🐃 Kerbau: ${kerbau}
 🐒 Monyet: ${monyet}
 🐂 Banteng: ${banteng}
 🐅 Harimau: ${harimau}
 🐐 Kambing: ${kambing}

*Ketik: .kandang Untuk Melihat Hasil Buruan*`)
  setTimeout(() => {
    conn.reply(m.chat, `Yuk waktunya berburu lagi cuy 🦅`, m)
  }, timeout)
}
handler.help = ['berburu']
handler.tags = ['rpg']
handler.command = ['berburu']
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
