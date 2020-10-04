import React, { useState } from 'react';

// controllers
import { addProduct, subtractQuantityOfProduct, deleteProduct } from '../controllers/TakeOrder';
import sendOrder from '../controllers/orders-data';

// components
import ProductsContainer from '../components/take-order/ProductsContainer';
import OrderContainer from '../components/take-order/OrderContainer';
import Header from '../components/Header';
import { getItemSessionStorage } from '../controllers/auth-data';
import getUserDataByUid from '../controllers/users-data';

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
    } if (action === 'RESET') {
      updatedOrder = [];
    }
    setOrderProducts(updatedOrder);
  };

  const sendingOrder = (orderData) => {
    const userEmail = getItemSessionStorage('email');
    getUserDataByUid(userEmail)
      .then((dataUser) => sendOrder({ userId: dataUser._id, ...orderData }))
      .then(() => {
        updatingOrder(null, 'RESET');
      });
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
