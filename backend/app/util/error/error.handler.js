const chalk = require('chalk');

exports.handleError = (location, res, error) => {
    console.log(chalk.red('ERROR HANDLER:'));
    console.log(chalk.red('Error Location:', location));
    console.log('Error:', error);
    console.log('Error statusCode:', error.statusCode);
    
    return res.status(error.statusCode).json(error);
}