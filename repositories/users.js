const User = require('../models/users');

// get all users
function getAllUsers(){
    return new Promise((resolve,reject)=>{
        User.find().then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
};

// get user by user id
function getUserById(id){
    return new Promise((resolve,reject)=>{
        User.findById(id).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
};

// create user
function createUser(userobj){
    return new Promise((resolve,reject)=>{
        User.create(userobj).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}


// update user
function updateUser(id,user_name,role_id,phone,address){
    return new Promise((resolve,reject)=>{
        User.findByIdAndUpdate(id,user_name,role_id,phone,address).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        }); 
    })
}

// delete user
function deleteUser(id){
    return new Promise((resolve,reject)=>{
        User.findByIdAndDelete(id).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}