
import './App.css';

import {Provider} from "react-redux";
import Home from './Component/Home';
import store from './Redux/store';
function App() {

  return (
    <Provider  store={store}>
      <div>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
