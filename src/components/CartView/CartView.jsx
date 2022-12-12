import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import MyButton from "../MyButton/MyButton";
import "./cartview.css";
import { createOrder } from "../../Services/firestore";
import { useNavigate } from "react-router-dom";
import CartForm from "./CartForm";

function CartView() {
  const { cart, removeItem, clear, priceInCart } = useContext(cartContext);
  let navigate = useNavigate();

  if (cart.length === 0)
    return (
      <div className="cart-container">
        <p className="title">Su carrito se encuentra vacío.</p>
      </div>
    );

    async function handleCheckout(evt, data) {
      const order = {
        buyer: data,
        items: cart,
        total: priceInCart(),
        date: new Date(),
      };
  
      const orderId = await createOrder(order);
      navigate(`/thankyou/${orderId}`);
    }

  return (
    <div className="cart-container">
      <h2 className="total">Usted está comprando:</h2>
      <div className="cart-itemsList">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imgurl} alt={item.title} />
            <h2 className="titleProduct">{item.title}</h2>
            <h5>Precio: ${item.price}</h5>
            <h5>unidades: {item.count}</h5>
            <h5>Total: ${item.price * item.count}</h5>
            <MyButton onTouchButton={() => removeItem(item.id)} colorBtn="red">
              X
            </MyButton>
          </div>
        ))}
      </div>
      <CartForm onSubmit={handleCheckout} />
      <div className="empty"><MyButton onTouchButton={() => clear()}>Vaciar carrito</MyButton></div>
    </div>
  );
}

export default CartView;