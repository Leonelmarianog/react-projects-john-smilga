import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Title from './Title';
import Tabs from './Tabs';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2em;

  & > *:first-child {
    margin-bottom: 2em;
  }
`;

const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <Main>
      <Title>Experience</Title>
      <Tabs />
    </Main>
  </React.Fragment>
);

export default App;
