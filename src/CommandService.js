class CommandService {
    constructor() {
        this.commands = new Map();
    }

    keys() {
        let keys = new Map();
        this.commands.forEach( (command, key) => keys.set(key, command.description) );

        return keys;
    }

    register(key, description, callback) {
        this.commands.set(key, {
            description: description,
            callback: callback
        });
    }

    has(key) {
        return this.commands.has(key);
    }

    run(key, message, args, client, Discord) {
        this.commands.get(key).callback(message, args, client, Discord);
    }
}

module.exports = new CommandService();
