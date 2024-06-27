const mongoose = require('mongoose');


const addresSchema = new mongoose.Schema({
    address_line_1:{
        require:true,
        type:String
    },
    address_line_2:{
        require:true,
        type:String
    }
})

// const Address = mongoose.model('Address',addresSchema);

const userSchema = new mongoose.Schema({
    user_name:{
        require:true,
        type:String
    },
    password:{
        require:true,
        type:String
    },
    user_role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Role'
    },
    phone:{
        require:true,
        type:Number
    },
    address:addresSchema
})

const User = mongoose.model('User',userSchema);

module.exports = User