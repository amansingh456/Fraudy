import './App.css';
import { CartRight } from './Components/Cart/CartRight';
import { ProductCard } from './Components/ProductCard';
import { CartPage } from './Pages/CartPage';
import { WishlistPage } from './Pages/WishlistPage';
import { MayLikeCard } from './Components/MayLikeCard';
import { EmptyCart } from './Components/EmptyCart';
import { EmptyWishlist } from './Components/EmptyWishlist';
import ProductPage from "./Components/ProductPage"

function App() {
 
  return (
    <div className="App">
      <h1>Bebakoof.com</h1>
      <CartPage />
      <MayLikeCard />
      <ProductPage/> 
      {/* <Sidebar/> */}
      {/* <EmptyCart />
      <EmptyWishlist /> */}
    </div>
  );
}

export default App;
