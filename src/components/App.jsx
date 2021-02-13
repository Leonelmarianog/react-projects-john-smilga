import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Hero from './Hero';
import Overlay from './Overlay';
import { AppProvider } from './GlobalContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

const App = () => (
  <React.Fragment>
    <AppProvider>
      <GlobalStyles />
      <Container>
        <Overlay />
        <Navbar />
        <Sidebar />
        <Hero />
      </Container>
    </AppProvider>
  </React.Fragment>
);

export default App;
