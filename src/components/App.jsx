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
  const [person, setPerson] = useState(peopleData[0]);

  return (
    <React.Fragment>
      <GlobalStyles />
      <Container>
        <Title>Our Reviews</Title>
        <Card {...person} />
      </Container>
    </React.Fragment>
  );
};

export default App;
