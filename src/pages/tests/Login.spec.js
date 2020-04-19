import React from 'react';
import { render } from '@testing-library/react';
import Login from '../Login';

/* const push = ; */
const mockUseHistoryHook = {
  push: jest.fn(),
};

jest.mock('react-router-dom', () => ({
  useHistory: () => (mockUseHistoryHook),
}));

describe('Login', () => {
  it('Debería de renderizar la vista Login', () => {
    const { getByTestId } = render(<Login />);
    const greetingLoginView = getByTestId('greeting-login-form');
    expect(greetingLoginView.textContent).toBe('Bienvenidxs a burger queen');
  });
});
