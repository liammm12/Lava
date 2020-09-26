let cooldown = new Set()
let cdtime = 5

const Discord = require('discord.js')

module.exports = {
  name: "help",
  description: "This command gives a list of all the commands that the bot currently has",
  execute(message,args){
    const helpEmbed = new Discord.MessageEmbed()
      .setTitle('Command List')
      .addField('!help', '`This command gives a list of all the commands that the bot currently has`')
      .addField('!calculate', '`Get the answer to a simple math problem`')
      .addField('!avatar | !av', '`This command sends the avatar of the mentioned user or the author\'s avatar if there isn\'t a mentioned user`')
      .addField('!profile', '`This command sends the profile of the mentioned user or the author\'s profile if there isn\'t a mentioned user`')
      .addField('!invite | !inv', '`This command sends the link to invite me in your DMs`')
      .addField('!membercount | !mc', "`This command sends the count of members in the guild the command was used in`")
      .addField('!ping', "`This command sends the latency of the bot`")
      .addField('!dm', "`DMs a user in the guild`")
      .addField('!say', "`This command makes me say whatever you say`")
      .addField('!serverinfo', "`This command shows the information of the server the command was used in`")
      .setColor(0xff5349);
    
    const helpEmbed2 = new Discord.MessageEmbed()
      .setTitle('Moderator Commands')
      .addField('!kick', "`This command kicks the mentioned user`")
      .addField('!ban', "`This command bans the mentioned user`")
      .addField('!purge', "`This command bulk deletes a given amount of the most recent messages`")
      .addField('!mute', "`This command mutes the mentioned user for a given amount of time`")
      .addField('!lockdown on | !ld on', "`This command locks down the channel the command was used in`")
      .addField('!lockdown off | !ld off', "`This command lifts the lockdown of the channel the command was used in if it is locked down`")
      .setColor(0xff5349);
    
    const helpEmbed3 = new Discord.MessageEmbed()
      .setTitle('Administrator Commands')
      .addField('!announce', "`This command turns the author's message to an embed`")
      .addField('!createrole', "`This command creates a role with the name of what you say`")
      .addField('!role', "`This command gives the mentioned user the mentioned role`")
      .setTimestamp()
      .setColor(0xff5349);
    
    const helpEmbed4 = new Discord.MessageEmbed()
    .setTitle('Giveaway Commands')
    .addField('!giveaway', "`This command lets you start giveaways`")
    .addField('!reroll', "`This command rerolls the giveaway of the given message id`")
    .setColor(0xff5349);
    if(cooldown.has(message.author.id)){
    return message.channel.send("Please slow down, you have used this command recently.")
  }
  cooldown.add(message.author.id)
  
  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdtime * 1000)
    message.author.send(helpEmbed).then (
    message.author.send(helpEmbed2)
    ) .then (
    message.author.send(helpEmbed3)
    ) .then (
      message.author.send(helpEmbed4)
    ) .then (
    message.reply('I sent the list of commands in your DMs')
    );
  }
}