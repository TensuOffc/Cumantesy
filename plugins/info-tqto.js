
let handler = async (m, { conn }) => {
m.react('🕛')
	const tqto = `╔╣*Thanks Too :*
║- Nurutomo
║- Nando35
║Bot Remaked By: Tensu
╚══════════╣⊱ `;
  conn.reply(m.chat, tqto, m)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(tqto)$/i;

module.exports = handler