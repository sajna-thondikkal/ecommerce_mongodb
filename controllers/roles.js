const roleRepository = require('../repositories/roles');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/asyncHandler');
const isValidObjId = require('../utils/validateObjId');


// get all roles
const getAllRoles = asyncHandler(async (req,res,next)=>{
    const roles = await roleRepository.getAllRoles();
    res.status(200).json({"success":true,"All Roles":roles});
});

// get role by role id
const getRoleById = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    const validRole = isValidObjId(id);
    if(validRole){
        const role = await roleRepository.getRoleById(id);
        res.status(200).json({"success":true,"Role":role});      
    }
    next(new ErrorResponse(`Role is not valid with id ${id}`,404));
});

// create role
const createRole = asyncHandler(async (req,res,next)=>{
    const role_name = req.body;
    const newRole = await roleRepository.createRole(role_name);
    if(newRole){
        res.status(200).json({"success":true,"New Role":newRole}); 
    }
    next(new ErrorResponse("Role is not created",404));

});

// update role
const updateRole = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    const role_name = req.body;
    const validateId = isValidObjId(id);
    if(validateId){
        const updateRole = await roleRepository.updateRole(id,role_name);
        const updatedValue = await roleRepository.getRoleById(id);
        res.status(200).json({"success":true,"Updated Role":updatedValue}); 
    }
    next(new ErrorResponse("Role is not created",404));
});

// delete role
const deleteRole = asyncHandler(async (req,res,next)=>{
    const id = req.params.id;
    const idExist = isValidObjId(id);
    if(idExist){
        await roleRepository.deleteRole(id);
        res.status(200).json({"success":true,"message":`Successfully deleted role with id ${id}`});
    }
    next(new ErrorResponse(`Role not exist with id ${id}`,404));
});

module.exports = {
    getAllRoles,
    getRoleById,
    createRole,
    updateRole,
    deleteRole
}