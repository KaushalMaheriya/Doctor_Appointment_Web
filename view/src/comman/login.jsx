import React, { useState } from 'react';
import './Loginstyle.css'
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'




function Login() {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');


    const navigate = useNavigate();
    const handlelogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:8000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const data = await res.json();

            console.log(data);
            if (!res.ok) {
              
                alert(data.message);
            }
            else {
                localStorage.setItem("token", data.token)
                const decode = jwtDecode(data.token)
                const role = decode.role;

                localStorage.setItem("role", role)
                role === "admin" ? navigate("/admin") : navigate("/patenthome")
                alert(data.message)
            }

        } catch (error) {
            alert("Server error OR network problem", error)
        }

    }


    return (
        <div className='mainbody'>
            <div className="loginbox" data-aos="fade-up">
                <h2>LOGIN</h2>

                <form onSubmit={handlelogin}>
                    <div className="a">
                        <label htmlFor='email'>EMAIL</label><br />
                        <input onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder='enter your email' autoFocus />

                    </div>


                    <div className="a">
                        <label htmlFor='password'>Password</label><br />
                        <input type="password" onChange={(e) => setpassword(e.target.value)} name='password' placeholder='enter your password' />

                    </div>

                    <button type='submit' data-aos="zoom-in" >Login</button>
                </form>


            </div>
        </div>
    )
}

export default Login