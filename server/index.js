import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(5000,()=>{
console.log("server listed on Port: 5000")
});


app.get("/getStudents", (req, res) =>{
  res.json({ status: "getALL Success", data: { students: {name:"kalees", age:30} } });
// res.send("students");
});