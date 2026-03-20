const express=require('express');
const verifytoken = require('../validation/authmiddleware');
const checkrole = require('../validation/Rolemiddleware');
const { add, update, del, seedata } = require('../controller/Crudoparations');
const { Doctorvalidation } = require('../validation/Datavalidation');
const router=express.Router();

router.post("/add",verifytoken,checkrole("admin"),Doctorvalidation,add)
router.put("/update/:name",verifytoken,checkrole("admin"),update)
router.delete("/delete/:name",verifytoken,checkrole("admin"),del)
router.get("/data",seedata)

module.exports=router;