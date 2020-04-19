import React from 'react';
import App from './App';
import renderWithRouter from './utils/testRouter';
import * as AuthController from './controllers/auth-data';

it('Debería renderizar App con la ruta inicial del login', () => {
  const { getByTestId } = renderWithRouter(<App />);
  // verificando que se cargue la ruta inicial
  expect(getByTestId('greeting-login-form')).toBe('Bienvenidxs a \nburger queen');
});

it('No debería renderizar /tomar-orden sin un token', () => {
  AuthController.getToken = jest.fn(() => null);
  const { getByTestId } = renderWithRouter(<App />, { route: '/tomar-orden' });
  // verificando que siga mostrando la ruta inicial
  expect(getByTestId('greeting-login-form').textContent).toBe('Bienvenidxs a \nburger queen');
});

it('Debería renderizar /tomar-orden si existe un token', () => {
  AuthController.getToken = jest.fn(() => 'tokenfake');
  const { getByTestId } = renderWithRouter(<App />, { route: '/tomar-orden' });
  // verificando que navegue a /tomar-orden cuando existe un token
  expect(getByTestId('text-button-send-order').textContent).toBe('enviar orden');
});


// history.push('/some/bad/route');
