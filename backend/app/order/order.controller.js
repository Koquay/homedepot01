const OrderService = require('./order.service');

exports.placeOrder = async (req, res) => {
    console.log('place order')
    
    try {
        const order = await OrderService.placeOrder(req.body);
        console.log('order', order)
        res.status(201).json(order);
    } catch(error) {
        throw error;
    }
}