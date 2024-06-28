const Order = require('../models/orders');

// get all orders
function getAllOrders(){
    return new Promise((resolve,reject)=>{
        Order.find().populate('order_line_item.item_name').then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// get order by id
function getOrderById(id){
    return new Promise((resolve,reject)=>{
        Order.findById(id).populate('order_line_item.item_name').then((result) => {
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
function updateOrder(id,user_id,order_line_item,grand_total){
    return new Promise((resolve,reject)=>{
        Order.findByIdAndUpdate(id,{user_id,order_line_item,grand_total}).then((result) => {
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