import "./itemcount.css";
import React, { useState } from "react";
import MyButton from "../MyButton/MyButton";

function ItemCount({ stock, onAddToCart }){
    let [count, setCount] = useState(1)

    function handleAdd(){
        if (count < stock) setCount(count + 1);
    }

    function handleSubstract(){
        if (count > 1) setCount(count - 1);
    }

    return(
        <div className="count">
            <MyButton onTouchButton={handleSubstract}>-</MyButton>
            <span className="number">{count}</span>
            <MyButton onTouchButton={handleAdd}>+</MyButton>
             {/* 3. agregar un onClick con el evento recibido por Props */}
            <MyButton onTouchButton={() => onAddToCart(count)}>Agregar al Carrito</MyButton>
        </div>    
    )
}

export default ItemCount;