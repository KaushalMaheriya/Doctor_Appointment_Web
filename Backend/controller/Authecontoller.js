
const db=require('../Module/db')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


// ----------- REGISTER-----------

const register = async(req,res)=>{
   try{
       const {username,email,password,role}=req.body;

    // check user is exist or not

     db.query("SELECT * FROM user WHERE email=?",[email],async(err,result)=>{
        if(err) return res.status(500).json(err)
        
        if(result.length>0){ 
                          return res.status(409).json({ message: "User already exists" });
                         }     
                         
                         // ============== hashpassword---------------
                         const hashPassword = await bcrypt.hash(password,12)
                         
                         // insert data 
                         
                         db.query("INSERT INTO user (username,email,password,role) VALUES(?,?,?,?)",[username, email, hashPassword, role || "user"],
                            (err) => {
                                if (err) return res.status(500).json(err);
                                
                                res.status(201).json({ message: "User registered successfully" });
                            }
                        )
                    })
   }catch(err){
     res.status(500).json(err)
   }
}

// -------- LOGIN -----------

const login = async (req,res) => {
    try{
        const {email,password}=req.body;
       db.query("SELECT * FROM user WHERE email=?",[email], async (err,result)=>{
        if(err) {return res.status(500).json({message:"error to ....."})}

        if(result.length==0){
                             return res.status(404).json({ message: "User dos not fond" });
                             }
            const user=result[0];
            const match= await bcrypt.compare(password,user.password)
            if(!match){ return res.status(401).json({message:"Password is not match"});}
             
        // ---------------------- jwt token==---------
          const token=jwt.sign(
            {
                id:user.id,
                role:user.role,
                email:user.email
            },
            process.env.JWT_secret_key,
            {expiresIn:"1d"}
          )
            return res.status(200).json({message:"Login Successfuly",user,token});                
       })
    }
    catch(err){
           res.status(500).json({message:".............error..",err})
    }
};

module.exports={
    register,
    login
};