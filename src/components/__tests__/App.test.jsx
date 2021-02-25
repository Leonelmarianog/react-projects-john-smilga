import React from 'react';
import { screen, render, waitForElementToBeRemoved, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';
import items from '../../data';

describe('App', () => {
  it('Loads bag info', async () => {
    const responseMock = {
      ok: true,
      json: jest.fn().mockResolvedValueOnce(items),
    };

    global.fetch = jest.fn().mockResolvedValueOnce(responseMock);

    const amount = 3;
    const total = parseFloat((599.99 * 1 + 499.99 * 1 + 699.99 * 1).toFixed(2));

    render(<App />);

    await waitForElementToBeRemoved(() => screen.getByRole('heading', { name: 'Loading...' }));
    expect(screen.getByRole('link', { name: `${amount}` })).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getByRole('total price', { name: `$${total}` })).toBeInTheDocument();
  });

  it('Allows to increase item amount', async () => {
    const responseMock = {
      ok: true,
      json: jest.fn().mockResolvedValueOnce(items),
    };
    global.fetch = jest.fn().mockResolvedValueOnce(responseMock);

    render(<App />);

    await waitForElementToBeRemoved(() => screen.getByRole('heading', { name: 'Loading...' }));
    const $items = document.querySelectorAll('li');

    let amount = 3;
    let total = parseFloat((599.99 * 1 + 499.99 * 1 + 699.99 * 1).toFixed(2));
    expect(screen.getByRole('link', { name: `${amount}` })).toBeInTheDocument();
    expect(screen.getByRole('total price', { name: `$${total}` })).toBeInTheDocument();

    userEvent.click(within($items[0]).getByRole('button', { name: 'increase item amount' }));

    amount = 4;
    total = parseFloat((599.99 * 2 + 499.99 * 1 + 699.99 * 1).toFixed(2));
    expect(screen.getByRole('link', { name: `${amount}` })).toBeInTheDocument();
    expect(screen.getByRole('total price', { name: `$${total}` })).toBeInTheDocument();

    userEvent.click(within($items[0]).getByRole('button', { name: 'increase item amount' }));

    amount = 5;
    total = parseFloat((599.99 * 3 + 499.99 * 1 + 699.99 * 1).toFixed(2));
    expect(screen.getByRole('link', { name: `${amount}` })).toBeInTheDocument();
    expect(screen.getByRole('total price', { name: `$${total}` })).toBeInTheDocument();
  });

  it('Allows to decrease item amount', async () => {
    const responseMock = {
      ok: true,
      json: jest.fn().mockResolvedValueOnce(items),
    };
    global.fetch = jest.fn().mockResolvedValueOnce(responseMock);

    render(<App />);

    await waitForElementToBeRemoved(() => screen.getByRole('heading', { name: 'Loading...' }));
    const $items = document.querySelectorAll('li');

    let amount = 3;
    let total = parseFloat((599.99 * 1 + 499.99 * 1 + 699.99 * 1).toFixed(2));
    expect(screen.getByRole('link', { name: `${amount}` })).toBeInTheDocument();
    expect(screen.getByRole('total price', { name: `$${total}` })).toBeInTheDocument();

    userEvent.click(within($items[0]).getByRole('button', { name: 'decrease item amount' }));

    amount = 2;
    total = parseFloat((599.99 * 0 + 499.99 * 1 + 699.99 * 1).toFixed(2));
    expect(screen.getByRole('link', { name: `${amount}` })).toBeInTheDocument();
    expect(screen.getByRole('total price', { name: `$${total}` })).toBeInTheDocument();
  });

  it('Allows to remove items from the bag', async () => {
    const responseMock = {
      ok: true,
      json: jest.fn().mockResolvedValueOnce(items),
    };
    global.fetch = jest.fn().mockResolvedValueOnce(responseMock);

    render(<App />);

    await waitForElementToBeRemoved(() => screen.getByRole('heading', { name: 'Loading...' }));
    const $items = document.querySelectorAll('li');

    let amount = 3;
    let total = parseFloat((599.99 * 1 + 499.99 * 1 + 699.99 * 1).toFixed(2));
    expect(screen.getByRole('link', { name: `${amount}` })).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(amount);
    expect(screen.getByRole('total price', { name: `$${total}` })).toBeInTheDocument();

    userEvent.click(within($items[0]).getByRole('button', { name: 'Remove' }));

    amount = 2;
    total = parseFloat((599.99 * 0 + 499.99 * 1 + 699.99 * 1).toFixed(2));
    expect(screen.getByRole('link', { name: `${amount}` })).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(amount);
    expect(screen.getByRole('total price', { name: `$${total}` })).toBeInTheDocument();

    userEvent.click(within($items[1]).getByRole('button', { name: 'Remove' }));

    amount = 1;
    total = parseFloat((599.99 * 0 + 499.99 * 0 + 699.99 * 1).toFixed(2));
    expect(screen.getByRole('link', { name: `${amount}` })).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(amount);
    expect(screen.getByRole('total price', { name: `$${total}` })).toBeInTheDocument();

    userEvent.click(within($items[2]).getByRole('button', { name: 'Remove' }));

    amount = 0;
    total = parseFloat((599.99 * 0 + 499.99 * 0 + 699.99 * 0).toFixed(2));
    expect(screen.getByRole('link', { name: `${amount}` })).toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(amount);
    expect(screen.getByRole('total price', { name: `$${total}` })).toBeInTheDocument();
  });
});
