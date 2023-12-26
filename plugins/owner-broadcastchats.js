let handler = async (m, {
      conn,
      text,
      command,
      Func
   }) => {
      try {
         let q = m.quoted ? m.quoted : m
         let mime = (q.msg || q).mimetype || ''
         let chatJid = global.db.chats.filter(v => v.jid && v.jid.endsWith('.net')).map(v => v.jid)
         let groupList = async () => Object.entries(await conn.groupFetchAllParticipating()).slice(0).map(entry => entry[1])
         let groupJid = await (await groupList()).map(v => v.id)
         const id = command == 'bc' ? chatJid : groupJid
         if (id.length == 0) return conn.reply(m.chat, Func.texted('bold', `🚩 Error, ID does not exist.`), m)
         conn.sendReact(m.chat, '🕒', m.key)
         if (text) {
            for (let jid of id) {
               await Func.delay(1500)
               await conn.sendMessageModify(jid, text, null, {
                  title: global.botname,
                  thumbnail: await Func.fetchBuffer('https://telegra.ph/file/aa76cce9a61dc6f91f55a.jpg'),
                  largeThumb: true,
                  url: global.db.setting.link,
                  mentions: command == 'bcgc' ? await (await conn.groupMetadata(jid)).participants.map(v => v.id) : []
               })
            }
            conn.reply(m.chat, Func.texted('bold', `🚩 Successfully send broadcast message to ${id.length} ${command == 'bc' ? 'chats' : 'groups'}`), m)
         } else if (/image\/(webp)/.test(mime)) {
            for (let jid of id) {
               await Func.delay(1500)
               let media = await q.download()
               await conn.sendSticker(jid, media, null, {
                  packname: global.db.setting.sk_pack,
                  author: global.db.setting.sk_author,
                  mentions: command == 'bcgc' ? await (await conn.groupMetadata(jid)).participants.map(v => v.id) : []
               })
            }
            conn.reply(m.chat, Func.texted('bold', `🚩 Successfully send broadcast message to ${id.length} ${command == 'bc' ? 'chats' : 'groups'}`), m)
         } else if (/video|image\/(jpe?g|png)/.test(mime)) {
            for (let jid of id) {
               await Func.delay(1500)
               let media = await q.download()
               await conn.sendFile(jid, media, '', q.text ? '乂  *B R O A D C A S T*\n\n' + q.text : '', null, null,
                  command == 'bcgc' ? {
                     contextInfo: {
                        mentionedJid: await (await conn.groupMetadata(jid)).participants.map(v => v.id)
                     }
                  } : {})
            }
            conn.reply(m.chat, Func.texted('bold', `🚩 Successfully send broadcast message to ${id.length} ${command == 'bc' ? 'chats' : 'groups'}`), m)
         } else if (/audio/.test(mime)) {
            for (let jid of id) {
               await Func.delay(1500)
               let media = await q.download()
               await conn.sendFile(jid, media, '', '', null, null,
                  command == 'bcgc' ? {
                     ptt: q.ptt,
                     contextInfo: {
                        mentionedJid: await (await conn.groupMetadata(jid)).participants.map(v => v.id)
                     }
                  } : {})
            }
            conn.reply(m.chat, Func.texted('bold', `🚩 Successfully send broadcast message to ${id.length} ${command == 'bc' ? 'chats' : 'groups'}`), m)
         } else conn.reply(m.chat, Func.texted('bold', `🚩 Media / text not found or media is not supported.`), m)
      } catch (e) {
         conn.reply(m.chat, Func.jsonFormat(e), m)
      }
      try {
} catch {
console.log(e)
}
   };
handler.help = ['bc', 'bcgc']
handler.tags = ['rpg']
handler.command = ['bc', 'bcgc']

handler.owner = true
module.exports = handler
