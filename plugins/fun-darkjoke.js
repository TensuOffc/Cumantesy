let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
let dio = await fetch('https://raw.githubusercontent.com/tegarpryd/merlynkurnia/d367f3f359df10c09f35d4b3cb9ec384eafb1b47/fun/darkjoke.json')
let json = await dio.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendFile(m.chat, url.image, 'file.jpg', global.set.wm, m)
}
handler.help = ['darkjoke']
handler.tags = ['fun']
handler.command = /^(darkjoke|darkjokes)$/i
handler.limit = true
module.exports = handler
