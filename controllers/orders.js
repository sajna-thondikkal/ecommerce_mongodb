const orderRepositories = require('../repositories/orders');
const productRepository = require('../repositories/products');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/asyncHandler');
const findPrice = require('../services/findPrice');

// get all orders
const getAllOrders = asyncHandler(async(req,res,next)=>{
    const orders = await orderRepositories.getAllOrders();
    res.status(200).json({"success":true,"orders":orders});
})

// get order by id
const getOrderById = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const order = await orderRepositories.getOrderById(id);
    if(order){
        res.status(200).json({"success":true,"order":order});
    }
})

// create order
const createOrder = asyncHandler(async(req,res,next)=>{
    const {item_name,item_quantity} = req.body;
    const price = await productRepository.getProductById(item_name);
    const total = findPrice(price.price,item_quantity);
    const newOrder = await orderRepositories.createOrder({item_name,item_quantity,total:total});
    if(newOrder){
        res.status(200).json({"success":true,"New Order":newOrder});
    }
    next(new ErrorResponse("order not created",404));

})

// update order
const updateOrder = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const item_name = req.body;
    const item_quantity = req.body;
    const price = await productRepository.getProductById(item_name);
    const total = findPrice(price.price,item_quantity);
    const ifExist = await orderRepositories.getOrderById(id);
    if(ifExist){
        const updateOrder = await orderRepositories.updateOrder(id,item_name,item_quantity,total);
        const updated = await orderRepositories.getOrderById(id);
        res.status(200).json({"Success":true,"Updated":updated});
    }
    next(new ErrorResponse("Order not updated",404));
})

// delete order
const deleteOrder = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const ifExist = await orderRepositories.getOrderById(id);
    if(ifExist){
        await orderRepositories.deleteOrder(id);
        res.status(200).json({"success":true,"Message":`uccessfully deleted order with id ${id}`});
    }
    next(new ErrorResponse("Order not deleted"));
})

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
}