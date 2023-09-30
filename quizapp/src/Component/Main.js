import React, { useState } from 'react'
import clock from "../clock.jpg";
import { useNavigate } from 'react-router-dom';

export default function Main() {
  var [select, setselect] = useState("student");
  var navi=  useNavigate();
  return (
    <div id="main">
      <h1 id="h_1">Quiz Learning Platform</h1>
      <p id="p_">Easy to create and Easy to use</p>
      <img
        src={clock}
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          objectFit: "contain",
          marginTop: "3%",
        }}
      />
      <select
        onChange={(e) => {
          console.log(e.target.value);
          setselect(e.target.value);
        }}
        className="classic"
        id="select_"
      >
        <option> Select An Option </option>
        <option value="student"> Student </option>
        <option value="admin"> Admin </option>
        <option value="dashboard"> Admin Dashboard </option>
      </select>

      <div>
        {select === "student" ? (
          <h2 id="same">Ready to Learn and Play </h2>
        ) : select == "admin" ? (
          <h2 id="same"> You want to create a Quiz </h2>
        ) : (
          <h2 id="same"> Welcome Sir to your dashboard </h2>
        )}
      </div>
      <div id="last_">
        <button
          onClick={() => {
            if (select == "admin") {
              navi("/admin");
            } else if (select == "student") {
              navi("/student");
            } else  {
              navi("/dashboard");
            }
          }}
          id="btn"
        >
          Next{" "}
        </button>
      </div>
    </div>
  );
}
