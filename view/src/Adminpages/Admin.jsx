
import React from "react";
import Adminnavbar from "./Adminnavbar";
import "./Admin.css"



function AdminDashboard() {
  return (
    <>
      <Adminnavbar />

      <div className="bodyadmin">
        <div className="boxadmin" data-aos="flip-up"  data-aos-duration="500">
          <div>
          <h1 className="adminwel" data-aos="zoom-in-up"  data-aos-duration="1000">Welcome Admin</h1>
          <p className="adminp"  data-aos="zoom-in-up"  data-aos-duration="1200">You are eligible for manage doctors and appointments</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
