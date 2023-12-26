let handler = async (m, {
    conn,
    usedPrefix
  }) => {
    let target = m.mentionedJid[0] || m.sender
     let user = global.db.data.users[target]
     let name = user.name
     let level = user.level
     let exp = user.exp
	let banteng = global.db.data.users[m.sender].banteng
	let harimau = global.db.data.users[m.sender].harimau
	let gajah = global.db.data.users[m.sender].gajah
	let kambing = global.db.data.users[m.sender].kambing
	let kuda = global.db.data.users[m.sender].kuda
	let buaya = global.db.data.users[m.sender].buaya
	let kerbau = global.db.data.users[m.sender].kerbau
	let sapi = global.db.data.users[m.sender].sapi
	let monyet = global.db.data.users[m.sender].monyet
	let rusa = global.db.data.users[m.sender].rusa
	let babi = global.db.data.users[m.sender].babi
	let ayam = global.db.data.users[m.sender].ayam
    let kano = `
╔╣「 *BIO* 」   
║ *👤 Name :* ${name}
║ *📊 Level :* ${level}
║ *✨ Exp :* ${exp}
╚══════════╣⊱ 

======= _*LIST HEWAN*_ =======
    
 🐂 Banteng: ${banteng}
 🐃 Kerbau: ${kerbau}
 🐅 Harimau: ${harimau}
 🐄 Sapi: ${sapi}
 🐘 Gajah: ${gajah}
 🐒 Monyet: ${monyet}
 🐐 Kambing: ${kambing}
 🦌 Rusa: ${rusa}
 🐎 Kuda: ${kuda}
 🐖 Babi; ${babi}
 🐊 Buaya: ${buaya}
 🐓 Ayam: ${ayam}
 
🐾 Total Hewan: *${banteng + kerbau + harimau + sapi + gajah + monyet + kambing + rusa + kuda + babi + buaya + ayam}* Ekor`.trim()
  
    conn.reply(m.chat, kano, m)
  }
  
  handler.help = ['kandang']
handler.tags = ['rpg']
handler.command = /^(kandang)$/i
handler.group = true
module.exports = handler