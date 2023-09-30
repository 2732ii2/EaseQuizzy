import React from 'react'
import { useSelector } from 'react-redux'
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from 'react-router-dom';
import "./result.css";
export default function Result() {
    var name; 
    var count=0;
    var rp="0%";
    var navi=useNavigate();
    var main_arr=[];
    const redux_state = useSelector((state) => state);
    try{
        console.log(
          redux_state.arr,
          redux_state.questi_l[0].x,
          Object.keys(redux_state.questi_l[0].x).length/6
        );
        // main_arr = redux_state.questi_l[0].x;
        for (
          var j = 0;
          j < Object.keys(redux_state.questi_l[0].x).length / 6;
          j++
        ) {
          main_arr.push(0);
        }
        name= redux_state.questi_l[0].y.subject;
        var c = redux_state.questi_l[0].x;
        var arr_=Object.keys(c);
        var answer_arr=[];
        arr_.forEach((e)=>{
            if(e.includes("key")){
                var d=({ [e.slice(0,1)]:c[e]});
                answer_arr.push(d);
            }
        })
        console.log(answer_arr);
        if (answer_arr){
            for (var i=0;i<answer_arr.length;i++){
                if (answer_arr[i]){
                    var [x,y]=[answer_arr[i][i], redux_state.arr[i]?redux_state.arr[i][i]:null];
                    
                    if(x && y){
                      x = x.toLowerCase();
                      y = y.toLowerCase();
                      console.log(x, y);
                      if (x == y) {
                        count += 1;
                        console.log(true);
                      }
                    }
                }
            }
        }
        console.log(count);
        // rp=parseInt((count / redux_state.arr.length)*100);
        //some editing 
        var lc_=(parseInt(Object.keys(redux_state.questi_l[0].x).length / 6));
        rp = parseInt((count / lc_) * 100);
        rp=(" "+rp+"%");
    }catch(e){
        console.log("this is message ",e.message);
    }
  return (
    <div id="result">
        <div style={{width:"100%",height:"70px",display:"flex",justifyContent:"end",alignItems:"center"}}>
            <KeyboardBackspaceIcon style={{marginRight:"5%"}} onClick={()=>{
                navi("/student");
            }} />
        </div>
        {name ? (
            <div id="resu_same">{localStorage.getItem("user")} Result of {name} Test : {rp}</div>
        ) : (
            <di id="resu_same" v>
            Go And give test
            </di>
        )}
        <div id='analysis'>

            {
                main_arr?main_arr.map((e,i)=>{
                    try{
                        return (
                          <div key={i} id="sameanalyiz">
                            <div id="topana">
                              <h1 id="anah_1">
                                {redux_state.questi_l[0].x[i]
                                  ? redux_state.questi_l[0].x[i]
                                  : ""}{" "}
                                {}
                              </h1>
                            </div>
                            <div id="bottomana">
                              <p
                                style={{
                                  background:
                                    redux_state.arr[i][i] == "a"
                                      ? redux_state.questi_l[0].x[
                                          `${i}key`
                                        ].toLowerCase() == "a"
                                        ? "rgb(33, 204, 33,.5)"
                                        : "red"
                                      : "transparent",
                                }}
                                id="ana_p"
                              >
                                {" "}
                                {redux_state.questi_l[0].x[`${i}a`]
                                  ? redux_state.questi_l[0].x[`${i}a`]
                                  : ""}{" "}
                              </p>
                              <p
                                style={{
                                  background:
                                    redux_state.arr[i][i] == "b"
                                      ? redux_state.questi_l[0].x[
                                          `${i}key`
                                        ].toLowerCase() == "b"
                                        ? "rgb(33, 204, 33,.5)"
                                        : "red"
                                      : "transparent",
                                }}
                                id="ana_p"
                              >
                                {redux_state.questi_l[0].x[`${i}b`]
                                  ? redux_state.questi_l[0].x[`${i}b`]
                                  : ""}{" "}
                              </p>
                              <p
                                style={{
                                  background:
                                    redux_state.arr[i][i] == "c"
                                      ? redux_state.questi_l[0].x[
                                          `${i}key`
                                        ].toLowerCase() == "c"
                                        ? "rgb(33, 204, 33,.5)"
                                        : "red"
                                      : "transparent",
                                }}
                                id="ana_p"
                              >
                                {redux_state.questi_l[0].x[`${i}c`]
                                  ? redux_state.questi_l[0].x[`${i}c`]
                                  : ""}{" "}
                              </p>
                              <p
                                style={{
                                  background:
                                    redux_state.arr[i][i] == "d"
                                      ? redux_state.questi_l[0].x[
                                          `${i}key`
                                        ].toLowerCase() == "d"
                                        ? "rgb(33, 204, 33,.5)"
                                        : "red"
                                      : "transparent",
                                }}
                                id="ana_p"
                              >
                                {redux_state.questi_l[0].x[`${i}d`]
                                  ? redux_state.questi_l[0].x[`${i}d`]
                                  : ""}{" "}
                              </p>
                            </div>
                          </div>
                        );
                    }
                    catch(e){
                        return (
                          <div key={i} id="sameanalyiz">
                            <div id="topana">
                              <h1 id="anah_1">
                                {redux_state.questi_l[0].x[i]
                                  ? redux_state.questi_l[0].x[i]
                                  : ""}{" "}
                                {}
                              </h1>
                            </div>
                            <div id="bottomana">
                              <p
                             
                                id="ana_p"
                              >
                                {" "}
                                {redux_state.questi_l[0].x[`${i}a`]
                                  ? redux_state.questi_l[0].x[`${i}a`]
                                  : ""}{" "}
                              </p>
                              <p
                                
                                id="ana_p"
                              >
                                {redux_state.questi_l[0].x[`${i}b`]
                                  ? redux_state.questi_l[0].x[`${i}b`]
                                  : ""}{" "}
                              </p>
                              <p
                                
                                id="ana_p"
                              >
                                {redux_state.questi_l[0].x[`${i}c`]
                                  ? redux_state.questi_l[0].x[`${i}c`]
                                  : ""}{" "}
                              </p>
                              <p
                                
                                id="ana_p"
                              >
                                {redux_state.questi_l[0].x[`${i}d`]
                                  ? redux_state.questi_l[0].x[`${i}d`]
                                  : ""}{" "}
                              </p>
                            </div>
                          </div>
                        );
                    }
                }):""

            }
        </div>

    </div>
  );
}
