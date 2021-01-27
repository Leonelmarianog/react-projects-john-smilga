import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Title from './Title';
import Card from './Card';
import peopleData from '../data/people';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2em;
`;

const App = () => {
  const [people, setPeople] = useState(peopleData);
  const [index, setIndex] = useState(0);
  const person = people[index];

  const checkIndex = (number) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return checkIndex(newIndex);
    });
  };

  const previousPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return checkIndex(newIndex);
    });
  };

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);

    if (randomIndex === index) {
      randomIndex = index + 1;
    }

    setIndex(checkIndex(randomIndex));
  };

  return (
    <React.Fragment>
      <GlobalStyles />
      <Container>
        <Title>Our Reviews</Title>
        <Card
          {...person}
          nextPersonCallback={nextPerson}
          previousPersonCallback={previousPerson}
          randomPersonCallback={randomPerson}
        />
      </Container>
    </React.Fragment>
  );
};

export default App;
