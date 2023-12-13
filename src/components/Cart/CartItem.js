import React from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, price, imageUrl, quantity } = props.item;

  const handleRemove = () => {
    props.onRemove(props.item);
  };
  return (
    <React.Fragment>
      <li className={classes['cartItem-row']}>
        <div className={classes['cartItem-header']}>
          <span className={classes['cartItem-item']}>
            <img className={classes['cartItem-img']} src={imageUrl} alt={title} />
            <span>{title}</span>
          </span>
          <span className={classes['cartItem-price']}>price: {price}</span>
          <span className={classes['cartItem-quantity']}>
            Quantity: {quantity}
           
            <button onClick={handleRemove} className={classes.removeButton}>
              REMOVE
            </button>
          </span>
        </div>
      </li>
      <hr />
    </React.Fragment>
  );
};

export default CartItem;