const free = 5000
const prem = 15000
const moneyfree = 5000
const moneyprem = 15000
const limit = 15
const timeout = 3600000

let handler = async (m, {
  conn,
  isPrems
}) => {
  let time = global.db.data.users[m.sender].lasthourly + 3600000
  if (new Date - global.db.data.users[m.sender].lasthourly < 3600000) throw `「 Hourly 」\n\n⚠ You've taken hourly claims today!\nWait for ${msToTime(time - new Date())} again`
  //  conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan :`, m)
  global.db.data.users[m.sender].exp += isPrems ? prem : free
  global.db.data.users[m.sender].money += isPrems ? moneyprem : moneyfree
  // global.db.data.users[m.sender].potion += 5
  conn.reply(m.chat, `⻝ Congratulations you got:\n\n+${isPrems ? prem : free} ✨ Exp\n+${isPrems ? moneyprem : moneyfree} 💵 Money\n+${limit} 🌟 Limit`, m)
  global.db.data.users[m.sender].lasthourly = new Date * 1
  setTimeout(() => {
    conn.reply(m.chat, `Hourly Sudah bisa didapatkan kembali`, m)
  }, timeout)
}
handler.help = ['hourly']
handler.tags = ['xp']
handler.command = /^(hourly)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)


  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}
