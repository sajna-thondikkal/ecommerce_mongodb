const brandRepositories = require('../repositories/brands.js');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/asyncHandler');

// get all brands
const getAllBrands = asyncHandler(async(req,res,next)=>{
    const brands = await brandRepositories.getAllBrands();
    res.status(200).json({"success":true,"All Brands":brands});
})

// get brands by id
const getBrandById = asyncHandler(async(req,res,next)=>{
    const id = req.params.id
    const brand = await brandRepositories.getBrandById(id);
    if(brand){
        return res.status(200).json({"success":true,"Brand":brand});
    }
    next(new ErrorResponse(`Brand not found with id ${id}`,404));
})

// create brand
const createBrand = asyncHandler(async (req,res,next)=>{
    const {brand_name,category_name} = req.body;
    const newBrand = await brandRepositories.createBrand(brand_name,category_name);
    if(newBrand){
        return res.status(200).json({"success":true,"Brand":newBrand});
    }
    next(new ErrorResponse(`Brand not found with id ${id}`,404));
})

// update brand
const updateBrand = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    const brand_name = req.body;
    const category_name = req.body;
    const ifExist = await brandRepositories.getBrandById(id);
    if(ifExist){
        const updatebrand = await brandRepositories.updateBrand(id,brand_name,category_name);
        const updated = await brandRepositories.getBrandById(id);
        res.status(200).json({"success":true,"Updated Brand":updated});
    }
    next(new ErrorResponse(`Brand not found with id ${id}`,404));
})

// delete brand
const deleteBrand = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    const deleted = await brandRepositories.deleteBrand(id);
    if(deleted){
        res.status(200).json({"success":true,"message":`Successfully deleted brand with id ${id}`});
    }
    next(new ErrorResponse(`Brand not found with id ${id}`,404));
})

module.exports = {
    getAllBrands,
    getBrandById,
    createBrand,
    updateBrand,
    deleteBrand
}