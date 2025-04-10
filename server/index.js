import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://kaleesmca1990:admin@cluster0.gk8qbq3.mongodb.net/student")
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const User = mongoose.model('mcaStudents', userSchema);
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

app.post("/addStudent", (req, res) => {
  const {name, age} = req.body;
  const user = new User({ name, age });
  user.save()
    .then(() => {
      res.json({ status: "success", data: { name, age } });
    })
    .catch((error) => {
      res.status(500).json({ status: "error", error });
    });
} );

// app.get("getAllStudents", (req, res)=>{
//   User.find().then((students)=>{
//     res.json({status:"success", data:{students}});
//   }).catch((error)=>{
//     res.status(500).json({status:"error", error});  
//   })
// })

app.get("/getAllStudents", (req, res) => { 
  console.log("getAllStudents"); 
  User.find()
    .then((students) => {
      console.log("students", students);
      res.json({ status: "success", data: { students } });
    })
    .catch((error) => {
      res.status(500).json({ status: "error", error });
    });
}
);
app.delete("/deleteStudent/:id", (req, res) => {
  const { id } = req.params;
  User.findByIdAndDelete(id)
    .then(() => {
      res.json({ status: "success" });
    })
    .catch((error) => {
      res.status(500).json({ status: "error", error });
    });
}); 

app.get("/getStudent/:id", (req, res) => {  
  const { id } = req.params;
  User.findById(id)
    .then((student) => {
      res.json({ status: "success", data: { student } });
    })
    .catch((error) => {
      res.status(500).json({ status: "error", error });
    });
}
);
app.put("/updateStudent", (req, res) => {  
  console.log("calling")
  console.log("req.body", req.body);
  
  
  const updatedUser = req.body;
  const id  = req.body?._id;
  User.findByIdAndUpdate(id, updatedUser, { new: true }).then((student) => {
    res.json({status:"success", data:{student}});
  }
  ).catch((error) => {
    res.status(500).json({ status: "error", error });
  });
}
);
app.get("/", (req, res) => {
  res.send("Hello World");
});

