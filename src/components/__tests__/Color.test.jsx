import React from 'react';
import { screen, render, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Color from '../Color';

describe('Color', () => {
  it('Renders correctly', () => {
    const colorHexMock = '#222';
    const colorWeightMock = '100%';

    render(<Color colorHex={colorHexMock} colorWeight={colorWeightMock} />);

    expect(screen.getByText(colorHexMock)).toBeInTheDocument();
    expect(screen.getByText(colorWeightMock)).toBeInTheDocument();
    expect(screen.queryByText('Copied to clipboard!')).not.toBeInTheDocument();
  });

  it('Allows users to copy a color to the clipboard', () => {
    Object.assign(global.navigator, {
      clipboard: {
        writeText: jest.fn(),
      },
    });
    const colorHexMock = '#222';
    const colorWeightMock = '100%';

    render(<Color colorHex={colorHexMock} colorWeight={colorWeightMock} />);

    userEvent.click(screen.getByRole('article'));

    expect(global.navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
    expect(global.navigator.clipboard.writeText).toHaveBeenCalledWith(colorHexMock);
  });

  it('Shows an alert message for a few seconds when copying a color to the clipboard', async () => {
    Object.assign(global.navigator, {
      clipboard: {
        writeText: jest.fn(),
      },
    });
    const colorHexMock = '#222';
    const colorWeightMock = '100%';

    render(<Color colorHex={colorHexMock} colorWeight={colorWeightMock} />);

    userEvent.click(screen.getByRole('article'));

    expect(screen.getByText('Copied to clipboard!')).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText('Copied to clipboard!'), {
      timeout: 5000,
    });
  });
});
