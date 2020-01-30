const router = require('express').Router();
const UserController = require('./user.controller');

router.post('/', UserController.signIn)

module.exports = router;