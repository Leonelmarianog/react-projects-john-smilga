import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../styles';

const Container = styled.form`
  ${Card}

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  max-width: 500px;
  width: 80%;
`;

const Label = styled.label`
  font-size: calc(var(--font-size-base) * 0.65);
  font-weight: bolder;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
  margin-bottom: 1em;
  text-align: center;

  @media screen and (min-width: 420px) {
    font-size: calc(var(--font-size-base) * 0.85);
  }

  @media screen and (min-width: 768px) {
    font-size: calc(var(--font-size-base) * 1);
  }
`;

const Input = styled.input`
  font-size: calc(var(--font-size-base) * 0.65);
  padding: 0.5em 1em;

  @media screen and (min-width: 420px) {
    font-size: calc(var(--font-size-base) * 0.85);
  }

  @media screen and (min-width: 768px) {
    font-size: calc(var(--font-size-base) * 1);
  }
`;

const Searchbar = () => (
  <Container aria-label='search bar'>
    <Label htmlFor='search-term'>Search your favorite cocktail</Label>
    <Input type='text' id='search-term' />
  </Container>
);

export default Searchbar;
