import React from 'react'
import { useSelector } from 'react-redux'

export default function Result() {
    var name; 
    const redux_state = useSelector((state) => state);
    try{
        console.log(redux_state.arr, redux_state.questi_l[0].y);
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
    }catch(e){
        console.log(e.message);
    }
  return (
    <div id="result">
      {name ? (
        <div id="resu_same">Result of {name} Test</div>
      ) : (
        <di id="resu_same" v>
          Go And give test
        </di>
      )}
    </div>
  );
}
