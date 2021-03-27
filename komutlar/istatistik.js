const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
module.exports = {
    kod: "istatistik",
    
async run (client, message, args)  {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter("© 2020 BOT", client.user.avatarURL())
    .addField("» **Botun Sahibi**", "<@494207333841371176>")
    .addField("» **Gecikme süreleri**","Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("» **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("» **Çalışma süresi**", seksizaman, true)
    .addField("» **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("» **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
    .addField("» **Kanallar**", client.channels.cache.size.toLocaleString(), true)
    .addField("» **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .addField("**» Bot Davet**"," [Davet Et](https://discord.com/oauth2/authorize?client_id=770738239807029258&scope=bot&permissions=805314622" + client.user.id + "&scope=bot&permissions=8)");
  return message.channel.send(istatistikler);
}


}