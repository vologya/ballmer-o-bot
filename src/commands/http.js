const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const Discord = require('discord.js');
const CommandService = require('../CommandService.js');

CommandService.register('http', 'Get a brief description of an HTTP Status Code.', (message, args) => {
    let url = `https://httpstatuses.com/${args[0]}`;
    axios.get(url).then( response => {
        let dom = new JSDOM(response.data);
        let title = dom.window.document.querySelector('head>title').textContent;
        let description = dom.window.document.querySelector('head>meta[name="description"]').content;

        let embed = new Discord.RichEmbed()
            .setTitle(title)
            .setDescription(description)
            .setURL(url);
        message.channel.send(embed);
    }).catch( error => message.channel.send('Unknown Status Code.') );
});
