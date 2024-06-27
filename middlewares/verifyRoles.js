const { getUserRoleByUserId} = require('../repositories/users');

const verifyRoles = (roles)=>{
    return async(req,res,next)=>{
        // req.userid ,get roles by user id,
        // if user has roles mentioned in array,then proceed
        // else block user
        console.log("msg from verfyrole");
        const userid = req.userid;
        console.log("msg from verfyrole",userid);
        const userRoles = await getUserRoleByUserId(userid);
        console.log("role from verifyrole",userRoles);
        let hasRole = false;
        if(roles == userRoles){
            hasRole = true;
            next();
        }
        else{
            return res.status(403).json({message:'you dont have permission'});
        }
    }
}

module.exports = {verifyRoles};