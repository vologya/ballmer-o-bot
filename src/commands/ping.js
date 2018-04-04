const CommandService = require('../CommandService.js');

CommandService.register('ping', 'Basic ping utility.', (message, arguments) => {
    message.reply('pong');
});
