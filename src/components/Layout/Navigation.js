import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import HeaderCartButton from '../Cart/HeaderCartButton';
import CartContext from '../../Store/CartContext';

const Navigation = (props) => {
  const ctx = useContext(CartContext);

const logoutButton = ()=>{
  ctx.logOut();
  props.onClose()
}

  return (
    <nav className='navbar'>
      <ul className='nav-links'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>

        </li>
        {
        ctx.isLoggedIn && <li>
        <Link to="/store">Store</Link>
        </li>
         }
          
        <li>
          <Link to="/contactUs">contact Us</Link>
        </li>
      </ul>
      {
      ctx.isLoggedIn && <div className='cartBtn'>
      <HeaderCartButton onClick={props.onClick} /> 
    </div>
         }
       {
        ctx.isLoggedIn && <button onClick={logoutButton}>
          <Link to='/login'>Logout
            </Link>
          </button>
         }
         {
          !ctx.isLoggedIn && <button>
          <Link to="/login">Login</Link>
          </button>
           }
    </nav>
  );
};

export default Navigation;
