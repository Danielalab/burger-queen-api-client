import React from 'react';
import LoginForm from '../components/login/LoginForm';
import logoBurgerQueenCrown from '../images/logo-corona.png';
import logoBurger from '../images/burger-logo.png';

const Login = () => (
  <section className="container login-container">
    <div className="w-50 d-flex justify-content-center flex-direction-column">
      <figure className="banner-container d-flex align-items-center flex-direction-column">
        <img src={logoBurgerQueenCrown} alt="logo-de-corona-burger-queen" />
        <img src={logoBurger} alt="logo-de-hamburguesa" />
      </figure>
      <h2 className="font-title text-upper-case text-center">
        burger queen
      </h2>
    </div>
    <LoginForm />
  </section>
);

export default Login;