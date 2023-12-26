const timeout = 10800000

let handler = async (m, {
  conn,
  usedPrefix,
  text
}) => {
  //      let timerand = `${Math.floor(Math.random() * 259200000)}`.trim()
  let time = global.db.data.users[m.sender].lastnambang + 10800000
  if (new Date - global.db.data.users[m.sender].lastnambang < 10800000) throw `⚠️ Anda sudah menambang\nMohon tunggu hasil pertambangan mu\nTunggu selama ${msToTime(time - new Date())} lagi`
  // if (global.db.data.users[m.sender].aqua > 9) {
  // let aquah = `${Math.floor(Math.random() * 5)}`.trim()
  let berlians = `${Math.floor(Math.random() * 5)}`.trim()
  let iron = `${Math.floor(Math.random() * 5)}`.trim()
  let batu = `${Math.floor(Math.random() * 150)}`.trim()
  let emasbiasas = `${Math.floor(Math.random() * 5)}`.trim()
  let emasbatangs = `${Math.floor(Math.random() * 3)}`.trim()
  // global.db.data.users[m.sender].aqua -= aquah * 1
  global.db.data.users[m.sender].berlian += berlians * 1
  global.db.data.users[m.sender].emas += emasbiasas * 1
  global.db.data.users[m.sender].diamond += emasbatangs * 1
  global.db.data.users[m.sender].batu += batu * 1
  global.db.data.users[m.sender].lastnambang = new Date * 1
  m.reply(`Selamat kamu mendapatkan : \n+${berlians} Berlian 💍\n+${emasbiasas} Emas 📀\n+${emasbatangs} Diamond 💎\n+${iron} Iron 💿\n+${batu} Batu 🪨`)
  setTimeout(() => {
    conn.reply(m.chat, `Waktunya nambang lagi cuy ⛏`, m)
  }, timeout)
}
handler.help = ['nambang']
handler.tags = ['rpg']
handler.command = ['nambang']
handler.group = true
handler.rpg = true
handler.fail = null
handler.limit = true
handler.exp = 0
handler.money = 0

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
