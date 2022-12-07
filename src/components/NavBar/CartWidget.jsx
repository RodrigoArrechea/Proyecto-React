import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const carrito = { maxWidth: "25px", marginTop:"8px"};

function CartWidget() {
  //3. Inicializamos el contexto deseado
  const miContext = useContext(cartContext);

  return (
    <>
      <Link to="/cart"><img src="../imgs/carrito.png" alt="carrito" style={carrito}></img></Link>
      <span style={{ color: "red" }}>{miContext.itemsInCart()}</span>
    </>
  )
  
}

export default CartWidget;