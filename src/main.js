const Discord = require('discord.js');
const client = new Discord.Client();
const CommandService = require('./CommandService.js');
require('auto-load')('src/commands');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
    if (message.content.substring(0, 1) == "!") {
        let args = message.content.substring(1).split(" ");
        let command = args[0];
        args = args.splice(1);

        if ( ['', 'help', 'info', 'list', 'commands'].indexOf(command) >= 0 ) {
            var embed = new Discord.RichEmbed()
                .setTitle('List of Available Commands');
            CommandService.keys().forEach( (description, key) => embed.addField(`!${key}`, description) );
            message.channel.send(embed);
            return;
        }

        if ( CommandService.has(command) ) {
            CommandService.run(command, message, args);
        }
    }
});

let auth = require("./auth.json");
client.login(auth.token);
