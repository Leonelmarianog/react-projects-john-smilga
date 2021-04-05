import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Button from '../Button.jsx';

describe('Button', () => {
  it('Renders correctly', () => {
    render(<Button callback={() => {}}>Click Me!</Button>);

    expect(screen.getByRole('button', { name: /Click Me!/i })).toBeInTheDocument();
  });

  it('Works', () => {
    const callbackMock = jest.fn();

    render(<Button callback={callbackMock}>Click Me!</Button>);

    userEvent.click(screen.getByRole('button', { name: /Click Me!/i }));

    expect(callbackMock).toHaveBeenCalledTimes(1);
  });
});
