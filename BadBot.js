const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', ready => {
  console.log("I'm ready")
})


client.on('message', message => {
  if(message.content.startsWith("move")) {
    var getMentions = message.mentions.members.array();
    var messageContent = message.content;
    var parts = messageContent.split(" ");
    var messageLast = parts.slice(-1)[0];

    getMentions.forEach(function(item, index, array) {
        var channel = message.guild.channels.find('name', messageLast);
        message.guild.member(item).setVoiceChannel(channel);
    });
  }
});

client.login('Place your bots token here');