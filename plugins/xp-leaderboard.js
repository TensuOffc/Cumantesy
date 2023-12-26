let handler = async (m, { conn, args, participants }) => {
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
  let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
  let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
  let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  let sortedMoney = users.map(toNumber('money')).sort(sort('money'))
  let usersExp = sortedExp.map(enumGetKey)
  let usersLim = sortedLim.map(enumGetKey)
  let usersLevel = sortedLevel.map(enumGetKey)
  let usersMoney = sortedMoney.map(enumGetKey)
  console.log(participants)
  let len = args[0] && args[0].length > 0 ? Math.min(10, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedExp.length)
  let text = `
• *✨ XP Leaderboard Top ${len}* •
Kamu Ke: *${usersExp.indexOf(m.sender) + 1}* dari *${usersExp.length}* User!

${sortedExp.slice(0, len).map(({ jid, exp }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]}\n┗⊱ *${exp} Exp* ✨`).join`\n`}

• *🌟 Limit Leaderboard Top ${len}* •
Kamu Ke: *${usersLim.indexOf(m.sender) + 1}* dari *${usersLim.length}* User!

${sortedLim.slice(0, len).map(({ jid, limit }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]}\n┗⊱ *${limit} Limit* 🌟`).join`\n`}

• *📊 Level Leaderboard Top ${len}* •
Kamu Ke: *${usersLevel.indexOf(m.sender) + 1}* dari *${usersLevel.length}* User!

${sortedLevel.slice(0, len).map(({ jid, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]}\n┗⊱ *Level ${level}* 📊`).join`\n`}

• *💵 Money Leaderboard Top ${len}* •
Kamu Ke: *${usersMoney.indexOf(m.sender) + 1}* dari *${usersMoney.length}* User!

${sortedMoney.slice(0, len).map(({ jid, money }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]}\n┗⊱ *Money ${money}* 💵`).join`\n`}
`.trim()
let lbnya = 'https://telegra.ph/file/821762d04e30a5539edbe.jpg'
  conn.sendFile(m.chat, lbnya, '', text, m, {
    contextInfo: {
      mentionedJid: [...usersExp.slice(0, len), ...usersLim.slice(0, len), ...usersLevel.slice(0, len), ...usersMoney.slice(0, len)].filter(v => !participants.some(p => v === p.jid))
    }
  })
}
handler.help = ['leaderboard']
handler.tags = ['rpg']
handler.command = /^(leaderboard|lb)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}