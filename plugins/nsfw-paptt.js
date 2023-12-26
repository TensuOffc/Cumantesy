//buatan Vynaa-md, jgn hapus atuh 😊
let handler = async (m, { conn, usedPrefix, command }) => {
  await m.react(`🕛`)
	if (!global.db.data.chats[m.chat].nsfw) throw `⚠️ Grup tidak mendukung konten nsfw \n\nUntuk mengaktifkan ketik \n*${usedPrefix}enable* nsfw`
    let user = global.db.data.users[m.sender].age
    if (user < 17) throw m.reply(`🚫 Anda masih di bawah umur! Kembalilah saat Anda berusia di atas 18 tahun`) 
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
conn.sendFile(m.chat, pickRandom(oppai), null, `Nih *${name}* paptt nya🥵`, m)
 // conn.sendButton(m.chat, `Nih *${name}*`, botdate, pickRandom(paptt), [['Next', `/paptt`]],m)
}
handler.help = ['paptt']
handler.tags = ['premium']
handler.command = /^(paptt)$/i
handler.premium = true
handler.private = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}


const oppai = [
 "https://telegra.ph/file/5c62d66881100db561c9f.mp4",
 "https://telegra.ph/file/a5730f376956d82f9689c.jpg",
 "https://telegra.ph/file/8fb304f891b9827fa88a5.jpg",
 "https://telegra.ph/file/0c8d173a9cb44fe54f3d3.mp4",
 "https://telegra.ph/file/b58a5b8177521565c503b.mp4",
 "https://telegra.ph/file/34d9348cd0b420eca47e5.jpg",
 "https://telegra.ph/file/73c0fecd276c19560133e.jpg",
 "https://telegra.ph/file/af029472c3fcf859fd281.jpg",
 "https://telegra.ph/file/0e5be819fa70516f63766.jpg",
 "https://telegra.ph/file/29146a2c1a9836c01f5a3.jpg",
 "https://telegra.ph/file/85883c0024081ffb551b8.jpg",
 "https://telegra.ph/file/d8b79ac5e98796efd9d7d.jpg",
 "https://telegra.ph/file/267744a1a8c897b1636b9.jpg",
 "https://telegra.ph/file/a590ada026e62f9db1ebb.jpg",
 "https://telegra.ph/file/5bcdb7661db4ba3364aab.jpg",
 "https://telegra.ph/file/8911fa9127400b3cf2827.jpg",
 "https://telegra.ph/file/a590ada026e62f9db1ebb.jpg",
 "https://telegra.ph/file/5bcdb7661db4ba3364aab.jpg",
 "https://telegra.ph/file/6751f3052cd6327e00f2a.jpg",
 "https://telegra.ph/file/0907fbb115bf087a27b98.jpg",
 "https://telegra.ph/file/a981541ae17550411d8ed.jpg",
 "https://telegra.ph/file/6e43cdfabea73b486f9fa.jpg",
 "https://telegra.ph/file/ddfa0128848727b8defd6.jpg",
 "https://telegra.ph/file/9f769c36dbf243d817a37.jpg",
 "https://telegra.ph/file/02677e556103befb58aee.jpg",
 "https://telegra.ph/file/53ccc992fc157c0aa9343.jpg",
 "https://telegra.ph/file/1bf3bd796ab4904e777b0.jpg",
 "https://telegra.ph/file/94b08fdec3105974849af.jpg",
 "https://telegra.ph/file/f04235ac482684b03105a.jpg",
 "https://telegra.ph/file/19e3b3767f5638f11fe19.jpg",
 "https://telegra.ph/file/1658e64234de405ba4cbd.jpg",
 "https://telegra.ph/file/a4eb6f0d710da2abf4de2.jpg",
 "https://telegra.ph/file/3bdded17f30823982a926.jpg",
 "https://telegra.ph/file/2ffc0c3ee57f8e6bbb52f.jpg",
 "https://telegra.ph/file/e8a18e9859c7602aba5b8.jpg",
 "https://telegra.ph/file/5914435b40fe2395895fc.jpg",
 "https://telegra.ph/file/77b6da1d8888b7f34144b.jpg",
 "https://telegra.ph/file/8463adf8e3a4942123143.jpg",
 "https://telegra.ph/file/ffcd75f220f9b16d26825.jpg",
 "https://telegra.ph/file/b2a1ade3c1afbe066014a.jpg",
 "https://telegra.ph/file/ecc33adbdef7cb2bcea1f.jpg",
 "https://telegra.ph/file/1af84fb98771319b0eaa5.jpg",
 "https://telegra.ph/file/59a2a048f3e7c63e8bf69.jpg",
 "https://telegra.ph/file/5be6977f3a3f2c5e7c0c3.jpg",
 "https://telegra.ph/file/5189c4aa0e475e32ff120.jpg",
 "https://telegra.ph/file/a0c2c4e45f42bee0b963c.jpg",
 "https://telegra.ph/file/41327e0c0cde2c2ec506c.jpg",
 "https://telegra.ph/file/16c27b7d94c70084384fb.jpg",
 "https://telegra.ph/file/36e5b9f809eba50b99cc6.jpg",
 "https://telegra.ph/file/4c5fa0e96c5d1df60378d.jpg",
 "https://telegra.ph/file/49013acd3233183af87b2.jpg",
 "https://telegra.ph/file/d2d457c470f2730e5577d.jpg",
 "https://telegra.ph/file/f977bd7c9ad5ab1448e76.jpg",
 "https://telegra.ph/file/02b36af01b627a8ef6767.jpg",
 "https://telegra.ph/file/f989a45f62249437cf968.jpg",
 "https://telegra.ph/file/846f092890d2017407d76.jpg",
 "https://telegra.ph/file/a099d5ef640c1a4bdb1ee.jpg",
 "https://telegra.ph/file/f09370e7b2b41ddbb6c44.jpg",
 "https://telegra.ph/file/da2a2acfba91d6e738b18.jpg",
 "https://telegra.ph/file/ce70e670d64f5696cc952.jpg",
 "https://telegra.ph/file/1427d9fabef46757f9fa0.jpg",
 "https://telegra.ph/file/a7f860a94000f31aea379.jpg",
 "https://telegra.ph/file/4adf31b3c6936b3d11684.jpg",
 "https://telegra.ph/file/ecfa13f89ea9005d28b81.jpg",
 "https://telegra.ph/file/c81565c5256e462ec75db.jpg",
 "https://telegra.ph/file/247eb8aec133c55a51813.jpg",
 "https://telegra.ph/file/d2f3f5b4c4a6e82c4979d.jpg",
 "https://telegra.ph/file/8c5629d3e42e70d512931.jpg",
 "https://telegra.ph/file/f9cda499da1e038122191.jpg",
 "https://telegra.ph/file/8e142c13ab1d415b29a33.jpg",
 "https://telegra.ph/file/a1142e4e1f8129aab581f.jpg",
 "https://telegra.ph/file/0766729c8b7e097ff43ee.jpg",
 "https://telegra.ph/file/1da4c7c4c6897fe399e04.jpg",
 "https://telegra.ph/file/59f53e0f8644b67ecd3c1.jpg",
 "https://telegra.ph/file/62cac9631502b4ba18ef2.jpg",
 ]