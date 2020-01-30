const OrderController = require('./order.controller')
const router = require('express').Router();

router.post('/', OrderController.placeOrder);

module.exports = router;