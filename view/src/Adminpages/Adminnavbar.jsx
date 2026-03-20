import React from "react";
import "../Patientpages/Navbar.css";
import { Link } from "react-router-dom";

const Adminnavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg premium-navbar ">
      <div className="container">
        <div className="navbar-brand premium-logo gradient-text">
         Hospital<br/>
          Name
        </div>

        <button
          className="navbar-toggler premium-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#premiumNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="premiumNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
             <li className="nav-item">
              <Link className="nav-link premium-link" to={'/admin'}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link premium-link" to={'/managedoctor'}>Managedoctor</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link premium-link" to={'/manageAppointments'}>Manageappoitments</Link>
            </li>
           
            
          </ul>
        </div>

        
      </div>
    </nav>
  );
};

export default Adminnavbar;
