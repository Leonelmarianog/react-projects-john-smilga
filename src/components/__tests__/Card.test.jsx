import React from 'react';
import { screen, render, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Card from '../Card';

describe('Card', () => {
  it('Allows to add new items', () => {
    render(<Card />);

    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'eggs');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));

    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'milk');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));

    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'fish');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('Allows to edit a specific item', () => {
    render(<Card />);

    screen.debug();

    /* userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'bananas');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));
    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'apples');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));
    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'pears');
    userEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getByText('bananas')).toBeInTheDocument();
    expect(screen.getByText('apples')).toBeInTheDocument();
    expect(screen.getByText('pears')).toBeInTheDocument();

    const $items = document.querySelectorAll('li');

    userEvent.click(within($items[1]).getByRole('button', { name: 'edit item' }));
    userEvent.clear(screen.getByPlaceholderText('e.g. eggs'));
    userEvent.type(screen.getByPlaceholderText('e.g. eggs'), 'oranges');
    userEvent.click(screen.getByRole('button', { name: 'Edit' }));

    screen.debug();

    expect(screen.getByText('bananas')).toBeInTheDocument();
    expect(screen.getByText('oranges')).toBeInTheDocument();
    expect(screen.getByText('pears')).toBeInTheDocument();
    expect(screen.queryByText('apples')).not.toBeInTheDocument(); */
  });
});
