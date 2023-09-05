import React from 'react'
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from 'react-router-dom';
export default function Block({b,a}) {
    // console.log(b,a);

    
   var navi= useNavigate();
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          fontWeight: 400,
          letterSpacing: "2px",
          wordSpacing: "4px",
        }}
      >
        Subject : {b.subject}
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          marginTop: "-4px",
          fontWeight: 500,
          letterSpacing: "1px",
          textTransform: "capitalize",
        }}
      >
        {" "}
        created by : {b.name}
      </p>
      <p
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: 250,
          marginTop: "70px",
          letterSpacing: "1px",
          textTransform: "capitalize",
        }}
      >
        {" "}
        Time Given : 20 Min{" "}
      </p>
      <button
        onClick={() => {
          // console.log({b,a});

          if (!JSON.parse(localStorage.getItem("test"))) {
            localStorage.setItem("test", JSON.stringify(b));
          }
          navi("/student/test");
        }}
        style={{
          width: "100px",
          height: "40px",
          background: "rgba(0,0,0,.5)",
          borderRadius: "20px",
          marginLeft: "38%",
          border: "1.3px solid white",
          outline: "none",
          marginTop: "40px",
        }}
      >
        <PlayArrowIcon style={{ fontSize: "28px", color: "white" }} />
      </button>
    </>
  );
}
