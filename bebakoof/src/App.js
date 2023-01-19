import './App.css';
import { CartRight } from './Components/Cart/CartRight';
import { ProductCard } from './Components/ProductCard';
import { CartPage } from './Pages/CartPage';
import { WishlistPage } from './Pages/WishlistPage';

function App() {
  return (
    <div className="App">
      <CartPage />
      {/* <WishlistPage /> */}
      {/* <CartRight /> */}
      {/* <ProductCard /> */}
    </div>
  );
}

export default App;
