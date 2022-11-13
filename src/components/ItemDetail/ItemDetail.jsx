import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";

function ItemDetail({ product }) {
  if(product.category==="Accesorios"){
    return (
      <div className="card-detail">
        <div className="card-detail_img">
          <img src={product.imgurl} alt="Product img" />
          <div>
            <h2 className="modelTitle">{product.title}</h2>
            <p className="description">{product.description}</p>
          </div>
        </div>
        <h5 className="features">Características:</h5>
        <div className="data">
          <p>Marca: {product.brand}.</p>
          <p>Color: {product.color}.</p>
        </div>
        <p className="stock">Stock disponible: {product.stock} unidades.</p>
        <div className="card-detail_detail">
          <h4 className="price">$ {product.price}</h4>
          <ItemCount />
        </div>
      </div>
    )
  }else{
    return (
      <div className="card-detail">
        <div className="card-detail_img">
          <img src={product.imgurl} alt="Product img" />
          <div>
            <h2 className="modelTitle">{product.brand} {product.title}</h2>
            <p className="description">{product.description}</p>
          </div>
        </div>
        <h5 className="features">Características:</h5>
        <div className="data">
          <p>Color: {product.color}.</p>
          <p>Cámara trasera: {product.camera}.</p>
          <p>Cámara frontal: {product.frontalCamera}.</p>
          <p>Pantalla: {product.screen}.</p>
          <p>Memoria RAM: {product.ram}.</p>
          <p>Memoria interna: {product.internalMemory}.</p>
          <p>Sistema operativo: {product.operatingSystem}.</p>
          <p>Procesador: {product.processor}.</p>
          <p>Batería: {product.batery}.</p>
        </div>
        <p className="stock">Stock disponible: {product.stock} unidades.</p>
        <div className="card-detail_detail">
          <h4 className="price">$ {product.price}</h4>
          <ItemCount />
        </div>
      </div>
    )
  };
}

export default ItemDetail;