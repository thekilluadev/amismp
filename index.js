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
    // Exit and stop if the prefix is not there or if user is a bot
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    if (message.content.startsWith(config.prefix + "ping")) {
        message.channel.send("pong!");
    } else
    if (message.content.startsWith(config.prefix + "foo")) {
        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
});

client.login(tokenfile.token);