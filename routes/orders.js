const express = require('express');
const router = express.Router();
const orderControllers = require('../controllers/orders');

// get all orders
router.get('/',orderControllers.getAllOrders);

// get order by id
router.get('/:id',orderControllers.getOrderById);

// create order
router.post('/',orderControllers.createOrder);

// update order
router.put('/:id',orderControllers.updateOrder);

// delete order
router.delete('/:id',orderControllers.deleteOrder);

module.exports = router;