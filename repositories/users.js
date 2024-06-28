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

// get user role by user id
function getUserRoleByUserId(id){
    return new Promise((resolve,reject)=>{
        User.findById(id).populate('user_role').then((result) => {
            resolve(result.user_role.role_name);
        }).catch((err) => {
            reject(err);
        });
    })
}

// Login user or get user by user Name
function loginUser(user_name){
    return new Promise((resolve,reject)=>{
        User.findOne({user_name:user_name}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}


// SignUp user or create user
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
function updateUser(id,user_name,user_role,phone,address){
    return new Promise((resolve,reject)=>{
        User.findByIdAndUpdate(id,user_name,user_role,phone,address).then((result) => {
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
    deleteUser,
    loginUser,getUserRoleByUserId
}