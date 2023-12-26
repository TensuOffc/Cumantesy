
let handler = async (m, { conn, text, usedPrefix }) => {
  let user = global.db.data.users[m.sender]
  if (!user) throw '⚠ You are not registered in the database'

  if (!text || !/^\d+$/.test(text)) {
    throw `Example: ${usedPrefix}spin 1000`
  }

  let betAmount = parseInt(text)
  if (user.money < betAmount) throw '⚠ Your money is insufficient'

  let result = Math.random() >= 0.5 
  let wonAmount = result ? Math.ceil(betAmount * 1.31919) : -betAmount
  user.money += wonAmount

  let delay = 1000
  if (user.lastSpin && new Date() - user.lastSpin < delay) {
    let time = (user.lastSpin + delay - new Date()) / 1000
    throw `Please wait ${time.toFixed(1)} seconds before executing the next spin`
  }
  user.lastSpin = new Date()

  let caption = `S P I N  -  R E S U L T\n`
  caption += `➖ Kamu Kehilangan: -${betAmount.toLocaleString()} Money\n`
  caption += result ? `➕ Tetapi Mendapatkan: +${wonAmount.toLocaleString()} Money\n\n` : `\n\n`
  caption += `• Your Money: ${user.money.toLocaleString()}`

  conn.reply(m.chat, caption, m)
}

handler.help = ['spin']
handler.tags = ['rpg']
handler.command = /^(spin)$/i
handler.group = true
handler.rpg = true
handler.limit = true
module.exports = handler