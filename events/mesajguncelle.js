const Discord = require('discord.js')
const db = require('quick.db');
const moment = require('moment');

module.exports = async (oldMessage, newMessage) => {

  if (oldMessage.author.bot) {
        return false;
    }

    if (!oldMessage.guild) {
        return false;
    }

    if (oldMessage.content == newMessage.content) {
        return false;
    }

    if (!oldMessage || !oldMessage.id || !oldMessage.content || !oldMessage.guild) return;  
  let kanal = await db.fetch(`membermodChannel_${oldMessage.guild.id}`)
  let kanal2 = oldMessage.guild.channels.find('id', kanal)  
  kanal2.send(`[**${moment().format('HH:mm:ss')}**] :pencil: ${oldMessage.author.tag} (${oldMessage.author.id}) isimli kullanıcı  <#${newMessage.channel.id}> kanalına gönderdiği bir  mesajını düzenledi.\nEski Mesaj : \`${oldMessage.content}\` \nYeni Mesaj: \`${newMessage.content}\``);
}