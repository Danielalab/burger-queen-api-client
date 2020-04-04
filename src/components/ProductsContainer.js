import React, { useState, useEffect } from 'react';
// components
import PropTypes from 'prop-types';
import NavbarMenu from './Navbar-menu';
import ItemProduct from './ItemProduct';
// controllers
import { getProductsData } from '../controllers/products-data';
import { filterProductsByCategory } from '../controllers/TakeOrder';

const ProductsContainer = ({ addingAProductToTheOrder }) => {
  const token = 'sjhkjfgsafkjs24kdhks';
  const [dataProducts, setdataProducts] = useState(null);
  const [categoryActive, setCategoryActive] = useState('desayuno');

  useEffect(() => {
    getProductsData(token)
      .then((data) => setdataProducts(data));
  }, [token]);

  return (
    <div className="w-50">
      <NavbarMenu
        categoryActive={categoryActive}
        setCategoryActive={setCategoryActive}
      />
      <ul>
        { dataProducts
          ? filterProductsByCategory(dataProducts, categoryActive)
            .map((product) => (
              <ItemProduct
                productData={product}
                handlerClickItemProduct={addingAProductToTheOrder}
                key={product._id}
              />
            ))
          : 'loading'}
      </ul>
    </div>
  );
};

ProductsContainer.propTypes = {
  addingAProductToTheOrder: PropTypes.func.isRequired,
};

export default ProductsContainer;
