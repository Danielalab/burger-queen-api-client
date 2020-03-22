import React from 'react';
import PropTypes from 'prop-types';

import burgerSimpleImg from '../images/burger-simple.png';

const ItemProduct = ({ productData, handlerClickItemProduct }) => {
  const { name, price } = productData;
  const clickProduct = (event) => {
    event.preventDefault();
    handlerClickItemProduct(productData);
  };

  return (
    <li
      role="menuitem"
      className="item-product container align-items-center"
      onClick={clickProduct}
      onKeyDown={clickProduct}
    >
      <figure className="container-product-img h-100 m-0 flex-grow-2 d-flex align-items-center justify-content-center">
        <img
          src={burgerSimpleImg}
          alt={name}
          className="product-img"
        />
      </figure>
      <p className="flex-grow-1">{ name }</p>
      <p className="flex-grow-2 text-center">
        $
        { price }
        .00
      </p>
    </li>
  );
};

ItemProduct.propTypes = {
  productData: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  handlerClickItemProduct: PropTypes.func.isRequired,
};

export default ItemProduct;
