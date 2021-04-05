import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { AppContext } from '../../contexts/GlobalContext';

describe('Header', () => {
  it('Renders correctly', () => {
    const mockState = {
      loading: false,
      error: { state: false, message: null },
      data: null,
      amount: 0,
      total: 0,
    };

    render(
      <AppContext.Provider value={{ state: mockState }}>
        <Header />
      </AppContext.Provider>
    );

    expect(screen.getByRole('link', { name: 'YourBag.com' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '0' })).toBeInTheDocument();
  });
});
