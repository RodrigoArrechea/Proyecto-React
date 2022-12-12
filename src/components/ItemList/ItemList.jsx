import React from "react";
import Item from "./Item";
import "./itemlist.css";

function ItemList({ products }) {
  return (
    <div>
      <p className="title">Bienvenidos a nuestra tienda online.</p>
      <p className="list">Nuestros productos:</p>
      <div className="item-list">
        {products.map((product) => {
          return (
            <Item
              key={product.id}
              id={product.id}
              imgurl={product.imgurl}
              title={product.title}
              price={product.price}
              category={product.category}
              brand={product.brand}
              discount={product.discount}
            />
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(ItemList);