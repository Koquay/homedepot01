require('./order.model');
const Order = require('mongoose').model('Order')

exports.placeOrder = async (orderData) => {
    try {
        const order = new Order(orderData);
        const newOrder = await Order.create(order);
        console.log('newOrder', newOrder);
        return newOrder;
    } catch(error) {
        throw error;
    }
}