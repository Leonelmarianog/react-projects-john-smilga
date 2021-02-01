import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Header from './Header';
import Slider from './Slider';

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
  margin: 2em 0;
`;

const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <Container>
      <Header title='Reviews' />
      <Main>
        <Slider />
      </Main>
    </Container>
  </React.Fragment>
);

export default App;
