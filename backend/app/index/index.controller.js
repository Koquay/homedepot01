const chalk = require('chalk');

exports.get = (req, res) => {
    console.log(chalk.blue('INDEX CONTROLLER GET'))

    try {
        res.sendFile(process.env.INDEX)
    } catch(error) {
        throw error;
    }
}