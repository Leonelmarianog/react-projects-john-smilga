import React from 'react';
import styled from 'styled-components';
import Searchbar from '../components/Searchbar';
import Cocktails from '../components/Cocktails';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4em 0;
`;

const Home = () => (
  <Container>
    <Searchbar />
    <Cocktails />
  </Container>
);

export default Home;
