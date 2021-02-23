import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Header from './Header';
import Bag from './Bag';

const Container = styled.div``;

const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <Container>
      <Header />
      <main>
        <Bag />
      </main>
    </Container>
  </React.Fragment>
);

export default App;
