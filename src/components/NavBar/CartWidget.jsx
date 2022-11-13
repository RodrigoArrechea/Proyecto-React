import React from "react";

const carrito = { maxWidth: "25px", marginTop:"8px"};

function CartWidget() {
  return <a><img src="../imgs/carrito.png" alt="carrito" style={carrito}></img></a>
}

export default CartWidget;