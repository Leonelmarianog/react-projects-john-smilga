import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import List from '../List';

describe('List', () => {
  it('Renders the amount of birthdays', () => {
    render(<List />);

    screen.debug();

    expect(screen.getByRole('heading', { name: /5 birthdays/i })).toBeInTheDocument();
  });

  it("Renders people's data", () => {
    render(<List />);

    screen.debug();

    const $images = screen.getAllByRole('img');

    expect($images).toHaveLength(5);
    for (let i = 0; i < $images.length; i += 1) {
      expect($images[i].src).toContain('.jpg');
    }
  });

  it('Removes all birthdays', () => {
    render(<List />);

    screen.debug();

    let $images = screen.getAllByRole('img');

    expect($images).toHaveLength(5);

    userEvent.click(screen.getByRole('button', { name: /Delete all/i }));

    screen.debug();

    $images = screen.queryAllByRole('img');

    expect($images).toHaveLength(0);
  });
});
