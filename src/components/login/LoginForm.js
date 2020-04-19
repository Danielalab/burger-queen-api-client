import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getAuthToken, saveToken } from '../../controllers/auth-data';

const LoginForm = ({ handleSuccessLogin }) => {
  const [err, setErr] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    getAuthToken(email, password)
      .then((response) => {
        saveToken(response.token);
        handleSuccessLogin();
      })
      .catch((error) => {
        setErr(error);
      });
  };

  const handleChangeInput = (event) => {
    const valueInput = event.target.value;
    const typeInput = event.target.type;
    if (typeInput === 'email') {
      setEmail(valueInput);
    }
    if (typeInput === 'password') {
      setPassword(valueInput);
    }
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    handleLogin({ email, password });
  };

  return (
    <div className="w-50 d-flex flex-direction-column justify-content-center">
      <form
        className="p-2 d-flex flex-direction-column align-items-center"
        onSubmit={handleSubmitForm}
      >
        <h2 className="mx-2" data-testid="greeting-login-form">
          Bienvenidxs a
          <br />
          <span className="font-title text-upper-case"> burger queen</span>
        </h2>
        <div className="form-control">
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChangeInput}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-control">
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleChangeInput}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit" className="button-success btn-large text-upper-case text-bold mx-2">
          iniciar sesión
        </button>
        { err && <p className="text-center m-0">{err}</p>}
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  handleSuccessLogin: PropTypes.func.isRequired,
};

export default LoginForm;
