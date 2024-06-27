const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/users');

// get all users
router.get('/',userControllers.getAllUsers);

// get user by id
router.get('/:id',userControllers.getUserById);

// create user
router.post('/',userControllers.createUser);

// update user
router.put('/:id',userControllers.updateUser);

// delete user
router.delete('/:id',userControllers.deleteUser);

module.exports = router;