import React from 'react';

const NavbarMenu = () => {
  return (
    <nav>
      <ul className="p-0 text-upper-case h-100 container">
        <li className="d-flex align-items-center justify-content-center item-tab text-bold"><a href="#desayuno">desayuno</a></li>
        <li className="d-flex align-items-center justify-content-center item-tab text-bold"><a href="#menu">menu</a></li>
        <li className="d-flex align-items-center justify-content-center item-tab text-bold"><a href="#adicional">adicional</a></li>
        <li className="d-flex align-items-center justify-content-center item-tab text-bold"><a href="#bebidas">bebidas</a></li>
      </ul>
    </nav>
  )
}

export default NavbarMenu;