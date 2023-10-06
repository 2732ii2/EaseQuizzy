import mongoose, { Schema,Model } from "mongoose";


var QuizSchema= Schema({
    name:String
    
});
var resSchema = Schema({
  sub_name: String,
  percentage: Number,
  name_of_user: String,
});

// percentage: rp,
//         sub_name: name,
//         name_of_user: d12,
export var Use_r=mongoose.model("QuizData",QuizSchema);
export var Use_r_2 = mongoose.model("QuizResultData", resSchema);

// export  Use_r;