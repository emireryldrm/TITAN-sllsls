module.exports = {
    kod: "kullanıcı",
    async run (client, message, args) {
        const Discord = require('discord.js') 
        const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setImage('https://cdn.discordapp.com/attachments/775088556561530931/775393735256965170/standard.gif')
        .addField('t!avatar', '`Yazan veya Etiketlenen Kişinin Avatarını Gösterir`')
        .addField('t!istatistik', '`Botun İstatistiğini Gösterir`')
        .addField('t!hava-durumu', '`t!hava-durumu <İL>`')
        .addField('t!covid', '`t!covid <Tureky> yazarak günlük tabloyu görebilirsiniz.`')
        .addField('t!profil', '`Yazan veya Etiketlenen Kişinin Bilgilerini Gösterir`')
        .addField('t!sunucu-bilgi', '`Kodu Kullanan Sunucunun Bilgilerini Gösterir`')
        .setTitle('Kullanıcı Komutları');          
        message.channel.send(embed) 
        
    }
}