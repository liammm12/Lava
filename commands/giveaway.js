const Discord = require('discord.js')

const ms = require('ms');

module.exports = {
    name: "giveaway",
    description: "This command lets you start giveaways",
    usage: "!giveaway <duration> <winners> <#channel/channelid> <prize>",
    execute(bot, message, args) {
      let msg = new Discord.MessageEmbed()
      .setTitle('Giveaway')
      .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
      .addField("Error! here is an example of a correct command", "`!giveaway <duration> <winners> <#channel/channelid> <prize>`")
      .setColor(0xff5349);
      const noperm2 = new Discord.MessageEmbed()
.setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
.setDescription('You do not have permission to use this command!')
.setColor(0xff5349);
      
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(noperm2);

        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[2]);

        if (!channel) return message.channel.send(msg);

        let giveawayDuration = args[0];

        if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send(msg);

        let giveawayWinners = args[1];

        if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send(msg);

        let giveawayPrize = args.slice(3).join(" ");

        if (!giveawayPrize) return message.channel.send(msg);

        bot.giveawaysManager.start(channel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayWinners,
            hostedBy: bot.config.hostedBy ? message.author : null,

            messages: {
                giveaway: (bot.config.everyoneMention ? "@everyone\n\n" : "") + "GIVEAWAY",
                giveawayEnded: (bot.config.everyoneMention ? "@everyone\n\n" : "") + "GIVEAWAY ENDED",
                timeRemaining: "Time remaining: **{duration}**",
                inviteToParticipate: "React with 🎉 to enter",
                winMessage: "Congratulations {winners}, you won **{prize}**",
                embedFooter: "Giveaway time!",
                noWinner: "Couldn't determine a winner",
                hostedBy: "Hosted by {user}",
                winners: "winner(s)",
                endedAt: "Ends at",
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: "hours",
                    days: "days",
                    pluralS: false
                }
            }
        })

        message.channel.send(`Giveaway starting in ${channel}`);
    }
}