const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeliverySchema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    shippingAddress:String,
    zipCode:String,
    cityState:String,
    useAsBillingAddress:Boolean,
    deliveryDate:Date,
    specialInstruction:String
}, {_id: false})

const PaymentSchema = new Schema({
    paymentType:String,
    cardNumber:String,
    expMonth:String,
    expYear:String,
    cw:String,    
}, {_id: false})

const OrderItemSchema = new Schema({
    productId:String,
    quantity:Number
}, {_id: false})

const OrderSchema = new Schema({
    delivery:DeliverySchema,
    payment:PaymentSchema,
    orderItems:[OrderItemSchema],
    ceatedOn: {
        type: Date,
        default: Date.now
    }
}, {_id: true});

mongoose.model('Order', OrderSchema, 'order')