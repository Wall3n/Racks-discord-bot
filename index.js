'use strict'
const Discord = require('discord.js');
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });
const { Client, Collection, Guild, MessageEmbed } = require('discord.js');
require('dotenv').config();

//Handler dependences
const fs = require('fs')

let prefix = '$'

client.on('messageCreate', async (message) => {

    //Bug awarn
    if(message.channel.type === 'dm') return;
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    //Transformador del mensaje
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    //Handler pt1
    client.commands = new Discord.Collection();
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    
    for(const file of commandFiles){
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
    }

    //Test command
    if(command === 'test'){
        message.reply('Todo en orden amigo')
    }
    
    //Prefix help command
    if(command === 'bot-prefix'){
        message.reply('El prefijo es el simbolo del capitalismo; El dollar $')
    }

    //Handler pt2
   let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command))
    if(cmd){
        cmd.execute(client, message, args)
    }
});

client.on('ready', async (lol) => {
    const statusArray = {
        name: 'Racks',
        type: 'LISTENING'
    }
    function presence(){
        client.user.setPresence({
            status: 'idle',
                activity: statusArray,
        })
    }
    presence();
    console.log('On air')
})

const token = process.env.DB_TOKEN;
client.login(token)
