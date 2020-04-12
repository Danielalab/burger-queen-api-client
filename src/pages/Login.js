import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/login/LoginForm';
import logoBurgerQueenCrown from '../images/logo-corona.png';
import logoBurger from '../images/burger-logo.png';

const Login = () => {
  const history = useHistory();
  const handleSuccessLogin = () => {
    history.push('/tomar-orden');
  };

  return (
    <section className="container login-container">
      <div className="w-50 d-flex justify-content-center flex-direction-column align-items-center">
        <figure className="banner-container d-flex align-items-center flex-direction-column">
          <img src={logoBurgerQueenCrown} alt="logo-de-corona-burger-queen" />
          <img src={logoBurger} alt="logo-de-hamburguesa" />
        </figure>
        <h2 className="font-title text-upper-case text-center">
          burger queen
        </h2>
      </div>
      <LoginForm handleSuccessLogin={handleSuccessLogin} />
    </section>
  );
};

export default Login;
