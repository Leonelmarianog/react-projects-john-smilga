import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App', () => {
  it('Renders correctly', () => {
    render(<App />);

    screen.debug();
  });
});
