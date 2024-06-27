const productRepositories = require('../repositories/products');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/asyncHandler');
const isValidObjId = require('../utils/validateObjId');
const findOfferPrice  = require('../services/offerPrice.js')



// get all products
const getAllProducts = asyncHandler(async (req,res,next)=>{
    const products = await productRepositories.getAllProducts();
    res.status(200).json({"success":true,"product":products});
})

// get products by id
const getProductById = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const isValid = isValidObjId(id);
    if(!isValid){
        next(new ErrorResponse(`Product doesnot exist with id ${id}`,404));
    }
    const product = await productRepositories.getProductById(id);
    res.status(200).json({"success":true,"product":product});
})

// create product
const createProduct = asyncHandler(async(req,res,next)=>{
    const {product_name,brand_name,price} = req.body;
    const offerPrice = findOfferPrice(price);
    const newProduct = await productRepositories.createProdcut(product_name,brand_name,price,offerPrice);
    if(newProduct){
        res.status(200).json({"success":true,"New Product":newProduct});
    }
    next(new ErrorResponse("Product not created",404));
})

// update product
const updateProduct = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const product_name = req.body;
    const brand_name = req.body;
    const validId= isValidObjId(id);
    if(validId){
        const updateProduct = await productRepositories.updateProduct(id,product_name,brand_name);
        const updated = await productRepositories.getProductById(id);
        res.status(200).json({"success":true,"Updated Product":updated});
    }
    next(new ErrorResponse(`Product not found with id ${id}`,404));
})

// delete product
const deleteProduct = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const exist = await productRepositories.getProductById(id);
    if(exist){
        await productRepositories.deleteProduct(id);
        res.status(200).json({"success":true,"message":`Successfully deleted product wth id ${id}`});
    }
    next(new ErrorResponse(`Product not found with id ${id}`,404));
})

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}