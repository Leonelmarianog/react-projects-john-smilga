import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemList from '../ItemList';
import { AppContext } from '../../contexts/GlobalContext';

describe('ItemList', () => {
  it('Renders loading message when loading items', () => {
    const mockState = {
      loading: true,
      error: { state: false, message: null },
      data: null,
      amount: 0,
      total: 0,
    };

    render(
      <AppContext.Provider value={{ state: mockState }}>
        <ItemList />
      </AppContext.Provider>
    );

    expect(screen.getByRole('heading', { level: 1, name: 'Loading...' })).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { level: 1, name: 'Something failed when making the request' })
    ).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 1, name: 'No items' })).not.toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  it('Renders error message when the loading of items fails', () => {
    const mockState = {
      loading: false,
      error: { status: true, message: 'Something failed when making the request' },
      data: null,
      amount: 0,
      total: 0,
    };

    render(
      <AppContext.Provider value={{ state: mockState }}>
        <ItemList />
      </AppContext.Provider>
    );

    expect(
      screen.getByRole('heading', { level: 1, name: mockState.error.message })
    ).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 1, name: 'Loading...' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 1, name: 'No items' })).not.toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  it('Renders the list of items', () => {
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
      total: parseFloat((599.99 + 499.99).toFixed(2)),
    };

    render(
      <AppContext.Provider value={{ state: mockState }}>
        <ItemList />
      </AppContext.Provider>
    );

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.queryByRole('heading', { level: 1, name: 'Loading...' })).not.toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { level: 1, name: 'Something failed when making the request' })
    ).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 1, name: 'No items' })).not.toBeInTheDocument();
  });

  it('Renders a message notifying the user that there are no items in the list', () => {
    const mockState = {
      loading: false,
      error: { status: false, message: null },
      data: [],
      amount: 0,
      total: 0,
    };

    render(
      <AppContext.Provider value={{ state: mockState }}>
        <ItemList />
      </AppContext.Provider>
    );

    expect(screen.getByRole('heading', { level: 1, name: 'No items' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 1, name: 'Loading...' })).not.toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { level: 1, name: 'Something failed when making the request' })
    ).not.toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });
});
