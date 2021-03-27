module.exports = {
    kod: "eğlence",
    async run (client, message, args) {
        const Discord = require('discord.js') 
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setImage("https://cdn.discordapp.com/attachments/774608306224234496/774631160873222154/350kb_1.gif")
        .setTitle('Eğlence Komutları')
        .addField('t!adamasmaca', 'Adam asmaca oynarsın.')
        .addField('t!atatürk', 'Atatürk gifi atar.')
        .addField('t!kedi', 'Kedi resimlerini gösterir.')
        .addField('t!köpek', 'Köpek resimlerini gösterir.')
        .addField('t!bayrak', 'TÜRK bayrağı gösterir.')
        .setFooter("© 2020 TITAN Beta", client.user.avatarURL())
        .addField('t!deprem-bilgi', 'En son olan 10 deprem hakkında bilgi verir.')
        .addField('t!steam', 't!steam <oyun> hakkında bilgi verir.')
        .addField('t!alkış', 'Alkışlarsın')
        .addField('Bağlantılar', '[İnstagram](https://www.instagram.com/emireryldrm/)\n[Discord](https://discord.gg/X5zGnvZr56)\n[GitHun](https://github.com/emireryldrm)');
        message.channel.send(embed)
    }
}