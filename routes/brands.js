const express = require('express');
const router = express.Router();
const brandControllers = require('../controllers/brands');
const { verifyTokenHandler} = require('../middlewares/jwtHandler.js');
const {verifyRoles} = require('../middlewares/verifyRoles.js');


// get all brands
router.get('/',brandControllers.getAllBrands);

// get brand by id
router.get('/:id',brandControllers.getBrandById);

// create brand
router.post('/',[verifyTokenHandler,verifyRoles(['admin'])],brandControllers.createBrand);

// update brand
router.put('/:id',[verifyTokenHandler,verifyRoles(['admin'])],brandControllers.updateBrand);

// delete brand
router.delete('/:id',[verifyTokenHandler,verifyRoles(['admin'])],brandControllers.deleteBrand);

module.exports = router;