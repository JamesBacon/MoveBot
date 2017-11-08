const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', ready => {
  console.log("I'm ready")
})


client.on('message', message => {
  if(message.content.startsWith("move")) {
    var getMentions = message.mentions.members.array();
    var messageContent = message.content.split(" ").slice(-1)[0];
    //var messageLast = parts.slice(-1)[0];
    
    getMentions.forEach(function(item, index, array) {
        var channel = message.guild.channels.find('name', messageContent);
        message.guild.member(item).setVoiceChannel(channel);
    });
  }
});

client.login('Your Bot Tocken here');