import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import ItemProduct from '../ItemProduct';

describe('ItemProduct', () => {
  it('Debería de renderizar el componente con el nombre y precio del producto', () => {
    const fnHandlerClick = jest.fn();
    const data = {
      name: 'hamburguesa fake',
      price: 5,
    };
    const { queryByText } = render(
      <ItemProduct
        productData={data}
        handlerClickItemProduct={fnHandlerClick}
      />,
    );
    expect(queryByText('hamburguesa fake')).toBeTruthy();
    expect(queryByText('$5.00')).toBeTruthy();
  });

  it('Debería de enviar la data del producto al dar click al <li /> element', () => {
    const fnHandlerClick = jest.fn();
    const data = {
      name: 'hamburguesa fake',
      price: 5,
    };
    const { queryByTestId } = render(
      <ItemProduct
        productData={data}
        handlerClickItemProduct={fnHandlerClick}
      />,
    );
    const liElement = queryByTestId('product-element');
    expect(liElement).toBeTruthy();

    act(() => {
      fireEvent.click(liElement);
    });

    expect(fnHandlerClick).toHaveBeenCalled();
    expect(fnHandlerClick).toHaveBeenCalledWith(data, 'ADD');
  });
});
