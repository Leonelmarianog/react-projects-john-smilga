import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { cocktailsAPI } from '../../api/api';
import { fromApiToEntity } from '../../mappers/mappers';
import { Searchbar, Cocktails } from './components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em 0;
`;

const Home = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (value) => {
      setData(null);
      setLoading(true);
      setError(null);

      try {
        const { drinks: cocktailsData } = await cocktailsAPI.getByName(value);

        if (!cocktailsData) {
          throw new Error('No results');
        }

        const cocktails = cocktailsData.map((drinkData) =>
          fromApiToEntity(drinkData)
        );

        setData(cocktails);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        setData(null);
      }
    };

    getData(value);
  }, [value]);

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
