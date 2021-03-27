module.exports = {
    kod: "kanalsil",
    async run (client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Buna iznin yok')
        let kanal = message.mentions.channels.first()
        kanal.delete()
        message.channel.send('Kanalı başarıyla sildim :)')
    }
}