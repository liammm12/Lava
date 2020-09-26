let cooldown = new Set()
let cdtime = 5

const Discord = require('discord.js')

module.exports = {
  name: "membercount",
  description: "This command sends the count of members in the guild the command was used in",
  usage: "!membercount/!mc",
  execute(message,args){
    const members = message.guild.members.cache;
     const botCount = message.guild.members.cache.filter(member => member.user.bot).size
    const humanCount = message.guild.members.cache.filter(member => !member.user.bot).size
            const countEmbed = new Discord.MessageEmbed()
                .setTitle('Member Count')
                .setAuthor(`${message.guild.name}`, message.guild.iconURL({dynamic: true}))
                .addFields(
                {name: "Members", value: message.guild.memberCount, inline: true},
                {name: "Humans", value: humanCount, inline: true},
                {name: "Bots", value: botCount, inline: true}
                )
                .addField('Status', [
				`**Online:** ${members.filter(member => member.presence.status === 'online').size}`,
				`**Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,
				`**Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`,
				`**Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,
				'\u200b'
			])
                .setTimestamp()
                .setColor(0xff5349);
    if(cooldown.has(message.author.id)){
    return message.channel.send("Please slow down, you have used this command recently.")
  }
  cooldown.add(message.author.id)
  
  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdtime * 1000)
            message.channel.send(countEmbed);
  }
}