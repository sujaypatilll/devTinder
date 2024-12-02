const express = require("express")

const app = express()

app.delete("/login",(req,res)=>{
    res.send("deleted sucessfully")
})

app.get("/login",(req,res)=>{

    const data = 
    {
        "firstname":"sujay",
        "lastname":"patil",
        "rollno":20,
        "nesteddata":{
            lastname:"patil",
            status:"billinore",
            income:"10cr",
            degrees:["BE","Diploma","MTECH"]
        }
    }
    res.send(data)
})

app.post("/login",(req,res)=>{
    console.log("Data is saved succesfully twice")
    res.send("Welcome to login page")
})


app.listen(7777,(req,res)=>{
    console.log("server listing successfully")
})

