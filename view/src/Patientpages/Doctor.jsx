
import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import './Doctor.css'



function DoctorPage() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:8000/api/admin/data", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      const data = await response.json();
      console.log("Doctors:", data);

      setDoctors(data); // assuming backend returns array
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  return (
    <div>
      <Navbar/>
      
      {doctors.map((doctor, index) => (
        <div className="doctor-card" data-aos="fade-up" key={index}>
          <h2 className="doctor-name">{doctor.doctorid} . {doctor.name}</h2>

          <div className="doctor-details">
            <p><strong>Fees:</strong> ₹{doctor.fees}</p>
            <p><strong>Education:</strong> {doctor.education}</p>
            <p><strong>Type:</strong> {doctor.type}</p>
            <p><strong>Time:</strong> {doctor.timeduration}</p>
            <p><strong>Days:</strong> {doctor.days}</p>
          </div>
        </div>
      ))}
        
    
      
    </div>
  );
}

export default DoctorPage;

