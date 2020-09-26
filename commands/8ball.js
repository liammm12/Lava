let cooldown = new Set()
let cdtime = 5

const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "8ball",
  description: "Get the answer to a yes or no question",
  usage: "!8ball <question>",
  execute(bot, message, args){
    let question = args.slice(0).join(" ");
    if (!question)
      return message.channel.send(`You did not state your question!`);
    else {
      let responses = [
        "Yes",
        "No",
        "idk",
        "Maybe",
        "Probably",
        "Never",
        "Not in a million years(which you'll never survive)"
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length)];
      let embed = new MessageEmbed()
        .setTitle(`8 Ball🎱`)
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic:true}))
        .setDescription(`${response}`)
        .setColor(`RANDOM`);
      if(question){
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
  },
};