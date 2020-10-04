import Axios from 'axios';
import { getToken } from './auth-data';

const url = 'http://157.245.224.132';

const senOrder = (data) => (
  Axios.post(`${url}/orders`, data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  })
);

export default senOrder;
