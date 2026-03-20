import React from 'react'
import Home from './comman/home'
import Admin from './Adminpages/Admin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './comman/login'
import Register from './comman/Register'
import Patenthome from './Patientpages/Patenthome'
import Doctor from './Patientpages/Doctor'
import ProtectedRoute from './Protectedroutes/Protectedrouts'
import Managedoctor from './Adminpages/Managedoctor'
import Manageappointment from './Adminpages/Manageappoint'
import Unauthorize from './comman/Unauthorize'
import Appointment from './Patientpages/Appointment'
import AppointmentForm from './Patientpages/Appointmentform'
import Contactus from './comman/Contactus'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {/*  this is a local paths */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* -----admin pages------------- */}
        <Route path='/admin' element={<ProtectedRoute allowedRoles={['admin']}>
          <Admin />
        </ProtectedRoute>} />
        <Route path='/managedoctor' element={<ProtectedRoute allowedRoles={['admin']}>
          <Managedoctor />
        </ProtectedRoute>} />  
        <Route path='/manageAppointments' element={<ProtectedRoute allowedRoles={['admin']}>
          <Manageappointment />
          </ProtectedRoute>}/> 
  
        <Route path='/doctors' element={<ProtectedRoute allowedRoles={['admin','user']}><Doctor /></ProtectedRoute>} />
        <Route path='/patenthome' element={<ProtectedRoute allowedRoles={['admin','user']}><Patenthome /></ProtectedRoute>} />
        <Route path='/unauthorized' element={<Unauthorize/>}/>
        <Route path='/appointment' element={<ProtectedRoute allowedRoles={['admin','user']}><Appointment/></ProtectedRoute>}/>
        <Route path='/appointmentform' element={<ProtectedRoute allowedRoles={['admin','user']}><AppointmentForm/></ProtectedRoute>}/>
        <Route path='/contact' element={<Contactus/>}/>
      </Routes>

    </BrowserRouter>

   

  )
}

export default App