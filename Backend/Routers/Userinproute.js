const { subform } = require('../controller/Appointform');
const verifytoken = require('../validation/authmiddleware');

const userroute=require('express').Router();

userroute.post('/bookappointment',verifytoken,subform)

module.exports=userroute;