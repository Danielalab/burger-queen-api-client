import Axios from 'axios';

import getUserDataByUid from '../users-data';
import mockSessionStorage from './__mocks__/mockSessionStorage';
// mocking axios
jest.mock('axios');

// mocking sessionStorage
global.sessionStorage = mockSessionStorage;

describe('getUserDataByUid', () => {
  const data = {
    _id: 'testidfake12345',
    email: 'test@test.test',
    roles: {
      admin: false,
    },
  };

  it('Debería retornar la data del usuario para uid: test@test.test', async () => {
    const successResponse = {
      data,
    };
    Axios.get.mockImplementationOnce(() => Promise.resolve(successResponse));
    const result = await getUserDataByUid('test@test.test');
    expect(result).toEqual(data);
  });

  it('Debería retornar un mensaje de error si no existe el usuario', async () => {
    const fakeMessage = 'Hubo un error al obtener el usuario.';
    Axios.get.mockImplementationOnce(() => Promise.reject());
    try {
      await getUserDataByUid('usernotexist');
    } catch (error) {
      expect(error.message).toEqual(fakeMessage);
    }
  });
});
