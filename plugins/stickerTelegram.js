const { MessageType } = require('@whiskeysockets/baileys')
const fetch = require('node-fetch')
const { sticker } = require('../lib/sticker')
let handler = async (m, {
  conn,
  args,
  usedPrefix,
  command
}) => {
  if (!args[0]) return m.reply(Func.example(usedPrefix, command, 'https://t.me/addstickers/namapack'))
  if (!args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) return m.reply(status.invalid)
  m.react('🕛')
  let packName = args[0].replace('https://t.me/addstickers/', '')
  let gas = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {
    method: 'GET',
    headers: {
      'User-Agent': 'GoogleBot'
    }
  })
  if (!gas.ok) return m.reply(Func.jsonFormat(gas))
  let json = await gas.json()
  m.reply(`*Total stiker:* ${json.result.stickers.length}
*Estimasi selesai* : ${json.result.stickers.length * 1.5} second.`.trim())
  for (let i = 0; i < json.result.stickers.length; i++) {
    let fileId = json.result.stickers[i].thumb.file_id
    let gasIn = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
    let jisin = await gasIn.json()
    let stiker = await sticker(false, 'https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/' + jisin.result.file_path, global.set.packname, global.set.author)
    await conn.sendMessage(m.chat, { sticker: stiker })
    await Func.delay(1500)
  }
  m.reply('*✅ Successfully pick up stickers*')
}
handler.help = ['stickertele']
handler.tags = ['sticker']
handler.command = /^(stic?kertele(gram)?)$/i
handler.limit = true
module.exports = handler