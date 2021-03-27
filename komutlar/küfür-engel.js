const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  kod: 'küfür-engel',
  

async run (client ,message, args) {
if(args[0] === 'aç') {
    db.set(`${message.guild.id}.kufur`, true)
    message.channel.send('Başarılı Şekilde Açıldı.')
  return
}
if (args[0] === 'kapat') {
  db.delete(`${message.guild.id}.kufur`)
message.channel.send('Başarılı Şekilde Kapatıldı.')
return
}
  message.channel.send('Lüten `aç` yada `kapat` Yazın!')
} 
} 