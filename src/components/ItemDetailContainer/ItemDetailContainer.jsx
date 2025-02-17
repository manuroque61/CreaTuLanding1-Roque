import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId).then((data) => setProduct(data));
  }, [itemId]);

  return (
    <div>
      {product ? <ItemDetail {...product} /> : <p>Cargando...</p>}
    </div>
  );
}

export default ItemDetailContainer;
