import React from 'react'
import { Link } from 'react-router-dom'

function Unauthorize() {
  return (
    <div>
      <h1>Unauthorize ! you are not allowed for this page</h1>
       <h3>go to login page and login again</h3>
       <Link to={'/login'}>
         <button>Login</button>
      </Link>
      </div>
  )
}

export default Unauthorize