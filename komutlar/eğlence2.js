module.exports = {
    kod: "eğlence2",
    async run (client, message, args) {
        const Discord = require('discord.js') 
        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setImage("https://cdn.discordapp.com/attachments/774608306224234496/774631160873222154/350kb_1.gif")
        .setTitle('Eğlence Komutları 2')
        .addField('t!sarıl', 'Etiketlenen kişiye sarılır')
        .setFooter("© 2020 TITAN Beta", client.user.avatarURL())
        .addField('t!tokat-at', 'Etiketlenen kişiye tokat atar')
        .addField('t!öp', 'Etiketlenen kişiyi öper')
        .addField('t!burç', 'Hergün farklı burç yorumlar.')
        .addField('t!brawlstars', 'Brawl Starsda kutu açar.')
        .addField('t!ara155', "Polis Geliyorr!!")
        .addField('t!espri', 'Sen bu esprilere gülme ben bu botu siliyorum :D')
       .addField('Bağlantılar', '[İnstagram](https://www.instagram.com/emireryldrm/)\n[Discord](https://discord.gg/X5zGnvZr56)\n[GitHun](https://github.com/emireryldrm)');
        message.channel.send(embed)
    }
}