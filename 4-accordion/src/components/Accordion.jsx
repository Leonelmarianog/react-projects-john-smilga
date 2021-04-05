import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.article`
  background-color: var(--clr-white-1);
  padding: 1.5em;
  border-radius: 5px;
  box-shadow: 0.15em 0.15em 0.5em 0.15em #00000025;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > p {
    margin-top: 1.25em;
  }
`;

const Button = styled.button`
  background-color: var(--clr-purple-1);
  color: var(--clr-purple-3);
  height: 1.5em;
  width: 1.5em;
  border: none;
  border-radius: 50%;
  font-weight: bold;
  font-size: calc(var(--font-size-base) * 1.5);
  margin-left: 1em;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: var(--clr-purple-2);
    color: var(--clr-white-1);
  }
`;

const Accordion = ({ title, answer }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container>
      <div>
        <h3>{title}</h3>
        <span>
          <Button onClick={() => setIsVisible(!isVisible)}>{isVisible ? '-' : '+'}</Button>
        </span>
      </div>
      {isVisible && <p>{answer}</p>}
    </Container>
  );
};

export default Accordion;
