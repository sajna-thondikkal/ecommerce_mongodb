const categoryRepositories = require('../repositories/categories');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/asyncHandler');

// find all categories
const findAllCategories = asyncHandler(async(req,res,next)=>{
    const categories = await categoryRepositories.findAllCategories()
    res.status(200).json({"success":true,"Data":categories});
})

// find category by id
const findCategoryById = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const category = await categoryRepositories.findCategoryById(id);
    if(category){
        return res.status(200).json({"success":true,"Data":category});
    }
    next(new ErrorResponse("Category not found",404));

})

// create category
const createCategory = asyncHandler(async(req,res,next)=>{
    const category_name = req.body;
    const new_category = await categoryRepositories.createCategory(category_name);
    if(new_category){
        res.status(200).json({"success":true,"Data":new_category});
    }
    next(new ErrorResponse("Category not created",404));

});

// update category
const updateCategory = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const category_name = req.body;
    const ifexist = await categoryRepositories.findCategoryById(id);
    if(ifexist){
        const update = await categoryRepositories.updateCategory(id,category_name);
        const updated = await categoryRepositories.findCategoryById(id);
        res.status(200).json({"success":true,"data":updated});
    }
    next(new ErrorResponse("Category not found",404));

})

// delete category
const deleteCategory = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const deleted = await categoryRepositories.deleteCategory(id);
    if(deleted){
        return res.status(200).json({"success":true,"message":`successfully deleted category with id ${id}`});
    }
    next(new ErrorResponse("Category not found",404));

})

module.exports = {
    createCategory,
    findAllCategories,
    findCategoryById,
    updateCategory,
    deleteCategory
}