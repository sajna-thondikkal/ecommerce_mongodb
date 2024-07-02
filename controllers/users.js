const userRepository = require('../repositories/users');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/asyncHandler');
const isValidObjId = require('../utils/validateObjId');
const {hashPassword} = require('../utils/passwordHelper');
const {compareWithHashedPassword} = require('../utils/passwordHelper');
const { createjwt } = require('../utils/jwtHelper');



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


// get user by userName
const loginUser = asyncHandler(async(req,res,next)=>{
    const {user_name,password} = req.body;
    const user = await userRepository.loginUser(user_name);
    if(!user ){
        return(next(new ErrorResponse("invalid credentials",400)));
    }
    const isvalidUser = compareWithHashedPassword(password,user.password);
    if(isvalidUser){
        const token = createjwt(user);
        return res.status(200).json({"Message":"Logged in successfully","User Name":user_name,"Token":token});
    }
    next(new ErrorResponse("User not found"));
})


// get user role by user id
const getUserRoleByUserId = asyncHandler(async(req,res,next)=>{
    const user_id = req.params.id;
    const role = await userRepository.getUserRoleByUserId(user_id);
    if(role){
        res.status(200).json({"success":true,"Role":role});
    }
})


// SignUp user or create user
const createUser = asyncHandler(async(req,res,next)=>{
    const {user_name,password,user_role,phone,address} = req.body;
    const hashedPassword = hashPassword(password);
    const newUser = await userRepository.createUser({user_name,password:hashedPassword,user_role,phone,address});
    if(!newUser){
        next(new ErrorResponse("User not created",404));
    }
    const token = createjwt(newUser);
    return res.status(200).json({"Message":"User Signed Up Successfully"," User Name":newUser.user_name,"Token":token});
})


// update user
const updateUser = asyncHandler(async(req,res,next)=>{
    const id = req.params.id;
    const user_name = req.body;
    const user_role = req.body;
    const phone = req.body;
    const address = req.body;
    const existUser = await userRepository.getUserById(id);
    if(!existUser){
        next(new ErrorResponse("User not created",404));
    }
    const updateUser = await userRepository.updateUser(id,user_name,user_role,phone,address);
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
    deleteUser,
    loginUser,
    getUserRoleByUserId
}