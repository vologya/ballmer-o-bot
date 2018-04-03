const CommandService = require('../CommandService.js');
const exec = require('child_process').exec;

CommandService.register('fortune', (message, args) => {
    exec("fortune", (error, stdout, stderr) => { message.channel.send(stdout) });
});
