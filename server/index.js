
import express from "express";
import route from "./route.js";
import cors from "cors";

var app=express();
app.use(route);
app.use(cors());

app.get('/',(req,res)=>{
    res.send("hey back your page 👋 👋 👋 ");
})

var Port=9800 || process.env.Port;
app.listen(Port, () => {
  console.log("connected");
});