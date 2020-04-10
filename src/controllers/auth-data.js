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
        response = { token: data.token };
      }
      if (data.statusCode === 400) {
        response.errMessage = 'El email y password ingresados son incorrectos, vuelva a intentarlo';
      }
      if (data.statusCode === 404) {
        response.errMessage = 'El email ingresado no existe';
      }
      if (data.statusCode === 401) {
        response.errMessage = 'El password ingresado es incorrecto. Vuelve a intentarlo';
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
