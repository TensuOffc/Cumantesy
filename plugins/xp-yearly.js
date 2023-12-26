const free = 200000
const prem = 400000
const limitfree = 350
const limitprem = 500
const moneyfree = 200000
const moneyprem = 400000

let handler = async (m, { isPrems }) => {
    let time = global.db.data.users[m.sender].lastyearly + 31536000000
  if (new Date - global.db.data.users[m.sender].lastyearly < 31536000000) throw `「 Yearly 」\n\n⚠ You have taken yearly claims, this year!\nWait for ${msToTime(time - new Date())} again`
        global.db.data.users[m.sender].exp += isPrems ? prem : free
        global.db.data.users[m.sender].money += isPrems ? moneyprem : moneyfree
        global.db.data.users[m.sender].limit += isPrems ? limitprem : limitfree
        conn.reply(m.chat, `⻝ Congratulations you got:\n\n+${isPrems ? prem : free} ✨ Exp\n+${isPrems ? moneyprem : moneyfree} 💵 Money\n+${isPrems ? limitprem : limitfree} 🌟 Limit`, m)
        global.db.data.users[m.sender].lastyearly = new Date * 1
    }
handler.help = ['yearly']
handler.tags = ['xp']
handler.command = /^(yearly)$/i
handler.limit = false

handler.fail = null

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
    monthly = Math.floor((duration / (1000 * 60 * 60 * 24)) % 720)

  monthly  = (monthly < 10) ? "0" + monthly : monthly
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return monthly + " hari " +  hours + " jam " + minutes + " menit"
}