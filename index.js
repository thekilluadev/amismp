const Discord = require("discord.js");
const chalk = require('chalk');
const client = new Discord.Client();

const config = require("./config.json");
const tokenfile = require("./token.json");

client.on("ready", () => {
    console.log(chalk.magenta("Starting up..."));
    setTimeout(function(){
        console.log(chalk.magenta('Ami SMP bot made by ty-schnoor'));
        console.log(chalk.magenta("https://github.com/ty-schnoor/anismp/"));
            setTimeout(function(){
            console.log(chalk.magenta('Started up!'));
            },500);
    },500);

});

client.on("ready", () => {
    client.user.setPresence({
        game: {
            name: `over ${client.guilds.cache.size} members.`,
            type: 'WATCHING'
        },
        status: 'idle'
    })
})

client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send(`🏓 Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    } else
    if (command === 'embedsay') {
        let modrole = message.guild.roles.cache.get("676048227056877588");
        let messagecontent = args.slice(1).join(" ");
        let sendchannel = args[0];
        const embed = new Discord.MessageEmbed()
            .setTitle(`New Message`)
            .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL()}`)
            // .setColor(#fffff)
            .setDescription(`${messagecontent}`)
            .setTimestamp()
        if(message.member.roles.cache.some(r=>["Moderator", "hope"].includes(r.name)) ) {
            client.channels.cache.get(`${sendchannel}`).send(embed);
            console.log(chalk.blue(`Embed sent in ${sendchannel} by ${message.author.username}.`))
        } else {
            message.channel.send('yea so uh you don\'t have perms to use that lol')
        }
    } else
    if(command === "say"){
        let modrole = message.guild.roles.cache.get("676048227056877588");
        let text = args.join(" ");
        if(message.member.roles.cache.some(r=>["Moderator", "hope"].includes(r.name)) ) {
        message.delete();
        message.channel.send(text);
        } else {
            message.channel.send('yea so uh you don\'t have perms to use that lol')
        }
    } else
     if (command === "announcepublic") {
         let modrole = message.guild.roles.cache.get("676048227056877588");
         let messagecontent = args.slice(0).join(" ");
         const embed = new Discord.MessageEmbed()
             .setTitle(`New Announcement`)
             .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL()}`)
             // .setColor(#fffff)
             .setDescription(`${messagecontent}`)
             .setTimestamp()
         if(message.member.roles.cache.some(r=>["Moderator", "hope"].includes(r.name)) ) {
         client.channels.cache.get(`729379082344595466`).send(embed);
         console.log(chalk.blue(`Public announcement sent by ${message.author.username}.`))
         } else {
             message.channel.send('yea so uh you don\'t have perms to use that lol')
         }
    } else
     if (command === "announceprivate") {
         let modrole = message.guild.roles.cache.get("676048227056877588");
         let messagecontent = args.slice(0).join(" ");
         const embed = new Discord.MessageEmbed()
             .setTitle(`New Announcement`)
             .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL()}`)
             // .setColor(#fffff)
             .setDescription(`${messagecontent}`)
             .setTimestamp()
         if(message.member.roles.cache.some(r=>["Moderator", "hope"].includes(r.name)) ) {
             client.channels.cache.get(`722887365441486859`).send(embed);
         console.log(chalk.blue(`Private announcement sent by ${message.author.username}.`))
         } else {
             message.channel.send('yea so uh you don\'t have perms to use that lol')
         }
     } else
     if (command === "help") {
         const embed = new Discord.MessageEmbed()
             .setTitle("Ami SMP Bot Help Menu")
             .setAuthor(`made by hope#9727`, `https://cdn.discordapp.com/avatars/689872732649029668/6487c177036255316d22893002f52858.webp`)
             .addFields({ name: "!!ping", value: "Show the connection to the discord servers. \nUsage: !!ping"})
             .addFields({ name: "!!say", value: "Talk as the bot, because why not. \nUsage: !!say <message> \nLimited to Moderators and above."})
             .addFields({ name: "!!embedsay", value: "Talk as the bot, but fancier. \nUsage: !!embedsay <channelid> <message> \nLimited to Moderators and above."})
             .addFields({ name: "!!announcepublic", value: "Make a public announcement. \nUsage: !!announcepublic <message> \nLimited to Moderators and above."})
             .addFields({ name: "!!announceprivate", value: "Make a private announcement. \nUsage: !!announceprivate <message> \nLimited to Moderators and above."})
             .addFields({ name: "!!help", value: "This command ya dum dum. \nUsage: !!help"})
             .setTimestamp()
         message.channel.send(embed)
     }
});

client.login(tokenfile.token);
