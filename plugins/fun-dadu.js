
let handler = async (m, { conn, usedPrefix, command }) => {
  await m.react(`🕛`)
conn.sendFile(m.chat, pickRandom(da), 'tensu.webp', '', global.set.packname, global.set.author,  m)

}
handler.help = ['dadu']
handler.tags = ['fun']
handler.command = /^dadu$/i
handler.limit = true
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const da = [
  'https://cdn.jsdelivr.net/gh/SazumiVicky/dadu@main/1.webp',
  'https://cdn.jsdelivr.net/gh/SazumiVicky/dadu@main/2.webp',
  'https://cdn.jsdelivr.net/gh/SazumiVicky/dadu@main/3.webp',
  'https://cdn.jsdelivr.net/gh/SazumiVicky/dadu@main/4.webp',
  'https://cdn.jsdelivr.net/gh/SazumiVicky/dadu@main/5.webp',
  'https://cdn.jsdelivr.net/gh/SazumiVicky/dadu@main/6.webp'
];