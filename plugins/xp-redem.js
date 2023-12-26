/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6285236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let handler = async (m, { conn, args }) => {
  if (args.length !== 1) {
    throw '*Contoh*: .redeem 255267';
  }

  let redeemCode = parseInt(args[0]);
  if (isNaN(redeemCode) || redeemCode <= 0) {
    throw '*Contoh*: .redeem 255267';
  }

  let redeemData = global.redeemCodes.find(data => data.code === redeemCode);
  if (!redeemData) {
    throw 'Kode yang anda masukan mungkin tidak ada atau telah kadaluarsa..';
  }

  if (!redeemData.redeemedBy) {
    redeemData.redeemedBy = [];
  }

  if (redeemData.redeemedBy.includes(m.sender)) {
    throw 'Anda sudah melakukan penukaran dengan kode yang sama sebelumnya, kode berlaku untuk 1 orang 1 kode.';
  }

  let user = m.sender;
  let users = global.db.data.users;
  if (!users[user]) {
    users[user] = {
      limit: 0,
      exp: 0,
      lastclaim: 0,
      money: 0,
      limit: 0,
      redeemed: []
    };
  }

  let exp = Math.floor(Math.random() * 100000) + 1;
  let money = redeemData.prize || 0;
  let limit = Math.floor(Math.random() * 50) + 1;

  if (!users[user].money) {
    users[user].money = 0;
  }

  users[user].exp += exp;
  users[user].money += money;
  users[user].limit += limit;

  if (!users[user].redeemed) {
    users[user].redeemed = [];
  }

  if (!users[user].redeemed.includes(redeemCode)) {
    users[user].redeemed.push(redeemCode);
    redeemData.redeemedBy.push(user);
  }

  global.db.data.users[user] = users[user];
  global.db.write();

  conn.reply(m.chat, `🎉 Selamat, Anda telah berhasil menukarkan kode "*${redeemCode}*"!\n\nHadiah yang di dapatkan:\n+ ${exp} XP ✨\n+ ${money} Money 💵\n+ ${limit} Limit 🌟`, m);
};

handler.help = ['redeem <kode>'];
handler.tags = ['xp'];
handler.command = /^redeem$/i;
handler.register = true
handler.limit = true

module.exports = handler;