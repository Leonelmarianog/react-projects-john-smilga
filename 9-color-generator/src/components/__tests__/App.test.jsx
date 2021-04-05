import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App', () => {
  it('Renders correctly', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1, name: 'Color Generator' })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('#ffd000')).toBeInTheDocument();
    expect(screen.getByText('Please insert a valid CSS color')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Generate' })).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(21);
  });
});
