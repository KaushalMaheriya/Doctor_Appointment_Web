const db = require('../Module/db')

const subform = async (req, res) => {
   try {
      const user_id = req.user.id;
      const { patientname, email, mobileno, doctorid, date, time,status } = req.body;

      const sql = `
         INSERT INTO appointment
         (username,user_id,email,mobile_no,doctorid,date,time,status)
         VALUES (?,?,?,?,?,?,?,?)
      `;

      db.query(sql, [patientname,user_id,email,mobileno,doctorid,date,time,status], 
      (err, result) => {
         if (err) {
            return res.status(500).json({ message: "Database error", error: err });
         }

         return res.status(200).json({
            message: "Appointment Booked Successfully",
            result
         });
      });

   } catch (error) {
      return res.status(500).json({
         message: "Server error",
         error: error.message
      });
   }
}

module.exports = { subform };