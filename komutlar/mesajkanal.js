const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  let mkanal = message.mentions.channels.first()
    if (!mkanal) {
        return message.channel.send(`${process.env.basarisiz} Giriş-çıkış **mesaj** kanalı olarak ayarlamak istediğin kanalı etiketle!.`)
    }
    db.set(`mesajk_${message.guild.id}`, mkanal.name)
    message.channel.send(`${process.env.basarili} Giriş-Çıkış **mesaj** kanalı \`#${mkanal.name}\` olarak ayarlandı.`)
  
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['mesajkanal','mesaj-kanal'],
    permLevel: 3
};

exports.help = {
    name: 'mesaj-kanal-ayarla',
    description: ' Giriş-çıkış mesaj kanalını ayarlar.',
    usage: 'mesaj-kanal-ayarla <#kanal>'
};