import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Header from './navigation/Header';
import Hero from './Hero';
import Overlay from './Overlay';
import { AppProvider } from './context/GlobalContext';

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
        {/* <Overlay />
        <Navbar />
        <Submenu />
        <Sidebar data={sidebarData} /> */}
        <Header />
        <Hero />
      </Container>
    </AppProvider>
  </React.Fragment>
);

export default App;
