var fetch = require("node-fetch");

var handler = async (m, { conn }) => {
  var block = await conn.fetchBlocklist();
  var blockList = block.map((v) => `◦ @${v.replace(/@.+/, '')}`).join('\n');
  var totalBlock = block.length;
  var caption = ` [ *LIST USER BLOCKED* ]\n\n${blockList}\n\nTotal Blocked User: *${totalBlock}*`;
  conn.reply(m.chat, caption, m, { mentions: block });
};

handler.help = ['blocklist'];
handler.tags = ['info'];
handler.command = /^listbloc?k|bloc?klist|daftarbloc?k|blocks$/i;
handler.owner = false;
module.exports = handler;
