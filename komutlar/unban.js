module.exports = {
    kod: "unban",
    async run (client, message, args) {
        let id = args[0]
        if (!message.member.hasPermission('BAN_MEMBERS')) return;
        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return;
        if(isNaN(id)) return message.reply('Lütfen Geçerli Bir ID Giriniz');
        message.guild.fetchBans().then(ban => {
            if (ban.size === 0) return message.reply('Bu sunucuda hiç kimse yasaklanmamış');
        const banlanan = ban.find(b => b.user.id === id)
        if (!banlanan) return message.channel.send('Bu kişi bu sunucuda yasaklanmamışki');
        message.guild.members.unban(banlanan.user)
        message.reply('Bu kişinin yasağı başarıyla kaldırılmıştır.')
        })
    }
}