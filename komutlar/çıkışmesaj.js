const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
 
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  const cmesaj2 = await db.fetch(`sayac_${message.guild.id}`);
  
  let cmesaj = args.slice(0).join(' ')
  
  if(cmesaj === "sıfırla") {
    if(!cmesaj2) {
      message.channel.send(`${process.env.basarisiz}Ayarlanmayan şeyi sıfırlayamazsın.`)
      return
    }
    
    db.delete(`cikismesaj_${message.guild.id}`)
    message.channel.send(`${process.env.basarili} Giriş mesajı başarıyla sıfırlandı.`)
    return
  }
  
      if (!cmesaj) {
        return message.channel.send(`${process.env.basarisiz} Ayarlamak istediğin çıkış mesajını yazmalısın.\n Ayarlama kılavuzu: Mesajda kullanıcı adının yazılacağı yere {kullanıcı}, sunucu isminin yazılacağı yere {sunucu} yazabilirsin.`)
    }
  
    db.set(`cikismesaj_${message.guild.id}`, cmesaj)
    message.channel.send(`${process.env.basarili} Çıkış mesajı \`${cmesaj}\` olarak ayarlandı.`)
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['çıkış-mesaj','çıkışmesaj','çıkışmesajayarla'],
    permLevel: 3
}

exports.help = {
    name: 'çıkış-mesaj-ayarla',
    description: 'Giriş Mesajını Ayarlar.',
    usage: 'çıkış-mesaj-ayarla <mesaj>'
}