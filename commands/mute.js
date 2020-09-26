const ms = require('ms');
const Discord = require('discord.js');

module.exports = {
  name: "mute",
  description: "This command mutes the mentioned user for a given amount of time",
  usage: "!mute <@member/userID> <duration>",
  execute (message,args){
    const highrole = new Discord.MessageEmbed()
    .setTitle('Mute')
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic:true}))
    .setDescription('You cannot mute that member because they have a higher role than you!')
    .setColor(0xff5349);
    
      const noperm2 = new Discord.MessageEmbed()
.setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
.setDescription('You do not have permission to use this command!')
.setColor(0xff5349);
    if (!message.member.hasPermission('MUTE_MEMBERS'))
      return message.channel.send(noperm2)
    const muteSpecify = new Discord.MessageEmbed()
      .setTitle('Mute')
      .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
      .setDescription('You need to mention the user you want to mute!')
      .setColor(0xff5349);
    const user = message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
            if(!user) return message.channel.send(muteSpecify)
    const botRole = new Discord.MessageEmbed()
    .setTitle('Mute')
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic:true}))
    .setDescription('I cannot mute that member because they have a higher role than me!')
    .setColor(0xff5349);
    if(user.roles.highest.position >= message.guild.me.roles.highest.position) {
      return message.channel.send(botRole)
    }
    if(user.roles.highest.position >= message.member.roles.highest.position) {
      return message.channel.send(highrole)
    }
 
            const role = message.guild.roles.cache.find(role => role.name === "Muted");
           
            if(!role) {return message.guild.roles.create({
            data: {
              name: 'Muted',
              color: '0x818386',
              }
          }).then (
            message.channel.updateOverwrite(message.channel.guild.roles.Muted, {SEND_MESSAGES : false})
            )
                      }
 
            const time = args[1];
            if(!time){
                return message.reply("You didnt specify a time frame!");
            }
       const muteEmbed = new Discord.MessageEmbed()
       .setTitle('Mute')
       .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, format: 'png'}))
       .setDescription(`Successfully muted <@${user.user.id}> for ${ms(ms(time))}`)
       .setColor(0xff5349) 
       .setTimestamp();
 
            user.roles.add(role.id)
            message.channel.send(muteEmbed).then(
            message.delete()
            )
 
            setTimeout(function(){
                
                user.roles.remove(role.id);
              const unmutedEmbed = new Discord.MessageEmbed()
              .setTitle('Unmuted')
              .setDescription(`<@${user.user.id}> has now been unmuted.`)
              .setColor(0xff5349)
              .setTimestamp();
                message.channel.send(unmutedEmbed)
            }, ms(time));
    
  }
}