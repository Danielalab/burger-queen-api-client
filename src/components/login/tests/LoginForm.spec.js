import React from 'react';
import {
  render, act, fireEvent, waitFor,
} from '@testing-library/react';
import {
  getAuthToken as mockGetAuthToken,
  saveToken as mockSaveToken,
} from '../../../controllers/auth-data';
import LoginForm from '../LoginForm';

jest.mock('../../../controllers/auth-data.js');

describe('LoginForm', () => {
  it('Debería de renderizar el componente', () => {
    const fnSuccessLogin = jest.fn();
    const { getByTestId } = render(<LoginForm handleSuccessLogin={fnSuccessLogin} />);
    const greetingLoginForm = getByTestId('greeting-login-form');
    expect(greetingLoginForm.textContent).toBe('Bienvenidxs a burger queen');
  });

  it('Debería de cambiar el valor del input email y password', () => {
    const fnSuccessLogin = jest.fn();
    const { getByTestId } = render(<LoginForm handleSuccessLogin={fnSuccessLogin} />);
    const inputEmail = getByTestId('email');
    const inputPassword = getByTestId('password');
    const fakeEmail = 'test@test.test';
    const fakePassword = 'test123';
    act(() => {
      fireEvent.change(inputEmail, {
        target: {
          value: fakeEmail,
          type: 'email',
        },
      });
      fireEvent.change(inputPassword, {
        target: {
          value: fakePassword,
          type: 'password',
        },
      });
    });

    expect(inputEmail.value).toBe(fakeEmail);
    expect(inputPassword.value).toBe(fakePassword);
  });


  it('Debería autentificarse al dar click al btn de iniciar sesión', async () => {
    const fakeToken = 'faketoken';
    mockGetAuthToken.mockReturnValue(Promise.resolve({ token: fakeToken }));
    const fnSuccessLogin = jest.fn();
    const { getByTestId } = render(<LoginForm handleSuccessLogin={fnSuccessLogin} />);
    const inputEmail = getByTestId('email');
    const inputPassword = getByTestId('password');
    const buttonSignIn = getByTestId('button-sign-in');
    const fakeEmail = 'test@test.test';
    const fakePassword = 'test123';
    act(() => {
      // agregando valores a los inputs
      fireEvent.change(inputEmail, {
        target: {
          value: fakeEmail,
          type: 'email',
        },
      });
      fireEvent.change(inputPassword, {
        target: {
          value: fakePassword,
          type: 'password',
        },
      });
    });

    act(() => {
      // dar click al btn de inicar sesión
      fireEvent.click(buttonSignIn);
    });

    await waitFor(() => {
      expect(mockGetAuthToken).toHaveBeenCalled();
      expect(mockGetAuthToken).toHaveBeenCalledWith(fakeEmail, fakePassword);
    });
    expect(mockSaveToken).toHaveBeenCalled();
    expect(mockSaveToken).toHaveBeenCalledWith(fakeToken);
    expect(fnSuccessLogin).toHaveBeenCalled();
  });

  it('Debería de mostrar un error si hubo un problema al iniciar sesión', async () => {
    const fakeErrMessage = 'hubo un error al iniciar sesión';
    mockGetAuthToken.mockReturnValue(Promise.reject(fakeErrMessage));
    const fnSuccessLogin = jest.fn();
    const { getByTestId } = render(<LoginForm handleSuccessLogin={fnSuccessLogin} />);
    const buttonSignIn = getByTestId('button-sign-in');
    // dar click al btn de inicar sesión
    act(() => {
      fireEvent.click(buttonSignIn);
    });
    // Esperando que se renderice el mensaje de err
    const errMessageElement = await waitFor(() => getByTestId('sign-in-err-message'));

    expect(mockGetAuthToken).toHaveBeenCalled();
    expect(mockGetAuthToken).toHaveBeenCalledWith('', '');
    expect(fnSuccessLogin).toHaveBeenCalledTimes(0);
    expect(errMessageElement.textContent).toBe(fakeErrMessage);
  });
});
