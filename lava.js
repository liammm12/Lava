const Discord = require("discord.js");
const moment = require('moment')
const fs = require('fs')

const bot = new Discord.Client({
  disableMentions: ("everyone"),
});

const cooldown = new Set()
const cdtime = 5

const prefix = '!';
  const config = require('./config.json');
bot.config = config;

bot.login('NzQ3NDAwMjg1MjE0OTk4NTQ4.X0OUwg.ksRXJdK01Rwzwv4T2ZDD0YbQiSU')

const { GiveawaysManager } = require('discord-giveaways');

bot.giveawaysManager = new GiveawaysManager(bot, {
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
        embedColor: "#FF0000",
        reaction: "🎉"
      
      
      //.then(r => {
      
    }
});
  
const db = require('quick.db');
const { send } = require("process");

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  
  bot.commands.set(command.name, command);
}

bot.once('ready', () => {
    console.log('Successfully connected "Lava" to Discord!');
    bot.user.setActivity(`${bot.guilds.cache.size.toLocaleString()} servers`, {type: 'WATCHING'}).catch(console.error);
});
bot.snipe = new Map()

bot.on("messageDelete", async(message,channel) => {
    if(message.author.bot) return;
    if(!message.guild) return;
    bot.snipe.set(message.channel.id, {
        msg:message.content,
        user:message.author.tag,
        pfp:message.author.displayAvatarURL({dynamic: true}),
        date: new Date().toLocaleString({
          timeStyle:"short"
        }),
        image:message.attachments.first() ? message.attachments.first().proxyURL : null
        
    })
})
bot.on("message", message => {
    if (message.content.match(new RegExp(`^<@!?${bot.user.id}>( |)$`))) {
        let embed = new Discord.MessageEmbed()
            .setColor(0xff5349)
            .setDescription(`My prefix is \`${prefix}\``)
            
         message.channel.send(embed);
    }
})
bot.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  if(message.author.bot || message.channel.type === "dm") return;
  
    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
  if (message.content.startsWith(prefix + 'ping')){
      bot.commands.get('ping').execute(bot, message, args);  
  } else if
    
    (command == 'purge'){
      bot.commands.get('purge').execute(message, args);
  } else if
    
    (command == 'avatar' || command == 'av'){
      bot.commands.get('avatar').execute(message, args);
  } else if
    
    (command == 'profile'){
      bot.commands.get('profile').execute(message, args);
  } else if
    
    (command == 'serverinfo'){
      bot.commands.get('serverinfo').execute(bot, message, args);
  } else if
    
    (command == 'membercount' || command == 'mc'){
      bot.commands.get('membercount').execute(message, args);
  } else if
    
    (command == 'invite' || command == 'inv'){
      bot.commands.get('invite').execute(Discord, message, args);
  } else if
      
    (command == 'kick'){
      bot.commands.get('kick').execute(message, args);
  } else if
     (command == 'ban'){
      bot.commands.get('ban').execute(message, args);
  } else if
    
    (command == 'help'){
      bot.commands.get('help').execute(message, args);
  } else if
    
    (command == 'lockdown' || command == 'ld') {
      if (!args.length) {
        return message.channel.send('You did not specify if you wanted to turn it on or off!')
      } else if (args[0] === 'on') {
        bot.commands.get('lockdown').execute(message, args);
      } else if (args[0] === 'off') {
        bot.commands.get('unlockdown').execute(message, args);
      }
    } else if
      
      (command == 'say'){
        bot.commands.get('say').execute(message, args);
    } else if
      
      (command == 'createrole'){
        bot.commands.get('createrole').execute(Discord,bot,message, args);
    } else if
      
      (command == 'mute'){
        bot.commands.get('mute').execute(message, args);
    } else if
      
      (command == 'calculate'){
        bot.commands.get('calculate').execute(message, args);
    } else if
      
      (command == 'announce'){
        bot.commands.get('announce').execute(message, args);
    } else if
      
      (command == 'snipe'){
        bot.commands.get('snipe').execute(bot, message, args);
    } else if
      
      (command == 'stats'){
        bot.commands.get('stats').execute(bot, message, args);
    } else if
      
      (command == 'dm'){
        bot.commands.get('dm').execute(bot, message, args);
    } else if
      
      (command == '8ball'){
        bot.commands.get('8ball').execute(bot, message, args);
    } else if
      
      (command == 'role'){
        bot.commands.get('role').execute(bot, message, args);
    } else if
      
      (command == 'unban'){
        bot.commands.get('unban').execute(bot, message, args);
    } else if
      
      (command == 'giveaway'){
        bot.commands.get('giveaway').execute(bot, message, args);
    } else if
      
      (command == 'reroll'){
        bot.commands.get('reroll').execute(bot, message, args);
    } else if
      
      (command == 'info'){
        bot.commands.get('info').execute(bot, message, args);
    } else if
      
      (command == 'setnick'){
        bot.commands.get('setnick').execute(bot, message, args);
    };
  })