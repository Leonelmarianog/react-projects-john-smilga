import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Categories from '../Categories';

const categoriesMock = ['All', 'Breakfast', 'Lunch', 'Shakes'];
const filterFoodsCallbackMock = jest.fn();

describe('Categories', () => {
  it('Renders correctly', () => {
    render(<Categories categories={categoriesMock} />);

    screen.debug();

    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Breakfast' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Lunch' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Shakes' })).toBeInTheDocument();
  });

  it('Calls the onClick callback handlers', () => {
    render(
      <Categories categories={categoriesMock} filterFoodsCallback={filterFoodsCallbackMock} />
    );

    userEvent.click(screen.getByRole('button', { name: 'All' }));
    userEvent.click(screen.getByRole('button', { name: 'Breakfast' }));
    userEvent.click(screen.getByRole('button', { name: 'Lunch' }));
    userEvent.click(screen.getByRole('button', { name: 'Shakes' }));

    expect(filterFoodsCallbackMock).toHaveBeenCalledTimes(4);
  });
});
