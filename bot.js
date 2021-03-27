const Discord = require("discord.js");
const client = new Discord.Client();
const { readdirSync } = require("fs");
const mongoose = require("mongoose");
const db = require('./database');
const { join } = require("path");
const database = require("quick.db") 



client.commands = new Discord.Collection();

const prefix = "t!"

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file =>
  file.endsWith(".js")
); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.

for (const file of commandFiles) {
  const command = require(join(__dirname, "komutlar", `${file}`));
  client.commands.set(command.kod, command);
}

client.on("error", console.error);

client.on("ready", () => {
  console.log("Botumuz Aktif");
  const durumlar = [
    "t!yardım",
    "Türkçe Destekli Moderasyon ve Eğlence botu.",
    "Botun yapımcısı `${emireryldrm}`",
    "t!davet",
    "t!oy-ver",
    "prefix = t!",
    `${client.guilds.cache.size} Sunucudayım !!!`
  ];
  setInterval(function() {
    let durum = durumlar[Math.floor(Math.random() * durumlar.length)];
    client.user.setActivity(durum);
  }, 3000);
});






client.on("message", async message => {
  if (message.author.bot) return
  if (!message.guild) {
    var prefix = "t!"
  } else if (db.kontrol("prefix" + message.guild.id)){
    var prefix = db.bul("prefix" + message.guild.id)
    } else {
      var prefix = "t!"
    }
  if (message.content.startsWith(prefix)) {
    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/);

    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return message.channel.send(" ");

    try {
      client.commands.get(command).run(client, message, args);
    } catch (error) {
      console.error(error);
    }
  }
});

//Emircan Eryıldırım







client.on("guildCreate", async guild => {
  const embed1 = new Discord.MessageEmbed()
    .setTitle("Sunucunuza Eklediğiniz için teşekkür edriz.")
    .setDescription("Sunucu Adı: `" + guild.name + "`");
  const embed2 = new Discord.MessageEmbed()
    .setTitle("Yeni Sunucu")
    .setDescription("Sunucu Adı: " + guild.name)
    .addField("» Kişi Sayısı:", guild.memberCount)
    .addField(
      "» Toplam Sunucu Sayısı",
      client.guilds.cache.size.toLocaleString(),
      true
    )
    .setTimestamp()
    .addField("» Sunucu Sahibi:", guild.owner)
    .setThumbnail(guild.iconURL);
  const channel = client.channels.cache.find(
    ch => ch.id === "813762172231876648"
  );
  channel.send(embed2);
});

client.on("guildDelete", async guild => {
  const embed1 = new Discord.MessageEmbed()
    .setTitle("Sunucunuzdan çıkartığınız için üzgünüz.")
    .setDescription("Sunucu Adı: `" + guild.name + "`");
  const embed2 = new Discord.MessageEmbed()
    .setTitle("Sunucudan Atıldım")
    .setDescription("» Sunucu Adı: " + guild.name)
    .addField("Kişi Sayısı:", guild.memberCount)
    .addField(
      "» Toplam Sunucu Sayısı",
      client.guilds.cache.size.toLocaleString(),
      true
    )
    .setTimestamp()
    .addField("» Sunucu Sahibi:", guild.owner)
    .setThumbnail(guild.iconURL);
  const channel = client.channels.cache.find(
    ch => ch.id === "813762172231876648"
  );
  channel.send(embed2);
});

client.on("message", async msg => {
  const i = await database.fetch(`ssaass_${msg.guild.id}`);
  if (i == "acik") {
    if (
      msg.content.toLowerCase() == "sa" ||
      msg.content.toLowerCase() == "s.a" ||
      msg.content.toLowerCase() == "selamun aleyküm" ||
      msg.content.toLowerCase() == "sea" ||
      msg.content.toLowerCase() == "selam"
    ) {
      try {
        return msg.reply("Aleyküm Selam, Hoş Geldin");
      } catch (err) {
        console.log(err);
      }
    }
  } else if (i == "kapali") {
  }
  if (!i) return;
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 4) {
    if (database.fetch(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel
              .send(
                `✋ ${msg.author}, Bu sunucuda, büyük harf kullanımı engellenmekte!`
              )
              .then(m => m.delete(5000));
          }
        }
      }
    }
  }
});

client.on("message", async message => {
  try {
    let ke = await database.fetch(`reklam_${message.guild.id}`);
    if (ke === "kapali" || ke === undefined || ke === null) {
      return;
    } else if (ke === "acik") {
      let reklam = [
        "discord.gg/",
        "https://",
        ".org",
        ".com",
        ".cf",
        ".tk",
        ".xyz"
      ];
      if (reklam.some(word => message.content.includes(word))) {
        if (!message.member.hasPermission("BAN_MEMBERS")) {
          message.delete();
          const embed = new Discord.MessageEmbed().setDescription("dld");

          const mesaj = new Discord.MessageEmbed().setDescription(
            "**Sunucunuzda bir kişi reklam yaptı.** \n**Kullanıcı:** " +
              message.author.tag +
              " \n**Mesaj:** ___" +
              message +
              "___ "
          );
          message.guild.owner.send(mesaj);
        }
      }
    }
  } catch (e) {
    let ke = await database.fetch(`reklam_${message.guild.id}`);
    if (ke === "kapali" || ke === undefined || ke === null) {
      return;
    } else if (ke === "acik") {
      let reklam = [
        "discord.gg/",
        "https://",
        ".org",
        ".com",
        ".cf",
        ".tk",
        ".xyz"
      ];
      if (reklam.some(word => message.content.includes(word))) {
        if (!message.member.hasPermission("BAN_MEMBERS")) {
          message.delete();
          const embed = new Discord.MessageEmbed()
            .setTitle("Reklam")
            .setDescription(
              " Bu Sunucuda Reklam Filtresi Aktif!" + message.author.tag
            );
          message.channel.send(embed);
          const mesaj = new Discord.MessageEmbed().setDescription(
            "**Sunucunuzda bir kişi reklam yaptı.** \n**Kullanıcı:** " +
              message.author.tag +
              " \n**Mesaj:** ___" +
              message +
              "___ "
          );
          message.guild.owner.send(mesaj);
        }
      }
    }
  }
});

client.on("message", async msg => {
  const i = await database.fetch(`${msg.guild.id}.kufur`);
  if (i) {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "ak",
      "amq"
    ];
    if (kufur.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();

          return msg
            .reply("Bu Sunucuda Küfür Filtresi Aktiftir.")
            .then(msg => msg.delete(3000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  const i = database.fetch(`${newMessage.guild.id}.kufur`);
  if (i) {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "ak",
      "amq"
    ];
    if (kufur.some(word => newMessage.content.includes(word))) {
      try {
        if (!newMessage.member.hasPermission("BAN_MEMBERS")) {
          newMessage.delete();

          return newMessage
            .reply("Bu Sunucuda Küfür Filtresi Aktiftir.")
            .then(msg => msg.delete(3000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});












 



client.on('ready', () => {
    client.channels.cache.get('812800997201281044').join();
})
  
 
 

   
 
 
    

  

  
 

 






 

 
  
 
   
   
   
 
  
   
 
  
 
       
  
  
  
   
   
 
 

 






client.on('guildMemberAdd', async member => {// can#0002

  const database = require('quick.db');
  if(member.user.bot) return;
  
  const kanal = member.guild.channels.cache.get(await database.fetch(`fake-channel.${member.guild.id}`) || 0);
  const zaman = await database.fetch(`fake-time.${member.guild.id}`);
  const rol = member.guild.roles.cache.get(await database.fetch(`fake-role.${member.guild.id}`) || 0);
  if(!kanal || !zaman || !rol) return;

  if(member.user.createdAt.getTime() < require('ms')(zaman)) {

    member.roles.add(rol.id);
    const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle('Fake Tetikleyici')
    .setDescription(`**${member.user.tag}** Fake sistemine takıldı!`);
    return kanal.send(embed);

  } else return;

});// codare 







client.login("NzcwNzM4MjM5ODA3MDI5MjU4.X5h76w.A58mn3HmFqpc4jKHw8v8BcsXjjs");