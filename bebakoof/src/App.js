import './App.css';

import Navbar from './Components/Navbar';
import Allroutes from './Components/Allroutes';
import {CartPage} from "./Pages/CartPage"


function App() {
 
  return (
    <div className="App">
      
      {/* <Navbar/>
      <Allroutes/> */}
      <CartPage />

    </div>
  );
}

export default App;
