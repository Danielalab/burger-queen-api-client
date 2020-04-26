import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import ItemOrder from '../ItemOrder';

describe('ItemOrder', () => {
  it('Debería renderizar el component con su nombre, precio y cantidad ', () => {
    const fnSuccessClickEvent = jest.fn();
    const data = {
      name: 'hamburguesa fake',
      price: 5,
      qty: 2,
    };
    const { queryByText } = render(
      <ItemOrder
        dataProduct={data}
        handleClickEvent={fnSuccessClickEvent}
      />,
    );
    expect(queryByText('hamburguesa fake')).toBeTruthy();
    expect(queryByText('2')).toBeTruthy();
    expect(queryByText('10')).toBeTruthy();
  });

  it('Debería de recibir dataProduct y "ADD" al dar click al "btn-add-qty" element', () => {
    const fnSuccessClickEvent = jest.fn();
    const data = {
      name: 'hamburguesa fake',
      price: 5,
      qty: 2,
    };
    const { queryByTestId } = render(
      <ItemOrder
        dataProduct={data}
        handleClickEvent={fnSuccessClickEvent}
      />,
    );
    const btnAddQty = queryByTestId('btn-add-qty');
    act(() => {
      fireEvent.click(btnAddQty);
    });
    expect(fnSuccessClickEvent).toHaveBeenCalled();
    expect(fnSuccessClickEvent).toHaveBeenCalledWith(data, 'ADD');
  });

  it('Debería de recibir dataProduct y "MINUS" al dar click al "btn-minus-qty" element', () => {
    const fnSuccessClickEvent = jest.fn();
    const data = {
      name: 'hamburguesa fake',
      price: 5,
      qty: 2,
    };
    const { queryByTestId } = render(
      <ItemOrder
        dataProduct={data}
        handleClickEvent={fnSuccessClickEvent}
      />,
    );
    const btnMinusQty = queryByTestId('btn-minus-qty');
    act(() => {
      fireEvent.click(btnMinusQty);
    });
    expect(fnSuccessClickEvent).toHaveBeenCalled();
    expect(fnSuccessClickEvent).toHaveBeenCalledWith(data, 'MINUS');
  });

  it('Debería de recibir dataProduct y "DELETE" al dar click al "btn-delete" element', () => {
    const fnSuccessClickEvent = jest.fn();
    const data = {
      name: 'hamburguesa fake',
      price: 5,
      qty: 2,
    };
    const { queryByTestId } = render(
      <ItemOrder
        dataProduct={data}
        handleClickEvent={fnSuccessClickEvent}
      />,
    );
    const btnDelete = queryByTestId('btn-delete');
    act(() => {
      fireEvent.click(btnDelete);
    });
    expect(fnSuccessClickEvent).toHaveBeenCalled();
    expect(fnSuccessClickEvent).toHaveBeenCalledWith(data, 'DELETE');
  });
});
