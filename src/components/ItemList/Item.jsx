import React from "react";
import MyButton from "../MyButton/MyButton";
import ToggleButton from "../ToggleButton/ToggleButton";
import "./item.css";
import { Link } from "react-router-dom";

function Item({ title, imgurl, price, id, brand, discount, stock }) {
  const urlDetail = `/detail/${id}`;
  const stylePrice = { color: discount && "#2CCC10" };

  return (
    <div className="card">
      <ToggleButton icon="♥" />
      <div className="card-img">
        <img src={imgurl} alt={title} />
      </div>
      <div className="card_detail">
        <h3 className="titleTag">{title}</h3>
        <p>{brand}</p>
        <h4 style={stylePrice} className="priceTag">$ {price}</h4>
        {discount && <small>{discount} OFF.</small>}
        {stock <= 0 && <span>Sin stock disponible</span>}
      </div>
      <Link to={urlDetail}>
        <MyButton>Ver más</MyButton>
      </Link>
    </div>
  );
}

export default Item;