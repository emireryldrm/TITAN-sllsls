const Discord = require('discord.js')
module.exports = {
  kod: "ayrıl",
  async run (client, message, args) {
    if(!message.member.voice.channel) return message.channel.send('Sesli Kanalda Değilsiniz.')
    if (!message.guild.me.voice.channel) return message.channel.send('Bot Bir Sesli Kanalda Değil !')
    if (message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('Botu Knanaldan Ayrıltmak İçin Bot İle Aynı Kanalda Olmaznız Gerekmektedir.')
    message.member.voice.channel.leave()
    message.channel.send('Başarı İle Ayrıldım.')
  }
}