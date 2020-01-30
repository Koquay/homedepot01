const router = require('express').Router();
const IndexController = require('./index.controller');

router.get('/', IndexController.get);

module.exports = router;