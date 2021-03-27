const Discord = require('discord.js');
module.exports = {
    kod: "çaydemle",
    

async run (client, msg, args)  {
  let çay = args.slice(0).join(' ');
        if (çay.length < 1) {
        return msg.reply('Peki kime çay demlemek istersin çocuk adam?');
            } else {
              msg.channel.send('Çayı koydun!')
              .then(nmsg => nmsg.edit('Çayı Koydun!'))
.then(nmsg => nmsg.edit('Çayı Koydun!'))
              .then(nmsg => nmsg.edit('Çayı Koydun'))
.then(nmsg => nmsg.edit('🔥 Çayın Demleniyor! 🔥'))
              .then(nmsg => nmsg.edit('🔥 Çayın Demleniyor! 🔥'))
.then(nmsg => nmsg.edit('🔥 Çayın Demleniyor! 🔥'))
              .then(nmsg => nmsg.edit('🔥 Çayın Demleniyor! 🔥'))
.then(nmsg => nmsg.edit('🔥 Çayın Demleniyor! 🔥'))
              .then(nmsg => nmsg.edit('🔥 Çayın Demleniyor! 🔥'))
.then(nmsg => nmsg.edit(`Müthiş! ${çay}, çayın demlendi, güzelce iç!`));

       
      }
}

 
}