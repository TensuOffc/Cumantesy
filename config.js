// Owner
global.owner = [
  ['6285721795949'],
  ['6285721795949', 'Owner', true]
]
  //Info
global.nameowner = 'Tensu'
global.numberowner = '6285721795949'
global.namebot = 'Tensura Bot'

//Watermark
global.wm = '© Tensura Bot | By Tensu'
// Moderator
global.mods = ['628972513060']
// Web Api
global.APIs = {
  alya: 'https://api.alyachan.pro'
}
// APikey register https://api.alyachan.pro
global.APIKeys = {
  'https://api.alyachan.pro': 'Tensura'
}
// Option
global.set = {
  link: 'https://chat.whatsapp.com/JliwDGDqgCaF8nAfjWkpdn',
  thumbnail: 'https://telegra.ph/file/54282e8f257b740d87bee.jpg',
  wm: `© Tensura-Bot v${require('./package.json').version}`,
  footer: 'ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ Tensu',
  packname: 'Sticker By',
  author: '#Tensura-Bot/+62897-2513-060'
}
// login use code
global.pairingNumber = 628972513060 // fill in your bot number here
// if you use replit
global.replit_url = ''
// other
global.multiplier = 1000 // The bigger it gets the harder it is to level up
global.max_upload = 70 // Maximum limit to send files
global.intervalmsg = 1800 // To avoid spam on first login
global.ram_usage = 2100000000 // Maximum 2GB ram, do the math yourself
// Function & Scrape
global.Func = new (require('./lib/functions'))
global.scrap = require('./lib/scrape')
// Message
global.status = {
  wait: '*_Loading . . ._*',
    invalid: '_*URL tidak valid.*_',
    wrong: '_*Format salah.*_',
    error: '_*Terjadi kesalahan.*_',
    premium: '_*「 Fitur Khusus Premium User 」*_',
    admin: '_*「 Fitur Khusus Admin Group 」*_',
    botAdmin: '*_Jadikan bot admin untuk menggunakan perintah ini._*',
    owner: '_*「 Fitur Khusus Owner Bot 」*_',
    mod: '_*「 Fitur Khusus Mods Bot 」*_',
    group: '_*「 Fitur Khusus Di Dalam Group 」*_',
    private: '_*「 Fitur Khusus Private Chat 」*_',
    register: '_Hi user, Untuk melanjutkan menggunakan bot, tolong daftar terlebih dahulu! Ketik Seperti:_\n\n◦ Contoh : *.daftar Namamu.Umurmu*\n◦ Contoh Penulisan : *.daftar Tensu.20*\n_Jangan Lupa Pakai . Sesuai contoh, Nama dan Umur bebas!_',
    game: '_*「 Fitur Game Tidak Aktif 」*_',
    rpg: '_*「 Fitur RPG Tidak Aktif 」*_'
}
// Emoticon RPG
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✨',
      money: '💵',
      potion: '🧪',
      diamond: '💎',
      common: '📦',
      uncommon: '📦',
      mythic: '📦',
      legendary: '📦',
      pet: '🎁',
      trash: '🗑',
      armor: '🛡',
      sword: '🗡',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      bank: '🏛',
      fox: '🦊',
      petFood: '🍖',
      iron: '💿',
      gold: '📀',
      botol: '🍾',
      kardus: '📦',
      berlian: '💍',
      limit: '🌟',
      anggur: '🍇',
      apel: '🍎',
      jeruk: '🍊',
      pisang: '🍌',
      mangga: '🥭',
    }
    let results = Object.keys(emot).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  },
}
const fs = require('fs')
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})