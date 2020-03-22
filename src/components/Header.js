import React from 'react';
import logoBurgerQueen from '../images/logo-corona.png';

const Header = () => (
  <header className="container">
    <h1 className="font-title text-upper-case px-2 logo-title d-flex align-items-center m-0">
      Burger Queen
      <img
        src={logoBurgerQueen}
        alt="logo-burger-queen"
        className="logo-img"
      />
    </h1>
  </header>
);

export default Header;
