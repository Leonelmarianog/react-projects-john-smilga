import React from 'react';
import styled from 'styled-components';
import { Searchbar, Cocktails } from './components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 4em 0;
`;

const Home = () => (
  <Container aria-label='home page'>
    <Searchbar />
    <Cocktails />
  </Container>
);

export default Home;
