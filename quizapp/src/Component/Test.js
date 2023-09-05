import React, { useEffect, useState } from 'react'
import axios from "axios";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from 'react-router-dom';

export default function Test() {
    var a=JSON.parse(localStorage.getItem("test"));
    var [err,seterr]=useState("");
    var [arr,setarr]=useState([]);
    var navi=useNavigate();
    var main;
    var arr2;
    var c;
    var l_=[];
    if(a){
        if(arr.length){
            // console.log(arr);
            arr.forEach((e)=>{
                var [x,y]=(JSON.parse(e.name));
                if (y.subject===a.subject){
                  console.log("true");
                  main={x,y};
                    c=Object.keys(x).length/5;
                    arr2 = Object.keys(x);
                    console.log("this is arr2 :",x[`${arr2["0"]}a`]);
                    console.log(c);
                    for(var i=0;i<c;i++){
                        l_.push(0);
                    }
                  console.log(main);
                }
            })
        }
    }
    async function caller() {
      try {
        var { data } = await axios.get("http://localhost:9800/getusers");
        setarr(data);
        seterr("");
      } catch (e) {
        console.log(e.message);
        seterr("Sorry ! Some error is caused Refresh the page or check your connection");
      }
    }
    useEffect(() => {
      caller();
    }, []);
  return (
    <div id="test">
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
        {/* transform: rotateX(-180deg); */}
        <ExitToAppIcon
          onClick={() => {
            localStorage.clear("test");
            navi("/student");
          }}
          style={{ marginRight: "5%", fontSize: "24px" }}
        />
      </div>
      <div id="stu_main">
        <h1 id="hs_1">
          {" "}
          {err ? (
            <p style={{ color: "red" }}>{err}</p>
          ) : arr.length !== 0 ? (
            main ? (
              `${main.y.subject} Test`
            ) : (
              "Select your subject"
            )
          ) : null}
        </h1>
        <div>
          {" "}
          {err ? (
           null
          ) : arr.length !== 0 ? (
            main ? (
             <div id='testdiv'>
                {
                    l_.map((e,i)=>{
                        if(i===0){
                            return (
                              <div
                                key={i}
                                style={{ marginLeft: "-000%" }}
                                id="tdsame"
                              >
                                <h1 id="h_td">
                                  {" "}
                                  Q{i + 1} : {"    "} {main.x[arr2[i]]}
                                </h1>
                                <div id="tdbtn">
                                  <p id="td_p">{main.x[`${arr2[i]}a`]}</p>
                                  <p id="td_p">{main.x[`${arr2[i]}b`]}</p>
                                  <p id="td_p">{main.x[`${arr2[i]}c`]}</p>
                                  <p id="td_p">{main.x[`${arr2[i]}d`]}</p>
                                </div>
                                <button id='sv_nxt'></button>
                              </div>
                            );
                        }
                        else{
                            return (
                              <div key={i} id="tdsame">
                                <h1 id="h_td">
                                  {" "}
                                  Q{i + 1} : {"    "} {main.x[arr2[i]]}
                                </h1>
                              </div>
                            );
                        }
                    })
                }
             </div>
            ) : (
             null
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}
