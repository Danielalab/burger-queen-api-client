import Axios from 'axios';
import { getProductsData } from '../products-data';

jest.mock('axios');

describe('getProductsData', () => {
  const data = [
    {
      _id: '1abc',
      name: 'hamburguesa fake 1',
      price: 5,
      type: 'menu',
    },
    {
      _id: '2abc',
      name: 'cafe con leche fake 1',
      price: 5,
      type: 'desayuno',
    },
    {
      _id: '3abc',
      name: 'hamburguesa fake 2',
      price: 5,
      type: 'menu',
    },
  ];

  it('Debería retornar un arr de products', async () => {
    const successResponse = {
      data,
    };
    Axios.get.mockImplementationOnce(() => Promise.resolve(successResponse));
    const result = await getProductsData();
    expect(result).toEqual(data);
  });

  it('Debería retornar un mensaje de error si el request status es 401', async () => {
    const fakeMessage = 'Tu sesión ha expirado, vuelve a iniciar sesión para continuar.';
    const errResponse = {
      response: {
        data: {
          statusCode: 401,
        },
      },
    };
    Axios.get.mockImplementationOnce(() => Promise.reject(errResponse));
    const result = await getProductsData();
    expect(result.message).toBe(fakeMessage);
  });

  it('Debería retornar un mensaje de err si el request status es diferente a 401', async () => {
    const fakeMessage = 'Al parecer hubo un error interno, vuelve a intentarlo más tarde';
    const errResponse = {
      response: {
        data: {
          statusCode: 500,
        },
      },
    };
    Axios.get.mockImplementationOnce(() => Promise.reject(errResponse));
    const result = await getProductsData();
    expect(result.message).toBe(fakeMessage);
  });
});
