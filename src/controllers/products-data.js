import Axios from 'axios';

export const getProductsData = (token) => (
  Axios.get('http://localhost:3001/products', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let result;
      if (!data.statusCode) {
        result = data;
      }
      if (data.statusCode === 401) {
        result = {
          code: 401,
          message: 'Tu sesión ha expirado, vuelve a iniciar sesión para continuar',
        };
      }
      return result;
    })
);

export const AddProduct = () => {};

export const DeleteProduct = () => {};
