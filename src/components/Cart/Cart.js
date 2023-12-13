import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../Store/CartContext';

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const cartItems = cartContext.items;

  const removeItemHandler = (item) => {
    cartContext.removeFromCart(item); 
  };

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const amount = cartItems.reduce(
      (total, item) => total + item.item.price * item.item.quantity, 
      0
    );
    setTotalAmount(amount);
  }, [cartItems]);

  const cartItemsList = cartItems.map((item) => (
    <CartItem
      key={item.id} 
      item={item.item} 
      onRemove={() => removeItemHandler(item)}
    />
  ))
  const orderHandler = () => {
    alert('Thank you for ordering....');
    props.onClose();
    cartContext.clearCart();
  };

  return (
    <Modal onClose={props.onClose}>
      <button className="close" onClick={props.onClose}>
        X
      </button>
      <ul className="cart-items">{cartItemsList}</ul>
      <hr />
      <div className="total">
        <span>Total amount:</span>
        <span>Rs: {totalAmount.toFixed(2)}</span>
      </div>
      <div className="actions">
        <button className="button" onClick={orderHandler}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
