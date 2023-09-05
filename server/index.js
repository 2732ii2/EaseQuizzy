
import express from "express";
import route from "./route.js";
import cors from "cors";
import {connection} from "./mongDb.js";
var app=express();
app.use(cors());
app.use(express.json());


app.use("/",route);



app.get('/',(req,res)=>{
    res.send("hey back your page 👋 👋 👋 ");
})

connection();
// app.post("/users", (req, res) => {
//   res.send("hey back your page 👋 👋 👋 ");
// });
var Port=9800 || process.env.Port;
app.listen(Port, () => {
  console.log("connected");
});