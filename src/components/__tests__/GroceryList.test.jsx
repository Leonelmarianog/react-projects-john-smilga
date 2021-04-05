import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import GroceryList from '../GroceryList';

describe('GroceryList', () => {
  it('Renders a specific amount of items', () => {
    const groceries = [
      { id: 1, name: 'eggs' },
      { id: 2, name: 'milk' },
      { id: 3, name: 'fish' },
    ];

    render(
      <GroceryList
        groceries={groceries}
        deleteGroceryCallback={() => {}}
        prepareEditCallback={() => {}}
      />
    );

    expect(screen.getAllByRole('listitem')).toHaveLength(3);

    for (let i = 0; i < groceries.length; i += 1) {
      expect(screen.getByText(groceries[i].name)).toBeInTheDocument();
    }
  });
});
