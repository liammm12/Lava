let cooldown = new Set()
let cdtime = 5

const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {
    name: "calculate",
    description: "Get the answer to a math problem",
    usage: "!calculate 1+1",
    execute(message, args){

        if (!args[0]) return message.channel.send('Please provide an equation');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Please provide an equation')
        }

        const embed = new Discord.MessageEmbed()
        .setColor(0xff5349)
        .setTitle('Calculator')
        .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

        if(args.length){
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
}