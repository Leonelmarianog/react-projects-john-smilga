import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import AccordionContainer from './AccordionContainer';

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
      <AccordionContainer />
    </Container>
  </React.Fragment>
);

export default App;
