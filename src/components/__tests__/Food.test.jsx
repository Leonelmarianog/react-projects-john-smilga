import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Food from '../Food';

const foodDataMock = {
  id: 1,
  title: 'buttermilk pancakes',
  category: 'breakfast',
  price: 15.99,
  img: './images/item-1.jpeg',
  desc:
    "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.",
};

describe('Food', () => {
  it('Renders correctly', () => {
    render(<Food {...foodDataMock} />);

    screen.debug();

    expect(screen.getByRole('img', { name: foodDataMock.title })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: foodDataMock.title }).src).toContain('.jpeg');
    expect(screen.getByRole('heading', { name: foodDataMock.title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '$' + foodDataMock.price })).toBeInTheDocument();
    expect(screen.getByText(foodDataMock.desc)).toBeInTheDocument();
  });
});
