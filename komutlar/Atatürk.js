module.exports = {
    kod: "atatürk",
    async run (client, message, args) {
      const Discord = require('discord.js');
      const embed = new Discord.MessageEmbed()
      .setAuthor("Bütün ümidim gençliktedir.")
      .setColor("RANDOM")
      .setImage("https://media1.tenor.com/images/9bc96af34563931baaa6e3f071e4fc31/tenor.gif?itemid=12248775")
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
      message.channel.send(embed)
    }
}