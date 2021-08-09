const Discord = require('discord.js')
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })

const { Client, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ping',
    alias: [],

execute (client, message, args){
    
    message.channel.send('pong')

}

}
