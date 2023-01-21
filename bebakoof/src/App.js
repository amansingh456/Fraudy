import './App.css';
import HomePage from './Pages/HomePage';
import ProductPage from './Components/ProductPage';
import Payment from './Pages/Payment';
import Success from './Pages/Success';
import Navbar from './Components/Navbar';
import Allroutes from './Components/Allroutes';


function App() {
  return (
    <div className="App">
      <h1>Bebakoof.com</h1>
      {/* <HomePage/> */}
      <Payment/>
      {/* <Success/> */}
      {/* <ProductPage/> */}
      {/* <Sidebar/> */}
      <Navbar/>
      <Allroutes/>
    </div>
  );
}

export default App;
