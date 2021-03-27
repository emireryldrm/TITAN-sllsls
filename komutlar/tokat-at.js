module.exports = {
    kod: "tokat-at",
   async run (client, message, args) {
      let mesaj = args.slice(0).join(' ');
      if (mesaj.length < 1) return message.reply(`**Kime tokat atmak isteediğini belirtmedin**`);
      const Discord = require('discord.js');
      const { Client, MessageEmbed } = require('discord.js');
      var Tokat = [
        'https://media1.tenor.com/images/3c161bd7d6c6fba17bb3e5c5ecc8493e/tenor.gif?itemid=5196956',
        
        
  
      ];
      var tokatpuan = Math.floor(Math.random()*Tokat.length);
      const embed = new MessageEmbed()
      .setAuthor('')
      .setDescription(`** ${mesaj} ` + message.author.username + ' Sana tokat attı**')
      .setImage(`${Tokat[tokatpuan]}`)
    message.channel.send(embed);
  }}