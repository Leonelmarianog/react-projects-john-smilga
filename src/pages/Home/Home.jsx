import React, { useState } from 'react';
import styled from 'styled-components';
import { useFetchOnChange } from '../../hooks/useFetchOnChange';
import { Searchbar, Cocktails } from './components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em 0;
`;

const Home = () => {
  const [value, setValue] = useState('');
  const { data, loading, error } = useFetchOnChange(value, 500);

  return (
    <Container aria-label="home page">
      <Searchbar value={value} setValueCallback={setValue} />
      {data && <Cocktails cocktails={data} />}
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
    </Container>
  );
};

export default Home;
