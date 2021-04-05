import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BagCounter from '../BagCounter';
import { AppContext } from '../../contexts/GlobalContext';

describe('BagCounter', () => {
  it('Renders the amount of items correctly', () => {
    const mockState = {
      loading: false,
      error: false,
      data: [],
      total: 0,
      amount: 0,
    };

    const { rerender } = render(
      <AppContext.Provider value={{ state: mockState }}>
        <BagCounter />
      </AppContext.Provider>
    );

    expect(screen.getByRole('link', { name: '0' })).toBeInTheDocument();

    mockState.amount += 1;

    rerender(
      <AppContext.Provider value={{ state: mockState }}>
        <BagCounter />
      </AppContext.Provider>
    );

    expect(screen.getByRole('link', { name: '1' })).toBeInTheDocument();
  });
});
