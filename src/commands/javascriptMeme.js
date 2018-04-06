const CommandService = require('../CommandService.js');

CommandService.register('js', 'Quick Math.', message => {
    message.channel.send({
        files: [{
            attachment: 'https://i.imgur.com/i9MH9fA.png',
            name: 'file.jpg'
        }]
    }).catch(console.error);
});
