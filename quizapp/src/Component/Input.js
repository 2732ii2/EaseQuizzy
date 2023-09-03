import React from 'react'

export default function Input(number) {
  // console.log(number.keys);
  return (
    <div
      style={{
        width: "100%",
        // border:"1px solid white",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      {number.number}
      <input
        id="inp_ut"
        style={{
          width: "80%",
          height: "40px",
          marginLeft: "10px",
          borderRadius: "20px",
        }}
        onChange={(e) => {
          // console.log(e.target.value);
          number.value(e.target.value, number.keys,number.number);
          if (e.target.value) {
            e.target.style.background = "transparent";
            e.target.style.color = "white";
            e.target.style.border = "1px solid green";
          } else {
            e.target.style.background = "white";
          }
        }}
      />
    </div>
  );
}
