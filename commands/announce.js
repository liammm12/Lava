let cooldown = new Set()
let cdtime = 5

const Discord  = require('discord.js');

module.exports = {
  name: "announce",
  description: "This command turns a message to an embed",
  usage: "!announce <message>",
  execute(message, args){
    const noperm2 = new Discord.MessageEmbed()
.setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
.setDescription('You do not have permission to use this command!')
.setColor(0xff5349);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(noperm2);
  if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('I do not have the permission to do that command!');
  let msg = args.slice(0).join(" ");
  if(!msg) return message.channel.send('Cannot send blank messages');

  const announce = new Discord.MessageEmbed()
  .setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic: true, format: 'png'}))
  .setDescription(msg)
  .setColor(0xff5349)
  .setTimestamp();
    if(msg){
      if(cooldown.has(message.author.id)){
    return message.channel.send("Please slow down, you have used this command recently.")
  }
  cooldown.add(message.author.id)
  
  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdtime * 1000)
  message.channel.send(announce);
  }

    message.delete()


  }
}