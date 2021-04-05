import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ColorsContainer from '../ColorsContainer';

const colorsMock = [
  { hex: '444', weight: '100' },
  { hex: '333', weight: '90' },
  { hex: '222', weight: '80' },
];

describe('ColorsContainer', () => {
  it('Renders a specified amount of colors correctly', () => {
    render(<ColorsContainer colors={colorsMock} />);

    expect(screen.getAllByRole('article')).toHaveLength(colorsMock.length);

    for (let i = 0; i < colorsMock.length; i += 1) {
      expect(screen.getByText(`#${colorsMock[i].hex}`)).toBeInTheDocument();
      expect(screen.getByText(`${colorsMock[i].weight}%`)).toBeInTheDocument();
    }
  });
});
