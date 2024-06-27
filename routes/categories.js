const express = require('express');
const router = express.Router();
const categoryControllers = require('../controllers/categories');

// find all categories
router.get('/',categoryControllers.findAllCategories);

// find category by id
router.get('/:id',categoryControllers.findCategoryById);


// create category
router.post('/',categoryControllers.createCategory);

// update category
router.put('/:id',categoryControllers.updateCategory);

// delete category
router.delete('/:id',categoryControllers.deleteCategory);

module.exports = router;