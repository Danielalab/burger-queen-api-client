import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import { getTotalOrder as mockGetTotalOrder } from '../../../controllers/TakeOrder';
import OrderContainer from '../OrderContainer';
import data from './data';

jest.mock('../../../controllers/TakeOrder');

describe('OrderContainer', () => {
  const nameClientFake = 'name fake';
  const changeNameClientInputValue = (clientNameInputElement) => {
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
  };

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

  it('Debería renderizar el component con el total de la orden', () => {
    mockGetTotalOrder.mockReturnValue(25);
    const fnUpdatingOrder = jest.fn();
    const fnSendOrder = jest.fn();
    const { queryByText } = render(
      <OrderContainer
        arrProducts={data}
        updatingOrder={fnUpdatingOrder}
        sendOrder={fnSendOrder}
      />,
    );
    const totalOrderElement = queryByText('$ 25.00');
    expect(totalOrderElement).toBeTruthy();
    expect(mockGetTotalOrder).toHaveBeenCalled();
    expect(mockGetTotalOrder).toHaveBeenCalledWith(data);
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

    changeNameClientInputValue(clientNameInputElement);

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

    changeNameClientInputValue(clientNameInputElement);
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

    changeNameClientInputValue(clientNameInputElement);

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
