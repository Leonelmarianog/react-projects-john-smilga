import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Navbar from './Navbar';

const Container = styled.div`
  min-height: 100vh;
`;

const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <Container>
      <Navbar />
    </Container>
  </React.Fragment>
);

export default App;
