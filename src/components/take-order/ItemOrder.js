import React from 'react';
import PropTypes from 'prop-types';
import IconoAumentarCantidad from '../../images/mas.png';
import IconoDisminuirCantidad from '../../images/menos.png';
import IconDelete from '../../images/delete-icon.png';

const ItemOrder = ({ dataProduct, handleClickEvent }) => {
  const { name, price, qty } = dataProduct;

  const handleOnClickOnButton = (action) => {
    handleClickEvent(dataProduct, action);
  };

  return (
    <li className="d-flex item-order-container">
      <div className="flex-grow-1 d-flex justify-content-space-evenly align-items-center">
        <button type="button" className="icon-button" onClick={() => handleOnClickOnButton('ADD')}>
          <i>
            <img src={IconoAumentarCantidad} alt="icono-aumentar-cantidad" />
          </i>
        </button>
        <span>{ qty }</span>
        <button type="button" className="icon-button" onClick={() => handleOnClickOnButton('MINUS')}>
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
        <button type="button" className="icon-button" onClick={() => handleOnClickOnButton('DELETE')}>
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
  handleClickEvent: PropTypes.func.isRequired,
};

export default ItemOrder;
