import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import style from "./HeaderCartButton.module.css";
import CartContext from "../../Store/CartContext";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  const noOfItem = ctx.items.reduce((currNum, item) => {
    return currNum + item.item.quantity; // Access the quantity directly from the item object
  }, 0);

  return (
    <button className={style.button} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={style.badge}>{noOfItem}</span>
    </button>
  );
};

export default HeaderCartButton;