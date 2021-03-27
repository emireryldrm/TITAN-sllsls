const Discord = require("discord.js")
module.exports = {
    kod: "oy-ver",
    
async run (client, message, args)  {

    const embed = new Discord.MessageEmbed()
    .addField("Merhaba Bize Destek Olmak İstermisin Botumuza Oy Vererek Bize Destek Olabilirsiniz.","[Oy Ver](https://top.gg/bot/770738239807029258/vote)")
    .setTitle('Oy Ver')
    .setImage('https://cdn.discordapp.com/attachments/695264876662227044/806603045621727242/images.png')
message.channel.send(embed);
  }

 
}