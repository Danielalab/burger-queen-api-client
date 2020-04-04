import Axios from 'axios';

const senOrder = (token, data) => (
  Axios.post('http://localhost:3001/auth', data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
);

export default senOrder;
