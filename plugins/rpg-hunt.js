let handler = async (m, {
  conn, text
}) => {
  if (!db.data.settings[conn.user.jid].game) return m.reply(status.game)
  let monsters = [{
    area: 1,
    name: "🧌 Goblin"
  },
    {
      area: 1,
      name: "💧 Slime"
    },
    {
      area: 1,
      name: "🐺 Wolf"
    },
    {
      area: 2,
      name: "💀 Skeleton"
    },
    {
      area: 2,
      name: "🐺 Wolf"
    },
    {
      area: 3,
      name: "👹 Demon"
    },
    {
      area: 3,
      name: "👻 Ghost"
    },
    {
      area: 3,
      name: "🧟 Zombie"
    },
    {
      area: 4,
      name: "👺 Imp"
    },
    {
      area: 4,
      name: "🧙‍Witch"
    },
    {
      area: 4,
      name: "🧟 Zombie"
    },
    {
      area: 5,
      name: "🧟‍Ghoul"
    },
    {
      area: 5,
      name: "🦂 Giant Scorpion"
    },
    {
      area: 6,
      name: "🤖 Baby Robot"
    },
    {
      area: 6,
      name: "🧙‍Sorcerer"
    },
    {
      area: 7,
      name: "🐍 Viper Snake"
    },
    {
      area: 7,
      name: "🦎 Demonic Lizard"
    },
    {
      area: 8,
      name: "🐊 Giant Crocodile"
    },
    {
      area: 8,
      name: "🎃 Pumpkin Killer"
    },
    {
      area: 8,
      name: "🔥 Soul"
    },
    {
      area: 9,
      name: "👹 Demon"
    },
    {
      area: 9,
      name: "👽 Manusia Hijau"
    },
    {
      area: 9,
      name: "💀 Sekeleton"
    },
    {
      area: 10,
      name: "🦌 Wendigo"
    },
    {
      area: 10,
      name: "🐋 Lochness"
    },
    {
      area: 10,
      name: "👾 Slime Boss"
    },
    {
      area: 11,
      name: "🦈 Megalodon"
    },
    {
      area: 11,
      name: "🦅 Phoenix"
    },
    {
      area: 11,
      name: "🦣 Giant Mammoth"
    },
    {
      area: 12,
      name: "🦬 Minotaur"
    },
    {
      area: 12,
      name: "🐙 Kraken"
    },
    {
      area: 12,
      name: "🦕 Brontosaurus"
    },
    {
      area: 13,
      name: "🦖 T-Rex"
    },
    {
      area: 13,
      name: "🐊 Croco"
    },
    {
      area: 13,
      name: "🐉 Dragon"
    },
  ]
  let player = global.db.data.users[m.sender]
  let pengirim = m.sender.split("@")[0]

  //  let cdm = `${MeNit(new Date - player.lasthunt)}`
  //  let cds = `${DeTik(new Date - player.lasthunt)}`
  // let cd1 = Math.ceil(01 - cdm)
  // let cd2 = Math.ceil(60 - cds)
  let __timers = (new Date - global.db.data.users[m.sender].lasthunt)
  let _timers = (10800000 - __timers)
  let timers = clockString(_timers)

  let area_monsters = monsters[Math.floor(Math.random() * monsters.length)]
  let monster = area_monsters.name
  area_monsters = area_monsters.area
  let monsterName = monster.toUpperCase()

  if (new Date - global.db.data.users[m.sender].lasthunt > 10800000) {
    // if (global.db.data.users[m.sender].health > 99) {
    //   if (global.db.data.users[m.sender].sword > 9) {
    let coins = parseInt(Math.floor(Math.random() * 80000))
    let exp = parseInt(Math.floor(Math.random() * 50000))
    let limit = `${Math.floor(Math.random() * 20)}`.trim()
    let _healing = `${Math.floor(Math.random() * 100)}`.trim()
    let healing = (_healing * 1)

    /*let sum = 82 * player.area - 59
   let dmg = (player.sword  * 5 + player.armor * 5 - sum)
    dmg = dmg < 0 ? Math.abs(dmg) : 0*/

    player.health -= healing
    player.lasthunt = new Date * 1 // waktu hunt 2menit

    if (player.health < 0) {
      let msg = `💀 *@${pengirim}* Anda Mati Di Bunuh Oleh ${monsterName}`
      if (player.level > 0) {
        if (player.sword > 0) {
          player.level -= 5
          player.sword -= 5
          player.exp -= exp * 1
          msg += `\n⚠️ Level Anda Turun 5 Karena Mati Saat Berburu!\nSword Anda Berkurang 5 Karena Mati Saat Berburu!`
        }
      }
      player.health = 100
      m.reply(msg)
      return
    }

    player.money += coins * 1
    player.exp += exp * 1
    player.limit += limit * 1

    let pesan = `🗡 Kamu bertemu *${monsterName}*, Dan melawannya!
*@${pengirim}* Kamu berhasil membunuh *${monsterName}*!
Mendapatkan:
💵 Money: ${new Intl.NumberFormat('en-US').format(coins)}
✨ XP: ${new Intl.NumberFormat('en-US').format(exp)}
🌟 Limit: ${limit}
Darah Berkurang -${healing}, Tersisa ${player.health} Health`
    m.reply(pesan)
    //     } else m.reply(`Minimal sword mu 10 untuk bisa berburu monster`)
    //     } else m.reply(`Minimal health mu 100 untuk bisa berburu monster`)
  } else throw `⚠️ Tunggu *${timers}* Untuk Berburu Lagi`
}

handler.help = ['hunter']
handler.tags = ['rpg']
handler.command = /^hunter/i
handler.limit = true
handler.group = true
handler.fail = null

module.exports = handler

/*function MeNit(ms) {
  let m = isNaN(ms) ? '02' : Math.floor(ms / 1000) % 60
  return [m].map(v => v.toString().padStart(2, 0)).join(':')
}

function MeNit(ms) {
  let s = isNaN(ms) ? '01' : Math.floor(ms / 1000) % 60
  return [s].map(v => v.toString().padStart(2, 0)).join(':')
}*/

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({
    ms, h, m, s
  })
  return [h,
    m,
    s].map(v => v.toString().padStart(2, 0)).join(':')
}