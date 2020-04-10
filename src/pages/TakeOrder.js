import React, { useState } from 'react';

// controllers
import { addProduct, subtractQuantityOfProduct, deleteProduct } from '../controllers/TakeOrder';

// components
import ProductsContainer from '../components/ProductsContainer';
import OrderContainer from '../components/OrderContainer';
import Header from '../components/Header';

const TakeOrder = () => {
  const [orderProducts, setOrderProducts] = useState([]);

  const updatingOrder = (item, action) => {
    let updatedOrder;
    if (action === 'ADD') {
      updatedOrder = addProduct(orderProducts, item);
    } if (action === 'MINUS') {
      updatedOrder = subtractQuantityOfProduct(orderProducts, item._id);
    } if (action === 'DELETE') {
      updatedOrder = deleteProduct(orderProducts, item._id);
    } if (action === 'SEND') {
      updatedOrder = [];
    }
    setOrderProducts(updatedOrder);
  };

  const sendingOrder = (orderData) => {
    console.log(orderData);
    // updatingOrder(null, 'SEND');
  };

  return (
    <>
      <Header />
      <div className="d-flex main-container">
        <ProductsContainer addingAProductToTheOrder={updatingOrder} />
        <OrderContainer
          arrProducts={orderProducts}
          updatingOrder={updatingOrder}
          sendOrder={sendingOrder}
        />
      </div>
    </>
  );
};

export default TakeOrder;
