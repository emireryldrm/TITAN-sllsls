module.exports = {
    kod: "köpek" ,
    async run (client, message, args) {
        const Discord = require('discord.js')
         const köpek = ["https://images.dog.ceo/breeds/bullterrier-staffordshire/n02093256_1309.jpg","https://images.dog.ceo/breeds/terrier-sealyham/n02095889_310.jpg","https://images.dog.ceo/breeds/dhole/n02115913_2542.jpg","https://images.dog.ceo/breeds/retriever-golden/n02099601_10.jpg","https://images.dog.ceo/breeds/puggle/IMG_080306.jpg","https://images.dog.ceo/breeds/redbone/n02090379_5493.jpg","https://images.dog.ceo/breeds/terrier-australian/n02096294_2118.jpg","https://images.dog.ceo/breeds/bulldog-english/jager-1.jpg","https://images.dog.ceo/breeds/pekinese/n02086079_12321.jpg","https://images.dog.ceo/breeds/sheepdog-english/n02105641_12816.jpg","https://images.dog.ceo/breeds/shihtzu/n02086240_2335.jpg"]
        const köpekler = köpek[Math.floor(Math.random()*köpek.length)];
        
        
        
        const köpekresim = new Discord.MessageEmbed()
        .setURL()
        .setAuthor("Köpek Resmi:")
        .setImage(`${köpekler}`)
        .setColor("RANDOM");
        message.channel.send(köpekresim)

    }
  }