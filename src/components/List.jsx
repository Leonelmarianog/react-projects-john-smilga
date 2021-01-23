import React, { useState } from 'react';
import Card from './Card';
import peopleData from '../data/people';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 225px;
  background-color: var(--clr-white);
  padding: 1em;
  border-radius: 5px;
  box-shadow: 0.15em 0.15em 1em 0.5em #00000025;

  @media (min-width: 576px) {
    width: 300px;
  }

  @media (min-width: 768px) {
    width: 30vw;
    min-width: 350px;
  }

  & > h2 {
    margin-bottom: 0.5em;
    color: var(--clr-black);
  }

  & > button {
    background-color: var(--clr-pink);
    color: var(--clr-white);
    font-size: var(--font-size-base);
    font-weight: bold;
    border: none;
    border-radius: 5px;
    padding: 0.5em 1em;
    margin-top: 0.5em;
    transition: filter 0.2s;
    cursor: pointer;

    &:hover {
      filter: brightness(110%);
    }
  }
`;

const List = () => {
  const [people, setPeople] = useState(peopleData);

  return (
    <Container>
      <h2>{people.length} birthdays</h2>
      {people.map((person) => (
        <Card key={person.id} {...person} />
      ))}
      <button onClick={() => setPeople([])}>Delete All</button>
    </Container>
  );
};

export default List;
