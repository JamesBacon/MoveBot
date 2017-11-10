const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ("!");

client.on('ready', ready => {
  console.log("I'm ready")
})


client.on('message', message => {
  if(message.content.startsWith(prefix + "move")) {
    if(message.author.id !== "268478587651358721") {
      var trieduser = message.author;
      botRepliesArray.forEach(function(item, index, array) {
        return message.channel.send("Authorized users only. " + trieduser)
        if(message.author.bot) return;
      })
    }
    let getMentions = message.mentions.members.array();
    let messageContent = message.content.split(" ").slice(-1)[0];
    
    getMentions.forEach(function(item, index, array) {
        var channel = message.guild.channels.find('name', messageContent);
        message.guild.member(item).setVoiceChannel(channel);
    });
  }
});

client.on('message', message => {
  if(message.author.id !== "268478587651358721") {
      var trieduser = message.author;
      botRepliesArray.forEach(function(item, index, array) {
        return message.channel.send("Authorized users only. " + trieduser)
        if(message.author.bot) return;
      })
    }
  if(message.content.startsWith(prefix + "moveall")) {
    var channelMembers;
    var channelNameMember;
    var getChannels = message.guild.channels.array();

    getChannels.forEach(function(item, index, array) {
      channelMembers = item.members.array();     
      channelMembers.forEach(function(item, index, array) {
        channelNameMember = item.id
        let messageContent = message.content.split(" ").slice(-1)[0];
        var channel = message.guild.channels.find('name', messageContent);
        message.guild.member(channelNameMember).setVoiceChannel(channel);
      })
    })
  }
});
client.login('Your Bot Token Here');
