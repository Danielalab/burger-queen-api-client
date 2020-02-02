import React, { useState, useEffect } from 'react';
import NavbarMenu from './Navbar-menu';
import Axios from 'axios';
import ItemProduct from './ItemProduct';

const requestDataProducts = (token) => {
  return Axios.get('http://localhost:3001/products', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then((response) => response.data)
  .catch((error) => {
    console.log(error);
  })
}

const filterProductsByCategory = (products, category) =>
  products.filter(product =>  product.type === category)

const ProductsContainer = ({ addingAProductToTheOrder }) => {
  const token = 'sjhkjfgsafkjs24kdhks'
  const [dataProducts, setdataProducts] = useState(null);
  const [categoryActive, setCategoryActive] = useState('desayuno');
 
  useEffect(() => {
    requestDataProducts(token)
      .then(productsData => {
        setdataProducts(productsData);
      })
  }, []);
  
  return (
    <div className="w-50">
     { <NavbarMenu
         categoryActive = { categoryActive }
         setCategoryActive = { setCategoryActive }></NavbarMenu>}
      <ul>
        { dataProducts ?
          filterProductsByCategory(dataProducts, categoryActive)
            .map(product => 
              <ItemProduct productData = { product }
                handlerClickItemProduct = { addingAProductToTheOrder }
                key={ product._id }/>)
          : 'loading'}
      </ul>
    </div>
  )
}

export default ProductsContainer;