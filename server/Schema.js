import mongoose, { Schema,Model } from "mongoose";


var QuizSchema= Schema({
    name:String
    
});

var Use_r=mongoose.model("QuizData",QuizSchema);

export default Use_r;