import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.listen(5000,()=>{
console.log("server listed on Port: 5000")
});

app.get("/getStudents", (req, res) =>{

res.send("students");
});