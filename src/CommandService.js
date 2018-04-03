class CommandService {
    constructor() {
        this.commands = new Map();
    }

    keys() {
        let keys = [];
        this.commands.forEach( ($, index) => keys.push(index) );

        return keys;
    }

    register(key, callback) {
        this.commands.set(key, callback);
    }

    has(key) {
        return this.commands.has(key);
    }

    run(key, message, args) {
        this.commands.get(key)(message,args);
    }
}

module.exports = new CommandService();
