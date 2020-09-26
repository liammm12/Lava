const Discord = require('discord.js')

module.exports = {
  name: "ban",
  description: "This command bans the mentioned user",
  usage: "!ban <@member/userID> <reason>",
  execute(message,args){
    const noperm2 = new Discord.MessageEmbed()
.setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
.setDescription('You do not have permission to use this command!')
.setColor(0xff5349);
    const highrole = new Discord.MessageEmbed()
    .setTitle('Ban')
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic:true}))
    .setDescription('You cannot ban that member because they have a higher role than you!')
    .setColor(0xff5349);
    const banSpecify = new Discord.MessageEmbed()
      .setTitle('Ban')
      .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
      .setDescription('You need to mention the user you want to ban!')
      .setColor(0xff5349);
    const banEmbed = new Discord.MessageEmbed()
            const banUser = message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send(noperm2);
    if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.channel.send("I do not have permission to ban members in this guild!");
    if(!banUser) return message.channel.send(banSpecify);
    const botRole = new Discord.MessageEmbed()
    .setTitle('Ban')
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic:true}))
    .setDescription('I cannot ban that member because they have a higher role than me!')
    .setColor(0xff5349);
    if(banUser.roles.highest.position >= message.guild.me.roles.highest.position) {
      return message.channel.send(botRole)
    }
    if(banUser.roles.highest.position >= message.member.roles.highest.position) {
      return message.channel.send(highrole)  
    }
            if (banUser) {
                if (message.member.permissions.has("BAN_MEMBERS")) {
                    const member = message.guild.member(banUser);
let reason = args.slice(1).join(" ");
                    if (member) {
                      const banEmbed2 = new Discord.MessageEmbed()
                      .setTitle('Ban')
                      .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
                      .setDescription(`Successfully banned <@${banUser.user.id}>`)
                      .setColor(0xff5349)
                      .setTimestamp();
                        member.ban({ reason: reason }).then();
                        return message.channel.send(banEmbed2).then
(
banUser.send(`You were banned from **${message.guild.name}** for: ` + reason)
);
                    }
                }
            }
  }
} 