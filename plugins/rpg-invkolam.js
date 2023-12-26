let handler = async (m, {
    conn,
    usedPrefix
  }) => {
    let target = m.mentionedJid[0] || m.sender
     let user = global.db.data.users[target]
     let name = user.name
     let level = user.level
     let exp = user.exp
    let paus = global.db.data.users[m.sender].paus
    let kepiting = global.db.data.users[m.sender].kepiting
    let gurita = global.db.data.users[m.sender].gurita
    let cumi = global.db.data.users[m.sender].cumi
    let buntal = global.db.data.users[m.sender].buntal
    let dory = global.db.data.users[m.sender].dory
    let lumba = global.db.data.users[m.sender].lumba
    let lobster = global.db.data.users[m.sender].lobster
    let hiu = global.db.data.users[m.sender].hiu
    let udang = global.db.data.users[m.sender].udang
    let tuna = global.db.data.users[m.sender].tuna
    let orca = global.db.data.users[m.sender].orca
    let umpan = global.db.data.users[m.sender].umpan
    let pancingan = global.db.data.users[m.sender].pancingan
    let _pancingan = global.db.data.users[m.sender].anakpancingan
    let aineh = `
╔╣「 *BIO* 」   
║ *👤 Name :* ${name}
║ *📊 Level :* ${level}
║ *✨ Exp :* ${exp}
╚══════════╣⊱ 

╔╣「 *ISI KOLAM* 」
║🦀 Kepiting: ${kepiting}
║🦞 Lobster: ${lobster}
║🦐 Udang: ${udang}
║🦑 Cumi: ${cumi}
║🐙 Gurita: ${gurita}
║🐡 Buntal: ${buntal}
║🐠 Dory: ${dory}
║🐟 Tuna: ${tuna}
║🐳 Orca: ${orca}
║🐬 Lumba²: ${lumba}
║🐋 Paus: ${paus}
║🦈 Hiu: ${hiu}
╚══════════╣⊱ 
🎏 Total Isi Kolam: *${kepiting + lobster + udang + cumi + gurita + buntal + dory + orca + lumba + paus + hiu + tuna}* Jenis

🪱 *Umpan:* ${umpan}

 *Level Pancingan:*
 Pancingan: *${pancingan == 0 ? 'Tidak Punya' : '' || pancingan == 1 ? 'Level 1' : '' || pancingan == 2 ? 'Level 2' : '' || pancingan == 3 ? 'Level 3' : '' || pancingan == 4 ? 'Level 4' : '' || pancingan == 5 ? 'Level MAX' : ''}*`.trim()
  
    conn.reply(m.chat, aineh, m)
  }
  
  handler.help = ['kolam']
  handler.tags = ['rpg']
  handler.command = /^(kolam)$/i
  handler.group = true
  module.exports = handler
  