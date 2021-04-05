import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Header from './Header';
import Slider from './Slider';
import peopleData from '../data/people';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2em;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
`;

const App = () => {
  const [people, setPeople] = useState(peopleData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < 0) {
      setIndex(people.length - 1);
    }
    if (index > people.length - 1) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setIndex(index + 1);
    }, 5000);

    return () => clearInterval(timerId);
  });

  return (
    <React.Fragment>
      <GlobalStyles />
      <Container>
        <Header title='Reviews' />
        <Main>
          <Slider people={people} index={index} setIndexCallback={setIndex} />
        </Main>
      </Container>
    </React.Fragment>
  );
};

export default App;

/*

props = {
  people: {
    people: []
  }
}

*/
