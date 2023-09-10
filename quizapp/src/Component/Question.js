import React, { useState } from 'react'
import "./questions.css";
import { send } from '../axios/api';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function Question({obj}) {
  var local_obj = localStorage.getItem("obj");
  var d;
  if(local_obj){
    d=(JSON.parse(local_obj));
    obj =parseInt(d.Questions);
  }
  // var obj=1;
  var navi=useNavigate();
  var list_ = [];
  var obj_li = [];
  var [st_obj, setsta_obj] = useState(obj_li);
  // console.log(st_obj);
  if (obj) {
    for (var i = 0; i < obj; i++) list_.push(1);
  }
  var [state, setstate] = useState(0);
  // console.log(state);
  function getback(e, number, alpha) {
    // console.log(e, number, alpha);
    setsta_obj({
      ...st_obj,
      [number + alpha]: e,
    });
  }
  return (
    <div id="question">
      <button onClick={()=>{
        navi("/admin");
        localStorage.clear("obj");
      }} style={{position:"absolute",width:"100px",height:"auto",marginTop:"-8%",marginLeft:"100%",background:"transparent",border:"none",outline:"none",color:"white"}}> 
      <KeyboardBackspaceIcon />
      </button>
      <button
        onClick={() => {
          console.log([st_obj,d]);
          send([st_obj, d]);
          localStorage.clear("obj");
          navi("/admin");
        }}
        className="spec"
      >
        Save
      </button>
      <h1 id="h_1">Type your Questions</h1>
      <div id="ques_ins">
        {list_.length === 0 ? (
          <div id="ques_same" style={{ justifyContent: "center" }}>
            Sorry ! 😄 Subject is Not choosen Yet
          </div>
        ) : (
          list_.map((e, i) => {
            var main = i;
            if (i === 0) {
              return (
                <div
                  style={{ marginLeft: `-${state}00%`, transition: "all .5s" }}
                  key={i}
                  id="ques_same"
                >
                  <div id="upperslide">
                    {i + 1}{" "}
                    <input
                      id="upinp"
                      onChange={(e) => {
                        // console.log(e.target.value);
                        // st_obj[i][i]=e.target.value;
                        setsta_obj({
                          ...st_obj,
                          [i]: e.target.value,
                        });
                        if (e.target.value) {
                          e.target.style.background = "transparent";
                          e.target.style.color = "white";
                        } else {
                          e.target.style.background = "white";
                        }
                      }}
                    />
                  </div>
                  <div style={{width:"50%",height:"60px",marginTop:"2%",display:"flex",justifyContent:"center",alignItems:"center"}}>Ans Key :
                   <input style={{width:"40px",height:"20px",marginLeft:"20px",textAlign:"center"}}  placeholder='a | b | c' /> 
                   </div>
                  <div id="downslide">
                    <div id="up">
                      <Input number={"a"} value={getback} keys={main} />
                      <Input number={"b"} value={getback} keys={main} />
                    </div>
                    <div id="down">
                      <Input number={"c"} value={getback} keys={main} />
                      <Input number={"d"} value={getback} keys={main} />
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={i} id="ques_same">
                  <div id="upperslide">
                    {i + 1}{" "}
                    <input
                      id="upinp"
                      onChange={(j) => {
                        // obj_li[i][i] = j.target.value;
                        // console.log(obj_li);
                        setsta_obj({
                          ...st_obj,
                          [i]: j.target.value,
                        });
                        if (j.target.value) {
                          j.target.style.background = "transparent";
                          j.target.style.color = "white";
                        } else {
                          j.target.style.background = "white";
                        }
                        console.log(j.target.value);
                      }}
                    />
                  </div>
                  <div id="downslide">
                    <div id="up">
                      <Input number={"a"} value={getback} keys={main} />
                      <Input number={"b"} value={getback} keys={main} />
                    </div>
                    <div id="down">
                      <Input number={"c"} value={getback} keys={main} />
                      <Input number={"d"} value={getback} keys={main} />
                    </div>
                  </div>
                </div>
              );
            }
          })
        )}
      </div>
      <div id="last">
        <button
          disabled={state === 0 ? true : false}
          onClick={() => {
            // if (state > 0) {
            setstate(state - 1);
            // }
          }}
          id="btn"
        >
          {" "}
          Previous
        </button>
        <button
          disabled={state == parseInt(obj) - 1 ? true : false}
          onClick={() => {
            // if (parseInt(state) < parseInt(obj) - 1) {
            setstate(state + 1);
            // }
          }}
          id="btn"
        >
          {" "}
          Next
        </button>
      </div>
    </div>
  );
}
