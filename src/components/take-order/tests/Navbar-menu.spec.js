import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import NavbarMenu from '../Navbar-menu';

describe('Navbar-menu', () => {
  it('Debería renderizar el component con 4 categories', () => {
    const initialCategoryFake = 'desayuno';
    const fnSetCategory = jest.fn();
    const { queryAllByRole, queryByTestId, queryByText } = render(
      <NavbarMenu
        categoryActive={initialCategoryFake}
        setCategoryActive={fnSetCategory}
      />,
    );
    const categoriesListElement = queryByTestId('categories-list');
    const categoriesElements = queryAllByRole('menuitem');
    const categoryActiveElement = queryByText(initialCategoryFake).parentElement;
    expect(categoriesListElement).toBeTruthy();
    expect(categoryActiveElement.classList.contains('active')).toBe(true);
    expect(categoriesElements.length).toBe(4);
  });

  it('Debería enviar el nombre de la categoria al dar click en una categoría', () => {
    const initialCategoryFake = 'desayuno';
    const fnSetCategory = jest.fn();
    const { queryAllByRole } = render(
      <NavbarMenu
        categoryActive={initialCategoryFake}
        setCategoryActive={fnSetCategory}
      />,
    );
    const categoryElement = queryAllByRole('menuitem')[0];
    act(() => {
      fireEvent.click(categoryElement);
    });
    expect(fnSetCategory).toHaveBeenCalled();
    expect(fnSetCategory).toHaveBeenCalledWith(initialCategoryFake);
  });
});
