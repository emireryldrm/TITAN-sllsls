const Discord = require('discord.js');
module.exports = {
    kod: "bansay",
    

async run  (client, message, args)  {
 let guild = message.guild;

    guild.fetchBans()
        .then(bans => message.channel.send(`Sunucunuzda **${bans.size}** Banlanmış Uye Bulunmakta.`))
        .catch(console.error);

}


}