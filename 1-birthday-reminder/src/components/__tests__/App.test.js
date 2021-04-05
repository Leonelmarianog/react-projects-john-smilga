import App from '../App';
import { screen, render } from '@testing-library/react';

describe('App', () => {
  it('Renders the app', () => {
    render(<App />);

    screen.debug();
  });
});
