import React, { useState, useEffect } from 'react';
import NavbarMenu from './Navbar-menu';
import Axios from 'axios';

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

const Products = () => {
  const token = 'sjhkjfgsafkjs24kdhks'
  const [dataProducts, setdataProducts] = useState(null);
  const [categoryActive, setCategoryActive] = useState('desayuno');
  const [filteredProductsByCategory, setFilteredProductsByCategory] = useState(null);

  useEffect(() => {
    requestDataProducts(token)
      .then(productsData => {
        setdataProducts(productsData);
      })
  }, []);

  const getDataByCategory = (category) => {
    setFilteredProductsByCategory(filterProductsByCategory(dataProducts, category));
  }
  
  return (
    <div className="w-50">
      <NavbarMenu getData ={ getDataByCategory }
         categoryActive = { categoryActive }
         setCategoryActive = { setCategoryActive }></NavbarMenu>
    </div>
  )
}

export default Products;