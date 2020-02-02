import React from 'react';

// components
import ProductsContainer from '../components/ProductsContainer';
import OrderContainer from '../components/OrderContainer';


function TakeOrder() {
  return (
    <div className="d-flex">
      <ProductsContainer></ProductsContainer>
      <OrderContainer></OrderContainer>
    </div>
  );
}

export default TakeOrder;