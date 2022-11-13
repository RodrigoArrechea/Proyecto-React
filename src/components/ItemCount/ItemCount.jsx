import "./itemcount.css";
import React, { useState } from "react";

function ItemCount(){
    let [count, setCount] = useState(1)

    function handleSuma(){
        if(count < 100)
        setCount(count+1);
    }

    function handleResta(){
        if (count > 1)
        setCount(count-1);
    }

    return(
        <div className="count">
            <button className="more" onClick={handleResta}>-</button>
            <span className="number">{count}</span>
            <button className="more" onClick={handleSuma}>+</button>
            <button className="moreProducts">Agregar al Carrito</button>
        </div>    
    )
}

export default ItemCount;