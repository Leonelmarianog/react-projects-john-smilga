import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Bag from '../Bag';
import { AppContext } from '../../contexts/GlobalContext';

describe('Bag', () => {
  it('Renders data correctly', () => {
    const totalPrice = parseFloat((599.99 + 499.99).toFixed(2));
    const mockState = {
      loading: false,
      error: { status: false, message: null },
      data: [
        {
          id: 1,
          title: 'Samsung Galaxy S7',
          price: 599.99,
          img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png',
          amount: 1,
        },
        {
          id: 2,
          title: 'google pixel ',
          price: 499.99,
          img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png',
          amount: 1,
        },
      ],
      amount: 2,
      total: totalPrice,
    };

    render(
      <AppContext.Provider value={{ state: mockState }}>
        <Bag />
      </AppContext.Provider>
    );

    expect(screen.getByRole('heading', { name: 'Your Bag' })).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText(`$${totalPrice}`)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Clear Bag' })).toBeInTheDocument();
  });

  it('Calls dispatch function when clearing the bag', () => {
    const totalPrice = parseFloat((599.99 + 499.99).toFixed(2));
    const mockState = {
      loading: false,
      error: { status: false, message: null },
      data: [
        {
          id: 1,
          title: 'Samsung Galaxy S7',
          price: 599.99,
          img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png',
          amount: 1,
        },
        {
          id: 2,
          title: 'google pixel ',
          price: 499.99,
          img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png',
          amount: 1,
        },
      ],
      amount: 2,
      total: totalPrice,
    };
    const mockDispatch = jest.fn();

    render(
      <AppContext.Provider value={{ state: mockState, dispatch: mockDispatch }}>
        <Bag />
      </AppContext.Provider>
    );

    userEvent.click(screen.getByRole('button', { name: 'Clear Bag' }));
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'CLEAR_BAG' });
  });
});
