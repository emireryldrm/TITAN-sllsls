module.exports = {
    kod: "sarıl",
   async run (client, message, args) {
      let mesaj = args.slice(0).join(' ');
      if (mesaj.length < 1) return message.reply(`**Kime Sarılmak İstedigini Belirtmedin**`);
      const Discord = require('discord.js');
      const { Client, MessageEmbed } = require('discord.js');
      var Sarıl = [
        'https://media1.tenor.com/images/1be008125e785761251a1cac801067a5/tenor.gif?itemid=11530657',
        'https://media1.tenor.com/images/2d4138c7c24d21b9d17f66a54ee7ea03/tenor.gif?itemid=12535134',

     

      ];
      var sarılpuan = Math.floor(Math.random()*Sarıl.length);
      const embed = new MessageEmbed()
      .setAuthor('')
      .setDescription(`** ${mesaj} ` + message.author.username + ' Sana Sarıldı**')
      .setImage(`${Sarıl[sarılpuan]}`)
    message.channel.send(embed);
  }}