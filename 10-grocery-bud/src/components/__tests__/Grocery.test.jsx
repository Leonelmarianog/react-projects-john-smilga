import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Grocery from '../Grocery';

describe('Grocery', () => {
  it('Renders Correctly', () => {
    render(
      <Grocery
        id={1}
        name={'eggs'}
        deleteGroceryCallback={() => {}}
        prepareEditCallback={() => {}}
      />
    );

    expect(screen.getByText('eggs')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'edit item' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'delete item' })).toBeInTheDocument();
  });

  it('Calls the onClick callback handlers', () => {
    const deleteGroceryCallbackMock = jest.fn();
    const prepareEditCallbackMock = jest.fn();
    const itemId = 1;

    render(
      <Grocery
        id={itemId}
        name={'eggs'}
        deleteGroceryCallback={deleteGroceryCallbackMock}
        prepareEditCallback={prepareEditCallbackMock}
      />
    );

    userEvent.click(screen.getByRole('button', { name: 'edit item' }));
    userEvent.click(screen.getByRole('button', { name: 'delete item' }));

    expect(prepareEditCallbackMock).toHaveBeenCalledTimes(1);
    expect(prepareEditCallbackMock).toHaveBeenCalledWith(itemId);
    expect(deleteGroceryCallbackMock).toHaveBeenCalledTimes(1);
    expect(deleteGroceryCallbackMock).toHaveBeenCalledWith(itemId);
  });
});
