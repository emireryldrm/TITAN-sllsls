module.exports = {
kod: "hava-durumu",
async run (client, message) { 
const weather = require('weather-js');
const { MessageEmbed } = require('discord.js')
    let args = message.content.split(' ').slice(1)
    let hava = args.join(" ");
if (!hava) return message.reply(`Şehir Girmelisin!`);
weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.send('🚫 **Tanımlanan yer Bulunamadı...**')
          return;
      }
      console.log(result)
      var current = result[0].current;
      var location = result[0].location;
      const embed = new MessageEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`${current.observationpoint} Hava Durumu`)
          .setThumbnail(current.imageUrl)
          .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUa0EGqR1gF1vSrxU9F-qffGZWmwr7mDeTsA&usqp=CAU')
          .setColor(0x00AE86)
          .addField('⏳ Zaman Dilimi: ',`UTC${location.timezone}`, true)
          .addField('🎰 Derece Tipi: ',location.degreetype, true)
          .addField('🌞 Sıcaklık: ',`${current.temperature} Derece`, true)
          .addField('🌅 Hissedilen Sıcaklık: ', `${current.feelslike} Derece`, true)
          .addField('Gün: ', `${current.day}`, true)
          .addField('Tarih:: ', `${current.date}`, true)
          .addField('🌈 Rüzgar Oranı: ',current.winddisplay, true)
          .addField('🌁 Nem Oranı: ', `${current.humidity}%`, true)
          message.channel.send({embed});
        })
      }
      }