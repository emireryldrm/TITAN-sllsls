const db = require("../database.js")
const { MessageEmbed } = require('discord.js')
module.exports = {
  kod: "prefix-ayarla",
  async run (client, message, args) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu Komutu Kullanabilmek İçin Yönetici Yetkisine Sahip Olmalısın !')
    if (!args[0]) return message.channel.send('Lütfen Geçerli Bir Prefix Giriniz.')
    const eskiprefix = db.kontrol('prefix' + message.guild.id) ? db.bul('prefix' + message.guild.id) : 't!'
    if (eskiprefix == args.join(" ")) return message.channel.send('Girdiğiniz Prefix Önceki İle Aynı !')
    db.yaz("prefix" + message.guild.id, args.join(" "))
    const embed = new MessageEmbed()
    .setTitle('Prefix Başarıyla Değiştirildi.')
    .setColor('GREEN')
    .setFooter("© 2021 TITAN Beta", client.user.avatarURL())
    .setDescription("Yeni Prefix'iniz **" + args.join(" ") + "** oldu.")
    .setFooter("Prefixi Sıfırlamak İçin " + args.join(" " + "prefix-sıfırla Yazabilirsiniz."))
    message.channel.send(embed)
  }
  
}