let handler = async (m, { conn }) => {
m.react('🕛')
  const description = `
Halo Kak (∩˃o˂∩), Ingin Donasi?, Silahkan Donasi Ke Payment Yang Ada Di Bawah,Dengan Kamu Berdonasi Berarti Kamu Membantu Agar Bot Selalu Aktif, Terimakasih Banyak🙏🏻!
  
╔╣_*LIST PAYMENT*_ 
║ • *Dana* : 0857-2179-5949
║ • *Ovo* : 0857-2179-5949
║ • *Saweria* : https://saweria.co/tensuu
║ • *Qris* : Pm Owner ^v^
╚══════════╣⊱ 
`;
    conn.reply (m.chat, description, m)
};

handler.help = ['donasi','donate'];
handler.tags = ['info'];
handler.command = /^(donasi|donate)$/i;

module.exports = handler;