import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Header from './Header';

const Container = styled.div``;

const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <Container>
      <Header />
    </Container>
  </React.Fragment>
);

export default App;
