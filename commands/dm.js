let cooldown = new Set()
let cdtime = 5

module.exports = {
  name: "dm",
  description: "This command makes me DM a user in the guild",
  usage: "!dm <@member/userID> <message>",
  execute (bot, message, args) {
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user)
      return message.channel.send(
        `You did not mention a user, or you gave an invalid id`
      );
    if (!args.slice(1).join(" "))
      return message.channel.send("You did not specify your message");
    if(user, args.slice(1).join(" ")){
      if(cooldown.has(message.author.id)){
    return message.channel.send("Please slow down, you have used this command recently.")
  }
  cooldown.add(message.author.id)
  
  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdtime * 1000)
    user.user.send(` ${args.slice(1).join(" ")} || Sent by ${message.author.tag}`)
      .then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
      message.delete();
    }else {'That user cannot be DMed!'}
  },
}