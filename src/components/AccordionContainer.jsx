import React, { useState } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';
import questionsData from '../data/questions';

const Container = styled.article`
  background-color: var(--clr-white-1);
  padding: 2em;
  border-radius: 5px;
  box-shadow: 0.15em 0.15em 0.5em 0.15em #00000025;
  width: 285px;
  margin: 2em;

  @media screen and (min-width: 576px) {
    width: 385px;
  }

  @media screen and (min-width: 768px) {
    width: 80vw;
    min-width: 485px;
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 2em;

    & > ul > *:first-child {
      margin-top: 0;
    }
  }

  & > ul {
    list-style: none;

    & > * {
      margin-top: 2em;
    }
  }
`;

const AccordionContainer = () => {
  const [questions, setQuestions] = useState(questionsData);

  return (
    <Container>
      <h1>Questions and Answers About Login</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <Accordion {...question} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default AccordionContainer;
