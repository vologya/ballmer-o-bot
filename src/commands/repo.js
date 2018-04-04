const CommandService = require('../CommandService.js');

CommandService.register('repo', (message, arguments) => {
    message.channel.send('https://github.com/vologya/ballmer-o-bot');
});
