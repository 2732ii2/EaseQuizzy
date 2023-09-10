import React, { useEffect, useState } from 'react'
import "./stu.css";
import axios from "axios";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Block from './Block';
import { useNavigate } from 'react-router-dom';
export default function Student() {
    var [arr,setarr]=useState([]);
    var [err,seterr]=useState("");
    var navi=useNavigate();
    async function caller(){
       try{
            var {data} = await axios.get("http://localhost:9800/getusers");
            setarr(data);
            
            
       }
       catch(e){
        console.log(e.message);
        seterr(e.message);
       }
    }
    useEffect(()=>{
        caller();
    },[])
  return (
    <div id="student_">
      <div
        style={{
          width: "100%",
          height: "50px",
          background: "none",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <KeyboardBackspaceIcon
          onClick={() => {
            navi("/");
          }}
          style={{ marginRight: "5%" }}
        />
      </div>
      <div id="stu_main">
        <h1 id="hs_1"> Hei User 👋 welcome to your Quiz Platform</h1>
        <div id="down_stu">
          {arr.length === 0 ? (
            <div style={{width:"50%",height:"90%",display:"flex",justifyContent:"center",alignItems:"center"}}>
              {err ? <p style={{color:"red"}}>Some error is caused check the server </p>: <div id='ring'></div>}
            </div>
          ) : (
            arr.map((e, i) => {
              var [a, b] = JSON.parse(e.name);
              // console.log(a,b);
              if (i % 2 !== 0) {
                return (
                  <div className="green" id="stusame" key={i}>
                    <Block b={b} a={a} />
                  </div>
                );
              } else if (i % 3 != 0) {
                return (
                  <div className="red" id="stusame" key={i}>
                    <Block b={b} a={a} />
                  </div>
                );
              } else if (i % 4 === 0) {
                return (
                  <div className="blue" id="stusame" key={i}>
                    <Block b={b} a={a} />
                  </div>
                );
              }
            })
          )}
        </div>
      </div>
    </div>
  );
}
