const CommandService = require('../CommandService.js');

CommandService.register('repo', 'The github repository.', message => {
    message.channel.send('https://github.com/vologya/ballmer-o-bot');
});
