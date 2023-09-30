import React from 'react'
import "./Dashboard.css";
import Chart from "chart.js/auto";
import { Doughnut,Bar ,Line} from "react-chartjs-2";
import { useNavigate } from 'react-router-dom';
export default function AdDash() {

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
    const data2 = {
      labels: ["green ", "red", "orange", "white", "black","less"],
      datasets: [
        {
          label: "My First Dataset",
          data: [250, 50, 200, 70, 100],

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
      labels: ["green ", "red", "orange", "white", "black","less"],
      datasets: [
        {
          fill: true,
          label: "My First Dataset",
          data: [250, 50, 200, 70, 100,207],
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
        {
          fill: true,
          label: "My First Dataset",
          data: [150, 20, 100, 40, 30, 43],

          // backgroundColor: [
          //   "rgb(0, 242, 255)",
          //   "rgb(14, 164, 233",
          //   "rgb(37, 119, 243)",
          //   "rgb(0, 242, 255)",
          //   "rgb(14, 164, 233",
          // ],
          hoverOffset: 4,
          backgroundColor: "rgba(53, 162, 235, 0.4)",
          borderColor: "rgb(53, 242, 255)",
        },
      ],
    };
  return (
    <div id="admindash">
      <div id="sidebar">
        <h1 id="sidh_1">Admin Dashboard</h1>
        <div id="coloured">
          <div id="samehead">Home</div>
          <div onClick={()=>{
            navi("/");
          }} id="samehead">Logout</div>
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
                <h4 id='h_4_test'>List of Test</h4>
                <div id='actualdowns'>
                  {
                    list_s.map((e,i)=>{
                      return (
                        <div id={`ls${i}_`} className="ls_">
                          <div>{e.name}</div>
                          <div>{e.subject}</div>
                        </div>
                      );
                    })
                  }

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

