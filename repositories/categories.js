const Category = require('../models/categories');

// find all categories
function findAllCategories(){
    return new Promise((resolve,reject)=>{
        Category.find().then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

function findCategoryById(id){
    return new Promise((resolve,reject)=>{
        Category.findById(id).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// create category
function createCategory(category_name){
    return new Promise((resolve,reject)=>{
        Category.create(category_name).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

// update category
function updateCategory(id,category_name){
    return new Promise((resolve,reject)=>{
        Category.findByIdAndUpdate(id,category_name).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}
// delete category
function deleteCategory(id){
    return new Promise((resolve,reject)=>{
        Category.findByIdAndDelete(id).then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
    })
}

module.exports = {
    findAllCategories,
    createCategory,
    findCategoryById,
    updateCategory,
    deleteCategory
}