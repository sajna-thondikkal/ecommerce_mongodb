const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
    brand_name:{
        require:true,
        type:String
    },
    category_name:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category'
    }
});
const Brand = mongoose.model('Brand',brandSchema);

module.exports = Brand;