const mysql=require('mysql2')
require('dotenv').config();
const db=mysql.createConnection({
   host:process.env.DB_host,
   user:process.env.DB_user,
   password:process.env.DB_password,
   database:process.env.DB_database
});

db.connect((err)=>{
   if(err){
    console.log("Database connection error",err)
   }else{
    console.log("Database connection succesfully")
   }
});

module.exports=db;