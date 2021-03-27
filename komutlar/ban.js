const { MessageEmbed } = require('discord.js')
module.exports = {
    kod: "ban",
    async run (client, message, args) {
        if (!message.guild) return  
       
      if (message.content.startsWith('t!ban')) {
          if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
          const user = message.mentions.users.first();
        const embed = new MessageEmbed()
          if (user) {
            const member = message.guild.member(user);
            if (member) {
              member
                .ban()
                .then(() => {
                  
                const embed = new MessageEmbed()                     
                 message.reply(`${user.tag} kişisi banlanmıştır.`);            
                })
                .catch(err => {
                  message.reply('Bunu yapamam');
                  console.error(err);
                });
            } else {
              message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
            }
          } else {
            message.reply("Yasaklanacak kişiyi yazmadın.");
          }
        }
      }
      
}