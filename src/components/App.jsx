import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Card from './Card';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2em;
`;

const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <Container>
      <Card />
    </Container>
  </React.Fragment>
);

export default App;
