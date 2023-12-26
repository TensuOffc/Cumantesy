/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let handler = async (m, { conn, args }) => {
  if (args.length === 2 && args[0] === 'all') {
    let users = global.db.data.users;
    let pointsToAdd = parseInt(args[1]);
    if (isNaN(pointsToAdd)) {
      throw '⚠️ Jumlah money yang dimasukkan harus berupa angka. Contoh: .addmoney all 100';
    }
    for (let user in users) {
      users[user].money += pointsToAdd;
    }
    conn.reply(m.chat, `✅ Berhasil menambahkan ${pointsToAdd} money untuk semua pengguna.`, m);
  } else if (args.length === 2) {
    let mentionedJid = m.mentionedJid[0];
    if (!mentionedJid) {
      throw '⚠️ Tag pengguna yang ingin diberikan money. Contoh: .addmoney @user 100';
    }
      
  	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

    let pointsToAdd = parseInt(args[1]);
    if (isNaN(pointsToAdd)) {
      throw '⚠️ Jumlah money yang dimasukkan harus berupa angka. Contoh: .addmoney @user 100';
    }

    let users = global.db.data.users;
    if (!users[mentionedJid]) {
      users[mentionedJid] = {
        limit: 0,
        exp: 0,
        lastclaim: 0,
        money: 0
      };
    }

    users[mentionedJid].money += pointsToAdd;

    conn.reply(m.chat, `✅ Berhasil menambahkan ${pointsToAdd} money untuk @${mentionedJid.split('@')[0]}.`, m, {
      mentions: [mentionedJid]
    });
  } else {
    throw '⚠️ Masukkan argumen yang valid. Contoh: .addmoney @user 100 atau .addmoney all 100';
  }
};

handler.help = ['addmoney @user <jumlah>', 'addmoney all <jumlah>'];
handler.tags = ['owner'];
handler.command = /^addmoney$/i;
handler.owner = true;

module.exports = handler;