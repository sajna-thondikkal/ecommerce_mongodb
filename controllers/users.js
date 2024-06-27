const userRepository = require('../repositories/users');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/asyncHandler');
const isValidObjId = require('../utils/validateObjId');
const {hashPassword} = require('../utils/passwordHelper');


// get all users
const getAllUsers = asyncHandler(async (req,res,next)=>{
    const users = await userRepository.getAllUsers();
    if(users){
        res.status(200).json({"success":true,"Users":users});
    }
    else{
        res.status(200).json({"message":"No users found"});
    }
});

// get user by id
const getUserById = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    const user = await userRepository.getUserById(id);
    if(user){
        res.status(200).json({"success":true,"User":user});
    }
    next(new ErrorResponse("user not found",404));
});

// create user
const createUser = asyncHandler(async(req,res,next)=>{
    const {user_name,password,role_id,phone,address} = req.body;
    const hashedPassword = hashPassword(password);
    const newUser = await userRepository.createUser({user_name,password:hashedPassword,role_id,phone,address});
    if(!newUser){
        next(new ErrorResponse("User not created",404));
    }
    return res.status(200).json({"success":true,"New User":newUser});
})

// update user
const updateUser = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const user_name = req.body;
    const role_id = req.body;
    const phone = req.body;
    const address = req.body;
    const existUser = await userRepository.getUserById(id);
    if(!existUser){
        next(new ErrorResponse("User not created",404));
    }
    const updateUser = await userRepository.updateUser(id,user_name,role_id,phone,address);
    const updated = await userRepository.getUserById(id)
    res.status(200).json({"success":true,"Updated User":updated});
})

// delete user
const deleteUser = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const ifExist = await userRepository.getUserById(id);
    if(!ifExist){
        next(new ErrorResponse(`user doesnot exist with id ${id}`,404));
    }
    await userRepository.deleteUser(id);
    res.status(200).json({"success":true,"Message":`successfully deleted user with id ${id}`});
})

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}