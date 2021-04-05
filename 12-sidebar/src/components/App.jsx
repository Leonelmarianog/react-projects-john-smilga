import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Home from './Home';
import Sidebar from './Sidebar';
import { AppProvider } from './GlobalContext';
import HamburguerButton from './HamburguerButton';
import Overlay from './Overlay';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
`;

const App = () => (
  <React.Fragment>
    <AppProvider>
      <GlobalStyles />
      <Container>
        <Overlay />
        <HamburguerButton />
        <Home />
        <Sidebar />
      </Container>
    </AppProvider>
  </React.Fragment>
);

export default App;
