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

client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send(`🏓 Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    } else
    if (command === 'embedsay') {
        let messagecontent = args.slice(1).join(" ");
        let sendchannel = args[0];
        const embed = new Discord.MessageEmbed()
            .setTitle(`New Message from ${message.author.username}`)
            .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL()}`)
            // .setColor(#fffff)
            .setDescription(`${messagecontent}`)
            .setThumbnail(`${message.author.displayAvatarURL()}`)
            .setTimestamp()
        client.channels.cache.get(`${sendchannel}`).send(embed);
        console.log(chalk.blue(`Embed sent in ${sendchannel} by ${message.author.username}.`))
    } else
    if(command === "say"){
        let text = args.join(" ");
        message.delete();
        message.channel.send(text);
    } else
     if (command === "announcepublic") {
         let messagecontent = args.slice(0).join(" ");
         const embed = new Discord.MessageEmbed()
             .setTitle(`New Announcement from ${message.author.username}`)
             .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL()}`)
             // .setColor(#fffff)
             .setDescription(`${messagecontent}`)
             .setThumbnail(`${message.author.displayAvatarURL()}`)
             .setTimestamp()
         client.channels.cache.get(`729379082344595466`).send(embed);
         console.log(chalk.blue(`Public announcement sent by ${message.author.username}.`))
    } else
     if (command === "announceprivate") {
         let messagecontent = args.slice(0).join(" ");
         const embed = new Discord.MessageEmbed()
             .setTitle(`New Announcement from ${message.author.username}`)
             .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL()}`)
             // .setColor(#fffff)
             .setDescription(`${messagecontent}`)
             .setThumbnail(`${message.author.displayAvatarURL()}`)
             .setTimestamp()
         client.channels.cache.get(`722887365441486859`).send(embed);
         console.log(chalk.blue(`Private announcement sent by ${message.author.username}.`))
     }
});

client.login(tokenfile.token);
