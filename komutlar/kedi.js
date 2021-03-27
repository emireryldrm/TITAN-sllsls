module.exports = {
    kod: "kedi" ,
    async run (client, message, args) {
        const Discord = require('discord.js')
         const kedi = ["https://ichef.bbci.co.uk/news/640/cpsprodpb/16FA9/production/_92712149_gettyimages-480164327.jpg","https://i2.milimaj.com/i/milliyet/75/0x410/5f5a0216adcdeb115ce38d91.jpg","https://i4.hurimg.com/i/hurriyet/75/1200x675/5f2ebbaf0f25441490314a5f.jpg","https://im.haberturk.com/2019/05/23/ver1558622944/2473354_810x458.jpg","https://www.iyihisset.com/sites/default/files/yasa/kediler_hakkinda_az_bilinen_50_sasirtici_bilgi_0_1.jpg","https://alperiskender.com/wp-content/uploads/2016/10/lokumyatis-825x510.jpg","https://www.yeniasya.com.tr/Sites/YeniAsya/Upload/images/Content/2017/12/23/kedi.jpg","https://www.trthaber.com/resimler/1174000/1174272.jpg","https://img.piri.net/mnresize/840/-/resim/imagecrop/2019/04/03/03/40/resized_27a22-cb8b2b0eyavru.jpg"]
        const kediler = kedi[Math.floor(Math.random()*kedi.length)];
        
        
        
        const kediresim = new Discord.MessageEmbed()
            .setURL()
        .setAuthor("Kedi Resmi;")
        .setImage(`${kediler}`)
        .setColor("RANDOM");
        message.channel.send(kediresim)

    }
  }