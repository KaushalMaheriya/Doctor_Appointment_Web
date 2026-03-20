import { useEffect, useState } from "react";
import axios from "axios";
import Adminnavbar from "./Adminnavbar";

function ManageAppointments() {
  const [appointments, setAppointments] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/appointments", {
  //       headers: { authorization: localStorage.getItem("token") },
  //     })
  //     .then((res) => setAppointments(res.data));
  // }, []);

 

  return (
    <>
    <Adminnavbar/>
    <div>
      <h2>Appointments</h2>
      {appointments.map((a) => (
        <div key={a.id}>
          User {a.user_id} | Doctor {a.doctor_id} | {a.status}
          <button >Approve</button>
        </div>
      ))}
    </div>
    </>
  );
}

export default ManageAppointments;
