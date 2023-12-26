const free = 10000
const prem = 20000
const limitfree = 50
const limitprem = 150
const moneyfree = 10000
const moneyprem = 20000

let handler = async (m, { isPrems }) => {
    let time = global.db.data.users[m.sender].lastweekly + 604800000
  if (new Date - global.db.data.users[m.sender].lastweekly < 604800000) return m.reply(`「 Weekly 」\n\n⚠ You have taken weekly claims, this week!\nWait for ${msToTime(time - new Date())} again`)
        //conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan :`, m)
        global.db.data.users[m.sender].exp += isPrems ? prem : free
        global.db.data.users[m.sender].money += isPrems ? moneyprem : moneyfree
        global.db.data.users[m.sender].limit += isPrems ? limitprem : limitfree
        //global.db.data.users[m.sender].legendary += 3
        conn.reply(m.chat, `⻝ Congratulations you got:\n\n+${isPrems ? prem : free} ✨ Exp\n+${isPrems ? moneyprem : moneyfree} 💵 Money\n+${isPrems ? limitprem : limitfree} 🌟 Limit`, m)
        global.db.data.users[m.sender].lastweekly= new Date * 1
    }
    
handler.help = ['weekly']
handler.tags = ['xp']
handler.command = /^(weekly)$/i
handler.limit = false
handler.fail = null

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
    weeks = Math.floor((duration / (1000 * 60 * 60 * 24)) % 168)

  weeks  = (weeks < 10) ? "0" + weeks : weeks
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return weeks + " hari " +  hours + " jam " + minutes + " menit"
}