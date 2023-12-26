let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `「 *BANK INFO* 」 
  
◦ 👤 *Name*: ${user.registered ? user.name : conn.getName(m.sender)}
◦ 💳 *ATM*: ${formatRupiah(user.bank)} 
◦ 💵 *Money*: ${formatRupiah(user.money)}
◦ 📑 Registered: ${user.registered ? 'Yes': 'No'}
`.trim()
  conn.reply(m.chat, caption, m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i

handler.register = true
module.exports = handler

function formatRupiah(number) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });

  return formatter.format(number);
}
