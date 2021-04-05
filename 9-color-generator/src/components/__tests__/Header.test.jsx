import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';

describe('Header', () => {
  it('Renders correctly', () => {
    render(<Header title='This is the title' />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'This is the title' })
    ).toBeInTheDocument();
  });
});
