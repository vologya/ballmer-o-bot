const CommandService = require('../CommandService.js');
const exec = require('child_process').exec;

CommandService.register('fortune', 'Print a random, hopefully interesting, adage.', (message, args) => {
    exec("fortune", (error, stdout, stderr) => { message.channel.send(stdout) });
});
