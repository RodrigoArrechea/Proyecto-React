import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "./itemlist.css";
import { getItemsByCategory, getItemsOrdered } from "../../Services/firestore";
import Loader from "../Loaders/Loader";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState(null);
  const { idCategory } = useParams();

  async function getItemsAsync() {
    if( !idCategory ){
      let respuesta = await getItemsOrdered();
      setProducts(respuesta);
    }
    else {
      let respuesta = await getItemsByCategory(idCategory)
      setProducts(respuesta)
    }
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory]); 

  return (
    <div>
      {products ? <ItemList products={products} /> : <Loader size={100} color="#07E82B" speed={1.8}/>}
    </div>
  )
}

export default ItemListContainer