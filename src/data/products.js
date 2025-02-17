const products = [
    { id: "1", name: "Sommier King Size", category: "camas", price: 5000 },
    { id: "2", name: "Juego de sillas x 6 unidades", category: "sillas", price: 8000 },
    { id: "3", name: "Mesa de madera para comedor", category: "mesas", price: 15000 }
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products), 1000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(products.find(prod => prod.id === id)), 1000);
    });
  };
  