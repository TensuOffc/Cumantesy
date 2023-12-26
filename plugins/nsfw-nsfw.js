const fetch = require('node-fetch');

let handler = async (m, { conn, args, usedPrefix, command }) => {
conn.chatRead(m.chat)
m.react('🕛')
	if (!global.db.data.chats[m.chat].nsfw) throw `⚠️ Grup tidak mendukung konten nsfw \n\nUntuk mengaktifkan ketik \n*${usedPrefix}enable* nsfw`
    let user = global.db.data.users[m.sender].age
    if (user < 17) throw m.reply(`🚫 Anda masih di bawah umur! Kembalilah saat Anda berusia di atas 18 tahun`) 
  let res = await fetch(`https://fantox-apis.vercel.app/${command}`);
  if (!res.ok) throw await res.text();
  let json = await res.json();
  if (!json.url) throw 'Error';
  conn.sendFile(m.chat, json.url, 'img.jpg', `Here your image 🥵${command}`, m);
};

handler.command = handler.help = [ 'swimsuit', 'schoolswimsuit', 'white', 'barefoot', 'touhou', 'gamecg', 'uncensored', 'sunglasses', 'glasses', 'shirtlift', 'chain', 'fingering', 'flatchest', 'torncloth', 'bondage', 'demon', 'wet', 'pantypull', 'headdress', 'headphone', 'tie', 'anusview', 'shorts','stokings', 'topless', 'beach', 'bunnygirl', 'bunnyear', 'vampire', 'gun', 'maid', 'bra', 'nobra', 'bikini', 'whitehair', 'blonde', 'pinkhair', 'bed', 'ponytail', 'nude', 'dress', 'underwear', 'foxgirl', 'uniform', 'skirt', 'sex', 'sex2', 'sex3', 'breast', 'twintail', 'spreadpussy', 'tears', 'seethrough', 'breasthold', 'drunk', 'fateseries', 'spreadlegs', 'openshirt', 'headband', 'food', 'close', 'tree', 'nipples', 'erectnipples', 'horns', 'greenhair', 'wolfgirl', 'catgirl', 'idol', 'weapon', 'hololive', 'genshin'];
handler.tags = ['nsfw'];
handler.group = false;
handler.register = true;
handler.premium = true;

module.exports = handler;

