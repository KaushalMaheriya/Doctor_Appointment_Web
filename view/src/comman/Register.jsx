import React, {  useState } from 'react'
import './Register.css'
import {  useNavigate } from 'react-router-dom'
// import AOS from 'aos'

function Register() {
    const[username,setusername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setpassword]=useState('')
    const navigate=useNavigate();

   const handlesubmit=async (e)=>{
     e.preventDefault();
         if(!username || !email || !password){
            alert("All field are required")
         }else{
             
       try { 
       const res= await fetch("http://localhost:8000/api/auth/register",
            {
                method:"POST",
                headers:{
                "Content-Type":"application/json"},
                body:JSON.stringify({
                    username,
                    email,
                    password
                })
            })
        const data= await res.json();
        if(!res.ok){
            alert(data.message)
        }
        else{
            alert(data.message)
             navigate("/login")
        }

       } catch (error) {
        console.log(error)
       }finally{
        setusername(" ");
        setEmail(" ");
        setpassword(" ")
       }
    }
   }



  return (
     <div className='mainbodyreg'>
    <div className="regbox" data-aos="fade-up">
        <h2>Create Account</h2>
        
    <form onSubmit={handlesubmit}>
        <div className="b">
            <label for="firstName">First Name OR UserName</label><br />
            <input 
            onChange={(e)=>setusername(e.target.value)}
            type="text" 
            name='username' 
            autoFocus
            placeholder='enter your name' />
            
        </div>
        
        <div className="b">
            <label >Email ID</label><br />
            <input onChange={(e)=>setEmail(e.target.value)} type="email" name='email' placeholder='enter your email id' />
            
        </div>
        
        
        <div className="b">
            <label >Password</label><br />
            <input onChange={(e)=>setpassword(e.target.value)} type="password" name='password' placeholder='create password minimun 4 character'/>
            
        </div>
        
      <button type='submit' data-aos="zoom-in">
        REGISTER</button>
      </form>
         
      </div>
      </div>
  )
}

export default Register;