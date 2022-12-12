import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import "./navbar.css";

function CartWidget() {
  const miContext = useContext(cartContext);

  return (
    <div>
      <Link to="/cart"><img src="../imgs/carrito.png" alt="carrito" className="carrito"></img></Link>
      <span className="counter">{miContext.itemsInCart()}</span>
    </div>
  )
}

export default CartWidget;