const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/products');
const { verifyTokenHandler} = require('../middlewares/jwtHandler.js');
const {verifyRoles} = require('../middlewares/verifyRoles.js');


// get all products
router.get('/',productControllers.getAllProducts);

// get product by id
router.get('/:id',productControllers.getProductById);

// create product
router.post('/',[verifyTokenHandler,verifyRoles(['admin'])],productControllers.createProduct);

// update product
router.put('/:id',[verifyTokenHandler,verifyRoles(['admin'])],productControllers.updateProduct);

// delete product
router.delete('/:id',[verifyTokenHandler,verifyRoles(['admin'])],productControllers.deleteProduct);

module.exports = router;