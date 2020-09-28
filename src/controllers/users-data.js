import Axios from 'axios';
import { getToken } from './auth-data';

// Axios.defaults.baseURL = 'http://157.245.224.132/auth';
const url = 'http://157.245.224.132';

const getUserDataByUid = (uid) => (
  Axios.get(`${url}/users/${uid}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  })
    .then((response) => response.data)
    .catch(() => new Error('Hubo un error al obtener el usuario.'))
);


export default getUserDataByUid;
