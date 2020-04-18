const client = require('blackdeadbotclient');
//You do not need to make a client!
//Discord.js=>  const discord = require('discord.js');
//Discord.js=>  const client = new discord.Client();
//Discord.js=>(for command handler already added as collection!)  client.commands = new discord.Collection();
console.log("Discord.js: " + client.version + "/ BlackDeadBotClient: " + client.v)
client.login(process.env.TOKEN);


//You can add a handler!




client.once('ready', ()=>{
console.log('READY!!');
});
client.on('message', message =>{
      if(message.author.bot) return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    if (!message.content.startsWith(`${prefix}ping`)) return message.channel.send("pong");
});
