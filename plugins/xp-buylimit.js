let handler = async (m, {
	conn,
	args
}) => {
	if (!args[0] || isNaN(args[0])) {
		throw '*Contoh Pengetikan*:\n\n.buylimit 10';
	}

	let count = parseInt(args[0]);
	let price = count * 10000;
	let users = global.db.data.users;
	let user = users[m.sender];
	if (price > user.money) {
		throw `⚠ Maaf, uang kamu tidak cukup untuk membeli ${count} limit. Harga 1 limit adalah 10000 money.`;
	}
	user.money -= price;
	user.limit += count;
	conn.reply(m.chat, `✅ Berhasil membeli +${count} limit dengan harga -${price} Money.`, m);
}

handler.help = ['buylimit <jumlah>'];
handler.tags = ['xp'];
handler.command = /^buylimit$/i;
handler.register = true;
handler.limit = true;

module.exports = handler;