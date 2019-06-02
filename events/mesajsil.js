const Discord = require('discord.js')
const db = require('quick.db');
const moment = require('moment');

module.exports = async message => {
  if (message.author.bot) return;
  if (!message.content) return;
  let kanal = await db.fetch(`membermodChannel_${message.guild.id}`)
  let kanal2 = message.guild.channels.find('id', kanal)
  kanal2.send(`[**${moment().format('HH:mm:ss')}**] :wastebasket: ${message.author.tag} (${message.author.id}) isimli kullanıcı tarafından gönderilen bir mesaj <#${message.channel.id}> kanalında silindi.\nMesaj: \`${message.content}\``)
}