let handler = async (m, {
    conn,
    command,
    args,
    text,
    usedPrefix
  }) => {
    let bruh = `${usedPrefix}open <crate name> < 1 | 10 | 100 | 1000 >\n\nContoh penggunaan: *${usedPrefix}open common 10*\n\nlist crate:\n*pet*\n*boxs*\n*cupon*\n*common*\n*uncommon*\n*mythic*\n*legendary*\n*gardenboxs*`
    let _lmao = args[0]
    let Lmao = `⚠️ Hanya support 1, 10, 100, 1000\nContoh penggunaan: *${usedPrefix}open ${args > 2 ? _lmao : pickRandom(['common', 'uncommon', 'mythic', 'legendary'])} 10*`
    let type = (args[0] || '').toLowerCase()
    let jumlah = (args[1] || '').toLowerCase()
    switch (type) {
      case 'common':
        switch (jumlah) {
          case '1':
          case 'crate':
            let __lastime = (new Date - global.db.data.users[m.sender].lastopen)
            let _lastime = (30000 - __lastime)
            let lastime = clockString(_lastime)
            if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
              let _cm = `${Math.floor(Math.random() * 1000)}`.trim()
              let _cc = `${Math.floor(Math.random() * 2)}`.trim()
              let _cp = `${Math.floor(Math.random() * 1)}`.trim()
              let _ce = `${Math.floor(Math.random() * 10000)}`.trim()
              let _cu = `${Math.floor(Math.random() * 1)}`.trim()
              let cm = (_cm * 1)
              let cc = (_cc * 1)
              let cp = (_cp * 1)
              let ce = (_ce * 1)
              let cu = (_cu * 1)
              let Hcom = `
  Anda telah membuka *📦 Common crate* dan mendapatkan:${cm > 0 ? `\n💵 Money: ${formatRupiah(cm)}` : ''}${ce > 0 ? `\n✨ Exp: ${ce} *exp*` : ''}${cp > 0 ? `\n🌟 limit: ${cp} *limit*` : ''}${cc > 0 ? `\n📦 common crate: ${cc} *crate*` : ''}${cu > 0 ? `\n📦 Uncommon crate: ${cu} *crate*` : ''}
  `.trim()
              if (global.db.data.users[m.sender].common >= 1) {
                global.db.data.users[m.sender].common -= 1
                global.db.data.users[m.sender].money += cm * 1
                global.db.data.users[m.sender].exp += ce * 1
                global.db.data.users[m.sender].limit += cp * 1
                global.db.data.users[m.sender].uncommon += cu * 1
                global.db.data.users[m.sender].common += cc * 1
                global.db.data.users[m.sender].lastopen = new Date * 1
                conn.reply(m.chat, Hcom, m)
              } else conn.reply(m.chat, '📦 Common crate anda tidak cukup', m)
            } else conn.reply(m.chat, `Mohon tunggu ${lastime} lagi untuk bisa membuka fitur open`, m)
            break
          case '10':
            let __lastimeq = (new Date - global.db.data.users[m.sender].lastopen)
            let _lastimeq = (30000 - __lastimeq)
            let lastimeq = clockString(_lastimeq)
            if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
              let _cm1 = `${Math.floor(Math.random() * 5000)}`.trim()
              let _cc1 = `${Math.floor(Math.random() * 5)}`.trim()
              let _cp1 = `${Math.floor(Math.random() * 3)}`.trim()
              let _ce1 = `${Math.floor(Math.random() * 20000)}`.trim()
              let _cu1 = `${Math.floor(Math.random() * 3)}`.trim()
              let cm1 = (_cm1 * 1)
              let cc1 = (_cc1 * 1)
              let cp1 = (_cp1 * 1)
              let ce1 = (_ce1 * 1)
              let cu1 = (_cu1 * 1)
              let Hcom1 = `
  Anda telah membuka *📦 Common crate* dan mendapatkan:${cm1 > 0 ? `\n💵 Money: ${formatRupiah(cm1)}` : ''}${ce1 > 0 ? `\n✨ Exp: ${ce1} *exp*` : ''}${cp1 > 0 ? `\n🌟 limit: ${cp1} *limit*` : ''}${cc1 > 0 ? `\n📦 common crate: ${cc1} *crate*` : ''}${cu1 > 0 ? `\n📦 Uncommon crate: ${cu1} *crate*` : ''}
  `.trim()
              if (global.db.data.users[m.sender].common >= 10) {
                global.db.data.users[m.sender].common -= 10
                global.db.data.users[m.sender].money += cm1 * 1
                global.db.data.users[m.sender].exp += ce1 * 1
                global.db.data.users[m.sender].limit += cp1 * 1
                global.db.data.users[m.sender].uncommon += cu1 * 1
                global.db.data.users[m.sender].common += cc1 * 1
                global.db.data.users[m.sender].lastopen = new Date * 1
                conn.reply(m.chat, Hcom1, m)
              } else conn.reply(m.chat, '📦 Common crate anda tidak cukup', m)
            } else conn.reply(m.chat, `Mohon tunggu ${lastimeq} lagi untuk bisa membuka fitur open`, m)
            break
          case '100':
            let __lastimeqq = (new Date - global.db.data.users[m.sender].lastopen)
            let _lastimeqq = (30000 - __lastimeqq)
            let lastimeqq = clockString(_lastimeqq)
            if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
              let _cm2 = `${Math.floor(Math.random() * 50000)}`.trim()
              let _cc2 = `${Math.floor(Math.random() * 30)}`.trim()
              let _cp2 = `${Math.floor(Math.random() * 20)}`.trim()
              let _ce2 = `${Math.floor(Math.random() * 30000)}`.trim()
              let _cu2 = `${Math.floor(Math.random() * 20)}`.trim()
              let cm2 = (_cm2 * 1)
              let cc2 = (_cc2 * 1)
              let cp2 = (_cp2 * 1)
              let ce2 = (_ce2 * 1)
              let cu2 = (_cu2 * 1)
              let Hcom2 = `
  Anda telah membuka *📦 Common crate* dan mendapatkan:${cm2 > 0 ? `\n💵 Money: ${formatRupiah(cm2)}` : ''}${ce2 > 0 ? `\n✨ Exp: ${ce2} *exp*` : ''}${cp2 > 0 ? `\n🌟 limit: ${cp2} *limit*` : ''}${cc2 > 0 ? `\n📦 common crate: ${cc2} *crate*` : ''}${cu2 > 0 ? `\n📦 Uncommon crate: ${cu2} *crate*` : ''}
  `.trim()
              if (global.db.data.users[m.sender].common >= 100) {
                global.db.data.users[m.sender].common -= 100
                global.db.data.users[m.sender].money += cm2 * 1
                global.db.data.users[m.sender].exp += ce2 * 1
                global.db.data.users[m.sender].limit += cp2 * 1
                global.db.data.users[m.sender].uncommon += cu2 * 1
                global.db.data.users[m.sender].common += cc2 * 1
                global.db.data.users[m.sender].lastopen = new Date * 1
                conn.reply(m.chat, Hcom2, m)
              } else conn.reply(m.chat, '📦 Common crate anda tidak cukup', m)
            } else conn.reply(m.chat, `Mohon tunggu ${lastimeqq} lagi untuk bisa membuka fitur open`, m)
            break
          case '1000':
            let __lastimeqqq = (new Date - global.db.data.users[m.sender].lastopen)
            let _lastimeqqq = (30000 - __lastimeqqq)
            let lastimeqqq = clockString(_lastimeqqq)
            if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
              let _cm3 = `${Math.floor(Math.random() * 100000)}`.trim()
              let _cc3 = `${Math.floor(Math.random() * 350)}`.trim()
              let _cp3 = `${Math.floor(Math.random() * 100)}`.trim()
              let _ce3 = `${Math.floor(Math.random() * 80000)}`.trim()
              let _cu3 = `${Math.floor(Math.random() * 200)}`.trim()
              let cm3 = (_cm3 * 1)
              let cc3 = (_cc3 * 1)
              let cp3 = (_cp3 * 1)
              let ce3 = (_ce3 * 1)
              let cu3 = (_cu3 * 1)
              let Hcom3 = `
  Anda telah membuka *📦 Common crate* dan mendapatkan:${cm3 > 0 ? `\n💵 Money: ${formatRupiah(cm3)}` : ''}${ce3 > 0 ? `\n✨ Exp: ${ce3} *exp*` : ''}${cp3 > 0 ? `\n🌟 limit: ${cp3} *limit*` : ''}${cc3 > 0 ? `\n📦 common crate: ${cc3} *crate*` : ''}${cu3 > 0 ? `\n📦 Uncommon crate: ${cu3} *crate*` : ''}
  `.trim()
              if (global.db.data.users[m.sender].common >= 1000) {
                global.db.data.users[m.sender].common -= 1000
                global.db.data.users[m.sender].money += cm3 * 1
                global.db.data.users[m.sender].exp += ce3 * 1
                global.db.data.users[m.sender].limit += cp3 * 1
                global.db.data.users[m.sender].uncommon += cu3 * 1
                global.db.data.users[m.sender].common += cc3 * 1
                global.db.data.users[m.sender].lastopen = new Date * 1
                conn.reply(m.chat, Hcom3, m)
              } else conn.reply(m.chat, '📦 Common crate anda tidak cukup', m)
            } else conn.reply(m.chat, `Mohon tunggu ${lastimeqqq} lagi untuk bisa membuka fitur open`, m)
            break
          default:
            return conn.reply(m.chat, Lmao, m)
        }
        break
      case 'uncommon':
        switch (jumlah) {
          case '1':
          case 'crate':
            let __lastimew = (new Date - global.db.data.users[m.sender].lastopen)
            let _lastimew = (30000 - __lastimew)
            let lastimew = clockString(_lastimew)
            if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
              let _ud = `${Math.floor(Math.random() * 2)}`.trim()
              let _ue = `${Math.floor(Math.random() * 10000)}`.trim()
              let _um = `${Math.floor(Math.random() * 15000)}`.trim()
              let _up = `${Math.floor(Math.random() * 5)}`.trim()
              let _umc = `${Math.floor(Math.random() * 1)}`.trim()
              let _uu = `${Math.floor(Math.random() * 2)}`.trim()
              let _uc = `${Math.floor(Math.random() * 3)}`.trim()
              let ud = (_ud * 1)
              let ue = (_ue * 1)
              let um = (_um * 1)
              let up = (_up * 1)
              let umc = (_umc * 1)
              let uu = (_uu * 1)
              let uc = (_uc * 1)
              let Hun = `
  Anda telah membuka *📦 Uncommon crate* dan mendapatkan:${um > 0 ? `\n💵 Money: ${formatRupiah(um)}` : ''}${ue > 0 ? `\n✨ Exp: ${ue} *exp*` : ''}${ud > 0 ? `\n💎 Diamond: ${ud} *diamond*` : ''}${up > 0 ? `\n🌟 limit: ${up} *limit*` : ''}${uc > 0 ? `\n📦 Common crate: ${uc} *crate*` : ''}${uu > 0 ? `\n📦 Uncommon crate: ${uu} *crate*` : ''}
  `.trim()
              if (global.db.data.users[m.sender].uncommon >= 1) {
                global.db.data.users[m.sender].uncommon -= 1
                global.db.data.users[m.sender].money += um * 1
                global.db.data.users[m.sender].diamond += ud * 1
                global.db.data.users[m.sender].exp += ue * 1
                global.db.data.users[m.sender].limit += up * 1
                global.db.data.users[m.sender].common += uc * 1
                global.db.data.users[m.sender].uncommon += uu * 1
                global.db.data.users[m.sender].lastopen = new Date * 1
                conn.reply(m.chat, Hun, m)
                if (umc > 0) {
                  conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${umc} 📦 Mythic Crate`, m)
                  global.db.data.users[m.sender].mythic += umc * 1
                }
              } else conn.reply(m.chat, '📦 Uncommon crate anda tidak cukup', m)
            } else conn.reply(m.chat, `Mohon tunggu ${lastimew} lagi untuk bisa membuka fitur open`, m)
            break
          case '10':
            let __lastimewe = (new Date - global.db.data.users[m.sender].lastopen)
            let _lastimewe = (30000 - __lastimewe)
            let lastimewe = clockString(_lastimewe)
            if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
              let _ud1 = `${Math.floor(Math.random() * 5)}`.trim()
              let _ue1 = `${Math.floor(Math.random() * 75000)}`.trim()
              let _um1 = `${Math.floor(Math.random() * 80000)}`.trim()
              let _up1 = `${Math.floor(Math.random() * 10)}`.trim()
              let _umc1 = `${Math.floor(Math.random() * 2)}`.trim()
              let _uu1 = `${Math.floor(Math.random() * 4)}`.trim()
              let _uc1 = `${Math.floor(Math.random() * 7)}`.trim()
              let ud1 = (_ud1 * 1)
              let ue1 = (_ue1 * 1)
              let um1 = (_um1 * 1)
              let up1 = (_up1 * 1)
              let umc1 = (_umc1 * 1)
              let uu1 = (_uu1 * 1)
              let uc1 = (_uc1 * 1)
              let Hun1 = `
  Anda telah membuka *📦 Uncommon crate* dan mendapatkan:${um1 > 0 ? `\n💵 Money: ${formatRupiah(um1)}` : ''}${ue1 > 0 ? `\n✨ Exp: ${ue1} *exp*` : ''}${ud1 > 0 ? `\n💎 Diamond: ${ud1} *diamond*` : ''}${up1 > 0 ? `\n🌟 limit: ${up1} *limit*` : ''}${uc1 > 0 ? `\n📦 Common crate: ${uc1} *crate*` : ''}${uu1 > 0 ? `\n📦 Uncommon crate: ${uu1} *crate*` : ''}
  `.trim()
              if (global.db.data.users[m.sender].uncommon >= 10) {
                global.db.data.users[m.sender].uncommon -= 10
                global.db.data.users[m.sender].money += um1 * 1
                global.db.data.users[m.sender].diamond += ud1 * 1
                global.db.data.users[m.sender].exp += ue1 * 1
                global.db.data.users[m.sender].limit += up1 * 1
                global.db.data.users[m.sender].common += uc1 * 1
                global.db.data.users[m.sender].uncommon += uu1 * 1
                global.db.data.users[m.sender].lastopen = new Date * 1
                conn.reply(m.chat, Hun1, m)
                if (umc1 > 0) {
                  conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${umc1} 📦 Mythic Crate`, m)
                  global.db.data.users[m.sender].mythic += umc1 * 1
                }
              } else conn.reply(m.chat, '📦 Uncommon crate anda tidak cukup', m)
            } else conn.reply(m.chat, `Mohon tunggu ${lastimewe} lagi untuk bisa membuka fitur open`, m)
            break
          case '100':
            let __lastimewee = (new Date - global.db.data.users[m.sender].lastopen)
            let _lastimewee = (30000 - __lastimewee)
            let lastimewee = clockString(_lastimewee)
            if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
              let _ud2 = `${Math.floor(Math.random() * 20)}`.trim()
              let _ue2 = `${Math.floor(Math.random() * 80000)}`.trim()
              let _um2 = `${Math.floor(Math.random() * 50000)}`.trim()
              let _up2 = `${Math.floor(Math.random() * 30)}`.trim()
              let _umc2 = `${Math.floor(Math.random() * 10)}`.trim()
              let _uu2 = `${Math.floor(Math.random() * 25)}`.trim()
              let _uc2 = `${Math.floor(Math.random() * 50)}`.trim()
              let ud2 = (_ud2 * 1)
              let ue2 = (_ue2 * 1)
              let um2 = (_um2 * 1)
              let up2 = (_up2 * 1)
              let umc2 = (_umc2 * 1)
              let uu2 = (_uu2 * 1)
              let uc2 = (_uc2 * 1)
              let Hun2 = `
  Anda telah membuka *📦 Uncommon crate* dan mendapatkan:${um2 > 0 ? `\n💵 Money: ${formatRupiah(um2)}` : ''}${ue2 > 0 ? `\n✨ Exp: ${ue2} *exp*` : ''}${ud2 > 0 ? `\n💎 Diamond: ${ud2} *diamond*` : ''}${up2 > 0 ? `\n🌟 limit: ${up2} *limit*` : ''}${uc2 > 0 ? `\n📦 Common crate: ${uc2} *crate*` : ''}${uu2 > 0 ? `\n📦 Uncommon crate: ${uu2} *crate*` : ''}
  `.trim()
              if (global.db.data.users[m.sender].uncommon >= 100) {
                global.db.data.users[m.sender].uncommon -= 100
                global.db.data.users[m.sender].money += um2 * 1
                global.db.data.users[m.sender].diamond += ud2 * 1
                global.db.data.users[m.sender].exp += ue2 * 1
                global.db.data.users[m.sender].limit += up2 * 1
                global.db.data.users[m.sender].common += uc2 * 1
                global.db.data.users[m.sender].uncommon += uu2 * 1
                global.db.data.users[m.sender].lastopen = new Date * 1
                conn.reply(m.chat, Hun2, m)
                if (umc2 > 0) {
                  conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${umc2} 📦 Mythic Crate`, m)
                  global.db.data.users[m.sender].mythic += umc2 * 1
                }
              } else conn.reply(m.chat, '📦 Uncommon crate anda tidak cukup', m)
            } else conn.reply(m.chat, `Mohon tunggu ${lastimewee} lagi untuk bisa membuka fitur open`, m)
            break
          case '1000':
            let __lastimeweee = (new Date - global.db.data.users[m.sender].lastopen)
            let _lastimeweee = (30000 - __lastimeweee)
            let lastimeweee = clockString(_lastimeweee)
            if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
              let _ud3 = `${Math.floor(Math.random() * 50)}`.trim()
              let _ue3 = `${Math.floor(Math.random() * 100000)}`.trim()
              let _um3 = `${Math.floor(Math.random() * 150000)}`.trim()
              let _up3 = `${Math.floor(Math.random() * 100)}`.trim()
              let _umc3 = `${Math.floor(Math.random() * 100)}`.trim()
              let _uu3 = `${Math.floor(Math.random() * 100)}`.trim()
              let _uc3 = `${Math.floor(Math.random() * 200)}`.trim()
              let ud3 = (_ud3 * 1)
              let ue3 = (_ue3 * 1)
              let um3 = (_um3 * 1)
              let up3 = (_up3 * 1)
              let umc3 = (_umc3 * 1)
              let uu3 = (_uu3 * 1)
              let uc3 = (_uc3 * 1)
              let Hun3 = `
  Anda telah membuka *📦 Uncommon crate* dan mendapatkan:${um3 > 0 ? `\n💵 Money: ${formatRupiah(um3)}` : ''}${ue3 > 0 ? `\n✨ Exp: ${ue3} *exp*` : ''}${ud3 > 0 ? `\n💎 Diamond: ${ud3} *diamond*` : ''}${up3 > 0 ? `\n🌟 limit: ${up3} *limit*` : ''}${uc3 > 0 ? `\n📦 Common crate: ${uc3} *crate*` : ''}${uu3 > 0 ? `\n📦 Uncommon crate: ${uu3} *crate*` : ''}
  `.trim()
              if (global.db.data.users[m.sender].uncommon >= 1000) {
                global.db.data.users[m.sender].uncommon -= 1000
                global.db.data.users[m.sender].money += um3 * 1
                global.db.data.users[m.sender].diamond += ud3 * 1
                global.db.data.users[m.sender].exp += ue3 * 1
                global.db.data.users[m.sender].limit += up3 * 1
                global.db.data.users[m.sender].common += uc3 * 1
                global.db.data.users[m.sender].uncommon += uu3 * 1
                global.db.data.users[m.sender].lastopen = new Date * 1
                conn.reply(m.chat, Hun3, m)
                if (umc3 > 0) {
                  conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${umc3} 📦 Mythic Crate`, m)
                  global.db.data.users[m.sender].mythic += umc3 * 1
                }
              } else conn.reply(m.chat, '📦 Uncommon crate anda tidak cukup', m)
            } else conn.reply(m.chat, `Mohon tunggu ${lastimeweee} lagi untuk bisa membuka fitur open`, m)
            break
          default:
            return conn.reply(m.chat, Lmao, m)
        }
        break
      case 'mythic':
        switch (jumlah) {
          case '1':
          case 'crate':
            let __lastimep = (new Date - global.db.data.users[m.sender].lastopen)
            let _lastimep = (30000 - __lastimep)
            let lastimep = clockString(_lastimep)
            if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
              let _mm = `${Math.floor(Math.random() * 200000)}`.trim()
              let _mmm = `${pickRandom(['0', '0', '1', '0'])}`.trim()
              let _me = `${Math.floor(Math.random() * 250000)}`.trim()
              let _mp = `${Math.floor(Math.random() * 100)}`.trim()
              let _mu = `${Math.floor(Math.random() * 3)}`.trim()
              let _mc = `${Math.floor(Math.random() * 5)}`.trim()
              let _ml = `${pickRandom(['0', '0', '1', '0',  '0'])}`.trim()
              let _md = `${Math.floor(Math.random() * 20)}`.trim()
              let mm = (_mm * 1)
              let mmm = (_mmm * 1)
              let me = (_me * 1)
              let mp = (_mp * 1)
              let mu = (_mu * 1)
              let mc = (_mc * 1)
              let ml = (_ml * 1)
              let md = (_md * 1)
              let Mychat = `
  Anda telah membuka *📦 Mythic crate* dan mendapatkan:${mm > 0 ? `\n💵 Money: ${formatRupiah(mm)}` : ''}${me > 0 ? `\n✨ Exp: ${me} *exp*` : ''}${md > 0 ? `\n💎 Diamond: ${md} *diamond*` : ''}${mp > 0 ? `\n🌟 limit: ${mp} *limit*` : ''}${mc > 0 ? `\n📦 Common crate: ${mc} *crate*` : ''}${mu > 0 ? `\n📦 Uncommon crate: ${mu} *crate*` : ''}
  `.trim()
              if (global.db.data.users[m.sender].mythic >= 1) {
                global.db.data.users[m.sender].mythic -= 1
                global.db.data.users[m.sender].money += mm * 1
                global.db.data.users[m.sender].diamond += md * 1
                global.db.data.users[m.sender].exp += me * 1
                global.db.data.users[m.sender].limit += mp * 1
                global.db.data.users[m.sender].common += mc * 1
                global.db.data.users[m.sender].uncommon += mu * 1
                global.db.data.users[m.sender].lastopen = new Date * 1
                conn.reply(m.chat, Mychat, m)
                if (mmm > 0) {
                  conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${mmm} 📦 Mythic Crate`, m)
                  global.db.data.users[m.sender].mythic += mmm * 1
                }
                if (ml > 0) {
                  conn.reply(m.chat, `*Selamat anda mendapatkan item Epic yaitu*\n${ml} 📦 Legendary Crate`, m)
                  global.db.data.users[m.sender].legendary += ml * 1
                }
              } else conn.reply(m.chat, '📦 Mythic crate anda tidak cukup', m)
            } else conn.reply(m.chat, `Mohon tunggu ${lastimep} lagi untuk bisa membuka fitur open`, m)
            break
          case '10':
            let __lastimepa = (new Date - global.db.data.users[m.sender].lastopen)
            let _lastimepa = (30000 - __lastimepa)
            let lastimepa = clockString(_lastimepa)
            if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
              let _mm1 = `${Math.floor(Math.random() * 2000)}`.trim()
              let _mmm1 = `${Math.floor(Math.random() * 4)}`.trim()
              let _me1 = `${Math.floor(Math.random() * 3000)}`.trim()
              let _mp1 = `${Math.floor(Math.random() * 6)}`.trim()
              let _mu1 = `${Math.floor(Math.random() * 6)}`.trim()
              let _mc1 = `${Math.floor(Math.random() * 11)}`.trim()
              let _ml1 = `${Math.floor(Math.random() * 1)}`.trim()
              let _md1 = `${Math.floor(Math.random() * 25)}`.trim()
              let mm1 = (_mm1 * 1)
              let mmm1 = (_mmm1 * 1)
              let me1 = (_me1 * 1)
              let mp1 = (_mp1 * 1)
              let mu1 = (_mu1 * 1)
              let mc1 = (_mc1 * 1)
              let ml1 = (_ml1 * 1)
              let md1 = (_md1 * 1)
              let Mychat1 = `
  Anda telah membuka *📦 Mythic crate* dan mendapatkan:${mm1 > 0 ? `\n💵 Money: ${formatRupiah(mm1)}` : ''}${me1 > 0 ? `\n✨ Exp: ${me1} *exp*` : ''}${md1 > 0 ? `\n💎 Diamond: ${md1} *diamond*` : ''}${mp1 > 0 ? `\n🌟 limit: ${mp1} *limit*` : ''}${mc1 > 0 ? `\n📦 Common crate: ${mc1} *crate*` : ''}${mu1 > 0 ? `\n📦 Uncommon crate: ${mu1} *crate*` : ''}
  `.trim()
              if (global.db.data.users[m.sender].mythic >= 10) {
                global.db.data.users[m.sender].mythic -= 10
                global.db.data.users[m.sender].money += mm1 * 1
                global.db.data.users[m.sender].diamond += md1 * 1
                global.db.data.users[m.sender].exp += me1 * 1
                global.db.data.users[m.sender].limit += mp1 * 1
                global.db.data.users[m.sender].common += mc1 * 1
                global.db.data.users[m.sender].uncommon += mu1 * 1
                global.db.data.users[m.sender].lastopen = new Date * 1
                conn.reply(m.chat, Mychat1, m)
                if (mmm1 > 0) {
                  conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${mmm1} 📦 Mythic Crate`, m)
                  global.db.data.users[m.sender].mythic += mmm1 * 1
                }
                if (ml1 > 0) {
                  conn.reply(m.chat, `*Selamat anda mendapatkan item Epic yaitu*\n${ml1} 📦 Legendary Crate`, m)
                  global.db.data.users[m.sender].legendary += ml1 * 1
                }
              } else conn.reply(m.chat, '📦 Mythic crate anda tidak cukup', m)
            } else conn.reply(m.chat, `Mohon tunggu ${lastimepa} lagi untuk bisa membuka fitur open`, m)
            break
          case '100':
            let __lastimepaa = (new Date - global.db.data.users[m.sender].lastopen)
            let _lastimepaa = (30000 - __lastimepaa)
            let lastimepaa = clockString(_lastimepaa)
            if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
              let _mm2 = `${Math.floor(Math.random() * 25000)}`.trim()
              let _mmm2 = `${Math.floor(Math.random() * 10)}`.trim()
              let _me2 = `${Math.floor(Math.random() * 30000)}`.trim()
              let _mp2 = `${Math.floor(Math.random() * 50)}`.trim()
              let _mu2 = `${Math.floor(Math.random() * 80)}`.trim()
              let _mc2 = `${Math.floor(Math.random() * 150)}`.trim()
              let _ml2 = `${Math.floor(Math.random() * 6)}`.trim()
              let _md2 = `${Math.floor(Math.random() * 30)}`.trim()
              let mm2 = (_mm2 * 1)
              let mmm2 = (_mmm2 * 1)
              let me2 = (_me2 * 1)
              let mp2 = (_mp2 * 1)
              let mu2 = (_mu2 * 1)
              let mc2 = (_mc2 * 1)
              let ml2 = (_ml2 * 1)
              let md2 = (_md2 * 1)
              let Mychat2 = `
  Anda telah membuka *📦 Mythic crate* dan mendapatkan:${mm2 > 0 ? `\n💵 Money: ${formatRupiah(mm2)}` : ''}${me2 > 0 ? `\n✨ Exp: ${me2} *exp*` : ''}${md2 > 0 ? `\n💎 Diamond: ${md2} *diamond*` : ''}${mp2 > 0 ? `\n🌟 limit: ${mp2} *limit*` : ''}${mc2 > 0 ? `\n📦 Common crate: ${mc2} *crate*` : ''}${mu2 > 0 ? `\n📦 Uncommon crate: ${mu2} *crate*` : ''}
  `.trim()
              if (global.db.data.users[m.sender].mythic >= 100) {
                global.db.data.users[m.sender].mythic -= 100
                global.db.data.users[m.sender].money += mm2 * 1
                global.db.data.users[m.sender].diamond += md2 * 1
                global.db.data.users[m.sender].exp += me2 * 1
                global.db.data.users[m.sender].limit += mp2 * 1
                global.db.data.users[m.sender].common += mc2 * 1
                global.db.data.users[m.sender].uncommon += mu2 * 1
                global.db.data.users[m.sender].lastopen = new Date * 1
                conn.reply(m.chat, Mychat2, m)
              } else conn.reply(m.chat, '📦 Mythic crate anda tidak cukup', m)
            } else conn.reply(m.chat, `Mohon tunggu ${lastimepaa} lagi untuk bisa membuka fitur open`, m)
            break
          case '1000':
            let __lastimepaaa = (new Date - global.db.data.users[m.sender].lastopen)
            let _lastimepaaa = (30000 - __lastimepaaa)
            let lastimepaaa = clockString(_lastimepaaa)
            if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
              let _mm3 = `${Math.floor(Math.random() * 50000)}`.trim()
              let _mmm3 = `${Math.floor(Math.random() * 50)}`.trim()
              let _me3 = `${Math.floor(Math.random() * 75000)}`.trim()
              let _mp3 = `${Math.floor(Math.random() * 70)}`.trim()
              let _mu3 = `${Math.floor(Math.random() * 250)}`.trim()
              let _mc3 = `${Math.floor(Math.random() * 750)}`.trim()
              let _ml3 = `${Math.floor(Math.random() * 10)}`.trim()
              let _md3 = `${Math.floor(Math.random() * 40)}`.trim()
              let mm3 = (_mm3 * 1)
              let mmm3 = (_mmm3 * 1)
              let me3 = (_me3 * 1)
              let mp3 = (_mp3 * 1)
              let mu3 = (_mu3 * 1)
              let mc3 = (_mc3 * 1)
              let ml3 = (_ml3 * 1)
              let md3 = (_md3 * 1)
              let Mychat3 = `
  Anda telah membuka *📦 Mythic crate* dan mendapatkan:${mm3 > 0 ? `\n💵 Money: ${formatRupiah(mm3)}` : ''}${me3 > 0 ? `\n✨ Exp: ${me3} *exp*` : ''}${md3 > 0 ? `\n💎 Diamond: ${md3} *diamond*` : ''}${mp3 > 0 ? `\n🌟 limit: ${mp3} *limit*` : ''}${mc3 > 0 ? `\n📦 Common crate: ${mc3} *crate*` : ''}${mu3 > 0 ? `\n📦 Uncommon crate: ${mu3} *crate*` : ''}
  `.trim()
              if (global.db.data.users[m.sender].mythic >= 1000) {
                global.db.data.users[m.sender].mythic -= 1000
                global.db.data.users[m.sender].money += mm3 * 1
                global.db.data.users[m.sender].diamond += md3 * 1
                global.db.data.users[m.sender].exp += me3 * 1
                global.db.data.users[m.sender].limit += mp3 * 1
                global.db.data.users[m.sender].common += mc3 * 1
                global.db.data.users[m.sender].uncommon += mu3 * 1
                global.db.data.users[m.sender].lastopen = new Date * 1
                conn.reply(m.chat, Mychat3, m)
                if (mmm3 > 0) {
                  conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${mmm3} 📦 Mythic Crate`, m)
                  global.db.data.users[m.sender].mythic += mmm3 * 1
                }
                if (ml3 > 0) {
                  conn.reply(m.chat, `*Selamat anda mendapatkan item Epic yaitu*\n${ml3} 📦 Legendary Crate`, m)
                  global.db.data.users[m.sender].legendary += ml3 * 1
                }
              } else conn.reply(m.chat, '📦 Mythic crate anda tidak cukup', m)
            } else conn.reply(m.chat, `Mohon tunggu ${lastimepaaa} lagi untuk bisa membuka fitur open`, m)
            break
          default:
            return conn.reply(m.chat, Lmao, m)
        }
        break
      case 'legendary':
        switch (jumlah) {
          case '1':
          case 'crate':
            let __lastimel = (new Date - global.db.data.users[m.sender].lastopen)
            let _lastimel = (30000 - __lastimel)
            let lastimel = clockString(_lastimel)
            if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
              let _lm = `${Math.floor(Math.random() * 25000)}`.trim()
              let _le = `${Math.floor(Math.random() * 50000)}`.trim()
              let _lp = `${Math.floor(Math.random() * 25)}`.trim()
              let _lu = `${Math.floor(Math.random() * 7)}`.trim()
              let _lc = `${Math.floor(Math.random() * 10)}`.trim()
              let _ll = `${pickRandom(['0', '0', '1', '0'])}`.trim()
              let _ld = `${Math.floor(Math.random() * 50)}`.trim()
              let _lmm = `${pickRandom(['0', '1', '0', '1', '0', '0'])}`.trim()
              let lm = (_lm * 1)
              let le = (_le * 1)
              let lp = (_lp * 1)
              let lu = (_lu * 1)
              let lc = (_lc * 1)
              let ll = (_ll * 1)
              let ld = (_ld * 1)
              let lmm = (_lmm * 1)
              let Lechat = `
  Anda telah membuka *📦 Legendary crate* dan mendapatkan:${lm > 0 ? `\n💵 Money: ${formatRupiah(lm)}` : ''}${le > 0 ? `\n✨ Exp: ${le} *exp*` : ''}${ld > 0 ? `\n💎 Diamond: ${ld} *diamond*` : ''}${lp > 0 ? `\n🌟 limit: ${lp} *limit*` : ''}${lc > 0 ? `\n📦 Common crate: ${lc} *crate*` : ''}${lu > 0 ? `\n📦 Uncommon crate: ${lu} *crate*` : ''}
  `.trim()
              if (global.db.data.users[m.sender].legendary >= 1) {
                global.db.data.users[m.sender].legendary -= 1
                global.db.data.users[m.sender].money += lm * 1
                global.db.data.users[m.sender].diamond += ld * 1
                global.db.data.users[m.sender].exp += le * 1
                global.db.data.users[m.sender].limit += lp * 1
                global.db.data.users[m.sender].common += lc * 1
                global.db.data.users[m.sender].uncommon += lu * 1
                global.db.data.users[m.sender].lastopen = new Date * 1
                conn.reply(m.chat, Lechat, m)
                if (lmm > 0) {
                  conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${lmm} 📦 Mythic Crate`, m)
                  global.db.data.users[m.sender].mythic += lmm * 1
                }
                if (ll > 0) {
                  conn.reply(m.chat, `*Selamat anda mendapatkan item Epic yaitu*${ll > 0 ? `\n${ll} 📦 Legendary Crate` : ''}`, m)
                  global.db.data.users[m.sender].legendary += ll * 1
                }
              } else conn.reply(m.chat, '📦 Legendary crate anda tidak cukup', m)
            } else conn.reply(m.chat, `Mohon tunggu ${lastimel} lagi untuk bisa membuka fitur open`, m)
            break
          case '10':
            let __lastimele = (new Date - global.db.data.users[m.sender].lastopen)
            let _lastimele = (30000 - __lastimele)
            let lastimele = clockString(_lastimele)
            if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
              let _lm1 = `${Math.floor(Math.random() * 50000)}`.trim()
              let _le1 = `${Math.floor(Math.random() * 50000)}`.trim()
              let _lp1 = `${Math.floor(Math.random() * 30)}`.trim()
              let _lu1 = `${Math.floor(Math.random() * 50)}`.trim()
              let _lc1 = `${Math.floor(Math.random() * 75)}`.trim()
              let _ll1 = `${Math.floor(Math.random() * 2)}`.trim()
              let _ld1 = `${Math.floor(Math.random() * 50)}`.trim()
              let _lmm1 = `${Math.floor(Math.random() * 4)}`.trim()
              let lm1 = (_lm1 * 1)
              let le1 = (_le1 * 1)
              let lp1 = (_lp1 * 1)
              let lu1 = (_lu1 * 1)
              let lc1 = (_lc1 * 1)
              let ll1 = (_ll1 * 1)
              let ld1 = (_ld1 * 1)
              let lmm1 = (_lmm1 * 1)
              let Lechat1 = `
  Anda telah membuka *📦 Legendary crate* dan mendapatkan:${lm1 > 0 ? `\n💵 Money: ${formatRupiah(lm1)}` : ''}${le1 > 0 ? `\n✨ Exp: ${le1} *exp*` : ''}${ld1 > 0 ? `\n💎 Diamond: ${ld1} *diamond*` : ''}${lp1 > 0 ? `\n🌟 limit: ${lp1} *limit*` : ''}${lc1 > 0 ? `\n📦 Common crate: ${lc1} *crate*` : ''}${lu1 > 0 ? `\n📦 Uncommon crate: ${lu1} *crate*` : ''}
  `.trim()
              if (global.db.data.users[m.sender].legendary >= 10) {
                global.db.data.users[m.sender].legendary -= 10
                global.db.data.users[m.sender].money += lm1 * 1
                global.db.data.users[m.sender].diamond += ld1 * 1
                global.db.data.users[m.sender].exp += le1 * 1
                global.db.data.users[m.sender].limit += lp1 * 1
                global.db.data.users[m.sender].common += lc1 * 1
                global.db.data.users[m.sender].uncommon += lu1 * 1
                global.db.data.users[m.sender].lastopen = new Date * 1
                conn.reply(m.chat, Lechat1, m)
                if (lmm1 > 0) {
                  conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${lmm1} 📦 Mythic Crate`, m)
                  global.db.data.users[m.sender].mythic += lmm1 * 1
                }
                if (ll1 > 0) {
                  conn.reply(m.chat, `*Selamat anda mendapatkan item Epic yaitu*${ll1 > 0 ? `\n${ll1} 📦 Legendary Crate` : ''}`, m)
                  global.db.data.users[m.sender].legendary += ll1 * 1
                }
              } else conn.reply(m.chat, '📦 Legendary crate anda tidak cukup', m)
            } else conn.reply(m.chat, `Mohon tunggu ${lastimele} lagi untuk bisa membuka fitur open`, m)
            break
          case '100':
            let __lastimelee = (new Date - global.db.data.users[m.sender].lastopen)
            let _lastimelee = (30000 - __lastimelee)
            let lastimelee = clockString(_lastimelee)
            if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
              let _lm2 = `${Math.floor(Math.random() * 50000)}`.trim()
              let _le2 = `${Math.floor(Math.random() * 30000)}`.trim()
              let _lp2 = `${Math.floor(Math.random() * 100)}`.trim()
              let _lu2 = `${Math.floor(Math.random() * 250)}`.trim()
              let _lc2 = `${Math.floor(Math.random() * 750)}`.trim()
              let _ll2 = `${Math.floor(Math.random() * 11)}`.trim()
              let _ld2 = `${Math.floor(Math.random() * 50)}`.trim()
              let _lmm2 = `${Math.floor(Math.random() * 11)}`.trim()
              let lm2 = (_lm2 * 1)
              let le2 = (_le2 * 1)
              let lp2 = (_lp2 * 1)
              let lu2 = (_lu2 * 1)
              let lc2 = (_lc2 * 1)
              let ll2 = (_ll2 * 1)
              let ld2 = (_ld2 * 1)
              let lmm2 = (_lmm2 * 1)
              let Lechat2 = `
  Anda telah membuka *📦 Legendary crate* dan mendapatkan:${lm2 > 0 ? `\n💵 Money: ${formatRupiah(lm2)}` : ''}${le2 > 0 ? `\n✨ Exp: ${le2} *exp*` : ''}${ld2 > 0 ? `\n💎 Diamond: ${ld2} *diamond*` : ''}${lp2 > 0 ? `\n🌟 limit: ${lp2} *limit*` : ''}${lc2 > 0 ? `\n📦 Common crate: ${lc2} *crate*` : ''}${lu2 > 0 ? `\n📦 Uncommon crate: ${lu2} *crate*` : ''}
  `.trim()
              if (global.db.data.users[m.sender].legendary >= 100) {
                global.db.data.users[m.sender].legendary -= 100
                global.db.data.users[m.sender].money += lm2 * 1
                global.db.data.users[m.sender].diamond += ld2 * 1
                global.db.data.users[m.sender].exp += le2 * 1
                global.db.data.users[m.sender].limit += lp2 * 1
                global.db.data.users[m.sender].common += lc2 * 1
                global.db.data.users[m.sender].uncommon += lu2 * 1
                global.db.data.users[m.sender].lastopen = new Date * 1
                conn.reply(m.chat, Lechat2, m)
                if (lmm2 > 0) {
                  conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${lmm2} 📦 Mythic Crate`, m)
                  global.db.data.users[m.sender].mythic += lmm2 * 1
                }
                if (ll2 > 0) {
                  conn.reply(m.chat, `*Selamat anda mendapatkan item Epic yaitu*${ll2 > 0 ? `\n${ll2} 📦 Legendary Crate` : ''}`, m)
                  global.db.data.users[m.sender].legendary += ll2 * 1
                }
              } else conn.reply(m.chat, '📦 Legendary crate anda tidak cukup', m)
            } else conn.reply(m.chat, `Mohon tunggu ${lastimelee} lagi untuk bisa membuka fitur open`, m)
            break
          case '1000':
            let __lastimeleee = (new Date - global.db.data.users[m.sender].lastopen)
            let _lastimeleee = (30000 - __lastimeleee)
            let lastimeleee = clockString(_lastimeleee)
            if (new Date - global.db.data.users[m.sender].lastopen > 30000) {
              let _lm3 = `${Math.floor(Math.random() * 150000)}`.trim()
              let _le3 = `${Math.floor(Math.random() * 200000)}`.trim()
              let _lp3 = `${Math.floor(Math.random() * 500)}`.trim()
              let _lu3 = `${Math.floor(Math.random() * 1000)}`.trim()
              let _lc3 = `${Math.floor(Math.random() * 2500)}`.trim()
              let _ll3 = `${Math.floor(Math.random() * 51)}`.trim()
              let _ld3 = `${Math.floor(Math.random() * 100)}`.trim()
              let _lmm3 = `${Math.floor(Math.random() * 111)}`.trim()
              let lm3 = (_lm3 * 1)
              let le3 = (_le3 * 1)
              let lp3 = (_lp3 * 1)
              let lu3 = (_lu3 * 1)
              let lc3 = (_lc3 * 1)
              let ll3 = (_ll3 * 1)
              let ld3 = (_ld3 * 1)
              let lmm3 = (_lmm3 * 1)
              let Lechat3 = `
  Anda telah membuka *📦 Legendary crate* dan mendapatkan:${lm3 > 0 ? `\n💵 Money: ${formatRupiah(lm3)}` : ''}${le3 > 0 ? `\n✨ Exp: ${le3} *exp*` : ''}${ld3 > 0 ? `\n💎 Diamond: ${ld3} *diamond*` : ''}${lp3 > 0 ? `\n🌟 limit: ${lp3} *limit*` : ''}${lc3 > 0 ? `\n📦 Common crate: ${lc3} *crate*` : ''}${lu3 > 0 ? `\n📦 Uncommon crate: ${lu3} *crate*` : ''}
  `.trim()
              if (global.db.data.users[m.sender].legendary >= 1000) {
                global.db.data.users[m.sender].legendary -= 1000
                global.db.data.users[m.sender].money += lm3 * 1
                global.db.data.users[m.sender].diamond += ld3 * 1
                global.db.data.users[m.sender].exp += le3 * 1
                global.db.data.users[m.sender].limit += lp3 * 1
                global.db.data.users[m.sender].common += lc3 * 1
                global.db.data.users[m.sender].uncommon += lu3 * 1
                global.db.data.users[m.sender].lastopen = new Date * 1
                conn.reply(m.chat, Lechat3, m)
                if (lmm3 > 0) {
                  conn.reply(m.chat, `*Selamat anda mendapatkan item Rare yaitu*\n${lmm3} 📦 Mythic Crate`, m)
                  global.db.data.users[m.sender].mythic += lmm3 * 1
                }
                if (ll3 > 0) {
                  conn.reply(m.chat, `*Selamat anda mendapatkan item Epic yaitu*${ll3 > 0 ? `\n${ll3} 📦 Legendary Crate` : ''}`, m)
                  global.db.data.users[m.sender].legendary += ll3 * 1
                }
              } else conn.reply(m.chat, '📦 Legendary crate anda tidak cukup', m)
            } else conn.reply(m.chat, `Mohon tunggu ${lastimeleee} lagi untuk bisa membuka fitur open`, m)
            break
          default:
            return conn.reply(m.chat, Lmao, m)
        }
    }
 }
  handler.help = ['open']
  handler.tags = ['rpg']
  handler.command = /^(open)$/i
  handler.group = true
  
  handler.fail = null
  
  module.exports = handler
  
  function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  
  function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    console.log({
      ms,
      h,
      m,
      s
    })
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
  }
  
  function formatRupiah(number) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });

  return formatter.format(number);
}
