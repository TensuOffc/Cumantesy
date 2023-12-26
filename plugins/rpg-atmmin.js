const xpperlimit = 1
let handler = async (m, { conn, command, args }) => {
	let user = global.db.data.users[m.sender]
  let count = command.replace(/^tarik/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].bank / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return m.reply('kamu belum mempuyai atm !')
  if (global.db.data.users[m.sender].bank >= xpperlimit * count) {
    global.db.data.users[m.sender].bank -= xpperlimit * count
    global.db.data.users[m.sender].money += count
    conn.reply(m.chat, `Sukses menarik money di *ATM* sebesar *${formatRupiah(count)}* 💹`, m)
  } else conn.reply(m.chat, `[❗] Uang di *ATM* anda tidak mencukupi untuk ditarik sebesar ${formatRupiah(count)} 💹`, m)
}
handler.help = ['tarik'].map(v => v + ' <jumlah>')
handler.tags = ['rpg']
handler.command = /^tarik([0-9]+)|tarik|tarikall$/i
handler.group = true
module.exports = handler
 
function formatRupiah(number) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });

  return formatter.format(number);
}
