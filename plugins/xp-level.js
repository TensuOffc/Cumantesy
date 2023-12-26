let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.db.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    throw `
 *L E V E L*
Level ➠ *${user.level} (${user.exp - min}/${xp})*
Less than ➠ *${max - user.exp}* more!
Semakin sering berinteraksi dengan bot, akan menambah Level XP anda!`.trim()
  }
  let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) {
            m.reply(` *L E V E L - U P*
From: [ ${before} ] ➠ [ ${user.level} ]
Congratulations, you have leveled up!🎉🎉`.trim())
        }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i
module.exports = handler
