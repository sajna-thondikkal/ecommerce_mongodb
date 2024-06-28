const orderRepositories = require('../repositories/orders');
const productRepository = require('../repositories/products');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/asyncHandler');
const findPrice = require('../services/findPrice');
const grandTotal = require('../services/grand_total');
const grand = require('../services/grand');

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
    const {user_id,order_line_item} = req.body;
    for(const item of order_line_item){
        const itemId = item.item_name;
        const prodPrice = await productRepository.getProductById(itemId);
        const find_price = findPrice(prodPrice.price,item.item_quantity);
        item.item_price = find_price;
    }
    const grand_total = grandTotal(order_line_item);
    const newOrder = await orderRepositories.createOrder({user_id,order_line_item,grand_total});
    if(newOrder){
        res.status(200).json({"success":true,"New Order":newOrder});
    }
    next(new ErrorResponse("order not created",404));
})
// update order
const updateOrder = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const {user_id,order_line_item} = req.body;
    for(const item of order_line_item){
        const itemId = item.item_name;
        const prodPrice = await productRepository.getProductById(itemId);
        const find_price = findPrice(prodPrice.price,item.item_quantity);
        item.item_price = find_price;
    }
    const grand_total = grandTotal(order_line_item);
    const ifExist = await orderRepositories.getOrderById(id);
    if(ifExist){
        const updateOrder = await orderRepositories.updateOrder(id,user_id,order_line_item,grand_total);
        const updated = await orderRepositories.getOrderById(id);
        res.status(200).json({"Success":true,"Updated":updated});
    }
    next(new ErrorResponse("Order not updated",404));
})

// delete order
const deleteOrder = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const ifExist = await orderRepositories.getOrderById(id);
    if(!ifExist){
        next(new ErrorResponse("Order not deleted"));
    }
    await orderRepositories.deleteOrder(id);
    res.status(200).json({"success":true,"Message":`Successfully deleted order with id ${id}`});

})

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
}