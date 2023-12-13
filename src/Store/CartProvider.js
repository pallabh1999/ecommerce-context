import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CartContext from './CartContext';

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const userDetailsFromStorage = JSON.parse(localStorage.getItem('userDetails'));
  const initialToken = userDetailsFromStorage ? userDetailsFromStorage.token : null;
  const initialEmail = userDetailsFromStorage ? userDetailsFromStorage.email : '';
  const [emailAdd, setEmail] = useState(initialEmail);
  const [token, setToken] = useState(initialToken);
  const userLoggedIn = !!token;

  //  console.log(cartItems);

  


  //---------------ADDING AND REMOVING CART FUNCTIONALITIES----------///
  
  const addToCartHandler = (data) => {
     setCartItems((prevItems) => {
       const existingItem = prevItems.find(
         (cartItem) => cartItem.item.title === data.item.title 
       );
       if (existingItem) {
        const updatedItems = prevItems.map((cartItem) =>
          cartItem.item.title === data.item.title
            ? { ...cartItem, item: { ...cartItem.item, quantity: cartItem.item.quantity + 1 } }
            : cartItem
        );
        return updatedItems;
      }
  
      return [
        ...prevItems,
        {
          id: data.id,
          item: { ...data.item, quantity: 1 },
        },
      ];
    });
  };

// The part of the code that ensures the items in the cart remain the same after refreshing the page
  useEffect(() => {
    fetchCartData();
  },[emailAdd]);

    const fetchCartData = async () => {
      if (emailAdd) {
        try {
          const response = await axios.get(`https://crudcrud.com/api/50b6386e79fa40ffba42d120115e915e/cart`);
          const data = response.data;
          const filteredItems = data.filter(item => item.email === emailAdd); // checking for those object which have same mail id through which we logged in
          const transformedData = filteredItems.map((itemObj) => ({
            id: itemObj._id,
            item: itemObj.item,
            ///storing in object from with id from backend and item details and passing it to add to cart handler
          }));
          transformedData.forEach(obj => {
            addToCartHandler(obj)
          });
        } catch (error) {
          console.error('Error fetching cart items:', error.message);
        }
      }
    };
    

 
 const   removeFromCartHandler = async (item) => {
    try {
     const id = item.id;
     const response = await axios.delete(`https://crudcrud.com/api/50b6386e79fa40ffba42d120115e915e/cart/${id}`)// deleted from database with id
     
     const status = response.status; /// checking status of api request

     if (status !== 200) {
       throw new Error('Failed to remove item from cart.');
     }

     clearCartHandler(); /// clear cart 
     fetchCartData(); // fetching fresh data with updated quantity 
     console.log('Item removed from cart successfully.');
   } catch (error) {
     console.error(error.message);
   }


 };
  const clearCartHandler = () => {
    setCartItems([]);
  }

  //------------------HANDLING USER FUNCTIONALITIES----------------------------//

const logInHandler = (token, mail) => {
    const userDetails = {
      token: token,
      email: mail
    }
    localStorage.setItem('userDetails', JSON.stringify(userDetails))
    setToken(token);
    setEmail(mail);
  }

  const autoLogout = () => {
    logOutHandler();
  };

  useEffect(() => {
    let logoutTimer;
    if (token) {
      logoutTimer = setTimeout(() => {
        autoLogout();
      }, 5 * 60 * 1000);
    }
    return () => clearTimeout(logoutTimer);
  },);

  const logOutHandler = () => {
    setToken(null);
    localStorage.removeItem('userDetails');
    setEmail("");
    setCartItems([])
  }


  //--------------CONTACT FORM DETAIlS----//
  async function userDetailHandler(user) {
    console.log(user);
    const response = await fetch('https://pallecom-default-rtdb.firebaseio.com//intractedUser.json', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
  }

  //---------API HANDLING----//

  const cartContext = {
    items: cartItems,
    totalAmount: 0,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    clearCart: clearCartHandler,
    contactForm: userDetailHandler,
    token: token,
    login: logInHandler,
    logOut: logOutHandler,
    isLoggedIn: userLoggedIn,
    email: emailAdd

  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
