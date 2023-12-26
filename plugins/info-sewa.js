let handler = async (m, { conn }) => {
  const sewaID = `----- LIST SEWA & PREMIUM -----
  
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
Note : Apa Keuntungan Premium?
Limit Unlimited ✓
Akses Semua Fitur ✓ (Kecuali Owner)
Unlock Fitur 18+ & Nsfw, dll.

Hubungi Owner Jika Minat!`

  conn.reply(m.chat, sewaID, m)
}

handler.help = ['buyprem','premium','infosewa']
handler.tags = ['info']
handler.command = /^(buyprem|premium|infosewa)$/i
handler.register = true

module.exports = handler
