const db = require('../database.js')
const { MessageEmbed } = require('discord.js')
module.exports = {
  kod: "prefix-sıfırla",
  async run (client, message, args) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu Komutu Kullanabilmek İçin Yönetici Yetkisine Sahip Olmalısın !')
    if (!db.kontrol("prefix" + message.guild.id)) return message.channel.send('Pefix Zaten Ayarl Değil')
    db.sil("prefix" + message.guild.id)
    const embed = new MessageEmbed()
    .setTitle('Prefix Başarıyla Sıfırlandı')
    .setColor('GREEN')
    .setDescription('Başarıyla Prefixinizi Sıfırladınız Artık Eskisi Gibi **t!**')
    .setFooter("© 2021 TITAN Beta", client.user.avatarURL())
    message.channel.send(embed)
  }
}