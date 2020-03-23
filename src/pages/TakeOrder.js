import React, { useState } from 'react';

// controllers
import { addProduct } from '../controllersTakeOrder';

// components
import ProductsContainer from '../components/ProductsContainer';
import OrderContainer from '../components/OrderContainer';

const TakeOrder = () => {
  const [orderProducts, setOrderProducts] = useState(null);

  const updatingOrder = (arrOrder, gettingUpdatedOrder) => (
    (product) => setOrderProducts(gettingUpdatedOrder(arrOrder, product))
  );

  return (
    <div className="d-flex main-container">
      <ProductsContainer addingAProductToTheOrder={updatingOrder(orderProducts, addProduct)} />
      <OrderContainer arrProducts={orderProducts} />
    </div>
  );
};

export default TakeOrder;
