import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import ProductPage from './Components/ProductPage';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Bebakoof.com</h1>
      <HomePage/>
      <ProductPage/>
      {/* <Sidebar/> */}
    </div>
  );
}

export default App;
