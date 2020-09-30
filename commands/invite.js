let cooldown = new Set()
let cdtime = 5

module.exports = {
  name: "invite",
  description: "This command sends the link to invite me in your DMs",
  usage: "!invite",
  execute(Discord, message, args){
    const bot = new Discord.Client();
    if(cooldown.has(message.author.id)){
    return message.channel.send("Please slow down, you have used this command recently.")
  }
  cooldown.add(message.author.id)
  
  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdtime * 1000)
        const embed = new Discord.MessageEmbed()
        .setURL("https://discord.com/oauth2/authorize?client_id=747400285214998548&scope=bot&permissions=2146958847")
        .setTitle('Invite me')
        .setColor(0xff5349)
        .setFooter(`Lava#9014`);
        message.channel.send(embed)
  }
}