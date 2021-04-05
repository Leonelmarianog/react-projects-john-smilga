import React from 'react';
import { screen, render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('Renders', () => {
    render(<App />);

    screen.debug();
  });
});
