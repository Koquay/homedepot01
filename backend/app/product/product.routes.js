const ProductController = require('./product.controller')
const UserService = require('../user/user.service')

const router = require('express').Router();

router.get('/', ProductController.getProducts)
// router.get('/', UserService.authenticate, ProductController.getProducts)

module.exports = router;