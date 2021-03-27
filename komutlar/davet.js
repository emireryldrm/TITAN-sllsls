const Discord = require("discord.js")
module.exports = {
    kod: "davet",
    
async run (client, message, args)  {

    const embed = new Discord.MessageEmbed()
    .addField("Selam, beni buradan davet edebilirsin","[TIKLA](https://discord.com/oauth2/authorize?client_id=770738239807029258&scope=bot&permissions=805314622)")
    .setImage('https://cdn.discordapp.com/attachments/727808813838893086/753234100617216151/indir.png')
message.channel.send(embed);
  }

 
}