import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App', () => {
  it('Renders correctly', () => {
    render(<App />);

    screen.debug();
    expect(screen.getByRole('heading', { name: 'Our Menu' })).toBeInTheDocument();
    expect(screen.getByRole('list', { name: 'menubar' })).toBeInTheDocument();
    expect(screen.getByRole('list', { name: 'foods' })).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(9);
  });

  it('Has a working menu', () => {
    render(<App />);

    let $items = screen.getAllByRole('article');

    userEvent.click(screen.getByRole('button', { name: 'breakfast' }));

    $items = screen.getAllByRole('article');

    expect($items).toHaveLength(3);

    userEvent.click(screen.getByRole('button', { name: 'lunch' }));

    $items = screen.getAllByRole('article');

    expect($items).toHaveLength(3);

    userEvent.click(screen.getByRole('button', { name: 'shakes' }));

    $items = screen.getAllByRole('article');

    expect($items).toHaveLength(3);

    userEvent.click(screen.getByRole('button', { name: 'All' }));

    $items = screen.getAllByRole('article');

    expect($items).toHaveLength(9);
  });
});
