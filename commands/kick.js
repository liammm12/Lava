const Discord = require('discord.js')

module.exports = {
  name: "kick",
  description: "This command kicks the mentioned user",
  usage: "!kick <@member/userID> <reason>",
  execute(message,args){
    const noperm2 = new Discord.MessageEmbed()
.setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
.setDescription('You do not have permission to use this command!')
.setColor(0xff5349);
    const kickSpecify = new Discord.MessageEmbed()
      .setTitle('Kick')
      .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
      .setDescription('You need to mention the user you want to kick!')
      .setColor(0xff5349);
    const user2 = message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    const reason = args.slice(1).join(" ")
    const highrole = new Discord.MessageEmbed()
    .setTitle('Kick')
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic:true}))
    .setDescription('You cannot kick that member because they have a higher role than you!')
    .setColor(0xff5349);
    
    if(!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send(noperm2);
    if(!message.guild.me.permissions.has("KICK_MEMBERS")) return message.channel.send("I do not have permission to kick members in this guild!")
    if(!user2) return message.channel.send(kickSpecify);
    const botRole = new Discord.MessageEmbed()
    .setTitle('Kick')
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic:true}))
    .setDescription('I cannot kick that member because they have a higher role than me!')
    .setColor(0xff5349);
    if(user2.roles.highest.position >= message.guild.me.roles.highest.position) {
      return message.channel.send(botRole)
    }
    if(user2.roles.highest.position >= message.member.roles.highest.position) {
      return message.channel.send(highrole)
    }
    
            if (user2) {
                if (message.member.permissions.has("KICK_MEMBERS")) {
                    const member = message.guild.member(user2);
                  
                    if (member) {
                        member
                            .kick({reason: reason})
                            .then(() => {
                            const kickmsg = new Discord.MessageEmbed()
                            .setTitle('Kick')
                            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
                            .setDescription(`Successfully kicked **<@${user2.user.id}>** for: ` + reason)
                            .setColor(0xff5349)
                            .setTimestamp();
                            message.channel.send(kickmsg)
                            }).then(
                        user2.send(`You were kicked from ${message.guild.name} by ${message.author}!`)
                        )
                    }
                }
            }
  }
}