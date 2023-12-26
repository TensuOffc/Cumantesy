const potion = 20000
const Sdiamond = 3500
const Bcommon = 20000
const Buncommon = 40000
const Bmythic = 100000
const Blegendary = 250000
const Ssampah = 5
const Skayu = 400
const Sbotol = 50
const Skaleng = 100
const Skardus = 50
const Spisang = 350
const Smangga = 400
const Sjeruk = 400
const Sanggur = 400
const Sapel = 400
const Sberlian = 10000
const Semasbiasa = 5000
const Blimit = 10000
const Slimit = 2500
const Siron = 2500
const Bsword = 150000
const Ssword = 1500
const Bumpan = 5000
const Sumpan = 500
const Bpancingan = 50000
const Sbatu = 100
const Shiu = 400
const Stuna = 300
const Sdory = 250
const Sorca = 600
const Spaus = 900
const Scumi = 250
const Sgurita = 350
const Sbuntal = 300
const Sudang = 200
const Slumba = 550
const Slobster = 300
const Skepiting = 200
const Sbanteng = 1000
const Sharimau = 1000
const Sgajah = 1000
const Skambing = 1000
const Skuda = 1000
const Sbuaya = 1000
const Skerbau = 1000
const Ssapi= 1000
const Smonyet = 1000
const Srusa = 1000
const Sbabi = 1000
const Sayam = 1000
let handler = async (m, {
  conn,
  command,
  args,
  usedPrefix,
  owner
}) => {
  const _armor = global.db.data.users[m.sender].armor
  const armor = (_armor == 0 ? 20000 : 'Leather Armor' || _armor == 1 ? 49999 : 'Iron Armor' || _armor == 2 ? 99999 : 'Gold Armor' || _armor == 3 ? 149999 : 'Diamomd Armor' || _armor == 4 ? 299999 : 'Netherite Armor')
  let type = (args[0] || '').toLowerCase()
  let _type = (args[1] || '').toLowerCase()
  let jualbeli = (args[0] || '').toLowerCase()
  let nomors = m.sender
  const Kchat = `Cara Membeli: ${usedPrefix}buy <namaitem> <jumlahitem>
Cara Menjual: ${usedPrefix}sell <namaitem> <jumlahitem>

Contoh penggunaan: 
*${usedPrefix}buy mangga 1*
*${usedPrefix}sell mangga 1*

======= _*DAILY SHOP*_ =======
*Harga Beli  |  Harga Jual* 

🌟 Limit: ${Blimit}  |  ${Slimit}
🧪 Potion: ${potion}

======= _*GACHA SHOP*_ =======
*Harga Beli*

📦 Common: ${Bcommon}
📦 Uncommon: ${Buncommon}
📦 Mythic: ${Bmythic}
📦 Legendary: ${Blegendary}

======= _*ITEM SHOP*_ =======
*Harga Jual*

🗑 Sampah: ${Ssampah}
🍾 Botol: ${Sbotol}
🥫 Kaleng: ${Skaleng}
📦 Kardus: ${Skardus}
🪵 Kayu:  ${Skayu}

======= _*RPG SHOP*_ =======
*Harga Beli  |  Harga Jual*

🛡 Armor: ${armor}
🗡 Sword: ${Bsword}  |  ${Ssword}

======= _*MINING SHOP*_ =======
*Harga Jual*

💍 Berlian: ${Sberlian}
💎 Diamond: ${Sdiamond}
📀 Emas: ${Semasbiasa}
💿 Iron: ${Siron}
🪨 Batu: ${Sbatu}

======= _*FRUIT SHOP*_ =======
*Harga Jual*

🍌 Pisang: ${Spisang}
🍇 Anggur: ${Sanggur}
🥭 Mangga: ${Smangga}
🍊 Jeruk: ${Sjeruk}
🍎 Apel: ${Sapel}

======= _*FISHING SHOP*_ =======
*Harga Beli  |  Harga Jual*

🪱 Umpan: ${Bumpan}  |  ${Sumpan}
🎣 Pancingan: ${Bpancingan}

======= _*PASAR HEWAN*_ =======
*Harga Jual*
🦀 Kepiting: ${Skepiting}
🦞 Lobster: ${Slobster}
🦐 Udang: ${Sudang}
🦑 Cumi: ${Scumi}
🐙 Gurita: ${Sgurita}
🐡 Buntal: ${Sbuntal}
🐠 Dory: ${Sdory}
🐳 Orca: ${Sorca}
🐬 Lumba²: ${Slumba}
🐋 Paus: ${Spaus}
🦈 Hiu: ${Shiu}
🐟 Tuna: ${Stuna}
🐂 Banteng: ${Sbanteng}
🐃 Kerbau: ${Skerbau}
🐅 Harimau ${Sharimau}
🐮 Sapi; ${Ssapi}
🐘 Gajah: ${Sgajah}
🐒 Monyet: ${Smonyet}
🐐 Kambing: ${Skambing}
🦌 Rusa: ${Srusa}
🐎 Kuda: ${Skuda}
🐖 Babi: ${Sbabi}
🐊 Buaya: ${Sbuaya}
🐓 Ayam: ${Sayam}

=================================

`.trim()
  try {
    if (/shop|toko/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 : Math.min(1, count)
      const sampah = global.db.data.users[m.sender].sampah
      switch (jualbeli) {
        case 'buy':
          switch (_type) {
            case 'potion':
              if (global.db.data.users[m.sender].money >= potion * count) {
                global.db.data.users[m.sender].money -= potion * count
                global.db.data.users[m.sender].potion += count * 1
                conn.reply(m.chat, `Succes Membeli ${count} 🧪 Potion Sebesar ${potion * count} 💵 Money\n\nGunakan Potion Dengan Ketik: *${usedPrefix}heal <jumlah>*`, m)
              } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 🧪 Potion Sebesar ${potion * count} 💵 Money`, )
              break
            case 'common':
              if (global.db.data.users[m.sender].money >= Bcommon * count) {
                global.db.data.users[m.sender].common += count * 1
                global.db.data.users[m.sender].money -= Bcommon * count
                conn.reply(m.chat, `Succes Membeli ${count} 📦 Common Crate Sebesar ${Bcommon * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 📦 Common Crate Sebesar ${Bcommon * count} 💵 Money\n\nBuka Crate dengan ketik: *${usedPrefix}open common 1*`, m)

              break
            case 'uncommon':
              if (global.db.data.users[m.sender].money >= Buncommon * count) {
                global.db.data.users[m.sender].uncommon += count * 1
                global.db.data.users[m.sender].money -= Buncommon * count
                conn.reply(m.chat, `Succes Membeli ${count} 📦 Uncommon crate Sebesar ${Buncommon * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 📦 Uncommon crate Sebesar ${Buncommon * count} 💵 Money\n\nBuka Crate dengan ketik: *${usedPrefix}open uncommon*`, m)

              break
            case 'mythic':
              if (global.db.data.users[m.sender].money >= Bmythic * count) {
                global.db.data.users[m.sender].mythic += count * 1
                global.db.data.users[m.sender].money -= Bmythic * count
                conn.reply(m.chat, `Succes Membeli ${count} 📦 Mythic crate Sebesar ${Bmythic * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 📦 Mythic crate Sebesar ${Bmythic* count} 💵 Money\n\nBuka Crate dengan ketik: *${usedPrefix}open mythic*`, m)

              break
            case 'legendary':
              if (global.db.data.users[m.sender].money >= Blegendary * count) {
                global.db.data.users[m.sender].legendary += count * 1
                global.db.data.users[m.sender].money -= Blegendary * count
                conn.reply(m.chat, `Succes Membeli ${count} 📦 Legendary crate Sebesar ${Blegendary * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 📦 Legendary crate Sebesar ${Blegendary * count} 💵 Money\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)

              break
            case 'limit':
              if (global.db.data.users[m.sender].money >= Blimit * count) {
                global.db.data.users[m.sender].limit += count * 1
                global.db.data.users[m.sender].money -= Blimit * count
                conn.reply(m.chat, `Succes Membeli ${count} 🌟 Limit Sebesar ${Blimit * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 🌟 Limit Sebesar ${Blimit * count} 💵 Money`.trim(), m)

              break
            case 'sword':
              if (global.db.data.users[m.sender].money >= Bsword * count) {
                global.db.data.users[m.sender].sword += count * 1
                global.db.data.users[m.sender].money -= Bsword * count
                conn.reply(m.chat, `Succes Membeli ${count} 🗡 Sword Sebesar ${Bsword * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 🗡 Sword Sebesar ${Bsword * count} 💵 Money`.trim(), m)

              break
            case 'umpan':
              if (global.db.data.users[m.sender].money >= Bumpan * count) {
                global.db.data.users[m.sender].umpan += count * 1
                global.db.data.users[m.sender].money -= Bumpan * count
                conn.reply(m.chat, `Succes Membeli ${count} 🪱 Umpan Sebesar ${Bumpan * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 🪱 Umpan Sebesar ${Bumpan * count} 💵 Money`.trim(), m)

              break
            case 'pancingan':
              if (global.db.data.users[m.sender].money >= Bpancingan * count) {
                global.db.data.users[m.sender].pancingan += count * 1
                global.db.data.users[m.sender].money -= Bpancingan * count
                conn.reply(m.chat, `Succes Membeli ${count} 🎣 Pancingan Sebesar ${Bpancingan * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 🎣 Pancingan Sebesar ${Bpancingan * count} 💵 Money`.trim(), m)

              break
            case 'armor':
              if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, '🛡 Armormu sudah *Level Max*', m)
              if (global.db.data.users[m.sender].money > armor) {
                global.db.data.users[m.sender].armor += 1
                global.db.data.users[m.sender].money -= armor * 1
                conn.reply(m.chat, `Succes Membeli 🛡 Armor Seharga ${armor} 💵 Money`, m)
              } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 🛡 Armor Sebesar ${armor * count} 💵 Money`, m)

              break
            default:
              return conn.reply(m.chat, Kchat, m)
          }
          break
        case 'sell':
          switch (_type) {
            case 'sampah':
              if (global.db.data.users[m.sender].sampah >= count * 1) {
                global.db.data.users[m.sender].sampah -= count * 1
                global.db.data.users[m.sender].money += Ssampah * count
                conn.reply(m.chat, `Succes Menjual ${count} 🗑 Sampah, Sebesar ${Ssampah * count} 💵 Money`, m)
              } else conn.reply(m.chat, `🗑 Sampah anda tidak cukup`, m)
              break
            case 'kaleng':
              if (global.db.data.users[m.sender].kaleng >= count * 1) {
                global.db.data.users[m.sender].kaleng -= count * 1
                global.db.data.users[m.sender].money += Skaleng * count
                conn.reply(m.chat, `Succes Menjual ${count} 🥫 Kaleng, Sebesar ${Skaleng * count} 💵 Money`, m)
              } else conn.reply(m.chat, `🥫 Kaleng anda tidak cukup`, m)
              break
            case 'kardus':
              if (global.db.data.users[m.sender].kardus >= count * 1) {
                global.db.data.users[m.sender].kardus -= count * 1
                global.db.data.users[m.sender].money += Skardus * count
                conn.reply(m.chat, `Succes Menjual ${count} 📦 Kardus, Sebesar ${Skardus * count} 💵 Money`, m)
              } else conn.reply(m.chat, `📦 Kardus anda tidak cukup`, m)
              break
            case 'botol':
              if (global.db.data.users[m.sender].botol >= count * 1) {
                global.db.data.users[m.sender].botol -= count * 1
                global.db.data.users[m.sender].money += Sbotol * count
                conn.reply(m.chat, `Succes Menjual ${count} 🍾 Botol, Sebesar ${Sbotol * count} 💵 Money`, m)
              } else conn.reply(m.chat, `🍾 Botol anda tidak cukup`, m)
              break
            case 'kayu':
              if (global.db.data.users[m.sender].wood >= count * 1) {
                global.db.data.users[m.sender].wood -= count * 1
                global.db.data.users[m.sender].money += Skayu * count
                conn.reply(m.chat, `Succes Menjual ${count} 🪵 Kayu, Sebesar ${Skayu * count} 💵 Money`, m)
              } else conn.reply(m.chat, `🪵 Kayu anda tidak cukup`, m)
              break
            case 'pisang':
              if (global.db.data.users[m.sender].pisang >= count * 1) {
                global.db.data.users[m.sender].pisang -= count * 1
                global.db.data.users[m.sender].money += Spisang * count
                conn.reply(m.chat, `Succes Menjual ${count} 🍌 Pisang, Sebesar ${Spisang * count} 💵 Money`, m)
              } else conn.reply(m.chat, `🍌 Pisang anda tidak cukup`, m)
              break
            case 'anggur':
              if (global.db.data.users[m.sender].anggur >= count * 1) {
                global.db.data.users[m.sender].anggur -= count * 1
                global.db.data.users[m.sender].money += Sanggur * count
                conn.reply(m.chat, `Succes Menjual ${count} 🍇 Anggur, Sebesar ${Sanggur * count} 💵 Money`, m)
              } else conn.reply(m.chat, `🍇 Anggur anda tidak cukup`, m)
              break
            case 'mangga':
              if (global.db.data.users[m.sender].mangga >= count * 1) {
                global.db.data.users[m.sender].mangga -= count * 1
                global.db.data.users[m.sender].money += Smangga * count
                conn.reply(m.chat, `Succes Menjual ${count} 🥭 Mangga, Sebesar ${Smangga * count} 💵 Money`, m)
              } else conn.reply(m.chat, `🥭 Mangga anda tidak cukup`, m)
              break
            case 'jeruk':
              if (global.db.data.users[m.sender].jeruk >= count * 1) {
                global.db.data.users[m.sender].jeruk -= count * 1
                global.db.data.users[m.sender].money += Sjeruk * count
                conn.reply(m.chat, `Succes Menjual ${count} 🍊 Jeruk, Sebesar ${Sjeruk * count} 💵 Money`, m)
              } else conn.reply(m.chat, `🍊 Jeruk anda tidak cukup`, m)
              break
            case 'apel':
              if (global.db.data.users[m.sender].apel >= count * 1) {
                global.db.data.users[m.sender].apel -= count * 1
                global.db.data.users[m.sender].money += Sapel * count
                conn.reply(m.chat, `Succes Menjual ${count} 🍎 Apel, Sebesar ${Sapel * count} 💵 Money`, m)
              } else conn.reply(m.chat, `🍎 Apel anda tidak cukup`, m)
              break
            case 'berlian':
              if (global.db.data.users[m.sender].berlian >= count * 1) {
                global.db.data.users[m.sender].berlian -= count * 1
                global.db.data.users[m.sender].money += Sberlian * count
                conn.reply(m.chat, `Succes Menjual ${count} 💍 Berlian, Sebesar ${Sberlian * count} 💵 Money`, m)
              } else conn.reply(m.chat, `💍 Berlian anda tidak cukup`, m)
              break
            case 'emas':
              if (global.db.data.users[m.sender].emas >= count * 1) {
                global.db.data.users[m.sender].emas -= count * 1
                global.db.data.users[m.sender].money += Semasbiasa * count
                conn.reply(m.chat, `Succes Menjual ${count} 📀 Emas , Sebesar ${Semasbiasa * count} 💵 Money`, m)
              } else conn.reply(m.chat, `📀 Emas anda tidak cukup`, m)
              break
            case 'iron':
              if (global.db.data.users[m.sender].iron >= count * 1) {
                global.db.data.users[m.sender].iron -= count * 1
                global.db.data.users[m.sender].money += Siron * count
                conn.reply(m.chat, `Succes Menjual ${count} 💿 Iron, Sebesar ${Siron * count} 💵 Money`, m)
              } else conn.reply(m.chat, `💿 Iron anda tidak cukup`, m)
              break
            case 'sword':
              if (global.db.data.users[m.sender].sword >= count * 1) {
                global.db.data.users[m.sender].sword -= count * 1
                global.db.data.users[m.sender].money += Ssword * count
                conn.reply(m.chat, `Succes Menjual ${count} 🗡 Sword, Sebesar ${Ssword * count} 💵 Money`, m)
              } else conn.reply(m.chat, `🗡 Sword anda tidak cukup`, m)
              break
            case 'batu':
              if (global.db.data.users[m.sender].batu >= count * 1) {
                global.db.data.users[m.sender].batu -= count * 1
                global.db.data.users[m.sender].money += Sbatu * count
                conn.reply(m.chat, `Succes Menjual ${count} 🪨 Batu, Sebesar ${Sbatu * count} 💵 Money`, m)
              } else conn.reply(m.chat, `🪨 Batu anda tidak cukup`, m)
              break
            case 'limit':
              if (global.db.data.users[m.sender].limit >= count * 1) {
                global.db.data.users[m.sender].limit -= count * 1
                global.db.data.users[m.sender].money += Slimit * count
                conn.reply(m.chat, `Succes Menjual ${count} 🌟 Limit, Sebesar ${Slimit * count} 💵 Money`, m)
              } else conn.reply(m.chat, `🌟 Limit anda tidak cukup`, m)
              break
            case 'diamond':
              if (global.db.data.users[m.sender].diamond >= count * 1) {
                global.db.data.users[m.sender].diamond -= count * 1
                global.db.data.users[m.sender].money += Sdiamond * count
                conn.reply(m.chat, `Succes Menjual ${count} 💎 Diamond, Sebesar ${Sdiamond * count} 💵 Money`, m)
              } else conn.reply(m.chat, `💎 Diamond anda tidak cukup`, m)
              break
            default:
              return conn.reply(m.chat, Kchat, m)
          }
          break
        default:
          return conn.reply(m.chat, Kchat, m)
      }
    } else if (/beli|buy/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
      switch (type) {
        case 'potion':
          if (global.db.data.users[m.sender].money >= potion * count) {
            global.db.data.users[m.sender].money -= potion * count
            global.db.data.users[m.sender].potion += count * 1
            conn.reply(m.chat, `Succes Membeli ${count} 🧪 Potion Sebesar ${potion * count} 💵 Money\n\nGunakan 🧪 Potion dengan ketik: *${usedPrefix}heal <jumlah>*`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 🧪 Potion Sebesar ${potion * count} 💵 Money`, m)

          break
        case 'common':
          if (global.db.data.users[m.sender].money >= Bcommon * count) {
            global.db.data.users[m.sender].common += count * 1
            global.db.data.users[m.sender].money -= Bcommon * count
            conn.reply(m.chat, `Succes Membeli ${count} 📦 Common crate Sebesar ${Bcommon * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 📦 Common Crate Sebesar ${Bcommon * count} 💵 Money\n\nBuka Crate dengan ketik: *${usedPrefix}open common 1*`, m)

          break
        case 'uncommon':
          if (global.db.data.users[m.sender].money >= Buncommon * count) {
            global.db.data.users[m.sender].uncommon += count * 1
            global.db.data.users[m.sender].money -= Buncommon * count
            conn.reply(m.chat, `Succes Membeli ${count} 📦 Uncommon crate Sebesar ${Buncommon * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 📦 Uncommon Crate Sebesar ${Buncommon * count} 💵 Money\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon 1*`, m)

          break
        case 'mythic':
          if (global.db.data.users[m.sender].money >= Bmythic * count) {
            global.db.data.users[m.sender].mythic += count * 1
            global.db.data.users[m.sender].money -= Bmythic * count
            conn.reply(m.chat, `Succes Membeli ${count} 📦 Mythic crate Sebesar ${Bmythic * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 📦 Mythic Crate Sebesar ${Bmythic* count} 💵 Money\n\nBuka crate dengan ketik: *${usedPrefix}open mythic 1*`, m)

          break
        case 'legendary':
          if (global.db.data.users[m.sender].money >= Blegendary * count) {
            global.db.data.users[m.sender].legendary += count * 1
            global.db.data.users[m.sender].money -= Blegendary * count
            conn.reply(m.chat, `Succes Membeli ${count} 📦 Legendary crate Sebesar ${Blegendary * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 📦 Legendary Crate Sebesar ${Blegendary * count} 💵 Money\n\nBuka crate dengan ketik: *${usedPrefix}open legendary 1*`, m)

          break
        case 'sampah':
          if (global.db.data.users[m.sender].money >= Bsampah * count) {
            global.db.data.users[m.sender].sampah += count * 1
            global.db.data.users[m.sender].money -= Bsampah * count
            conn.reply(m.chat, `Succes Membeli ${count} 🗑 Sampah Sebesar ${Bsampah * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 🗑 Sampah Sebesar ${Bsampah * count} 💵 Money`.trim(), m)

          break
        case 'kaleng':
          if (global.db.data.users[m.sender].money >= Bkaleng * count) {
            global.db.data.users[m.sender].kaleng += count * 1
            global.db.data.users[m.sender].money -= Bkaleng * count
            conn.reply(m.chat, `Succes Membeli ${count} 🥫 Kaleng Sebesar ${Bkaleng * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 🥫 Kaleng Sebesar ${Bkaleng * count} 💵 Money`.trim(), m)

          break
        case 'kardus':
          if (global.db.data.users[m.sender].money >= Bkardus * count) {
            global.db.data.users[m.sender].kardus += count * 1
            global.db.data.users[m.sender].money -= Bkardus * count
            conn.reply(m.chat, `Succes Membeli ${count} 📦 Kardus Sebesar ${Bkardus * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 📦 Kardus Sebesar ${Bkardus * count} 💵 Money`.trim(), m)

          break
        case 'botol':
          if (global.db.data.users[m.sender].money >= Bbotol * count) {
            global.db.data.users[m.sender].botol += count * 1
            global.db.data.users[m.sender].money -= Bbotol * count
            conn.reply(m.chat, `Succes Membeli ${count} 🍾 Botol Sebesar ${Bbotol * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 🍾 Botol Sebesar ${Bbotol * count} 💵 Money`.trim(), m)

          break
        case 'kayu':
          if (global.db.data.users[m.sender].money >= Bkayu * count) {
            global.db.data.users[m.sender].wood += count * 1
            global.db.data.users[m.sender].money -= Bkayu * count
            conn.reply(m.chat, `Succes Membeli ${count} 🪵 Kayu Sebesar ${Bkayu * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 🪵 Kayu Sebesar ${Bkayu * count} 💵 Money`.trim(), m)

          break
        case 'pisang':
          if (global.db.data.users[m.sender].money >= Bpisang * count) {
            global.db.data.users[m.sender].pisang += count * 1
            global.db.data.users[m.sender].money -= Bpisang * count
            conn.reply(m.chat, `Succes Membeli ${count} 🍌 Pisang Sebesar ${Bpisang * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 🍌 Pisang Sebesar ${Bpisang * count} 💵 Money`.trim(), m)

          break
        case 'anggur':
          if (global.db.data.users[m.sender].money >= Banggur * count) {
            global.db.data.users[m.sender].anggur += count * 1
            global.db.data.users[m.sender].money -= Banggur * count
            conn.reply(m.chat, `Succes Membeli ${count} 🍇 Anggur Sebesar ${Banggur * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 🍇 Anggur Sebesar ${Banggur * count} 💵 Money`.trim(), m)

          break
        case 'mangga':
          if (global.db.data.users[m.sender].money >= Bmangga * count) {
            global.db.data.users[m.sender].mangga += count * 1
            global.db.data.users[m.sender].money -= Bmangga * count
            conn.reply(m.chat, `Succes Membeli ${count} 🥭 Mangga Sebesar ${Bmangga * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 🥭 Mangga Sebesar ${Bmangga * count} 💵 Money`.trim(), m)

          break
        case 'jeruk':
          if (global.db.data.users[m.sender].money >= Bjeruk * count) {
            global.db.data.users[m.sender].jeruk += count * 1
            global.db.data.users[m.sender].money -= Bjeruk * count
            conn.reply(m.chat, `Succes Membeli ${count} 🍊 Jeruk Sebesar ${Bjeruk * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 🍊 Jeruk Sebesar ${Bjeruk * count} 💵 Money`.trim(), m)

          break
        case 'apel':
          if (global.db.data.users[m.sender].money >= Bapel * count) {
            global.db.data.users[m.sender].apel += count * 1
            global.db.data.users[m.sender].money -= Bapel * count
            conn.reply(m.chat, `Succes Membeli ${count} 🍎 Apel Sebesar ${Bapel * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 🍎 Apel Sebesar ${Bapel * count} 💵 Money`.trim(), m)

          break
        case 'berlian':
          if (global.db.data.users[m.sender].money >= Bberlian * count) {
            global.db.data.users[m.sender].berlian += count * 1
            global.db.data.users[m.sender].money -= Bberlian * count
            conn.reply(m.chat, `Succes Membeli ${count} 💍 Berlian Sebesar ${Bberlian * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 💍Berlian Sebesar ${Bberlian * count} 💵 Money`.trim(), m)

          break
        case 'emas':
          if (global.db.data.users[m.sender].money >= Bemasbiasa * count) {
            global.db.data.users[m.sender].emas += count * 1
            global.db.data.users[m.sender].money -= Bemasbiasa * count
            conn.reply(m.chat, `Succes Membeli ${count} 📀 Emas Sebesar ${Bemasbiasa * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 📀 Emas Sebesar ${Bemasbiasa * count} 💵 Money`.trim(), m)

          break
        case 'limit':
          if (global.db.data.users[m.sender].money >= Blimit * count) {
            global.db.data.users[m.sender].limit += count * 1
            global.db.data.users[m.sender].money -= Blimit * count
            conn.reply(m.chat, `Succes Membeli ${count} 🌟 Limit Sebesar ${Blimit * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 🌟 Limit Sebesar ${Blimit * count} 💵 Money`.trim(), m)

          break
        case 'iron':
          if (global.db.data.users[m.sender].money >= Biron * count) {
            global.db.data.users[m.sender].iron += count * 1
            global.db.data.users[m.sender].money -= Biron * count
            conn.reply(m.chat, `Succes Membeli ${count} 💿 Iron Sebesar ${Biron * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 💿 Iron Sebesar ${Biron * count} 💵 Money`.trim(), m)

          break
        case 'sword':
          if (global.db.data.users[m.sender].money >= Bsword * count) {
            global.db.data.users[m.sender].sword += count * 1
            global.db.data.users[m.sender].money -= Bsword * count
            conn.reply(m.chat, `Succes Membeli ${count} 🗡 Sword Sebesar ${Bsword * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 🗡 Sword Sebesar ${Bsword * count} 💵 Money`.trim(), m)

          break
        case 'batu':
          if (global.db.data.users[m.sender].money >= Bbatu * count) {
            global.db.data.users[m.sender].batu += count * 1
            global.db.data.users[m.sender].money -= Bbatu * count
            conn.reply(m.chat, `Succes Membeli ${count} 🪨 Batu Sebesar ${Bbatu * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 🪨 Batu Sebesar ${Bbatu * count} 💵 Money`.trim(), m)

          break
        case 'umpan':
          if (global.db.data.users[m.sender].money >= Bumpan * count) {
            global.db.data.users[m.sender].umpan += count * 1
            global.db.data.users[m.sender].money -= Bumpan * count
            conn.reply(m.chat, `Succes Membeli ${count} 🪱 Umpan Sebesar ${Bumpan * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 🪱 Umpan Sebesar ${Bumpan * count} 💵 Money`.trim(), m)

          break
        case 'pancingan':
          if (global.db.data.users[m.sender].money >= Bpancingan * count) {
            global.db.data.users[m.sender].pancingan += count * 1
            global.db.data.users[m.sender].money -= Bpancingan * count
            conn.reply(m.chat, `Succes Membeli ${count} 🎣 Pancingan Sebesar ${Bpancingan * count} 💵 Money`, m)
          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} 🎣 Pancingan Sebesar ${Bpancingan * count} 💵 Money`.trim(), m)

          break
        case 'armor':
          if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, '🛡 Armor Anda Sudah *Level Max*', m)
          if (global.db.data.users[m.sender].money > armor * 1) {
            global.db.data.users[m.sender].armor += 1
            global.db.data.users[m.sender].money -= armor * 1
            conn.reply(m.chat, `Succes Membeli 🛡 Armor Seharga ${armor} 💵 Money`, m)

          } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli 🛡 Armor Seharga ${armor} 💵 Money`, m)

          break
        default:
          return conn.reply(m.chat, Kchat, m)
      }
    } else if (/sell|jual|/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
      switch (type) {
        case 'sampah':
          if (global.db.data.users[m.sender].sampah >= count * 1) {
            global.db.data.users[m.sender].sampah -= count * 1
            global.db.data.users[m.sender].money += Ssampah * count
            conn.reply(m.chat, `Succes Menjual ${count} 🗑 Sampah, Sebesar ${Ssampah * count} 💵 Money`.trim(), m)
          } else conn.reply(m.chat, `🗑 Sampah anda tidak cukup`.trim(), m)
          break
        case 'kaleng':
          if (global.db.data.users[m.sender].kaleng >= count * 1) {
            global.db.data.users[m.sender].kaleng -= count * 1
            global.db.data.users[m.sender].money += Skaleng * count
            conn.reply(m.chat, `Succes Menjual ${count} 🥫 Kaleng, Sebesar ${Skaleng * count} 💵 Money`, m)
          } else conn.reply(m.chat, `🥫 Kaleng anda tidak cukup`, m)
          break
        case 'kardus':
          if (global.db.data.users[m.sender].kardus >= count * 1) {
            global.db.data.users[m.sender].kardus -= count * 1
            global.db.data.users[m.sender].money += Skardus * count
            conn.reply(m.chat, `Succes Menjual ${count} 📦 Kardus, Sebesar ${Skardus * count} 💵 Money`, m)
          } else conn.reply(m.chat, `📦 Kardus anda tidak cukup`, m)
          break
        case 'botol':
          if (global.db.data.users[m.sender].botol >= count * 1) {
            global.db.data.users[m.sender].botol -= count * 1
            global.db.data.users[m.sender].money += Sbotol * count
            conn.reply(m.chat, `Succes Menjual ${count} 🍾 Botol, Sebesar ${Sbotol * count} 💵 Money`, m)
          } else conn.reply(m.chat, `🍾 Botol anda tidak cukup`, m)
          break
        case 'kayu':
          if (global.db.data.users[m.sender].wood >= count * 1) {
            global.db.data.users[m.sender].wood -= count * 1
            global.db.data.users[m.sender].money += Skayu * count
            conn.reply(m.chat, `Succes Menjual ${count} 🪵 Kayu, Sebesar ${Skayu * count} 💵 Money`, m)
          } else conn.reply(m.chat, `🪵 Kayu anda tidak cukup`, m)
          break
        case 'pisang':
          if (global.db.data.users[m.sender].pisang >= count * 1) {
            global.db.data.users[m.sender].pisang -= count * 1
            global.db.data.users[m.sender].money += Spisang * count
            conn.reply(m.chat, `Succes Menjual ${count} 🍌 Pisang, Sebesar ${Spisang * count} 💵 Money`, m)
          } else conn.reply(m.chat, `🍌 Pisang anda tidak cukup`, m)
          break
        case 'anggur':
          if (global.db.data.users[m.sender].anggur >= count * 1) {
            global.db.data.users[m.sender].anggur -= count * 1
            global.db.data.users[m.sender].money += Sanggur * count
            conn.reply(m.chat, `Succes Menjual ${count} 🍇 Anggur, Sebesar ${Sanggur * count} 💵 Money`, m)
          } else conn.reply(m.chat, `🍇 Anggur anda tidak cukup`, m)
          break
        case 'mangga':
          if (global.db.data.users[m.sender].mangga >= count * 1) {
            global.db.data.users[m.sender].mangga -= count * 1
            global.db.data.users[m.sender].money += Smangga * count
            conn.reply(m.chat, `Succes Menjual ${count} 🥭 Mangga, Sebesar ${Smangga * count} 💵 Money`, m)
          } else conn.reply(m.chat, `🥭 Mangga anda tidak cukup`, m)
          break
        case 'jeruk':
          if (global.db.data.users[m.sender].jeruk >= count * 1) {
            global.db.data.users[m.sender].jeruk -= count * 1
            global.db.data.users[m.sender].money += Sjeruk * count
            conn.reply(m.chat, `Succes Menjual ${count} 🍊 Jeruk, Sebesar ${Sjeruk * count} 💵 Money`, m)
          } else conn.reply(m.chat, `🍊 Jeruk anda tidak cukup`, m)
          break
        case 'apel':
          if (global.db.data.users[m.sender].apel >= count * 1) {
            global.db.data.users[m.sender].apel -= count * 1
            global.db.data.users[m.sender].money += Sapel * count
            conn.reply(m.chat, `Succes Menjual ${count} 🍎 Apel, Sebesar ${Sapel * count} 💵 Money`, m)
          } else conn.reply(m.chat, `🍎 Apel anda tidak cukup`, m)
          break
        case 'berlian':
          if (global.db.data.users[m.sender].berlian >= count * 1) {
            global.db.data.users[m.sender].berlian -= count * 1
            global.db.data.users[m.sender].money += Sberlian * count
            conn.reply(m.chat, `Succes Menjual ${count} 💍 Berlian, Sebesar ${Sberlian * count} 💵 Money`, m)
          } else conn.reply(m.chat, `💍 Berlian anda tidak cukup`, m)
          break
        case 'emas':
          if (global.db.data.users[m.sender].emas >= count * 1) {
            global.db.data.users[m.sender].emas -= count * 1
            global.db.data.users[m.sender].money += Semasbiasa * count
            conn.reply(m.chat, `Succes Menjual ${count} 📀 Emas, Sebesar ${Semasbiasa * count} 💵 Money`, m)
          } else conn.reply(m.chat, `📀 Emas anda tidak cukup`, m)
          break
        case 'iron':
          if (global.db.data.users[m.sender].iron >= count * 1) {
            global.db.data.users[m.sender].iron -= count * 1
            global.db.data.users[m.sender].money += Siron * count
            conn.reply(m.chat, `Succes Menjual ${count} 💿 Iron, Sebesar ${Siron * count} 💵 Money`, m)
          } else conn.reply(m.chat, `💿 Iron anda tidak cukup`, m)
          break
        case 'sword':
          if (global.db.data.users[m.sender].sword >= count * 1) {
            global.db.data.users[m.sender].sword -= count * 1
            global.db.data.users[m.sender].money += Ssword * count
            conn.reply(m.chat, `Succes Menjual ${count} 🗡 Sword, Sebesar ${Ssword * count} 💵 Money`, m)
          } else conn.reply(m.chat, `🗡 Sword anda tidak cukup`, m)
          break
        case 'batu':
          if (global.db.data.users[m.sender].batu >= count * 1) {
            global.db.data.users[m.sender].batu -= count * 1
            global.db.data.users[m.sender].money += Sbatu * count
            conn.reply(m.chat, `Succes Menjual ${count} 🪨 Batu, Sebesar ${Sbatu * count} 💵 Money`, m)
          } else conn.reply(m.chat, `🪨 Batu anda tidak cukup`, m)
          break
        case 'limit':
          if (global.db.data.users[m.sender].limit >= count * 1) {
            global.db.data.users[m.sender].limit -= count * 1
            global.db.data.users[m.sender].money += Slimit * count
            conn.reply(m.chat, `Succes Menjual ${count} 🌟 Limit, Sebesar ${Slimit * count} 💵 Money`, m)
          } else conn.reply(m.chat, `🌟 Limit anda tidak cukup`, m)
          break
        case 'diamond':
          if (global.db.data.users[m.sender].diamond >= count * 1) {
            global.db.data.users[m.sender].diamond -= count * 1
            global.db.data.users[m.sender].money += Sdiamond * count
            conn.reply(m.chat, `Succes Menjual ${count} 💎 Diamond, Sebesar ${Sdiamond * count} 💵 Money`, m)
          } else conn.reply(m.chat, `💎 Diamond anda tidak cukup`, m)
          break
        case 'hiu':
              if (global.db.data.users[m.sender].hiu >= count * 1) {
                global.db.data.users[m.sender].hiu -= count * 1
                global.db.data.users[m.sender].money += Shiu * count
                conn.reply(m.chat, `Succes menjual ${count} 🦈 Hiu, dan anda mendapatkan ${Shiu * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Hiu anda tidak cukup`, m)
              break
            case 'tuna':
              if (global.db.data.users[m.sender].tuna >= count * 1) {
                global.db.data.users[m.sender].tuna -= count * 1
                global.db.data.users[m.sender].money += Stuna * count
                conn.reply(m.chat, `Succes menjual ${count} 🐟 Tuna, dan anda mendapatkan ${Stuna * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Tuna anda tidak cukup`, m)
              break
            case 'dory':
              if (global.db.data.users[m.sender].dory >= count * 1) {
                global.db.data.users[m.sender].dory -= count * 1
                global.db.data.users[m.sender].money += Sdory * count
                conn.reply(m.chat, `Succes menjual ${count} 🐠 Dory, dan anda mendapatkan ${Sdory * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Dory anda tidak cukup`, m)
              break
            case 'orca':
              if (global.db.data.users[m.sender].orca >= count * 1) {
                global.db.data.users[m.sender].orca -= count * 1
                global.db.data.users[m.sender].money += Sorca * count
                conn.reply(m.chat, `Succes menjual ${count} 🐳 Orca, dan anda mendapatkan ${Sorca * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Orca anda tidak cukup`, m)
              break
            case 'paus':
              if (global.db.data.users[m.sender].paus >= count * 1) {
                global.db.data.users[m.sender].paus -= count * 1
                global.db.data.users[m.sender].money += Spaus * count
                conn.reply(m.chat, `Succes menjual ${count} 🐋 Paus, dan anda mendapatkan ${Spaus * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Paus anda tidak cukup`, m)
              break
            case 'cumi':
              if (global.db.data.users[m.sender].cumi >= count * 1) {
                global.db.data.users[m.sender].cumi -= count * 1
                global.db.data.users[m.sender].money += Scumi * count
                conn.reply(m.chat, `Succes menjual ${count} 🦑 Cumi, dan anda mendapatkan ${Scumi * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Cumi anda tidak cukup`, m)
              break
            case 'gurita':
              if (global.db.data.users[m.sender].gurita >= count * 1) {
                global.db.data.users[m.sender].gurita -= count * 1
                global.db.data.users[m.sender].money += Sgurita * count
                conn.reply(m.chat, `Succes menjual ${count} 🐙 Gurita, dan anda mendapatkan ${Sgurita * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Gurita anda tidak cukup`, m)
              break
            case 'buntal':
              if (global.db.data.users[m.sender].buntal >= count * 1) {
                global.db.data.users[m.sender].buntal -= count * 1
                global.db.data.users[m.sender].money += Sbuntal * count
                conn.reply(m.chat, `Succes menjual ${count} 🐡 Buntal, dan anda mendapatkan ${Sbuntal * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Buntal anda tidak cukup`, m)
              break
            case 'udang':
              if (global.db.data.users[m.sender].udang >= count * 1) {
                global.db.data.users[m.sender].udang -= count * 1
                global.db.data.users[m.sender].money += Sudang * count
                conn.reply(m.chat, `Succes menjual ${count} 🦐 Udang, dan anda mendapatkan ${Sudang * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Udang anda tidak cukup`, m)
              break
            case 'lumba':
              if (global.db.data.users[m.sender].lumba >= count * 1) {
                global.db.data.users[m.sender].lumba -= count * 1
                global.db.data.users[m.sender].money += Slumba * count
                conn.reply(m.chat, `Succes menjual ${count} 🐬 Lumba², dan anda mendapatkan ${Slumba * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Lumba² anda tidak cukup`, m)
              break
            case 'lobster':
              if (global.db.data.users[m.sender].lobster >= count * 1) {
                global.db.data.users[m.sender].lobster -= count * 1
                global.db.data.users[m.sender].money += Slobster * count
                conn.reply(m.chat, `Succes menjual ${count} 🦞 Lobster, dan anda mendapatkan ${Slobster * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Lobster anda tidak cukup`, m)
              break
            case 'kepiting':
              if (global.db.data.users[m.sender].kepiting >= count * 1) {
                global.db.data.users[m.sender].kepiting -= count * 1
                global.db.data.users[m.sender].money += Skepiting * count
                conn.reply(m.chat, `Succes menjual ${count} 🦀 Kepiting, dan anda mendapatkan ${Skepiting * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Kepiting anda tidak cukup`, m)
              break
            case 'banteng':
              if (global.db.data.users[m.sender].banteng >= count * 1) {
                global.db.data.users[m.sender].banteng -= count * 1
                global.db.data.users[m.sender].money += Sbanteng * count
                conn.reply(m.chat, `Succes menjual ${count} 🐂 Banteng, dan anda mendapatkan ${Sbanteng * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Banteng anda tidak cukup`, m)
              break
              case 'kerbau':
              if (global.db.data.users[m.sender].kerbau >= count * 1) {
                global.db.data.users[m.sender].kerbau -= count * 1
                global.db.data.users[m.sender].money += Skerbau * count
                conn.reply(m.chat, `Succes menjual ${count} 🐃 Kerbau, dan anda mendapatkan ${Skerbau * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Kerbau anda tidak cukup`, m)
              break
              case 'harimau':
              if (global.db.data.users[m.sender].harimau >= count * 1) {
                global.db.data.users[m.sender].harimau -= count * 1
                global.db.data.users[m.sender].money += Sharimau * count
                conn.reply(m.chat, `Succes menjual ${count} 🐅 Harimau, dan anda mendapatkan ${Sharimau * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Harimau anda tidak cukup`, m)
              break
              case 'sapi':
              if (global.db.data.users[m.sender].sapi >= count * 1) {
                global.db.data.users[m.sender].sapi -= count * 1
                global.db.data.users[m.sender].money += Ssapi * count
                conn.reply(m.chat, `Succes menjual ${count} 🐄 Sapi, dan anda mendapatkan ${Ssapi * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Sapi anda tidak cukup`, m)
              break
              case 'gajah':
              if (global.db.data.users[m.sender].gajah >= count * 1) {
                global.db.data.users[m.sender].gajah -= count * 1
                global.db.data.users[m.sender].money += Sgajah * count
                conn.reply(m.chat, `Succes menjual ${count} 🐘 Gajah, dan anda mendapatkan ${Sgajah * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Gajah anda tidak cukup`, m)
              break
              case 'monyet':
              if (global.db.data.users[m.sender].monyet >= count * 1) {
                global.db.data.users[m.sender].monyet -= count * 1
                global.db.data.users[m.sender].money += Smonyet * count
                conn.reply(m.chat, `Succes menjual ${count} 🐒 Monyet, dan anda mendapatkan ${Smonyet * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Monyet anda tidak cukup`, m)
              break
              case 'kambing':
              if (global.db.data.users[m.sender].kambing >= count * 1) {
                global.db.data.users[m.sender].kambing -= count * 1
                global.db.data.users[m.sender].money += Skambing * count
                conn.reply(m.chat, `Succes menjual ${count} 🐐 Kambing, dan anda mendapatkan ${Skambing * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Kambing anda tidak cukup`, m)
              break
              case 'rusa':
              if (global.db.data.users[m.sender].rusa >= count * 1) {
                global.db.data.users[m.sender].rusa -= count * 1
                global.db.data.users[m.sender].money += Srusa * count
                conn.reply(m.chat, `Succes menjual ${count} 🦌 Rusa, dan anda mendapatkan ${Srusa * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Rusa anda tidak cukup`, m)
              break
              case 'kuda':
              if (global.db.data.users[m.sender].kuda >= count * 1) {
                global.db.data.users[m.sender].kuda -= count * 1
                global.db.data.users[m.sender].money += Skuda * count
                conn.reply(m.chat, `Succes menjual ${count} 🐎 Kuda, dan anda mendapatkan ${Skuda * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Kuda anda tidak cukup`, m)
              break
              case 'babi':
              if (global.db.data.users[m.sender].babi >= count * 1) {
                global.db.data.users[m.sender].babi -= count * 1
                global.db.data.users[m.sender].money += Sbabi * count
                conn.reply(m.chat, `Succes menjual ${count} 🐖 Babi, dan anda mendapatkan ${Sbabi * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Babi anda tidak cukup`, m)
              break
              case 'buaya':
              if (global.db.data.users[m.sender].buaya >= count * 1) {
                global.db.data.users[m.sender].buaya -= count * 1
                global.db.data.users[m.sender].money += Sbuaya * count
                conn.reply(m.chat, `Succes menjual ${count} 🐊 Buaya, dan anda mendapatkan ${Sbuaya * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Buaya anda tidak cukup`, m)
              break
              case 'ayam':
              if (global.db.data.users[m.sender].ayam >= count * 1) {
                global.db.data.users[m.sender].ayam -= count * 1
                global.db.data.users[m.sender].money += Sayam * count
                conn.reply(m.chat, `Succes menjual ${count} 🐓 Ayam, dan anda mendapatkan ${Sayam * count} 💵 Money`, m)
              } else conn.reply(m.chat, `Ayam anda tidak cukup`, m)
          break
        default:
          return conn.reply(m.chat, Kchat, m)
      }
    }
  } catch (e) {
    conn.reply(m.chat, Kchat, m)
    console.log(e)
  }
}

handler.help = ['shop']
handler.tags = ['rpg']

handler.command = /^(shop|toko|buy|beli|sell|jual)$/i
handler.limit = true
handler.group = true
module.exports = handler
