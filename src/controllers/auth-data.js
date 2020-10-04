import Axios from 'axios';

// Axios.defaults.baseURL = 'http://157.245.224.132/auth';
const url = 'http://157.245.224.132';

export const getAuthToken = (email, password) => (
  Axios.post(`${url}/auth`, JSON.stringify({
    email,
    password,
  }), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.data)
    .catch((err) => {
      const { data } = err.response;
      let errMessage;
      if (data.statusCode === 400) {
        errMessage = 'El email y password ingresados son incorrectos, vuelva a intentarlo';
      }
      if (data.statusCode === 404) {
        errMessage = 'El email ingresado no existe';
      }
      if (data.statusCode === 401) {
        errMessage = 'El password ingresado es incorrecto. Vuelve a intentarlo';
      }
      return Promise.reject(errMessage);
    })
);

export const saveToken = (token) => (
  sessionStorage.setItem('token', token)
);

export const getToken = () => (
  sessionStorage.getItem('token')
);

export const saveItemSessionStorage = (key, value) => (
  sessionStorage.setItem(key, value)
);

export const getItemSessionStorage = (key) => (
  sessionStorage.getItem(key)
);
