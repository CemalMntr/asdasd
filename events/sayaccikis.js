const Discord = require('discord.js')
const db = require('quick.db');

module.exports = async member => { 
  let paket = await db.fetch(`pakets_${member.id}`)
  let kanal = await db.fetch(`sayacKanal_${member.guild.id}`)
  let i = await db.fetch(`sayacSayi_${member.guild.id}`) 
 
   if (!i) return
   if (!kanal) return
    if (paket === 'platinum-paket') {
     member.guild.channels.get(kanal).send(`📢💠 Sunucudan bir **Platinum Üye** yok oldu! \`${i}\` olmaya \`${i - member.guild.memberCount}\` kişi kaldı! \nGüle güle kralımız \`${member.user.tag}\``)
   } else {
     member.guild.channels.get(kanal).send(`:outbox_tray: Bir kişi kaybettik :frowning: \`${i}\` olmaya \`${i - member.guild.memberCount}\` kişi kaldı!`)    
  } 
}