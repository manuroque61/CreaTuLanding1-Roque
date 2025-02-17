import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../data/products";
import Item from "../Item/Item";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts().then((products) => {
      if (categoryId) {
        setItems(products.filter((prod) => prod.category === categoryId));
      } else {
        setItems(products);
      }
    });
  }, [categoryId]);

  return (
    <div>
      <h2>{greeting}</h2>
      <div className="product-list">
        {items.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
