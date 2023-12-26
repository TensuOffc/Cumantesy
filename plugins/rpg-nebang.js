
const timeout = 10800000

let handler = async (m, {
  conn,
  usedPrefix,
  text
}) => {
 
  let time = global.db.data.users[m.sender].lastparming + 10800000
  if (new Date - global.db.data.users[m.sender].lastparming < 10800000) throw `⚠️ Anda sudah lelah untuk menebang\nTunggu selama ${msToTime(time - new Date())} lagi`
  let wood = `${Math.floor(Math.random() * 150)}`.trim()
  let money = `${Math.floor(Math.random() * 30000)}`.trim()
  global.db.data.users[m.sender].wood += wood * 1
  global.db.data.users[m.sender].money += money * 1
  global.db.data.users[m.sender].lastparming = new Date * 1
  m.reply(`Selamat kamu mendapatkan : \n+${wood} Kayu 🪵\n+${formarRupiah(money)} Money 💵`)
  setTimeout(() => {
    conn.reply(m.chat, `Yuk waktunya nebang lagi cuy 🪓`, m)
  }, timeout)
}
handler.help = ['nebang']
handler.tags = ['rpg']
handler.command = ['nebang']
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

function formatRupiah(number) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });

  return formatter.format(number);
}
