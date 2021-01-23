import React from 'react';
import List from './List';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;

  @media screen and (orientation: landscape) {
    padding: 2em;
  }
`;

const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <Container>
      <List />
    </Container>
  </React.Fragment>
);

export default App;
