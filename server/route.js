import {Router} from "express";

var route=Router();

route.get("/users",(req,res)=>{
    res.send({message:["user1","user2"]});

})

export default route;