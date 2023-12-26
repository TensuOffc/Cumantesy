/* Owner: TensuraBot */
/*  */
/*  */


let handler = async (m, { conn }) => {
  const aboutID = `Tensura Bot merupakan bot WhatsApp yang cerdas dan sangat berguna, untuk membantu Anda menjawab pertanyaan dan memberikan solusi yang tepat dalam waktu singkat!,
Turotial Menggunakan Bot:

1. Pertama kali menggunakan bot, daftar terlebih dahulu dengan mengetikkan .daftar nama.umur
    
2. Setelah itu ketik .menu untuk melihat semua fitur bot
    
3. Untuk menggunakan fitur, ketikkan fitur yang Anda inginkan, misalnya untuk buat stiker, kirim gambar sambil mengetik .sticker!

4. Untuk menggunakan fitur confess/menfess, kalian ketik saja perintah seperti

.confess 0897251xxx | Anonim | I have a crush on you

Baris pertama ketik nomor tujuan, yang kedua nama terserah mau kalian, yang ketiga isi pesan yang ingin dikirim!

Ingin bertanya? Hubungi 6285721795949 atau ketik .owner
*Selamat menggunakan bot!!* `
  
  conn.reply(m.chat, aboutID, m)
}

handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^(tutorial|tutor)$/i
handler.private = true
module.exports = handler