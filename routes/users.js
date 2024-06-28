const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/users');

// get all users
router.get('/',userControllers.getAllUsers);

// get user by id
router.get('/:id',userControllers.getUserById);

// login user
router.post('/login',userControllers.loginUser);

// SignUp user or create user
router.post('/signup',userControllers.createUser);

// update user
router.put('/:id',userControllers.updateUser);

// delete user
router.delete('/:id',userControllers.deleteUser);

// get user role
router.get('/role/:id',userControllers.getUserRoleByUserId);

module.exports = router;