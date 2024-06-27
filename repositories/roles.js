const Role = require('../models/roles');

// get all roles
function getAllRoles(){
    return new Promise((resolve,reject)=>{
        Role.find().then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// get roles by id
function getRoleById(id){
    return new Promise((resolve,reject)=>{
        Role.findById(id).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// create role
function createRole(role_name){
    return new Promise((resolve,reject)=>{
        Role.create(role_name).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// update role
function updateRole(id,role_name){
    return new Promise((resolve,reject)=>{
        Role.findByIdAndUpdate(id,role_name).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// delete role
function deleteRole(id){
    return new Promise((resolve,reject)=>{
        Role.findByIdAndDelete(id).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

module.exports = {
    getAllRoles,
    getRoleById,
    createRole,
    updateRole,
    deleteRole
}