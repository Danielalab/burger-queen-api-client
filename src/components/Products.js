import React, { useState, useEffect } from 'react';
import NavbarMenu from './Navbar-menu';
import Axios from 'axios';

const requestDataProducts = (token) => {
  return Axios.get('http://localhost:3001/products', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error);
  })
}

const Products = () => {
  const token = 'sjhkjfgsafkjs24kdhks'
  const [dataProducts, setdataProducts] = useState(null);
  useEffect(() => {
    requestDataProducts(token)
  }, [dataProducts]);

  const getDataByCategory = (category) => {
    requestDataProducts(token)
  }
  
  return (
    <div className="w-50">
      <NavbarMenu getData={ getDataByCategory }></NavbarMenu>
    </div>
  )
}

export default Products;