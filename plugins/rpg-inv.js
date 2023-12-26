let levelling = require('../lib/levelling')
let handler = async (m, {
  conn,
  usedPrefix
}) => {
  let health = global.db.data.users[m.sender].health
  let armor = global.db.data.users[m.sender].armor
  // let warn = global.db.data.users[m.sender].warn
  let diamond = global.db.data.users[m.sender].diamond
  let potion = global.db.data.users[m.sender].potion
  let common = global.db.data.users[m.sender].common
  let uncommon = global.db.data.users[m.sender].uncommon
  let mythic = global.db.data.users[m.sender].mythic
  let legendary = global.db.data.users[m.sender].legendary
  let level = global.db.data.users[m.sender].level
  let money = global.db.data.users[m.sender].money
  let exp = global.db.data.users[m.sender].exp
  let sampah = global.db.data.users[m.sender].sampah
  let anggur = global.db.data.users[m.sender].anggur
  let jeruk = global.db.data.users[m.sender].jeruk
  let apel = global.db.data.users[m.sender].apel
  let mangga = global.db.data.users[m.sender].mangga
  let pisang = global.db.data.users[m.sender].pisang
  let nabung = global.db.data.users[m.sender].nabung
  let bank = global.db.data.users[m.sender].bank
  let limit = global.db.data.users[m.sender].limit
  let botol = global.db.data.users[m.sender].botol
  let wood = global.db.data.users[m.sender].wood
  let batu = global.db.data.users[m.sender].batu
  let iron = global.db.data.users[m.sender].iron
  let sword = global.db.data.users[m.sender].sword
  let kaleng = global.db.data.users[m.sender].kaleng
  let kardus = global.db.data.users[m.sender].kardus
  let berlian = global.db.data.users[m.sender].berlian
  let emas = global.db.data.users[m.sender].emas
  let role = global.db.data.users[m.sender].role
  let {
    max
  } = levelling.xpRange(level, exp, global.multiplier)
  // let name = m.fromMe ? conn.user : conn.contacts[m.sender]
  let name = m.sender
  let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
  let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
  let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
  let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
  let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
  let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
  let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
  let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
  let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
  let usersmoney = sortedmoney.map(v => v[0])
  let usersdiamond = sorteddiamond.map(v => v[0])
  let userspotion = sortedpotion.map(v => v[0])
  let userssampah = sortedsampah.map(v => v[0])
  let userslevel = sortedlevel.map(v => v[0])
  let userscommon = sortedcommon.map(v => v[0])
  let usersuncommon = sorteduncommon.map(v => v[0])
  let usersmythic = sortedmythic.map(v => v[0])
  let userslegendary = sortedlegendary.map(v => v[0])
  let str = `
*Inventory* *${await conn.getName(name)}*

❤ Health: *${health}*
💵 Money: *${formatRupiah(money)}*
🌟 Limit: *${limit}*
📊 Level: *${level}*
✨ Exp: *${exp}*
🏦 Bank: *${formatRupiah(bank)}*

*Inventory*
🧪 Potion: *${potion}*
🛡 Armor: *${armor == 0 ? 'Tidak Punya' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : ''}*
🗡 Sword: *${sword}*
🪵 Kayu: *${wood}*
🪨 Batu: *${batu}*

*Inventory Crate*
📦 Common: *${common}*
📦 Uncommon: *${uncommon}*
📦 Mythic: *${mythic}*
📦 Legendary: *${legendary}*.

*Inventory Panen*
🥭 Mangga: ${mangga}
🍇 Anggur: ${anggur}
🍌 Pisang: ${pisang}
🍊 Jeruk: ${jeruk}
🍎 Apel: ${apel}

*Inventory Mulung*
🗑 Sampah: *${sampah}*
📦 Kardus: ${kardus}
🥫 Kaleng: ${kaleng}
🍾 Botol: ${botol}

*Inventory Nambang*
💿 Iron: *${iron}*
📀 Emas: ${emas}
💍 Berlian: ${berlian}
💎 Diamond: ${diamond}

Total Inv: *${diamond + berlian + emas + iron + botol + kaleng + kardus + apel + jeruk + pisang + anggur + mangga + legendary + mythic + uncommon + common + batu + wood + sampah + potion}* Item

╔╣ *Progres Level & Role*
║Level *${level}* To Level *${level}*
║Exp *${exp}* ➠ *${max}*
║Role: ${role}
╚══════════╣⊱ 

*Achievement*
1.Top level *${userslevel.indexOf(m.sender) + 1}* dari *${userslevel.length}*
2.Top Money *${usersmoney.indexOf(m.sender) + 1}* dari *${usersmoney.length}*
3.Top Diamond *${usersdiamond.indexOf(m.sender) + 1}* dari *${usersdiamond.length}*
4.Top Potion *${userspotion.indexOf(m.sender) + 1}* dari *${userspotion.length}*
5.Top Common *${userscommon.indexOf(m.sender) + 1}* dari *${userscommon.length}*
6.Top Uncommon *${usersuncommon.indexOf(m.sender) + 1}* dari *${usersuncommon.length}*
7.Top Mythic *${usersmythic.indexOf(m.sender) + 1}* dari *${usersmythic.length}*
8.Top Legendary *${userslegendary.indexOf(m.sender) + 1}* dari *${userslegendary.length}*
9.Top Sampah *${userssampah.indexOf(m.sender) + 1}* dari *${userssampah.length}*
\n${readMore}
`.trim()
  conn.reply(m.chat, str, m)
}
handler.help = ['inv']
handler.tags = ['rpg']
handler.command = /^(inv|inventory)$/i
handler.limit = false
handler.group = true
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function formatRupiah(number) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });

  return formatter.format(number);
}
