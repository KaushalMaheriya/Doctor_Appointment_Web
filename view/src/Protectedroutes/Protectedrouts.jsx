import React from 'react'
import { getRole, isAuthenticated } from '../auth';
import { Navigate} from 'react-router-dom'

function Protectedrouts({children, allowedRoles }) {
   if(!isAuthenticated()){
    return <Navigate to='/login'/>
   }

   const role=getRole()
   if(allowedRoles && !allowedRoles.includes(role)){
    // return <Navigate to='/unauthorized'/>
    return alert("PLEASE ENTER VALID EMAIL & PASSWORD")
   }

  return children;
}

export default Protectedrouts
