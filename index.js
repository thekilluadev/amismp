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
        let channel = args[0];
        let user = message.author
        const embed = new Discord.MessageEmbed()
            .setTitle(`New Message from ${message.author}`)
            .setAuthor(`${message.author}`, `${message.author.displayAvatarURL()}`)
            // .setColor(#fffff)
            .setDescription(`${messagecontent}`)
            .setThumbnail(`${message.author.displayAvatarURL()}`)
            .setTimestamp()
        client.channels.cache.get(channel).send(embed);
    } else
    if(command === "say"){
        let text = args.join(" ");
        message.delete();
        message.channel.send(text);
    } /* else
     if (command === "announce" {
        let message = args.slice(1).join(" ");
        const embed = new Discord.MessageEmbed()
            .setTitle(`New Announcement from ${message.author.name}`)
            .setAuthor(`${message.author.username}`, `${message.author.iron_url}`)
            .setColor(fffff)
            .setDescription(`${message}`)
            .setThumbnail("https://i.imgur.com/")
            .setTimestamp()
        msg.guild.channels.cache.find(i => i.name === "announcements").send(embed)
    } */
});

client.login(tokenfile.token);
