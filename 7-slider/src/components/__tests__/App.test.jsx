import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

jest.setTimeout(10000);

describe('App', () => {
  it('Renders correctly', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1, name: 'Reviews' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: 'maria ferguson' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: 'maria ferguson' })).toBeVisible();
  });

  it('Moves to the next or previous slide', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1, name: 'maria ferguson' })).toBeVisible();

    userEvent.click(screen.getByRole('button', { name: 'previous' }));
    expect(screen.getByRole('heading', { level: 1, name: 'susan andersen' })).toBeVisible();

    userEvent.click(screen.getByRole('button', { name: 'next' }));
    expect(screen.getByRole('heading', { level: 1, name: 'maria ferguson' })).toBeVisible();

    userEvent.click(screen.getByRole('button', { name: 'next' }));
    expect(screen.getByRole('heading', { level: 1, name: 'john doe' })).toBeVisible();

    userEvent.click(screen.getByRole('button', { name: 'next' }));
    expect(screen.getByRole('heading', { level: 1, name: 'peter smith' })).toBeVisible();

    userEvent.click(screen.getByRole('button', { name: 'next' }));
    expect(screen.getByRole('heading', { level: 1, name: 'susan andersen' })).toBeVisible();

    userEvent.click(screen.getByRole('button', { name: 'next' }));
    expect(screen.getByRole('heading', { level: 1, name: 'maria ferguson' })).toBeVisible();

    userEvent.click(screen.getByRole('button', { name: 'previous' }));
    expect(screen.getByRole('heading', { level: 1, name: 'susan andersen' })).toBeVisible();
  });

  it('Moves to the next slide every 5 seconds', async () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1, name: 'maria ferguson' })).toBeVisible();

    await waitFor(
      () => {
        expect(screen.getByRole('heading', { level: 1, name: 'john doe' })).toBeVisible();
      },
      { timeout: 10000 }
    );
  });
});
