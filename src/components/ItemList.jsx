import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import items from '../data';

const Container = styled.ul`
  list-style: none;

  & > li {
    margin-bottom: 4em;
  }

  & > li:last-child {
    margin-bottom: 0;
  }
`;

const ItemList = () => (
  <Container>
    {items.map((item) => (
      <li key={item.id}>
        <Item {...item} />
      </li>
    ))}
  </Container>
);

export default ItemList;
