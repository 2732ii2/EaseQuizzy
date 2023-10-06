import express,{Router} from "express";
import {Use_r,Use_r_2} from "./Schema.js";

var route=express.Router();


route.post("/users",async (req, res) => {

    var d = { name: JSON.stringify(req.body) };
    try{
        var validate=await Use_r(d);
        console.log(validate);
        await validate.save();
        console.log(req.body);

    }
    catch(e){
        console.log(e.message);
    }
    res.send("hey back your page 👋 👋 👋 ");

});

route.post("/result", async (req, res) => {
  // var d = { name: JSON.stringify(req.body) };
  try {
    console.log(req.body);
    var validate = await Use_r_2(req.body);
    console.log(validate);
    await validate.save();
    console.log("Data has been submitted");
  } catch (e) {
    console.log(e.message);
  }
  res.send("Result submitted 👋 👋 👋 ");
});
route.get("/getresult", async (req, res) => {
  // var d = { name: JSON.stringify(req.body) };
  try {
    console.log(req.body);
    var users = await Use_r_2.find();
    console.log(users);
    // console.log("Data has been submitted");
    res.send(users);
  } catch (e) {
    console.log(e.message);
    res.send(e.message);
  }
  
});


route.get("/getusers", async (req, res) => {
    var users;
  try {
    users = await Use_r.find();
    console.log(users);
    res.send(users);
  } catch (e) {
    console.log(e.message);
    res.send(e.message);
  }
  
});

export default route;