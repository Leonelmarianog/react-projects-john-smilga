import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ItemCounter from '../ItemCounter';
import { AppContext } from '../../contexts/GlobalContext';

describe('ItemCounter', () => {
  it('Renders amount of items correctly', () => {
    const mockDispatch = jest.fn();
    const mockItemData = {
      id: 1,
      amount: 1,
    };

    render(
      <AppContext.Provider value={{ dispatch: mockDispatch }}>
        <ItemCounter {...mockItemData} />
      </AppContext.Provider>
    );

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('Calls dispatch function when increasing or decreasing the amount of items', () => {
    const mockDispatch = jest.fn();
    const mockItemData = {
      id: 1,
      amount: 1,
    };

    render(
      <AppContext.Provider value={{ dispatch: mockDispatch }}>
        <ItemCounter {...mockItemData} />
      </AppContext.Provider>
    );

    expect(screen.getByRole('button', { name: 'increase item amount' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'decrease item amount' })).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: 'increase item amount' }));
    userEvent.click(screen.getByRole('button', { name: 'decrease item amount' }));

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    expect(mockDispatch).toHaveBeenNthCalledWith(1, {
      type: 'TOGGLE_QUANTITY',
      payload: { id: mockItemData.id, action: 'INCREASE' },
    });
    expect(mockDispatch).toHaveBeenNthCalledWith(2, {
      type: 'TOGGLE_QUANTITY',
      payload: { id: mockItemData.id, action: 'DECREASE' },
    });
  });
});
