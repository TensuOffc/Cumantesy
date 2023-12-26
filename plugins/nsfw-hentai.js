
let handler = async (m, { conn, usedPrefix, command }) => {
  await m.react(`🕛`)
	if (!global.db.data.chats[m.chat].nsfw) throw `⚠️ Grup tidak mendukung konten nsfw \n\nUntuk mengaktifkan ketik \n*${usedPrefix}enable* nsfw`
    let user = global.db.data.users[m.sender].age
    if (user < 17) throw m.reply(`🚫 Anda masih di bawah umur! Kembalilah saat Anda berusia di atas 18 tahun`) 
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
conn.sendFile(m.chat, pickRandom(hentai), null, `Nih *${name}* Hentainya🥵`, m)

}
handler.help = ['randomhentai']
handler.tags = ['premium']
handler.command = /^(randomhentai)$/i

handler.premium = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}


const hentai = [
"https://b.top4top.io/m_28103p0vt0.mp4",
"https://k.top4top.io/m_2810sd9rf0.mp4",
"https://h.top4top.io/m_28106m5660.mp4",
"https://e.top4top.io/m_2810f6o030.mp4",
"https://f.top4top.io/m_2810bi9xn1.mp4",
"https://e.top4top.io/m_2810vw21n0.mp4",
"https://f.top4top.io/m_2810s3g871.mp4",
"https://g.top4top.io/m_2810p713y2.mp4",
 ]