const express = require('express');
const router = express.Router();
const categoryControllers = require('../controllers/categories');
const { verifyTokenHandler} = require('../middlewares/jwtHandler.js');
const {verifyRoles} = require('../middlewares/verifyRoles.js');


// find all categories
router.get('/',categoryControllers.findAllCategories);

// find category by id
router.get('/:id',categoryControllers.findCategoryById);


// create category
router.post('/',[verifyTokenHandler,verifyRoles(['admin'])],categoryControllers.createCategory);

// update category
router.put('/:id',[verifyTokenHandler,verifyRoles(['admin'])],categoryControllers.updateCategory);

// delete category
router.delete('/:id',[verifyTokenHandler,verifyRoles(['admin'])],categoryControllers.deleteCategory);

module.exports = router;