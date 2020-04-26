import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import OrderContainer from '../OrderContainer';

const data = [
  {
    _id: '1abc',
    name: 'hamburguesa fake 1',
    price: 5,
    qty: 2,
    type: 'menu',
  },
  {
    _id: '2abc',
    name: 'cafe con leche fake 1',
    price: 5,
    qty: 1,
    type: 'desayuno',
  },
  {
    _id: '3abc',
    name: 'hamburguesa fake 2',
    price: 5,
    qty: 3,
    type: 'menu',
  },
];

describe('OrderContainer', () => {
  it('Debería renderizar el component con la lista de productos', () => {
    const fnUpdatingOrder = jest.fn();
    const fnSendOrder = jest.fn();
    const { queryByTestId, queryByText } = render(
      <OrderContainer
        arrProducts={data}
        updatingOrder={fnUpdatingOrder}
        sendOrder={fnSendOrder}
      />,
    );
    const listProductsElement = queryByTestId('list-products-element');
    const notProductsMessageElement = queryByText('Aún no haz agregado productos a la orden');
    expect(listProductsElement).toBeTruthy();
    expect(notProductsMessageElement).toBeFalsy();
  });

  it('Debería renderizar el componente con un mensaje cuando no hay productos', () => {
    const fnUpdatingOrder = jest.fn();
    const fnSendOrder = jest.fn();
    const { queryByText, queryByTestId } = render(
      <OrderContainer
        arrProducts={[]}
        updatingOrder={fnUpdatingOrder}
        sendOrder={fnSendOrder}
      />,
    );
    const listProductsElement = queryByTestId('list-products-element');
    const notProductsMessageElement = queryByText('Aún no haz agregado productos a la orden');
    expect(listProductsElement).toBeFalsy();
    expect(notProductsMessageElement).toBeTruthy();
  });

  it('Debería cambiar el valor del input con el nombre del cliente', () => {
    const fnUpdatingOrder = jest.fn();
    const fnSendOrder = jest.fn();
    const { queryByTestId } = render(
      <OrderContainer
        arrProducts={[]}
        updatingOrder={fnUpdatingOrder}
        sendOrder={fnSendOrder}
      />,
    );
    const clientNameInputElement = queryByTestId('client-name-element');
    const nameClientFake = 'name fake';
    act(() => {
      fireEvent.change(
        clientNameInputElement,
        {
          target: {
            value: nameClientFake,
          },
        },
      );
    });
    expect(clientNameInputElement.value).toBe(nameClientFake);
  });

  it('Debería hablitar el button-send-order si hay productos y nombre del cliente', () => {
    const fnUpdatingOrder = jest.fn();
    const fnSendOrder = jest.fn();
    const { queryByTestId, rerender } = render(
      <OrderContainer
        arrProducts={[]}
        updatingOrder={fnUpdatingOrder}
        sendOrder={fnSendOrder}
      />,
    );
    const clientNameInputElement = queryByTestId('client-name-element');
    const btnSendOrderDisabled = queryByTestId('button-send-order');
    expect(btnSendOrderDisabled.disabled).toBe(true);
    rerender(
      <OrderContainer
        arrProducts={data}
        updatingOrder={fnUpdatingOrder}
        sendOrder={fnSendOrder}
      />,
    );
    const nameClientFake = 'name fake';
    act(() => {
      fireEvent.change(
        clientNameInputElement,
        {
          target: {
            value: nameClientFake,
          },
        },
      );
    });
    const btnSendOrderEnabled = queryByTestId('button-send-order');
    expect(btnSendOrderEnabled.disabled).toBe(false);
  });

  it('Debería enviar la data de la orden al dar click a button-send-order', () => {
    const fnUpdatingOrder = jest.fn();
    const fnSendOrder = jest.fn();
    const { queryByTestId } = render(
      <OrderContainer
        arrProducts={data}
        updatingOrder={fnUpdatingOrder}
        sendOrder={fnSendOrder}
      />,
    );
    const btnSendOrder = queryByTestId('button-send-order');
    const clientNameInputElement = queryByTestId('client-name-element');
    const nameClientFake = 'name fake';

    act(() => {
      fireEvent.change(
        clientNameInputElement,
        {
          target: {
            value: nameClientFake,
          },
        },
      );
    });

    act(() => {
      fireEvent.click(btnSendOrder);
    });

    const orderData = {
      client: nameClientFake,
      products: [
        { productId: '1abc', qty: 2 },
        { productId: '2abc', qty: 1 },
        { productId: '3abc', qty: 3 },
      ],
    };
    expect(fnSendOrder).toHaveBeenCalled();
    expect(fnSendOrder).toHaveBeenCalledWith(orderData);
  });
});
