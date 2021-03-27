const Discord = require('discord.js')
module.exports = {
    kod: "slowmode",
    



async run (client, message, args) {
      if(!message.member.hasPermission('MANAGE_GUILD')) return message.reply('Bunun için yetkin yok.')
      .then(a=>a.delete({timeout:10000}))
      if(args[0] == 'sıfırla') {
       await message.channel.setRateLimitPerUser(0)
       message.channel.send(`Bu kanalda mesaj atma süresi sıfırlanmıştır.`)
       .then(a=>a.delete({timeout:10000}))
      return
      }    
       const limited = args[0]
       if(isNaN(limited)) return message.reply('Bir rakam girmelisin.')
       .then(a=>a.delete({timeout:10000}))
       if(!limited) return message.reply('Bir süre girin.\n`Doğru kullanım ?slowmode 5`')
       .then(a=>a.delete({timeout:10000}))
       if(limited ==0) return message.reply('Eğer sıfırlamak istiyorsanız \nt!slowmode sıfırla yazın.')
       .then(a=>a.delete({timeout:10000})) 
       await message.channel.setRateLimitPerUser(limited)
       message.channel.send(`Bu kanalda artık ${limited} saniyede bir mesaj atılacak`)

}




}