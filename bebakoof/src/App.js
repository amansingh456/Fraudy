import './App.css';
import HomePage from './Pages/HomePage';
import ProductPage from './Components/ProductPage';
import Payment from './Pages/Payment';
import Success from './Pages/Success';


function App() {
  return (
    <div className="App">
      <h1>Bebakoof.com</h1>
      {/* <HomePage/> */}
      <Payment/>
      {/* <Success/> */}
      {/* <ProductPage/> */}
      {/* <Sidebar/> */}
    </div>
  );
}

export default App;
