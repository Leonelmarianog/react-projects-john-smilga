import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ButtonGroup from '../ButtonGroup';

const companiesDataMock = ['Amazon', 'Google', 'Youtube'];
const getIndexCallbackMock = jest.fn();

describe('ButtonGroup', () => {
  it('Renders correctly', () => {
    render(<ButtonGroup companies={companiesDataMock} />);

    expect(screen.getByRole('button', { name: 'Amazon' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Google' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Youtube' })).toBeInTheDocument();
  });

  it('Calls onClick callback handlers', () => {
    render(<ButtonGroup companies={companiesDataMock} getIndexCallback={getIndexCallbackMock} />);

    userEvent.click(screen.getByRole('button', { name: 'Amazon' }));
    userEvent.click(screen.getByRole('button', { name: 'Google' }));
    userEvent.click(screen.getByRole('button', { name: 'Youtube' }));

    expect(getIndexCallbackMock).toHaveBeenCalledTimes(3);
  });
});
