import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  removeFromCart: (item) => { },
  addToCart: (items) => {},
  contactForm: (user) => { },
  clearCart: {},
  token: '',
  isLoggedIn: false,
  login: (token,mail) => {},
  logOut: () => { },
  email : ''

});

export default CartContext;