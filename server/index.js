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
const createTableIfNotExists = (tableName, createTableSQL) => {
  con.query(`SHOW TABLES LIKE '${tableName}'`, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }

    if (results.length === 0) {
      // Table doesn't exist, create it
      con.query(createTableSQL, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Table '${tableName}' created successfully.`);
        }
      });
    } else {
      console.log(`Table '${tableName}' already exists.`);
    }
  });
};

// Call createTableIfNotExists for each table you want to check and create
createTableIfNotExists(
  'mentees_data',
  'CREATE TABLE mentees_data (PID INT AUTO_INCREMENT PRIMARY KEY, UserName VARCHAR(255), Password VARCHAR(255), Course VARCHAR(255), Year VARCHAR(255), Phone VARCHAR(255), Gmail VARCHAR(255), DOB DATE, Experience VARCHAR(255))'
);

createTableIfNotExists(
  'mentor_data',
  'CREATE TABLE mentor_data (PID INT AUTO_INCREMENT PRIMARY KEY, UserName VARCHAR(255), Password VARCHAR(255), Qualification VARCHAR(255), Job_Description TEXT, Year VARCHAR(255), Phone VARCHAR(255), Gmail VARCHAR(255), DOB DATE, Experience VARCHAR(255))'
);

createTableIfNotExists(
  'meetings',
  'CREATE TABLE meetings (Meet_ID INT AUTO_INCREMENT PRIMARY KEY, Title VARCHAR(255), Date DATE, Location VARCHAR(255), Event_URL VARCHAR(255), Description TEXT)'
);

createTableIfNotExists(
  'login_credentials',
  'CREATE TABLE login_credentials (PID INT AUTO_INCREMENT PRIMARY KEY, UserName VARCHAR(255), Password VARCHAR(255), Type VARCHAR(255))'
);

//for mentees
app.post("/api/insert", (req, res) => {
  // const PID = 'P#01';
  const UserName = req.body.Name;
  const Password = req.body.password;
  const Course = req.body.course;
  const Year = req.body.year;
  const DOB = req.body.dob;
  const Phone = req.body.phone;
  const Gmail = req.body.email;
  const Experience = req.body.exp;
  const type = "Mentee";
  const sqlInsert = "INSERT INTO mentees_data( UserName,	Password,	Course,	Year,	Phone,	Gmail,	DOB,	Experience) VALUES(?, ?, ?, ?, ?, ?, ?, ?)"
  con.query(sqlInsert, [ UserName, Password, Course, Year,  Phone, Gmail, DOB, Experience], (err, result) => {
    console.log(result);
    console.log("added into mentees data");
    console.log(err);
  })
  const q = "INSERT INTO login_credentials( UserName, Password, Type) VALUES(?,?,?)";
  con.query(q, [UserName, Password, type], (err, result) => {
    console.log(result);
    console.log("added into login_credentials")
    console.log(err)
  })
});

//for mentor
app.post("/mentor", (req, res) => {
  // const PID = 'P#01';
  const UserName = req.body.Name;
  const Password = req.body.password;
  const Qualification = req.body.qualification;
  const Job_desc = req.body.job_desc;
  const Year = req.body.year;
  const DOB = req.body.dob;
  const Phone = req.body.phone;
  const Gmail = req.body.email;
  const Experience = req.body.exp;
  const type = "Mentor";
  const sqlInsert = "INSERT INTO mentor_data(UserName,	Password,	Qualification,	Job_Description,	Year,	Phone,	Gmail,	DOB,	Experience) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)"
  con.query(sqlInsert, [UserName, Password, Qualification, Job_desc,  Year, Phone, Gmail, DOB, Experience], (err, result) => {
    console.log(result);
    console.log("added into mentor_data");
    console.log(err);
  })
  const q = "INSERT INTO login_credentials(UserName, Password, Type) VALUES(?,?,?)";
  con.query(q, [UserName, Password, type], (err, result) => {
    console.log(result);
    console.log("added into login_credentials")
    console.log(err)
  })
});

//for meeting
app.post("/meet", (req, res) => {
  const  Title = req.body.title;
  const  date = req.body.date;
  const  location = req.body.location;
  const  Event_URL = req.body.meet;
  const  Description = req.body.desc;
  const sqlInsert = "INSERT INTO meetings(Title,	Date,	Location,	Event_URL,	Description) VALUES(?, ?, ?, ?, ?)"
  con.query(sqlInsert, [Title,	date,	location,	Event_URL,	Description], (err, result) => {
    console.log(result);
    console.log("added into meetings");
    console.log(err);
  })
});

//meeting information display
app.get('/meet', (req, res) => {
  // con.query("use client");
  con.query("SELECT Title, Date FROM meetings", (err, results, fields) => {
    if(err) return res.json({message: "Error inside server!"+err});
    res.send(results);
    console.log(results);
  });
});

app.listen(8081, ()=> {
  console.log("Running on port 8081");
})

