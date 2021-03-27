module.exports = {
    kod: "sil",
    async run (client, message, args) {
        if (isNaN(args)) return message.reply('Lütfen Bir Rakam Giriniz.');
        if (args < 2 || args > 100) return message.reply('Lütfen 2-100 Arasında Bir Rakam Giriniz.');
        message.channel.bulkDelete(Number(args))
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setTitle('Başarıyla Mesajlar Silindi.')
        .addField("Silen Kişi:", message.author)
        .setDescription('Silinen Mesaj Sayısı: ' + args)
        .setColor('RANDOM')
        .setTimestamp()
        message.channel.send(embed).then(mesaj => {
            setTimeout(function () {
                mesaj.delete()
            }, 5000);
        })
    }
  }