const Product = require('../models/products');


// get all products
function getAllProducts(){
    return new Promise((resolve,reject)=>{
        Product.find().populate('brand_name').populate('category_name').then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// get product by id
function getProductById(id){
    return new Promise((resolve,reject)=>{
        Product.findById(id).populate('brand_name').populate('category_name').then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// create product
function createProdcut(product_name,brand_name,price,offerPrice){
    return new Promise((resolve,reject)=>{
        Product.create({product_name:product_name,brand_name:brand_name,price:price,offerPrice:offerPrice}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// update product
function updateProduct(id,product_name,brand_name,price,offerPrice){
    return new Promise((resolve,reject)=>{
        Product.findByIdAndUpdate(id,{product_name,brand_name,price,offerPrice}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// delete product
function deleteProduct(id){
    return new Promise((resolve,reject)=>{
        Product.findByIdAndDelete(id).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

module.exports = {
    getAllProducts,
    getProductById,
    createProdcut,
    updateProduct,
    deleteProduct
}