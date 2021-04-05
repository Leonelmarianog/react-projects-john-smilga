import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import AccordionContainer from '../AccordionContainer';
import questionsData from '../../data/questions';

describe('AccordionContainer', () => {
  it('Renders correctly', () => {
    render(<AccordionContainer />);

    const accordionQuantity = 5;
    const $accordions = screen.getAllByRole('listitem');
    const $buttons = screen.getAllByRole('button', { name: '+' });
    let index = 0;

    expect(
      screen.getByRole('heading', { name: 'Questions and Answers About Login' })
    ).toBeInTheDocument();
    expect($accordions).toHaveLength(accordionQuantity);

    while (index !== $accordions.length) {
      expect(screen.getByRole('heading', { name: questionsData[index].title })).toBeInTheDocument();
      expect(screen.queryByText(questionsData[index].answer)).not.toBeInTheDocument();

      userEvent.click($buttons[index]);
      expect(screen.getByText(questionsData[index].answer)).toBeInTheDocument();

      userEvent.click($buttons[index]);
      expect(screen.queryByText(questionsData[index].answer)).not.toBeInTheDocument();

      index += 1;
    }
  });
});
