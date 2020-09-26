module.exports = {
  name: "createrole",
  description: "This command creates a role with the name of what you say",
  usage: "!createrole <role name>",
  execute(Discord,bot,message,args){
    const noperm2 = new Discord.MessageEmbed()
.setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
.setDescription('You do not have permission to use this command!')
.setColor(0xff5349);
    if (!message.member.hasPermission("MANAGE_ROLES")){
      return message.channel.send(noperm2)
    };
    const rolename = args.slice(0).join(" ");
    const newEmbed = new Discord.MessageEmbed()
    .setTitle('Create Role')
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic:true}))
    .setDescription("Please specify what you want to name the role")
    .setColor(0xff5349);
    if (!rolename) {message.channel.send(newEmbed)};
    if (rolename){
    message.guild.roles.create({
      data: {
      name: rolename,
      color: "RANDOM"
      }
    })
    const embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
    .setTitle('Created Role')
    .setDescription(`Successfully created \`${rolename}\` role`)
    .setColor(0xff5349)
    .setTimestamp();
    message.channel.send(embed)
    };
    }
}