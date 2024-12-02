const express = require("express")

const app = express()

app.listen(7777,(req,res)=>{
    console.log("server listing successfully")
})

app.use("/",(req,res)=>{
    res.send("hello devtinder")
})

app.get("/login",(req,res)=>{
    res.send("hello login page sujay ")
})