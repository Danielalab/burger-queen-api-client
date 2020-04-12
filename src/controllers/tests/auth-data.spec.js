import Axios from 'axios';

import { getAuthToken } from '../auth-data';

jest.mock('axios');

describe('getAuthToken', () => {
  const email = 'test@test.la';
  const password = 'test123';
  const fakeToken = 'faketoken';
  it('Deberia de retornar un objeto con el token de autenticacion si el request fue exitoso', async (done) => {
    const successResponse = {
      data: {
        token: fakeToken,
      },
    };
    Axios.post.mockImplementationOnce(() => Promise.resolve(successResponse));
    const response = await getAuthToken(email, password);
    expect(response.token).toBe(fakeToken);
    done();
  });

  it('Deberia de retornar un mensaje de error si el request status es 400', async (done) => {
    const responseErr = {
      response: {
        data: {
          statusCode: 400,
        },
      },
    };
    Axios.post.mockImplementationOnce(() => Promise.reject(responseErr));
    try {
      await getAuthToken('', '');
    } catch (err) {
      expect(err).toBe('El email y password ingresados son incorrectos, vuelva a intentarlo');
      done();
    }
  });

  it('Deberia retornar un mensaje de error si el request status es 404', async (done) => {
    const responseErr = {
      response: {
        data: {
          statusCode: 404,
        },
      },
    };
    Axios.post.mockImplementationOnce(() => Promise.reject(responseErr));
    try {
      await getAuthToken(email, password);
    } catch (err) {
      expect(err).toBe('El email ingresado no existe');
      done();
    }
  });

  it('Deberia retornar un mensaje de error si el request status es 401', async (done) => {
    const responseErr = {
      response: {
        data: {
          statusCode: 401,
        },
      },
    };
    Axios.post.mockImplementationOnce(() => Promise.reject(responseErr));
    try {
      await getAuthToken(email, password);
    } catch (err) {
      expect(err).toBe('El password ingresado es incorrecto. Vuelve a intentarlo');
      done();
    }
  });
});
