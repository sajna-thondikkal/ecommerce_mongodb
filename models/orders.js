const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    item_name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    item_quantity:{
        require:true,
        type:Number
    },
    item_price:{
        require:true,
        type:Number
    }

})


const orderSchema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    order_line_item:[itemSchema],
    grand_total:{
        require:true,
        type:Number
    }
})
const Order = mongoose.model('Order',orderSchema);

module.exports = Order;