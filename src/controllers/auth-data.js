import Axios from 'axios';

export const getAuthToken = (email, password) => (
  Axios.post('http://localhost:3001/auth', {
    email,
    password,
  })
    .then((response) => response.json())
    .then((data) => {
      let response;
      if (!data.statusCode) {
        response = data.token;
      }
      response = {
        code: data.statusCode,
      };
      if (data.statusCode === 400) {
        response.message = 'El email y password ingresados son incorrectos, vuelva a intentarlo';
      }
      if (data.statusCode === 404) {
        response.message = 'El usuario ingresado no existe';
      }
      return response;
    })
);

export const saveToken = (token) => (
  sessionStorage.setItem('token', token)
);

export const getToken = () => (
  sessionStorage.getItem('token')
);
