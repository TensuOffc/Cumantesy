
let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `❖ *Your Limit* = %limit
\n`.trimStart(),
  header: '╔╣ _*「 %category 」*_',
  body: '║ %cmd %islimit %isPremium',
  footer: '╚════════╣⊱\n',
  after: `_Tensura ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ_ / *ᴘᴜʙʟɪᴄ ᴍᴏᴅᴇ*`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {

let loadd = [
 '𝚃𝚄𝙽𝙶𝙶𝚄 𝚂𝙴𝙱𝙴𝙽𝚃𝙰𝚁..',
 '𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...',
 '˜”*°•.𝙸 𝙷𝙾𝙿𝙴 𝚈𝙾𝚄 𝙴𝙽𝙹𝙾𝚈 𝚄𝚂𝙸𝙽𝙶 𝙱𝙾𝚃!.•°*”˜',
 ]
let { key } = await conn.sendMessage(m.chat, {text: '𝙻𝙾𝙰𝙳𝙸𝙽𝙶...'})
for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}

  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['anonymous', 'downloader', 'ai', 'fun', 'game', 'group', 'info', 'internet', 'maker', 'owner', 'rpg', 'sticker', 'tools', 'xp', 'voice', 'anime', 'islamic', 'nsfw', 'premium', 'quotes', 'effect', 'primbon']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'ai') tags = {
    ai: 'AI MENU'
  }
  if (teks == 'anime') tags = {
    anime: 'ANIME MENU'
  }
  if (teks == 'anonymous') tags = {
    anonymous: 'ANONYMOUS MENU'
  }
  if (teks == 'downloader') tags = {
    downloader: 'DOWNLOADER MENU'
  }
if (teks == 'effect') tags = {
    effect: 'EFFECT MENU'
  }
  if (teks == 'fun') tags = {
    fun: 'FUN MENU'
  }
  if (teks == 'game') tags = {
    game: 'GAME MENU'
  }
  if (teks == 'group') tags = {
    group: 'GROUP MENU'
  }
  if (teks == 'info') tags = {
    info: 'INFO MENU'
  }
  if (teks == 'internet') tags = {
    internet: 'INTERNET MENU'
  }
  if (teks == 'islamic') tags = {
    islamic: 'ISLAMIC MENU'
  }
  if (teks == 'maker') tags = {
    maker: 'MAKER MENU'
  }
  if (teks == 'nsfw') tags = {
    nsfw: 'NSFW MENU'
  }
  if (teks == 'owner') tags = {
    owner: 'OWNER MENU'
  }
  if (teks == 'premium') tags = {
    premium: 'PREMIUM MENU'
  }
  if (teks == 'primbon') tags = {
    primbon: 'PRIMBON MENU'
    }
  if (teks == 'quotes') tags = {
    quotes: 'QUOTES MENU'
  }
  if (teks == 'rpg') tags = {
    rpg: 'RPG MENU'
  }
  if (teks == 'sticker') tags = {
    sticker: 'STICKER MENU'
  }
  if (teks == 'tools') tags = {
    tools: 'TOOLS MENU'
  }
  if (teks == 'xp') tags = {
    xp: 'USER INFO MENU'
  }
  if (teks == 'voice') tags = {
    voice: 'VOICE MENU'
  }
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
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
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      let capt = `Hello!, ${ucapan()}, @${m.sender.replace(/@.+/g, '')}\n`
      capt += `Saya adalah sistem otomatis (Bot WhatsApp),\n yang dapat membantu Anda menyelesaikan pekerjaan kecil\n seperti mengunduh video atau gambar,dll. hanya melalui WhatsApp.\n\n`
      capt += `╔╣「 _*INFO*_ 」\n`
      capt += `║❖  *Limit* : ${limit}\n`
      capt += `║❖  *User* : ${rtotalreg} of ${totalreg}\n`
      capt += `║❖  *Runtime* : ${uptime}\n`
      capt += `║❖  *Tanggal* : ${week}, ${date}\n`
      capt += `╚════════╣⊱\n\n`
      capt += `Ketik [.allmenu] Untuk melihat semua fitur bot!\nJika menemukan error/bug atau ingin upgrade premium,\nsilahkan hubungi *Owner* atau ketik .owner! \n\n-----  -----  -----  -----  -----  -----  ----- \n\n`
      capt += `╔╣「 _*DAFTAR MENU*_ 」\n`
      capt += `║ ${_p + command} ai\n`
      capt += `║ ${_p + command} anime\n`
      capt += `║ ${_p + command} anonymous\n`
      capt += `║ ${_p + command} downloader\n`
      capt += `║ ${_p + command} effect\n`
      capt += `║ ${_p + command} fun\n`
      capt += `║ ${_p + command} game\n`
      capt += `║ ${_p + command} group\n`
      capt += `║ ${_p + command} info\n`
      capt += `║ ${_p + command} internet\n`
      capt += `║ ${_p + command} islamic\n`
      capt += `║ ${_p + command} maker\n`
      capt += `║ ${_p + command} nsfw\n`
      capt += `║ ${_p + command} owner\n`
      capt += `║ ${_p + command} premium\n`
      capt += `║ ${_p + command} primbon\n`
      capt += `║ ${_p + command} quotes\n`
      capt += `║ ${_p + command} rpg\n`
      capt += `║ ${_p + command} sticker\n`
      capt += `║ ${_p + command} tools\n`
      capt += `║ ${_p + command} xp\n`
      capt += `║ ${_p + command} voice\n╚════════╣⊱\n`
      capt += global.set.footer
      return conn.sendMessageModify(m.chat, capt.trim(), m, {
        largeThumb: true,
        url: global.set.link
      })
    }
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered By https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
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
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level,
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
    await m.reply(text.trim())
  } catch (e) {
    conn.reply(m.chat, '⚠ Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
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

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "💤 Don't forget to sleep!"
  if (time >= 4) {
    res = "˃o˂ Selamat pagi"
  }
  if (time > 10) {
    res = "˃o˂ Selamat siang"
  }
  if (time >= 15) {
    res = "˃o˂ Selamat sore"
  }
  if (time >= 18) {
    res = "˃o˂ Selamat malam"
  }
  return res
}