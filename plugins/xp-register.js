const { createHash } = require('crypto')
  let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
  let handler = async function(m, {
    text,
    usedPrefix,
    command
  }) {
    let user = db.data.users[m.sender]
    if (user.registered === true) return m.reply(`⚠️ Your number has been registered, if you want to re-register, type .unreg yoursn`)
    if (!Reg.test(text)) return m.reply(Func.example(usedPrefix, command, 'curut.19'))
    let [_, name, splitter, age] = text.match(Reg)
    if (!name) return m.reply('Enter your name')
    if (!age) return m.reply('Enter your age')
    age = parseInt(age)
    if (name.length > 20) return m.reply('⚠️ Name is too long')
    if (age > 80) return m.reply('⚠️ Too old!')
    if (age < 10) return m.reply('⚠️ Too young!')
    user.name = name.trim()
    user.age = age
    user.regTime = +new Date()
    user.registered = true
    user.limit += 50
    user.exp += 15000
    user.money += 10000
    let sn = createHash('md5').update(m.sender).digest('hex')
    let teks = `✅ *Registered successfully!*  
  ∘ Name : ${name}
  ∘ Umur : ${age} years old
  ∘ SN : ${sn}
  
  +50 🌟 Limit
  +15.000 ✨ Exp
  +10.000 💵 Money`
    m.reply(teks)
  }
  handler.help = ['register'].map((v) => v + '')
  handler.tags = ['xp']
  handler.command = ['reg', 'register', 'daftar']
  module.exports = handler