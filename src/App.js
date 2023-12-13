import React, { useContext, useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Footer from './components/UI/Footer';
import Header from './components/UI/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './Store/CartProvider';
import PageRoutes from './Routes/PageRoutes';
import CartContext from './Store/CartContext';
function App() {
const [cartShown, setCartShown] = useState(false);

 const ctx = useContext(CartContext);
 const isLogged = ctx.isLoggedIn;
 
 console.log(isLogged);
  const hideCartHandle = () => {
    setCartShown(false);
    
  };

  const showCartHandler = () => {
    setCartShown(true);
  };
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          {cartShown && <Cart onClose={hideCartHandle} />}
          <Header onClick={showCartHandler} onClose={hideCartHandle}/>
           <PageRoutes/>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
