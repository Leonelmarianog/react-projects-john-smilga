import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from '../Title';

describe('Title', () => {
  it('Renders correctly', () => {
    render(<Title>This is the title</Title>);

    expect(screen.getByRole('heading', { name: 'This is the title' })).toBeInTheDocument();
  });
});
