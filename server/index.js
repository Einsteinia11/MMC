import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import bodyParser from 'body-parser';


const app = express();
app.use(cors());
app.use(express.json())
app.use(cookieParser());
app.use(express.json());

// app.get("/message", (req, res) => {
//   res.send({ message: "Hello from server!" });
// });
const con = mysql.createConnection({
  host: 'localhost',
  user: "root",
  password: "",
  database: "client"
})
con.connect(function(err){
  if(err){
    console.log("Error in Connection");
    console.log(err);
  } else{
    console.log("Connected")
  }
})
app.use(bodyParser.urlencoded({extended: true}));
// app.get("/", (req, res) => {
//   const sqlInsert = "INSERT INTO login_credentials(PID, UserName, Password, Type) values('P#01', 'Kajal', 'Hare krishna', 'Mentor');";
//   con.query(sqlInsert, (err, result) => {
//     res.send("I executed that Maám");
//   });
// });

//for mentees
app.post("/api/insert", (req, res) => {
  const PID = 'P#01';
  const UserName = req.body.Name;
  const Password = req.body.password;
  const Course = req.body.course;
  const Year = req.body.year;
  const DOB = req.body.dob;
  const Phone = req.body.phone;
  const Gmail = req.body.email;
  const Experience = req.body.exp;
  const sqlInsert = "INSERT INTO mentees_data(PID, UserName,	Password,	Course,	Year,	Phone,	Gmail,	DOB,	Experience) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)"
  con.query(sqlInsert, [PID, UserName, Password, Course, Year,  Phone, Gmail, DOB, Experience], (err, result) => {
    console.log(result);
    console.log("done");
    console.log(err);
  })
});

//for mentor
app.post("/mentor", (req, res) => {
  const PID = 'P#01';
  const UserName = req.body.Name;
  const Password = req.body.password;
  const Qualification = req.body.qualification;
  const Job_desc = req.body.job_desc;
  const Year = req.body.year;
  const DOB = req.body.dob;
  const Phone = req.body.phone;
  const Gmail = req.body.email;
  const Experience = req.body.exp;
  const sqlInsert = "INSERT INTO mentor_data(PID,	UserName,	Password,	Qualification,	Job_Description,	Year,	Phone,	Gmail,	DOB,	Experience) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
  con.query(sqlInsert, [PID, UserName, Password, Qualification, Job_desc,  Year, Phone, Gmail, DOB, Experience], (err, result) => {
    console.log(result);
    console.log("done");
    console.log(err);
  })
});

app.listen(8081, ()=> {
  console.log("Running on port 8081");
})

