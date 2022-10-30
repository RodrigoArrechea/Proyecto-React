import React from 'react'
import "./item.scss";

function ItemListContainer(props) {
  return (
    <div className="titulo">{props.text}</div>
  )
}

export default ItemListContainer