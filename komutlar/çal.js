const play = require('discordjs-ytdl')
const { MessageEmbed } = require('discord.js')
module.exports = {
  kod: "çal",
  async run (client, message, args) {
    
    if (message.member.voice.channel) {
      const embed = new MessageEmbed()
      .setTitle("Şarkı Bulundu")
      .setColor("Green")
      .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      const connection = await message.member.voice.channel.join()
      play.play(connection, args.join(" "), 'AIzaSyCZYklIWTTDdJMkS4CEq-uQXUqEJj4V33c')
      let title = play.title(args.join(" "), 'AIzaSyCZYklIWTTDdJMkS4CEq-uQXUqEJj4V33c') 
      title.then(titlee => embed.addField('Video Başlığı:', titlee))
      
      let kanal = play.channel(args.join(" ", 'AIzaSyCZYklIWTTDdJMkS4CEq-uQXUqEJj4V33c'))
      kanal.then(titlee => embed.addField('Kanal Adı:', titlee))
      
      let id = play.id(args.join(" ", 'AIzaSyCZYklIWTTDdJMkS4CEq-uQXUqEJj4V33c'))
      id.then(titlee => embed.addField('Video İdsi:', titlee))
      setTimeout(function () {
        message.channel.send(embed)
                 
       }, 2500);

    } else {
      message.reply('Bir Sesli Kanala Katılmalsınız.')
    }

    
    
  }
}
//AIzaSyCZYklIWTTDdJMkS4CEq-uQXUqEJj4V33c