const mongoose = require('mongoose');

function isValidObjId(id){
    return mongoose.Types.ObjectId.isValid(id);
}

module.exports = isValidObjId;