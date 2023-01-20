import './App.css';
import { CartRight } from './Components/Cart/CartRight';
import { ProductCard } from './Components/ProductCard';
import { CartPage } from './Pages/CartPage';
import { WishlistPage } from './Pages/WishlistPage';
import ProductPage from './Components/ProductPage';
import { MayLikeCard } from './Components/MayLikeCard';
import { EmptyCart } from './Components/EmptyCart';
import { EmptyWishlist } from './Components/EmptyWishlist';


function App() {
  let data=JSON.parse(localStorage.getItem("wishlist")) || []
  return (
    <div className="App">
      <h1>Bebakoof.com</h1>
      {/* <CartPage /> */}
      <MayLikeCard data={data}/>
      <ProductPage/> 
      {/* <Sidebar/> */}
      {/* <EmptyCart />
      <EmptyWishlist /> */}
    </div>
  );
}

export default App;
