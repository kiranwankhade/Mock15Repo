const express = require("express");
const app = express();


app.use(express.json());


const { postRouters } = require("./routes/Post.routes")

require('dotenv').config();
const {connection} = require("./db");

app.get("/",(req,res)=>{
    console.log("HOME");
    res.send("WELCOME TO TRIP PAGE")
})

app.use("/post",postRouters)

app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log("Connected")
        console.log(`CONNECT SERVER TO ${process.env.port} PORT`)
    }catch(err){
        console.log("NOT Connected");
        console.log(err);
    }
    
})