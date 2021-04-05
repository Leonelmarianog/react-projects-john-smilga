import React from 'react';
import { screen, render, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import fs from 'fs';
import path from 'path';
import Tabs from '../Tabs';

beforeAll(() => {
  global.fetch = jest.fn();
});

afterEach(() => jest.clearAllMocks());

describe('Tabs', () => {
  it('Renders correctly', async () => {
    const jobsDataMock = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, './fixtures/jobs.json'), 'utf-8')
    );
    const responseMock = {
      ok: true,
      json: jest.fn().mockImplementationOnce(() => Promise.resolve(jobsDataMock)),
    };
    global.fetch.mockImplementationOnce(() => Promise.resolve(responseMock));

    render(<Tabs />);

    expect(screen.getByRole('heading', { name: 'Loading...' })).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.getByRole('heading', { name: 'Loading...' }));
    expect(screen.getByRole('button', { name: jobsDataMock[0].company })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: jobsDataMock[0].title, level: 1 })
    ).toBeInTheDocument();
  });

  it('Shows a warning message if data fetching returns no results', async () => {
    const jobsDataMock = [];
    const responseMock = {
      ok: true,
      json: jest.fn().mockImplementationOnce(() => Promise.resolve(jobsDataMock)),
    };
    global.fetch.mockImplementationOnce(() => Promise.resolve(responseMock));

    render(<Tabs />);

    expect(screen.getByRole('heading', { name: 'Loading...' })).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.getByRole('heading', { name: 'Loading...' }));
    expect(screen.getByRole('heading', { name: 'No results' })).toBeInTheDocument();
  });

  it('Shows a warning message if data fetching fails', async () => {
    const responseMock = {
      ok: false,
    };
    global.fetch.mockImplementationOnce(() => Promise.resolve(responseMock));

    render(<Tabs />);

    expect(screen.getByRole('heading', { name: 'Loading...' })).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.getByRole('heading', { name: 'Loading...' }));
    expect(
      screen.getByRole('heading', { name: 'Oops, something happened, try again later' })
    ).toBeInTheDocument();
  });

  it('Allows users to switch between tabs', async () => {
    const jobsDataMock = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, './fixtures/jobs.json'), 'utf-8')
    );
    const responseMock = {
      ok: true,
      json: jest.fn().mockImplementationOnce(() => Promise.resolve(jobsDataMock)),
    };
    global.fetch.mockImplementationOnce(() => Promise.resolve(responseMock));

    render(<Tabs />);

    expect(screen.getByRole('heading', { name: 'Loading...' })).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.getByRole('heading', { name: 'Loading...' }));

    userEvent.click(screen.getByRole('button', { name: 'BIGDROP' }));

    expect(
      screen.getByRole('heading', { name: jobsDataMock[1].title, level: 1 })
    ).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: 'CUKER' }));

    expect(
      screen.getByRole('heading', { name: jobsDataMock[2].title, level: 1 })
    ).toBeInTheDocument();
  });
});
