const Order = require('../models/orders');

// get all orders
function getAllOrders(){
    return new Promise((resolve,reject)=>{
        Order.find().populate('item_name').then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// get order by id
function getOrderById(id){
    return new Promise((resolve,reject)=>{
        Order.findById(id).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// create order
function createOrder(orderObj){
    return new Promise((resolve,reject)=>{
        Order.create(orderObj).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// update order
function updateOrder(id,item_name,item_quantity,total){
    return new Promise((resolve,reject)=>{
        Order.findByIdAndUpdate(id,item_name,item_quantity,total).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// delete order
function deleteOrder(id){
    return new Promise((resolve,reject)=>{
        Order.findByIdAndDelete(id).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
}