import React, { useEffect, useState } from 'react'
import "./stu.css";
import axios from "axios";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Block from './Block';
import { json, useNavigate } from 'react-router-dom';
export default function Student() {
    var [arr,setarr]=useState([]);
    var [err,seterr]=useState("");
    var [bees,setbees]=useState("");
    var [userinput,setinput]=useState("");
    // console.log(userinput);
    var [namestate,namesetstate]=useState("none");
    var navi=useNavigate();
    async function caller(){
       try{

        // https://easyquizy.onrender.com
            // var {data} = await axios.get("http://localhost:9800/getusers");
          //  console.log(data);
            var { data } = await axios.get(
              "https://easyquizy.onrender.com/getusers"
            );

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
      <div style={{ display: `${namestate}` }} id="name_getter">
        <div
          style={{
            width: "100%",
            height: "70px",
            display: "flex",

            justifyContent: "end",
            alignItems: "center",
            paddingRight: "100px",
          }}
        >
          <div
            onClick={() => {
              namesetstate("none");
            }}
            style={{
              fontSize: "22px",
              fontWeight: 500,
              display: "flex",
              cursor: "pointer",
              justifyContent: "end",
              alignItems: "center",
              paddingRight: "40px",
            }}
          >
            X
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "30%",
            fontSize: "42px",
            letterSpacing: "4px",
            wordSpacing: "8px",
            textAlign: "center",
            fontWeight: 400,
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            paddingRight: "40px",
          }}
        >
          😄 👋 Hi User ! Write your name to start Quiz .
        </div>
        <div
          style={{
            width: "70%",
            height: "50px",
            borderBottom: "1px solid white",
            display: "flex",
            justifyContent: "center",
            marginTop: "4%",
          }}
        >
          <input
            name="user"
            onChange={(e) => {
              setinput({
                ...userinput,
                [e.target.name]: e.target.value,
              });
            }}
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: "32px",
              color: "white",
              height: "92%",
              background: "transparent",
              border: "none",
              outline: "none",
            }}
          />
        </div>
        <div style={{ marginTop: "10%" }}>
          <button
            onClick={() => {
              if (userinput) {
                // namesetstate("none");
                var c = {
                  ...userinput,
                  subject: JSON.parse(bees).subject,
                  name: JSON.parse(bees).name,
                  Questions: JSON.parse(bees).Questions,
                  id: JSON.parse(bees).id,
                };
                console.log(c);

                if (!JSON.parse(localStorage.getItem("test"))) {
                  localStorage.setItem("test", JSON.stringify(c));
                } else {
                  localStorage.clear("test");
                  localStorage.setItem("test", JSON.stringify(c));
                }
                navi("/student/test");
              }
            }}
            style={{
              width: "150px",
              height: "50px",
              background: "black",
              color: "white",
              letterSpacing: "3px",
              borderRadius: "7px",
              fontSize: "24px",
            }}
          >
            Start
          </button>
        </div>
      </div>
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
            <div
              style={{
                width: "50%",
                height: "90%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {err ? (
                <p style={{ color: "red" }}>
                  Some error is caused check the server{" "}
                </p>
              ) : (
                <div id="ring"></div>
              )}
            </div>
          ) : arr.length !== 0 ? (
            arr.map((e, i) => {
              var [a, b] = JSON.parse(e.name);
              // console.log(a,b);
              if (i % 2 !== 0) {
                return (
                  <div className="green" id="stusame" key={i}>
                    <Block b={b} a={a} states={namesetstate} bs={setbees} />
                  </div>
                );
              } else if (i % 3 != 0) {
                return (
                  <div className="red" id="stusame" key={i}>
                    <Block b={b} a={a} states={namesetstate} bs={setbees} />
                  </div>
                );
              } else if (i % 4 === 0) {
                return (
                  <div className="blue" id="stusame" key={i}>
                    <Block b={b} a={a} states={namesetstate} bs={setbees} />
                  </div>
                );
              } else {
                return (
                  <div className="pink" id="stusame" key={i}>
                    <Block b={b} a={a} states={namesetstate} bs={setbees} />
                  </div>
                );
              }
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
