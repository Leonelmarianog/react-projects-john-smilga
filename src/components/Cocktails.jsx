import React from 'react';
import styled from 'styled-components';
import { List } from '../styles';
import Cocktail from './Cocktail';

const Container = styled.ul`
  ${List}

  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1500px;
  width: 100%;
  margin: 4em auto 0 auto;

  & > li {
    margin-bottom: 2em;
  }

  & > li:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2em 2em;

    & > li {
      margin: 0 auto;
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Cocktails = () => (
  <Container>
    <li>
      <Cocktail />
    </li>
    <li>
      <Cocktail />
    </li>
    <li>
      <Cocktail />
    </li>
    <li>
      <Cocktail />
    </li>
    <li>
      <Cocktail />
    </li>
    <li>
      <Cocktail />
    </li>
    <li>
      <Cocktail />
    </li>
    <li>
      <Cocktail />
    </li>
    <li>
      <Cocktail />
    </li>
    <li>
      <Cocktail />
    </li>
    <li>
      <Cocktail />
    </li>
    <li>
      <Cocktail />
    </li>
  </Container>
);

export default Cocktails;
