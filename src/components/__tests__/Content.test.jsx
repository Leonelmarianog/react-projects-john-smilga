import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Content from '../Content';

const jobMock = {
  id: 1,
  title: 'Front End Developer',
  company: 'Amazon',
  dates: '2015 - Present',
  duties: ['Maintenance', 'Reviewing', 'Designing'],
};

describe('Content', () => {
  it('Renders Correctly', () => {
    render(<Content {...jobMock} />);

    expect(screen.getByRole('heading', { name: jobMock.title })).toBeInTheDocument();
    expect(screen.getByText(jobMock.company)).toBeInTheDocument();
    expect(screen.getByText(jobMock.dates)).toBeInTheDocument();

    for (let i = 0; i < jobMock.duties.length; i += 1) {
      expect(screen.getByText(jobMock.duties[i])).toBeInTheDocument();
    }
  });
});
