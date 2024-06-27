const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    product_name:{
        require:true,
        type:String
    },
    category_name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    brand_name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Brand'
    },
    price:{
        require:true,
        type:Number
    },
    offerPrice:{
        require:true,
        type:Number
    }
})

const Product = mongoose.model('Product',productSchema);

module.exports = Product;