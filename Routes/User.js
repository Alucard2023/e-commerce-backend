const express=require ("express");
const { registerValidator, validation, loginValidator} = require("../Middleware/Validator");
const { register, login, updateInfos, getOneUser, updatePassword } = require("../Controllers/user");
const isAuth = require("../Middleware/IsAuth");









const router = express.Router();

//register

router.post('/register',registerValidator(),validation,register)

//login 
router.post('/login',validation,loginValidator(),login)
router.get('/current',isAuth ,(req,res)=>{
    res.send(req.user)
})

router.put('/:_id',validation,updateInfos)

router.put('/password/:_id',updatePassword)
router.get('/:_id',getOneUser)



module.exports = router;