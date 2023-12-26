/* Owner: Sazumi Viki */
/* Asisten: Ayaka Ai */
/* Instagram: @moe.sazumiviki */
/* Facebook: Sazumi Viki */
/* Github: SazumiVicky */
/* Buy Sc Update: +6283236226786 */
/* Source Code: https://github.com/SazumiVicky/AyakaV2 */


let handler = async (m, { conn, args }) => {
  if (args.length !== 1) {
    throw '*Contoh*: .giveaway 100000';
  }

  let totalPrize = parseInt(args[0]);
  if (isNaN(totalPrize) || totalPrize <= 0) {
    throw '*Contoh*: .giveaway 100000';
  }

  let redeemCodes = [];
  let prizePerPerson = Math.floor(totalPrize / 3);
  let remainingPrize = totalPrize;

  for (let i = 0; i < 3; i++) {
    let redeemCode = Math.floor(Math.random() * 90000) + 10000;
    let expiryTime = Date.now() + (5 * 60 * 1000); // 5 minutes
    let prizeAmount = Math.min(prizePerPerson, remainingPrize);

    redeemCodes.push({
      code: redeemCode,
      expiryTime: expiryTime,
      prize: prizeAmount,
      redeemedBy: []
    });

    remainingPrize -= prizeAmount;
  }

  global.redeemCodes = redeemCodes;

  conn.reply(m.chat, `📮 Kode redeem Anda adalah "*${redeemCodes[0].code}*", silakan tukarkan sebelum expired selama 3 menit.\n\nTotal hadiah dibagikan: *${totalPrize}* Money, dibagi rata kepada 3 orang:\n+ ${redeemCodes[0].prize} Money\n+ ${redeemCodes[1].prize} Money\n+ ${redeemCodes[2].prize} Money\n\nCara Penukaran Ketik:\n.redeem (kode yang tertera diatas)\nContoh Pengetikan:\n.redeem ${redeemCodes[0].code}`, m);
};

handler.help = ['giveaway <jumlah hadiah>'];
handler.tags = ['owner'];
handler.command = /^giveaway$/i;
handler.register = true;
handler.owner = true

module.exports = handler;