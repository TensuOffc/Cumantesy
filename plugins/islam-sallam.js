let handler = async (m, { conn }) => {
    let caption = `*Waalaikummussalam warahmatullahi wabarokatuh*`.trim()
    m.reply(caption)
}

handler.customPrefix = /^(assalamualaikum)/i
handler.command = new RegExp
module.exports = handler