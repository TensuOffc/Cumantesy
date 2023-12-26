let fs = require('fs')
let path = require('path')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')
let tags = {
  main: 'MAIN MENU',
  ai: 'AI MENU',
  anime: 'ANIME MENU',
  anonymous: 'ANONYMOUS MENU',
  downloader: 'DOWNLOADER MENU',
  effect: 'EFFECT MENU',
  fun: 'FUN MENU',
  game: 'GAME MENU',
  group: 'GROUP MENU',
  info: 'INFO MENU',
  internet: 'INTERNET MENU',
  islamic: 'ISLAMIC MENU',
  maker: 'MAKER MENU',
  nsfw: 'NSFW MENU',
  owner: 'OWNER MENU',
  premium: 'PREMIUM MENU',
  primbon: 'PRIMBON MENU',
  quotes: 'QUOTES MENU',
  rpg: 'RPG MENU',
  sticker: 'STICKER MENU',
  tools: 'TOOLS MENU',
  xp: 'USER MENU',
  voice: 'VOICE MENU',
}
const defaultMenu = {
  before: `Hello!, %ucapan %tag,
Saya adalah sistem otomatis (Bot WhatsApp),
yang dapat membantu Anda menyelesaikan pekerjaan kecil
seperti mengunduh video atau gambar,dll. 
hanya melalui WhatsApp.

╔╣ _*「 I N F O 」*_
║❖  *Limit* : %limit
║❖  *Date* : %week, %date
║❖  *Runtime* : %uptime 
║❖  *User* : %rtotalreg of %totalreg
╚════════╣⊱

Jika menemukan error/bug atau ingin upgrade premium,
silahkan hubungi *Owner* atau ketik .owner!
%readmore`.trimStart(),
  header: '╔╣ _*「 %category 」*_',
  body: '║ %cmd %islimit %isPremium',
  footer: '╚════════╣⊱\n',
  after: `_Tensura ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ_ / *ᴘᴜʙʟɪᴄ ᴍᴏᴅᴇ*
${'```%npmdesc```'}
`,
}
let handler = async (m, {
  conn,
  usedPrefix: _p
}) => {

let loadd = [
 '𝚃𝚄𝙽𝙶𝙶𝚄 𝚂𝙴𝙱𝙴𝙽𝚃𝙰𝚁..',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...',
 '˜”*°•.𝙸 𝙷𝙾𝙿𝙴 𝚈𝙾𝚄 𝙴𝙽𝙹𝙾𝚈 𝚄𝚂𝙸𝙽𝙶 𝙱𝙾𝚃!.•°*”˜',
 ]
let { key } = await conn.sendMessage(m.chat, {text: '𝙻𝙾𝙰𝙳𝙸𝙽𝙶...'})
for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}

  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
    let tag = `@${m.sender.replace(/@.+/g, '')}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, {
      weekday: 'long'
    })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? 'Ⓛ' : '')
                .replace(/%isPremium/g, menu.premium ? 'Ⓟ' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p,
      uptime,
      muptime,
      me: conn.user.name,
      ucapan: ucapan(),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level,
      tag,
      limit,
      name,
      weton,
      week,
      date,
      dateIslamic,
      time,
      totalreg,
      rtotalreg,
      role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    conn.sendMessageModify(m.chat, text.trim(), 0, {
      ads: true,
      largeThumb: true,
      url: global.set.link
    })
  } catch (e) {
    conn.reply(m.chat, '⚠ Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['allmenu']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  let time = moment.tz('Asia/Jakarta').format('HH')
  let res = `💤 Don't forget to sleep!`
  if (time >= 5) res = `˃o˂ Selamat pagi`
  if (time >= 11) res = `˃o˂ Selamat siang`
  if (time >= 15) res = `˃o˂ Selamat sore`
  if (time >= 18) res = `˃o˂ Selamat malam`
  return res
}
