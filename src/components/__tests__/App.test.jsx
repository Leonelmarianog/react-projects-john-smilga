import React from 'react';
import { screen, render, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom';
import fs from 'fs';
import path from 'path';
import App from '../App';

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

    render(<App />);

    expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Loading...' })).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.getByRole('heading', { name: 'Loading...' }));
    expect(screen.getByRole('article', { name: 'tabs' })).toBeInTheDocument();
  });
});
