import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import TourList from './TourList';

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <Container>
      <TourList />
    </Container>
  </React.Fragment>
);

export default App;
