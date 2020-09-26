const Discord = require("discord.js");
const bot = new Discord.Client();
const noperm = new Discord.MessageEmbed()
.setDescription('You do not have permission to use this command!')
.setColor(0xff5349);

module.exports = {
  name: 'lockdown',
  description: 'This command locks down the channel the command was used in',
  usage: '!lockdown/!ld on/off',
  execute(message,args){
    if (!bot.lockit) bot.lockit = [];
    if (!message.member.hasPermission('MANAGE_CHANNELS'))
      return message.reply(noperm);
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("I do not have permission to manage channels in this guild!");
    
    message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    })
    const lockdown = new Discord.MessageEmbed()
    .setTitle('Lock down')
    .setDescription('Successfully locked down the channel!')
    .setColor(0xff5349)
    .setTimestamp()
    .setFooter(`${message.author.tag}`)
    message.channel.send(lockdown)
  }
}