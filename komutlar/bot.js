module.exports = {
    kod: "bot",
    async run (client, message, args) {
        const Discord = require('discord.js') 
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setImage("https://cdn.discordapp.com/attachments/775088556561530931/775393735256965170/standard.gif")
        .setTitle('İstatistikler')
        .addField('t!istatistik', 'Bot hakkında bilgi verir.')
        .addField('t!ping', 'Botun ping değerini paylaşır.')
        .addField('Bağlantılar', '[İnstagram](https://www.instagram.com/emireryldrm/)\n[Discord](https://discord.gg/X5zGnvZr56)\n[GitHun](https://github.com/emireryldrm)');
        message.channel.send(embed)
    }
}