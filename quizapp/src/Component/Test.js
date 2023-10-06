import React, { useEffect, useState } from 'react'
import axios from "axios";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from 'react-router-dom';
import { alpha } from '@mui/material';
import { list_setter,question_list } from '../Redux/actions';
import "react-clock/dist/Clock.css";
// import { useEffect, useState } from "react";
import Clock from "react-clock";
import { useDispatch, useSelector } from 'react-redux';
export default function Test() {
  var a = JSON.parse(localStorage.getItem("test"));
  var [err, seterr] = useState("");
  var [arr, setarr] = useState([]);

  var dispatch = useDispatch();
  var redux_state = useSelector((state) => state);
  //  console.log(value);
  var [count, setcount] = useState(0);
  console.log("this is counter",count);
  var [mar, setmar] = useState(0);
  // console.log(mar);
  var navi = useNavigate();
  var main;
  var arr2;
  var c;
  const [value, setValue] = useState(0);
  // console.log(value);
  var l_ = [];
  var default_arr = [];
  for (var i = 0; i < parseInt(arr.length - 1); i++) {
    var de_ = {};
    de_[i] = "";
    // console.log(de_);
    default_arr.push(de_);
  }
  // console.log(default_arr);
  var [obj, setobj] = useState(default_arr);
  console.log("this is answer key from user side :",obj);
  function sameFunction(i, aplha) {
    var f_d = [...obj];
    var cd = { [i]: aplha };
    f_d.push(cd);
    setobj(f_d);
    var cfd = obj.filter((e) => {
      // console.log(Object.keys(e),i);
      if (Object.keys(e) == i) {
        return e;
      }
    });
    var cfd2 = obj.filter((e) => {
      console.log(Object.keys(e), i);
      if (Object.keys(e) != i) {
        return e;
      }
    });
    // console.log(cfd);
    if (cfd.length !== 0) {
      var f_d = [...cfd2];
      var cd = { [i]: aplha };
      f_d.push(cd);
      setobj(f_d);
    } else {
      var f_d = [...obj];
      var cd = { [i]: aplha };
      f_d.push(cd);
      setobj(f_d);
    }
  }
  if (a) {
    if (arr.length) {
      // console.log(arr);
      arr.forEach((e) => {
        var [x, y] = JSON.parse(e.name);
        if (y.subject === a.subject) {
          // console.log("true");
          main = { x, y };
          //
          c = Object.keys(x).length / 6;
          arr2 = Object.keys(x);
          // console.log("this is arr2 :",x[`${arr2["0"]}a`]);
          // console.log(c);
          for (var i = 0; i < c; i++) {
            l_.push(0);
          }
          // console.log(main);
        }
      });
    }
  }
  async function caller() {
    try {
      // https://easyquizy.onrender.com
      // var { data } = await axios.get("http://localhost:9800/getusers");
      var { data } = await axios.get("https://easyquizy.onrender.com/getusers");

      setarr(data);
      seterr("");
    } catch (e) {
      console.log(e.message);
      seterr(
        "Sorry ! Some error is caused Refresh the page or check your connection"
      );
    }
  }
  useEffect(() => {
    caller();
    dispatch(question_list(main));
    var intervalid = setInterval(() => {
      if (value === 30) {
        setValue(0);
        if (mar < l_.length - 1) {
          setmar(mar + 1);
          console.log("simple");
          setcount(count + 1);

          if (!obj[count]) {
            // 0 + obj[0][0] == "0a" ? "set" : "";
            sameFunction(count, "");
          } else if (!obj[count + 1]) {
            sameFunction(count + 1, "");
          }
        }
      } else {
        setValue(value + 1);
      }
    }, 1000);
    return () => clearInterval(intervalid);
  }, [value, count]);
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div></div>
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
          <div style={{ marginRight: "5%", color: "yellow" }}>
            {" "}
            {mar < l_.length - 1 ? (
              <p>Current time: {value}</p>
            ) : (
              <button
                onClick={() => {
                  try{
                    console.log("submitted");
                  var user=(JSON.parse(localStorage.getItem("test")).user);
                  console.log(user);
                  localStorage.clear("test");
                  // console.log(redux_state);
                  console.log(mar,count);
                  if (parseInt(mar) === parseInt(count)) {
                    // setmar(mar + 1);
                    setValue(0);
                    setcount(count + 1);
                    if (!obj[count]) {
                      // 0 + obj[0][0] == "0a" ? "set" : "";
                      sameFunction(count, "");
                    }
                    else if (!obj[count + 1]) {
                      sameFunction(count + 1, "");
                    }
                  } 
                  localStorage.setItem("user",user);
                  dispatch(list_setter(obj));

                  navi("/student/result");
                  }
                  catch(e){
                    console.log(e.message);
                  }



                }
              
            
              }
              >
                Submit
              </button>
            )}
            {/* <Clock value={value} style={{border:"1px solid white"}}  /> */}
          </div>
        </div>
        <div>
          {" "}
          {err ? null : arr.length !== 0 ? (
            main ? (
              <div id="testdiv">
                {l_.map((e, i) => {
                  if (i === 0) {
                    return (
                      <div
                        key={i}
                        style={{ marginLeft: `-${mar}00%` }}
                        id="tdsame"
                      >
                        <h1 id="h_td">
                          {" "}
                          Q{i + 1} : {"    "} {main.x[arr2[i]]}
                        </h1>
                        <div id="tdbtn">
                          <p
                            className={
                              obj[0] ? (0 + obj[0][0] == "0a" ? "set" : "") : ""
                            }
                            onClick={() => sameFunction(i, "a")}
                            id="td_p"
                          >
                            <span>A</span> {main.x[`${arr2[i]}a`]}
                          </p>
                          <p
                            className={
                              obj[i]
                                ? i + obj[i][i] == `${i}b`
                                  ? "set"
                                  : ""
                                : ""
                            }
                            onClick={() => sameFunction(i, "b")}
                            id="td_p"
                          >
                            <span>b</span> {main.x[`${arr2[i]}b`]}
                          </p>
                          <p
                            className={
                              obj[i]
                                ? i + obj[i][i] == `${i}c`
                                  ? "set"
                                  : ""
                                : ""
                            }
                            onClick={() => sameFunction(i, "c")}
                            id="td_p"
                          >
                            <span>c</span> {main.x[`${arr2[i]}c`]}
                          </p>
                          <p
                            className={
                              obj[i]
                                ? i + obj[i][i] == `${i}d`
                                  ? "set"
                                  : ""
                                : ""
                            }
                            onClick={() => sameFunction(i, "d")}
                            id="td_p"
                          >
                            <span>D</span> {main.x[`${arr2[i]}d`]}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            if (mar < l_.length) {
                              // setmar(mar + 1);
                              setValue(0);
                              setmar(mar + 1);
                              setcount(count + 1);
                              if (!obj[count]) {
                                // 0 + obj[0][0] == "0a" ? "set" : "";
                                sameFunction(count, "");
                              } 
                            }
                          }}
                          id="sv_nxt"
                        >
                          Save and Next
                        </button>
                      </div>
                    );
                  } else {
                    return (
                      <div key={i} id="tdsame">
                        <h1 id="h_td">
                          {" "}
                          Q{i + 1} : {"    "} {main.x[arr2[i]]}
                        </h1>
                        <div id="tdbtn">
                          <p
                            className={
                              obj[i]
                                ? i + obj[i][i] == `${i}a`
                                  ? "set"
                                  : ""
                                : ""
                            }
                            onClick={() => sameFunction(i, "a")}
                            id="td_p"
                          >
                            <span>A</span> {main.x[`${arr2[i]}a`]}
                          </p>
                          <p
                            className={
                              obj[i]
                                ? i + obj[i][i] == `${i}b`
                                  ? "set"
                                  : ""
                                : ""
                            }
                            onClick={() => sameFunction(i, "b")}
                            id="td_p"
                          >
                            <span>b</span> {main.x[`${arr2[i]}b`]}
                          </p>
                          <p
                            className={
                              obj[i]
                                ? i + obj[i][i] == `${i}c`
                                  ? "set"
                                  : ""
                                : ""
                            }
                            onClick={() => sameFunction(i, "c")}
                            id="td_p"
                          >
                            <span>c</span> {main.x[`${arr2[i]}c`]}
                          </p>
                          <p
                            className={
                              obj[i]
                                ? i + obj[i][i] == `${i}d`
                                  ? "set"
                                  : ""
                                : ""
                            }
                            onClick={() => sameFunction(i, "d")}
                            id="td_p"
                          >
                            <span>D</span> {main.x[`${arr2[i]}d`]}
                          </p>
                        </div>
                        <button
                          onClick={() => {

                               if (mar + 1 < l_.length) {
                                 setmar(mar + 1);
                                 setValue(0);
                                 setcount(count + 1);
                                 if (!obj[count]) {
                                   // 0 + obj[0][0] == "0a" ? "set" : "";
                                   sameFunction(count, "");
                                 }
                                 // else if (!obj[count + 1]) {
                                 //   sameFunction(count + 1, "");
                                 // }
                               } else if (mar  === count) {
                                 // setmar(mar + 1);
                                 setValue(0);
                                 setcount(count + 1);
                                 if (!obj[count]) {
                                   // 0 + obj[0][0] == "0a" ? "set" : "";
                                   sameFunction(count, "");
                                 }
                                 // else if (!obj[count + 1]) {
                                 //   sameFunction(count + 1, "");
                                 // }
                               } 
                          }}
                          id="sv_nxt"
                        >
                          Save and Next
                        </button>
                      </div>
                    );
                  }
                })}
              </div>
            ) : null
          ) : null}
        </div>
      </div>
    </div>
  );
}
