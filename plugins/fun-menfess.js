let handler = async (m, {
  conn,
  usedPrefix,
  command,
  text
}) => {
  conn.confess = conn.confess ? conn.confess : {}
  if (!text) throw `*Cara penggunaan :*\n\n${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|aku secret|Halo.`
  let [jid, name, pesan] = text.split('|')
  if ((!jid || !name || !pesan)) throw `*Cara penggunaan :*\n\n${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|aku secret|Halo.`
  jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
  let data = (await conn.onWhatsApp(jid))[0] || {}
  if (!data.exists) throw 'Nomor tidak terdaftar di whatsapp.'
  if (jid == m.sender) throw 'tidak bisa mengirim pesan menfess ke diri sendiri.'
  let mf = Object.values(conn.confess).find(mf => mf.status === true)
  if (mf) return !0
  try {
    let id = +new Date
    let txt = `Hello @${data.jid.split('@')[0]}, Kamu menerima pesan confess.\n\nDari : ${name}\nPesan : \n${pesan}\n\nIngin Membalas Pesan nya? Ketik pesan balasan yang kamu mau, Bot otomatis akan mengirimkan pesan balasan kepada ${name}.`.trim()
    await conn.reply(data.jid, txt, null).then(() => {
      m.reply('Successfully sent the confess message.')
      conn.confess[id] = {
        id,
        dari: m.sender,
        nama: name,
        penerima: data.jid,
        pesan: pesan,
        status: false
      }
      return !0
    })
  } catch (e) {
    console.log(e)
    m.reply('eror')
  }
}
handler.help = ['menfess']
handler.tags = ['fun']
handler.command = ['menfess', 'confess', 'menfes', 'confes']
handler.private = true
module.exports = handler