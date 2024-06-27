const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    item_name:{
        require:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    item_quantity:{
        require:true,
        type:Number,
    },
    total:{
        require:true,
        type:Number
    }
})
const Order = mongoose.model('Order',orderSchema);

module.exports = Order;