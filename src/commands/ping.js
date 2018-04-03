const CommandService = require('../CommandService.js');

CommandService.register('ping', (message, arguments) => {
    message.reply('pong');
});
