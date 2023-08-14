const express=require ("express");
const { validation, loginValidator, registerValidator } = require("../Middleware/Validator");
const { registerAdmin, loginAdmin, updateAdminInfos, updateAdminPassword } = require("../Controllers/Admin");
const isAuthAdmin = require("../Middleware/IsAuthAdmin");
const { getusers } = require("../Controllers/user");






const router=express.Router();
router.post('/registerAdmin',registerValidator(),validation,registerAdmin)
router. post('/LoginAdmin',validation,loginValidator(),loginAdmin)

router.get('/currentAdmin',isAuthAdmin,(req,res)=>{res.send(req.Admin)})

router.get('/allusers',getusers)

router.put('/:_id',updateAdminInfos)
router.put('/password/:_id',updateAdminPassword)






 module.exports=router;
