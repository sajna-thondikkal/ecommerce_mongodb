const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    category_name:{
        require:true,
        type:String
    }
});
const Category = mongoose.model('Category',categorySchema);

module.exports = Category;