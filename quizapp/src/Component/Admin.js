import React, { useState } from 'react'
import "./Admin.css";
import clock from "../clock.jpg";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setter } from '../Redux/actions';
export default function Admin() {
    var li_=[{name:"subject"},{name:"name"},{name:"id"},{name:"Questions"}];
     var navi = useNavigate();            

    var [obj_,setobj]=useState({
        subject:"",
        name:"",
        id:"",
        Questions:"",
    })
    var dispatch= useDispatch();
  return (
    <div id="admin">
      <img
        src={clock}
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          objectFit: "contain",
          position: "absolute",
          marginTop: "2%",
          marginLeft: "80%",
        }}
      />
      <h1 id="h_1">Admin : Ready to create</h1>
      <div id="adm_ins">
        {li_.map((e, i) => {
          return (
            <div key={i} id="same_2">
              {e.name}{" "}
              <input
                name={e.name}
                onChange={(e) => {
                  setobj({
                    ...obj_,
                    [e.target.name]: e.target.value,
                  });
                }}
                style={{
                  width: "50%",
                  height: "40px",
                  background: "rgba(255,255,255,.2)",
                  backdropFilter: "blur(20px)",
                  outline: "none",
                  border: "1px solid rgba(255,255,255,.4)",
                  borderRadius: "20px",
                  paddingLeft: "20px",
                  color: "white",
                  textTransform: "capitalize",
                  fontSize: "20px",
                  letterSpacing: "2px",
                }}
                placeholder={e.name === "Questions" ? "No of Questions" : ""}
                type={e.name === "Questions" ? "number" : "text"}
              />
            </div>
          );
        })}
      </div>
      <div id="last">
        <button
          onClick={() => {
            navi("/");
          }}
          id="btn_"
        >
          Previous
        </button>
        <button
          onClick={() => {
            var c= (Object.keys(obj_));
            var d=c.filter((e)=>{
                if (!obj_[e]){
                    return e;
                }
            })
            if (d.length!=0){
                alert("Fill the Details");
            }
            else{
                console.log(obj_);
                localStorage.setItem("obj",JSON.stringify(obj_));
                // obj_.Questions
                dispatch(setter(obj_.Questions));
                navi("/admin/questions");
            }
          }}
          id="btn_"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
