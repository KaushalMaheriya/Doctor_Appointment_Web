import React from "react";
import "./Navbar.css";
import { GiHospitalCross } from "react-icons/gi";



const Navbar = () => {
  return (
    <>
    <div className="nb">
        <div  className="logo">
          < GiHospitalCross />
        </div>
      <h1 data-aos="flip-left" className="gradient-text">
      HOSPITAL
      NAME
      </h1>
      <div className="logo">
         <GiHospitalCross />
      </div>

    </div>
    </>
  );
};

export default Navbar;
