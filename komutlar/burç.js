const Discord = require('discord.js');
const burc = require('burc.js'); 
module.exports = {
    kod: "burç",
 

async run (client, message, args, db)  {
  if (!args[0]) return message.channel.send("Günlük yorum alabilmek için bir burç ismi girmelisin.")
let msg = await message.channel.send("Lütfen bekleyiniz veriler çekiliyor..")
let burcumuz = await burc.gunluk(args[0])
let embed = new Discord.MessageEmbed()
.setAuthor("Günlük Burç Yorumu", message.author.displayAvatarURL({dynamic:true}))
.setDescription(burcumuz)
.setFooter(""+message.author.username+"#"+message.author.discriminator+" tarafından istendi.")
.setImage("https://foto.haberler.com/haber/2020/05/12/gunluk-burc-yorumlari-12-mayis-2020-sali-haft-13212847_amp.jpg")
.setTimestamp()
msg.edit("",{embed:embed})
}

}