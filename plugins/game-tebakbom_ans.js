let fs = require('fs')
let handler = m => m
handler.before = async function (m) {
   let id = m.chat
   let reduce = `${Math.floor(Math.random() * 30000)}`.trim()
   let reward = `${Math.floor(Math.random() * 50000)}`.trim()
   let body = typeof m.text == 'string' ? m.text : false

this.tebakbom = this.tebakbom ? this.tebakbom : {}
   if (!(id in this.tebakbom) && m.quoted && /💥 _*B O M B*_ 💥/i.test(m.quoted.text)) return this.reply(m.chat, `Sesi telah berakhir, silahkan kirim .tebakbom untuk membuat sesi baru.`, m)
   var pp = 'https://telegra.ph/file/2d215b0af0d42b29fce1d.jpg'
   if ((id in this.tebakbom) && !isNaN(body)) {
      let timeout = 180000
      let json = this.tebakbom[id][1].find(v => v.position == body)
      if (!json) return this.reply(m.chat, `Untuk membuka kotak kirim angka 1 - 9`, m)
      if (json.emot == '💥') {
         json.state = true
         let bomb = this.tebakbom[id][1]
         let teks = `💥 _*B O M B*_ 💥\n\n`
         teks += `BOOM! Bomb Telah Meledak!\n\n`
         teks += bomb.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n'
         teks += bomb.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n'
         teks += bomb.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n'
         teks += `Timeout : [ *${((timeout / 1000) / 60)} menit* ]\n`
         teks += `*Permainan selesai!*, kotak berisi bom terbuka. Kalah : (- *${reduce}* Money )`
         db.data.users[m.sender].money -= reduce * 1
    this.sendMessageModify(m.chat, teks, m, {
      largeThumb: true,
      thumbnail: pp
    })
            clearTimeout(this.tebakbom[id][2])
            delete this.tebakbom[id]
         
      } else if (json.state) {
         return this.reply(m.chat, `Kotak ${json.number} sudah di buka silahkan pilih kotak yang lain.`, m)
      } else {
         json.state = true
         let changes = this.tebakbom[id][1]
         let open = changes.filter(v => v.state && v.emot != '💥').length
         if (open >= 8) {
            let teks = `💥 _*B O M B*_ 💥\n\n`
            teks += `Kirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`
            teks += changes.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n'
            teks += changes.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n'
            teks += changes.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n'
            teks += `Timeout : [ *${((timeout / 1000) / 60)} menit* ]\n`
            teks += `*Permainan selesai!* kotak berisi bom tidak terbuka, kamu selamat, Bonus : (+ *${reward}* Money )`
               db.data.users[m.sender].money += reward * 1
               clearTimeout(this.tebakbom[id][2])
               delete this.tebakbom[id]
         } else {
            let teks = `💥 _*B O M B*_ 💥\n\n`
            teks += `Kirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`
            teks += changes.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n'
            teks += changes.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n'
            teks += changes.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n'
            teks += `Timeout : [ *${((timeout / 1000) / 60)} menit* ]\n`
            teks += `Kotak berisi bom belum terbuka, anda masih aman!
Bonus : (+ *${reward}* Money )`
            this.reply(m.chat, teks, m).then(() => {
               db.data.users[m.sender].money += reward * 1
            })
         }
      }
   }
}

module.exports = handler

async function randomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
}
