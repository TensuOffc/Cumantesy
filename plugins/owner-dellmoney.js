
let handler = async (m, { conn, text }) => {
  if (!text) {
    throw '⚠️ Masukkan jumlah money yang ingin dikurangi pada pengguna. Contoh: .delmoney @user 10';
  }

  let mentionedJid = m.mentionedJid[0];
  if (!mentionedJid) {
    throw '⚠️ Tag pengguna yang ingin dikurangi moneynya. Contoh: .delmoney @user 10';
  }

  let pointsToSubtract = parseInt(text.split(' ')[1]);
  if (isNaN(pointsToSubtract)) {
    throw '⚠️ Jumlah money yang dimasukkan harus berupa angka. Contoh: .delmoney @user 10';
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

  users[mentionedJid].money -= pointsToSubtract;
  if (users[mentionedJid].money < 0) {
    users[mentionedJid].money = 0;
  }

  conn.reply(m.chat, `✅ Berhasil mengurangi ${pointsToSubtract} money untuk @${mentionedJid.split('@')[0]}.`, m, {
    mentions: [mentionedJid]
  });
};

handler.help = ['delmoney @user <jumlah money>'];
handler.tags = ['owner'];
handler.command = /^delmoney$/i;
handler.owner = true;

module.exports = handler;