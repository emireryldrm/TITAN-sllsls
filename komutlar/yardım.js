module.exports = {
    kod: "yardım",
    async run (client, message, args) {
        const Discord = require('discord.js') 
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setFooter("© 2021 TITAN Beta", client.user.avatarURL())
        .setImage("https://cdn.discordapp.com/attachments/774608306224234496/774631160873222154/350kb_1.gif")
        .addField('t!kullanıcı', 'Kullanıcı komutlarını gösterir.')
        .addField('t!bot', 'Bot Bilgi Komutu.')
        .addField('t!moderasyon', 'Moderasyon komutlarını gösterir')
        .addField('t!eğlence', 'Eğlence komutlarını gösterir')
        .addField('t!eğlence2', 'Eğlence komutları 2yi gösterir.')
        .addField('t!prefix-sistem', 'Prefix Sistemini Gösterir.')
        message.channel.send(embed)
    }
}