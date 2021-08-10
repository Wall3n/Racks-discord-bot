const Discord = require('discord.js');
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })

const { Client, MessageEmbed, guild } = require('discord.js')

module.exports = {
    name: "help",
    alias: ['h'],

execute (client, message, args){

    const embedPrincipal = new Discord.MessageEmbed()
        .setTitle("Bienvenido al centro de ayuda")
        .setDescription("A continuacion por favor ejecute el comando segun el apartado que desee")
        .setFields(
            { name: 'Reacciones', value: '\n\n***:keyboard: Diccionario de comandos ***\n\n***:scroll:  Normas y reglas del servidor ***\n\n***:clock3: Horarios de stream ***'}
        )
        .setColor('BLACK')
        .setFooter('Para mas soporte contacte con el canal de <#874226645823791174>')
        
    const embedComandos = new Discord.MessageEmbed()
        .setTitle('Diccionario de comandos')
        .setDescription('**$ping** *pong*')
        .setAuthor('Main developer')

    message.channel.send({ embeds: embedPrincipal}).then( sentMessage => {
        sentMessage.react('⌨️')
        sentMessage.react('📜')
        sentMessage.react('🕒')

        sentMessage.awaitReactions((reaction, user) => {
            if(message.author.id !== user.id) return;
            if(reaction.emoji.name === '📜'){
                sentMessage.edit(embedComandos)
            }
        })
    })
   

}

}


