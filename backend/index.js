import express from "express";
import mysql from "mysql"
import cors from "cors"


const app = express()

app.use(express.json())
app.use(cors())

const db =mysql.createConnection({
    host :"localhost",
    user : "root",
    password : "Mayur2001",
    database : "assignment_3_ads",
})

app.get("/",(req,res)=> {
    res.json("Hello this is the backend")
})

app.get("/all_section",(req,res)=> {
    const q = "SELECT * FROM section"
    db.query(q,(err,data)=>{
        if(err)return res.json(err)

        return res.json(data)
    })
})

app.get("/all_courses",(req,res)=> {
    const q = "SELECT * FROM course"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/all_students",(req,res)=> {
    const q = "SELECT * FROM student"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/all_instructor",(req,res)=> {
    const q = "SELECT * FROM instructor"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/all_students",(req,res)=> {
    const q = "SELECT * FROM student"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/student_form",(req,res) => {

    console.log(req.body);

    const q = "INSERT INTO student (student_name,dept_name,id,tot_cred) VALUES (?,?,?,?)";
    const values = [
        req.body.name,
        req.body.dept,
        req.body.id,
        req.body.credits
    ];

    db.query(q,values,(err,data)=>{
        if(err)return res.json(err);

        console.log("DONE")

        return res.json("Data inserted into table.");
    });
});

app.listen(8000, ()=>{
    console.log("Connected")
})