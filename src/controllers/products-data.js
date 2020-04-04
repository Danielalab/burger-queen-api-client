import Axios from 'axios';

export const getProductsData = (token) => (
  Axios.get('http://localhost:3001/products', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    })
);

export const AddProduct = () => {};

export const DeleteProduct = () => {};
