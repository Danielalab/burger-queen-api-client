import React from 'react';
import IconoAumentarCantidad from '../images/mas.png';
import IconoDisminuirCantidad from '../images/menos.png';
import IconDelete from '../images/delete-icon.png';

const ItemOrder = () => (
  <li className="d-flex item-order-container">
    <div className="flex-grow-1 d-flex justify-content-space-evenly align-items-center">
      <button type="button" className="icon-button">
        <i>
          <img src={IconoAumentarCantidad} alt="icono-aumentar-cantidad" />
        </i>
      </button>
      <span>3</span>
      <button type="button" className="icon-button">
        <i>
          <img src={IconoDisminuirCantidad} alt="icono-disminuir-cantidad" />
        </i>
      </button>
    </div>
    <div className="flex-grow-1 d-flex justify-content-space-evenly align-items-center">
      <p>Hamburguesa simple de carne</p>
    </div>
    <div className="flex-grow-1 d-flex justify-content-space-evenly align-items-center">
      <span>36</span>
      <button type="button" className="icon-button">
        <i>
          <img src={IconDelete} alt="icono-eliminar-producto" />
        </i>
      </button>
    </div>
  </li>
);

export default ItemOrder;
