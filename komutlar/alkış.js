module.exports = {
    kod: "alkış",
    async run (client, message, args) {
      const Discord = require('discord.js');
      const embed = new Discord.MessageEmbed()
      .setAuthor("Alkış")
      .setColor("RANDOM")
      .setImage("https://thumbs.gfycat.com/WarpedAdmiredCormorant-size_restricted.gif ")
      message.channel.send(embed)
    }
}