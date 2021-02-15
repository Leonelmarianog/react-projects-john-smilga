import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Hero from './Hero';
import Overlay from './Overlay';
import Submenu from './Submenu';
import { AppProvider } from './GlobalContext';
import { sidebarLinks, productsCategories } from '../data/data';

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
        <Submenu productsCategories={productsCategories} />
        <Sidebar sidebarLinks={sidebarLinks} />
        <Hero />
      </Container>
    </AppProvider>
  </React.Fragment>
);

export default App;
