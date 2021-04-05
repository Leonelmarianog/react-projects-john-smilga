import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Flash from '../Flash';

describe('Flash', () => {
  it('Renders correctly', () => {
    const { rerender } = render(<Flash message='Something Succeded' type='success' />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Something Succeded' })
    ).toBeInTheDocument();

    rerender(<Flash message='Something Failed' type='danger' />);

    expect(screen.getByRole('heading', { level: 1, name: 'Something Failed' })).toBeInTheDocument();
  });

  it('Calls the setAlert callback function after a specific amount of time', async () => {
    const setAlertCallbackMock = jest.fn();
    render(<Flash message='My message' type='success' setAlertCallback={setAlertCallbackMock} />);

    await waitFor(() => expect(setAlertCallbackMock).toHaveBeenCalledTimes(1), { timeout: 5000 });
  });
});
