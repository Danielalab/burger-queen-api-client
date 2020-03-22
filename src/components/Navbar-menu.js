import React from 'react';
import PropTypes from 'prop-types';

const NavbarMenu = ({ categoryActive, setCategoryActive }) => {
  const categories = ['desayuno', 'menu', 'adicional', 'bebidas'];
  const handleClick = (event, category) => {
    event.preventDefault();
    setCategoryActive(category);
  };

  return (
    <nav>
      <ul className="p-0 text-upper-case h-100 container">
        { categories.map((category) => (
          <li
            role="menuitem"
            key={category}
            className={categoryActive === category
              ? 'd-flex align-items-center justify-content-center item-tab text-bold active'
              : 'd-flex align-items-center justify-content-center item-tab text-bold'}
            onClick={(event) => handleClick(event, category)}
            onKeyDown={(event) => handleClick(event, category)}
          >
            <a href={category}>{ category }</a>
          </li>
        )) }
      </ul>
    </nav>
  );
};

NavbarMenu.propTypes = {
  categoryActive: PropTypes.string.isRequired,
  setCategoryActive: PropTypes.func.isRequired,
};

export default NavbarMenu;
