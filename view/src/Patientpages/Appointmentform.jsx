import React, { useState } from "react";
import "./AppointmentForm.css";
import { useNavigate } from "react-router-dom";

const AppointmentForm = () => {
  const [patientname, setname] = useState('')
  const [email, setemail] = useState('')
  const [mobileno, setmobileno] = useState('')
  const [doctorid, setdoctorid] = useState('')
  const [date, setdate] = useState('')
  const [time, settime] = useState('')

  const navigate=useNavigate();

 const token=localStorage.getItem("token")
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/api/user/bookappointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
      },
      body:JSON.stringify({
            patientname,email, mobileno, doctorid, date, time
      })
    })
    const data= await res.json();
    if(!res.ok){
      alert(data.massage);
      return
    }else{
      alert("Your appointment is submit go to appointment and check status")
      navigate("/appointment")
    }

  };

  return (
    <div className="appointment-wrapper">

      <form className="appointment-card" onSubmit={handleSubmit}>
        <h2>Book Appointment</h2>
        <div className="main_column">
          <div className="column_1">
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={(e) => setname(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => setemail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter mobile number"
                onChange={(e) => setmobileno(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="column_2">
            <div className="form-group">
              <label>Doctor ID</label>
              <input
                type="text"
                name="doctorname"
                placeholder="Enter doctor name"
                onChange={(e) => setdoctorid(e.target.value)}
                required
              />
            </div>
            <div className="row">
              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  onChange={(e) => setdate(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Time</label>
                <input
                  type="time"
                  name="time"
                  onChange={(e) => settime(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

        </div>
        <button type="submit" className="submit-btn">
          Confirm Appointment
        </button>
      </form>

    </div>
  );
};

export default AppointmentForm;
