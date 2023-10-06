import axios from "axios";

export async function send(dat_a) {
  try {
    // var data = await axios.get("http://localhost:9800");
    // https://easyquizy.onrender.com/
    // var data = await axios.post("http://localhost:9800/users", dat_a);
    var data = await axios.post("https://easyquizy.onrender.com/users", dat_a);

    console.log(data);
  } catch (e) {
    console.log(e.message);
  }
}

export async function res_submit(data){
     try{
      var data = await axios.post("http://localhost:9800/result", data);
      console.log(data);
     }
     catch(e){
      console.log(e.message);
     }
}