function ItemDetail({ name, price }) {
    return (
      <div className="product-detail">
        <h2>{name}</h2>
        <p>Precio: ${price}</p>
        <button>Añadir al carrito</button>
      </div>
    );
  }
  
  export default ItemDetail;
  