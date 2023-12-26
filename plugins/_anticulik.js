let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    await conn.reply(m.chat, `* ( ◞•̀д•́)◞ Mau Masukin Bot Ke Group?*
*Maaf Bot Ini Tidak Gratis!*

╔╣ *PREMIUM*
║ _14 Hari_ *10k*
║ _1 Bulan_ *15k*
║ _2 Bulan_ *25k*
║ _3 Bulan_ *30k*
║ _Permanen_ *65k*
╚══╣⊱

╔╣ *SEWA BOT IN GROUP & PREMIUM*
║ _14 Hari Di Dalam Group/15k_ - [Free Premium 3 Hari]
║ _1 Bulan Di Dalam Group/20k_ - [Free Premium 7 Hari]
║ _2 Bulan Di Dalam Group/30k_ - [Free Premium 14 Hari]
║ _3 Bulan Di Dalam Group/45k_ - [Free Premium 1 Bulan]
║ _Permanen Di Dalam Group/75k_ - [Premium Permanent]
╚══╣⊱ 

-----  -----  -----  -----  -----  -----
Pembayaran Via : 
- DANA
- OVO
- QRIS (Admin 1K)

Jika berminat hubungi owner!
Ketik .owner`, m)
      const kontak = {
	"displayName": 'Owner Bot',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${nameowner}\nitem1.TEL;waid=${numberowner}:${numberowner}\nitem1.X-ABLabel:\nJangan Spam\nURL;Insta:https://instagram.com/danfvkk\nEMAIL;Email Owner:tensuramd@gmail.com\nORG: Developer\nEND:VCARD`
}
conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
    }
}

module.exports = handler
