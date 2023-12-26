const axios = require('axios')

let handler = async (m) => {
  const api = 'https://api.zahwazein.xyz/randomasupan/discord18?apikey=zenzkey_f07b21f698'
  try {
m.react('🕛')
	if (!global.db.data.chats[m.chat].nsfw) throw `⚠️ Grup tidak mendukung konten nsfw \n\nUntuk mengaktifkan ketik \n*${usedPrefix}enable* nsfw`
    let user = global.db.data.users[m.sender].age
    if (user < 17) throw m.reply(`🚫 Anda masih di bawah umur! Kembalilah saat Anda berusia di atas 18 tahun`) 
    const res = await axios.get(api)
    const result = res.data.result
    conn.sendFile(m.chat, result, 'asupan.mp4', 'Nih Asupannya🥵', m)
  } catch (e) {
    console.log(e)
    conn.reply(m.chat, 'An error occurred while processing your request.', m)
  }
}

handler.help = ['bokep']
handler.tags = ['premium']
handler.premium = true
handler.command = /^bokep$/i

module.exports = handler