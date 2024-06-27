const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    role_name:{
        require:true,
        type:String
    }
});

const Role = mongoose.model('Role',roleSchema);
module.exports = Role;