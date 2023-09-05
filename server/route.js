import express,{Router} from "express";
import Use_r from "./Schema.js";

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