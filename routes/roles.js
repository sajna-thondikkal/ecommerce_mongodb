const express = require('express');
const router = express.Router();
const roleControllers = require('../controllers/roles');

// get all roles
router.get('/',roleControllers.getAllRoles);

// get role by role id
router.get('/:id',roleControllers.getRoleById);

// create role
router.post('/',roleControllers.createRole);

// update role
router.put('/:id',roleControllers.updateRole);

// delete role
router.delete('/:id',roleControllers.deleteRole);

module.exports = router;