const Discord = require("discord.js");
const chalk = require('chalk');
const client = new Discord.Client();
let prefix = "!";

const config = require("./config.json");
const tokenfile = require("./token.json");

client.on("ready", () => {
    console.log(chalk.magenta("Starting up..."));
    setTimeout(function(){
        console.log(chalk.magenta('AniSmp bot made by ty-schnoor'));
    },500);
    console.log(chalk.magenta("https://github.com/ty-schnoor/anismp/"));
});

client.on("message", (message) => {
    // Exit and stop if the prefix is not there or if user is a bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("pong!");
    } else
    if (message.content.startsWith(prefix + "foo")) {
        message.channel.send("bar!");
    }
});

client.login(tokenfile.token);