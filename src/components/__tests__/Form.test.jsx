import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Form from '../Form';

describe('Form', () => {
  it('Renders correctly', () => {
    render(<Form />);

    expect(screen.getByPlaceholderText('#ffd000')).toBeInTheDocument();
    expect(screen.getByText('Please insert a valid CSS color')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Generate' })).toBeInTheDocument();
  });

  it('Allows users to generate a color set', () => {
    const setColorsCallbackMock = jest.fn();

    render(<Form setColorsCallback={setColorsCallbackMock} />);

    userEvent.type(screen.getByPlaceholderText('#ffd000'), '#222');
    userEvent.click(screen.getByRole('button', { name: 'Generate' }));

    expect(setColorsCallbackMock).toHaveBeenCalledTimes(1);
    expect(setColorsCallbackMock).toHaveBeenCalledWith(expect.any(Array));
  });

  it('Alerts users when trying to genereate colors with invalid CSS colors', () => {
    const setColorsCallbackMock = jest.fn();

    render(<Form setColorsCallback={setColorsCallbackMock} />);

    userEvent.type(screen.getByPlaceholderText('#ffd000'), 'Clearly not a valid CSS input');
    userEvent.click(screen.getByRole('button', { name: 'Generate' }));

    expect(screen.getByText('Input not valid!')).toBeInTheDocument();
    expect(screen.queryByText('Please insert a valid CSS color')).not.toBeInTheDocument();

    userEvent.type(screen.getByPlaceholderText('#ffd000'), 'Typing again!');

    expect(screen.queryByText('Input not valid!')).not.toBeInTheDocument();
    expect(screen.getByText('Please insert a valid CSS color')).toBeInTheDocument();
  });
});
