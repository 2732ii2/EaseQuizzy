import React, { useEffect, useState } from 'react'
import "./Dashboard.css";
import Chart from "chart.js/auto";
import axios from "axios";
import { Doughnut,Bar ,Line} from "react-chartjs-2";
import { useNavigate } from 'react-router-dom';
export default function AdDash() {
    var [err,seterr]=useState("");
    var per_arr=[];
    var user_arr=[]
    var [selec_sub, setsel] = useState("Verbal");
    var [spec_id,setid]=useState(0);
    console.log(spec_id);
    var [arr, setarr] = useState([]);
    var [arr2, setarr_2] = useState([]);
    console.log(arr,arr2);
    if (arr.length!=0){
      arr.forEach((e,i)=>{
        if (i<arr.length-1){
          console.log(e.name ? JSON.parse(e.name) : "no there");
        } 
        else{
          console.log("by");
        }
      })
    }
    if (arr2.length!=0){
      
     var d= arr2.filter((e, i) => {
        if (e.sub_name == selec_sub) {
          console.log(e.percentage);
          per_arr.push(e.percentage);
          user_arr.push(e.name_of_user);
          return {per:e.percentage};
        }
      });  
      console.log(d,per_arr);
    }
    var list_s = [
      { name: "Ashad", subject: "Verbal" },
      { name: "Amaan", subject: "Reasoning" },
      { name: "Arhaan", subject: "Quant" },
      { name: "Test", subject: "Test2" },
      
    ];
    var navi=useNavigate();
    const data = {
      labels: ["Average", "Good", "Not Good"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "rgb(0,200, 150)",
            "rgb(200, 50, 80)",
            "rgb(0,200, 200)",
          ],
          borderWidth: 2,
          hoverOffset: 10,
        },
      ],
    };
    async function caller() {
      try {
        // https://easyquizy.onrender.com
        // var {data} = await axios.get("http://localhost:9800/getusers");
        //  console.log(data);
        var { data } = await axios.get(
          "https://easyquizy.onrender.com/getusers"
        );
        // console.log(data);
        setarr(data);
        var data2 = await axios.get("http://localhost:9800/getresult");
        setarr_2(data2.data);
        //http:localhost:9800/getresult

        
      } catch (e) {
        console.log(e.message);
        seterr(e.message);
      }
    }
    const data2 = {
      labels:
        arr2.length !== 0
          ? user_arr
          : ["green ", "red", "orange", "white", "black"],
      datasets: [
        {
          label: "My First Dataset",
          data: arr2.length !== 0 ? per_arr : [0,0,0,0,0],

          backgroundColor: [
            "rgb(0, 242, 255)",
            "rgb(14, 164, 233",
            "rgb(37, 119, 243)",
            "rgb(0, 242, 255)",
            "rgb(14, 164, 233",
          ],
          hoverOffset: 4,
          borderColor: "rgb(0, 242, 255)",
        },
      ],
    };
    const data3 = {
      labels:
        arr2.length !== 0
          ? user_arr
          : ["green ", "red", "orange", "white", "black"],
      datasets: [
        {
          fill: true,
          label: "My First Dataset",
          data: arr2.length !== 0 ? per_arr : [250, 50, 200, 70, 100],
          // backgroundColor: [
          //   "rgb(0, 242, 255)",
          //   "rgb(14, 164, 233",
          //   "rgb(37, 119, 243)",
          //   "rgb(0, 242, 255)",
          //   "rgb(14, 164, 233",
          // ],
          hoverOffset: 4,
          borderColor: "rgb(14, 164, 233)",
          // borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
        // {
        //   fill: true,
        //   label: "My First Dataset",
        //   data: [150, 20, 100, 40, 30, 43],

        //   // backgroundColor: [
        //   //   "rgb(0, 242, 255)",
        //   //   "rgb(14, 164, 233",
        //   //   "rgb(37, 119, 243)",
        //   //   "rgb(0, 242, 255)",
        //   //   "rgb(14, 164, 233",
        //   // ],
        //   hoverOffset: 4,
        //   backgroundColor: "rgba(53, 162, 235, 0.4)",
        //   borderColor: "rgb(53, 242, 255)",
        // },
      ],
    };
    useEffect(()=>{
      caller();
    },[])
  try{
    return (
      <div id="admindash">
        <div id="sidebar">
          <h1 id="sidh_1">Admin Dashboard</h1>
          <div id="coloured">
            <div id="samehead">Home</div>
            <div
              onClick={() => {
                navi("/");
              }}
              id="samehead"
            >
              Logout
            </div>
          </div>
        </div>
        <div id="mainbar">
          <div id="uppergraph">
            <div id="sameuppers">
              <Line data={data3} />
            </div>
            <div id="sameuppers">
              {" "}
              <Doughnut data={data} />
            </div>
          </div>
          <div id="downs">
            <div id="lists">
              <h4 id="h_4_test">List of Test</h4>
              <div id="actualdowns">
                {arr.length != 0 ? (
                  arr.map((e,i)=>{
                  var c=(e.name ? JSON.parse(e.name)[1] : "no there");

                    return (
                      <div
                        onClick={() => {
                          console.log(c.subject);
                          setsel(c.subject);
                          setid(i);
                        }}
                        id={i === spec_id ? "ls0_" : "null"}
                        key={i}
                        className="ls_"
                      >
                        <div>{c.name}</div>
                        <div>{c.subject}</div>
                      </div>
                    );
                  })
                ) : (
                  list_s.map((e, i) => {
                    return (
                      <div
                        id={`ls${i}_`}
                        key={i}
                        className="ls_"
                      >
                        <div>{e.name}</div>
                        <div>{e.subject}</div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
            <div id="samedowns">
              <Bar data={data2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  catch(e){
    console.log(e.message);
  }
}

