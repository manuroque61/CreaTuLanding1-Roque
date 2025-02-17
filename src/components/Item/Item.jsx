import { Link } from "react-router-dom";

function Item({ id, name, price }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <Link to={`/item/${id}`}>Ver Detalle</Link>
    </div>
  );
}

export default Item;
