module.exports = {
    kod: "prefix-sistem",
    async run (client, message, args) {
        const Discord = require('discord.js') 
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Prefix Sistemi')
        .addField('t!prefix-ayarla', 'Prefixi Ayarlamanızı Sağlar.')
          .addField('t!prefix-sıfırla', 'Ayarladağınız Prefixi Sıfırlar.')        
        .setFooter("© 2021 TITAN Beta", client.user.avatarURL())
        message.channel.send(embed)
        
        }
  }