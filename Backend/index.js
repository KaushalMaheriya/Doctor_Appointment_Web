const express=require('express')
const app=express();
const db=require('./Module/db')
const bodyParser = require('body-parser');
const cors =require('cors')
const Authroutes=require('./Routers/Authroutes.js');
const router = require('./Routers/CheckuserRoutes.js');
const adminroute=require('./Routers/Adminrotes.js');
const userroute = require('./Routers/Userinproute.js')

require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());
app.use("/api/auth",Authroutes)
app.use("/api/role",router)
app.use("/api/admin",adminroute)
app.use("/api/user",userroute)

PORT=process.env.PORT 
app.listen(PORT,()=>{
    console.log(`the server is running on ${PORT}`)
})