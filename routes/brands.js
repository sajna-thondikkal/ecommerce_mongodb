const express = require('express');
const router = express.Router();
const brandControllers = require('../controllers/brands');

// get all brands
router.get('/',brandControllers.getAllBrands);

// get brand by id
router.get('/:id',brandControllers.getBrandById);

// create brand
router.post('/',brandControllers.createBrand);

// update brand
router.put('/:id',brandControllers.updateBrand);

// delete brand
router.delete('/:id',brandControllers.deleteBrand);

module.exports = router;