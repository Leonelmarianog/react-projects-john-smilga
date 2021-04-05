import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TotalPriceCounter from '../TotalPriceCounter';
import { AppContext } from '../../contexts/GlobalContext';

describe('TotalPriceCounter', () => {
  it('Renders the total price correctly', () => {
    const mockState = {
      loading: false,
      error: { status: false, message: null },
      data: null,
      amount: 0,
      total: 1499.99,
    };

    render(
      <AppContext.Provider value={{ state: mockState }}>
        <TotalPriceCounter />
      </AppContext.Provider>
    );

    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText(`$${mockState.total}`)).toBeInTheDocument();
  });
});
