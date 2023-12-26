let handler = async (m, { conn }) => {
  const sewaID = `*Rules Group Tensura Bot!*
1. Dilarang Rasis
2. Dilarang Mengirim Yang Berbau Pornografi/18+
3. Dilarang Mengirim Hal Gore/Sadis
4. Dilarang Masukin Bot Lain (Kecuali Bot Owner)
5. Dilarang Promosi
6. Dilarang Promosi Gc Lain Selain Gc ini!
7. Dilarang Spam Berlebihan! (Karena Bikin Bot Delay)
8. Fitur GAME On di Jam 08.00 - 15.00
9. Fitur RPG On di Jam 15.00 - 21.00

Note: Group Close Jam 21.00 - 07.00
Rules Dapat Berubah Sewaktu-Waktu!
Langgar Rules 1-7 Resiko Ban + Kick Dari group + Block!

© Tensura Bot | By Tensu`

  conn.reply(m.chat, sewaID, m)
}

handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules|rule|ruls)$/i
handler.register = true

module.exports = handler
