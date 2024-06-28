const express = require('express');
const router = express.Router();
const roleControllers = require('../controllers/roles');
const { verifyTokenHandler} = require('../middlewares/jwtHandler.js');
const {verifyRoles} = require('../middlewares/verifyRoles.js');

// get all roles
router.get('/',roleControllers.getAllRoles);

// get role by role id
router.get('/:id',roleControllers.getRoleById);

// create role
router.post('/',[verifyTokenHandler,verifyRoles(['admin'])],roleControllers.createRole);

// update role
router.put('/:id',[verifyTokenHandler,verifyRoles(['admin'])],roleControllers.updateRole);

// delete role
router.delete('/:id',[verifyTokenHandler,verifyRoles(['admin'])],roleControllers.deleteRole);

module.exports = router;