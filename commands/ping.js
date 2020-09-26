let cooldown = new Set()
let cdtime = 5

const Discord = require('discord.js');

module.exports = {
  name: "ping",
  description: "This command sends the latency of the bot",
  usage: "!ping",
  execute(bot, message, args){
  
    const embed = new Discord.MessageEmbed()
    .setTitle('🏓Ping')
    .setTimestamp()
    .setColor(0xff5349)
    .setDescription(`Pong! \`${Date.now() - message.createdTimestamp}\` ms`);
    
    if(cooldown.has(message.author.id)){
    return message.channel.send("Please slow down, you have used this command recently.")
  }
  cooldown.add(message.author.id)
  
  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdtime * 1000)
    
    message.channel.send(embed);
  }  
}