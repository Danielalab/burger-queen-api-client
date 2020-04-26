import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { getProductsData as mockGetProductsData } from '../../../controllers/products-data';
import { filterProductsByCategory as mockFilterProductsByCategory } from '../../../controllers/TakeOrder';
import ProductsContainer from '../ProductsContainer';

jest.mock('../../../controllers/products-data');
jest.mock('../../../controllers/TakeOrder');

const data = [
  {
    name: 'hamburguesa fake 1',
    price: 5,
    type: 'menu',
  },
  {
    name: 'cafe con leche fake 1',
    price: 5,
    type: 'desayuno',
  },
  {
    name: 'hamburguesa fake 2',
    price: 5,
    type: 'menu',
  },
];

const dataFiltered = [
  {
    name: 'hamburguesa fake 1',
    price: 5,
    type: 'menu',
  },
  {
    name: 'hamburguesa fake 2',
    price: 5,
    type: 'menu',
  },
];

describe('ProductsContainer', () => {
  it('Debería de renderizar el component con un navbar y lista de productos', async () => {
    mockGetProductsData.mockReturnValue(Promise.resolve(data));
    mockFilterProductsByCategory.mockReturnValue(dataFiltered);
    const fnSuccessAddingProduct = jest.fn();
    const { queryByTestId, queryByText } = render(
      <ProductsContainer
        addingAProductToTheOrder={fnSuccessAddingProduct}
      />,
    );
    expect(queryByTestId('navbar-element')).toBeTruthy();
    expect(queryByTestId('list-element')).toBeTruthy();
    expect(queryByText('loading')).toBeTruthy();

    await waitFor(() => {
      expect(mockGetProductsData).toHaveBeenCalled();
      expect(mockFilterProductsByCategory).toHaveBeenCalled();
    });

    expect(queryByText('hamburguesa fake 1')).toBeTruthy();
    expect(queryByText('hamburguesa fake 2')).toBeTruthy();
  });
});
