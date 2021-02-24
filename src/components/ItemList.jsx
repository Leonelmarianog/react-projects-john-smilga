import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import useGlobalContext from '../hooks/useGlobalContext';

const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > li {
    margin-bottom: 4em;

    @media screen and (min-width: 768px) {
      width: 70%;
      max-width: 1200px;
      margin-bottom: 2em;
    }
  }

  & > li:last-child {
    margin-bottom: 0;
  }
`;

const ItemList = () => {
  const { data: items, loading, error } = useGlobalContext();

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error.status && <h1>{error.message}</h1>}
      {items &&
        items.map((item) => (
          <li key={item.id}>
            <Item {...item} />
          </li>
        ))}
    </Container>
  );
};

export default ItemList;
