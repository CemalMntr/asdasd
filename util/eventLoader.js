const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('message', reqEvent('message'));
  client.on('guildMemberAdd', reqEvent('sayacgiris'));
  client.on('guildMemberRemove', reqEvent('sayaccikis'));
  client.on('messageUpdate', reqEvent('mesajgüncelle'));
  client.on('messageDelete', reqEvent('mesajsil'));
  client.on('guildMemberAdd', reqEvent('ototag'));
};
