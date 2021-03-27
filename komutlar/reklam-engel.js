 const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  kod: 'reklam-engel', 
  
async run (client, message, args)  {
   if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
    if (!args[0]){
        const arg = new Discord.MessageEmbed()
        .setDescription(`Reklam Engel için Doğru Kullanım: t!reklam-engel aç / t! reklam-engel kapat`)
        .setColor("WHITE")
        message.channel.send(arg)
    }
    if (args[0] === "aç"){
        const ac = new Discord.MessageEmbed()
        .setDescription(`Reklam Engel başarıyla açıldı! Artık reklamlar silinicek!`)
        .setColor("WHITE")
        message.channel.send(ac)
      
      db.set(`reklam_${message.guild.id}`, "acik")
    }
    if (args[0] === "kapat"){
        const kapat = new Discord.MessageEmbed()
        .setDescription(`Reklam Engel başarıyla kapatıldı! Artık reklamlar silinmeyecek!`)
        .setColor("WHITE")
        message.channel.send(kapat)
      
      db.set(`reklam_${message.guild.id}`, "kapali")
    }
}
} 