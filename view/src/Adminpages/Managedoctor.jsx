
import { useState, useEffect } from 'react'
import './Managedoctor.css'
import Adminnavbar from './Adminnavbar';



function Managedoctor() {
  const [name, setdname] = useState("");
  const [fees, setfees] = useState("");
  const [education, seteducation] = useState("");
  const [type, settype] = useState("");
  const [timeduration, settime] = useState("");
  const [days, setdays] = useState("");
  const [doctors, setDoctors] = useState([]);

  const token = localStorage.getItem("token");
  const adddoctor = async (e) => {
    e.preventDefault();
    try {
     const res=  await fetch("http://localhost:8000/api/admin/add", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          name,
          fees,
          education,
          type,
          timeduration,
          days
        })
      });
      const data=res.json()
      if(!res.ok){
        alert(data.message)
      }


    } catch (error) {
      console.log(error)
    }
    fetchDoctors();

  }

  const updatedoctor = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/api/admin/update/${encodeURIComponent(name)}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            fees,
            education,
            type,
            timeduration,
            days
          })
        }
      );



      if (response.ok) {
        alert("Data Updated Successfully");
      }
      fetchDoctors();


    } catch (error) {
      console.log("the error in update operation", error)
    }
  }


  const remove = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/api/admin/delete/${encodeURIComponent(name)}`,
        {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        
      if (!response.ok) {
        alert("D")
      }else{
      alert("Delete oparation is complete")
      }
      fetchDoctors();
    } catch (error) {
      console.log("error in delete", error)
    }
  }


  useEffect(() => {
    fetchDoctors();
    setdname(" ")
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
      setDoctors(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };


  return (
    <>
      <Adminnavbar />
      {/* =======----Doctor section-------------- */}
      
        <div className="handledoctor">

          <div className="firtrow">
            <div className='inp col-4'>
              <label htmlFor="name">Doctor Name:</label>
              <input type="text" placeholder="Doctor name" onChange={(e) => setdname(e.target.value)} />
            </div>
            <div className='inp col-4'>
              <label htmlFor="mobile">Fees :</label>
              <input type="text" placeholder="fees" onChange={(e) => setfees(e.target.value)} />
            </div>
            <div className='inp col-4'>
              <label htmlFor="Education">Education:</label>
              <input type="text" placeholder="education" onChange={(e) => seteducation(e.target.value)} />
            </div>
          </div>
          <div className='second_row'>
            <div className='inp col-4 '>
              <label htmlFor="Type">Doctor Type:</label>
              <input type="text" placeholder="specialist in" onChange={(e) => settype(e.target.value)} />
            </div>
            <div className='inp col-4'>
              <label htmlFor="Time">TIme Duration:</label>
              <input type="text" placeholder="00:00-00:00" onChange={(e) => settime(e.target.value)} />
            </div>
            <div className='inp col-4'>
              <label htmlFor="days">Avilable in Days:</label>
              <input type="text" placeholder="days" onChange={(e) => setdays(e.target.value)} />
            </div>
          </div>

          <button onClick={adddoctor} type='button'>ADD</button>
          <button onClick={updatedoctor} type='button'>UPDATE</button>
          <button onClick={remove} type='button'>REMOVE</button>

        </div>


        <div className="table-container">
          <h2 className="table-title">Doctors List</h2>

          <table className="styled-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Education</th>
                <th>Type</th>
                <th>Time</th>
                <th>Days</th>
              </tr>
            </thead>
            {doctors.map((doctor) => (
              <tbody>
                <tr>
                  <td>{doctor.id}</td>
                  <td>{doctor.name}</td>
                  <td>₹{doctor.fees}</td>
                  <td>{doctor.education}</td>
                  <td> {doctor.type}</td>
                  <td> {doctor.timeduration}</td>
                  <td>{doctor.days}</td>
                </tr>

              </tbody>
            ))}
          </table>
        </div>
      
    </>
  )
}

export default Managedoctor