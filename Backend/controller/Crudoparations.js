const db = require('../Module/db')

const add = async (req, res) => {
  try {
    const { name, fees, education, type, timeduration, days } = req.body
    db.query("SELECT * FROM doctor WHERE name=?", [name], async (err, result) => {
      if (err){ return res.status(500).json("this is error",err) }

      if (result.length > 0) {
        return res.status(409).json({ message: "doctor already exists" });
      }
      db.query("INSERT INTO doctor (name,fees,education,type,timeduration,days) VALUES(?,?,?,?,?,?)", [name, fees, education, type, timeduration, days],
        (err) => {
          if (err) return res.status(500).json(err);

          res.status(201).json({ message: "Information added successfully successfully" });
        })
    })

  } catch (error) {
    return res.status(500).json({ message: "Data is not coming" })
  }
}

const update = (req, res) => {
  try {

    const name = req.params.name;
    const { fees, education, type, timeduration, days } = req.body;

    db.query("SELECT * FROM doctor WHERE name=?", [name], async (err, result) => {
      if (err) return res.status(500).json(err)

      if (result.length === 0) {
        return res.status(409).json({ message: "doctor is not registared" });
      }
      db.query(" UPDATE doctor SET fees=?, education=?, type=?, timeduration=?, days=? WHERE name=?", [fees, education, type, timeduration, days, name], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send("Doctor Updated");
      });

    })

  } catch (error) {
    return res.status(500).json({ message: "server error on data" })
  }

}
const del = (req, res) => {
  try {

    const name = req.params.name;
    db.query("SELECT * FROM doctor WHERE name=?", [name], async (err, result) => {
      if (err) return res.status(500).json(err)

      if (result.length===0) {
        return res.status(409).json({ message: "doctor is note exists" });
      }
      const sql = "DELETE FROM doctor WHERE name=?"; 
      db.query(sql, [name], (err, result) => {
      if (err) return res.status(500).send(err);
      res.send("Doctor Deleted");
    });

  });
  } catch (error) {
    return res.status(500).json({ message: "server error on data" })
  }
}

const seedata=(req,res)=>{
    db.query("SELECT * FROM doctor",(err,result)=>{
      if(err){return res.status(500).json({message:"data not fetch by server"})}
      res.json(result)
      
    })
}

module.exports = {
  add,
  update,
  del,
  seedata
}