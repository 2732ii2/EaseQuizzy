
import './App.css';

import {Provider} from "react-redux";
import Home from './Component/Home';
import store from './Redux/store';
function App() {

  try{
    return (
    <Provider  store={store}>
      <div>
        <Home />
      </div>
    </Provider>
  );
  }
  catch(e){
    console.log(e.message);
  }
}

export default App;
