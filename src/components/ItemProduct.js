import React from 'react';
import burgerSimpleImg from '../images/burger-simple.png'

const ItemProduct = () => {
  return (
    <li className="item-product container align-items-center">
      <figure className="container-product-img h-100 m-0 flex-grow-2 d-flex align-items-center justify-content-center">
        <img src={ burgerSimpleImg } alt="burger-simple"
          className="product-img"></img>
      </figure>
      <p className="flex-grow-1">Hamburguesa simple de carne</p>
      <p className="flex-grow-2 text-center">$ 12.00</p>
    </li>
  );
}

export default ItemProduct;
