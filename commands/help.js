const Discord = require('discord.js');
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })

const { Client, MessageEmbed } = require('discord.js')

module.exports = {
    name: "help",
    alias: ['h'],

execute (client, message, args){

    const embedPrincipal = new Discord.MessageEmbed()
        .setTitle("Bienvenido al sistema de soporte del bot")
        .setDescription("A continuacion por favor reaccione al mensaje segun el apartado que quiera acceder")
        .setColor('BLACK')
        .setAuthor('Racks')

   message.channel.send({ embeds: [embedPrincipal] })


}

}
