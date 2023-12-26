let handler = async (m, { conn, usedPrefix, command }) => {
m.react('🕛')
	try {
		let anu = await (await fetch(`https://random-d.uk/api/random`)).json()
		await conn.sendMessage(m.chat, { image: { url: anu.url }, caption: `Kwek 🐥` }, { quoted: m })
	} catch (e) {
		console.log(e)
		m.reply(`⚠️ Command ${command} sedang gangguan.`)
	}
}

handler.help = ['duck']
handler.tags = ['internet']
handler.command = /^((random)?(duck|bebek)(random)?)$/i

handler.premium = true
handler.limit = true

module.exports = handler