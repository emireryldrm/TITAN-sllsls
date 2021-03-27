module.exports = {
    kod: "bayrak" ,
    async run (client, message, args) {
        const Discord = require('discord.js')
         const bayrak = ["https://1.bp.blogspot.com/-X-cXh6njzJs/V4jsjllCuPI/AAAAAAAAl_U/o6sUqYnD5cUFfsM5GrtAbzBMp7trMTnUQCLcB/s0/4k-ultrahd-turk-bayraklari-resimleri-1.jpg","https://cdn.hipwallpaper.com/i/31/83/nkR1UK.jpg","https://www.technopat.net/sosyal/eklenti/bayrak-1-jpg.19223/","https://www.beyoglu.net/galeri/wp-content/uploads/2020/08/Turk-Bayragi-En-Guzel-Resimleri-680x500.jpg","https://www.visne.co/wp-content/uploads/2017/11/Turk-Bayragi-Asker-Duvar-Kagidi-3.jpg","https://resimdiyari.com/_data/i/upload/2012/07/03/20120703001834-20f3150b-me.jpg","https://kuaza.com/wp-content/uploads/2015/09/Turk-bayraklari-rooteto1.jpg","https://besthqwallpapers.com/Uploads/30-4-2019/89526/thumb2-flag-of-turkey-4k-stone-texture-waves-texture-turkish-flag.jpg","https://lh3.googleusercontent.com/proxy/fC5CBI633U8k770ry0pw_kdP--8SYpJLBhCWRGrett_q-df6loNApmXpNcgWcfpf0uVYh44fjVCpFB8igu3TEHam6szBcuLLwxKdvTqevnujOjvBoEylNnae8CiI_U0h5ihuVPkWd0ZBLi3VsNkMWGBaAt1T5K5OByux6J0lAA","https://resimdiyari.com/_data/i/upload/2012/07/03/20120703001728-e2389bb3-me.jpg"]
        const bayraklar = bayrak[Math.floor(Math.random()*bayrak.length)];
        
        
        
        const bayrakresim = new Discord.MessageEmbed()
            .setURL()
        .setAuthor("Türk Bayrağı Resmi;")
        .setImage(`${bayraklar}`)
        .setColor("RANDOM");
        message.channel.send(bayrakresim)

    }
  }