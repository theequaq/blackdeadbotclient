const client = require('blackdeadbotclient');
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
