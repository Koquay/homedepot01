const User = require('./user.model');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const errorHandler = require('../util/error/error.handler');

exports.authenticate = async (req, res, next) => {
    const token = req.headers.token;
    console.log('token', token);
    console.log('req.headers', req.headers);

    try {
        await jwt.verify(token, process.env.SECRET)
        next();
    } catch (errorX) {        
        let error = new Error()
        error.statusCode = 401;
        error.message = 'TOKEN ERROR: You must be logged in to proceed.'        
        return errorHandler.handleError('user.service#authenticate', res, error);
        // throw error;
    }
}

exports.signIn = async (userData) => {
    try {
        let existingUser = await User.findOne({ email: userData.email });

        // existingUser = null;

        if (existingUser == null) {
            let error = new Error();
            error.message = 'Login failure 1. Please enter proper login information.';
            error.statusCode = 401;
            throw error;
        }

        if (await bcrypt.compare(userData.password, existingUser.password) == false) {
            let error = new Error();
            error.message = 'Login failure 2. Please enter proper login information.';
            error.statusCode = 401;
            throw error;
        }

        userData.token = await jwt.sign({ email: userData.email }, process.env.SECRET, { expiresIn: 3600 });
        delete userData.password;
        userData.gravatar = existingUser.gravatar;
        console.log('user logged in', userData);
        return userData;
    } catch (errorX) {
        let error = new Error()
        error.message = errorX.message
        error.statusCode = errorX.statusCode;
        throw error
    }
}

exports.register = async (userData) => {
    console.log('userData.name', userData.name)

    let user = await User.findOne({ email: userData.email });

    if (user) {
        let error = new Error()
        error.message = 'User with that email already exists'
        error.statusCode = 401;
        throw error
    }

    userData.gravatar = gravatar.url(userData.email, { s: '200', r: 'pg', d: 'mm' });

    let newUser = new User(userData);
    newUser.password = bcrypt.hashSync(newUser.password, 10);
    user = await newUser.save();

    let returnUser = JSON.parse(JSON.stringify(user))
    delete returnUser.password;
    returnUser.password = undefined;
    const payload = { id: returnUser.id, name: returnUser.name, avatar: returnUser.avatar };
    returnUser.token = jwt.sign(payload, process.env.SECRET, { expiresIn: 3600 });
    console.log('returnUser', returnUser)
    return returnUser;
}