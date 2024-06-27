const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/products');

// get all products
router.get('/',productControllers.getAllProducts);

// get product by id
router.get('/:id',productControllers.getProductById);

// create product
router.post('/',productControllers.createProduct);

// update product
router.put('/:id',productControllers.updateProduct);

// delete product
router.delete('/:id',productControllers.deleteProduct);

module.exports = router;