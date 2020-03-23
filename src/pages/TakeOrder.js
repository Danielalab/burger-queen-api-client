import React, { useState } from 'react';

// components
import ProductsContainer from '../components/ProductsContainer';
import OrderContainer from '../components/OrderContainer';

const findProductById = (orderProducts, newProduct) => (
  orderProducts.find((product) => product._id === newProduct._id)
);

const addProduct = (orderProducts, newProduct) => {
  if (!orderProducts) {
    return [{ ...newProduct, qty: 1 }];
  }
  if (findProductById(orderProducts, newProduct)) {
    return orderProducts.map((product) => ((product._id === newProduct._id)
      ? ({ ...product, qty: product.qty + 1 })
      : product));
  }
  return [
    ...(orderProducts.map((product) => ({ ...product }))),
    { ...newProduct, qty: 1 }];
};

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
