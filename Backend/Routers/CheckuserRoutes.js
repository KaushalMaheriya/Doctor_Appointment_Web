const verifytoken = require('../validation/authmiddleware');
const checkrole = require('../validation/Rolemiddleware');
const express=require('express')
const router=express.Router();

router.get("/admin",verifytoken,checkrole("admin"),(req,res)=>{
             res.status(200).json({message:"welcome admin"})
         })

router.get("/user",verifytoken,checkrole("admin","user"),(req,res)=>{
             res.status(200).json({message:"welcome user"})
           })


module.exports=router;