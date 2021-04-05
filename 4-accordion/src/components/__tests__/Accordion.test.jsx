import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Accordion from '../Accordion';

const questionDataMock = {
  id: 1,
  title: 'Do I have to allow the use of cookies?',
  answer:
    'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
};

describe('Accordion', () => {
  it('Renders correctly', () => {
    render(<Accordion {...questionDataMock} />);

    screen.debug();

    expect(screen.getByRole('heading', { name: questionDataMock.title })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
  });

  it('hides and shows content', () => {
    render(<Accordion {...questionDataMock} />);

    expect(screen.queryByText(questionDataMock.answer)).not.toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: '+' }));

    expect(screen.getByText(questionDataMock.answer)).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: '-' }));

    expect(screen.queryByText(questionDataMock.answer)).not.toBeInTheDocument();
  });
});
