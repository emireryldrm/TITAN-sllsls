module.exports = {
    kod: "moderasyon",
    async run (client, message, args) {
        const Discord = require('discord.js') 
        const embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor("RANDOM")
        .setImage('https://cdn.discordapp.com/attachments/775088556561530931/775393735256965170/standard.gif')
        .addField('t!ban', 't!ban @etiket log-kanalı açmayı unutmayın.')
        .addField('t!kick', 't!kick @etiket etiketlediğiniz kişiyi sunucudan atar.')
        .addField('t!unban', 'Yasaklanan kişini yasağını kaldırır t!unban <ID>')
        .addField('t!sil', 'Bu komut 14 günden eski mesajları silemez.')
        .addField('t!sunucu-bilgi', 'Komutun kullanıldığı sunucu hakkında bil verir.')
        .addField('t!bansay', 'Sunucudan banlanan kişi sayısını gösterir')
        .addField('t!mute', '"CEZALI" rolünü oluşturmayı unutmayın.')
        .addField('t!slowmode', 't!slowmode <rakam>')
        .addField('t!slowmode sıfırla', 'Bu komudu kullanarak slowmodeyi kaldırırsınız.')
        .setTitle('Moderasyon');          
        message.channel.send(embed) 
        
    }
}