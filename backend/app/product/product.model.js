const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name:String,
    producttype:String,
    brand:String,
    model:String,
    price:Number,
    list_price:Number,
    description:String,
    rating:String,
    sku:String,
    feature:[String],
    image:[String],
    images: {black:[], white:[], stainless:[]},
    specifications:{},   
});

mongoose.model('Product', ProductSchema, 'product');