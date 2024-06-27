const Brand = require('../models/brands');


// find all brands
function getAllBrands(){
    return new Promise((resolve,reject)=>{
        Brand.find().populate('category_name').then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// find brand by id
function getBrandById(id){
    return new Promise((resolve,reject)=>{
        Brand.findById(id).populate('category_name').exec().then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// create brand
function createBrand(brand_name,category_name){
    return new Promise((resolve,reject)=>{
        Brand.create({brand_name:brand_name,category_name:category_name}).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// update a brand
function updateBrand(id,brand_name,category_name){
    return new Promise((resolve,reject)=>{
        Brand.findByIdAndUpdate(id,brand_name,category_name).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// delete brand
function deleteBrand(id){
    return new Promise((resolve,reject)=>{
        Brand.findByIdAndDelete(id).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

module.exports = {
    getAllBrands,
    getBrandById,
    createBrand,
    updateBrand,
    deleteBrand
}