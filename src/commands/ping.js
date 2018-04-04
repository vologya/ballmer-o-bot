const CommandService = require('../CommandService.js');

CommandService.register('ping', 'Basic ping utility.', message => {
    message.reply('pong');
});
