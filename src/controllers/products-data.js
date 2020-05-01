import Axios from 'axios';
import { getToken } from './auth-data';

const url = 'http://157.245.224.132';

export const getProductsData = () => (
  Axios.get(`${url}/products?limit=20`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((response) => response.data)
    .catch((err) => {
      const { data } = err.response;
      let result = {
        code: data.statusCode,
      };
      if (data.statusCode === 401) {
        result = {
          ...result,
          message: 'Tu sesión ha expirado, vuelve a iniciar sesión para continuar.',
        };
      } else {
        result = {
          ...result,
          message: 'Al parecer hubo un error interno, vuelve a intentarlo más tarde',
        };
      }
      return result;
    })
);

export const AddProduct = () => {};

export const DeleteProduct = () => {};
