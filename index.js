const { 
    Client,
    GatewayIntentBits
} = require('discord.js')

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]})

client.on('ready', () => {
    console.log('ready to go')
}) 

client.on('messageCreate', (message) => {
    if(message.content === "にこてゃ！") {
        message.reply('にこてゃ')
    };

    if(message.content === "hey"){
        message.reply(":birds:")
    }
})

client.login(token)