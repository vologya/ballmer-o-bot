const CommandService = require('../CommandService.js');

CommandService.register('repo', (message, arguments) => {
    message.reply('https://github.com/vologya/ballmer-o-bot');
});
