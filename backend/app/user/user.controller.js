const UserService = require('./user.service')
const errorHandler = require('../util/error/error.handler');
const chalk = require('chalk');

exports.signIn = async (req, res) => {
    console.log('*** USER SIGNIN')
    console.log('user', req.body)

    try {
        const user = await UserService.signIn(req.body);
        return res.status(201).json(user);
    } catch(error) {
        return errorHandler.handleError('AUTHENTICATION ERROR', res, error);
    }
}

exports.authenticate = async (req, res, next) => {
    console.log('*** User Controller authenticate  *** ')
    try {
        await UserService.authenticate(req, res, next)
        // next();
    } catch(error) {
        console.log('controller authenticate', error.message)
        return errorHandler.handleError('AUTHENTICATION ERROR', res, error);
    }    
}