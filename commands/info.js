const Discord = require('discord.js')

module.exports = {
  name: "info",
  description: "This command shows the information of the given command",
  usage: "!info <command>",
  execute(bot, message, args){
    if (!args[0]) return message.channel.send('Please specify the command you want the information of.');
    const help = new Discord.MessageEmbed()
    .setTitle('help')
    .addField('This command shows the information of the given command', '`!help <command>`')
    .setColor(0xff5349)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}));
    if (args[0] == 'help')message.channel.send(help);
    const eightball = new Discord.MessageEmbed()
    .setTitle('8ball')
    .addField('Get the answer to a yes or no question', '`!8ball <question>`')
    .setColor(0xff5349)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}));
    if (args[0] == '8ball')message.channel.send(eightball);
    const announce = new Discord.MessageEmbed()
    .setTitle('announce')
    .addField('This command turns a message to an embed', '`!announce <message>`')
    .setColor(0xff5349)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}));
    if (args[0] == 'announce')message.channel.send(announce);
    const avatar = new Discord.MessageEmbed()
    .setTitle('avatar')
    .addField('This command sends the avatar of the mentioned member or the author\'s avatar if there isn\'t a mentioned member', '`!avatar <@member>`')
    .setColor(0xff5349)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}));
    if (args[0] == 'avatar')message.channel.send(avatar);
    const ban = new Discord.MessageEmbed()
    .setTitle('ban')
    .addField('This command bans the mentioned member', '`!ban <@member/userID> <reason>`')
    .setColor(0xff5349)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}));
    if (args[0] == 'ban')message.channel.send(ban);
    const calculate = new Discord.MessageEmbed()
    .setTitle('calculate')
    .addField('Get the answer to a math problem', '`!calculate <equation>`')
    .setColor(0xff5349)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}));
    if (args[0] == 'calculate')message.channel.send(calculate);
    const createrole = new Discord.MessageEmbed()
    .setTitle('createrole')
    .addField('This command creates a role with the name of what you say', '`!createrole <role name>`')
    .setColor(0xff5349)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}));
    if (args[0] == 'createrole')message.channel.send(createrole);
    const dm = new Discord.MessageEmbed()
    .setTitle('dm')
    .addField('This command makes me dm a member in the guild', '`!dm <@member/userID> <message>`')
    .setColor(0xff5349)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}));
    if (args[0] == 'dm')message.channel.send(dm);
  }
}