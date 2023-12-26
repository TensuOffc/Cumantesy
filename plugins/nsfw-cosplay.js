let handler = async (m, { conn, usedPrefix, command }) => {
	if (!global.db.data.chats[m.chat].nsfw) throw `⚠️ Grup tidak mendukung konten nsfw \n\nUntuk mengaktifkan ketik \n*${usedPrefix}enable* nsfw`
    let user = global.db.data.users[m.sender].age
    if (user < 17) throw m.reply(`🚫 Anda masih di bawah umur! Kembalilah saat Anda berusia di atas 18 tahun`) 
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
  conn.sendFile(m.chat, pickRandom(cosplay), null, `Nih *${name}* Random Cosplaynya🥵..`, m)
}
handler.help = ['cosplay']
handler.tags = ['nsfw', 'premium', 'anime']
handler.command = /^(cosplay)$/i

handler.premium = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const cosplay = [

    "https://telegra.ph/file/1eb99958be5d385980e86.jpg",
    "https://telegra.ph/file/62215a65e69078187e8cd.jpg",
    "https://telegra.ph/file/dd829dbd2de8eb2095b9b.jpg",
    "https://telegra.ph/file/91ef6504fb46d8731ebb3.jpg",
    "https://telegra.ph/file/4a9c8aa9c47cf5b456a8c.jpg",
    "https://telegra.ph/file/879587074ca4cd6d9cf20.jpg",
    "https://telegra.ph/file/8e8b69ba057275497b18c.jpg",
    "https://telegra.ph/file/6b50964a9921cc5765b55.jpg",
    "https://telegra.ph/file/78449a9b16a5568ce1ff0.jpg",
    "https://telegra.ph/file/df4dfe594ad3f2da0601a.jpg",
    "https://telegra.ph/file/08522c7620da87a1f67e7.jpg",
    "https://telegra.ph/file/7beae80ef39f9f249b4c4.jpg",
    "https://telegra.ph/file/ac140752adfb51735e18d.jpg",
    "https://telegra.ph/file/609b8fa73288869f705d7.jpg",
    "https://telegra.ph/file/91f7c375a464af478ed1a.jpg",
    "https://telegra.ph/file/e5cea5a380f99d528ac4f.jpg",
    "https://telegra.ph/file/f5f781f793ad0ac4f9dc0.jpg",
    "https://telegra.ph/file/83dc323deba46d2a3b84f.jpg",
    "https://telegra.ph/file/577582f061ee625e8c7de.jpg",
    "https://telegra.ph/file/9155fb2c561a6381ea9ce.jpg",
    "https://telegra.ph/file/43d0a2f0d7fd3338e2822.jpg",
    "https://telegra.ph/file/fe5912322ac4da15c6ba0.jpg",
    "https://telegra.ph/file/33dee0afe820b377fb5a0.jpg",
    "https://telegra.ph/file/390f169782acce8b18269.jpg",
    "https://telegra.ph/file/2237adca28f6bdb563ada.jpg",
    "https://telegra.ph/file/019194d02ad9cbd031ccb.jpg",
    "https://telegra.ph/file/3ea251ce3387552ef814f.jpg",
    "https://telegra.ph/file/97f898b63849489508f23.jpg",
    "https://telegra.ph/file/750ef3839a1afec72ab35.jpg",
    "https://telegra.ph/file/524b0e7f2194a0e25de91.jpg",
    "https://telegra.ph/file/3b458a793238149604040.jpg",
    "https://telegra.ph/file/4b84d7c2b8ec1c2075525.jpg",
    "https://telegra.ph/file/5abd7e3e8b097d7eb8253.jpg",
    "https://telegra.ph/file/c3474a5106cd945fcf1f5.jpg",
    "https://telegra.ph/file/81c9c716399108ed23856.jpg",
    "https://telegra.ph/file/ff8481d60fb7ee9299b0f.jpg",
    "https://telegra.ph/file/3b3157a783155f2478227.jpg",
    "https://telegra.ph/file/e22431b47e192d10e105c.jpg",
    "https://telegra.ph/file/eab7067ffa7da849e19a0.jpg",
    "https://telegra.ph/file/b892f5a90547f151fd755.jpg",
    "https://telegra.ph/file/b202c1760f5a5283264f2.jpg",
    "https://telegra.ph/file/7897369316f35e2e56994.jpg",
    "https://telegra.ph/file/43f850691b20c90a48218.jpg",
    "https://telegra.ph/file/85bffa56eb9ec60acc0a2.jpg",
    "https://telegra.ph/file/9fd04dcefa89250de674f.jpg",
    "https://telegra.ph/file/0cd2f19dde5125e081734.jpg",
    "https://telegra.ph/file/84aa698661c7523f21c41.jpg",
    "https://telegra.ph/file/2ed0cd2a8dd17c55cbf5c.jpg",
    "https://telegra.ph/file/ede80243addd882183d4e.jpg",
    "https://telegra.ph/file/8783e0c1d16dea96b3b11.jpg",
    "https://telegra.ph/file/cf782f8b94caab0404f4c.jpg",
    "https://telegra.ph/file/4270ef5759ad78e5ed8b3.jpg",
    "https://telegra.ph/file/10c60d5245f25ace583c0.jpg",
    "https://telegra.ph/file/766b87184899b6f7c76bd.jpg",
    "https://telegra.ph/file/d2ceb953930c385554e1d.jpg",
    "https://telegra.ph/file/6988e1804a97f30180730.jpg",
    "https://telegra.ph/file/ee08e7e1b0c5bf66a9c02.jpg",
    "https://telegra.ph/file/1132c822adfbc79a29e22.jpg",
    "https://telegra.ph/file/dbfefd6f4b7e13860abc9.jpg",
    "https://telegra.ph/file/3cf4ca9f6be4f43a09c84.jpg",
    "https://telegra.ph/file/b9e0acd767d9f18a291e3.jpg",
    "https://telegra.ph/file/add29408118d498ee0d90.jpg",
    "https://telegra.ph/file/6d549c83fcff61a16db54.jpg",
    "https://telegra.ph/file/d94d48d90feab0e28aad9.jpg",
    "https://telegra.ph/file/f0512061db6488ace104d.jpg",
    "https://telegra.ph/file/4c10ca73efe0a539b9f51.jpg",
    "https://telegra.ph/file/8be39907018192a0f84e1.jpg",
    "https://telegra.ph/file/84c1b55fe9382f5ff4553.jpg",
    "https://telegra.ph/file/313713838d550c40c4288.jpg",
    "https://telegra.ph/file/b03fa7fc9719ae6fc7e50.jpg",
    "https://telegra.ph/file/3cd2121994084435ca145.jpg",
    "https://telegra.ph/file/f4df550e1edb4dfd30268.jpg",
    "https://telegra.ph/file/7517121c4d361043efb0b.jpg",
    "https://telegra.ph/file/a242b72323ca0d10db801.jpg",
    "https://telegra.ph/file/bc8a66ebacc5684185b11.jpg",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ]