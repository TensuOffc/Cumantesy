let handler = (m) => m
handler.all = async function(m, {
  conn
}) {
  if (!m.chat.endsWith('@s.whatsapp.net')) return !0
  this.confess = this.confess ? this.confess : {}
  let mf = Object.values(this.confess).find(v => v.status === false && v.penerima == m.sender)
  if (!mf) return !0
  console.log({ text: m.text })
  if (mf && (m.text === 'balas' || m.text === 'Balas' || m.text === '') && m.quoted?.mtype == 'extendedTextMessage') return m.reply(Func.texted('bold', 'Silahkan kirim pesan balasan kamu.\nKetik pesan sesuatu lalu kirim, maka pesan otomatis masuk ke pengirim sebelumnya '))
  let txt = `Hai kak, kamu menerima balasan nih.\n\nPesan yang kamu kirim sebelumnya:\n${mf.pesan}\n\nPesan balasannya:\n${m.text}`
  await this.reply(mf.dari, txt, null).then(() => {
    m.reply('Berhasil mengirim pesan balasan.')
    Func.delay(2000)
    delete this.confess[mf.id]
    return !0
  })
  return !0
}
module.exports = handler