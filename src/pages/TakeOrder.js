import React, { useState } from 'react';

// controllers
import { addProduct, subtractQuantityOfProduct, deleteProduct } from '../controllersTakeOrder';

// components
import ProductsContainer from '../components/ProductsContainer';
import OrderContainer from '../components/OrderContainer';

const TakeOrder = () => {
  const [orderProducts, setOrderProducts] = useState(null);

  const updatingOrder = (item, action) => {
    let updatedOrder;
    if (action === 'ADD') {
      updatedOrder = addProduct(orderProducts, item);
    } if (action === 'MINUS') {
      updatedOrder = subtractQuantityOfProduct(orderProducts, item._id);
    } if (action === 'DELETE') {
      updatedOrder = deleteProduct(orderProducts, item._id);
    }
    setOrderProducts(updatedOrder);
  };

  return (
    <div className="d-flex main-container">
      <ProductsContainer addingAProductToTheOrder={updatingOrder} />
      <OrderContainer arrProducts={orderProducts} updatingOrder={updatingOrder} />
    </div>
  );
};

export default TakeOrder;
