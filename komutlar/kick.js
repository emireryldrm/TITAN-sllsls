module.exports = {
    kod: "kick",
    async run (client, message, args) {
      const args1 = message.content.split(' ').slice(2)
      const neden = args1.join(" ")
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
      const { MessageEmbed } = require('discord.js')
      const user = message.mentions.users.first();
      
     if (user) {

       const member = message.guild.member(user);
       if (member) {
         member
           .kick('Optional reason that will display in the audit logs')
           .then(() => {
             const kanal = message.guild.channels.cache.find(ch => ch.name === 'log-kanalı')
             const embed = new MessageEmbed()
             .setTitle('LOG OLAYI')
             .setDescription('Olay: `Kick`')
             .addField('Kişi:', member)
             .addField('Neden:', neden)
             .setTimestamp()
             kanal.send(embed)
           })
           .catch(err => {
                 
             message.reply('Üye atıldı.');

             console.error(err);
           });
       } else {
    
         message.reply("Bu kullanı loncada değil");
       }
       
     } else {
       message.reply("Kimi atacağını söylemedin.");
     }
    }
  }
  