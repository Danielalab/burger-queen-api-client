import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('Debería de renderizar el Header component', () => {
    const { queryByText } = render(<Header />);
    expect(queryByText('Burger Queen')).toBeTruthy();
  });
});
