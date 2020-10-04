import Axios from 'axios';

import {
  getAuthToken, saveToken, getToken, saveItemSessionStorage, getItemSessionStorage,
} from '../auth-data';
import mockSessionStorage from './__mocks__/mockSessionStorage';
// mocking axios
jest.mock('axios');

// mocking sessionStorage
global.sessionStorage = mockSessionStorage;

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

describe('saveToken', () => {
  it('Deberia almacenar el token en sessionStorage', () => {
    const fakeToken = 'faketoken';
    // guardando token en sessionStorage
    saveToken(fakeToken);
    expect(getToken()).toBe(fakeToken);
  });
});

describe('getToken', () => {
  it('Deberia devolver el token almacenado en sessionStorage', () => {
    const fakeToken = 'faketoken';
    sessionStorage.setItem('token', fakeToken);
    expect(getToken()).toBe(fakeToken);
  });
});

describe('saveItemSessionStorage', () => {
  it('Deberia almacenar el token en sessionStorage', () => {
    const fakeToken = 'faketoken';
    // guardando token en sessionStorage
    saveItemSessionStorage('token', fakeToken);
    expect(getToken()).toBe(fakeToken);
  });
});

describe('getItemSessionStorage', () => {
  it('Deberia devolver el token almacenado en sessionStorage', () => {
    const fakeToken = 'faketoken';
    sessionStorage.setItem('token', fakeToken);
    expect(getItemSessionStorage('token')).toBe(fakeToken);
  });
});
