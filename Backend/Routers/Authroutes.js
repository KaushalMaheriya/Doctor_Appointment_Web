const { register, login } = require('../controller/Authecontoller');
const { registervalidation, loginvalidation } = require('../validation/Authvelidation');

const router=require('express').Router();


router.post("/register",registervalidation,register)
router.post("/login",loginvalidation,login)

module.exports=router;