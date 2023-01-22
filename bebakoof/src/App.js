import './App.css';

import Navbar from './Components/Navbar';
import Allroutes from './Components/Allroutes';
import ProductPage from './Components/ProductPage';
import Footer from './Components/Footer/Footer';



function App() {
 
  return (
    <div className="App">
      {/* <ProductPage/> */}
      <Navbar/>
      <Allroutes/>
      <Footer/>

    </div>
  );
}

export default App;
