import React, { useContext, Fragment  } from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from '../components/Proucts/Product';
import About from '../Page/About';
import Home from '../Page/Home';
import ContactUs from '../Page/Contact';
import Iphone from '../components/Proucts/ProductDetails/Iphone';
import Sofa from '../components/Proucts/ProductDetails/Sofa';
import Shoes from '../components/Proucts/ProductDetails/Shoes';
import TVSet from '../components/Proucts/ProductDetails/TVSet';
import AuthForm from '../Authentication/AuthForm'
import CartContext from '../Store/CartContext';

const PageRoutes = ()=>{
const ctx = useContext(CartContext);

return(
    <Fragment>
  <Routes>
    <Route path="/"               element={<Home/>} />
    <Route path="/login"          element={<AuthForm />} />
    <Route path="/about"          element={<About />} />
    <Route path="/contactUs"      element={<ContactUs />} />
    <Route path='*'               element={<Home/>} />
    <Route path="/store"          element={ !ctx.isLoggedIn ? <AuthForm /> : <Product />} /> 
   { ctx.isLoggedIn &&    <Route path="/store/iphone"   element={<Iphone />} />}
   { ctx.isLoggedIn &&   <Route path="/store/sofa"     element={<Sofa />} />}
   { ctx.isLoggedIn &&    <Route path="/store/shoes"    element={<Shoes />} />}
   { ctx.isLoggedIn &&    <Route path="/store/tvset"    element={<TVSet />} />}
  </Routes> 
    </Fragment>
);
}

export default  PageRoutes;