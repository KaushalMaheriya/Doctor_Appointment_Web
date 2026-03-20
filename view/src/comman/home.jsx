import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Home.css'
import { Link } from 'react-router-dom'




function home() {
  return (
    <>
     <Navbar/>
    <div className='mainclass'>
      <div className="box">
       
       <div className="tt"> 
        <h1 data-aos="zoom-in" >Hospital</h1>
        </div>
        <p>Welcome to our hospial web</p>
        <p>Please login in our website and take servicies and information about our hospital</p>
        
        <p>Take care ...Stay safe</p>
        <div className="line">
        <div className="alert">
            <p>IF YOU FIRST TIME <br />REGISTER BEFOR LOGIN
            </p>
            </div>
        <div className="buttons">
              <Link to={'/login'}>
            <button>LOGIN</button>
            </Link>
            <Link to={'/register'}>
            <button>REGISTER</button>
            </Link>
        </div>
        </div>
      </div>

    </div>
    
    <Footer/>
    </>
  )
}

export default home