let cooldown = new Set()
let cdtime = 5

const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  description: "This command sends the avatar of the mentioned user or the author's avatar if there isn't a mentioned user",
  usage:"!avatar/!av <@member>",
  execute(message, args){
        let user;
            if (message.mentions.members.first()) {
            user = message.mentions.users.first() ||
      message.guild.members.cache.get(args[0]);
    } else {
        user = message.author;
    }
        const member = message.guild.member(user)
            const avatarEmbed = new Discord.MessageEmbed()
                .setAuthor(`${user.tag}`, user.avatarURL({ dynamic: true, format: 'png'}))
                .setTitle("Avatar")
                .setColor(0xff5349)
                .setImage(user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }));
    if(cooldown.has(message.author.id)){
    return message.channel.send("Please slow down, you have used this command recently.")
  }
  cooldown.add(message.author.id)
  
  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdtime * 1000)
                message.channel.send(avatarEmbed);
  }
}