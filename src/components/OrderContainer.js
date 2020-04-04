import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ItemOrder from './ItemOrder';
import { getTotalOrder } from '../controllers/TakeOrder';

const ListProducts = ({ data, updatingOrder }) => (
  <ul className="w-100">
    { data.map((element) => (
      <ItemOrder key={element._id} dataProduct={element} handleClickEvent={updatingOrder} />)) }
  </ul>
);

const OrderContainer = ({ arrProducts, updatingOrder, sendOrder }) => {
  const [nameClient, setNameClient] = useState('');
  const handleChangeInput = (event) => {
    const valueInput = event.target.value;
    if (valueInput.trim() !== '') {
      setNameClient(event.target.value);
    }
  };
  const handlerClickSendOrderButton = (event) => {
    event.preventDefault();
    const orderData = {
      client: nameClient,
      products: arrProducts.map((product) => ({
        productId: product._id,
        qty: product.qty,
      })),
    };
    sendOrder(orderData);
  };

  return (
    <div className="order-container w-50 px-2 py-1">
      <div className="order-table px-1 py-1">
        <form className="p-1 d-flex">
          <label htmlFor="client-name" className="primary-text">Nombre del cliente:</label>
          <input
            type="text"
            id="client-name"
            name="client-name"
            className="ml-1 flex-grow-2"
            onChange={handleChangeInput}
          />
        </form>
        <ul className="order-table-head container primary-text">
          <li className="flex-grow-1 text-center p-1">Cantidad</li>
          <li className="flex-grow-1 text-center p-1">Producto</li>
          <li className="flex-grow-1 text-center p-1">Precio</li>
        </ul>
        <div className="order-products-list container justify-content-center">
          { arrProducts.length === 0
            ? <p>Aún no haz agregado productos a la orden</p>
            : <ListProducts data={arrProducts} updatingOrder={updatingOrder} />}
        </div>
        <footer>
          <p className="container total-text text-bold m-0">
            <span className="flex-grow-1 text-center p-1">Total</span>
            <span className="flex-grow-1 text-center p-1">
              $
              {' '}
              { getTotalOrder(arrProducts) }
              .00
            </span>
          </p>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="button-success btn-large text-upper-case text-bold"
              disabled={arrProducts.length === 0 || nameClient === ''}
              onClick={handlerClickSendOrderButton}
            >
              enviar orden
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

OrderContainer.propTypes = {
  arrProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  updatingOrder: PropTypes.func.isRequired,
  sendOrder: PropTypes.func.isRequired,
};

ListProducts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  updatingOrder: PropTypes.func.isRequired,
};

export default OrderContainer;
