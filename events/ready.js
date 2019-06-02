const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BELLY : Bot sorunsuz bir şekilde yüklendi.`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BELLY : ${client.user.username} takma ismi ile login yapıldı.`);  
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BELLY : Ready ayarları yapıldı.`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BELLY : Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BELLY : Giriş yapılan bot ${client.user.tag}!`)
  
};