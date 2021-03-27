const Discord = require("discord.js");
const ayarlar = require('../işaret.json');
module.exports = {
    kod: "sunucu-bilgi",


async run (client, message, args, user) {

  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
  let sicon = message.guild.iconURL;

   let serverembed = new Discord.MessageEmbed()

   .setAuthor('Sunucu Bilgi')

   .setColor("RANDOM")

   .setThumbnail(message.guild.iconURL)

   .addField('Sunucu Adı',message.guild.name, true)
   .addField("Sunucu İd", message.guild.id, true)
   .addField("Üyeler", message.guild.memberCount, true)
   .addField("Kanallar", message.guild.channels.cache.size, true)
   .addField('Sunucu boostlanma sayısı:', message.guild.premiumSubscriptionCount, true)
   .addField("Roller", message.guild.roles.cache.size, true)

   message.channel.send(serverembed);

}

}