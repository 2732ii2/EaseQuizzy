import axios from "axios";

export async function send(dat_a) {
  try {
    // var data = await axios.get("http://localhost:9800");
    var data = await axios.post("http://localhost:9800/users", dat_a);
    console.log(data);
  } catch (e) {
    console.log(e.message);
  }
}
