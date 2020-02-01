import React from 'react';

const NavbarMenu = ({ getData, categoryActive, setCategoryActive }) => {
  const categories = ['desayuno', 'menu', 'adicional', 'bebidas'];
  const handleClick = (event, category) => {
    event.preventDefault();
    getData(category);
    setCategoryActive(category);
  }

  return (
    <nav>
      <ul className="p-0 text-upper-case h-100 container">
        { categories.map((category, index) => (
          <li key={ index }
            className={ categoryActive === category ?
              "d-flex align-items-center justify-content-center item-tab text-bold active" :
              "d-flex align-items-center justify-content-center item-tab text-bold"}
            onClick={ (event) => handleClick(event, category) }>
            <a href={ category }>{ category }</a>
          </li>
          )) }
      </ul>
    </nav>
  )
}

export default NavbarMenu;