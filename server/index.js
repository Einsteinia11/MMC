import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get("/message", (req, res) => {
  res.send({ message: "Hello from server!" });
});
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
app.get("/", (req, res) => {
  const sqlInsert = "INSERT INTO login_credentials(PID, UserName, Password, Type) values('P#01', 'Nandan', 'Hare krishna', 'Mentor');";
  con.query(sqlInsert, (err, result) => {
    res.send("I executed that Maám");
  });
});
app.listen(8081, ()=> {
  console.log("Running");
})

