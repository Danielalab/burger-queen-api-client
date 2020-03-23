import React from 'react';
import PropTypes from 'prop-types';
import IconoAumentarCantidad from '../images/mas.png';
import IconoDisminuirCantidad from '../images/menos.png';
import IconDelete from '../images/delete-icon.png';

const ItemOrder = ({ dataProduct }) => {
  const { name, price, qty } = dataProduct;
  return (
    <li className="d-flex item-order-container">
      <div className="flex-grow-1 d-flex justify-content-space-evenly align-items-center">
        <button type="button" className="icon-button">
          <i>
            <img src={IconoAumentarCantidad} alt="icono-aumentar-cantidad" />
          </i>
        </button>
        <span>{ qty }</span>
        <button type="button" className="icon-button">
          <i>
            <img src={IconoDisminuirCantidad} alt="icono-disminuir-cantidad" />
          </i>
        </button>
      </div>
      <div className="flex-grow-1 d-flex justify-content-space-evenly align-items-center">
        <p>{ name }</p>
      </div>
      <div className="flex-grow-1 d-flex justify-content-space-evenly align-items-center">
        <span>{ qty * price }</span>
        <button type="button" className="icon-button">
          <i>
            <img src={IconDelete} alt="icono-eliminar-producto" />
          </i>
        </button>
      </div>
    </li>
  );
};

ItemOrder.propTypes = {
  dataProduct: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    type: PropTypes.string,
    qty: PropTypes.number,
  }).isRequired,
};

export default ItemOrder;
