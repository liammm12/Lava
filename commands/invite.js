let cooldown = new Set()
let cdtime = 5

module.exports = {
  name: "invite",
  description: "This command sends the link to invite me in your DMs",
  usage: "!invite",
  execute(message,args){
    if(cooldown.has(message.author.id)){
    return message.channel.send("Please slow down, you have used this command recently.")
  }
  cooldown.add(message.author.id)
  
  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdtime * 1000)
        message.author.send("https://discord.com/oauth2/authorize?client_id=747400285214998548&scope=bot&permissions=2146958847")
    message.reply("I sent the link to invite me in your DMs!")
  }
}