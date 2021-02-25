import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Item from '../Item';
import { AppContext } from '../../contexts/GlobalContext';

describe('Item', () => {
  it('Renders item data correctly', () => {
    const mockDispatch = jest.fn();
    const mockItemData = {
      id: 1,
      title: 'Samsung Galaxy S7',
      price: 599.99,
      img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png',
      amount: 1,
    };

    render(
      <AppContext.Provider value={{ dispatch: mockDispatch }}>
        <Item {...mockItemData} />
      </AppContext.Provider>
    );

    expect(screen.getByRole('heading', { level: 1, name: mockItemData.title })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: `$${mockItemData.price}` })
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'item photo' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'item photo' }).src).toContain('.png');
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('Calls dispatch function when removing the item', () => {
    const mockDispatch = jest.fn();
    const mockItemData = {
      id: 1,
      title: 'Samsung Galaxy S7',
      price: 599.99,
      img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png',
      amount: 1,
    };

    render(
      <AppContext.Provider value={{ dispatch: mockDispatch }}>
        <Item {...mockItemData} />
      </AppContext.Provider>
    );

    expect(screen.getByRole('button', { name: 'Remove' })).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: 'Remove' }));

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'REMOVE_ITEM', payload: mockItemData.id });
  });
});
