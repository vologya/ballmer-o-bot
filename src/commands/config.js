const CommandService = require('../CommandService.js');

CommandService.register('nick', 'Change the username of the Bot.', (message, args, client) => {
    // if(!message.member || !message.member.hasPermission("Administrator"))
    if(!message.member || !message.member.roles.some(r=>["Administrator", "Moderator", "Dankó Pisták"].includes(r.name)) )
        return message.reply("Who the hell do you think you are?!");

    let username = args.join(" ");
    if ( !username )
        return message.reply('You must provide a valid username!');

    message.author.send("Remember: Changing usernames in Discord is heavily rate limited, with only 2 requests every hour. Use this sparingly!");
    client.user.setUsername(username)
        .then(user => message.channel.send('How do you like my new name? ( ͡° ͜ʖ ͡°)'))
        .catch(error => {
            console.error(error);
            message.channel.send('Something went wrong when changing the username :(');
        });
});

CommandService.register('avatar', 'Change the avatar of the Bot.', (message, args, client) => {
    if(!message.member || !message.member.hasPermission("Administrator"))
        return message.reply("Who the hell do you think you are?!");

    let avatar = args.join(" ");
    if ( !avatar )
        return message.reply('You must provide a valid avatar!');

    client.user.setAvatar(avatar)
        .then(user => message.channel.send('How does my new avatar look? (¬‿¬)'))
        .catch(error => {
            console.error(error);
            message.channel.send('Something went wrong when changing the avatar :(');
        });
});
